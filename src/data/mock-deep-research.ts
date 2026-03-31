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
  /** If true, this paragraph renders collapsed by default with a clickable header to expand */
  collapsible?: boolean;
}

export interface ScanStep {
  label: string;
  duration: number;
  /** Optional list of integration icon keys to display alongside the step */
  icons?: string[];
}

export type SuggestionRoute =
  | { type: "vendor-eval" }
  | { type: "document-flow"; flowId: string }
  | { type: "generic"; index?: number };

export interface SuggestionItem {
  label: string;
  route: SuggestionRoute;
}

export interface ActionSuggestion {
  prompt: string;
  actionId: string;
  actionName: string;
}

export interface TimelineEvent {
  title: string;
  detail: string;
  involved: string[];
  sources: { type: string; label: string }[];
}

export interface TimelineWeek {
  week: number;
  label: string;
  dateRange: string;
  summary: string;
  events: TimelineEvent[];
  highlight?: "warning" | "critical";
}

export interface MockResponse {
  scanSteps: ScanStep[];
  paragraphs: ResponseParagraph[];
  actionSuggestion?: ActionSuggestion;
  timeline?: TimelineWeek[];
}

export interface SessionHistoryItem {
  id: string;
  title: string;
  date: string;
  query: string;
}

export const SESSION_HISTORY: Record<string, SessionHistoryItem[]> = {
  "engineering-manager": [
    {
      id: "s-1",
      title: "Pipeline overview Q1 2026",
      date: "Today",
      query: "Give me an overview of the pipeline for Q1 2026",
    },
    {
      id: "s-2",
      title: "Customer call themes this week",
      date: "Today",
      query: "What are the key themes from customer calls this week?",
    },
    {
      id: "s-3",
      title: "Engineering blockers summary",
      date: "Yesterday",
      query: "Summarize the current engineering blockers",
    },
    {
      id: "s-4",
      title: "TechConnect launch readiness check",
      date: "Yesterday",
      query: "How ready are we for the TechConnect launch?",
    },
    {
      id: "s-5",
      title: "SOC 2 deal impact analysis",
      date: "Mar 3",
      query: "What's the impact of SOC 2 compliance on our deals?",
    },
    {
      id: "s-6",
      title: "Onboarding flow conversion audit",
      date: "Mar 3",
      query: "Audit the onboarding flow conversion rates",
    },
    {
      id: "s-7",
      title: "Mobile app beta feedback",
      date: "Mar 2",
      query: "Summarize the mobile app beta feedback",
    },
    {
      id: "s-8",
      title: "Weekly all-hands recap",
      date: "Mar 1",
      query: "What happened in the weekly all-hands?",
    },
    {
      id: "s-9",
      title: "Competitor pricing research",
      date: "Feb 28",
      query: "Research competitor pricing strategies",
    },
    {
      id: "s-10",
      title: "Design partner NPS review",
      date: "Feb 27",
      query: "Review the NPS scores from design partners",
    },
  ],
  jpm: [
    {
      id: "s-1",
      title: "NovaBridge Capital secondary offering memo",
      date: "Today",
      query:
        "Draft a preliminary secondary offering memo for David Chen's company using the latest financials from the CFO email thread, the Q3 earnings data in the SharePoint model, and comparable transactions from the last 12 months",
    },
    {
      id: "s-2",
      title: "Oracle migration delay analysis",
      date: "Today",
      query: "Why are we past the original deadline for the Oracle migration?",
    },
    {
      id: "s-3",
      title: "Comparative market analysis — board prep",
      date: "Today",
      query:
        "Build a comparative market analysis for tomorrow's board meeting using the company's last board deck, current public comparables, recent relevant transactions, and a concise valuation readout with key drivers",
    },
    {
      id: "s-4",
      title: "AI vendor evaluation matrix",
      date: "Last week",
      query:
        "Build an AI vendor evaluation matrix comparing Anthropic, OpenAI, and Google",
    },
    {
      id: "s-5",
      title: "Meridian Corp 3-statement model",
      date: "Last week",
      query: "Build a 3-statement financial model for Meridian Corp",
    },
    {
      id: "s-6",
      title: "AI sector comp analysis — Q1 multiples",
      date: "Mar 20",
      query: "Analyze AI sector comparable companies with Q1 trading multiples",
    },
    {
      id: "s-7",
      title: "TMT coverage pipeline review",
      date: "Mar 18",
      query: "Review the TMT coverage pipeline status",
    },
    {
      id: "s-8",
      title: "Sentra weekly adoption update",
      date: "Mar 14",
      query: "Scope out weekly status update for Sentra adoption",
    },
    {
      id: "s-9",
      title: "M&A deal comps — enterprise SaaS",
      date: "Mar 10",
      query: "Pull M&A deal comps for enterprise SaaS",
    },
    {
      id: "s-10",
      title: "Pitch book draft — Series C advisory",
      date: "Mar 5",
      query: "Draft a pitch book for the Series C advisory engagement",
    },
  ],
};

