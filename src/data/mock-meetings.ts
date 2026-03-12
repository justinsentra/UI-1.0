import type { Meeting, TranscriptEntry } from "../types";

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

function repeatTranscript(
  entries: TranscriptEntry[],
  times = 10,
): TranscriptEntry[] {
  return Array.from({ length: times }, () => entries).flat();
}

function expandTranscripts(list: Meeting[]): Meeting[] {
  for (const m of list) {
    if (m.transcript.length > 0) {
      m.transcript = repeatTranscript(m.transcript);
    }
  }
  return list;
}

export const meetings: Meeting[] = expandTranscripts([
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
      "Reviewed Meridian Corp deal status and financial positioning ahead of management presentation. Discussed revenue trajectory, key assumptions for the 3-statement model, and outstanding diligence items. Agreed to build the financial model this week.",
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
    ],
    transcript: [
      {
        speaker: "Kevin Walsh",
        text: "Let's start with Meridian. Rachel, where are we on the financials?",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "I've pulled the Q4 numbers. ARR is at $18M, up 45% year-over-year. Gross margins are at 72% and trending upward. The unit economics are solid — 125% net revenue retention and 18-month CAC payback.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "The comp set is looking favorable too. Similar stage SaaS companies in supply chain are trading at 10-14x forward revenue. Meridian's growth rate puts them at the higher end.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "What's the customer concentration risk? I remember that being flagged in the initial screen.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "Top 10 accounts are 38% of ARR, which is elevated. We need to stress-test what happens if their largest customer churns. I'll build that into the sensitivity analysis.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "Good. We need the full 3-statement model done by Wednesday so we can review it before the management presentation on Thursday. Rachel, can you take point on building that out?",
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
      "Reviewed pipeline across TMT coverage. Three new mandates in evaluation. Discussed AI sector valuation trends and the impact of recent IPO activity on comp multiples. David shared an update on the DataVault LBO analysis.",
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
    ],
    transcript: [
      {
        speaker: "Sarah Mitchell",
        text: "Let's run through the pipeline. We have three new mandates under evaluation this week — CloudSync, NeuralPath, and Vantage Systems.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "On the AI sector side, public comps have re-rated significantly in Q1. We're seeing 15-20% valuation increases across the board. Private markets are lagging by 2-3 turns though.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "That gap should close as more AI companies file. We've seen three new S-1s in the last month alone.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Good context for the CloudSync engagement. David, where are we on the DataVault LBO?",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "Leverage ratio is at 4.5x with the current structure. The sponsor consortium is interested but they're pushing hard on management rollover. I'm running sensitivity scenarios — base case is showing 18-22% IRR.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "What about the infrastructure costs? DataVault's cloud spend has been growing faster than revenue.",
        isMe: false,
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
      "Discussed Sentra adoption progress and strategy for expanding the pilot across IB Coverage and TMT. Sarah flagged IT Security's SSO requirements as the main blocker for the Compliance team pilot. Aligned on priorities for the weekly status update.",
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
    ],
    transcript: [
      {
        speaker: "Sarah Mitchell",
        text: "The adoption numbers are looking great this week. We went from 34 to 52 active daily users after the IB Coverage onboarding on Monday.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That's a 53% jump week-over-week. What's the feedback from the Coverage team specifically?",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Very positive. One VP said it replaces 30 minutes of manual CRM updates after every client call. The main ask is a Dealogic integration, which I know isn't on the roadmap yet.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Good to know. What's the status on the Compliance team pilot?",
        isMe: true,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Blocked by SSO. IT Security needs custom SAML claim mapping before they'll approve. Priya's team is eager but we can't move until that's resolved. Target is March 24.",
        isMe: false,
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
      "Second round of AI vendor evaluations comparing Sentra, Glean, and Microsoft Copilot against JPM's enterprise requirements. Priya presented updated security assessment results. Decision timeline moved up to March 21.",
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
    ],
    transcript: [
      {
        speaker: "David Park",
        text: "Let's review where we are on the AI vendor evaluation. Priya, can you walk us through the security assessment results?",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "Sentra passed the initial security review. Two pending items: we need their penetration test report, and their default data retention is 2 years versus our 7-year requirement.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "On the pricing side, Sentra at $42/seat is between Glean at $65 and Copilot at $30. But Copilot's meeting features are much shallower.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "The meeting intelligence depth is what makes Sentra compelling for our use case. Our teams spend 60% of their day in meetings. That's where the value is.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "Agreed. I'm comfortable moving forward with the pilot expansion pending the pen test results. Let's target a decision by March 21.",
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
      "Quick standup covering active deals and weekly priorities. Kevin flagged the NeuralPath mandate as accelerating — they want a term sheet by end of month. Rachel provided an update on the Meridian model timeline.",
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
    ],
    transcript: [
      {
        speaker: "Kevin Walsh",
        text: "Quick updates this morning. NeuralPath is accelerating — their board wants to move fast on the sell-side. I've already identified three potential acquirers.",
        isMe: false,
      },
      {
        speaker: "Rachel Torres",
        text: "On Meridian, I'll have the draft 3-statement model ready by Wednesday. I'm building in the customer concentration stress test you flagged yesterday.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Pipeline update: we have 12 active engagements. 4 in late-stage diligence, 3 in evaluation, 5 in early outreach. Total potential fee pool is about $18M.",
        isMe: false,
      },
      {
        speaker: "Kevin Walsh",
        text: "Good. Rachel, I need that NeuralPath acquirer shortlist by Thursday. Focus on AI infrastructure companies with M&A history. Sarah, can you get the pipeline tracker updated by EOD?",
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
      "Kicked off the expanded Sentra pilot with stakeholders from Technology, IB Coverage, and Compliance. Set expectations for the evaluation period, success metrics, and data governance requirements. Pilot runs through March 31.",
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
    ],
    transcript: [
      {
        speaker: "Sarah Mitchell",
        text: "Thanks everyone for joining. Today we're kicking off the expanded Sentra pilot. We have 60 seats allocated across TMT, IB Coverage, and Technology & Innovation.",
        isMe: false,
      },
      {
        speaker: "David Park",
        text: "For success metrics, I'd like to target 70% weekly active rate and 90% meeting capture. We should also measure the reduction in manual CRM update time.",
        isMe: false,
      },
      {
        speaker: "Priya Gupta",
        text: "From a compliance perspective, I need confirmation that all data stays in US-East and that client-facing content isn't exported outside our network.",
        isMe: false,
      },
      {
        speaker: "Michael Chen",
        text: "I've confirmed the data residency requirements with Sentra's infrastructure team. US-East is their default for enterprise clients. Audit logs are available via API.",
        isMe: false,
      },
      {
        speaker: "Sarah Mitchell",
        text: "Great. I'll distribute the onboarding guides this week and schedule the group training sessions. Pilot runs through March 31 with a decision checkpoint on March 21.",
        isMe: false,
      },
    ],
  },
]);
