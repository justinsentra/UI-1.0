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
  | "email"
  | "affinity"
  | "teams"
  | "sharepoint";

export interface SourceRef {
  type: SourceType;
  label: string;
}

export interface ParagraphChartDataKey {
  key: string;
  label: string;
  color: string;
}

export interface ParagraphChart {
  type: "bar" | "line" | "area";
  title?: string;
  data: Record<string, string | number>[];
  dataKeys: ParagraphChartDataKey[];
  xAxisKey: string;
}

export interface ResponseParagraph {
  id: string;
  content: string;
  sources: SourceRef[];
  chart?: ParagraphChart;
}

export interface ScanStep {
  label: string;
  duration: number;
}

export type SuggestionRoute =
  | { type: "vendor-eval" }
  | { type: "document-flow"; flowId: string }
  | { type: "generic"; index?: number };

export interface SuggestionItem {
  label: string;
  route: SuggestionRoute;
}

export interface MockResponse {
  scanSteps: ScanStep[];
  paragraphs: ResponseParagraph[];
}

export interface SessionHistoryItem {
  id: string;
  title: string;
  date: string;
  query: string;
}

export const SESSION_HISTORY: Record<string, SessionHistoryItem[]> = {
  "engineering-manager": [
    { id: "s-1", title: "Pipeline overview Q1 2026", date: "Today", query: "Give me an overview of the pipeline for Q1 2026" },
    { id: "s-2", title: "Customer call themes this week", date: "Today", query: "What are the key themes from customer calls this week?" },
    { id: "s-3", title: "Engineering blockers summary", date: "Yesterday", query: "Summarize the current engineering blockers" },
    { id: "s-4", title: "TechConnect launch readiness check", date: "Yesterday", query: "How ready are we for the TechConnect launch?" },
    { id: "s-5", title: "SOC 2 deal impact analysis", date: "Mar 3", query: "What's the impact of SOC 2 compliance on our deals?" },
    { id: "s-6", title: "Onboarding flow conversion audit", date: "Mar 3", query: "Audit the onboarding flow conversion rates" },
    { id: "s-7", title: "Mobile app beta feedback", date: "Mar 2", query: "Summarize the mobile app beta feedback" },
    { id: "s-8", title: "Weekly all-hands recap", date: "Mar 1", query: "What happened in the weekly all-hands?" },
    { id: "s-9", title: "Competitor pricing research", date: "Feb 28", query: "Research competitor pricing strategies" },
    { id: "s-10", title: "Design partner NPS review", date: "Feb 27", query: "Review the NPS scores from design partners" },
  ],
  jpm: [
    { id: "s-1", title: "AI vendor evaluation matrix", date: "Today", query: "Build an AI vendor evaluation matrix comparing Anthropic, OpenAI, and Google" },
    { id: "s-2", title: "Meridian Corp 3-statement model", date: "Today", query: "Build a 3-statement financial model for Meridian Corp" },
    { id: "s-3", title: "Sentra weekly adoption update", date: "Today", query: "Scope out weekly status update for Sentra adoption" },
    {
      id: "s-4",
      title: "AI sector comp analysis — Q1 multiples",
      date: "Yesterday",
      query: "Analyze AI sector comparable companies with Q1 trading multiples",
    },
    {
      id: "s-5",
      title: "LBO sensitivity for DataVault acquisition",
      date: "Yesterday",
      query: "Run an LBO sensitivity analysis for the DataVault acquisition",
    },
    { id: "s-6", title: "TMT coverage pipeline review", date: "Mar 3", query: "Review the TMT coverage pipeline status" },
    { id: "s-7", title: "DCF assumptions — Meridian Corp", date: "Mar 3", query: "What are the DCF assumptions for Meridian Corp?" },
    { id: "s-8", title: "Tech IPO readiness scorecard", date: "Mar 2", query: "Build a tech IPO readiness scorecard" },
    { id: "s-9", title: "M&A deal comps — enterprise SaaS", date: "Mar 1", query: "Pull M&A deal comps for enterprise SaaS" },
    {
      id: "s-10",
      title: "Pitch book draft — Series C advisory",
      date: "Feb 28",
      query: "Draft a pitch book for the Series C advisory engagement",
    },
  ],
};