export const SUGGESTIONS: Record<string, SuggestionItem[]> = {
  "engineering-manager": [
    {
      label: "What happened in today's meetings?",
      route: { type: "generic", index: 3 },
    },
    {
      label: "Summarize this week's progress",
      route: { type: "generic", index: 0 },
    },
    {
      label: "What are the team's blockers?",
      route: { type: "generic", index: 2 },
    },
    {
      label: "Draft a PRD",
      route: { type: "document-flow", flowId: "em-prd" },
    },
  ],
  jpm: [
    {
      label: "Draft a secondary offering memo for NovaBridge Capital",
      route: { type: "document-flow", flowId: "jpm-secondary-offering" },
    },
    {
      label: "Why are we past the original deadline for the Oracle migration?",
      route: { type: "generic", index: 4 },
    },
    {
      label: "Build a 3-statement model",
      route: { type: "document-flow", flowId: "jpm-model" },
    },
    {
      label: "AI sector comp analysis — Q1 multiples",
      route: { type: "vendor-eval" },
    },
    {
      label: "What happened in today's meetings?",
      route: { type: "generic", index: 3 },
    },
  ],
};

/* ── Vendor Evaluation Flow ── */

export const VENDOR_EVAL_SCAN_STEPS: ScanStep[] = [
  {
    label: "Pulling Anthropic_Claude_Enterprise_Eval.xlsx from SharePoint...",
    duration: 3000,
  },
  {
    label:
      "Reviewing transcript from Anthropic Enterprise Demo (Mar 4) on Zoom...",
    duration: 3500,
  },
  {
    label: "Reading OpenAI_GPT5_Technical_Assessment.pdf from SharePoint...",
    duration: 3200,
  },
  {
    label:
      "Pulling transcript from Google Gemini Pilot Review (Mar 6) on Zoom...",
    duration: 3000,
  },
  {
    label: "Scanning AI_Vendor_Security_Audit_Results.xlsx from SharePoint...",
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
          type: "sharepoint",
          label: "AI_Vendor_Evaluation_Framework.xlsx",
        },
        { type: "zoom", label: "AI Strategy Committee (Mar 7)" },
      ],
      chart: {
        type: "bar",
        title: "EV/Revenue Multiples — AI & Enterprise SaaS Comps (Q1 2026)",
        data: [
          { company: "Anthropic", evRevenue: 48.2, revGrowth: 210 },
          { company: "OpenAI", evRevenue: 37.5, revGrowth: 145 },
          { company: "Palantir", evRevenue: 22.8, revGrowth: 42 },
          { company: "Snowflake", evRevenue: 18.4, revGrowth: 36 },
          { company: "Datadog", evRevenue: 16.1, revGrowth: 27 },
          { company: "Meridian", evRevenue: 12.0, revGrowth: 45 },
        ],
        dataKeys: [
          {
            key: "evRevenue",
            label: "EV/Revenue (x)",
            color: "hsl(215, 80%, 55%)",
          },
          {
            key: "revGrowth",
            label: "Revenue Growth (%)",
            color: "hsl(170, 65%, 45%)",
          },
        ],
        xAxisKey: "company",
      },
    },
    {
      id: "ve-1",
      content: `**Anthropic Claude (Enterprise Tier)**\n\n- **Model Performance:** Highest accuracy on regulatory document comprehension (94.2% vs 89.1% GPT-5, 87.3% Gemini). Superior citation accuracy — critical for compliance use cases. Strongest performance on multi-document synthesis across earnings transcripts and SEC filings.\n- **Security & Compliance:** SOC 2 Type II certified. Supports VPC deployment and data residency requirements. No training on customer data. Passed JPM InfoSec penetration testing.\n- **Enterprise Support:** Dedicated account team, 4-hour SLA for critical issues. Custom fine-tuning available for financial services terminology.\n- **Pricing:** $18/seat/month (Enterprise tier, 500+ seats). Volume discount to $14/seat at 2,000+ seats. Custom model fine-tuning: $150K one-time + $25K/quarter.\n- **Integration:** REST API, Python/TypeScript SDKs. Supports SSO/SAML, audit logging, admin controls. Webhook support for event-driven workflows.\n- **FS Domain Expertise:** Purpose-built financial services safety layers. Strong on regulatory language, deal terminology, and compliance frameworks.`,
      sources: [
        {
          type: "sharepoint",
          label: "Anthropic_Claude_Enterprise_Eval.xlsx",
        },
        { type: "zoom", label: "Anthropic Enterprise Demo (Mar 4)" },
        {
          type: "sharepoint",
          label: "Anthropic_Security_Audit_Results.pdf",
        },
      ],
    },
    {
      id: "ve-2",
      content: `**OpenAI GPT-5 (Enterprise Tier)**\n\n- **Model Performance:** Strong general reasoning and code generation. Slightly lower accuracy on financial document analysis (89.1%). Best-in-class on creative content generation and translation tasks. Faster inference speed (avg 1.2s vs 1.8s Claude).\n- **Security & Compliance:** SOC 2 Type II certified. Azure-hosted option for data residency. Opt-out of training on customer data available. Passed InfoSec review with 2 minor findings (remediated).\n- **Enterprise Support:** Large customer success team. 8-hour SLA for critical issues. Broad ecosystem of third-party integrations and tools.\n- **Pricing:** $22/seat/month (Enterprise tier, 500+ seats). Volume discount to $18/seat at 2,000+ seats. Fine-tuning: $200K one-time + $35K/quarter.\n- **Integration:** REST API, Python/Node SDKs, Azure OpenAI Service. SSO/SAML, audit logs. Extensive plugin marketplace.\n- **FS Domain Expertise:** Broad but not deep. General-purpose model with financial services fine-tuning available at additional cost. Less precise on regulatory nuance.`,
      sources: [
        {
          type: "sharepoint",
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
          type: "sharepoint",
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
          type: "sharepoint",
          label: "AI_Vendor_Scoring_Matrix_Final.xlsx",
        },
      ],
      chart: {
        type: "bar",
        title: "Implied Valuation Range — EV/Revenue Sensitivity ($M)",
        data: [
          {
            scenario: "Bear (8x)",
            anthropic: 1640,
            openai: 3000,
            meridian: 209,
          },
          {
            scenario: "Base (12x)",
            anthropic: 2460,
            openai: 4500,
            meridian: 313,
          },
          {
            scenario: "Bull (16x)",
            anthropic: 3280,
            openai: 6000,
            meridian: 418,
          },
        ],
        dataKeys: [
          {
            key: "meridian",
            label: "Meridian Corp",
            color: "hsl(215, 80%, 55%)",
          },
          { key: "anthropic", label: "Anthropic", color: "hsl(170, 65%, 45%)" },
          { key: "openai", label: "OpenAI", color: "hsl(260, 55%, 60%)" },
        ],
        xAxisKey: "scenario",
      },
    },
  ],
};

