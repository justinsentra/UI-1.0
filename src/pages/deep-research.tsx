import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Pencil, Zap, Calendar, X } from "lucide-react";
import type {
  ResponseParagraph,
  ScanStep,
  SuggestionRoute,
  ActionSuggestion,
  TimelineWeek,
} from "@/data/mock-deep-research";
import SourcePill from "@/components/deep-research/source-pill";
import { usePersonaStore } from "@/stores/persona-store";
import {
  getPersonaDeepResearch,
  getMockResponse,
} from "@/data/content-resolver";
import type { DocumentFlowConfig } from "@/data/personas";
import EmptyState from "@/components/deep-research/empty-state";
import ScanningLoader from "@/components/deep-research/scanning-loader";
import ResponseBlock from "@/components/deep-research/response-block";
import Chatbox from "@/components/deep-research/chatbox";
import SessionSidebar from "@/components/deep-research/session-sidebar";
import { LeftSecondarySidebar } from "@/components/ui/left-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import { Message, MessageContent } from "@/components/prompt-kit/message";
import {
  ChatContainerRoot,
  ChatContainerContent,
  ChatContainerScrollAnchor,
} from "@/components/ui/chat-container";
import { TextShimmerLoader } from "@/components/ui/loader";
import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/ui/steps";

// Integration logos for scan step icons
import outlookLogo from "@/assets/logos/outlook.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import excelLogo from "@/assets/logos/excel.png";
import wordLogo from "@/assets/logos/word.png";
import sharepointLogo from "@/assets/logos/sharepoint.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import serviceNowLogo from "@/assets/logos/service-now.png";
import gmailLogo from "@/assets/logos/gmail.svg";
import calendarLogo from "@/assets/logos/calendar.svg";

const STEP_ICON_MAP: Record<string, string> = {
  outlook: outlookLogo,
  "ms-teams": teamsLogo,
  excel: excelLogo,
  word: wordLogo,
  sharepoint: sharepointLogo,
  salesforce: salesforceLogo,
  "service-now": serviceNowLogo,
  gmail: gmailLogo,
  zoom: calendarLogo,
};

/* ── Types ── */

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content?: string;
  paragraphs?: ResponseParagraph[];
  timestamp?: string;
  type?: "text" | "prd" | "choice" | "building" | "done";
  prdContent?: string;
  chosenTool?: string;
  actionSuggestion?: ActionSuggestion;
  timeline?: TimelineWeek[];
}

type Phase =
  | "idle"
  | "scanning"
  | "revealing"
  | "complete"
  | "prd-scanning"
  | "prd-choice"
  | "prd-building"
  | "prd-done";

/* ── Helpers ── */

const formatTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

/* ── Action Suggestion CTA ── */

function ActionSuggestionCTA({ suggestion }: { suggestion: ActionSuggestion }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="mt-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)]/40 p-4"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]">
          <Zap size={14} className="text-[var(--foreground)]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="m-0 text-sm font-medium text-[var(--foreground)]">
            Create an action to track future repeat instances of this event?
          </p>
          <p className="m-0 mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
            {suggestion.prompt}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() =>
                navigate(`/actions/${suggestion.actionId}`, {
                  state: { initialTab: "plan" },
                })
              }
              className="inline-flex items-center gap-2 rounded-lg border border-solid border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)] cursor-pointer transition-colors hover:bg-[var(--accent)]"
            >
              <Zap size={13} />
              Enable {suggestion.actionName}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── PRD Document Renderer ── */

