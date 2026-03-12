import type { Meeting } from "@/types";

export const meetings: Meeting[] = [
  {
    id: "pn-crm-mtg-1",
    title: "PN CRM — Investor Readiness & Pre-Seed Strategy",
    date: "Mar 10, 2026",
    time: "2:00 PM",
    endTime: "3:30 PM",
    duration: "1h 30m",
    participants: [
      "Zachary Carlo",
      "Tyler Williams",
      "Katherine McIntosh",
      "Mark Richey",
    ],
    tags: ["fundraising", "strategy"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Reviewed pre-seed fundraising strategy with advisors. Discussed positioning Personal Network CRM against Clay, Folk, and Dex. Agreed on target of $500K pre-seed by end of Q2 with focus on angel investors from the networking/CRM space.",
    keyPoints: [
      {
        title: "Pre-seed target: $500K by end of Q2",
        description:
          "Consensus on raising a $500K pre-seed round targeting angel investors who understand the personal CRM category. Mark offered to make 3-4 warm introductions to angels in his network.",
        participants: ["Mark Richey", "Zachary Carlo"],
      },
      {
        title: "Differentiation from Clay and Folk",
        description:
          "Key differentiator is the relationship intelligence layer — PN CRM surfaces when relationships are going cold and suggests touchpoints. Clay is for enrichment, Folk is for teams. PN CRM is for individuals who treat their network as an asset.",
        participants: ["Zachary Carlo", "Katherine McIntosh"],
      },
      {
        title: "User metrics strong for pitch deck",
        description:
          "1,200 beta users, 38% weekly active, 4.7 average NPS score. Retention curve flattening at week 8 which is a positive signal for product-market fit. Need to include these in the deck.",
        participants: ["Tyler Williams", "Zachary Carlo"],
      },
      {
        title: "YC S26 application deadline approaching",
        description:
          "YC Summer 2026 batch application deadline is April 15. Team agreed to submit — Mark thinks the traction metrics are strong enough and offered to review the application.",
        participants: ["Mark Richey", "Zachary Carlo"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-1",
        title: "Finalize pitch deck with updated metrics",
        description:
          "Update the pre-seed pitch deck with latest user metrics, retention curves, and competitive positioning slide",
        assignee: "Zachary Carlo",
        checked: false,
      },
      {
        id: "pn-crm-ai-2",
        title: "Draft YC S26 application",
        description:
          "Complete the YC Summer 2026 application focusing on the relationship intelligence angle and traction metrics",
        assignee: "Zachary Carlo",
        checked: false,
      },
      {
        id: "pn-crm-ai-3",
        title: "Send angel investor target list to Mark for review",
        description:
          "Compile list of 15-20 angel investors in the CRM/networking space for Mark to review and intro",
        assignee: "Tyler Williams",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Mark Richey",
        text: "Alright Zach, let's talk fundraising. Where are you at with the pre-seed?",
      },
      {
        speaker: "Zachary Carlo",
        text: "We've been heads down on product for the past few months. The beta is live, we have 1,200 users, and the retention numbers are looking solid. I think we're ready to start the raise.",
        isMe: true,
      },
      {
        speaker: "Katherine McIntosh",
        text: "What's your target? And have you thought about valuation expectations?",
      },
      {
        speaker: "Zachary Carlo",
        text: "Thinking $500K on a SAFE at a $5M cap. That gives us 12-14 months of runway to hit the milestones we need for a proper seed round. The money would go to hiring one engineer and scaling our beta user base.",
        isMe: true,
      },
      {
        speaker: "Tyler Williams",
        text: "On the metrics side, our weekly active rate is 38%, which is really strong for a personal tool. And the NPS is 4.7. The retention curve is flattening at week 8 — people who stick past the first two weeks tend to stay.",
      },
      {
        speaker: "Mark Richey",
        text: "Those are solid numbers. The question is how you differentiate from Clay. They just raised a massive round and they're all over LinkedIn right now.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Clay is a completely different product. They're an enrichment and outbound tool for sales teams. We're for individuals — founders, VCs, operators — who want to manage their personal network like a real asset. Our relationship intelligence layer tells you when someone's going cold and suggests the right touchpoint. Clay doesn't do that.",
        isMe: true,
      },
      {
        speaker: "Katherine McIntosh",
        text: "That's a good framing. You should also think about YC. The S26 deadline is coming up and your traction is in the range where they'd take you seriously.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Yeah, we've been talking about that. I think we should go for it. Mark, would you be willing to review our application before we submit?",
        isMe: true,
      },
      {
        speaker: "Mark Richey",
        text: "Absolutely. Send me a draft by end of next week. And I'll put together a list of 3-4 angels I think would be a good fit for an intro.",
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
      "Zachary Carlo",
      "Tyler Williams",
      "Ashwin Gopinath",
      "Justin Cheng",
    ],
    tags: ["partnership", "product-demo"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Product demo and strategic discussion with Sentra's founding team. Explored parallels between organizational memory and personal network intelligence. Discussed potential integration — Sentra's meeting context feeding into PN CRM's relationship graph.",
    keyPoints: [
      {
        title: "Organizational memory parallels personal CRM",
        description:
          "Sentra captures decision history from interactions — same core problem PN CRM solves at the individual level. Both products treat relationships and interactions as first-class objects.",
        participants: ["Ashwin Gopinath", "Zachary Carlo"],
      },
      {
        title:
          "Integration opportunity: meeting context into relationship graph",
        description:
          "If Sentra captures meeting notes and commitments, that context could flow into PN CRM's relationship intelligence layer — automatically updating when you last spoke to someone and what was discussed.",
        participants: ["Justin Cheng", "Tyler Williams"],
      },
      {
        title: "Sentra's approach to interaction-first architecture",
        description:
          "Ashwin walked through how Sentra derives decisions, commitments, and relationships from actors + interactions. This is architecturally similar to what PN CRM is building for personal networks.",
        participants: ["Ashwin Gopinath", "Zachary Carlo"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-4",
        title: "Write up integration concept doc",
        description:
          "Draft a concept document for how Sentra's meeting context could feed into PN CRM's relationship graph",
        assignee: "Tyler Williams",
        checked: false,
      },
      {
        id: "pn-crm-ai-5",
        title: "Schedule follow-up technical architecture session",
        description:
          "Set up a technical deep dive between Tyler and Andrey (Sentra CTO) to explore API integration feasibility",
        assignee: "Zachary Carlo",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Zachary Carlo",
        text: "Ashwin, Justin — really appreciate you making time. I've been following what Sentra is building and there's a lot of overlap with what we're thinking about at Personal Network CRM.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Thanks for reaching out. We've been interested in the personal CRM space as well. Can you walk us through what you're building?",
      },
      {
        speaker: "Zachary Carlo",
        text: "Sure. At its core, PN CRM helps people manage their professional relationships by tracking interactions, surfacing when relationships are going cold, and suggesting the right touchpoint. We capture the relationship graph — who you know, how well, and what you've discussed.",
        isMe: true,
      },
      {
        speaker: "Justin Cheng",
        text: "That's really interesting. The parallels with Sentra are strong. We capture organizational memory — the decisions, context, and commitments that happen in meetings. You're essentially doing the same thing but for an individual's personal network.",
      },
      {
        speaker: "Tyler Williams",
        text: "Exactly. And that's where I think there's an integration play. If Sentra is already capturing meeting context — who said what, what was committed — that data would be incredibly valuable in our relationship graph. Right now our users have to manually log interactions.",
      },
      {
        speaker: "Ashwin Gopinath",
        text: "We think about this as actors and interactions being the two first-class objects. Everything else — decisions, relationships, temporal evolution — is derived. It sounds like you're deriving similar things but with a focus on relationship health and touchpoint optimization.",
      },
      {
        speaker: "Zachary Carlo",
        text: "That's exactly right. The question is whether we could build an integration where Sentra's meeting intelligence flows into our relationship intelligence. Imagine: you finish a meeting, Sentra captures the notes and commitments, and PN CRM automatically updates the relationship score and suggests follow-ups.",
        isMe: true,
      },
      {
        speaker: "Justin Cheng",
        text: "I love that. We should get our CTOs connected to explore the technical feasibility. We have an API roadmap that could support this kind of data flow.",
      },
    ],
  },
  {
    id: "pn-crm-mtg-3",
    title: "RedHawk Ventures — Weekly Deal Review",
    date: "Mar 6, 2026",
    time: "6:00 PM",
    endTime: "7:00 PM",
    duration: "1h",
    participants: [
      "Zachary Carlo",
      "David Nguyen",
      "Priya Mehta",
      "Sofia Ramirez",
    ],
    tags: ["redhawk-ventures", "deal-review"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly deal review for RedHawk Ventures student VC fund. Reviewed 3 inbound pitches from student founders, discussed due diligence assignments, and planned outreach for upcoming Miami University startup showcase.",
    keyPoints: [
      {
        title: "Three new student startups in pipeline",
        description:
          "Reviewed pitches from StudySync (AI tutoring), GreenRoute (campus delivery optimization), and PeerReview (anonymous feedback tool). StudySync has strongest traction with 400 MAU.",
        participants: ["David Nguyen", "Zachary Carlo"],
      },
      {
        title: "Due diligence process improvement needed",
        description:
          "Current DD process takes 3-4 weeks which is too slow for student rounds. Proposed streamlining to a 2-week sprint with standardized templates.",
        participants: ["Priya Mehta", "Zachary Carlo"],
      },
      {
        title: "Startup showcase scouting plan",
        description:
          "Miami University startup showcase in 2 weeks. Team assigned to scout 8 presenting companies and do initial screens on the spot.",
        participants: ["Sofia Ramirez", "David Nguyen"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-6",
        title: "Create standardized DD template for student startups",
        description:
          "Build a lightweight due diligence template that can be completed in 2 weeks for early-stage student companies",
        assignee: "Zachary Carlo",
        checked: false,
      },
      {
        id: "pn-crm-ai-7",
        title: "Assign DD leads for the three pipeline companies",
        description:
          "David takes StudySync, Priya takes GreenRoute, Sofia takes PeerReview",
        assignee: "David Nguyen",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "David Nguyen",
        text: "Alright, let's go through this week's pipeline. We got three new applications through the form.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Cool. I looked through them over the weekend. StudySync is the standout — AI-powered tutoring platform, already has 400 monthly active users, all organic. The founders are both CS seniors.",
        isMe: true,
      },
      {
        speaker: "Priya Mehta",
        text: "GreenRoute is interesting too. Campus delivery optimization — they've partnered with two dining halls already. Revenue is small but it's real revenue, not just user counts.",
      },
      {
        speaker: "Sofia Ramirez",
        text: "PeerReview I'm less sure about. Anonymous feedback tools have a tough time with retention. But the team is strong — the founder is the same person who built that scheduling app that half the student body uses.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Fair point. One thing I want to bring up — our DD process is taking too long. Three to four weeks for a student startup round doesn't make sense. These rounds close fast. I think we need a 2-week sprint template.",
        isMe: true,
      },
      {
        speaker: "David Nguyen",
        text: "Agreed. Let's assign leads now. I'll take StudySync since I know the AI tutoring space from my research last semester. Priya, you good with GreenRoute?",
      },
      {
        speaker: "Priya Mehta",
        text: "Yeah, I've got it. The logistics angle is right in my wheelhouse.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Great. And don't forget the startup showcase is in two weeks. We should have our scouting assignments finalized by next meeting so we can do initial screens on the spot.",
        isMe: true,
      },
    ],
  },
  {
    id: "pn-crm-mtg-4",
    title: "PN CRM — Technical Architecture & Roadmap Planning",
    date: "Mar 5, 2026",
    time: "11:00 AM",
    endTime: "12:30 PM",
    duration: "1h 30m",
    participants: [
      "Zachary Carlo",
      "Tyler Williams",
      "Sarah Lin",
      "Andy Robbins",
    ],
    tags: ["product", "engineering"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Technical deep dive into PN CRM's relationship intelligence engine. Reviewed the relationship decay algorithm, discussed contact import pipeline improvements, and planned the v2 notification system for relationship touchpoint suggestions.",
    keyPoints: [
      {
        title: "Relationship decay algorithm needs tuning",
        description:
          "Current decay function treats all relationships equally. Need to weight by relationship tier and interaction frequency history. High-value contacts should decay slower but trigger alerts earlier.",
        participants: ["Tyler Williams", "Zachary Carlo"],
      },
      {
        title: "Contact import pipeline bottleneck",
        description:
          "LinkedIn import is the #1 user request but also the biggest technical challenge. Current CSV import has 60% completion rate — users drop off during the mapping step. Need to simplify.",
        participants: ["Sarah Lin", "Andy Robbins"],
      },
      {
        title: "v2 notification system for smart touchpoints",
        description:
          "Building a notification system that suggests specific touchpoints (congrats on new job, birthday, 90 days since last contact) based on the relationship graph and external signals.",
        participants: ["Zachary Carlo", "Tyler Williams"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-8",
        title: "Redesign contact import flow to reduce drop-off",
        description:
          "Simplify the CSV mapping step — auto-detect columns and use AI to resolve ambiguous fields",
        assignee: "Sarah Lin",
        checked: false,
      },
      {
        id: "pn-crm-ai-9",
        title: "Implement tiered relationship decay weights",
        description:
          "Update the decay algorithm to factor in relationship tier (inner circle, active network, extended) and historical interaction frequency",
        assignee: "Tyler Williams",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Tyler Williams",
        text: "Let's start with the decay algorithm. I ran the numbers and right now we're treating a monthly check-in with your co-founder the same as a quarterly catch-up with an old classmate. That doesn't make sense.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Yeah, that's been bugging me too. The decay should be tiered — inner circle contacts should decay slower because you expect to talk to them more often, but they should trigger alerts earlier when they go cold because that's more concerning.",
        isMe: true,
      },
      {
        speaker: "Sarah Lin",
        text: "On the import side, I've been looking at the drop-off data. 40% of users who start a CSV import don't finish it. The column mapping step is the killer — people don't know which field is which.",
      },
      {
        speaker: "Andy Robbins",
        text: "Can we just auto-detect? If a column has email addresses, it's the email column. If it has phone numbers, it's phone. We shouldn't be asking users to map things we can figure out.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Love that. Let's build auto-detection with an AI fallback for ambiguous columns. Sarah, can you scope that out this week?",
        isMe: true,
      },
      {
        speaker: "Sarah Lin",
        text: "Yeah, I can have a spec by Friday. It's not complex — the hard part is the edge cases around custom fields.",
      },
      {
        speaker: "Tyler Williams",
        text: "For the notification system, I'm thinking we surface three types of touchpoints: life events from LinkedIn data, relationship decay alerts, and commitment follow-ups. The commitment thing ties into what we saw in the Sentra demo actually.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Exactly. If we can pull in meeting commitments automatically, the touchpoint suggestions get way more specific. Instead of 'you haven't talked to Mark in 30 days' it's 'you promised Mark you'd send that intro — it's been 2 weeks.'",
        isMe: true,
      },
    ],
  },
  {
    id: "pn-crm-mtg-5",
    title: "1809 Capital — Portfolio Founders Check-in",
    date: "Mar 4, 2026",
    time: "10:00 AM",
    endTime: "10:45 AM",
    duration: "45m",
    participants: ["Zachary Carlo", "Mark Richey", "Rachel Torres"],
    tags: ["1809-capital", "portfolio"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly check-in with 1809 Capital partners on portfolio founder support activities. Reviewed Zach's diligence work on two prospective investments and discussed upcoming LP meeting prep.",
    keyPoints: [
      {
        title: "Diligence on MeetingMind progressing",
        description:
          "Zachary completed market sizing and competitive analysis for MeetingMind (AI note-taking for sales teams). Product is strong but crowded market — Otter, Fireflies, Gong all established. Recommending pass unless defensible moat emerges in technical DD.",
        participants: ["Zachary Carlo", "Mark Richey"],
      },
      {
        title: "FounderOS showing strong signals",
        description:
          "FounderOS (operating system for first-time founders) has $200K ARR at 6 months, 92% monthly retention. Zachary's recommendation: proceed to partner meeting.",
        participants: ["Zachary Carlo", "Rachel Torres"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-10",
        title: "Complete MeetingMind technical DD summary",
        description:
          "Finish the technical due diligence summary with competitive moat assessment",
        assignee: "Zachary Carlo",
        checked: false,
      },
      {
        id: "pn-crm-ai-11",
        title: "Schedule FounderOS partner meeting",
        description:
          "Coordinate with FounderOS CEO to present to the full 1809 Capital partner group",
        assignee: "Rachel Torres",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Mark Richey",
        text: "Zach, walk us through where you're at on the two companies you've been digging into.",
      },
      {
        speaker: "Zachary Carlo",
        text: "Sure. Starting with MeetingMind — they're building AI note-taking specifically for sales teams. The product is solid, the founder has domain expertise from 8 years at Salesforce. But the market is incredibly crowded. Otter, Fireflies, Gong, and now every AI company is adding meeting notes. I'm struggling to see the defensible moat.",
        isMe: true,
      },
      {
        speaker: "Rachel Torres",
        text: "What about the sales-specific angle? Is that enough differentiation?",
      },
      {
        speaker: "Zachary Carlo",
        text: "That's what I'm trying to figure out in the technical DD. They claim their CRM integration is deeper than anyone else's — automatic deal stage updates, contact enrichment from call data. If that's real, it could be a wedge. But Gong does similar things at enterprise scale.",
        isMe: true,
      },
      {
        speaker: "Mark Richey",
        text: "My instinct is pass unless the technical DD surfaces something surprising. What about FounderOS?",
      },
      {
        speaker: "Zachary Carlo",
        text: "FounderOS is the one I'm excited about. $200K ARR in 6 months, 92% monthly retention. They're building an operating system for first-time founders — cap table management, advisor tracking, milestone planning, all in one place. The founder is a repeat entrepreneur who sold her last company for $30M.",
        isMe: true,
      },
      {
        speaker: "Rachel Torres",
        text: "Those retention numbers are impressive. I think this is worth bringing to the full partner group. I'll schedule the meeting.",
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
      "Zachary Carlo",
      "Jordan Blake",
      "Genine Fallon",
      "Andy Robbins",
    ],
    tags: ["side-hustle-club", "community"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Weekly roundtable with Side Hustle Club members. Three student founders presented progress updates. Discussed community growth strategy and upcoming speaker event with a local angel investor.",
    keyPoints: [
      {
        title: "Community growth hit 50 active members",
        description:
          "Side Hustle Club now has 50+ active members, up from 40 last month. Growth driven by word of mouth from the last speaker event. Planning to hit 75 by end of semester.",
        participants: ["Jordan Blake", "Zachary Carlo"],
      },
      {
        title: "Three student founders presented progress",
        description:
          "StudyBuddy (marketplace for peer tutoring), QuickShip (college moving service), and FreshBites (healthy meal prep delivery) all showed month-over-month growth. FreshBites generating $4K/month revenue.",
        participants: ["Genine Fallon", "Andy Robbins"],
      },
    ],
    actionItems: [
      {
        id: "pn-crm-ai-12",
        title: "Confirm angel investor speaker for next event",
        description:
          "Lock in Sofia Ramirez from Midwest Ventures to speak at the next Side Hustle Club event on angel investing basics",
        assignee: "Zachary Carlo",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Zachary Carlo",
        text: "Welcome back everyone. Before we jump into founder updates, quick community check — Jordan, where are we on membership?",
        isMe: true,
      },
      {
        speaker: "Jordan Blake",
        text: "We just hit 50 active members. That speaker event two weeks ago brought in a wave of new people. I think we can get to 75 by end of semester if we keep the programming strong.",
      },
      {
        speaker: "Genine Fallon",
        text: "Love to hear that. For tonight's founder updates, we have three presenters lined up. Let's start with FreshBites — they've been killing it.",
      },
      {
        speaker: "Andy Robbins",
        text: "FreshBites is doing $4K a month now in revenue. That's up from $2.5K last month. They're meal prepping for about 60 students per week and the unit economics actually work once they hit 50+.",
      },
      {
        speaker: "Zachary Carlo",
        text: "That's awesome. For the next event, I've been talking to Sofia Ramirez from Midwest Ventures about coming in to talk about angel investing basics. She's confirmed for March 20th.",
        isMe: true,
      },
      {
        speaker: "Jordan Blake",
        text: "Perfect. That's exactly the kind of content our members have been asking for. A lot of them want to understand how fundraising works before they actually need to do it.",
      },
    ],
  },
];