/* ── Source refs for document flows ── */

export const MODEL_SOURCES: SourceRef[] = [
  { type: "sharepoint", label: "Meridian_Corp_Q4_Financials.xlsx" },
  { type: "zoom", label: "Deal Review — Meridian Corp (Mar 5)" },
  { type: "sharepoint", label: "Meridian_Investment_Memo_v3.docx" },
  { type: "zoom", label: "Meridian Corp Mgmt Presentation (Feb 28)" },
];

export const WEEKLY_SOURCES: SourceRef[] = [
  { type: "zoom", label: "IT Infrastructure Call — Sentra Onboarding (Mar 7)" },
  { type: "sharepoint", label: "Sentra_x_JPM_Pilot_Kickoff_Notes.docx" },
  { type: "sharepoint", label: "Weekly_Adoption_Metrics_W10.xlsx" },
  { type: "zoom", label: "Sentra Quarterly Business Review (Mar 3)" },
];

export const EM_PRD_SOURCES: SourceRef[] = [
  { type: "teams", label: "Engineering Sprint Retro (Mar 3)" },
  { type: "teams", label: "Pavel / Leo 1:1 (Mar 1)" },
  { type: "teams", label: "#engineering" },
  { type: "linear", label: "AUTH-142: Refactor auth service" },
];

