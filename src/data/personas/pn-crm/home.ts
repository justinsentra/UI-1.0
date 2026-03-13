import type { PersonaHomeData } from "@/data/personas";

export const homeData: PersonaHomeData = {
  suggestions: [
    "What happened in today's meetings?",
    "Summarize this week's user growth and retention metrics",
    "Draft the YC S26 application",
    "Which investor intros are still pending?",
  ],
  artifacts: [
    {
      id: "pn-crm-art-radar",
      reportId: "pn-crm-radar-competitors-1",
      title: "Personal CRM Competitor Activity",
      description:
        "Clay launched a relationship score feature. Folk raised $6M from Accel. Positioning impact assessment needed.",
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
      title: "YC S26 Application Draft",
      description:
        "Draft the YC Summer 2026 application focusing on relationship intelligence and traction metrics",
      type: "action",
      badge: "New",
      deepResearchPrompt: "Draft the YC Summer 2026 application for PN CRM",
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
      title: "Competitive Analysis — Clay vs PN CRM",
      description:
        "Build a detailed feature comparison after Clay's relationship score launch to sharpen positioning for investors",
      type: "action",
      badge: "New",
      deepResearchPrompt:
        "Build a competitive analysis comparing PN CRM vs Clay vs Folk vs Dex",
    },
  ],
  upcomingMeeting: {
    id: "pn-crm-mtg-1",
    title: "PN CRM — Investor Readiness & Pre-Seed Strategy",
    time: "2:00 PM",
    endTime: "3:30 PM",
    duration: "1h 30m",
    participants: ["Tyler Williams", "Katherine McIntosh", "Mark Richey"],
    platform: "Zoom",
  },
  preMeetingBrief: {
    meetingTitle: "PN CRM — Investor Readiness & Pre-Seed Strategy",
    meetingTime: "2:00 PM",
    meetingEndTime: "3:30 PM",
    attendees: [
      {
        name: "Mark Richey",
        role: "Partner, 1809 Capital",
        initials: "MR",
        lastSpoke: "3 days ago",
      },
      {
        name: "Tyler Williams",
        role: "CTO, Personal Network CRM",
        initials: "TW",
        lastSpoke: "Yesterday",
      },
      {
        name: "Katherine McIntosh",
        role: "Advisor, Personal Network CRM",
        initials: "KM",
        lastSpoke: "5 days ago",
      },
    ],
    insights: [
      {
        heading: "Clay's new feature validates the category",
        source: {
          quote:
            "Just saw Clay's announcement about relationship scoring. Their approach looks superficial — it's based on email frequency and LinkedIn signals, not actual conversation depth. Our decay algorithm is way more sophisticated.",
          meetingTitle: "#pn-crm-product — Slack",
          meetingDate: "Mar 12, 2026",
          sourceType: "slack",
        },
        summary:
          "Clay launching a relationship score feature validates the category but introduces competitive messaging risk. Investors may ask how PN CRM differentiates — prepare the interaction-based vs. enrichment-based distinction.",
      },
      {
        heading: "User retention signals product-market fit",
        source: {
          quote:
            "We have 1,200 beta users, 38% weekly active, 4.7 average NPS score. Retention curve flattening at week 8 which is a positive signal for product-market fit.",
          meetingTitle: "PN CRM — Investor Readiness & Pre-Seed Strategy",
          meetingDate: "Mar 10, 2026",
          sourceType: "zoom",
        },
        summary:
          "Retention metrics are strong enough for the pre-seed raise. Key data points for the pitch: 38% WAU, 62% week-1 retention, and the week-8 flattening curve.",
      },
      {
        heading: "YC S26 is a realistic parallel path",
        source: {
          quote:
            "YC Summer 2026 batch application deadline is April 15. Team agreed to submit — Mark thinks the traction metrics are strong enough and offered to review the application.",
          meetingTitle: "PN CRM — Investor Readiness & Pre-Seed Strategy",
          meetingDate: "Mar 10, 2026",
          sourceType: "zoom",
        },
        summary:
          "YC S26 deadline is April 15. Mark offered to review the application. Parallel-track the angel round and YC path — acceptance would change the fundraising dynamic significantly.",
      },
    ],
  },
};
