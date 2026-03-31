import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { motion } from "motion/react";
import {
  Link as LinkIcon,
  Lock,
  Globe,
  MoreHorizontal,
  Users,
  Tag,
  Search,
  Play,
  Pause,
  Volume2,
  Maximize2,
  MessageSquare,
  FileSpreadsheet,
  ExternalLink,
  Plus,
  Check,
  Folder,
} from "lucide-react";
import { useMeetingsStore } from "@/stores/meetings-store";
import { useUIStore } from "@/stores/ui-store";
import { usePageLabel } from "../components/app-layout";
import PageShell from "@/components/ui/page-shell";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { attendees } from "@/components/meetings/attendee-dropdown";
import { CreateTagModal } from "@/components/meetings/create-tag-modal";
import { ShareModal } from "@/components/meetings/share-modal";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { RightSidebarProvider } from "@/components/ui/right-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaMeetings } from "@/data/content-resolver";
import { TextShimmerLoader } from "@/components/ui/loader";
import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/ui/steps";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import type { Meeting } from "@/types";

/* ── Spreadsheet Action Flow ── */

const SPREADSHEET_ID = "ai-1-3";
const SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1Q2TlV0Q0ud1eABo8bM1xHPTAB5UG0QopfLhIW-6BcdI/edit?gid=589580262#gid=589580262";
const MERIDIAN_MODEL_ID = "ai-1-1";
const MCGI_MEMO_ID = "mcgi-ai-1";

interface SpreadsheetStep {
  label: string;
  duration: number;
}

const SPREADSHEET_SCAN_STEPS: SpreadsheetStep[] = [
  { label: "Connecting to SpendWise API…", duration: 3600 },
  { label: "Pulling transaction history from SpendWise…", duration: 5000 },
  { label: "Connecting to StellarBank API…", duration: 3200 },
  { label: "Pulling account transfers and payments…", duration: 4800 },
  { label: "Cross-referencing vendor names…", duration: 3000 },
  { label: "Aggregating spend by category…", duration: 4000 },
  { label: "Formatting spreadsheet…", duration: 2800 },
];

type SpreadsheetPhase = "idle" | "loading" | "done";

function SpreadsheetLoader({
  steps,
  onComplete,
}: {
  steps: SpreadsheetStep[];
  onComplete: () => void;
}) {
  const [visibleCount, setVisibleCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let current = 0;

    const reveal = () => {
      if (current >= steps.length) {
        setTimeout(() => onCompleteRef.current(), 600);
        return;
      }
      timeout = setTimeout(() => {
        current += 1;
        setVisibleCount(current);
        reveal();
      }, steps[current].duration);
    };

    reveal();
    return () => clearTimeout(timeout);
  }, [steps]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-3 ml-8"
    >
      <Steps defaultOpen>
        <StepsTrigger>
          <TextShimmerLoader text="Building spend spreadsheet" size="sm" />
        </StepsTrigger>
        <StepsContent>
          {steps.slice(0, visibleCount).map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <StepsItem>
                <span
                  className={
                    index === visibleCount - 1
                      ? "text-muted-foreground"
                      : "text-[var(--muted-foreground)]"
                  }
                >
                  {step.label}
                </span>
              </StepsItem>
            </motion.div>
          ))}
        </StepsContent>
      </Steps>
    </motion.div>
  );
}

function SpreadsheetDone() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-3 ml-8 flex flex-col gap-2"
    >
      <div className="flex items-center gap-2">
        <div className="size-5 rounded-full bg-[var(--info)] flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[var(--info-foreground)]"
          >
            <path
              d="M3 8.5L6.5 12L13 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-sm font-medium text-[var(--foreground)]">
          Here's the spreadsheet!
        </span>
      </div>
      <button
        type="button"
        onClick={() => {
          window.open(SPREADSHEET_URL, "_blank");
        }}
        className="ml-7 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--muted)] border border-[var(--border)] max-w-fit text-sm text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors no-underline cursor-pointer"
      >
        <FileSpreadsheet size={14} className="text-green-600 shrink-0" />
        <span>2025 Spend Data</span>
        <ExternalLink
          size={12}
          className="text-[var(--muted-foreground)] shrink-0"
        />
      </button>
    </motion.div>
  );
}

