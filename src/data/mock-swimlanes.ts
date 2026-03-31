import type { SourceType } from "@/data/mock-deep-research";

export type SwimlanePriority = "critical" | "high" | "medium" | "low";
export type SwimlaneStatus =
  | "on-track"
  | "at-risk"
  | "behind"
  | "completed"
  | "paused";

export interface SwimlaneEventSource {
  type: SourceType;
  label: string;
}

export interface SwimlaneEvent {
  id: string;
  title: string;
  detail: string;
  timestamp: string;
  category:
    | "meeting"
    | "decision"
    | "escalation"
    | "milestone"
    | "blocker"
    | "update";
  involved: string[];
  sources: SwimlaneEventSource[];
}

export interface SwimlaneWeek {
  weekNumber: number;
  label: string;
  dateRange: string;
  summary: string;
  highlight?: "warning" | "critical";
  events: SwimlaneEvent[];
}

export interface Swimlane {
  id: string;
  title: string;
  description: string;
  status: SwimlaneStatus;
  priority: SwimlanePriority;
  owner: string;
  currentStateSummary: string;
  createdAt: string;
  weeks: SwimlaneWeek[];
}

export const STATUS_CONFIG: Record<
  SwimlaneStatus,
  { label: string; className: string }
> = {
  "on-track": {
    label: "On Track",
    className:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  "at-risk": {
    label: "At Risk",
    className:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  behind: {
    label: "Behind",
    className:
      "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
  completed: {
    label: "Completed",
    className:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  paused: {
    label: "Paused",
    className:
      "bg-zinc-500/10 text-zinc-500 dark:text-zinc-400 border-zinc-500/20",
  },
};

export const MOCK_SWIMLANES: Swimlane[] = [
  {
    id: "oracle-migration",
    title: "Oracle Database Migration",
    description:
      "Full migration from legacy Oracle DB to cloud-native PostgreSQL across 12 microservices.",
    status: "behind",
    priority: "critical",
    owner: "James Whitfield",
    currentStateSummary:
      "5 weeks behind original deadline — vendor missed two extraction deliveries. Integration testing at 60%.",
    createdAt: "2025-02-02",
    weeks: [
      {
        weekNumber: 8,
        label: "Mar 23 – Mar 27",
        dateRange: "Current",
        summary:
          "Integration testing ~60% complete; UAT data due Mar 28. Leadership watching vendor follow-through.",
        highlight: "warning",
        events: [
          {
            id: "om-8-1",
            title: "Integration test status review",
            detail:
              "Platform team reported 60% of cross-service scenarios exercised. Failures clustered around legacy date formats and nullable FK edge cases.",
            timestamp: "Mar 23, 9:30 AM",
            category: "meeting",
            involved: ["James Whitfield", "Priya Nair", "Marcus Chen"],
            sources: [
              { type: "teams", label: "Weekly migration sync" },
              { type: "sharepoint", label: "Test run log" },
            ],
          },
          {
            id: "om-8-2",
            title: "UAT data delivery checkpoint",
            detail:
              "Program office confirmed vendor committed to Mar 28 for sanitized UAT datasets; engineering blocked full UAT until receipt.",
            timestamp: "Mar 24, 11:00 AM",
            category: "milestone",
            involved: ["James Whitfield", "Vendor PM"],
            sources: [
              { type: "outlook", label: "Delivery commitment thread" },
              { type: "outlook", label: "Checkpoint invite" },
            ],
          },
          {
            id: "om-8-3",
            title: "Vendor throughput monitoring",
            detail:
              "SRE spun up interim dashboards on extract job lag and error rates after prior slips; alerts route to James and on-call.",
            timestamp: "Mar 25, 2:15 PM",
            category: "update",
            involved: ["James Whitfield", "Elena Ruiz (SRE)"],
            sources: [
              { type: "teams", label: "#db-migration-alerts" },
              { type: "sharepoint", label: "observability PR" },
            ],
          },
          {
            id: "om-8-4",
            title: "Go-live risk review (prep)",
            detail:
              "Steering asked for a concise risk register update: rollback posture, cutover window, and dependency on vendor UAT drops.",
            timestamp: "Mar 26, 10:00 AM",
            category: "meeting",
            involved: [
              "James Whitfield",
              "CFO office delegate",
              "Program lead",
            ],
            sources: [
              { type: "teams", label: "Steering prep" },
              { type: "sharepoint", label: "Risk register draft" },
            ],
          },
          {
            id: "om-8-5",
            title: "Schema drift in payment service",
            detail:
              "A late-arriving vendor patch exposed a column rename not reflected in service mappings; team patched config and reopened three test cases.",
            timestamp: "Mar 27, 3:45 PM",
            category: "blocker",
            involved: ["Marcus Chen", "Priya Nair"],
            sources: [
              { type: "sharepoint", label: "MIG-1842" },
              { type: "teams", label: "Thread with payments" },
            ],
          },
        ],
      },
      {
        weekNumber: 7,
        label: "Mar 16 – Mar 20",
        dateRange: "",
        summary:
          "Integration testing kicked off. Revised go-live target of Apr 18 accepted by stakeholders.",
        events: [
          {
            id: "om-7-1",
            title: "Integration testing kickoff",
            detail:
              "Teams aligned on environment promotion rules, smoke suite ownership, and daily defect triage.",
            timestamp: "Mar 16, 9:00 AM",
            category: "milestone",
            involved: ["James Whitfield", "All service leads"],
            sources: [
              { type: "teams", label: "Kickoff" },
              { type: "sharepoint", label: "Runbook index" },
            ],
          },
          {
            id: "om-7-2",
            title: "Timeline revision to Apr 18",
            detail:
              "Leadership approved a compressed but realistic window with explicit gates on UAT sign-off and performance baselines.",
            timestamp: "Mar 17, 2:00 PM",
            category: "decision",
            involved: ["Program lead", "James Whitfield", "CTO delegate"],
            sources: [
              { type: "outlook", label: "Decision session" },
              { type: "outlook", label: "Written approval" },
            ],
          },
          {
            id: "om-7-3",
            title: "Cutover window workshop",
            detail:
              "Discussed freeze periods, rollback triggers, and communication tree for customer-facing services during the swap.",
            timestamp: "Mar 18, 11:30 AM",
            category: "meeting",
            involved: ["James Whitfield", "SRE", "Customer comms"],
            sources: [
              { type: "teams", label: "Cutover planning" },
              { type: "sharepoint", label: "Runbook workspace" },
            ],
          },
          {
            id: "om-7-4",
            title: "Load test scope trimmed",
            detail:
              "Non-critical read replicas deferred from first cutover wave; documented as follow-up work post go-live.",
            timestamp: "Mar 19, 4:20 PM",
            category: "decision",
            involved: ["James Whitfield", "Elena Ruiz"],
            sources: [
              { type: "sharepoint", label: "MIG-1790" },
              { type: "teams", label: "#platform-eng" },
            ],
          },
          {
            id: "om-7-5",
            title: "Weekly migration standup",
            detail:
              "Reviewed open defects, vendor commitments for UAT drops, and staffing for weekend test pushes.",
            timestamp: "Mar 20, 10:00 AM",
            category: "update",
            involved: ["James Whitfield", "Engineering pods"],
            sources: [
              { type: "teams", label: "Standup" },
              { type: "sharepoint", label: "Week notes" },
            ],
          },
        ],
      },
      {
        weekNumber: 6,
        label: "Mar 9 – Mar 13",
        dateRange: "",
        summary:
          "Vendor extracts finally landed. Engineering re-mobilized on validation and downstream service work.",
        events: [
          {
            id: "om-6-1",
            title: "Initial extract bundle received",
            detail:
              "Vendor delivered the first multi-TB drop to the secure landing zone; checksums matched and ingestion jobs queued overnight.",
            timestamp: "Mar 9, 8:45 AM",
            category: "milestone",
            involved: ["James Whitfield", "Data platform on-call"],
            sources: [
              { type: "outlook", label: "Delivery notification" },
              { type: "teams", label: "#data-ops" },
            ],
          },
          {
            id: "om-6-2",
            title: "Engineering capacity restored",
            detail:
              "Previously loaned engineers returned to migration squads; leads re-prioritized validation over net-new features for two sprints.",
            timestamp: "Mar 10, 1:00 PM",
            category: "decision",
            involved: ["James Whitfield", "Engineering managers"],
            sources: [
              { type: "sharepoint", label: "Capacity epic" },
              { type: "outlook", label: "Staffing sync" },
            ],
          },
          {
            id: "om-6-3",
            title: "Row-level validation started",
            detail:
              "DBA began sampling high-cardinality tables and comparing aggregates against Oracle gold copies; early variance under 0.02%.",
            timestamp: "Mar 11, 10:30 AM",
            category: "update",
            involved: ["Priya Nair", "Contract DBA"],
            sources: [
              { type: "sharepoint", label: "Validation checklist" },
              { type: "sharepoint", label: "sql-validate repo" },
            ],
          },
          {
            id: "om-6-4",
            title: "PII masking discrepancy",
            detail:
              "One dimension table shipped with weaker masking than contract; legal asked for a same-day corrected slice.",
            timestamp: "Mar 12, 3:00 PM",
            category: "blocker",
            involved: ["James Whitfield", "Legal", "Vendor PM"],
            sources: [
              { type: "outlook", label: "Legal thread" },
              { type: "teams", label: "Ad-hoc bridge" },
            ],
          },
          {
            id: "om-6-5",
            title: "Service owners sync",
            detail:
              "Microservice owners confirmed connection strings and migration flags for staging; no new schema surprises.",
            timestamp: "Mar 13, 11:15 AM",
            category: "meeting",
            involved: ["James Whitfield", "12 service owners"],
            sources: [
              { type: "teams", label: "Owners forum" },
              { type: "sharepoint", label: "Config matrix" },
            ],
          },
        ],
      },
      {
        weekNumber: 5,
        label: "Mar 2 – Mar 6",
        dateRange: "",
        summary:
          "Vendor missed second extraction window. Internal escalation lagged, deepening the schedule hit.",
        highlight: "critical",
        events: [
          {
            id: "om-5-1",
            title: "Second extraction miss",
            detail:
              "Vendor failed the Mar 2 delivery with less than 24 hours notice, blaming competing client work and understaffed overnight jobs.",
            timestamp: "Mar 2, 4:30 PM",
            category: "blocker",
            involved: ["James Whitfield", "Vendor PM", "Procurement"],
            sources: [
              { type: "outlook", label: "Slip notice" },
              { type: "teams", label: "#exec-migration" },
            ],
          },
          {
            id: "om-5-2",
            title: "Contract remedy discussion",
            detail:
              "Legal reviewed SLA credits and step-in rights; leadership preferred a forced recovery plan over termination to avoid further delay.",
            timestamp: "Mar 3, 9:00 AM",
            category: "meeting",
            involved: ["James Whitfield", "Legal", "Finance"],
            sources: [
              { type: "teams", label: "Legal bridge" },
              { type: "sharepoint", label: "SLA excerpt" },
            ],
          },
          {
            id: "om-5-3",
            title: "Escalation delayed 16 days",
            detail:
              "Internal routing between vendor management and engineering leadership slowed the formal escalation; James documented the gap for postmortem.",
            timestamp: "Mar 4, 2:45 PM",
            category: "escalation",
            involved: ["James Whitfield", "VP Engineering"],
            sources: [
              { type: "outlook", label: "Escalation trail" },
              { type: "outlook", label: "Vendor relationship note" },
            ],
          },
          {
            id: "om-5-4",
            title: "Vendor cites resource constraints",
            detail:
              "Vendor leadership admitted capacity issues on the extract pipeline team and proposed a revised but still risky delivery the following week.",
            timestamp: "Mar 5, 11:00 AM",
            category: "update",
            involved: ["James Whitfield", "Vendor account exec"],
            sources: [
              { type: "teams", label: "Vendor call" },
              { type: "outlook", label: "Follow-up summary" },
            ],
          },
          {
            id: "om-5-5",
            title: "Engineering idle time costed",
            detail:
              "Finance asked for burn during the wait; ~30% of migration squad capacity was redirected to tech debt.",
            timestamp: "Mar 6, 3:30 PM",
            category: "decision",
            involved: ["James Whitfield", "Finance partner"],
            sources: [
              { type: "sharepoint", label: "Capacity model" },
              { type: "outlook", label: "Finance ask thread" },
            ],
          },
        ],
      },
      {
        weekNumber: 4,
        label: "Feb 23 – Feb 27",
        dateRange: "",
        summary:
          "Still waiting on vendor extracts. Teams rotated engineers to limit thrash.",
        events: [
          {
            id: "om-4-1",
            title: "No extract ETA from vendor",
            detail:
              "Vendor provided only a vague 'next few days' update; engineering could not lock staging refresh or downstream test plans.",
            timestamp: "Feb 23, 10:00 AM",
            category: "blocker",
            involved: ["James Whitfield", "Vendor PM"],
            sources: [
              { type: "outlook", label: "Vendor update" },
              { type: "teams", label: "#db-migration" },
            ],
          },
          {
            id: "om-4-2",
            title: "Engineering reassignment plan",
            detail:
              "Squad leads agreed to park deep migration tasks and pick up customer bugs to protect sprint commitments.",
            timestamp: "Feb 24, 1:15 PM",
            category: "decision",
            involved: ["James Whitfield", "Squad leads"],
            sources: [
              { type: "sharepoint", label: "Rebalance board" },
              { type: "teams", label: "Leads huddle" },
            ],
          },
          {
            id: "om-4-3",
            title: "Weekly standup — tensions",
            detail:
              "Frustration surfaced about repeated vendor slips; James committed to daily written status until files landed.",
            timestamp: "Feb 25, 9:30 AM",
            category: "meeting",
            involved: ["Full migration team"],
            sources: [
              { type: "teams", label: "Team standup" },
              { type: "sharepoint", label: "Meeting notes" },
            ],
          },
          {
            id: "om-4-4",
            title: "Context-switch cost discussion",
            detail:
              "Engineering managers quantified thrash from stop/start work; flagged need for executive air cover if vendor delays continue.",
            timestamp: "Feb 26, 4:00 PM",
            category: "update",
            involved: ["James Whitfield", "Eng managers"],
            sources: [
              { type: "teams", label: "Managers sync" },
              { type: "sharepoint", label: "Thrash memo" },
            ],
          },
          {
            id: "om-4-5",
            title: "Staging freeze extended",
            detail:
              "Without fresh data, the team extended the staging freeze and communicated to QA that regression windows would slip.",
            timestamp: "Feb 27, 11:45 AM",
            category: "decision",
            involved: ["James Whitfield", "QA lead"],
            sources: [
              { type: "teams", label: "#qa-coordination" },
              { type: "sharepoint", label: "Milestone update" },
            ],
          },
        ],
      },
      {
        weekNumber: 3,
        label: "Feb 16 – Feb 20",
        dateRange: "",
        summary:
          "First committed vendor extraction did not arrive. Engineering blocked; risk formally elevated.",
        highlight: "critical",
        events: [
          {
            id: "om-3-1",
            title: "First extraction delivery missed",
            detail:
              "The Feb 14 window passed with no payload; vendor first blamed firewall tickets, then admitted pipeline rework was incomplete.",
            timestamp: "Feb 16, 8:30 AM",
            category: "blocker",
            involved: ["James Whitfield", "Vendor ops lead"],
            sources: [
              { type: "outlook", label: "Miss notification" },
              { type: "teams", label: "#vendor-acme" },
            ],
          },
          {
            id: "om-3-2",
            title: "Engineering blocked on datasets",
            detail:
              "Without representative volumes, performance testing and several service cutover drills were paused.",
            timestamp: "Feb 17, 10:00 AM",
            category: "escalation",
            involved: ["James Whitfield", "Marcus Chen"],
            sources: [
              { type: "sharepoint", label: "MIG-1620" },
              { type: "teams", label: "War room" },
            ],
          },
          {
            id: "om-3-3",
            title: "Vendor cites schema complexity",
            detail:
              "Vendor claimed nested Oracle types and historic custom functions complicated extract mapping; asked for another week.",
            timestamp: "Feb 18, 2:20 PM",
            category: "update",
            involved: ["James Whitfield", "Vendor architect"],
            sources: [
              { type: "teams", label: "Technical deep dive" },
              { type: "sharepoint", label: "ERD export" },
            ],
          },
          {
            id: "om-3-4",
            title: "Risk flagged to program",
            detail:
              "Steering deck updated with red status on vendor dependency; dependency called out as primary schedule driver.",
            timestamp: "Feb 19, 3:00 PM",
            category: "milestone",
            involved: ["James Whitfield", "Program office"],
            sources: [
              { type: "sharepoint", label: "Steering deck v3" },
              { type: "outlook", label: "Status blast" },
            ],
          },
          {
            id: "om-3-5",
            title: "Tighten acceptance criteria",
            detail:
              "Legal and eng agreed that future drops must include checksum manifests and sample validation queries before handoff is accepted.",
            timestamp: "Feb 20, 11:30 AM",
            category: "decision",
            involved: ["James Whitfield", "Legal", "Priya Nair"],
            sources: [
              { type: "sharepoint", label: "Acceptance addendum" },
              { type: "outlook", label: "Decision log" },
            ],
          },
        ],
      },
      {
        weekNumber: 2,
        label: "Feb 9 – Feb 13",
        dateRange: "",
        summary:
          "Connectivity and access foundations progressed: staging networking, credential flows, and schema review.",
        events: [
          {
            id: "om-2-1",
            title: "Staging VPC peering complete",
            detail:
              "Network team finished peering and route tables; security signed off on east-west inspection rules.",
            timestamp: "Feb 9, 9:00 AM",
            category: "milestone",
            involved: ["James Whitfield", "Network team"],
            sources: [
              { type: "sharepoint", label: "NET-8841" },
              { type: "teams", label: "#net-ops" },
            ],
          },
          {
            id: "om-2-2",
            title: "Oracle ↔ cloud connectivity tests",
            detail:
              "DBA ran latency and throughput probes; results within tolerance for bulk copy, with notes on peak-window throttling.",
            timestamp: "Feb 10, 1:45 PM",
            category: "update",
            involved: ["Contract DBA", "Priya Nair"],
            sources: [
              { type: "sharepoint", label: "probe scripts" },
              { type: "outlook", label: "Test summary" },
            ],
          },
          {
            id: "om-2-3",
            title: "End-to-end schema review",
            detail:
              "Service owners walked table-by-table mappings; flagged three packages needing rewrite and one queue table to split.",
            timestamp: "Feb 11, 10:30 AM",
            category: "meeting",
            involved: ["James Whitfield", "Service owners", "DBA"],
            sources: [
              { type: "teams", label: "Schema workshop" },
              { type: "sharepoint", label: "Mapping notes" },
            ],
          },
          {
            id: "om-2-4",
            title: "Access provisioning batch",
            detail:
              "IAM roles for extract agents, landing buckets, and Postgres admin were created with least-privilege templates.",
            timestamp: "Feb 12, 11:00 AM",
            category: "milestone",
            involved: ["James Whitfield", "Security IAM"],
            sources: [
              { type: "sharepoint", label: "MIG-1502" },
              { type: "sharepoint", label: "Access roster" },
            ],
          },
          {
            id: "om-2-5",
            title: "Secrets management decision",
            detail:
              "Team standardized on the org vault for connection strings; legacy flat files to be retired before first production cutover.",
            timestamp: "Feb 13, 4:15 PM",
            category: "decision",
            involved: ["James Whitfield", "Security", "SRE"],
            sources: [
              { type: "teams", label: "Architecture forum" },
              { type: "sharepoint", label: "ADR-14" },
            ],
          },
        ],
      },
      {
        weekNumber: 1,
        label: "Feb 2 – Feb 6",
        dateRange: "",
        summary:
          "Kickoff week: vendor onboarded, contract SLA signed, staging approach outlined, clear ownership assigned.",
        events: [
          {
            id: "om-1-1",
            title: "Program kickoff",
            detail:
              "Leadership framed objectives, success metrics, and non-negotiables for zero extended downtime on the payments read path.",
            timestamp: "Feb 2, 9:00 AM",
            category: "meeting",
            involved: ["James Whitfield", "Steering committee"],
            sources: [
              { type: "teams", label: "Kickoff" },
              { type: "sharepoint", label: "Charter deck" },
            ],
          },
          {
            id: "om-1-2",
            title: "Vendor onboarding",
            detail:
              "Vendor squad received environment prerequisites, data handling policy attestation, and incident comms expectations.",
            timestamp: "Feb 3, 1:00 PM",
            category: "milestone",
            involved: ["James Whitfield", "Vendor PM", "Security"],
            sources: [
              { type: "outlook", label: "Onboarding pack" },
              { type: "sharepoint", label: "Shared workspace" },
            ],
          },
          {
            id: "om-1-3",
            title: "MSA / SLA executed",
            detail:
              "Signed documents included delivery milestones, extract SLAs, and remedy path; legal filed countersigned PDFs.",
            timestamp: "Feb 4, 11:30 AM",
            category: "milestone",
            involved: ["Procurement", "Legal", "James Whitfield"],
            sources: [
              { type: "outlook", label: "Countersign complete" },
              { type: "sharepoint", label: "Contract repository" },
            ],
          },
          {
            id: "om-1-4",
            title: "Staging environment approach",
            detail:
              "Agreed on blue/green Postgres clusters with automated refresh from vendor drops and gated promotion to integration.",
            timestamp: "Feb 5, 10:00 AM",
            category: "decision",
            involved: ["James Whitfield", "SRE", "DBA"],
            sources: [
              { type: "teams", label: "Design session" },
              { type: "sharepoint", label: "Staging design" },
            ],
          },
          {
            id: "om-1-5",
            title: "RACI and squad assignments",
            detail:
              "Named owners per microservice, a central migration PMO cadence, and weekly vendor checkpoints.",
            timestamp: "Feb 6, 3:00 PM",
            category: "update",
            involved: ["James Whitfield", "Eng managers"],
            sources: [
              { type: "sharepoint", label: "Project plan" },
              { type: "teams", label: "#oracle-migration" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q2-enterprise-pipeline",
    title: "Q2 Enterprise Pipeline Review",
    description:
      "Comprehensive review and acceleration of the enterprise sales pipeline for Q2 targets.",
    status: "on-track",
    priority: "high",
    owner: "Tracy Kim",
    currentStateSummary:
      "Pipeline at $4.2M against $5M target — three deals advancing to final stage this week.",
    createdAt: "2025-02-10",
    weeks: [
      {
        weekNumber: 6,
        label: "Mar 23 – Mar 27",
        dateRange: "Current",
        summary:
          "Three enterprise deals moved to final stage; FinServ close targeted this week; forecast refreshed.",
        events: [
          {
            id: "q2-6-1",
            title: "FinServ legal review cleared",
            detail:
              "Counsel signed off on MSA redlines. AE notified the buyer that we can execute by Friday if procurement issues the PO.",
            timestamp: "Mar 24, 11:20 AM",
            category: "milestone",
            involved: ["Tracy Kim", "Jordan Patel", "FinServ legal"],
            sources: [
              { type: "outlook", label: "Legal clearance — FinServ MSA" },
              {
                type: "outlook",
                label: "FinServ Global — opportunity notes",
              },
            ],
          },
          {
            id: "q2-6-2",
            title: "Weekly pipeline sync",
            detail:
              "RevOps walked through stage hygiene and commit rules. Leadership asked for one-page risk flags on the three late-stage deals.",
            timestamp: "Mar 25, 3:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "Sales leadership", "RevOps"],
            sources: [
              { type: "teams", label: "Q2 pipeline sync recording" },
              { type: "outlook", label: "Weekly pipeline review" },
            ],
          },
          {
            id: "q2-6-3",
            title: "Forecast updated in CRM",
            detail:
              "Weighted forecast raised after FinServ verbal; Meridian and TechCorp kept in commit with explicit next-step dates.",
            timestamp: "Mar 26, 9:45 AM",
            category: "update",
            involved: ["Tracy Kim", "RevOps"],
            sources: [
              { type: "outlook", label: "Q2 forecast workbook" },
              { type: "teams", label: "#enterprise-sales" },
            ],
          },
          {
            id: "q2-6-4",
            title: "Meridian security questionnaire",
            detail:
              "Infosec returned answers on data residency. Buyer requested a short follow-up with our CISO — scheduled for Thursday.",
            timestamp: "Mar 26, 2:10 PM",
            category: "update",
            involved: ["Tracy Kim", "Security", "Meridian IT"],
            sources: [
              { type: "sharepoint", label: "Meridian security Q&A (v3)" },
              { type: "sharepoint", label: "Deal room — Meridian" },
            ],
          },
          {
            id: "q2-6-5",
            title: "TechCorp exec alignment",
            detail:
              "Champion confirmed budget holder will join the pricing call. No new blockers; timeline ties to their Q2 board readout.",
            timestamp: "Mar 27, 10:00 AM",
            category: "decision",
            involved: ["Tracy Kim", "TechCorp champion", "AE"],
            sources: [
              { type: "teams", label: "TechCorp — exec pricing prep" },
              { type: "teams", label: "DM with champion" },
            ],
          },
        ],
      },
      {
        weekNumber: 5,
        label: "Mar 16 – Mar 20",
        dateRange: "",
        summary:
          "FinServ procurement dates locked; Meridian POC delivered; pipeline reached $4.2M; TechCorp technical deep-dive.",
        events: [
          {
            id: "q2-5-1",
            title: "FinServ procurement timeline confirmed",
            detail:
              "Buyer shared internal approval gates: legal (done), security (in progress), PO cut target end of month.",
            timestamp: "Mar 17, 1:30 PM",
            category: "milestone",
            involved: ["Tracy Kim", "FinServ procurement"],
            sources: [
              { type: "outlook", label: "Re: FinServ — procurement path" },
              { type: "outlook", label: "FinServ — activity log" },
            ],
          },
          {
            id: "q2-5-2",
            title: "Meridian POC delivered",
            detail:
              "CSM uploaded success metrics deck. Customer acknowledged outcomes met success criteria from the VP call.",
            timestamp: "Mar 18, 4:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "CSM", "Meridian VP Ops"],
            sources: [
              { type: "sharepoint", label: "Meridian POC results" },
              { type: "sharepoint", label: "POC checklist" },
            ],
          },
          {
            id: "q2-5-3",
            title: "Pipeline snapshot at $4.2M",
            detail:
              "RevOps rollup showed +$400K week over week, driven by Meridian expansion and FinServ stage progression.",
            timestamp: "Mar 19, 8:00 AM",
            category: "update",
            involved: ["Tracy Kim", "RevOps"],
            sources: [
              { type: "outlook", label: "Enterprise pipeline report" },
              { type: "teams", label: "#revops-digest" },
            ],
          },
          {
            id: "q2-5-4",
            title: "TechCorp technical deep-dive",
            detail:
              "Solutions architect walked through SSO, SCIM, and audit logging. No show-stoppers; open items tracked as P2.",
            timestamp: "Mar 19, 2:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "SA team", "TechCorp engineering"],
            sources: [
              { type: "teams", label: "TechCorp architecture session" },
              { type: "sharepoint", label: "enterprise/sso-integration-notes" },
            ],
          },
          {
            id: "q2-5-5",
            title: "NovaCare on hold",
            detail:
              "Champion out on leave; AE parked the deal in nurture with a check-in date after Easter.",
            timestamp: "Mar 20, 11:15 AM",
            category: "update",
            involved: ["Tracy Kim", "NovaCare AE"],
            sources: [
              { type: "teams", label: "#enterprise-sales" },
              { type: "outlook", label: "NovaCare — next step" },
            ],
          },
        ],
      },
      {
        weekNumber: 4,
        label: "Mar 9 – Mar 13",
        dateRange: "",
        summary:
          "Pipeline review at $3.8M; FinServ advancing; NovaCare discovery; security docs requested by buyers.",
        highlight: "warning",
        events: [
          {
            id: "q2-4-1",
            title: "Pipeline review: $3.8M",
            detail:
              "Leadership flagged gap to $5M Q2 plan. Team agreed to prioritize resurrected opps and tighten stage definitions.",
            timestamp: "Mar 10, 10:00 AM",
            category: "meeting",
            involved: ["Tracy Kim", "CRO", "RVPs"],
            sources: [
              { type: "outlook", label: "Monthly pipeline council" },
              { type: "sharepoint", label: "Pipeline review agenda" },
            ],
          },
          {
            id: "q2-4-2",
            title: "FinServ Global advancing",
            detail:
              "Deal moved to negotiation after commercial terms accepted. Procurement asked for redlined MSA by end of week.",
            timestamp: "Mar 11, 9:20 AM",
            category: "milestone",
            involved: ["Tracy Kim", "FinServ sponsor"],
            sources: [
              { type: "outlook", label: "FinServ Global — stage change" },
              { type: "outlook", label: "MSA review request" },
            ],
          },
          {
            id: "q2-4-3",
            title: "NovaCare discovery call",
            detail:
              "Identified pain around reporting latency and manual exports. Qualified as enterprise ICP; next step is security scoping.",
            timestamp: "Mar 11, 3:30 PM",
            category: "meeting",
            involved: ["Tracy Kim", "NovaCare IT lead"],
            sources: [
              { type: "teams", label: "NovaCare discovery" },
              { type: "sharepoint", label: "Discovery notes" },
            ],
          },
          {
            id: "q2-4-4",
            title: "Security audit docs requested",
            detail:
              "Meridian and FinServ both asked for SOC 2 packet and subprocessors list. Infosec queued for 48-hour turnaround.",
            timestamp: "Mar 12, 11:00 AM",
            category: "blocker",
            involved: ["Tracy Kim", "Infosec", "Legal"],
            sources: [
              {
                type: "outlook",
                label: "Security diligence — Meridian / FinServ",
              },
              { type: "sharepoint", label: "Trust & security folder" },
            ],
          },
          {
            id: "q2-4-5",
            title: "Competitive recap shared",
            detail:
              "PMM circulated win/loss themes from last quarter. AEs asked to use the one-pager in late-stage calls.",
            timestamp: "Mar 13, 2:45 PM",
            category: "update",
            involved: ["Tracy Kim", "PMM", "Enterprise AEs"],
            sources: [
              { type: "teams", label: "#competitive-intel" },
              { type: "sharepoint", label: "Q1 win/loss summary" },
            ],
          },
        ],
      },
      {
        weekNumber: 3,
        label: "Mar 2 – Mar 6",
        dateRange: "",
        summary:
          "Meridian VP call exceeded expectations; ACV expanded to $520K; two inbound leads qualified.",
        events: [
          {
            id: "q2-3-1",
            title: "Meridian VP call — positive outcome",
            detail:
              "VP confirmed expansion intent and introduced finance for budget validation. Champion agreed to POC success criteria workshop.",
            timestamp: "Mar 3, 2:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "Meridian VP Ops", "AE"],
            sources: [
              { type: "teams", label: "Meridian VP QBR" },
              { type: "outlook", label: "Meridian Health — call log" },
            ],
          },
          {
            id: "q2-3-2",
            title: "Deal expanded to $520K",
            detail:
              "RevOps updated ACV after multi-year and add-on modules. Legal started order form draft.",
            timestamp: "Mar 4, 10:15 AM",
            category: "decision",
            involved: ["Tracy Kim", "RevOps", "Legal"],
            sources: [
              { type: "outlook", label: "Meridian — opportunity value" },
              { type: "teams", label: "DM Legal — order form" },
            ],
          },
          {
            id: "q2-3-3",
            title: "Two inbound leads qualified",
            detail:
              "SDR passed FinServ subsidiary and regional health network; both met BANT after discovery.",
            timestamp: "Mar 5, 9:00 AM",
            category: "update",
            involved: ["Tracy Kim", "SDR team", "AEs"],
            sources: [
              { type: "outlook", label: "Inbound routing queue" },
              { type: "teams", label: "#sdr-handoffs" },
            ],
          },
          {
            id: "q2-3-4",
            title: "Proposal drafting kickoff",
            detail:
              "Solutions drafted narrative around ROI and rollout. CS attached references aligned to healthcare compliance story.",
            timestamp: "Mar 5, 1:30 PM",
            category: "update",
            involved: ["Tracy Kim", "Solutions", "CSM"],
            sources: [
              { type: "sharepoint", label: "Meridian proposal outline" },
              { type: "sharepoint", label: "Proposal task board" },
            ],
          },
          {
            id: "q2-3-5",
            title: "TechCorp re-engagement touchpoint",
            detail:
              "AE sent tailored ROI model referencing resurrected use case. Champion replied with interest in technical session.",
            timestamp: "Mar 6, 4:20 PM",
            category: "update",
            involved: ["Tracy Kim", "TechCorp AE"],
            sources: [
              { type: "outlook", label: "TechCorp — ROI follow-up" },
              {
                type: "outlook",
                label: "Hold — TechCorp deep-dive",
              },
            ],
          },
        ],
      },
      {
        weekNumber: 2,
        label: "Feb 23 – Feb 27",
        dateRange: "",
        summary:
          "Executive sponsors engaged; Meridian VP meeting booked; TechCorp deal resurrected; competitive intel packaged.",
        events: [
          {
            id: "q2-2-1",
            title: "Executive sponsorship plan",
            detail:
              "RVPs mapped exec allies to the eight stalled deals. CRO asked for weekly readouts until each has a named exec path.",
            timestamp: "Feb 24, 11:00 AM",
            category: "decision",
            involved: ["Tracy Kim", "CRO", "RVPs"],
            sources: [
              { type: "teams", label: "Exec coverage working session" },
              { type: "sharepoint", label: "Sponsorship matrix" },
            ],
          },
          {
            id: "q2-2-2",
            title: "Meridian Health VP call booked",
            detail:
              "Champion secured 60 minutes with VP Ops. Pre-brief doc circulated with agenda and success metrics.",
            timestamp: "Feb 25, 9:30 AM",
            category: "milestone",
            involved: ["Tracy Kim", "Meridian champion"],
            sources: [
              { type: "outlook", label: "Meridian VP — Mar 3" },
              { type: "outlook", label: "Meeting confirmation" },
            ],
          },
          {
            id: "q2-2-3",
            title: "TechCorp deal resurrected",
            detail:
              "AE reopened opportunity after product fix shipped. Champion validated issue resolved and agreed to a technical deep-dive.",
            timestamp: "Feb 26, 2:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "TechCorp AE", "Product"],
            sources: [
              { type: "outlook", label: "TechCorp — stage reopened" },
              { type: "teams", label: "#product-gtm" },
            ],
          },
          {
            id: "q2-2-4",
            title: "Competitive intel gathered",
            detail:
              "PMM delivered battlecards refresh on two incumbents. Sales enablement scheduled lunch-and-learn for enterprise pod.",
            timestamp: "Feb 26, 4:45 PM",
            category: "update",
            involved: ["Tracy Kim", "PMM", "Enablement"],
            sources: [
              { type: "sharepoint", label: "Enterprise battlecards v2" },
              { type: "teams", label: "#sales-enablement" },
            ],
          },
          {
            id: "q2-2-5",
            title: "Stalled deal outreach blitz",
            detail:
              "SDR-assisted touches went to six accounts with no activity in 45 days. Three responses received.",
            timestamp: "Feb 27, 10:00 AM",
            category: "update",
            involved: ["Tracy Kim", "SDR", "AEs"],
            sources: [
              { type: "outlook", label: "Re-engagement sequence" },
              { type: "outlook", label: "Stalled deal campaign" },
            ],
          },
        ],
      },
      {
        weekNumber: 1,
        label: "Feb 16 – Feb 20",
        dateRange: "",
        summary:
          "Full pipeline audit completed; eight stalled deals flagged; re-engagement playbook drafted.",
        events: [
          {
            id: "q2-1-1",
            title: "Enterprise pipeline audit kickoff",
            detail:
              "RevOps exported six months of stage history and velocity. Leadership aligned on definitions for stalled vs. nurture.",
            timestamp: "Feb 17, 9:00 AM",
            category: "meeting",
            involved: ["Tracy Kim", "RevOps", "Sales ops"],
            sources: [
              { type: "teams", label: "Audit kickoff" },
              { type: "sharepoint", label: "Audit scope" },
            ],
          },
          {
            id: "q2-1-2",
            title: "Eight stalled deals identified",
            detail:
              "Analysis showed no meaningful activity in 30+ days for eight enterprise opps above $200K. Owners assigned.",
            timestamp: "Feb 18, 11:30 AM",
            category: "escalation",
            involved: ["Tracy Kim", "RVPs", "AE owners"],
            sources: [
              { type: "outlook", label: "Stalled opportunities list" },
              { type: "teams", label: "#enterprise-pipeline" },
            ],
          },
          {
            id: "q2-1-3",
            title: "Re-engagement strategy designed",
            detail:
              "Playbook combines exec sponsorship, SDR blitz, and product-led hooks. Tracy owns rollout communication.",
            timestamp: "Feb 19, 2:00 PM",
            category: "decision",
            involved: ["Tracy Kim", "Sales leadership"],
            sources: [
              { type: "sharepoint", label: "Re-engagement playbook" },
              { type: "outlook", label: "Rollout — stalled deal program" },
            ],
          },
          {
            id: "q2-1-4",
            title: "Salesforce hygiene review",
            detail:
              "Rep-level dashboards updated; required fields enforced for enterprise stage moves.",
            timestamp: "Feb 19, 4:00 PM",
            category: "update",
            involved: ["Tracy Kim", "RevOps"],
            sources: [
              { type: "outlook", label: "SFDC hygiene checklist" },
              {
                type: "sharepoint",
                label: "Field guide — required fields",
              },
            ],
          },
          {
            id: "q2-1-5",
            title: "Q2 target alignment",
            detail:
              "Confirmed $5M enterprise goal and $4.2M current weighted baseline after cleanup. Gap owners named per region.",
            timestamp: "Feb 20, 10:30 AM",
            category: "milestone",
            involved: ["Tracy Kim", "CRO", "Finance"],
            sources: [
              { type: "outlook", label: "Q2 goal setting" },
              { type: "sharepoint", label: "FY planning folder" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "apac-expansion",
    title: "APAC Market Expansion",
    description:
      "Market entry strategy and go-to-market execution for Japan and Australia.",
    status: "at-risk",
    priority: "high",
    owner: "Lisa Park",
    currentStateSummary:
      "Japan launch delayed 2 weeks due to localization vendor. Australia GTM proceeding as planned.",
    createdAt: "2025-02-09",
    weeks: [
      {
        weekNumber: 7,
        label: "Mar 23 – Mar 27",
        dateRange: "Current",
        summary:
          "Australia launch follow-up in motion; 12 qualified leads. Japan QA round 2 at 80%; soft-launch collateral in prep.",
        events: [
          {
            id: "ap-7-1",
            title: "Australia launch follow-up campaign kicked off",
            detail:
              "Sales and marketing aligned on nurture sequences for Sydney event attendees; CRM segments updated for APAC pipeline.",
            timestamp: "Mar 24, 10:00 AM",
            category: "update",
            involved: ["Lisa Park", "Marcus Webb", "Priya Shah"],
            sources: [
              { type: "teams", label: "#apac-gtm" },
              { type: "sharepoint", label: "CRM segment notes" },
            ],
          },
          {
            id: "ap-7-2",
            title: "12 qualified leads from Sydney launch",
            detail:
              "BDR team qualified 12 opportunities against ICP; handoffs scheduled to account executives for Australia region.",
            timestamp: "Mar 25, 2:30 PM",
            category: "milestone",
            involved: ["Lisa Park", "Elena Costa", "Tom Brennan"],
            sources: [
              { type: "outlook", label: "APAC pipeline" },
              { type: "sharepoint", label: "Lead tracker" },
            ],
          },
          {
            id: "ap-7-3",
            title: "Japan QA round 2 reached 80% pass rate",
            detail:
              "Linguistic QA on revised NihonLoc strings; remaining failures clustered in billing and compliance copy.",
            timestamp: "Mar 26, 11:15 AM",
            category: "update",
            involved: ["Lisa Park", "Ken Yamada", "NihonLoc PM"],
            sources: [
              { type: "sharepoint", label: "LOC-442" },
              { type: "sharepoint", label: "QA checklist" },
            ],
          },
          {
            id: "ap-7-4",
            title: "Japan soft launch collateral in review",
            detail:
              "Product marketing circulated landing page and in-app announcement copy for Japan soft launch; legal review queued.",
            timestamp: "Mar 26, 4:00 PM",
            category: "meeting",
            involved: ["Lisa Park", "Yuki Sato", "Legal – APAC"],
            sources: [
              { type: "sharepoint", label: "Soft launch brief" },
              { type: "teams", label: "Collateral review" },
            ],
          },
          {
            id: "ap-7-5",
            title: "Weekly APAC steering sync",
            detail:
              "Confirmed Australia pipeline targets post-event; Japan path to Apr 7 launch contingent on closing final QA gaps.",
            timestamp: "Mar 27, 9:00 AM",
            category: "meeting",
            involved: ["Lisa Park", "David Okonkwo", "CFO office"],
            sources: [
              { type: "outlook", label: "APAC steering" },
              { type: "teams", label: "DM summary" },
            ],
          },
        ],
      },
      {
        weekNumber: 6,
        label: "Mar 16 – Mar 20",
        dateRange: "",
        summary:
          "Australia launched with Sydney event (Mar 17); strong attendance. Corrected Japan strings received; second QA underway.",
        events: [
          {
            id: "ap-6-1",
            title: "Australia product launch — Sydney event",
            detail:
              "Hosted launch event in Sydney with live demo and partner Harbour Digital; positioning focused on mid-market digital transformation.",
            timestamp: "Mar 17, 8:00 AM",
            category: "milestone",
            involved: ["Lisa Park", "Harbour Digital", "Field marketing"],
            sources: [
              { type: "teams", label: "Event livestream" },
              { type: "sharepoint", label: "Run of show" },
            ],
          },
          {
            id: "ap-6-2",
            title: "40+ prospects attended Sydney launch",
            detail:
              "Registration and check-in data consolidated; majority from NSW and VIC target accounts.",
            timestamp: "Mar 17, 12:00 PM",
            category: "milestone",
            involved: ["Elena Costa", "Events team"],
            sources: [
              { type: "sharepoint", label: "Attendee list" },
              { type: "outlook", label: "Post-event recap" },
            ],
          },
          {
            id: "ap-6-3",
            title: "NihonLoc delivered corrected Japan UI strings",
            detail:
              "Vendor submitted full replacement batch addressing machine-translation and terminology issues from prior sprint.",
            timestamp: "Mar 18, 3:00 PM",
            category: "update",
            involved: ["Ken Yamada", "NihonLoc PM", "Lisa Park"],
            sources: [
              { type: "sharepoint", label: "LOC drop folder" },
              { type: "teams", label: "NihonLoc shared channel" },
            ],
          },
          {
            id: "ap-6-4",
            title: "Japan localization QA round 2 started",
            detail:
              "Engineering cut new build with updated strings; QA prioritized payment flows and onboarding.",
            timestamp: "Mar 19, 10:00 AM",
            category: "milestone",
            involved: ["Ken Yamada", "QA – APAC", "Lisa Park"],
            sources: [
              { type: "sharepoint", label: "LOC-438" },
              { type: "sharepoint", label: "release/apac-jp" },
            ],
          },
          {
            id: "ap-6-5",
            title: "Harbour Digital co-marketing plan agreed",
            detail:
              "Joint webinar and case study timeline set for Q2; Harbour to promote Australia tier-1 accounts.",
            timestamp: "Mar 20, 11:30 AM",
            category: "decision",
            involved: ["Lisa Park", "James Holt", "Partner marketing"],
            sources: [
              { type: "sharepoint", label: "Partner plan" },
              { type: "teams", label: "Partner call" },
            ],
          },
        ],
      },
      {
        weekNumber: 5,
        label: "Mar 9 – Mar 13",
        dateRange: "",
        summary:
          "Japan launch pushed to Apr 7; NihonLoc committed to corrected strings by Mar 21. Australia launch prep accelerated.",
        highlight: "warning",
        events: [
          {
            id: "ap-5-1",
            title: "Japan launch date moved to Apr 7",
            detail:
              "Program office updated GTM calendar; customer comms and internal enablement shifted to new window.",
            timestamp: "Mar 9, 1:00 PM",
            category: "decision",
            involved: ["Lisa Park", "David Okonkwo", "Ken Yamada"],
            sources: [
              { type: "outlook", label: "Launch calendar" },
              { type: "teams", label: "#apac-gtm" },
            ],
          },
          {
            id: "ap-5-2",
            title: "Escalation: board visibility on Japan slip",
            detail:
              "CFO briefed on two-week delay drivers tied to localization quality; mitigation plan tied to vendor remediation milestones.",
            timestamp: "Mar 10, 9:30 AM",
            category: "escalation",
            involved: ["Lisa Park", "CFO office", "David Okonkwo"],
            sources: [
              { type: "outlook", label: "Steering brief" },
              { type: "teams", label: "Exec sync" },
            ],
          },
          {
            id: "ap-5-3",
            title: "NihonLoc committed to corrected strings by Mar 21",
            detail:
              "Written commitment on delivery schedule and re-run of QA checklist before handoff to engineering.",
            timestamp: "Mar 11, 2:00 PM",
            category: "decision",
            involved: ["Lisa Park", "NihonLoc PM", "Legal"],
            sources: [
              { type: "outlook", label: "Vendor SOW addendum" },
              { type: "sharepoint", label: "Vendor tasks" },
            ],
          },
          {
            id: "ap-5-4",
            title: "Australia launch readiness review",
            detail:
              "Final checklist for Mar 17: billing in AUD, support hours, and Harbour Digital joint messaging signed off.",
            timestamp: "Mar 12, 10:00 AM",
            category: "meeting",
            involved: ["Lisa Park", "GTM leads", "Support ops"],
            sources: [
              { type: "sharepoint", label: "Launch checklist" },
              { type: "teams", label: "Readiness review" },
            ],
          },
          {
            id: "ap-5-5",
            title: "Australia launch prep intensified",
            detail:
              "Paid media and outbound sequences ramped; SDR scripts localized for Australian English and terminology.",
            timestamp: "Mar 13, 11:00 AM",
            category: "update",
            involved: ["Marcus Webb", "Growth team", "Lisa Park"],
            sources: [
              { type: "sharepoint", label: "GTM-891" },
              { type: "teams", label: "#au-launch" },
            ],
          },
        ],
      },
      {
        weekNumber: 4,
        label: "Mar 2 – Mar 6",
        dateRange: "",
        summary:
          "Japan UI string QA failed 34%; machine-translated segments flagged. Australia launch date locked to Mar 17.",
        highlight: "warning",
        events: [
          {
            id: "ap-4-1",
            title: "Japan UI strings failed QA at 34%",
            detail:
              "Linguistic QA report showed systematic issues in product and marketing strings; release candidate blocked for Japan build.",
            timestamp: "Mar 3, 9:00 AM",
            category: "blocker",
            involved: ["Ken Yamada", "QA – APAC", "Lisa Park"],
            sources: [
              { type: "sharepoint", label: "QA report" },
              { type: "sharepoint", label: "LOC-401" },
            ],
          },
          {
            id: "ap-4-2",
            title: "Machine-translated segments identified",
            detail:
              "Audit traced segments to vendor workflow gap; terminology guide not applied consistently across modules.",
            timestamp: "Mar 3, 3:30 PM",
            category: "escalation",
            involved: ["Lisa Park", "NihonLoc PM", "Ken Yamada"],
            sources: [
              { type: "teams", label: "NihonLoc shared channel" },
              { type: "sharepoint", label: "Audit notes" },
            ],
          },
          {
            id: "ap-4-3",
            title: "Vendor remediation plan accepted",
            detail:
              "NihonLoc to retranslate affected keys, add second-pass review, and daily status through Mar 21 delivery.",
            timestamp: "Mar 4, 11:00 AM",
            category: "decision",
            involved: ["Lisa Park", "Procurement", "NihonLoc PM"],
            sources: [
              { type: "outlook", label: "Remediation plan" },
              { type: "sharepoint", label: "Updated schedule" },
            ],
          },
          {
            id: "ap-4-4",
            title: "Australia launch date confirmed — Mar 17",
            detail:
              "GTM, support, and Harbour Digital aligned on public date; press and social calendar placeholders updated.",
            timestamp: "Mar 5, 2:00 PM",
            category: "milestone",
            involved: ["Lisa Park", "Comms", "James Holt"],
            sources: [
              { type: "outlook", label: "AU launch" },
              { type: "sharepoint", label: "Launch workback" },
            ],
          },
          {
            id: "ap-4-5",
            title: "Australia launch collateral in legal review",
            detail:
              "Terms, pricing page, and partner co-brand assets submitted for regional compliance check.",
            timestamp: "Mar 6, 10:00 AM",
            category: "update",
            involved: ["Yuki Sato", "Legal – APAC"],
            sources: [
              { type: "sharepoint", label: "AU collateral pack" },
              { type: "sharepoint", label: "Legal intake" },
            ],
          },
        ],
      },
      {
        weekNumber: 3,
        label: "Feb 23 – Feb 27",
        dateRange: "",
        summary:
          "Localization sprint underway; Japan UI strings in progress. Australia collateral in review. APAC hiring discussions.",
        events: [
          {
            id: "ap-3-1",
            title: "Localization sprint started",
            detail:
              "Two-week sprint plan locked with NihonLoc covering core product surfaces and help center baseline.",
            timestamp: "Feb 24, 9:00 AM",
            category: "milestone",
            involved: ["Lisa Park", "Ken Yamada", "NihonLoc PM"],
            sources: [
              { type: "sharepoint", label: "LOC-355" },
              { type: "teams", label: "#loc-jp" },
            ],
          },
          {
            id: "ap-3-2",
            title: "Japan UI strings extraction completed",
            detail:
              "Engineering published string freeze branch for JP; keys synced to TMS for translation workflow.",
            timestamp: "Feb 25, 11:00 AM",
            category: "update",
            involved: ["Ken Yamada", "Engineering"],
            sources: [
              { type: "sharepoint", label: "feature/jp-strings" },
              { type: "sharepoint", label: "String handoff" },
            ],
          },
          {
            id: "ap-3-3",
            title: "Australia collateral — stakeholder review",
            detail:
              "Marketing and product reviewed one-pagers and demo script; feedback consolidated for revision.",
            timestamp: "Feb 26, 3:00 PM",
            category: "meeting",
            involved: ["Marcus Webb", "Product marketing", "Lisa Park"],
            sources: [
              { type: "teams", label: "Collateral review" },
              { type: "sharepoint", label: "AU narrative doc" },
            ],
          },
          {
            id: "ap-3-4",
            title: "Local hiring discussions for Sydney AE",
            detail:
              "HR opened rec for Australia enterprise AE; comp bands benchmarked against channel expectations.",
            timestamp: "Feb 26, 4:30 PM",
            category: "update",
            involved: ["Lisa Park", "HR BP", "Hiring manager"],
            sources: [
              { type: "outlook", label: "Rec kickoff" },
              { type: "sharepoint", label: "Job description" },
            ],
          },
          {
            id: "ap-3-5",
            title: "APAC pricing inputs shared with finance",
            detail:
              "Draft AUD list and discount guardrails sent for margin review ahead of Australia launch.",
            timestamp: "Feb 27, 10:00 AM",
            category: "update",
            involved: ["Lisa Park", "Finance – APAC"],
            sources: [
              { type: "sharepoint", label: "Pricing model" },
              { type: "teams", label: "DM finance" },
            ],
          },
        ],
      },
      {
        weekNumber: 2,
        label: "Feb 16 – Feb 20",
        dateRange: "",
        summary:
          "Harbour Digital LOI signed. NihonLoc selected for Japan localization. APAC pricing strategy drafted.",
        events: [
          {
            id: "ap-2-1",
            title: "Australia channel partner LOI signed",
            detail:
              "Non-binding LOI covers referral fees, joint events, and first-right on enterprise introductions in ANZ.",
            timestamp: "Feb 17, 11:00 AM",
            category: "milestone",
            involved: ["Lisa Park", "James Holt", "Legal"],
            sources: [
              { type: "sharepoint", label: "Executed LOI" },
              { type: "outlook", label: "Counterparty confirmation" },
            ],
          },
          {
            id: "ap-2-2",
            title: "NihonLoc selected for Japan localization",
            detail:
              "Vendor scored highest on linguistic quality references and in-market SaaS experience; MSAs initiated.",
            timestamp: "Feb 18, 2:00 PM",
            category: "decision",
            involved: ["Lisa Park", "Procurement", "Ken Yamada"],
            sources: [
              { type: "sharepoint", label: "Vendor scorecard" },
              { type: "outlook", label: "Vendor contacts" },
            ],
          },
          {
            id: "ap-2-3",
            title: "APAC pricing strategy workshop",
            detail:
              "Packaging, FX policy, and discount floors discussed for Japan and Australia with sales leadership.",
            timestamp: "Feb 19, 10:00 AM",
            category: "meeting",
            involved: ["Lisa Park", "Sales strategy", "Finance"],
            sources: [
              { type: "teams", label: "Pricing workshop" },
              { type: "sharepoint", label: "Strategy notes" },
            ],
          },
          {
            id: "ap-2-4",
            title: "Harbour Digital integration checklist",
            detail:
              "Partner ops documented CRM lead routing and MDF process for post-launch co-selling.",
            timestamp: "Feb 20, 9:00 AM",
            category: "update",
            involved: ["Partner ops", "Lisa Park"],
            sources: [
              { type: "sharepoint", label: "Partner onboarding" },
              { type: "teams", label: "#partner-harbour" },
            ],
          },
          {
            id: "ap-2-5",
            title: "Japan GTM narrative — first draft",
            detail:
              "Positioning tailored for compliance-conscious buyers; references competitive landscape review themes.",
            timestamp: "Feb 20, 4:00 PM",
            category: "update",
            involved: ["Yuki Sato", "Product marketing"],
            sources: [
              { type: "sharepoint", label: "JP narrative v0" },
              { type: "sharepoint", label: "Messaging hub" },
            ],
          },
        ],
      },
      {
        weekNumber: 1,
        label: "Feb 9 – Feb 13",
        dateRange: "",
        summary:
          "Board approved APAC market entry and $400K budget. Localization RFP issued. Competitive landscape review.",
        events: [
          {
            id: "ap-1-1",
            title: "Board approved APAC market entry",
            detail:
              "Formal approval to pursue Japan and Australia with phased GTM; success metrics tied to pipeline and localization readiness.",
            timestamp: "Feb 10, 1:00 PM",
            category: "decision",
            involved: ["CEO", "Board", "Lisa Park"],
            sources: [
              { type: "sharepoint", label: "Board deck" },
              { type: "outlook", label: "Board minutes" },
            ],
          },
          {
            id: "ap-1-2",
            title: "$400K budget allocated",
            detail:
              "Budget covers localization, events, partner MDF, and initial hire runway; quarterly burn review scheduled.",
            timestamp: "Feb 10, 3:00 PM",
            category: "milestone",
            involved: ["CFO office", "Lisa Park", "David Okonkwo"],
            sources: [
              { type: "outlook", label: "Budget approval" },
              { type: "sharepoint", label: "FY plan workbook" },
            ],
          },
          {
            id: "ap-1-3",
            title: "Localization vendor RFP sent",
            detail:
              "RFP distributed to shortlisted vendors including NihonLoc; responses due end of month.",
            timestamp: "Feb 11, 10:00 AM",
            category: "update",
            involved: ["Procurement", "Lisa Park", "Ken Yamada"],
            sources: [
              { type: "outlook", label: "RFP distribution" },
              { type: "sharepoint", label: "RFP pack" },
            ],
          },
          {
            id: "ap-1-4",
            title: "Competitive landscape review completed",
            detail:
              "Analysis of top three regional competitors and pricing; implications for differentiation documented.",
            timestamp: "Feb 12, 2:00 PM",
            category: "milestone",
            involved: ["Strategy", "Lisa Park", "Product marketing"],
            sources: [
              { type: "sharepoint", label: "Competitive brief" },
              { type: "sharepoint", label: "Landscape memo" },
            ],
          },
          {
            id: "ap-1-5",
            title: "APAC working group kickoff",
            detail:
              "Cross-functional cadence established: weekly steering, biweekly localization, and partner sync.",
            timestamp: "Feb 13, 9:00 AM",
            category: "meeting",
            involved: ["Lisa Park", "GTM leads", "Engineering"],
            sources: [
              { type: "outlook", label: "APAC WG" },
              { type: "teams", label: "#apac-expansion" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cs-platform-rollout",
    title: "Customer Success Platform Rollout",
    description:
      "Deploying Vitally as the new CS platform to replace spreadsheet-based health scoring.",
    status: "on-track",
    priority: "medium",
    owner: "Rachel Adams",
    currentStateSummary:
      "Pilot complete with 3 CSMs. Full team rollout scheduled for next Monday.",
    createdAt: "2025-02-17",
    weeks: [
      {
        weekNumber: 5,
        label: "Mar 23 – Mar 27",
        dateRange: "Current",
        summary:
          "Full team training scheduled, go-live Monday Mar 30 after final QA, documentation done, leadership signed off.",
        events: [
          {
            id: "cs-5-1",
            title: "Full team training scheduled",
            detail:
              "Two 90-minute live sessions plus async recording; agenda covers health scores, tasks, and Salesforce views.",
            timestamp: "Mar 24, 9:00 AM",
            category: "milestone",
            involved: ["Rachel Adams", "CS Leadership", "All CSMs"],
            sources: [
              {
                type: "outlook",
                label: "Vitally — full team training",
              },
              { type: "sharepoint", label: "Training runbook" },
            ],
          },
          {
            id: "cs-5-2",
            title: "Rollout go-live Monday Mar 30",
            detail:
              "Cutover at 6:00 AM PT; Vitally becomes system of record for health scores and CS tasks post-sync validation.",
            timestamp: "Mar 25, 2:30 PM",
            category: "decision",
            involved: ["Rachel Adams", "IT", "RevOps"],
            sources: [
              { type: "teams", label: "#cs-platform-rollout" },
              { type: "sharepoint", label: "ROL-188 Go-live" },
            ],
          },
          {
            id: "cs-5-3",
            title: "Final QA complete",
            detail:
              "E2E smoke on Salesforce bidirectional sync, score recompute jobs, and digest emails; no open P0/P1 defects.",
            timestamp: "Mar 26, 11:15 AM",
            category: "update",
            involved: ["Rachel Adams", "QA", "Vitally CSM"],
            sources: [
              { type: "sharepoint", label: "ROL-201 QA sign-off" },
              { type: "sharepoint", label: "vitally-connector#44" },
            ],
          },
          {
            id: "cs-5-4",
            title: "Documentation complete",
            detail:
              "Published daily workflow guide, escalation matrix, and data hygiene checklist in the CS wiki.",
            timestamp: "Mar 26, 4:00 PM",
            category: "milestone",
            involved: ["Rachel Adams", "CS Ops"],
            sources: [
              { type: "sharepoint", label: "Vitally CS playbook" },
              { type: "sharepoint", label: "CS FAQ — Vitally" },
            ],
          },
          {
            id: "cs-5-5",
            title: "Leadership review",
            detail:
              "VP CS approved pilot readout and full rollout; requested a 30-day adoption dashboard inside Vitally.",
            timestamp: "Mar 27, 10:00 AM",
            category: "meeting",
            involved: ["Rachel Adams", "VP Customer Success", "CFO"],
            sources: [
              { type: "teams", label: "CS steering" },
              { type: "sharepoint", label: "Pilot metrics deck" },
            ],
          },
        ],
      },
      {
        weekNumber: 4,
        label: "Mar 16 – Mar 20",
        dateRange: "",
        summary:
          "Pilot Day 5 check-in positive; ~2.5 hrs/week saved; Slack alerts and custom dashboard shipped; rollout plan drafted.",
        events: [
          {
            id: "cs-4-1",
            title: "Pilot Day 5 check-in — positive",
            detail:
              "All three pilot CSMs green on core flows; no P0 issues; minor UX nits logged for post-launch polish.",
            timestamp: "Mar 17, 3:00 PM",
            category: "meeting",
            involved: ["Rachel Adams", "Pilot CSMs"],
            sources: [
              { type: "teams", label: "Pilot stand-up" },
              { type: "teams", label: "#vitally-pilot" },
            ],
          },
          {
            id: "cs-4-2",
            title: "~2.5 hours/week saved per CSM",
            detail:
              "Lightweight time study across five days: less manual score maintenance and fewer deck prep cycles for QBRs.",
            timestamp: "Mar 18, 10:30 AM",
            category: "update",
            involved: ["Rachel Adams", "CS Ops"],
            sources: [
              { type: "sharepoint", label: "Pilot time study" },
              { type: "sharepoint", label: "Pilot metrics notes" },
            ],
          },
          {
            id: "cs-4-3",
            title: "Slack alerts requested — scoped",
            detail:
              "CSMs want #risk accounts and stalled tasks routed to team channel; webhook design agreed with RevOps.",
            timestamp: "Mar 18, 2:00 PM",
            category: "decision",
            involved: ["Rachel Adams", "RevOps", "Pilot CSMs"],
            sources: [
              { type: "teams", label: "#vitally-pilot" },
              { type: "sharepoint", label: "ROL-192 Slack alerts" },
            ],
          },
          {
            id: "cs-4-4",
            title: "Custom dashboard built",
            detail:
              "Saved view for at-risk ARR, churn reasons, and CSM workload; shared with leadership read-only group.",
            timestamp: "Mar 19, 11:00 AM",
            category: "milestone",
            involved: ["Rachel Adams", "CS Ops"],
            sources: [
              { type: "sharepoint", label: "Dashboard spec" },
              { type: "outlook", label: "Exec stakeholder list" },
            ],
          },
          {
            id: "cs-4-5",
            title: "Rollout plan drafted",
            detail:
              "Phased enablement, comms timeline, and rollback criteria documented for full-team launch.",
            timestamp: "Mar 20, 4:45 PM",
            category: "update",
            involved: ["Rachel Adams", "CS Leadership"],
            sources: [
              { type: "sharepoint", label: "Rollout plan v1" },
              { type: "sharepoint", label: "Rollout workback" },
            ],
          },
        ],
      },
      {
        weekNumber: 3,
        label: "Mar 9 – Mar 13",
        dateRange: "",
        summary:
          "Pilot live with 3 senior CSMs covering 45 accounts; onboarding and Slack stood up; early sentiment strong.",
        events: [
          {
            id: "cs-3-1",
            title: "Pilot launched — 3 senior CSMs, 45 accounts",
            detail:
              "Production workspaces provisioned; legacy spreadsheet scoring frozen for pilot cohort only.",
            timestamp: "Mar 9, 8:00 AM",
            category: "milestone",
            involved: ["Rachel Adams", "Pilot CSMs", "Vitally CSM"],
            sources: [
              { type: "sharepoint", label: "ROL-160 Pilot launch" },
              { type: "outlook", label: "Pilot kickoff — CSMs" },
            ],
          },
          {
            id: "cs-3-2",
            title: "Onboarding sessions held",
            detail:
              "Hands-on labs for accounts, tasks, and Salesforce panels; office hours block Wednesday afternoon.",
            timestamp: "Mar 10, 1:00 PM",
            category: "meeting",
            involved: ["Rachel Adams", "Pilot CSMs"],
            sources: [
              { type: "teams", label: "Vitally onboarding lab" },
              { type: "outlook", label: "Pilot office hours" },
            ],
          },
          {
            id: "cs-3-3",
            title: "Slack channel created for pilot",
            detail:
              "#vitally-pilot for questions, screenshots, and bug reports; Vitally CSM invited as single-thread owner.",
            timestamp: "Mar 11, 9:30 AM",
            category: "update",
            involved: ["Rachel Adams", "Pilot CSMs"],
            sources: [{ type: "teams", label: "#vitally-pilot" }],
          },
          {
            id: "cs-3-4",
            title: "Early feedback — positive",
            detail:
              "Praise for unified timeline; requests for bulk tagging and faster score refresh called out as follow-ups.",
            timestamp: "Mar 12, 3:15 PM",
            category: "update",
            involved: ["Rachel Adams", "Pilot CSMs"],
            sources: [
              { type: "teams", label: "#vitally-pilot" },
              { type: "sharepoint", label: "Pilot feedback log" },
            ],
          },
          {
            id: "cs-3-5",
            title: "Pilot guardrails confirmed",
            detail:
              "Agreed no net-new automations until Day 5 review; support model and escalation path documented.",
            timestamp: "Mar 13, 11:00 AM",
            category: "decision",
            involved: ["Rachel Adams", "CS Leadership"],
            sources: [
              { type: "teams", label: "Pilot governance" },
              { type: "sharepoint", label: "Pilot RACI" },
            ],
          },
        ],
      },
      {
        weekNumber: 2,
        label: "Mar 2 – Mar 6",
        dateRange: "",
        summary:
          "Salesforce integration done; historical data backfilled; health score v1 configured; training materials drafted.",
        events: [
          {
            id: "cs-2-1",
            title: "Salesforce integration completed",
            detail:
              "Accounts, contacts, opportunities, and CS fields mapping verified in staging and promoted to prod.",
            timestamp: "Mar 2, 5:00 PM",
            category: "milestone",
            involved: ["Rachel Adams", "RevOps", "IT"],
            sources: [
              { type: "sharepoint", label: "salesforce-vitally-sync#31" },
              { type: "sharepoint", label: "ROL-140 SFDC integration" },
            ],
          },
          {
            id: "cs-2-2",
            title: "Historical data backfilled",
            detail:
              "24 months of usage, support, and renewal signals loaded; reconciliation report shared with Finance.",
            timestamp: "Mar 3, 2:00 PM",
            category: "update",
            involved: ["Rachel Adams", "Data Eng", "Finance"],
            sources: [
              { type: "sharepoint", label: "Backfill reconciliation" },
              { type: "teams", label: "#cs-platform-rollout" },
            ],
          },
          {
            id: "cs-2-3",
            title: "Health score model v1 configured",
            detail:
              "Weighted signals for adoption, support load, and expansion potential; thresholds aligned with CS leadership rubric.",
            timestamp: "Mar 4, 11:30 AM",
            category: "decision",
            involved: ["Rachel Adams", "CS Leadership", "RevOps"],
            sources: [
              { type: "sharepoint", label: "Score model v1" },
              { type: "teams", label: "Scoring workshop" },
            ],
          },
          {
            id: "cs-2-4",
            title: "Training materials drafted",
            detail:
              "Slide deck, demo script, and exercise workbook prepared for pilot CSM enablement.",
            timestamp: "Mar 5, 4:00 PM",
            category: "milestone",
            involved: ["Rachel Adams", "CS Ops"],
            sources: [
              { type: "sharepoint", label: "Enablement deck + workbook" },
              { type: "sharepoint", label: "Demo script" },
            ],
          },
          {
            id: "cs-2-5",
            title: "Dry run with CS Ops",
            detail:
              "Walkthrough surfaced two clarifications on task ownership; updates folded into pilot kickoff agenda.",
            timestamp: "Mar 6, 10:00 AM",
            category: "meeting",
            involved: ["Rachel Adams", "CS Ops"],
            sources: [
              { type: "teams", label: "CS Ops dry run" },
              { type: "outlook", label: "Invite: pilot prep" },
            ],
          },
        ],
      },
      {
        weekNumber: 1,
        label: "Feb 23 – Feb 27",
        dateRange: "",
        summary:
          "Vitally contract signed; Salesforce integration scoped; onboarding kickoff; data mapping; team announcement.",
        events: [
          {
            id: "cs-1-1",
            title: "Vitally contract signed — $36K/yr",
            detail:
              "Annual order form executed; procurement filed countersigned PDF in the vendor folder.",
            timestamp: "Feb 24, 11:00 AM",
            category: "milestone",
            involved: ["Rachel Adams", "Finance", "Legal"],
            sources: [
              { type: "sharepoint", label: "Executed order form" },
              { type: "outlook", label: "Legal — countersign" },
            ],
          },
          {
            id: "cs-1-2",
            title: "Salesforce integration scoped",
            detail:
              "Field map v0 and sync direction agreed; IT flagged API limits and sandbox promotion path.",
            timestamp: "Feb 25, 2:00 PM",
            category: "decision",
            involved: ["Rachel Adams", "RevOps", "IT"],
            sources: [
              { type: "sharepoint", label: "ROL-120 SFDC scope" },
              { type: "teams", label: "Integration scoping" },
            ],
          },
          {
            id: "cs-1-3",
            title: "Onboarding kickoff",
            detail:
              "Introduced Vitally CSM, success criteria, and weekly cadence through pilot launch.",
            timestamp: "Feb 25, 4:30 PM",
            category: "meeting",
            involved: ["Rachel Adams", "Vitally CSM", "CS Leadership"],
            sources: [
              { type: "teams", label: "Vendor kickoff" },
              { type: "outlook", label: "Vitally onboarding series" },
            ],
          },
          {
            id: "cs-1-4",
            title: "Data mapping session",
            detail:
              "Aligned account hierarchy, renewal dates, and product usage feeds required for health scoring.",
            timestamp: "Feb 26, 10:00 AM",
            category: "meeting",
            involved: ["Rachel Adams", "Data Eng", "RevOps"],
            sources: [
              {
                type: "teams",
                label: "Data mapping working session",
              },
              { type: "sharepoint", label: "Field mapping notes" },
            ],
          },
          {
            id: "cs-1-5",
            title: "Team announcement",
            detail:
              "All-hands CS email and Slack post outlining timeline, pilot cohort, and how to submit questions.",
            timestamp: "Feb 27, 9:00 AM",
            category: "update",
            involved: ["Rachel Adams", "CS Leadership"],
            sources: [
              { type: "teams", label: "#customer-success" },
              { type: "outlook", label: "CS all — Vitally rollout" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "series-c-prep",
    title: "Series C Fundraise Preparation",
    description:
      "Preparing financial models, data room, and investor materials for Series C raise.",
    status: "completed",
    priority: "critical",
    owner: "Tracy Kim",
    currentStateSummary:
      "Data room finalized and shared with 6 target investors. First partner meetings scheduled.",
    createdAt: "2025-01-13",
    weeks: [
      {
        weekNumber: 5,
        label: "Mar 23 – Mar 27",
        dateRange: "Current",
        summary:
          "Partner meetings with a16z and Sequoia landed well; Tiger and Coatue next week; early term sheet chatter.",
        events: [
          {
            id: "sc-5-1",
            title: "Partner meeting — a16z",
            detail:
              "Session focused on growth efficiency and NRR expansion; partners requested follow-up cohort data.",
            timestamp: "Mar 24, 10:00 AM",
            category: "meeting",
            involved: ["Tracy Kim", "CEO", "a16z partners"],
            sources: [
              { type: "teams", label: "a16z partner meeting" },
              { type: "outlook", label: "Fundraising — a16z" },
            ],
          },
          {
            id: "sc-5-2",
            title: "Partner meeting — Sequoia",
            detail:
              "Deep dive on competitive moat and infra leverage; positive tone on category and execution.",
            timestamp: "Mar 25, 2:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "CEO", "Sequoia partners"],
            sources: [
              { type: "teams", label: "Sequoia partner meeting" },
              { type: "sharepoint", label: "Meeting notes — Sequoia" },
            ],
          },
          {
            id: "sc-5-3",
            title: "Positive reception from both firms",
            detail:
              "Feedback via bankers: proceed to deeper diligence workstreams and customer reference calls.",
            timestamp: "Mar 25, 6:30 PM",
            category: "update",
            involved: ["Tracy Kim", "CEO", "Qatalyst"],
            sources: [
              { type: "outlook", label: "Qatalyst — debrief" },
              { type: "teams", label: "#fundraising-core" },
            ],
          },
          {
            id: "sc-5-4",
            title: "Tiger Global and Coatue — meetings next week",
            detail:
              "Calendars proposed for partner sessions; materials package to be tailored per firm thesis questions.",
            timestamp: "Mar 26, 11:00 AM",
            category: "milestone",
            involved: ["Tracy Kim", "Qatalyst"],
            sources: [
              { type: "outlook", label: "Proposed slots — Tiger / Coatue" },
              { type: "sharepoint", label: "FUN-88 Investor calendar" },
            ],
          },
          {
            id: "sc-5-5",
            title: "Term sheet discussions beginning",
            detail:
              "Banker signaled exploratory structure conversations; legal on standby for quick turnaround if invited.",
            timestamp: "Mar 27, 4:00 PM",
            category: "decision",
            involved: ["Tracy Kim", "CEO", "Legal"],
            sources: [
              { type: "teams", label: "Founder + banker sync" },
              { type: "sharepoint", label: "Term sheet prep memo" },
            ],
          },
        ],
      },
      {
        weekNumber: 4,
        label: "Mar 16 – Mar 20",
        dateRange: "",
        summary:
          "Data room opened to six Tier-1 investors; strong interest; a16z and Sequoia booked demos; prep underway.",
        events: [
          {
            id: "sc-4-1",
            title: "Data room shared with 6 Tier-1 investors",
            detail:
              "DocSend links issued with viewer analytics on; CFO notified on download patterns.",
            timestamp: "Mar 16, 9:00 AM",
            category: "milestone",
            involved: ["Tracy Kim", "Qatalyst", "Legal"],
            sources: [
              { type: "outlook", label: "DocSend — Tier-1 access" },
              { type: "sharepoint", label: "Access control checklist" },
            ],
          },
          {
            id: "sc-4-2",
            title: "All six confirmed interest",
            detail:
              "Inbound from each firm within 48 hours; no immediate red flags on materials or metrics.",
            timestamp: "Mar 17, 5:00 PM",
            category: "update",
            involved: ["Tracy Kim", "CEO", "Qatalyst"],
            sources: [
              { type: "teams", label: "#fundraising-core" },
              { type: "outlook", label: "Qatalyst — investor replies" },
            ],
          },
          {
            id: "sc-4-3",
            title: "a16z and Sequoia requested product demos",
            detail:
              "Scoped 45-minute deep dives with CTO and Head of Product; security review packet attached.",
            timestamp: "Mar 18, 1:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "CTO", "CPO"],
            sources: [
              { type: "sharepoint", label: "FUN-72 Demo prep" },
              { type: "sharepoint", label: "Demo storyline" },
            ],
          },
          {
            id: "sc-4-4",
            title: "Prep sessions started",
            detail:
              "Mock Q&A on cohort retention, S&M efficiency, and cap table; assigned owners for follow-up data pulls.",
            timestamp: "Mar 19, 3:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "CEO", "Finance"],
            sources: [
              { type: "teams", label: "Diligence prep war room" },
              { type: "sharepoint", label: "Q&A master list" },
            ],
          },
          {
            id: "sc-4-5",
            title: "Customer reference list finalized",
            detail:
              "Eight accounts approved with talking points; scheduling handled through affinity for warm intros.",
            timestamp: "Mar 20, 11:30 AM",
            category: "milestone",
            involved: ["Tracy Kim", "CS Leadership"],
            sources: [
              { type: "outlook", label: "Reference targets" },
              { type: "outlook", label: "References — approved list" },
            ],
          },
        ],
      },
      {
        weekNumber: 3,
        label: "Mar 9 – Mar 13",
        dateRange: "",
        summary:
          "Data room built on DocSend (47 docs); deck v2 shipped; legal review done; access controls configured.",
        events: [
          {
            id: "sc-3-1",
            title: "Data room built on DocSend — 47 documents",
            detail:
              "Indexed financials, cap table, contracts, and security artifacts; version naming convention enforced.",
            timestamp: "Mar 9, 4:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "Finance", "Legal"],
            sources: [
              { type: "sharepoint", label: "Doc room source files" },
              { type: "sharepoint", label: "Data room index" },
            ],
          },
          {
            id: "sc-3-2",
            title: "Deck v2 finalized",
            detail:
              "Tightened TAM slide, added cohort charts, and aligned footnotes with audited numbers.",
            timestamp: "Mar 10, 6:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "CEO", "Qatalyst"],
            sources: [
              { type: "sharepoint", label: "Series C deck v2" },
              { type: "outlook", label: "Qatalyst — deck comments" },
            ],
          },
          {
            id: "sc-3-3",
            title: "Legal review completed",
            detail:
              "Outside counsel signed off on forward-looking language and risk factors in investor materials.",
            timestamp: "Mar 11, 2:00 PM",
            category: "update",
            involved: ["Tracy Kim", "Legal"],
            sources: [
              { type: "outlook", label: "Counsel — deck & room review" },
              { type: "sharepoint", label: "Legal redlines" },
            ],
          },
          {
            id: "sc-3-4",
            title: "Access controls configured",
            detail:
              "Per-firm watermarks, expiry rules, and download permissions set; audit trail enabled in DocSend.",
            timestamp: "Mar 12, 10:00 AM",
            category: "decision",
            involved: ["Tracy Kim", "IT", "Legal"],
            sources: [
              { type: "sharepoint", label: "FUN-61 DocSend ACLs" },
              { type: "teams", label: "#fundraising-ops" },
            ],
          },
          {
            id: "sc-3-5",
            title: "NDA packet standardized",
            detail:
              "Mutual NDA template approved; routing tracked in legal inbox.",
            timestamp: "Mar 13, 3:45 PM",
            category: "milestone",
            involved: ["Tracy Kim", "Legal"],
            sources: [
              { type: "sharepoint", label: "Mutual NDA v3" },
              { type: "outlook", label: "Legal — NDA approvals" },
            ],
          },
        ],
      },
      {
        weekNumber: 2,
        label: "Mar 2 – Mar 6",
        dateRange: "",
        summary:
          "Deck v1 reviewed with moat feedback; 12-firm target list locked; Tier-1 outreach started; references gathered.",
        events: [
          {
            id: "sc-2-1",
            title: "Deck v1 reviewed — competitive moat feedback",
            detail:
              "Bankers asked for sharper differentiation narrative and clearer defensibility vs. incumbents.",
            timestamp: "Mar 2, 11:00 AM",
            category: "meeting",
            involved: ["Tracy Kim", "CEO", "Qatalyst"],
            sources: [
              { type: "teams", label: "Deck review — Qatalyst" },
              { type: "sharepoint", label: "Feedback log v1" },
            ],
          },
          {
            id: "sc-2-2",
            title: "Target investor list finalized — 12 firms",
            detail:
              "Tiering agreed (6 Tier-1, 6 Tier-2); geographic and check-size fit validated with board.",
            timestamp: "Mar 3, 4:00 PM",
            category: "decision",
            involved: ["Tracy Kim", "CEO", "Board"],
            sources: [
              { type: "outlook", label: "Series C target list" },
              { type: "sharepoint", label: "Firm thesis notes" },
            ],
          },
          {
            id: "sc-2-3",
            title: "Tier-1 outreach began",
            detail:
              "Qatalyst initiated conversations; teaser and metrics snapshot shared under confidentiality.",
            timestamp: "Mar 4, 9:00 AM",
            category: "update",
            involved: ["Tracy Kim", "Qatalyst"],
            sources: [
              { type: "outlook", label: "Qatalyst — outreach status" },
              { type: "teams", label: "#fundraising-core" },
            ],
          },
          {
            id: "sc-2-4",
            title: "Customer references gathered",
            detail:
              "Identified logos across enterprise and mid-market; drafted blurb for bankers to use in intros.",
            timestamp: "Mar 5, 2:30 PM",
            category: "milestone",
            involved: ["Tracy Kim", "CS Leadership"],
            sources: [
              { type: "sharepoint", label: "Reference one-pagers" },
              { type: "sharepoint", label: "FUN-54 Reference pipeline" },
            ],
          },
          {
            id: "sc-2-5",
            title: "Board sync on narrative",
            detail:
              "Aligned on headline growth story and what to defer to data room vs. live conversations.",
            timestamp: "Mar 6, 5:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "CEO", "Board"],
            sources: [
              { type: "teams", label: "Board fundraising update" },
              { type: "sharepoint", label: "Board deck — Mar" },
            ],
          },
        ],
      },
      {
        weekNumber: 1,
        label: "Feb 23 – Feb 27",
        dateRange: "",
        summary:
          "Model refresh kicked off; Qatalyst engaged; investor deck v1 drafted; target list debate; board advisor consulted.",
        events: [
          {
            id: "sc-1-1",
            title: "Financial model refresh started",
            detail:
              "Finance rebuilt three-year outlook with scenario toggles for growth and burn sensitivity.",
            timestamp: "Feb 23, 10:00 AM",
            category: "update",
            involved: ["Tracy Kim", "Finance"],
            sources: [
              { type: "sharepoint", label: "Model workbook — Series C" },
              { type: "teams", label: "#finance-forecasting" },
            ],
          },
          {
            id: "sc-1-2",
            title: "Banker engaged — Qatalyst",
            detail:
              "Signed engagement letter; kickoff scheduled; requested materials list circulated to exec team.",
            timestamp: "Feb 24, 1:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "CEO", "Qatalyst"],
            sources: [
              { type: "outlook", label: "Qatalyst — engagement letter" },
              { type: "outlook", label: "Banker kickoff" },
            ],
          },
          {
            id: "sc-1-3",
            title: "Investor deck v1 drafted",
            detail:
              "Initial storyline: category, traction, unit economics, and use of proceeds; design pass pending.",
            timestamp: "Feb 25, 7:00 PM",
            category: "milestone",
            involved: ["Tracy Kim", "CEO", "Marketing"],
            sources: [
              { type: "sharepoint", label: "Series C deck v1" },
              { type: "sharepoint", label: "Narrative outline" },
            ],
          },
          {
            id: "sc-1-4",
            title: "Target list discussion",
            detail:
              "Debated strategic vs. financial investors and mutual fund presence; agreed to shortlist before outreach.",
            timestamp: "Feb 26, 3:00 PM",
            category: "meeting",
            involved: ["Tracy Kim", "CEO", "Board"],
            sources: [
              { type: "teams", label: "Target list working session" },
              { type: "outlook", label: "Long list brainstorm" },
            ],
          },
          {
            id: "sc-1-5",
            title: "Board advisor consulted",
            detail:
              "Former SaaS CFO reviewed model assumptions and suggested additional cohort cuts for diligence.",
            timestamp: "Feb 27, 11:00 AM",
            category: "meeting",
            involved: ["Tracy Kim", "Board advisor", "Finance"],
            sources: [
              { type: "outlook", label: "Advisor — model feedback" },
              { type: "sharepoint", label: "Advisor Q&A" },
            ],
          },
        ],
      },
    ],
  },
];
