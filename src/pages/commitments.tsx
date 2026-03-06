import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, MessageSquare } from "lucide-react";
import { cn } from "@lib/utils";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import {
  initialCommitments,
  type CommitmentItem,
} from "../data/mock-commitments";

const filters = ["All", "Open", "Completed"] as const;
type Filter = (typeof filters)[number];

const CommitmentsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter>("All");
  const [commitments, setCommitments] = useState(initialCommitments);
  const [showModal, setShowModal] = useState(false);
  const [newCommitmentText, setNewCommitmentText] = useState("");
  const [showChat, setShowChat] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  return (
    <>
      {/* Fixed top-right action bar */}
      <div
        className="fixed top-[12px] z-30 flex items-center gap-1 transition-[right] duration-300 ease-in-out"
        style={{ right: showChat ? 396 : 20 }}
      >
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 px-2.5 rounded-md font-medium text-[var(--fg-muted)] hover:text-[var(--fg-base)] hover:bg-[var(--bg-component-hover)] transition-colors bg-transparent border-none cursor-pointer"
          style={{
            height: "var(--toolbar-btn-size)",
            fontSize: "var(--toolbar-font-size)",
          }}
        >
          <Plus
            style={{
              width: "var(--toolbar-icon-size)",
              height: "var(--toolbar-icon-size)",
            }}
          />
          Add
        </button>

        <div className="rounded-[8px] p-[2px]">
          <AnimatedBackground
            defaultValue={filter}
            onValueChange={(id) => {
              if (id) setFilter(id as Filter);
            }}
            className="rounded-md bg-[var(--bg-selected)]"
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                data-id={f}
                type="button"
                className="inline-flex items-center justify-center px-3 font-medium text-[var(--fg-muted)] transition-transform active:scale-[0.98] border-none cursor-pointer bg-transparent data-[checked=true]:text-[var(--fg-base)]"
                style={{
                  height: "var(--toolbar-btn-size)",
                  fontSize: "var(--toolbar-font-size)",
                }}
              >
                {f}
              </button>
            ))}
          </AnimatedBackground>
        </div>

        <button
          type="button"
          onClick={() => setShowChat((prev) => !prev)}
          className={cn(
            "flex items-center justify-center rounded-md transition-colors border-none cursor-pointer",
            showChat
              ? "bg-[var(--bg-selected)] text-[var(--fg-muted)]"
              : "bg-transparent text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)]",
          )}
          style={{
            height: "var(--toolbar-btn-size)",
            width: "var(--toolbar-btn-size)",
          }}
        >
          <MessageSquare
            style={{
              width: "var(--toolbar-icon-size)",
              height: "var(--toolbar-icon-size)",
            }}
          />
        </button>
      </div>

      <div className="max-w-[740px] mx-auto pt-[56px] px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-normal tracking-tight text-[var(--fg-base)]">
            Commitments
          </h1>
        </div>

        {/* Commitment List */}
        <div className="space-y-[3px]">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-4 px-5 py-4 bg-background border border-[var(--border-base)] rounded-xl"
            >
              <button
                onClick={() => toggleItem(c.id)}
                className={cn(
                  "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors bg-transparent cursor-pointer",
                  c.completed
                    ? "bg-[var(--fg-disabled)] border-[var(--fg-disabled)]"
                    : "border-[var(--border-subtle)] hover:border-[var(--fg-muted)]",
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
                      ? "line-through text-[var(--fg-disabled)]"
                      : "text-[var(--fg-base)]",
                  )}
                >
                  {c.title}
                </p>
                {c.meeting && (
                  <button
                    type="button"
                    onClick={() => navigate("/meeting-detail")}
                    className={cn(
                      "inline-flex items-center gap-1 mt-0.5 text-xs underline decoration-1 underline-offset-2 border-none bg-transparent cursor-pointer p-0 transition-colors",
                      c.completed
                        ? "text-[var(--fg-disabled)] hover:text-[var(--fg-disabled)]"
                        : "text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
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
                      ? "text-[var(--fg-disabled)]"
                      : "text-[var(--fg-muted)]",
                  )}
                >
                  {c.dueDate}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

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
              className="bg-background rounded-xl w-[420px] p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-md font-semibold text-[var(--fg-base)] mb-4">
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
                className="w-full h-24 px-3 py-2.5 text-sm text-[var(--fg-base)] placeholder-[var(--fg-disabled)] bg-[var(--bg-subtle)] border border-[var(--border-base)] rounded-lg resize-none transition-colors"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleCreate}
                  disabled={!newCommitmentText.trim()}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium border-none transition-colors cursor-pointer",
                    newCommitmentText.trim()
                      ? "bg-[var(--fg-base)] text-white hover:bg-[var(--fg-base)]"
                      : "bg-[var(--border-base)] text-[var(--fg-disabled)] cursor-not-allowed",
                  )}
                >
                  Create
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep Research Chat Sidebar */}
      <ChatSidebar isOpen={showChat} onClose={() => setShowChat(false)} />
    </>
  );
};

export default CommitmentsPage;
