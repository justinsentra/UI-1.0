export type ArtifactType =
  | "memo"
  | "pipeline-summary"
  | "risk-report"
  | "vendor-delay-report"
  | "research"
  | "follow-up";

export interface ArtifactNextStep {
  id: string;
  label: string;
  type:
    | "schedule-call"
    | "send-email"
    | "create-task"
    | "share-report"
    | "open-link";
  detail: string;
}

export interface Artifact {
  id: string;
  title: string;
  description: string;
  type: ArtifactType;
  actionId: string;
  actionName: string;
  createdAt: string;
  summary: string;
  nextSteps: ArtifactNextStep[];
}

export const ARTIFACT_TYPE_LABELS: Record<ArtifactType, string> = {
  memo: "Memo",
  "pipeline-summary": "Pipeline Summary",
  "risk-report": "Risk Report",
  "vendor-delay-report": "Vendor Delay Report",
  research: "Research",
  "follow-up": "Follow-Up",
};

export const MOCK_ARTIFACTS: Artifact[] = [
  {
    id: "art-0",
    title: "Secondary Offering Memo — NovaBridge Capital",
    description:
      "Preliminary secondary offering memo for David Chen's company using CFO financials, SharePoint model, and comparable transactions.",
    type: "memo",
    actionId: "deal-memo-production",
    actionName: "Deal Memo Production",
    createdAt: "2026-03-30T09:15:00Z",
    summary:
      "NovaBridge Capital is exploring a secondary offering to bring in growth capital. Revenue is $42M (FY25A) with 28.1% EBITDA margins, tracking 8% above prior forecast. Comparable transactions in the trailing 12 months show median multiples of 3.8x revenue and 14.2x EBITDA. Base case valuation at 3.8x FY26E revenue implies $200M, with a 25% secondary stake raising $50M. Key consideration: David Chen raised board composition concerns six weeks ago and is waiting on a governance advisor introduction. The Apex-Cobalt merger ($280M) creates urgency — delaying risks valuation compression.",
    nextSteps: [
      {
        id: "ns-0-1",
        label: "Send governance advisor introduction to David Chen",
        type: "send-email",
        detail:
          "Draft introduction email connecting David Chen with the governance advisory team, referencing the commitment from the February 17 call.",
      },
      {
        id: "ns-0-2",
        label: "Schedule board presentation for April 14",
        type: "schedule-call",
        detail:
          "Book a 60-minute slot for the NovaBridge Capital board to review the secondary offering materials.",
      },
      {
        id: "ns-0-3",
        label: "Share memo with Nathan Lim for review",
        type: "share-report",
        detail:
          "Send the preliminary memo to Nathan for feedback before sharing with David's team.",
      },
    ],
  },
  {
    id: "art-1",
    title: "Weekly Deal Pipeline Health Check — Mar 28",
    description:
      "Friday morning summary of pipeline movement, flagged diligence items, and execution risks across all active deals.",
    type: "pipeline-summary",
    actionId: "weekly-deal-pipeline-health-check",
    actionName: "Weekly Deal Pipeline Health Check",
    createdAt: "2026-03-28T08:00:00Z",
    summary:
      "3 deals progressed past Stage 2 this week. Meridian Corp remains stalled at due diligence — outstanding items include the audited financials package and management reference calls. HelixBio moved to verbal LOI; legal review is underway. NovaTech flagged a vendor delay on their environmental assessment, pushing the timeline by ~2 weeks. One escalation: the ServiceNow access request for Apex Industries has been pending for 5 days and is blocking the data room review.",
    nextSteps: [
      {
        id: "ns-1-1",
        label: "Email Meridian Corp CFO for financials",
        type: "send-email",
        detail:
          "Draft follow-up to Sarah Chen requesting the outstanding audited financials package.",
      },
      {
        id: "ns-1-2",
        label: "Schedule reference call with HelixBio management",
        type: "schedule-call",
        detail:
          "Book a 30-minute management reference call with HelixBio's CEO for next week.",
      },
      {
        id: "ns-1-3",
        label: "Escalate ServiceNow access for Apex Industries",
        type: "send-email",
        detail:
          "Send escalation email to IT requesting urgent data room access for Apex Industries.",
      },
    ],
  },
  {
    id: "art-2",
    title: "Investor Reporting Snapshot — Q1 Pipeline",
    description:
      "Internal investor reporting snapshot generated from the latest pipeline changes for Q1 board prep.",
    type: "memo",
    actionId: "weekly-deal-pipeline-health-check",
    actionName: "Weekly Deal Pipeline Health Check",
    createdAt: "2026-03-28T08:05:00Z",
    summary:
      "Q1 pipeline stands at $142M across 8 active opportunities. Stage 3+ deals total $87M (Meridian, HelixBio, Apex). Net new pipeline added in March was $23M. Win rate for the quarter is tracking at 34%, slightly above the 12-month trailing average of 31%. Key highlight for the board: HelixBio verbal LOI represents the largest single deal in fund history at $48M.",
    nextSteps: [
      {
        id: "ns-2-1",
        label: "Share snapshot with Investment Committee",
        type: "share-report",
        detail:
          "Distribute the Q1 pipeline snapshot to the IC distribution list ahead of Monday's meeting.",
      },
      {
        id: "ns-2-2",
        label: "Schedule IC pre-read discussion",
        type: "schedule-call",
        detail:
          "Set up a 15-minute pre-read sync with the IC Chair before Monday's full committee meeting.",
      },
    ],
  },
  {
    id: "art-3",
    title: "Meridian Corp Follow-Up Draft",
    description:
      "Generated follow-up email summarizing decisions, asks, and owners from the latest external call with Meridian Corp.",
    type: "follow-up",
    actionId: "post-meeting-follow-up",
    actionName: "Post-Meeting Follow-Up",
    createdAt: "2026-03-27T15:30:00Z",
    summary:
      "Call covered three topics: (1) revised timeline for the audited financials — Meridian's CFO committed to delivering by April 4; (2) agreement to extend exclusivity by 2 weeks contingent on financials delivery; (3) open question on the environmental liability cap that legal teams will negotiate separately. Action owners: our team owns the exclusivity amendment draft; Meridian owns the financials delivery and environmental disclosure schedule.",
    nextSteps: [
      {
        id: "ns-3-1",
        label: "Send follow-up email to Meridian team",
        type: "send-email",
        detail:
          "Send the drafted follow-up email with meeting summary, decisions, and action items to the Meridian deal team.",
      },
      {
        id: "ns-3-2",
        label: "Schedule legal sync on environmental cap",
        type: "schedule-call",
        detail:
          "Book a 45-minute call between both legal teams to negotiate the environmental liability cap language.",
      },
      {
        id: "ns-3-3",
        label: "Create task for exclusivity amendment",
        type: "create-task",
        detail:
          "Create a tracked task for drafting the 2-week exclusivity extension amendment by end of week.",
      },
    ],
  },
  {
    id: "art-4",
    title: "Meridian Corp Deal Memo Draft",
    description:
      "Updated deal memo reflecting the latest call takeaways, revised timeline, and open diligence items for Meridian Corp.",
    type: "memo",
    actionId: "post-meeting-follow-up",
    actionName: "Post-Meeting Follow-Up",
    createdAt: "2026-03-27T15:35:00Z",
    summary:
      "This memo updates the Meridian Corp investment thesis following the March 27 external call. Key changes: (1) revised valuation range narrowed to $85M–$92M based on updated revenue projections; (2) management quality score upgraded after positive reference from former board member; (3) environmental risk remains the primary open item — legal teams are negotiating a liability cap. Recommendation: proceed to final IC vote contingent on satisfactory resolution of the environmental liability cap and receipt of audited financials by April 4.",
    nextSteps: [
      {
        id: "ns-4-1",
        label: "Share memo with deal team for review",
        type: "share-report",
        detail:
          "Circulate the updated deal memo to the Meridian deal team for feedback before IC submission.",
      },
      {
        id: "ns-4-2",
        label: "Schedule IC presentation for Meridian",
        type: "schedule-call",
        detail:
          "Reserve a 30-minute IC slot for the Meridian final vote presentation, targeting the week of April 7.",
      },
    ],
  },
  {
    id: "art-5",
    title: "Oracle Migration — Vendor Delay Report (Week 5)",
    description:
      "Risk report on DataBridge Solutions' second missed delivery and its downstream impact on the Oracle migration timeline.",
    type: "vendor-delay-report",
    actionId: "vendor-delay-tracker",
    actionName: "Vendor Delay Tracker",
    createdAt: "2026-03-26T10:00:00Z",
    summary:
      "DataBridge Solutions missed their second delivery deadline on February 17 for the transformed data set needed for integration testing. The vendor cited resource constraints and provided no revised ETA for five business days. Impact: the Oracle migration is now 5 weeks behind the original March 14 deadline, with a revised go-live target of April 18. The engineering team was forced to context-switch, losing additional productivity. The project lead did not escalate to Tracy or senior leadership until March 5 — 16 days after the missed deadline. This is a recurring pattern: same vendor, same failure mode, same delayed escalation.",
    nextSteps: [
      {
        id: "ns-5-1",
        label: "Schedule call with DataBridge project manager",
        type: "schedule-call",
        detail:
          "Book a 30-minute escalation call with DataBridge Solutions' project manager and account lead to discuss SLA compliance and revised delivery commitments.",
      },
      {
        id: "ns-5-2",
        label: "Send escalation email to internal stakeholders",
        type: "send-email",
        detail:
          "Draft escalation email to the Oracle migration steering committee summarizing the vendor delay pattern, timeline impact, and recommended next steps.",
      },
      {
        id: "ns-5-3",
        label: "Create task for backup vendor evaluation",
        type: "create-task",
        detail:
          "Evaluate alternative data migration vendors as a contingency in case DataBridge misses the next milestone.",
      },
    ],
  },
  {
    id: "art-6",
    title: "Meridian Corp Financial Model Refresh",
    description:
      "Updated 3-statement financial model generated from the latest client financials received via email.",
    type: "research",
    actionId: "auto-excel-update",
    actionName: "Auto Excel Update",
    createdAt: "2026-03-25T14:00:00Z",
    summary:
      "Model updated with Meridian Corp's unaudited February financials. Key changes from prior version: revenue run-rate increased 4.2% ($2.1M) driven by new enterprise contracts; EBITDA margin improved 180bps to 22.3%; net debt reduced by $3.8M following the credit facility paydown. Flagged items: accounts receivable aging shows a $1.2M balance >90 days from a single customer (Vertex Solutions) — warrants follow-up. Working capital assumptions revised upward to reflect improved collections in other accounts.",
    nextSteps: [
      {
        id: "ns-6-1",
        label: "Email Meridian re: Vertex AR aging",
        type: "send-email",
        detail:
          "Request clarification from Meridian's Controller on the $1.2M aged receivable from Vertex Solutions.",
      },
      {
        id: "ns-6-2",
        label: "Share updated model with deal team",
        type: "share-report",
        detail:
          "Push the refreshed 3-statement model to the deal team's SharePoint folder and notify via email.",
      },
    ],
  },
  {
    id: "art-7",
    title: "SharePoint Model Change Log — Meridian Corp",
    description:
      "Change log highlighting updated assumptions, flagged line items, and reviewer notes from the latest model refresh.",
    type: "risk-report",
    actionId: "auto-excel-update",
    actionName: "Auto Excel Update",
    createdAt: "2026-03-25T14:05:00Z",
    summary:
      "12 line items updated across the income statement and balance sheet. 3 items flagged for manual review: (1) revenue recognition timing on the new Vertex Solutions contract differs from prior treatment; (2) depreciation schedule shows a $400K variance vs. management guidance — likely a reclassification; (3) deferred revenue balance increased 18% month-over-month, driven by annual prepayments. No changes to the cap table or equity waterfall. Model integrity checks all passed (balance sheet balances, cash flow reconciles).",
    nextSteps: [
      {
        id: "ns-7-1",
        label: "Schedule model review with VP Finance",
        type: "schedule-call",
        detail:
          "Book a 20-minute model walkthrough with the VP Finance to review the 3 flagged items.",
      },
      {
        id: "ns-7-2",
        label: "Create task for depreciation reconciliation",
        type: "create-task",
        detail:
          "Track the $400K depreciation variance as a diligence follow-up item for the next management call.",
      },
    ],
  },
  {
    id: "art-8",
    title: "Apex Industries Execution Risk Summary",
    description:
      "Weekly risk report on Apex Industries covering access delays, data room gaps, and projected impact on close timeline.",
    type: "risk-report",
    actionId: "weekly-deal-pipeline-health-check",
    actionName: "Weekly Deal Pipeline Health Check",
    createdAt: "2026-03-28T08:10:00Z",
    summary:
      "Apex Industries data room review is blocked by a 5-day-old ServiceNow access request. The IT team has not responded to two follow-ups. Additionally, 3 of 12 requested documents are still missing from the data room: (1) customer concentration analysis, (2) IP assignment agreements, (3) pending litigation summary. Without these, the legal and commercial workstreams cannot proceed. If access and documents are not resolved by April 2, the projected close date of April 25 will slip by at least 1 week.",
    nextSteps: [
      {
        id: "ns-8-1",
        label: "Escalate ServiceNow ticket to IT Director",
        type: "send-email",
        detail:
          "Send direct escalation to the IT Director with the ticket number and business impact statement.",
      },
      {
        id: "ns-8-2",
        label: "Call Apex IR team for missing documents",
        type: "schedule-call",
        detail:
          "Schedule a call with Apex's IR team to get delivery commitments on the 3 outstanding data room documents.",
      },
    ],
  },
];
