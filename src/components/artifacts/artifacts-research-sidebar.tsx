import { BaseChatSidebar } from "@/components/chat/base-chat-sidebar";
import { getMockResponse, SUGGESTIONS } from "@/data/mock-deep-research";
import type { ScanStep } from "@/data/mock-deep-research";

const SCAN_STEPS: ScanStep[] = [
  { label: "Scanning reports and radar items...", duration: 3200 },
  { label: "Analyzing trends across data sources...", duration: 3400 },
  {
    label: "Cross-referencing findings with meeting context...",
    duration: 3400,
  },
  { label: "Mapping action items and commitments...", duration: 2500 },
  { label: "Synthesizing findings...", duration: 2500 },
];

interface ArtifactsResearchSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ArtifactsResearchSidebar({
  isOpen,
  onClose,
}: ArtifactsResearchSidebarProps) {
  return (
    <BaseChatSidebar
      isOpen={isOpen}
      onClose={onClose}
      suggestedQuestions={SUGGESTIONS.slice(0, 4)}
      scanSteps={SCAN_STEPS}
      getMockResponse={getMockResponse}
      placeholder="Ask Sentra anything..."
    />
  );
}
