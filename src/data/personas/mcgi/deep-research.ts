import type { PersonaDeepResearchData } from "@/data/personas";
import type {
  PrdScanStep,
  SourceRef,
  MockResponse,
} from "@/data/mock-deep-research";
import type { ToolChoice } from "@/data/personas";

const INVESTMENT_MEMO_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling deal records and relationship history from Affinity...",
    duration: 3000,
  },
  {
    label: "Reading Sentra due diligence notes from Notion...",
    duration: 2800,
  },
  {
    label: "Scanning deal discussion threads on Microsoft Teams...",
    duration: 3200,
  },
  {
    label: "Retrieving screening memos and IC docs from SharePoint...",
    duration: 2600,
  },
  {
    label: "Cross-referencing pipeline data and synergy assessments...",
    duration: 2800,
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
  { type: "affinity", label: "Sentra — Deal Record & Contacts" },
  { type: "notion", label: "Sentra DD Notes & Market Sizing" },
  { type: "teams", label: "MCGI Deal Flow — Sentra thread" },
  { type: "sharepoint", label: "IC Screening Memo — Sentra" },
  { type: "affinity", label: "Investment Committee — Q1 Pipeline" },
  { type: "notion", label: "Market sizing model — Enterprise AI" },
];

const MEMO_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Docs", action: "build" },
  { label: "Cancel", action: "cancel" },
];

const LANDSCAPE_SCAN_STEPS: PrdScanStep[] = [
  { label: "Pulling sector deal records from Affinity...", duration: 3200 },
  { label: "Reading market intelligence pages from Notion...", duration: 2800 },
  {
    label: "Scanning M-Lab consortium channel on Microsoft Teams...",
    duration: 3000,
  },
  { label: "Retrieving sector reports from SharePoint...", duration: 2600 },
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
  { type: "affinity", label: "AI Sector Deal Pipeline" },
  { type: "notion", label: "Competitor CVC investment log" },
  { type: "teams", label: "M-Lab Consortium Monthly" },
  { type: "sharepoint", label: "AI Sector Tracking Sheet" },
  { type: "notion", label: "PitchBook sector alerts" },
];

