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
    integrations: ["salesforce", "monday-com", "servicenow", "outlook"],
    prompt:
      "Every Friday at 8:00 AM ET, create a Weekly Deal Pipeline Health Check.\n\nStep 1: Pull open opportunities, stage movement, and owner changes from Salesforce.\n\nStep 2: Review Monday.com boards for delayed diligence workstreams and missed vendor deadlines.\n\nStep 3: Check ServiceNow for incidents or access requests that could block execution.\n\nStep 4: Draft an Outlook-ready briefing with sections for At-Risk Deals, Delayed Workstreams, Escalations, and Recommended Follow-Ups.",
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
      {
        id: "weekly-deal-pipeline-health-check-artifact-2",
        title: "Investor Reporting Snapshot — Q1 Pipeline",
        description:
          "Internal investor reporting snapshot generated from the latest pipeline changes.",
        artifactType: "report",
        reportId: "rpt-co-1",
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
    integrations: ["zoom", "teams", "outlook", "salesforce"],
    prompt:
      "After every external call, review the Zoom or Teams transcript.\n\nStep 1: Extract decisions, owners, due dates, and follow-up asks.\n\nStep 2: Draft the follow-up email in Outlook with a concise summary and next steps.\n\nStep 3: Update Salesforce with meeting notes and surfaced risks.\n\nStep 4: Create a deal memo draft when the discussion changes the investment view.",
    triggerType: "triggered",
    triggerDetail: "Post-meeting trigger: runs after every external call.",
    triggerConfig: {
      source: "zoom",
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
      {
        id: "post-meeting-follow-up-artifact-2",
        title: "Meridian Corp Deal Memo Draft",
        description:
          "Updated deal memo draft reflecting the latest call takeaways and open diligence items.",
        artifactType: "research",
        prompt: "Draft an investment memo for Meridian Corp",
      },
    ],
  },
  {
    id: "auto-excel-update",
    name: "Auto Excel Update",
    description:
      "When a client sends financials, update the SharePoint model in Excel, flag changes, and prepare a review summary.",
    active: true,
    schedule: "When a client sends financials",
    integrations: ["outlook", "excel", "sharepoint"],
    prompt:
      "When Outlook receives a client financials email, compare the attached workbook against the current SharePoint model, update the Excel file, and flag changed line items with a review summary.",
    triggerType: "triggered",
    triggerDetail:
      "Email archetype trigger: runs when a client sends financials.",
    triggerConfig: {
      source: "outlook",
      event: "client-sends-financials",
      scope: "client-emails",
    },
    approvedArtifacts: [
      {
        id: "auto-excel-update-artifact-1",
        title: "Meridian Corp Financial Model Refresh",
        description:
          "Updated model output generated from the latest client financials.",
        artifactType: "research",
        prompt: "Build a 3-statement financial model for Meridian Corp",
      },
      {
        id: "auto-excel-update-artifact-2",
        title: "SharePoint Model Change Log — Meridian Corp",
        description:
          "Change log highlighting updated assumptions, flagged line items, and reviewer notes.",
        artifactType: "report",
        reportId: "rpt-eng-1",
      },
    ],
  },
  // ── Pre-built action templates ──
  {
    id: "financial-modeling",
    name: "Financial Modeling",
    description:
      "When new financials are received, build or refresh a 3-statement model, flag key variance drivers, and prepare an annotated output for the deal team.",
    active: true,
    schedule: "When new financials are received",
    integrations: ["outlook", "excel", "sharepoint", "salesforce"],
    prompt:
      "When a client or internal team shares updated financials:\n\nStep 1: Pull the latest financials from the Outlook attachment or SharePoint upload.\n\nStep 2: Build or update the 3-statement model (Income Statement, Balance Sheet, Cash Flow) in Excel.\n\nStep 3: Flag key variance drivers vs. prior period and annotate assumption changes.\n\nStep 4: Push the updated model to SharePoint and notify the deal team via Outlook with a summary of changes and recommended review items.",
    triggerType: "triggered",
    triggerDetail: "Email archetype trigger: runs when new financials are received.",
    triggerConfig: {
      source: "outlook",
      event: "client-sends-financials",
      scope: "client-emails",
    },
    approvedArtifacts: [],
  },
  {
    id: "deal-memo-production",
    name: "Deal Memo Production",
    description:
      "After key deal meetings, compile a structured deal memo from meeting transcripts, CRM data, and existing research.",
    active: true,
    schedule: "After key deal meetings",
    integrations: ["zoom", "teams", "salesforce", "sharepoint", "outlook"],
    prompt:
      "After a key deal meeting concludes:\n\nStep 1: Pull the Zoom or Teams transcript and extract investment thesis points, risks, and open questions.\n\nStep 2: Cross-reference Salesforce opportunity data for deal stage, valuation, and key contacts.\n\nStep 3: Pull prior research and diligence notes from SharePoint.\n\nStep 4: Compile a structured deal memo with sections for Company Overview, Investment Thesis, Key Risks, Valuation Summary, and Recommended Next Steps.\n\nStep 5: Draft and send via Outlook for team review.",
    triggerType: "triggered",
    triggerDetail: "Post-meeting trigger: runs after key deal meetings.",
    triggerConfig: {
      source: "zoom",
      event: "after-call-ends",
      scope: "external-calls",
    },
    approvedArtifacts: [],
  },
  {
    id: "market-research",
    name: "Market Research",
    description:
      "On a weekly cadence, scan for market developments, competitor moves, and sector trends relevant to active deals.",
    active: true,
    schedule: "Every Monday at 9:00 AM",
    integrations: ["salesforce", "sharepoint", "outlook"],
    prompt:
      "Every Monday at 9:00 AM ET:\n\nStep 1: Pull the active deal list and sector tags from Salesforce.\n\nStep 2: Scan for recent market developments, competitor announcements, and sector trends relevant to each active deal.\n\nStep 3: Cross-reference findings with existing research documents in SharePoint.\n\nStep 4: Compile a Market Intelligence Brief organized by deal/sector.\n\nStep 5: Distribute via Outlook to the deal team with highlighted items requiring immediate attention.",
    triggerType: "scheduled",
    frequency: {
      type: "WEEKLY",
      interval: 1,
      time: "09:00 AM",
      dayOfWeek: "Monday",
    },
    approvedArtifacts: [],
  },
  {
    id: "investor-reporting",
    name: "Investor Reporting",
    description:
      "At month-end, aggregate portfolio performance data and generate investor-ready reporting packages.",
    active: true,
    schedule: "Last business day of month at 8:00 AM",
    integrations: ["salesforce", "excel", "sharepoint", "outlook"],
    prompt:
      "On the last business day of each month:\n\nStep 1: Pull portfolio company KPIs, deal stage updates, and valuation marks from Salesforce.\n\nStep 2: Aggregate financial performance data from Excel models in SharePoint.\n\nStep 3: Generate an investor-ready reporting package with sections for Portfolio Overview, Performance Summary, Key Highlights, and Risk Flags.\n\nStep 4: Format for distribution and stage in Outlook for LP communications.",
    triggerType: "scheduled",
    frequency: {
      type: "MONTHLY",
      interval: 1,
      time: "08:00 AM",
    },
    approvedArtifacts: [],
  },
  // ── Custom actions (suggested by Sentra) ──
  {
    id: "vendor-delay-tracker",
    name: "Vendor Delay Tracker",
    description:
      "When a vendor deadline passes on Monday.com, flag the delay, assess downstream impact, and notify the deal team with a risk summary.",
    active: true,
    schedule: "When a vendor deadline passes",
    integrations: ["monday-com", "salesforce", "outlook", "sharepoint"],
    prompt:
      "When a vendor deadline passes on Monday.com:\n\nStep 1: Identify the missed deadline, vendor name, and associated deal from Monday.com.\n\nStep 2: Assess downstream impact — check Salesforce for deal stage and timeline dependencies.\n\nStep 3: Pull related vendor agreements and SLAs from SharePoint.\n\nStep 4: Generate a Vendor Delay Risk Report with sections for Delay Summary, Downstream Impact, SLA Status, and Recommended Escalation Path.\n\nStep 5: Send the report via Outlook to the deal lead and flag the item in Monday.com as at-risk.",
    triggerType: "triggered",
    triggerDetail: "Event trigger: runs when a vendor deadline passes on Monday.com.",
    triggerConfig: {
      source: "monday-com",
      event: "vendor-deadline-passes",
      scope: "vendor-trackers",
    },
    approvedArtifacts: [
      {
        id: "vendor-delay-tracker-artifact-1",
        title: "NovaTech Vendor Delay Risk Assessment",
        description:
          "Risk assessment for NovaTech vendor delay and downstream deal impact.",
        artifactType: "report",
        reportId: "rpt-eng-1",
      },
    ],
  },
  {
    id: "ic-misalignment-tracker",
    name: "IC Misalignment Tracker",
    description:
      "After Investment Committee meetings, detect misalignment between IC feedback and deal team positioning, and surface discrepancies for resolution.",
    active: true,
    schedule: "After IC meetings",
    integrations: ["zoom", "teams", "salesforce", "sharepoint", "outlook"],
    prompt:
      "After every Investment Committee meeting:\n\nStep 1: Pull the Zoom or Teams transcript and extract IC member positions, objections, and conditions.\n\nStep 2: Compare IC feedback against the current deal memo and thesis in SharePoint.\n\nStep 3: Check Salesforce for the deal team's stated positioning and stage assumptions.\n\nStep 4: Flag misalignments between IC expectations and deal team positioning — highlight gaps in valuation view, risk assessment, or timeline.\n\nStep 5: Generate an IC Misalignment Report with sections for Key Discrepancies, Unresolved Objections, and Suggested Follow-Up Actions.\n\nStep 6: Distribute via Outlook to the deal lead with a 48-hour resolution deadline.",
    triggerType: "triggered",
    triggerDetail: "Post-meeting trigger: runs after IC meetings.",
    triggerConfig: {
      source: "zoom",
      event: "after-call-ends",
      scope: "leadership-calls",
    },
    approvedArtifacts: [],
  },
];

// Map integration IDs to logo imports
export const INTEGRATION_LOGOS: Record<string, string> = {
  outlook: "/src/assets/logos/outlook.png",
  teams: "/src/assets/logos/ms-teams.png",
  excel: "/src/assets/logos/excel.png",
  sharepoint: "/src/assets/logos/sharepoint.png",
  salesforce: "/src/assets/logos/salesforce.svg",
  servicenow: "/src/assets/logos/service-now.png",
  "monday-com": "/src/assets/logos/monday-com.webp",
};
