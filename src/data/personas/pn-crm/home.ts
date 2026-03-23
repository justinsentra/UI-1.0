import type { PersonaHomeData } from "@/data/personas";

export const homeData: PersonaHomeData = {
  suggestions: [
    "What happened in today's meetings?",
    "Summarize this week's user growth and retention metrics",
    "Draft the LP Summer 26 application",
    "Which investor intros are still pending?",
  ],
  artifacts: [
    {
      id: "pn-crm-art-radar",
      reportId: "pn-crm-radar-competitors-1",
      title: "Personal CRM Competitor Activity",
      description:
        "Molder launched a relationship score feature. Tribe raised $6M from Apex Ventures. Positioning impact assessment needed.",
      type: "radar",
      badge: "High",
    },
    {
      id: "pn-crm-art-1",
      title: "Pre-Seed Pitch Deck",
      description:
        "Update the pitch deck with latest user metrics, retention curves, and competitive positioning for investor meetings",
      type: "action",
      badge: "New",
      deepResearchPrompt:
        "Update the pre-seed pitch deck with our latest metrics and competitive positioning",
    },
    {
      id: "pn-crm-art-2",
      title: "LP Summer 26 Application Draft",
      description:
        "Draft the LP Summer 2026 application focusing on relationship intelligence and traction metrics",
      type: "action",
      badge: "New",
      deepResearchPrompt: "Draft the LP Summer 2026 application for Circle CRM",
    },
    {
      id: "pn-crm-art-3",
      reportId: "pn-crm-rpt-growth-1",
      title: "User Growth & Retention",
      description:
        "Weekly growth report: 1,247 users, 38% WAU, retention flattening at week 8. Import funnel is the key bottleneck.",
      type: "report",
      badge: "Updated",
    },
    {
      id: "pn-crm-art-4",
      title: "Competitive Analysis — Molder vs Circle CRM",
      description:
        "Build a detailed feature comparison after Molder's relationship score launch to sharpen positioning for investors",
      type: "action",
      badge: "New",
      deepResearchPrompt:
        "Build a competitive analysis comparing Circle CRM vs Molder vs Tribe vs Rolodex",
    },
  ],
  upcomingMeeting: {
    id: "pn-crm-mtg-1",
    title: "Circle CRM — Investor Readiness & Pre-Seed Strategy",
    time: "2:00 PM",
    endTime: "3:30 PM",
    duration: "1h 30m",
    participants: ["Blake Carrington", "Simone Hartley", "Nolan Prescott"],
    platform: "Zoom",
  },
  preMeetingBrief: {
    meetingTitle: "Circle CRM — Investor Readiness & Pre-Seed Strategy",
    meetingTime: "2:00 PM",
    meetingEndTime: "3:30 PM",
    attendees: [
      {
        name: "Nolan Prescott",
        role: "Partner, Pinnacle Capital",
        initials: "NP",
        lastSpoke: "3 days ago",
      },
      {
        name: "Blake Carrington",
        role: "CTO, Circle CRM",
        initials: "BC",
        lastSpoke: "Yesterday",
      },
      {
        name: "Simone Hartley",
        role: "Advisor, Circle CRM",
        initials: "RC",
        lastSpoke: "5 days ago",
      },
    ],
    insights: [
      {
        heading: "Molder's new feature validates the category",
        source: {
          quote:
            "Just saw Molder's announcement about relationship scoring. Their approach looks superficial — it's based on email frequency and LinkedIn signals, not actual conversation depth. Our decay algorithm is way more sophisticated.",
          meetingTitle: "#pn-crm-product — ChatWorks",
          meetingDate: "Mar 12, 2026",
          sourceType: "slack",
        },
        summary:
          "Molder launching a relationship score feature validates the category but introduces competitive messaging risk. Investors may ask how Circle CRM differentiates — prepare the interaction-based vs. enrichment-based distinction.",
      },
      {
        heading: "User retention signals product-market fit",
        source: {
          quote:
            "We have 1,200 beta users, 38% weekly active, 4.7 average NPS score. Retention curve flattening at week 8 which is a positive signal for product-market fit.",
          meetingTitle: "Circle CRM — Investor Readiness & Pre-Seed Strategy",
          meetingDate: "Mar 10, 2026",
          sourceType: "zoom",
        },
        summary:
          "Retention metrics are strong enough for the pre-seed raise. Key data points for the pitch: 38% WAU, 62% week-1 retention, and the week-8 flattening curve.",
      },
      {
        heading: "LP Summer 26 is a realistic parallel path",
        source: {
          quote:
            "LP Summer 2026 batch application deadline is April 15. Team agreed to submit — Nolan thinks the traction metrics are strong enough and offered to review the application.",
          meetingTitle: "Circle CRM — Investor Readiness & Pre-Seed Strategy",
          meetingDate: "Mar 10, 2026",
          sourceType: "zoom",
        },
        summary:
          "LP Summer 26 deadline is April 15. Nolan offered to review the application. Parallel-track the angel round and LP path — acceptance would change the fundraising dynamic significantly.",
      },
    ],
  },
};
