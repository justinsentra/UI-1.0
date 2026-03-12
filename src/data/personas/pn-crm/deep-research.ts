import type { PersonaDeepResearchData } from "@/data/personas";
import type {
  PrdScanStep,
  SourceRef,
  MockResponse,
} from "@/data/mock-deep-research";
import type { ToolChoice } from "@/data/personas";

/* ── Pitch Deck Flow ── */

const PITCH_DECK_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling user growth metrics from analytics dashboard...",
    duration: 2800,
  },
  {
    label: "Reading retention cohort data from Notion...",
    duration: 3000,
  },
  {
    label: "Scanning product discussion threads on Slack...",
    duration: 2600,
  },
  {
    label: "Retrieving competitive analysis from Google Docs...",
    duration: 2400,
  },
  {
    label: "Pulling feedback themes from user survey data...",
    duration: 2200,
  },
  { label: "Synthesizing pitch narrative...", duration: 2000 },
];

const PITCH_DECK_CONTENT = `# Pre-Seed Pitch Deck: Personal Network CRM

## The Problem

Professional relationships are the most valuable asset in any career — yet there's no good tool to manage them.

- The average professional has 500-2,000 meaningful contacts
- 73% of professionals say they've lost touch with someone important due to lack of follow-up
- Existing CRMs are built for sales teams, not individuals
- Contact apps (phone contacts, LinkedIn) are storage, not intelligence

**The result:** Relationships decay silently. Opportunities are missed. The people who succeed at networking do it through discipline and manual effort — or they don't do it at all.

## The Solution

**Personal Network CRM** — Relationship intelligence for your professional network.

We help individuals manage their network like the asset it is:
- **Import** your contacts from anywhere (CSV, LinkedIn, email)
- **Organize** by relationship tiers (inner circle, active network, extended)
- **Track** interactions automatically — meetings, emails, messages
- **Get nudged** when relationships go cold — before it's too late
- **Suggest** the right touchpoint at the right time

## How It Works

### Relationship Intelligence Engine

Unlike Clay (enrichment-based) or Folk (team-based), PN CRM is built on an **interaction-based intelligence model**:

1. **Interaction capture** — Every conversation, email, and meeting is logged
2. **Relationship scoring** — AI scores relationship health based on recency, depth, and reciprocity
3. **Decay detection** — Tiered decay algorithm alerts you when important relationships are fading
4. **Smart touchpoints** — Suggests the right action: congratulate on a job change, follow up on a promise, reconnect after 90 days

### Key Differentiators

| Feature | PN CRM | Clay | Folk | Dex |
|---------|--------|------|------|-----|
| Relationship scoring | Interaction-based | Enrichment-based | None | Basic |
| Decay alerts | Tiered by tier | None | None | Simple timer |
| Smart touchpoints | AI-suggested | None | None | Manual |
| Individual focus | Yes | No (sales teams) | No (teams) | Yes |
| Contact import | CSV, LinkedIn, Email | API-heavy | CSV | Limited |
| Price | Free + Premium | $149-349/mo | $19/seat/mo | $12/mo |

## Traction

### User Metrics (as of March 2026)

| Metric | Value | Benchmark |
|--------|-------|-----------|
| Total users | 1,247 | — |
| Weekly active users | 474 (38%) | >25% = strong |
| Week 1 retention | 62% | >40% = strong |
| Week 8 retention | 28% (flattening) | >20% = PMF signal |
| NPS | 4.7 / 5.0 | >4.0 = strong |
| Organic growth | 85% of signups | — |

### Retention Curve

Week 1: 62% → Week 2: 48% → Week 4: 36% → Week 8: 28% → Week 12: 26%

The curve is flattening at week 8, indicating a stable core user base. Users who complete the contact import step retain at 71% vs 34% for those who skip — import is the critical activation moment.

### User Feedback

> "PN CRM reminds me to stay in touch with people I actually care about. It's like having a relationship manager in my pocket." — Beta user, VC associate

> "I was losing track of warm intros and follow-ups. Now I never miss one." — Beta user, startup founder

> "Makes networking feel less transactional and more human." — Beta user, student entrepreneur

## Market Opportunity

### Market Sizing

- **TAM:** $12B — Professional networking and relationship management tools
- **SAM:** $3.2B — Individual-focused relationship management (non-sales CRM)
- **SOM:** $180M — Power networkers: founders, VCs, operators, sales professionals

### Why Now

1. **AI enables relationship intelligence** — GPT-era models make it possible to score relationships, suggest touchpoints, and extract context from conversations
2. **Remote work amplified the problem** — Hybrid/remote professionals have more contacts but fewer organic touchpoints
3. **Personal branding is mainstream** — Networking is no longer optional; it's a career skill
4. **Category validation** — Clay ($1.3B valuation), Folk ($6M seed), Monica (growing) prove the market exists

## Business Model

### Freemium → Premium

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 100 contacts, basic tracking, 5 alerts/week |
| Pro | $12/mo | Unlimited contacts, full intelligence, smart touchpoints |
| Power | $29/mo | Team features, API access, integrations |

### Unit Economics (projected at scale)

- CAC: $8 (organic-dominant acquisition)
- LTV: $144 (12-month retention × $12/mo)
- LTV/CAC: 18x
- Gross margin: 85% (SaaS model, AI API costs are primary COGS)

## Team

**Zachary Carlo** — CEO & Founder
- Miami University, Honors Finance & Entrepreneurship
- Founded Side Hustle Club (50+ members, fostered 6-figure student businesses)
- Co-founded Sparkli (1,000+ downloads)
- VC Analyst Intern at 1809 Capital
- Member of RedHawk Ventures (student-run VC fund)

**Tyler Williams** — CTO
- Full-stack engineer, React/Node/PostgreSQL
- Built the relationship intelligence engine from scratch
- Previously shipped 3 indie products with 10K+ combined users

**Katherine McIntosh** — Advisor
- 15 years in SaaS, former VP Product at a CRM company
- Angel investor in personal productivity tools

**Mark Richey** — Advisor
- Partner at 1809 Capital
- Former founder (exited to private equity)

## The Ask

**Raising $500K pre-seed on a SAFE (post-money cap: $5M)**

### Use of Funds (12-14 months runway)

| Category | Amount | Purpose |
|----------|--------|---------|
| Engineering | $250K | Hire 1 senior engineer, AI/ML costs |
| Growth | $120K | Referral program, content marketing, community |
| Operations | $80K | Legal, infrastructure, tools |
| Buffer | $50K | Contingency |

### Milestones to Seed Round

1. 5,000 users with 35%+ WAU
2. $10K MRR from premium conversions
3. LinkedIn integration live
4. 3 key partnerships (Calendly, Zoom, or similar)

## Parallel Path: YC S26

Submitting to YC Summer 2026 (deadline: April 15). If accepted, would accelerate timeline significantly and likely convert to a YC standard deal.

---

*Personal Network CRM — Your network is your net worth. We help you manage it.*`;

