import type { PersonaDeepResearchData } from "@/data/personas";
import type {
  PrdScanStep,
  SourceRef,
  MockResponse,
} from "@/data/mock-deep-research";
import type { ToolChoice } from "@/data/personas";

const INVESTMENT_MEMO_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Searching meeting transcripts for deal discussions...",
    duration: 3000,
  },
  {
    label: "Analyzing pipeline tracker and screening notes...",
    duration: 2800,
  },
  {
    label: "Cross-referencing market data and competitive landscape...",
    duration: 3200,
  },
  {
    label: "Reviewing MC business unit synergy assessments...",
    duration: 2600,
  },
  { label: "Synthesizing investment thesis...", duration: 2400 },
];

const INVESTMENT_MEMO_CONTENT = `# Investment Memo: Sentra

## Company Overview

**Sentra** is building organizational memory — a living system that captures decision history and context as teams scale. Founded by Ashwin Gopinath (CEO, MIT professor) and Andrey Starenky (CTO), the company takes an interaction-first approach to enterprise knowledge management.

## Investment Thesis

Sentra addresses a fundamental problem in scaling organizations: the loss of institutional knowledge. Unlike Glean (aggregation-first, indexing documents) or Microsoft Copilot (chat layer over existing tools), Sentra captures the *why* behind decisions by treating actors and interactions as first-class objects.

### Market Opportunity

- Enterprise knowledge management: $42B TAM, growing 18% CAGR
- Meeting intelligence subset: $8.2B by 2028
- Organizational memory (new category): estimated $15B+ as companies recognize the cost of lost context

### Competitive Positioning

| Feature | Sentra | Glean | Copilot |
|---------|--------|-------|---------|
| Interaction capture | Native | None | Basic |
| Decision tracking | Yes | No | No |
| Commitment extraction | Yes | No | No |
| Cross-meeting context | Deep | Shallow | None |
| Multi-language | Planned | Yes | Yes |

### Traction

- Design partners: SoftBank, Runway, Campfire
- ICP: Series A/B startups (30-1000 employees), enterprise teams as DPs
- Stage: Pre-seed, $5M raised from a16z Speedrun + Together Fund
- Team: 11 employees, SF-based

## MC Synergy Analysis

**Direct deployment opportunities:**
- MC group companies (1,700+) for cross-cultural knowledge transfer
- MCGI portfolio companies for operational efficiency
- MC's 90-country operations for cross-timezone context preservation

**Strategic value:**
- Validates enterprise AI investment thesis
- Potential platform for MCGI portfolio value-add services
- Aligns with MC Corporate Strategy 2027 "Create" digital transformation pillar

## Financial Analysis

- Current burn: ~$250K/month (estimated)
- Runway: 20+ months at current pace
- Next round: Likely seed/Series A in 6-9 months
- MCGI entry: $3-5M at pre-seed valuation, targeting 8-12% ownership

## Risk Assessment

1. **Market risk (Medium):** Category creation required — "organizational memory" is not yet established
2. **Competition risk (Low-Medium):** Defensible through interaction-first architecture and data moat
3. **Execution risk (Low):** Strong technical founding team, MIT pedigree, a16z backing
4. **Japan market risk (Medium):** Multi-language support not yet built; critical for MC synergy thesis

## Recommendation

**INVEST.** Recommend $4M check at current round. Strong product-market fit signals, differentiated technology, and clear MC synergy path. Assign Sunna Mo as board observer to maximize strategic value.

## Next Steps

1. Complete technical DD with MCGI engineering advisors
2. Reference calls with existing design partners
3. Map 3-5 MC business units for pilot deployment
4. Finalize term sheet for IC approval
`;

const INVESTMENT_MEMO_BUILD_STEPS: PrdScanStep[] = [
  { label: "Formatting investment memo structure...", duration: 2000 },
  { label: "Generating financial projections table...", duration: 2500 },
  { label: "Adding competitive analysis matrix...", duration: 2000 },
  { label: "Finalizing MC synergy scoring...", duration: 1800 },
];

const MEMO_SOURCES: SourceRef[] = [
  { type: "google-meet", label: "Sentra — Product Deep Dive" },
  { type: "google-meet", label: "Investment Committee — Q1 Pipeline" },
  { type: "slack", label: "#mcgi-deal-flow — Sentra thread" },
  { type: "google-docs", label: "MCGI Pipeline Tracker" },
  { type: "email", label: "a16z Speedrun deal brief" },
  { type: "notion", label: "Market sizing model — Enterprise AI" },
];

const MEMO_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Docs", action: "build" },
  { label: "Cancel", action: "cancel" },
];

const LANDSCAPE_SCAN_STEPS: PrdScanStep[] = [
  { label: "Scanning market intelligence databases...", duration: 3200 },
  { label: "Analyzing competitor investment patterns...", duration: 2800 },
  { label: "Reviewing consortium market signals...", duration: 3000 },
  { label: "Mapping funding trends by sector...", duration: 2600 },
  { label: "Synthesizing landscape analysis...", duration: 2200 },
];