export const SUGGESTIONS: Record<string, SuggestionItem[]> = {
  "engineering-manager": [
    { label: "What happened in today's meetings?", route: { type: "generic", index: 3 } },
    { label: "Summarize this week's progress", route: { type: "generic", index: 0 } },
    { label: "What are the team's blockers?", route: { type: "generic", index: 2 } },
    { label: "Draft a PRD", route: { type: "document-flow", flowId: "em-prd" } },
  ],
  jpm: [
    { label: "Build an AI vendor evaluation matrix", route: { type: "vendor-eval" } },
    { label: "Pipeline overview for Q1", route: { type: "generic", index: 0 } },
    { label: "Build a 3-statement model", route: { type: "document-flow", flowId: "jpm-model" } },
    { label: "Weekly status update for Sentra", route: { type: "document-flow", flowId: "jpm-weekly" } },
    { label: "What happened in today's meetings?", route: { type: "generic", index: 3 } },
    { label: "Summarize this week's AI strategy updates", route: { type: "generic", index: 1 } },
  ],
};

/* ── Vendor Evaluation Flow ── */

export const VENDOR_EVAL_SCAN_STEPS: ScanStep[] = [
  {
    label: "Pulling Anthropic_Claude_Enterprise_Eval.xlsx from Google Drive...",
    duration: 3000,
  },
  {
    label:
      "Reviewing transcript from Anthropic Enterprise Demo (Mar 4) on Zoom...",
    duration: 3500,
  },
  {
    label: "Reading OpenAI_GPT5_Technical_Assessment.pdf from Google Drive...",
    duration: 3200,
  },
  {
    label:
      "Pulling transcript from Google Gemini Pilot Review (Mar 6) on Zoom...",
    duration: 3000,
  },
  {
    label:
      "Scanning AI_Vendor_Security_Audit_Results.xlsx from Google Drive...",
    duration: 2800,
  },
  {
    label: "Reviewing transcript from AI Strategy Committee (Mar 7) on Zoom...",
    duration: 3200,
  },
];

