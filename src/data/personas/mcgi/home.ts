import type { PersonaHomeData } from "@/data/personas";

export const homeData: PersonaHomeData = {
  suggestions: [
    "What happened in today's meetings?",
    "Summarize this week's deal flow activity",
    "Draft an investment memo for Sentra",
    "Which portfolio companies need attention?",
  ],
  artifacts: [
    {
      id: "mcgi-art-1",
      title: "Investment Memo — Sentra",
      description:
        "Generate a full investment memo pulling from deal discussions, product deep dive, and market data",
      type: "action",
      badge: "New",
      deepResearchPrompt: "Draft an investment memo for Sentra",
    },
    {
      id: "mcgi-art-2",
      reportId: "mcgi-rpt-pipeline-1",
      title: "Deal Flow Pipeline",
      description:
        "Weekly pipeline report covering screening decisions, DD approvals, and deployment pacing",
      type: "report",
      badge: "Updated",
    },
    {
      id: "mcgi-art-3",
      title: "AI Agent Framework Landscape",
      description:
        "Map the competitive landscape of AI agent orchestration platforms for MCGI thesis development",
      type: "action",
      deepResearchPrompt: "Map the AI agent framework landscape",
    },
  ],
  upcomingMeeting: {
    id: "mcgi-mtg-1",
    title: "Investment Committee — Q1 Pipeline Review",
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
    platform: "Zoom",
  },
  preMeetingBrief: {
    meetingTitle: "Investment Committee — Q1 Pipeline Review",
    meetingTime: "10:00 AM",
    meetingEndTime: "11:30 AM",
    attendees: [
      {
        name: "Kengo Morimoto",
        role: "CEO, MC Global Innovation",
        initials: "KM",
        lastSpoke: "3 days ago",
      },
      {
        name: "Ryotaro Nakamura",
        role: "Director, MC Global Innovation",
        initials: "RN",
        lastSpoke: "Yesterday",
      },
      {
        name: "Mihiro Nakamura",
        role: "Associate, MC Global Innovation",
        initials: "MN",
        lastSpoke: "Yesterday",
      },
      {
        name: "Takeshi Yamada",
        role: "VP Finance, MC Global Innovation",
        initials: "TY",
        lastSpoke: "1 week ago",
      },
    ],
    insights: [
      {
        heading: "Pipeline growing faster than expected",
        source: {
          quote:
            "We had 23 inbound referrals last week. That's up significantly. The MCGI brand is starting to get recognized in the Valley.",
          meetingTitle: "MCGI Weekly — Deal Flow & Operations",
          meetingDate: "Mar 3, 2026",
        },
        summary:
          "Inbound deal flow up 40% — may need to discuss tightening screening criteria to maintain quality while deploying at the right pace.",
      },
      {
        heading: "Sentra advancing as flagship investment candidate",
        source: {
          quote:
            "The meeting intelligence and commitment tracking could be very valuable for our portfolio companies as well. There's a strategic angle beyond just financial return.",
          meetingTitle: "Sentra — Product Deep Dive & Strategic Fit",
          meetingDate: "Mar 7, 2026",
        },
        summary:
          "Sentra due diligence progressing positively. Investment memo will be the key deliverable from this IC meeting. Expect committee to discuss entry valuation and check size.",
      },
      {
        heading: "Board pushing for increased climate tech allocation",
        source: {
          quote:
            "Board requesting increased allocation to climate tech given MC group sustainability commitments. Proposal to increase from 25% to 35% of new deployments.",
          meetingTitle: "Investment Committee — Q1 Pipeline Review",
          meetingDate: "Mar 10, 2026",
        },
        summary:
          "Climate tech allocation shift will affect pipeline prioritization. CarbonGrid and FluxMaterials benefit from this directive.",
      },
    ],
  },
};
