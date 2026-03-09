import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { cn, getInitials, getAvatarColor } from "@lib/utils";
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
} from "lucide-react";
import { useMeetingsStore } from "@/stores/meetings-store";
import { useUIStore } from "@/stores/ui-store";
import { usePageLabel } from "../components/app-layout";
import { AttendeeDropdown } from "@/components/meetings/attendee-dropdown";
import { MeetingTagDropdown } from "@/components/meetings/meeting-tag-dropdown";
import { CreateTagModal } from "@/components/meetings/create-tag-modal";
import { ShareModal } from "@/components/meetings/share-modal";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { meetings } from "@/data/mock-meetings";
import { TextShimmerLoader } from "@/components/ui/loader";
import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/ui/steps";

const tabs = ["Overview", "Transcript", "Video"] as const;
type Tab = (typeof tabs)[number];

/* ── Spreadsheet Action Flow ── */

const SPREADSHEET_ID = "ai-1-3";
const SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1Q2TlV0Q0ud1eABo8bM1xHPTAB5UG0QopfLhIW-6BcdI/edit?gid=589580262#gid=589580262";

interface SpreadsheetStep {
  label: string;
  duration: number;
}

const SPREADSHEET_SCAN_STEPS: SpreadsheetStep[] = [
  { label: "Connecting to Ramp API…", duration: 3600 },
  { label: "Pulling transaction history from Ramp…", duration: 5000 },
  { label: "Connecting to Mercury API…", duration: 3200 },
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
                      : "text-[var(--fg-disabled)]"
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
        <div className="size-5 rounded-full bg-[var(--bg-info-subtle)] flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[var(--fg-info)]"
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
        <span className="text-sm font-medium text-[var(--fg-base)]">
          Here's the spreadsheet!
        </span>
      </div>
      <button
        type="button"
        onClick={() => {
          if (window.ipcRenderer) {
            window.ipcRenderer.send("open-external-url", SPREADSHEET_URL);
          } else {
            window.location.href = SPREADSHEET_URL;
          }
        }}
        className="ml-7 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-base)] max-w-fit text-sm text-[var(--fg-base)] hover:bg-[var(--bg-component-hover)] transition-colors no-underline cursor-pointer"
      >
        <FileSpreadsheet size={14} className="text-green-600 shrink-0" />
        <span>2025 Spend Data</span>
        <ExternalLink size={12} className="text-[var(--fg-muted)] shrink-0" />
      </button>
    </motion.div>
  );
}

const MeetingDetailPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showAttendeeDropdown, setShowAttendeeDropdown] = useState(false);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [showCreateTagModal, setShowCreateTagModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [spreadsheetPhase, setSpreadsheetPhase] =
    useState<SpreadsheetPhase>("idle");

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });

  const meetingVisibility = useMeetingsStore((s) => s.meetingVisibility);
  const selectedMeetingId = useMeetingsStore((s) => s.selectedMeetingId);
  const addToast = useUIStore((s) => s.addToast);

  const meeting =
    meetings.find((m) => m.id === selectedMeetingId) ?? meetings[0];
  const meetingId = meeting.id;
  const effectivePrivacy = meetingVisibility[meetingId] ?? meeting.privacy;
  const isPrivate = effectivePrivacy === "private";

  const measureTab = useCallback(() => {
    const idx = tabs.indexOf(activeTab);
    const el = tabRefs.current[idx];
    if (el) {
      const padding = 12;
      setTabIndicator({
        left: el.offsetLeft - padding / 2,
        width: el.offsetWidth + padding,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    measureTab();
    window.addEventListener("resize", measureTab);
    return () => window.removeEventListener("resize", measureTab);
  }, [measureTab]);

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
    <div className="max-w-[740px] mx-auto px-8 pt-[72px] pb-[40vh] relative min-h-screen">
      {/* Top-right action buttons */}
      <div
        className="fixed top-[12px] z-10 flex items-center gap-1 transition-[right] duration-300 ease-in-out"
        style={{ right: showChatSidebar ? 396 : 20 }}
      >
        <button
          type="button"
          onClick={() => setShowShareModal(true)}
          className="h-7 px-2.5 rounded-full border border-[var(--border-base)] bg-[var(--bg-component)] hover:bg-[var(--bg-component-hover)] flex items-center gap-1.5 text-[var(--fg-muted)] transition-colors cursor-pointer"
        >
          {isPrivate ? <Lock size={13} /> : <Globe size={13} />}
          <span className="text-2xs font-medium">
            {isPrivate ? "Private" : "Public"}
          </span>
        </button>
        <button
          type="button"
          onClick={handleCopyLink}
          className="h-7 w-7 rounded-md bg-transparent hover:bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors cursor-pointer border-none"
          title="Copy link"
        >
          <LinkIcon size={15} />
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowMoreMenu((p) => !p)}
            className="h-7 w-7 rounded-md bg-transparent hover:bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors cursor-pointer border-none"
          >
            <MoreHorizontal size={15} />
          </button>
          {showMoreMenu && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setShowMoreMenu(false)}
              />
              <div className="absolute right-0 top-full mt-1 z-30 w-[200px] bg-background rounded-lg border border-[var(--border-base)] shadow-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    addToast("success", "Notes copied to clipboard");
                    setShowMoreMenu(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer bg-transparent border-none"
                >
                  Copy notes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addToast("success", "Transcript copied to clipboard");
                    setShowMoreMenu(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer bg-transparent border-none"
                >
                  Copy transcript
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addToast("success", "Transcript downloaded");
                    setShowMoreMenu(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer bg-transparent border-none"
                >
                  Download transcript
                </button>
              </div>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={() => setShowChatSidebar((p) => !p)}
          className={cn(
            "h-7 w-7 rounded-md flex items-center justify-center transition-colors cursor-pointer border-none",
            showChatSidebar
              ? "bg-[var(--bg-selected)] text-[var(--fg-muted)]"
              : "bg-transparent hover:bg-[var(--bg-component-hover)] text-[var(--fg-disabled)] hover:text-[var(--fg-muted)]",
          )}
          title="Deep Research"
        >
          <MessageSquare size={15} />
        </button>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight">
          {meeting.title}
        </h1>
      </div>

      {/* Meta Badges */}
      <div className="flex items-center gap-2 mb-5">
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowAttendeeDropdown((p) => !p)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-base)] text-sm text-[var(--fg-muted)] bg-transparent cursor-pointer hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <Users size={14} />
            {meeting.participants.length + 1} attendees
          </button>
          {showAttendeeDropdown && (
            <AttendeeDropdown onClose={() => setShowAttendeeDropdown(false)} />
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowTagDropdown((p) => !p)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-base)] text-sm text-[var(--fg-muted)] bg-transparent cursor-pointer hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <Tag size={14} />
            {meeting.tags[0] ?? "Untagged"}
          </button>
          {showTagDropdown && (
            <MeetingTagDropdown
              onClose={() => setShowTagDropdown(false)}
              onNewTag={() => setShowCreateTagModal(true)}
            />
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="relative flex gap-8 border-b border-[var(--border-base)] mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-3 px-1 text-sm font-medium transition-colors bg-transparent cursor-pointer border-none",
              activeTab === tab
                ? "text-[var(--fg-base)]"
                : "text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
            )}
          >
            {tab}
          </button>
        ))}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-[var(--fg-base)] rounded-full"
          animate={{ left: tabIndicator.left, width: tabIndicator.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>

      {/* Overview Tab */}
      {activeTab === "Overview" && (
        <div className="animate-fade-in">
          <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-8">
            {meeting.summary}
          </p>

          {meeting.keyPoints.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xs font-medium  text-[var(--fg-muted)] mb-4">
                Key points & decisions
              </h3>
              <ul className="space-y-4">
                {meeting.keyPoints.map((kp) => (
                  <li key={kp.title} className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--fg-base)] mt-2 shrink-0" />
                    <div>
                      <span className="text-sm text-[var(--fg-base)]">
                        {kp.title}
                      </span>
                      <p className="text-sm text-[var(--fg-muted)] leading-relaxed mt-0.5">
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
                <h3 className="text-2xs font-medium  text-[var(--fg-muted)]">
                  Next steps & action items
                </h3>
                <Link
                  to="/commitments"
                  className="text-sm font-medium text-[var(--fg-muted)] hover:underline"
                >
                  View your to-do's
                </Link>
              </div>
              <div className="space-y-3">
                {meeting.actionItems.map((item) => {
                  const isSpreadsheetItem = item.id === SPREADSHEET_ID;
                  const isSpreadsheetActive =
                    isSpreadsheetItem && spreadsheetPhase !== "idle";

                  return (
                    <div key={item.id}>
                      <div
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-lg",
                          isSpreadsheetItem &&
                            spreadsheetPhase === "idle" &&
                            "hover:bg-[var(--bg-component-hover)] cursor-pointer",
                          !isSpreadsheetItem &&
                            "hover:bg-[var(--bg-component-hover)]",
                          isSpreadsheetActive &&
                            "bg-[var(--bg-subtle)] rounded-b-none",
                        )}
                        onClick={
                          isSpreadsheetItem && spreadsheetPhase === "idle"
                            ? () => setSpreadsheetPhase("loading")
                            : undefined
                        }
                      >
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              isSpreadsheetItem &&
                              spreadsheetPhase === "idle"
                            ) {
                              setSpreadsheetPhase("loading");
                            } else {
                              toggleCheck(item.id);
                            }
                          }}
                          className={cn(
                            "w-5 h-5 rounded border-2 mt-0.5 shrink-0 flex items-center justify-center transition-colors bg-transparent cursor-pointer",
                            checkedItems.has(item.id) ||
                              (isSpreadsheetItem && spreadsheetPhase === "done")
                              ? "bg-[var(--fg-disabled)] border-[var(--fg-disabled)]"
                              : "border-[var(--border-subtle)]",
                          )}
                        >
                          {(checkedItems.has(item.id) ||
                            (isSpreadsheetItem &&
                              spreadsheetPhase === "done")) && (
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
                        <div>
                          <span className="text-sm text-[var(--fg-base)]">
                            {item.title}
                          </span>
                          <p className="text-sm text-[var(--fg-muted)] mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {isSpreadsheetItem && spreadsheetPhase === "loading" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="bg-[var(--bg-subtle)] rounded-b-lg px-3 pb-4 overflow-hidden"
                        >
                          <SpreadsheetLoader
                            steps={SPREADSHEET_SCAN_STEPS}
                            onComplete={() => setSpreadsheetPhase("done")}
                          />
                        </motion.div>
                      )}

                      {isSpreadsheetItem && spreadsheetPhase === "done" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="bg-[var(--bg-subtle)] rounded-b-lg px-3 pb-4 overflow-hidden"
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
        </div>
      )}

      {/* Transcript Tab */}
      {activeTab === "Transcript" && (
        <div className="animate-fade-in">
          <div className="relative mb-6">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
            />
            <input
              type="text"
              placeholder="Search transcript..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-[var(--border-base)] bg-background text-sm placeholder:text-[var(--fg-disabled)]"
            />
          </div>
          <div className="space-y-6">
            {meeting.transcript.map((entry, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-2xs font-medium shrink-0"
                  style={{ backgroundColor: getAvatarColor(entry.speaker) }}
                >
                  {getInitials(entry.speaker)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-[var(--fg-base)]">
                      {entry.speaker}
                    </span>
                    {entry.isMe && (
                      <span className="text-xs text-[var(--fg-disabled)]">
                        (Me)
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video Tab */}
      {activeTab === "Video" && (
        <div className="animate-fade-in">
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
        </div>
      )}

      {showCreateTagModal && (
        <CreateTagModal onClose={() => setShowCreateTagModal(false)} />
      )}

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        meetingId={meetingId}
      />
      <ChatSidebar
        isOpen={showChatSidebar}
        onClose={() => setShowChatSidebar(false)}
      />
    </div>
  );
};

export default MeetingDetailPage;