export const VENDOR_EVAL_RESPONSE: MockResponse = {
  scanSteps: VENDOR_EVAL_SCAN_STEPS,
  paragraphs: [
    {
      id: "ve-0",
      content: `**AI Vendor Evaluation Matrix — Q1 2026**\n\nThree vendors were evaluated across six dimensions: model performance, security & compliance, enterprise support, pricing, integration capabilities, and financial services domain expertise. Evaluation based on 14 technical assessments, 8 vendor demo sessions, and 3 internal pilot programs run across IB Coverage, TMT, and Technology & Innovation teams.`,
      sources: [
        {
          type: "google-drive",
          label: "AI_Vendor_Evaluation_Framework.xlsx",
        },
        { type: "zoom", label: "AI Strategy Committee (Mar 7)" },
      ],
      chart: {
        type: "bar",
        title: "Model Accuracy — Regulatory Document Comprehension",
        data: [
          { vendor: "Anthropic Claude", accuracy: 94.2, fsDomain: 92, security: 95 },
          { vendor: "OpenAI GPT-5", accuracy: 89.1, fsDomain: 78, security: 88 },
          { vendor: "Google Gemini", accuracy: 87.3, fsDomain: 74, security: 90 },
        ],
        dataKeys: [
          { key: "accuracy", label: "Document Accuracy (%)", color: "hsl(215, 80%, 55%)" },
          { key: "fsDomain", label: "FS Domain Expertise", color: "hsl(170, 65%, 45%)" },
          { key: "security", label: "Security & Compliance", color: "hsl(260, 55%, 60%)" },
        ],
        xAxisKey: "vendor",
      },
    },
    {
      id: "ve-1",
      content: `**Anthropic Claude (Enterprise Tier)**\n\n- **Model Performance:** Highest accuracy on regulatory document comprehension (94.2% vs 89.1% GPT-5, 87.3% Gemini). Superior citation accuracy — critical for compliance use cases. Strongest performance on multi-document synthesis across earnings transcripts and SEC filings.\n- **Security & Compliance:** SOC 2 Type II certified. Supports VPC deployment and data residency requirements. No training on customer data. Passed JPM InfoSec penetration testing.\n- **Enterprise Support:** Dedicated account team, 4-hour SLA for critical issues. Custom fine-tuning available for financial services terminology.\n- **Pricing:** $18/seat/month (Enterprise tier, 500+ seats). Volume discount to $14/seat at 2,000+ seats. Custom model fine-tuning: $150K one-time + $25K/quarter.\n- **Integration:** REST API, Python/TypeScript SDKs. Supports SSO/SAML, audit logging, admin controls. Webhook support for event-driven workflows.\n- **FS Domain Expertise:** Purpose-built financial services safety layers. Strong on regulatory language, deal terminology, and compliance frameworks.`,
      sources: [
        {
          type: "google-drive",
          label: "Anthropic_Claude_Enterprise_Eval.xlsx",
        },
        { type: "zoom", label: "Anthropic Enterprise Demo (Mar 4)" },
        {
          type: "google-drive",
          label: "Anthropic_Security_Audit_Results.pdf",
        },
      ],
    },
    {
      id: "ve-2",
      content: `**OpenAI GPT-5 (Enterprise Tier)**\n\n- **Model Performance:** Strong general reasoning and code generation. Slightly lower accuracy on financial document analysis (89.1%). Best-in-class on creative content generation and translation tasks. Faster inference speed (avg 1.2s vs 1.8s Claude).\n- **Security & Compliance:** SOC 2 Type II certified. Azure-hosted option for data residency. Opt-out of training on customer data available. Passed InfoSec review with 2 minor findings (remediated).\n- **Enterprise Support:** Large customer success team. 8-hour SLA for critical issues. Broad ecosystem of third-party integrations and tools.\n- **Pricing:** $22/seat/month (Enterprise tier, 500+ seats). Volume discount to $18/seat at 2,000+ seats. Fine-tuning: $200K one-time + $35K/quarter.\n- **Integration:** REST API, Python/Node SDKs, Azure OpenAI Service. SSO/SAML, audit logs. Extensive plugin marketplace.\n- **FS Domain Expertise:** Broad but not deep. General-purpose model with financial services fine-tuning available at additional cost. Less precise on regulatory nuance.`,
      sources: [
        {
          type: "google-drive",
          label: "OpenAI_GPT5_Technical_Assessment.pdf",
        },
        { type: "zoom", label: "OpenAI Enterprise Review (Mar 1)" },
      ],
    },
    {
      id: "ve-3",
      content: `**Google Gemini Ultra (Enterprise Tier)**\n\n- **Model Performance:** Strongest multimodal capabilities (document + image analysis). Good on structured data extraction from financial statements. Lower accuracy on nuanced regulatory language (87.3%). Best for data-heavy analytical workflows.\n- **Security & Compliance:** SOC 2 Type II certified. Google Cloud deployment with granular data controls. EU data residency available. Passed InfoSec review.\n- **Enterprise Support:** Google Cloud enterprise support integration. 4-hour SLA through Cloud Premier. Vertex AI platform for model management.\n- **Pricing:** $20/seat/month (Enterprise tier, 500+ seats). Significant discount when bundled with existing Google Cloud spend — effective rate ~$12/seat at current GCP commitment. Fine-tuning: $125K one-time + $20K/quarter.\n- **Integration:** Vertex AI APIs, Python/Java/Go SDKs. Deep integration with Google Workspace. SSO via Google Cloud Identity.\n- **FS Domain Expertise:** Moderate. Strong on quantitative analysis and data extraction. Weaker on qualitative regulatory interpretation and deal-specific language.`,
      sources: [
        {
          type: "google-drive",
          label: "Google_Gemini_Pilot_Results.xlsx",
        },
        { type: "zoom", label: "Google Gemini Pilot Review (Mar 6)" },
      ],
    },
    {
      id: "ve-4",
      content: `**Recommendation & Next Steps**\n\n**Primary recommendation: Anthropic Claude** for regulated financial services use cases (document analysis, compliance, meeting intelligence, client advisory). Superior accuracy on financial/regulatory content and strongest data governance posture.\n\n**Secondary recommendation: Google Gemini** for data-intensive analytical workflows where existing GCP spend reduces effective cost. Consider dual-vendor strategy.\n\nOpenAI remains strong for general-purpose enterprise use but pricing premium and weaker financial domain performance make it less compelling for our specific use cases.\n\n**Proposed timeline:** Finalize Anthropic enterprise agreement by March 28. Begin Gemini pilot in Asset Management data analytics by April 7. Present dual-vendor strategy to Technology Executive Committee on April 14.`,
      sources: [
        { type: "zoom", label: "AI Strategy Committee (Mar 7)" },
        {
          type: "google-drive",
          label: "AI_Vendor_Scoring_Matrix_Final.xlsx",
        },
      ],
      chart: {
        type: "bar",
        title: "Effective Cost per Seat at Scale ($/month)",
        data: [
          { tier: "500 seats", anthropic: 18, openai: 22, gemini: 20 },
          { tier: "2,000 seats", anthropic: 14, openai: 18, gemini: 12 },
        ],
        dataKeys: [
          { key: "anthropic", label: "Anthropic Claude", color: "hsl(215, 80%, 55%)" },
          { key: "openai", label: "OpenAI GPT-5", color: "hsl(145, 55%, 45%)" },
          { key: "gemini", label: "Google Gemini", color: "hsl(35, 90%, 55%)" },
        ],
        xAxisKey: "tier",
      },
    },
  ],
};

