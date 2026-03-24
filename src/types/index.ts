export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  endTime?: string;
  duration: string;
  participants: string[];
  tags: string[];
  platform: "Google Meet" | "Zoom";
  privacy: "public" | "private";
  summary: string;
  keyPoints: KeyPoint[];
  actionItems: ActionItem[];
  transcript: TranscriptEntry[];
}

export interface KeyPoint {
  title: string;
  description: string;
  participants: string[];
}

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  assignee: string;
  checked: boolean;
}

export interface TranscriptEntry {
  speaker: string;
  text: string;
  isMe?: boolean;
}

export interface ReportCategory {
  id: string;
  name: string;
  type: "report" | "radar";
  reportCount: number;
  reports: ReportSummary[];
  priority?: "High" | "Med";
}

export interface ReportSummary {
  id: string;
  dateRange: string;
  date: string;
  isLatest: boolean;
}

export interface ReportDetail {
  id: string;
  title: string;
  dateRange: string;
  sections: ReportSection[];
  drillDowns?: ReportSection[];
  evidence?: EvidenceQuote[];
  sources: Source[];
  suggestedActions: SuggestedAction[];
}

export interface ReportSection {
  heading: string;
  paragraphs: string[];
  sources?: Source[];
}

export interface Source {
  type:
    | "slack"
    | "linear"
    | "meeting"
    | "email"
    | "google-meet"
    | "google-calendar"
    | "google-drive"
    | "notion"
    | "asana"
    | "discord"
    | "outlook"
    | "zoom"
    | "github"
    | "google-docs"
    | "teams"
    | "sharepoint";
  label: string;
}

export interface EvidenceQuote {
  speaker: string;
  quote: string;
  meetingTitle: string;
  meetingDate: string;
  sourceType: Source["type"];
}

export interface SuggestedAction {
  icon: "mail" | "calendar" | "clock";
  label: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ReportComment {
  id: string;
  text: string;
  author: string;
  timestamp: string;
  highlightedText: string;
  sectionIndex: number;
  startOffset: number;
  endOffset: number;
}

export interface RadarConfig {
  id: string;
  name: string;
  prompt: string;
  isActive: boolean;
  createdAt: string;
}

export interface ReportPreferenceCard {
  id: string;
  label: string;
  description: string;
}