const PITCH_DECK_BUILD_STEPS: PrdScanStep[] = [
  { label: "Formatting slide structure...", duration: 2200 },
  { label: "Generating metrics visualizations...", duration: 2600 },
  { label: "Adding competitive comparison matrix...", duration: 2000 },
  { label: "Finalizing ask and use of funds...", duration: 1800 },
];

const PITCH_DECK_SOURCES: SourceRef[] = [
  { type: "notion", label: "PN CRM Growth Dashboard" },
  { type: "google-docs", label: "Pre-Seed Pitch Deck v3" },
  { type: "slack", label: "#pn-crm-metrics" },
  { type: "notion", label: "User Feedback Synthesis" },
  { type: "google-docs", label: "Competitive Landscape Analysis" },
];

const PITCH_DECK_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Slides", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── YC Application Flow ── */

const YC_APP_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling user metrics and traction data from analytics...",
    duration: 2600,
  },
  {
    label: "Reading product vision and roadmap from Notion...",
    duration: 2800,
  },
  {
    label: "Scanning advisor feedback threads on Slack...",
    duration: 2400,
  },
  {
    label: "Retrieving team background and founder bios...",
    duration: 2200,
  },
  { label: "Synthesizing YC application narrative...", duration: 2000 },
];

const YC_APP_CONTENT = `# YC Summer 2026 Application — Personal Network CRM

## Company

**Company name:** Personal Network CRM
**Company URL:** personalnetworkcrm.com
**One-line description:** Relationship intelligence that tells you who to talk to, when, and why.

## Founders

**Zachary Carlo** — CEO
- Miami University, Honors Finance & Entrepreneurship (graduating 2027)
- Founded Side Hustle Club (50+ active members)
- Co-founded Sparkli (relationship app, 1,000+ downloads)
- VC Analyst at 1809 Capital, member of RedHawk Ventures (student-run VC)
- Passionate about connecting people — built PN CRM because he personally lost track of important relationships as his network grew

**Tyler Williams** — CTO
- Self-taught full-stack engineer (React, Node, PostgreSQL, Python)
- Built the entire PN CRM product from scratch including the AI relationship intelligence engine
- Previously shipped 3 indie products with 10K+ combined users
- Obsessed with clean architecture and user experience

## What does your company do?

Personal Network CRM helps professionals manage their relationships like the asset they are. We import your contacts, track your interactions, detect when relationships are going cold, and suggest the right touchpoint at the right time.

Unlike Clay (built for sales teams), Folk (built for teams), or basic contact apps (just storage), PN CRM is built for **individuals who treat their network as a career asset** — founders, VCs, operators, and ambitious professionals.

Our core innovation is the **relationship intelligence engine**: an interaction-based scoring model that understands relationship health from actual conversation depth, not just email frequency or LinkedIn activity.

## Why did you pick this idea to work on?

I (Zachary) have been obsessed with networking since founding the Side Hustle Club at Miami University. As the club grew to 50+ members and I started doing VC work at 1809 Capital and RedHawk Ventures, my network exploded. I went from knowing 50 people well to having 500+ contacts across founders, investors, mentors, and peers.

I started losing track. Missed follow-ups. Forgot promises. Let relationships go cold with people I genuinely wanted to stay connected to. I tried every tool — spreadsheets, Notion databases, contact apps, even wrote automations. Nothing worked because they all treated contacts as static records, not living relationships.

That's when I realized: **the problem isn't organizing contacts — it's understanding relationship health in real time and being told when to act.**

## How do users interact with your product?

1. **Import** — Drag-and-drop CSV or connect email. We auto-detect fields and deduplicate.
2. **Organize** — Contacts are auto-tiered (inner circle, active network, extended) based on interaction patterns. Users can adjust.
3. **Track** — Every interaction (meeting, email, message) updates the relationship score. No manual logging needed once integrations are set up.
4. **Get nudged** — Smart notifications: "You haven't spoken to Mark in 32 days — you committed to sending him that intro." "Sarah just changed jobs — congratulate her."
5. **Act** — One-tap actions: send a quick note, schedule a catch-up, or mark as followed up.

## What's your progress?

- **1,247 users** (organic, no paid acquisition)
- **38% weekly active rate** (benchmark: >25%)
- **62% week-1 retention** (benchmark: >40%)
- **Week-8 retention flattening at 28%** — PMF signal
- **NPS: 4.7/5.0** from 183 respondents
- **85% organic signups** — word of mouth driven
- Users who complete contact import retain at **71% vs 34%** for skip

## What's the business model?

Freemium SaaS:
- **Free:** 100 contacts, basic tracking, 5 alerts/week
- **Pro ($12/mo):** Unlimited contacts, full intelligence, smart touchpoints
- **Power ($29/mo):** Team features, API access, integrations

Projected unit economics: $8 CAC, $144 LTV, 18x LTV/CAC ratio.

## How much money do you want from YC?

Standard YC deal: $500K on standard post-money SAFE terms.

We're parallel-tracking a $500K angel/micro-VC pre-seed (post-money cap $5M). If accepted to YC, we'd convert to the YC standard deal and use the angel interest as supplementary funding.

## Why will you succeed?

1. **We're our own power users.** Zachary manages 500+ contacts across VC, entrepreneurship, and academia. Tyler networks across indie hacker communities. We feel the pain daily.
2. **The timing is right.** AI makes relationship intelligence possible for the first time. Remote work made the problem worse. Personal branding made networking non-optional.
3. **We've proven demand with zero marketing spend.** 1,247 users, 85% organic, word of mouth only. The product sells itself to the right persona.
4. **We understand the distribution playbook.** Community-led growth (Side Hustle Club model), referral mechanics (import your contacts together), and content marketing (networking advice = natural SEO).

---

*Application submitted March 2026*`;