/* ── Source refs for document flows ── */

export const MODEL_SOURCES: SourceRef[] = [
  { type: "google-drive", label: "Meridian_Corp_Q4_Financials.xlsx" },
  { type: "zoom", label: "Deal Review — Meridian Corp (Mar 5)" },
  { type: "google-drive", label: "Meridian_Investment_Memo_v3.docx" },
  { type: "zoom", label: "Meridian Corp Mgmt Presentation (Feb 28)" },
];

export const WEEKLY_SOURCES: SourceRef[] = [
  { type: "zoom", label: "IT Infrastructure Call — Sentra Onboarding (Mar 7)" },
  { type: "google-drive", label: "Sentra_x_JPM_Pilot_Kickoff_Notes.docx" },
  { type: "google-drive", label: "Weekly_Adoption_Metrics_W10.xlsx" },
  { type: "zoom", label: "Sentra Quarterly Business Review (Mar 3)" },
];

export const EM_PRD_SOURCES: SourceRef[] = [
  { type: "google-meet", label: "Engineering Sprint Retro (Mar 3)" },
  { type: "google-meet", label: "Pavel / Leo 1:1 (Mar 1)" },
  { type: "slack", label: "#engineering" },
  { type: "linear", label: "AUTH-142: Refactor auth service" },
];

