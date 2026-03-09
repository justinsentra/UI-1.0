export type SourceType =
  | "slack"
  | "linear"
  | "github"
  | "zoom"
  | "google-docs"
  | "google-meet"
  | "google-calendar"
  | "google-drive"
  | "notion"
  | "asana"
  | "discord"
  | "outlook"
  | "email";

export interface SourceRef {
  type: SourceType;
  label: string;
}

export interface ResponseParagraph {
  id: string;
  content: string;
  sources: SourceRef[];
}

export interface ScanStep {
  label: string;
  duration: number;
}

export interface MockResponse {
  scanSteps: ScanStep[];
  paragraphs: ResponseParagraph[];
}

export interface SessionHistoryItem {
  id: string;
  title: string;
  date: string;
}

export const SESSION_HISTORY: SessionHistoryItem[] = [
  { id: "s-1", title: "Pipeline overview Q1 2026", date: "Today" },
  { id: "s-2", title: "Customer call themes this week", date: "Today" },
  { id: "s-3", title: "Engineering blockers summary", date: "Yesterday" },
  { id: "s-4", title: "SXSW launch readiness check", date: "Yesterday" },
  { id: "s-5", title: "SOC 2 deal impact analysis", date: "Mar 3" },
  { id: "s-6", title: "Onboarding flow conversion audit", date: "Mar 3" },
  { id: "s-7", title: "Mobile app beta feedback", date: "Mar 2" },
  { id: "s-8", title: "Weekly all-hands recap", date: "Mar 1" },
  { id: "s-9", title: "Competitor pricing research", date: "Feb 28" },
  { id: "s-10", title: "Design partner NPS review", date: "Feb 27" },
];

export const SUGGESTIONS = [
  "What happened in today's meetings?",
  "Summarize this week's progress",
  "What are the team's blockers?",
  "Draft a PRD",
];