const LANDSCAPE_CONTENT = `# AI Agent Framework — Market Landscape Analysis

## Executive Summary

AI agent orchestration platforms represent the fastest-growing category in enterprise AI, with $2.1B deployed in Q1 2026 alone. The market is pre-consolidation, creating a strategic investment window for MCGI.

## Market Sizing

- **Total addressable market:** $28B by 2028 (autonomous enterprise software)
- **Serviceable market:** $8.5B (agent orchestration + infrastructure)
- **Current penetration:** <5% of enterprise AI budgets allocated to agent tooling
- **Growth rate:** 85% CAGR (2025-2028 projected)

## Competitive Landscape

### Tier 1: Platform Players
- **Anthropic** — Claude Code, Agent SDK. Most advanced reasoning. $18B valuation.
- **OpenAI** — Assistants API, GPTs. Largest distribution. $150B+ valuation.
- **Google** — Vertex AI agents. Enterprise integration via Google Cloud.

### Tier 2: Orchestration Frameworks
- **LangChain** — LangGraph for multi-agent workflows. Open-source community. Series B, $200M valuation.
- **CrewAI** — Role-based multi-agent orchestration. Growing adoption. Series A.
- **AutoGen (Microsoft)** — Multi-agent conversation framework. Open-source.

### Tier 3: Vertical/Enterprise Players
- **Cognigy** — Enterprise conversational AI agents. Focus on customer service. $200M+ ARR.
- **Moveworks** — IT automation agents. $2B valuation.
- **Various YC W26 companies** — Multiple agent-first startups in current batch.

## Investment Thesis for MCGI

### What to look for:
1. **Enterprise-grade reliability** — Agents that work within corporate governance structures
2. **Auditability** — Full decision trace for regulated industries (critical for MC's financial and industrial verticals)
3. **Integration depth** — Platforms that connect to enterprise systems, not just LLM APIs
4. **Japan readiness** — Multi-language support and cultural awareness in agent behavior

### Where MCGI can add unique value:
- Immediate deployment opportunity across MC's 1,700+ group companies
- Validation environment across multiple industries (industrial, financial, energy, logistics)
- Japan market entry support — no other CVC can offer this at MC's scale

## Recommended Scouting Targets

1. **AgentLayer** (YC W26) — Enterprise agent orchestration with built-in compliance
2. **NexusAI** (seed) — Vertical agents for manufacturing quality control
3. **Kigen** (pre-seed) — Agent reliability and testing infrastructure

## Risk Factors

- **Commoditization risk:** As foundation model providers add native agent capabilities, standalone orchestration may compress
- **Enterprise adoption pace:** Agent adoption slower than chatbot adoption due to trust barriers
- **Regulatory uncertainty:** EU AI Act and Japan AI governance framework may impact agent autonomy

## Next Steps

1. Attend Stanford HAI conference — meet with 8 targeted presenters
2. Deep dive on AgentLayer at YC demo day
3. Schedule consortium working session on agent framework thesis
4. Present landscape analysis to Tokyo HQ for allocation discussion
`;

const LANDSCAPE_BUILD_STEPS: PrdScanStep[] = [
  { label: "Building competitive matrix...", duration: 2200 },
  { label: "Generating market sizing charts...", duration: 2600 },
  { label: "Formatting scouting recommendations...", duration: 2000 },
];

const LANDSCAPE_SOURCES: SourceRef[] = [
  { type: "google-meet", label: "M-Lab Consortium Monthly" },
  { type: "slack", label: "#mcgi-market-intel" },
  { type: "google-docs", label: "AI Sector Tracking Sheet" },
  { type: "email", label: "PitchBook sector alerts" },
  { type: "notion", label: "Competitor CVC investment log" },
];

const LANDSCAPE_TOOL_CHOICES: ToolChoice[] = [
  { label: "Build Deck", action: "build" },
  { label: "Cancel", action: "cancel" },
];

const VENDOR_EVAL_SCAN: PrdScanStep[] = [
  { label: "Searching deal discussions and meeting notes...", duration: 2400 },
  { label: "Analyzing startup metrics and traction data...", duration: 2800 },
  { label: "Cross-referencing with market benchmarks...", duration: 2600 },
  { label: "Compiling findings...", duration: 2000 },
];