export const MOCK_RESPONSES: MockResponse[] = [
  {
    scanSteps: [
      {
        label: "Parsing 8 meeting transcripts from Google Meet...",
        duration: 3200,
      },
      {
        label: "Reading 5 ChatWorks threads and 3 Dokra pages...",
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
        chart: {
          type: "bar",
          title: "Pipeline by Deal Stage ($K)",
          data: [
            { stage: "Discovery", value: 480, deals: 4 },
            { stage: "Evaluation", value: 1250, deals: 5 },
            { stage: "Negotiation", value: 1580, deals: 3 },
            { stage: "Contract Sent", value: 890, deals: 2 },
          ],
          dataKeys: [
            { key: "value", label: "Pipeline Value ($K)", color: "hsl(215, 80%, 55%)" },
          ],
          xAxisKey: "stage",
        },
      },
      {
        id: "p0-1",
        content: `**Top Insights**\n\nEnterprise segment grew 23% — driven by 3 new logos from the Q2 launch campaign. The largest new logo, Meridian Corp, was sourced through the Campfire partner referral and is evaluating a $120K ARR package with custom SLA requirements.\n\nSMB conversion rate dropped 4pts, likely tied to pricing feedback surfaced in 3 separate discovery calls this week. Customers are comparing against competitors offering usage-based pricing. Highest win rate remains in the Financial Services vertical at 64%, with Healthcare close behind at 58%.\n\nNotably, deals sourced from content marketing (blog + webinar) have a 40% higher close rate than cold outbound, though volume is 3x lower. Recommend increasing content investment for Q2 to capitalize on this signal.`,
        sources: [
          { type: "google-meet", label: "Al <> Leo 1:1" },
          { type: "slack", label: "#enterprise-deals" },
          { type: "outlook", label: "Q4 Pipeline Report" },
          { type: "google-drive", label: "Q1 Revenue Analysis" },
        ],
        chart: {
          type: "bar",
          title: "Win Rate by Vertical (%)",
          data: [
            { vertical: "Financial Services", winRate: 64 },
            { vertical: "Healthcare", winRate: 58 },
            { vertical: "Technology", winRate: 51 },
            { vertical: "Retail", winRate: 43 },
            { vertical: "Manufacturing", winRate: 38 },
          ],
          dataKeys: [
            { key: "winRate", label: "Win Rate (%)", color: "hsl(170, 65%, 45%)" },
          ],
          xAxisKey: "vertical",
        },
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
        label: "Reading 3 ChatWorks channels and 2 Dokra docs...",
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
        content: `**Notable Calls**\n\n**Vantage (Casey Morgan)** — Strong interest in the API tier; asked for custom SLA with 99.95% uptime guarantee. Their team of 45 needs admin controls and audit logging. Casey wants a follow-up demo with their CTO next Tuesday.\n\n**Nexus** — Evaluating against Voiceflow and Buzzbot; price-sensitive but impressed by the depth of meeting intelligence. They're running a 2-week trial with 8 team members. Decision expected by March 15.\n\n**Flux Labs** — Ready to expand from 12 to 50 seats if mobile app ships by Q2. Their distributed team relies heavily on async communication and needs mobile access for meeting summaries on the go. Budget already approved internally.`,
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
        label: "Scanning 8 Trackline tickets and 4 GitHub PRs...",
        duration: 3400,
      },
      { label: "Reading 4 ChatWorks threads and Asana board...", duration: 3400 },
    ],
    paragraphs: [
      {
        id: "p2-0",
        content: `**Engineering Blockers**\n\nAuth service refactor (AUTH-142) is blocking 3 downstream features: SSO support, team permissions, and audit logging. Jordan estimates 4 more days of work, but the scope expanded after discovering legacy session handling that needs migration. Mobile push notification reliability was reported in 2 customer calls this week — the root cause is a race condition in the notification queue.\n\nThe database migration for the new analytics schema is 80% complete but hit an issue with backward compatibility on the reporting API. Pavel proposed a dual-write strategy to avoid downtime, adding approximately 2 days to the timeline.\n\nOn the positive side, the CI/CD pipeline improvements shipped this week, reducing build times from 12 minutes to 4 minutes. This is already improving developer velocity across the team.`,
        sources: [
          { type: "linear", label: "AUTH-142: Refactor auth service" },
          { type: "slack", label: "#engineering" },
          { type: "github", label: "PR #387: Push notification fix" },
          { type: "asana", label: "Sprint 14 Board" },
        ],
      },
      {
        id: "p2-1",
        content: `**Sales & Product Blockers**\n\nLack of SOC 2 Type II certification is blocking 4 enterprise deals worth a combined $380K ARR. The audit is scheduled to begin March 10 with completion targeted for end of April. In the meantime, Raj is drafting a security whitepaper that may help unblock 2 of the 4 deals.\n\nNo self-serve onboarding flow is slowing SMB pipeline velocity — current median time-to-first-value is 6 days, and the target is under 24 hours. The new onboarding wizard designs are in Dokra and need engineering sign-off by Friday.\n\nFigma designs for the v2 dashboard are still in review (due: this Friday). The design team flagged that the data visualization components need accessibility improvements before handoff to engineering.`,
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
        label: "Reading 6 ChatWorks channels and Google Drive docs...",
        duration: 3300,
      },
      {
        label: "Scanning recent commits and Trackline updates...",
        duration: 3200,
      },
    ],
    paragraphs: [
      {
        id: "p3-0",
        content: `**Recent Updates**\n\nThe new analytics dashboard shipped on Monday and is seeing strong adoption — 78% of active users accessed it in the first 48 hours. Early feedback highlights the real-time data refresh as the standout feature, with 3 customers already asking about API access to the analytics data.\n\nMobile app beta went out to 25 testers on Wednesday. Initial feedback is overwhelmingly positive — testers rated the meeting summary experience 4.6/5 and the push notification reliability 4.2/5. The main request is offline access for meeting transcripts, which is already on the Q2 roadmap.\n\nThe TechConnect launch prep is 85% complete. Press kit is finalized, demo booth is confirmed at TechConnect Create, and the pre-launch teaser campaign is scheduled for March 10. 12 publications and 4 podcast contacts have been briefed.`,
        sources: [
          { type: "slack", label: "#launches" },
          { type: "github", label: "v2.4.0 Release" },
          { type: "google-meet", label: "Weekly All-Hands" },
          { type: "google-drive", label: "TechConnect Press Kit" },
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

/* ── Document Flow Data ── */

export interface PrdScanStep {
  label: string;
  duration: number;
}

/* ── Engineering Manager: PRD Flow ── */

export const EM_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Searching 6 recent engineering meeting transcripts...",
    duration: 3000,
  },
  {
    label: "Reading 12 Trackline tickets from Sprint 14 and backlog...",
    duration: 3500,
  },
  {
    label: "Scanning 8 GitHub PRs and 3 architecture discussions...",
    duration: 4000,
  },
  {
    label: "Analyzing Dokra engineering specs and decision logs...",
    duration: 3500,
  },
];

export const EM_CONTENT = `# Product Requirements Document: Auth Service Refactor & SSO Support

## Overview

Based on discussions from the Engineering Sprint Retro (Mar 3), Pavel/Leo 1:1 (Mar 1), and 12 related Trackline tickets, this PRD outlines the requirements for refactoring the authentication service to support enterprise SSO, team permissions, and audit logging.

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
Dual-write strategy proposed by Pavel to avoid downtime. New JWT tokens issued alongside legacy sessions. Gradual rollover with feature flag.

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
| Session Migration | 2 weeks | Pavel |
| SSO Integration | 1.5 weeks | Jordan |
| Permissions & Audit | 1.5 weeks | Pavel + Jordan |
| QA & Rollout | 1 week | Full team |

**Target completion: April 11, 2026**

---

*Sources: Engineering Sprint Retro, Pavel/Leo 1:1, LINEAR AUTH-142, LINEAR PROD-89, GitHub PR #387, #engineering ChatWorks, Dokra Engineering Specs*`;

export const EM_BUILD_STEPS: PrdScanStep[] = [
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

/* ── JPM: 3-Statement Model Flow ── */

export const PRD_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Analyzing Meridian_Corp_Q4_Financials.xlsx...",
    duration: 3200,
  },
  {
    label: "Pulling transcript from Deal Review — Meridian Corp (Mar 5)...",
    duration: 3500,
  },
  {
    label: "Reading Meridian_Investment_Memo_v3.docx...",
    duration: 3800,
  },
  {
    label:
      "Pulling transcript from Meridian Corp Mgmt Presentation (Feb 28)...",
    duration: 3200,
  },
  {
    label: "Scanning Meridian_Comparable_Companies.xlsx...",
    duration: 3000,
  },
  {
    label: "Reading Deal_Committee_Notes_Meridian.docx...",
    duration: 2800,
  },
];

export const PRD_CONTENT = `# 3-Statement Financial Model: Meridian Corp

## Company Overview

**Meridian Corp** — Enterprise SaaS platform for supply chain optimization. Series B company with $18M ARR, 340 employees. Evaluating $120K ARR Sentra package with custom SLA requirements. Model built from deal memos, financial disclosures, and comparable company analysis.

## Key Assumptions

- Revenue growth: 45% YoY (FY26E), decelerating to 35% (FY27E), 28% (FY28E)
- Gross margin: 72% current, expanding to 76% by FY28E (scale efficiencies)
- S&M as % of revenue: 48% declining to 38% by FY28E
- R&D as % of revenue: 28% steady
- G&A as % of revenue: 14% declining to 11% by FY28E
- Net revenue retention: 125%
- CAC payback: 18 months

## Income Statement

| Line Item | FY25A | FY26E | FY27E | FY28E |
|-----------|-------|-------|-------|-------|
| Revenue | $18.0M | $26.1M | $35.2M | $45.1M |
| COGS | ($5.0M) | ($7.1M) | ($9.2M) | ($10.8M) |
| Gross Profit | $13.0M | $19.0M | $26.1M | $34.3M |
| S&M | ($8.6M) | ($11.7M) | ($14.4M) | ($17.1M) |
| R&D | ($5.0M) | ($7.3M) | ($9.9M) | ($12.6M) |
| G&A | ($2.5M) | ($3.4M) | ($4.2M) | ($5.0M) |
| EBITDA | ($3.1M) | ($3.4M) | ($2.5M) | ($0.4M) |
| D&A | ($0.8M) | ($1.0M) | ($1.3M) | ($1.5M) |
| EBIT | ($3.9M) | ($4.4M) | ($3.8M) | ($1.9M) |
| Net Income | ($4.2M) | ($4.8M) | ($4.1M) | ($2.2M) |

## Balance Sheet

| Line Item | FY25A | FY26E | FY27E | FY28E |
|-----------|-------|-------|-------|-------|
| Cash & Equivalents | $32.0M | $27.5M | $24.0M | $22.8M |
| Accounts Receivable | $3.6M | $5.2M | $7.0M | $9.0M |
| Total Current Assets | $36.8M | $34.1M | $32.7M | $33.8M |
| PP&E (net) | $2.1M | $2.8M | $3.4M | $3.9M |
| Total Assets | $41.2M | $39.6M | $39.2M | $41.2M |
| Accounts Payable | $1.8M | $2.4M | $3.1M | $3.8M |
| Deferred Revenue | $4.5M | $6.5M | $8.8M | $11.3M |
| Total Liabilities | $8.4M | $11.2M | $14.6M | $18.0M |
| Stockholders' Equity | $32.8M | $28.4M | $24.6M | $23.2M |

## Cash Flow Statement

| Line Item | FY25A | FY26E | FY27E | FY28E |
|-----------|-------|-------|-------|-------|
| Net Income | ($4.2M) | ($4.8M) | ($4.1M) | ($2.2M) |
| D&A | $0.8M | $1.0M | $1.3M | $1.5M |
| Changes in WC | $0.5M | $0.3M | $0.4M | $0.6M |
| CFO | ($2.9M) | ($3.5M) | ($2.4M) | ($0.1M) |
| CapEx | ($0.9M) | ($1.2M) | ($1.4M) | ($1.5M) |
| FCF | ($3.8M) | ($4.7M) | ($3.8M) | ($1.6M) |
| Cash RenderLab | 8.4 yrs | 5.9 yrs | 6.3 yrs | 14.3 yrs |

## Valuation Sensitivity

**EV/Revenue multiples (FY26E):**
- Bear case (8x): $209M
- Base case (12x): $313M
- Bull case (16x): $418M

**Key risks:** Customer concentration (top 10 = 38% of ARR), long enterprise sales cycles, path to profitability dependent on S&M leverage.

---

*Sources: Meridian Corp deal memo, GTM Strategy Sync, Vantage Discovery Call notes, Q1 Deal Tracker (Dokra), #enterprise-deals ChatWorks, Google Drive financial disclosures*`;

export const PRD_BUILD_STEPS: PrdScanStep[] = [
  {
    label: "Pulling revenue assumptions from investment memo...",
    duration: 2800,
  },
  {
    label: "Building income statement — mapping COGS, OpEx, D&A schedules...",
    duration: 3200,
  },
  {
    label: "Constructing balance sheet — linking AR, AP, deferred revenue...",
    duration: 3500,
  },
  {
    label: "Generating cash flow statement — CFO, CapEx, FCF bridge...",
    duration: 3000,
  },
  {
    label: "Cross-linking statements — verifying BS balances, circular refs...",
    duration: 2800,
  },
  {
    label: "Running EV/Revenue sensitivity table and formatting output...",
    duration: 2500,
  },
];

/* ── JPM: Weekly Status Update Flow ── */

export const WEEKLY_SCAN_STEPS: PrdScanStep[] = [
  {
    label:
      "Pulling transcript from IT Infrastructure Call — Sentra Onboarding (Mar 7)...",
    duration: 3000,
  },
  {
    label: "Reading Sentra_x_JPM_Pilot_Kickoff_Notes.docx...",
    duration: 3200,
  },
  {
    label: "Scanning #sentra-adoption ChatWorks channel (47 messages this week)...",
    duration: 3500,
  },
  {
    label: "Analyzing Sentra_Pricing_Structure_2026.xlsx...",
    duration: 2800,
  },
  {
    label:
      "Pulling transcript from Sentra Quarterly Business Review (Mar 3)...",
    duration: 3200,
  },
  {
    label: "Reading Weekly_Adoption_Metrics_W10.xlsx...",
    duration: 2500,
  },
  {
    label: "Scanning #it-ops and #ai-tools-evaluation ChatWorks channels...",
    duration: 3000,
  },
];

export const WEEKLY_CONTENT = `# Weekly Status Update: Sentra Adoption at JPM

## Week 10 — March 3–7, 2026

---

## Executive Summary

Sentra pilot adoption continues to accelerate across the Technology & Innovation division. Active daily users grew from 34 to 52 (+53% WoW), driven by the IB Coverage team onboarding and expanded use in the TMT group. Meeting capture volume hit 127 meetings this week, up from 89 last week. Key blocker: SSO integration with JPM's internal IdP remains pending IT Security review.

## Adoption Metrics

| Metric | Last Week | This Week | Change |
|--------|-----------|-----------|--------|
| Active Daily Users | 34 | 52 | +53% |
| Meetings Captured | 89 | 127 | +43% |
| Meeting Notes Viewed | 214 | 341 | +59% |
| Search Queries | 156 | 289 | +85% |
| Artifacts Generated | 12 | 23 | +92% |
| Avg. Session Duration | 8.2 min | 11.4 min | +39% |

## Team-by-Team Breakdown

**IB Coverage (NEW this week)**
- 14 users onboarded Monday via group session led by Diana Calloway
- Primary use case: client meeting prep and post-meeting action tracking
- Feedback: "This replaces 30 minutes of manual CRM updates after every call" — VP, Coverage

**TMT Group**
- 18 active users (steady), meeting capture rate at 94%
- Top request: integration with internal deal tracking system (DealStream)
- Generated 8 client-ready artifacts this week (up from 3)

**Technology & Innovation**
- 12 active users, primarily using search and meeting intelligence
- Running evaluation against Prism and Microsoft AssistAI
- Decision expected by March 21

**Compliance & Risk (Pilot pending)**
- IT Security review of SSO integration in progress
- Data residency requirements confirmed — US-East region compatible
- Expected pilot start: March 17

## Key Conversations This Week

**Sentra x JPM Pilot Sync (Mar 5)**
- Discussed expanding pilot from 60 to 150 seats
- JPM IT requesting audit log export API for compliance
- Pricing discussion: enterprise tier with custom SLA under review

**IT Infrastructure Call (Mar 7)**
- SSO/SAML integration blockers identified: custom claim mapping required
- JPM InfoSec team needs penetration test report before production approval
- Target: SSO go-live by March 24

## Pricing & Commercial

- Current pilot: 60 seats at $0 (evaluation period ends March 31)
- Proposed expansion: 150 seats, Enterprise tier at $42/seat/month
- Annual contract value if expanded: $75,600/year
- Competitive context: Prism quoting $65/seat, AssistAI bundled at $30/seat
- Differentiation: meeting intelligence depth, organizational memory, action tracking

## Blockers & Risks

1. **SSO Integration** — IT Security review blocking Compliance team pilot (ETA: Mar 24)
2. **Data Retention Policy** — JPM requires 7-year retention; current Sentra default is 2 years
3. **DealStream Integration** — TMT group requesting CRM sync; not on current roadmap
4. **Procurement Timeline** — Budget approval needed by April 15 for Q2 contract

## Next Week Priorities

- [ ] Complete SSO claim mapping with JPM IT (Pavel)
- [ ] Deliver penetration test report to InfoSec (Leo)
- [ ] Schedule Compliance team pilot kickoff for Mar 17 (Ingrid)
- [ ] Finalize pricing proposal for 150-seat expansion (Leo)
- [ ] Demo organizational memory features to TMT leadership (Raj)

---

*Sources: Sentra x JPM Pilot Sync (Mar 5), IT Infrastructure Call (Mar 7), Sentra QBR (Mar 3), #sentra-adoption ChatWorks, #it-ops ChatWorks, Weekly_Adoption_Metrics_W10.xlsx, Sentra_Pricing_Structure_2026.xlsx*`;

export const WEEKLY_BUILD_STEPS: PrdScanStep[] = [
  {
    label: "Pulling JPM and Sentra logos from brand assets...",
    duration: 2500,
  },
  {
    label: "Formatting adoption metrics into charts and tables...",
    duration: 3200,
  },
  {
    label: "Building team breakdown slides with usage data...",
    duration: 3500,
  },
  {
    label: "Generating executive summary and key highlights...",
    duration: 3000,
  },
  {
    label: "Adding pricing comparison and competitive positioning...",
    duration: 2800,
  },
  {
    label: "Formatting slide deck and applying JPM template...",
    duration: 2500,
  },
];
