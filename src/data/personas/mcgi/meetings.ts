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
      "Tom Brennan",
      "Claire Lawson",
      "Jake Brennan",
      "Richard Caldwell",
      "Sean Mercer",
    ],
    tags: ["investment-committee", "pipeline"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Reviewed 14 active pipeline deals across AI infrastructure, climate tech, and enterprise SaaS. Committee approved moving Sentra and two climate-tech companies to due diligence. Discussed allocation strategy given current GBP 100B deployment pace. Board's climate tech directive may require rebalancing H2 deployment targets across verticals.",
    keyPoints: [
      {
        title: "Pipeline health strong in AI/enterprise",
        description:
          "14 active deals, 6 in AI infrastructure and enterprise software. Conversion from screening to DD running at 22%, above Q4 benchmark of 18%.",
        participants: ["Tom Brennan", "Richard Caldwell"],
      },
      {
        title: "Three companies approved for due diligence",
        description:
          "Sentra (organizational memory), GreenCore (industrial carbon capture), and NovaMaterials (battery recycling) approved to move to full DD. Target close for Sentra within 6 weeks.",
        participants: ["Claire Lawson", "Tom Brennan"],
      },
      {
        title: "Deployment pace tracking ahead of plan",
        description:
          "YTD deployed $48M against $120M annual target. May need to adjust pacing in H2 if quality deal flow maintains current levels.",
        participants: ["Richard Caldwell", "Sean Mercer"],
      },
      {
        title: "Climate tech allocation under review",
        description:
          "Board requesting increased allocation to climate tech given AG group sustainability commitments. Proposal to increase from 25% to 35% of new deployments.",
        participants: ["Sean Mercer", "Jake Brennan"],
      },
      {
        title: "Co-investment interest from peer CVCs",
        description:
          "Three inbound inquiries from Pacific Mind, Sakura Capital, and Fuji Investment about co-investing in Sentra. Signals strong market validation but need to move quickly to set terms.",
        participants: ["Tom Brennan", "Claire Lawson"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-1",
        title: "Prepare Sentra investment memo for IC vote",
        description:
          "Draft full investment memo including market sizing, competitive analysis, and synergy mapping with AG business units",
        assignee: "Claire Lawson",
        checked: false,
      },
      {
        id: "mcgi-ai-2",
        title: "Schedule GreenCore technical DD with AG industrial team",
        description:
          "Coordinate technical due diligence session with AG's industrial materials division",
        assignee: "Jake Brennan",
        checked: false,
      },
      {
        id: "mcgi-ai-3",
        title: "Update deployment pacing model for H2",
        description:
          "Revise pacing assumptions given strong Q1 pipeline and board climate-tech directive",
        assignee: "Sean Mercer",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Richard Caldwell",
        text: "Good morning everyone. Let's get started. We have a packed agenda today. I want to cover the pipeline overview, discuss the three companies we're considering for DD, touch on pacing, and then address the board's climate tech directive. Tom, can you kick us off with the pipeline overview?",
      },
      {
        speaker: "Tom Brennan",
        text: "Sure. So as of this week, we have 14 active companies in the pipeline. Six in AI and enterprise software, five in climate tech, and three in advanced materials. The conversion rate from screening to DD is 22%, which is up from last quarter's 18%. I think the improvement is partly due to the tighter screening criteria we implemented in January.",
      },
      {
        speaker: "Richard Caldwell",
        text: "That's good to see. Are there any patterns in the inbound flow? Where are most of these companies coming from?",
      },
      {
        speaker: "Tom Brennan",
        text: "About 40% are coming through the Catalyst Alliance consortium network, which is up significantly. Another 30% are direct referrals from our existing portfolio companies, and the remaining 30% are from VC co-investor introductions, mostly from our relationships with Redwood, Summit Ventures, and Sakura Capital.",
      },
      {
        speaker: "Claire Lawson",
        text: "I want to highlight Sentra specifically. They're building organizational memory — essentially capturing decision history and context as companies scale. It's directly relevant to what we've been discussing around enterprise AI adoption. I've been tracking them since the LP W25 batch and had multiple conversations with the founding team over the past four months.",
        isMe: true,
      },
      {
        speaker: "Richard Caldwell",
        text: "What's the team background? And where are they in terms of traction?",
      },
      {
        speaker: "Claire Lawson",
        text: "Founded by Raj Sundaram, who's an university professor, and Pavel Volkov as CTO. Pre-seed, raised $5M from Apex AI Conference and Horizon Fund. They already have design partners including teams at BlueBridge, RenderLab, and Campfire. The product is live and getting strong feedback — one reference call described it as replacing 30 minutes of manual CRM updates after every call.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "I've seen the product demo. The meeting intelligence and commitment tracking could be very valuable for our portfolio companies as well. There's a strategic angle beyond just financial return. I think the AG synergy score here is genuinely high.",
      },
      {
        speaker: "Sean Mercer",
        text: "Can you walk us through the competitive landscape for Sentra? I want to understand how defensible this is. Prism is well-funded, AssistAI has distribution.",
      },
      {
        speaker: "Claire Lawson",
        text: "Great question. Prism takes an aggregation-first approach — they index documents and files. Microsoft AssistAI is essentially a chat layer over existing tools. Sentra is fundamentally different. They capture actors and interactions as first-class objects and derive everything else from that — decisions, rationale, commitments, relationships. Nobody else is doing interaction-first. It creates a real data moat because the value compounds as more interactions are captured.",
        isMe: true,
      },
      {
        speaker: "Richard Caldwell",
        text: "What about the Europe market angle? That's always a critical factor for our investment thesis.",
      },
      {
        speaker: "Claire Lawson",
        text: "Multi-language support isn't built yet, but it's on their Q3 2026 roadmap. The founding team has expressed strong interest in Europe market entry, especially given the cross-cultural knowledge transfer problem across AG's 90 country offices. I've flagged the Europe localization timeline as a key DD item.",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "On GreenCore, I've completed the initial technical assessment. Their carbon capture efficiency is 40% better than the closest competitor, and the unit economics work at scale. AG's industrial materials team is very interested. I had a call with Greg Lawton last week and he confirmed strong interest from the materials division leadership.",
      },
      {
        speaker: "Sean Mercer",
        text: "What are the unit economics looking like specifically?",
      },
      {
        speaker: "Jake Brennan",
        text: "At scale — 10,000 tons per year and above — they're projecting $78 per ton all-in. That includes installation, operation, and membrane replacement cycles. For context, AG's cement operations currently spend roughly $115 per ton on carbon capture with existing technology. So the cost savings are significant.",
      },
      {
        speaker: "Richard Caldwell",
        text: "And NovaMaterials? Where are we on that one?",
      },
      {
        speaker: "Jake Brennan",
        text: "NovaMaterials is earlier stage. Battery recycling technology is promising but the pilot facility isn't operational yet. I'd recommend a smaller initial check with milestone-based follow-on rather than a full commitment at this stage. The market is growing rapidly with EU battery directive tailwinds, but execution risk is higher.",
      },
      {
        speaker: "Sean Mercer",
        text: "Quick note on pacing — we've deployed $48M year-to-date. At this rate we'll exceed the $120M annual target by September. We may need to be more selective in H2 or request an increased allocation from HQ. I'd also note that the board's climate tech directive complicates things because it effectively pre-allocates a larger share of the remaining budget.",
      },
      {
        speaker: "Richard Caldwell",
        text: "Good point. Let's address the climate tech allocation separately. For now — I'm comfortable approving Sentra, GreenCore, and NovaMaterials for full due diligence. Claire, take point on the Sentra investment memo. I want it ready for the IC vote on March 19th.",
      },
      {
        speaker: "Claire Lawson",
        text: "On it. I'll have the investment memo ready by end of next week. I'm also scheduling one more reference call with the Campfire design partner this week to round out the customer validation section.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Before we move on — I want to flag that we've had three inbound inquiries from other CVCs about co-investing in Sentra. Pacific Mind, Sakura Capital, and Fuji Investment. Should we consider bringing in a co-investor?",
      },
      {
        speaker: "Richard Caldwell",
        text: "Let's discuss that offline. I don't want to slow down our process. If we move fast we can set the terms. Claire, flag that in the memo — potential co-investment opportunity.",
      },
      {
        speaker: "Claire Lawson",
        text: "Will do. One last thing — the Ashmore AI Summit conference is this Thursday. Jake and I are attending. We've identified 8 presenters whose research aligns with our thesis areas. I'll share the scouting debrief with the team by Friday.",
        isMe: true,
      },
      {
        speaker: "Richard Caldwell",
        text: "Perfect. Let's make sure we coordinate with the London team on anything Europe-market-relevant. Alright, let's close out. Claire owns the Sentra memo, Jake owns GreenCore technical DD coordination, and Sean will revise the pacing model. Let's reconvene Thursday after the conference. Good meeting everyone.",
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
      "Claire Lawson",
      "Tom Brennan",
      "Raj Sundaram",
      "Leo Hartwell",
    ],
    tags: ["due-diligence", "enterprise-ai"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Deep dive into Sentra's product architecture and go-to-market strategy with the founding team. Reviewed the organizational memory concept, current traction with design partners, and potential synergies with AG portfolio companies and business units. The interaction-first approach is technically differentiated from Prism and AssistAI, and the team demonstrated strong product-market fit signals from early design partners.",
    keyPoints: [
      {
        title: "Interaction-first architecture is differentiated",
        description:
          "Sentra captures actors and interactions as first-class objects, deriving everything else. This is fundamentally different from Prism's aggregation approach and creates a defensible data moat.",
        participants: ["Raj Sundaram", "Claire Lawson"],
      },
      {
        title: "Strong design partner engagement",
        description:
          "Active design partners include teams at BlueBridge, RenderLab, and Campfire. ICP is Series A/B startups (30-1000 employees) plus enterprise teams as design partners.",
        participants: ["Leo Hartwell", "Tom Brennan"],
      },
      {
        title: "Clear AG synergy opportunities",
        description:
          "Potential to deploy across AG portfolio companies for organizational knowledge management. Also relevant for AG's own internal operations across 90+ country offices.",
        participants: ["Claire Lawson", "Tom Brennan"],
      },
      {
        title: "Product roadmap aligns with CVC thesis",
        description:
          "Commitment extraction, pre-meeting briefs, and reports features are all on the near-term roadmap. Multi-language support planned for Q3 2026, which is critical for Europe market entry.",
        participants: ["Raj Sundaram", "Claire Lawson"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-4",
        title: "Request Sentra technical architecture documentation",
        description:
          "Get detailed architecture docs for technical DD review with AGV engineering advisors",
        assignee: "Claire Lawson",
        checked: true,
      },
      {
        id: "mcgi-ai-5",
        title: "Map AG business units for potential Sentra deployment",
        description:
          "Identify 3-5 AG business units that would benefit from Sentra's organizational memory product",
        assignee: "Tom Brennan",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "Raj, Leo — thanks for making time. We're really excited about what Sentra is building. Can you walk us through the core product and how you think about the organizational memory concept?",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "Absolutely. The core insight is that every organization has two first-class objects — actors, meaning people, and interactions, meaning meetings, emails, messages. Everything else — decisions, rationale, commitments, relationships — is derived from those interactions.",
      },
      {
        speaker: "Tom Brennan",
        text: "How does that differ from what Prism or Microsoft AssistAI are doing? They're also trying to capture organizational knowledge.",
      },
      {
        speaker: "Raj Sundaram",
        text: "Prism takes an aggregation-first approach — they index documents and files. We take an interaction-first approach. We capture the decision history, the context, the why behind decisions. That's what gets lost as companies scale.",
      },
      {
        speaker: "Leo Hartwell",
        text: "On the GTM side, we're focused on Series A through B companies right now — 30 to 1000 employees — plus enterprise teams as design partners. We have active pilots with teams at BlueBridge, RenderLab, and Campfire.",
      },
      {
        speaker: "Claire Lawson",
        text: "That's compelling. One thing I'm thinking about is how this could work across AG's portfolio. We have over 1,700 group companies globally. A tool that preserves institutional knowledge across leadership transitions would be incredibly valuable.",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "That's exactly the pain point we hear from larger organizations. When a key person leaves or transitions roles, the institutional knowledge walks out the door. Sentra captures that context automatically so the next person can get up to speed in days instead of months.",
      },
      {
        speaker: "Claire Lawson",
        text: "Can you talk about the product roadmap? Specifically, what's coming in the next two quarters that would be relevant for an enterprise deployment scenario?",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "Near term, we're shipping commitment extraction, pre-meeting briefs, and automated reports. Those are all in the current sprint. Multi-language support is planned for Q3 2026. We know that's critical for global organizations like AG.",
      },
      {
        speaker: "Tom Brennan",
        text: "The multi-language timeline is important for us. European is obviously a priority. How are you thinking about localization beyond just translation — the cultural nuances of communication in European business contexts?",
      },
      {
        speaker: "Leo Hartwell",
        text: "We've thought about this a lot. It's not just translation — it's understanding the implicit communication patterns in different cultures. In European business settings, what's left unsaid is often as important as what's said. Our interaction model actually captures those patterns better than document-based approaches.",
      },
      {
        speaker: "Claire Lawson",
        text: "That resonates. Let me ask about the competitive moat. You mentioned the data compounds over time. How quickly does a new customer start seeing meaningful value from the organizational memory?",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "We see meaningful value within the first two weeks for individual users — meeting notes, commitment tracking, pre-meeting context. The organizational memory kicks in around month two or three, once the system has enough interaction data to surface patterns and relationships across the company.",
      },
      {
        speaker: "Tom Brennan",
        text: "And for our own operations — AG has offices in 90 countries. The cross-cultural knowledge transfer problem is real. Claire, let's map out which business units would be the best fit for a pilot.",
      },
      {
        speaker: "Leo Hartwell",
        text: "We'd love that. We're particularly interested in how the product performs in multilingual, cross-timezone environments. That's exactly the kind of design partner feedback we need.",
      },
      {
        speaker: "Claire Lawson",
        text: "Great. I'll pull together a shortlist of AG business units by next week. Raj, can you send us the technical architecture documentation? We want our engineering advisors to review it as part of the DD process.",
        isMe: true,
      },
      {
        speaker: "Raj Sundaram",
        text: "Of course. I'll have Leo send that over by end of day tomorrow. We're very open about our architecture — we think transparency builds trust with strategic investors like AGV.",
      },
    ],
  },
  {
    id: "mcgi-mtg-3",
    title: "Catalyst Alliance Monthly AI Landscape Update",
    date: daysAgo(2),
    time: "11:00 AM",
    endTime: "12:00 PM",
    duration: "1h",
    participants: [
      "Claire Lawson",
      "Jake Brennan",
      "Lauren Cho",
      "Adam Corelli",
      "Beth Sinclair",
    ],
    tags: ["m-lab", "consortium", "ai-landscape"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Monthly Catalyst Alliance consortium meeting focused on the evolving AI infrastructure landscape. Discussed trends in AI agent frameworks, enterprise adoption patterns, and upcoming Launchpoint W26 demo day scouting plan. Three consortium members independently identified AI agent orchestration as a priority investment theme, and the group coordinated scouting assignments for the upcoming LP batch. Tokio Marine shared important lessons on Europe market localization challenges.",
    keyPoints: [
      {
        title: "AI agent frameworks emerging as key investment theme",
        description:
          "Seeing rapid convergence around agent orchestration platforms. Three consortium members independently flagged this as a priority scouting area.",
        participants: ["Claire Lawson", "Adam Corelli"],
      },
      {
        title: "LP Winter 26 demo day scouting plan",
        description:
          "Coordinated scouting assignments across consortium members for upcoming LP demo day. AGV taking lead on enterprise AI and developer tools tracks.",
        participants: ["Lauren Cho", "Jake Brennan"],
      },
      {
        title: "Europe market readiness for AI enterprise tools",
        description:
          "Tokio Marine shared insights on their AI deployment challenges. Language and cultural barriers remain significant for US-built tools entering Europe market.",
        participants: ["Beth Sinclair", "Claire Lawson"],
      },
      {
        title: "Consortium deal sharing pipeline growing",
        description:
          "Catalyst Alliance consortium has generated 14 qualified referrals in Q1 across all members. Co-investment discussions are becoming more frequent, suggesting the network effects are compounding.",
        participants: ["Lauren Cho", "Claire Lawson"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-6",
        title: "Compile AI agent framework landscape analysis",
        description:
          "Map the competitive landscape of AI agent orchestration platforms for consortium review",
        assignee: "Claire Lawson",
        checked: false,
      },
      {
        id: "mcgi-ai-7",
        title: "Coordinate LP Winter 26 demo day attendance",
        description:
          "Finalize consortium member assignments for LP demo day track coverage",
        assignee: "Jake Brennan",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Lauren Cho",
        text: "Welcome everyone to the March consortium meeting. Let's start with the AI landscape update. Claire, you had some interesting findings from the past month.",
      },
      {
        speaker: "Claire Lawson",
        text: "Thanks Lauren. The big trend I'm seeing is the rapid emergence of AI agent frameworks. Companies like Cortex Labs, LangChain, and CrewAI are building the orchestration layer for autonomous AI agents. This is going to be a major investment theme over the next 12 to 18 months.",
        isMe: true,
      },
      {
        speaker: "Adam Corelli",
        text: "We're seeing the same thing at Pinnacle Materials. Our manufacturing teams are asking about autonomous agents for quality control. The enterprise demand is real and it's coming from the operations side, not just IT.",
      },
      {
        speaker: "Claire Lawson",
        text: "That's a great signal, Adam. The pull from operations teams is exactly what differentiates this cycle from previous AI hype. These aren't science projects — they're solving concrete workflow problems. I've been mapping the landscape and there are about 15 companies worth tracking seriously.",
        isMe: true,
      },
      {
        speaker: "Lauren Cho",
        text: "Before we go deeper on agents, I want to share a quick update on consortium metrics. We've generated 14 qualified referrals across all members in Q1. That's up from 9 last quarter. The network effects are clearly compounding.",
      },
      {
        speaker: "Beth Sinclair",
        text: "From Tokio Marine's perspective, the Europe market readiness question is critical. We deployed an AI tool last quarter and the localization challenges were massive. The translation was fine, but the tool didn't understand European business communication patterns — the indirect requests, the hierarchical dynamics.",
      },
      {
        speaker: "Claire Lawson",
        text: "That's a great point, Beth. It's actually one of the reasons I'm excited about Sentra — they're already thinking about multilingual, cross-timezone use cases. That's rare for a pre-seed company. Most US startups don't even think about localization until Series B.",
        isMe: true,
      },
      {
        speaker: "Adam Corelli",
        text: "I'd push back slightly on that — thinking about it and executing on it are very different things. What gives you confidence Sentra can actually deliver on Europe localization?",
      },
      {
        speaker: "Claire Lawson",
        text: "Fair challenge. Two things. First, their interaction-first architecture is inherently better suited for multilingual environments because it captures context, not just words. Second, the founding team spent time at Westbrook working on cross-cultural collaboration research. It's in their DNA, not just on a roadmap slide.",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "For LP demo day, I've mapped out the enterprise AI and developer tools tracks. There are at least 12 companies we should be watching closely. I'll share the scouting doc after this call. AGV is taking lead on enterprise AI and dev tools, and I've coordinated with the other members to cover climate tech and fintech.",
      },
      {
        speaker: "Lauren Cho",
        text: "Perfect. Let's make sure everyone has their assignments locked in by end of week. The demo day is in three weeks and we want to be prepared to move quickly on any standouts.",
      },
      {
        speaker: "Beth Sinclair",
        text: "One more thing on the Europe market — I've been compiling a list of enterprise AI deployment failures in Europe over the past year. There are common patterns around change management and user onboarding that every US company struggles with. I'd be happy to share that analysis with the consortium.",
      },
      {
        speaker: "Claire Lawson",
        text: "That would be incredibly valuable, Beth. Can you share it before the LP demo day? It would help us evaluate which companies have the best chance of succeeding in the Europe market. I'll incorporate it into the AI agent landscape analysis I'm putting together.",
        isMe: true,
      },
      {
        speaker: "Adam Corelli",
        text: "Last item from me — I've been talking to a few founders in the AI agent space and there's a strong consensus forming around tool-use protocols. MCP from Cortex Labs seems to be winning as a standard. Companies building on that protocol may have better interoperability long-term.",
      },
      {
        speaker: "Lauren Cho",
        text: "Great insights all around. Let's wrap up. Claire owns the AI agent landscape analysis, Jake is finalizing the LP scouting assignments, and Beth will share the Europe deployment failure patterns. Let's reconvene in two weeks for a pre-demo-day sync.",
      },
    ],
  },
  {
    id: "mcgi-mtg-4",
    title: "GreenCore Technical DD",
    date: daysAgo(5),
    time: "3:00 PM",
    endTime: "4:30 PM",
    duration: "1h 30m",
    participants: [
      "Jake Brennan",
      "Claire Lawson",
      "Dr. Nora Blackwell",
      "Greg Lawton",
    ],
    tags: ["due-diligence", "climate-tech"],
    platform: "Google Meet",
    privacy: "private",
    summary:
      "Technical due diligence session for GreenCore with AG's industrial materials division. Reviewed carbon capture efficiency claims, unit economics at scale, and potential integration with AG's existing industrial portfolio. Independent lab results validated the 40% efficiency improvement, and unit economics below $80 per ton at scale are competitive with regulatory carbon credit pricing. Greg confirmed strong interest from the materials division for a 12-15 facility rollout if the pilot validates.",
    keyPoints: [
      {
        title: "Carbon capture efficiency validated",
        description:
          "Independent lab results confirm 40% efficiency improvement over competitors. Technology uses novel membrane design that reduces energy costs significantly.",
        participants: ["Dr. Nora Blackwell", "Jake Brennan"],
      },
      {
        title: "Unit economics favorable at 10K+ ton scale",
        description:
          "Cost per ton of captured CO2 drops below $80 at scale, which is competitive with regulatory carbon credit pricing in key markets.",
        participants: ["Greg Lawton", "Claire Lawson"],
      },
      {
        title: "AG industrial synergy is clear",
        description:
          "AG's cement and steel portfolio companies represent immediate deployment opportunities. Greg confirmed strong interest from the materials division leadership.",
        participants: ["Greg Lawton", "Jake Brennan"],
      },
      {
        title: "Regulatory tailwinds accelerating timeline",
        description:
          "EU carbon border adjustment mechanism and Europe's GX strategy are creating urgency for industrial decarbonization. GreenCore's technology is well-positioned to capture this demand.",
        participants: ["Claire Lawson", "Dr. Nora Blackwell"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-8",
        title: "Draft GreenCore technical DD summary",
        description:
          "Compile technical DD findings into summary document for IC review",
        assignee: "Jake Brennan",
        checked: false,
      },
      {
        id: "mcgi-ai-9",
        title: "Schedule GreenCore site visit to pilot facility",
        description:
          "Arrange visit to GreenCore's Austin pilot facility with AG industrial team",
        assignee: "Claire Lawson",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Jake Brennan",
        text: "Nora, thanks for joining. We've reviewed your initial technical documentation and have some follow-up questions, particularly around the membrane design and scalability.",
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "Happy to dive deep. The core innovation is our proprietary polymer membrane. It achieves 92% CO2 selectivity at ambient temperature, which eliminates the energy-intensive heating step that most competitors require.",
      },
      {
        speaker: "Greg Lawton",
        text: "From AG's industrial perspective, the energy savings alone make this interesting. Our cement operations spend roughly $115 per ton on carbon capture with current technology. What would this look like with your system?",
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "At scale — 10,000 tons per year and above — we're projecting $78 per ton all-in. That includes installation, operation, and membrane replacement cycles.",
      },
      {
        speaker: "Claire Lawson",
        text: "Those numbers are compelling, especially given where carbon credit pricing is heading in the EU and Europe. Nora, can you walk us through the membrane degradation curve? What's the replacement cycle look like?",
        isMe: true,
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "The membranes have a rated lifespan of 18 months under continuous operation. We've tested through three full degradation cycles in the lab and the performance drop-off is very gradual — you lose about 2% selectivity per month after month 12. Replacement is modular, so you don't need to shut down the full system.",
      },
      {
        speaker: "Jake Brennan",
        text: "What about the independent validation? I saw you referenced third-party lab results in the deck. Can you share the full report?",
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "Absolutely. Lawrence Ridgefield ran the independent validation last quarter. The report confirms the 40% efficiency improvement over the best competing technology, which is Climeworks' solid sorbent approach. I'll send the full report after this call.",
      },
      {
        speaker: "Greg Lawton",
        text: "Let me give you some context on AG's footprint. We have cement operations in Latin America, Europe, and the US. Our steel portfolio is primarily in Europe and India. If the pilot validates, we'd be looking at deploying across 12 to 15 facilities conservatively.",
      },
      {
        speaker: "Claire Lawson",
        text: "Greg, what's the internal approval process look like for a pilot deployment at one of those facilities? I want to understand the timeline from our investment to a potential AG deployment.",
        isMe: true,
      },
      {
        speaker: "Greg Lawton",
        text: "For a pilot, I can get approval from the materials division head within 30 days if the technical DD checks out. Full commercial deployment would need board-level approval, which adds another quarter. But the pilot itself could start within 60 days of investment close.",
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "That timeline works perfectly for us. Our Austin pilot facility is operational now and we can use it as the reference site. I'd actually invite the AG technical team to visit Austin before committing to a deployment.",
      },
      {
        speaker: "Jake Brennan",
        text: "I'd like to take you up on that. A site visit would give us hands-on validation and let our engineering team assess the installation requirements. Nora, what's the regulatory landscape look like? Are there any permitting hurdles we should be aware of?",
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "On the regulatory side, we're actually in a very favorable position. The membrane system operates at ambient temperature and pressure, so it doesn't trigger the same permitting requirements as chemical absorption systems. In the EU, the carbon border adjustment mechanism is creating significant urgency — we've had inbound from three European cement companies in the last month alone.",
      },
      {
        speaker: "Claire Lawson",
        text: "The regulatory tailwinds are strong. Europe's GX strategy is also pushing industrial decarbonization hard. Jake, I think we should fast-track this DD. Can you have the technical summary ready for the IC by next week?",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "I can have it ready by Friday. Nora, I'll need the Ridgefield lab report and the detailed process flow diagrams by Wednesday to make that timeline work.",
      },
      {
        speaker: "Dr. Nora Blackwell",
        text: "You'll have everything by end of day Tuesday. We're eager to move quickly on this. The AG partnership would be transformative for our go-to-market in Asia.",
      },
      {
        speaker: "Claire Lawson",
        text: "Great. Let's plan the Austin site visit for the week of March 17th if we can make the schedules work. I'll coordinate with Greg's team on availability. Thanks everyone — really productive session.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-5",
    title: "SyntheticDB Quarterly Check-in",
    date: daysAgo(5),
    time: "9:00 AM",
    endTime: "9:45 AM",
    duration: "45m",
    participants: ["Claire Lawson", "Joon Park", "Kavita Nair"],
    tags: ["portfolio", "check-in"],
    platform: "Zoom",
    privacy: "public",
    summary:
      "Quarterly check-in with SyntheticDB (Series A portfolio company). Revenue growing 25% MoM, approaching $2M ARR. Discussed Series B timing and potential AG customer introductions in the European market. The enterprise motion is working well with three $100K+ ACV deals closed in February. Team is planning a $30M Series B for Q3 2026 and looking for AGV help with Europe-focused co-investors and customer introductions.",
    keyPoints: [
      {
        title: "Revenue growth accelerating",
        description:
          "SyntheticDB hit $1.8M ARR, up from $1.4M last quarter. Enterprise pipeline is strong with 8 qualified opportunities above $100K ACV.",
        participants: ["Joon Park", "Claire Lawson"],
      },
      {
        title: "Series B planning in progress",
        description:
          "Targeting $30M Series B in Q3 2026. Want to bring in a Europe-focused strategic investor alongside US lead. AGV could facilitate introductions.",
        participants: ["Kavita Nair", "Claire Lawson"],
      },
      {
        title: "Competitive landscape shifting",
        description:
          "Pinecone launched an enterprise tier that overlaps with SyntheticDB's positioning. Team is differentiating on regulated-industry compliance features and multi-modal vector support.",
        participants: ["Joon Park", "Claire Lawson"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-10",
        title: "Introduce SyntheticDB to AG's IT infrastructure team",
        description:
          "Set up meeting between SyntheticDB and AG's IT division to explore potential enterprise deployment",
        assignee: "Claire Lawson",
        checked: false,
      },
      {
        id: "mcgi-ai-11",
        title: "Connect SyntheticDB with Europe-focused VCs for Series B",
        description:
          "Introduce SyntheticDB to Sakura Capital and Pacific Mind for Series B co-investment discussions",
        assignee: "Claire Lawson",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "Alex, Priya — great to catch up. How did Q1 shape up?",
        isMe: true,
      },
      {
        speaker: "Joon Park",
        text: "Really well. We're at $1.8M ARR now, growing about 25% month over month. The enterprise motion is working — we closed three deals above $100K ACV in February alone.",
      },
      {
        speaker: "Claire Lawson",
        text: "That's excellent growth. Walk me through those enterprise deals. What's the common thread in terms of use case and buyer persona?",
        isMe: true,
      },
      {
        speaker: "Joon Park",
        text: "Two of the three are financial services companies that need compliant vector search for RAG applications. The third is a healthcare company doing multi-modal search across medical images and clinical notes. The regulated-industry angle is our wedge — Pinecone and Weaviate don't have SOC 2 Type II or HIPAA compliance built in.",
      },
      {
        speaker: "Kavita Nair",
        text: "On the fundraising front, we're starting to plan our Series B. Targeting $30M, probably Q3. We'd love AGV's help on two fronts — customer introductions in Europe and connecting us with Europe-focused co-investors.",
      },
      {
        speaker: "Claire Lawson",
        text: "Absolutely. I can introduce you to our IT infrastructure team at AG — they've been evaluating vector database solutions. And for the Series B, I'll connect you with Sakura Capital and Pacific Mind. Both are actively deploying in AI infrastructure.",
        isMe: true,
      },
      {
        speaker: "Joon Park",
        text: "That would be incredible. The Europe market is our number one international priority. Having AG as a strategic partner has been exactly what we hoped for.",
      },
      {
        speaker: "Claire Lawson",
        text: "Let's talk about the competitive landscape for a minute. Pinecone's enterprise tier launch last month — how are you thinking about differentiation as they move upmarket?",
        isMe: true,
      },
      {
        speaker: "Joon Park",
        text: "Good question. Pinecone is going broad — they want to be the default vector database for everyone. We're going deep on regulated industries. Our compliance features, audit trails, and data residency controls are 12 months ahead of anything they can build. That's our moat in enterprise.",
      },
      {
        speaker: "Kavita Nair",
        text: "We're also investing in multi-modal vector support, which is a big differentiator. The healthcare use case I mentioned — searching across images and text simultaneously — that's something Pinecone can't do today. Our pipeline has six more healthcare opportunities in various stages.",
      },
      {
        speaker: "Claire Lawson",
        text: "The regulated-industry focus is smart. For the AG introduction, I think the IT infrastructure team would be interested in the compliance angle specifically. They've been dealing with data sovereignty requirements across different jurisdictions. Let me set that up within the next two weeks.",
        isMe: true,
      },
      {
        speaker: "Joon Park",
        text: "Perfect. On the Europe market specifically, we've been doing some research and the enterprise AI infrastructure spend there is expected to hit $8B by 2027. The timing of a Series B with a Europe-focused investor would let us establish a presence before the market gets crowded.",
      },
      {
        speaker: "Kavita Nair",
        text: "One more thing — we're looking at a potential partnership with a European systems integrator to handle enterprise deployments locally. Any recommendations from the AG network?",
      },
      {
        speaker: "Claire Lawson",
        text: "I have a few names in mind. NTT Data and NRI are the obvious ones, but I'd also suggest looking at ISID, which is actually an AG group company. Let me make some introductions and we can figure out the right partner fit.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-6",
    title: "AGV Weekly Standup",
    date: daysAgo(2),
    time: "9:30 AM",
    endTime: "10:15 AM",
    duration: "45m",
    participants: [
      "Claire Lawson",
      "Tom Brennan",
      "Jake Brennan",
      "Richard Caldwell",
    ],
    tags: ["internal", "weekly"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly team standup covering deal flow updates, portfolio company milestones, and upcoming events. Discussed prioritization of AI vs climate tech deal flow and upcoming Ashmore AI conference networking plan. Inbound referrals are up 40% from monthly average, prompting a discussion about tightening screening criteria with an AG synergy score. Team also aligned on Ashmore AI Summit conference scouting targets.",
    keyPoints: [
      {
        title: "Deal flow volume increasing",
        description:
          "Received 23 inbound referrals last week, up 40% from monthly average. Need to tighten screening criteria to maintain quality.",
        participants: ["Tom Brennan", "Claire Lawson"],
      },
      {
        title: "Ashmore AI conference next week",
        description:
          "Team attending Ashmore AI Summit conference. Opportunity to connect with AI researchers and early-stage founders.",
        participants: ["Claire Lawson", "Jake Brennan"],
      },
      {
        title: "AG synergy score proposed for screening",
        description:
          "Claire proposed adding an AG synergy score to the initial screening criteria to pass faster on companies without clear strategic fit. Team agreed to pilot the approach in Q2.",
        participants: ["Claire Lawson", "Richard Caldwell"],
      },
      {
        title: "SyntheticDB milestone update",
        description:
          "SyntheticDB hit $1.8M ARR and is planning Series B for Q3. AGV facilitating Europe customer introductions and co-investor connections.",
        participants: ["Claire Lawson", "Tom Brennan"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-12",
        title: "Update screening criteria for inbound deal flow",
        description:
          "Tighten screening criteria given increased volume — focus on companies with clear AG synergy potential",
        assignee: "Tom Brennan",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Richard Caldwell",
        text: "Quick standup. Let's go around — deal flow first, then portfolio updates, then events.",
      },
      {
        speaker: "Tom Brennan",
        text: "We had 23 inbound referrals last week. That's up significantly from our monthly average of around 16. The AGV brand is starting to get recognized in the Valley. But we need to be more selective — I'd like to tighten our screening criteria.",
      },
      {
        speaker: "Claire Lawson",
        text: "Agreed. I'd suggest we add an AG synergy score to the initial screen. If there's no clear connection to an AG business unit, we should be passing faster. Right now we're spending too much time on companies that are interesting but don't have a strategic angle.",
        isMe: true,
      },
      {
        speaker: "Richard Caldwell",
        text: "I like that. The synergy score makes sense. Tom, can you incorporate that into the screening doc? Let's pilot it for Q2 and see if it improves our signal-to-noise ratio.",
      },
      {
        speaker: "Tom Brennan",
        text: "Will do. I'll have a draft framework by end of week. I'm thinking we score on three dimensions — direct AG business unit relevance, portfolio company value-add, and Europe market applicability.",
      },
      {
        speaker: "Claire Lawson",
        text: "On the portfolio side, SyntheticDB is performing well. Just had our quarterly check-in — they're at $1.8M ARR and planning a Series B for Q3. I'm going to connect them with Sakura Capital and Pacific Mind for co-investment, and setting up an AG IT infrastructure intro.",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "On the events side, Ashmore AI Summit conference is this Thursday. I've identified 8 presenters whose research aligns with our thesis areas — three in AI agents, two in enterprise AI safety, and three in applied ML for industrial applications. I'll share the target list by end of day.",
      },
      {
        speaker: "Claire Lawson",
        text: "Jake and I will divide and conquer at the conference. I'll focus on the AI agent and enterprise tracks, Jake will cover the applied ML sessions. We should also try to connect with the Ashmore AI Lab students — some of them will be founding companies in the next year.",
        isMe: true,
      },
      {
        speaker: "Richard Caldwell",
        text: "Good plan. Make sure we're coordinating with the London team on any Europe-market-relevant companies we encounter. Alright, anything else before we wrap?",
      },
      {
        speaker: "Tom Brennan",
        text: "One quick thing — the IC vote for Sentra is confirmed for March 19th. Claire is on point for the investment memo. I'll review the draft over the weekend if she can have it to me by Friday.",
      },
      {
        speaker: "Claire Lawson",
        text: "I'll have it ready. I'm doing one more reference call with the Campfire design partner tomorrow to round out the customer validation section. After that the memo should be in good shape.",
        isMe: true,
      },
      {
        speaker: "Richard Caldwell",
        text: "Great. Let's make sure the memo is tight. This will be the first IC vote under our new investment framework, so I want it to set the standard. Good standup everyone.",
      },
    ],
  },
  {
    id: "mcgi-mtg-7",
    title: "NovaMaterials Founder Call",
    date: daysAgo(5),
    time: "11:00 AM",
    endTime: "11:45 AM",
    duration: "45m",
    participants: ["Claire Lawson", "Jake Brennan", "Dr. Nathan Cho"],
    tags: ["screening", "advanced-materials"],
    platform: "Google Meet",
    privacy: "private",
    summary:
      "Initial screening call with NovaMaterials founder Dr. Nathan Cho. Company is developing proprietary battery recycling technology with a novel hydrometallurgical process achieving 95% metal recovery rates. Pilot facility under construction in Nevada, expected operational Q2 2026. Two EV manufacturer LOIs already signed for feedstock supply. Team recommended a smaller initial check with milestone-based follow-on given the earlier stage and execution risk.",
    keyPoints: [
      {
        title: "Novel hydrometallurgical process for battery recycling",
        description:
          "NovaMaterials claims 95% metal recovery rate vs industry standard of 70%. Process works at lower temperatures, reducing energy costs by 60%.",
        participants: ["Dr. Nathan Cho", "Jake Brennan"],
      },
      {
        title: "Pilot facility timeline",
        description:
          "Nevada pilot facility under construction, expected to be operational by June 2026. First commercial contracts signed with two EV manufacturers.",
        participants: ["Dr. Nathan Cho", "Claire Lawson"],
      },
      {
        title: "Market timing favorable",
        description:
          "EU battery directive requires 70% recycling rate by 2030. US IRA provides tax credits for domestically recycled battery materials. NovaMaterials is well-positioned to capture both regulatory tailwinds.",
        participants: ["Claire Lawson", "Dr. Nathan Cho"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-13",
        title: "Request NovaMaterials technical documentation",
        description:
          "Get detailed process documentation and independent lab results for technical review",
        assignee: "Jake Brennan",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "James, thanks for making time. We've been tracking the battery recycling space closely and your approach caught our attention. Can you walk us through the core technology?",
        isMe: true,
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "Happy to. We've developed a hydrometallurgical process that achieves 95% metal recovery from spent lithium-ion batteries. The key innovation is our proprietary solvent system that works at room temperature, which eliminates the high-energy smelting step that most competitors rely on.",
      },
      {
        speaker: "Jake Brennan",
        text: "That's impressive. What's the current state of the pilot facility? And can you give us a sense of the capital requirements to get to commercial scale?",
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "Construction is about 70% complete in Nevada. We're targeting June for first operations. We've already signed LOIs with two EV manufacturers for feedstock supply, so we'll have material to process from day one. To get to commercial scale, we're looking at roughly $25M in additional capital beyond the pilot.",
      },
      {
        speaker: "Claire Lawson",
        text: "Walk me through the unit economics. At commercial scale, what does the cost per kilogram of recovered lithium look like compared to virgin mining?",
        isMe: true,
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "At our target throughput of 5,000 tons per year, we project recovered lithium at $8 per kilogram versus $12 to $15 for virgin lithium carbonate. And that's before any tax credits under the IRA. With the domestic recycling credits factored in, the economics get even more favorable.",
      },
      {
        speaker: "Jake Brennan",
        text: "What about the purity levels? Battery cathode manufacturers have very strict specs. Can your recycled materials meet those directly, or is there additional processing required?",
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "Our process achieves 99.5% purity for lithium, cobalt, and nickel directly from the recycling process. That's cathode-grade quality without any additional refining step. We've validated this with two battery cathode manufacturers who confirmed our output meets their specs.",
      },
      {
        speaker: "Claire Lawson",
        text: "That's a strong technical story. Let me ask about the regulatory landscape. The EU battery directive is pushing hard on recycling requirements. How does that play into your go-to-market?",
        isMe: true,
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "The EU directive requires 70% recycling rate by 2030, which is a massive tailwind. We're already in conversations with three European automotive OEMs who need recycling partners to meet compliance. Our plan is to license the technology for European facilities rather than building our own plants there initially.",
      },
      {
        speaker: "Jake Brennan",
        text: "The licensing model is interesting. What does the IP portfolio look like? How many patents do you have filed or granted?",
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "We have 4 patents granted and 7 pending. The core solvent system patent is granted in the US, EU, Europe, and Korea. The pending patents cover our process optimization algorithms and the modular reactor design. Our patent counsel believes the portfolio is very defensible.",
      },
      {
        speaker: "Claire Lawson",
        text: "The Europe patent is interesting for us. AG has significant metals trading operations and battery material supply chains in Asia. There could be a natural synergy there. Jake, can you connect James with the metals trading team for an exploratory conversation?",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "Definitely. James, I'd also like to get your detailed process documentation and any independent lab validation results. We want our technical advisors to review the chemistry before we move forward with due diligence.",
      },
      {
        speaker: "Dr. Nathan Cho",
        text: "Of course. I'll have everything to you by end of week. We're very transparent about our science — we've published two peer-reviewed papers on the solvent system. Happy to share those as well.",
      },
      {
        speaker: "Claire Lawson",
        text: "Great call, James. We're going to review the technical materials and discuss internally. Given the pilot timeline and the execution risk, we'd likely be looking at a smaller initial check with milestone-based follow-on. But the technology is genuinely exciting.",
        isMe: true,
      },
    ],
  },
  {
    id: "mcgi-mtg-8",
    title: "London HQ Strategy Sync",
    date: daysAgo(6),
    time: "6:00 PM",
    endTime: "7:00 PM",
    duration: "1h",
    participants: [
      "Claire Lawson",
      "Richard Caldwell",
      "Derek Sullivan",
      "Lisa Morgan",
    ],
    tags: ["internal", "strategy"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Monthly strategy sync with London HQ covering SF team activities, allocation requests, and alignment on AG Corporate Strategy 2027 priorities. Discussed increased climate tech allocation and upcoming IC pipeline. London HQ is supportive of increasing climate tech allocation from 25% to 35%, pending formal board approval at the April meeting. Also discussed adding one associate headcount to handle the increased deal flow volume.",
    keyPoints: [
      {
        title: "Climate tech allocation increase approved in principle",
        description:
          "London HQ supportive of increasing climate tech allocation from 25% to 35% pending formal board approval. Aligns with AG group sustainability commitments.",
        participants: ["Derek Sullivan", "Richard Caldwell"],
      },
      {
        title: "SF team headcount discussion",
        description:
          "Requested approval for one additional associate position to support increased deal flow volume. London to review by end of March.",
        participants: ["Richard Caldwell", "Lisa Morgan"],
      },
      {
        title: "Corporate Strategy 2027 alignment confirmed",
        description:
          "AGV's investment thesis areas — AI infrastructure, climate tech, and advanced materials — are fully aligned with AG's Corporate Strategy 2027 'Create' pillar focused on next-generation business incubation.",
        participants: ["Lisa Morgan", "Claire Lawson"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-14",
        title: "Prepare climate tech allocation proposal for board",
        description:
          "Formal proposal document for board review of increased climate tech allocation",
        assignee: "Richard Caldwell",
        checked: false,
      },
      {
        id: "mcgi-ai-15",
        title: "Submit associate hiring request to HR",
        description:
          "Formal headcount request with justification based on deal flow volume increase",
        assignee: "Claire Lawson",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Derek Sullivan",
        text: "Good evening from London. Let's start with the allocation discussion. We've reviewed the SF team's request to increase climate tech allocation and I'm pleased to say the reception from the corporate strategy office has been positive.",
      },
      {
        speaker: "Richard Caldwell",
        text: "Thanks Haruki. The rationale is straightforward. We're seeing high-quality deal flow in climate tech, and the board's sustainability directive gives us cover to increase allocation. We're proposing 35% of new deployments, up from 25%.",
      },
      {
        speaker: "Lisa Morgan",
        text: "The corporate strategy office is supportive. This aligns with the 2027 Create pillar. We'll need a formal proposal for the April board meeting. I can help shape the narrative to connect it to the broader corporate strategy.",
      },
      {
        speaker: "Claire Lawson",
        text: "On the pipeline side, we have three companies moving to DD this month — Sentra in enterprise AI, GreenCore in carbon capture, and NovaMaterials in battery recycling. The IC vote for Sentra is scheduled for March 19th.",
        isMe: true,
      },
      {
        speaker: "Derek Sullivan",
        text: "Tell me more about the Sentra opportunity. Enterprise AI is a hot space and I want to understand why this company specifically stands out from the crowd.",
      },
      {
        speaker: "Claire Lawson",
        text: "Sentra is building organizational memory — they capture the decision history and context that gets lost as companies scale. The differentiation is their interaction-first architecture. Instead of indexing documents like Prism, they capture people and interactions as the core data objects. The AG synergy is very strong — potential deployment across our 1,700 group companies.",
        isMe: true,
      },
      {
        speaker: "Lisa Morgan",
        text: "That's interesting. Cross-border knowledge management is one of the biggest pain points for the AG group right now. The president mentioned it explicitly in the January leadership meeting. If Sentra can address that, the strategic value goes beyond just financial return.",
      },
      {
        speaker: "Richard Caldwell",
        text: "On the headcount front — we need to discuss the associate position. Deal flow is up 40% and the team is stretched. We've been turning down meetings that we should be taking simply because we don't have bandwidth.",
      },
      {
        speaker: "Derek Sullivan",
        text: "I understand the need. The HR team will review it, but I'm optimistic. Given the deployment pace and the expanded climate tech mandate, the justification is clear. Can you send a formal request by end of next week?",
      },
      {
        speaker: "Claire Lawson",
        text: "I've already submitted the formal request through HR. The JD emphasizes climate tech and advanced materials expertise since that's where we need the most coverage. I included the deal flow volume data to support the business case.",
        isMe: true,
      },
      {
        speaker: "Lisa Morgan",
        text: "Good proactive move, Claire. Let me flag one more item — the annual CVC summit in Singapore is in May. London would like AGV to present your investment thesis update and portfolio highlights. Can you prepare a 20-minute presentation?",
      },
      {
        speaker: "Richard Caldwell",
        text: "We'll put that together. Claire, can you take the lead on the presentation deck? Let's showcase the portfolio wins and the thesis evolution since last year. It's a good opportunity to reinforce AGV's position within the AG group.",
      },
      {
        speaker: "Claire Lawson",
        text: "Happy to lead on that. I'll start pulling the deck together next week after the IC prep work is done. Haruki, Yoko — anything else from London before we close out?",
        isMe: true,
      },
      {
        speaker: "Derek Sullivan",
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
    participants: ["Claire Lawson", "Tom Brennan"],
    tags: ["portfolio", "internal"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Internal prep session for upcoming SyntheticDB and QuantumSense board observer meetings. Reviewed key metrics, discussion points, and strategic recommendations for each company. SyntheticDB is performing well but faces competitive pressure from Pinecone's enterprise tier, and the team aligned on pushing for accelerated Europe market entry. QuantumSense's semiconductor QA traction is strong and the AG semiconductor trading connection should be prioritized.",
    keyPoints: [
      {
        title: "SyntheticDB board observer talking points",
        description:
          "Focus on Series B readiness, Europe market entry strategy, and AG customer introduction pipeline. Revenue tracking well but need to address competitive pressure from Pinecone enterprise tier.",
        participants: ["Claire Lawson", "Tom Brennan"],
      },
      {
        title: "QuantumSense strategic positioning",
        description:
          "Semiconductor QA vertical is the clear beachhead. AG's semiconductor trading arm is a natural pilot partner for Europe expansion. Should push for an intro at the board meeting.",
        participants: ["Tom Brennan", "Claire Lawson"],
      },
      {
        title: "Board observer influence strategy",
        description:
          "Aligned on approach to position AGV as the most value-added investor on both cap tables. Customer introductions and Europe market access are the key differentiators versus purely financial investors.",
        participants: ["Claire Lawson", "Tom Brennan"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-16",
        title: "Prepare SyntheticDB board observer memo",
        description:
          "Draft talking points and strategic recommendations for March board meeting",
        assignee: "Claire Lawson",
        checked: true,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "Let's run through the SyntheticDB board prep first. Their board meeting is next week. Key topics I want to raise are Series B timing, Europe market strategy, and the Pinecone competitive threat.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "On the Europe angle, I've been talking to AG's IT infrastructure division. They're genuinely interested in SyntheticDB for their internal AI projects. If we can get a pilot going, that's a strong signal for the Series B story.",
      },
      {
        speaker: "Claire Lawson",
        text: "That's exactly right. Having an AG deployment as a reference customer would be huge for their Europe go-to-market narrative. I'll push for that at the board meeting. Let's make the intro happen before the Series B process kicks off.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "On the Pinecone threat — I think we need to be direct about it. Their enterprise tier launch is real competition. But SyntheticDB's regulated-industry compliance features are genuinely differentiated. We should encourage them to double down on that positioning rather than trying to compete on features across the board.",
      },
      {
        speaker: "Claire Lawson",
        text: "Agreed. The compliance moat is their strongest card. Financial services and healthcare are massive markets that Pinecone isn't set up to serve well. Let me add that to the talking points.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Now for QuantumSense — their semiconductor QA traction is impressive. $3.2M ARR with Apex Semi as a customer is a strong signal. I think the AG semiconductor trading connection is the highest-leverage thing we can do here.",
      },
      {
        speaker: "Claire Lawson",
        text: "Agreed. AG's semiconductor trading arm has relationships with every major fab in Europe. If QuantumSense can get into the Europe market through AG, that changes their international expansion story entirely.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "I've already reached out to the semiconductor division head. He's interested but wants to see a demo first. Can you coordinate with David Chen to set that up?",
      },
      {
        speaker: "Claire Lawson",
        text: "I'll reach out to David today. Let me also think about how we frame the broader board observer strategy. For both SyntheticDB and QuantumSense, our value-add as AGV is the AG network — customer introductions, Europe market access, and strategic industry connections. We should be the most value-added investor on both cap tables.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Completely aligned. That's our differentiator versus the pure financial VCs. Let's make sure we have concrete intros to offer at each board meeting, not just vague promises. I'll prepare a list of AG contacts for each company.",
      },
      {
        speaker: "Claire Lawson",
        text: "Perfect. Let me draft the board observer memo today and we can review it tomorrow morning. I want to make sure our strategic recommendations are crisp and actionable. We should demonstrate that AGV's network is delivering real value.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Sounds good. One more thing — I think we should start tracking the tangible value we deliver to portfolio companies more systematically. Customer introductions, revenue influenced, partnerships facilitated. It would strengthen our LP reporting and help with the next fund raise.",
      },
    ],
  },
  {
    id: "mcgi-mtg-13",
    title: "Tom 1:1 Weekly Sync",
    date: daysAgo(1),
    time: "4:00 PM",
    endTime: "4:30 PM",
    duration: "30m",
    participants: ["Tom Brennan"],
    tags: ["internal", "1:1"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Weekly 1:1 with Tom covering pipeline prioritization, upcoming IC vote logistics for Sentra, and Catalyst Alliance consortium coordination. Discussed splitting deal sourcing responsibilities for Q2 to reduce overlap and increase coverage. Agreed on Sentra memo timeline and Q2 sourcing split — Claire focuses on enterprise AI and dev tools, Tom covers climate tech and advanced materials.",
    keyPoints: [
      {
        title: "Sentra IC vote logistics confirmed",
        description:
          "IC vote for Sentra scheduled March 19. Investment memo draft due March 14. Tom to review before Richard sees it.",
        participants: ["Tom Brennan"],
      },
      {
        title: "Q2 deal sourcing split agreed",
        description:
          "Claire to focus on enterprise AI and developer tools. Tom to cover climate tech and advanced materials. Reduces overlap and increases coverage.",
        participants: ["Tom Brennan"],
      },
      {
        title: "Catalyst Alliance consortium coordination",
        description:
          "Discussed leveraging Catalyst Alliance network more effectively for deal sourcing. Tom to take point on consortium climate tech referrals while Claire handles AI and enterprise referrals.",
        participants: ["Tom Brennan"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-17",
        title: "Share Sentra memo draft with Tom by Friday",
        description:
          "Send investment memo draft for review before IC circulation",
        assignee: "Claire Lawson",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "Hey Tom, quick sync. Want to lock down the Sentra IC timeline and talk about Q2 sourcing.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Sure. On Sentra — I think March 19 for the IC vote still works. Can you have the memo draft to me by Friday so I can review over the weekend?",
      },
      {
        speaker: "Claire Lawson",
        text: "Yes, I'll have it by end of day Friday. I'm doing the Campfire reference call tomorrow which is the last piece I need for the customer validation section. The rest of the memo is largely drafted.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Good. I want to make sure the competitive analysis section is airtight. Richard always pushes hard on that. Especially the Prism and AssistAI positioning — we need a clear narrative on why Sentra wins.",
      },
      {
        speaker: "Claire Lawson",
        text: "Absolutely. The interaction-first vs aggregation-first framing is the key differentiator. I'll make sure the competitive section tells that story clearly with specific examples from the design partner feedback.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Perfect. Now on Q2 sourcing — I was thinking we should formalize the split. We've had some overlap in the past month where we're both chasing the same AI companies.",
      },
      {
        speaker: "Claire Lawson",
        text: "Agreed. For Q2, I'll take enterprise AI and dev tools, you take climate tech and materials. Less overlap, more coverage. We can cross-refer anything that doesn't fit our respective lanes.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Makes sense. I've been building more relationships in the climate space anyway, especially through the Catalyst Alliance consortium. Speaking of which, I think we should be more intentional about leveraging the consortium for sourcing.",
      },
      {
        speaker: "Claire Lawson",
        text: "Good point. The consortium generated 14 referrals in Q1 — that's meaningful. How about you take point on consortium climate tech referrals and I handle the AI and enterprise ones? That maps cleanly to our sourcing split.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "That works. I'll coordinate with Adam from Pinnacle Materials on the climate tech pipeline specifically. He's been sending us some interesting companies in the industrial decarbonization space.",
      },
      {
        speaker: "Claire Lawson",
        text: "One more thing — the co-investment interest from Pacific Mind, Sakura Capital, and SBI on Sentra. Should we include a section on potential syndicate structure in the memo?",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Yes, but keep it brief. Richard's instinct is to lead and set terms. Include it as an optionality section — here's what a co-investment could look like, but our recommendation is to lead. Let's formalize the Q2 split with Richard at the next standup.",
      },
      {
        speaker: "Claire Lawson",
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
    participants: ["Claire Lawson", "David Chen", "Lisa Park"],
    tags: ["portfolio", "check-in"],
    platform: "Google Meet",
    privacy: "public",
    summary:
      "Quarterly review with QuantumSense (Series A portfolio). Product-market fit strengthening in semiconductor QA vertical with $3.2M ARR, up from $2.1M last quarter. Three new chip manufacturer contracts signed in Q1 including Apex Semi Oregon. Discussed international expansion through AG's semiconductor trading arm and potential Series B lead investors. The Europe market opportunity is significant given the new Apex Semi and Rapidus fabs.",
    keyPoints: [
      {
        title: "Semiconductor QA vertical gaining traction",
        description:
          "Three new contracts signed with chip manufacturers in Q1. ARR reached $3.2M, up from $2.1M last quarter.",
        participants: ["David Chen", "Claire Lawson"],
      },
      {
        title: "Europe expansion opportunity via AG",
        description:
          "AG's semiconductor trading arm expressed interest in trialing QuantumSense. Could accelerate Europe market entry significantly.",
        participants: ["Lisa Park", "Claire Lawson"],
      },
      {
        title: "Series B considerations",
        description:
          "At current growth rate, QuantumSense will be ready for a Series B by Q4 2026. AGV's strategic value-add on Europe expansion could anchor the round.",
        participants: ["David Chen", "Claire Lawson"],
      },
      {
        title: "Product roadmap expanding to adjacent verticals",
        description:
          "Beyond semiconductor QA, the team is exploring applications in pharmaceutical manufacturing and precision optics. Both leverage the same core quantum sensing technology.",
        participants: ["Lisa Park", "Claire Lawson"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-18",
        title: "Intro QuantumSense to AG semiconductor division",
        description:
          "Connect David with AG's semiconductor trading team for potential pilot discussion",
        assignee: "Claire Lawson",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "David, Lisa — great to see you both. How's Q1 shaping up? Last time we spoke you were close to landing Apex Semi Oregon.",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Really strong. We hit $3.2M ARR this month. The semiconductor QA use case is our beachhead — we signed Apex Semi's Oregon facility, plus two other chip manufacturers. The Apex Semi deal alone is $400K ACV.",
      },
      {
        speaker: "Lisa Park",
        text: "On the expansion front, we're interested in Europe. The semiconductor market there is huge with the new Apex Semi and Rapidus fabs going up. Can AGV help with introductions to the right decision makers?",
      },
      {
        speaker: "Claire Lawson",
        text: "Absolutely. AG has a semiconductor trading arm that would be a perfect pilot partner. They have relationships with every major fab in Europe. Let me set up an intro call this month.",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "That would be game-changing. The Europe semiconductor market is undergoing a massive expansion right now. Apex Semi's Kumamoto fab, Rapidus in Hokkaido — there's billions of dollars in new fab construction that all needs QA tooling.",
      },
      {
        speaker: "Claire Lawson",
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
        speaker: "Claire Lawson",
        text: "Smart approach. Focus is the right call at this stage. Let me ask about Series B timing. At your current growth rate, when do you think you'll be ready to raise?",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Probably Q4 this year. We want to hit $5M ARR and have the Europe market entry underway before we go out. The story of US semiconductor QA dominance plus Europe expansion would be very compelling for investors.",
      },
      {
        speaker: "Lisa Park",
        text: "On the competitive front, we're in a strong position. The closest competitor is still 18 months behind us on the quantum sensing hardware. Our patent portfolio covers the core measurement technique and the ML layer for defect classification.",
      },
      {
        speaker: "Claire Lawson",
        text: "The technical moat sounds solid. For the AG semiconductor intro, I'll reach out to the division head this week. They've already expressed interest after I mentioned QuantumSense at an internal meeting. David, can you prepare a short demo that's tailored to European semiconductor QA workflows?",
        isMe: true,
      },
      {
        speaker: "David Chen",
        text: "Absolutely. We'll put together something specific to the use cases at European fabs. The defect classification model works especially well for the advanced packaging processes that Apex Semi Kumamoto is ramping up.",
      },
      {
        speaker: "Lisa Park",
        text: "And if AG's semiconductor division becomes a customer, that's not just revenue — it's the best possible reference for every other fab in Europe. The strategic value of this introduction is enormous for us.",
      },
      {
        speaker: "Claire Lawson",
        text: "Exactly. That's the AGV value proposition — we're not just financial investors. I'll have the intro set up within the next two weeks. Let's schedule a check-in after the demo call to discuss next steps on the Europe strategy.",
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
    participants: ["Claire Lawson", "Jake Brennan", "Tom Brennan"],
    tags: ["screening", "enterprise-ai"],
    platform: "Zoom",
    privacy: "private",
    summary:
      "Screened four inbound AI infrastructure companies referred through Catalyst Alliance consortium. Two passed initial filter for deeper review — DataForge (MLOps for regulated industries) and LabelScale (data labeling marketplace). Two were declined — CloudNine for overlapping with SyntheticDB's roadmap and InferenceX for competing in a space where Cortex Labs and Helios AI have insurmountable advantages. The team aligned on scheduling founder calls with the two approved companies within two weeks.",
    keyPoints: [
      {
        title: "Two companies passed initial screening",
        description:
          "DataForge (MLOps) and LabelScale (data labeling marketplace) both show strong technical differentiation and clear AG synergy potential. Moving to founder calls.",
        participants: ["Claire Lawson", "Jake Brennan"],
      },
      {
        title: "Two companies declined at screening",
        description:
          "CloudNine and InferenceX passed on — overlapping competitive space with existing portfolio companies. No incremental AG synergy identified.",
        participants: ["Tom Brennan", "Claire Lawson"],
      },
      {
        title: "AG synergy scoring applied successfully",
        description:
          "First time applying the new AG synergy scoring framework to a screening batch. DataForge scored highest on AG financial services relevance. LabelScale scored well on AG's automotive and manufacturing data needs.",
        participants: ["Claire Lawson", "Jake Brennan"],
      },
    ],
    actionItems: [
      {
        id: "mcgi-ai-19",
        title: "Schedule founder calls with DataForge and LabelScale",
        description:
          "Reach out to founders for 30-min intro calls within the next two weeks",
        assignee: "Claire Lawson",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Claire Lawson",
        text: "Let's run through the four Catalyst Alliance referrals. I've done preliminary research on each and scored them against the new AG synergy framework. Starting with DataForge — they're building an MLOps platform specifically for regulated industries.",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "That's interesting. AG's financial services portfolio companies have been asking about MLOps tooling. The regulated-industry angle gives them a defensible niche. What's the founding team like?",
      },
      {
        speaker: "Claire Lawson",
        text: "Strong. Two ex-Google ML engineers who previously built internal MLOps tooling for Google's healthcare AI team. They understand compliance deeply because they lived it. Revenue is early — about $500K ARR — but growing 30% month over month.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "The regulated-industry MLOps space is getting crowded though. How do they differentiate from Weights & Biases and MLflow, which are both adding compliance features?",
      },
      {
        speaker: "Claire Lawson",
        text: "Fair question. Their pitch is that compliance is their core architecture, not a bolt-on. They have built-in audit trails, model lineage tracking, and automated regulatory reporting. W&B and MLflow are trying to add that on top of an existing architecture, which creates gaps. I think it's worth a founder call to dig deeper.",
        isMe: true,
      },
      {
        speaker: "Jake Brennan",
        text: "I agree. Let's move to LabelScale. This is the data labeling marketplace. How does it compare to Scale AI and Labelbox?",
      },
      {
        speaker: "Claire Lawson",
        text: "LabelScale is taking a marketplace approach rather than a managed service approach. They're connecting companies that need labeling with specialized labeling teams — think of it like Uber for data annotation. The interesting angle for AG is that they have labeling teams in Europe and Latin America, which is where AG has its strongest operational presence.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "The Europe angle is compelling. AG's automotive companies are generating massive amounts of sensor data that needs labeling for autonomous driving models. That's a clear synergy. What about the other two?",
      },
      {
        speaker: "Jake Brennan",
        text: "CloudNine is building a cloud-native vector database. I think we pass on this one — it overlaps significantly with SyntheticDB's product roadmap. Investing in a direct competitor to our own portfolio company would create awkward dynamics.",
      },
      {
        speaker: "Claire Lawson",
        text: "Agree on CloudNine. And InferenceX is building an inference optimization platform. The technology is interesting but they're competing directly with what Cortex Labs and Helios AI are building in-house. The moat is thin when the model providers control the inference stack.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Agree on both passes. For CloudNine especially, we should be careful about signaling. If it gets out that we looked at a SyntheticDB competitor, it could create trust issues. Let me send a polite pass-through email to the Catalyst Alliance referrer.",
      },
      {
        speaker: "Jake Brennan",
        text: "Good point on the optics. So to summarize — we're moving forward with DataForge and LabelScale, passing on CloudNine and InferenceX. Claire, can you schedule the founder calls?",
      },
      {
        speaker: "Claire Lawson",
        text: "I'll reach out to both founders today and try to get calls scheduled within the next two weeks. For DataForge, I want to bring Jake on the call given the technical depth of the MLOps space. For LabelScale, I'll handle the initial screen solo and loop in Tom if the Europe angle checks out.",
        isMe: true,
      },
      {
        speaker: "Tom Brennan",
        text: "Sounds good. One more thought — this was the first time we used the AG synergy scoring framework on a batch screening. I think it worked well. DataForge scored 8 out of 10 on AG relevance because of the financial services connection. LabelScale scored 7 because of the automotive data opportunity. The two we passed on both scored below 4.",
      },
      {
        speaker: "Claire Lawson",
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
    participants: ["Tom Brennan", "Richard Caldwell", "Sean Mercer"],
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
    participants: ["Tom Brennan", "Jake Brennan"],
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
    title: "GreenCore Technical DD Follow-up",
    date: daysAgo(0),
    time: "3:30 PM",
    endTime: "4:30 PM",
    duration: "1h",
    participants: ["Richard Caldwell", "Sean Mercer"],
    tags: ["due-diligence", "climate-tech"],
    platform: "Google Meet",
    privacy: "private",
    summary: "",
    keyPoints: [],
    actionItems: [],
    transcript: [],
  },
];
