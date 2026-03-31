import { meetings } from "@/data/mock-meetings";
import { people, companies } from "@/data/mock-connections";
import {
  reportCategories,
  activeRadars,
  reportPreferenceCards,
  defaultRadarOptions,
  chatSuggestions,
} from "@/data/mock-reports";
import { getReportDetail as getBuiltinReportDetail } from "@/data/mock-report-details";
import { initialCommitments } from "@/data/mock-commitments";
import {
  SESSION_HISTORY,
  SUGGESTIONS,
  MOCK_RESPONSES,
  getMockResponse,
  VENDOR_EVAL_RESPONSE,
  MODEL_SOURCES,
  WEEKLY_SOURCES,
  EM_PRD_SOURCES,
  EM_SCAN_STEPS,
  EM_CONTENT,
  EM_BUILD_STEPS,
  PRD_SCAN_STEPS,
  PRD_CONTENT,
  PRD_BUILD_STEPS,
  WEEKLY_SCAN_STEPS,
  WEEKLY_CONTENT,
  WEEKLY_BUILD_STEPS,
  SECONDARY_OFFERING_SOURCES,
  SECONDARY_OFFERING_SCAN_STEPS,
  SECONDARY_OFFERING_CONTENT,
  SECONDARY_OFFERING_BUILD_STEPS,
} from "@/data/mock-deep-research";
import { PRE_MEETING_BRIEF } from "@/data/mock-pre-meeting-brief";
import { getGeneratedPersonaData } from "@/data/personas";
import type { Meeting, ReportDetail } from "@/types";
import type { CommitmentItem } from "@/data/mock-commitments";
import type {
  PersonaHomeData,
  PersonaDeepResearchData,
  PersonaReportsData,
  PersonaConnectionsData,
  PersonaUpcomingMeeting,
  PersonaArtifactCard,
  DocumentFlowConfig,
} from "@/data/personas";

const BUILTIN_IDS = new Set(["engineering-manager", "jpm"]);

function isBuiltin(personaId: string): boolean {
  return BUILTIN_IDS.has(personaId);
}

/* ── Home ── */

const BUILTIN_SUGGESTIONS: Record<string, string[]> = {
  "engineering-manager": [
    "What happened in today's meetings?",
    "Summarize this week's progress",
    "What are the team's blockers?",
    "Draft a PRD",
  ],
  jpm: [
    "Catch me up on what I missed last week",
    "Prep me for the 2pm call with David Chen",
    "What's the status of the Oracle migration?",
  ],
};

const BUILTIN_UPCOMING_MEETING: PersonaUpcomingMeeting = {
  id: "um-1",
  title: "David Chen — Secondary Offering",
  time: "2:00 PM",
  endTime: "2:45 PM",
  duration: "45 min",
  participants: ["David Chen", "Margaret Liu", "Nathan Lim"],
  platform: "Zoom",
};

const BUILTIN_ARTIFACTS: Record<string, PersonaArtifactCard[]> = {
  "engineering-manager": [
    {
      id: "art-1",
      reportId: "rpt-co-1",
      title: "Company Overview",
      description:
        "Weekly report covering product, engineering, and GTM progress",
      type: "report",
      badge: "New",
    },
    {
      id: "art-2",
      reportId: "rpt-gtm-1",
      title: "GTM Status Report",
      description: "Pipeline health, outbound metrics, and partnership updates",
      type: "report",
      badge: "New",
    },
    {
      id: "art-3",
      title: "Draft a PRD for the engineering sync I just had",
      description:
        "Generate a product requirements doc from the eng sync discussion",
      type: "action",
      deepResearchPrompt: "Draft a PRD for the engineering sync I just had",
    },
  ],
  jpm: [
    {
      id: "art-1",
      title: "Secondary Offering Memo — NovaBridge Capital",
      description:
        "Draft a preliminary secondary offering memo using the latest CFO financials, SharePoint model, and comparable transactions",
      type: "action",
      badge: "New",
      deepResearchPrompt:
        "Draft a preliminary secondary offering memo for David Chen's company using the latest financials from the CFO email thread, the Q3 earnings data in the SharePoint model, and comparable transactions from the last 12 months",
    },
    {
      id: "art-2",
      title: "Oracle Migration Delay Analysis",
      description:
        "Investigate why the Oracle migration is past its original deadline and identify the root cause",
      type: "action",
      deepResearchPrompt:
        "Why are we past the original deadline for the Oracle migration?",
    },
    {
      id: "art-3",
      title: "Build a 3-Statement Financial Model for Meridian Corp",
      description:
        "Generate an integrated income statement, balance sheet, and cash flow model from recent deal data",
      type: "action",
      deepResearchPrompt:
        "Build a 3-statement financial model for Meridian Corp",
    },
  ],
};

