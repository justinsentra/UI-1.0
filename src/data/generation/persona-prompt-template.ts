/**
 * Master prompt template for generating persona content.
 *
 * Used by the /generate-persona Claude Code skill.
 * Claude Code itself is the generation engine — no separate API call needed.
 *
 * The skill fills in the {{placeholders}} with prospect info, then follows
 * the instructions to write TypeScript data files.
 */

export const PERSONA_PROMPT_TEMPLATE = `
You are generating realistic mock content for the Sentra desktop UI demo app.
The content must feel authentic and internally consistent for the target persona.

## Prospect Info

- **Name:** {{personName}}
- **Title:** {{personTitle}}
- **Company:** {{companyName}}
- **Company Description:** {{companyDescription}}
- **Industry:** {{industry}}
- **LinkedIn Context:** {{linkedinContext}}
- **Special Notes:** {{specialNotes}}

## What You Are Generating

A complete set of TypeScript data files that populate every page of the Sentra app
with content tailored to this persona's industry, role, and daily workflow.

All files go in: \`src/data/personas/{{personaId}}/\`

---

## File 1: home.ts

**Export as:** \`export const homeData: PersonaHomeData = { ... }\`

Exports a \`PersonaHomeData\` object with:

\`\`\`typescript
interface PersonaHomeData {
  suggestions: string[];           // 4 quick-action suggestions for the home search bar
  artifacts: PersonaArtifactCard[];  // 3 cards shown on home (reports, radars, deep research links)
  upcomingMeeting: PersonaUpcomingMeeting;  // next meeting on calendar
  preMeetingBrief: PreMeetingBrief;         // AI-generated brief for that meeting
}

interface PersonaArtifactCard {
  id: string;
  reportId?: string;               // links to a report detail page if type is "report"
  title: string;
  description: string;
  type: "report" | "radar" | "action";
  badge?: string;                  // e.g. "New", "Updated"
  deepResearchPrompt?: string;     // if clicking opens deep research with this prefilled query
}

interface PersonaUpcomingMeeting {
  id: string;                      // must match a meeting in meetings.ts
  title: string;
  time: string;                    // e.g. "2:00 PM"
  endTime: string;                 // e.g. "3:00 PM"
  duration: string;                // e.g. "1h"
  participants: string[];
  platform: string;                // "Google Meet" or "Zoom"
}

interface PreMeetingBrief {
  meetingTitle: string;
  meetingTime: string;
  meetingEndTime: string;
  attendees: BriefAttendee[];
  insights: BriefInsight[];
}

interface BriefAttendee {
  name: string;
  role: string;
  initials: string;
  lastSpoke: string;               // e.g. "2 days ago"
}

interface BriefInsight {
  heading: string;
  source: { quote: string; meetingTitle: string; meetingDate: string };
  summary: string;
}
\`\`\`

**Rules:**
- Suggestions should be questions this persona would actually type into Sentra
- Artifacts should reference real reports/radars from reports.ts
- The upcoming meeting must exist in meetings.ts with matching id
- Pre-meeting brief attendees should appear in the meeting's participants
- Brief insights should reference meetings from meetings.ts

---

## File 2: meetings.ts

**Export as:** \`export const meetings: Meeting[] = [...]\`

Exports a \`Meeting[]\` array with 5-7 meetings.

\`\`\`typescript
interface Meeting {
  id: string;
  title: string;
  date: string;                    // e.g. "Mar 7, 2026"
  time: string;
  endTime?: string;
  duration: string;
  participants: string[];
  tags: string[];
  platform: "Google Meet" | "Zoom";
  privacy: "public" | "private";
  summary: string;                 // 2-3 sentence AI-generated summary
  keyPoints: KeyPoint[];           // 3-5 key points
  actionItems: ActionItem[];       // 2-4 action items
  transcript: TranscriptEntry[];   // 8-15 transcript lines
}

interface KeyPoint { title: string; description: string; participants: string[] }
interface ActionItem { id: string; title: string; description: string; assignee: string; checked: boolean }
interface TranscriptEntry { speaker: string; text: string; isMe?: boolean }
\`\`\`

**Rules:**
- Meeting titles should reflect this persona's actual work
- Participants should appear in connections (people list)
- Tags should be industry-appropriate (e.g. "deal-review" for finance, "sprint" for tech)
- Transcripts should feel natural — use the persona's jargon
- At least one meeting should be the upcomingMeeting referenced in home.ts
- Mix of "Google Meet" and "Zoom" platforms
- Action items should connect to commitments.ts entries

---

## File 3: connections.ts

**Export as:** \`export const connections: PersonaConnectionsData = { people: [...], companies: [...] }\`

Exports \`{ people, companies }\`.

\`\`\`typescript
interface PersonaConnectionsData {
  people: {
    id: string;
    name: string;
    email: string;
    lastInteraction: string;       // e.g. "2 days ago"
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
\`\`\`

**Rules:**
- 15-25 people, 8-15 companies
- People should include all meeting participants plus extras
- Company names should be realistic for the industry
- The prospect's own company should be included
- Include a mix of internal colleagues, clients, and partners

---

## File 4: reports.ts

**Export as:** \`export const reportsData: PersonaReportsData = { ... }\`

Exports a \`PersonaReportsData\` object.

\`\`\`typescript
interface PersonaReportsData {
  reportCategories: ReportCategory[];   // 4-6 categories
  activeRadars: RadarConfig[];          // 3-5 active radar items
  reportPreferenceCards: ReportPreferenceCard[];
  defaultRadarOptions: { id: string; label: string; description: string }[];
  chatSuggestions: { reports: string[]; radar: string[] };
}

interface ReportCategory {
  id: string;
  name: string;
  type: "report" | "radar";
  reportCount: number;
  reports: ReportSummary[];
  priority?: "High" | "Med";
}
interface ReportSummary { id: string; dateRange: string; date: string; isLatest: boolean }
interface RadarConfig { id: string; name: string; prompt: string; isActive: boolean; createdAt: string }
interface ReportPreferenceCard { id: string; label: string; description: string }
\`\`\`

**Rules:**
- Report categories should reflect what this persona cares about
- At least 2 categories should have full report details in report-details.ts
- Radar items should monitor industry-relevant signals
- Chat suggestions should be questions this persona would ask about their reports

---

## File 5: report-details.ts

**Export as:** \`export const reportDetails: Record<string, ReportDetail> = { ... }\`

Exports a \`Record<string, ReportDetail>\` mapping report IDs to full content.

\`\`\`typescript
interface ReportDetail {
  id: string;
  title: string;
  dateRange: string;
  sections: ReportSection[];        // 3-5 sections with real content
  drillDowns?: ReportSection[];     // optional deeper analysis sections
  sources: Source[];
  suggestedActions: SuggestedAction[];
}
interface ReportSection { heading: string; paragraphs: string[] }
interface Source {
  type: "slack" | "linear" | "meeting" | "email" | "google-meet" | "google-calendar" |
        "google-drive" | "notion" | "asana" | "discord" | "outlook" | "zoom" | "github" | "google-docs";
  label: string;
}
interface SuggestedAction { icon: "mail" | "calendar" | "clock"; label: string }
\`\`\`

**Rules:**
- Generate details for at least 2 reports (the latest from the top 2 categories)
- Paragraphs should contain real-seeming analysis, not lorem ipsum
- Sources should be tools this persona's team would actually use
- Suggested actions should be realistic next steps

---

## File 6: deep-research.ts

**Export as:** \`export const deepResearchData: PersonaDeepResearchData = { ... }\`

Exports a \`PersonaDeepResearchData\` object.

\`\`\`typescript
interface PersonaDeepResearchData {
  suggestions: string[];              // 6-8 suggested research queries
  sessionHistory: SessionHistoryItem[];  // 8-12 past sessions
  documentFlows: DocumentFlowConfig[];   // 2-3 document generation flows
  vendorEvalResponse?: MockResponse;
  vendorEvalTriggerKeywords?: string[];
}

interface SessionHistoryItem { id: string; title: string; date: string; query: string }

interface DocumentFlowConfig {
  id: string;
  label: string;                      // e.g. "PRD", "Financial Model", "Patient Outcome Report"
  filename: string;                   // e.g. "quarterly-model.xlsx"
  scanSteps: PrdScanStep[];           // 4-6 scanning phase labels
  content: string;                    // full markdown document content (detailed, 500+ words)
  buildSteps: PrdScanStep[];          // 3-5 building phase labels
  sources: SourceRef[];               // 4-8 source references
  triggerKeywords: string[];          // words in user query that activate this flow
  toolChoices: ToolChoice[];          // 2-3 tool options shown after scan
  doneMessage: {
    title: string;
    description: string;
    link?: { label: string; url: string };
  };
  buildingLabel: string;              // e.g. "Building your PRD..."
}

interface PrdScanStep { label: string; duration: number }  // duration in ms, 2000-4000
interface SourceRef { type: SourceType; label: string }
type SourceType = "slack" | "linear" | "github" | "zoom" | "google-docs" | "google-meet" |
  "google-calendar" | "google-drive" | "notion" | "asana" | "discord" | "outlook" | "email";
interface ToolChoice { label: string; action: "build" | "cancel" | "external"; externalUrl?: string }

// MockResponse for vendor eval / custom research
interface MockResponse {
  scanSteps: ScanStep[];
  paragraphs: ResponseParagraph[];
}
interface ScanStep { label: string; duration: number }
interface ResponseParagraph { id: string; content: string; sources: SourceRef[] }
\`\`\`

**Rules:**
- Document flows must be industry-appropriate (2-3 flows per persona)
  - Finance: financial models, valuation reports, deal memos
  - Healthcare: patient outcome reports, compliance audits, budget analyses
  - Tech: PRDs, architecture docs, sprint reports
  - Energy: regulatory filings, production reports, safety audits
- Content field should be detailed markdown (500+ words) with realistic data/metrics
- Trigger keywords should be specific enough to avoid false matches
- Scan step labels should reference realistic data sources for the industry
- Session history dates should be "Today", "Yesterday", "Last week"
- If relevant, include a vendor eval flow with trigger keywords

---

## File 7: commitments.ts

**Export as:** \`export const commitments: CommitmentItem[] = [...]\`

Exports a \`CommitmentItem[]\` array.

\`\`\`typescript
interface CommitmentItem {
  id: string;
  title: string;
  meeting: string;           // meeting title (display text)
  meetingId: string;          // must match a meeting in meetings.ts
  meetingDate: string;
  dueDate: string;
  completed: boolean;
}
\`\`\`

**Rules:**
- 8-15 commitment items
- Mix of completed (30%) and open (70%)
- Meeting references must match actual meetings from meetings.ts
- Titles should be concrete actions, not vague

---

## File 8: index.ts (persona entry point)

This file imports all the above, composes them into a \`PersonaData\` object,
and calls \`registerPersonaData\` to register the persona at import time.

\`\`\`typescript
import { registerPersonaData } from "@/data/personas";
import { homeData } from "./home";
import { meetings } from "./meetings";
import { connections } from "./connections";
import { reportsData } from "./reports";
import { reportDetails } from "./report-details";
import { deepResearchData } from "./deep-research";
import { commitments } from "./commitments";

registerPersonaData("{{personaId}}", {
  home: homeData,
  meetings,
  connections,
  reports: reportsData,
  reportDetails,
  deepResearch: deepResearchData,
  commitments,
});
\`\`\`

---

## Cross-File Consistency Rules (CRITICAL)

1. **Participants ↔ Connections:** Every meeting participant must appear in connections.people
2. **Meeting IDs:** The upcoming meeting in home.ts must have a matching entry in meetings.ts
3. **Commitments ↔ Meetings:** Every commitment's meetingId must match a meeting in meetings.ts
4. **Report IDs:** Artifact cards linking to reports must use IDs that exist in reports.ts
5. **Deep Research ↔ Reports:** Artifact cards with deepResearchPrompt should trigger a document flow
6. **Source types:** Use tools the persona's industry actually uses (e.g. finance uses Bloomberg, CloudForce — map to closest available SourceType)
8. **Dates:** Keep dates in early March 2026, use relative dates ("Today", "Yesterday", "2 days ago") where possible
9. **Names:** Use realistic names for the industry/region. Include the prospect's actual name as a participant in at least 2 meetings.

## Content Quality Rules

- No lorem ipsum or placeholder text
- Reports should contain real-seeming metrics and analysis
- Transcript dialogue should feel natural, not robotic
- Use industry-specific terminology correctly
- Meeting summaries should be concise and insight-rich
- Deep research content should be detailed (500+ words per document flow)

## Output Format

Generate each file as valid TypeScript. Use \`export const\` for all exports.
Include proper imports at the top of each file. Use the \`@/\` path alias for imports.
`;
