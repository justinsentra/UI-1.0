import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Pencil } from "lucide-react";
import type { ResponseParagraph, ScanStep } from "@/data/mock-deep-research";
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
import {
  useRegisterSidebar,
  SidebarPosition,
} from "@/contexts/layout-context";
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

/** Find a matching document flow config based on query keywords */
function findMatchingFlow(
  text: string,
  flows: DocumentFlowConfig[],
): DocumentFlowConfig | undefined {
  const lower = text.toLowerCase();
  return flows.find((flow) =>
    flow.triggerKeywords.some((kw) => lower.includes(kw)),
  );
}

/** Check if a query matches vendor eval keywords */
function isVendorEvalMatch(text: string, keywords?: string[]): boolean {
  if (!keywords) return false;
  const lower = text.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
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
      className="rounded-lg border border-[var(--border-base)] bg-[var(--bg-base)] shadow-card overflow-hidden"
    >
      <div className="px-5 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)] flex items-center gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[var(--fg-muted)]"
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
        <span className="text-xs font-medium text-[var(--fg-muted)] flex-1">
          {filename}
        </span>
        <button
          type="button"
          onClick={handleToggleEdit}
          className="p-1 text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors bg-transparent border-none cursor-pointer rounded-md hover:bg-[var(--bg-component-hover)]"
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
            className="w-full min-h-[360px] bg-transparent border-none outline-none resize-none text-xs text-[var(--fg-subtle)] leading-relaxed font-mono"
          />
        ) : (
          <div className="prose-sm">
            {lines.map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1
                    key={i}
                    className="text-base font-semibold text-[var(--fg-base)] m-0 mb-3 leading-snug"
                  >
                    {line.slice(2)}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-sm font-semibold text-[var(--fg-base)] m-0 mt-4 mb-2 leading-snug"
                  >
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p
                    key={i}
                    className="text-sm font-medium text-[var(--fg-base)] m-0 mt-3 mb-1"
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
                    className="grid grid-cols-4 gap-2 py-1 text-xs text-[var(--fg-subtle)] border-b border-[var(--border-subtle)]"
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
                    className="flex gap-2 text-xs text-[var(--fg-subtle)] leading-relaxed ml-2 mb-0.5"
                  >
                    <span className="text-[var(--fg-disabled)] shrink-0">
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
                    className="border-t border-[var(--border-subtle)] my-3"
                  />
                );
              }
              if (line.startsWith("*Sources:")) {
                return (
                  <p
                    key={i}
                    className="text-2xs text-[var(--fg-disabled)] m-0 mt-2 italic"
                  >
                    {line.slice(1, -1)}
                  </p>
                );
              }
              if (line.trim() === "") return <div key={i} className="h-2" />;
              const formatted = line
                .replace(
                  /\*\*(.+?)\*\*/g,
                  '<strong class="font-medium text-[var(--fg-base)]">$1</strong>',
                )
                .replace(
                  /`(.+?)`/g,
                  '<code class="text-2xs bg-[var(--bg-subtle)] px-1 py-0.5 rounded">$1</code>',
                );
              return (
                <p
                  key={i}
                  className="text-xs text-[var(--fg-subtle)] leading-relaxed m-0 mb-1"
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
    "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-solid border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-subtle)] cursor-pointer transition-colors hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="flex flex-col gap-3"
    >
      <p className="text-sm text-[var(--fg-base)] m-0">
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

/* ── Done Message (data-driven) ── */

function DoneMessage({
  flow,
  tool,
}: {
  flow: DocumentFlowConfig;
  tool: string;
}) {
  const { doneMessage } = flow;

  if (doneMessage.link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-2"
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
            {doneMessage.title}
          </span>
        </div>
        <p className="text-sm text-[var(--fg-subtle)] m-0 ml-7">
          {doneMessage.description}
        </p>
        <div className="ml-7 mt-1">
          <a
            href={doneMessage.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-subtle)] max-w-fit text-sm text-[var(--fg-base)] no-underline cursor-pointer transition-colors hover:bg-[var(--bg-component-hover)]"
          >
            {doneMessage.link.label}
          </a>
        </div>
      </motion.div>
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
        <span className="text-sm font-medium text-[var(--fg-base)]">Done!</span>
      </div>
      <p className="text-sm text-[var(--fg-subtle)] m-0 ml-7">
        The file has been pushed to {tool}. You can find it at:
      </p>
      <div className="ml-7 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-subtle)] max-w-fit">
        <svg
          width="13"
          height="13"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[var(--fg-muted)] shrink-0"
        >
          <path
            d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <code className="text-xs text-[var(--fg-base)] font-mono">
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
  const prefill = (location.state as { prefill?: string } | null)?.prefill;
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
  } | null>(null);
  const [chosenTool, setChosenTool] = useState<string | null>(null);
  const messageCountRef = useRef(0);

  const handleScanComplete = useCallback(() => {
    if (!pendingResponse) return;

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      paragraphs: pendingResponse.paragraphs,
      timestamp: pendingResponse.timestamp,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setPendingResponse(null);
    setPhase("complete");
  }, [pendingResponse]);

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

  /** Route a query to the right flow */
  const routeQuery = useCallback(
    (text: string) => {
      // Check vendor eval
      if (
        deepResearchData.vendorEvalResponse &&
        isVendorEvalMatch(text, deepResearchData.vendorEvalTriggerKeywords)
      ) {
        return { type: "vendor-eval" as const };
      }
      // Check document flows
      const flow = findMatchingFlow(text, deepResearchData.documentFlows);
      if (flow) {
        return { type: "document-flow" as const, flow };
      }
      return { type: "generic" as const };
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

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    const route = routeQuery(trimmed);

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
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setActiveFlow(route.flow);
      setActiveScanSteps(route.flow.scanSteps);
      setPhase("prd-scanning");
      return;
    }

    // Generic response
    const responseIndex = messageCountRef.current;
    messageCountRef.current += 1;

    const mockResponse = getMockResponse(responseIndex);

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setActiveScanSteps(mockResponse.scanSteps);
    setPendingResponse({
      paragraphs: mockResponse.paragraphs,
      timestamp: formatTime(),
    });
    setPhase("scanning");
  }, [input, phase, routeQuery, deepResearchData]);

  const handleSuggestionClick = useCallback((text: string) => {
    setInput(text);
  }, []);

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

  const handleSelectSession = useCallback((id: string) => {
    setActiveSessionId(id);
  }, []);

  // Auto-submit prefilled prompt from navigation state
  useEffect(() => {
    if (prefill && !hasPrefilled.current) {
      hasPrefilled.current = true;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: prefill,
      };

      const route = routeQuery(prefill);

      if (route.type === "vendor-eval" && deepResearchData.vendorEvalResponse) {
        setMessages([userMessage]);
        setActiveScanSteps(deepResearchData.vendorEvalResponse.scanSteps);
        setPendingResponse({
          paragraphs: deepResearchData.vendorEvalResponse.paragraphs,
          timestamp: formatTime(),
        });
        setPhase("scanning");
      } else if (route.type === "document-flow") {
        setMessages([userMessage]);
        setActiveFlow(route.flow);
        setActiveScanSteps(route.flow.scanSteps);
        setPhase("prd-scanning");
      } else {
        const mockResponse = getMockResponse(0);
        messageCountRef.current = 1;
        setMessages([userMessage]);
        setActiveScanSteps(mockResponse.scanSteps);
        setPendingResponse({
          paragraphs: mockResponse.paragraphs,
          timestamp: formatTime(),
        });
        setPhase("scanning");
      }
    }
  }, [prefill, routeQuery, deepResearchData]);

  const hasMessages = messages.length > 0;
  const isLoading =
    phase === "scanning" ||
    phase === "revealing" ||
    phase === "prd-scanning" ||
    phase === "prd-building";

  return (
    <div
      className="flex overflow-hidden h-full"
    >
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
          <ChatContainerRoot className="flex-1 min-h-0">
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
                            <StepsTrigger className="text-2xs font-medium text-[var(--fg-muted)]">
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
                    <Message key={msg.id} className="justify-end">
                      <MessageContent className="bg-[var(--bg-component-hover)] text-[var(--fg-base)] max-w-[72%] text-sm">
                        {msg.content}
                      </MessageContent>
                    </Message>
                  );
                }

                return (
                  <Message key={msg.id} className="justify-start">
                    <div className="flex-1 min-w-0 bg-[var(--bg-subtle)] rounded-2xl p-4">
                      <ResponseBlock
                        paragraphs={msg.paragraphs ?? []}
                        timestamp={msg.timestamp ?? ""}
                      />
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