function PrdDocument({
  content,
  filename,
}: {
  content: string;
  filename: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const displayContent = isEditing ? editContent : content;
  const lines = useMemo(() => displayContent.split("\n"), [displayContent]);

  const handleToggleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setEditContent(content);
      setIsEditing(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-card overflow-hidden"
    >
      <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--muted)] flex items-center gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[var(--muted-foreground)]"
        >
          <path
            d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M6 8h4M6 10.5h4M6 5.5h1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-xs font-medium text-[var(--muted-foreground)] flex-1">
          {filename}
        </span>
        <button
          type="button"
          onClick={handleToggleEdit}
          className="p-1 text-[var(--muted-foreground)] hover:text-[var(--muted-foreground)] transition-colors bg-transparent border-none cursor-pointer rounded-md hover:bg-[var(--accent)]"
          title={isEditing ? "Save changes" : "Edit document"}
        >
          <Pencil size={13} />
        </button>
      </div>
      <div className="px-5 py-4 max-h-[400px] overflow-y-auto">
        {isEditing ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full min-h-[360px] bg-transparent border-none outline-none resize-none text-xs text-[var(--muted-foreground)] leading-relaxed font-mono"
          />
        ) : (
          <div className="prose-sm">
            {lines.map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1
                    key={i}
                    className="text-base font-semibold text-[var(--foreground)] m-0 mb-3 leading-snug"
                  >
                    {line.slice(2)}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-sm font-semibold text-[var(--foreground)] m-0 mt-4 mb-2 leading-snug"
                  >
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p
                    key={i}
                    className="text-sm font-medium text-[var(--foreground)] m-0 mt-3 mb-1"
                  >
                    {line.slice(2, -2)}
                  </p>
                );
              }
              if (line.startsWith("| ")) {
                const cells = line
                  .split("|")
                  .filter(Boolean)
                  .map((c) => c.trim());
                if (cells.every((c) => /^[-:]+$/.test(c))) return null;
                return (
                  <div
                    key={i}
                    className="grid grid-cols-4 gap-2 py-1 text-xs text-[var(--muted-foreground)] border-b border-[var(--border)]"
                  >
                    {cells.map((cell, j) => (
                      <span key={j}>{cell}</span>
                    ))}
                  </div>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <div
                    key={i}
                    className="flex gap-2 text-xs text-[var(--muted-foreground)] leading-relaxed ml-2 mb-0.5"
                  >
                    <span className="text-[var(--muted-foreground)] shrink-0">
                      -
                    </span>
                    <span>{line.slice(2)}</span>
                  </div>
                );
              }
              if (line.startsWith("---")) {
                return (
                  <hr
                    key={i}
                    className="border-t border-[var(--border)] my-3"
                  />
                );
              }
              if (line.startsWith("*Sources:")) {
                return (
                  <p
                    key={i}
                    className="text-2xs text-[var(--muted-foreground)] m-0 mt-2 italic"
                  >
                    {line.slice(1, -1)}
                  </p>
                );
              }
              if (line.trim() === "") return <div key={i} className="h-2" />;
              const formatted = line
                .replace(
                  /\*\*(.+?)\*\*/g,
                  '<strong class="font-medium text-[var(--foreground)]">$1</strong>',
                )
                .replace(
                  /`(.+?)`/g,
                  '<code class="text-2xs bg-[var(--muted)] px-1 py-0.5 rounded">$1</code>',
                );
              return (
                <p
                  key={i}
                  className="text-xs text-[var(--muted-foreground)] leading-relaxed m-0 mb-1"
                  dangerouslySetInnerHTML={{ __html: formatted }}
                />
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Tool Choice Pills (data-driven) ── */

function ToolChoicePills({
  flow,
  onChoice,
  onCancel,
}: {
  flow: DocumentFlowConfig;
  onChoice: (tool: string) => void;
  onCancel: () => void;
}) {
  const pillClass =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-solid border-[var(--border)] bg-transparent text-sm text-[var(--muted-foreground)] cursor-pointer transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="flex flex-col gap-3"
    >
      <p className="text-sm text-[var(--foreground)] m-0">
        What would you like to do next?
      </p>
      <div className="flex gap-2 flex-wrap">
        {flow.toolChoices.map((choice) => {
          if (choice.action === "cancel") {
            return (
              <button
                key={choice.label}
                type="button"
                onClick={onCancel}
                className={pillClass}
              >
                {choice.label}
              </button>
            );
          }
          if (choice.action === "external" && choice.externalUrl) {
            return (
              <a
                key={choice.label}
                href={choice.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillClass} no-underline`}
              >
                {choice.label}
              </a>
            );
          }
          return (
            <button
              key={choice.label}
              type="button"
              onClick={() => onChoice(choice.label)}
              className={pillClass}
            >
              {choice.label}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Building Loader (data-driven) ── */

function BuildingLoader({
  label,
  steps,
  onComplete,
}: {
  label: string;
  steps: ScanStep[];
  onComplete: () => void;
}) {
  const [visibleCount, setVisibleCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const stepsRef = useRef(steps);
  stepsRef.current = steps;

  useState(() => {
    let current = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const reveal = () => {
      if (current >= stepsRef.current.length) {
        setTimeout(() => onCompleteRef.current(), 800);
        return;
      }
      timeout = setTimeout(() => {
        current += 1;
        setVisibleCount(current);
        reveal();
      }, stepsRef.current[current].duration);
    };

    reveal();
    return () => clearTimeout(timeout);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-2"
    >
      <Steps defaultOpen>
        <StepsTrigger>
          <TextShimmerLoader text={label} size="sm" />
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
                  className={`inline-flex items-center gap-2 ${
                    index === visibleCount - 1
                      ? "text-muted-foreground"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {"icons" in step &&
                    (step as { icons?: string[] }).icons?.map((iconKey) => {
                      const src = STEP_ICON_MAP[iconKey];
                      return src ? (
                        <img
                          key={iconKey}
                          src={src}
                          alt={iconKey}
                          className="size-3.5 object-contain shrink-0"
                        />
                      ) : null;
                    })}
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

/* ── Done Message (data-driven) ── */

function DoneMessage({
  flow,
  tool,
}: {
  flow: DocumentFlowConfig;
  tool: string;
}) {
  const { doneMessage } = flow;
  const [savedToExcel, setSavedToExcel] = useState(false);
  const [showMeetingToast, setShowMeetingToast] = useState(false);

  useEffect(() => {
    if (savedToExcel) {
      const timeout = setTimeout(() => setShowMeetingToast(true), 2000);
      return () => clearTimeout(timeout);
    }
  }, [savedToExcel]);

  const meetingToast = (
    <AnimatePresence>
      {showMeetingToast && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-4 right-4 z-50 w-80 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-lg"
        >
          <button
            type="button"
            onClick={() => setShowMeetingToast(false)}
            className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-md text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors border-none bg-transparent cursor-pointer"
          >
            <X size={14} />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]">
              <Calendar size={16} className="text-[var(--foreground)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="m-0 text-sm font-medium text-[var(--foreground)]">
                Oracle Migration Sync
              </p>
              <p className="m-0 text-2xs text-[var(--muted-foreground)]">
                3:00 PM · Starting soon
              </p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-lg border border-solid border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] cursor-pointer transition-colors hover:bg-[var(--accent)]"
            >
              Join
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg border border-solid border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] cursor-pointer transition-colors hover:bg-[var(--accent)]"
            >
              View Brief
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (doneMessage.link) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2"
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
              {doneMessage.title}
            </span>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] m-0 ml-7">
            {doneMessage.description}
          </p>
          <div className="ml-7 mt-1 flex items-center gap-2">
            <a
              href={doneMessage.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--muted)] border border-[var(--border)] max-w-fit text-sm text-[var(--foreground)] no-underline cursor-pointer transition-colors hover:bg-[var(--accent)]"
            >
              {doneMessage.link.label}
            </a>
            <motion.button
              type="button"
              onClick={() => setSavedToExcel(true)}
              disabled={savedToExcel}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[var(--border)] text-sm cursor-pointer transition-colors ${
                savedToExcel
                  ? "bg-emerald-600/10 border-emerald-600/30 text-emerald-600"
                  : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)]"
              }`}
              layout
            >
              <img
                src={excelLogo}
                alt="Excel"
                className="size-4 object-contain"
              />
              <motion.span layout>
                {savedToExcel ? "Saved" : "Save to Excel?"}
              </motion.span>
              {savedToExcel && (
                <motion.svg
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-emerald-600"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </motion.button>
          </div>
        </motion.div>
        {meetingToast}
      </>
    );
  }

  // Fallback: file path display (for push-to-tool flows)
  const filePath =
    tool === "Cursor"
      ? `~/Projects/sentra/docs/${flow.filename}`
      : `Claude project: Sentra / ${flow.filename}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-2"
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
          Done!
        </span>
      </div>
      <p className="text-sm text-[var(--muted-foreground)] m-0 ml-7">
        The file has been pushed to {tool}. You can find it at:
      </p>
      <div className="ml-7 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--muted)] border border-[var(--border)] max-w-fit">
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[var(--muted-foreground)] shrink-0"
        >
          <path
            d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <code className="text-xs text-[var(--foreground)] font-mono">
          {filePath}
        </code>
      </div>
    </motion.div>
  );
}

/* ── Deep Research Page ── */

const DeepResearchPage = () => {
  const [historyWidth, setHistoryWidth] = useState(220);

  useRegisterSidebar({
    position: SidebarPosition.LEFT_SECONDARY,
    open: true,
    width: historyWidth,
  });

  const location = useLocation();
  const locationState = location.state as {
    prefill?: string;
    route?: SuggestionRoute;
    typeOnly?: boolean;
  } | null;
  const prefill = locationState?.prefill;
  const prefillRoute = locationState?.route;
  const typeOnly = locationState?.typeOnly ?? false;
  const hasPrefilled = useRef(false);
  const persona = usePersonaStore((s) => s.persona);
  const deepResearchData = getPersonaDeepResearch(persona);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeFlow, setActiveFlow] = useState<DocumentFlowConfig | null>(null);
  const [activeScanSteps, setActiveScanSteps] = useState<ScanStep[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [pendingResponse, setPendingResponse] = useState<{
    paragraphs: ResponseParagraph[];
    timestamp: string;
    actionSuggestion?: ActionSuggestion;
    timeline?: TimelineWeek[];
  } | null>(null);
  const [chosenTool, setChosenTool] = useState<string | null>(null);
  const messageCountRef = useRef(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToLastUserMessage = useCallback(() => {
    requestAnimationFrame(() => {
      const container = chatContainerRef.current;
      if (!container) return;
      const userMessages = container.querySelectorAll("[data-user-message]");
      const lastUserMsg = userMessages[userMessages.length - 1];
      if (lastUserMsg) {
        lastUserMsg.scrollIntoView({ block: "start", behavior: "instant" });
      }
    });
  }, []);

  const handleScanComplete = useCallback(() => {
    if (!pendingResponse) return;

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      paragraphs: pendingResponse.paragraphs,
      timestamp: pendingResponse.timestamp,
      actionSuggestion: pendingResponse.actionSuggestion,
      timeline: pendingResponse.timeline,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setPendingResponse(null);
    setPhase("complete");
    scrollToLastUserMessage();
  }, [pendingResponse, scrollToLastUserMessage]);

  const handlePrdScanComplete = useCallback(() => {
    const docContent = activeFlow?.content ?? "";

    const prdMessage: ChatMessage = {
      id: `prd-${Date.now()}`,
      role: "assistant",
      type: "prd",
      prdContent: docContent,
      timestamp: formatTime(),
    };

    const choiceMessage: ChatMessage = {
      id: `choice-${Date.now()}`,
      role: "assistant",
      type: "choice",
    };

    setMessages((prev) => [...prev, prdMessage, choiceMessage]);
    setPhase("prd-choice");
  }, [activeFlow]);

  const handleToolChoice = useCallback((tool: string) => {
    setChosenTool(tool);

    setMessages((prev) => {
      const withoutChoice = prev.filter((m) => m.type !== "choice");
      return [
        ...withoutChoice,
        {
          id: `user-choice-${Date.now()}`,
          role: "user" as const,
          content: tool,
          type: "text" as const,
        },
      ];
    });

    setPhase("prd-building");
  }, []);

  const handleCancel = useCallback(() => {
    setMessages((prev) => prev.filter((m) => m.type !== "choice"));
    setPhase("complete");
  }, []);

  const handleBuildComplete = useCallback(() => {
    setMessages((prev) => {
      if (prev.some((m) => m.type === "done")) return prev;
      return [
        ...prev,
        {
          id: `done-${Date.now()}`,
          role: "assistant" as const,
          type: "done" as const,
          chosenTool: chosenTool ?? "Cursor",
        },
      ];
    });
    setPhase("prd-done");
  }, [chosenTool]);

  /** Execute a routed query — shared by suggestion clicks, typed input, and prefill */
  const executeRoute = useCallback(
    (text: string, route: SuggestionRoute) => {
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text,
      };

      if (route.type === "vendor-eval" && deepResearchData.vendorEvalResponse) {
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setActiveScanSteps(deepResearchData.vendorEvalResponse.scanSteps);
        setPendingResponse({
          paragraphs: deepResearchData.vendorEvalResponse.paragraphs,
          timestamp: formatTime(),
        });
        setPhase("scanning");
        return;
      }

      if (route.type === "document-flow") {
        const flow = deepResearchData.documentFlows.find(
          (f) => f.id === route.flowId,
        );
        if (flow) {
          setMessages((prev) => [...prev, userMessage]);
          setInput("");
          setActiveFlow(flow);
          setActiveScanSteps(flow.scanSteps);
          setPhase("prd-scanning");
          return;
        }
      }

      // Generic response
      const responseIndex =
        route.type === "generic" && route.index != null
          ? route.index
          : messageCountRef.current;
      messageCountRef.current += 1;

      const mockResponse = getMockResponse(responseIndex);

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setActiveScanSteps(mockResponse.scanSteps);
      setPendingResponse({
        paragraphs: mockResponse.paragraphs,
        timestamp: formatTime(),
        actionSuggestion: mockResponse.actionSuggestion,
        timeline: mockResponse.timeline,
      });
      setPhase("scanning");
    },
    [deepResearchData],
  );

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    if (
      !trimmed ||
      phase === "scanning" ||
      phase === "revealing" ||
      phase === "prd-scanning" ||
      phase === "prd-building"
    )
      return;

    // Check for keyword matches to specific response indices
    const lower = trimmed.toLowerCase();

    // Match document flows first
    const matchedFlow = deepResearchData.documentFlows.find((f) =>
      f.triggerKeywords.some((kw) => lower.includes(kw)),
    );
    if (matchedFlow) {
      executeRoute(trimmed, { type: "document-flow", flowId: matchedFlow.id });
      return;
    }

    // Keyword-to-index mapping for generic responses
    if (lower.includes("oracle") && lower.includes("migration")) {
      executeRoute(trimmed, { type: "generic", index: 4 });
      return;
    }

    executeRoute(trimmed, { type: "generic" });
  }, [input, phase, deepResearchData, executeRoute]);

  const handleSuggestionClick = useCallback(
    (text: string, route: SuggestionRoute) => {
      if (
        phase === "scanning" ||
        phase === "revealing" ||
        phase === "prd-scanning" ||
        phase === "prd-building"
      )
        return;
      executeRoute(text, route);
    },
    [phase, executeRoute],
  );

  const handleNewSession = useCallback(() => {
    setMessages([]);
    setInput("");
    setPhase("idle");
    setActiveFlow(null);
    setActiveSessionId(null);
    setPendingResponse(null);
    setChosenTool(null);
    messageCountRef.current = 0;
  }, []);

  const handleSelectSession = useCallback(
    (id: string) => {
      const session = deepResearchData.sessionHistory.find((s) => s.id === id);
      if (!session) return;

      setActiveSessionId(id);
      setActiveFlow(null);
      setChosenTool(null);
      setPendingResponse(null);

      // Use a deterministic index based on session id for varied responses
      const idNum = parseInt(id.replace(/\D/g, ""), 10) || 0;
      const mockResponse = getMockResponse(idNum);

      const userMsg: ChatMessage = {
        id: `user-hist-${id}`,
        role: "user",
        content: session.query,
      };

      const assistantMsg: ChatMessage = {
        id: `assistant-hist-${id}`,
        role: "assistant",
        paragraphs: mockResponse.paragraphs,
        timestamp: "Earlier",
      };

      setMessages([userMsg, assistantMsg]);
      setPhase("complete");
      setInput("");
      messageCountRef.current = 1;
    },
    [deepResearchData],
  );

  // Auto-submit prefilled prompt from navigation state (or type it out for typeOnly)
  useEffect(() => {
    if (prefill && !hasPrefilled.current) {
      hasPrefilled.current = true;

      if (typeOnly) {
        // Type out the text character by character instead of auto-submitting
        let i = 0;
        const chars = prefill.split("");
        const interval = setInterval(() => {
          if (i < chars.length) {
            setInput((prev) => prev + chars[i]);
            i++;
          } else {
            clearInterval(interval);
          }
        }, 12);
        return () => clearInterval(interval);
      }

      // Use explicit route if provided, otherwise try to match by flow keyword, fallback to generic
      let route: SuggestionRoute = prefillRoute ?? {
        type: "generic",
        index: 0,
      };

      if (!prefillRoute) {
        // Keyword fallback for prefills from "Give this to Sentra?" buttons, homepage cards, etc.
        const lower = prefill.toLowerCase();
        const matchedFlow = deepResearchData.documentFlows.find((f) =>
          f.triggerKeywords.some((kw) => lower.includes(kw)),
        );
        if (matchedFlow) {
          route = { type: "document-flow", flowId: matchedFlow.id };
        } else if (
          deepResearchData.vendorEvalResponse &&
          (lower.includes("vendor") || lower.includes("evaluation"))
        ) {
          route = { type: "vendor-eval" };
        }
      }

      executeRoute(prefill, route);
    }
  }, [prefill, prefillRoute, typeOnly, executeRoute, deepResearchData]);

  const hasMessages = messages.length > 0;
  const isLoading =
    phase === "scanning" ||
    phase === "revealing" ||
    phase === "prd-scanning" ||
    phase === "prd-building";

  return (
    <div className="flex overflow-hidden h-full">
      <LeftSecondarySidebar
        defaultWidth={220}
        minWidth={180}
        maxWidth={360}
        cssVar="--left-secondary-width"
        onWidthChange={setHistoryWidth}
      >
        <SessionSidebar
          activeSessionId={activeSessionId}
          onSelectSession={handleSelectSession}
          onNewSession={handleNewSession}
        />
      </LeftSecondarySidebar>
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {!hasMessages && phase === "idle" ? (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <EmptyState onSuggestionClick={handleSuggestionClick} />
          </div>
        ) : (
          <ChatContainerRoot ref={chatContainerRef} className="flex-1 min-h-0">
            <ChatContainerContent className="max-w-[680px] mx-auto px-6 pt-8 pb-4 space-y-5">
              {messages.map((msg) => {
                if (msg.type === "prd" && activeFlow) {
                  return (
                    <Message key={msg.id} className="justify-start">
                      <div className="flex-1 min-w-0">
                        <PrdDocument
                          content={msg.prdContent ?? ""}
                          filename={activeFlow.filename}
                        />
                        <motion.div
                          className="mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          <Steps defaultOpen={false}>
                            <StepsTrigger className="text-2xs font-medium text-[var(--muted-foreground)]">
                              {activeFlow.sources.length} sources
                            </StepsTrigger>
                            <StepsContent>
                              <div className="flex flex-wrap gap-1.5 py-1">
                                {activeFlow.sources.map((source) => (
                                  <SourcePill
                                    key={`${source.type}-${source.label}`}
                                    source={source}
                                  />
                                ))}
                              </div>
                            </StepsContent>
                          </Steps>
                        </motion.div>
                      </div>
                    </Message>
                  );
                }

                if (msg.type === "choice" && activeFlow) {
                  return (
                    <Message key={msg.id} className="justify-start">
                      <div className="flex-1 min-w-0">
                        <ToolChoicePills
                          flow={activeFlow}
                          onChoice={handleToolChoice}
                          onCancel={handleCancel}
                        />
                      </div>
                    </Message>
                  );
                }

                if (msg.type === "done" && activeFlow) {
                  return (
                    <Message key={msg.id} className="justify-start">
                      <div className="flex-1 min-w-0">
                        <DoneMessage
                          flow={activeFlow}
                          tool={msg.chosenTool ?? "Cursor"}
                        />
                      </div>
                    </Message>
                  );
                }

                if (msg.role === "user") {
                  return (
                    <Message
                      key={msg.id}
                      className="justify-end"
                      data-user-message
                    >
                      <MessageContent className="bg-[var(--accent)] text-[var(--foreground)] max-w-[72%] text-sm">
                        {msg.content}
                      </MessageContent>
                    </Message>
                  );
                }

                return (
                  <Message key={msg.id} className="justify-start">
                    <div className="flex-1 min-w-0">
                      <ResponseBlock
                        paragraphs={msg.paragraphs ?? []}
                        timestamp={msg.timestamp ?? ""}
                        timeline={msg.timeline}
                      />
                      {msg.actionSuggestion ? (
                        <ActionSuggestionCTA
                          suggestion={msg.actionSuggestion}
                        />
                      ) : null}
                    </div>
                  </Message>
                );
              })}

              {phase === "scanning" && (
                <Message className="justify-start">
                  <div className="flex-1 min-w-0">
                    <ScanningLoader
                      steps={activeScanSteps}
                      onComplete={handleScanComplete}
                    />
                  </div>
                </Message>
              )}

              {phase === "prd-scanning" && (
                <Message className="justify-start">
                  <div className="flex-1 min-w-0">
                    <ScanningLoader
                      steps={activeScanSteps}
                      onComplete={handlePrdScanComplete}
                    />
                  </div>
                </Message>
              )}

              {phase === "prd-building" && chosenTool && activeFlow && (
                <Message className="justify-start">
                  <div className="flex-1 min-w-0">
                    <BuildingLoader
                      label={activeFlow.buildingLabel}
                      steps={activeFlow.buildSteps}
                      onComplete={handleBuildComplete}
                    />
                  </div>
                </Message>
              )}

              <ChatContainerScrollAnchor />
            </ChatContainerContent>
          </ChatContainerRoot>
        )}

        <div className="shrink-0 px-4 pb-4 pt-2">
          <Chatbox
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default DeepResearchPage;