const YC_APP_BUILD_STEPS: PrdScanStep[] = [
  { label: "Formatting YC application structure...", duration: 2000 },
  { label: "Generating metrics summary table...", duration: 2400 },
  { label: "Polishing founder narrative...", duration: 2200 },
  { label: "Finalizing submission draft...", duration: 1800 },
];

const YC_APP_SOURCES: SourceRef[] = [
  { type: "notion", label: "PN CRM Growth Dashboard" },
  { type: "notion", label: "Product Vision & Roadmap" },
  { type: "slack", label: "#pn-crm-general — Advisor feedback" },
  { type: "google-docs", label: "Founder Bios & Team Background" },
];

const YC_APP_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Docs", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── Competitive Analysis Flow ── */

const COMPETITIVE_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling competitor feature data from Notion tracker...",
    duration: 3000,
  },
  {
    label: "Scanning Product Hunt reviews for Clay, Folk, and Dex...",
    duration: 2800,
  },
  {
    label: "Reading competitor pricing pages and changelogs...",
    duration: 2600,
  },
  {
    label: "Pulling user feedback comparing PN CRM to alternatives...",
    duration: 2400,
  },
  { label: "Synthesizing competitive positioning...", duration: 2200 },
];

const COMPETITIVE_CONTENT = `# Competitive Analysis: Personal CRM Landscape

## Executive Summary

The personal CRM category is heating up. Clay's $1.3B valuation and Folk's $6M Accel-led round validate the market, but no player has nailed **relationship intelligence for individuals**. PN CRM occupies a unique position: interaction-based scoring for individual power networkers, a segment that Clay (sales teams), Folk (team collaboration), and Dex (simple tracking) don't serve well.

## Competitive Matrix

| Dimension | PN CRM | Clay | Folk | Dex | Monica |
|-----------|--------|------|------|-----|--------|
| **Target user** | Individual power networkers | Sales & GTM teams | Small teams | Individuals | Individuals |
| **Core value** | Relationship intelligence | Contact enrichment | Team CRM | Simple tracking | Open-source CRM |
| **Pricing** | Free + $12/mo | $149-349/mo | $19/seat/mo | $12/mo | Free (self-host) |
| **Relationship scoring** | Interaction-based (deep) | Enrichment-based (shallow) | None | Timer-based (basic) | None |
| **Decay alerts** | Tiered by relationship | None | None | Simple timer | None |
| **Smart touchpoints** | AI-suggested actions | None | None | Manual reminders | None |
| **Contact import** | CSV, LinkedIn, email | API integrations | CSV, email | LinkedIn, CSV | Manual entry |
| **Integrations** | Email, calendar (planned) | 50+ data sources | Email, LinkedIn | LinkedIn, email | None |
| **Funding** | Pre-seed ($500K target) | $46M Series B | $6M Seed | $3M Seed | Bootstrapped |

## Player Deep Dives

### Clay — The 800-Pound Gorilla

**Strengths:** Massive enrichment database, 50+ integrations, strong brand in GTM community, $1.3B valuation = unlimited runway.

**Weaknesses:** Built for sales teams, not individuals. Pricing ($149-349/mo) is 10-30x PN CRM. New "relationship score" feature is enrichment-based — it can tell you someone changed jobs, but not that your last conversation went cold.

**Threat level: Medium.** Clay could theoretically build an individual product, but their DNA is sales automation. The pricing alone disqualifies them from our target market.

### Folk — The Team Play

**Strengths:** Beautiful UI, strong team collaboration features, Accel backing, good at shared pipelines and deal tracking.

**Weaknesses:** Team-first architecture means the individual experience is compromised. No relationship intelligence — it's essentially a lightweight Salesforce alternative for small teams.

**Threat level: Low.** Different target market. Could become a partner if PN CRM feeds individual data into Folk's team CRM.

### Dex — The Closest Competitor

**Strengths:** Individual focus, simple UX, LinkedIn integration, $12/mo price point matches PN CRM.

**Weaknesses:** Relationship tracking is timer-based (remind me in 30 days), not intelligence-based. No AI, no contextual suggestions, no interaction analysis. Feels like a fancy reminder app.

**Threat level: Medium-High.** Same target market, but weaker product. Risk is if they add AI intelligence before we scale.

### Monica — The Open-Source Option

**Strengths:** Free, self-hostable, privacy-focused, active open-source community.

**Weaknesses:** Requires technical setup, no AI features, manual everything. The antithesis of "smart" — it's a database with a UI.

**Threat level: Low.** Different user profile (privacy-focused techies vs. power networkers).

## Positioning Recommendations

1. **Lead with intelligence, not features.** Our pitch isn't "another CRM" — it's "the first tool that understands your relationship health."
2. **Price below Clay, above free.** $12/mo is accessible enough for individuals but signals quality above free tools.
3. **Own the "power networker" persona.** Founders, VCs, operators, ambitious professionals. Not sales teams (Clay), not teams (Folk), not casual users (Dex).
4. **Use Clay's relationship score launch as validation.** They validated the concept — now show why interaction-based scoring is 10x better than enrichment-based.

---

*Last updated: March 12, 2026*`;

