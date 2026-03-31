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
  meetingTitle: "David Chen — Secondary Offering Discussion",
  meetingTime: "2:00 PM",
  meetingEndTime: "2:45 PM",
  attendees: [
    {
      name: "David Chen",
      role: "CEO, NovaBridge Capital",
      initials: "DC",
      lastSpoke: "6 weeks ago",
    },
    {
      name: "Margaret Liu",
      role: "CFO, NovaBridge Capital",
      initials: "ML",
      lastSpoke: "2 weeks ago",
    },
    {
      name: "Nathan Lim",
      role: "VP, Coverage",
      initials: "NL",
      lastSpoke: "Yesterday",
    },
  ],
  insights: [
    {
      heading:
        "Last conversation with David was six weeks ago on Zoom. You discussed a potential secondary offering, David raised concerns about board composition, and you committed to connecting him with a governance advisor.",
      source: {
        quote:
          "We're open to a secondary but I want to make sure the board composition question is addressed first. Can you connect us with someone on the governance side before we go further?",
        meetingTitle: "NovaBridge Capital — Advisory Check-in",
        meetingDate: "Feb 17",
        sourceType: "zoom",
      },
      summary:
        "You committed to an intro with a governance advisor and haven't followed up yet. David may raise this. Have a name ready or acknowledge the gap directly.",
    },
    {
      heading:
        "Since your last call, Mark's analyst exchanged emails with David's CFO about updated financials. Margaret sent Q3 actuals and a revised forecast last week.",
      source: {
        quote:
          "Attached are the Q3 actuals and our updated FY26 forecast incorporating the new enterprise contracts signed in February. Let me know if you need the underlying model.",
        meetingTitle: "Email: Margaret Liu → Kevin Park (Analyst)",
        meetingDate: "Mar 24",
        sourceType: "email",
      },
      summary:
        "The financials are current as of last week. Kevin flagged that revenue is tracking 8% above the prior forecast, which strengthens the secondary offering positioning.",
    },
    {
      heading:
        "A colleague on a separate team mentioned David's company in last week's pipeline review, and a competitor of David's just announced a major acquisition.",
      source: {
        quote:
          "NovaBridge came up in the context of the Apex-Cobalt merger — their positioning in the mid-market advisory space is increasingly differentiated. Worth flagging for Mark's coverage.",
        meetingTitle: "IB Pipeline Review",
        meetingDate: "Mar 26",
        sourceType: "teams",
      },
      summary:
        "The Apex-Cobalt acquisition changes the competitive landscape for NovaBridge. This creates urgency around the secondary offering timeline — David may want to move faster now.",
    },
  ],
};
