import type {
  Meeting,
  ReportCategory,
  RadarConfig,
  ReportDetail,
  ReportPreferenceCard,
} from "@/types";
import type { CommitmentItem } from "@/data/mock-commitments";
import type {
  SessionHistoryItem,
  MockResponse,
  SourceRef,
  PrdScanStep,
} from "@/data/mock-deep-research";
import type { PreMeetingBrief } from "@/data/mock-pre-meeting-brief";

/* ── Persona data shape interfaces ── */

export interface PersonaHomeData {
  suggestions: string[];
  artifacts: PersonaArtifactCard[];
  upcomingMeeting: PersonaUpcomingMeeting;
  preMeetingBrief: PreMeetingBrief;
}

export interface PersonaUpcomingMeeting {
  id: string;
  title: string;
  time: string;
  endTime: string;
  duration: string;
  participants: string[];
  platform: string;
}

export interface PersonaArtifactCard {
  id: string;
  reportId?: string;
  title: string;
  description: string;
  type: "report" | "radar" | "action";
  badge?: string;
  deepResearchPrompt?: string;
}

export interface DocumentFlowConfig {
  id: string;
  label: string;
  filename: string;
  scanSteps: PrdScanStep[];
  content: string;
  buildSteps: PrdScanStep[];
  sources: SourceRef[];
  /** Keywords that trigger this flow when user types a query */
  triggerKeywords: string[];
  /** Tool choice pills shown after scanning completes */
  toolChoices: ToolChoice[];
  /** What to show when building is done */
  doneMessage: {
    title: string;
    description: string;
    link?: { label: string; url: string };
  };
  /** Label shown during the build phase */
  buildingLabel: string;
}

export interface ToolChoice {
  label: string;
  action: "build" | "cancel" | "external";
  externalUrl?: string;
}

export interface PersonaDeepResearchData {
  suggestions: string[];
  sessionHistory: SessionHistoryItem[];
  /** Document flows for this persona (PRD, financial model, weekly report, etc.) */
  documentFlows: DocumentFlowConfig[];
  /** Optional vendor eval or custom research flow */
  vendorEvalResponse?: MockResponse;
  vendorEvalTriggerKeywords?: string[];
}

export interface PersonaReportsData {
  reportCategories: ReportCategory[];
  activeRadars: RadarConfig[];
  reportPreferenceCards: ReportPreferenceCard[];
  defaultRadarOptions: { id: string; label: string; description: string }[];
  chatSuggestions: { reports: string[]; radar: string[] };
}

export interface PersonaConnectionsData {
  people: {
    id: string;
    name: string;
    email: string;
    lastInteraction: string;
    interactions: number;
  }[];
  companies: {
    id: string;
    name: string;
    domain: string;
    contacts: number;
    lastInteraction: string;
  }[];
}

export interface PersonaData {
  home: PersonaHomeData;
  meetings: Meeting[];
  connections: PersonaConnectionsData;
  reports: PersonaReportsData;
  reportDetails: Record<string, ReportDetail>;
  deepResearch: PersonaDeepResearchData;
  commitments: CommitmentItem[];
}

/* ── Generated persona data registry ── */

// Each generated persona registers its data here via its index.ts
// Key is the persona id (e.g., "healthcare-vp")
const generatedPersonaData: Record<string, PersonaData> = {};

export function registerPersonaData(
  personaId: string,
  data: PersonaData,
): void {
  generatedPersonaData[personaId] = data;
}

export function getGeneratedPersonaData(
  personaId: string,
): PersonaData | undefined {
  return generatedPersonaData[personaId];
}