export const MOCK_RESPONSES: MockResponse[] = [
  {
    scanSteps: [
      {
        label: "Parsing 8 meeting transcripts from Google Meet...",
        duration: 3200,
      },
      {
        label: "Reading 5 Slack threads and 3 Notion pages...",
        duration: 3400,
      },
      {
        label: "Scanning CRM pipeline and Google Calendar events...",
        duration: 3400,
      },
    ],
    paragraphs: [
      {
        id: "p0-0",
        content: `**Pipeline Overview (Q1 2026)**\n\nTotal pipeline value is **$4.2M**, up 18% vs last quarter. There are 12 deals currently in negotiation with an average deal size of **$87K**. The weighted pipeline sits at $2.1M based on current stage probabilities.\n\nNew pipeline generation this week was strong with 4 new opportunities sourced — 2 from inbound (website demo requests), 1 from a partner referral via Campfire, and 1 from the LinkedIn campaign that launched last Monday. The partner-sourced deal (Meridian Corp) came in at $120K ARR, making it the largest single opportunity added this quarter.\n\nStage movement: 3 deals advanced from Discovery to Evaluation, and the Atlas Group deal moved to Contract Sent. Average days-in-stage for Evaluation dropped from 18 to 14 days, suggesting the new demo playbook is improving conversion velocity.`,
        sources: [
          { type: "google-meet", label: "GTM Strategy Sync" },
          { type: "slack", label: "#sales-pipeline" },
          { type: "google-calendar", label: "Pipeline Review Meeting" },
          { type: "notion", label: "Q1 Deal Tracker" },
        ],
      },
      {
        id: "p0-1",
        content: `**Top Insights**\n\nEnterprise segment grew 23% — driven by 3 new logos from the Q2 launch campaign. The largest new logo, Meridian Corp, was sourced through the Campfire partner referral and is evaluating a $120K ARR package with custom SLA requirements.\n\nSMB conversion rate dropped 4pts, likely tied to pricing feedback surfaced in 3 separate discovery calls this week. Customers are comparing against competitors offering usage-based pricing. Highest win rate remains in the Financial Services vertical at 64%, with Healthcare close behind at 58%.\n\nNotably, deals sourced from content marketing (blog + webinar) have a 40% higher close rate than cold outbound, though volume is 3x lower. Recommend increasing content investment for Q2 to capitalize on this signal.`,
        sources: [
          { type: "google-meet", label: "Al <> Justin 1:1" },
          { type: "slack", label: "#enterprise-deals" },
          { type: "outlook", label: "Q4 Pipeline Report" },
          { type: "google-drive", label: "Q1 Revenue Analysis" },
        ],
      },
    ],
  },
  {
    scanSteps: [
      {
        label: "Reviewing 7 call transcripts from Zoom and Google Meet...",
        duration: 3500,
      },
      {
        label: "Reading 3 Slack channels and 2 Notion docs...",
        duration: 3500,
      },
      { label: "Checking 2 follow-up emails in Outlook...", duration: 3000 },
    ],
    paragraphs: [
      {
        id: "p1-0",
        content: `**Common Themes (7 calls reviewed)**\n\n5 of 7 customers mentioned integration complexity as a top concern — specifically around webhook reliability and API rate limits. The new reporting dashboard received positive sentiment in 4 calls, with users highlighting the real-time data refresh and customizable views.\n\n3 enterprise prospects explicitly asked about SSO/SAML support timeline, making it the most-requested security feature. Two of these prospects (Vantage and Relay) have deal values exceeding $90K and have indicated SSO is a hard requirement for procurement approval.\n\nInterestingly, 4 of 7 customers mentioned they discovered Sentra through word-of-mouth or peer recommendations, suggesting strong organic growth potential. Two customers specifically mentioned seeing the product demoed at a peer's company and wanting to evaluate it for their own team.`,
        sources: [
          { type: "google-meet", label: "Vantage Discovery Call" },
          { type: "zoom", label: "Nexus Demo" },
          { type: "slack", label: "#customer-feedback" },
          { type: "notion", label: "Customer Interview Notes" },
        ],
      },
      {
        id: "p1-1",
        content: `**Notable Calls**\n\n**Vantage (Casey Morgan)** — Strong interest in the API tier; asked for custom SLA with 99.95% uptime guarantee. Their team of 45 needs admin controls and audit logging. Casey wants a follow-up demo with their CTO next Tuesday.\n\n**Nexus** — Evaluating against Gong and Fireflies; price-sensitive but impressed by the depth of meeting intelligence. They're running a 2-week trial with 8 team members. Decision expected by March 15.\n\n**Flux Labs** — Ready to expand from 12 to 50 seats if mobile app ships by Q2. Their distributed team relies heavily on async communication and needs mobile access for meeting summaries on the go. Budget already approved internally.`,
        sources: [
          { type: "zoom", label: "Vantage Follow-up" },
          { type: "google-meet", label: "Flux Labs Check-in" },
          { type: "outlook", label: "Nexus Pricing Thread" },
          { type: "linear", label: "MOBILE-34: Mobile app roadmap" },
        ],
      },
    ],
  },
  {
    scanSteps: [
      {
        label: "Parsing 5 standup transcripts from Google Meet...",
        duration: 3200,
      },
      {
        label: "Scanning 8 Linear tickets and 4 GitHub PRs...",
        duration: 3400,
      },
      { label: "Reading 4 Slack threads and Asana board...", duration: 3400 },
    ],
    paragraphs: [
      {
        id: "p2-0",
        content: `**Engineering Blockers**\n\nAuth service refactor (AUTH-142) is blocking 3 downstream features: SSO support, team permissions, and audit logging. Jordan estimates 4 more days of work, but the scope expanded after discovering legacy session handling that needs migration. Mobile push notification reliability was reported in 2 customer calls this week — the root cause is a race condition in the notification queue.\n\nThe database migration for the new analytics schema is 80% complete but hit an issue with backward compatibility on the reporting API. Andrey proposed a dual-write strategy to avoid downtime, adding approximately 2 days to the timeline.\n\nOn the positive side, the CI/CD pipeline improvements shipped this week, reducing build times from 12 minutes to 4 minutes. This is already improving developer velocity across the team.`,
        sources: [
          { type: "linear", label: "AUTH-142: Refactor auth service" },
          { type: "slack", label: "#engineering" },
          { type: "github", label: "PR #387: Push notification fix" },
          { type: "asana", label: "Sprint 14 Board" },
        ],
      },
      {
        id: "p2-1",
        content: `**Sales & Product Blockers**\n\nLack of SOC 2 Type II certification is blocking 4 enterprise deals worth a combined $380K ARR. The audit is scheduled to begin March 10 with completion targeted for end of April. In the meantime, Ashwin is drafting a security whitepaper that may help unblock 2 of the 4 deals.\n\nNo self-serve onboarding flow is slowing SMB pipeline velocity — current median time-to-first-value is 6 days, and the target is under 24 hours. The new onboarding wizard designs are in Notion and need engineering sign-off by Friday.\n\nFigma designs for the v2 dashboard are still in review (due: this Friday). The design team flagged that the data visualization components need accessibility improvements before handoff to engineering.`,
        sources: [
          { type: "google-meet", label: "GTM Strategy Call" },
          { type: "slack", label: "#product" },
          { type: "linear", label: "PROD-89: Self-serve onboarding" },
          { type: "notion", label: "Onboarding Wizard Spec" },
        ],
      },
    ],
  },
  {
    scanSteps: [
      {
        label: "Searching 12 meeting notes across Google Meet and Zoom...",
        duration: 3500,
      },
      {
        label: "Reading 6 Slack channels and Google Drive docs...",
        duration: 3300,
      },
      {
        label: "Scanning recent commits and Linear updates...",
        duration: 3200,
      },
    ],
    paragraphs: [
      {
        id: "p3-0",
        content: `**Recent Updates**\n\nThe new analytics dashboard shipped on Monday and is seeing strong adoption — 78% of active users accessed it in the first 48 hours. Early feedback highlights the real-time data refresh as the standout feature, with 3 customers already asking about API access to the analytics data.\n\nMobile app beta went out to 25 testers on Wednesday. Initial feedback is overwhelmingly positive — testers rated the meeting summary experience 4.6/5 and the push notification reliability 4.2/5. The main request is offline access for meeting transcripts, which is already on the Q2 roadmap.\n\nThe SXSW launch prep is 85% complete. Press kit is finalized, demo booth is confirmed at SXSW Create, and the pre-launch teaser campaign is scheduled for March 10. 12 publications and 4 podcast contacts have been briefed.`,
        sources: [
          { type: "slack", label: "#launches" },
          { type: "github", label: "v2.4.0 Release" },
          { type: "google-meet", label: "Weekly All-Hands" },
          { type: "google-drive", label: "SXSW Press Kit" },
        ],
      },
      {
        id: "p3-1",
        content: `**Team Highlights**\n\nDesign team completed the onboarding redesign ahead of schedule — the new flow reduces steps from 8 to 4 and includes interactive tooltips. User testing showed a 35% improvement in completion rate compared to the current flow.\n\nBackend team resolved the N+1 query issue (PERF-201) that was causing 3-second page loads on the dashboard — now under 200ms. This fix also reduced database CPU utilization by 40%, which should delay the need for a database upgrade by several months.\n\nTwo new enterprise customers signed this week: Meridian Corp ($120K ARR, 45 seats) and Atlas Group ($85K ARR, 30 seats). Both cited meeting intelligence depth and the organizational memory features as key differentiators against competitors.`,
        sources: [
          { type: "linear", label: "PERF-201: N+1 query fix" },
          { type: "slack", label: "#wins" },
          { type: "outlook", label: "Atlas Group Contract" },
          { type: "google-calendar", label: "Onboarding Kickoffs" },
        ],
      },
    ],
  },
];