const LANDSCAPE_TOOL_CHOICES: ToolChoice[] = [
  { label: "Build Deck", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── Deal Onboarding Timeline Flow ── */

const ONBOARDING_SCAN_STEPS: PrdScanStep[] = [
  {
    label:
      "Pulling Sentra deal record and interaction history from Affinity...",
    duration: 3200,
  },
  {
    label: "Reading due diligence notes and meeting logs from Notion...",
    duration: 2800,
  },
  {
    label: "Scanning 14 deal discussion threads on Microsoft Teams...",
    duration: 3400,
  },
  {
    label: "Retrieving IC memos and screening docs from SharePoint...",
    duration: 2600,
  },
  {
    label: "Pulling contact history and email threads from Affinity...",
    duration: 2400,
  },
  {
    label: "Reconstructing deal timeline...",
    duration: 2200,
  },
];

const ONBOARDING_CONTENT = `# Deal Timeline: Sentra

## Current Status

**Stage:** Due Diligence — IC vote scheduled March 19
**Deal Lead:** Sunna Mo | **Sponsor:** Takeshi Yamamoto
**Proposed Check:** $4M at pre-seed valuation, targeting 8-12% ownership

---

## November 2025

- **Nov 8** — Sentra flagged by Sunna Mo during YC W25 batch review. Initial screen based on interaction-first architecture and MIT founding team. Added to Affinity pipeline as "Tracking."
- **Nov 14** — Takeshi Yamamoto reviewed Sentra's pitch deck shared via a16z Speedrun network. Noted strong alignment with MC Corporate Strategy 2027 "Create" pillar.
- **Nov 21** — First call with Ashwin Gopinath (CEO). 45-minute intro covering product vision, team background, and early traction. Sunna flagged organizational memory as a potential new category.

## December 2025

- **Dec 3** — Product deep dive with Andrey Starenky (CTO). Reviewed interaction-first architecture, data model, and technical differentiation vs. Glean and Copilot. Engineering team assessed architecture as "defensible and novel."
- **Dec 10** — Market sizing working session (internal). Estimated enterprise knowledge management TAM at $42B with 18% CAGR. Organizational memory subset estimated at $15B+.
- **Dec 17** — Deal moved to "Active Screening" in Affinity. Sunna circulated 2-page screening memo to MCGI SF team via SharePoint.

## January 2026

- **Jan 9** — Reference call with SoftBank design partner lead. Confirmed strong product-market fit signals — "replaced 30 minutes of manual CRM updates after every call." Net promoter score from early users: 72.
- **Jan 15** — MC synergy assessment initiated. Mapped 3 potential deployment paths: MC group companies (1,700+) for cross-cultural knowledge transfer, MCGI portfolio companies for operational efficiency, MC's 90-country operations for cross-timezone context preservation.
- **Jan 22** — Competitive landscape review. Key finding: no direct competitor in "organizational memory" — Glean is aggregation-first (indexing documents), Copilot is a chat layer over existing tools. Sentra is the only interaction-first player.
- **Jan 28** — Financial analysis completed. Current burn ~$250K/month, 20+ months runway. a16z Speedrun + Together Fund round at $5M. Team: 11 employees, SF-based.

## February 2026

- **Feb 5** — Deal moved to "Due Diligence" in Affinity. Takeshi approved proceeding to full DD.
- **Feb 12** — Technical DD session with MCGI engineering advisors. Reviewed data architecture, security posture, and scalability. Key gap identified: multi-language support not yet built — critical for Japan market deployment.
- **Feb 19** — Second reference call — Runway design partner. Confirmed meeting intelligence depth as key differentiator. Quote: "It's like having an institutional memory that never forgets."
- **Feb 26** — Japan market entry assessment. Multi-language support on roadmap for Q3 2026. MC Japan team expressed strong interest pending localization. Risk rated Medium.

## March 2026

- **Mar 3** — Investment Committee pre-read circulated via SharePoint. Proposed $4M check, 8-12% ownership, Sunna Mo as board observer.
- **Mar 7** — IC Q&A session on Teams. Key discussion points: Japan market timeline, competitive moat durability, and path to Series A. Committee requested additional reference calls before final vote.
- **Mar 10** — Third reference call scheduled — Campfire design partner. Focus: enterprise deployment complexity and onboarding time.
- **Mar 19** — **IC vote scheduled.** Final term sheet to be presented for approval.

---

## Key People

| Name | Role | Organization |
|------|------|-------------|
| Ashwin Gopinath | CEO / Co-founder | Sentra |
| Andrey Starenky | CTO / Co-founder | Sentra |
| Sunna Mo | Deal Lead | MCGI SF |
| Takeshi Yamamoto | Deal Sponsor | MCGI SF |
| Lakshmi Shankar | Lead Investor | Together Fund |

## Open Items

1. Third reference call (Campfire) — scheduled Mar 10
2. Final term sheet preparation — due Mar 14
3. IC vote — Mar 19
4. Japan localization timeline confirmation from Sentra

---

*Reconstructed from 23 interactions across Affinity, Notion, Microsoft Teams, and SharePoint*`;

const ONBOARDING_SOURCES: SourceRef[] = [
  { type: "affinity", label: "Sentra — Deal Record (47 interactions)" },
  { type: "notion", label: "Sentra DD Notes & Screening Memo" },
  { type: "teams", label: "MCGI Deal Flow — Sentra thread (14 messages)" },
  { type: "sharepoint", label: "IC Pre-Read — Sentra Investment" },
  { type: "affinity", label: "Sentra — Contact History & Emails" },
  { type: "notion", label: "MC Synergy Assessment — Sentra" },
];

const ONBOARDING_BUILD_STEPS: PrdScanStep[] = [
  { label: "Organizing events into chronological timeline...", duration: 2200 },
  { label: "Linking sources to each timeline entry...", duration: 2400 },
  { label: "Generating key people and open items summary...", duration: 2000 },
  { label: "Formatting deal brief document...", duration: 1800 },
];

const ONBOARDING_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Docs", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── Financial Model Flow (CarbonGrid DD) ── */

const FINANCIAL_MODEL_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling CarbonGrid deal record and financials from Affinity...",
    duration: 3000,
  },
  {
    label: "Reading CarbonGrid technical DD and unit economics from Notion...",
    duration: 2800,
  },
  {
    label: "Scanning CarbonGrid diligence threads on Microsoft Teams...",
    duration: 3200,
  },
  {
    label: "Retrieving CarbonGrid pitch deck and data room from SharePoint...",
    duration: 2600,
  },
  {
    label: "Pulling comparable company data from Affinity deal records...",
    duration: 2400,
  },
  {
    label: "Building financial projections...",
    duration: 2200,
  },
];

