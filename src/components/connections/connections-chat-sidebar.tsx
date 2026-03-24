import { BaseChatSidebar } from "@/components/chat/base-chat-sidebar";
import type { ScanStep, ResponseParagraph } from "@/data/mock-deep-research";

const SUGGESTED_QUESTIONS = [
  "Who should I reconnect with this week?",
  "Summarize my relationship with Raj",
  "Which contacts have gone cold recently?",
  "What commitments do I have to external contacts?",
];

const SCAN_STEPS: ScanStep[] = [
  {
    label: "Scanning meeting transcripts and calendar events...",
    duration: 3200,
  },
  { label: "Analyzing email and ChatWorks conversations...", duration: 3400 },
  {
    label: "Cross-referencing CRM data and contact history...",
    duration: 3400,
  },
  { label: "Mapping relationship patterns and commitments...", duration: 2500 },
  { label: "Synthesizing findings...", duration: 2500 },
];

const MOCK_PARAGRAPHS: ResponseParagraph[][] = [
  [
    {
      id: "conn-p0",
      content:
        "**Relationship Health Check**\n\nBased on your interaction patterns, 3 contacts need attention: **Meera Kapoor** (last contact 6 days ago, typically weekly), **Fiona Webb** (last contact 5 days ago, deal follow-up pending), and **Eloise Dubois** (no contact in 12 days, she requested a StellarBank integration demo). Consider scheduling quick touchpoints this week.",
      sources: [
        { type: "google-calendar", label: "Calendar Analysis" },
        { type: "email", label: "Email Threads" },
        { type: "slack", label: "#partnerships" },
      ],
    },
  ],
  [
    {
      id: "conn-p1",
      content:
        "**Key Relationship Summary**\n\nRaj Sundaram is your most frequent collaborator (24 interactions this month). Primary topics: product strategy, enterprise demo flow, and TechConnect launch prep. Last meeting covered the new onboarding wizard designs. Open commitments: share updated demo script by Friday, coordinate on press kit messaging.",
      sources: [
        { type: "google-meet", label: "Raj / Leo 1:1" },
        { type: "slack", label: "#product-strategy" },
        { type: "notion", label: "Launch Checklist" },
      ],
    },
  ],
  [
    {
      id: "conn-p2",
      content:
        "**Cold Contacts Alert**\n\nContacts with declining engagement: **Yara Osman** (2 interactions total, last 8 days ago), **Vivian Xu** (2 interactions, last 23 days ago), **Matteo Cortez** (2 interactions, last 46 days). Lisa and Sam may need re-engagement if they're still relevant to your pipeline. Nina's last conversation was about an OpenAI partnership exploration.",
      sources: [
        { type: "google-calendar", label: "Contact Frequency" },
        { type: "email", label: "Outreach Threads" },
      ],
    },
  ],
  [
    {
      id: "conn-p3",
      content:
        "**Outstanding Commitments**\n\nYou have 4 open commitments to external contacts: 1) Follow up with **Sofia Alvarez** on Payvine integration timeline. 2) Send **Gavin Mercer** the Launchframe deployment case study. 3) Schedule intro between **Ethan Rowe** and Raj per Summit Ventures request. 4) Share SOC 2 compliance timeline with **Chloe Barrett** at BlueBridge.",
      sources: [
        { type: "google-meet", label: "Partner Meetings" },
        { type: "slack", label: "#commitments" },
        { type: "linear", label: "Action Items" },
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

interface ConnectionsChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectionsChatSidebar({
  isOpen,
  onClose,
}: ConnectionsChatSidebarProps) {
  return (
    <BaseChatSidebar
      isOpen={isOpen}
      onClose={onClose}
      suggestedQuestions={SUGGESTED_QUESTIONS}
      scanSteps={SCAN_STEPS}
      getMockResponse={getMockResponse}
      placeholder="Ask about your connections..."
    />
  );
}
