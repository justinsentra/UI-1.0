import type { ReportDetail } from "../types";

const reportDetailMap: Record<string, ReportDetail> = {
  // ─── REPORTS ───────────────────────────────────────────────────────

  // Company Overview (latest: rpt-co-1)
  "rpt-co-1": {
    id: "rpt-co-1",
    title: "Company Overview",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "This was a pivotal week for Sentra across engineering, go-to-market, and strategic positioning. The engineering team resolved three critical production stability issues — a 100% CPU bug, an 8.6GB memory leak, and database connection bottlenecks — resulting in the most stable platform release to date.",
          "On the commercial front, new enterprise conversations with JPM and Assurant signal growing interest from Fortune 500 organizations. The team also received sharp but valuable feedback from design partners Softmax and Campfire, highlighting the urgent need to ship source citations and rethink the AI's tone from prescriptive to informational.",
        ],
      },
      {
        heading: "Key Developments",
        paragraphs: [
          "Platform Stability: The API memory footprint dropped from 8.6GB to ~300MB, CPU utilization normalized from 100% to 1.5%, and database connections were reduced by ~60% through improved pooling. The RabbitMQ migration is complete, eliminating silent failures in background task processing.",
          "Product Shipping Velocity: Source Citations, Pre-Meeting Briefs v3.1, and Outlook Calendar support were all shipped this week. The citations feature is a direct response to partner feedback and is being rolled out across all report types.",
          "Enterprise Pipeline: Initiated conversations with JP Morgan (VP of Global Technology) and Assurant (Fortune 500 insurance). The SoftBank proof-of-concept was extended, with their team now testing mobile meeting capture at Mobile World Congress.",
          "Gartner Validation: Industry analyst firm Gartner has started discussing the 'Context Graph' market space, providing external validation that strengthens our positioning with enterprise CIOs.",
        ],
      },
      {
        heading: "Risks & Concerns",
        paragraphs: [
          "Design partner feedback was blunt this week. Softmax called pre-meeting briefs 'worse than useless' due to hallucinated to-dos and lack of source tracing. Campfire echoed the need for source citations as a prerequisite for trust. Both partners flagged the AI's prescriptive tone as a barrier to adoption.",
          "The Accenture project is on hold for six months due to their internal IT backlog. While their feedback validated our strategic potential, this delays a significant reference customer.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Engineering Delivers Major Stability and Feature Wins",
        paragraphs: [
          "This week was a turning point for platform reliability. The 100% CPU bug in the SSE implementation was fixed (PR #519), the 8.6GB memory leak was eliminated (PR #508), and the RabbitMQ migration (PR #480) resolved background task reliability issues.",
          "On the product front, Source Citations (PR #524) is being integrated into Pre-Meeting Briefs and Weekly Reports. Outlook Calendar support (PRs #517, #518) is now live for enterprise users who don't use Google Calendar.",
        ],
      },
      {
        heading: "Voice of the Customer: Trust and API Access",
        paragraphs: [
          "Feedback from Softmax surfaced a critical demand for an API-first strategy. Malcolm Ocean stated that without a robust API to access meeting transcripts and data, his team will build their own solution. This sentiment has been echoed by other advanced users.",
          "Campfire's Andrew Greener provided nuanced feedback on pre-meeting briefs — highly valuable for external calls but unnecessary for internal syncs. He wants a consolidated morning digest instead of per-meeting briefs, and insists on source citations for any AI-generated content.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#general" },
      { type: "slack", label: "#engineering" },
      { type: "slack", label: "#product-strategy" },
      { type: "google-meet", label: "All Hands Meeting" },
      { type: "google-meet", label: "Leadership Weekly Sync" },
      { type: "linear", label: "Sprint 14 Board" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send JPM introduction follow-up" },
      { icon: "calendar", label: "Schedule API strategy session" },
      { icon: "mail", label: "Follow up with Accenture on timeline" },
    ],
  },

  // GTM Status (latest: rpt-gtm-1)
  "rpt-gtm-1": {
    id: "rpt-gtm-1",
    title: "GTM Status",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Go-to-market efforts this week focused on positioning refinement and enterprise pipeline development. The team landed on three core messaging pillars — 'Never lose context,' 'Decisions you can trace,' and 'Your organization's memory' — which will anchor the website relaunch and all outbound communications.",
          "Two new enterprise conversations (JPM, Assurant) were initiated through warm introductions, while the a16z Speedrun partnership opened doors to three portfolio companies. The SXSW launch preparations are on track with confirmed press coverage from TechCrunch, The Information, and Protocol's successor.",
        ],
      },
      {
        heading: "Pipeline & Outbound",
        paragraphs: [
          "Enterprise Pipeline Growth: JP Morgan's VP of Global Technology expressed interest in the organizational memory concept. Assurant (Fortune 500 insurance, 14K employees) reached out through a warm intro. Both conversations are in discovery phase with demos scheduled for next week.",
          "a16z Speedrun Partnership: Ali Kazemi offered introductions to three portfolio companies — a Series B fintech (200 people), Series A dev tools company (40 people), and growth-stage healthcare startup (150 people). A successful pilot could lead to a joint case study distributed to 100K+ subscribers.",
          "Outbound Strategy: Shifted from 'AI meeting notes' to 'organizational memory for growing teams' positioning. New email sequence targeting Series A founders (20-80 employees in B2B SaaS) is in development. LinkedIn thought leadership campaign launching next week.",
        ],
      },
      {
        heading: "SXSW Launch Readiness",
        paragraphs: [
          "Booth confirmed in main hall, Row C. Three press meetings locked (TechCrunch, The Information, Protocol successor) with two more tentative. Post-event nurture sequence (3-email drip) is drafted and ready for review.",
          "Demo environment will be isolated from staging with realistic anonymized data. Website relaunch targeting one week before SXSW with the new messaging pillars.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Messaging Pillars and Competitive Positioning",
        paragraphs: [
          "The Brand & Messaging Workshop produced three clear pillars. Competitor analysis revealed no one is leading with the 'trust/verification' angle — Granola focuses on 'effortless notes,' Otter on 'transcription.' The trust narrative is ours to own.",
          "This positioning directly addresses design partner feedback about needing source citations and verifiable AI output. It also resonates with enterprise buyers who can't trust black-box AI summaries.",
        ],
      },
      {
        heading: "Pricing Strategy Progress",
        paragraphs: [
          "Three-tier model finalized: Free (individual, 5 meetings/month), Team ($15/user/month), Enterprise (custom + platform fee). The free tier is the PLG wedge — individuals try it, see value, and pull teams in.",
          "Enterprise pricing will be validated through the JPM and Assurant conversations. Usage-based model with a platform fee is the leading approach.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#gtm" },
      { type: "slack", label: "#general" },
      { type: "google-meet", label: "GTM Strategy Sync" },
      { type: "google-meet", label: "Brand & Messaging Workshop" },
      { type: "google-meet", label: "Partner Intro — a16z Speedrun" },
      { type: "google-meet", label: "Pricing Strategy Discussion" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Follow up with Ali Kazemi on portfolio intros" },
      { icon: "calendar", label: "Schedule JPM and Assurant demos" },
      { icon: "mail", label: "Send founder email sequence for review" },
    ],
  },

  // Product Strategy (latest: rpt-ps-1)
  "rpt-ps-1": {
    id: "rpt-ps-1",
    title: "Product Strategy",
    dateRange: "Feb 17 – 21, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Product strategy this week centered on the tension between building a self-contained application versus an API-first platform. Design partner feedback from Softmax made this urgent — they explicitly stated that without API access, they'll build their own solution.",
          "The team also made progress on the 'Granola killer' initiative, with internal demos showing how meeting context can be seamlessly integrated into developer tools. This validated the thesis that the real value lies not in capturing meetings but in making that context actionable across workflows.",
        ],
      },
      {
        heading: "API-First vs. Integrated Application",
        paragraphs: [
          "Malcolm Ocean from Softmax delivered a clear ultimatum: provide a robust API with webhooks within two months or lose them as a customer. Their team is building internal LLM agents and views Sentra as potential 'contextual infrastructure.'",
          "This represents both a threat and an opportunity. Doubling down on the integrated application risks losing sophisticated, AI-native customers. An API-first strategy would position Sentra as foundational infrastructure but requires significant roadmap changes.",
          "The recommendation is a phased approach: ship a read-only API for transcripts and meeting data within 6 weeks, then iterate toward webhooks and write access based on usage patterns.",
        ],
      },
      {
        heading: "Feature Prioritization",
        paragraphs: [
          "Source Citations (shipped) — direct response to trust feedback. Being rolled out across all report types and pre-meeting briefs.",
          "Consolidated Morning Digest (design phase) — Campfire requested a single morning summary instead of per-meeting briefs for internal meetings. High-impact, low-effort feature.",
          "Pill v2 (blocked on latency fix) — floating context pill with real-time meeting intelligence. Skeleton loader approach approved to address perceived latency.",
          "Onboarding Simplification — reducing from 7 steps to 4. Progressive disclosure for advanced settings. Targeting completion before SXSW.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "The Agentic Workflow Opportunity",
        paragraphs: [
          "Serge Semenov demonstrated a workflow connecting Granola's meeting output directly into the Cursor IDE, allowing an AI agent to analyze code changes based on a technical discussion without context switching. Ashwin's response: 'We should do this.'",
          "This proves a core hypothesis — the real value is not just capturing meeting data but seamlessly integrating context into the tools where work happens. The team's enthusiasm for building these agentic integrations is a strong signal of the product direction that will resonate with users.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#product-strategy" },
      { type: "slack", label: "#engineering" },
      { type: "google-meet", label: "Product Roadmap Review" },
      { type: "google-meet", label: "Softmax Design Partner Check-in" },
      { type: "google-meet", label: "Weekly Design Critique" },
    ],
    suggestedActions: [
      { icon: "calendar", label: "Schedule API roadmap planning session" },
      { icon: "mail", label: "Share API timeline with Softmax" },
      { icon: "clock", label: "Review morning digest mockups" },
    ],
  },

  // Engineering Overview (latest: rpt-eng-1)
  "rpt-eng-1": {
    id: "rpt-eng-1",
    title: "Engineering Overview",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Engineering delivered a landmark week for platform stability while maintaining high feature shipping velocity. Three critical production issues were resolved, the RabbitMQ migration was completed, and key user-facing features including Source Citations and Outlook Calendar support went live.",
          "Sprint velocity reached 12 PRs merged over the two-week cycle, though 3 were blocked by production stability work. The team identified monitoring gaps that need to be addressed before SXSW and began planning for backend hiring.",
        ],
      },
      {
        heading: "Production Stability",
        paragraphs: [
          "100% CPU Bug (PR #519): Serge identified a tight loop in the SSE implementation that consumed an entire CPU core. Fix dropped utilization to 1.5%, dramatically improving API responsiveness for all users.",
          "Memory Leak (PR #508): Andrey fixed a major leak that caused the API to consume 8.6GB of RAM. Post-fix memory usage sits at ~300MB, unblocking multi-worker deployments and significantly increasing capacity.",
          "Database Connection Pooling: Improved pooler configuration reduced concurrent connections by ~60%, providing headroom for the anticipated SXSW traffic surge.",
          "RabbitMQ Migration (PR #480): Complete and merged. Background task processing is now reliable with no more silent failures in the job queue.",
        ],
      },
      {
        heading: "Features Shipped",
        paragraphs: [
          "Source Citations (PR #524): Users can now see the exact source of information in reports and briefs. Being integrated into Pre-Meeting Briefs (PR #537) and Weekly Reports.",
          "Outlook Calendar Support (PRs #517, #518): Enterprise users on Microsoft 365 can now sync their calendars for meeting booking and brief generation.",
          "Pre-Meeting Briefs v3.1: Updated with source citations and improved tone (informational rather than prescriptive) based on design partner feedback.",
        ],
      },
      {
        heading: "Technical Debt & Hiring",
        paragraphs: [
          "Test coverage is at ~40%, targeting 60% before SXSW. Top priority items: database connection pooling hardening, API rate limiting, and expanded integration tests.",
          "Two backend candidates in pipeline — one from Stripe, one from Cloudflare. Both have distributed systems experience. Phone screens scheduled for next week.",
          "Datadog monitoring dashboards are being set up using Infrastructure-as-Code to detect issues like the CPU and memory incidents earlier.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Sprint Retro: Lessons Learned",
        paragraphs: [
          "The CPU bug and memory leak went undetected for days because we lacked proper monitoring. The upcoming_meetings_scheduler was silently failing without any alerts. These incidents consumed significant engineering time that could have been spent on features.",
          "Key takeaway: invest in observability before shipping more features. The new Datadog dashboards and production incident playbook will prevent similar blind spots.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#engineering" },
      { type: "slack", label: "#incidents" },
      { type: "linear", label: "Sprint 14 Board" },
      { type: "linear", label: "PR #519 — CPU fix" },
      { type: "linear", label: "PR #508 — Memory leak" },
      { type: "linear", label: "PR #524 — Citations" },
      { type: "google-meet", label: "Engineering Sprint Retro" },
    ],
    suggestedActions: [
      { icon: "calendar", label: "Schedule backend candidate phone screens" },
      { icon: "clock", label: "Review Datadog dashboard setup" },
      { icon: "mail", label: "Share production playbook with team" },
    ],
  },

  // Hiring Pipeline (latest: rpt-hp-1)
  "rpt-hp-1": {
    id: "rpt-hp-1",
    title: "Hiring Pipeline",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "The hiring pipeline is active with two strong backend engineering candidates and early-stage conversations for a product design role. The urgency for backend hires has increased following the production stability incidents — the team needs more hands to maintain shipping velocity while reducing technical debt.",
        ],
      },
      {
        heading: "Backend Engineering (2 candidates)",
        paragraphs: [
          "Candidate A (ex-Stripe): 6 years of experience in distributed systems and payment infrastructure. Strong systems design skills, familiar with our tech stack (Python, PostgreSQL, Redis). Phone screen scheduled for next Tuesday.",
          "Candidate B (ex-Cloudflare): 5 years building edge computing and real-time data pipelines. Has open-source contributions to RabbitMQ tooling which is relevant to our recent migration. Phone screen scheduled for next Wednesday.",
          "Both candidates came through Andrey's professional network. We're targeting a senior engineer who can own infrastructure and production reliability, freeing the current team to focus on feature development.",
        ],
      },
      {
        heading: "Product Design (early stage)",
        paragraphs: [
          "Kevin Liu has been contracting for design work but we need a full-time product designer to own the end-to-end user experience, especially as we approach the SXSW launch and website relaunch.",
          "Three inbound applications this week through our careers page. Reviewing portfolios over the weekend. Priority skills: B2B SaaS product design, data visualization, and design systems experience.",
        ],
      },
      {
        heading: "Open Roles",
        paragraphs: [
          "Senior Backend Engineer — Active (2 candidates in pipeline). Target: offer by end of March.",
          "Product Designer — Open (3 applications in review). Target: first interviews by mid-March.",
          "Developer Relations — Planned for Q2. Will be important once the API launches to build an ecosystem.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#hiring" },
      { type: "google-meet", label: "Andrey / Justin 1:1" },
      { type: "notion", label: "Hiring Pipeline Tracker" },
    ],
    suggestedActions: [
      {
        icon: "calendar",
        label: "Confirm phone screen schedule with candidates",
      },
      { icon: "mail", label: "Send interview rubric to hiring panel" },
      { icon: "clock", label: "Review product designer portfolios" },
    ],
  },

  // Customer Success (latest: rpt-cs-1)
  "rpt-cs-1": {
    id: "rpt-cs-1",
    title: "Customer Success",
    dateRange: "Feb 24 – 28, 2026",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Customer success this week was defined by a mix of sharp feedback from existing design partners and promising signals from new enterprise prospects. The feedback is consistent: Sentra's core value proposition resonates strongly, but trust in AI-generated content is the primary barrier to deeper adoption.",
          "Three customer discovery calls were conducted (Relay, Campfire, Runway), each revealing a slightly different angle on the same core problem — context loss across meetings and communication tools.",
        ],
      },
      {
        heading: "Design Partner Health",
        paragraphs: [
          "Softmax (At Risk): Malcolm Ocean's feedback was the most critical this week. Pre-meeting briefs contained hallucinated to-dos and lacked source tracing. He described the experience as 'worse than useless.' Immediate action: ship citations and API access to retain them.",
          "Campfire (Healthy): Andrew Greener provided constructive feedback. Finds pre-meeting briefs valuable for external calls, unnecessary for internal. Wants a consolidated morning digest. Source citations are a prerequisite for broader team rollout.",
          "SoftBank (Expanding): Proof-of-concept extended. Team is actively testing mobile meeting capture at Mobile World Congress. Strong engagement signals — they're using the product in a real conference setting.",
        ],
      },
      {
        heading: "New Discovery Calls",
        paragraphs: [
          "Relay (40 people, B2B SaaS): Pain point is context loss in async handoffs. Managers lose ~2 hours/week manually bridging meeting decisions to task tracking. Strong interest in a pilot focused on the meeting-to-action-item pipeline.",
          "Runway (60 people, Creative tools): Suffering from 'decision archaeology' — managers spend ~5 hours/week searching across Slack, meetings, and docs to find when decisions were made. Need integration with Slack, Google Meet, Notion, and Linear.",
          "Campfire (35 people, Collaboration): Wants differentiated treatment for external vs. internal meetings. Morning digest concept was well-received. Linear integration for follow-up tracking is a key requirement.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Pattern Analysis: What Customers Actually Want",
        paragraphs: [
          "Across all customer conversations this week, three patterns emerge: 1) Source citations are table stakes — nobody trusts AI summaries without the ability to verify. 2) Internal and external meetings need different treatment. 3) The integration story matters — customers use 4-6 tools and need context to flow between them.",
          "The strongest signal is that customers view Sentra's potential as 'contextual infrastructure' rather than a standalone meeting tool. This aligns with the API-first feedback from Softmax and supports the platform direction.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#customer-success" },
      { type: "google-meet", label: "Customer Discovery — Relay" },
      { type: "google-meet", label: "Customer Discovery — Campfire" },
      { type: "google-meet", label: "Customer Discovery — Runway" },
      { type: "google-meet", label: "Softmax Design Partner Check-in" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send Relay pilot proposal" },
      { icon: "calendar", label: "Schedule Runway integration assessment" },
      { icon: "mail", label: "Share API timeline with Softmax" },
    ],
  },

  // ─── RADARS ────────────────────────────────────────────────────────

  // SXSW Launch (latest: radar-sxsw-1)
  "radar-sxsw-1": {
    id: "radar-sxsw-1",
    title: "SXSW Launch",
    dateRange: "Feb 24, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "SXSW launch preparations are on track with three weeks until the event. Booth logistics, press coverage, demo environment, and marketing materials are all progressing according to plan. The primary risk is the website relaunch timeline which has a tight one-week buffer before the event.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Booth & Logistics: Main hall, Row C confirmed. Kristina has three press meetings locked (TechCrunch, The Information, Protocol's successor) with two more tentative. Working on securing a panel slot if one opens up.",
          "Demo Environment: Andrey is setting up an isolated instance separate from staging. Will use anonymized data from actual design partner calls. Seed script in development, targeting Monday completion.",
          "Marketing: Three messaging pillars finalized ('Never lose context,' 'Decisions you can trace,' 'Your organization's memory'). Website relaunch targeting one week before SXSW. Kevin delivering final designs next Friday.",
          "Post-Event: Three-email nurture sequence drafted (day-of follow-up, day-three product deck, day-seven demo ask). Templates under review.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "Website relaunch timeline is tight — final designs due next Friday, implementation must be complete one week before SXSW. Any delays cascade into the launch.",
          "Demo data quality was flagged as a concern — last event had obviously fake placeholder names that undercut credibility. Using real anonymized data this time but seed script needs to be bulletproof.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#sxsw-launch" },
      { type: "google-meet", label: "SXSW Launch Planning" },
      { type: "google-meet", label: "Brand & Messaging Workshop" },
      { type: "notion", label: "SXSW Master Timeline" },
    ],
    suggestedActions: [
      { icon: "calendar", label: "Review demo environment on Monday" },
      { icon: "mail", label: "Confirm tentative press meetings" },
      { icon: "clock", label: "Check website relaunch timeline" },
    ],
  },

  // Product Development (latest: radar-pd-1)
  "radar-pd-1": {
    id: "radar-pd-1",
    title: "Product Development",
    dateRange: "Feb 24, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Product development velocity remains high despite production stability work consuming significant engineering time. The team shipped Source Citations, Pre-Meeting Briefs v3.1, and Outlook Calendar support this week while also resolving three critical infrastructure issues.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Source Citations (Shipped): Now live and being integrated across all report types and pre-meeting briefs. Directly addresses the top customer complaint about AI trust.",
          "Pill v2 (Blocked): Floating context pill design approved but implementation blocked on audio pipeline latency regression. Skeleton loader approach approved as the UX solution once the latency fix lands.",
          "Onboarding Simplification (In Progress): Reducing from 7 steps to 4. New mockups being created for next design critique. Targeting completion before SXSW.",
          "Commitment Extraction Model: Fine-tuned version achieving 92%+ accuracy (up from 85%) with 1.2s inference time. Approved for the SXSW demo; optimization deferred to post-launch.",
        ],
      },
      {
        heading: "Blockers",
        paragraphs: [
          "Audio pipeline latency regression is the primary blocker for Pill v2. Andrey is triaging this week with an ETA expected by Friday.",
          "Connection graph visualization performance degrades at 100+ nodes. Needs virtualization or LOD approach before launch.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#engineering" },
      { type: "linear", label: "Sprint 14 Board" },
      { type: "google-meet", label: "Product Roadmap Review" },
      { type: "google-meet", label: "Design Review — Pill v2" },
    ],
    suggestedActions: [
      { icon: "clock", label: "Check Pill v2 latency fix ETA" },
      { icon: "calendar", label: "Schedule onboarding review" },
    ],
  },

  // Partnerships (latest: radar-part-1)
  "radar-part-1": {
    id: "radar-part-1",
    title: "Partnerships",
    dateRange: "Feb 25, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Partnership activity accelerated this week with the a16z Speedrun introduction opening access to three portfolio companies, and the SoftBank PoC extension providing ongoing enterprise validation. The Accenture partnership is paused but their feedback remains strategically valuable.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "a16z Speedrun: Ali Kazemi offered introductions to three portfolio companies (Series B fintech, Series A dev tools, growth-stage healthcare). Potential for a co-marketing case study distributed to 100K+ newsletter subscribers if a pilot succeeds.",
          "SoftBank (Extended PoC): Team actively testing mobile meeting capture at Mobile World Congress. Engagement is strong — they're using the product in a real, high-stakes conference setting. Key questions remain around SOC2 timeline and 500+ seat pricing.",
          "Accenture (On Hold): Six-month pause due to their internal IT backlog. Their feedback that Sentra could 'reshape the way Accenture and our clients work' validates the strategic opportunity. Will re-engage in Q3.",
        ],
      },
      {
        heading: "Pipeline",
        paragraphs: [
          "Active: SoftBank (PoC), a16z portfolio companies (intro stage), Relay (pilot proposal sent), Runway (discovery complete).",
          "Paused: Accenture (Q3 re-engagement).",
          "New: JPM and Assurant conversations initiated through warm intros.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#partnerships" },
      { type: "google-meet", label: "Partner Intro — a16z Speedrun" },
      { type: "google-meet", label: "Demo Prep — SoftBank" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Follow up with Ali Kazemi on portfolio intros" },
      { icon: "calendar", label: "Schedule SoftBank check-in post-MWC" },
    ],
  },

  // Customer Churn Concerns (latest: radar-churn-1)
  "radar-churn-1": {
    id: "radar-churn-1",
    title: "Customer Churn Concerns",
    dateRange: "Feb 26, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Churn risk signals elevated this week primarily due to sharp feedback from Softmax and the Accenture pause. However, Campfire and SoftBank remain healthy, and new pipeline is strong. The key pattern: churn risk correlates directly with missing source citations and API access.",
        ],
      },
      {
        heading: "At-Risk Accounts",
        paragraphs: [
          "Softmax (HIGH RISK): Malcolm Ocean explicitly stated his team will 'roll their own stuff' if we don't provide API access within two months. The pre-meeting brief experience was described as 'worse than useless.' Immediate actions needed: ship citations (done), provide API access timeline, and change the AI tone from prescriptive to informational.",
          "Accenture (MEDIUM RISK — Paused): On hold for six months due to internal IT backlog. Not a churn signal per se, but the delay increases the risk of them finding alternative solutions during the pause.",
        ],
      },
      {
        heading: "Healthy Accounts",
        paragraphs: [
          "Campfire: Providing constructive feedback and engaging regularly. Citations will address their primary trust concern. Morning digest feature request shows they're thinking about deeper integration.",
          "SoftBank: Actively expanding usage. Testing mobile capture at Mobile World Congress. Engagement is increasing, not decreasing.",
        ],
      },
      {
        heading: "Mitigation Actions",
        paragraphs: [
          "For Softmax: Share API roadmap with concrete timeline (read-only API in 6 weeks, webhooks in 10 weeks). Schedule a dedicated check-in to show the citations feature.",
          "For Accenture: Maintain quarterly touchpoints during the pause. Send product updates to keep them engaged and aware of new capabilities.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#customer-success" },
      { type: "google-meet", label: "Softmax Design Partner Check-in" },
      { type: "google-meet", label: "Campfire Feedback Session" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Share API roadmap with Softmax" },
      { icon: "calendar", label: "Schedule Softmax citations demo" },
      { icon: "mail", label: "Send Accenture quarterly update" },
    ],
  },

  // Expense Management (latest: radar-exp-1)
  "radar-exp-1": {
    id: "radar-exp-1",
    title: "Expense Management",
    dateRange: "Feb 25, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Operating expenses remain within budget with a few items to watch. Cloud infrastructure costs increased 18% this month due to the production stability work requiring additional compute resources for debugging. The increase is expected to normalize once the stability fixes are deployed.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Infrastructure Costs: AWS spend increased from $4,200/month to $4,950/month driven by additional monitoring instances, RabbitMQ migration infrastructure, and debugging environments. Expected to drop back to ~$4,500/month after cleanup.",
          "SXSW Budget: $18,500 allocated for booth, travel, materials, and press dinners. Currently $2,100 committed against that budget. Remaining spend will accelerate over the next three weeks.",
          "Contractor Spend: Kevin Liu's design contract at $8,000/month. Evaluating whether to convert to full-time product designer role which would reduce cost and increase availability.",
          "Software Subscriptions: Added Datadog ($450/month) for monitoring. All other subscriptions unchanged. Total SaaS spend at $2,800/month.",
        ],
      },
      {
        heading: "Items to Watch",
        paragraphs: [
          "The 18% infrastructure cost increase should be temporary. If it persists beyond March, need to investigate whether the new monitoring and RabbitMQ infrastructure can be optimized.",
          "SXSW spend will spike in March — budget is approved but tracking closely to avoid overruns on travel and materials.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#finance" },
      { type: "notion", label: "Monthly Budget Tracker" },
      { type: "google-drive", label: "AWS Cost Report" },
    ],
    suggestedActions: [
      { icon: "clock", label: "Review AWS cost after stability fixes deploy" },
      { icon: "mail", label: "Confirm SXSW budget allocation with Ashwin" },
    ],
  },

  // Competitor Activity (latest: radar-comp-1)
  "radar-comp-1": {
    id: "radar-comp-1",
    title: "Competitor Activity",
    dateRange: "Feb 26, 2026",
    sections: [
      {
        heading: "Status Overview",
        paragraphs: [
          "Competitor landscape is heating up as the meeting intelligence category matures. Granola continues to dominate the individual user segment, while Otter.ai is pushing into enterprise. Our differentiation through source citations and the organizational memory framing gives us a distinct lane.",
        ],
      },
      {
        heading: "Key Updates",
        paragraphs: [
          "Granola: Released a team collaboration feature this week, moving from purely individual to team use cases. Their UX remains best-in-class for meeting notes — confirmed through our internal 2-week usage mandate. Key strength: simplicity and speed. Key gap: no context graph, no cross-meeting intelligence, no source citations.",
          "Otter.ai: Announced enterprise pricing tier with SSO and admin controls. Targeting mid-market companies (100-500 employees). Their transcription accuracy has improved but they still lack the 'organizational memory' story.",
          "Fireflies.ai: Quietly added CRM integrations (Salesforce, HubSpot). Focusing on sales use case rather than general meeting intelligence. Not a direct threat to our positioning but worth monitoring.",
          "Microsoft Copilot: Teams integration continues to improve. Biggest threat in the enterprise segment due to existing Microsoft 365 relationships. However, Copilot is a horizontal play — our vertical focus on 'organizational memory' is differentiated.",
        ],
      },
      {
        heading: "Strategic Implications",
        paragraphs: [
          "Granola's move into team features validates the market opportunity but also narrows our differentiation window. We need to ship the context graph and cross-meeting intelligence before they close the gap.",
          "Our trust/verification messaging (source citations) is a clear differentiator that no competitor is pursuing. This should be the center of our SXSW positioning.",
        ],
      },
    ],
    sources: [
      { type: "slack", label: "#competitive-intel" },
      { type: "slack", label: "#product-strategy" },
      { type: "notion", label: "Competitor Tracker" },
    ],
    suggestedActions: [
      { icon: "clock", label: "Update competitive landscape slide for SXSW" },
      {
        icon: "mail",
        label: "Share Granola team feature analysis with product",
      },
    ],
  },
};