const COMPETITIVE_BUILD_STEPS: PrdScanStep[] = [
  { label: "Building feature comparison matrix...", duration: 2400 },
  { label: "Generating threat assessment scores...", duration: 2200 },
  { label: "Formatting positioning recommendations...", duration: 2000 },
];

const COMPETITIVE_SOURCES: SourceRef[] = [
  { type: "notion", label: "Competitive Landscape Tracker" },
  { type: "google-docs", label: "Clay Feature Comparison Sheet" },
  { type: "slack", label: "#pn-crm-product — competitor discussions" },
  { type: "notion", label: "User Feedback — Competitor Mentions" },
];

const COMPETITIVE_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Docs", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── RedHawk Ventures DD Template Flow ── */

const DD_TEMPLATE_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling past DD reports from Google Drive...",
    duration: 2800,
  },
  {
    label: "Reading RedHawk Ventures process docs from Notion...",
    duration: 2600,
  },
  {
    label: "Scanning deal review discussion threads on Slack...",
    duration: 3000,
  },
  {
    label: "Retrieving evaluation criteria from past investments...",
    duration: 2400,
  },
  { label: "Synthesizing standardized template...", duration: 2200 },
];

const DD_TEMPLATE_CONTENT = `# RedHawk Ventures — Standardized Due Diligence Template

## Purpose

This template streamlines our DD process from 3-4 weeks to a **2-week sprint**. Designed for early-stage student startups (pre-seed to seed). Each section should take 1-2 days to complete.

## Sprint Schedule

| Day | Activity | Owner |
|-----|----------|-------|
| 1-2 | Company overview + market research | DD Lead |
| 3-4 | Product evaluation + technical assessment | DD Lead + Tech Advisor |
| 5-6 | Financial analysis + unit economics | DD Lead |
| 7-8 | Founder references + customer interviews | DD Lead |
| 9-10 | Competitive landscape + risk assessment | DD Lead |
| 11-12 | Write-up + internal review | DD Lead |
| 13-14 | Partner presentation prep | DD Lead + Fund Manager |

---

## Section 1: Company Overview

### Basic Information

| Field | Detail |
|-------|--------|
| Company name | |
| Founded | |
| Location | |
| Stage | |
| Raising | |
| Valuation / cap | |
| Team size | |
| Website | |

### Problem & Solution

- What problem does the company solve?
- Who has this problem? How many people?
- What's the current solution (status quo)?
- Why is the startup's approach better?

### Founder Assessment

| Criterion | Score (1-5) | Notes |
|-----------|-------------|-------|
| Domain expertise | | |
| Technical capability | | |
| Sales / GTM ability | | |
| Coachability | | |
| Grit / resilience | | |
| Team dynamics | | |

## Section 2: Market Analysis

### Market Sizing

| Level | Size | Method |
|-------|------|--------|
| TAM | | |
| SAM | | |
| SOM | | |

### Market Dynamics

- Growth rate and drivers
- Key trends supporting the thesis
- Regulatory environment
- Timing considerations (why now?)

## Section 3: Product & Technical

### Product Assessment

| Criterion | Score (1-5) | Notes |
|-----------|-------------|-------|
| Product-market fit signals | | |
| User experience quality | | |
| Technical architecture | | |
| Defensibility / moat | | |
| Scalability | | |

### Traction Metrics

| Metric | Current | MoM Growth | Benchmark |
|--------|---------|------------|-----------|
| Users / customers | | | |
| Revenue / ARR | | | |
| Retention (M1) | | | |
| NPS / satisfaction | | | |
| Growth rate | | | |

## Section 4: Financial Analysis

### Current Financials

| Metric | Amount |
|--------|--------|
| Monthly burn | |
| Runway (months) | |
| Revenue | |
| Gross margin | |

### Unit Economics

| Metric | Current | Projected (12mo) |
|--------|---------|------------------|
| CAC | | |
| LTV | | |
| LTV/CAC | | |
| Payback period | | |

## Section 5: Competitive Landscape

| Competitor | Stage | Funding | Key Differentiator | Threat Level |
|------------|-------|---------|-------------------|--------------|
| | | | | |
| | | | | |
| | | | | |

### Moat Assessment

- Network effects? (score 1-5)
- Switching costs? (score 1-5)
- Data advantage? (score 1-5)
- Brand / community? (score 1-5)
- Technical IP? (score 1-5)

## Section 6: Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Market risk | | | |
| Execution risk | | | |
| Competition risk | | | |
| Funding risk | | | |
| Regulatory risk | | | |

## Section 7: Investment Recommendation

### Scoring Summary

| Category | Weight | Score (1-5) | Weighted |
|----------|--------|-------------|----------|
| Team | 30% | | |
| Market | 20% | | |
| Product | 20% | | |
| Traction | 15% | | |
| Financials | 15% | | |
| **Total** | **100%** | | |

### Recommendation

- [ ] **Invest** — Proceed to partner meeting
- [ ] **Pass** — With reasoning
- [ ] **Revisit** — In [timeframe], pending [milestone]

### Proposed Terms (if investing)

| Term | Proposed |
|------|----------|
| Check size | |
| Instrument | |
| Valuation / cap | |
| Board seat / observer | |
| Follow-on reserved | |

---

*RedHawk Ventures — Miami University's Student-Run Venture Fund*
*Template v2.0 — March 2026*`;