const vendorEvalResponse: MockResponse = {
  scanSteps: VENDOR_EVAL_SCAN,
  paragraphs: [
    {
      id: "mcgi-ve-1",
      content:
        "Based on analysis of your pipeline data, meeting transcripts, and market intelligence, here is a comparative assessment of the three companies currently in due diligence:",
      sources: [
        { type: "google-docs", label: "MCGI Pipeline Tracker" },
        { type: "slack", label: "#mcgi-deal-flow" },
      ],
    },
    {
      id: "mcgi-ve-2",
      content:
        "**Sentra** (Enterprise AI — Organizational Memory): Strongest MC synergy score (9/10). Differentiated interaction-first architecture with no direct competitors. Pre-seed stage means higher risk but better entry valuation. Team quality is exceptional (MIT founder, a16z backing). Japan market readiness is the primary gap — multi-language support planned but not yet built.",
      sources: [
        {
          type: "google-meet",
          label: "Sentra — Product Deep Dive & Strategic Fit",
        },
      ],
    },
    {
      id: "mcgi-ve-3",
      content:
        "**CarbonGrid** (Climate Tech — Carbon Capture): Strong MC synergy (8/10) with immediate deployment path to 12-15 MC industrial facilities. Technical validation complete — 40% efficiency improvement confirmed by independent lab. Unit economics work at scale ($78/ton). Series A stage provides more de-risked entry. Climate tech allocation increase from board makes timing favorable.",
      sources: [
        {
          type: "google-meet",
          label: "CarbonGrid — Technical Due Diligence Review",
        },
      ],
    },
    {
      id: "mcgi-ve-4",
      content:
        "**FluxMaterials** (Advanced Materials — Battery Recycling): Moderate MC synergy (6/10). Technology is promising but early — pilot facility not yet operational. Market is growing rapidly with regulatory tailwinds (EU battery directive). Seed stage with higher execution risk. Recommend proceeding but with smaller initial check and milestone-based follow-on.",
      sources: [{ type: "email", label: "FluxMaterials technical brief" }],
    },
    {
      id: "mcgi-ve-5",
      content:
        "**Recommendation:** Prioritize Sentra and CarbonGrid for immediate investment. Both have clear MC synergy paths, strong teams, and favorable entry points. FluxMaterials should proceed with a smaller exploratory investment pending pilot facility results.",
      sources: [
        {
          type: "google-meet",
          label: "Investment Committee — Q1 Pipeline Review",
        },
      ],
    },
  ],
};

export const deepResearchData: PersonaDeepResearchData = {
  suggestions: [
    "Draft an investment memo for Sentra",
    "Map the AI agent framework landscape",
    "Compare our pipeline companies on MC synergy potential",
    "What did competing CVCs invest in this quarter?",
    "Summarize this week's deal flow activity",
    "Which portfolio companies need attention this quarter?",
    "Analyze the Japan market entry opportunity for NeuralDB",
    "What are the key takeaways from the M-Lab consortium meeting?",
  ],
  sessionHistory: [
    { id: "mcgi-s1", title: "Sentra investment memo draft", date: "Today" },
    {
      id: "mcgi-s2",
      title: "AI agent framework landscape",
      date: "Today",
    },
    {
      id: "mcgi-s3",
      title: "Q1 pipeline company comparison",
      date: "Yesterday",
    },
    {
      id: "mcgi-s4",
      title: "CarbonGrid technical DD summary",
      date: "Yesterday",
    },
    {
      id: "mcgi-s5",
      title: "Competitive CVC activity tracker",
      date: "Last week",
    },
    {
      id: "mcgi-s6",
      title: "NeuralDB Series B readiness",
      date: "Last week",
    },
    {
      id: "mcgi-s7",
      title: "Climate tech allocation analysis",
      date: "Last week",
    },
    {
      id: "mcgi-s8",
      title: "M-Lab consortium insights summary",
      date: "Last week",
    },
    {
      id: "mcgi-s9",
      title: "QuantumSense runway analysis",
      date: "2 weeks ago",
    },
    {
      id: "mcgi-s10",
      title: "Japan market entry playbook",
      date: "2 weeks ago",
    },
  ],
  documentFlows: [
    {
      id: "mcgi-flow-memo",
      label: "Investment Memo",
      filename: "sentra-investment-memo.md",
      scanSteps: INVESTMENT_MEMO_SCAN_STEPS,
      content: INVESTMENT_MEMO_CONTENT,
      buildSteps: INVESTMENT_MEMO_BUILD_STEPS,
      sources: MEMO_SOURCES,
      triggerKeywords: [
        "investment memo",
        "invest memo",
        "memo for",
        "write memo",
        "draft memo",
      ],
      toolChoices: MEMO_TOOL_CHOICES,
      doneMessage: {
        title: "Investment memo pushed to Google Docs",
        description:
          "Your investment memo has been created and is ready for IC review.",
        link: { label: "Open in Google Docs", url: "#" },
      },
      buildingLabel: "Building memo",
    },
    {
      id: "mcgi-flow-landscape",
      label: "Market Landscape",
      filename: "ai-agent-framework-landscape.md",
      scanSteps: LANDSCAPE_SCAN_STEPS,
      content: LANDSCAPE_CONTENT,
      buildSteps: LANDSCAPE_BUILD_STEPS,
      sources: LANDSCAPE_SOURCES,
      triggerKeywords: [
        "landscape",
        "market map",
        "sector analysis",
        "competitive landscape",
        "market analysis",
      ],
      toolChoices: LANDSCAPE_TOOL_CHOICES,
      doneMessage: {
        title: "Landscape deck pushed to Google Slides",
        description:
          "Your market landscape analysis is ready for consortium review.",
        link: { label: "Open in Google Slides", url: "#" },
      },
      buildingLabel: "Building deck",
    },
  ],
  vendorEvalResponse,
  vendorEvalTriggerKeywords: [
    "compare",
    "comparison",
    "evaluate",
    "pipeline companies",
    "synergy potential",
    "which company",
    "rank",
  ],
};
