export interface ConnectionEmail {
  id: string;
  subject: string;
  date: string;
  snippet: string;
  from: string;
  to: string[];
}

export interface ConnectionNews {
  id: string;
  headline: string;
  date: string;
}

export interface ConnectionDetailEntry {
  name: string;
  email: string;
  domain: string;
  role: string;
  company: string;
  tags: string[];
  relationshipStatus: string;
  suggestions: string[];
  personalNotes: string[];
  meetings: {
    week: string;
    items: {
      id: string;
      title: string;
      date: string;
      time: string;
      duration: string;
      participants: string[];
      privacy: "public" | "private";
    }[];
  }[];
  emails: ConnectionEmail[];
  news: ConnectionNews[];
  otherInteractors: string[];
}

export const connectionData: Record<string, ConnectionDetailEntry> = {
  "claire-lawson": {
    name: "Claire Lawson",
    email: "claire.lawson@apexglobal.com",
    domain: "apexglobal.com",
    role: "Business Development and Strategic Partnerships",
    company: "Apex Global (Americas)",
    tags: ["AGV", "AI Strategy", "Design Partner"],
    relationshipStatus:
      "Claire met me at the Apex AI Conference — we had a good conversation and we recently had a call with her and Ryan to walk through Sentra and talk about potential use cases as well as a brief demo. She and Ryan are waiting to receive the product feature deck.",
    suggestions: [
      "What did we talk about last time?",
      "Prep me for the next call with Claire",
    ],
    personalNotes: [
      "- met at Apex AI Conference, instantly got the vision",
      "- works closely with Ryan on tech evaluations",
      "- wants to see the product feature deck — need to send ASAP",
      "- interested in meeting intelligence + organizational memory angle",
      "- very thoughtful evaluator, asks sharp questions about data governance",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-hana-1",
            title: "Sentra Demo — Claire & Ryan",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Claire Lawson",
              "Ryan Peters",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-hana-2",
            title: "AGV — Initial Discovery Call",
            date: "Thu, Mar 6",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Claire Lawson", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-hana-3",
            title: "Apex AI Conference — Intro",
            date: "Sat, Mar 1",
            time: "3:30 PM",
            duration: "15 min",
            participants: ["Claire Lawson", "Leo Hartwell"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-sunna-1",
        subject: "Re: Sentra — Product Feature Deck",
        date: "Mar 11, 2026",
        snippet:
          "Thanks Leo — Ryan and I are looking forward to reviewing the deck. Can you also include the data governance section we discussed?",
        from: "Claire Lawson",
        to: ["Leo Hartwell"],
      },
      {
        id: "em-sunna-2",
        subject: "Follow-up: Apex AI Conference",
        date: "Mar 3, 2026",
        snippet:
          "Great meeting you at the conference! I'd love to set up a proper discovery call to explore how Sentra could fit into AGV's workflow.",
        from: "Claire Lawson",
        to: ["Leo Hartwell"],
      },
      {
        id: "em-sunna-3",
        subject: "Re: AGV AI Strategy — Vendor Landscape",
        date: "Feb 28, 2026",
        snippet:
          "We're currently evaluating 4 vendors in the organizational intelligence space. Would be great to understand Sentra's differentiation.",
        from: "Claire Lawson",
        to: ["Leo Hartwell", "Ryan Peters"],
      },
    ],
    news: [
      {
        id: "n-1",
        headline: "AGV announces $2B AI transformation initiative for FY2026",
        date: "Mar 10, 2026",
      },
      {
        id: "n-2",
        headline:
          "Mitsubishi Chemical Group partners with Microsoft on enterprise AI rollout",
        date: "Mar 5, 2026",
      },
      {
        id: "n-3",
        headline:
          "AGV appoints new Chief Digital Officer to lead cross-division AI strategy",
        date: "Feb 27, 2026",
      },
      {
        id: "n-4",
        headline:
          "AGV Q3 earnings beat estimates, cites operational efficiency gains from automation",
        date: "Feb 20, 2026",
      },
    ],
    otherInteractors: ["Raj Sundaram", "Ryan Peters"],
  },
  "raj-sundaram": {
    name: "Raj Sundaram",
    email: "raj@sentra.app",
    domain: "sentra.app",
    role: "CEO",
    company: "Sentra",
    tags: ["Sentra", "Co-founder"],
    relationshipStatus:
      "Your co-founder and former university professor. You two meet 3-4x weekly covering product strategy, investor narrative, and launch prep. Raj trusts your judgment on GTM and leans on you for customer-facing decisions. The dynamic is direct and high-trust \u2014 you skip pleasantries and get to the point.",
    suggestions: [
      "What did we talk about last time?",
      "Does Raj need anything from me?",
    ],
    personalNotes: [
      "- prefers async updates, dont schedule unnecesary meetings w him",
      "- super technical, always wants to see the data first before commiting to anything",
      "- heads down on phase 1 launch rn (note-taking competitor + leadership stuff)",
      "- former university prof lol, very rigorous thinker",
      "- wants more enterprise design partners, keep pushing on this",
      "- likes to walk thru demos live not async, remember this for next time",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-mtg-1",
            title: "Weekly Leadership Sync",
            date: "Wed, Feb 26",
            time: "10:00 AM",
            duration: "45 min",
            participants: [
              "Raj Sundaram",
              "Pavel Volkov",
              "Leo Hartwell",
            ],
            privacy: "private",
          },
          {
            id: "cd-mtg-2",
            title: "Product Roadmap Review",
            date: "Tue, Feb 25",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Raj Sundaram",
              "Pavel Volkov",
              "Leo Hartwell",
              "Ingrid Solberg",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-3",
            title: "TechConnect Launch Planning",
            date: "Mon, Feb 24",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Raj Sundaram", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-4",
            title: "Board Update Prep",
            date: "Thu, Feb 20",
            time: "3:00 PM",
            duration: "45 min",
            participants: ["Raj Sundaram", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-5",
            title: "Investor Narrative Workshop",
            date: "Tue, Feb 18",
            time: "1:00 PM",
            duration: "60 min",
            participants: [
              "Raj Sundaram",
              "Leo Hartwell",
              "Meera Kapoor",
            ],
            privacy: "public",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-a1",
            title: "Enterprise Pricing Discussion",
            date: "Wed, Feb 12",
            time: "11:00 AM",
            duration: "45 min",
            participants: ["Raj Sundaram", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-a2",
            title: "Design Partner Pipeline Review",
            date: "Mon, Feb 10",
            time: "3:00 PM",
            duration: "30 min",
            participants: [
              "Raj Sundaram",
              "Leo Hartwell",
              "Ingrid Solberg",
            ],
            privacy: "public",
          },
        ],
      },
      {
        week: "3 weeks ago",
        items: [
          {
            id: "cd-mtg-a3",
            title: "Raj / Leo 1:1",
            date: "Thu, Feb 6",
            time: "10:00 AM",
            duration: "30 min",
            participants: ["Raj Sundaram", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-a4",
            title: "Demo Script Walkthrough",
            date: "Tue, Feb 4",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Raj Sundaram",
              "Pavel Volkov",
              "Leo Hartwell",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-a5",
            title: "Weekly Leadership Sync",
            date: "Mon, Feb 3",
            time: "10:00 AM",
            duration: "45 min",
            participants: [
              "Raj Sundaram",
              "Pavel Volkov",
              "Leo Hartwell",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Pavel Volkov", "Ingrid Solberg", "Meera Kapoor"],
  },
  "pavel-volkov": {
    name: "Pavel Volkov",
    email: "pavel@sentra.app",
    domain: "sentra.app",
    role: "CTO",
    company: "Sentra",
    tags: ["Sentra", "Co-founder"],
    relationshipStatus:
      "Sentra\u2019s CTO and your closest technical counterpart. You collaborate on product-engineering tradeoffs and sprint priorities. Pavel has strong architectural opinions \u2014 he respects when you push back with data. You two bonded over a shared obsession with clean APIs and late-night debugging sessions during the early days.",
    suggestions: [
      "What did we talk about last time?",
      "Does Pavel need anything from me?",
    ],
    personalNotes: [
      "- leads product AND eng, very hands on with the code himself",
      "- keep technical convos short and to the point with him",
      "- evaluating relay API shim layer as fallback, check in on this",
      "- has strong opinions on architecture lol, always present multiple options w tradeoffs or he'll push back",
      "- drinks way too much coffee",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-mtg-6",
            title: "Product Roadmap Review",
            date: "Wed, Feb 26",
            time: "4:30 PM",
            duration: "60 min",
            participants: [
              "Pavel Volkov",
              "Raj Sundaram",
              "Leo Hartwell",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-7",
            title: "Design Review — Widget v2",
            date: "Mon, Feb 24",
            time: "1:30 PM",
            duration: "45 min",
            participants: ["Pavel Volkov", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-8",
            title: "Sprint Planning",
            date: "Thu, Feb 20",
            time: "10:00 AM",
            duration: "45 min",
            participants: [
              "Pavel Volkov",
              "Leo Hartwell",
              "Ingrid Solberg",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-b1",
            title: "Architecture Review \u2014 Data Pipeline",
            date: "Tue, Feb 18",
            time: "3:00 PM",
            duration: "60 min",
            participants: ["Pavel Volkov", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-b2",
            title: "Pavel / Leo Sync",
            date: "Fri, Feb 14",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Pavel Volkov", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-b3",
            title: "API Spec Finalization",
            date: "Wed, Feb 12",
            time: "4:00 PM",
            duration: "45 min",
            participants: ["Pavel Volkov", "Leo Hartwell", "Derek Huang"],
            privacy: "public",
          },
          {
            id: "cd-mtg-b4",
            title: "Bug Triage \u2014 Pill Component",
            date: "Mon, Feb 10",
            time: "9:30 AM",
            duration: "30 min",
            participants: ["Pavel Volkov", "Leo Hartwell"],
            privacy: "public",
          },
        ],
      },
      {
        week: "3 weeks ago",
        items: [
          {
            id: "cd-mtg-b5",
            title: "Onboarding Flow Brainstorm",
            date: "Thu, Feb 6",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Pavel Volkov",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Raj Sundaram", "Derek Huang"],
  },
  "ingrid-solberg": {
    name: "Ingrid Solberg",
    email: "ingrid@sentra.app",
    domain: "sentra.app",
    role: "Executive Assistant",
    company: "Sentra",
    tags: ["Sentra", "Operations"],
    relationshipStatus:
      "Your right hand for operations and scheduling. Ingrid keeps things moving when you\u2019re heads-down. She\u2019s proactive about flagging calendar conflicts and anticipates what you\u2019ll need before you ask. You two have a shorthand \u2014 a Teams emoji reaction is often enough to greenlight something.",
    suggestions: [
      "What's Ingrid working on?",
      "Recent action items for Ingrid?",
    ],
    personalNotes: [
      "- handles scheduling for me and Raj, absolutley clutch",
      "- working on press kit rn, might need a freelance writer to help",
      "- super organized, prefers when i give her structured asks not vague ones",
      "- somehow always knows whats about to go wrong before it does",
      "- birthday is in april i think?? need to confirm",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-mtg-9",
            title: "Weekly Team Standup",
            date: "Wed, Feb 26",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Ingrid Solberg",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-10",
            title: "GTM Strategy Sync",
            date: "Tue, Feb 25",
            time: "10:00 AM",
            duration: "60 min",
            participants: ["Ingrid Solberg", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-c1",
            title: "TechConnect Press Kit Review",
            date: "Thu, Feb 20",
            time: "1:00 PM",
            duration: "30 min",
            participants: ["Ingrid Solberg", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-c2",
            title: "Event Logistics Checklist",
            date: "Tue, Feb 18",
            time: "11:00 AM",
            duration: "45 min",
            participants: [
              "Ingrid Solberg",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "public",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-c3",
            title: "Weekly Ops Check-in",
            date: "Wed, Feb 12",
            time: "9:00 AM",
            duration: "30 min",
            participants: ["Ingrid Solberg", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-c4",
            title: "Vendor Outreach Debrief",
            date: "Mon, Feb 10",
            time: "4:00 PM",
            duration: "30 min",
            participants: ["Ingrid Solberg", "Leo Hartwell"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Raj Sundaram"],
  },
  "fiona-webb": {
    name: "Fiona Webb",
    email: "fiona@trailhead.io",
    domain: "trailhead.io",
    role: "Head of Product",
    company: "Campfire",
    tags: ["Design Partner"],
    relationshipStatus:
      "Key contact at Campfire, one of your earliest design partners. Fiona was the first external person to see the demo and immediately got it. She\u2019s been generous with product feedback and introduced you to two other ops leads in her network. You occasionally grab coffee when you\u2019re both in the Mission.",
    suggestions: [
      "What did we talk about last time?",
      "Does Fiona need anything from me?",
    ],
    personalNotes: [
      "- main contact at campfire, basically our first real design parnter",
      "- really into the meeting intelligence stuff, showed her the demo and she was sold",
      "- based in sf, dont schedule morning meetings she hates them",
      "- introduced me to 2 other ops leads, need to follow up with them",
      "- mentioned shes thinking about leaving campfire?? keep this in mind",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-mtg-11",
            title: "Campfire Integration Review",
            date: "Wed, Feb 26",
            time: "3:00 PM",
            duration: "45 min",
            participants: ["Fiona Webb", "Leo Hartwell", "Pavel Volkov"],
            privacy: "public",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-12",
            title: "Customer Discovery \u2014 Campfire",
            date: "Fri, Feb 21",
            time: "11:00 AM",
            duration: "60 min",
            participants: ["Fiona Webb", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-d1",
            title: "Campfire Feedback Session",
            date: "Wed, Feb 12",
            time: "2:00 PM",
            duration: "45 min",
            participants: ["Fiona Webb", "Leo Hartwell", "Pavel Volkov"],
            privacy: "public",
          },
        ],
      },
      {
        week: "3 weeks ago",
        items: [
          {
            id: "cd-mtg-d2",
            title: "Initial Demo \u2014 Campfire",
            date: "Tue, Feb 4",
            time: "3:00 PM",
            duration: "45 min",
            participants: ["Fiona Webb", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-d3",
            title: "Intro Call \u2014 Fiona Webb",
            date: "Mon, Feb 3",
            time: "1:00 PM",
            duration: "30 min",
            participants: ["Fiona Webb", "Leo Hartwell"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Pavel Volkov"],
  },
  "derek-huang": {
    name: "Derek Huang",
    email: "derek@conduit.app",
    domain: "conduit.app",
    role: "VP Engineering",
    company: "Relay",
    tags: ["Prospect"],
    relationshipStatus:
      "Technical evaluator at Relay who\u2019s been kicking the tires on Sentra\u2019s API. Derek is methodical \u2014 he won\u2019t commit until he\u2019s stress-tested every edge case. You two nerd out on systems design. He mentioned wanting to grab ramen at Nori House next time you\u2019re both free.",
    suggestions: [
      "What did we talk about last time?",
      "Does Derek need anything from me?",
    ],
    personalNotes: [
      "- tech lead at relay, been evaluating sentra for their team",
      "- really into API deep dives, kind of a nerd about it honestly",
      "- way more responsive over email than slack, just email him",
      "- wants to get ramen at mensho sometime, should actually do this",
      "- delayed reply from last time, maybe hes losing intrest?",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-mtg-13",
            title: "Relay API Deep Dive",
            date: "Tue, Feb 25",
            time: "4:00 PM",
            duration: "60 min",
            participants: ["Derek Huang", "Leo Hartwell", "Pavel Volkov"],
            privacy: "public",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-e1",
            title: "Relay Integration Scoping",
            date: "Thu, Feb 20",
            time: "3:30 PM",
            duration: "45 min",
            participants: ["Derek Huang", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-e2",
            title: "Technical Requirements Review",
            date: "Wed, Feb 12",
            time: "4:00 PM",
            duration: "60 min",
            participants: ["Derek Huang", "Leo Hartwell", "Pavel Volkov"],
            privacy: "public",
          },
          {
            id: "cd-mtg-e3",
            title: "Intro Call \u2014 Derek Huang",
            date: "Mon, Feb 10",
            time: "2:00 PM",
            duration: "30 min",
            participants: ["Derek Huang", "Leo Hartwell"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Pavel Volkov"],
  },
  "meera-kapoor": {
    name: "Meera Kapoor",
    email: "meera@horizonfund.com",
    domain: "horizonfund.com",
    role: "Lead Investor",
    company: "Horizon Fund",
    tags: ["Investor", "Horizon Fund"],
    relationshipStatus:
      "Sentra\u2019s lead investor from Horizon Fund. Meera led the $5M round and has been an active, high-conviction backer. She\u2019s introduced you to enterprise prospects and gives sharp strategic advice. Outside work, you two bond over skiing \u2014 she\u2019s trying to convince you to do a Aspen trip before the season ends.",
    suggestions: [
      "What did we talk about last time?",
      "Does Meera need anything from me?",
    ],
    personalNotes: [
      "- lead investor, Horizon Fund. led our 5M round",
      "- wants monthly updates, keep them SHORT (5 bullets max or she zones out)",
      "- connected us to 2 enterprise prospects already, absolute legend",
      "- big skier, keeps trying to get me to do tahoe lol",
      "- very direct communicator, doesnt do small talk which i appreciate",
      "- her husband works at google deepmind, could be useful connection later",
    ],
    meetings: [
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-14",
            title: "Investor Update Prep",
            date: "Wed, Feb 19",
            time: "1:00 PM",
            duration: "30 min",
            participants: [
              "Meera Kapoor",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-f1",
            title: "Monthly Investor Check-in",
            date: "Fri, Feb 14",
            time: "10:00 AM",
            duration: "30 min",
            participants: [
              "Meera Kapoor",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
          {
            id: "cd-mtg-f2",
            title: "Enterprise Intro \u2014 Vantage Corp",
            date: "Tue, Feb 11",
            time: "2:00 PM",
            duration: "30 min",
            participants: ["Meera Kapoor", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-mtg-f3",
            title: "Board Prep \u2014 Q4 Metrics",
            date: "Thu, Jan 30",
            time: "11:00 AM",
            duration: "45 min",
            participants: [
              "Meera Kapoor",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
          {
            id: "cd-mtg-f4",
            title: "Fundraising Strategy Call",
            date: "Mon, Jan 20",
            time: "3:00 PM",
            duration: "60 min",
            participants: ["Meera Kapoor", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-mtg-f5",
            title: "Intro \u2014 Meera / Sentra Team",
            date: "Wed, Jan 8",
            time: "1:00 PM",
            duration: "30 min",
            participants: [
              "Meera Kapoor",
              "Leo Hartwell",
              "Raj Sundaram",
              "Pavel Volkov",
            ],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Raj Sundaram"],
  },
  "ryan-peters": {
    name: "Ryan Peters",
    email: "ryan.peters@apexglobal.com",
    domain: "apexglobal.com",
    role: "Director of Strategic Investments",
    company: "Apex Global",
    tags: ["AGV", "Deal Origination", "Catalyst Alliance"],
    relationshipStatus:
      "Ryan is my closest collaborator on the investment team. We co-lead deal origination and he manages most of our Catalyst Alliance consortium relationships. He's methodical and detail-oriented — I trust his judgment on technical diligence more than anyone else at AGV.",
    suggestions: [
      "What did Ryan and I discuss last?",
      "Prep me for my next meeting with Ryan",
    ],
    personalNotes: [
      "- my main partner on deal sourcing, we work really well together",
      "- super detail oriented, always has the numbers ready before anyone asks",
      "- manages Catalyst Alliance consortium relationships, keep him looped on anything related",
      "- prefers structured agendas, dont show up to a meeting w him unprepared",
      "- mentioned wanting to visit SyntheticDB's SF office, need to coordniate",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-ryo-1",
            title: "Weekly Deal Pipeline Review",
            date: "Mon, Mar 16",
            time: "10:00 AM",
            duration: "45 min",
            participants: ["Ryan Peters", "Claire Lawson", "Lauren Cho"],
            privacy: "private",
          },
          {
            id: "cd-ryo-2",
            title: "GreenCore DD Sync",
            date: "Wed, Mar 18",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Ryan Peters",
              "Claire Lawson",
              "Dr. Nora Blackwell",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-ryo-3",
            title: "Sentra Demo — Claire & Ryan",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Ryan Peters",
              "Claire Lawson",
              "Leo Hartwell",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
          {
            id: "cd-ryo-4",
            title: "Catalyst Alliance Consortium Update",
            date: "Thu, Mar 13",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Ryan Peters", "Claire Lawson", "Richard Caldwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-ryo-5",
            title: "SyntheticDB Portfolio Check-in",
            date: "Wed, Mar 5",
            time: "3:00 PM",
            duration: "30 min",
            participants: ["Ryan Peters", "Claire Lawson", "Joon Park"],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-ryo-1",
        subject: "Re: GreenCore Technical DD — Next Steps",
        date: "Mar 15, 2026",
        snippet:
          "I reviewed the technical architecture docs Nora sent over. A few concerns on the scalability of their DAC modules — can we discuss Monday?",
        from: "Ryan Peters",
        to: ["Claire Lawson"],
      },
      {
        id: "em-ryo-2",
        subject: "Catalyst Alliance Consortium Q1 Report",
        date: "Mar 10, 2026",
        snippet:
          "Attached is the Q1 consortium update. Three new startups applied for the accelerator cohort — flagging two that align with our thesis.",
        from: "Ryan Peters",
        to: ["Claire Lawson", "Richard Caldwell"],
      },
      {
        id: "em-ryo-3",
        subject: "Re: Sentra Product Feature Deck",
        date: "Mar 12, 2026",
        snippet:
          "Thanks for forwarding. The org memory angle is interesting — I want to dig into the data governance piece more before our next call with them.",
        from: "Ryan Peters",
        to: ["Claire Lawson"],
      },
    ],
    news: [
      {
        id: "n-ryo-1",
        headline:
          "Apex Global launches new CVC fund targeting deep tech startups",
        date: "Mar 8, 2026",
      },
      {
        id: "n-ryo-2",
        headline:
          "Catalyst Alliance consortium expands to include 15 new corporate partners",
        date: "Feb 25, 2026",
      },
      {
        id: "n-ryo-3",
        headline:
          "European corporate VCs increase deal activity in North America by 40% YoY",
        date: "Feb 18, 2026",
      },
    ],
    otherInteractors: ["Richard Caldwell", "Lauren Cho", "Joon Park"],
  },
  "mc-p3": {
    name: "Richard Caldwell",
    email: "richard.caldwell@apexglobal.com",
    domain: "apexglobal.com",
    role: "CEO",
    company: "Apex Global",
    tags: ["AGV", "Leadership", "CVC"],
    relationshipStatus:
      "Richard is our CEO and the ultimate decision-maker on all major investments. He's strategic and deliberate — doesn't rush into anything but once he's bought in, he moves fast. I present portfolio updates to him monthly and he trusts my and Ryan's sourcing judgment.",
    suggestions: [
      "What did I last brief Richard on?",
      "What does Richard need from me this week?",
    ],
    personalNotes: [
      "- CEO of AGV, very senior and busy — keep updates concise",
      "- cares most about strategic alignment w AG's broader portfolio",
      "- monthly portfolio review w him, always be prepared with metrics",
      "- prefers deck format over verbal updates, send materials 24hrs ahead",
      "- mentioned wanting to visit silicon valley portfolio cos in april",
    ],
    meetings: [
      {
        week: "Last week",
        items: [
          {
            id: "cd-kengo-1",
            title: "Monthly Portfolio Review",
            date: "Fri, Mar 13",
            time: "9:00 AM",
            duration: "60 min",
            participants: [
              "Richard Caldwell",
              "Claire Lawson",
              "Ryan Peters",
              "Sean Mercer",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-kengo-2",
            title: "GreenCore Investment Thesis Review",
            date: "Tue, Mar 3",
            time: "10:00 AM",
            duration: "45 min",
            participants: [
              "Richard Caldwell",
              "Claire Lawson",
              "Ryan Peters",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-kengo-3",
            title: "AGV Strategy Offsite",
            date: "Mon, Feb 23",
            time: "1:00 PM",
            duration: "120 min",
            participants: [
              "Richard Caldwell",
              "Claire Lawson",
              "Ryan Peters",
              "Sean Mercer",
              "Lauren Cho",
            ],
            privacy: "private",
          },
          {
            id: "cd-kengo-4",
            title: "Board Readout — Q4 Results",
            date: "Wed, Feb 19",
            time: "11:00 AM",
            duration: "60 min",
            participants: [
              "Richard Caldwell",
              "Claire Lawson",
              "Ryan Peters",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-kengo-1",
        subject: "Re: March Portfolio Update Deck",
        date: "Mar 12, 2026",
        snippet:
          "Thanks Claire. SyntheticDB numbers look strong. Can you add a slide on GreenCore's regulatory risk before Friday?",
        from: "Richard Caldwell",
        to: ["Claire Lawson"],
      },
      {
        id: "em-kengo-2",
        subject: "Re: Silicon Valley Trip — April",
        date: "Mar 6, 2026",
        snippet:
          "Let's plan to visit SyntheticDB and Sentra while we're out there. Please coordinate with Lauren on logistics.",
        from: "Richard Caldwell",
        to: ["Claire Lawson", "Lauren Cho"],
      },
    ],
    news: [
      {
        id: "n-kengo-1",
        headline:
          "Apex Global CVC arm surpasses $500M in deployed capital",
        date: "Mar 1, 2026",
      },
      {
        id: "n-kengo-2",
        headline:
          "AGV CEO Richard Caldwell speaks at CVC Forum London on corporate-startup collaboration",
        date: "Feb 15, 2026",
      },
    ],
    otherInteractors: ["Ryan Peters", "Sean Mercer"],
  },
  "mc-p4": {
    name: "Lauren Cho",
    email: "lauren.cho@apexglobal.com",
    domain: "apexglobal.com",
    role: "Investment Associate",
    company: "Apex Global",
    tags: ["AGV", "Deal Screening", "Market Research"],
    relationshipStatus:
      "Lauren is our newest team member and handles deal screening and market research. She's sharp and eager to learn — I've been mentoring her on the diligence process. She produces great market maps and competitive landscapes that help us move faster on sourcing decisions.",
    suggestions: [
      "What's Lauren working on right now?",
      "Any research requests I have pending with Lauren?",
    ],
    personalNotes: [
      "- junior associate, handles screening and market reasearch",
      "- really fast learner, already producing solid competitive landscapes",
      "- been mentoring her on DD process, she's picking it up quick",
      "- tends to over-prepare which is honestly great, rather that than under",
      "- said she wants to lead a deal by end of year, should give her more ownership",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-reina-1",
            title: "Weekly Deal Pipeline Review",
            date: "Mon, Mar 16",
            time: "10:00 AM",
            duration: "45 min",
            participants: ["Lauren Cho", "Claire Lawson", "Ryan Peters"],
            privacy: "private",
          },
          {
            id: "cd-reina-2",
            title: "Market Map Review — Climate Tech",
            date: "Thu, Mar 19",
            time: "3:00 PM",
            duration: "30 min",
            participants: ["Lauren Cho", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-reina-3",
            title: "Lauren / Claire 1:1",
            date: "Wed, Mar 11",
            time: "4:00 PM",
            duration: "30 min",
            participants: ["Lauren Cho", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-reina-4",
            title: "Deal Screening — New Inbounds",
            date: "Mon, Mar 2",
            time: "11:00 AM",
            duration: "45 min",
            participants: [
              "Lauren Cho",
              "Claire Lawson",
              "Ryan Peters",
            ],
            privacy: "private",
          },
          {
            id: "cd-reina-5",
            title: "Competitive Landscape Walkthrough",
            date: "Thu, Mar 5",
            time: "2:00 PM",
            duration: "30 min",
            participants: ["Lauren Cho", "Claire Lawson"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-reina-1",
        subject: "Climate Tech Market Map v2 — Updated",
        date: "Mar 14, 2026",
        snippet:
          "Hi Claire, attached is the updated climate tech market map with the new DAC players. Added GreenCore's positioning vs. competitors per your ask.",
        from: "Lauren Cho",
        to: ["Claire Lawson"],
      },
      {
        id: "em-reina-2",
        subject: "Re: April SV Trip — Logistics",
        date: "Mar 7, 2026",
        snippet:
          "I've started coordinating with SyntheticDB and Sentra for the April visit. Will have a draft itinerary by end of week.",
        from: "Lauren Cho",
        to: ["Claire Lawson", "Richard Caldwell"],
      },
      {
        id: "em-reina-3",
        subject: "New Inbound Deals — Week of Mar 2",
        date: "Mar 2, 2026",
        snippet:
          "5 new inbounds this week. Flagged 2 that fit our thesis — one in AI infra and one in carbon markets. Summaries attached.",
        from: "Lauren Cho",
        to: ["Claire Lawson", "Ryan Peters"],
      },
    ],
    news: [
      {
        id: "n-reina-1",
        headline:
          "Corporate VC deal screening increasingly powered by AI tools",
        date: "Mar 5, 2026",
      },
      {
        id: "n-reina-2",
        headline:
          "Climate tech investment surges 60% in Q1 2026",
        date: "Feb 28, 2026",
      },
    ],
    otherInteractors: ["Ryan Peters", "Richard Caldwell"],
  },
  "mc-p5": {
    name: "Sean Mercer",
    email: "sean.mercer@apexglobal.com",
    domain: "apexglobal.com",
    role: "VP Finance",
    company: "Apex Global",
    tags: ["AGV", "Finance", "Fund Allocation"],
    relationshipStatus:
      "Sean oversees all fund allocation and financial reporting for AGV. We work together on capital calls and investment sizing. He's conservative by nature which is a good counterbalance to the team's enthusiasm — makes sure we stay disciplined on check sizes and reserves.",
    suggestions: [
      "What's the latest on fund allocation?",
      "Any financial reviews pending with Sean?",
    ],
    personalNotes: [
      "- VP finance, manages fund allocation and reporting",
      "- very by-the-numbers, always wants to see the full finacial model",
      "- conservative on check sizes which is honestly helpful",
      "- need to get him the GreenCore pro forma before next IC meeting",
      "- prefers email over slack, responds fastest in the morning JP time",
    ],
    meetings: [
      {
        week: "Last week",
        items: [
          {
            id: "cd-takeshi-1",
            title: "Monthly Portfolio Review",
            date: "Fri, Mar 13",
            time: "9:00 AM",
            duration: "60 min",
            participants: [
              "Sean Mercer",
              "Richard Caldwell",
              "Claire Lawson",
              "Ryan Peters",
            ],
            privacy: "private",
          },
          {
            id: "cd-takeshi-2",
            title: "Fund Allocation — Q2 Planning",
            date: "Tue, Mar 10",
            time: "2:00 PM",
            duration: "45 min",
            participants: ["Sean Mercer", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-takeshi-3",
            title: "SyntheticDB Follow-on Sizing Discussion",
            date: "Thu, Mar 5",
            time: "10:00 AM",
            duration: "30 min",
            participants: [
              "Sean Mercer",
              "Claire Lawson",
              "Ryan Peters",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-takeshi-4",
            title: "AGV Strategy Offsite",
            date: "Mon, Feb 23",
            time: "1:00 PM",
            duration: "120 min",
            participants: [
              "Sean Mercer",
              "Richard Caldwell",
              "Claire Lawson",
              "Ryan Peters",
              "Lauren Cho",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-takeshi-1",
        subject: "Re: GreenCore Pro Forma — Draft",
        date: "Mar 14, 2026",
        snippet:
          "Claire, the revenue projections look aggressive. Can we schedule 30 min to walk through the assumptions before I sign off?",
        from: "Sean Mercer",
        to: ["Claire Lawson"],
      },
      {
        id: "em-takeshi-2",
        subject: "Q2 Fund Allocation — Draft Plan",
        date: "Mar 9, 2026",
        snippet:
          "Attached is the draft Q2 allocation. We have ~$15M in dry powder. I've reserved $5M for follow-ons and $10M for new investments per our discussion.",
        from: "Sean Mercer",
        to: ["Claire Lawson", "Richard Caldwell"],
      },
    ],
    news: [
      {
        id: "n-takeshi-1",
        headline:
          "European CVC funds report record capital deployment in FY2025",
        date: "Mar 3, 2026",
      },
      {
        id: "n-takeshi-2",
        headline:
          "Apex Global reports strong FY2025 financials, increases CVC budget",
        date: "Feb 20, 2026",
      },
      {
        id: "n-takeshi-3",
        headline:
          "Corporate VC reserve strategies evolve as startup valuations stabilize",
        date: "Feb 10, 2026",
      },
    ],
    otherInteractors: ["Richard Caldwell", "Ryan Peters"],
  },
  "mc-p9": {
    name: "Joon Park",
    email: "joon@syntheticdb.ai",
    domain: "syntheticdb.ai",
    role: "CEO",
    company: "SyntheticDB",
    tags: ["Portfolio Company", "AI Infrastructure", "Series A"],
    relationshipStatus:
      "Alex is one of our strongest portfolio founders. AGV led SyntheticDB's Series A and I sit on their board as an observer. He's incredibly focused and execution-oriented — ships fast and asks for forgiveness later. We catch up biweekly and I help him think through enterprise GTM and Europe market entry.",
    suggestions: [
      "How is SyntheticDB performing?",
      "What did Alex and I last discuss?",
    ],
    personalNotes: [
      "- CEO of SyntheticDB, one of our best portfolio cos",
      "- ships incredibly fast, sometimes too fast — needs to slow down on enterprise sales",
      "- wants to expand into Europe market, been connecting him w AG contacts",
      "- board observer seat, need to prep for next board meeting in april",
      "- mentioned he's thinking about raising a B round in Q3, keep this confidential for now",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-alex-1",
            title: "SyntheticDB — Biweekly Check-in",
            date: "Tue, Mar 17",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Joon Park", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-alex-2",
            title: "SyntheticDB Portfolio Check-in",
            date: "Wed, Mar 5",
            time: "3:00 PM",
            duration: "30 min",
            participants: ["Joon Park", "Claire Lawson", "Ryan Peters"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-alex-3",
            title: "SyntheticDB — Europe Market Strategy",
            date: "Thu, Feb 20",
            time: "4:00 PM",
            duration: "45 min",
            participants: ["Joon Park", "Claire Lawson"],
            privacy: "private",
          },
          {
            id: "cd-alex-4",
            title: "SyntheticDB Board Meeting",
            date: "Tue, Feb 11",
            time: "10:00 AM",
            duration: "90 min",
            participants: [
              "Joon Park",
              "Claire Lawson",
              "Ryan Peters",
              "Richard Caldwell",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-alex-1",
        subject: "Re: Europe Market Intro — Mitsubishi Chemical",
        date: "Mar 14, 2026",
        snippet:
          "Thanks Claire! The intro to the AG Chemical team was super helpful. We have a follow-up call scheduled for next week. Will keep you posted.",
        from: "Joon Park",
        to: ["Claire Lawson"],
      },
      {
        id: "em-alex-2",
        subject: "SyntheticDB March Metrics Update",
        date: "Mar 10, 2026",
        snippet:
          "Quick update: MRR hit $420K this month, up 18% MoM. Enterprise pipeline is strong — 3 new POCs kicked off. Full deck attached.",
        from: "Joon Park",
        to: ["Claire Lawson", "Ryan Peters"],
      },
      {
        id: "em-alex-3",
        subject: "Re: Board Prep — April Meeting",
        date: "Mar 7, 2026",
        snippet:
          "Will have the board deck ready by Mar 25. Heads up — I want to discuss Series B timing at the meeting. Confidential for now.",
        from: "Joon Park",
        to: ["Claire Lawson"],
      },
    ],
    news: [
      {
        id: "n-alex-1",
        headline:
          "SyntheticDB launches enterprise-grade vector database with 10x performance gains",
        date: "Mar 12, 2026",
      },
      {
        id: "n-alex-2",
        headline:
          "AI database startup SyntheticDB signs first Fortune 500 customer",
        date: "Feb 26, 2026",
      },
      {
        id: "n-alex-3",
        headline:
          "Vector database market projected to reach $8B by 2028",
        date: "Feb 15, 2026",
      },
      {
        id: "n-alex-4",
        headline:
          "SyntheticDB selected for CloudPrime Startups accelerator program",
        date: "Jan 30, 2026",
      },
    ],
    otherInteractors: ["Ryan Peters", "Richard Caldwell"],
  },
  "mc-p11": {
    name: "Dr. Nora Blackwell",
    email: "nora@greencore.io",
    domain: "greencore.io",
    role: "CTO",
    company: "GreenCore",
    tags: ["Active DD", "Climate Tech", "Carbon Capture"],
    relationshipStatus:
      "Nora is the CTO and technical brain behind GreenCore, a carbon capture startup we're currently running DD on. She's deeply technical and passionate about the science — our conversations are always substantive. I'm impressed by their approach but need to validate the scalability claims before we move forward.",
    suggestions: [
      "Where are we in the GreenCore DD process?",
      "What technical questions do I still have for Nora?",
    ],
    personalNotes: [
      "- CTO of GreenCore, PhD in chemical engineering from Ashmore",
      "- incredibly smart, speaks fast and assumes you know the science — ask clarifying Qs",
      "- their DAC tech is promising but scalability is the big question mark",
      "- need to get Ryan's take on the technical architecture docs she sent",
      "- she mentioned they have 18 months runway left, timeline matters for our investment",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-nora-1",
            title: "GreenCore DD Sync",
            date: "Wed, Mar 18",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Dr. Nora Blackwell",
              "Claire Lawson",
              "Ryan Peters",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-nora-2",
            title: "GreenCore — Technical Deep Dive",
            date: "Mon, Mar 10",
            time: "1:00 PM",
            duration: "90 min",
            participants: ["Dr. Nora Blackwell", "Claire Lawson", "Ryan Peters"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-nora-3",
            title: "GreenCore — Initial Discovery Call",
            date: "Thu, Mar 6",
            time: "10:00 AM",
            duration: "45 min",
            participants: ["Dr. Nora Blackwell", "Claire Lawson"],
            privacy: "private",
          },
          {
            id: "cd-nora-4",
            title: "GreenCore Demo — DAC Technology",
            date: "Tue, Mar 4",
            time: "3:00 PM",
            duration: "60 min",
            participants: [
              "Dr. Nora Blackwell",
              "Claire Lawson",
              "Ryan Peters",
              "Lauren Cho",
            ],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-elena-1",
        subject: "Technical Architecture Docs — GreenCore",
        date: "Mar 11, 2026",
        snippet:
          "Hi Claire, as promised here are the detailed architecture docs for our DAC module design. Happy to walk through any section in more detail.",
        from: "Dr. Nora Blackwell",
        to: ["Claire Lawson", "Ryan Peters"],
      },
      {
        id: "em-elena-2",
        subject: "Re: GreenCore — Scalability Questions",
        date: "Mar 7, 2026",
        snippet:
          "Great questions. Our pilot plant data shows 3.2x efficiency gains at scale vs. Gen 1. I've attached the test results and modeling assumptions.",
        from: "Dr. Nora Blackwell",
        to: ["Claire Lawson"],
      },
      {
        id: "em-elena-3",
        subject: "Re: Intro — AGV x GreenCore",
        date: "Mar 2, 2026",
        snippet:
          "Thanks for reaching out Claire! Really excited about the potential alignment with AG's sustainability initiatives. Looking forward to our first call.",
        from: "Dr. Nora Blackwell",
        to: ["Claire Lawson"],
      },
    ],
    news: [
      {
        id: "n-elena-1",
        headline:
          "GreenCore secures DOE grant for next-gen direct air capture technology",
        date: "Mar 9, 2026",
      },
      {
        id: "n-elena-2",
        headline:
          "Direct air capture costs drop below $200/ton milestone for first time",
        date: "Feb 28, 2026",
      },
      {
        id: "n-elena-3",
        headline:
          "GreenCore pilot plant achieves 3x efficiency improvement over industry standard",
        date: "Feb 12, 2026",
      },
      {
        id: "n-elena-4",
        headline:
          "Carbon capture startups attract record $4.2B in venture funding in 2025",
        date: "Jan 25, 2026",
      },
    ],
    otherInteractors: ["Ryan Peters", "Lauren Cho"],
  },
  "mc-p7": {
    name: "Raj Sundaram",
    email: "raj@sentra.app",
    domain: "sentra.app",
    role: "CEO",
    company: "Sentra",
    tags: ["Portfolio Company", "AI", "Organizational Intelligence"],
    relationshipStatus:
      "Raj is the CEO and co-founder of Sentra, one of our portfolio companies building organizational memory tools. He's a former university professor — very rigorous and thoughtful. We invested in their seed round and I've been helping them think through enterprise positioning and potential AG use cases.",
    suggestions: [
      "How is Sentra progressing?",
      "What did Raj and I last discuss?",
    ],
    personalNotes: [
      "- CEO of Sentra, former university prof, super technical",
      "- building organizational memory / meeting intelligence product",
      "- we invested in their seed, been helping w enterprise GTM",
      "- wants to pilot Sentra internally at AGV — need to discuss w Richard",
      "- very responsive, prefers email over slack tho",
    ],
    meetings: [
      {
        week: "Last week",
        items: [
          {
            id: "cd-ashwin-mc-1",
            title: "Sentra Demo — Claire & Ryan",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Raj Sundaram",
              "Claire Lawson",
              "Ryan Peters",
              "Leo Hartwell",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-ashwin-mc-2",
            title: "Sentra — Portfolio Check-in",
            date: "Fri, Mar 7",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Raj Sundaram", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-ashwin-mc-3",
            title: "Sentra — Enterprise Positioning Discussion",
            date: "Wed, Feb 26",
            time: "3:00 PM",
            duration: "45 min",
            participants: ["Raj Sundaram", "Claire Lawson", "Leo Hartwell"],
            privacy: "private",
          },
          {
            id: "cd-ashwin-mc-4",
            title: "Sentra Board Observer Update",
            date: "Mon, Feb 17",
            time: "10:00 AM",
            duration: "30 min",
            participants: ["Raj Sundaram", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-ashwin-mc-1",
        subject: "Re: Sentra — Product Feature Deck",
        date: "Mar 11, 2026",
        snippet:
          "Hi Claire, thanks for the great session today. Attaching the product feature deck as discussed. The data governance section is on slides 12-15.",
        from: "Raj Sundaram",
        to: ["Claire Lawson", "Ryan Peters"],
      },
      {
        id: "em-ashwin-mc-2",
        subject: "Sentra February Investor Update",
        date: "Mar 1, 2026",
        snippet:
          "Quick monthly update: 40% MoM growth in active users, launched meeting intelligence v2, and signed 3 new design partners. Full update attached.",
        from: "Raj Sundaram",
        to: ["Claire Lawson"],
      },
      {
        id: "em-ashwin-mc-3",
        subject: "Re: AGV Internal Pilot?",
        date: "Feb 25, 2026",
        snippet:
          "Would love to explore an internal pilot at AGV. Happy to set up a tailored demo for the broader team whenever you're ready.",
        from: "Raj Sundaram",
        to: ["Claire Lawson"],
      },
    ],
    news: [
      {
        id: "n-ashwin-mc-1",
        headline:
          "Sentra launches AI-powered organizational memory platform",
        date: "Mar 8, 2026",
      },
      {
        id: "n-ashwin-mc-2",
        headline:
          "Meeting intelligence startup Sentra raises seed round led by AGV and Horizon Fund",
        date: "Feb 14, 2026",
      },
      {
        id: "n-ashwin-mc-3",
        headline:
          "Enterprise AI tools market sees surge in demand for organizational intelligence",
        date: "Feb 5, 2026",
      },
    ],
    otherInteractors: ["Leo Hartwell", "Ryan Peters"],
  },
  "david-chen": {
    name: "David Chen",
    email: "david.chen@novabridge.com",
    domain: "novabridge.com",
    role: "VP of Operations",
    company: "NovaBridge",
    tags: ["Client", "Active Deal", "External"],
    relationshipStatus:
      "David is leading a digital transformation initiative at NovaBridge and is evaluating enterprise tooling across the org. We connected through a mutual contact at a fintech conference. He's methodical and values ROI-driven conversations — always wants to see case studies and benchmarks before moving forward.",
    suggestions: [
      "What did we talk about last time?",
      "Prep me for the next call with David",
    ],
    personalNotes: [
      "- VP of Operations at NovaBridge, driving digital transformation",
      "- met through mutual contact at FinTech Forward conference",
      "- wants to see ROI case studies before committing to anything",
      "- responsive on email, prefers morning meetings (EST)",
      "- deal is progressing — need to send updated proposal by end of week",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-dc-1",
            title: "NovaBridge — Proposal Review",
            date: "Mon, Mar 10",
            time: "10:00 AM",
            duration: "45 min",
            participants: ["David Chen", "Tracy Kim", "Leo Hartwell"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-dc-2",
            title: "NovaBridge — Use Case Deep Dive",
            date: "Wed, Mar 5",
            time: "2:00 PM",
            duration: "60 min",
            participants: ["David Chen", "Tracy Kim"],
            privacy: "private",
          },
          {
            id: "cd-dc-3",
            title: "NovaBridge — Initial Discovery",
            date: "Mon, Mar 3",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["David Chen", "Tracy Kim", "Raj Sundaram"],
            privacy: "public",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-dc-4",
            title: "FinTech Forward — Intro Meeting",
            date: "Thu, Feb 27",
            time: "4:00 PM",
            duration: "20 min",
            participants: ["David Chen", "Tracy Kim"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-dc-1",
        subject: "Re: NovaBridge — Updated Proposal",
        date: "Mar 10, 2026",
        snippet:
          "Thanks Tracy — reviewed the proposal with our procurement team. A few questions on the implementation timeline. Can we schedule a follow-up this week?",
        from: "David Chen",
        to: ["Tracy Kim"],
      },
      {
        id: "em-dc-2",
        subject: "NovaBridge — Use Case Requirements",
        date: "Mar 4, 2026",
        snippet:
          "Hi Tracy, attaching our internal requirements doc for the operations platform evaluation. The key criteria are on page 3.",
        from: "David Chen",
        to: ["Tracy Kim"],
      },
      {
        id: "em-dc-3",
        subject: "Re: Great meeting at FinTech Forward",
        date: "Feb 28, 2026",
        snippet:
          "Great connecting with you at the conference! I'd love to explore how this could fit into our digital transformation roadmap. Let's set up a call next week.",
        from: "David Chen",
        to: ["Tracy Kim"],
      },
    ],
    news: [
      {
        id: "n-dc-1",
        headline:
          "NovaBridge announces $150M digital transformation initiative",
        date: "Mar 8, 2026",
      },
      {
        id: "n-dc-2",
        headline:
          "NovaBridge partners with major cloud provider for enterprise modernization",
        date: "Feb 20, 2026",
      },
    ],
    otherInteractors: ["Raj Sundaram", "Leo Hartwell"],
  },
  "mc-p8": {
    name: "Leo Hartwell",
    email: "leo@sentra.app",
    domain: "sentra.app",
    role: "Co-founder",
    company: "Sentra",
    tags: ["Portfolio Company", "AI", "Product"],
    relationshipStatus:
      "Leo is Sentra's technical co-founder and the product visionary. He's the one who usually runs demos and handles the product side of our conversations. Very sharp on UX and product thinking — I'm impressed by how fast they iterate. He and Raj complement each other really well.",
    suggestions: [
      "What did Leo demo for us last?",
      "Any follow-ups pending with Leo?",
    ],
    personalNotes: [
      "- co-founder of Sentra, focuses on product and technical side",
      "- runs most of the demos, very good at product storytelling",
      "- iterates super fast, every time we talk theres something new to see",
      "- need to send him feedback on the last demo, been sitting on it",
      "- mentioned he's based in SF, should connect him w other portfolio founders",
    ],
    meetings: [
      {
        week: "Last week",
        items: [
          {
            id: "cd-justin-mc-1",
            title: "Sentra Demo — Claire & Ryan",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Leo Hartwell",
              "Claire Lawson",
              "Ryan Peters",
              "Raj Sundaram",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-justin-mc-2",
            title: "AGV — Initial Discovery Call",
            date: "Thu, Mar 6",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Leo Hartwell", "Claire Lawson"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-justin-mc-3",
            title: "Sentra — Enterprise Positioning Discussion",
            date: "Wed, Feb 26",
            time: "3:00 PM",
            duration: "45 min",
            participants: ["Leo Hartwell", "Claire Lawson", "Raj Sundaram"],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-justin-mc-1",
        subject: "Re: Sentra — Product Feature Deck",
        date: "Mar 11, 2026",
        snippet:
          "Hi Claire — great chatting today! Here's the deck with the data governance deep dive you asked about. Let me know if you want a follow-up walkthrough.",
        from: "Leo Hartwell",
        to: ["Claire Lawson", "Ryan Peters"],
      },
      {
        id: "em-justin-mc-2",
        subject: "Follow-up: Apex AI Conference",
        date: "Mar 3, 2026",
        snippet:
          "Great meeting you at the conference Claire! Would love to set up a proper call to explore how Sentra could help AGV's workflow. Free next week?",
        from: "Leo Hartwell",
        to: ["Claire Lawson"],
      },
    ],
    news: [
      {
        id: "n-justin-mc-1",
        headline:
          "Sentra launches AI-powered organizational memory platform",
        date: "Mar 8, 2026",
      },
      {
        id: "n-justin-mc-2",
        headline:
          "Meeting intelligence startup Sentra raises seed round led by AGV and Horizon Fund",
        date: "Feb 14, 2026",
      },
    ],
    otherInteractors: ["Raj Sundaram", "Ryan Peters"],
  },
};