const FINANCIAL_MODEL_CONTENT = `# 3-Statement Financial Model: CarbonGrid

## Company Overview

**CarbonGrid** — Direct air capture (DAC) technology for industrial carbon removal. Series A company with $6.2M ARR from 4 enterprise contracts. Proprietary sorbent material achieves 40% efficiency improvement over industry standard. Model built from data room financials, technical DD, and comparable company analysis.

## Key Assumptions

- Revenue growth: 120% YoY (FY26E), decelerating to 85% (FY27E), 60% (FY28E)
- Gross margin: 48% current, expanding to 58% by FY28E (manufacturing scale)
- Carbon credit revenue: $78/ton captured, rising to $95/ton by FY28E (regulatory tailwinds)
- Capacity expansion: 3 facilities (FY25A) → 8 facilities (FY26E) → 15 facilities (FY28E)
- CapEx per facility: $4.2M (declining to $3.6M by FY28E with design standardization)
- Operating leverage: headcount grows at 40% vs revenue at 85%+ through automation

## Income Statement

| Line Item | FY25A | FY26E | FY27E | FY28E |
|-----------|-------|-------|-------|-------|
| Revenue | $6.2M | $13.6M | $25.2M | $40.3M |
| Carbon Credit Revenue | $2.1M | $5.8M | $12.4M | $22.1M |
| Service & Maintenance | $4.1M | $7.8M | $12.8M | $18.2M |
| COGS | ($3.2M) | ($6.5M) | ($11.3M) | ($16.9M) |
| Gross Profit | $3.0M | $7.1M | $13.9M | $23.4M |
| R&D | ($4.8M) | ($6.2M) | ($7.8M) | ($9.4M) |
| S&M | ($2.1M) | ($3.4M) | ($5.0M) | ($6.5M) |
| G&A | ($1.8M) | ($2.6M) | ($3.4M) | ($4.2M) |
| EBITDA | ($5.7M) | ($5.1M) | ($2.3M) | $3.3M |
| D&A | ($1.2M) | ($2.4M) | ($4.1M) | ($5.8M) |
| EBIT | ($6.9M) | ($7.5M) | ($6.4M) | ($2.5M) |
| Net Income | ($7.4M) | ($8.1M) | ($7.0M) | ($3.2M) |

## Balance Sheet

| Line Item | FY25A | FY26E | FY27E | FY28E |
|-----------|-------|-------|-------|-------|
| Cash & Equivalents | $18.5M | $28.4M | $22.8M | $21.6M |
| Accounts Receivable | $1.6M | $3.4M | $6.3M | $10.1M |
| Total Current Assets | $21.8M | $34.2M | $31.9M | $34.8M |
| PP&E (net) | $11.4M | $26.8M | $44.2M | $58.4M |
| Total Assets | $35.6M | $63.8M | $79.5M | $97.2M |
| Accounts Payable | $2.1M | $3.8M | $6.2M | $8.8M |
| Deferred Revenue | $1.8M | $4.2M | $7.8M | $12.4M |
| Total Liabilities | $6.4M | $12.8M | $20.2M | $28.6M |
| Stockholders' Equity | $29.2M | $51.0M | $59.3M | $68.6M |

## Cash Flow Statement

| Line Item | FY25A | FY26E | FY27E | FY28E |
|-----------|-------|-------|-------|-------|
| Net Income | ($7.4M) | ($8.1M) | ($7.0M) | ($3.2M) |
| D&A | $1.2M | $2.4M | $4.1M | $5.8M |
| Changes in WC | ($0.4M) | ($0.8M) | ($1.2M) | ($1.4M) |
| CFO | ($6.6M) | ($6.5M) | ($4.1M) | $1.2M |
| CapEx — New Facilities | ($8.4M) | ($21.0M) | ($25.2M) | ($25.2M) |
| CapEx — Maintenance | ($0.6M) | ($1.2M) | ($2.1M) | ($3.0M) |
| FCF | ($15.6M) | ($28.7M) | ($31.4M) | ($27.0M) |

## Unit Economics

| Metric | FY25A | FY26E | FY27E | FY28E |
|--------|-------|-------|-------|-------|
| Tons Captured (annual) | 26,900 | 74,400 | 159,000 | 283,200 |
| Revenue per Ton | $230 | $183 | $159 | $142 |
| Cost per Ton | $119 | $87 | $71 | $60 |
| Gross Margin per Ton | $111 | $96 | $88 | $82 |
| Facilities Operating | 3 | 8 | 15 | 21 |

## Valuation Sensitivity

**EV/Revenue multiples (FY26E):**
- Bear case (6x): $81.6M
- Base case (10x): $136M
- Bull case (15x): $204M

**Key risks:** Capital-intensive scaling, carbon credit price volatility, permitting delays for new facilities, technology risk on next-gen sorbent material.

**MC synergy upside:** Direct deployment to 12-15 MC industrial facilities could add $8-12M in contracted revenue by FY28E, not reflected in base case.

---

*Sources: CarbonGrid data room (SharePoint), Technical DD notes (Notion), Deal team discussions (Teams), Comparable deals (Affinity)*`;