export const MOCK_RESPONSES: MockResponse[] = [
  {
    scanSteps: [
      {
        label: "Parsing 5 meeting transcripts from Zoom...",
        duration: 2400,
        icons: ["zoom"],
      },
      {
        label: "Parsing 3 meeting transcripts from Microsoft Teams...",
        duration: 2200,
        icons: ["ms-teams"],
      },
      {
        label: "Reading 12 email threads from Outlook...",
        duration: 2800,
        icons: ["outlook"],
      },
      {
        label: "Scanning CRM pipeline from Salesforce...",
        duration: 2400,
        icons: ["salesforce"],
      },
      {
        label: "Pulling documents from SharePoint...",
        duration: 2200,
        icons: ["sharepoint"],
      },
      {
        label: "Reading Word drafts and templates...",
        duration: 2000,
        icons: ["word"],
      },
      {
        label: "Checking tickets in ServiceNow...",
        duration: 2000,
        icons: ["service-now"],
      },
    ],
    paragraphs: [
      {
        id: "p0-0",
        content: `**Vendor Comparison: Apex Systems vs. Meridian IT Solutions**\n\nBased on the latest pricing from David Chen's email thread, the budget model in SharePoint, and reviews from 6 internal teams who've used both vendors in the last 12 months, here is the side-by-side comparison.\n\n**Pricing:** Apex Systems quoted **$1.2M** for the full infrastructure upgrade (24-month contract, fixed). Meridian IT Solutions quoted **$980K** for comparable scope but with a variable component tied to usage that could push total cost to $1.15M. Apex includes 24/7 premium support in their base price; Meridian charges an additional 12% for equivalent SLA.\n\n**Implementation Timeline:** Apex estimates **14 weeks** to full deployment with a dedicated project manager. Meridian estimates **10 weeks** but their track record shows an average 3-week overrun based on 4 past engagements tracked in our vendor reviews.`,
        sources: [
          { type: "outlook", label: "David Chen — Pricing Update (Mar 24)" },
          { type: "sharepoint", label: "Infrastructure_Budget_Model_v3.xlsx" },
          { type: "teams", label: "Vendor Review — IT Ops Team" },
        ],
        chart: {
          type: "bar",
          title: "Projected Quarterly Cost ($K)",
          data: [
            { quarter: "Q1", apex: 320, meridian: 280 },
            { quarter: "Q2", apex: 310, meridian: 260 },
            { quarter: "Q3", apex: 290, meridian: 250 },
            { quarter: "Q4", apex: 280, meridian: 260 },
          ],
          dataKeys: [
            { key: "apex", label: "Apex Systems", color: "hsl(215, 80%, 55%)" },
            {
              key: "meridian",
              label: "Meridian IT",
              color: "hsl(170, 65%, 45%)",
            },
          ],
          xAxisKey: "quarter",
        },
      },
      {
        id: "p0-1",
        content: `**Team Satisfaction & Track Record**\n\n6 internal teams have used one or both vendors in the past 12 months. Apex Systems received an average satisfaction score of **8.4/10** across 4 engagements, with teams citing reliable delivery, strong project management, and responsive support. The IT Ops team specifically noted Apex's ability to handle scope changes without timeline impact.\n\nMeridian IT Solutions scored **7.1/10** across 3 engagements. Teams appreciated their competitive pricing and technical depth, but flagged recurring issues with delivery timelines (average 3-week overrun) and communication gaps during implementation. The Finance team's engagement ran 5 weeks over schedule.\n\n**Recommendation:** Apex Systems is the lower-risk choice with stronger delivery track record and team satisfaction. Meridian offers a cost advantage of ~$150K but carries meaningful execution risk based on internal experience. For a project of this criticality, Apex is the recommended vendor.`,
        sources: [
          { type: "sharepoint", label: "Vendor Review Database (SharePoint)" },
          { type: "teams", label: "IT Ops — Apex Engagement Retro" },
          { type: "teams", label: "Finance — Meridian Post-Mortem" },
          { type: "outlook", label: "Vendor Satisfaction Survey Results" },
        ],
        chart: {
          type: "line",
          title: "Team Satisfaction Scores by Engagement",
          data: [
            { team: "IT Ops", apex: 9.0, meridian: 6.8 },
            { team: "Finance", apex: 8.2, meridian: 6.5 },
            { team: "Engineering", apex: 8.1, meridian: 7.8 },
            { team: "HR Systems", apex: 8.6, meridian: 7.0 },
          ],
          dataKeys: [
            { key: "apex", label: "Apex Systems", color: "hsl(215, 80%, 55%)" },
            {
              key: "meridian",
              label: "Meridian IT",
              color: "hsl(170, 65%, 45%)",
            },
          ],
          xAxisKey: "team",
        },
      },
    ],
    actionSuggestion: {
      prompt:
        "Export this vendor comparison as a formatted document for the budget review on Friday.",
      actionId: "vendor-comparison-export",
      actionName: "View Doc",
    },
  },
  {
    scanSteps: [
      {
        label: "Reviewing 4 call transcripts from Zoom...",
        duration: 2600,
        icons: ["zoom"],
      },
      {
        label: "Reviewing 3 call transcripts from Microsoft Teams...",
        duration: 2400,
        icons: ["ms-teams"],
      },
      {
        label: "Reading 3 Teams channel threads...",
        duration: 2800,
        icons: ["ms-teams"],
      },
      {
        label: "Checking 2 follow-up emails in Outlook...",
        duration: 2400,
        icons: ["outlook"],
      },
    ],
    paragraphs: [
      {
        id: "p1-0",
        content: `**Common Themes (7 calls reviewed)**\n\n5 of 7 customers mentioned integration complexity as a top concern — specifically around webhook reliability and API rate limits. The new reporting dashboard received positive sentiment in 4 calls, with users highlighting the real-time data refresh and customizable views.\n\n3 enterprise prospects explicitly asked about SSO/SAML support timeline, making it the most-requested security feature. Two of these prospects (Vantage and Relay) have deal values exceeding $90K and have indicated SSO is a hard requirement for procurement approval.\n\nInterestingly, 4 of 7 customers mentioned they discovered Sentra through word-of-mouth or peer recommendations, suggesting strong organic growth potential. Two customers specifically mentioned seeing the product demoed at a peer's company and wanting to evaluate it for their own team.`,
        sources: [
          { type: "teams", label: "Vantage Discovery Call" },
          { type: "zoom", label: "Nexus Demo" },
          { type: "teams", label: "#customer-feedback" },
          { type: "sharepoint", label: "Customer Interview Notes" },
        ],
      },
      {
        id: "p1-1",
        content: `**Notable Calls**\n\n**Vantage (Casey Morgan)** — Strong interest in the API tier; asked for custom SLA with 99.95% uptime guarantee. Their team of 45 needs admin controls and audit logging. Casey wants a follow-up demo with their CTO next Tuesday.\n\n**Nexus** — Evaluating against Voiceflow and Buzzbot; price-sensitive but impressed by the depth of meeting intelligence. They're running a 2-week trial with 8 team members. Decision expected by March 15.\n\n**Flux Labs** — Ready to expand from 12 to 50 seats if mobile app ships by Q2. Their distributed team relies heavily on async communication and needs mobile access for meeting summaries on the go. Budget already approved internally.`,
        sources: [
          { type: "zoom", label: "Vantage Follow-up" },
          { type: "teams", label: "Flux Labs Check-in" },
          { type: "outlook", label: "Nexus Pricing Thread" },
          { type: "linear", label: "MOBILE-34: Mobile app roadmap" },
        ],
      },
    ],
  },
  {
    scanSteps: [
      {
        label: "Parsing 5 standup transcripts from Microsoft Teams...",
        duration: 3200,
        icons: ["ms-teams"],
      },
      {
        label: "Scanning 8 Linear tickets...",
        duration: 2600,
        icons: ["linear"],
      },
      {
        label: "Reading 4 Teams channel threads...",
        duration: 2400,
        icons: ["ms-teams"],
      },
    ],
    paragraphs: [
      {
        id: "p2-0",
        content: `**Engineering Blockers**\n\nAuth service refactor (AUTH-142) is blocking 3 downstream features: SSO support, team permissions, and audit logging. Jordan estimates 4 more days of work, but the scope expanded after discovering legacy session handling that needs migration. Mobile push notification reliability was reported in 2 customer calls this week — the root cause is a race condition in the notification queue.\n\nThe database migration for the new analytics schema is 80% complete but hit an issue with backward compatibility on the reporting API. Pavel proposed a dual-write strategy to avoid downtime, adding approximately 2 days to the timeline.\n\nOn the positive side, the CI/CD pipeline improvements shipped this week, reducing build times from 12 minutes to 4 minutes. This is already improving developer velocity across the team.`,
        sources: [
          { type: "linear", label: "AUTH-142: Refactor auth service" },
          { type: "teams", label: "#engineering" },
          { type: "github", label: "PR #387: Push notification fix" },
          { type: "asana", label: "Sprint 14 Board" },
        ],
      },
      {
        id: "p2-1",
        content: `**Sales & Product Blockers**\n\nLack of SOC 2 Type II certification is blocking 4 enterprise deals worth a combined $380K ARR. The audit is scheduled to begin March 10 with completion targeted for end of April. In the meantime, Raj is drafting a security whitepaper that may help unblock 2 of the 4 deals.\n\nNo self-serve onboarding flow is slowing SMB pipeline velocity — current median time-to-first-value is 6 days, and the target is under 24 hours. The new onboarding wizard designs are in Notion and need engineering sign-off by Friday.\n\nFigma designs for the v2 dashboard are still in review (due: this Friday). The design team flagged that the data visualization components need accessibility improvements before handoff to engineering.`,
        sources: [
          { type: "teams", label: "GTM Strategy Call" },
          { type: "teams", label: "#product" },
          { type: "linear", label: "PROD-89: Self-serve onboarding" },
          { type: "sharepoint", label: "Onboarding Wizard Spec" },
        ],
      },
    ],
  },
  {
    scanSteps: [
      {
        label: "Searching 8 meeting notes from Microsoft Teams...",
        duration: 2600,
        icons: ["ms-teams"],
      },
      {
        label: "Searching 4 meeting notes from Zoom...",
        duration: 2400,
        icons: ["zoom"],
      },
      {
        label: "Reading 6 Teams channel threads...",
        duration: 2600,
        icons: ["ms-teams"],
      },
      {
        label: "Pulling documents from SharePoint...",
        duration: 2200,
        icons: ["sharepoint"],
      },
      {
        label: "Scanning Linear updates...",
        duration: 2000,
        icons: ["linear"],
      },
    ],
    paragraphs: [
      {
        id: "p3-0",
        content: `**Recent Updates**\n\nThe new analytics dashboard shipped on Monday and is seeing strong adoption — 78% of active users accessed it in the first 48 hours. Early feedback highlights the real-time data refresh as the standout feature, with 3 customers already asking about API access to the analytics data.\n\nMobile app beta went out to 25 testers on Wednesday. Initial feedback is overwhelmingly positive — testers rated the meeting summary experience 4.6/5 and the push notification reliability 4.2/5. The main request is offline access for meeting transcripts, which is already on the Q2 roadmap.\n\nThe TechConnect launch prep is 85% complete. Press kit is finalized, demo booth is confirmed at TechConnect Create, and the pre-launch teaser campaign is scheduled for March 10. 12 publications and 4 podcast contacts have been briefed.`,
        sources: [
          { type: "teams", label: "#launches" },
          { type: "github", label: "v2.4.0 Release" },
          { type: "teams", label: "Weekly All-Hands" },
          { type: "sharepoint", label: "TechConnect Press Kit" },
        ],
      },
      {
        id: "p3-1",
        content: `**Team Highlights**\n\nDesign team completed the onboarding redesign ahead of schedule — the new flow reduces steps from 8 to 4 and includes interactive tooltips. User testing showed a 35% improvement in completion rate compared to the current flow.\n\nBackend team resolved the N+1 query issue (PERF-201) that was causing 3-second page loads on the dashboard — now under 200ms. This fix also reduced database CPU utilization by 40%, which should delay the need for a database upgrade by several months.\n\nTwo new enterprise customers signed this week: Meridian Corp ($120K ARR, 45 seats) and Atlas Group ($85K ARR, 30 seats). Both cited meeting intelligence depth and the organizational memory features as key differentiators against competitors.`,
        sources: [
          { type: "linear", label: "PERF-201: N+1 query fix" },
          { type: "teams", label: "#wins" },
          { type: "outlook", label: "Atlas Group Contract" },
          { type: "outlook", label: "Onboarding Kickoffs" },
        ],
      },
    ],
  },
  // Index 4: Oracle migration timeline
  {
    scanSteps: [
      {
        label: "Searching Oracle Migration project board on Monday.com...",
        duration: 3200,
        icons: ["monday-com"],
      },
      {
        label: "Pulling 9 meeting transcripts from Microsoft Teams...",
        duration: 2800,
        icons: ["ms-teams"],
      },
      {
        label: "Pulling 5 meeting transcripts from Zoom...",
        duration: 2400,
        icons: ["zoom"],
      },
      {
        label:
          "Reading vendor delivery logs and SLA documents from SharePoint...",
        duration: 3400,
        icons: ["sharepoint"],
      },
      {
        label: "Scanning escalation emails in Outlook...",
        duration: 3000,
        icons: ["outlook"],
      },
      {
        label: "Cross-referencing ServiceNow tickets with project timeline...",
        duration: 3200,
        icons: ["service-now"],
      },
    ],
    paragraphs: [
      {
        id: "oracle-0",
        content: `**Oracle Migration Project — Delay Analysis**\n\nThe Oracle migration is currently **5 weeks behind the original deadline**. The project was scheduled to complete by March 14 but is now projected for April 18. The root cause is a recurring pattern of missed vendor deliveries from DataBridge Solutions, the third-party data migration vendor.\n\nSentra traced the delay through 14 meetings, 23 email threads, and 8 Monday.com status updates to reconstruct the full timeline below.`,
        sources: [
          { type: "teams", label: "Oracle Migration Kickoff (Jan 13)" },
          {
            type: "sharepoint",
            label: "Oracle_Migration_Project_Plan_v2.docx",
          },
          { type: "outlook", label: "DataBridge SLA Agreement" },
        ],
        chart: {
          type: "bar",
          title: "Oracle Migration — Cumulative Delay by Week (Business Days)",
          data: [
            { week: "Wk 1-2", planned: 0, actual: 0 },
            { week: "Wk 3", planned: 0, actual: 5 },
            { week: "Wk 4", planned: 0, actual: 5 },
            { week: "Wk 5", planned: 0, actual: 10 },
            { week: "Wk 6", planned: 0, actual: 15 },
            { week: "Wk 7-8", planned: 0, actual: 25 },
          ],
          dataKeys: [
            {
              key: "actual",
              label: "Cumulative Delay (days)",
              color: "hsl(0, 70%, 55%)",
            },
          ],
          xAxisKey: "week",
        },
      },
    ],
    timeline: [
      {
        week: 1,
        label: "Week 1",
        dateRange: "Jan 13 – Jan 17",
        summary: "Project kicked off on schedule. Vendor onboarded.",
        events: [
          {
            title: "Project kickoff and scope alignment",
            detail:
              "Full team alignment on migration scope, timeline, and vendor responsibilities. DataBridge Solutions confirmed extraction delivery for Feb 3.",
            involved: ["Mark Kim", "James Whitfield", "DataBridge PM"],
            sources: [
              { type: "teams", label: "Oracle Migration Kickoff (Jan 13)" },
              {
                type: "sharepoint",
                label: "Oracle_Migration_Project_Plan_v2.docx",
              },
            ],
          },
          {
            title: "Vendor SLA agreement signed",
            detail:
              "DataBridge signed delivery SLA with 5-day extraction turnaround. Penalty clauses included for delays exceeding 10 business days.",
            involved: ["James Whitfield", "DataBridge Legal"],
            sources: [
              { type: "outlook", label: "DataBridge SLA Agreement (Jan 15)" },
            ],
          },
        ],
      },
      {
        week: 2,
        label: "Week 2",
        dateRange: "Jan 20 – Jan 24",
        summary: "Environment setup completed. On track.",
        events: [
          {
            title: "Staging environment provisioned",
            detail:
              "Engineering team completed Oracle staging environment setup and ran connectivity tests with DataBridge's extraction endpoint.",
            involved: ["Engineering Team", "James Whitfield"],
            sources: [
              { type: "teams", label: "Oracle Migration Standup (Jan 22)" },
            ],
          },
        ],
      },
      {
        week: 3,
        label: "Week 3",
        dateRange: "Jan 27 – Jan 31",
        summary: "Vendor missed first delivery deadline. Engineering blocked.",
        highlight: "critical",
        events: [
          {
            title: "Missed vendor delivery — data extraction",
            detail:
              "DataBridge Solutions missed the Feb 3 extraction delivery. Vendor cited 'unexpected schema complexity' in the legacy Oracle database. Engineering team fully blocked — cannot begin integration or data validation without extraction output.",
            involved: ["DataBridge PM", "James Whitfield"],
            sources: [
              {
                type: "outlook",
                label: "DataBridge — Revised Delivery Schedule",
              },
              { type: "sharepoint", label: "DataBridge_SLA_Tracking.xlsx" },
            ],
          },
          {
            title: "Escalation delayed by 7 days",
            detail:
              "Project lead did not escalate the missed deadline until Feb 10, a full week after it was due. No automated tracking was in place to catch the delay.",
            involved: ["James Whitfield"],
            sources: [
              { type: "teams", label: "Oracle Migration Standup (Feb 10)" },
            ],
          },
        ],
      },
      {
        week: 4,
        label: "Week 4",
        dateRange: "Feb 3 – Feb 7",
        summary: "Still waiting on vendor. Engineering idle.",
        events: [
          {
            title: "Engineering team reassigned temporarily",
            detail:
              "With no vendor delivery in sight, engineering team was pulled to other projects. Context-switch cost estimated at 1 week when delivery arrives.",
            involved: ["Engineering Team", "James Whitfield"],
            sources: [
              { type: "teams", label: "Engineering Capacity Planning (Feb 5)" },
            ],
          },
        ],
      },
      {
        week: 5,
        label: "Week 5",
        dateRange: "Feb 10 – Feb 14",
        summary: "Vendor missed second deadline. No escalation for 16 days.",
        highlight: "critical",
        events: [
          {
            title: "Missed vendor delivery — transformed data set",
            detail:
              "DataBridge missed the revised delivery deadline again on Feb 17 for the transformed data set needed for integration testing. Vendor reported 'resource constraints' and provided no revised ETA for 5 business days.",
            involved: ["DataBridge PM", "James Whitfield"],
            sources: [
              { type: "outlook", label: "Re: DataBridge Delivery Status" },
              {
                type: "sharepoint",
                label: "Oracle_Migration_Risk_Register.xlsx",
              },
            ],
          },
          {
            title: "Escalation delayed by 16 days",
            detail:
              "Project lead did not escalate to Mark or senior leadership until Mar 5 — 16 days after the second missed deadline. Same pattern as Week 3.",
            involved: ["James Whitfield"],
            sources: [
              { type: "teams", label: "Oracle Migration Standup (Mar 5)" },
            ],
          },
        ],
      },
      {
        week: 6,
        label: "Week 6",
        dateRange: "Feb 17 – Feb 21",
        summary: "Vendor data finally received. Ramp-up period began.",
        events: [
          {
            title: "Data delivery received from DataBridge",
            detail:
              "Vendor delivered transformed data set on Feb 28. Engineering team needed a full week to context-switch back and validate the data before beginning integration testing.",
            involved: ["Engineering Team", "DataBridge PM"],
            sources: [
              {
                type: "outlook",
                label: "DataBridge — Delivery Confirmation (Feb 28)",
              },
            ],
          },
        ],
      },
      {
        week: 7,
        label: "Week 7",
        dateRange: "Feb 24 – Feb 28",
        summary: "Integration testing started. Timeline revised to April 18.",
        events: [
          {
            title: "Revised go-live date set: April 18",
            detail:
              "After cumulative 5-week delay, project timeline officially revised. Original March 14 go-live pushed to April 18. Any further vendor delays would push into Q3.",
            involved: ["Mark Kim", "James Whitfield", "Engineering Team"],
            sources: [
              { type: "teams", label: "Oracle Migration Weekly (Mar 10)" },
              {
                type: "sharepoint",
                label: "Oracle_Migration_Status_Report_W10.docx",
              },
            ],
          },
        ],
      },
      {
        week: 8,
        label: "Week 8",
        dateRange: "Mar 3 – Mar 7",
        summary: "Integration testing in progress. Monitoring vendor closely.",
        events: [
          {
            title: "Integration testing phase — 60% complete",
            detail:
              "Engineering team progressing through integration testing. No new vendor delays but team flagged that next DataBridge delivery (UAT data) is due Mar 21 — needs active monitoring.",
            involved: ["Engineering Team", "James Whitfield"],
            sources: [
              { type: "teams", label: "Oracle Migration Weekly (Mar 24)" },
              {
                type: "sharepoint",
                label: "Oracle_Migration_Status_Report_W12.docx",
              },
            ],
          },
        ],
      },
    ],
    actionSuggestion: {
      prompt:
        "Whenever a vendor delivery deadline passes without a confirmed completion in email or Teams, flag it immediately and generate a risk report.",
      actionId: "vendor-delay-tracker",
      actionName: "Vendor Delay Tracker",
    },
  },
];

