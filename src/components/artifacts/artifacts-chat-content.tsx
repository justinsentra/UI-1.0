import { useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@lib/utils";
import { useReportsStore } from "@/stores/reports-store";
import { chatSuggestions } from "@/data/mock-reports";
import { TextDotsLoader } from "@/components/ui/loader";
import {
  ChatContainerRoot,
  ChatContainerContent,
  ChatContainerScrollAnchor,
} from "@/components/ui/chat-container";
import type { ChatMessage } from "@/types";

const MOCK_RESPONSES = [
  "Based on the latest reports, the pipeline value increased by 50% this week, driven primarily by the Campfire deal progressing to budget approval stage. Three new discovery calls were completed with Series B startups matching our ICP. The weighted pipeline now sits at $2.1M, and if the Campfire deal closes as expected by mid-March, we'll exceed our Q1 target by 15%. Notably, the average deal size has increased from $72K to $87K quarter-over-quarter.",
  "The main risk flagged across reports is the Relay API stability issue — Andrey is evaluating a shim layer as a fallback, which would add roughly 2 days to the sprint timeline. If not resolved by mid-March, the Vantage deal ($90K ARR) could slip to Q2 since their evaluation period ends March 20. On a positive note, the CI/CD pipeline improvements shipped this week reduced build times from 12 to 4 minutes, which should help the team recover velocity.",
  "Looking at the engineering overview, sprint velocity has been consistent at 85% completion rate. The main blocker is the authentication service migration (AUTH-142), which is 3 days behind after discovering legacy session handling that needs migration. This is blocking three downstream features: SSO support, team permissions, and audit logging. Jordan estimates 4 more days to complete, and the team is considering a parallel track to unblock the SSO work independently.",
  "Customer success metrics show strong engagement — NPS score improved from 42 to 48 this month, with enterprise accounts averaging 56. Two customers flagged minor integration issues around webhook reliability and API rate limits that the team is actively addressing. The new analytics dashboard shipped Monday and saw 78% adoption in the first 48 hours, with users highlighting the real-time data refresh as the standout feature. Three customers have already asked about API access to the analytics data.",
];

export function ArtifactsChatContent() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { activeTab, artifactsChatMessages, addArtifactsChatMessage } =
    useReportsStore();
  const responseIndexRef = { current: 0 };

  const suggestions =
    activeTab === "reports" ? chatSuggestions.reports : chatSuggestions.radar;

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMessage: ChatMessage = {
        id: `msg-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: new Date().toISOString(),
      };
      addArtifactsChatMessage(userMessage);
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
        addArtifactsChatMessage(assistantMessage);
        setIsTyping(false);
      }, 800);
    },
    [addArtifactsChatMessage],
  );

  const handleSend = useCallback(() => {
    sendMessage(input);
  }, [input, sendMessage]);

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
          {artifactsChatMessages.length === 0 && (
            <div className="py-6">
              <p className="text-sm text-[var(--fg-disabled)] mb-4">
                Ask anything about your{" "}
                {activeTab === "reports" ? "reports" : "radars"}
              </p>
              <div className="space-y-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="w-full text-left px-3 py-2.5 text-sm text-[var(--fg-base)] bg-[var(--bg-subtle)] rounded-lg hover:bg-[var(--bg-component-hover)] transition-colors border border-[var(--border-base)] cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          {artifactsChatMessages.map((msg) => (
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