const FINANCIAL_MODEL_SOURCES: SourceRef[] = [
  { type: "affinity", label: "CarbonGrid — Deal Record & Financials" },
  { type: "notion", label: "CarbonGrid Technical DD — Unit Economics" },
  { type: "teams", label: "CarbonGrid Diligence — Deal Team Thread" },
  {
    type: "sharepoint",
    label: "CarbonGrid Data Room — Pitch Deck & Financials",
  },
  { type: "affinity", label: "Climate Tech Comparable Deals" },
];

const FINANCIAL_MODEL_BUILD_STEPS: PrdScanStep[] = [
  { label: "Pulling revenue assumptions from data room...", duration: 2600 },
  {
    label: "Building income statement — mapping COGS, OpEx, D&A...",
    duration: 3000,
  },
  {
    label: "Constructing balance sheet — linking PP&E, AR, deferred revenue...",
    duration: 3200,
  },
  {
    label: "Generating cash flow statement — CFO, CapEx, FCF bridge...",
    duration: 2800,
  },
  {
    label: "Running unit economics and valuation sensitivity...",
    duration: 2400,
  },
];

const FINANCIAL_MODEL_TOOL_CHOICES: ToolChoice[] = [
  { label: "Build Model", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── Deal Data Consolidation Flow (NeuralDB) ── */

const CONSOLIDATION_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling NeuralDB deal record and activity log from Affinity...",
    duration: 2800,
  },
  {
    label: "Reading 12 NeuralDB pages from Notion workspace...",
    duration: 3200,
  },
  {
    label: "Scanning 8 NeuralDB channels and threads on Microsoft Teams...",
    duration: 3400,
  },
  {
    label: "Retrieving NeuralDB docs and reports from SharePoint...",
    duration: 2600,
  },
  {
    label: "Cross-referencing duplicates and resolving conflicts...",
    duration: 2200,
  },
  {
    label: "Consolidating into unified brief...",
    duration: 2000,
  },
];

