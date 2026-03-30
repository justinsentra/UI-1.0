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
