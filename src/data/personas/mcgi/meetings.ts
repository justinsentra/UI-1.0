import type { Meeting } from "@/types";

export const meetings: Meeting[] = [
  {
    id: "mcgi-mtg-1",
    title: "Investment Committee — Q1 Pipeline Review",
    date: "Mar 10, 2026",
    time: "10:00 AM",
    endTime: "11:30 AM",
    duration: "1h 30m",
    participants: [
      "Ryotaro Nakamura",
      "Sunna Mo",
      "Mihiro Nakamura",
      "Kengo Morimoto",
      "Takeshi Yamada",
    ],
    tags: ["investment-committee", "pipeline"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Reviewed 14 active pipeline deals across AI infrastructure, climate tech, and enterprise SaaS. Committee approved moving Sentra and two climate-tech companies to due diligence. Discussed allocation strategy given current JPY 100B deployment pace.",
    keyPoints: [
      {
        title: "Pipeline health strong in AI/enterprise",
        description:
          "14 active deals, 6 in AI infrastructure and enterprise software. Conversion from screening to DD running at 22%, above Q4 benchmark of 18%.",
        participants: ["Ryotaro Nakamura", "Kengo Morimoto"],
      },
      {
        title: "Three companies approved for due diligence",
        description:
          "Sentra (organizational memory), CarbonGrid (industrial carbon capture), and FluxMaterials (battery recycling) approved to move to full DD. Target close for Sentra within 6 weeks.",
        participants: ["Sunna Mo", "Ryotaro Nakamura"],
      },
      {
        title: "Deployment pace tracking ahead of plan",
        description:
          "YTD deployed $48M against $120M annual target. May need to adjust pacing in H2 if quality deal flow maintains current levels.",
        participants: ["Kengo Morimoto", "Takeshi Yamada"],
      },
      {
        title: "Climate tech allocation under review",
        description:
          "Board requesting increased allocation to climate tech given MC group sustainability commitments. Proposal to increase from 25% to 35% of new deployments.",
        participants: ["Takeshi Yamada", "Mihiro Nakamura"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-1",
        title: "Prepare Sentra investment memo for IC vote",
        description:
          "Draft full investment memo including market sizing, competitive analysis, and synergy mapping with MC business units",
        assignee: "Sunna Mo",
        checked: false,
      },
      {
        id: "mcgi-ai-2",
        title: "Schedule CarbonGrid technical DD with MC industrial team",
        description:
          "Coordinate technical due diligence session with MC's industrial materials division",
        assignee: "Mihiro Nakamura",
        checked: false,
      },
      {
        id: "mcgi-ai-3",
        title: "Update deployment pacing model for H2",
        description:
          "Revise pacing assumptions given strong Q1 pipeline and board climate-tech directive",
        assignee: "Takeshi Yamada",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Kengo Morimoto",
        text: "Let's start with the pipeline overview. Ryotaro, where do we stand on active deals?",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "We have 14 active companies in the pipeline. Six in AI and enterprise software, five in climate tech, and three in advanced materials. The conversion rate from screening to DD is 22%, which is up from last quarter.",
      },
      {
        speaker: "Sunna Mo",
        text: "I want to highlight Sentra specifically. They're building organizational memory — essentially capturing decision history and context as companies scale. It's directly relevant to what we've been discussing around enterprise AI adoption.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "What's the team background? And where are they in terms of traction?",
      },
      {
        speaker: "Sunna Mo",
        text: "Founded by an MIT professor and a strong technical co-founder. Pre-seed, raised $5M from a16z Speedrun. They already have design partners including some major financial institutions. The product is live and getting strong feedback.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "I've seen the product demo. The meeting intelligence and commitment tracking could be very valuable for our portfolio companies as well. There's a strategic angle beyond just financial return.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "On CarbonGrid, I've completed the initial technical assessment. Their carbon capture efficiency is 40% better than the closest competitor, and the unit economics work at scale. MC's industrial materials team is very interested.",
      },
      {
        speaker: "Takeshi Yamada",
        text: "Quick note on pacing — we've deployed $48M year-to-date. At this rate we'll exceed the $120M annual target. We may need to be more selective in H2 or request an increased allocation from HQ.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "Good problem to have. Let's approve Sentra, CarbonGrid, and FluxMaterials for full due diligence. Sunna, take point on the Sentra memo.",
      },
      {
        speaker: "Sunna Mo",
        text: "On it. I'll have the investment memo ready for the next IC session in two weeks.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-2",
    title: "Sentra — Product Deep Dive & Strategic Fit",
    date: "Mar 7, 2026",
    time: "2:00 PM",
    endTime: "3:00 PM",
    duration: "1h",
    participants: [
      "Sunna Mo",
      "Ryotaro Nakamura",
      "Ashwin Gopinath",
      "Justin Cheng",
    ],
    tags: ["due-diligence", "enterprise-ai"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Deep dive into Sentra's product architecture and go-to-market strategy with the founding team. Reviewed the organizational memory concept, current traction with design partners, and potential synergies with MC portfolio companies and business units.",
    keyPoints: [
      {
        title: "Interaction-first architecture is differentiated",
        description:
          "Sentra captures actors and interactions as first-class objects, deriving everything else. This is fundamentally different from Glean's aggregation approach and creates a defensible data moat.",
        participants: ["Ashwin Gopinath", "Sunna Mo"],
      },
      {
        title: "Strong design partner engagement",
        description:
          "Active design partners include teams at SoftBank, Runway, and Campfire. ICP is Series A/B startups (30-1000 employees) plus enterprise teams as design partners.",
        participants: ["Justin Cheng", "Ryotaro Nakamura"],
      },
      {
        title: "Clear MC synergy opportunities",
        description:
          "Potential to deploy across MC portfolio companies for organizational knowledge management. Also relevant for MC's own internal operations across 90+ country offices.",
        participants: ["Sunna Mo", "Ryotaro Nakamura"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-4",
        title: "Request Sentra technical architecture documentation",
        description:
          "Get detailed architecture docs for technical DD review with MCGI engineering advisors",
        assignee: "Sunna Mo",
        checked: true,
      },
      {
        id: "mcgi-ai-5",
        title: "Map MC business units for potential Sentra deployment",
        description:
          "Identify 3-5 MC business units that would benefit from Sentra's organizational memory product",
        assignee: "Ryotaro Nakamura",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "Ashwin, Justin — thanks for making time. We're really excited about what Sentra is building. Can you walk us through the core product and how you think about the organizational memory concept?",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Absolutely. The core insight is that every organization has two first-class objects — actors, meaning people, and interactions, meaning meetings, emails, messages. Everything else — decisions, rationale, commitments, relationships — is derived from those interactions.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "How does that differ from what Glean or Microsoft Copilot are doing? They're also trying to capture organizational knowledge.",
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Glean takes an aggregation-first approach — they index documents and files. We take an interaction-first approach. We capture the decision history, the context, the why behind decisions. That's what gets lost as companies scale.",
      },
      {
        speaker: "Justin Cheng",
        text: "On the GTM side, we're focused on Series A through B companies right now — 30 to 1000 employees — plus enterprise teams as design partners. We have active pilots with teams at SoftBank, Runway, and Campfire.",
      },
      {
        speaker: "Sunna Mo",
        text: "That's compelling. One thing I'm thinking about is how this could work across MC's portfolio. We have over 1,700 group companies globally. A tool that preserves institutional knowledge across leadership transitions would be incredibly valuable.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Agreed. And for our own operations — MC has offices in 90 countries. The cross-cultural knowledge transfer problem is real. Sunna, let's map out which business units would be the best fit for a pilot.",
      },
      {
        speaker: "Justin Cheng",
        text: "We'd love that. We're particularly interested in how the product performs in multilingual, cross-timezone environments. That's exactly the kind of design partner feedback we need.",
      },
    ],
  },
  {
    id: "mcgi-mtg-3",
    title: "M-Lab Consortium Monthly — AI Landscape Update",
    date: "Mar 6, 2026",
    time: "11:00 AM",
    endTime: "12:00 PM",
    duration: "1h",
    participants: [
      "Sunna Mo",
      "Mihiro Nakamura",
      "Reina Ozaki",
      "Kenji Tanaka",
      "Yuki Sato",
    ],
    tags: ["m-lab", "consortium", "ai-landscape"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Monthly M-Lab consortium meeting focused on the evolving AI infrastructure landscape. Discussed trends in AI agent frameworks, enterprise adoption patterns, and upcoming Y Combinator W26 demo day scouting plan.",
    keyPoints: [
      {
        title: "AI agent frameworks emerging as key investment theme",
        description:
          "Seeing rapid convergence around agent orchestration platforms. Three consortium members independently flagged this as a priority scouting area.",
        participants: ["Sunna Mo", "Kenji Tanaka"],
      },
      {
        title: "YC W26 demo day scouting plan",
        description:
          "Coordinated scouting assignments across consortium members for upcoming YC demo day. MCGI taking lead on enterprise AI and developer tools tracks.",
        participants: ["Reina Ozaki", "Mihiro Nakamura"],
      },
      {
        title: "Japan market readiness for AI enterprise tools",
        description:
          "Tokio Marine shared insights on their AI deployment challenges. Language and cultural barriers remain significant for US-built tools entering Japan market.",
        participants: ["Yuki Sato", "Sunna Mo"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-6",
        title: "Compile AI agent framework landscape analysis",
        description:
          "Map the competitive landscape of AI agent orchestration platforms for consortium review",
        assignee: "Sunna Mo",
        checked: false,
      },
      {
        id: "mcgi-ai-7",
        title: "Coordinate YC W26 demo day attendance",
        description:
          "Finalize consortium member assignments for YC demo day track coverage",
        assignee: "Mihiro Nakamura",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Reina Ozaki",
        text: "Welcome everyone to the March consortium meeting. Let's start with the AI landscape update. Sunna, you had some interesting findings from the past month.",
      },
      {
        speaker: "Sunna Mo",
        text: "Thanks Reina. The big trend I'm seeing is the rapid emergence of AI agent frameworks. Companies like Anthropic, LangChain, and CrewAI are building the orchestration layer for autonomous AI agents. This is going to be a major investment theme.",
        isMe: true,
      },
      {
        speaker: "Kenji Tanaka",
        text: "We're seeing the same thing at Asahi Kasei. Our manufacturing teams are asking about autonomous agents for quality control. The enterprise demand is real.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "For YC demo day, I've mapped out the enterprise AI and developer tools tracks. There are at least 12 companies we should be watching closely. I'll share the scouting doc after this call.",
      },
      {
        speaker: "Yuki Sato",
        text: "From Tokio Marine's perspective, the Japan market readiness question is critical. We deployed an AI tool last quarter and the localization challenges were massive. Any US startup targeting Japan needs to think about this deeply.",
      },
      {
        speaker: "Sunna Mo",
        text: "That's a great point, Yuki. It's actually one of the reasons I'm excited about Sentra — they're already thinking about multilingual, cross-timezone use cases. That's rare for a pre-seed company.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-4",
    title: "CarbonGrid — Technical Due Diligence Review",
    date: "Mar 5, 2026",
    time: "3:00 PM",
    endTime: "4:30 PM",
    duration: "1h 30m",
    participants: [
      "Mihiro Nakamura",
      "Sunna Mo",
      "Dr. Elena Vasquez",
      "Hiroshi Tanabe",
    ],
    tags: ["due-diligence", "climate-tech"],
    platform: "Google Meet",
    privacy: "private",
    summary:
      "Technical due diligence session for CarbonGrid with MC's industrial materials division. Reviewed carbon capture efficiency claims, unit economics at scale, and potential integration with MC's existing industrial portfolio.",
    keyPoints: [
      {
        title: "Carbon capture efficiency validated",
        description:
          "Independent lab results confirm 40% efficiency improvement over competitors. Technology uses novel membrane design that reduces energy costs significantly.",
        participants: ["Dr. Elena Vasquez", "Mihiro Nakamura"],
      },
      {
        title: "Unit economics favorable at 10K+ ton scale",
        description:
          "Cost per ton of captured CO2 drops below $80 at scale, which is competitive with regulatory carbon credit pricing in key markets.",
        participants: ["Hiroshi Tanabe", "Sunna Mo"],
      },
      {
        title: "MC industrial synergy is clear",
        description:
          "MC's cement and steel portfolio companies represent immediate deployment opportunities. Hiroshi confirmed strong interest from the materials division leadership.",
        participants: ["Hiroshi Tanabe", "Mihiro Nakamura"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-8",
        title: "Draft CarbonGrid technical DD summary",
        description:
          "Compile technical DD findings into summary document for IC review",
        assignee: "Mihiro Nakamura",
        checked: false,
      },
      {
        id: "mcgi-ai-9",
        title: "Schedule CarbonGrid site visit to pilot facility",
        description:
          "Arrange visit to CarbonGrid's Austin pilot facility with MC industrial team",
        assignee: "Sunna Mo",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Mihiro Nakamura",
        text: "Elena, thanks for joining. We've reviewed your initial technical documentation and have some follow-up questions, particularly around the membrane design and scalability.",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "Happy to dive deep. The core innovation is our proprietary polymer membrane. It achieves 92% CO2 selectivity at ambient temperature, which eliminates the energy-intensive heating step that most competitors require.",
      },
      {
        speaker: "Hiroshi Tanabe",
        text: "From MC's industrial perspective, the energy savings alone make this interesting. Our cement operations spend roughly $15 per ton on carbon capture with current technology. What would this look like with your system?",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "At scale — 10,000 tons per year and above — we're projecting $78 per ton all-in. That includes installation, operation, and membrane replacement cycles.",
      },
      {
        speaker: "Sunna Mo",
        text: "Those numbers are compelling, especially given where carbon credit pricing is heading in the EU and Japan. Hiroshi, how many MC group facilities could potentially deploy this?",
        isMe: true,
      },
      {
        speaker: "Hiroshi Tanabe",
        text: "Conservatively, 12 to 15 facilities across our cement and steel operations. If the pilot validates, we'd be looking at a significant rollout.",
      },
    ],
  },
  {
    id: "mcgi-mtg-5",
    title: "Portfolio Company Check-in — NeuralDB",
    date: "Mar 4, 2026",
    time: "9:00 AM",
    endTime: "9:45 AM",
    duration: "45m",
    participants: ["Sunna Mo", "Alex Kim", "Priya Sharma"],
    tags: ["portfolio", "check-in"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Quarterly check-in with NeuralDB (Series A portfolio company). Revenue growing 25% MoM, approaching $2M ARR. Discussed Series B timing and potential MC customer introductions in the Japanese market.",
    keyPoints: [
      {
        title: "Revenue growth accelerating",
        description:
          "NeuralDB hit $1.8M ARR, up from $1.4M last quarter. Enterprise pipeline is strong with 8 qualified opportunities above $100K ACV.",
        participants: ["Alex Kim", "Sunna Mo"],
      },
      {
        title: "Series B planning in progress",
        description:
          "Targeting $30M Series B in Q3 2026. Want to bring in a Japan-focused strategic investor alongside US lead. MCGI could facilitate introductions.",
        participants: ["Priya Sharma", "Sunna Mo"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-10",
        title: "Introduce NeuralDB to MC's IT infrastructure team",
        description:
          "Set up meeting between NeuralDB and MC's IT division to explore potential enterprise deployment",
        assignee: "Sunna Mo",
        checked: false,
      },
      {
        id: "mcgi-ai-11",
        title: "Connect NeuralDB with Japan-focused VCs for Series B",
        description:
          "Introduce NeuralDB to JAFCO and Global Brain for Series B co-investment discussions",
        assignee: "Sunna Mo",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "Alex, Priya — great to catch up. How did Q1 shape up?",
        isMe: true,
      },
      {
        speaker: "Alex Kim",
        text: "Really well. We're at $1.8M ARR now, growing about 25% month over month. The enterprise motion is working — we closed three deals above $100K ACV in February alone.",
      },
      {
        speaker: "Priya Sharma",
        text: "On the fundraising front, we're starting to plan our Series B. Targeting $30M, probably Q3. We'd love MCGI's help on two fronts — customer introductions in Japan and connecting us with Japan-focused co-investors.",
      },
      {
        speaker: "Sunna Mo",
        text: "Absolutely. I can introduce you to our IT infrastructure team at MC — they've been evaluating vector database solutions. And for the Series B, I'll connect you with JAFCO and Global Brain. Both are actively deploying in AI infrastructure.",
        isMe: true,
      },
      {
        speaker: "Alex Kim",
        text: "That would be incredible. The Japan market is our number one international priority. Having MC as a strategic partner has been exactly what we hoped for.",
      },
    ],
  },
  {
    id: "mcgi-mtg-6",
    title: "MCGI Weekly — Deal Flow & Operations",
    date: "Mar 3, 2026",
    time: "9:30 AM",
    endTime: "10:15 AM",
    duration: "45m",
    participants: [
      "Sunna Mo",
      "Ryotaro Nakamura",
      "Mihiro Nakamura",
      "Kengo Morimoto",
    ],
    tags: ["internal", "weekly"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly team standup covering deal flow updates, portfolio company milestones, and upcoming events. Discussed prioritization of AI vs climate tech deal flow and upcoming Stanford AI conference networking plan.",
    keyPoints: [
      {
        title: "Deal flow volume increasing",
        description:
          "Received 23 inbound referrals last week, up 40% from monthly average. Need to tighten screening criteria to maintain quality.",
        participants: ["Ryotaro Nakamura", "Sunna Mo"],
      },
      {
        title: "Stanford AI conference next week",
        description:
          "Team attending Stanford HAI conference. Opportunity to connect with AI researchers and early-stage founders.",
        participants: ["Sunna Mo", "Mihiro Nakamura"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-12",
        title: "Update screening criteria for inbound deal flow",
        description:
          "Tighten screening criteria given increased volume — focus on companies with clear MC synergy potential",
        assignee: "Ryotaro Nakamura",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Kengo Morimoto",
        text: "Quick standup. Let's go around — deal flow first, then portfolio updates.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "We had 23 inbound referrals last week. That's up significantly. The MCGI brand is starting to get recognized in the Valley. But we need to be more selective — I'd like to tighten our screening criteria.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed. I'd suggest we add an MC synergy score to the initial screen. If there's no clear connection to an MC business unit, we should be passing faster.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "On the events side, Stanford HAI conference is next Thursday. I've identified 8 presenters whose research aligns with our thesis areas. I'll share the target list.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "Good. Let's make sure we're coordinating with the Tokyo team on any Japan-market-relevant companies we encounter. Ryotaro, can you update the screening doc by end of week?",
      },
    ],
  },
];