const DD_TEMPLATE_BUILD_STEPS: PrdScanStep[] = [
  { label: "Formatting template structure...", duration: 2000 },
  { label: "Adding scoring rubrics and benchmarks...", duration: 2400 },
  { label: "Generating sprint schedule...", duration: 2000 },
  { label: "Finalizing template document...", duration: 1800 },
];

const DD_TEMPLATE_SOURCES: SourceRef[] = [
  { type: "google-drive", label: "RedHawk Ventures — Past DD Reports" },
  { type: "notion", label: "RedHawk Ventures Process Docs" },
  { type: "slack", label: "#redhawk-ventures — Deal Discussions" },
  { type: "google-docs", label: "Investment Evaluation Criteria v1" },
];

const DD_TEMPLATE_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Docs", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── Investor Target List Flow ── */

const INVESTOR_LIST_SCAN_STEPS: PrdScanStep[] = [
  {
    label: "Pulling investor contacts from relationship graph...",
    duration: 2600,
  },
  {
    label: "Scanning email threads for warm intro paths...",
    duration: 3000,
  },
  {
    label: "Reading angel investor profiles from Notion...",
    duration: 2800,
  },
  {
    label: "Cross-referencing with 1809 Capital network data...",
    duration: 2400,
  },
  {
    label: "Pulling recent CRM/productivity investments from Crunchbase...",
    duration: 2600,
  },
  { label: "Ranking and scoring investor fit...", duration: 2200 },
];

