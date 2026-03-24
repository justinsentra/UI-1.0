import type { Meeting } from "../types";

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

export const meetings: Meeting[] = [
  // Today (day 0)
  {
    id: "mtg-1",
    title: "Deal Review — Meridian Corp",
    date: daysAgo(0),
    time: "10:00 AM",
    endTime: "11:00 AM",
    duration: "60 min",
    platform: "Zoom",
    privacy: "private",
    participants: ["Grant Holloway", "Diana Calloway", "Monica Pearce"],
    tags: ["Deal Review"],
    summary:
      "Reviewed Meridian Corp deal status and financial positioning ahead of management presentation. Discussed revenue trajectory, key assumptions for the 3-statement model, and outstanding diligence items. Grant emphasized the need to stress-test customer concentration risk given that the top 10 accounts represent 38% of ARR. Agreed to build the financial model this week and have internal review completed by Wednesday before the Thursday board presentation.",
    keyPoints: [
      {
        title: "Revenue trajectory",
        description:
          "Meridian's ARR at $18M with 45% YoY growth. Gross margins expanding from 72% to projected 76% by FY28E driven by scale efficiencies in their platform infrastructure.",
        participants: ["Grant Holloway", "Monica Pearce"],
      },
      {
        title: "Valuation range",
        description:
          "Comparable companies trading at 8-16x forward revenue. Base case EV/Revenue of 12x implies ~$313M valuation. Bull case dependent on net retention staying above 120%.",
        participants: ["Diana Calloway"],
      },
      {
        title: "Diligence gaps",
        description:
          "Customer concentration risk — top 10 accounts represent 38% of ARR. Need to stress-test churn scenarios in the model. Also need updated cap table from Meridian's CFO.",
        participants: ["Grant Holloway", "Monica Pearce"],
      },
      {
        title: "Management presentation prep",
        description:
          "Presentation to Meridian's board scheduled for next Thursday. Need the 3-statement model completed by Wednesday for internal review.",
        participants: ["Grant Holloway"],
      },
      {
        title: "Unit economics validation",
        description:
          "Net revenue retention at 125% with 18-month CAC payback. These metrics are strong relative to the comp set but need to be validated against cohort-level data from Meridian's finance team.",
        participants: ["Monica Pearce", "Diana Calloway"],
      },
    ],
    actionItems: [
      {
        id: "ai-1-1",
        title: "Build 3-statement financial model for Meridian Corp",
        description:
          "Construct income statement, balance sheet, and cash flow projections for FY25A–FY28E. Include EV/Revenue sensitivity analysis and key assumption drivers.",
        assignee: "Monica Pearce",
        checked: false,
      },
      {
        id: "ai-1-2",
        title: "Request updated cap table from Meridian CFO",
        description:
          "Email Meridian's CFO for the latest cap table, option pool details, and any outstanding convertible notes ahead of the management presentation.",
        assignee: "Diana Calloway",
        checked: false,
      },
      {
        id: "ai-1-3",
        title: "Prepare deal committee memo",
        description:
          "Draft a 2-page memo summarizing the investment thesis, valuation range, key risks, and recommended next steps for the deal committee review on Friday.",
        assignee: "Monica Pearce",
        checked: false,
      },
      {
        id: "ai-1-4",
        title: "Pull cohort-level retention data from Meridian",
        description:
          "Request quarterly cohort retention data from Meridian's finance team to validate the 125% NRR figure at the account segment level.",
        assignee: "Diana Calloway",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Grant Holloway",
        text: "Let's start with Meridian. Monica, where are we on the financials? I want to make sure we're fully buttoned up before the management presentation next Thursday.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "I've pulled the Q4 numbers. ARR is at $18M, up 45% year-over-year. Gross margins are at 72% and trending upward. The unit economics are solid — 125% net revenue retention and 18-month CAC payback.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "That NRR number looks strong on the surface, but I want to see it validated at the cohort level. Can we get that data segmented by account size? I've seen situations where a couple of large upsells mask churn in the mid-market.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Good call. I can reach out to their CFO and request the cohort breakdown. I'll ask for it alongside the updated cap table we still need.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "On the comp set — where are we landing on the valuation range? I want to make sure we're anchoring to the right peer group given how quickly multiples have moved this quarter.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "The comp set is looking favorable. Similar stage SaaS companies in supply chain are trading at 10-14x forward revenue. If you expand to broader vertical SaaS, the range widens to 8-16x. Meridian's growth rate puts them at the higher end — I'd say 12x is a defensible base case.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "At 12x forward revenue, that implies roughly $313M enterprise value. The bull case gets you to $400M-plus if net retention holds above 120% and they can demonstrate the margin expansion story we're modeling.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "What's the customer concentration risk? I remember that being flagged in the initial screen. That's something the deal committee is going to push on hard.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "Top 10 accounts are 38% of ARR, which is elevated for this stage. Their largest single customer is about 8% of revenue. I need to stress-test what happens if one or two of those large accounts churn — I'll build that into the sensitivity analysis.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That concentration number is a real concern. For context, most of the recent successful sell-side mandates we've run in vertical SaaS had top-10 concentration below 30%. We should frame this as a risk but also show the path to diversification — their pipeline might tell that story.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Exactly. Monica, make sure the model includes a scenario where we assume accelerated customer acquisition in the mid-market segment. If they can show a credible path to bringing concentration below 30% within 18 months, that de-risks the thesis significantly.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "I also want to flag that we still need the updated cap table from their CFO. There were some convertible notes from their Series A that might have unusual terms. We need to understand the fully diluted picture before we finalize the valuation.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "Agreed. I'll also need the option pool details — last I heard they were planning to expand it before the next round, which could impact dilution by 3-5 percentage points.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Okay, let's talk timeline. We need the full 3-statement model done by Wednesday so we can review it internally before the management presentation on Thursday. Monica, can you take point on building that out?",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "Yes, I'll have a draft ready by end of day Tuesday for your review. That gives us a full day of buffer. I'll include the income statement, balance sheet, and cash flow projections through FY28E with the sensitivity analysis on customer concentration and NRR.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'll start drafting the deal committee memo in parallel. Two pages covering the investment thesis, valuation range, key risks, and our recommended next steps. Grant, anything specific you want me to emphasize for the committee?",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Emphasize the market timing angle. Supply chain software is having a moment — three companies in the space have raised north of $100M in the last six months. Meridian is well-positioned to benefit from that tailwind, and that narrative will resonate with the committee.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "One more thing — should we include a preliminary view on potential acquirers? Even if this is a capital raise, the committee likes to see the strategic exit landscape as part of the thesis.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Yes, good idea. Include a short section on 3-4 logical strategic acquirers. Keep it high-level for now — we can go deeper if the committee asks for it. Alright, I think we're aligned. Let's reconvene Wednesday afternoon to review everything before Thursday.",
        isMe: false,
      },
      // Expanded entries below
      {
        speaker: "Monica Pearce",
        text: "Before we wrap up, I want to raise one more thing on the model. Should we be modeling a separate revenue line for Meridian's professional services? Right now they're bundling it into total revenue but it's about 12% of the mix, and it has very different margin characteristics.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Yes, absolutely break that out. Professional services revenue at 12% of mix with presumably lower margins will drag the blended gross margin number. If we can show the software-only margin trajectory separately, that tells a much cleaner story for the deal committee.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Good instinct. The committee will ask about that. Most of our comp set companies have less than 5% professional services revenue, so Meridian's 12% is an outlier. We need to show whether that's declining over time or if it's structural.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "From what I've seen in the data room, professional services as a percentage of total revenue has been declining — it was 18% two years ago and is now 12%. The trend line supports the thesis that customers are increasingly self-implementing, which is a positive signal.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "That's a useful data point. I'll ask the CFO to confirm whether there's a formal plan to reduce the professional services component. If management has an explicit strategy to bring it below 8% by FY27, we should highlight that in the memo.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Monica, on the balance sheet side — what's the cash position? And do we know if they've been burning cash or are they approaching breakeven?",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "They have about $14M in cash on the balance sheet as of Q4. Burn rate is roughly $1.2M per month, so they have about 12 months of runway. They're projecting cash flow breakeven by Q3 of next year, but that assumes they hit their mid-market expansion targets.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Twelve months of runway with breakeven projected in Q3 — that creates an interesting dynamic for the raise. They're not desperate for capital, which gives them negotiating leverage, but they also can't afford to let the process drag out. What's the implied use of proceeds?",
        isMe: true,
      },
      {
        speaker: "Monica Pearce",
        text: "Management has indicated the raise would primarily fund sales team expansion — they want to go from 15 to 40 AEs over 18 months — and product development for their enterprise-tier features. They're also planning to build out an international presence, starting with UK and Germany.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "International expansion is ambitious at this stage. I'd want to see that modeled conservatively in our projections. European go-to-market for a supply chain SaaS company has a very different cost structure and sales cycle than the US market.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Agreed. I've seen a few comps attempt European expansion at a similar stage and the results were mixed. The ones that succeeded typically went through channel partners rather than direct sales. We should ask Meridian's CEO about their planned go-to-market approach.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'll add that as a question for the management meeting. Let's also make sure we understand the competitive landscape in Europe. If there's a local player with strong market share, the customer acquisition costs could be significantly higher than what Meridian is modeling.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Good thinking. Diana, can you pull a quick landscape of European supply chain SaaS competitors? Even just a one-pager with the top 3-4 players and their market positioning would be helpful context for the committee.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "I can have that ready by Monday. I know there are at least two significant players — one based in Berlin and one in London. I'll include their funding history, estimated ARR if available, and customer profiles so we can assess the competitive threat.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "One more thing on the model — should I include a downside scenario where the raise doesn't happen and Meridian has to extend their runway through cost cuts? It would show the deal committee that we've thought about the full range of outcomes.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "That's a smart inclusion. Build a scenario where they reduce burn by 30% through headcount freezes and show what that does to the growth trajectory. It won't be a pretty picture, but it demonstrates analytical rigor and gives the committee confidence in our work.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "On the deal committee memo — Grant, do you want me to include a section on the management team's background and track record? The committee usually wants to know whether the founders have done this before and whether they have the operating chops to execute the plan.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Absolutely. The CEO has two prior exits — one was a $180M acquisition by Meridius and the other was a smaller deal in the logistics space. That track record is a significant positive. The CTO came from CloudPrime, which adds credibility on the technical side. Make sure you highlight both of those.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "The VP of Sales is relatively new though — he joined about six months ago from CloudForce. The sales team expansion plan is largely his vision, so we should assess whether he has the credibility to execute it. Maybe we should reference check him separately.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "Good point. I'll add a note in the diligence tracker about a reference check on the VP of Sales. His hiring was part of the management upgrades they made post-Series B, and the committee will want to know if the go-to-market leadership is strong enough to support the growth plan.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Alright, I think we've covered the key areas. To summarize — Monica owns the 3-statement model with the concentration stress test, the downside scenario, and the professional services breakout. Draft by Tuesday EOD. Leo is drafting the deal committee memo with management backgrounds and the market timing narrative. Diana is getting the cap table, cohort data, and European competitive landscape. Let's execute and regroup Wednesday at 2 PM.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Sounds good. I'll also loop in the acquirer landscape section so we have a complete picture. If anyone runs into blockers before Wednesday, let's flag it in the group chat rather than waiting for the meeting.",
        isMe: true,
      },
      {
        speaker: "Monica Pearce",
        text: "Will do. I'll share my model assumptions doc in the shared drive tonight so everyone can review the key inputs before I start building. If anything looks off, I'd rather catch it early.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Perfect. I'll send the cap table and cohort data requests to Meridian's CFO this afternoon. Hopefully we get a response by end of day tomorrow so Monica has everything she needs.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Great work, team. This deal has strong potential and I want us to put our best foot forward for the committee. Let's make sure every number is airtight and every assumption is defensible. See you Wednesday.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "One last thought — should we prepare a one-page executive summary as a leave-behind for the committee? Sometimes the full memo is more detail than they want upfront, and having a concise version ensures the key points land even if they don't read the whole thing.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "That's a great idea. One page, front and back — investment thesis, key metrics, valuation range, and top three risks. Include it as the first page of the memo packet. Let's close it out there.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-2",
    title: "TMT Group Weekly",
    date: daysAgo(0),
    time: "2:00 PM",
    endTime: "3:00 PM",
    duration: "60 min",
    platform: "Zoom",
    privacy: "public",
    participants: ["Diana Calloway", "Nathan Lim", "Victor Kane"],
    tags: ["Weekly"],
    summary:
      "Reviewed pipeline across TMT coverage with three new mandates under evaluation. Nathan presented updated AI sector valuation trends showing significant re-rating in public markets, with private market multiples expected to converge by Q3. Discussed the DataVault LBO in detail, including leverage concerns around cloud infrastructure spend growing faster than revenue. Agreed to prioritize the CloudSync engagement and refresh the sector comp table this week.",
    keyPoints: [
      {
        title: "Pipeline update",
        description:
          "Three new mandates under evaluation: CloudSync (Series C advisory), NeuralPath (M&A sell-side), and Vantage Systems (growth equity). Combined potential fees of $4.2M.",
        participants: ["Diana Calloway"],
      },
      {
        title: "AI sector valuations",
        description:
          "Public AI companies re-rated 15-20% higher in Q1. Private market multiples lagging by 2-3 turns. Expect convergence by Q3 as more AI companies go public.",
        participants: ["Nathan Lim"],
      },
      {
        title: "DataVault LBO update",
        description:
          "Leverage ratio at 4.5x with the proposed structure. Sponsor consortium interested but pushing for management rollover. Sensitivity analysis shows 18-22% IRR in base case.",
        participants: ["Nathan Lim", "Victor Kane"],
      },
      {
        title: "Cloud infrastructure cost concerns",
        description:
          "DataVault's cloud spend growing at 35% YoY versus 28% revenue growth. Need to model the impact of margin compression if this trend continues through the hold period.",
        participants: ["Victor Kane"],
      },
      {
        title: "IPO pipeline implications",
        description:
          "Three new S-1 filings in the AI space in the last month. This wave of IPOs will provide fresh public comp data and could catalyze private market re-pricing.",
        participants: ["Nathan Lim", "Victor Kane"],
      },
    ],
    actionItems: [
      {
        id: "ai-2-1",
        title: "Update AI sector comp table",
        description:
          "Refresh the Q1 comparable company analysis with latest trading multiples and recent transaction comps for the TMT coverage deck.",
        assignee: "Nathan Lim",
        checked: false,
      },
      {
        id: "ai-2-2",
        title: "Schedule CloudSync intro call",
        description:
          "Coordinate with CloudSync's CEO for an introductory meeting next week. Prepare a 1-page engagement overview.",
        assignee: "Diana Calloway",
        checked: false,
      },
      {
        id: "ai-2-3",
        title: "Finalize DataVault LBO memo",
        description:
          "Complete the sponsor presentation with updated leverage scenarios and management rollover assumptions. Due by Thursday.",
        assignee: "Nathan Lim",
        checked: false,
      },
      {
        id: "ai-2-4",
        title: "Model DataVault cloud cost scenarios",
        description:
          "Build a sensitivity analysis around cloud infrastructure spend as a percentage of revenue through the 5-year hold period. Include margin impact on IRR.",
        assignee: "Victor Kane",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Diana Calloway",
        text: "Let's run through the pipeline. We have three new mandates under evaluation this week — CloudSync for a Series C advisory, NeuralPath on a sell-side M&A, and Vantage Systems looking at growth equity. Combined potential fees are around $4.2M.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's a strong pipeline week. Which of those three do you think has the highest probability of converting to a signed engagement? I want to make sure we're prioritizing the right conversations.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "CloudSync is the most likely — their CEO reached out directly and they're targeting a close within 60 days. NeuralPath is high-value but the board hasn't fully aligned on timing yet. Vantage is more exploratory at this stage.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "On the AI sector side, public comps have re-rated significantly in Q1. We're seeing 15-20% valuation increases across the board. The recent earnings cycle was strong — most AI infrastructure companies beat revenue estimates by 5-10%.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Private markets are still lagging by about 2-3 turns on EV/Revenue. That gap should close as more AI companies file for IPOs. We've seen three new S-1s in the last month alone, and there are at least two more expected before end of Q2.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That convergence dynamic is important for how we position both the CloudSync and NeuralPath engagements. If private multiples are about to re-rate, the timing argument for both a raise and a sale gets stronger.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "Exactly. I'm planning to refresh the full sector comp table this week to capture the Q1 re-rating. I'll include the recent IPO filings as well since those give us forward-looking data points that are hard to get otherwise.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Good context for the CloudSync engagement. Nathan, where are we on the DataVault LBO? That's been sitting in diligence for a while now.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Leverage ratio is at 4.5x with the current structure. The sponsor consortium — it's three PE firms — is interested but they're pushing hard on management rollover. They want at least 20% rollover from the founder and C-suite. I'm running sensitivity scenarios and the base case is showing 18-22% IRR.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "One thing I flagged in my review — DataVault's cloud infrastructure costs are growing at 35% year-over-year, but revenue is only growing at 28%. That's a margin compression story that could really hurt the IRR if it continues through the hold period.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "That's a fair point. The management team claims they'll hit an inflection point on cloud costs in FY26 as they migrate to reserved instances and optimize their data pipeline. But I want to model the downside scenario where that migration is delayed or the savings are smaller than projected.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Have the sponsors commented on the cloud cost issue? In my experience, PE firms doing tech LBOs are increasingly focused on infrastructure efficiency as a value creation lever. If they see it as fixable, it could actually strengthen the thesis rather than weaken it.",
        isMe: true,
      },
      {
        speaker: "Victor Kane",
        text: "Good question. The lead sponsor brought it up in our last call and they have an operating partner with a cloud optimization background. So they see it as an opportunity, not a dealbreaker. But they want our model to quantify the impact both ways.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Makes sense. Nathan, let's make sure the sponsor presentation includes a clear view on the cloud cost trajectory — both the management case and the stress case. That'll show we've done the work and it gives the sponsors the data they need to move forward.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "I'll have the updated sponsor deck ready by Thursday. Victor, can you own the cloud cost sensitivity analysis? I want a standalone page in the appendix that shows IRR impact across three scenarios.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Will do. I'll also pull benchmarks from comparable SaaS companies that went through similar cloud optimization programs. That'll give us a reality check on management's assumptions.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Alright, let's wrap up. Nathan, comp table refresh and DataVault deck by Thursday. Victor, cloud cost analysis by Wednesday so Nathan can incorporate it. I'll get the CloudSync intro call scheduled for next week. Anything else before we close?",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "One quick thing — can we make sure the comp table includes the three recent S-1 filers? Those forward projections will be useful for both the CloudSync and NeuralPath conversations. Otherwise I think we're in good shape.",
        isMe: true,
      },
      // Expanded entries below
      {
        speaker: "Nathan Lim",
        text: "Absolutely, I'll include all three S-1 filers. One of them — the AI data infrastructure company — has forward revenue projections that are particularly relevant to both CloudSync's Series C positioning and our DataVault valuation work.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "On the Vantage Systems front — even though it's exploratory, I've had two preliminary conversations with their CFO. They're growing at about 30% year-over-year and looking to raise $50-75M in growth equity to fund their expansion into the healthcare vertical.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Healthcare vertical expansion is interesting. That's a sector with long sales cycles but very high retention once you're in. Do we know who else is advising them? If they're talking to multiple banks, we need to differentiate our pitch.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "They've had conversations with Ashford Advisory and Bridgeway Partners, but nothing formal yet. I think our edge is our TMT healthcare crossover expertise — we've done three deals in the last year that sit at that intersection. I'll lead with those case studies in our pitch.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "On the DataVault management rollover — I think we should prepare a memo outlining standard rollover terms in recent tech LBOs. The sponsor consortium is asking for 20%, but I've seen the range vary significantly. Having that context will help us advise DataVault's management team on whether the ask is reasonable.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Good idea. I can pull data from the last ten tech LBOs we've tracked. The median rollover I've seen is around 15-25%, so 20% is squarely in the middle. But the terms around vesting and liquidity events matter more than the headline percentage.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Nathan, make sure the rollover analysis includes the equity incentive structure as well. If the sponsors are offering a management equity pool on top of the rollover, the total economics to the management team could be quite attractive even at 20% rollover.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "The lead sponsor mentioned a 10% management equity pool with time-based and performance-based vesting. I'll model the combined economics — rollover plus new equity — across the base, bull, and bear cases so management can see the full picture.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Switching back to CloudSync — I've been doing some preliminary research on their competitive positioning. They're in the multi-cloud management space, which is getting crowded. But their differentiation is around automated cost optimization, which is where the budget dollars are flowing right now.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "That's exactly the angle we should lead with in the engagement pitch. Cloud cost optimization is a top-three priority for every CTO I've spoken to this year. If CloudSync can demonstrate strong net dollar retention driven by expanding usage, the Series C should attract significant investor interest.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Do we have any view on CloudSync's current investor base? If their Series B investors are participating in the Series C, that's a strong signal. If they're not, we need to understand why before we go to market.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Their Series B was led by Crest Partners with participation from Keystone VC. I don't have confirmation yet on whether they're following on, but the CEO's tone suggested they are. I'll get clarity on that during the intro call next week.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "One more item for the comp table — I want to add a dedicated section on recent M&A transactions in the cloud infrastructure space. There have been four acquisitions in the last two quarters with deal values over $500M, and those transaction multiples will be important reference points.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I can contribute to that. I've been tracking the ShieldOps acquisition and two other cloud security deals. The premiums being paid are significant — 40-60% above the pre-announcement trading price for the public targets. That sets a high bar for private market valuations.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Those premiums are notable and worth highlighting in client conversations. Both CloudSync and NeuralPath should understand that the M&A market is paying up for quality assets in cloud and AI. It strengthens the timing argument across our entire pipeline.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Agreed. Let me also flag that we have a potential conflict check to run on Vantage Systems. I believe our healthcare team has an existing relationship with one of their competitors. I'll check with compliance before we proceed with a formal pitch.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Good catch. We don't want to get into that conversation only to discover we can't take the mandate. Better to resolve it now.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "On my end, I'll have the cloud cost sensitivity model for DataVault done by Wednesday morning. I'll share it in the team drive so Nathan can pull it directly into the sponsor deck. I'll also include the benchmarking data from comparable cloud optimization programs.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Perfect. So to recap the week's deliverables: Nathan has the comp table refresh and DataVault sponsor deck by Thursday, Victor has the cloud cost analysis by Wednesday, I'm scheduling the CloudSync intro call and running the Vantage conflict check. Leo, anything else from your end?",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'll prepare talking points for the CloudSync intro call based on the comp table once Nathan has it ready. I also want to draft a preliminary engagement letter framework we can customize for each of these three mandates. Let's stay tight on the timelines this week — we have a lot of moving pieces.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "Sounds good. One last thing — should we set up a mid-week check-in on Wednesday afternoon to make sure everything's on track? Given the volume of deliverables, it would be good to have a quick touchpoint before Thursday.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "I'll send a calendar invite for Wednesday at 3 PM. Thirty minutes should be enough for a status check. Alright everyone, let's execute. Good meeting.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Actually, one more thing before we go. I've been looking at the NeuralPath revenue breakdown and their enterprise segment grew 80% last quarter while mid-market was flat. If their sell-side positioning leans heavily on enterprise growth, we should make sure that narrative is reflected in our comp selection.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "That's a useful insight. Enterprise-heavy AI companies tend to trade at a premium because of the stickiness and larger contract values. I'll segment the comp table by revenue mix so we can show that distinction clearly.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good thinking, Victor. That enterprise growth rate also has implications for the CloudSync positioning. If enterprise AI adoption is accelerating at that rate across the board, it supports a higher valuation for CloudSync's Series C as well. Nathan, make sure the comp table captures that trend.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "On the Vantage Systems front — I should mention that their CFO mentioned they might want to fast-track the exploration if one of their board members moves forward with a competing investment. So the exploratory timeline could compress quickly.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "That's good to know. If Vantage accelerates, we'll need to allocate bandwidth quickly. I'd suggest we at least have a preliminary pitch deck ready — even a template version — so we're not starting from scratch if they move fast.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I can pull together a first draft of the Vantage pitch using the healthcare vertical SaaS framework we used for the Apex Health engagement last quarter. The sector dynamics are similar enough that we can adapt it with minimal rework.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's efficient. Victor, go ahead and get that started as a low-priority background task. If Vantage stays exploratory, we haven't lost much time. If they accelerate, we'll be glad we have it. Alright, I think we've covered everything now. Let's execute.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Sounds good. I'll also flag in the Wednesday check-in if there are any changes to the Vantage timeline. Otherwise, let's focus on the CloudSync and DataVault deliverables as top priority. See everyone Wednesday.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-3",
    title: "Diana / Leo 1:1",
    date: daysAgo(0),
    time: "11:30 AM",
    endTime: "12:00 PM",
    duration: "30 min",
    platform: "Zoom",
    privacy: "private",
    participants: ["Diana Calloway"],
    tags: ["1:1"],
    summary:
      "Discussed Sentra adoption progress and strategy for expanding the pilot across IB Coverage and TMT. Active daily users grew from 34 to 52 this week with strong feedback from the Coverage team. Diana flagged IT Security's SSO requirements as the main blocker for the Compliance team pilot, with a target resolution date of March 24. Also discussed the expansion proposal from 60 to 150 seats and the need to position Sentra against Prism and AssistAI alternatives in the pricing proposal.",
    keyPoints: [
      {
        title: "Adoption momentum",
        description:
          "Active daily users grew from 34 to 52 this week. IB Coverage team onboarded 14 users on Monday. Meeting capture volume up 43% week-over-week.",
        participants: ["Diana Calloway"],
      },
      {
        title: "SSO blocker",
        description:
          "IT Security requires custom SAML claim mapping before Compliance team can start their pilot. Target SSO go-live is March 24.",
        participants: ["Diana Calloway"],
      },
      {
        title: "Expansion proposal",
        description:
          "Discussing expansion from 60 to 150 seats. Enterprise tier at $42/seat/month. Need budget approval by April 15 for Q2 contract.",
        participants: ["Diana Calloway"],
      },
      {
        title: "Coverage team feedback",
        description:
          "VP-level feedback indicates Sentra replaces 30 minutes of manual CRM updates per client call. Main feature request is a DealStream integration for deal pipeline sync.",
        participants: ["Diana Calloway"],
      },
      {
        title: "Competitive positioning",
        description:
          "Need to clearly articulate Sentra's advantages over Prism (document search focus) and AssistAI (shallow meeting features) in the expansion proposal. Meeting intelligence depth is the key differentiator.",
        participants: ["Diana Calloway"],
      },
    ],
    actionItems: [
      {
        id: "ai-3-1",
        title: "Draft pricing proposal for 150-seat expansion",
        description:
          "Prepare a detailed pricing proposal with enterprise tier features, volume discounts, and comparison against Prism and AssistAI alternatives.",
        assignee: "Leo Hartwell",
        checked: false,
      },
      {
        id: "ai-3-2",
        title: "Schedule Compliance team pilot kickoff",
        description:
          "Coordinate with Ananya Desai in Compliance to schedule the pilot kickoff for March 17, contingent on SSO approval.",
        assignee: "Diana Calloway",
        checked: false,
      },
      {
        id: "ai-3-3",
        title: "Compile VP-level testimonials from Coverage team",
        description:
          "Gather 3-4 specific quotes from Coverage team VPs about time saved and workflow improvements. Include in the expansion proposal as proof points.",
        assignee: "Diana Calloway",
        checked: false,
      },
      {
        id: "ai-3-4",
        title: "Follow up with IT Security on SSO timeline",
        description:
          "Confirm the March 24 target for SAML claim mapping completion. Escalate if there are any blockers that could push the date.",
        assignee: "Leo Hartwell",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Diana Calloway",
        text: "The adoption numbers are looking great this week. We went from 34 to 52 active daily users after the IB Coverage onboarding on Monday. Meeting capture volume is up 43% week-over-week as well.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's a 53% jump in daily actives week-over-week. What's the feedback from the Coverage team specifically? I want to understand what's resonating with them so we can use it in the expansion pitch.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Very positive overall. One VP told me it replaces about 30 minutes of manual CRM updates after every client call. The automatic logging of action items and commitments is the feature they mention most. The main ask is a DealStream integration, which I know isn't on the roadmap yet.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "The DealStream ask makes sense — that's the backbone of their deal pipeline tracking. I'll flag it to our product team as a feature request. Can you get me 3 or 4 specific quotes from those VPs? Having named testimonials in the expansion proposal will be much more compelling than aggregate stats.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Absolutely, I'll reach out to the three VPs who've been most vocal and get their permission to quote them. I think a VP in Healthcare Coverage and a VP in Industrials would be great advocates.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Perfect. Now what's the status on the Compliance team pilot? Last I heard it was blocked on SSO.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Still blocked. IT Security needs custom SAML claim mapping before they'll approve the Compliance team's access. The issue is that Compliance has stricter attribute requirements for their SSO federation than what the standard config supports. Ananya's team is eager to start but we can't move until that's resolved.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "What's the timeline looking like? Is there anything we can do to accelerate it, or is this purely on IT Security's side?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Target is March 24 for SSO go-live. The identity team has it in their sprint but it's not the top priority. I think a nudge from our side might help — maybe you could ping their manager to emphasize that we have 90 additional seats contingent on this being resolved.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'll reach out today. Making the business case clear — that this is blocking a six-figure expansion — should help move it up in their queue. Let's talk about the expansion proposal itself. Where are we on the pricing side?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "We're looking at going from 60 to 150 seats. At the enterprise tier of $42 per seat per month, that's roughly $75,600 annually. We need budget approval by April 15 to get the Q2 contract signed. The budget holder is the TMT group head and he'll want to see a clear ROI case.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "We need to position this against the alternatives clearly. Prism is $65 per seat and it's really a document search tool — their meeting capabilities are minimal. AssistAI is $30 but the meeting features are shallow and the organizational memory piece doesn't exist. Our value prop is strongest for meeting-heavy teams, and IB Coverage is exactly that.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Agreed. I'd also suggest we include the time savings data in the proposal. If each of the 150 users saves 30 minutes per day on CRM updates and meeting follow-ups, that's a significant productivity gain we can quantify in dollar terms.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good thinking. I'll draft the full pricing proposal this week with the competitive comparison, ROI analysis, and the testimonials once you have them. Let's target having a polished version ready by next Monday so we can socialize it internally before the April 15 deadline.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Sounds like a plan. I'll have the testimonials to you by Thursday. One more thing — should we invite Priya to the expansion discussion? Having Compliance's buy-in would strengthen the case, even if their pilot hasn't started yet.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Yes, definitely loop Priya in. If she can speak to the Compliance team's intent to adopt, it shows demand beyond just the IB Coverage group. That cross-functional pull is exactly what budget holders want to see.",
        isMe: true,
      },
      // Expanded entries below
      {
        speaker: "Diana Calloway",
        text: "Speaking of cross-functional interest, I've also gotten informal inquiries from the Equity Research team. They saw what Coverage was doing with Sentra and want to know if it could help with their earnings call analysis workflow.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's encouraging, but let's not get ahead of ourselves. We want the 150-seat expansion to succeed before we start talking about a third wave. But we should definitely note that demand in the proposal — it shows organic pull beyond the teams we're targeting.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Agreed. I'll include it as a footnote in the demand section of the proposal. On the ROI analysis, I've been thinking about how to quantify the value more concretely. The 30 minutes per call is one metric, but we should also look at meeting preparation time.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "What are you seeing on the prep time side? I know anecdotally that the organizational memory feature is helping people get context on prior conversations, but do we have data on that?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I surveyed ten pilot users last week. Seven of them said they spend 15-20 minutes before each external call reviewing prior meeting notes. With Sentra, they can pull up the conversation history in about 2 minutes. That's a 15-minute savings per meeting on top of the 30 minutes saved on follow-up.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's compelling. So we're looking at 45 minutes saved per external meeting. If the average Coverage banker has 3-4 external calls per day, that's over two hours of productivity recovered daily. At their billing rates, the dollar value is substantial.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Exactly. I'll run the full math for the proposal. Even using conservative assumptions — 3 calls per day, $200 per hour effective cost — the annual productivity gain per user is over $130,000. The $42 per month per seat is basically a rounding error compared to that.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That ROI number is going to be the centerpiece of our pitch. Let's make sure we present it clearly with the underlying assumptions spelled out. Budget holders will push back on the inputs, so we need each number to be defensible.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I'll use the survey data as the evidence base and include the raw responses as an appendix. That way if anyone challenges the 30-minute figure, we can point to specific user testimonials backing it up.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good. Let's also talk about the rollout plan for the expanded seats. If we get approval, are we doing a big-bang launch or a phased approach?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I'd recommend phased. We learned from the initial 60-seat rollout that having team-specific training sessions dramatically improves adoption. I'd suggest three waves — Compliance first since Ananya's team is already waiting, then Equity Research, and then the remaining Coverage expansion.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Phased makes sense. It also gives us a chance to address any issues that come up in wave one before they affect a larger user base. Include the phased rollout timeline in the proposal — it shows we've thought about the operational side, not just the budget ask.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Will do. I was also thinking about the training format. The in-person sessions we did for the first wave worked well, but they're hard to schedule across teams. Should we also create a recorded onboarding module that people can watch asynchronously?",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Yes, a recorded module would scale much better. Keep it under 15 minutes — nobody's going to watch a 45-minute training video. Cover the three most-used features and point people to the team champion for everything else.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Got it. I'll draft the script for the recorded module this week. We can record it once we have the final feature set confirmed. On the DealStream integration request — should I escalate that directly to Sentra's product team, or do you want to handle it through the account relationship?",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Let me handle it through the account relationship. If we're about to commit to 150 seats, that gives us leverage to push for product roadmap commitments. I'll position the DealStream integration as a condition of the expanded contract — or at least a strong expectation.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Smart approach. The Coverage team keeps asking about it, so having a timeline from Sentra — even a tentative one — would go a long way in maintaining enthusiasm during the expansion.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Exactly. I'll bring it up in my next call with their account executive. Let's also make sure the contract includes SLA commitments on uptime and support response times. At 150 seats, we're a significant client and should be getting premium support.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I'll add SLA requirements to the contract negotiation checklist. Their standard enterprise SLA is 99.9% uptime and 4-hour response time for critical issues, which should be acceptable. I'll push for 2-hour response given our seat count.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good. Alright, I think we have a clear plan for the week. You're working on testimonials, survey data for the ROI analysis, and the phased rollout plan. I'll handle the SSO escalation, the DealStream conversation with Sentra, and the pricing proposal draft. Let's sync again Thursday to review progress.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Sounds great. I'll also keep an eye on the daily adoption metrics in case there's anything unusual. The numbers have been trending up consistently, but I want to make sure we don't see a dip as the novelty wears off. That's usually the risk in week two and three of a pilot.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good point. If we do see a dip, let's proactively address it — maybe a tips-and-tricks email or a short lunch-and-learn session to re-engage users. We need the adoption curve to hold through the March 21 evaluation checkpoint. Alright, let's execute. Talk Thursday.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Before we go — one more thing I wanted to raise. A few users have asked about whether Sentra can integrate with Notion. The TMT team uses Notion heavily for internal deal wikis, and they'd love to have meeting summaries automatically pushed there.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Notion integration is an interesting one. It's not as high-priority as DealStream for the Coverage team, but it's a quality-of-life feature that would drive stickiness. I'll add it to the feature request list when I talk to Sentra's account team. Any sense of how many users have asked for it?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Four users from TMT and two from Technology & Innovation. It's not a dealbreaker for anyone, but it came up independently from multiple people, which tells me there's genuine demand. I documented each request with the user's specific use case.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's helpful. Having specific use cases attached to the request makes it much easier for Sentra's product team to evaluate and prioritize. Include that in the feature request document and I'll reference it in my next call with them.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Will do. Also, on the compliance front — Priya mentioned to me yesterday that her team has been looking at how Sentra handles meeting recordings for regulated conversations. She's comfortable with the pilot constraints, but she wants a detailed walkthrough of the data lifecycle before the production deployment.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's reasonable. Let's make sure the data lifecycle walkthrough happens before the March 21 checkpoint. Can you coordinate with Priya and Sentra's compliance team to schedule a 45-minute deep dive? I'd like to attend that as well so I understand the details for the budget presentation.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I'll set that up for next week. Priya prefers Tuesday or Wednesday mornings, so I'll aim for one of those slots. I'll invite you and Victor Kane as well since he'll need to validate the technical details of the data lifecycle.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Perfect. That covers the compliance angle. One last thought — we should also think about what success looks like beyond the quantitative metrics. Are there any qualitative signals you're watching for? Things like whether people are using it without being prompted, or sharing summaries proactively with colleagues?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Great question. I've actually noticed something encouraging — three of the Coverage VPs have started forwarding Sentra meeting summaries to their analysts as a way to bring them up to speed on client conversations they weren't on. That's organic behavior, nobody told them to do that. It suggests the product is becoming part of their natural workflow.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's exactly the kind of signal we want to see. It means people aren't just using it because they were told to — they're finding genuine value. Make sure we capture those anecdotes for the expansion proposal. Organic adoption stories are more persuasive to budget holders than any dashboard metric. Alright, great chat. Talk Thursday.",
        isMe: true,
      },
    ],
  },
  // Yesterday (day 1)
  {
    id: "mtg-4",
    title: "AI Vendor Evaluation — Round 2",
    date: daysAgo(1),
    time: "3:00 PM",
    endTime: "4:00 PM",
    duration: "60 min",
    platform: "Zoom",
    privacy: "public",
    participants: ["Nathan Lim", "Victor Kane", "Ananya Desai"],
    tags: ["Evaluation"],
    summary:
      "Second round of AI vendor evaluations comparing Sentra, Prism, and Microsoft AssistAI against JPM's enterprise requirements. Priya presented updated security assessment results showing Sentra passed initial review with two pending items around penetration testing and data retention alignment. The team discussed feature trade-offs in depth, with consensus that Sentra's meeting intelligence depth is the strongest differentiator for JPM's meeting-heavy workflow. Decision timeline moved up to March 21 to align with the pilot evaluation period.",
    keyPoints: [
      {
        title: "Security assessment",
        description:
          "Sentra passed initial security review. Pending items: penetration test report and data retention policy alignment (JPM requires 7-year, Sentra default is 2-year).",
        participants: ["Ananya Desai"],
      },
      {
        title: "Feature comparison",
        description:
          "Sentra leads on meeting intelligence depth and organizational memory. Prism stronger on document search. AssistAI wins on integration breadth but meeting features are shallow.",
        participants: ["Nathan Lim"],
      },
      {
        title: "Pricing comparison",
        description:
          "Sentra: $42/seat/month. Prism: $65/seat. AssistAI: $30/seat (bundled). Sentra's value proposition strongest for meeting-heavy teams.",
        participants: ["Victor Kane"],
      },
      {
        title: "Data retention alignment",
        description:
          "JPM requires 7-year data retention for regulatory compliance. Sentra's default is 2-year but their enterprise team confirmed they can configure custom retention policies for financial services clients.",
        participants: ["Ananya Desai", "Victor Kane"],
      },
      {
        title: "Integration requirements",
        description:
          "Key integration needs: CloudForce CRM, Bloomberg Terminal, DealStream, and internal deal management systems. Sentra has CloudForce and is building DealStream. AssistAI has broadest integration set but lacks depth.",
        participants: ["Nathan Lim"],
      },
    ],
    actionItems: [
      {
        id: "ai-4-1",
        title: "Request penetration test report from Sentra",
        description:
          "Email Sentra's security team for their latest pen test results. Required before IT Security will approve production deployment.",
        assignee: "Ananya Desai",
        checked: false,
      },
      {
        id: "ai-4-2",
        title: "Build vendor comparison scorecard",
        description:
          "Create a weighted scoring matrix across security, features, pricing, and integration for the evaluation committee presentation.",
        assignee: "Nathan Lim",
        checked: false,
      },
      {
        id: "ai-4-3",
        title: "Confirm custom data retention capability with Sentra",
        description:
          "Get written confirmation from Sentra's enterprise team that they can configure 7-year data retention for JPM's deployment. Need this documented for the compliance review.",
        assignee: "Ananya Desai",
        checked: false,
      },
      {
        id: "ai-4-4",
        title: "Survey pilot users on feature priorities",
        description:
          "Send a quick survey to the 60 pilot users asking them to rank their top 5 features and identify any gaps. Results will inform the weighted scorecard.",
        assignee: "Victor Kane",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Nathan Lim",
        text: "Let's review where we are on the AI vendor evaluation. We need to have a recommendation ready by March 21, which is sooner than we originally planned. Priya, can you walk us through the security assessment results?",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "Sure. Sentra passed the initial security review — their SOC 2 Type II is clean and their encryption standards meet our requirements. Two pending items though: we still need their penetration test report, and their default data retention is 2 years versus our 7-year requirement.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "On the data retention piece, I spoke with Sentra's enterprise team last week. They confirmed they can configure custom retention policies for financial services clients. It's not a default setting but it's something they've done for other banks. We just need to get that in writing.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "That's helpful. I'll follow up to get formal documentation. Without the 7-year retention in the contract, our compliance team won't sign off. It's non-negotiable given our regulatory obligations.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "How did Prism and AssistAI fare on the security assessment? I want to make sure we're comparing apples to apples across all three vendors.",
        isMe: true,
      },
      {
        speaker: "Ananya Desai",
        text: "Prism passed with no issues — they already have financial services clients and their retention policies are configurable out of the box. AssistAI inherits Microsoft's enterprise security posture, so it's compliant by default since we're already a Microsoft shop. On pure security, AssistAI has the easiest path.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Security is table stakes though — all three can get there. The real differentiator is the feature set. I've been doing a deep comparison over the past two weeks. Sentra leads significantly on meeting intelligence — the transcript analysis, action item extraction, and organizational memory features are genuinely best-in-class.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "On the pricing side, Sentra at $42 per seat is the middle option. Prism is $65 per seat, which is steep, but they have the strongest document search. AssistAI is $30 per seat bundled into our existing M365 agreement, but the meeting features are much shallower.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "The pricing delta between Sentra and AssistAI is only $12 per seat. If Sentra saves each user even 20 minutes a day on meeting follow-ups — and we're hearing 30 minutes from the pilot — the ROI case writes itself. The question is whether Prism's document search adds enough value to justify a 55% premium over Sentra.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "I don't think it does for our use case. Our teams spend 60% of their day in meetings. That's where the value is concentrated. Prism would be the better choice for a research-heavy team, but for investment banking coverage, meeting intelligence is the killer feature.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "One thing to consider — AssistAI has the broadest integration set by far. Bloomberg, CloudForce, all the Microsoft suite. Sentra has CloudForce and they're building a DealStream connector, but the integration story is still developing.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "That's a fair point, but integrations can be built. The core AI capability is much harder to replicate. I've been watching the pilot closely and the way Sentra captures institutional knowledge across meetings is something neither Prism nor AssistAI can match right now.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I think we're converging on a recommendation. Nathan, can you build a weighted scorecard that captures all of this — security, features, pricing, and integration — so we have something concrete for the evaluation committee? Weight the categories based on what matters most for IB Coverage specifically.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "Already started it. I'll have a draft by end of week. I'm thinking 30% meeting intelligence, 25% security and compliance, 20% pricing, 15% integrations, and 10% ease of deployment. Does that weighting feel right?",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I'd bump security to 30% and meeting intelligence to 25%. Given our regulatory environment, the compliance team will scrutinize security more heavily than feature depth. We need the scorecard to reflect what the decision-makers actually care about.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "Agreed with Victor. Security and compliance should be the top weighted category. I'd also suggest we survey the pilot users to get quantitative data on which features they actually use most. That'll make the scorecard evidence-based rather than opinion-based.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Fair enough, I'll adjust the weights and incorporate pilot user feedback. Victor, can you own the user survey? Keep it short — five questions max — and get it out by end of day tomorrow so we have results in time.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Let's also make sure we have the pen test report and retention confirmation from Sentra before the March 21 deadline. Those are the two outstanding items that could derail the recommendation. Priya, can you follow up on both this week?",
        isMe: true,
      },
      {
        speaker: "Ananya Desai",
        text: "I'll send the requests today. I have a good contact on Sentra's security team from the initial review, so I'm optimistic we can get both resolved quickly. If there are any delays, I'll escalate immediately so we're not scrambling at the deadline.",
        isMe: false,
      },
      // Expanded entries below
      {
        speaker: "Nathan Lim",
        text: "One area we haven't discussed yet is the onboarding and change management piece. Even if Sentra wins on features, the success of a 150-seat deployment depends on adoption. What did we learn from the pilot about user onboarding friction?",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "The pilot onboarding was fairly smooth. The desktop app install took about 10 minutes per user, and most people were capturing their first meeting within an hour of setup. The main friction point was calendar permissions — some users were hesitant to grant access to their full calendar.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "The calendar permission issue is something we need to address proactively in the expanded rollout. Can we work with Sentra to configure a more granular permission model? Ideally users should be able to select which calendar events Sentra has access to, rather than granting blanket access.",
        isMe: true,
      },
      {
        speaker: "Ananya Desai",
        text: "That's actually one of the items on my compliance checklist. I spoke with Sentra's product team about it and they said selective calendar permissions are on their Q2 roadmap. For now, the workaround is to use meeting categories to flag which ones should be captured.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Switching topics — I want to talk about the competitive landscape for a moment. Prism just announced a new meeting summarization feature in their latest product update. It's not as deep as Sentra's, but it narrows the gap. We should factor that into our evaluation.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I saw that announcement. I tested it during the trial period and it's fairly basic — it generates a summary and bullet points but doesn't do the cross-meeting intelligence or organizational memory that Sentra does. It's more like a GPT wrapper on top of the transcript.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's a common pattern we're seeing — incumbent tools bolting on AI features to check a box. The question is whether Prism will invest deeply enough in meeting intelligence to close the gap, or if it will always be a secondary feature for them. Given that their core business is document search, I'd bet on the latter.",
        isMe: true,
      },
      {
        speaker: "Ananya Desai",
        text: "From a risk management perspective, there's also the vendor viability question. Sentra is a smaller company compared to Prism and obviously Microsoft. What's their funding situation? We need assurance they'll be around for the duration of a multi-year contract.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Sentra raised a $60M Series B about eight months ago, led by Redwood. They have roughly 24 months of runway at current burn rate and their revenue growth is strong. I'd put the vendor viability risk as low, especially given the strength of their investor base.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I'd add that the meeting intelligence market is growing rapidly. If anything, Sentra is more likely to be acquired by a larger platform than to go under. And an acquisition would probably mean continued investment in the product, not deprecation.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good points. We should include the vendor viability assessment in the scorecard as a sub-factor under security and compliance. It's a legitimate concern that the evaluation committee will raise, and we should have a clear answer ready.",
        isMe: true,
      },
      {
        speaker: "Ananya Desai",
        text: "Agreed. I'll also request Sentra's financial statements as part of the vendor due diligence. We typically require that for any vendor contract above $100K annually, and this will clear that threshold with the 150-seat expansion.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Let me also bring up the API and data export capabilities. For the evaluation committee, they'll want to know that we're not locked into any vendor. Can we easily export our data if we decide to switch platforms in the future?",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I reviewed the API documentation for all three vendors. Sentra has a comprehensive REST API that allows full data export — transcripts, summaries, action items, and organizational memory graphs. Prism has a similar export capability. AssistAI is more restrictive — the data lives within the Microsoft ecosystem and extraction requires admin-level access.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Data portability should be a requirement in the contract regardless of which vendor we choose. Victor, can you draft a data portability clause that we can include in the negotiation? We should have full export rights with no more than 30 days notice.",
        isMe: true,
      },
      {
        speaker: "Victor Kane",
        text: "I'll draft that clause and circulate it with the group. I'll also include requirements around data format — we want structured exports in JSON or CSV, not proprietary formats that require additional processing to use.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Great. Let me summarize where we are. The scorecard is in progress with adjusted weights — 30% security, 25% meeting intelligence, 20% pricing, 15% integrations, 10% deployment. Victor is running the pilot user survey. Priya is following up on the pen test report and retention documentation. And we need the vendor viability assessment and data portability clause added.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "I'll also prepare a one-page compliance risk summary for each vendor. It'll cover data residency, encryption standards, audit logging, retention policies, and any outstanding gaps. That'll be a useful reference document for the evaluation committee.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "This is shaping up well. Let's plan to do a dry run of the evaluation committee presentation on March 19 — two days before the deadline. That gives us time to incorporate any final feedback and make sure the recommendation is bulletproof. Everyone comfortable with that timeline?",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "Works for me. I'll have the scorecard and presentation draft ready by March 18 for the dry run. Let's block 90 minutes on the 19th to go through it end to end.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I'll have the survey results compiled by March 17 so Nathan has time to incorporate them. I'll also have the data portability clause ready by then. Priya, do you think you'll have the Sentra responses by that date?",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "I'll push for it. If the pen test report takes longer, I'll at least have a confirmed timeline from Sentra that we can present to the committee. The retention documentation should be straightforward — I expect that within 48 hours of my request.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good. Let's stay in close contact this week. If any blockers emerge, flag them immediately in the group chat. The March 21 deadline is firm and I don't want any surprises. Alright, I think we're aligned. Good meeting everyone.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "One more thought — should we include a migration risk assessment in the scorecard? If we go with Sentra and later decide to switch, what does that transition look like? The evaluation committee will want to know we've thought about lock-in risk.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "That's a valid point. Based on my review of the APIs, Sentra has the lowest migration risk because their data export is the most comprehensive. AssistAI has the highest lock-in because the data is deeply embedded in the Microsoft Graph. I'll include a migration complexity rating for each vendor.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "From a regulatory perspective, the ability to migrate data is also a compliance requirement. We need to ensure that if we switch vendors, all historical meeting data and audit trails can be transferred intact. That's a non-negotiable for any vendor we select.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Agreed. Let's add migration risk and data portability as a formal criterion in the scorecard — maybe as a sub-category under security and compliance. Nathan, weight it at about 5% of the total score so it's visible but doesn't dominate the evaluation.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "I'll add it in. That brings our total evaluation framework to six categories: security, meeting intelligence, pricing, integrations, ease of deployment, and data portability. I think that's comprehensive enough to give the committee a complete picture.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Last item from me — I want to mention that Sentra's customer success team has been very responsive during the pilot. They've turned around support tickets within 2 hours on average and proactively reached out to check on our adoption metrics. That level of engagement is notable compared to the generic support we get from Microsoft on AssistAI issues.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "Vendor responsiveness matters, especially during the first year of deployment when configuration issues are most common. I'd suggest we include customer support quality as a qualitative factor in the recommendation, even if it's not formally scored in the matrix.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good call. Include it as a qualitative section in the recommendation narrative alongside the quantitative scorecard. The committee appreciates when we go beyond the numbers. Alright, with that addition I think we have a thorough evaluation framework. Let's finalize everything for the March 19 dry run.",
        isMe: true,
      },
    ],
  },
  {
    id: "mtg-5",
    title: "IB Coverage Team Standup",
    date: daysAgo(1),
    time: "9:30 AM",
    endTime: "10:00 AM",
    duration: "30 min",
    platform: "Zoom",
    privacy: "public",
    participants: ["Grant Holloway", "Monica Pearce", "Diana Calloway"],
    tags: ["Standup"],
    summary:
      "Quick standup covering active deals and weekly priorities. Grant flagged the NeuralPath mandate as accelerating significantly — their board wants a term sheet by end of month with three potential acquirers already identified. Monica confirmed the Meridian model will be ready by Wednesday with the customer concentration stress test incorporated. Diana provided a pipeline overview showing 12 active engagements with $18M in potential fees, and the team discussed prioritization across late-stage deals.",
    keyPoints: [
      {
        title: "NeuralPath acceleration",
        description:
          "NeuralPath's board wants to move fast on the sell-side process. Three potential acquirers already identified. Target: preliminary term sheet by March 28.",
        participants: ["Grant Holloway"],
      },
      {
        title: "Meridian model status",
        description:
          "Monica confirmed she'll have the draft 3-statement model ready by Wednesday. Will incorporate the customer concentration stress test Grant flagged.",
        participants: ["Monica Pearce"],
      },
      {
        title: "Coverage pipeline",
        description:
          "12 active engagements across TMT coverage. 4 in late-stage diligence, 3 in evaluation, 5 in early outreach. Total potential fee pool: $18M.",
        participants: ["Diana Calloway"],
      },
      {
        title: "NeuralPath acquirer profile",
        description:
          "Ideal acquirers are AI infrastructure companies with $500M+ market cap and demonstrated M&A track record. Grant identified three fits and wants the shortlist expanded to five with detailed profiles.",
        participants: ["Grant Holloway", "Monica Pearce"],
      },
    ],
    actionItems: [
      {
        id: "ai-5-1",
        title: "Identify acquirer shortlist for NeuralPath",
        description:
          "Research and rank potential strategic and financial acquirers for NeuralPath. Focus on AI infrastructure companies with M&A track record.",
        assignee: "Monica Pearce",
        checked: false,
      },
      {
        id: "ai-5-2",
        title: "Update coverage pipeline tracker",
        description:
          "Refresh the master pipeline spreadsheet with latest stage movements, fee estimates, and probability weightings.",
        assignee: "Diana Calloway",
        checked: false,
      },
      {
        id: "ai-5-3",
        title: "Prepare NeuralPath CIM outline",
        description:
          "Draft a confidential information memorandum outline for NeuralPath including company overview, market opportunity, financial summary, and growth strategy sections.",
        assignee: "Monica Pearce",
        checked: false,
      },
      {
        id: "ai-5-4",
        title: "Schedule NeuralPath board alignment call",
        description:
          "Coordinate with NeuralPath's CEO to schedule a call with their board to align on valuation expectations and process timeline before engaging acquirers.",
        assignee: "Grant Holloway",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Grant Holloway",
        text: "Quick updates this morning. Big one first — NeuralPath is accelerating significantly. Their board met yesterday and the consensus is to move fast on the sell-side. I've already identified three potential acquirers but I want to expand that to a full shortlist of five.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "What's driving the urgency on NeuralPath's side? Is this competitive pressure or are they seeing a window in the market they want to capitalize on?",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Both, actually. They've had two inbound acquisition inquiries in the last month, which tells you the market sees them as attractive. But they also know that AI infrastructure valuations are elevated right now and they don't want to wait for the cycle to turn. Their board wants a preliminary term sheet by March 28.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "That's an aggressive timeline. Do we have enough diligence materials to start the outreach, or do we need to build a CIM from scratch?",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "We'll need a CIM, but we can start with an outline and use the teaser to initiate conversations with the top acquirers while we build it out. Monica, can you draft the CIM outline by Friday? Focus on company overview, market opportunity, financial summary, and growth strategy.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "I can do that. On Meridian — I'm making good progress on the 3-statement model. I'll have the draft ready by Wednesday as planned. I'm building in the customer concentration stress test you flagged yesterday, including scenarios where the top 1, 2, and 3 accounts churn independently.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Good. Make sure the Meridian model also includes the mid-market acquisition acceleration scenario we discussed. If they can credibly show a path to reducing top-10 concentration below 30%, that changes the risk narrative completely.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Pipeline update for the week: we have 12 active engagements across TMT coverage. Four are in late-stage diligence — Meridian, DataVault, and two others. Three are in evaluation including NeuralPath, and five are in early outreach. Total potential fee pool is about $18M.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That $18M fee pool is strong. What's the probability-weighted number? I want to make sure we have a realistic view for the quarterly forecast.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Probability-weighted, we're looking at about $9.2M. The late-stage deals carry 60-70% probability, the evaluation-stage ones are at 30-40%, and early outreach is 10-15%. I'll update the full pipeline tracker today with the latest stage movements.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "On NeuralPath specifically — Monica, I need the acquirer shortlist by Thursday. Focus on AI infrastructure companies with at least $500M market cap and a demonstrated M&A track record. I want companies that have done at least two acquisitions in the last 18 months.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "Got it. I already have three names — I'll expand to five with detailed profiles including acquisition history, strategic rationale, and estimated capacity to pay. Should I also look at financial sponsors or just strategics?",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Strategics only for now. NeuralPath's board has a strong preference for a strategic exit — they want the team to stay together and continue building. A PE buyer would likely bring in their own management, which doesn't align with what the founders want.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Makes sense. Grant, should we also schedule a call with NeuralPath's board before we start reaching out to acquirers? We want to make sure everyone's aligned on valuation expectations and process timeline. The last thing we want is to bring a strong offer and have the board reject it because expectations weren't set properly.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Absolutely. I'll coordinate with their CEO to get that scheduled for early next week. Good call — alignment upfront saves us from painful negotiations later. Alright, let's execute. Monica on Meridian model and NeuralPath shortlist, Diana on the pipeline tracker. Let's reconvene Thursday morning.",
        isMe: false,
      },
      // Expanded entries below
      {
        speaker: "Monica Pearce",
        text: "Before we break, one question on the NeuralPath CIM. Do we have access to their audited financials, or will we need to work from management-prepared numbers? That affects how we frame the financial summary section.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "They have audited financials through FY24. The FY25 numbers are management-prepared but their controller told me they're in the process of getting the audit completed. We should be able to get a draft audit by mid-April, but for the CIM outline we can use the management numbers with appropriate disclaimers.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "We should flag that in the CIM — potential acquirers will want audited numbers before signing a definitive agreement. Having the audit in progress is fine for the teaser phase, but we need to push NeuralPath to expedite the completion.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "On the two other late-stage deals — Pinnacle Networks and Horizon Data — both are progressing well. Pinnacle is in final due diligence with their lead investor and should close by end of month. Horizon is in pricing discussions and the sponsor is expected to submit a formal offer this week.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Good. Pinnacle and Horizon are both on track and don't need the same level of attention as Meridian and NeuralPath right now. But keep me posted if anything changes on either front — I don't want late-stage deals falling through the cracks while we focus on the newer mandates.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "On the five early outreach engagements — are any of those likely to move to evaluation stage this month? I'm trying to plan my bandwidth between the Meridian model, NeuralPath CIM, and any new work that might come in.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Two of the five are heating up. Cascade Analytics wants to explore a growth equity raise and their CEO is responsive. The other is Vertex AI, which is looking at strategic options but hasn't committed to a formal process yet. I'd say there's a 40% chance at least one moves to evaluation this month.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "If Cascade moves forward, that would be another data infrastructure deal, which plays to our strengths. Monica, is there any overlap between the Cascade opportunity and the Meridian work that would let you leverage the same comp set and market analysis?",
        isMe: true,
      },
      {
        speaker: "Monica Pearce",
        text: "Definitely. Cascade is in a slightly different subsector — more focused on analytics rather than supply chain — but the comp set overlaps by about 60%. I can reuse most of the market sizing work and adjust the peer group. It would save me a significant amount of time if they do convert.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "That's good leverage. Diana, keep nurturing the Cascade relationship. If we can get them to sign an engagement letter, the incremental work is manageable given what Monica already has in hand. What about the Vertex AI situation?",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Vertex is more complicated. Their founder is exploring a sale but the board is split on timing. Some directors want to wait another 12-18 months to grow into a higher valuation. I'm positioning us as the advisor who can help them evaluate both options — sell now at a strong multiple, or continue building with a clear path to an even larger exit later.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's the right approach. Showing them we're not just pushing for a quick transaction builds trust. If they decide to wait, we're still the natural choice when they're ready to move. Let's make sure we stay in regular contact with the Vertex founder — quarterly touchpoints at minimum.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Agreed. Relationship capital in these situations pays dividends later. Alright, I think we've covered everything. Quick recap — Monica has the Meridian model by Wednesday and NeuralPath acquirer shortlist plus CIM outline by Thursday and Friday respectively. Diana is updating the pipeline tracker and staying close to Cascade and Vertex. I'm scheduling the NeuralPath board call. Let's execute and regroup Thursday at 9:30.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "One last thing — should I coordinate with Nathan Lim on the NeuralPath acquirer research? He's been tracking the AI infrastructure space closely for the comp table refresh and might have some useful insights on which companies are most likely to be active acquirers right now.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Great idea. Loop Nathan in on the acquirer shortlist. His sector knowledge will help us identify targets we might otherwise miss, and it ensures consistency between our comp analysis and our acquirer thesis.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'll also connect with Nathan separately about the NeuralPath positioning. If we can tie the sell-side narrative to the broader AI infrastructure re-rating he's been tracking, it strengthens the urgency argument for potential acquirers. The market timing story works for both buyers and sellers in this case.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Makes sense. I'll send a summary of today's standup to the broader team so everyone is aligned on priorities. Grant, should I include Nathan and Victor in the distribution, or keep it to the core coverage group?",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Include Nathan given the NeuralPath overlap. Keep the distribution tight otherwise — we don't want deal information spreading beyond the people who need to know. Alright, good standup. Let's go.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Quick thought before everyone drops — for the Thursday reconvene, can we also review the fee structure for NeuralPath? Given the accelerated timeline and the complexity of a sell-side mandate with multiple potential acquirers, we should make sure our engagement terms reflect the scope of work.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Good point. I'll pull up the standard sell-side fee schedule and we can discuss adjustments on Thursday. For a deal of this size, we're looking at a success fee in the range of 2-3% of transaction value, plus a monthly retainer. Let's finalize the terms before the board alignment call.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "I'll also prepare a preliminary valuation range for NeuralPath by Thursday so we can sanity-check the fee structure against the expected deal size. Based on what I've seen so far, we could be looking at a $200-350M transaction, but I need to dig deeper into their financials to narrow that down.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Perfect. That gives us all the pieces we need for a productive Thursday session. I'll make sure the calendar invite includes the full agenda. See everyone then.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Actually, one more thing before everyone drops. I got a call from the Pinnacle Networks lead investor last night. They're asking if we can accelerate the closing timeline by a week. Apparently they have another deal competing for the same allocation.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "Pinnacle is essentially ready to close from our side. The outstanding item is the final working capital adjustment, which I can have done by Friday. If their legal team can turn the definitive agreement around over the weekend, we could close by early next week.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That would be a great outcome. A quick close on Pinnacle frees up bandwidth for the NeuralPath mandate and gives us a completed deal to reference in our pipeline conversations. Grant, do you want me to coordinate with Pinnacle's legal counsel to push the timeline?",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Yes, please take point on that. Their outside counsel is Davis Polk — ask for Maria Santos, she's been running the deal documentation. I'll send you her contact info right after this call. Let's see if we can close this out by Tuesday.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "If Pinnacle closes next week, that would bring our Q1 closed fee total to $6.8M. That's well ahead of our quarterly target of $5.5M. It would give us a strong position going into the mid-year review.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's a solid number. And with Meridian, DataVault, and NeuralPath all in various stages of active diligence, Q2 could be even stronger. The pipeline is the healthiest I've seen it in the last 18 months.",
        isMe: true,
      },
      {
        speaker: "Grant Holloway",
        text: "Agreed, but let's not get complacent. The market window for AI infrastructure deals could narrow if there's a correction in public multiples. We need to move fast on the active mandates while the tailwinds are still blowing. Every week of delay is valuation risk.",
        isMe: false,
      },
      {
        speaker: "Monica Pearce",
        text: "On that note — I've been tracking the public AI index and it's up another 3% this week. But there's a Fed meeting next Wednesday that could shift sentiment. Should we factor potential rate decision impacts into the NeuralPath timeline discussion?",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Good awareness. The market expects a hold, but any hawkish commentary could trigger a risk-off move in high-growth tech. Let's have that scenario ready for the NeuralPath board call — if the macro environment shifts, we may need to argue for moving even faster.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'll prepare a brief macro scenario analysis for the NeuralPath board discussion — two slides covering the base case where rates hold steady and the risk case where hawkish guidance triggers a 10-15% pullback in AI multiples. That gives the board context for why timing matters.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Great idea. That kind of macro framing always resonates with board members. It shows we're not just thinking about the deal in isolation but positioning it within the broader market context. Let's make sure we include that in the board prep materials.",
        isMe: false,
      },
      {
        speaker: "Grant Holloway",
        text: "Alright, now we're definitely done. Good standup — lots of momentum across the board. Let's keep the energy up this week and close strong. See everyone Thursday.",
        isMe: false,
      },
    ],
  },
  // 2 days ago
  {
    id: "mtg-6",
    title: "Sentra Pilot Kickoff",
    date: daysAgo(2),
    time: "4:00 PM",
    endTime: "5:00 PM",
    duration: "60 min",
    platform: "Zoom",
    privacy: "public",
    participants: [
      "Diana Calloway",
      "Nathan Lim",
      "Victor Kane",
      "Ananya Desai",
    ],
    tags: ["Pilot"],
    summary:
      "Kicked off the expanded Sentra pilot with stakeholders from Technology, IB Coverage, and Compliance. Established clear evaluation parameters including 60 seats across three teams, success metrics targeting 70%+ weekly active rate and 90%+ meeting capture, and strict data governance requirements. Priya emphasized the need for audit log retention aligned with JPM's compliance requirements and data residency in US-East. The pilot runs through March 31 with a decision checkpoint on March 21 to determine whether to proceed with the full 150-seat expansion.",
    keyPoints: [
      {
        title: "Pilot scope",
        description:
          "60 seats across three teams: TMT Group (18 users), IB Coverage (28 users), Technology & Innovation (14 users). Evaluation period through March 31.",
        participants: ["Diana Calloway", "Nathan Lim"],
      },
      {
        title: "Success metrics",
        description:
          "Target: 70%+ weekly active rate, 90%+ meeting capture rate, measurable reduction in manual CRM updates (baseline: 2 hours/week per team lead).",
        participants: ["Nathan Lim"],
      },
      {
        title: "Data governance",
        description:
          "All data stored in US-East region. No client-facing meeting content exported outside JPM network. Audit log retention aligned with compliance requirements.",
        participants: ["Ananya Desai", "Victor Kane"],
      },
      {
        title: "Training and onboarding plan",
        description:
          "Three group training sessions scheduled — one per team. Quick-start guide and FAQ document to be distributed before training. Each team has a designated Sentra champion to handle day-to-day questions.",
        participants: ["Diana Calloway"],
      },
      {
        title: "Decision checkpoint",
        description:
          "March 21 evaluation checkpoint to review pilot data and make a go/no-go recommendation on the 150-seat expansion. Evaluation committee includes stakeholders from all three pilot teams.",
        participants: ["Nathan Lim", "Diana Calloway"],
      },
    ],
    actionItems: [
      {
        id: "ai-6-1",
        title: "Distribute onboarding guides to pilot teams",
        description:
          "Send the Sentra quick-start guide and FAQ document to all 60 pilot participants. Include calendar invite for group training session.",
        assignee: "Diana Calloway",
        checked: false,
      },
      {
        id: "ai-6-2",
        title: "Set up weekly adoption dashboard",
        description:
          "Create a tracking dashboard showing daily active users, meeting capture rates, and feature usage by team. Share with evaluation committee.",
        assignee: "Nathan Lim",
        checked: false,
      },
      {
        id: "ai-6-3",
        title: "Review data governance policy with Sentra",
        description:
          "Confirm data retention, encryption, and audit log requirements are met. Document any gaps for IT Security review.",
        assignee: "Ananya Desai",
        checked: false,
      },
      {
        id: "ai-6-4",
        title: "Identify team champions for each pilot group",
        description:
          "Designate one power user per team (TMT, IB Coverage, Technology) to serve as the go-to resource for questions and feedback collection during the pilot period.",
        assignee: "Diana Calloway",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Diana Calloway",
        text: "Thanks everyone for joining. Today we're kicking off the expanded Sentra pilot. We have 60 seats allocated across three teams — TMT Group with 18 users, IB Coverage with 28, and Technology & Innovation with 14. The evaluation period runs through March 31.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Before we dive into the details, I want to set some context. Sentra is the meeting intelligence platform we've been evaluating alongside Prism and AssistAI. This pilot is our chance to gather real usage data to inform the vendor decision. The more actively people use it, the better data we'll have to make the right call.",
        isMe: true,
      },
      {
        speaker: "Nathan Lim",
        text: "Agreed. For success metrics, I'd like to target 70% weekly active rate and 90% meeting capture across all pilot teams. We should also measure the reduction in manual CRM update time — our baseline survey showed team leads spending about 2 hours per week on that today.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Those metrics are solid. I'd also suggest we track feature adoption depth — not just whether people log in, but which features they're actually using. If everyone's just reading transcripts but nobody's using the action item tracking, that tells us something different than broad adoption.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Good point. I can configure the analytics to track feature-level engagement. We'll be able to see usage broken down by transcript views, action item interactions, search queries, and the organizational memory features.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "From a compliance perspective, I need to be very clear about the data governance requirements. All data must stay in US-East region — no exceptions. Client-facing meeting content cannot be exported outside our network. And I need audit logs retained for a minimum of 7 years to align with our regulatory obligations.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Priya, we've already confirmed with Sentra's infrastructure team that US-East is their default region for enterprise deployments. On the 7-year retention, their default is 2 years but they've confirmed they can configure custom retention for financial services clients. Victor spoke with them last week about this.",
        isMe: true,
      },
      {
        speaker: "Victor Kane",
        text: "That's right. I've confirmed the data residency requirements with Sentra's infrastructure team. US-East is locked in. Audit logs are available via API and can be configured for the retention period we need. I'm still waiting on formal documentation for the 7-year commitment, but the verbal confirmation was clear.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "Verbal isn't sufficient for our compliance team — we'll need that in writing before I can sign off on the production deployment. But for the pilot period, I'm comfortable proceeding. Just make sure no one is using Sentra for any conversations involving material non-public information until we have the full compliance review completed.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "That's an important constraint. Diana, can you make sure the onboarding guide includes a clear section on what types of meetings should and shouldn't be captured during the pilot? We don't want anyone accidentally recording a deal discussion that involves MNPI.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Absolutely. I'll add a section to the quick-start guide with specific examples of approved and restricted meeting types. I'll also flag it prominently in the group training sessions. Speaking of which — I'm planning three training sessions, one per team, in the first week.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "We should also designate a champion within each team — someone who's a power user and can handle day-to-day questions without everything funneling through Diana. It reduces the support burden and gives us embedded advocates in each group.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Great idea. I have a few people in mind already — Marcus in TMT has been an early adopter and Lisa in IB Coverage has been very vocal about wanting more AI tools. I'll reach out to them this week.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "I'll set up the weekly adoption dashboard before the pilot goes live. It'll show daily active users, meeting capture rates, and feature usage broken down by team. I'll share it with this group and the evaluation committee. We should review it together every Monday.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "One more technical note — the Sentra desktop app needs to be whitelisted by our endpoint security team. I've already submitted the request but it typically takes 48-72 hours. So the IB Coverage team, which is the largest group, should be ready to go by Thursday.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Good. And let's be clear about the decision timeline — March 21 is our evaluation checkpoint. That gives us about two and a half weeks of pilot data before we need to make a go/no-go recommendation on the 150-seat expansion. The budget request needs to be submitted by April 15, so March 21 gives us enough runway for approvals.",
        isMe: true,
      },
      {
        speaker: "Ananya Desai",
        text: "I'll have the data governance review completed before March 21 as well. If there are any gaps between Sentra's capabilities and our requirements, I want them identified and addressed before we commit to a larger deployment.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Perfect. So the plan is — onboarding guides go out this week, training sessions next week, pilot officially live through March 31, and decision checkpoint on March 21. I'll send a summary email to everyone after this call. Let's make this a success.",
        isMe: false,
      },
      // Expanded entries below
      {
        speaker: "Nathan Lim",
        text: "One thing we should discuss is how we handle feedback collection during the pilot. Do we want a formal weekly survey, or should we rely on the team champions to gather qualitative feedback?",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "I'd suggest a lightweight approach — a three-question pulse survey at the end of each week, plus an open feedback channel like a dedicated Slack channel where people can share thoughts in real time. We don't want to over-survey people and create friction.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I can set up the Slack channel today. I'll call it something straightforward like sentra-pilot-feedback. The team champions can help moderate it and surface the most common themes for our Monday dashboard reviews.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "On the technical setup — I want to make sure everyone understands the authentication flow. Users will authenticate through our existing Okta SSO, which means no additional passwords to manage. The initial setup requires a one-time calendar permission grant, and then Sentra will automatically detect and offer to capture eligible meetings.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "Victor, can you confirm that the Okta integration supports our multi-factor authentication requirements? Every application that touches sensitive data needs to go through our MFA flow, not just primary authentication.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "Yes, confirmed. Sentra supports SAML-based SSO with MFA enforcement. When users authenticate through Okta, they go through the same MFA challenge they use for every other internal application. There's no way to bypass it.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "What about mobile access? Some of our bankers take calls from their phones, especially when they're traveling. Does the Sentra mobile app have the same security controls as the desktop version?",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "The mobile app is available on iOS and Android, and it uses the same Okta SSO and MFA flow. However, I'd recommend we restrict the pilot to desktop only for the first two weeks. The mobile app has some known limitations around meeting capture quality when using cellular connections, and I don't want poor mobile experiences to skew our pilot data.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That's a pragmatic approach. Let's get the desktop experience dialed in first and then evaluate mobile in the second half of the pilot. Diana, make sure the onboarding guide specifies desktop-only for the initial phase.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Will do. I'll also include a FAQ section addressing the most common questions I've gotten during the early adopter phase — things like how to exclude certain meetings, how to edit transcripts, and how to share meeting summaries with people who weren't on the call.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "On the sharing point — I want to be very specific about the sharing permissions during the pilot. Meeting summaries should only be shareable within the pilot group, not to external recipients or even internal users who aren't part of the pilot. We need a clear boundary until the full compliance review is done.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Priya, is that something we can enforce at the platform level, or does it need to be a policy-based control? If Sentra can restrict sharing to specific user groups, that's much more reliable than relying on people reading the policy.",
        isMe: true,
      },
      {
        speaker: "Victor Kane",
        text: "Sentra has workspace-level sharing controls. I can configure it so that meeting content can only be shared within the pilot workspace. External sharing and sharing with non-pilot users will be disabled at the platform level. It's a toggle in the admin console.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "That's exactly what I need. Victor, please make sure that's configured before any users get access. And document the configuration for our compliance audit trail. I'll want to verify it independently as part of my governance review.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Let's also talk about what happens after the pilot. If the March 21 checkpoint goes well and we recommend expansion, what's the timeline for getting from 60 to 150 seats? Is it a flip-the-switch situation or does it require a new procurement cycle?",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "It's somewhere in between. Sentra can provision the additional seats within 24 hours on their side. But on our end, we need budget approval, a contract amendment, and IT Security sign-off. Realistically, I'd estimate 3-4 weeks from the go decision to full deployment.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "That timeline means we should start the budget approval process in parallel with the pilot evaluation, not sequentially. Diana, can you prepare a preliminary budget request that we can have ready to submit as soon as we make the go decision? That would save us at least a week.",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "Smart thinking. I'll prepare the budget paperwork this week so it's ready to go. I'll leave the recommendation section blank until we have the March 21 data, but everything else — the pricing breakdown, vendor comparison, and business justification — can be drafted in advance.",
        isMe: false,
      },
      {
        speaker: "Victor Kane",
        text: "I should also mention that Sentra's enterprise team offered to do a custom demo for any stakeholders who want to see the product before the evaluation committee meeting. If there are decision-makers who haven't seen it in action, that could be a useful touchpoint.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "That's a good idea. The TMT group head — who's the budget holder — hasn't seen a live demo yet. He's been reviewing the pilot data reports but hasn't used the product himself. A tailored demo showing how his team uses it could make the budget conversation much easier.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Let's schedule that demo for the week of March 17, right before the evaluation checkpoint. We want it fresh in his mind when we present the recommendation. Diana, can you coordinate with Sentra's account team to set that up?",
        isMe: true,
      },
      {
        speaker: "Diana Calloway",
        text: "I'll reach out to their account executive today. I'll ask them to tailor the demo around the TMT use case specifically — deal review meetings, client follow-ups, and the organizational memory feature that shows how knowledge compounds across conversations.",
        isMe: false,
      },
      {
        speaker: "Ananya Desai",
        text: "I'd like to attend that demo as well. I want to see firsthand how they handle data access controls and the audit logging interface. It'll help me complete my governance review more efficiently than working from documentation alone.",
        isMe: false,
      },
      {
        speaker: "Nathan Lim",
        text: "Good. So we have a solid plan — pilot launch this week, training next week, weekly dashboard reviews starting the Monday after, feedback channel active from day one, and the executive demo and evaluation checkpoint both targeting the week of March 17. This is well organized.",
        isMe: false,
      },
      {
        speaker: "Leo Hartwell",
        text: "Agreed. Everyone knows their responsibilities. The key thing is to keep the communication tight — any issues that come up during the pilot should be flagged immediately, not saved for the Monday review. If something goes wrong with the first batch of users, we want to fix it before the rest of the teams onboard. Alright, great kickoff. Let's go make this happen.",
        isMe: true,
      },
      {
        speaker: "Victor Kane",
        text: "One final item — I'll send the Sentra admin credentials to Diana and Nathan after this call so you both have visibility into the usage analytics dashboard directly. That way you don't have to wait for me to pull reports. I'll also set up automated weekly summary emails from the dashboard to this group.",
        isMe: false,
      },
      {
        speaker: "Diana Calloway",
        text: "Perfect. I'll have the onboarding guides, Slack channel, and training session invites all set up by end of day tomorrow. Let's touch base briefly on Wednesday to make sure everything is on track before the first training session on Thursday. Thanks everyone.",
        isMe: false,
      },
    ],
  },
];
