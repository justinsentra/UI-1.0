import type { ReportDetail } from "@/types";

export const reportDetails: Record<string, ReportDetail> = {
  "mcgi-radar-competitive-1": {
    id: "mcgi-radar-competitive-1",
    title: "Competitive CVC Activity — Daily Scan",
    dateRange: "Mar 12, 2026",
    sections: [
      {
        heading: "",
        paragraphs: [
          "SoftBank Vision Fund led a $140M Series C into MemoryAI, a direct competitor to Sentra in the organizational memory space. The round closed yesterday and was flagged across two internal channels. This is significant because MCGI is actively evaluating Sentra for investment — SoftBank's move validates the category but introduces competitive pressure on deal terms and timeline.",
          "Separately, Samsung Next participated in a $45M co-investment round for CarbonGrid's Series A alongside Breakthrough Energy Ventures. MCGI had CarbonGrid in active due diligence for a solo lead position. Samsung's entry changes the cap table dynamics and may compress the window for MCGI to secure favorable terms.",
        ],
        sources: [
          { type: "teams", label: "#mcgi-deal-flow" },
          { type: "teams", label: "#mcgi-market-intel" },
          { type: "zoom", label: "MCGI Daily Standup — Mar 12" },
          { type: "meeting", label: "CarbonGrid — Founder Check-in" },
          { type: "slack", label: "#mcgi-portfolio-updates" },
          { type: "email", label: "PitchBook CVC deal alerts" },
        ],
      },
    ],
    evidence: [
      {
        speaker: "Sunna Mo",
        quote:
          "Just saw the TechCrunch article — SoftBank put $140M into MemoryAI. That's the same category as Sentra. We need to move faster on the investment memo before this changes the competitive landscape.",
        meetingTitle: "#mcgi-deal-flow — Teams Chat",
        meetingDate: "Mar 12, 2026 · 9:14 AM",
        sourceType: "teams",
      },
      {
        speaker: "Ryotaro Nakamura",
        quote:
          "Samsung Next co-invested in CarbonGrid's Series A. We were planning to lead that round. This is a problem — we need to discuss with Mihiro whether our terms still hold or if we need to renegotiate.",
        meetingTitle: "MCGI Daily Standup — Zoom",
        meetingDate: "Mar 12, 2026 · 8:30 AM",
        sourceType: "zoom",
      },
      {
        speaker: "Mihiro Nakamura",
        quote:
          "The CarbonGrid founders said Samsung reached out directly after the M-Lab demo. They're open to MCGI leading but want us to confirm by end of week.",
        meetingTitle: "#mcgi-deal-flow — Teams Chat",
        meetingDate: "Mar 12, 2026 · 10:02 AM",
        sourceType: "teams",
      },
    ],
    sources: [
      { type: "teams", label: "#mcgi-deal-flow" },
      { type: "teams", label: "#mcgi-market-intel" },
      { type: "zoom", label: "MCGI Daily Standup — Mar 12" },
      { type: "meeting", label: "CarbonGrid — Founder Check-in" },
      { type: "slack", label: "#mcgi-portfolio-updates" },
      { type: "email", label: "PitchBook CVC deal alerts" },
    ],
    suggestedActions: [
      {
        icon: "mail",
        label: "Send Sentra investment memo to IC for expedited review",
      },
      {
        icon: "calendar",
        label: "Schedule emergency CarbonGrid terms discussion",
      },
      {
        icon: "clock",
        label: "Set alert for CarbonGrid founder response deadline",
      },
    ],
  },
  "mcgi-rpt-pipeline-1": {
    id: "mcgi-rpt-pipeline-1",
    title: "Deal Flow Pipeline — Week of Mar 3",
    dateRange: "Mar 3 – Mar 10, 2026",
    sections: [
      {
        heading: "Pipeline Overview",
        paragraphs: [
          "MCGI's active pipeline grew to 14 companies this week, up from 11 at the end of February. The increase was driven primarily by strong inbound referral volume (23 new referrals, a 40% increase over the monthly average) and three companies advancing from initial screening to active evaluation.",
          "The pipeline is concentrated in three thesis areas: AI infrastructure and enterprise software (6 companies, 43%), climate technology (5 companies, 36%), and advanced materials (3 companies, 21%). This distribution aligns with the board-approved allocation targets, though climate tech may need to increase to 35% per recent guidance.",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Pipeline Tracker Q1 2026" },
          { type: "email", label: "Inbound referral tracker" },
          { type: "slack", label: "#mcgi-deal-flow" },
          {
            type: "meeting",
            label: "Investment Committee — Q1 Pipeline Review",
          },
        ],
      },
      {
        heading: "Key Pipeline Movements",
        paragraphs: [
          "Three companies were approved by the Investment Committee to advance to full due diligence: Sentra (organizational memory / enterprise AI, pre-seed), CarbonGrid (industrial carbon capture, Series A), and FluxMaterials (battery recycling, seed). All three demonstrate strong alignment with MC business unit needs and represent significant market opportunities.",
          "Sentra is particularly notable as a potential strategic investment — their organizational memory product could be deployed across MC's 1,700+ group companies to preserve institutional knowledge during leadership transitions. The founding team (MIT professor + strong technical co-founder) has secured $5M from a16z Speedrun and already has design partners including teams at SoftBank and Runway.",
          "Two companies were passed on this week: DataMesh (insufficient technical differentiation in the vector database space) and GreenFleet (unit economics don't work without regulatory subsidies that are uncertain post-2027).",
        ],
        sources: [
          {
            type: "meeting",
            label: "Sentra — Product Deep Dive & Strategic Fit",
          },
          {
            type: "meeting",
            label: "CarbonGrid — Technical Due Diligence Review",
          },
          {
            type: "meeting",
            label: "Investment Committee — Q1 Pipeline Review",
          },
          { type: "notion", label: "IC Screening Notes — Mar 7" },
          { type: "google-docs", label: "MCGI Pipeline Tracker Q1 2026" },
        ],
      },
      {
        heading: "Deployment Pacing",
        paragraphs: [
          "Year-to-date capital deployment stands at $48M against the $120M annual target, representing 40% of the annual allocation deployed in the first 10 weeks. If quality deal flow continues at the current pace, the team may need to request an increased allocation for H2 2026 or tighten investment criteria.",
          "Average check size has increased to $6.2M from $4.8M in Q4 2025, reflecting a shift toward slightly later-stage opportunities where MCGI can provide more meaningful strategic value through MC business unit introductions.",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Capital Allocation Model" },
          {
            type: "meeting",
            label: "Investment Committee — Q1 Pipeline Review",
          },
          { type: "sharepoint", label: "MC CVC Annual Deployment Tracker" },
        ],
      },
      {
        heading: "Upcoming Pipeline Activities",
        paragraphs: [
          "Key activities for the coming week include: Sentra investment memo preparation (lead: Sunna Mo), CarbonGrid technical DD with MC industrial team (lead: Mihiro Nakamura), Stanford HAI conference networking (team attendance), and NeuralDB Series B co-investor introductions. The YC W26 demo day scouting plan has been finalized with M-Lab consortium members.",
        ],
        sources: [
          { type: "slack", label: "#mcgi-deal-flow" },
          { type: "google-calendar", label: "MCGI Team Calendar" },
          { type: "email", label: "Stanford HAI invitation" },
          { type: "teams", label: "#m-lab-consortium" },
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Sentra — Due Diligence Summary",
        paragraphs: [
          "Sentra is building organizational memory — a system that captures decision history and context as teams scale. Their interaction-first approach (capturing actors + interactions, deriving decisions and commitments) is differentiated from Glean's aggregation model. Current traction includes design partners at SoftBank, Runway, and Campfire. ICP is Series A/B startups (30-1000 employees). Pre-seed stage, $5M raised from a16z Speedrun and Together Fund.",
          "MC synergy score: HIGH. Potential deployment across MC group companies for cross-cultural knowledge transfer. Additional value as portfolio company tool for MCGI's broader portfolio.",
        ],
      },
      {
        heading: "CarbonGrid — Technical Assessment",
        paragraphs: [
          "CarbonGrid's proprietary polymer membrane achieves 92% CO2 selectivity at ambient temperature, eliminating energy-intensive heating. Independent lab results confirm 40% efficiency improvement over competitors. Unit economics project $78/ton at 10K+ ton annual scale, competitive with EU and Japan carbon credit pricing.",
          "MC synergy score: HIGH. Immediate deployment opportunity across 12-15 cement and steel facilities in MC's industrial portfolio. Hiroshi Tanabe (MC Industrial Materials) has confirmed strong interest from division leadership.",
        ],
      },
    ],
    sources: [
      { type: "meeting", label: "Investment Committee — Q1 Pipeline Review" },
      {
        type: "meeting",
        label: "Sentra — Product Deep Dive & Strategic Fit",
      },
      {
        type: "meeting",
        label: "CarbonGrid — Technical Due Diligence Review",
      },
      { type: "slack", label: "#mcgi-deal-flow" },
      { type: "email", label: "Inbound referral tracker" },
      { type: "google-docs", label: "MCGI Pipeline Tracker Q1 2026" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send pipeline summary to Tokyo HQ" },
      {
        icon: "calendar",
        label: "Schedule Sentra IC vote for next committee meeting",
      },
      { icon: "clock", label: "Set reminder for CarbonGrid site visit" },
    ],
  },
  "mcgi-rpt-portfolio-1": {
    id: "mcgi-rpt-portfolio-1",
    title: "Portfolio Performance — Q1 2026",
    dateRange: "Q1 2026",
    sections: [
      {
        heading: "Portfolio Overview",
        paragraphs: [
          "MCGI's active portfolio comprises 12 companies across AI/enterprise (5), climate tech (4), and advanced materials (3). Combined portfolio revenue grew 34% quarter-over-quarter to $28.4M ARR. Two portfolio companies (NeuralDB and GridScale) are in active fundraising processes for their next rounds.",
          "Portfolio health metrics are strong: 10 of 12 companies are at or above plan on their key milestones, one is tracking slightly behind (EcoSynth — delayed pilot with a key customer), and one is in watch status (QuantumSense — burn rate concerns, runway at 8 months).",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Portfolio Dashboard Q1" },
          { type: "email", label: "Monthly portfolio company reports" },
          { type: "sharepoint", label: "MC CVC Portfolio Metrics" },
        ],
      },
      {
        heading: "Top Performers",
        paragraphs: [
          "NeuralDB continues to be the standout, reaching $1.8M ARR with 25% month-over-month growth. Their enterprise motion is working well with three $100K+ ACV deals closed in February. Planning a $30M Series B for Q3 — MCGI is facilitating Japan market introductions and co-investor connections to JAFCO and Global Brain.",
          "GridScale Energy hit a major milestone with their first utility-scale deployment contract ($4.2M) with a California utility. This validates their grid-scale battery storage technology and positions them well for a Series B in H1 2026.",
        ],
        sources: [
          { type: "meeting", label: "Portfolio Company Check-in — NeuralDB" },
          { type: "meeting", label: "GridScale — Milestone Review" },
          { type: "slack", label: "#mcgi-portfolio-updates" },
          { type: "email", label: "NeuralDB — Feb Board Deck" },
        ],
      },
      {
        heading: "MC Business Unit Engagement",
        paragraphs: [
          "Active MC synergy engagements: NeuralDB → MC IT Infrastructure (pilot evaluation), CarbonGrid → MC Industrial Materials (technical DD complete, commercial discussion initiated), GridScale → MC Power Solutions (joint go-to-market in Southeast Asia under discussion).",
          "Three new synergy opportunities identified this quarter through the M-Lab consortium network. Conversion from introduction to active engagement running at 45%, up from 30% in Q4 2025.",
        ],
        sources: [
          { type: "teams", label: "#mc-synergy-tracking" },
          { type: "meeting", label: "M-Lab Consortium Monthly" },
          { type: "google-docs", label: "MC BU Engagement Tracker" },
        ],
      },
      {
        heading: "Watch List & Risk Factors",
        paragraphs: [
          "QuantumSense requires close monitoring — their burn rate of $850K/month against $6.8M remaining runway gives approximately 8 months. They need to either close their bridge round or significantly reduce burn by Q2. Recommendation: schedule CEO check-in within 2 weeks to assess plan.",
          "Broader market risk: rising interest rates have slowed later-stage funding. Two portfolio companies (Series B+) may face valuation pressure if they need to raise in H2 2026. MCGI should prepare bridge financing scenarios as contingency.",
        ],
        sources: [
          { type: "email", label: "QuantumSense — Monthly Update" },
          { type: "google-docs", label: "MCGI Risk Register Q1" },
          { type: "slack", label: "#mcgi-portfolio-updates" },
        ],
      },
    ],
    sources: [
      { type: "meeting", label: "Portfolio Company Check-in — NeuralDB" },
      { type: "google-docs", label: "MCGI Portfolio Dashboard Q1" },
      { type: "slack", label: "#mcgi-portfolio-updates" },
      { type: "email", label: "Monthly portfolio company reports" },
    ],
    suggestedActions: [
      { icon: "calendar", label: "Schedule QuantumSense CEO check-in" },
      { icon: "mail", label: "Share Q1 portfolio report with MC board" },
      {
        icon: "clock",
        label: "Set reminder for GridScale Series B timeline",
      },
    ],
  },
  "mcgi-rpt-sector-1": {
    id: "mcgi-rpt-sector-1",
    title: "AI Sector Intelligence — March 2026",
    dateRange: "Mar 2026",
    sections: [
      {
        heading: "Market Overview",
        paragraphs: [
          "The enterprise AI market continues to evolve rapidly, with three key trends emerging in Q1 2026: the rise of AI agent frameworks, consolidation in the vector database space, and increasing enterprise demand for AI governance tools.",
          "Total venture funding in enterprise AI reached $12.8B globally in Q1 2026, up 28% year-over-year. However, deal count decreased 15%, indicating a shift toward larger rounds for more mature companies. Seed-stage AI funding actually increased 40%, driven by the agent framework wave.",
        ],
        sources: [
          { type: "email", label: "PitchBook AI sector alerts" },
          { type: "google-docs", label: "AI Sector Tracking Sheet" },
          { type: "slack", label: "#mcgi-market-intel" },
        ],
      },
      {
        heading: "AI Agent Frameworks — Key Investment Theme",
        paragraphs: [
          "AI agent orchestration platforms have emerged as the fastest-growing category in enterprise AI. The M-Lab consortium independently identified this as a priority scouting area, with three member companies flagging urgent enterprise demand.",
          "Key players to watch: Anthropic (Claude Code, agent SDK), LangChain (LangGraph), CrewAI, and several YC W26 batch companies. The market is pre-consolidation, creating a window for strategic investment in differentiated approaches.",
          "MCGI thesis: Agent frameworks that focus on enterprise-grade reliability, auditability, and integration with existing business processes will win over general-purpose orchestration tools. This aligns with MC business unit needs for automation that works within Japanese corporate governance structures.",
        ],
        sources: [
          { type: "meeting", label: "M-Lab Consortium Monthly" },
          { type: "notion", label: "Agent Framework Landscape Map" },
          { type: "email", label: "YC W26 batch scouting notes" },
          { type: "google-docs", label: "MCGI Investment Thesis — AI Agents" },
        ],
      },
      {
        heading: "Competitive CVC Landscape",
        paragraphs: [
          "Notable competitor investments this month: SoftBank Vision Fund led a $200M round in AgentOS (AI agent platform), Samsung Next invested in three AI infrastructure companies totaling $45M, and Intel Capital made a strategic investment in a chip-design AI startup.",
          "MCGI maintains differentiated positioning through the MC business unit synergy model — no other CVC can offer immediate access to 1,700+ group companies across 90 countries for customer validation and commercial deployment.",
        ],
        sources: [
          { type: "email", label: "PitchBook CVC deal alerts" },
          { type: "slack", label: "#mcgi-market-intel" },
          { type: "teams", label: "#mcgi-competitive-intel" },
        ],
      },
    ],
    sources: [
      { type: "meeting", label: "M-Lab Consortium Monthly" },
      { type: "slack", label: "#mcgi-market-intel" },
      { type: "google-docs", label: "AI Sector Tracking Sheet" },
      { type: "email", label: "PitchBook AI sector alerts" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Share AI agent thesis with Tokyo team" },
      {
        icon: "calendar",
        label: "Schedule deep dive on agent framework startups",
      },
      { icon: "clock", label: "Set alert for YC W26 demo day" },
    ],
  },
};
