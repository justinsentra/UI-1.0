import { BaseChatSidebar } from "@/components/chat/base-chat-sidebar";
import {
  getMockResponse,
  getPersonaDeepResearch,
} from "@/data/content-resolver";
import type { ScanStep } from "@/data/mock-deep-research";
import { usePersonaStore } from "@/stores/persona-store";

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
  const persona = usePersonaStore((s) => s.persona);
  const { suggestions } = getPersonaDeepResearch(persona);

  return (
    <BaseChatSidebar
      isOpen={isOpen}
      onClose={onClose}
      suggestedQuestions={suggestions.slice(0, 4).map((s) => s.label)}
      scanSteps={SCAN_STEPS}
      getMockResponse={getMockResponse}
      placeholder="Ask Sentra anything..."
    />
  );
}