function getMeetingSuggestions(meeting: Meeting): string[] {
  const title = meeting.title;
  const firstParticipant = meeting.participants[0] ?? "the team";
  const hasActionItems = meeting.actionItems.length > 0;
  const suggestions: string[] = [
    `What were the key decisions from "${title}"?`,
    `Summarize the action items from this meeting`,
  ];
  if (hasActionItems) {
    suggestions.push(`What's the status of commitments from this meeting?`);
  }
  suggestions.push(
    `What has ${firstParticipant} said about this topic in past meetings?`,
  );
  return suggestions;
}

/* ── Attendee Dropdown Content ── */

const attendeesByDomain = attendees.reduce<Record<string, typeof attendees>>(
  (acc, a) => {
    if (!acc[a.domain]) acc[a.domain] = [];
    acc[a.domain].push(a);
    return acc;
  },
  {},
);

function AttendeeDropdownContent() {
  return (
    <div className="py-1">
      {Object.entries(attendeesByDomain).map(([domain, members]) => (
        <div key={domain}>
          <DropdownMenuLabel>{domain}</DropdownMenuLabel>
          {members.map((attendee) => (
            <DropdownMenuItem key={attendee.email}>
              <UserAvatar name={attendee.name} size="sm" />
              <span>
                {attendee.name}
                {attendee.isMe && (
                  <span className="text-muted-foreground ml-1">(me)</span>
                )}
              </span>
            </DropdownMenuItem>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Tag Dropdown Content ── */

const tagOptions = [
  { name: "Customer Calls", icon: "users" as const, isActive: true },
  { name: "Standup", icon: "folder" as const },
  { name: "1:1", icon: "folder" as const },
];

function TagDropdownContent({ onNewTag }: { onNewTag: () => void }) {
  const [search, setSearch] = useState("");
  const filtered = tagOptions.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="py-1">
      <div className="px-2 pb-1">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-8 pl-8 pr-3 rounded-lg border border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <DropdownMenuItem>
        <Lock size={14} />
        My notes
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      {filtered.map((tag) => (
        <DropdownMenuItem key={tag.name}>
          {tag.icon === "users" ? <Users size={14} /> : <Folder size={14} />}
          <span className="flex-1">{tag.name}</span>
          {tag.isActive && (
            <Check size={14} className="text-muted-foreground" />
          )}
        </DropdownMenuItem>
      ))}
      {filtered.length === 0 && (
        <p className="px-2 py-1.5 text-xs text-muted-foreground">
          No tags found
        </p>
      )}
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={onNewTag}>
        <Plus size={14} />
        New Tag
      </DropdownMenuItem>
    </div>
  );
}

const MeetingDetailPage = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showCreateTagModal, setShowCreateTagModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const [spreadsheetPhase, setSpreadsheetPhase] =
    useState<SpreadsheetPhase>("idle");
  const [chatWidth, setChatWidth] = useState(380);

  useRegisterSidebar({
    position: SidebarPosition.RIGHT,
    open: showChatSidebar,
    width: chatWidth,
  });

  const meetingVisibility = useMeetingsStore((s) => s.meetingVisibility);
  const selectedMeetingId = useMeetingsStore((s) => s.selectedMeetingId);
  const addToast = useUIStore((s) => s.addToast);
  const persona = usePersonaStore((s) => s.persona);
  const meetings = useMemo(() => getPersonaMeetings(persona), [persona]);

  const meeting =
    meetings.find((m) => m.id === selectedMeetingId) ?? meetings[0];
  const meetingId = meeting.id;
  const meetingSuggestions = useMemo(
    () => getMeetingSuggestions(meeting),
    [meeting],
  );
  const effectivePrivacy = meetingVisibility[meetingId] ?? meeting.privacy;
  const isPrivate = effectivePrivacy === "private";

  const toggleCheck = (itemId: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `https://app.sentra.app/meetings/${meetingId}`,
    );
    addToast("success", "Link copied to clipboard");
  };

  usePageLabel(meeting.title);

  return (
    <div className="flex overflow-hidden h-full">
      <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
        <div className="relative">
          {/* Top-right action buttons */}
          <div className="absolute top-[12px] right-5 z-10 flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={handleCopyLink}
              title="Copy link"
            >
              <LinkIcon size={15} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-xs" />}
              >
                <MoreHorizontal size={15} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() =>
                    addToast("success", "Notes copied to clipboard")
                  }
                >
                  Copy notes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    addToast("success", "Transcript copied to clipboard")
                  }
                >
                  Copy transcript
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => addToast("success", "Transcript downloaded")}
                >
                  Download transcript
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => setShowChatSidebar((p) => !p)}
              className={cn(
                showChatSidebar && "bg-accent text-muted-foreground",
              )}
              title="Deep Research"
            >
              <MessageSquare size={15} />
            </Button>
          </div>

          <PageShell className="pb-[40vh]">
            {/* Title */}
            <div className="mb-4">
              <h1 className="text-3xl font-normal text-[var(--foreground)] tracking-tight">
                {meeting.title}
              </h1>
            </div>

            {/* Meta Badges */}
            <div className="flex items-center gap-2 mb-5">
              <DropdownMenu>
                <DropdownMenuTrigger className="h-7 px-3 inline-flex items-center gap-1 rounded-full border border-border bg-input/20 text-xs font-normal text-muted-foreground cursor-pointer hover:bg-muted transition-colors">
                  {isPrivate ? <Lock size={13} /> : <Globe size={13} />}
                  {isPrivate ? "Private" : "Public"}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => setShowShareModal(true)}>
                    <Globe size={14} />
                    Share settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="h-7 px-3 inline-flex items-center gap-1 rounded-full border border-border bg-input/20 text-xs font-normal text-muted-foreground cursor-pointer hover:bg-muted transition-colors">
                  <Users size={14} />
                  {meeting.participants.length + 1} attendees
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[260px] p-0">
                  <AttendeeDropdownContent />
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="h-7 px-3 inline-flex items-center gap-1 rounded-full border border-border bg-input/20 text-xs font-normal text-muted-foreground cursor-pointer hover:bg-muted transition-colors">
                  <Tag size={14} />
                  {meeting.tags[0] ?? "Untagged"}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[260px] p-0">
                  <TagDropdownContent
                    onNewTag={() => setShowCreateTagModal(true)}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview">
              <TabsList variant="underline" className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {meeting.summary}
                </p>

                {meeting.keyPoints.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xs font-medium text-muted-foreground mb-4">
                      Key points & decisions
                    </h3>
                    <ul className="space-y-4">
                      {meeting.keyPoints.map((kp) => (
                        <li key={kp.title} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                          <div>
                            <span className="text-sm text-foreground">
                              {kp.title}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                              {kp.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {meeting.actionItems.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xs font-medium text-muted-foreground">
                        Next steps & action items
                      </h3>
                      <Link
                        to="/commitments"
                        className="text-sm font-medium text-muted-foreground hover:underline"
                      >
                        View your to-do's
                      </Link>
                    </div>
                    <div className="space-y-[3px]">
                      {meeting.actionItems.map((item) => {
                        const isMeridianModelItem =
                          item.id === MERIDIAN_MODEL_ID;
                        const isMcgiMemoItem = item.id === MCGI_MEMO_ID;
                        const isDeepResearchItem =
                          isMeridianModelItem || isMcgiMemoItem;
                        const isSpreadsheetItem = item.id === SPREADSHEET_ID;
                        const isSpreadsheetActive =
                          isSpreadsheetItem && spreadsheetPhase !== "idle";
                        const isChecked =
                          checkedItems.has(item.id) ||
                          (isSpreadsheetItem && spreadsheetPhase === "done");

                        return (
                          <div key={item.id}>
                            <div
                              className={cn(
                                "flex items-center gap-4 py-2",
                                (isDeepResearchItem ||
                                  (isSpreadsheetItem &&
                                    spreadsheetPhase === "idle")) &&
                                  "cursor-pointer",
                                isSpreadsheetActive &&
                                  "bg-muted rounded-t-lg px-3",
                              )}
                              onClick={
                                isDeepResearchItem
                                  ? () =>
                                      navigate("/deep-research", {
                                        state: {
                                          prefill: isMcgiMemoItem
                                            ? "Draft an investment memo for Sentra"
                                            : "Build a 3-statement financial model for Meridian Corp",
                                        },
                                      })
                                  : isSpreadsheetItem &&
                                      spreadsheetPhase === "idle"
                                    ? () => setSpreadsheetPhase("loading")
                                    : undefined
                              }
                            >
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (isDeepResearchItem) {
                                    navigate("/deep-research", {
                                      state: {
                                        prefill: isMcgiMemoItem
                                          ? "Draft an investment memo for Sentra"
                                          : "Build a 3-statement financial model for Meridian Corp",
                                      },
                                    });
                                  } else if (
                                    isSpreadsheetItem &&
                                    spreadsheetPhase === "idle"
                                  ) {
                                    setSpreadsheetPhase("loading");
                                  } else {
                                    toggleCheck(item.id);
                                  }
                                }}
                                className={cn(
                                  "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors bg-transparent cursor-pointer",
                                  isChecked
                                    ? "bg-muted-foreground border-muted-foreground"
                                    : "border-border hover:border-muted-foreground",
                                )}
                              >
                                {isChecked && (
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                  >
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
                                    isChecked
                                      ? "line-through text-muted-foreground"
                                      : "text-foreground",
                                  )}
                                >
                                  {item.title}
                                </p>
                                <p className="text-sm mt-0.5 text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </div>

                            {isSpreadsheetItem &&
                              spreadsheetPhase === "loading" && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                  }}
                                  className="bg-muted rounded-b-lg px-3 pb-3 overflow-hidden"
                                >
                                  <SpreadsheetLoader
                                    steps={SPREADSHEET_SCAN_STEPS}
                                    onComplete={() =>
                                      setSpreadsheetPhase("done")
                                    }
                                  />
                                </motion.div>
                              )}

                            {isSpreadsheetItem &&
                              spreadsheetPhase === "done" && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                  }}
                                  className="bg-muted rounded-b-lg px-3 pb-3 overflow-hidden"
                                >
                                  <SpreadsheetDone />
                                </motion.div>
                              )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Transcript Tab */}
              <TabsContent value="transcript">
                <div className="mb-6">
                  <InputGroup className="h-9 rounded-lg bg-accent border-transparent focus-within:border-border">
                    <InputGroupAddon align="inline-start">
                      <Search size={16} />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Search transcript..." />
                  </InputGroup>
                </div>
                <div className="space-y-6">
                  {meeting.transcript.map((entry, i) => (
                    <div key={i} className="flex gap-3">
                      <UserAvatar name={entry.speaker} size="md" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-foreground">
                            {entry.speaker}
                          </span>
                          {entry.isMe && (
                            <span className="text-xs text-muted-foreground">
                              (Me)
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {entry.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Video Tab */}
              <TabsContent value="video">
                <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors border-none cursor-pointer"
                      >
                        <Play size={28} className="text-white ml-1" />
                      </button>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsPlaying((p) => !p)}
                        className="text-white border-none bg-transparent cursor-pointer"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-background rounded-full" />
                      </div>
                      <span className="text-sm text-white/80">
                        0:00 / {meeting.duration.replace(" min", ":00")}
                      </span>
                      <button
                        type="button"
                        className="text-white/80 hover:text-white border-none bg-transparent cursor-pointer"
                      >
                        <Volume2 size={16} />
                      </button>
                      <button
                        type="button"
                        className="text-white/80 hover:text-white border-none bg-transparent cursor-pointer"
                      >
                        <Maximize2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {showCreateTagModal && (
              <CreateTagModal onClose={() => setShowCreateTagModal(false)} />
            )}

            <ShareModal
              isOpen={showShareModal}
              onClose={() => setShowShareModal(false)}
              meetingId={meetingId}
            />
          </PageShell>
        </div>
      </div>
      <RightSidebarProvider
        open={showChatSidebar}
        onOpenChange={setShowChatSidebar}
        defaultWidth={380}
        minWidth={320}
        maxWidth={520}
        onWidthChange={setChatWidth}
      >
        <ChatSidebar
          isOpen={showChatSidebar}
          onClose={() => setShowChatSidebar(false)}
          suggestedQuestions={meetingSuggestions}
        />
      </RightSidebarProvider>
    </div>
  );
};

export default MeetingDetailPage;
