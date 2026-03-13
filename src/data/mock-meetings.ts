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
    participants: ["Kevin Walsh", "Sarah Mitchell", "Rachel Torres"],
    tags: ["Deal Review"],
    summary:
      "Reviewed Meridian Corp deal status and financial positioning ahead of management presentation. Discussed revenue trajectory, key assumptions for the 3-statement model, and outstanding diligence items. Kevin emphasized the need to stress-test customer concentration risk given that the top 10 accounts represent 38% of ARR. Agreed to build the financial model this week and have internal review completed by Wednesday before the Thursday board presentation.",
    keyPoints: [
      {
        title: "Revenue trajectory",
        description:
          "Meridian's ARR at $18M with 45% YoY growth. Gross margins expanding from 72% to projected 76% by FY28E driven by scale efficiencies in their platform infrastructure.",
        participants: ["Kevin Walsh", "Rachel Torres"],
      },
      {
        title: "Valuation range",
        description:
          "Comparable companies trading at 8-16x forward revenue. Base case EV/Revenue of 12x implies ~$313M valuation. Bull case dependent on net retention staying above 120%.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "Diligence gaps",
        description:
          "Customer concentration risk — top 10 accounts represent 38% of ARR. Need to stress-test churn scenarios in the model. Also need updated cap table from Meridian's CFO.",
        participants: ["Kevin Walsh", "Rachel Torres"],
      },
      {
        title: "Management presentation prep",
        description:
          "Presentation to Meridian's board scheduled for next Thursday. Need the 3-statement model completed by Wednesday for internal review.",
        participants: ["Kevin Walsh"],
      },
      {
        title: "Unit economics validation",
        description:
          "Net revenue retention at 125% with 18-month CAC payback. These metrics are strong relative to the comp set but need to be validated against cohort-level data from Meridian's finance team.",
        participants: ["Rachel Torres", "Sarah Mitchell"],
      },
    ],
    actionItems: [
      {
        id: "ai-1-1",
        title: "Build 3-statement financial model for Meridian Corp",
        description:
          "Construct income statement, balance sheet, and cash flow projections for FY25A–FY28E. Include EV/Revenue sensitivity analysis and key assumption drivers.",
        assignee: "Rachel Torres",
        checked: false,
      },
      {
        id: "ai-1-2",
        title: "Request updated cap table from Meridian CFO",
        description:
          "Email Meridian's CFO for the latest cap table, option pool details, and any outstanding convertible notes ahead of the management presentation.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
      {
        id: "ai-1-3",
        title: "Prepare deal committee memo",
        description:
          "Draft a 2-page memo summarizing the investment thesis, valuation range, key risks, and recommended next steps for the deal committee review on Friday.",
        assignee: "Rachel Torres",
        checked: false,
      },
      {
        id: "ai-1-4",
        title: "Pull cohort-level retention data from Meridian",
        description:
          "Request quarterly cohort retention data from Meridian's finance team to validate the 125% NRR figure at the account segment level.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Kevin Walsh",
        text: "Let's start with Meridian. Rachel, where are we on the financials? I want to make sure we're fully buttoned up before the management presentation next Thursday.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "I've pulled the Q4 numbers. ARR is at $18M, up 45% year-over-year. Gross margins are at 72% and trending upward. The unit economics are solid — 125% net revenue retention and 18-month CAC payback.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "That NRR number looks strong on the surface, but I want to see it validated at the cohort level. Can we get that data segmented by account size? I've seen situations where a couple of large upsells mask churn in the mid-market.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Good call. I can reach out to their CFO and request the cohort breakdown. I'll ask for it alongside the updated cap table we still need.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "On the comp set — where are we landing on the valuation range? I want to make sure we're anchoring to the right peer group given how quickly multiples have moved this quarter.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "The comp set is looking favorable. Similar stage SaaS companies in supply chain are trading at 10-14x forward revenue. If you expand to broader vertical SaaS, the range widens to 8-16x. Meridian's growth rate puts them at the higher end — I'd say 12x is a defensible base case.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "At 12x forward revenue, that implies roughly $313M enterprise value. The bull case gets you to $400M-plus if net retention holds above 120% and they can demonstrate the margin expansion story we're modeling.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "What's the customer concentration risk? I remember that being flagged in the initial screen. That's something the deal committee is going to push on hard.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "Top 10 accounts are 38% of ARR, which is elevated for this stage. Their largest single customer is about 8% of revenue. I need to stress-test what happens if one or two of those large accounts churn — I'll build that into the sensitivity analysis.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That concentration number is a real concern. For context, most of the recent successful sell-side mandates we've run in vertical SaaS had top-10 concentration below 30%. We should frame this as a risk but also show the path to diversification — their pipeline might tell that story.",
        isMe: true,
      },
      {
        speaker: "Kevin Walsh",
        text: "Exactly. Rachel, make sure the model includes a scenario where we assume accelerated customer acquisition in the mid-market segment. If they can show a credible path to bringing concentration below 30% within 18 months, that de-risks the thesis significantly.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "I also want to flag that we still need the updated cap table from their CFO. There were some convertible notes from their Series A that might have unusual terms. We need to understand the fully diluted picture before we finalize the valuation.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "Agreed. I'll also need the option pool details — last I heard they were planning to expand it before the next round, which could impact dilution by 3-5 percentage points.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "Okay, let's talk timeline. We need the full 3-statement model done by Wednesday so we can review it internally before the management presentation on Thursday. Rachel, can you take point on building that out?",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "Yes, I'll have a draft ready by end of day Tuesday for your review. That gives us a full day of buffer. I'll include the income statement, balance sheet, and cash flow projections through FY28E with the sensitivity analysis on customer concentration and NRR.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I'll start drafting the deal committee memo in parallel. Two pages covering the investment thesis, valuation range, key risks, and our recommended next steps. Kevin, anything specific you want me to emphasize for the committee?",
        isMe: true,
      },
      {
        speaker: "Kevin Walsh",
        text: "Emphasize the market timing angle. Supply chain software is having a moment — three companies in the space have raised north of $100M in the last six months. Meridian is well-positioned to benefit from that tailwind, and that narrative will resonate with the committee.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "One more thing — should we include a preliminary view on potential acquirers? Even if this is a capital raise, the committee likes to see the strategic exit landscape as part of the thesis.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "Yes, good idea. Include a short section on 3-4 logical strategic acquirers. Keep it high-level for now — we can go deeper if the committee asks for it. Alright, I think we're aligned. Let's reconvene Wednesday afternoon to review everything before Thursday.",
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
    participants: ["Sarah Mitchell", "David Park", "Michael Chen"],
    tags: ["Weekly"],
    summary:
      "Reviewed pipeline across TMT coverage with three new mandates under evaluation. David presented updated AI sector valuation trends showing significant re-rating in public markets, with private market multiples expected to converge by Q3. Discussed the DataVault LBO in detail, including leverage concerns around cloud infrastructure spend growing faster than revenue. Agreed to prioritize the CloudSync engagement and refresh the sector comp table this week.",
    keyPoints: [
      {
        title: "Pipeline update",
        description:
          "Three new mandates under evaluation: CloudSync (Series C advisory), NeuralPath (M&A sell-side), and Vantage Systems (growth equity). Combined potential fees of $4.2M.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "AI sector valuations",
        description:
          "Public AI companies re-rated 15-20% higher in Q1. Private market multiples lagging by 2-3 turns. Expect convergence by Q3 as more AI companies go public.",
        participants: ["David Park"],
      },
      {
        title: "DataVault LBO update",
        description:
          "Leverage ratio at 4.5x with the proposed structure. Sponsor consortium interested but pushing for management rollover. Sensitivity analysis shows 18-22% IRR in base case.",
        participants: ["David Park", "Michael Chen"],
      },
      {
        title: "Cloud infrastructure cost concerns",
        description:
          "DataVault's cloud spend growing at 35% YoY versus 28% revenue growth. Need to model the impact of margin compression if this trend continues through the hold period.",
        participants: ["Michael Chen"],
      },
      {
        title: "IPO pipeline implications",
        description:
          "Three new S-1 filings in the AI space in the last month. This wave of IPOs will provide fresh public comp data and could catalyze private market re-pricing.",
        participants: ["David Park", "Michael Chen"],
      },
    ],
    actionItems: [
      {
        id: "ai-2-1",
        title: "Update AI sector comp table",
        description:
          "Refresh the Q1 comparable company analysis with latest trading multiples and recent transaction comps for the TMT coverage deck.",
        assignee: "David Park",
        checked: false,
      },
      {
        id: "ai-2-2",
        title: "Schedule CloudSync intro call",
        description:
          "Coordinate with CloudSync's CEO for an introductory meeting next week. Prepare a 1-page engagement overview.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
      {
        id: "ai-2-3",
        title: "Finalize DataVault LBO memo",
        description:
          "Complete the sponsor presentation with updated leverage scenarios and management rollover assumptions. Due by Thursday.",
        assignee: "David Park",
        checked: false,
      },
      {
        id: "ai-2-4",
        title: "Model DataVault cloud cost scenarios",
        description:
          "Build a sensitivity analysis around cloud infrastructure spend as a percentage of revenue through the 5-year hold period. Include margin impact on IRR.",
        assignee: "Michael Chen",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sarah Mitchell",
        text: "Let's run through the pipeline. We have three new mandates under evaluation this week — CloudSync for a Series C advisory, NeuralPath on a sell-side M&A, and Vantage Systems looking at growth equity. Combined potential fees are around $4.2M.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That's a strong pipeline week. Which of those three do you think has the highest probability of converting to a signed engagement? I want to make sure we're prioritizing the right conversations.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "CloudSync is the most likely — their CEO reached out directly and they're targeting a close within 60 days. NeuralPath is high-value but the board hasn't fully aligned on timing yet. Vantage is more exploratory at this stage.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "On the AI sector side, public comps have re-rated significantly in Q1. We're seeing 15-20% valuation increases across the board. The recent earnings cycle was strong — most AI infrastructure companies beat revenue estimates by 5-10%.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "Private markets are still lagging by about 2-3 turns on EV/Revenue. That gap should close as more AI companies file for IPOs. We've seen three new S-1s in the last month alone, and there are at least two more expected before end of Q2.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That convergence dynamic is important for how we position both the CloudSync and NeuralPath engagements. If private multiples are about to re-rate, the timing argument for both a raise and a sale gets stronger.",
        isMe: true,
      },
      {
        speaker: "David Park",
        text: "Exactly. I'm planning to refresh the full sector comp table this week to capture the Q1 re-rating. I'll include the recent IPO filings as well since those give us forward-looking data points that are hard to get otherwise.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Good context for the CloudSync engagement. David, where are we on the DataVault LBO? That's been sitting in diligence for a while now.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "Leverage ratio is at 4.5x with the current structure. The sponsor consortium — it's three PE firms — is interested but they're pushing hard on management rollover. They want at least 20% rollover from the founder and C-suite. I'm running sensitivity scenarios and the base case is showing 18-22% IRR.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "One thing I flagged in my review — DataVault's cloud infrastructure costs are growing at 35% year-over-year, but revenue is only growing at 28%. That's a margin compression story that could really hurt the IRR if it continues through the hold period.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "That's a fair point. The management team claims they'll hit an inflection point on cloud costs in FY26 as they migrate to reserved instances and optimize their data pipeline. But I want to model the downside scenario where that migration is delayed or the savings are smaller than projected.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Have the sponsors commented on the cloud cost issue? In my experience, PE firms doing tech LBOs are increasingly focused on infrastructure efficiency as a value creation lever. If they see it as fixable, it could actually strengthen the thesis rather than weaken it.",
        isMe: true,
      },
      {
        speaker: "Michael Chen",
        text: "Good question. The lead sponsor brought it up in our last call and they have an operating partner with a cloud optimization background. So they see it as an opportunity, not a dealbreaker. But they want our model to quantify the impact both ways.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Makes sense. David, let's make sure the sponsor presentation includes a clear view on the cloud cost trajectory — both the management case and the stress case. That'll show we've done the work and it gives the sponsors the data they need to move forward.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "I'll have the updated sponsor deck ready by Thursday. Michael, can you own the cloud cost sensitivity analysis? I want a standalone page in the appendix that shows IRR impact across three scenarios.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "Will do. I'll also pull benchmarks from comparable SaaS companies that went through similar cloud optimization programs. That'll give us a reality check on management's assumptions.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Alright, let's wrap up. David, comp table refresh and DataVault deck by Thursday. Michael, cloud cost analysis by Wednesday so David can incorporate it. I'll get the CloudSync intro call scheduled for next week. Anything else before we close?",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "One quick thing — can we make sure the comp table includes the three recent S-1 filers? Those forward projections will be useful for both the CloudSync and NeuralPath conversations. Otherwise I think we're in good shape.",
        isMe: true,
      },
    ],
  },
  {
    id: "mtg-3",
    title: "Sarah / Justin 1:1",
    date: daysAgo(0),
    time: "11:30 AM",
    endTime: "12:00 PM",
    duration: "30 min",
    platform: "Zoom",
    privacy: "private",
    participants: ["Sarah Mitchell"],
    tags: ["1:1"],
    summary:
      "Discussed Sentra adoption progress and strategy for expanding the pilot across IB Coverage and TMT. Active daily users grew from 34 to 52 this week with strong feedback from the Coverage team. Sarah flagged IT Security's SSO requirements as the main blocker for the Compliance team pilot, with a target resolution date of March 24. Also discussed the expansion proposal from 60 to 150 seats and the need to position Sentra against Glean and Copilot alternatives in the pricing proposal.",
    keyPoints: [
      {
        title: "Adoption momentum",
        description:
          "Active daily users grew from 34 to 52 this week. IB Coverage team onboarded 14 users on Monday. Meeting capture volume up 43% week-over-week.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "SSO blocker",
        description:
          "IT Security requires custom SAML claim mapping before Compliance team can start their pilot. Target SSO go-live is March 24.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "Expansion proposal",
        description:
          "Discussing expansion from 60 to 150 seats. Enterprise tier at $42/seat/month. Need budget approval by April 15 for Q2 contract.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "Coverage team feedback",
        description:
          "VP-level feedback indicates Sentra replaces 30 minutes of manual CRM updates per client call. Main feature request is a Dealogic integration for deal pipeline sync.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "Competitive positioning",
        description:
          "Need to clearly articulate Sentra's advantages over Glean (document search focus) and Copilot (shallow meeting features) in the expansion proposal. Meeting intelligence depth is the key differentiator.",
        participants: ["Sarah Mitchell"],
      },
    ],
    actionItems: [
      {
        id: "ai-3-1",
        title: "Draft pricing proposal for 150-seat expansion",
        description:
          "Prepare a detailed pricing proposal with enterprise tier features, volume discounts, and comparison against Glean and Copilot alternatives.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-3-2",
        title: "Schedule Compliance team pilot kickoff",
        description:
          "Coordinate with Priya Gupta in Compliance to schedule the pilot kickoff for March 17, contingent on SSO approval.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
      {
        id: "ai-3-3",
        title: "Compile VP-level testimonials from Coverage team",
        description:
          "Gather 3-4 specific quotes from Coverage team VPs about time saved and workflow improvements. Include in the expansion proposal as proof points.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
      {
        id: "ai-3-4",
        title: "Follow up with IT Security on SSO timeline",
        description:
          "Confirm the March 24 target for SAML claim mapping completion. Escalate if there are any blockers that could push the date.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sarah Mitchell",
        text: "The adoption numbers are looking great this week. We went from 34 to 52 active daily users after the IB Coverage onboarding on Monday. Meeting capture volume is up 43% week-over-week as well.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That's a 53% jump in daily actives week-over-week. What's the feedback from the Coverage team specifically? I want to understand what's resonating with them so we can use it in the expansion pitch.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Very positive overall. One VP told me it replaces about 30 minutes of manual CRM updates after every client call. The automatic logging of action items and commitments is the feature they mention most. The main ask is a Dealogic integration, which I know isn't on the roadmap yet.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "The Dealogic ask makes sense — that's the backbone of their deal pipeline tracking. I'll flag it to our product team as a feature request. Can you get me 3 or 4 specific quotes from those VPs? Having named testimonials in the expansion proposal will be much more compelling than aggregate stats.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Absolutely, I'll reach out to the three VPs who've been most vocal and get their permission to quote them. I think Marcus in Healthcare Coverage and Lisa in Industrials would be great advocates.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Perfect. Now what's the status on the Compliance team pilot? Last I heard it was blocked on SSO.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Still blocked. IT Security needs custom SAML claim mapping before they'll approve the Compliance team's access. The issue is that Compliance has stricter attribute requirements for their SSO federation than what the standard config supports. Priya's team is eager to start but we can't move until that's resolved.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "What's the timeline looking like? Is there anything we can do to accelerate it, or is this purely on IT Security's side?",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Target is March 24 for SSO go-live. The identity team has it in their sprint but it's not the top priority. I think a nudge from our side might help — maybe you could ping their manager to emphasize that we have 90 additional seats contingent on this being resolved.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I'll reach out today. Making the business case clear — that this is blocking a six-figure expansion — should help move it up in their queue. Let's talk about the expansion proposal itself. Where are we on the pricing side?",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "We're looking at going from 60 to 150 seats. At the enterprise tier of $42 per seat per month, that's roughly $75,600 annually. We need budget approval by April 15 to get the Q2 contract signed. The budget holder is the TMT group head and he'll want to see a clear ROI case.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "We need to position this against the alternatives clearly. Glean is $65 per seat and it's really a document search tool — their meeting capabilities are minimal. Copilot is $30 but the meeting features are shallow and the organizational memory piece doesn't exist. Our value prop is strongest for meeting-heavy teams, and IB Coverage is exactly that.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Agreed. I'd also suggest we include the time savings data in the proposal. If each of the 150 users saves 30 minutes per day on CRM updates and meeting follow-ups, that's a significant productivity gain we can quantify in dollar terms.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Good thinking. I'll draft the full pricing proposal this week with the competitive comparison, ROI analysis, and the testimonials once you have them. Let's target having a polished version ready by next Monday so we can socialize it internally before the April 15 deadline.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Sounds like a plan. I'll have the testimonials to you by Thursday. One more thing — should we invite Priya to the expansion discussion? Having Compliance's buy-in would strengthen the case, even if their pilot hasn't started yet.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Yes, definitely loop Priya in. If she can speak to the Compliance team's intent to adopt, it shows demand beyond just the IB Coverage group. That cross-functional pull is exactly what budget holders want to see.",
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
    participants: ["David Park", "Michael Chen", "Priya Gupta"],
    tags: ["Evaluation"],
    summary:
      "Second round of AI vendor evaluations comparing Sentra, Glean, and Microsoft Copilot against JPM's enterprise requirements. Priya presented updated security assessment results showing Sentra passed initial review with two pending items around penetration testing and data retention alignment. The team discussed feature trade-offs in depth, with consensus that Sentra's meeting intelligence depth is the strongest differentiator for JPM's meeting-heavy workflow. Decision timeline moved up to March 21 to align with the pilot evaluation period.",
    keyPoints: [
      {
        title: "Security assessment",
        description:
          "Sentra passed initial security review. Pending items: penetration test report and data retention policy alignment (JPM requires 7-year, Sentra default is 2-year).",
        participants: ["Priya Gupta"],
      },
      {
        title: "Feature comparison",
        description:
          "Sentra leads on meeting intelligence depth and organizational memory. Glean stronger on document search. Copilot wins on integration breadth but meeting features are shallow.",
        participants: ["David Park"],
      },
      {
        title: "Pricing comparison",
        description:
          "Sentra: $42/seat/month. Glean: $65/seat. Copilot: $30/seat (bundled). Sentra's value proposition strongest for meeting-heavy teams.",
        participants: ["Michael Chen"],
      },
      {
        title: "Data retention alignment",
        description:
          "JPM requires 7-year data retention for regulatory compliance. Sentra's default is 2-year but their enterprise team confirmed they can configure custom retention policies for financial services clients.",
        participants: ["Priya Gupta", "Michael Chen"],
      },
      {
        title: "Integration requirements",
        description:
          "Key integration needs: Salesforce CRM, Bloomberg Terminal, Dealogic, and internal deal management systems. Sentra has Salesforce and is building Dealogic. Copilot has broadest integration set but lacks depth.",
        participants: ["David Park"],
      },
    ],
    actionItems: [
      {
        id: "ai-4-1",
        title: "Request penetration test report from Sentra",
        description:
          "Email Sentra's security team for their latest pen test results. Required before IT Security will approve production deployment.",
        assignee: "Priya Gupta",
        checked: false,
      },
      {
        id: "ai-4-2",
        title: "Build vendor comparison scorecard",
        description:
          "Create a weighted scoring matrix across security, features, pricing, and integration for the evaluation committee presentation.",
        assignee: "David Park",
        checked: false,
      },
      {
        id: "ai-4-3",
        title: "Confirm custom data retention capability with Sentra",
        description:
          "Get written confirmation from Sentra's enterprise team that they can configure 7-year data retention for JPM's deployment. Need this documented for the compliance review.",
        assignee: "Priya Gupta",
        checked: false,
      },
      {
        id: "ai-4-4",
        title: "Survey pilot users on feature priorities",
        description:
          "Send a quick survey to the 60 pilot users asking them to rank their top 5 features and identify any gaps. Results will inform the weighted scorecard.",
        assignee: "Michael Chen",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "David Park",
        text: "Let's review where we are on the AI vendor evaluation. We need to have a recommendation ready by March 21, which is sooner than we originally planned. Priya, can you walk us through the security assessment results?",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "Sure. Sentra passed the initial security review — their SOC 2 Type II is clean and their encryption standards meet our requirements. Two pending items though: we still need their penetration test report, and their default data retention is 2 years versus our 7-year requirement.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "On the data retention piece, I spoke with Sentra's enterprise team last week. They confirmed they can configure custom retention policies for financial services clients. It's not a default setting but it's something they've done for other banks. We just need to get that in writing.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "That's helpful. I'll follow up to get formal documentation. Without the 7-year retention in the contract, our compliance team won't sign off. It's non-negotiable given our regulatory obligations.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "How did Glean and Copilot fare on the security assessment? I want to make sure we're comparing apples to apples across all three vendors.",
        isMe: true,
      },
      {
        speaker: "Priya Gupta",
        text: "Glean passed with no issues — they already have financial services clients and their retention policies are configurable out of the box. Copilot inherits Microsoft's enterprise security posture, so it's compliant by default since we're already a Microsoft shop. On pure security, Copilot has the easiest path.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "Security is table stakes though — all three can get there. The real differentiator is the feature set. I've been doing a deep comparison over the past two weeks. Sentra leads significantly on meeting intelligence — the transcript analysis, action item extraction, and organizational memory features are genuinely best-in-class.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "On the pricing side, Sentra at $42 per seat is the middle option. Glean is $65 per seat, which is steep, but they have the strongest document search. Copilot is $30 per seat bundled into our existing M365 agreement, but the meeting features are much shallower.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "The pricing delta between Sentra and Copilot is only $12 per seat. If Sentra saves each user even 20 minutes a day on meeting follow-ups — and we're hearing 30 minutes from the pilot — the ROI case writes itself. The question is whether Glean's document search adds enough value to justify a 55% premium over Sentra.",
        isMe: true,
      },
      {
        speaker: "David Park",
        text: "I don't think it does for our use case. Our teams spend 60% of their day in meetings. That's where the value is concentrated. Glean would be the better choice for a research-heavy team, but for investment banking coverage, meeting intelligence is the killer feature.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "One thing to consider — Copilot has the broadest integration set by far. Bloomberg, Salesforce, all the Microsoft suite. Sentra has Salesforce and they're building a Dealogic connector, but the integration story is still developing.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "That's a fair point, but integrations can be built. The core AI capability is much harder to replicate. I've been watching the pilot closely and the way Sentra captures institutional knowledge across meetings is something neither Glean nor Copilot can match right now.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I think we're converging on a recommendation. David, can you build a weighted scorecard that captures all of this — security, features, pricing, and integration — so we have something concrete for the evaluation committee? Weight the categories based on what matters most for IB Coverage specifically.",
        isMe: true,
      },
      {
        speaker: "David Park",
        text: "Already started it. I'll have a draft by end of week. I'm thinking 30% meeting intelligence, 25% security and compliance, 20% pricing, 15% integrations, and 10% ease of deployment. Does that weighting feel right?",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "I'd bump security to 30% and meeting intelligence to 25%. Given our regulatory environment, the compliance team will scrutinize security more heavily than feature depth. We need the scorecard to reflect what the decision-makers actually care about.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "Agreed with Michael. Security and compliance should be the top weighted category. I'd also suggest we survey the pilot users to get quantitative data on which features they actually use most. That'll make the scorecard evidence-based rather than opinion-based.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "Fair enough, I'll adjust the weights and incorporate pilot user feedback. Michael, can you own the user survey? Keep it short — five questions max — and get it out by end of day tomorrow so we have results in time.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Let's also make sure we have the pen test report and retention confirmation from Sentra before the March 21 deadline. Those are the two outstanding items that could derail the recommendation. Priya, can you follow up on both this week?",
        isMe: true,
      },
      {
        speaker: "Priya Gupta",
        text: "I'll send the requests today. I have a good contact on Sentra's security team from the initial review, so I'm optimistic we can get both resolved quickly. If there are any delays, I'll escalate immediately so we're not scrambling at the deadline.",
        isMe: false,
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
    participants: ["Kevin Walsh", "Rachel Torres", "Sarah Mitchell"],
    tags: ["Standup"],
    summary:
      "Quick standup covering active deals and weekly priorities. Kevin flagged the NeuralPath mandate as accelerating significantly — their board wants a term sheet by end of month with three potential acquirers already identified. Rachel confirmed the Meridian model will be ready by Wednesday with the customer concentration stress test incorporated. Sarah provided a pipeline overview showing 12 active engagements with $18M in potential fees, and the team discussed prioritization across late-stage deals.",
    keyPoints: [
      {
        title: "NeuralPath acceleration",
        description:
          "NeuralPath's board wants to move fast on the sell-side process. Three potential acquirers already identified. Target: preliminary term sheet by March 28.",
        participants: ["Kevin Walsh"],
      },
      {
        title: "Meridian model status",
        description:
          "Rachel confirmed she'll have the draft 3-statement model ready by Wednesday. Will incorporate the customer concentration stress test Kevin flagged.",
        participants: ["Rachel Torres"],
      },
      {
        title: "Coverage pipeline",
        description:
          "12 active engagements across TMT coverage. 4 in late-stage diligence, 3 in evaluation, 5 in early outreach. Total potential fee pool: $18M.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "NeuralPath acquirer profile",
        description:
          "Ideal acquirers are AI infrastructure companies with $500M+ market cap and demonstrated M&A track record. Kevin identified three fits and wants the shortlist expanded to five with detailed profiles.",
        participants: ["Kevin Walsh", "Rachel Torres"],
      },
    ],
    actionItems: [
      {
        id: "ai-5-1",
        title: "Identify acquirer shortlist for NeuralPath",
        description:
          "Research and rank potential strategic and financial acquirers for NeuralPath. Focus on AI infrastructure companies with M&A track record.",
        assignee: "Rachel Torres",
        checked: false,
      },
      {
        id: "ai-5-2",
        title: "Update coverage pipeline tracker",
        description:
          "Refresh the master pipeline spreadsheet with latest stage movements, fee estimates, and probability weightings.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
      {
        id: "ai-5-3",
        title: "Prepare NeuralPath CIM outline",
        description:
          "Draft a confidential information memorandum outline for NeuralPath including company overview, market opportunity, financial summary, and growth strategy sections.",
        assignee: "Rachel Torres",
        checked: false,
      },
      {
        id: "ai-5-4",
        title: "Schedule NeuralPath board alignment call",
        description:
          "Coordinate with NeuralPath's CEO to schedule a call with their board to align on valuation expectations and process timeline before engaging acquirers.",
        assignee: "Kevin Walsh",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Kevin Walsh",
        text: "Quick updates this morning. Big one first — NeuralPath is accelerating significantly. Their board met yesterday and the consensus is to move fast on the sell-side. I've already identified three potential acquirers but I want to expand that to a full shortlist of five.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "What's driving the urgency on NeuralPath's side? Is this competitive pressure or are they seeing a window in the market they want to capitalize on?",
        isMe: true,
      },
      {
        speaker: "Kevin Walsh",
        text: "Both, actually. They've had two inbound acquisition inquiries in the last month, which tells you the market sees them as attractive. But they also know that AI infrastructure valuations are elevated right now and they don't want to wait for the cycle to turn. Their board wants a preliminary term sheet by March 28.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "That's an aggressive timeline. Do we have enough diligence materials to start the outreach, or do we need to build a CIM from scratch?",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "We'll need a CIM, but we can start with an outline and use the teaser to initiate conversations with the top acquirers while we build it out. Rachel, can you draft the CIM outline by Friday? Focus on company overview, market opportunity, financial summary, and growth strategy.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "I can do that. On Meridian — I'm making good progress on the 3-statement model. I'll have the draft ready by Wednesday as planned. I'm building in the customer concentration stress test you flagged yesterday, including scenarios where the top 1, 2, and 3 accounts churn independently.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "Good. Make sure the Meridian model also includes the mid-market acquisition acceleration scenario we discussed. If they can credibly show a path to reducing top-10 concentration below 30%, that changes the risk narrative completely.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Pipeline update for the week: we have 12 active engagements across TMT coverage. Four are in late-stage diligence — Meridian, DataVault, and two others. Three are in evaluation including NeuralPath, and five are in early outreach. Total potential fee pool is about $18M.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That $18M fee pool is strong. What's the probability-weighted number? I want to make sure we have a realistic view for the quarterly forecast.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Probability-weighted, we're looking at about $9.2M. The late-stage deals carry 60-70% probability, the evaluation-stage ones are at 30-40%, and early outreach is 10-15%. I'll update the full pipeline tracker today with the latest stage movements.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "On NeuralPath specifically — Rachel, I need the acquirer shortlist by Thursday. Focus on AI infrastructure companies with at least $500M market cap and a demonstrated M&A track record. I want companies that have done at least two acquisitions in the last 18 months.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "Got it. I already have three names — I'll expand to five with detailed profiles including acquisition history, strategic rationale, and estimated capacity to pay. Should I also look at financial sponsors or just strategics?",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "Strategics only for now. NeuralPath's board has a strong preference for a strategic exit — they want the team to stay together and continue building. A PE buyer would likely bring in their own management, which doesn't align with what the founders want.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Makes sense. Kevin, should we also schedule a call with NeuralPath's board before we start reaching out to acquirers? We want to make sure everyone's aligned on valuation expectations and process timeline. The last thing we want is to bring a strong offer and have the board reject it because expectations weren't set properly.",
        isMe: true,
      },
      {
        speaker: "Kevin Walsh",
        text: "Absolutely. I'll coordinate with their CEO to get that scheduled for early next week. Good call — alignment upfront saves us from painful negotiations later. Alright, let's execute. Rachel on Meridian model and NeuralPath shortlist, Sarah on the pipeline tracker. Let's reconvene Thursday morning.",
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
      "Sarah Mitchell",
      "David Park",
      "Michael Chen",
      "Priya Gupta",
    ],
    tags: ["Pilot"],
    summary:
      "Kicked off the expanded Sentra pilot with stakeholders from Technology, IB Coverage, and Compliance. Established clear evaluation parameters including 60 seats across three teams, success metrics targeting 70%+ weekly active rate and 90%+ meeting capture, and strict data governance requirements. Priya emphasized the need for audit log retention aligned with JPM's compliance requirements and data residency in US-East. The pilot runs through March 31 with a decision checkpoint on March 21 to determine whether to proceed with the full 150-seat expansion.",
    keyPoints: [
      {
        title: "Pilot scope",
        description:
          "60 seats across three teams: TMT Group (18 users), IB Coverage (28 users), Technology & Innovation (14 users). Evaluation period through March 31.",
        participants: ["Sarah Mitchell", "David Park"],
      },
      {
        title: "Success metrics",
        description:
          "Target: 70%+ weekly active rate, 90%+ meeting capture rate, measurable reduction in manual CRM updates (baseline: 2 hours/week per team lead).",
        participants: ["David Park"],
      },
      {
        title: "Data governance",
        description:
          "All data stored in US-East region. No client-facing meeting content exported outside JPM network. Audit log retention aligned with compliance requirements.",
        participants: ["Priya Gupta", "Michael Chen"],
      },
      {
        title: "Training and onboarding plan",
        description:
          "Three group training sessions scheduled — one per team. Quick-start guide and FAQ document to be distributed before training. Each team has a designated Sentra champion to handle day-to-day questions.",
        participants: ["Sarah Mitchell"],
      },
      {
        title: "Decision checkpoint",
        description:
          "March 21 evaluation checkpoint to review pilot data and make a go/no-go recommendation on the 150-seat expansion. Evaluation committee includes stakeholders from all three pilot teams.",
        participants: ["David Park", "Sarah Mitchell"],
      },
    ],
    actionItems: [
      {
        id: "ai-6-1",
        title: "Distribute onboarding guides to pilot teams",
        description:
          "Send the Sentra quick-start guide and FAQ document to all 60 pilot participants. Include calendar invite for group training session.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
      {
        id: "ai-6-2",
        title: "Set up weekly adoption dashboard",
        description:
          "Create a tracking dashboard showing daily active users, meeting capture rates, and feature usage by team. Share with evaluation committee.",
        assignee: "David Park",
        checked: false,
      },
      {
        id: "ai-6-3",
        title: "Review data governance policy with Sentra",
        description:
          "Confirm data retention, encryption, and audit log requirements are met. Document any gaps for IT Security review.",
        assignee: "Priya Gupta",
        checked: false,
      },
      {
        id: "ai-6-4",
        title: "Identify team champions for each pilot group",
        description:
          "Designate one power user per team (TMT, IB Coverage, Technology) to serve as the go-to resource for questions and feedback collection during the pilot period.",
        assignee: "Sarah Mitchell",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Sarah Mitchell",
        text: "Thanks everyone for joining. Today we're kicking off the expanded Sentra pilot. We have 60 seats allocated across three teams — TMT Group with 18 users, IB Coverage with 28, and Technology & Innovation with 14. The evaluation period runs through March 31.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Before we dive into the details, I want to set some context. Sentra is the meeting intelligence platform we've been evaluating alongside Glean and Copilot. This pilot is our chance to gather real usage data to inform the vendor decision. The more actively people use it, the better data we'll have to make the right call.",
        isMe: true,
      },
      {
        speaker: "David Park",
        text: "Agreed. For success metrics, I'd like to target 70% weekly active rate and 90% meeting capture across all pilot teams. We should also measure the reduction in manual CRM update time — our baseline survey showed team leads spending about 2 hours per week on that today.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Those metrics are solid. I'd also suggest we track feature adoption depth — not just whether people log in, but which features they're actually using. If everyone's just reading transcripts but nobody's using the action item tracking, that tells us something different than broad adoption.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "Good point. I can configure the analytics to track feature-level engagement. We'll be able to see usage broken down by transcript views, action item interactions, search queries, and the organizational memory features.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "From a compliance perspective, I need to be very clear about the data governance requirements. All data must stay in US-East region — no exceptions. Client-facing meeting content cannot be exported outside our network. And I need audit logs retained for a minimum of 7 years to align with our regulatory obligations.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Priya, we've already confirmed with Sentra's infrastructure team that US-East is their default region for enterprise deployments. On the 7-year retention, their default is 2 years but they've confirmed they can configure custom retention for financial services clients. Michael spoke with them last week about this.",
        isMe: true,
      },
      {
        speaker: "Michael Chen",
        text: "That's right. I've confirmed the data residency requirements with Sentra's infrastructure team. US-East is locked in. Audit logs are available via API and can be configured for the retention period we need. I'm still waiting on formal documentation for the 7-year commitment, but the verbal confirmation was clear.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "Verbal isn't sufficient for our compliance team — we'll need that in writing before I can sign off on the production deployment. But for the pilot period, I'm comfortable proceeding. Just make sure no one is using Sentra for any conversations involving material non-public information until we have the full compliance review completed.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "That's an important constraint. Sarah, can you make sure the onboarding guide includes a clear section on what types of meetings should and shouldn't be captured during the pilot? We don't want anyone accidentally recording a deal discussion that involves MNPI.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Absolutely. I'll add a section to the quick-start guide with specific examples of approved and restricted meeting types. I'll also flag it prominently in the group training sessions. Speaking of which — I'm planning three training sessions, one per team, in the first week.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "We should also designate a champion within each team — someone who's a power user and can handle day-to-day questions without everything funneling through Sarah. It reduces the support burden and gives us embedded advocates in each group.",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Great idea. I have a few people in mind already — Marcus in TMT has been an early adopter and Lisa in IB Coverage has been very vocal about wanting more AI tools. I'll reach out to them this week.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "I'll set up the weekly adoption dashboard before the pilot goes live. It'll show daily active users, meeting capture rates, and feature usage broken down by team. I'll share it with this group and the evaluation committee. We should review it together every Monday.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "One more technical note — the Sentra desktop app needs to be whitelisted by our endpoint security team. I've already submitted the request but it typically takes 48-72 hours. So the IB Coverage team, which is the largest group, should be ready to go by Thursday.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Good. And let's be clear about the decision timeline — March 21 is our evaluation checkpoint. That gives us about two and a half weeks of pilot data before we need to make a go/no-go recommendation on the 150-seat expansion. The budget request needs to be submitted by April 15, so March 21 gives us enough runway for approvals.",
        isMe: true,
      },
      {
        speaker: "Priya Gupta",
        text: "I'll have the data governance review completed before March 21 as well. If there are any gaps between Sentra's capabilities and our requirements, I want them identified and addressed before we commit to a larger deployment.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Perfect. So the plan is — onboarding guides go out this week, training sessions next week, pilot officially live through March 31, and decision checkpoint on March 21. I'll send a summary email to everyone after this call. Let's make this a success.",
        isMe: false,
      },
    ],
  },
];
