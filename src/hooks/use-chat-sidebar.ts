import { useState, useEffect, useRef, useCallback } from "react";
import type { ResponseParagraph } from "@/data/mock-deep-research";
import { formatTime } from "@/lib/date-utils";

export type Phase = "idle" | "scanning" | "complete";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content?: string;
  paragraphs?: ResponseParagraph[];
  timestamp?: string;
}

interface UseChatSidebarConfig {
  isOpen: boolean;
  onClose: () => void;
  getMockResponse: (index: number) => {
    paragraphs: ResponseParagraph[];
    scanSteps?: import("@/data/mock-deep-research").ScanStep[];
  };
}

export function useChatSidebar({
  isOpen,
  onClose,
  getMockResponse,
}: UseChatSidebarConfig) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeScanSteps, setActiveScanSteps] = useState<
    import("@/data/mock-deep-research").ScanStep[]
  >([]);
  const [pendingResponse, setPendingResponse] = useState<{
    paragraphs: ResponseParagraph[];
    timestamp: string;
  } | null>(null);
  const messageCountRef = useRef(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed || phase === "scanning") return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    const idx = messageCountRef.current;
    messageCountRef.current += 1;

    const mockResponse = getMockResponse(idx);

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (mockResponse.scanSteps) {
      setActiveScanSteps(mockResponse.scanSteps);
    }
    setPendingResponse({
      paragraphs: mockResponse.paragraphs,
      timestamp: formatTime(),
    });
    setPhase("scanning");
  }, [input, phase, getMockResponse]);

  const handleSuggestion = useCallback((q: string) => {
    setInput(q);
  }, []);

  const canSubmit = input.trim().length > 0 && phase !== "scanning";
  const hasMessages = messages.length > 0 || phase === "scanning";

  return {
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
  };
}