export function getPersonaHome(personaId: string): PersonaHomeData {
  if (isBuiltin(personaId)) {
    return {
      suggestions: BUILTIN_SUGGESTIONS[personaId] ?? BUILTIN_SUGGESTIONS.jpm,
      artifacts: BUILTIN_ARTIFACTS[personaId] ?? BUILTIN_ARTIFACTS.jpm,
      upcomingMeeting: BUILTIN_UPCOMING_MEETING,
      preMeetingBrief: PRE_MEETING_BRIEF,
    };
  }
  const generated = getGeneratedPersonaData(personaId);
  if (generated) return generated.home;
  // Fallback to JPM
  return {
    suggestions: BUILTIN_SUGGESTIONS.jpm,
    artifacts: BUILTIN_ARTIFACTS.jpm,
    upcomingMeeting: BUILTIN_UPCOMING_MEETING,
    preMeetingBrief: PRE_MEETING_BRIEF,
  };
}

/* ── Meetings ── */

export function getPersonaMeetings(personaId: string): Meeting[] {
  if (isBuiltin(personaId)) return meetings;
  const generated = getGeneratedPersonaData(personaId);
  return generated?.meetings ?? meetings;
}

/* ── Connections ── */

export function getPersonaConnections(
  personaId: string,
): PersonaConnectionsData {
  if (isBuiltin(personaId)) return { people, companies };
  const generated = getGeneratedPersonaData(personaId);
  return generated?.connections ?? { people, companies };
}

/* ── Reports ── */

export function getPersonaReports(personaId: string): PersonaReportsData {
  if (isBuiltin(personaId)) {
    return {
      reportCategories,
      activeRadars,
      reportPreferenceCards,
      defaultRadarOptions,
      chatSuggestions,
    };
  }
  const generated = getGeneratedPersonaData(personaId);
  if (generated) return generated.reports;
  return {
    reportCategories,
    activeRadars,
    reportPreferenceCards,
    defaultRadarOptions,
    chatSuggestions,
  };
}

/* ── Report Details ── */

export function getPersonaReportDetail(
  personaId: string,
  reportId: string,
): ReportDetail {
  if (isBuiltin(personaId)) return getBuiltinReportDetail(reportId);
  const generated = getGeneratedPersonaData(personaId);
  if (generated?.reportDetails[reportId])
    return generated.reportDetails[reportId];
  // Fall back to built-in (always returns a ReportDetail with fallback)
  return getBuiltinReportDetail(reportId);
}

/* ── Commitments ── */

