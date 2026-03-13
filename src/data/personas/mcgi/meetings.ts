import type { Meeting } from "@/types";

export const meetings: Meeting[] = [
  {
    id: "mcgi-mtg-1",
    title: "Q1 Investment Committee Pipeline Review",
    date: "Mar 11, 2026",
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
        text: "Good morning everyone. Let's get started. We have a packed agenda today. I want to cover the pipeline overview, discuss the three companies we're considering for DD, touch on pacing, and then address the board's climate tech directive. Ryotaro, can you kick us off with the pipeline overview?",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Sure. So as of this week, we have 14 active companies in the pipeline. Six in AI and enterprise software, five in climate tech, and three in advanced materials. The conversion rate from screening to DD is 22%, which is up from last quarter's 18%. I think the improvement is partly due to the tighter screening criteria we implemented in January.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "That's good to see. Are there any patterns in the inbound flow? Where are most of these companies coming from?",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "About 40% are coming through the M-Lab consortium network, which is up significantly. Another 30% are direct referrals from our existing portfolio companies, and the remaining 30% are from VC co-investor introductions, mostly from our relationships with Sequoia, a16z, and JAFCO.",
      },
      {
        speaker: "Sunna Mo",
        text: "I want to highlight Sentra specifically. They're building organizational memory — essentially capturing decision history and context as companies scale. It's directly relevant to what we've been discussing around enterprise AI adoption. I've been tracking them since the YC W25 batch and had multiple conversations with the founding team over the past four months.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "What's the team background? And where are they in terms of traction?",
      },
      {
        speaker: "Sunna Mo",
        text: "Founded by Ashwin Gopinath, who's an MIT professor, and Andrey Starenky as CTO. Pre-seed, raised $5M from a16z Speedrun and Together Fund. They already have design partners including teams at SoftBank, Runway, and Campfire. The product is live and getting strong feedback — one reference call described it as replacing 30 minutes of manual CRM updates after every call.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "I've seen the product demo. The meeting intelligence and commitment tracking could be very valuable for our portfolio companies as well. There's a strategic angle beyond just financial return. I think the MC synergy score here is genuinely high.",
      },
      {
        speaker: "Takeshi Yamada",
        text: "Can you walk us through the competitive landscape for Sentra? I want to understand how defensible this is. Glean is well-funded, Copilot has distribution.",
      },
      {
        speaker: "Sunna Mo",
        text: "Great question. Glean takes an aggregation-first approach — they index documents and files. Microsoft Copilot is essentially a chat layer over existing tools. Sentra is fundamentally different. They capture actors and interactions as first-class objects and derive everything else from that — decisions, rationale, commitments, relationships. Nobody else is doing interaction-first. It creates a real data moat because the value compounds as more interactions are captured.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "What about the Japan market angle? That's always a critical factor for our investment thesis.",
      },
      {
        speaker: "Sunna Mo",
        text: "Multi-language support isn't built yet, but it's on their Q3 2026 roadmap. The founding team has expressed strong interest in Japan market entry, especially given the cross-cultural knowledge transfer problem across MC's 90 country offices. I've flagged the Japan localization timeline as a key DD item.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "On CarbonGrid, I've completed the initial technical assessment. Their carbon capture efficiency is 40% better than the closest competitor, and the unit economics work at scale. MC's industrial materials team is very interested. I had a call with Hiroshi Tanabe last week and he confirmed strong interest from the materials division leadership.",
      },
      {
        speaker: "Takeshi Yamada",
        text: "What are the unit economics looking like specifically?",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "At scale — 10,000 tons per year and above — they're projecting $78 per ton all-in. That includes installation, operation, and membrane replacement cycles. For context, MC's cement operations currently spend roughly $115 per ton on carbon capture with existing technology. So the cost savings are significant.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "And FluxMaterials? Where are we on that one?",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "FluxMaterials is earlier stage. Battery recycling technology is promising but the pilot facility isn't operational yet. I'd recommend a smaller initial check with milestone-based follow-on rather than a full commitment at this stage. The market is growing rapidly with EU battery directive tailwinds, but execution risk is higher.",
      },
      {
        speaker: "Takeshi Yamada",
        text: "Quick note on pacing — we've deployed $48M year-to-date. At this rate we'll exceed the $120M annual target by September. We may need to be more selective in H2 or request an increased allocation from HQ. I'd also note that the board's climate tech directive complicates things because it effectively pre-allocates a larger share of the remaining budget.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "Good point. Let's address the climate tech allocation separately. For now — I'm comfortable approving Sentra, CarbonGrid, and FluxMaterials for full due diligence. Sunna, take point on the Sentra investment memo. I want it ready for the IC vote on March 19th.",
      },
      {
        speaker: "Sunna Mo",
        text: "On it. I'll have the investment memo ready by end of next week. I'm also scheduling one more reference call with the Campfire design partner this week to round out the customer validation section.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Before we move on — I want to flag that we've had three inbound inquiries from other CVCs about co-investing in Sentra. Global Brain, JAFCO, and SBI Investment. Should we consider bringing in a co-investor?",
      },
      {
        speaker: "Kengo Morimoto",
        text: "Let's discuss that offline. I don't want to slow down our process. If we move fast we can set the terms. Sunna, flag that in the memo — potential co-investment opportunity.",
      },
      {
        speaker: "Sunna Mo",
        text: "Will do. One last thing — the Stanford HAI conference is this Thursday. Mihiro and I are attending. We've identified 8 presenters whose research aligns with our thesis areas. I'll share the scouting debrief with the team by Friday.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "Perfect. Let's make sure we coordinate with the Tokyo team on anything Japan-market-relevant. Alright, let's close out. Sunna owns the Sentra memo, Mihiro owns CarbonGrid technical DD coordination, and Takeshi will revise the pacing model. Let's reconvene Thursday after the conference. Good meeting everyone.",
      },
    ],
  },
  {
    id: "mcgi-mtg-2",
    title: "Sentra Product Deep Dive",
    date: "Mar 11, 2026",
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
    title: "M-Lab Monthly AI Landscape Update",
    date: "Mar 10, 2026",
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
    title: "CarbonGrid Technical DD",
    date: "Mar 7, 2026",
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
    title: "NeuralDB Quarterly Check-in",
    date: "Mar 7, 2026",
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
    title: "MCGI Weekly Standup",
    date: "Mar 10, 2026",
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
  {
    id: "mcgi-mtg-7",
    title: "FluxMaterials Founder Call",
    date: "Mar 7, 2026",
    time: "11:00 AM",
    endTime: "11:45 AM",
    duration: "45m",
    participants: ["Sunna Mo", "Mihiro Nakamura", "Dr. James Park"],
    tags: ["screening", "advanced-materials"],
    platform: "Google Meet",
    privacy: "private",
    summary:
      "Initial screening call with FluxMaterials founder Dr. James Park. Company is developing proprietary battery recycling technology. Pilot facility under construction in Nevada, expected operational Q2 2026.",
    keyPoints: [
      {
        title: "Novel hydrometallurgical process for battery recycling",
        description:
          "FluxMaterials claims 95% metal recovery rate vs industry standard of 70%. Process works at lower temperatures, reducing energy costs by 60%.",
        participants: ["Dr. James Park", "Mihiro Nakamura"],
      },
      {
        title: "Pilot facility timeline",
        description:
          "Nevada pilot facility under construction, expected to be operational by June 2026. First commercial contracts signed with two EV manufacturers.",
        participants: ["Dr. James Park", "Sunna Mo"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-13",
        title: "Request FluxMaterials technical documentation",
        description:
          "Get detailed process documentation and independent lab results for technical review",
        assignee: "Mihiro Nakamura",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "James, thanks for making time. We've been tracking the battery recycling space closely and your approach caught our attention. Can you walk us through the core technology?",
        isMe: true,
      },
      {
        speaker: "Dr. James Park",
        text: "Happy to. We've developed a hydrometallurgical process that achieves 95% metal recovery from spent lithium-ion batteries. The key innovation is our proprietary solvent system that works at room temperature, which eliminates the high-energy smelting step that most competitors rely on.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "That's impressive. What's the current state of the pilot facility?",
      },
      {
        speaker: "Dr. James Park",
        text: "Construction is about 70% complete in Nevada. We're targeting June for first operations. We've already signed LOIs with two EV manufacturers for feedstock supply, so we'll have material to process from day one.",
      },
    ],
  },
  {
    id: "mcgi-mtg-8",
    title: "Tokyo HQ Strategy Sync",
    date: "Mar 6, 2026",
    time: "6:00 PM",
    endTime: "7:00 PM",
    duration: "1h",
    participants: [
      "Sunna Mo",
      "Kengo Morimoto",
      "Haruki Watanabe",
      "Yoko Tanaka",
    ],
    tags: ["internal", "strategy"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Monthly strategy sync with Tokyo HQ covering SF team activities, allocation requests, and alignment on MC Corporate Strategy 2027 priorities. Discussed increased climate tech allocation and upcoming IC pipeline.",
    keyPoints: [
      {
        title: "Climate tech allocation increase approved in principle",
        description:
          "Tokyo HQ supportive of increasing climate tech allocation from 25% to 35% pending formal board approval. Aligns with MC group sustainability commitments.",
        participants: ["Haruki Watanabe", "Kengo Morimoto"],
      },
      {
        title: "SF team headcount discussion",
        description:
          "Requested approval for one additional associate position to support increased deal flow volume. Tokyo to review by end of March.",
        participants: ["Kengo Morimoto", "Yoko Tanaka"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-14",
        title: "Prepare climate tech allocation proposal for board",
        description:
          "Formal proposal document for board review of increased climate tech allocation",
        assignee: "Kengo Morimoto",
        checked: false,
      },
      {
        id: "mcgi-ai-15",
        title: "Submit associate hiring request to HR",
        description:
          "Formal headcount request with justification based on deal flow volume increase",
        assignee: "Sunna Mo",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Haruki Watanabe",
        text: "Good evening from Tokyo. Let's start with the allocation discussion. We've reviewed the SF team's request to increase climate tech allocation.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "Thanks Haruki. The rationale is straightforward. We're seeing high-quality deal flow in climate tech, and the board's sustainability directive gives us cover to increase allocation. We're proposing 35% of new deployments, up from 25%.",
      },
      {
        speaker: "Yoko Tanaka",
        text: "The corporate strategy office is supportive. This aligns with the 2027 Create pillar. We'll need a formal proposal for the April board meeting.",
      },
      {
        speaker: "Sunna Mo",
        text: "On the pipeline side, we have three companies moving to DD this month — Sentra in enterprise AI, CarbonGrid in carbon capture, and FluxMaterials in battery recycling. The IC vote for Sentra is scheduled for March 19th.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-9",
    title: "Portfolio Company Board Prep",
    date: "Mar 6, 2026",
    time: "10:00 AM",
    endTime: "10:45 AM",
    duration: "45m",
    participants: ["Sunna Mo", "Ryotaro Nakamura"],
    tags: ["portfolio", "internal"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Internal prep session for upcoming NeuralDB and QuantumSense board observer meetings. Reviewed key metrics, discussion points, and strategic recommendations for each company.",
    keyPoints: [
      {
        title: "NeuralDB board observer talking points",
        description:
          "Focus on Series B readiness, Japan market entry strategy, and MC customer introduction pipeline. Revenue tracking well but need to address competitive pressure from Pinecone enterprise tier.",
        participants: ["Sunna Mo", "Ryotaro Nakamura"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-16",
        title: "Prepare NeuralDB board observer memo",
        description:
          "Draft talking points and strategic recommendations for March board meeting",
        assignee: "Sunna Mo",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "Let's run through the NeuralDB board prep first. Their board meeting is next week. Key topics I want to raise are Series B timing, Japan market strategy, and the Pinecone competitive threat.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "On the Japan angle, I've been talking to MC's IT infrastructure division. They're genuinely interested in NeuralDB for their internal AI projects. If we can get a pilot going, that's a strong signal for the Series B story.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed. Let me draft the board observer memo today and we can review it tomorrow. I want to make sure our strategic recommendations are crisp.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-13",
    title: "Ryotaro 1:1 Weekly Sync",
    date: "Mar 11, 2026",
    time: "4:00 PM",
    endTime: "4:30 PM",
    duration: "30m",
    participants: ["Ryotaro Nakamura"],
    tags: ["internal", "1:1"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly 1:1 with Ryotaro covering pipeline prioritization, upcoming IC vote logistics for Sentra, and M-Lab consortium coordination. Discussed splitting deal sourcing responsibilities for Q2.",
    keyPoints: [
      {
        title: "Sentra IC vote logistics confirmed",
        description:
          "IC vote for Sentra scheduled March 19. Investment memo draft due March 14. Ryotaro to review before Kengo sees it.",
        participants: ["Ryotaro Nakamura"],
      },
      {
        title: "Q2 deal sourcing split agreed",
        description:
          "Sunna to focus on enterprise AI and developer tools. Ryotaro to cover climate tech and advanced materials. Reduces overlap and increases coverage.",
        participants: ["Ryotaro Nakamura"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-17",
        title: "Share Sentra memo draft with Ryotaro by Friday",
        description:
          "Send investment memo draft for review before IC circulation",
        assignee: "Sunna Mo",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "Hey Ryotaro, quick sync. Want to lock down the Sentra IC timeline and talk about Q2 sourcing.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Sure. On Sentra — I think March 19 for the IC vote still works. Can you have the memo draft to me by Friday so I can review over the weekend?",
      },
      {
        speaker: "Sunna Mo",
        text: "Yes, I'll have it by end of day Friday. For Q2, I was thinking we split sourcing more cleanly. I'll take enterprise AI and dev tools, you take climate and materials. Less overlap.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Makes sense. I've been building more relationships in the climate space anyway. Let's formalize it with Kengo at the next standup.",
      },
    ],
  },
  {
    id: "mcgi-mtg-14",
    title: "QuantumSense Portfolio Review",
    date: "Mar 10, 2026",
    time: "2:30 PM",
    endTime: "3:15 PM",
    duration: "45m",
    participants: ["Sunna Mo", "David Chen", "Lisa Park"],
    tags: ["portfolio", "check-in"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Quarterly review with QuantumSense (Series A portfolio). Product-market fit strengthening in semiconductor QA vertical. Discussed international expansion and potential Series B lead investors.",
    keyPoints: [
      {
        title: "Semiconductor QA vertical gaining traction",
        description:
          "Three new contracts signed with chip manufacturers in Q1. ARR reached $3.2M, up from $2.1M last quarter.",
        participants: ["David Chen", "Sunna Mo"],
      },
      {
        title: "Japan expansion opportunity via MC",
        description:
          "MC's semiconductor trading arm expressed interest in trialing QuantumSense. Could accelerate Japan market entry significantly.",
        participants: ["Lisa Park", "Sunna Mo"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-18",
        title: "Intro QuantumSense to MC semiconductor division",
        description:
          "Connect David with MC's semiconductor trading team for potential pilot discussion",
        assignee: "Sunna Mo",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "David, Lisa — great to see you both. How's Q1 shaping up?",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Really strong. We hit $3.2M ARR this month. The semiconductor QA use case is our beachhead — we signed TSMC's Oregon facility, plus two other chip manufacturers.",
      },
      {
        speaker: "Lisa Park",
        text: "On the expansion front, we're interested in Japan. The semiconductor market there is huge with the new TSMC and Rapidus fabs going up. Can MCGI help with introductions?",
      },
      {
        speaker: "Sunna Mo",
        text: "Absolutely. MC has a semiconductor trading arm that would be a perfect pilot partner. Let me set up an intro call this month.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-15",
    title: "AI Infrastructure Deal Screening",
    date: "Mar 6, 2026",
    time: "1:00 PM",
    endTime: "1:45 PM",
    duration: "45m",
    participants: ["Sunna Mo", "Mihiro Nakamura", "Ryotaro Nakamura"],
    tags: ["screening", "enterprise-ai"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Screened four inbound AI infrastructure companies referred through M-Lab consortium. Two passed initial filter for deeper review — an MLOps platform and a data labeling marketplace.",
    keyPoints: [
      {
        title: "Two companies passed initial screening",
        description:
          "DataForge (MLOps) and LabelScale (data labeling marketplace) both show strong technical differentiation and clear MC synergy potential. Moving to founder calls.",
        participants: ["Sunna Mo", "Mihiro Nakamura"],
      },
      {
        title: "Two companies declined at screening",
        description:
          "CloudNine and InferenceX passed on — overlapping competitive space with existing portfolio companies. No incremental MC synergy identified.",
        participants: ["Ryotaro Nakamura", "Sunna Mo"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-19",
        title: "Schedule founder calls with DataForge and LabelScale",
        description:
          "Reach out to founders for 30-min intro calls within the next two weeks",
        assignee: "Sunna Mo",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sunna Mo",
        text: "Let's run through the four M-Lab referrals. I've done preliminary research on each. Starting with DataForge — they're building an MLOps platform specifically for regulated industries.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "That's interesting. MC's financial services portfolio companies have been asking about MLOps tooling. The regulated-industry angle gives them a defensible niche.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Agree on DataForge. For CloudNine and InferenceX, I think we pass. CloudNine overlaps with NeuralDB's roadmap, and InferenceX is competing directly in a space where Anthropic and OpenAI have massive advantages.",
      },
      {
        speaker: "Sunna Mo",
        text: "Aligned. Let me schedule founder calls with DataForge and LabelScale this week.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-10",
    title: "Sentra Due Diligence Sync",
    date: "Mar 12, 2026",
    time: "10:00 AM",
    endTime: "11:00 AM",
    duration: "1h",
    participants: ["Ryotaro Nakamura", "Kengo Morimoto", "Takeshi Yamada"],
    tags: ["due-diligence", "pipeline"],
    platform: "Zoom",
    privacy: "private",
    summary: "",
    keyPoints: [],
    actionItems: [],
    transcript: [],
  },
  {
    id: "mcgi-mtg-11",
    title: "LP Advisory Committee Prep",
    date: "Mar 12, 2026",
    time: "1:00 PM",
    endTime: "2:00 PM",
    duration: "1h",
    participants: ["Ryotaro Nakamura", "Mihiro Nakamura"],
    tags: ["investor-relations", "fund-operations"],
    platform: "Zoom",
    privacy: "private",
    summary: "",
    keyPoints: [],
    actionItems: [],
    transcript: [],
  },
  {
    id: "mcgi-mtg-12",
    title: "CarbonGrid Technical DD Follow-up",
    date: "Mar 12, 2026",
    time: "3:30 PM",
    endTime: "4:30 PM",
    duration: "1h",
    participants: ["Kengo Morimoto", "Takeshi Yamada"],
    tags: ["due-diligence", "climate-tech"],
    platform: "Google Meet",
    privacy: "private",
    summary: "",
    keyPoints: [],
    actionItems: [],
    transcript: [],
  },
];