const INVESTOR_LIST_CONTENT = `# Angel Investor Target List — PN CRM Pre-Seed

## Overview

Target: 15-20 angel investors and micro-VCs for the $500K pre-seed round. Prioritized by: (1) domain fit (CRM, networking, personal productivity), (2) check size alignment ($25-75K angels, $100-200K micro-VCs), (3) warm intro availability.

## Tier 1: Warm Intros Available

| Investor | Background | Check Size | Intro Path | Fit Score |
|----------|-----------|------------|------------|-----------|
| Sarah Winters | Angel, ex-VP Product at a prosumer SaaS | $50K | Mark Richey (1809 Capital) | 9/10 |
| Dan Chen | Altman Institute Fund, student founder focus | $75K | Genine Fallon (Miami U) | 8/10 |
| Mike Tran | Solo GP, $10M micro-VC, first-time founders | $150K | 1809 Capital network | 9/10 |
| Emily Cho | YC Partner (exploratory for S26 batch) | YC deal | David Nguyen (RedHawk) | 8/10 |

## Tier 2: Cold Outreach with Strong Fit

| Investor | Background | Check Size | Why They'd Care | Fit Score |
|----------|-----------|------------|-----------------|-----------|
| Julie Kim | Angel, invested in Dex and Savvy Wealth | $50K | Personal CRM thesis, Dex exit potential | 8/10 |
| Raj Sharma | Ex-Salesforce VP, angel investing in CRM tools | $75K | Deep CRM domain expertise | 8/10 |
| Amanda Torres | Angel, focus on Gen-Z SaaS founders | $25K | Student founder angle + product love | 7/10 |
| Chris Bakker | Micro-VC ($5M fund), personal productivity | $100K | Thesis alignment: "tools for individuals" | 8/10 |
| Nate Collins | Ex-LinkedIn PM, angel investor | $50K | Network graph expertise | 9/10 |
| Priya Srinivasan | Ex-Clay employee, now angel investing | $25K | Deep competitor knowledge, category belief | 7/10 |

## Tier 3: Stretch Targets

| Investor | Background | Check Size | Path | Fit Score |
|----------|-----------|------------|------|-----------|
| Alexis Ohanian | Reddit co-founder, Seven Seven Six | $200K+ | Cold — but personal networking thesis | 6/10 |
| Naval Ravikant | AngelList, invests in tools for individuals | $100K | Cold — legendary signal value | 5/10 |
| Sahil Lavingia | Gumroad CEO, backs student founders | $50K | Cold — active on Twitter, reachable | 7/10 |
| Harry Stebbings | 20VC, invests in GTM/SaaS tools | $100K | Cold — but perfect podcast opportunity | 6/10 |

## Outreach Strategy

### Phase 1 (Week 1-2): Warm Intros
- Mark Richey introduces Sarah Winters and Mike Tran
- Genine connects with Dan Chen at Altman Institute
- David Nguyen brokers Emily Cho conversation (YC)

### Phase 2 (Week 3-4): Targeted Cold
- Personalized emails to Tier 2 list (reference Clay's relationship score launch as market validation)
- Twitter DMs to accessible angels (Sahil, Priya)

### Phase 3 (Week 5-6): Close
- Follow-up meetings, share updated deck with any new metrics
- Target first close by end of April

## Email Template (Cold Outreach)

Subject: Personal CRM with relationship intelligence — 1,247 users, $0 spent on marketing

Hi [Name],

I'm Zachary, founder of Personal Network CRM. We help professionals manage their network with AI-powered relationship intelligence — think "Mint for your professional relationships."

Quick numbers: 1,247 users (all organic), 38% weekly active, 4.7 NPS. We're raising a $500K pre-seed.

I'm reaching out because [personalized reason]. Would love 15 minutes to walk you through the product and our vision.

Best,
Zachary

---

*Compiled from relationship graph, advisor networks, and investment databases. March 2026.*`;

const INVESTOR_LIST_BUILD_STEPS: PrdScanStep[] = [
  { label: "Scoring investor fit across dimensions...", duration: 2400 },
  { label: "Mapping warm intro paths...", duration: 2600 },
  { label: "Generating outreach timeline...", duration: 2200 },
  { label: "Formatting target list document...", duration: 2000 },
];

const INVESTOR_LIST_SOURCES: SourceRef[] = [
  { type: "notion", label: "Investor Pipeline Tracker" },
  { type: "email", label: "Advisor intro email threads" },
  { type: "slack", label: "#pn-crm-fundraising" },
  { type: "google-docs", label: "1809 Capital LP Network" },
  { type: "notion", label: "CRM/Productivity Investor Database" },
];