export const getMockResponse = (index: number): MockResponse =>
  MOCK_RESPONSES[index % MOCK_RESPONSES.length];

/* ── Document Flow Data ── */

export interface PrdScanStep {
  label: string;
  duration: number;
  icons?: string[];
}

/* ── Engineering Manager: PRD Flow ── */

export const EM_SCAN_STEPS: PrdScanStep[] = [
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

export const EM_CONTENT = `# Product Requirements Document: Auth Service Refactor & SSO Support

## Overview

Based on discussions from the Engineering Sprint Retro (Mar 3), Pavel/Leo 1:1 (Mar 1), and 12 related Linear tickets, this PRD outlines the requirements for refactoring the authentication service to support enterprise SSO, team permissions, and audit logging.

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

*Sources: Engineering Sprint Retro, Pavel/Leo 1:1, LINEAR AUTH-142, LINEAR PROD-89, GitHub PR #387, #engineering Teams, Notion Engineering Specs*`;

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

*Sources: Meridian Corp deal memo, GTM Strategy Sync, Vantage Discovery Call notes, Q1 Deal Tracker (Notion), #enterprise-deals Teams, SharePoint financial disclosures*`;

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
    label: "Scanning #sentra-adoption Teams channel (47 messages this week)...",
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
    label: "Scanning #it-ops and #ai-tools-evaluation Teams channels...",
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

*Sources: Sentra x JPM Pilot Sync (Mar 5), IT Infrastructure Call (Mar 7), Sentra QBR (Mar 3), #sentra-adoption Teams, #it-ops Teams, Weekly_Adoption_Metrics_W10.xlsx, Sentra_Pricing_Structure_2026.xlsx*`;

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

/* ── JPM: Secondary Offering Memo Flow ── */

export const SECONDARY_OFFERING_SOURCES: SourceRef[] = [
  {
    type: "email",
    label: "Margaret Liu — Q3 Actuals & FY26 Forecast (Mar 24)",
  },
  { type: "sharepoint", label: "NovaBridge_Capital_Financial_Model_v4.xlsx" },
  { type: "sharepoint", label: "NovaBridge_Deal_Memo_Draft.docx" },
  { type: "zoom", label: "NovaBridge Capital — Advisory Check-in (Feb 17)" },
  { type: "teams", label: "IB Pipeline Review (Mar 26)" },
];

export const SECONDARY_OFFERING_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling Q3 actuals from Margaret Liu email attachment...",
    duration: 3200,
    icons: ["outlook"],
  },
  {
    label:
      "Reading NovaBridge_Capital_Financial_Model_v4.xlsx from SharePoint...",
    duration: 3800,
    icons: ["sharepoint", "excel"],
  },
  {
    label:
      "Scanning 14 comparable secondary transactions from the last 12 months...",
    duration: 4000,
    icons: ["salesforce"],
  },
  {
    label: "Reviewing NovaBridge_Deal_Memo_Draft.docx from SharePoint...",
    duration: 3200,
    icons: ["sharepoint", "word"],
  },
  {
    label: "Pulling transcript from NovaBridge Advisory Check-in (Feb 17)...",
    duration: 3000,
    icons: ["zoom"],
  },
  {
    label: "Cross-referencing IB Pipeline Review notes (Mar 26)...",
    duration: 2800,
    icons: ["ms-teams"],
  },
];