const CONSOLIDATION_CONTENT = `# Consolidated Deal Brief: NeuralDB

## Overview

**NeuralDB** — Vector database infrastructure for enterprise AI applications. Series B candidate, currently in active due diligence. This brief consolidates all information scattered across Notion, Microsoft Teams, and Affinity into a single source of truth.

*Last updated: March 12, 2026 — 43 sources consolidated*

---

## Company Snapshot

| Field | Detail |
|-------|--------|
| Founded | 2023 (San Francisco) |
| Stage | Series A ($12M raised, Sequoia + Index Ventures) |
| ARR | $9.4M (as of Feb 2026) |
| Growth | 140% YoY |
| Team | 38 employees (24 engineering) |
| ICP | Enterprise AI teams deploying RAG and agent architectures |
| Key Metric | 99.97% uptime SLA, <5ms p99 query latency |

## Deal Status & Key Contacts

| Contact | Role | Last Interaction | Notes |
|---------|------|-----------------|-------|
| Sarah Chen | CEO / Co-founder | Mar 8 (Teams call) | Stanford CS PhD, ex-Google Brain |
| Marcus Webb | CTO / Co-founder | Mar 3 (Product deep dive) | Ex-Pinecone founding engineer |
| Diana Choi | VP Sales | Feb 26 (Email) | Driving enterprise motion, ex-Snowflake |
| Raj Patel | Board (Sequoia) | Feb 19 (IC reference) | Supportive of MC strategic investment |

**MCGI Deal Team:** Sunna Mo (lead), Mihiro Nakamura (associate), Ryotaro Nakamura (technical DD)

---

## Diligence Findings (Consolidated)

### Product & Technical Assessment
*Source: Notion — "NeuralDB Technical DD Notes" + Teams — "NeuralDB Product Deep Dive (Mar 3)"*

- Custom indexing engine built on Rust — 3x throughput vs Pinecone on standard benchmarks
- Multi-tenancy architecture supports enterprise isolation requirements
- Hybrid search (vector + keyword + metadata filtering) in single query
- SOC 2 Type II certified, HIPAA-compliant deployment option
- **Gap identified:** No native support for Japanese language tokenization — critical for MC Japan deployment. Team estimates 6-8 weeks to implement.

### Market Position
*Source: Notion — "Vector DB Competitive Landscape" + SharePoint — "AI Infrastructure Market Report Q1 2026"*

- Vector database market estimated at $4.8B by 2028 (62% CAGR)
- Key competitors: Pinecone ($100M ARR), Weaviate ($28M ARR), Qdrant ($8M ARR)
- NeuralDB differentiator: enterprise-grade reliability + hybrid search + managed service
- Win rate vs Pinecone in enterprise evaluations: 58% (per Diana Choi, Feb 26 email)

### Customer References
*Source: Teams — "NeuralDB Reference Calls" thread + Affinity — Contact notes*

- **Stripe** — Using for fraud detection model serving. "NeuralDB is the only vendor that met our latency SLA at scale." — Staff Eng, ML Platform
- **Notion** (ironic) — Powers their AI search feature. Migrated from Pinecone in Q4 2025 citing reliability issues.
- **DoorDash** — Deploying for real-time recommendation engine. POC to production in 3 weeks.

### Financial Analysis
*Source: SharePoint — "NeuralDB Financial Model v2" + Notion — "Series B Pricing Analysis"*

- Current ARR: $9.4M, projecting $22M by Dec 2026
- Gross margin: 72% (infrastructure-heavy but improving)
- Net revenue retention: 145%
- Burn: $1.8M/month, 14 months runway at current pace
- Series B target: $40-50M at $280-320M pre-money valuation
- MCGI proposed entry: $8-10M check

### MC Synergy Assessment
*Source: Notion — "MC Synergy Scoring — NeuralDB" + Teams — "MCGI Strategy Sync (Feb 28)"*

- **Synergy Score: 7/10**
- MC group AI initiatives could deploy NeuralDB across 5+ business units
- MC's data infrastructure modernization program (FY26-28) creates immediate demand
- Japan market entry support is high-value strategic lever for NeuralDB
- Lower synergy than Sentra due to infrastructure (vs application) positioning

---

## Open Questions & Next Steps

1. **Series B timeline** — Sarah Chen indicated April close target. Need to confirm allocation and move fast.
2. **Japan tokenization** — Ryotaro to follow up on technical feasibility and timeline by Mar 15
3. **Competitive displacement risk** — Pinecone's enterprise tier launching Q2 2026. Assess defensibility.
4. **Reference call** — DoorDash ML Platform lead scheduled for Mar 14
5. **IC pre-read** — Sunna drafting, target circulation Mar 21

---

## Source Inventory

| Platform | Documents | Key Items |
|----------|-----------|-----------|
| Notion | 12 pages | DD notes, competitive analysis, synergy scoring, financial model |
| Teams | 8 threads | Product deep dive, reference calls, strategy sync, deal team updates |
| Affinity | 31 interactions | Contact history, meeting notes, email threads, deal record |
| SharePoint | 4 documents | Data room, market report, financial model, IC template |

---

*Consolidated from 43 sources across Notion (12), Microsoft Teams (8), Affinity (31), and SharePoint (4)*`;