const INVESTOR_LIST_TOOL_CHOICES: ToolChoice[] = [
  { label: "Push to Sheets", action: "build" },
  { label: "Cancel", action: "cancel" },
];

/* ── Vendor Eval (Comparison) Response ── */

const VENDOR_EVAL_SCAN: PrdScanStep[] = [
  {
    label: "Pulling product metrics from analytics dashboard...",
    duration: 2400,
  },
  {
    label: "Reading feature comparison notes from Notion...",
    duration: 2800,
  },
  {
    label: "Scanning user feedback for competitor mentions...",
    duration: 2600,
  },
  { label: "Retrieving market research from Google Docs...", duration: 2200 },
  { label: "Compiling comparison...", duration: 2000 },
];

const vendorEvalResponse: MockResponse = {
  scanSteps: VENDOR_EVAL_SCAN,
  paragraphs: [
    {
      id: "pn-crm-ve-1",
      content:
        "Based on analysis of product data, user feedback, and market research, here's how PN CRM stacks up against the key competitors in the personal CRM space:",
      sources: [
        { type: "notion", label: "Competitive Landscape Tracker" },
        { type: "slack", label: "#pn-crm-product" },
      ],
    },
    {
      id: "pn-crm-ve-2",
      content:
        "**Clay** is the dominant player at $1.3B valuation, but they're built for sales teams with pricing that starts at $149/month. Their new relationship score feature is enrichment-based — it pulls from public data sources like LinkedIn and company databases. PN CRM's interaction-based scoring analyzes actual conversation depth and reciprocity, which is fundamentally more accurate for personal relationship health.",
      sources: [
        { type: "google-docs", label: "Clay Feature Comparison Sheet" },
      ],
    },
    {
      id: "pn-crm-ve-3",
      content:
        "**Folk** ($6M Accel-led seed) targets small teams with shared CRM functionality. Their strength is collaboration — shared pipelines, team notes, deal tracking. But for an individual managing a personal network, the team features add complexity without value. Folk has no relationship intelligence layer at all.",
      sources: [{ type: "notion", label: "Folk Product Analysis" }],
    },
    {
      id: "pn-crm-ve-4",
      content:
        "**Dex** ($3M seed) is the closest competitor in terms of target market — individuals managing personal networks. However, their tracking is timer-based ('remind me in 30 days') rather than intelligence-based. No AI, no contextual suggestions, no interaction analysis. At $12/month, they set a price anchor that PN CRM can match while delivering significantly more value.",
      sources: [{ type: "notion", label: "Dex Competitive Notes" }],
    },
    {
      id: "pn-crm-ve-5",
      content:
        "**Recommendation:** PN CRM's positioning should emphasize three things: (1) interaction-based intelligence vs. enrichment-based or timer-based, (2) individual focus vs. team/sales tools, (3) accessible pricing vs. Clay's enterprise cost. The competitive moat deepens as users accumulate interaction history — switching costs increase over time.",
      sources: [
        { type: "google-docs", label: "Competitive Positioning Strategy" },
      ],
    },
  ],
};