export const SECONDARY_OFFERING_CONTENT = `# Preliminary Secondary Offering Memo: NovaBridge Capital

## Company Overview

**NovaBridge Capital** is a mid-market advisory firm with $42M in revenue (FY25A), specializing in M&A advisory and capital markets transactions for technology and financial services companies. The firm has 180 professionals across three offices and has completed 28 transactions in the trailing twelve months.

## Secondary Offering Rationale

David Chen (CEO) is exploring a secondary offering to bring in growth capital while providing partial liquidity to early investors. Key drivers:

1. **Growth acceleration** — NovaBridge has won 8 new mandates in Q1 alone, straining capacity
2. **Competitive positioning** — The Apex-Cobalt merger ($280M) reshapes the mid-market landscape, creating urgency to scale
3. **Talent acquisition** — Need to fund 30+ senior hires across coverage and execution teams
4. **Geographic expansion** — Board has approved a London office contingent on capital raise

## Financial Summary

| Metric | FY24A | FY25A | FY26E | FY27E |
|--------|-------|-------|-------|-------|
| Revenue | $34.2M | $42.0M | $52.5M | $63.0M |
| EBITDA | $8.6M | $11.8M | $15.2M | $19.5M |
| EBITDA Margin | 25.1% | 28.1% | 29.0% | 31.0% |
| Revenue per Professional | $210K | $233K | $262K | $292K |
| Transactions Completed | 22 | 28 | 34 | 40 |

Revenue is tracking 8% above the prior forecast (per Margaret Liu's updated FY26 projections received Mar 24), driven by two new enterprise advisory mandates signed in February.

## Comparable Transactions (Trailing 12 Months)

| Company | Transaction | Date | EV/Revenue | EV/EBITDA |
|---------|------------|------|------------|-----------|
| Meridian Advisory | Secondary | Q4 2025 | 3.8x | 14.2x |
| Atlas Partners | Minority Sale | Q3 2025 | 4.1x | 15.8x |
| Cobalt Advisory | Acquisition by Apex | Q1 2026 | 4.5x | 16.1x |
| Evergreen Capital | Secondary | Q1 2026 | 3.6x | 13.5x |
| Summit Advisory | Minority Sale | Q2 2025 | 3.2x | 12.8x |
| **Median** | | | **3.8x** | **14.2x** |

## Indicative Valuation

Based on FY26E financials and comparable transaction multiples:

- **Bear case (3.2x revenue):** $168M
- **Base case (3.8x revenue):** $200M
- **Bull case (4.5x revenue):** $236M

At the base case, a 25% secondary stake implies a $50M raise, providing both growth capital and early-investor liquidity.

## Key Considerations

1. **Board composition** — David raised concerns about governance structure post-offering; governance advisor introduction still pending (Mark committed Feb 17)
2. **Timing** — Apex-Cobalt merger creates a favorable market window; delaying risks valuation compression
3. **Investor appetite** — Three institutional investors have expressed preliminary interest via Nathan Lim's coverage network

## Recommended Next Steps

1. Complete governance advisor introduction this week
2. Finalize financial model with updated Q3 actuals
3. Prepare investor-ready materials for preliminary outreach
4. Schedule board presentation for April 14

---

*Sources: Margaret Liu email (Mar 24), NovaBridge Financial Model v4 (SharePoint), Deal Memo Draft (SharePoint), Advisory Check-in transcript (Feb 17), IB Pipeline Review (Mar 26)*`;

export const SECONDARY_OFFERING_BUILD_STEPS: PrdScanStep[] = [
  {
    label: "Pulling revenue and EBITDA projections from financial model...",
    duration: 2800,
    icons: ["excel", "sharepoint"],
  },
  {
    label: "Building comparable transaction table from deal database...",
    duration: 3200,
    icons: ["salesforce"],
  },
  {
    label: "Calculating indicative valuation range across scenarios...",
    duration: 3000,
  },
  {
    label: "Compiling key considerations from meeting transcripts...",
    duration: 3500,
    icons: ["zoom", "ms-teams"],
  },
  {
    label: "Formatting memo and verifying source citations...",
    duration: 2500,
  },
];
