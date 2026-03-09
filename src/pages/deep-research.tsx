import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import type { ResponseParagraph } from "@/data/mock-deep-research";
import {
  getMockResponse,
  PRD_SCAN_STEPS,
  PRD_CONTENT,
  PRD_BUILD_STEPS,
} from "@/data/mock-deep-research";
import type { ScanStep } from "@/data/mock-deep-research";
import EmptyState from "@/components/deep-research/empty-state";
import ScanningLoader from "@/components/deep-research/scanning-loader";
import ResponseBlock from "@/components/deep-research/response-block";
import Chatbox from "@/components/deep-research/chatbox";
import SessionSidebar from "@/components/deep-research/session-sidebar";
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

const isPrdQuery = (text: string): boolean => {
  const lower = text.toLowerCase();
  return lower.includes("prd") || lower.includes("product requirements");
};

/* ── PRD Document Renderer ── */

function PrdDocument({ content }: { content: string }) {
  const lines = content.split("\n");

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
        <span className="text-xs font-medium text-[var(--fg-muted)]">
          prd-auth-refactor-sso.md
        </span>
      </div>
      <div className="px-5 py-4 max-h-[400px] overflow-y-auto">
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
                  <span className="text-[var(--fg-disabled)] shrink-0">-</span>
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
      </div>
    </motion.div>
  );
}

/* ── Tool Choice Pills ── */

function ToolChoicePills({ onChoice }: { onChoice: (tool: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="flex flex-col gap-3"
    >
      <p className="text-sm text-[var(--fg-base)] m-0">
        Where would you like to push this document?
      </p>
      <div className="flex gap-2 flex-wrap">
        <a
          href="https://docs.google.com/document/d/1xC9xLNfRQpAGlalnONPH-CuXGVo-IcCPZJfKB-AVbTo/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-solid border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-subtle)] cursor-pointer transition-colors hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)] no-underline"
        >
          <GoogleDocsIcon />
          View in Docs
        </a>
        {["Cursor", "Claude"].map((tool) => (
          <button
            key={tool}
            type="button"
            onClick={() => onChoice(tool)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-solid border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-subtle)] cursor-pointer transition-colors hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)]"
          >
            {tool === "Cursor" ? <CursorIcon /> : <ClaudeIcon />}
            Push to {tool}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function CursorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" rx="3" fill="currentColor" opacity="0.1" />
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" rx="3" fill="currentColor" opacity="0.1" />
      <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GoogleDocsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4.5 1.5h4.75L13 5.25V13.5a1 1 0 01-1 1h-7.5a1 1 0 01-1-1v-11a1 1 0 011-1z"
        fill="#4285F4"
        opacity="0.15"
        stroke="#4285F4"
        strokeWidth="0.8"
      />
      <path d="M9.25 1.5V5.25H13" fill="#4285F4" opacity="0.3" />
      <path
        d="M6 8h4M6 10h4M6 12h2.5"
        stroke="#4285F4"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Building Loader ── */

function BuildingLoader({
  tool,
  steps,
  onComplete,
}: {
  tool: string;
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
          <TextShimmerLoader text={`Pushing to ${tool}`} size="sm" />
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

/* ── Done Message ── */

function DoneMessage({ tool }: { tool: string }) {
  const filePath =
    tool === "Cursor"
      ? "~/Projects/sentra/docs/prd-auth-refactor-sso.md"
      : "Claude project: Sentra PRDs / prd-auth-refactor-sso.md";

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
  const location = useLocation();
  const prefill = (location.state as { prefill?: string } | null)?.prefill;
  const hasPrefilled = useRef(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
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
    const prdMessage: ChatMessage = {
      id: `prd-${Date.now()}`,
      role: "assistant",
      type: "prd",
      prdContent: PRD_CONTENT,
      timestamp: formatTime(),
    };

    const choiceMessage: ChatMessage = {
      id: `choice-${Date.now()}`,
      role: "assistant",
      type: "choice",
    };

    setMessages((prev) => [...prev, prdMessage, choiceMessage]);
    setPhase("prd-choice");
  }, []);

  const handleToolChoice = useCallback((tool: string) => {
    setChosenTool(tool);

    // Remove the choice message and add the chosen tool as a user-like message
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

  const handleBuildComplete = useCallback(() => {
    const doneMessage: ChatMessage = {
      id: `done-${Date.now()}`,
      role: "assistant",
      type: "done",
      chosenTool: chosenTool ?? "Cursor",
    };

    setMessages((prev) => [...prev, doneMessage]);
    setPhase("prd-done");
  }, [chosenTool]);

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

    if (isPrdQuery(trimmed)) {
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setActiveScanSteps(PRD_SCAN_STEPS);
      setPhase("prd-scanning");
      return;
    }

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
  }, [input, phase]);

  const handleSuggestionClick = useCallback((text: string) => {
    setInput(text);
  }, []);

  const handleNewSession = useCallback(() => {
    setMessages([]);
    setInput("");
    setPhase("idle");
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

      if (isPrdQuery(prefill)) {
        setMessages([userMessage]);
        setActiveScanSteps(PRD_SCAN_STEPS);
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
  }, [prefill]);

  const hasMessages = messages.length > 0;
  const isLoading =
    phase === "scanning" ||
    phase === "revealing" ||
    phase === "prd-scanning" ||
    phase === "prd-building";

  return (
    <div
      className="flex overflow-hidden -mt-5"
      style={{ height: "calc(100% + 1.25rem)" }}
    >
      <SessionSidebar
        activeSessionId={activeSessionId}
        onSelectSession={handleSelectSession}
        onNewSession={handleNewSession}
      />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {!hasMessages && phase === "idle" ? (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <EmptyState onSuggestionClick={handleSuggestionClick} />
          </div>
        ) : (
          <ChatContainerRoot className="flex-1 min-h-0">
            <ChatContainerContent className="max-w-[680px] mx-auto px-6 pt-8 pb-4 space-y-5">
              {messages.map((msg) => {
                if (msg.type === "prd") {
                  return (
                    <Message key={msg.id} className="justify-start">
                      <div className="flex-1 min-w-0">
                        <PrdDocument content={msg.prdContent ?? ""} />
                      </div>
                    </Message>
                  );
                }

                if (msg.type === "choice") {
                  return (
                    <Message key={msg.id} className="justify-start">
                      <div className="flex-1 min-w-0">
                        <ToolChoicePills onChoice={handleToolChoice} />
                      </div>
                    </Message>
                  );
                }

                if (msg.type === "done") {
                  return (
                    <Message key={msg.id} className="justify-start">
                      <div className="flex-1 min-w-0">
                        <DoneMessage tool={msg.chosenTool ?? "Cursor"} />
                      </div>
                    </Message>
                  );
                }

                if (msg.role === "user") {
                  return (
                    <Message key={msg.id} className="justify-end">
                      <MessageContent className="text-foreground max-w-[72%] text-sm">
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

              {phase === "prd-building" && chosenTool && (
                <Message className="justify-start">
                  <div className="flex-1 min-w-0">
                    <BuildingLoader
                      tool={chosenTool}
                      steps={PRD_BUILD_STEPS}
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