export const deepResearchData: PersonaDeepResearchData = {
  suggestions: [
    "Update the pitch deck with our latest metrics",
    "Draft the YC S26 application",
    "Build a competitive analysis of the personal CRM space",
    "Create a standardized DD template for RedHawk Ventures",
    "Compile our angel investor target list with intro paths",
    "What happened in this week's meetings?",
    "Which commitments am I behind on?",
    "Summarize user feedback from the past month",
  ],
  sessionHistory: [
    {
      id: "pn-crm-s1",
      title: "Pre-seed pitch deck update",
      date: "Today",
    },
    {
      id: "pn-crm-s2",
      title: "Clay competitive response analysis",
      date: "Today",
    },
    {
      id: "pn-crm-s3",
      title: "YC S26 application first draft",
      date: "Yesterday",
    },
    {
      id: "pn-crm-s4",
      title: "User retention cohort analysis",
      date: "Yesterday",
    },
    {
      id: "pn-crm-s5",
      title: "Angel investor target list",
      date: "Last week",
    },
    {
      id: "pn-crm-s6",
      title: "Contact import funnel analysis",
      date: "Last week",
    },
    {
      id: "pn-crm-s7",
      title: "RedHawk Ventures DD template",
      date: "Last week",
    },
    {
      id: "pn-crm-s8",
      title: "MeetingMind competitive DD",
      date: "Last week",
    },
    {
      id: "pn-crm-s9",
      title: "FounderOS investment thesis",
      date: "2 weeks ago",
    },
    {
      id: "pn-crm-s10",
      title: "Side Hustle Club growth plan",
      date: "2 weeks ago",
    },
  ],
  documentFlows: [
    {
      id: "pn-crm-flow-pitch",
      label: "Pitch Deck",
      filename: "pn-crm-pre-seed-pitch-deck.md",
      scanSteps: PITCH_DECK_SCAN_STEPS,
      content: PITCH_DECK_CONTENT,
      buildSteps: PITCH_DECK_BUILD_STEPS,
      sources: PITCH_DECK_SOURCES,
      triggerKeywords: [
        "pitch deck",
        "update deck",
        "investor deck",
        "fundraising deck",
        "pre-seed deck",
        "slide deck",
        "pitch",
      ],
      toolChoices: PITCH_DECK_TOOL_CHOICES,
      doneMessage: {
        title: "Pitch deck pushed to Google Slides",
        description:
          "Your pre-seed pitch deck has been updated with the latest metrics, competitive positioning, and use of funds.",
        link: { label: "Open in Google Slides", url: "#" },
      },
      buildingLabel: "Building pitch deck",
    },
    {
      id: "pn-crm-flow-yc",
      label: "YC Application",
      filename: "yc-s26-application.md",
      scanSteps: YC_APP_SCAN_STEPS,
      content: YC_APP_CONTENT,
      buildSteps: YC_APP_BUILD_STEPS,
      sources: YC_APP_SOURCES,
      triggerKeywords: [
        "yc application",
        "yc s26",
        "y combinator",
        "accelerator application",
        "apply to yc",
        "yc batch",
        "draft yc",
      ],
      toolChoices: YC_APP_TOOL_CHOICES,
      doneMessage: {
        title: "YC application draft pushed to Google Docs",
        description:
          "Your YC Summer 2026 application draft is ready for review.",
        link: { label: "Open in Google Docs", url: "#" },
      },
      buildingLabel: "Drafting YC application",
    },
    {
      id: "pn-crm-flow-competitive",
      label: "Competitive Analysis",
      filename: "personal-crm-competitive-analysis.md",
      scanSteps: COMPETITIVE_SCAN_STEPS,
      content: COMPETITIVE_CONTENT,
      buildSteps: COMPETITIVE_BUILD_STEPS,
      sources: COMPETITIVE_SOURCES,
      triggerKeywords: [
        "competitive analysis",
        "competitor",
        "clay vs",
        "folk vs",
        "dex vs",
        "comparison",
        "positioning",
        "how do we compare",
        "competitive landscape",
      ],
      toolChoices: COMPETITIVE_TOOL_CHOICES,
      doneMessage: {
        title: "Competitive analysis pushed to Google Docs",
        description:
          "Your competitive landscape analysis is ready with feature matrices and positioning recommendations.",
        link: { label: "Open in Google Docs", url: "#" },
      },
      buildingLabel: "Building competitive analysis",
    },
    {
      id: "pn-crm-flow-dd-template",
      label: "DD Template",
      filename: "redhawk-dd-template.md",
      scanSteps: DD_TEMPLATE_SCAN_STEPS,
      content: DD_TEMPLATE_CONTENT,
      buildSteps: DD_TEMPLATE_BUILD_STEPS,
      sources: DD_TEMPLATE_SOURCES,
      triggerKeywords: [
        "dd template",
        "due diligence template",
        "diligence",
        "redhawk",
        "evaluation template",
        "startup evaluation",
        "standardized template",
      ],
      toolChoices: DD_TEMPLATE_TOOL_CHOICES,
      doneMessage: {
        title: "DD template pushed to Google Docs",
        description:
          "Your standardized 2-week due diligence template is ready for the RedHawk Ventures team.",
        link: { label: "Open in Google Docs", url: "#" },
      },
      buildingLabel: "Building DD template",
    },
    {
      id: "pn-crm-flow-investors",
      label: "Investor Target List",
      filename: "angel-investor-target-list.md",
      scanSteps: INVESTOR_LIST_SCAN_STEPS,
      content: INVESTOR_LIST_CONTENT,
      buildSteps: INVESTOR_LIST_BUILD_STEPS,
      sources: INVESTOR_LIST_SOURCES,
      triggerKeywords: [
        "investor list",
        "angel investors",
        "investor target",
        "who should we pitch",
        "fundraising targets",
        "intro list",
        "warm intros",
        "investor pipeline",
      ],
      toolChoices: INVESTOR_LIST_TOOL_CHOICES,
      doneMessage: {
        title: "Investor target list pushed to Google Sheets",
        description:
          "Your scored and tiered angel investor target list is ready with intro paths and outreach strategy.",
        link: { label: "Open in Google Sheets", url: "#" },
      },
      buildingLabel: "Compiling investor list",
    },
  ],
  vendorEvalResponse,
  vendorEvalTriggerKeywords: [
    "compare",
    "comparison",
    "evaluate",
    "how do we stack up",
    "vs clay",
    "vs folk",
    "vs dex",
  ],
};
