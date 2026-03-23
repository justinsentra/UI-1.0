export interface BriefAttendee {
  name: string;
  role: string;
  initials: string;
  lastSpoke: string;
}

export interface BriefInsightSource {
  quote: string;
  meetingTitle: string;
  meetingDate: string;
  sourceType?:
    | "zoom"
    | "google-meet"
    | "teams"
    | "slack"
    | "email"
    | "notion"
    | "google-docs"
    | "google-calendar"
    | "affinity"
    | "sharepoint";
}

export interface BriefInsight {
  heading: string;
  source: BriefInsightSource;
  summary: string;
}

export interface PreMeetingBrief {
  meetingTitle: string;
  meetingTime: string;
  meetingEndTime: string;
  attendees: BriefAttendee[];
  insights: BriefInsight[];
}

export const PRE_MEETING_BRIEF: PreMeetingBrief = {
  meetingTitle: "TMT Group Weekly",
  meetingTime: "2:00 PM",
  meetingEndTime: "3:00 PM",
  attendees: [
    {
      name: "Diana Calloway",
      role: "MD, TMT Coverage",
      initials: "DC",
      lastSpoke: "Today",
    },
    {
      name: "Nathan Lim",
      role: "VP, Tech Partnerships",
      initials: "NL",
      lastSpoke: "Yesterday",
    },
    {
      name: "Victor Kane",
      role: "ED, Infrastructure",
      initials: "VS",
      lastSpoke: "2 days ago",
    },
  ],
  insights: [
    {
      heading:
        "The DataVault LBO analysis shows a base case IRR of 18-22%, but the sponsor consortium is pushing for management rollover which could affect deal economics.",
      source: {
        quote:
          "Leverage ratio is at 4.5x with the current structure. The sponsor consortium is interested but they're pushing hard on management rollover.",
        meetingTitle: "TMT Group Weekly",
        meetingDate: "Mar 7",
        sourceType: "zoom",
      },
      summary:
        "Nathan's updated sensitivity analysis should be ready for discussion. This is the key decision point for the deal committee presentation.",
    },
    {
      heading:
        "NeuralPath's board is accelerating the sell-side timeline, targeting a preliminary term sheet by end of month. Three potential acquirers already identified.",
      source: {
        quote:
          "NeuralPath's board wants to move fast on the sell-side process. Three potential acquirers already identified. Target: preliminary term sheet by March 28.",
        meetingTitle: "IB Coverage Team Standup",
        meetingDate: "Mar 9",
        sourceType: "zoom",
      },
      summary:
        "This mandate is moving faster than expected. The acquirer shortlist and engagement strategy will likely come up in today's pipeline discussion.",
    },
    {
      heading:
        "AI sector public comps have re-rated 15-20% higher in Q1, with private market multiples lagging by 2-3 turns. Convergence expected by Q3.",
      source: {
        quote:
          "Public comps have re-rated significantly in Q1. We're seeing 15-20% valuation increases across the board. Private markets are lagging by 2-3 turns though.",
        meetingTitle: "TMT Group Weekly",
        meetingDate: "Mar 7",
        sourceType: "zoom",
      },
      summary:
        "This valuation gap is relevant for several active mandates including CloudSync and Meridian Corp. Worth discussing updated comp tables.",
    },
  ],
};
