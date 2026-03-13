import { BaseChatSidebar } from "@/components/chat/base-chat-sidebar";
import type { ScanStep, ResponseParagraph } from "@/data/mock-deep-research";

const DEFAULT_SUGGESTED_QUESTIONS = [
  "What happened in today\u2019s meetings?",
  "Summarize action items assigned to me",
  "What topics keep coming up across meetings?",
  "Who have I met with most frequently?",
];

const SCAN_STEPS: ScanStep[] = [
  {
    label: "Parsing 8 meeting transcripts from Google Meet...",
    duration: 3200,
  },
  { label: "Reading 5 Slack threads and 3 Notion pages...", duration: 3400 },
  {
    label: "Scanning CRM pipeline and Google Calendar events...",
    duration: 3400,
  },
  {
    label: "Cross-referencing action items and commitments...",
    duration: 2500,
  },
  { label: "Synthesizing findings...", duration: 2500 },
];

const MOCK_PARAGRAPHS: ResponseParagraph[][] = [
  [
    {
      id: "side-p0",
      content:
        "**Key Decisions This Week**\n\nBased on 8 meetings reviewed, there were 4 key decisions: 1) Standardize on the new demo flow for enterprise prospects \u2014 Ashwin rated confidence at '100% or more.' 2) Prioritize SSO/SAML support since 3 enterprise prospects flagged it as a hard requirement. 3) Reframe risk radar as 'commitment tracking' to better match user mental models. 4) Increase content marketing investment for Q2 based on 40% higher close rates from content-sourced deals.",
      sources: [
        { type: "google-meet", label: "GTM Strategy Sync" },
        { type: "slack", label: "#sales-pipeline" },
        { type: "notion", label: "Q1 Deal Tracker" },
      ],
    },
  ],
  [
    {
      id: "side-p1",
      content:
        "**Outstanding Action Items**\n\nYou have 5 outstanding action items: 1) Schedule design review with broader team \u2014 due Friday. 2) Prepare enterprise demo script for Vantage follow-up \u2014 due next Tuesday. 3) Follow up with Meridian Corp on custom SLA requirements. 4) Review onboarding wizard designs in Notion before engineering handoff. 5) Coordinate with Kristina on SXSW press kit completion.",
      sources: [
        { type: "google-meet", label: "Weekly Team Standup" },
        { type: "slack", label: "#action-items" },
        { type: "linear", label: "Sprint Board" },
      ],
    },
  ],
  [
    {
      id: "side-p2",
      content:
        "**Recurring Themes**\n\nRecurring themes across your last 12 meetings: **Pipeline velocity** (mentioned in 8/12), **Enterprise readiness** including SOC 2 and SSO (6/12), **Product onboarding** friction and time-to-value (5/12), and **Content marketing ROI** (4/12). The enterprise readiness theme has increased significantly in the last 2 weeks.",
      sources: [
        { type: "google-meet", label: "Product Roadmap Review" },
        { type: "zoom", label: "Engineering Sprint Retro" },
        { type: "slack", label: "#product" },
      ],
    },
  ],
  [
    {
      id: "side-p3",
      content:
        "**Meeting Frequency**\n\nIn the past 30 days, your most frequent meetings were with: **Ashwin** (8 meetings \u2014 mostly strategy and design reviews), **Andrey** (5 meetings \u2014 product and engineering sync), **Kristina** (3 meetings \u2014 operations and event prep). You also had 6 external meetings with prospects.",
      sources: [
        { type: "google-calendar", label: "Calendar Analysis" },
        { type: "google-meet", label: "Ashwin / Justin 1:1" },
      ],
    },
  ],
];

function getMockResponse(index: number) {
  return {
    paragraphs: MOCK_PARAGRAPHS[index % MOCK_PARAGRAPHS.length],
    scanSteps: SCAN_STEPS,
  };
}

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  suggestedQuestions?: string[];
}

export function ChatSidebar({
  isOpen,
  onClose,
  suggestedQuestions,
}: ChatSidebarProps) {
  return (
    <BaseChatSidebar
      isOpen={isOpen}
      onClose={onClose}
      suggestedQuestions={suggestedQuestions ?? DEFAULT_SUGGESTED_QUESTIONS}
      scanSteps={SCAN_STEPS}
      getMockResponse={getMockResponse}
      placeholder="Ask about your meetings..."
    />
  );
}
