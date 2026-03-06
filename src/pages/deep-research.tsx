import { useState, useRef, useCallback } from "react";
import type { ResponseParagraph } from "@/data/mock-deep-research";
import { getMockResponse } from "@/data/mock-deep-research";
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

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content?: string;
  paragraphs?: ResponseParagraph[];
  timestamp?: string;
}

type Phase = "idle" | "scanning" | "revealing" | "complete";

const formatTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const DeepResearchPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeScanSteps, setActiveScanSteps] = useState<ScanStep[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [pendingResponse, setPendingResponse] = useState<{
    paragraphs: ResponseParagraph[];
    timestamp: string;
  } | null>(null);
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

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed || phase === "scanning" || phase === "revealing") return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

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
    messageCountRef.current = 0;
  }, []);

  const handleSelectSession = useCallback((id: string) => {
    setActiveSessionId(id);
  }, []);

  const hasMessages = messages.length > 0;
  const isLoading = phase === "scanning" || phase === "revealing";

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
              {messages.map((msg) =>
                msg.role === "user" ? (
                  <Message key={msg.id} className="justify-end">
                    <MessageContent className="text-foreground max-w-[72%] text-sm">
                      {msg.content}
                    </MessageContent>
                  </Message>
                ) : (
                  <Message key={msg.id} className="justify-start">
                    <div className="flex-1 min-w-0">
                      <ResponseBlock
                        paragraphs={msg.paragraphs ?? []}
                        timestamp={msg.timestamp ?? ""}
                      />
                    </div>
                  </Message>
                ),
              )}
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