const fallbackDetail: ReportDetail = {
  id: "fallback",
  title: "Weekly Review",
  dateRange: "",
  sections: [
    {
      heading: "Executive Summary",
      paragraphs: [
        "This report covers the standard weekly review period. Key developments include progress across engineering, go-to-market, and customer success functions. The team maintained shipping velocity while addressing ongoing production stability and customer feedback themes.",
      ],
    },
    {
      heading: "Highlights",
      paragraphs: [
        "Engineering continued to improve platform stability and ship incremental features. Customer conversations progressed with multiple design partners providing feedback. GTM efforts focused on pipeline development and outbound strategy refinement.",
      ],
    },
  ],
  sources: [
    { type: "slack", label: "#general" },
    { type: "google-meet", label: "Weekly Sync" },
  ],
  suggestedActions: [
    { icon: "mail", label: "Review action items from this period" },
  ],
};

export function getReportDetail(reportId: string): ReportDetail {
  if (reportDetailMap[reportId]) {
    return reportDetailMap[reportId];
  }

  const prefix = reportId.replace(/-\d+$/, "");
  const latestKey = `${prefix}-1`;
  if (reportDetailMap[latestKey]) {
    const latest = reportDetailMap[latestKey];
    return { ...latest, id: reportId };
  }

  return { ...fallbackDetail, id: reportId };
}
