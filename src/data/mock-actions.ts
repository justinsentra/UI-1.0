export interface ActionRun {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "failed" | "pending-approval";
  reportId?: string;
  artifactId?: string;
  externalUrl?: string;
  externalUrlIcon?: string;
}

export interface Action {
  id: string;
  name: string;
  description: string;
  active: boolean;
  schedule: string;
  integrations: string[];
  prompt: string;
  triggerType: "scheduled" | "triggered";
  triggerDetail?: string;
  triggerConfig?: ActionTriggerConfig;
  frequency?: {
    type: "DAILY" | "WEEKLY" | "MONTHLY";
    interval: number;
    time: string;
    dayOfWeek?: string;
  };
  approvedArtifacts: ActionArtifact[];
  historyRuns?: ActionRun[];
}

export interface ActionArtifact {
  id: string;
  title: string;
  description: string;
  artifactType: "report" | "research";
  reportId?: string;
  prompt?: string;
}

export interface ActionTriggerConfig {
  source: string;
  event: string;
  scope: string;
}

export const MOCK_ACTIONS: Action[] = [
  {
    id: "weekly-deal-pipeline-health-check",
    name: "Weekly Deal Pipeline Health Check",
    description:
      "Every Friday at 8:00 AM, generate a pipeline health check across active deals, delayed diligence items, and execution risks.",
    active: true,
    schedule: "Every Friday at 8:00 AM",
    integrations: ["word", "teams", "outlook", "sharepoint"],
    prompt:
      "Every Friday at 8:00 AM ET, create a Weekly Deal Pipeline Health Check.\n\nStep 1: Pull open opportunities, stage movement, and owner changes from internal systems.\n\nStep 2: Review project boards for delayed diligence workstreams and missed vendor deadlines.\n\nStep 3: Check for incidents or access requests that could block execution.\n\nStep 4: Draft a Word document with sections for At-Risk Deals, Delayed Workstreams, Escalations, and Recommended Follow-Ups.",
    triggerType: "scheduled",
    frequency: {
      type: "WEEKLY",
      interval: 1,
      time: "08:00 AM",
      dayOfWeek: "Friday",
    },
    approvedArtifacts: [
      {
        id: "weekly-deal-pipeline-health-check-artifact-1",
        title: "Weekly Deal Pipeline Health Check — Mar 28",
        description:
          "Friday morning summary of pipeline movement, flagged diligence items, and execution risks.",
        artifactType: "report",
        reportId: "rpt-gtm-1",
      },
    ],
    historyRuns: [
      {
        id: "run-wdp-1",
        title: "Weekly Pipeline Health — Mar 28",
        description:
          "4 deals reviewed, 1 flagged at-risk (Atlas Group stalled 14 days). Full report generated.",
        date: "Mar 28, 2025",
        status: "completed",
        externalUrl:
          "https://word.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s94d3941d13ed4f6fbf926e696bd921b4&driveId=2d85c18ae9ad5230",
        externalUrlIcon: "word",
      },
      {
        id: "run-wdp-2",
        title: "Weekly Pipeline Health — Mar 21",
        description:
          "5 deals reviewed, pipeline value up 8%. No escalations needed.",
        date: "Mar 21, 2025",
        status: "completed",
        externalUrl:
          "https://word.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s94d3941d13ed4f6fbf926e696bd921b4&driveId=2d85c18ae9ad5230",
        externalUrlIcon: "word",
      },
      {
        id: "run-wdp-3",
        title: "Weekly Pipeline Health — Mar 14",
        description:
          "6 deals reviewed, 2 advanced to negotiation. Meridian Corp upgraded to high priority.",
        date: "Mar 14, 2025",
        status: "completed",
        externalUrl:
          "https://word.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s94d3941d13ed4f6fbf926e696bd921b4&driveId=2d85c18ae9ad5230",
        externalUrlIcon: "word",
      },
    ],
  },
  {
    id: "post-meeting-follow-up",
    name: "Post-Meeting Follow-Up",
    description:
      "After every external call, summarize decisions, draft follow-up communication, and package next steps for the team.",
    active: true,
    schedule: "After every external call",
    integrations: ["teams", "outlook", "sharepoint"],
    prompt:
      "After every external call, review the Teams transcript.\n\nStep 1: Extract decisions, owners, due dates, and follow-up asks.\n\nStep 2: Draft the follow-up email in Outlook with a concise summary and next steps.\n\nStep 3: Update internal records with meeting notes and surfaced risks.\n\nStep 4: Create a deal memo draft when the discussion changes the investment view.",
    triggerType: "triggered",
    triggerDetail: "Post-meeting trigger: runs after every external call.",
    triggerConfig: {
      source: "teams",
      event: "after-call-ends",
      scope: "external-calls",
    },
    approvedArtifacts: [
      {
        id: "post-meeting-follow-up-artifact-1",
        title: "Meridian Corp Follow-Up Draft",
        description:
          "Generated follow-up email summarizing decisions, asks, and owners from the latest external call.",
        artifactType: "research",
        prompt:
          "Draft a follow-up email and action summary for the Meridian Corp external call",
      },
    ],
    historyRuns: [
      {
        id: "run-pmf-1",
        title: "Approve Draft — Meridian Corp Follow-Up",
        description:
          "Follow-up email drafted after the Meridian VP call. Summarizes expansion to $520K, POC timeline, and next steps. Ready for review and send.",
        date: "Mar 27, 2025",
        status: "pending-approval",
        externalUrl:
          "https://outlook.live.com/mail/0/compose/AAkALgAAAAAAHYQDEapmEc2byACqAC%2FEWg0A%2F3sqzauYGk%2B9r%2B1skT%2FPvgAAJk1OfgAA",
        externalUrlIcon: "outlook",
      },
      {
        id: "run-pmf-2",
        title: "TechCorp Architecture Review — Follow-Up Sent",
        description:
          "Email sent to TechCorp engineering team with SSO integration timeline and open P2 items from deep-dive.",
        date: "Mar 19, 2025",
        status: "completed",
        externalUrl:
          "https://outlook.live.com/mail/0/compose/AAkALgAAAAAAHYQDEapmEc2byACqAC%2FEWg0A%2F3sqzauYGk%2B9r%2B1skT%2FPvgAAJk1OfgAA",
        externalUrlIcon: "outlook",
      },
      {
        id: "run-pmf-3",
        title: "FinServ Global Discovery — Follow-Up Sent",
        description:
          "Recap sent after FinServ discovery call. Includes security audit request and procurement timeline.",
        date: "Mar 11, 2025",
        status: "completed",
        externalUrl:
          "https://outlook.live.com/mail/0/compose/AAkALgAAAAAAHYQDEapmEc2byACqAC%2FEWg0A%2F3sqzauYGk%2B9r%2B1skT%2FPvgAAJk1OfgAA",
        externalUrlIcon: "outlook",
      },
      {
        id: "run-pmf-4",
        title: "NovaCare Intro Call — Follow-Up Sent",
        description:
          "Initial outreach summary sent to NovaCare team after first discovery session.",
        date: "Mar 5, 2025",
        status: "completed",
        externalUrl:
          "https://outlook.live.com/mail/0/compose/AAkALgAAAAAAHYQDEapmEc2byACqAC%2FEWg0A%2F3sqzauYGk%2B9r%2B1skT%2FPvgAAJk1OfgAA",
        externalUrlIcon: "outlook",
      },
    ],
  },
  {
    id: "meeting-deck-builder",
    name: "Meeting Deck Builder",
    description:
      "Before key meetings, automatically compile a presentation deck with relevant data, talking points, and attendee context from recent interactions.",
    active: true,
    schedule: "1 hour before scheduled meetings",
    integrations: ["powerpoint", "teams", "outlook", "sharepoint"],
    prompt:
      "1 hour before a scheduled key meeting:\n\nStep 1: Pull attendee list and agenda from the Outlook calendar invite.\n\nStep 2: Gather recent interaction history, deal status, and open items from SharePoint and Teams.\n\nStep 3: Build a PowerPoint deck with sections for Meeting Agenda, Attendee Context, Key Discussion Points, and Recommended Asks.\n\nStep 4: Share the deck via Teams and attach to the calendar invite.",
    triggerType: "triggered",
    triggerDetail:
      "Calendar trigger: runs 1 hour before key meetings.",
    triggerConfig: {
      source: "outlook",
      event: "meeting-approaching",
      scope: "key-meetings",
    },
    approvedArtifacts: [
      {
        id: "meeting-deck-builder-artifact-1",
        title: "Meridian Corp QBR Deck — Mar 27",
        description:
          "Auto-generated presentation with deal context, attendee history, and discussion framework.",
        artifactType: "research",
        prompt: "Build a meeting prep deck for the Meridian Corp QBR",
      },
    ],
    historyRuns: [
      {
        id: "run-mdb-1",
        title: "Meridian Corp QBR Deck — Mar 27",
        description:
          "Presentation built with deal timeline, $520K expansion context, and VP talking points. Ready in PowerPoint.",
        date: "Mar 27, 2025",
        status: "completed",
        externalUrl:
          "https://powerpoint.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s8fa3c83f944f40cab1b3369b8443ad75&driveId=2d85c18ae9ad5230",
        externalUrlIcon: "powerpoint",
      },
      {
        id: "run-mdb-2",
        title: "FinServ Global Negotiation Prep — Mar 20",
        description:
          "Deck with procurement timeline, MSA redline status, and competitive positioning for final stage call.",
        date: "Mar 20, 2025",
        status: "completed",
        externalUrl:
          "https://powerpoint.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s8fa3c83f944f40cab1b3369b8443ad75&driveId=2d85c18ae9ad5230",
        externalUrlIcon: "powerpoint",
      },
      {
        id: "run-mdb-3",
        title: "Board Strategy Session Deck — Mar 13",
        description:
          "Q1 performance overview, pipeline projections, and strategic priorities for board review.",
        date: "Mar 13, 2025",
        status: "completed",
        externalUrl:
          "https://powerpoint.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s8fa3c83f944f40cab1b3369b8443ad75&driveId=2d85c18ae9ad5230",
        externalUrlIcon: "powerpoint",
      },
    ],
  },
  {
    id: "customer-complaint-scanner",
    name: "Customer Complaint Scanner",
    description:
      "Daily scan across support channels and internal comms for customer complaints, churn signals, and escalation patterns. Generates a risk digest with recommended actions.",
    active: true,
    schedule: "Every day at 7:00 AM",
    integrations: ["teams", "outlook", "sharepoint"],
    prompt:
      "Every day at 7:00 AM ET:\n\nStep 1: Scan Teams channels and Outlook threads for customer complaints, negative sentiment, and escalation requests.\n\nStep 2: Cross-reference flagged accounts with health scores and renewal dates in SharePoint.\n\nStep 3: Identify patterns — repeat offenders, trending issues, and accounts approaching renewal with open complaints.\n\nStep 4: Generate a Customer Risk Digest with sections for New Complaints, Escalation Patterns, At-Risk Renewals, and Recommended Actions.\n\nStep 5: Post the digest to the CS leadership Teams channel and notify account owners via Outlook.",
    triggerType: "scheduled",
    frequency: {
      type: "DAILY",
      interval: 1,
      time: "07:00 AM",
    },
    approvedArtifacts: [
      {
        id: "customer-complaint-scanner-artifact-1",
        title: "Customer Risk Digest — Mar 28",
        description:
          "Daily digest of customer complaints, escalation patterns, and at-risk renewal accounts.",
        artifactType: "report",
        reportId: "rpt-eng-1",
      },
    ],
    historyRuns: [
      {
        id: "run-ccs-1",
        title: "Customer Risk Digest — Mar 28",
        description:
          "3 new complaints flagged. NovaCare account escalated — 2 unresolved tickets before Apr 15 renewal.",
        date: "Mar 28, 2025",
        status: "completed",
        artifactId: "complaint-digest-mar-28",
      },
      {
        id: "run-ccs-2",
        title: "Customer Risk Digest — Mar 27",
        description:
          "5 complaints scanned, 1 pattern identified: billing discrepancy mentions up 40% this week.",
        date: "Mar 27, 2025",
        status: "completed",
        artifactId: "complaint-digest-mar-27",
      },
      {
        id: "run-ccs-3",
        title: "Customer Risk Digest — Mar 26",
        description:
          "2 new complaints. TechCorp support thread re-escalated after 48hr SLA miss.",
        date: "Mar 26, 2025",
        status: "completed",
        artifactId: "complaint-digest-mar-28",
      },
      {
        id: "run-ccs-4",
        title: "Customer Risk Digest — Mar 25",
        description:
          "Clean day — no new escalations. 1 previously flagged account resolved (Harbour Digital).",
        date: "Mar 25, 2025",
        status: "completed",
        artifactId: "complaint-digest-mar-28",
      },
    ],
  },
  {
    id: "project-bandwidth-updater",
    name: "Project Bandwidth Tracker",
    description:
      "After each day's meetings and conversations, update the project planner spreadsheet with revised capacity, blockers, and timeline adjustments.",
    active: true,
    schedule: "Every day at 6:00 PM",
    integrations: ["excel", "teams", "outlook", "sharepoint"],
    prompt:
      "Every day at 6:00 PM ET:\n\nStep 1: Review today's Teams meetings and Outlook threads for capacity changes, new commitments, and blockers.\n\nStep 2: Cross-reference with the project planner spreadsheet in Excel to identify impacted workstreams.\n\nStep 3: Update the Excel project planner with revised bandwidth allocations, shifted deadlines, and new blocker flags.\n\nStep 4: Post a summary of changes to the #project-ops Teams channel and notify project leads of any critical shifts.",
    triggerType: "scheduled",
    frequency: {
      type: "DAILY",
      interval: 1,
      time: "06:00 PM",
    },
    approvedArtifacts: [],
    historyRuns: [
      {
        id: "run-pbu-1",
        title: "Bandwidth Update — Mar 28",
        description:
          "2 engineers pulled to incident response (SSO fix). Oracle migration testing capacity reduced 30% for next 2 days. Spreadsheet updated.",
        date: "Mar 28, 2025",
        status: "completed",
        externalUrl:
          "https://excel.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s1e5d78bebe4843e2a8b7a269624a638b&driveId=2d85c18ae9ad5230&wdlcid=1033",
        externalUrlIcon: "excel",
      },
      {
        id: "run-pbu-2",
        title: "Bandwidth Update — Mar 27",
        description:
          "NovaCare save call added for next week — CSM and VP CS blocked 2 hours. No other capacity changes.",
        date: "Mar 27, 2025",
        status: "completed",
        externalUrl:
          "https://excel.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s1e5d78bebe4843e2a8b7a269624a638b&driveId=2d85c18ae9ad5230&wdlcid=1033",
        externalUrlIcon: "excel",
      },
      {
        id: "run-pbu-3",
        title: "Bandwidth Update — Mar 26",
        description:
          "Vendor data arrived — migration squad re-mobilized. Capacity restored to 100%. Timeline remains Apr 18.",
        date: "Mar 26, 2025",
        status: "completed",
        externalUrl:
          "https://excel.cloud.microsoft/open/onedrive/?docId=2D85C18AE9AD5230%21s1e5d78bebe4843e2a8b7a269624a638b&driveId=2d85c18ae9ad5230&wdlcid=1033",
        externalUrlIcon: "excel",
      },
    ],
  },
];

export const INTEGRATION_LOGOS: Record<string, string> = {
  outlook: "/src/assets/logos/outlook.png",
  teams: "/src/assets/logos/ms-teams.png",
  excel: "/src/assets/logos/excel.png",
  sharepoint: "/src/assets/logos/sharepoint.png",
  salesforce: "/src/assets/logos/salesforce.svg",
  servicenow: "/src/assets/logos/service-now.png",
  "monday-com": "/src/assets/logos/monday-com.webp",
  word: "/src/assets/logos/word.png",
  powerpoint: "/src/assets/logos/powerpoint.png",
};