const CONSOLIDATION_SOURCES: SourceRef[] = [
  { type: "notion", label: "NeuralDB Technical DD Notes" },
  { type: "notion", label: "Vector DB Competitive Landscape" },
  { type: "teams", label: "NeuralDB Product Deep Dive (Mar 3)" },
  { type: "teams", label: "NeuralDB Reference Calls thread" },
  { type: "affinity", label: "NeuralDB — Deal Record (31 interactions)" },
  { type: "sharepoint", label: "NeuralDB Data Room & Market Report" },
];

const CONSOLIDATION_BUILD_STEPS: PrdScanStep[] = [
  {
    label: "Deduplicating overlapping notes from Notion and Teams...",
    duration: 2400,
  },
  {
    label: "Resolving conflicting data points across sources...",
    duration: 2600,
  },
  { label: "Organizing findings by diligence category...", duration: 2200 },
  {
    label: "Generating source inventory and cross-references...",
    duration: 2000,
  },
  { label: "Formatting consolidated brief...", duration: 1800 },
];

const CONSOLIDATION_TOOL_CHOICES: ToolChoice[] = [
  { label: "Open in Word", action: "build" },
  { label: "Cancel", action: "cancel" },
];

const VENDOR_EVAL_SCAN: PrdScanStep[] = [
  {
    label: "Pulling pipeline company records from Affinity...",
    duration: 2400,
  },
  {
    label: "Reading startup metrics and traction data from Notion...",
    duration: 2800,
  },
  {
    label: "Scanning deal discussion threads on Microsoft Teams...",
    duration: 2600,
  },
  { label: "Retrieving benchmark reports from SharePoint...", duration: 2200 },
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
        { type: "affinity", label: "MCGI Pipeline Tracker" },
        { type: "teams", label: "#mcgi-deal-flow" },
      ],
    },
    {
      id: "mcgi-ve-2",
      content:
        "**Sentra** (Enterprise AI — Organizational Memory): Strongest MC synergy score (9/10). Differentiated interaction-first architecture with no direct competitors. Pre-seed stage means higher risk but better entry valuation. Team quality is exceptional (MIT founder, a16z backing). Japan market readiness is the primary gap — multi-language support planned but not yet built.",
      sources: [
        {
          type: "affinity",
          label: "Sentra — Deal Record & Meeting Notes",
        },
      ],
    },
    {
      id: "mcgi-ve-3",
      content:
        "**CarbonGrid** (Climate Tech — Carbon Capture): Strong MC synergy (8/10) with immediate deployment path to 12-15 MC industrial facilities. Technical validation complete — 40% efficiency improvement confirmed by independent lab. Unit economics work at scale ($78/ton). Series A stage provides more de-risked entry. Climate tech allocation increase from board makes timing favorable.",
      sources: [
        {
          type: "teams",
          label: "CarbonGrid — Technical DD Discussion",
        },
      ],
    },
    {
      id: "mcgi-ve-4",
      content:
        "**FluxMaterials** (Advanced Materials — Battery Recycling): Moderate MC synergy (6/10). Technology is promising but early — pilot facility not yet operational. Market is growing rapidly with regulatory tailwinds (EU battery directive). Seed stage with higher execution risk. Recommend proceeding but with smaller initial check and milestone-based follow-on.",
      sources: [{ type: "sharepoint", label: "FluxMaterials technical brief" }],
    },
    {
      id: "mcgi-ve-5",
      content:
        "**Recommendation:** Prioritize Sentra and CarbonGrid for immediate investment. Both have clear MC synergy paths, strong teams, and favorable entry points. FluxMaterials should proceed with a smaller exploratory investment pending pilot facility results.",
      sources: [
        {
          type: "notion",
          label: "Investment Committee — Q1 Pipeline Review",
        },
      ],
    },
  ],
};

