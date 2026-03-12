import type { PersonaReportsData } from "@/data/personas";

export const reportsData: PersonaReportsData = {
  reportCategories: [
    {
      id: "mcgi-rpt-pipeline",
      name: "Deal Flow Pipeline",
      type: "report",
      reportCount: 4,
      reports: [
        {
          id: "mcgi-rpt-pipeline-1",
          dateRange: "Mar 3 – Mar 10, 2026",
          date: "Mar 10, 2026",
          isLatest: true,
        },
        {
          id: "mcgi-rpt-pipeline-2",
          dateRange: "Feb 24 – Mar 2, 2026",
          date: "Mar 2, 2026",
          isLatest: false,
        },
      ],
      priority: "High",
    },
    {
      id: "mcgi-rpt-portfolio",
      name: "Portfolio Performance",
      type: "report",
      reportCount: 3,
      reports: [
        {
          id: "mcgi-rpt-portfolio-1",
          dateRange: "Q1 2026",
          date: "Mar 10, 2026",
          isLatest: true,
        },
        {
          id: "mcgi-rpt-portfolio-2",
          dateRange: "Q4 2025",
          date: "Jan 5, 2026",
          isLatest: false,
        },
      ],
    },
    {
      id: "mcgi-rpt-sector",
      name: "AI Sector Intelligence",
      type: "report",
      reportCount: 5,
      reports: [
        {
          id: "mcgi-rpt-sector-1",
          dateRange: "Mar 2026",
          date: "Mar 8, 2026",
          isLatest: true,
        },
      ],
      priority: "High",
    },
    {
      id: "mcgi-rpt-climate",
      name: "Climate Tech Landscape",
      type: "report",
      reportCount: 3,
      reports: [
        {
          id: "mcgi-rpt-climate-1",
          dateRange: "Q1 2026",
          date: "Mar 7, 2026",
          isLatest: true,
        },
      ],
    },
    {
      id: "mcgi-radar-competitive",
      name: "Competitive CVC Activity",
      type: "radar",
      reportCount: 0,
      reports: [],
      priority: "Med",
    },
    {
      id: "mcgi-radar-emerging",
      name: "Emerging Technology Signals",
      type: "radar",
      reportCount: 0,
      reports: [],
    },
    {
      id: "mcgi-radar-japan",
      name: "Japan Market Entry Opportunities",
      type: "radar",
      reportCount: 0,
      reports: [],
    },
  ],
  activeRadars: [
    {
      id: "mcgi-radar-1",
      name: "Competitive CVC Activity",
      prompt:
        "Track investments made by SoftBank Vision Fund, Samsung Next, Intel Capital, and other corporate VCs in AI and climate tech startups",
      isActive: true,
      createdAt: "2026-01-15",
    },
    {
      id: "mcgi-radar-2",
      name: "Emerging Technology Signals",
      prompt:
        "Monitor breakthroughs in AI agents, quantum computing, advanced materials, and carbon capture that could create new investment opportunities",
      isActive: true,
      createdAt: "2026-02-01",
    },
    {
      id: "mcgi-radar-3",
      name: "Japan Market Entry Opportunities",
      prompt:
        "Identify portfolio companies and pipeline startups that are ready for Japan market expansion and map them to MC business units",
      isActive: true,
      createdAt: "2026-01-20",
    },
    {
      id: "mcgi-radar-4",
      name: "Portfolio Company Milestones",
      prompt:
        "Track key milestones, funding rounds, customer wins, and hiring signals across all MCGI portfolio companies",
      isActive: true,
      createdAt: "2026-02-10",
    },
  ],
  reportPreferenceCards: [
    {
      id: "mcgi-pref-1",
      label: "Deal Flow Weekly",
      description:
        "Weekly summary of new inbound deals, screening decisions, and pipeline movement",
    },
    {
      id: "mcgi-pref-2",
      label: "Portfolio Quarterly",
      description:
        "Quarterly portfolio company performance including revenue, headcount, and milestone tracking",
    },
    {
      id: "mcgi-pref-3",
      label: "Sector Deep Dive",
      description:
        "Monthly deep dive into a focus sector with market sizing, competitive landscape, and investment thesis updates",
    },
    {
      id: "mcgi-pref-4",
      label: "MC Synergy Tracker",
      description:
        "Track startup-to-MC-business-unit engagement and potential commercial partnerships",
    },
  ],
  defaultRadarOptions: [
    {
      id: "mcgi-ro-1",
      label: "Competitor Investments",
      description: "Track deals by competing CVCs and strategic investors",
    },
    {
      id: "mcgi-ro-2",
      label: "Emerging Tech Breakthroughs",
      description:
        "Monitor academic papers and patents signaling new investment opportunities",
    },
    {
      id: "mcgi-ro-3",
      label: "Regulatory Changes",
      description:
        "Track regulatory developments in AI, climate, and cross-border investment",
    },
    {
      id: "mcgi-ro-4",
      label: "Portfolio Signals",
      description:
        "Monitor news, hiring, and product launches from portfolio companies",
    },
  ],
  chatSuggestions: {
    reports: [
      "Which pipeline deals have the strongest MC synergy potential?",
      "How does our Q1 deployment pace compare to plan?",
      "What are the key risks in our climate tech portfolio?",
      "Summarize NeuralDB's performance trends",
    ],
    radar: [
      "What did SoftBank invest in this month?",
      "Any breakthroughs in carbon capture technology?",
      "Which portfolio companies are hiring aggressively?",
      "New AI regulations that could impact our thesis?",
    ],
  },
};
