import type { Meeting } from "@/types";

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

export const meetings: Meeting[] = [
  {
    id: "mcgi-mtg-1",
    title: "Q1 Investment Committee Pipeline Review",
    date: daysAgo(1),
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
      "Reviewed 14 active pipeline deals across AI infrastructure, climate tech, and enterprise SaaS. Committee approved moving Sentra and two climate-tech companies to due diligence. Discussed allocation strategy given current JPY 100B deployment pace. Board's climate tech directive may require rebalancing H2 deployment targets across verticals.",
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
      {
        title: "Co-investment interest from peer CVCs",
        description:
          "Three inbound inquiries from Global Brain, JAFCO, and SBI Investment about co-investing in Sentra. Signals strong market validation but need to move quickly to set terms.",
        participants: ["Ryotaro Nakamura", "Sunna Mo"],
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
    date: daysAgo(1),
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
      "Deep dive into Sentra's product architecture and go-to-market strategy with the founding team. Reviewed the organizational memory concept, current traction with design partners, and potential synergies with MC portfolio companies and business units. The interaction-first approach is technically differentiated from Glean and Copilot, and the team demonstrated strong product-market fit signals from early design partners.",
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
      {
        title: "Product roadmap aligns with CVC thesis",
        description:
          "Commitment extraction, pre-meeting briefs, and reports features are all on the near-term roadmap. Multi-language support planned for Q3 2026, which is critical for Japan market entry.",
        participants: ["Ashwin Gopinath", "Sunna Mo"],
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
        speaker: "Ashwin Gopinath",
        text: "That's exactly the pain point we hear from larger organizations. When a key person leaves or transitions roles, the institutional knowledge walks out the door. Sentra captures that context automatically so the next person can get up to speed in days instead of months.",
      },
      {
        speaker: "Sunna Mo",
        text: "Can you talk about the product roadmap? Specifically, what's coming in the next two quarters that would be relevant for an enterprise deployment scenario?",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Near term, we're shipping commitment extraction, pre-meeting briefs, and automated reports. Those are all in the current sprint. Multi-language support is planned for Q3 2026. We know that's critical for global organizations like MC.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "The multi-language timeline is important for us. Japanese is obviously a priority. How are you thinking about localization beyond just translation — the cultural nuances of communication in Japanese business contexts?",
      },
      {
        speaker: "Justin Cheng",
        text: "We've thought about this a lot. It's not just translation — it's understanding the implicit communication patterns in different cultures. In Japanese business settings, what's left unsaid is often as important as what's said. Our interaction model actually captures those patterns better than document-based approaches.",
      },
      {
        speaker: "Sunna Mo",
        text: "That resonates. Let me ask about the competitive moat. You mentioned the data compounds over time. How quickly does a new customer start seeing meaningful value from the organizational memory?",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "We see meaningful value within the first two weeks for individual users — meeting notes, commitment tracking, pre-meeting context. The organizational memory kicks in around month two or three, once the system has enough interaction data to surface patterns and relationships across the company.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "And for our own operations — MC has offices in 90 countries. The cross-cultural knowledge transfer problem is real. Sunna, let's map out which business units would be the best fit for a pilot.",
      },
      {
        speaker: "Justin Cheng",
        text: "We'd love that. We're particularly interested in how the product performs in multilingual, cross-timezone environments. That's exactly the kind of design partner feedback we need.",
      },
      {
        speaker: "Sunna Mo",
        text: "Great. I'll pull together a shortlist of MC business units by next week. Ashwin, can you send us the technical architecture documentation? We want our engineering advisors to review it as part of the DD process.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Of course. I'll have Justin send that over by end of day tomorrow. We're very open about our architecture — we think transparency builds trust with strategic investors like MCGI.",
      },
    ],
  },
  {
    id: "mcgi-mtg-3",
    title: "M-Lab Monthly AI Landscape Update",
    date: daysAgo(2),
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
      "Monthly M-Lab consortium meeting focused on the evolving AI infrastructure landscape. Discussed trends in AI agent frameworks, enterprise adoption patterns, and upcoming Y Combinator W26 demo day scouting plan. Three consortium members independently identified AI agent orchestration as a priority investment theme, and the group coordinated scouting assignments for the upcoming YC batch. Tokio Marine shared important lessons on Japan market localization challenges.",
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
      {
        title: "Consortium deal sharing pipeline growing",
        description:
          "M-Lab consortium has generated 14 qualified referrals in Q1 across all members. Co-investment discussions are becoming more frequent, suggesting the network effects are compounding.",
        participants: ["Reina Ozaki", "Sunna Mo"],
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
        text: "Thanks Reina. The big trend I'm seeing is the rapid emergence of AI agent frameworks. Companies like Anthropic, LangChain, and CrewAI are building the orchestration layer for autonomous AI agents. This is going to be a major investment theme over the next 12 to 18 months.",
        isMe: true,
      },
      {
        speaker: "Kenji Tanaka",
        text: "We're seeing the same thing at Asahi Kasei. Our manufacturing teams are asking about autonomous agents for quality control. The enterprise demand is real and it's coming from the operations side, not just IT.",
      },
      {
        speaker: "Sunna Mo",
        text: "That's a great signal, Kenji. The pull from operations teams is exactly what differentiates this cycle from previous AI hype. These aren't science projects — they're solving concrete workflow problems. I've been mapping the landscape and there are about 15 companies worth tracking seriously.",
        isMe: true,
      },
      {
        speaker: "Reina Ozaki",
        text: "Before we go deeper on agents, I want to share a quick update on consortium metrics. We've generated 14 qualified referrals across all members in Q1. That's up from 9 last quarter. The network effects are clearly compounding.",
      },
      {
        speaker: "Yuki Sato",
        text: "From Tokio Marine's perspective, the Japan market readiness question is critical. We deployed an AI tool last quarter and the localization challenges were massive. The translation was fine, but the tool didn't understand Japanese business communication patterns — the indirect requests, the hierarchical dynamics.",
      },
      {
        speaker: "Sunna Mo",
        text: "That's a great point, Yuki. It's actually one of the reasons I'm excited about Sentra — they're already thinking about multilingual, cross-timezone use cases. That's rare for a pre-seed company. Most US startups don't even think about localization until Series B.",
        isMe: true,
      },
      {
        speaker: "Kenji Tanaka",
        text: "I'd push back slightly on that — thinking about it and executing on it are very different things. What gives you confidence Sentra can actually deliver on Japan localization?",
      },
      {
        speaker: "Sunna Mo",
        text: "Fair challenge. Two things. First, their interaction-first architecture is inherently better suited for multilingual environments because it captures context, not just words. Second, the founding team spent time at MIT working on cross-cultural collaboration research. It's in their DNA, not just on a roadmap slide.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "For YC demo day, I've mapped out the enterprise AI and developer tools tracks. There are at least 12 companies we should be watching closely. I'll share the scouting doc after this call. MCGI is taking lead on enterprise AI and dev tools, and I've coordinated with the other members to cover climate tech and fintech.",
      },
      {
        speaker: "Reina Ozaki",
        text: "Perfect. Let's make sure everyone has their assignments locked in by end of week. The demo day is in three weeks and we want to be prepared to move quickly on any standouts.",
      },
      {
        speaker: "Yuki Sato",
        text: "One more thing on the Japan market — I've been compiling a list of enterprise AI deployment failures in Japan over the past year. There are common patterns around change management and user onboarding that every US company struggles with. I'd be happy to share that analysis with the consortium.",
      },
      {
        speaker: "Sunna Mo",
        text: "That would be incredibly valuable, Yuki. Can you share it before the YC demo day? It would help us evaluate which companies have the best chance of succeeding in the Japan market. I'll incorporate it into the AI agent landscape analysis I'm putting together.",
        isMe: true,
      },
      {
        speaker: "Kenji Tanaka",
        text: "Last item from me — I've been talking to a few founders in the AI agent space and there's a strong consensus forming around tool-use protocols. MCP from Anthropic seems to be winning as a standard. Companies building on that protocol may have better interoperability long-term.",
      },
      {
        speaker: "Reina Ozaki",
        text: "Great insights all around. Let's wrap up. Sunna owns the AI agent landscape analysis, Mihiro is finalizing the YC scouting assignments, and Yuki will share the Japan deployment failure patterns. Let's reconvene in two weeks for a pre-demo-day sync.",
      },
    ],
  },
  {
    id: "mcgi-mtg-4",
    title: "CarbonGrid Technical DD",
    date: daysAgo(5),
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
      "Technical due diligence session for CarbonGrid with MC's industrial materials division. Reviewed carbon capture efficiency claims, unit economics at scale, and potential integration with MC's existing industrial portfolio. Independent lab results validated the 40% efficiency improvement, and unit economics below $80 per ton at scale are competitive with regulatory carbon credit pricing. Hiroshi confirmed strong interest from the materials division for a 12-15 facility rollout if the pilot validates.",
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
      {
        title: "Regulatory tailwinds accelerating timeline",
        description:
          "EU carbon border adjustment mechanism and Japan's GX strategy are creating urgency for industrial decarbonization. CarbonGrid's technology is well-positioned to capture this demand.",
        participants: ["Sunna Mo", "Dr. Elena Vasquez"],
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
        text: "From MC's industrial perspective, the energy savings alone make this interesting. Our cement operations spend roughly $115 per ton on carbon capture with current technology. What would this look like with your system?",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "At scale — 10,000 tons per year and above — we're projecting $78 per ton all-in. That includes installation, operation, and membrane replacement cycles.",
      },
      {
        speaker: "Sunna Mo",
        text: "Those numbers are compelling, especially given where carbon credit pricing is heading in the EU and Japan. Elena, can you walk us through the membrane degradation curve? What's the replacement cycle look like?",
        isMe: true,
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "The membranes have a rated lifespan of 18 months under continuous operation. We've tested through three full degradation cycles in the lab and the performance drop-off is very gradual — you lose about 2% selectivity per month after month 12. Replacement is modular, so you don't need to shut down the full system.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "What about the independent validation? I saw you referenced third-party lab results in the deck. Can you share the full report?",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "Absolutely. Lawrence Berkeley ran the independent validation last quarter. The report confirms the 40% efficiency improvement over the best competing technology, which is Climeworks' solid sorbent approach. I'll send the full report after this call.",
      },
      {
        speaker: "Hiroshi Tanabe",
        text: "Let me give you some context on MC's footprint. We have cement operations in Southeast Asia, Japan, and the US. Our steel portfolio is primarily in Japan and India. If the pilot validates, we'd be looking at deploying across 12 to 15 facilities conservatively.",
      },
      {
        speaker: "Sunna Mo",
        text: "Hiroshi, what's the internal approval process look like for a pilot deployment at one of those facilities? I want to understand the timeline from our investment to a potential MC deployment.",
        isMe: true,
      },
      {
        speaker: "Hiroshi Tanabe",
        text: "For a pilot, I can get approval from the materials division head within 30 days if the technical DD checks out. Full commercial deployment would need board-level approval, which adds another quarter. But the pilot itself could start within 60 days of investment close.",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "That timeline works perfectly for us. Our Austin pilot facility is operational now and we can use it as the reference site. I'd actually invite the MC technical team to visit Austin before committing to a deployment.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "I'd like to take you up on that. A site visit would give us hands-on validation and let our engineering team assess the installation requirements. Elena, what's the regulatory landscape look like? Are there any permitting hurdles we should be aware of?",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "On the regulatory side, we're actually in a very favorable position. The membrane system operates at ambient temperature and pressure, so it doesn't trigger the same permitting requirements as chemical absorption systems. In the EU, the carbon border adjustment mechanism is creating significant urgency — we've had inbound from three European cement companies in the last month alone.",
      },
      {
        speaker: "Sunna Mo",
        text: "The regulatory tailwinds are strong. Japan's GX strategy is also pushing industrial decarbonization hard. Mihiro, I think we should fast-track this DD. Can you have the technical summary ready for the IC by next week?",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "I can have it ready by Friday. Elena, I'll need the Berkeley lab report and the detailed process flow diagrams by Wednesday to make that timeline work.",
      },
      {
        speaker: "Dr. Elena Vasquez",
        text: "You'll have everything by end of day Tuesday. We're eager to move quickly on this. The MC partnership would be transformative for our go-to-market in Asia.",
      },
      {
        speaker: "Sunna Mo",
        text: "Great. Let's plan the Austin site visit for the week of March 17th if we can make the schedules work. I'll coordinate with Hiroshi's team on availability. Thanks everyone — really productive session.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-5",
    title: "NeuralDB Quarterly Check-in",
    date: daysAgo(5),
    time: "9:00 AM",
    endTime: "9:45 AM",
    duration: "45m",
    participants: ["Sunna Mo", "Alex Kim", "Priya Sharma"],
    tags: ["portfolio", "check-in"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Quarterly check-in with NeuralDB (Series A portfolio company). Revenue growing 25% MoM, approaching $2M ARR. Discussed Series B timing and potential MC customer introductions in the Japanese market. The enterprise motion is working well with three $100K+ ACV deals closed in February. Team is planning a $30M Series B for Q3 2026 and looking for MCGI help with Japan-focused co-investors and customer introductions.",
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
      {
        title: "Competitive landscape shifting",
        description:
          "Pinecone launched an enterprise tier that overlaps with NeuralDB's positioning. Team is differentiating on regulated-industry compliance features and multi-modal vector support.",
        participants: ["Alex Kim", "Sunna Mo"],
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
        speaker: "Sunna Mo",
        text: "That's excellent growth. Walk me through those enterprise deals. What's the common thread in terms of use case and buyer persona?",
        isMe: true,
      },
      {
        speaker: "Alex Kim",
        text: "Two of the three are financial services companies that need compliant vector search for RAG applications. The third is a healthcare company doing multi-modal search across medical images and clinical notes. The regulated-industry angle is our wedge — Pinecone and Weaviate don't have SOC 2 Type II or HIPAA compliance built in.",
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
      {
        speaker: "Sunna Mo",
        text: "Let's talk about the competitive landscape for a minute. Pinecone's enterprise tier launch last month — how are you thinking about differentiation as they move upmarket?",
        isMe: true,
      },
      {
        speaker: "Alex Kim",
        text: "Good question. Pinecone is going broad — they want to be the default vector database for everyone. We're going deep on regulated industries. Our compliance features, audit trails, and data residency controls are 12 months ahead of anything they can build. That's our moat in enterprise.",
      },
      {
        speaker: "Priya Sharma",
        text: "We're also investing in multi-modal vector support, which is a big differentiator. The healthcare use case I mentioned — searching across images and text simultaneously — that's something Pinecone can't do today. Our pipeline has six more healthcare opportunities in various stages.",
      },
      {
        speaker: "Sunna Mo",
        text: "The regulated-industry focus is smart. For the MC introduction, I think the IT infrastructure team would be interested in the compliance angle specifically. They've been dealing with data sovereignty requirements across different jurisdictions. Let me set that up within the next two weeks.",
        isMe: true,
      },
      {
        speaker: "Alex Kim",
        text: "Perfect. On the Japan market specifically, we've been doing some research and the enterprise AI infrastructure spend there is expected to hit $8B by 2027. The timing of a Series B with a Japan-focused investor would let us establish a presence before the market gets crowded.",
      },
      {
        speaker: "Priya Sharma",
        text: "One more thing — we're looking at a potential partnership with a Japanese systems integrator to handle enterprise deployments locally. Any recommendations from the MC network?",
      },
      {
        speaker: "Sunna Mo",
        text: "I have a few names in mind. NTT Data and NRI are the obvious ones, but I'd also suggest looking at ISID, which is actually an MC group company. Let me make some introductions and we can figure out the right partner fit.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-6",
    title: "MCGI Weekly Standup",
    date: daysAgo(2),
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
      "Weekly team standup covering deal flow updates, portfolio company milestones, and upcoming events. Discussed prioritization of AI vs climate tech deal flow and upcoming Stanford AI conference networking plan. Inbound referrals are up 40% from monthly average, prompting a discussion about tightening screening criteria with an MC synergy score. Team also aligned on Stanford HAI conference scouting targets.",
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
      {
        title: "MC synergy score proposed for screening",
        description:
          "Sunna proposed adding an MC synergy score to the initial screening criteria to pass faster on companies without clear strategic fit. Team agreed to pilot the approach in Q2.",
        participants: ["Sunna Mo", "Kengo Morimoto"],
      },
      {
        title: "NeuralDB milestone update",
        description:
          "NeuralDB hit $1.8M ARR and is planning Series B for Q3. MCGI facilitating Japan customer introductions and co-investor connections.",
        participants: ["Sunna Mo", "Ryotaro Nakamura"],
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
        text: "Quick standup. Let's go around — deal flow first, then portfolio updates, then events.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "We had 23 inbound referrals last week. That's up significantly from our monthly average of around 16. The MCGI brand is starting to get recognized in the Valley. But we need to be more selective — I'd like to tighten our screening criteria.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed. I'd suggest we add an MC synergy score to the initial screen. If there's no clear connection to an MC business unit, we should be passing faster. Right now we're spending too much time on companies that are interesting but don't have a strategic angle.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "I like that. The synergy score makes sense. Ryotaro, can you incorporate that into the screening doc? Let's pilot it for Q2 and see if it improves our signal-to-noise ratio.",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Will do. I'll have a draft framework by end of week. I'm thinking we score on three dimensions — direct MC business unit relevance, portfolio company value-add, and Japan market applicability.",
      },
      {
        speaker: "Sunna Mo",
        text: "On the portfolio side, NeuralDB is performing well. Just had our quarterly check-in — they're at $1.8M ARR and planning a Series B for Q3. I'm going to connect them with JAFCO and Global Brain for co-investment, and setting up an MC IT infrastructure intro.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "On the events side, Stanford HAI conference is this Thursday. I've identified 8 presenters whose research aligns with our thesis areas — three in AI agents, two in enterprise AI safety, and three in applied ML for industrial applications. I'll share the target list by end of day.",
      },
      {
        speaker: "Sunna Mo",
        text: "Mihiro and I will divide and conquer at the conference. I'll focus on the AI agent and enterprise tracks, Mihiro will cover the applied ML sessions. We should also try to connect with the Stanford AI Lab students — some of them will be founding companies in the next year.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "Good plan. Make sure we're coordinating with the Tokyo team on any Japan-market-relevant companies we encounter. Alright, anything else before we wrap?",
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "One quick thing — the IC vote for Sentra is confirmed for March 19th. Sunna is on point for the investment memo. I'll review the draft over the weekend if she can have it to me by Friday.",
      },
      {
        speaker: "Sunna Mo",
        text: "I'll have it ready. I'm doing one more reference call with the Campfire design partner tomorrow to round out the customer validation section. After that the memo should be in good shape.",
        isMe: true,
      },
      {
        speaker: "Kengo Morimoto",
        text: "Great. Let's make sure the memo is tight. This will be the first IC vote under our new investment framework, so I want it to set the standard. Good standup everyone.",
      },
    ],
  },
  {
    id: "mcgi-mtg-7",
    title: "FluxMaterials Founder Call",
    date: daysAgo(5),
    time: "11:00 AM",
    endTime: "11:45 AM",
    duration: "45m",
    participants: ["Sunna Mo", "Mihiro Nakamura", "Dr. James Park"],
    tags: ["screening", "advanced-materials"],
    platform: "Google Meet",
    privacy: "private",
    summary:
      "Initial screening call with FluxMaterials founder Dr. James Park. Company is developing proprietary battery recycling technology with a novel hydrometallurgical process achieving 95% metal recovery rates. Pilot facility under construction in Nevada, expected operational Q2 2026. Two EV manufacturer LOIs already signed for feedstock supply. Team recommended a smaller initial check with milestone-based follow-on given the earlier stage and execution risk.",
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
      {
        title: "Market timing favorable",
        description:
          "EU battery directive requires 70% recycling rate by 2030. US IRA provides tax credits for domestically recycled battery materials. FluxMaterials is well-positioned to capture both regulatory tailwinds.",
        participants: ["Sunna Mo", "Dr. James Park"],
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
        text: "That's impressive. What's the current state of the pilot facility? And can you give us a sense of the capital requirements to get to commercial scale?",
      },
      {
        speaker: "Dr. James Park",
        text: "Construction is about 70% complete in Nevada. We're targeting June for first operations. We've already signed LOIs with two EV manufacturers for feedstock supply, so we'll have material to process from day one. To get to commercial scale, we're looking at roughly $25M in additional capital beyond the pilot.",
      },
      {
        speaker: "Sunna Mo",
        text: "Walk me through the unit economics. At commercial scale, what does the cost per kilogram of recovered lithium look like compared to virgin mining?",
        isMe: true,
      },
      {
        speaker: "Dr. James Park",
        text: "At our target throughput of 5,000 tons per year, we project recovered lithium at $8 per kilogram versus $12 to $15 for virgin lithium carbonate. And that's before any tax credits under the IRA. With the domestic recycling credits factored in, the economics get even more favorable.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "What about the purity levels? Battery cathode manufacturers have very strict specs. Can your recycled materials meet those directly, or is there additional processing required?",
      },
      {
        speaker: "Dr. James Park",
        text: "Our process achieves 99.5% purity for lithium, cobalt, and nickel directly from the recycling process. That's cathode-grade quality without any additional refining step. We've validated this with two battery cathode manufacturers who confirmed our output meets their specs.",
      },
      {
        speaker: "Sunna Mo",
        text: "That's a strong technical story. Let me ask about the regulatory landscape. The EU battery directive is pushing hard on recycling requirements. How does that play into your go-to-market?",
        isMe: true,
      },
      {
        speaker: "Dr. James Park",
        text: "The EU directive requires 70% recycling rate by 2030, which is a massive tailwind. We're already in conversations with three European automotive OEMs who need recycling partners to meet compliance. Our plan is to license the technology for European facilities rather than building our own plants there initially.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "The licensing model is interesting. What does the IP portfolio look like? How many patents do you have filed or granted?",
      },
      {
        speaker: "Dr. James Park",
        text: "We have 4 patents granted and 7 pending. The core solvent system patent is granted in the US, EU, Japan, and Korea. The pending patents cover our process optimization algorithms and the modular reactor design. Our patent counsel believes the portfolio is very defensible.",
      },
      {
        speaker: "Sunna Mo",
        text: "The Japan patent is interesting for us. MC has significant metals trading operations and battery material supply chains in Asia. There could be a natural synergy there. Mihiro, can you connect James with the metals trading team for an exploratory conversation?",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "Definitely. James, I'd also like to get your detailed process documentation and any independent lab validation results. We want our technical advisors to review the chemistry before we move forward with due diligence.",
      },
      {
        speaker: "Dr. James Park",
        text: "Of course. I'll have everything to you by end of week. We're very transparent about our science — we've published two peer-reviewed papers on the solvent system. Happy to share those as well.",
      },
      {
        speaker: "Sunna Mo",
        text: "Great call, James. We're going to review the technical materials and discuss internally. Given the pilot timeline and the execution risk, we'd likely be looking at a smaller initial check with milestone-based follow-on. But the technology is genuinely exciting.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-8",
    title: "Tokyo HQ Strategy Sync",
    date: daysAgo(6),
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
      "Monthly strategy sync with Tokyo HQ covering SF team activities, allocation requests, and alignment on MC Corporate Strategy 2027 priorities. Discussed increased climate tech allocation and upcoming IC pipeline. Tokyo HQ is supportive of increasing climate tech allocation from 25% to 35%, pending formal board approval at the April meeting. Also discussed adding one associate headcount to handle the increased deal flow volume.",
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
      {
        title: "Corporate Strategy 2027 alignment confirmed",
        description:
          "MCGI's investment thesis areas — AI infrastructure, climate tech, and advanced materials — are fully aligned with MC's Corporate Strategy 2027 'Create' pillar focused on next-generation business incubation.",
        participants: ["Yoko Tanaka", "Sunna Mo"],
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
        text: "Good evening from Tokyo. Let's start with the allocation discussion. We've reviewed the SF team's request to increase climate tech allocation and I'm pleased to say the reception from the corporate strategy office has been positive.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "Thanks Haruki. The rationale is straightforward. We're seeing high-quality deal flow in climate tech, and the board's sustainability directive gives us cover to increase allocation. We're proposing 35% of new deployments, up from 25%.",
      },
      {
        speaker: "Yoko Tanaka",
        text: "The corporate strategy office is supportive. This aligns with the 2027 Create pillar. We'll need a formal proposal for the April board meeting. I can help shape the narrative to connect it to the broader corporate strategy.",
      },
      {
        speaker: "Sunna Mo",
        text: "On the pipeline side, we have three companies moving to DD this month — Sentra in enterprise AI, CarbonGrid in carbon capture, and FluxMaterials in battery recycling. The IC vote for Sentra is scheduled for March 19th.",
        isMe: true,
      },
      {
        speaker: "Haruki Watanabe",
        text: "Tell me more about the Sentra opportunity. Enterprise AI is a hot space and I want to understand why this company specifically stands out from the crowd.",
      },
      {
        speaker: "Sunna Mo",
        text: "Sentra is building organizational memory — they capture the decision history and context that gets lost as companies scale. The differentiation is their interaction-first architecture. Instead of indexing documents like Glean, they capture people and interactions as the core data objects. The MC synergy is very strong — potential deployment across our 1,700 group companies.",
        isMe: true,
      },
      {
        speaker: "Yoko Tanaka",
        text: "That's interesting. Cross-border knowledge management is one of the biggest pain points for the MC group right now. The president mentioned it explicitly in the January leadership meeting. If Sentra can address that, the strategic value goes beyond just financial return.",
      },
      {
        speaker: "Kengo Morimoto",
        text: "On the headcount front — we need to discuss the associate position. Deal flow is up 40% and the team is stretched. We've been turning down meetings that we should be taking simply because we don't have bandwidth.",
      },
      {
        speaker: "Haruki Watanabe",
        text: "I understand the need. The HR team will review it, but I'm optimistic. Given the deployment pace and the expanded climate tech mandate, the justification is clear. Can you send a formal request by end of next week?",
      },
      {
        speaker: "Sunna Mo",
        text: "I've already submitted the formal request through HR. The JD emphasizes climate tech and advanced materials expertise since that's where we need the most coverage. I included the deal flow volume data to support the business case.",
        isMe: true,
      },
      {
        speaker: "Yoko Tanaka",
        text: "Good proactive move, Sunna. Let me flag one more item — the annual CVC summit in Singapore is in May. Tokyo would like MCGI to present your investment thesis update and portfolio highlights. Can you prepare a 20-minute presentation?",
      },
      {
        speaker: "Kengo Morimoto",
        text: "We'll put that together. Sunna, can you take the lead on the presentation deck? Let's showcase the portfolio wins and the thesis evolution since last year. It's a good opportunity to reinforce MCGI's position within the MC group.",
      },
      {
        speaker: "Sunna Mo",
        text: "Happy to lead on that. I'll start pulling the deck together next week after the IC prep work is done. Haruki, Yoko — anything else from Tokyo before we close out?",
        isMe: true,
      },
      {
        speaker: "Haruki Watanabe",
        text: "One final note — the president will be visiting San Francisco in April. Please keep two hours open for a portfolio review meeting with him. I'll send the exact dates once his travel is confirmed. Good meeting everyone.",
      },
    ],
  },
  {
    id: "mcgi-mtg-9",
    title: "Portfolio Company Board Prep",
    date: daysAgo(6),
    time: "10:00 AM",
    endTime: "10:45 AM",
    duration: "45m",
    participants: ["Sunna Mo", "Ryotaro Nakamura"],
    tags: ["portfolio", "internal"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Internal prep session for upcoming NeuralDB and QuantumSense board observer meetings. Reviewed key metrics, discussion points, and strategic recommendations for each company. NeuralDB is performing well but faces competitive pressure from Pinecone's enterprise tier, and the team aligned on pushing for accelerated Japan market entry. QuantumSense's semiconductor QA traction is strong and the MC semiconductor trading connection should be prioritized.",
    keyPoints: [
      {
        title: "NeuralDB board observer talking points",
        description:
          "Focus on Series B readiness, Japan market entry strategy, and MC customer introduction pipeline. Revenue tracking well but need to address competitive pressure from Pinecone enterprise tier.",
        participants: ["Sunna Mo", "Ryotaro Nakamura"],
      },
      {
        title: "QuantumSense strategic positioning",
        description:
          "Semiconductor QA vertical is the clear beachhead. MC's semiconductor trading arm is a natural pilot partner for Japan expansion. Should push for an intro at the board meeting.",
        participants: ["Ryotaro Nakamura", "Sunna Mo"],
      },
      {
        title: "Board observer influence strategy",
        description:
          "Aligned on approach to position MCGI as the most value-added investor on both cap tables. Customer introductions and Japan market access are the key differentiators versus purely financial investors.",
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
        text: "That's exactly right. Having an MC deployment as a reference customer would be huge for their Japan go-to-market narrative. I'll push for that at the board meeting. Let's make the intro happen before the Series B process kicks off.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "On the Pinecone threat — I think we need to be direct about it. Their enterprise tier launch is real competition. But NeuralDB's regulated-industry compliance features are genuinely differentiated. We should encourage them to double down on that positioning rather than trying to compete on features across the board.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed. The compliance moat is their strongest card. Financial services and healthcare are massive markets that Pinecone isn't set up to serve well. Let me add that to the talking points.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Now for QuantumSense — their semiconductor QA traction is impressive. $3.2M ARR with TSMC as a customer is a strong signal. I think the MC semiconductor trading connection is the highest-leverage thing we can do here.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed. MC's semiconductor trading arm has relationships with every major fab in Japan. If QuantumSense can get into the Japan market through MC, that changes their international expansion story entirely.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "I've already reached out to the semiconductor division head. He's interested but wants to see a demo first. Can you coordinate with David Chen to set that up?",
      },
      {
        speaker: "Sunna Mo",
        text: "I'll reach out to David today. Let me also think about how we frame the broader board observer strategy. For both NeuralDB and QuantumSense, our value-add as MCGI is the MC network — customer introductions, Japan market access, and strategic industry connections. We should be the most value-added investor on both cap tables.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Completely aligned. That's our differentiator versus the pure financial VCs. Let's make sure we have concrete intros to offer at each board meeting, not just vague promises. I'll prepare a list of MC contacts for each company.",
      },
      {
        speaker: "Sunna Mo",
        text: "Perfect. Let me draft the board observer memo today and we can review it tomorrow morning. I want to make sure our strategic recommendations are crisp and actionable. We should demonstrate that MCGI's network is delivering real value.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Sounds good. One more thing — I think we should start tracking the tangible value we deliver to portfolio companies more systematically. Customer introductions, revenue influenced, partnerships facilitated. It would strengthen our LP reporting and help with the next fund raise.",
      },
    ],
  },
  {
    id: "mcgi-mtg-13",
    title: "Ryotaro 1:1 Weekly Sync",
    date: daysAgo(1),
    time: "4:00 PM",
    endTime: "4:30 PM",
    duration: "30m",
    participants: ["Ryotaro Nakamura"],
    tags: ["internal", "1:1"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly 1:1 with Ryotaro covering pipeline prioritization, upcoming IC vote logistics for Sentra, and M-Lab consortium coordination. Discussed splitting deal sourcing responsibilities for Q2 to reduce overlap and increase coverage. Agreed on Sentra memo timeline and Q2 sourcing split — Sunna focuses on enterprise AI and dev tools, Ryotaro covers climate tech and advanced materials.",
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
      {
        title: "M-Lab consortium coordination",
        description:
          "Discussed leveraging M-Lab network more effectively for deal sourcing. Ryotaro to take point on consortium climate tech referrals while Sunna handles AI and enterprise referrals.",
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
        text: "Yes, I'll have it by end of day Friday. I'm doing the Campfire reference call tomorrow which is the last piece I need for the customer validation section. The rest of the memo is largely drafted.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Good. I want to make sure the competitive analysis section is airtight. Kengo always pushes hard on that. Especially the Glean and Copilot positioning — we need a clear narrative on why Sentra wins.",
      },
      {
        speaker: "Sunna Mo",
        text: "Absolutely. The interaction-first vs aggregation-first framing is the key differentiator. I'll make sure the competitive section tells that story clearly with specific examples from the design partner feedback.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Perfect. Now on Q2 sourcing — I was thinking we should formalize the split. We've had some overlap in the past month where we're both chasing the same AI companies.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed. For Q2, I'll take enterprise AI and dev tools, you take climate tech and materials. Less overlap, more coverage. We can cross-refer anything that doesn't fit our respective lanes.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Makes sense. I've been building more relationships in the climate space anyway, especially through the M-Lab consortium. Speaking of which, I think we should be more intentional about leveraging the consortium for sourcing.",
      },
      {
        speaker: "Sunna Mo",
        text: "Good point. The consortium generated 14 referrals in Q1 — that's meaningful. How about you take point on consortium climate tech referrals and I handle the AI and enterprise ones? That maps cleanly to our sourcing split.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "That works. I'll coordinate with Kenji from Asahi Kasei on the climate tech pipeline specifically. He's been sending us some interesting companies in the industrial decarbonization space.",
      },
      {
        speaker: "Sunna Mo",
        text: "One more thing — the co-investment interest from Global Brain, JAFCO, and SBI on Sentra. Should we include a section on potential syndicate structure in the memo?",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Yes, but keep it brief. Kengo's instinct is to lead and set terms. Include it as an optionality section — here's what a co-investment could look like, but our recommendation is to lead. Let's formalize the Q2 split with Kengo at the next standup.",
      },
      {
        speaker: "Sunna Mo",
        text: "Sounds good. I'll add the co-investment section to the memo and flag it as optional. Talk to you tomorrow after the conference.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-14",
    title: "QuantumSense Portfolio Review",
    date: daysAgo(2),
    time: "2:30 PM",
    endTime: "3:15 PM",
    duration: "45m",
    participants: ["Sunna Mo", "David Chen", "Lisa Park"],
    tags: ["portfolio", "check-in"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Quarterly review with QuantumSense (Series A portfolio). Product-market fit strengthening in semiconductor QA vertical with $3.2M ARR, up from $2.1M last quarter. Three new chip manufacturer contracts signed in Q1 including TSMC Oregon. Discussed international expansion through MC's semiconductor trading arm and potential Series B lead investors. The Japan market opportunity is significant given the new TSMC and Rapidus fabs.",
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
      {
        title: "Series B considerations",
        description:
          "At current growth rate, QuantumSense will be ready for a Series B by Q4 2026. MCGI's strategic value-add on Japan expansion could anchor the round.",
        participants: ["David Chen", "Sunna Mo"],
      },
      {
        title: "Product roadmap expanding to adjacent verticals",
        description:
          "Beyond semiconductor QA, the team is exploring applications in pharmaceutical manufacturing and precision optics. Both leverage the same core quantum sensing technology.",
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
        text: "David, Lisa — great to see you both. How's Q1 shaping up? Last time we spoke you were close to landing TSMC Oregon.",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Really strong. We hit $3.2M ARR this month. The semiconductor QA use case is our beachhead — we signed TSMC's Oregon facility, plus two other chip manufacturers. The TSMC deal alone is $400K ACV.",
      },
      {
        speaker: "Lisa Park",
        text: "On the expansion front, we're interested in Japan. The semiconductor market there is huge with the new TSMC and Rapidus fabs going up. Can MCGI help with introductions to the right decision makers?",
      },
      {
        speaker: "Sunna Mo",
        text: "Absolutely. MC has a semiconductor trading arm that would be a perfect pilot partner. They have relationships with every major fab in Japan. Let me set up an intro call this month.",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "That would be game-changing. The Japan semiconductor market is undergoing a massive expansion right now. TSMC's Kumamoto fab, Rapidus in Hokkaido — there's billions of dollars in new fab construction that all needs QA tooling.",
      },
      {
        speaker: "Sunna Mo",
        text: "Walk me through the product roadmap. You mentioned at the last check-in that you were exploring adjacent verticals. Where did that land?",
        isMe: true,
      },
      {
        speaker: "Lisa Park",
        text: "We've validated two adjacent markets. Pharmaceutical manufacturing is the most promising — the FDA is pushing for more rigorous quality control and our quantum sensing technology can detect contamination at parts-per-trillion levels. We have two pharma companies in late-stage pilots.",
      },
      {
        speaker: "David Chen",
        text: "The second is precision optics for defense and aerospace. It's a smaller market but very high ACV. We're being careful about expanding too fast though — semiconductor QA is the priority and we want to make sure we dominate that vertical before broadening.",
      },
      {
        speaker: "Sunna Mo",
        text: "Smart approach. Focus is the right call at this stage. Let me ask about Series B timing. At your current growth rate, when do you think you'll be ready to raise?",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Probably Q4 this year. We want to hit $5M ARR and have the Japan market entry underway before we go out. The story of US semiconductor QA dominance plus Japan expansion would be very compelling for investors.",
      },
      {
        speaker: "Lisa Park",
        text: "On the competitive front, we're in a strong position. The closest competitor is still 18 months behind us on the quantum sensing hardware. Our patent portfolio covers the core measurement technique and the ML layer for defect classification.",
      },
      {
        speaker: "Sunna Mo",
        text: "The technical moat sounds solid. For the MC semiconductor intro, I'll reach out to the division head this week. They've already expressed interest after I mentioned QuantumSense at an internal meeting. David, can you prepare a short demo that's tailored to Japanese semiconductor QA workflows?",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Absolutely. We'll put together something specific to the use cases at Japanese fabs. The defect classification model works especially well for the advanced packaging processes that TSMC Kumamoto is ramping up.",
      },
      {
        speaker: "Lisa Park",
        text: "And if MC's semiconductor division becomes a customer, that's not just revenue — it's the best possible reference for every other fab in Japan. The strategic value of this introduction is enormous for us.",
      },
      {
        speaker: "Sunna Mo",
        text: "Exactly. That's the MCGI value proposition — we're not just financial investors. I'll have the intro set up within the next two weeks. Let's schedule a check-in after the demo call to discuss next steps on the Japan strategy.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-15",
    title: "AI Infrastructure Deal Screening",
    date: daysAgo(6),
    time: "1:00 PM",
    endTime: "1:45 PM",
    duration: "45m",
    participants: ["Sunna Mo", "Mihiro Nakamura", "Ryotaro Nakamura"],
    tags: ["screening", "enterprise-ai"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Screened four inbound AI infrastructure companies referred through M-Lab consortium. Two passed initial filter for deeper review — DataForge (MLOps for regulated industries) and LabelScale (data labeling marketplace). Two were declined — CloudNine for overlapping with NeuralDB's roadmap and InferenceX for competing in a space where Anthropic and OpenAI have insurmountable advantages. The team aligned on scheduling founder calls with the two approved companies within two weeks.",
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
      {
        title: "MC synergy scoring applied successfully",
        description:
          "First time applying the new MC synergy scoring framework to a screening batch. DataForge scored highest on MC financial services relevance. LabelScale scored well on MC's automotive and manufacturing data needs.",
        participants: ["Sunna Mo", "Mihiro Nakamura"],
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
        text: "Let's run through the four M-Lab referrals. I've done preliminary research on each and scored them against the new MC synergy framework. Starting with DataForge — they're building an MLOps platform specifically for regulated industries.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "That's interesting. MC's financial services portfolio companies have been asking about MLOps tooling. The regulated-industry angle gives them a defensible niche. What's the founding team like?",
      },
      {
        speaker: "Sunna Mo",
        text: "Strong. Two ex-Google ML engineers who previously built internal MLOps tooling for Google's healthcare AI team. They understand compliance deeply because they lived it. Revenue is early — about $500K ARR — but growing 30% month over month.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "The regulated-industry MLOps space is getting crowded though. How do they differentiate from Weights & Biases and MLflow, which are both adding compliance features?",
      },
      {
        speaker: "Sunna Mo",
        text: "Fair question. Their pitch is that compliance is their core architecture, not a bolt-on. They have built-in audit trails, model lineage tracking, and automated regulatory reporting. W&B and MLflow are trying to add that on top of an existing architecture, which creates gaps. I think it's worth a founder call to dig deeper.",
        isMe: true,
      },
      {
        speaker: "Mihiro Nakamura",
        text: "I agree. Let's move to LabelScale. This is the data labeling marketplace. How does it compare to Scale AI and Labelbox?",
      },
      {
        speaker: "Sunna Mo",
        text: "LabelScale is taking a marketplace approach rather than a managed service approach. They're connecting companies that need labeling with specialized labeling teams — think of it like Uber for data annotation. The interesting angle for MC is that they have labeling teams in Japan and Southeast Asia, which is where MC has its strongest operational presence.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "The Japan angle is compelling. MC's automotive companies are generating massive amounts of sensor data that needs labeling for autonomous driving models. That's a clear synergy. What about the other two?",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "CloudNine is building a cloud-native vector database. I think we pass on this one — it overlaps significantly with NeuralDB's product roadmap. Investing in a direct competitor to our own portfolio company would create awkward dynamics.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agree on CloudNine. And InferenceX is building an inference optimization platform. The technology is interesting but they're competing directly with what Anthropic and OpenAI are building in-house. The moat is thin when the model providers control the inference stack.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Agree on both passes. For CloudNine especially, we should be careful about signaling. If it gets out that we looked at a NeuralDB competitor, it could create trust issues. Let me send a polite pass-through email to the M-Lab referrer.",
      },
      {
        speaker: "Mihiro Nakamura",
        text: "Good point on the optics. So to summarize — we're moving forward with DataForge and LabelScale, passing on CloudNine and InferenceX. Sunna, can you schedule the founder calls?",
      },
      {
        speaker: "Sunna Mo",
        text: "I'll reach out to both founders today and try to get calls scheduled within the next two weeks. For DataForge, I want to bring Mihiro on the call given the technical depth of the MLOps space. For LabelScale, I'll handle the initial screen solo and loop in Ryotaro if the Japan angle checks out.",
        isMe: true,
      },
      {
        speaker: "Ryotaro Nakamura",
        text: "Sounds good. One more thought — this was the first time we used the MC synergy scoring framework on a batch screening. I think it worked well. DataForge scored 8 out of 10 on MC relevance because of the financial services connection. LabelScale scored 7 because of the automotive data opportunity. The two we passed on both scored below 4.",
      },
      {
        speaker: "Sunna Mo",
        text: "Agreed, the framework is proving useful. Let's keep refining it based on the outcomes of these founder calls. If both convert to DD, that's a strong signal that the scoring is calibrated correctly.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-10",
    title: "Sentra Due Diligence Sync",
    date: daysAgo(0),
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
    date: daysAgo(0),
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
    date: daysAgo(0),
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
