import type { PersonaReportsData } from "@/data/personas";

export const reportsData: PersonaReportsData = {
  reportCategories: [
    {
      id: "pn-crm-rpt-growth",
      name: "User Growth & Retention",
      type: "report",
      reportCount: 4,
      reports: [
        {
          id: "pn-crm-rpt-growth-1",
          dateRange: "Mar 3 – Mar 10, 2026",
          date: "Mar 10, 2026",
          isLatest: true,
        },
        {
          id: "pn-crm-rpt-growth-2",
          dateRange: "Feb 24 – Mar 2, 2026",
          date: "Mar 2, 2026",
          isLatest: false,
        },
      ],
      priority: "High",
    },
    {
      id: "pn-crm-rpt-fundraising",
      name: "Fundraising Pipeline",
      type: "report",
      reportCount: 2,
      reports: [
        {
          id: "pn-crm-rpt-fundraising-1",
          dateRange: "Mar 2026",
          date: "Mar 10, 2026",
          isLatest: true,
        },
      ],
      priority: "High",
    },
    {
      id: "pn-crm-rpt-product",
      name: "Product & Engineering Sprint",
      type: "report",
      reportCount: 6,
      reports: [
        {
          id: "pn-crm-rpt-product-1",
          dateRange: "Sprint 12 — Mar 3–10, 2026",
          date: "Mar 10, 2026",
          isLatest: true,
        },
        {
          id: "pn-crm-rpt-product-2",
          dateRange: "Sprint 11 — Feb 24–Mar 2, 2026",
          date: "Mar 2, 2026",
          isLatest: false,
        },
      ],
    },
    {
      id: "pn-crm-rpt-redhawk",
      name: "RedHawk Ventures Deal Pipeline",
      type: "report",
      reportCount: 3,
      reports: [
        {
          id: "pn-crm-rpt-redhawk-1",
          dateRange: "Mar 3 – Mar 10, 2026",
          date: "Mar 10, 2026",
          isLatest: true,
        },
      ],
    },
    {
      id: "pn-crm-radar-competitors",
      name: "Personal CRM Competitor Activity",
      type: "radar",
      reportCount: 1,
      reports: [
        {
          id: "pn-crm-radar-competitors-1",
          dateRange: "Mar 12, 2026",
          date: "Mar 12, 2026",
          isLatest: true,
        },
      ],
      priority: "High",
    },
    {
      id: "pn-crm-radar-vc",
      name: "VC & Accelerator Signals",
      type: "radar",
      reportCount: 0,
      reports: [],
    },
    {
      id: "pn-crm-radar-community",
      name: "Student Startup Ecosystem",
      type: "radar",
      reportCount: 0,
      reports: [],
    },
  ],
  activeRadars: [
    {
      id: "pn-crm-radar-1",
      name: "Personal CRM Competitor Activity",
      prompt:
        "Track product launches, funding rounds, and feature updates from Clay, Folk, Dex, Monica, and other personal CRM tools",
      isActive: true,
      createdAt: "2026-01-10",
    },
    {
      id: "pn-crm-radar-2",
      name: "VC & Accelerator Signals",
      prompt:
        "Monitor YC, Techstars, and top accelerator batch announcements for companies in the personal productivity and CRM space",
      isActive: true,
      createdAt: "2026-02-01",
    },
    {
      id: "pn-crm-radar-3",
      name: "Student Startup Ecosystem",
      prompt:
        "Track student startup competitions, university VC fund investments, and student founder success stories at Miami University and peer institutions",
      isActive: true,
      createdAt: "2026-01-20",
    },
    {
      id: "pn-crm-radar-4",
      name: "Relationship Intelligence Trends",
      prompt:
        "Monitor AI and ML advances in relationship scoring, social graph analysis, and professional networking that could enhance PN CRM's intelligence layer",
      isActive: true,
      createdAt: "2026-02-15",
    },
  ],
  reportPreferenceCards: [
    {
      id: "pn-crm-pref-1",
      label: "Growth Weekly",
      description:
        "Weekly user growth, activation, and retention metrics with cohort analysis",
    },
    {
      id: "pn-crm-pref-2",
      label: "Fundraising Tracker",
      description:
        "Investor outreach status, intro pipeline, and pre-seed round progress",
    },
    {
      id: "pn-crm-pref-3",
      label: "Sprint Retro",
      description:
        "Engineering sprint velocity, shipped features, bugs resolved, and tech debt status",
    },
    {
      id: "pn-crm-pref-4",
      label: "Competitive Intel",
      description:
        "Competitor product updates, pricing changes, and market positioning shifts",
    },
  ],
  defaultRadarOptions: [
    {
      id: "pn-crm-ro-1",
      label: "Competitor Funding",
      description:
        "Track funding rounds and valuations of personal CRM competitors",
    },
    {
      id: "pn-crm-ro-2",
      label: "AI CRM Features",
      description:
        "Monitor AI-powered CRM features launching across the industry",
    },
    {
      id: "pn-crm-ro-3",
      label: "Accelerator Deadlines",
      description:
        "Track application deadlines for YC, Techstars, and relevant accelerators",
    },
    {
      id: "pn-crm-ro-4",
      label: "User Sentiment",
      description:
        "Monitor Product Hunt, Reddit, and Twitter for personal CRM user feedback and complaints",
    },
  ],
  chatSuggestions: {
    reports: [
      "How is user retention trending week over week?",
      "Where are we on the pre-seed fundraising pipeline?",
      "What shipped in the last sprint?",
      "Which RedHawk Ventures deals are moving forward?",
    ],
    radar: [
      "Any new personal CRM competitors that launched recently?",
      "What did Clay or Folk announce this week?",
      "Any YC or Techstars deadlines coming up?",
      "New AI relationship intelligence tools to watch?",
    ],
  },
};