const JPM_COMMITMENTS: CommitmentItem[] = [
  {
    id: "1",
    title: "Build 3-statement financial model for Meridian Corp",
    meeting: "Deal Review — Meridian Corp",
    meetingId: "mtg-1",
    meetingDate: "Today",
    dueDate: "Due Mar 14",
    completed: false,
  },
  {
    id: "2",
    title: "Request updated cap table from Meridian CFO",
    meeting: "Deal Review — Meridian Corp",
    meetingId: "mtg-1",
    meetingDate: "Today",
    dueDate: "Due Mar 13",
    completed: false,
  },
  {
    id: "3",
    title: "Prepare deal committee memo for Meridian",
    meeting: "Deal Review — Meridian Corp",
    meetingId: "mtg-1",
    meetingDate: "Today",
    dueDate: "Due Mar 15",
    completed: false,
  },
  {
    id: "4",
    title: "Update AI sector comp table with Q1 multiples",
    meeting: "TMT Group Weekly",
    meetingId: "mtg-2",
    meetingDate: "Today",
    dueDate: "Due Mar 14",
    completed: false,
  },
  {
    id: "5",
    title: "Schedule CloudSync CEO intro call",
    meeting: "TMT Group Weekly",
    meetingId: "mtg-2",
    meetingDate: "Today",
    dueDate: "Due Mar 13",
    completed: false,
  },
  {
    id: "6",
    title: "Finalize DataVault LBO memo for sponsor presentation",
    meeting: "TMT Group Weekly",
    meetingId: "mtg-2",
    meetingDate: "Today",
    dueDate: "Due Mar 14",
    completed: false,
  },
  {
    id: "7",
    title: "Draft 150-seat pricing proposal for Sentra expansion",
    meeting: "Sarah / Tracy 1:1",
    meetingId: "mtg-3",
    meetingDate: "Today",
    dueDate: "Due Mar 18",
    completed: false,
  },
  {
    id: "8",
    title: "Schedule Compliance team pilot kickoff for March 17",
    meeting: "Sarah / Tracy 1:1",
    meetingId: "mtg-3",
    meetingDate: "Today",
    dueDate: "Due Mar 15",
    completed: false,
  },
  {
    id: "9",
    title: "Request penetration test report from Sentra",
    meeting: "AI Vendor Evaluation — Round 2",
    meetingId: "mtg-4",
    meetingDate: "Yesterday",
    dueDate: "Due Mar 14",
    completed: false,
  },
  {
    id: "10",
    title: "Build vendor comparison scorecard for evaluation committee",
    meeting: "AI Vendor Evaluation — Round 2",
    meetingId: "mtg-4",
    meetingDate: "Yesterday",
    dueDate: "Due Mar 18",
    completed: false,
  },
  {
    id: "11",
    title: "Identify acquirer shortlist for NeuralPath sell-side",
    meeting: "IB Coverage Team Standup",
    meetingId: "mtg-5",
    meetingDate: "Yesterday",
    dueDate: "Due Mar 14",
    completed: false,
  },
  {
    id: "12",
    title: "Update coverage pipeline tracker with stage movements",
    meeting: "IB Coverage Team Standup",
    meetingId: "mtg-5",
    meetingDate: "Yesterday",
    dueDate: "Done",
    completed: true,
  },
  {
    id: "13",
    title: "Distribute Sentra onboarding guides to pilot teams",
    meeting: "Sentra Pilot Kickoff",
    meetingId: "mtg-6",
    meetingDate: "Mar 10",
    dueDate: "Done",
    completed: true,
  },
  {
    id: "14",
    title: "Set up weekly adoption dashboard for evaluation committee",
    meeting: "Sentra Pilot Kickoff",
    meetingId: "mtg-6",
    meetingDate: "Mar 10",
    dueDate: "Done",
    completed: true,
  },
  {
    id: "15",
    title: "Review data governance policy with Sentra for IT Security",
    meeting: "Sentra Pilot Kickoff",
    meetingId: "mtg-6",
    meetingDate: "Mar 10",
    dueDate: "Due Mar 15",
    completed: false,
  },
  {
    id: "16",
    title: "Send Anthropic enterprise partnership proposal to legal",
    meeting: "AI Vendor Evaluation — Round 2",
    meetingId: "mtg-4",
    meetingDate: "Yesterday",
    dueDate: "Due Mar 20",
    completed: false,
  },
  {
    id: "17",
    title: "Stress-test Meridian model for top-customer churn scenario",
    meeting: "Deal Review — Meridian Corp",
    meetingId: "mtg-1",
    meetingDate: "Today",
    dueDate: "Due Mar 14",
    completed: false,
  },
  {
    id: "18",
    title: "Review DealStream integration requirements for TMT team",
    meeting: "Sarah / Tracy 1:1",
    meetingId: "mtg-3",
    meetingDate: "Today",
    dueDate: "Due Mar 21",
    completed: false,
  },
  {
    id: "19",
    title: "Prepare NeuralPath preliminary term sheet framework",
    meeting: "IB Coverage Team Standup",
    meetingId: "mtg-5",
    meetingDate: "Yesterday",
    dueDate: "Due Mar 28",
    completed: false,
  },
  {
    id: "20",
    title:
      "Compile Sentra vs Prism vs AssistAI feature comparison for decision memo",
    meeting: "AI Vendor Evaluation — Round 2",
    meetingId: "mtg-4",
    meetingDate: "Yesterday",
    dueDate: "Due Mar 18",
    completed: false,
  },
  {
    id: "21",
    title: "Send governance advisor introduction to David Chen",
    meeting: "David Chen — Secondary Offering Discussion",
    meetingId: "mtg-7",
    meetingDate: "Today",
    dueDate: "Due Apr 2",
    completed: false,
  },
  {
    id: "22",
    title: "Finalize secondary offering memo with updated financials",
    meeting: "David Chen — Secondary Offering Discussion",
    meetingId: "mtg-7",
    meetingDate: "Today",
    dueDate: "Due Apr 4",
    completed: false,
  },
  {
    id: "23",
    title: "Send revised engagement terms to Apex Corp client",
    meeting: "Apex Corp — Engagement Terms Follow-up",
    meetingId: "mtg-7",
    meetingDate: "Today",
    dueDate: "Overdue",
    completed: false,
  },
  {
    id: "24",
    title: "Enable Vendor Delay Tracker in Sentra for Oracle migration",
    meeting: "Oracle Migration Project Review",
    meetingId: "mtg-8",
    meetingDate: "Today",
    dueDate: "Due Apr 1",
    completed: false,
  },
];