export const getMockResponse = (index: number): MockResponse =>
  MOCK_RESPONSES[index % MOCK_RESPONSES.length];

/* ── PRD Flow Data ── */

export interface PrdScanStep {
  label: string;
  duration: number;
}

export const PRD_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Searching 6 recent engineering meeting transcripts...",
    duration: 3000,
  },
  {
    label: "Reading 12 Linear tickets from Sprint 14 and backlog...",
    duration: 3500,
  },
  {
    label: "Scanning 8 GitHub PRs and 3 architecture discussions...",
    duration: 4000,
  },
  {
    label: "Analyzing Notion engineering specs and decision logs...",
    duration: 3500,
  },
];

export const PRD_CONTENT = `# Product Requirements Document: Auth Service Refactor & SSO Support

## Overview

Based on discussions from the Engineering Sprint Retro (Mar 3), Andrey/Justin 1:1 (Mar 1), and 12 related Linear tickets, this PRD outlines the requirements for refactoring the authentication service to support enterprise SSO, team permissions, and audit logging.

## Problem Statement

The current auth service uses a legacy session handling mechanism that cannot support multi-tenant SSO flows. This is blocking 4 enterprise deals worth a combined $380K ARR (Vantage, Relay, Atlas Group, Meridian Corp). The auth refactor (AUTH-142) has been identified as the critical path item, with 3 downstream features dependent on its completion.

## Goals

1. **SSO/SAML Support** — Enable enterprise customers to authenticate via their identity provider (Okta, Azure AD, Google Workspace)
2. **Team Permissions** — Role-based access control with admin, member, and viewer roles
3. **Audit Logging** — Immutable log of all auth events for SOC 2 compliance
4. **Session Migration** — Zero-downtime migration from legacy sessions to new JWT-based flow

## Non-Goals

- Social login (Google, GitHub) — already supported, no changes needed
- Custom RBAC beyond 3 predefined roles — deferred to Q3
- Multi-factor authentication — separate workstream (AUTH-156)

## Technical Approach

**Phase 1: Session Migration (Week 1-2)**
Dual-write strategy proposed by Andrey to avoid downtime. New JWT tokens issued alongside legacy sessions. Gradual rollover with feature flag.

**Phase 2: SSO Integration (Week 2-3)**
SAML 2.0 integration via WorkOS SDK. Support for Okta, Azure AD, and Google Workspace as initial identity providers. Tenant-level configuration stored in new \`sso_configs\` table.

**Phase 3: Permissions & Audit (Week 3-4)**
RBAC middleware layer with role inheritance. Audit log writes to append-only \`auth_events\` table with 90-day retention.

## Dependencies

- AUTH-142: Refactor auth service (in progress, Jordan — 4 days remaining)
- INFRA-88: Database migration for analytics schema (80% complete)
- PR #387: Push notification fix (merged)
- SOC 2 audit scheduled March 10

## Success Metrics

- SSO setup time < 15 minutes for IT admin
- Auth latency p99 < 200ms (current: 180ms)
- Zero downtime during session migration
- 4 enterprise deals unblocked within 2 weeks of launch

## Timeline

| Phase | Duration | Owner |
|-------|----------|-------|
| Session Migration | 2 weeks | Andrey |
| SSO Integration | 1.5 weeks | Jordan |
| Permissions & Audit | 1.5 weeks | Andrey + Jordan |
| QA & Rollout | 1 week | Full team |

**Target completion: April 11, 2026**

---

*Sources: Engineering Sprint Retro, Andrey/Justin 1:1, LINEAR AUTH-142, LINEAR PROD-89, GitHub PR #387, #engineering Slack, Notion Engineering Specs*`;

export const PRD_BUILD_STEPS: PrdScanStep[] = [
  {
    label: "Initializing project workspace...",
    duration: 2500,
  },
  {
    label: "Generating document structure from template...",
    duration: 3000,
  },
  {
    label: "Populating sections with context from 14 sources...",
    duration: 3500,
  },
  {
    label: "Formatting tables, dependencies, and timeline...",
    duration: 3000,
  },
  {
    label: "Writing file and verifying output...",
    duration: 3000,
  },
];
