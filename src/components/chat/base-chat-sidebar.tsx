import { X, ArrowUp, Square } from "lucide-react";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from "@/components/prompt-kit/prompt-input";
import {
  ChatContainerRoot,
  ChatContainerContent,
  ChatContainerScrollAnchor,
} from "@/components/ui/chat-container";
import ScanningLoader from "@/components/deep-research/scanning-loader";
import ResponseBlock from "@/components/deep-research/response-block";
import type { ResponseParagraph, ScanStep } from "@/data/mock-deep-research";
import { cn } from "@/lib/utils";
import { useChatSidebar } from "@/hooks/use-chat-sidebar";

export interface BaseChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  suggestedQuestions: string[];
  scanSteps: ScanStep[];
  getMockResponse: (index: number) => {
    paragraphs: ResponseParagraph[];
    scanSteps?: ScanStep[];
  };
  placeholder: string;
}

export function BaseChatSidebar({
  isOpen,
  onClose,
  suggestedQuestions,
  scanSteps,
  getMockResponse,
  placeholder,
}: BaseChatSidebarProps) {
  const {
    input,
    setInput,
    messages,
    phase,
    activeScanSteps,
    canSubmit,
    hasMessages,
    handleSend,
    handleScanComplete,
    handleSuggestion,
  } = useChatSidebar({ isOpen, onClose, getMockResponse });

  const isLoading = phase === "scanning";
  const stepsToUse = activeScanSteps.length > 0 ? activeScanSteps : scanSteps;

  if (!isOpen) return null;

  return (
    <div className="flex flex-col h-full bg-[var(--bg-base)] border-l border-[var(--border-base)]">
      <div className="flex items-center justify-end px-3 pt-3 pb-2">
        <button
          type="button"
          onClick={onClose}
          className="h-7 w-7 rounded-md flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)] transition-colors bg-transparent border-none cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex flex-col flex-1 min-h-0">
        {!hasMessages && phase === "idle" ? (
          <div className="flex-1 flex flex-col items-center justify-center px-5">
            <h2 className="text-xl font-normal text-foreground tracking-tight mb-5">
              Ask anything
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSuggestion(q)}
                  className="items-center bg-transparent border border-solid border-[var(--border-base)] rounded-full text-[var(--fg-subtle)] cursor-pointer inline-flex text-xs leading-4 py-1.5 px-3.5 transition-colors hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)]"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <ChatContainerRoot className="flex-1">
            <ChatContainerContent className="px-4 pt-4 pb-2">
              {messages.map((msg) =>
                msg.role === "user" ? (
                  <div key={msg.id} className="flex justify-end mb-4">
                    <div className="bg-secondary rounded-[18px_18px_4px_18px] text-foreground text-sm leading-relaxed max-w-[85%] px-3.5 py-2.5">
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="mb-5">
                    <ResponseBlock
                      paragraphs={msg.paragraphs ?? []}
                      timestamp={msg.timestamp ?? ""}
                    />
                  </div>
                ),
              )}
              {isLoading && (
                <ScanningLoader
                  steps={stepsToUse}
                  onComplete={handleScanComplete}
                />
              )}
              <ChatContainerScrollAnchor />
            </ChatContainerContent>
          </ChatContainerRoot>
        )}

        <div className="shrink-0 p-3">
          <PromptInput
            value={input}
            onValueChange={setInput}
            isLoading={isLoading}
            onSubmit={handleSend}
            className="rounded-2xl"
          >
            <PromptInputTextarea placeholder={placeholder} />
            <PromptInputActions className="justify-end px-2 pb-2">
              <PromptInputAction tooltip={isLoading ? "Stop" : "Send"}>
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!canSubmit}
                  className={cn(
                    "items-center border-none rounded-full text-white flex shrink-0 size-7 justify-center p-0",
                    canSubmit
                      ? "bg-[var(--fg-base)] cursor-pointer"
                      : "bg-disabled-foreground shadow-none cursor-not-allowed",
                  )}
                >
                  {isLoading ? (
                    <Square size={12} fill="currentColor" />
                  ) : (
                    <ArrowUp size={14} />
                  )}
                </button>
              </PromptInputAction>
            </PromptInputActions>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}
