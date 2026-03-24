import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, MessageSquare } from "lucide-react";
import { cn } from "@lib/utils";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { RightSidebarProvider } from "@/components/ui/right-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import { useMeetingsStore } from "@/stores/meetings-store";
import type { CommitmentItem } from "../data/mock-commitments";
import PageShell from "@/components/ui/page-shell";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaCommitments } from "@/data/content-resolver";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const filters = ["All", "Open", "Completed"] as const;
type Filter = (typeof filters)[number];

const CommitmentsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter>("All");
  const persona = usePersonaStore((s) => s.persona);
  const [commitments, setCommitments] = useState(
    getPersonaCommitments(persona),
  );

  useEffect(() => {
    setCommitments(getPersonaCommitments(persona));
  }, [persona]);
  const [showModal, setShowModal] = useState(false);
  const [newCommitmentText, setNewCommitmentText] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [chatWidth, setChatWidth] = useState(380);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useRegisterSidebar({
    position: SidebarPosition.RIGHT,
    open: showChat,
    width: chatWidth,
  });
  const setSelectedMeeting = useMeetingsStore((s) => s.setSelectedMeeting);

  useEffect(() => {
    if (showModal && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showModal]);

  const filtered = commitments.filter((c) => {
    if (filter === "Open") return !c.completed;
    if (filter === "Completed") return c.completed;
    return true;
  });

  const toggleItem = (id: string) => {
    setCommitments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, completed: !c.completed } : c)),
    );
  };

  const handleCreate = () => {
    const text = newCommitmentText.trim();
    if (!text) return;

    const newItem: CommitmentItem = {
      id: `new-${Date.now()}`,
      title: text,
      meeting: "",
      meetingId: "",
      meetingDate: "",
      dueDate: "",
      completed: false,
    };

    setCommitments((prev) => [newItem, ...prev]);
    setNewCommitmentText("");
    setShowModal(false);
  };

  const commitmentList = (
    <div className="space-y-[3px]">
      {filtered.map((c) => (
        <div
          key={c.id}
          className="flex items-center gap-4 py-2"
        >
          <button
            onClick={() => toggleItem(c.id)}
            className={cn(
              "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors bg-transparent cursor-pointer",
              c.completed
                ? "bg-muted-foreground border-muted-foreground"
                : "border-border hover:border-muted-foreground",
            )}
          >
            {c.completed && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                "text-sm",
                c.completed
                  ? "line-through text-muted-foreground/50"
                  : "text-foreground",
              )}
            >
              {c.title}
            </p>
            {c.meeting && (
              <button
                type="button"
                onClick={() => {
                  setSelectedMeeting(c.meetingId);
                  navigate("/meeting-detail");
                }}
                className={cn(
                  "inline-flex items-center gap-1 mt-0.5 text-xs underline decoration-1 underline-offset-2 border-none bg-transparent cursor-pointer p-0 transition-colors",
                  c.completed
                    ? "text-muted-foreground/50 hover:text-muted-foreground/50"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c.meeting} · {c.meetingDate}
                <ArrowUpRight
                  size={11}
                  className="shrink-0"
                  strokeWidth={2}
                />
              </button>
            )}
          </div>
          {c.dueDate && (
            <span
              className={cn(
                "text-sm shrink-0",
                c.completed
                  ? "text-muted-foreground/50"
                  : "text-muted-foreground",
              )}
            >
              {c.dueDate}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex overflow-hidden h-full">
    <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
    <div className="relative">
      {/* Fixed top-right action bar */}
      <div
        className="absolute top-[12px] right-5 z-10 flex items-center gap-1"
      >
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 px-2.5 h-8 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors bg-transparent border-none cursor-pointer"
        >
          <Plus className="size-3.5" />
          Add
        </button>

        <Tabs
          value={filter}
          onValueChange={(value) => setFilter(value as Filter)}
        >
          <TabsList>
            {filters.map((f) => (
              <TabsTrigger key={f} value={f}>
                {f}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <button
          type="button"
          onClick={() => setShowChat((prev) => !prev)}
          className={cn(
            "flex items-center justify-center size-8 rounded-md transition-colors border-none cursor-pointer",
            showChat
              ? "bg-accent text-muted-foreground"
              : "bg-transparent text-muted-foreground/50 hover:text-muted-foreground hover:bg-accent",
          )}
        >
          <MessageSquare className="size-3.5" />
        </button>
      </div>

      <PageShell>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-normal tracking-tight text-foreground">
            Commitments
          </h1>
        </div>

        {/* Commitment List */}
        {commitmentList}

      {/* Add Commitment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="bg-background rounded-xl w-[420px] p-6 shadow-xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-md font-semibold text-foreground mb-4">
                Add new commitment
              </h2>
              <textarea
                ref={textareaRef}
                value={newCommitmentText}
                onChange={(e) => setNewCommitmentText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleCreate();
                  }
                }}
                placeholder="What do you need to do?"
                className="w-full h-24 px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground bg-muted border border-border rounded-lg resize-none transition-colors"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleCreate}
                  disabled={!newCommitmentText.trim()}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium border-none transition-colors cursor-pointer",
                    newCommitmentText.trim()
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-muted-foreground cursor-not-allowed",
                  )}
                >
                  Create
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageShell>
    </div>
    </div>
    <RightSidebarProvider open={showChat} onOpenChange={setShowChat} defaultWidth={380} minWidth={320} maxWidth={520} onWidthChange={setChatWidth}>
      <ChatSidebar isOpen={showChat} onClose={() => setShowChat(false)} />
    </RightSidebarProvider>
    </div>
  );
};

export default CommitmentsPage;