export function getPersonaCommitments(personaId: string): CommitmentItem[] {
  if (personaId === "jpm") return JPM_COMMITMENTS;
  if (isBuiltin(personaId)) return initialCommitments;
  const generated = getGeneratedPersonaData(personaId);
  return generated?.commitments ?? initialCommitments;
}

/* ── Deep Research ── */

const BUILTIN_EM_FLOWS: DocumentFlowConfig[] = [
  {
    id: "em-prd",
    label: "PRD",
    filename: "prd-auth-refactor-sso.md",
    scanSteps: EM_SCAN_STEPS,
    content: EM_CONTENT,
    buildSteps: EM_BUILD_STEPS,
    sources: EM_PRD_SOURCES,
    triggerKeywords: ["prd", "product requirements"],
    toolChoices: [
      { label: "Push to Cursor", action: "external" },
      { label: "Push to Claude", action: "external" },
      { label: "View in Docs", action: "external" },
    ],
    doneMessage: {
      title: "PRD pushed to SharePoint",
      description: "Your PRD has been created and is ready for review.",
      link: {
        label: "Open in SharePoint",
        url: "https://docs.google.com/document/d/1odXL_yJ2zopDNLL2RcnHhE_X7EzeTJtdCmJoj5x3awc/edit?usp=drive_web&ouid=113010372682429477039",
      },
    },
    buildingLabel: "Pushing to",
  },
];