export const deepResearchData: PersonaDeepResearchData = {
  suggestions: [
    "I just joined the Sentra deal — what's the full history and where do we stand?",
    "Draft an investment memo for Sentra",
    "Map the AI agent framework landscape",
    "Compare our pipeline companies on MC synergy potential",
    "What did competing CVCs invest in this quarter?",
    "Summarize this week's deal flow activity",
    "Which portfolio companies need attention this quarter?",
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
      id: "mcgi-flow-onboarding",
      label: "Deal Timeline",
      filename: "sentra-deal-timeline.md",
      scanSteps: ONBOARDING_SCAN_STEPS,
      content: ONBOARDING_CONTENT,
      buildSteps: ONBOARDING_BUILD_STEPS,
      sources: ONBOARDING_SOURCES,
      triggerKeywords: [
        "just joined",
        "just got",
        "brought onto",
        "new to",
        "catch up",
        "catch me up",
        "onboarded",
        "full history",
        "deal history",
        "what happened",
        "where do we stand",
        "get up to speed",
        "bring me up to speed",
        "what do i need to know",
        "what should i know",
        "timeline",
        "deal timeline",
        "need to know",
        "background on",
      ],
      toolChoices: ONBOARDING_TOOL_CHOICES,
      doneMessage: {
        title: "Deal timeline pushed to Google Docs",
        description:
          "Your deal onboarding brief is ready. Covers the complete Sentra deal history from first contact through current status.",
        link: { label: "Open in Google Docs", url: "#" },
      },
      buildingLabel: "Building deal timeline",
    },
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
    {
      id: "mcgi-flow-financial-model",
      label: "Financial Model",
      filename: "carbongrid-financial-model.md",
      scanSteps: FINANCIAL_MODEL_SCAN_STEPS,
      content: FINANCIAL_MODEL_CONTENT,
      buildSteps: FINANCIAL_MODEL_BUILD_STEPS,
      sources: FINANCIAL_MODEL_SOURCES,
      triggerKeywords: [
        "financial model",
        "3-statement",
        "three-statement",
        "build model",
        "carbongrid",
        "carbon grid",
        "due diligence model",
        "dd model",
        "revenue model",
        "projections for",
      ],
      toolChoices: FINANCIAL_MODEL_TOOL_CHOICES,
      doneMessage: {
        title: "Financial model ready in Google Sheets",
        description:
          "Your 3-statement model for CarbonGrid has been generated with full income statement, balance sheet, and cash flow projections.",
        link: { label: "Open in Google Sheets", url: "#" },
      },
      buildingLabel: "Building financial model",
    },
    {
      id: "mcgi-flow-consolidation",
      label: "Consolidated Brief",
      filename: "neuraldb-consolidated-brief.md",
      scanSteps: CONSOLIDATION_SCAN_STEPS,
      content: CONSOLIDATION_CONTENT,
      buildSteps: CONSOLIDATION_BUILD_STEPS,
      sources: CONSOLIDATION_SOURCES,
      triggerKeywords: [
        "consolidate",
        "consolidated",
        "consolidation",
        "pull together",
        "combine",
        "neuraldb",
        "neural db",
        "scattered",
        "across notion",
        "across teams",
        "single source",
        "unified brief",
        "everything we have on",
      ],
      toolChoices: CONSOLIDATION_TOOL_CHOICES,
      doneMessage: {
        title: "Consolidated brief exported to Microsoft Word",
        description:
          "All NeuralDB diligence data from Notion, Teams, Affinity, and SharePoint has been consolidated into a single document.",
        link: { label: "Open in Microsoft Word", url: "#" },
      },
      buildingLabel: "Consolidating deal data",
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
