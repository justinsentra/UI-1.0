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
  "mcgi-rpt-pipeline-2": {
    id: "mcgi-rpt-pipeline-2",
    title: "Deal Flow Pipeline — Week of Feb 24",
    dateRange: "Feb 24 – Mar 2, 2026",
    sections: [
      {
        heading: "Pipeline Summary",
        paragraphs: [
          "MCGI's active pipeline stands at 11 companies entering the final week of February, reflecting a slight contraction from 13 at the start of the month after two companies were moved to pass status following Investment Committee review. The current distribution skews toward AI infrastructure (5 companies, 45%) and climate tech (4 companies, 36%), with advanced materials rounding out the pipeline at 2 companies (18%).",
          "Despite the pipeline contraction in active names, the quality of companies under evaluation has improved. Average founding team strength score (an internal MCGI metric combining academic pedigree, domain experience, and prior exits) rose to 8.2 out of 10, up from 7.6 in January. This suggests the screening process refinements introduced at the start of Q1 are filtering more effectively.",
          "Capital deployment year-to-date sits at $38M against the $120M annual target. The team is on track but will need to accelerate commitments in March to maintain even quarterly pacing, particularly as two Series A opportunities (CarbonGrid and NeuralDB follow-on) are expected to close by mid-March.",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Pipeline Tracker Q1 2026" },
          { type: "slack", label: "#mcgi-deal-flow" },
          { type: "sharepoint", label: "MC CVC Annual Deployment Tracker" },
        ],
      },
      {
        heading: "New Inbound Activity",
        paragraphs: [
          "Inbound referral volume was exceptionally strong this week with 18 new referrals received across multiple channels. The M-Lab consortium network contributed 11 referrals, representing the highest single-week volume from this channel since the consortium's formation. Companies referred through M-Lab tend to have higher conversion rates (35% reach screening vs. 12% for cold inbound), making this a valuable leading indicator for pipeline growth in March.",
          "The Stanford Energy & Climate Conference (Feb 25–26) generated 7 additional inbound connections. Sunna Mo and Ryotaro Nakamura attended and flagged three companies as particularly promising: ThermoVault (industrial heat storage), SynthCarbon (direct air capture with novel sorbent), and AgriSense (precision agriculture AI). Initial screening calls have been scheduled for the first week of March.",
          "Of the 18 total referrals, 6 have been prioritized for immediate screening based on thesis alignment and market timing. The remaining 12 will be triaged during the Monday pipeline review meeting.",
        ],
        sources: [
          { type: "email", label: "Inbound referral tracker" },
          { type: "teams", label: "#m-lab-consortium" },
          { type: "meeting", label: "Stanford Energy & Climate Conference" },
          { type: "slack", label: "#mcgi-deal-flow" },
        ],
      },
      {
        heading: "Key Pipeline Movements",
        paragraphs: [
          "Two companies advanced from initial screening to active evaluation this week. FluxMaterials (battery recycling, seed stage) was approved by the screening committee after a strong technical presentation demonstrating their proprietary hydrometallurgical process. Their unit economics at pilot scale are compelling — 60% gross margin on recovered lithium and cobalt — and MC's metals trading division has expressed interest in an offtake partnership.",
          "GridScale Energy (grid-scale battery storage, Series A) also moved to active evaluation following completion of preliminary technical due diligence. Their vanadium redox flow battery technology shows promising cycle life data (>15,000 cycles with <5% degradation), and the founding team includes two former Tesla Energy engineers with deep expertise in utility-scale deployments.",
          "One company was passed this week: DataVault (enterprise data management). While the team was strong, the competitive landscape in enterprise data management is crowded, and DataVault's differentiation around compliance automation was deemed insufficient relative to established players like Informatica and Collibra. The IC recommended monitoring for a potential future entry if they demonstrate stronger product-market fit.",
        ],
        sources: [
          { type: "meeting", label: "FluxMaterials — Technical Screening" },
          { type: "meeting", label: "GridScale — Preliminary DD Review" },
          { type: "notion", label: "IC Screening Notes — Feb 26" },
          { type: "google-docs", label: "MCGI Pipeline Tracker Q1 2026" },
        ],
      },
      {
        heading: "Upcoming Activities",
        paragraphs: [
          "The coming week is dense with pipeline activity. Priority items include: completing the CarbonGrid technical due diligence site visit (scheduled for Mar 3 at their Oakland pilot facility), finalizing the Sentra investment memo draft for IC pre-read, and conducting initial screening calls with the three Stanford conference referrals. Mihiro Nakamura will lead the CarbonGrid visit alongside an engineer from MC Industrial Materials.",
          "The team is also preparing for the YC W26 batch preview, with scouting assignments distributed across the team. MCGI has secured early access to 8 companies in the AI and climate categories through the M-Lab consortium relationship with YC partners. A scouting debrief is scheduled for Mar 5.",
        ],
        sources: [
          { type: "google-calendar", label: "MCGI Team Calendar" },
          { type: "slack", label: "#mcgi-deal-flow" },
          { type: "teams", label: "#m-lab-consortium" },
          { type: "email", label: "YC W26 early access list" },
        ],
      },
    ],
    drillDowns: [
      {
        heading: "FluxMaterials — Screening Summary",
        paragraphs: [
          "FluxMaterials is developing a hydrometallurgical battery recycling process that recovers lithium, cobalt, and nickel at significantly higher purity (99.5%+) than conventional pyrometallurgical methods. Seed stage, raising $8M led by DCVC with MCGI considering a $3M co-invest. Founding team includes a Stanford materials science PhD and a former Redwood Materials operations lead.",
          "MC synergy score: HIGH. MC Metals Trading has confirmed interest in an offtake agreement for recovered materials, and MC's automotive portfolio companies represent a potential supply chain for end-of-life battery feedstock. This could create a closed-loop recycling model within the MC ecosystem.",
        ],
      },
    ],
    sources: [
      { type: "google-docs", label: "MCGI Pipeline Tracker Q1 2026" },
      { type: "email", label: "Inbound referral tracker" },
      { type: "slack", label: "#mcgi-deal-flow" },
      { type: "teams", label: "#m-lab-consortium" },
      { type: "meeting", label: "Stanford Energy & Climate Conference" },
    ],
    suggestedActions: [
      {
        icon: "calendar",
        label: "Confirm CarbonGrid site visit logistics with MC Industrial",
      },
      {
        icon: "mail",
        label: "Distribute YC W26 scouting assignments to team",
      },
      {
        icon: "clock",
        label: "Set reminder for Stanford referral screening calls",
      },
    ],
  },
  "mcgi-rpt-portfolio-2": {
    id: "mcgi-rpt-portfolio-2",
    title: "Portfolio Performance — Q4 2025",
    dateRange: "Q4 2025",
    sections: [
      {
        heading: "Portfolio Overview",
        paragraphs: [
          "MCGI's active portfolio at the close of Q4 2025 comprised 10 companies across three core thesis areas: AI and enterprise software (4 companies), climate technology (3 companies), and advanced materials (3 companies). Combined portfolio revenue reached $21.2M ARR, representing 28% quarter-over-quarter growth driven primarily by NeuralDB's breakout enterprise traction and GridScale Energy's first commercial contract.",
          "Total capital deployed by MCGI across the portfolio stands at $62M, with an aggregate portfolio MOIC of 1.4x based on latest round valuations. The portfolio is young — average holding period is 14 months — so markup-driven returns are expected to accelerate as companies reach Series B milestones in 2026.",
          "Portfolio health improved relative to Q3: 8 of 10 companies are at or above plan on key milestones. Two companies require active monitoring (QuantumSense and EcoSynth), though neither is in critical status. The overall portfolio risk profile is moderate, with concentration risk in AI/enterprise being the primary concern flagged by the IC.",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Portfolio Dashboard Q4 2025" },
          { type: "sharepoint", label: "MC CVC Portfolio Metrics" },
          { type: "email", label: "Q4 portfolio company reports" },
        ],
      },
      {
        heading: "Top Performers",
        paragraphs: [
          "NeuralDB was the standout performer in Q4, reaching $1.2M ARR — a 3x increase from $400K at the start of the quarter. This inflection was driven by the launch of their enterprise tier in October and three landmark deals: a $120K ACV contract with a Fortune 500 financial services firm, a $95K deployment with a Japanese logistics company (introduced through MC's supply chain division), and a $80K deal with a Bay Area tech company.",
          "The MC-facilitated introduction to the Japanese logistics company is a proof point for MCGI's strategic value model. NeuralDB's CEO credited the warm introduction and MC's endorsement as the decisive factors in closing the deal within 6 weeks — half their typical enterprise sales cycle. This success has generated interest from two additional MC group companies for pilot evaluations in Q1 2026.",
          "GridScale Energy also delivered strong results, completing their pilot deployment with a regional California utility and receiving a letter of intent for a full-scale deployment worth $4.2M. Their technology performance exceeded specifications, with the vanadium redox flow battery achieving 87% round-trip efficiency over the 90-day pilot period.",
        ],
        sources: [
          { type: "meeting", label: "NeuralDB — Q4 Board Meeting" },
          { type: "meeting", label: "GridScale — Pilot Results Review" },
          { type: "email", label: "NeuralDB — Q4 Board Deck" },
          { type: "slack", label: "#mcgi-portfolio-updates" },
        ],
      },
      {
        heading: "MC Business Unit Engagement",
        paragraphs: [
          "Q4 saw a meaningful acceleration in MC business unit engagement with portfolio companies. Total active synergy engagements increased from 5 to 8, with 3 new introductions converting to pilot evaluations. The conversion rate from introduction to active engagement improved to 30%, up from 22% in Q3, reflecting better matching processes between portfolio capabilities and BU needs.",
          "Key engagements: NeuralDB with MC IT Infrastructure (pilot evaluation for group-wide deployment), CarbonGrid with MC Industrial Materials (technical assessment for cement plant integration), and a new engagement between PolymerX (advanced materials portfolio company) and MC Chemicals for a joint development agreement on biodegradable packaging materials.",
          "The M-Lab consortium also facilitated 4 cross-portfolio introductions between MCGI companies and portfolio companies of other consortium CVCs, creating potential partnership and customer relationships outside the MC ecosystem.",
        ],
        sources: [
          { type: "teams", label: "#mc-synergy-tracking" },
          { type: "meeting", label: "MC BU Quarterly Synergy Review" },
          { type: "google-docs", label: "MC BU Engagement Tracker" },
          { type: "notion", label: "M-Lab Cross-Portfolio Introductions" },
        ],
      },
      {
        heading: "Watch List",
        paragraphs: [
          "QuantumSense remains on the watch list entering Q1 2026. Revenue growth stalled at $180K ARR as their primary customer segment (semiconductor fabs) delayed purchasing decisions amid an industry-wide capex slowdown. Burn rate is $850K/month with approximately 10 months of runway remaining at end of Q4. The CEO has initiated conversations with three potential bridge investors and is exploring a pivot toward pharmaceutical quality inspection, where the technology shows promising early results.",
          "EcoSynth experienced a setback when their planned pilot with a major Japanese chemical company was delayed from November to February 2026 due to the customer's internal reorganization. While the pilot is still expected to proceed, the delay pushes their Series A fundraise timeline back by one quarter. MCGI is monitoring closely but the underlying technology and market opportunity remain intact.",
        ],
        sources: [
          { type: "email", label: "QuantumSense — Q4 Update" },
          { type: "email", label: "EcoSynth — Pilot Delay Notification" },
          { type: "google-docs", label: "MCGI Risk Register Q4 2025" },
          { type: "slack", label: "#mcgi-portfolio-updates" },
        ],
      },
    ],
    sources: [
      { type: "google-docs", label: "MCGI Portfolio Dashboard Q4 2025" },
      { type: "meeting", label: "NeuralDB — Q4 Board Meeting" },
      { type: "email", label: "Q4 portfolio company reports" },
      { type: "slack", label: "#mcgi-portfolio-updates" },
      { type: "sharepoint", label: "MC CVC Portfolio Metrics" },
    ],
    suggestedActions: [
      {
        icon: "mail",
        label: "Share Q4 portfolio report with MC Investment Division",
      },
      {
        icon: "calendar",
        label: "Schedule QuantumSense bridge financing strategy call",
      },
      {
        icon: "clock",
        label: "Set reminder for EcoSynth pilot kickoff in February",
      },
    ],
  },
  "mcgi-rpt-climate-1": {
    id: "mcgi-rpt-climate-1",
    title: "Climate Tech Landscape — Q1 2026",
    dateRange: "Q1 2026",
    sections: [
      {
        heading: "Market Overview",
        paragraphs: [
          "Global climate tech venture funding reached $9.4B in Q1 2026, a 22% increase year-over-year and a notable reversal of the mid-2024 slowdown. Growth-stage deals (Series B+) drove the majority of capital deployed, but early-stage activity is also accelerating — seed and Series A climate deals increased 35% by count, signaling a healthy pipeline of emerging companies for MCGI's investment focus.",
          "The funding recovery is unevenly distributed across sub-sectors. Carbon management (capture, utilization, and storage) attracted $2.8B, up 60% year-over-year, buoyed by expanding compliance markets in the EU, Japan, and California. Grid-scale energy storage received $2.1B as utilities accelerate procurement ahead of renewable portfolio standard deadlines. Battery recycling and circular economy startups attracted $1.2B, a category that barely existed two years ago.",
          "Geographically, the US remains the dominant market (55% of global funding), but Japan and Southeast Asia are emerging as significant growth markets. Japan's Green Transformation (GX) policy framework, backed by ¥20 trillion in public-private investment commitments, is creating substantial demand for climate technologies that align with MCGI's portfolio strategy and MC's operational footprint.",
        ],
        sources: [
          { type: "email", label: "PitchBook Climate Tech Q1 Report" },
          { type: "google-docs", label: "Climate Tech Sector Tracking Sheet" },
          { type: "slack", label: "#mcgi-market-intel" },
          { type: "meeting", label: "M-Lab Climate Tech Working Group" },
        ],
      },
      {
        heading: "Key Sub-Sectors",
        paragraphs: [
          "Carbon capture and storage remains the most active sub-sector and a core MCGI thesis area. Direct air capture (DAC) is receiving outsized attention following Occidental's Stratos plant launch, but industrial point-source capture — where MCGI portfolio company CarbonGrid operates — offers more immediate unit economics. CarbonGrid's polymer membrane approach at $78/ton compares favorably to DAC costs of $400–600/ton, making it viable under Japan's current carbon credit pricing of ¥10,000/ton ($73). Three new competitors have entered the industrial capture space this quarter, but none match CarbonGrid's efficiency data.",
          "Grid-scale energy storage is entering a critical deployment phase. Lithium-ion remains dominant for 2–4 hour duration, but longer-duration storage (8+ hours) is seeing rapid innovation in iron-air, vanadium redox flow, and compressed air technologies. MCGI portfolio company GridScale Energy's vanadium redox approach is well-positioned for the 8–12 hour duration sweet spot that utilities increasingly need for renewable integration. The sub-sector faces supply chain risks around vanadium sourcing, which MC's metals trading relationships could help mitigate.",
          "Battery recycling has emerged as a compelling investment category driven by regulatory mandates (EU Battery Regulation effective February 2027, Japan's equivalent expected by 2028) and the sheer volume of EV batteries reaching end-of-life. MCGI is evaluating FluxMaterials in this space, whose hydrometallurgical process achieves higher recovery rates than incumbent pyrometallurgical methods. The regulatory tailwinds create a durable demand floor that reduces technology risk for investors.",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Climate Tech Thesis — 2026" },
          { type: "meeting", label: "CarbonGrid — Technical DD Review" },
          { type: "email", label: "BloombergNEF Energy Storage Outlook" },
          { type: "notion", label: "Battery Recycling Landscape Map" },
        ],
      },
      {
        heading: "MCGI Thesis Alignment",
        paragraphs: [
          "MCGI's climate tech thesis centers on technologies that can be deployed through MC's industrial network — specifically, solutions targeting heavy industry decarbonization (cement, steel, chemicals), grid infrastructure modernization, and circular economy models for critical minerals. This thesis is differentiated from generalist climate funds because MCGI can offer portfolio companies immediate access to MC's 1,700+ group companies as pilot sites and anchor customers.",
          "The Q1 landscape validates this thesis. The three most active sub-sectors (carbon capture, grid storage, battery recycling) all align with MC business unit capabilities and operational needs. Hiroshi Tanabe from MC Industrial Materials has confirmed that 12–15 cement and steel facilities are ready to evaluate carbon capture solutions, creating a tangible deployment pipeline for CarbonGrid if the investment proceeds.",
          "One area for thesis expansion: agricultural carbon and methane reduction technologies are gaining momentum, particularly in Southeast Asia where MC has extensive agricultural operations. The M-Lab consortium flagged three early-stage companies in this space during the February working group meeting. Recommendation: add agricultural carbon as a secondary thesis area for H2 2026 scouting.",
        ],
        sources: [
          { type: "google-docs", label: "MCGI Climate Tech Thesis — 2026" },
          { type: "meeting", label: "MC Industrial Materials — Synergy Review" },
          { type: "teams", label: "#mc-synergy-tracking" },
          { type: "meeting", label: "M-Lab Climate Tech Working Group" },
        ],
      },
      {
        heading: "Competitive CVC Activity",
        paragraphs: [
          "Corporate venture activity in climate tech intensified in Q1. Breakthrough Energy Ventures (BEV) deployed approximately $380M across 6 deals, maintaining their position as the most active climate-focused fund. Their $140M investment in CarbonSink (DAC technology) is notable as it signals continued conviction in high-cost capture approaches that MCGI views as less commercially viable near-term.",
          "Among peer CVCs, Samsung Next co-invested in CarbonGrid's round (complicating MCGI's solo lead ambitions), Shell Ventures backed two hydrogen storage startups, and BP Ventures made a significant investment in a methane detection satellite company. Japanese CVCs remain underweight in climate tech — SBI Investment and JAFCO have made only two climate deals combined in Q1, leaving MCGI as the most active Japanese CVC in the space.",
          "MCGI's competitive advantage remains the MC operational footprint. While BEV and other financial CVCs can offer larger check sizes, they cannot match MCGI's ability to provide immediate deployment sites and revenue-generating customer relationships through MC group companies. This positioning is particularly compelling for industrial climate tech companies that need enterprise customers to validate their technology at scale.",
        ],
        sources: [
          { type: "email", label: "PitchBook CVC deal alerts" },
          { type: "slack", label: "#mcgi-market-intel" },
          { type: "teams", label: "#mcgi-competitive-intel" },
          { type: "meeting", label: "M-Lab Climate Tech Working Group" },
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Carbon Capture Sub-Sector Deep Dive",
        paragraphs: [
          "The carbon capture market is bifurcating into two distinct investment categories: direct air capture (DAC) and industrial point-source capture. DAC has attracted headline-grabbing mega-rounds (Climeworks, CarbonSink) but faces fundamental cost challenges — current DAC costs of $400–600/ton are 5–8x higher than industrial capture. Point-source capture, where CarbonGrid operates, benefits from higher CO2 concentrations in flue gas and achieves $70–120/ton economics today.",
          "MCGI's view is that point-source capture represents the better near-term investment opportunity because of viable unit economics under existing carbon pricing mechanisms. Japan's GX framework includes carbon pricing escalation to ¥15,000/ton by 2030, which would make point-source capture highly profitable. DAC may become investable at scale by 2030–2032 as costs decline, but current valuations price in optimistic cost curves.",
        ],
      },
      {
        heading: "Japan GX Policy Impact Analysis",
        paragraphs: [
          "Japan's Green Transformation (GX) initiative represents a ¥20 trillion ($150B) public-private investment commitment over 10 years, creating one of the world's largest addressable markets for climate technology. Key policy mechanisms include: a carbon pricing system starting at ¥5,000/ton (2026) escalating to ¥15,000/ton (2030), mandatory emissions reporting for companies above 100K tons CO2/year, and preferential procurement for companies deploying certified green technologies.",
          "For MCGI's portfolio, GX creates direct revenue opportunities. CarbonGrid's technology would be eligible for GX deployment subsidies covering up to 30% of installation costs at MC facilities. GridScale's battery storage qualifies for grid modernization incentives. The policy framework essentially de-risks the Japan market entry for MCGI portfolio companies while providing MC business units with regulatory compliance solutions.",
        ],
      },
    ],
    sources: [
      { type: "email", label: "PitchBook Climate Tech Q1 Report" },
      { type: "google-docs", label: "MCGI Climate Tech Thesis — 2026" },
      { type: "slack", label: "#mcgi-market-intel" },
      { type: "meeting", label: "M-Lab Climate Tech Working Group" },
      { type: "meeting", label: "MC Industrial Materials — Synergy Review" },
    ],
    suggestedActions: [
      {
        icon: "mail",
        label: "Share climate tech landscape brief with MC Strategy Division",
      },
      {
        icon: "calendar",
        label: "Schedule agricultural carbon thesis exploration with M-Lab",
      },
      {
        icon: "clock",
        label: "Set alert for EU Battery Regulation compliance timeline",
      },
    ],
  },
};
