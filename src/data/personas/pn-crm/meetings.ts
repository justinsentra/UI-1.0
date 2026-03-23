import type { Meeting } from "@/types";

export const meetings: Meeting[] = [
  {
    id: "pn-crm-mtg-1",
    title: "Circle CRM — Investor Readiness & Pre-Seed Strategy",
    date: "Mar 10, 2026",
    time: "2:00 PM",
    endTime: "3:30 PM",
    duration: "1h 30m",
    participants: [
      "Emmett Winslow",
      "Blake Carrington",
      "Simone Hartley",
      "Nolan Prescott",
    ],
    tags: ["fundraising", "strategy"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Reviewed pre-seed fundraising strategy with advisors. Discussed positioning Circle CRM against Molder, Tribe, and Rolodex, zeroing in on the relationship intelligence layer as the core differentiator. Agreed on a target of $500K pre-seed by end of Q2 with focus on angel investors from the networking/CRM space. Also aligned on submitting the LP Summer 26 application and refining the pitch deck with stronger retention metrics and competitive framing.",
    keyPoints: [
      {
        title: "Pre-seed target: $500K by end of Q2",
        description:
          "Consensus on raising a $500K pre-seed round targeting angel investors who understand the personal CRM category. Nolan offered to make 3-4 warm introductions to angels in his network.",
        participants: ["Nolan Prescott", "Emmett Winslow"],
      },
      {
        title: "Differentiation from Molder and Tribe",
        description:
          "Key differentiator is the relationship intelligence layer — Circle CRM surfaces when relationships are going cold and suggests touchpoints. Molder is for enrichment, Tribe is for teams. Circle CRM is for individuals who treat their network as an asset.",
        participants: ["Emmett Winslow", "Simone Hartley"],
      },
      {
        title: "User metrics strong for pitch deck",
        description:
          "1,200 beta users, 38% weekly active, 4.7 average NPS score. Retention curve flattening at week 8 which is a positive signal for product-market fit. Need to include these in the deck.",
        participants: ["Blake Carrington", "Emmett Winslow"],
      },
      {
        title: "LP Summer 26 application deadline approaching",
        description:
          "LP Summer 2026 batch application deadline is April 15. Team agreed to submit — Nolan thinks the traction metrics are strong enough and offered to review the application.",
        participants: ["Nolan Prescott", "Emmett Winslow"],
      },
      {
        title: "SAFE terms and valuation cap positioning",
        description:
          "Simone advised framing the $5M cap as conservative given the traction, which creates urgency for angels. Suggested anchoring on the retention curve and NPS rather than raw user count since investors are wary of vanity metrics.",
        participants: ["Simone Hartley", "Emmett Winslow"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-1",
        title: "Finalize pitch deck with updated metrics",
        description:
          "Update the pre-seed pitch deck with latest user metrics, retention curves, and competitive positioning slide",
        assignee: "Emmett Winslow",
        checked: false,
      },
      {
        id: "pn-crm-ai-2",
        title: "Draft LP Summer 26 application",
        description:
          "Complete the LP Summer 2026 application focusing on the relationship intelligence angle and traction metrics",
        assignee: "Emmett Winslow",
        checked: false,
      },
      {
        id: "pn-crm-ai-3",
        title: "Send angel investor target list to Nolan for review",
        description:
          "Compile list of 15-20 angel investors in the CRM/networking space for Nolan to review and intro",
        assignee: "Blake Carrington",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Nolan Prescott",
        text: "Alright Emmett, let's talk fundraising. Where are you at with the pre-seed? I know you've been heads down on product — give us the full picture.",
      },
      {
        speaker: "Emmett Winslow",
        text: "We've been heads down on product for the past few months. The beta is live, we have 1,200 users, and the retention numbers are looking solid. I think we're ready to start the raise.",
        isMe: true,
      },
      {
        speaker: "Simone Hartley",
        text: "What's your target? And have you thought about valuation expectations? Those are the first two questions any angel is going to ask.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Thinking $500K on a SAFE at a $5M cap. That gives us 12-14 months of runway to hit the milestones we need for a proper seed round. The money would go to hiring one engineer and scaling our beta user base.",
        isMe: true,
      },
      {
        speaker: "Simone Hartley",
        text: "I'd frame the $5M cap as conservative given what you're showing on retention. That creates urgency — angels feel like they're getting in early on something that's already working. Anchor on the retention curve, not the raw user count.",
      },
      {
        speaker: "Blake Carrington",
        text: "On the metrics side, our weekly active rate is 38%, which is really strong for a personal tool. And the NPS is 4.7. The retention curve is flattening at week 8 — people who stick past the first two weeks tend to stay.",
      },
      {
        speaker: "Nolan Prescott",
        text: "Those are solid numbers. The question is how you differentiate from Molder. They just raised a massive round and they're all over LinkedIn right now. Every investor is going to ask about it.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Molder is a completely different product. They're an enrichment and outbound tool for sales teams. We're for individuals — founders, VCs, operators — who want to manage their personal network like a real asset. Our relationship intelligence layer tells you when someone's going cold and suggests the right touchpoint. Molder doesn't do that.",
        isMe: true,
      },
      {
        speaker: "Simone Hartley",
        text: "That's a good framing, but you need to make it crisper. In the pitch, lead with the problem — everyone has a network, nobody manages it well. Then show the intelligence layer as the unlock. Don't spend time on why you're not Molder; spend time on why this category needs to exist.",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's really helpful. I've been leading with the competitive landscape in the current deck and it does feel defensive. I'll restructure to lead with the problem and our unique angle.",
        isMe: true,
      },
      {
        speaker: "Blake Carrington",
        text: "One thing I want to flag — we've been getting a lot of inbound interest from VCs and operators who found us through word of mouth. Three partners at funds have signed up organically. That's a strong signal we should include in the deck.",
      },
      {
        speaker: "Nolan Prescott",
        text: "Absolutely include that. Named logos from funds carry weight, even if they're just beta users. Now, have you thought about LP? The S26 deadline is coming up.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Yeah, we've been talking about that. I think we should go for it. The traction is there and the story is clean — college founders building the personal CRM they wished existed. Nolan, would you be willing to review our application before we submit?",
        isMe: true,
      },
      {
        speaker: "Nolan Prescott",
        text: "Absolutely. Send me a draft by end of next week. The key with LP is the one-minute video — you need to show the product, not just talk about it. Make sure the demo is tight.",
      },
      {
        speaker: "Simone Hartley",
        text: "Also think about the 'why now' angle for LP. Remote work exploded professional networks, but nobody has the tools to manage those relationships at scale. That's your macro tailwind.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Great point. The distributed work trend means people have way more weak ties than they used to, and those weak ties are where opportunities come from. We help you actually maintain them instead of letting them decay.",
        isMe: true,
      },
      {
        speaker: "Nolan Prescott",
        text: "And I'll put together a list of 3-4 angels I think would be a good fit for an intro. Blake, can you compile the target list of 15-20 names so I can cross-reference with my network?",
      },
      {
        speaker: "Blake Carrington",
        text: "On it. I've already started a list based on investors who've backed personal productivity tools. I'll have it ready by Wednesday so Nolan can review before the weekend.",
      },
    ],
  },
  {
    id: "pn-crm-mtg-2",
    title: "Sentra — Product Demo & Organizational Memory Discussion",
    date: "Mar 7, 2026",
    time: "4:00 PM",
    endTime: "5:00 PM",
    duration: "1h",
    participants: [
      "Emmett Winslow",
      "Blake Carrington",
      "Raj Sundaram",
      "Leo Hartwell",
    ],
    tags: ["partnership", "product-demo"],
    platform: "Alphabase Meet",
    privacy: "public",
    summary:
      "Product demo and strategic discussion with Sentra's founding team. Explored deep parallels between organizational memory and personal network intelligence — both treat relationships and interactions as first-class objects. Discussed a potential integration where Sentra's meeting context feeds into Circle CRM's relationship graph, automatically updating interaction history and surfacing commitment-based follow-ups. Agreed to connect the technical teams for an API feasibility deep dive.",
    keyPoints: [
      {
        title: "Organizational memory parallels personal CRM",
        description:
          "Sentra captures decision history from interactions — same core problem Circle CRM solves at the individual level. Both products treat relationships and interactions as first-class objects.",
        participants: ["Raj Sundaram", "Emmett Winslow"],
      },
      {
        title:
          "Integration opportunity: meeting context into relationship graph",
        description:
          "If Sentra captures meeting notes and commitments, that context could flow into Circle CRM's relationship intelligence layer — automatically updating when you last spoke to someone and what was discussed.",
        participants: ["Leo Hartwell", "Blake Carrington"],
      },
      {
        title: "Sentra's approach to interaction-first architecture",
        description:
          "Raj walked through how Sentra derives decisions, commitments, and relationships from actors + interactions. This is architecturally similar to what Circle CRM is building for personal networks.",
        participants: ["Raj Sundaram", "Emmett Winslow"],
      },
      {
        title: "Shared ICP overlap creates distribution opportunity",
        description:
          "Both products serve founders, operators, and VCs. Sentra's organizational tool and Circle CRM's personal tool are complementary rather than competitive, opening a potential co-marketing or bundled distribution play.",
        participants: ["Leo Hartwell", "Emmett Winslow"],
      },
      {
        title: "API-first design enables bidirectional data flow",
        description:
          "Blake and Leo identified that both products are being built API-first, which makes a lightweight integration feasible without deep coupling. A webhook-based approach could ship in weeks, not months.",
        participants: ["Blake Carrington", "Leo Hartwell"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-4",
        title: "Write up integration concept doc",
        description:
          "Draft a concept document for how Sentra's meeting context could feed into Circle CRM's relationship graph",
        assignee: "Blake Carrington",
        checked: false,
      },
      {
        id: "pn-crm-ai-5",
        title: "Schedule follow-up technical architecture session",
        description:
          "Set up a technical deep dive between Blake and Pavel (Sentra CTO) to explore API integration feasibility",
        assignee: "Emmett Winslow",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Emmett Winslow",
        text: "Raj, Leo — really appreciate you making time. I've been following what Sentra is building and there's a lot of overlap with what we're thinking about at Circle CRM. I wanted to explore whether there's a real integration opportunity here.",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "Thanks for reaching out. We've been interested in the personal CRM space as well. Can you walk us through what you're building and where you're at today?",
      },
      {
        speaker: "Emmett Winslow",
        text: "Sure. At its core, Circle CRM helps people manage their professional relationships by tracking interactions, surfacing when relationships are going cold, and suggesting the right touchpoint. We capture the relationship graph — who you know, how well, and what you've discussed.",
        isMe: true,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's really interesting. The parallels with Sentra are strong. We capture organizational memory — the decisions, context, and commitments that happen in meetings. You're essentially doing the same thing but for an individual's personal network.",
      },
      {
        speaker: "Raj Sundaram",
        text: "We think about this as actors and interactions being the two first-class objects. Everything else — decisions, relationships, temporal evolution — is derived. It sounds like you're deriving similar things but with a focus on relationship health and touchpoint optimization.",
      },
      {
        speaker: "Blake Carrington",
        text: "Exactly. And that's where I think there's an integration play. If Sentra is already capturing meeting context — who said what, what was committed — that data would be incredibly valuable in our relationship graph. Right now our users have to manually log interactions, which is the biggest point of friction.",
      },
      {
        speaker: "Leo Hartwell",
        text: "We've heard that from other folks in the ecosystem too. The manual logging problem is real — people don't do it, and then their CRM goes stale. If we can automate that through the meeting layer, it's a win for both products.",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's exactly right. The question is whether we could build an integration where Sentra's meeting intelligence flows into our relationship intelligence. Imagine: you finish a meeting, Sentra captures the notes and commitments, and Circle CRM automatically updates the relationship score and suggests follow-ups.",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "Architecturally, that's very feasible for us. We already extract commitments and participant context from every meeting. Exposing that through an API or webhook is on our roadmap. The question is what data shape you'd need on your end.",
      },
      {
        speaker: "Blake Carrington",
        text: "For us, the minimum viable payload would be: participants, key commitments tied to specific people, and a summary of what was discussed. If we get that after every meeting, we can update the relationship graph in real time.",
      },
      {
        speaker: "Leo Hartwell",
        text: "That maps well to what we already capture. I think the fastest path is a webhook integration — Sentra fires an event after meeting processing, and Circle CRM consumes it. We should get our CTOs connected to explore the technical feasibility.",
      },
      {
        speaker: "Emmett Winslow",
        text: "I love that. I'll set up a session between Blake and Pavel. There's also a distribution angle I want to flag — we serve a lot of the same users. Founders, operators, VCs. Your organizational tool and our personal tool are complementary, not competitive.",
        isMe: true,
      },
      {
        speaker: "Leo Hartwell",
        text: "Agreed. There could be a co-marketing play there eventually. For now, let's nail the integration and see how users respond. If the data flow works, the distribution story writes itself.",
      },
      {
        speaker: "Raj Sundaram",
        text: "One more thought — the commitment extraction piece is something we're investing heavily in. If Circle CRM can surface 'you told Wendy you'd send that intro' as a follow-up nudge, that's incredibly high-value. It turns meeting notes into relationship actions.",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's the dream state. Right now our nudges are time-based — 'you haven't talked to this person in 30 days.' With Sentra's data, they become context-aware — 'you promised this person something specific and haven't followed through.' Way more actionable.",
        isMe: true,
      },
      {
        speaker: "Blake Carrington",
        text: "I'll draft a concept doc this week with the proposed data flow and integration points. That way when we connect with Pavel, we have something concrete to react to rather than starting from scratch.",
      },
    ],
  },
  {
    id: "pn-crm-mtg-3",
    title: "IronHawk Ventures — Weekly Deal Review",
    date: "Mar 6, 2026",
    time: "6:00 PM",
    endTime: "7:00 PM",
    duration: "1h",
    participants: [
      "Emmett Winslow",
      "Hector Reyes",
      "Divya Kapoor",
      "Lucia Montoya",
    ],
    tags: ["redhawk-ventures", "deal-review"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly deal review for IronHawk Ventures student VC fund. Reviewed 3 inbound pitches from student founders — StudySync (AI tutoring), GreenRoute (campus delivery optimization), and PeerReview (anonymous feedback tool). StudySync has the strongest traction at 400 MAU. Discussed streamlining the due diligence process from 3-4 weeks to a 2-week sprint with standardized templates, and planned scouting assignments for the upcoming Buckeye State University startup showcase.",
    keyPoints: [
      {
        title: "Three new student startups in pipeline",
        description:
          "Reviewed pitches from StudySync (AI tutoring), GreenRoute (campus delivery optimization), and PeerReview (anonymous feedback tool). StudySync has strongest traction with 400 MAU.",
        participants: ["Hector Reyes", "Emmett Winslow"],
      },
      {
        title: "Due diligence process improvement needed",
        description:
          "Current DD process takes 3-4 weeks which is too slow for student rounds. Proposed streamlining to a 2-week sprint with standardized templates.",
        participants: ["Divya Kapoor", "Emmett Winslow"],
      },
      {
        title: "Startup showcase scouting plan",
        description:
          "Buckeye State University startup showcase in 2 weeks. Team assigned to scout 8 presenting companies and do initial screens on the spot.",
        participants: ["Lucia Montoya", "Hector Reyes"],
      },
      {
        title: "Portfolio construction strategy for the semester",
        description:
          "Fund has capacity for 2-3 more investments this semester. Need to be selective and focus on companies with real revenue or strong retention metrics rather than just user counts.",
        participants: ["Emmett Winslow", "Divya Kapoor"],
      },
      {
        title: "PeerReview retention risk flagged",
        description:
          "Anonymous feedback tools historically struggle with retention. Team agreed to investigate PeerReview's engagement data more carefully before committing to full DD, despite the strong founding team.",
        participants: ["Lucia Montoya", "Emmett Winslow"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-6",
        title: "Create standardized DD template for student startups",
        description:
          "Build a lightweight due diligence template that can be completed in 2 weeks for early-stage student companies",
        assignee: "Emmett Winslow",
        checked: false,
      },
      {
        id: "pn-crm-ai-7",
        title: "Assign DD leads for the three pipeline companies",
        description:
          "David takes StudySync, Priya takes GreenRoute, Sofia takes PeerReview",
        assignee: "Hector Reyes",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Hector Reyes",
        text: "Alright, let's go through this week's pipeline. We got three new applications through the form. I did an initial pass and they all look worth discussing.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Cool. I looked through them over the weekend. StudySync is the standout — AI-powered tutoring platform, already has 400 monthly active users, all organic. The founders are both CS seniors and the product is genuinely impressive.",
        isMe: true,
      },
      {
        speaker: "Hector Reyes",
        text: "Agreed on StudySync. Their demo blew me away — the AI adapts to learning style in real time. The question is whether they can retain users after finals season or if it's cyclical.",
      },
      {
        speaker: "Divya Kapoor",
        text: "GreenRoute is interesting too. Campus delivery optimization — they've partnered with two dining halls already. Revenue is small but it's real revenue, not just user counts. They're doing about $1,200 a month in delivery fees.",
      },
      {
        speaker: "Emmett Winslow",
        text: "What's their take rate on each delivery? That's where the economics either work or don't for logistics startups.",
        isMe: true,
      },
      {
        speaker: "Divya Kapoor",
        text: "They're taking 15% per delivery, which is low compared to DoorDash, but they're running a much simpler operation since it's all on-campus. The margins actually get better with volume because the routes get denser.",
      },
      {
        speaker: "Lucia Montoya",
        text: "PeerReview I'm less sure about. Anonymous feedback tools have a tough time with retention. But the team is strong — the founder is the same person who built that scheduling app that half the student body uses.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Fair point. The founder's track record is compelling, but I'm skeptical about the category. Let's ask for their 30-day and 60-day retention cohorts before we commit to full DD. If the numbers hold, the founder can probably figure out the rest.",
        isMe: true,
      },
      {
        speaker: "Lucia Montoya",
        text: "That's reasonable. I'll reach out and ask for the cohort data. If it looks good, I'll start the full deep dive. If not, we save ourselves two weeks of work.",
      },
      {
        speaker: "Emmett Winslow",
        text: "One thing I want to bring up — our DD process is taking too long. Three to four weeks for a student startup round doesn't make sense. These rounds close fast and we've already lost one deal because we were too slow. I think we need a 2-week sprint template.",
        isMe: true,
      },
      {
        speaker: "Hector Reyes",
        text: "Agreed. Let's assign leads now. I'll take StudySync since I know the AI tutoring space from my research last semester. Priya, you good with GreenRoute?",
      },
      {
        speaker: "Divya Kapoor",
        text: "Yeah, I've got it. The logistics angle is right in my wheelhouse. I'll also benchmark their unit economics against the two campus delivery companies I researched last month.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Perfect. Also keep in mind we have capacity for 2-3 more investments this semester. We need to be selective — I'd rather make two great bets than three mediocre ones. Focus on companies with real revenue or sticky retention.",
        isMe: true,
      },
      {
        speaker: "Hector Reyes",
        text: "Speaking of deal flow, the startup showcase is in two weeks. Eight companies are presenting and we should have our scouting assignments locked in by next meeting.",
      },
      {
        speaker: "Lucia Montoya",
        text: "I'll pull together the list of presenting companies and their one-pagers. We can divide them up based on sector interest so everyone's doing screens they're already knowledgeable about.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Great. And don't forget the startup showcase is also a recruiting opportunity for RedHawk. We should have our pitch ready for any student founders who might want to join the fund as analysts next semester.",
        isMe: true,
      },
    ],
  },
  {
    id: "pn-crm-mtg-4",
    title: "Circle CRM — Technical Architecture & Roadmap Planning",
    date: "Mar 5, 2026",
    time: "11:00 AM",
    endTime: "12:30 PM",
    duration: "1h 30m",
    participants: [
      "Emmett Winslow",
      "Blake Carrington",
      "Wendy Tsao",
      "Dustin Keller",
    ],
    tags: ["product", "engineering"],
    platform: "Alphabase Meet",
    privacy: "public",
    summary:
      "Technical deep dive into Circle CRM's relationship intelligence engine. Reviewed the relationship decay algorithm and identified the need for tier-based weighting so high-value contacts decay slower but trigger alerts earlier. Discussed the contact import pipeline — CSV import has a 60% completion rate with users dropping off at the column mapping step, so the team is building auto-detection with an AI fallback. Planned the v2 notification system that surfaces commitment-based follow-ups alongside time-based decay alerts.",
    keyPoints: [
      {
        title: "Relationship decay algorithm needs tuning",
        description:
          "Current decay function treats all relationships equally. Need to weight by relationship tier and interaction frequency history. High-value contacts should decay slower but trigger alerts earlier.",
        participants: ["Blake Carrington", "Emmett Winslow"],
      },
      {
        title: "Contact import pipeline bottleneck",
        description:
          "LinkedIn import is the #1 user request but also the biggest technical challenge. Current CSV import has 60% completion rate — users drop off during the mapping step. Need to simplify.",
        participants: ["Wendy Tsao", "Dustin Keller"],
      },
      {
        title: "v2 notification system for smart touchpoints",
        description:
          "Building a notification system that suggests specific touchpoints (congrats on new job, birthday, 90 days since last contact) based on the relationship graph and external signals.",
        participants: ["Emmett Winslow", "Blake Carrington"],
      },
      {
        title: "Graph database migration under consideration",
        description:
          "Dustin proposed migrating from Postgres to Neo4j for the relationship graph layer. The traversal queries are getting complex and slow. Team agreed to benchmark before committing to a migration.",
        participants: ["Dustin Keller", "Blake Carrington"],
      },
      {
        title: "Mobile push notification strategy",
        description:
          "Smart touchpoint notifications need to reach users in the moment, not just in-app. Team aligned on building push notifications for mobile as a priority alongside the v2 notification engine.",
        participants: ["Emmett Winslow", "Wendy Tsao"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-8",
        title: "Redesign contact import flow to reduce drop-off",
        description:
          "Simplify the CSV mapping step — auto-detect columns and use AI to resolve ambiguous fields",
        assignee: "Wendy Tsao",
        checked: false,
      },
      {
        id: "pn-crm-ai-9",
        title: "Implement tiered relationship decay weights",
        description:
          "Update the decay algorithm to factor in relationship tier (inner circle, active network, extended) and historical interaction frequency",
        assignee: "Blake Carrington",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Blake Carrington",
        text: "Let's start with the decay algorithm. I ran the numbers and right now we're treating a monthly check-in with your co-founder the same as a quarterly catch-up with an old classmate. That doesn't make sense.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Yeah, that's been bugging me too. The decay should be tiered — inner circle contacts should decay slower because you expect to talk to them more often, but they should trigger alerts earlier when they go cold because that's more concerning.",
        isMe: true,
      },
      {
        speaker: "Blake Carrington",
        text: "Exactly. I'm thinking three tiers: inner circle with a 0.7 decay rate and a 14-day alert threshold, active network at 0.5 with 30 days, and extended at 0.3 with 60 days. The decay rate determines how fast the relationship score drops per day of no interaction.",
      },
      {
        speaker: "Dustin Keller",
        text: "One thing to consider — as we add more tiered logic, the graph queries are getting heavy. We're already seeing latency on the relationship score calculations for power users with 500+ contacts. Have you thought about moving to Neo4j?",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's a big migration. How much faster are we talking? I don't want to eat two weeks of engineering time unless the performance gain is meaningful.",
        isMe: true,
      },
      {
        speaker: "Dustin Keller",
        text: "For traversal queries like 'show me all contacts who are decaying and have a pending commitment,' Neo4j would be 10-20x faster than what we're doing with Postgres joins. But you're right, the migration isn't trivial. I'd suggest we benchmark first.",
      },
      {
        speaker: "Blake Carrington",
        text: "Let's do the benchmark. Dustin, can you set up a Neo4j instance with our test dataset and run the top 5 heaviest queries? If the numbers justify it, we plan the migration for the next sprint.",
      },
      {
        speaker: "Wendy Tsao",
        text: "On the import side, I've been looking at the drop-off data. 40% of users who start a CSV import don't finish it. The column mapping step is the killer — people don't know which field is which, and they get frustrated trying to match their messy export to our schema.",
      },
      {
        speaker: "Dustin Keller",
        text: "Can we just auto-detect? If a column has email addresses, it's the email column. If it has phone numbers, it's phone. We shouldn't be asking users to map things we can figure out programmatically.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Love that. Let's build auto-detection with an AI fallback for ambiguous columns. Wendy, can you scope that out this week? I want this fixed before we start the fundraising push — import is the first thing investors try.",
        isMe: true,
      },
      {
        speaker: "Wendy Tsao",
        text: "Yeah, I can have a spec by Friday. It's not complex — the hard part is the edge cases around custom fields. Some people have columns like 'How we met' or 'Vibe check' that don't map to anything standard.",
      },
      {
        speaker: "Emmett Winslow",
        text: "For custom fields, just dump them into a notes section for now. We can get fancy later. The goal is 90%+ completion rate on import — that's the metric we optimize for.",
        isMe: true,
      },
      {
        speaker: "Blake Carrington",
        text: "For the notification system, I'm thinking we surface three types of touchpoints: life events from LinkedIn data, relationship decay alerts, and commitment follow-ups. The commitment thing ties into what we saw in the Sentra demo actually.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Exactly. If we can pull in meeting commitments automatically, the touchpoint suggestions get way more specific. Instead of 'you haven't talked to Nolan in 30 days' it's 'you promised Nolan you'd send that intro — it's been 2 weeks.' That's a fundamentally different product experience.",
        isMe: true,
      },
      {
        speaker: "Wendy Tsao",
        text: "For the notifications to actually work, we need push notifications on mobile. In-app alerts aren't enough — people need the nudge in the moment, like when they're about to walk into a meeting with someone they haven't talked to in months.",
      },
      {
        speaker: "Dustin Keller",
        text: "Agreed. I can set up Firebase Cloud Messaging for the push layer. It's pretty straightforward once we have the notification engine generating the events. The trigger logic is the hard part, not the delivery.",
      },
      {
        speaker: "Blake Carrington",
        text: "Let's prioritize it this way: decay algorithm tuning first since it affects the core product, then import flow redesign since it affects activation, then notification system since it's a new feature. We can ship the first two in the next two weeks.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Sounds right. Let's also do a quick user research check — I want to talk to 5 power users about what notifications they'd actually want before we build the full system. No point building push notifications nobody turns on.",
        isMe: true,
      },
    ],
  },
  {
    id: "pn-crm-mtg-5",
    title: "Pinnacle Capital — Portfolio Founders Check-in",
    date: "Mar 4, 2026",
    time: "10:00 AM",
    endTime: "10:45 AM",
    duration: "45m",
    participants: ["Emmett Winslow", "Nolan Prescott", "Monica Pearce"],
    tags: ["1809-capital", "portfolio"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly check-in with Pinnacle Capital partners on portfolio founder support activities. Reviewed Emmett's diligence work on two prospective investments — MeetingMind (AI note-taking for sales teams) and FounderOS (operating system for first-time founders). MeetingMind is in a crowded market with unclear defensibility, so the recommendation is likely a pass. FounderOS is showing strong signals at $200K ARR with 92% monthly retention, and the team agreed to bring it to a full partner meeting.",
    keyPoints: [
      {
        title: "Diligence on MeetingMind progressing",
        description:
          "Emmett completed market sizing and competitive analysis for MeetingMind (AI note-taking for sales teams). Product is strong but crowded market — Echobird, Buzzbot, Voiceflow all established. Recommending pass unless defensible moat emerges in technical DD.",
        participants: ["Emmett Winslow", "Nolan Prescott"],
      },
      {
        title: "FounderOS showing strong signals",
        description:
          "FounderOS (operating system for first-time founders) has $200K ARR at 6 months, 92% monthly retention. Emmett's recommendation: proceed to partner meeting.",
        participants: ["Emmett Winslow", "Monica Pearce"],
      },
      {
        title: "LP meeting preparation timeline",
        description:
          "Quarterly LP meeting is in three weeks. Rachel needs portfolio update slides from each deal lead by end of next week. Emmett will include FounderOS as a potential new investment highlight.",
        participants: ["Monica Pearce", "Nolan Prescott"],
      },
      {
        title: "Fund deployment pace on track",
        description:
          "Pinnacle Capital has deployed 60% of the fund with 4 months remaining in the investment period. Pace is healthy but the team needs to be selective with the remaining capital to maintain portfolio quality.",
        participants: ["Nolan Prescott", "Emmett Winslow"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-10",
        title: "Complete MeetingMind technical DD summary",
        description:
          "Finish the technical due diligence summary with competitive moat assessment",
        assignee: "Emmett Winslow",
        checked: false,
      },
      {
        id: "pn-crm-ai-11",
        title: "Schedule FounderOS partner meeting",
        description:
          "Coordinate with FounderOS CEO to present to the full Pinnacle Capital partner group",
        assignee: "Monica Pearce",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Nolan Prescott",
        text: "Emmett, walk us through where you're at on the two companies you've been digging into. Let's start with MeetingMind.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Sure. Starting with MeetingMind — they're building AI note-taking specifically for sales teams. The product is solid, the founder has domain expertise from 8 years at CloudForce. But the market is incredibly crowded. Echobird, Buzzbot, Voiceflow, and now every AI company is adding meeting notes. I'm struggling to see the defensible moat.",
        isMe: true,
      },
      {
        speaker: "Monica Pearce",
        text: "What about the sales-specific angle? Is that enough differentiation? There's a difference between a horizontal meeting tool and something built specifically for sales workflows.",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's what I'm trying to figure out in the technical DD. They claim their CRM integration is deeper than anyone else's — automatic deal stage updates, contact enrichment from call data. If that's real, it could be a wedge. But Voiceflow does similar things at enterprise scale.",
        isMe: true,
      },
      {
        speaker: "Nolan Prescott",
        text: "My instinct is pass unless the technical DD surfaces something surprising. The timing is wrong for this category — there's too much money already in the space and the incumbents are well-funded. What about FounderOS?",
      },
      {
        speaker: "Emmett Winslow",
        text: "FounderOS is the one I'm excited about. $200K ARR in 6 months, 92% monthly retention. They're building an operating system for first-time founders — cap table management, advisor tracking, milestone planning, all in one place. The founder is a repeat entrepreneur who sold her last company for $30M.",
        isMe: true,
      },
      {
        speaker: "Monica Pearce",
        text: "Those retention numbers are impressive. What's driving the retention? Is it the cap table piece or the broader workflow?",
      },
      {
        speaker: "Emmett Winslow",
        text: "It's the full workflow. Cap table management gets them in the door, but the milestone tracking and advisor management features are what keep people coming back weekly. The founder told me that 70% of active users check it at least three times a week.",
        isMe: true,
      },
      {
        speaker: "Nolan Prescott",
        text: "What's the competitive landscape look like? Carta does cap tables, and there are a bunch of project management tools that founders already use.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Carta is the obvious comp, but they're focused on cap table and 409A valuations for later-stage companies. FounderOS is specifically for first-time founders in the zero-to-one phase. Nobody else is bundling cap table, advisor management, and milestone tracking into one tool designed for that persona.",
        isMe: true,
      },
      {
        speaker: "Monica Pearce",
        text: "I think this is worth bringing to the full partner group. I'll schedule the meeting. Emmett, can you prep a one-pager with the key metrics and your investment thesis for the partners?",
      },
      {
        speaker: "Emmett Winslow",
        text: "Absolutely. I'll have it ready by Thursday. I'll also include a competitive landscape slide since I know that's going to be the first question from the other partners.",
        isMe: true,
      },
      {
        speaker: "Nolan Prescott",
        text: "One more thing — the LP meeting is in three weeks. Rachel, we need portfolio update slides from each deal lead by end of next week. Emmett, include FounderOS as a potential new investment highlight even if we haven't committed yet. LPs like to see active pipeline.",
      },
      {
        speaker: "Monica Pearce",
        text: "I'll send the slide template to all deal leads today. We should also flag that we've deployed 60% of the fund — the LPs will want to know we're being thoughtful about the remaining capital.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Makes sense. I'll wrap up the MeetingMind DD summary this week too so we can formally close that one out. No point leaving it open if the conviction isn't there.",
        isMe: true,
      },
    ],
  },
  {
    id: "pn-crm-mtg-6",
    title: "Side Hustle Club — Weekly Founders Roundtable",
    date: "Mar 3, 2026",
    time: "7:00 PM",
    endTime: "8:00 PM",
    duration: "1h",
    participants: [
      "Emmett Winslow",
      "Casey Whitmore",
      "Tamara Novotny",
      "Dustin Keller",
    ],
    tags: ["side-hustle-club", "community"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Weekly roundtable with Side Hustle Club members. Community hit 50 active members, up from 40 last month, with growth driven by word of mouth from the last speaker event. Three student founders presented progress updates — FreshBites is generating $4K/month in revenue with strong unit economics. Confirmed Lucia Montoya from Midwest Ventures as the speaker for the March 20th event on angel investing basics, and discussed launching a mentorship matching program to pair experienced members with newer founders.",
    keyPoints: [
      {
        title: "Community growth hit 50 active members",
        description:
          "Side Hustle Club now has 50+ active members, up from 40 last month. Growth driven by word of mouth from the last speaker event. Planning to hit 75 by end of semester.",
        participants: ["Casey Whitmore", "Emmett Winslow"],
      },
      {
        title: "Three student founders presented progress",
        description:
          "StudyBuddy (marketplace for peer tutoring), QuickShip (college moving service), and FreshBites (healthy meal prep delivery) all showed month-over-month growth. FreshBites generating $4K/month revenue.",
        participants: ["Tamara Novotny", "Dustin Keller"],
      },
      {
        title: "Angel investing speaker event confirmed",
        description:
          "Lucia Montoya from Midwest Ventures confirmed for March 20th to speak about angel investing basics. This is the most-requested topic from member surveys.",
        participants: ["Emmett Winslow", "Casey Whitmore"],
      },
      {
        title: "Mentorship matching program proposed",
        description:
          "Tamara proposed pairing experienced student founders with newer members for one-on-one mentorship. Pilot program targeting 10 pairs starting next month with a structured check-in cadence.",
        participants: ["Tamara Novotny", "Emmett Winslow"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-12",
        title: "Confirm angel investor speaker for next event",
        description:
          "Lock in Lucia Montoya from Midwest Ventures to speak at the next Side Hustle Club event on angel investing basics",
        assignee: "Emmett Winslow",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Emmett Winslow",
        text: "Welcome back everyone. Before we jump into founder updates, quick community check — Casey, where are we on membership? I know we had a goal of hitting 50 this month.",
        isMe: true,
      },
      {
        speaker: "Casey Whitmore",
        text: "We just hit 50 active members this week. That speaker event two weeks ago brought in a wave of new people. I think we can get to 75 by end of semester if we keep the programming strong and maybe do one more big event.",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's great to hear. What's the retention been like on the new members? I want to make sure we're not just churning through sign-ups who show up once and disappear.",
        isMe: true,
      },
      {
        speaker: "Casey Whitmore",
        text: "Actually pretty solid — of the 12 new members from the last event, 9 came back for the following week's session. The ones who stuck around said they loved the founder updates format because it felt practical, not just motivational fluff.",
      },
      {
        speaker: "Tamara Novotny",
        text: "Love to hear that. For tonight's founder updates, we have three presenters lined up. Let's start with FreshBites — they've been killing it. Dustin, you've been advising them, right?",
      },
      {
        speaker: "Dustin Keller",
        text: "FreshBites is doing $4K a month now in revenue. That's up from $2.5K last month. They're meal prepping for about 60 students per week and the unit economics actually work once they hit 50+. Their food cost per meal is $4.50 and they're charging $9, so the margins are healthy.",
      },
      {
        speaker: "Emmett Winslow",
        text: "That's a real business. Are they thinking about expanding to other campuses, or are they going deeper on this one first?",
        isMe: true,
      },
      {
        speaker: "Dustin Keller",
        text: "They want to nail the playbook here first — get to $8K/month on one campus and then replicate. Smart approach honestly. They're also testing a subscription model where students pre-pay for the week, which should help with demand forecasting and reduce food waste.",
      },
      {
        speaker: "Tamara Novotny",
        text: "StudyBuddy and QuickShip also presented solid updates. StudyBuddy has 200 matched tutoring sessions this month, up 40% from last month. QuickShip is gearing up for move-out season which is their big revenue window — they're projecting $10K in May alone.",
      },
      {
        speaker: "Emmett Winslow",
        text: "These are exactly the kind of updates I love seeing. Real numbers, real growth. For the next event, I've been talking to Lucia Montoya from Midwest Ventures about coming in to talk about angel investing basics. She's confirmed for March 20th.",
        isMe: true,
      },
      {
        speaker: "Casey Whitmore",
        text: "Perfect. That's exactly the kind of content our members have been asking for. A lot of them want to understand how fundraising works before they actually need to do it. Should we cap attendance or open it up?",
      },
      {
        speaker: "Emmett Winslow",
        text: "Let's open it up — this could be another growth moment for the club. We can promote it on campus social media and see if we pull in some new faces. Sofia said she's happy to do Q&A so it'll be interactive.",
        isMe: true,
      },
      {
        speaker: "Tamara Novotny",
        text: "One idea I've been thinking about — we should start a mentorship matching program. Pair the more experienced founders in the club with newer members. One-on-one check-ins, maybe bi-weekly. I think it would help with retention and make the club more sticky.",
      },
      {
        speaker: "Dustin Keller",
        text: "I'd be into that. When I was starting out, having someone a semester ahead of me who'd already made the mistakes would have saved me months. The key is keeping it structured so it doesn't fizzle out after two weeks.",
      },
      {
        speaker: "Emmett Winslow",
        text: "Great idea, Tamara. Let's pilot it with 10 pairs and see how it goes. Set up a simple matching form — what stage you're at, what you need help with, and what you can offer. We can launch it at the Sofia event as a new member benefit.",
        isMe: true,
      },
      {
        speaker: "Casey Whitmore",
        text: "I can build the matching form this week and send it out to the mailing list. If we get enough responses by March 20th, we can announce the first cohort of pairs at the event. That gives people a reason to come back for the next session too.",
      },
    ],
  },
];
