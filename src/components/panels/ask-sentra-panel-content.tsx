import { useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@lib/utils";
import { useReportsStore } from "@/stores/reports-store";
import { TextDotsLoader } from "@/components/ui/loader";
import {
  ChatContainerRoot,
  ChatContainerContent,
  ChatContainerScrollAnchor,
} from "@/components/ui/chat-container";
import type { ChatMessage } from "@/types";

interface AskSentraPanelContentProps {
  context: { type: string; id: string };
}

const MOCK_RESPONSES = [
  "Based on the report data, the pipeline value increased by 50% this week, driven primarily by the Campfire deal progressing to budget approval stage. Three new discovery calls were completed with Series B startups matching our ICP, bringing the combined new pipeline to $180K ARR. The weighted pipeline now sits at $2.1M with a 15% chance of exceeding our Q1 target if the Campfire deal closes by mid-March as expected.",
  "The main risk flagged across this report is Relay API stability — Andrey is evaluating a shim layer as a fallback, which would add roughly 2 days to the sprint timeline. If not resolved by mid-March, the Vantage deal ($90K ARR) could slip to Q2 since their evaluation period ends March 20. The team is also monitoring the SOC 2 audit timeline, as 4 enterprise deals worth a combined $380K are blocked pending certification.",
  "Three new discovery calls were completed with Series B startups matching the ICP, with a combined pipeline value of $180K ARR. The most promising is Meridian Corp ($120K ARR, 45 seats), sourced through a Campfire partner referral and now evaluating a custom SLA package. Average deal size has increased from $72K to $87K quarter-over-quarter, suggesting the new demo playbook and content marketing investments are attracting larger accounts.",
  "The press kit is at 60% completion with a March 5 deadline — Kristina may need support from a freelance writer to meet the timeline. On the product side, the mobile app beta went out to 25 testers with overwhelmingly positive feedback (4.6/5 on meeting summaries). The new analytics dashboard shipped Monday and saw 78% adoption in the first 48 hours, with 3 customers already asking about API access to the analytics data.",
];

export function AskSentraPanelContent({ context }: AskSentraPanelContentProps) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { chatMessages, addChatMessage } = useReportsStore();
  const responseIndexRef = { current: 0 };

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date().toISOString(),
    };
    addChatMessage(userMessage);
    setInput("");
    setIsTyping(true);

    const responseText =
      MOCK_RESPONSES[responseIndexRef.current % MOCK_RESPONSES.length];
    responseIndexRef.current += 1;

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now()}-reply`,
        role: "assistant",
        content: responseText,
        timestamp: new Date().toISOString(),
      };
      addChatMessage(assistantMessage);
      setIsTyping(false);
    }, 800);
  }, [input, addChatMessage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <div className="flex flex-col h-full">
      <ChatContainerRoot className="flex-1">
        <ChatContainerContent className="p-4 space-y-3">
          {chatMessages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-[var(--fg-disabled)]">
                Ask anything about this {context.type}
              </p>
            </div>
          )}
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-[var(--fg-base)] text-white"
                    : "bg-[var(--bg-subtle)] text-[var(--fg-base)]",
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[var(--bg-subtle)] rounded-xl px-3.5 py-2.5">
                <TextDotsLoader
                  text="Thinking"
                  size="sm"
                  className="text-[var(--fg-muted)]"
                />
              </div>
            </div>
          )}
          <ChatContainerScrollAnchor />
        </ChatContainerContent>
      </ChatContainerRoot>

      <div className="border-t border-[var(--border-base)] p-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Sentra..."
            className="flex-1 text-sm bg-[var(--bg-subtle)] rounded-lg px-3 py-2 outline-none placeholder:text-[var(--fg-disabled)] text-[var(--fg-base)] border border-transparent focus:border-[var(--border-base)]"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim()}
            className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center transition-colors border-none cursor-pointer",
              input.trim()
                ? "bg-[var(--fg-base)] text-white hover:bg-[var(--fg-base)]"
                : "bg-[var(--bg-subtle)] text-[var(--fg-disabled)] cursor-not-allowed",
            )}
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