const BUILTIN_JPM_FLOWS: DocumentFlowConfig[] = [
  {
    id: "jpm-model",
    label: "3-Statement Model",
    filename: "meridian-corp-3-statement-model.md",
    scanSteps: PRD_SCAN_STEPS,
    content: PRD_CONTENT,
    buildSteps: PRD_BUILD_STEPS,
    sources: MODEL_SOURCES,
    triggerKeywords: [
      "3-statement",
      "3 statement",
      "financial model",
      "three statement",
    ],
    toolChoices: [
      { label: "Build Model", action: "build" },
      { label: "Cancel", action: "cancel" },
    ],
    doneMessage: {
      title: "Model pushed to Excel",
      description: "Your GreenCore 3-statement financial model is ready.",
      link: {
        label: "Open in Excel",
        url: "https://docs.google.com/spreadsheets/d/1ld5wxkZ9fX8A96QxdJW1rVjFR158POqgFQsb9yLxP6U",
      },
    },
    buildingLabel: "Building model",
  },
  {
    id: "jpm-weekly",
    label: "Weekly Status Update",
    filename: "sentra-adoption-weekly-w10.md",
    scanSteps: WEEKLY_SCAN_STEPS,
    content: WEEKLY_CONTENT,
    buildSteps: WEEKLY_BUILD_STEPS,
    sources: WEEKLY_SOURCES,
    triggerKeywords: [
      "weekly status",
      "sentra adoption",
      "weekly update",
      "adoption update",
    ],
    toolChoices: [
      { label: "View Doc", action: "external" },
      { label: "Build Weekly Update Deck", action: "build" },
    ],
    doneMessage: {
      title: "Deck pushed to PowerPoint",
      description: "Your market landscape analysis deck is ready for review.",
      link: {
        label: "Open in PowerPoint",
        url: "https://docs.google.com/presentation/d/1V3jHzNokqZUftWaLtY4bIjgxIrEnm8K48_mB_3MRnrw/edit",
      },
    },
    buildingLabel: "Building deck",
  },
  {
    id: "jpm-secondary-offering",
    label: "Secondary Offering Memo",
    filename: "novabridge-capital-secondary-offering-memo.md",
    scanSteps: SECONDARY_OFFERING_SCAN_STEPS,
    content: SECONDARY_OFFERING_CONTENT,
    buildSteps: SECONDARY_OFFERING_BUILD_STEPS,
    sources: SECONDARY_OFFERING_SOURCES,
    triggerKeywords: [
      "secondary offering",
      "novabridge",
      "david chen",
      "offering memo",
    ],
    toolChoices: [
      { label: "View Doc", action: "external" },
      { label: "Build Investor Deck", action: "build" },
    ],
    doneMessage: {
      title: "Memo pushed to SharePoint",
      description:
        "Your NovaBridge Capital secondary offering memo is ready for review.",
      link: {
        label: "Open in Word",
        url: "https://docs.google.com/document/d/1odXL_yJ2zopDNLL2RcnHhE_X7EzeTJtdCmJoj5x3awc",
      },
    },
    buildingLabel: "Building memo",
  },
];

const BUILTIN_DEEP_RESEARCH: Record<string, PersonaDeepResearchData> = {
  "engineering-manager": {
    suggestions: SUGGESTIONS["engineering-manager"] ?? [],
    sessionHistory: SESSION_HISTORY["engineering-manager"] ?? [],
    documentFlows: BUILTIN_EM_FLOWS,
  },
  jpm: {
    suggestions: SUGGESTIONS.jpm ?? [],
    sessionHistory: SESSION_HISTORY.jpm ?? [],
    documentFlows: BUILTIN_JPM_FLOWS,
    vendorEvalResponse: VENDOR_EVAL_RESPONSE,
  },
};

export function getPersonaDeepResearch(
  personaId: string,
): PersonaDeepResearchData {
  if (isBuiltin(personaId)) {
    return BUILTIN_DEEP_RESEARCH[personaId] ?? BUILTIN_DEEP_RESEARCH.jpm;
  }
  const generated = getGeneratedPersonaData(personaId);
  if (generated) return generated.deepResearch;
  return BUILTIN_DEEP_RESEARCH.jpm;
}

/** Generic mock responses (used for non-document queries across all personas) */
export { getMockResponse, MOCK_RESPONSES };
