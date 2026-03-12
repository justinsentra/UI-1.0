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
  "sunna-mo": {
    name: "Sunna Mo",
    email: "sunna.mo@mitsubishicorp.com",
    domain: "http://www.mitsubishicorp.com/northamerica",
    role: "Business Development and Strategic Partnerships",
    company: "Mitsubishi Corporation (Americas)",
    tags: ["MCGI", "AI Strategy", "Design Partner"],
    relationshipStatus:
      "Sunna met me at the a16z Speedrun AI faire — we had a good conversation and we recently had a call with her and Ryotaro to walk through Sentra and talk about potential use cases as well as a brief demo. She and Ryotaro are waiting to receive the product feature deck.",
    suggestions: [
      "What did we talk about last time?",
      "Prep me for the next call with Sunna",
    ],
    personalNotes: [
      "- met at a16z speedrun AI faire, instantly got the vision",
      "- works closely with Ryotaro on tech evaluations",
      "- wants to see the product feature deck — need to send ASAP",
      "- interested in meeting intelligence + organizational memory angle",
      "- very thoughtful evaluator, asks sharp questions about data governance",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-sunna-1",
            title: "Sentra Demo — Sunna & Ryotaro",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Justin Cheng",
              "Ashwin Gopinath",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-sunna-2",
            title: "MCGI — Initial Discovery Call",
            date: "Thu, Mar 6",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Sunna Mo", "Justin Cheng"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-sunna-3",
            title: "a16z Speedrun AI Faire — Intro",
            date: "Sat, Mar 1",
            time: "3:30 PM",
            duration: "15 min",
            participants: ["Sunna Mo", "Justin Cheng"],
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
          "Thanks Justin — Ryotaro and I are looking forward to reviewing the deck. Can you also include the data governance section we discussed?",
        from: "Sunna Mo",
        to: ["Justin Cheng"],
      },
      {
        id: "em-sunna-2",
        subject: "Follow-up: a16z Speedrun AI Faire",
        date: "Mar 3, 2026",
        snippet:
          "Great meeting you at the faire! I'd love to set up a proper discovery call to explore how Sentra could fit into MCGI's workflow.",
        from: "Sunna Mo",
        to: ["Justin Cheng"],
      },
      {
        id: "em-sunna-3",
        subject: "Re: MCGI AI Strategy — Vendor Landscape",
        date: "Feb 28, 2026",
        snippet:
          "We're currently evaluating 4 vendors in the organizational intelligence space. Would be great to understand Sentra's differentiation.",
        from: "Sunna Mo",
        to: ["Justin Cheng", "Ryotaro Tanaka"],
      },
    ],
    news: [
      {
        id: "n-1",
        headline: "MCGI announces $2B AI transformation initiative for FY2026",
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
          "MCGI appoints new Chief Digital Officer to lead cross-division AI strategy",
        date: "Feb 27, 2026",
      },
      {
        id: "n-4",
        headline:
          "MCGI Q3 earnings beat estimates, cites operational efficiency gains from automation",
        date: "Feb 20, 2026",
      },
    ],
    otherInteractors: ["Ashwin Gopinath", "Ryotaro Tanaka"],
  },
  ashwin: {
    name: "Ashwin Gopinath",
    email: "ashwin@sentra.app",
    domain: "sentra.app",
    role: "CEO",
    company: "Sentra",
    tags: ["Sentra", "Co-founder"],
    relationshipStatus:
      "Your co-founder and former MIT professor. You two meet 3-4x weekly covering product strategy, investor narrative, and launch prep. Ashwin trusts your judgment on GTM and leans on you for customer-facing decisions. The dynamic is direct and high-trust \u2014 you skip pleasantries and get to the point.",
    suggestions: [
      "What did we talk about last time?",
      "Does Ashwin need anything from me?",
    ],
    personalNotes: [
      "- prefers async updates, dont schedule unnecesary meetings w him",
      "- super technical, always wants to see the data first before commiting to anything",
      "- heads down on phase 1 launch rn (granola killer + leadership stuff)",
      "- former MIT prof lol, very rigorous thinker",
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
              "Ashwin Gopinath",
              "Andrey Starenky",
              "Justin Cheng",
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
              "Ashwin Gopinath",
              "Andrey Starenky",
              "Justin Cheng",
              "Kristina Beaman",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-3",
            title: "SXSW Launch Planning",
            date: "Mon, Feb 24",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Ashwin Gopinath", "Justin Cheng"],
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
            participants: ["Ashwin Gopinath", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-5",
            title: "Investor Narrative Workshop",
            date: "Tue, Feb 18",
            time: "1:00 PM",
            duration: "60 min",
            participants: [
              "Ashwin Gopinath",
              "Justin Cheng",
              "Lakshmi Shankar",
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
            participants: ["Ashwin Gopinath", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-a2",
            title: "Design Partner Pipeline Review",
            date: "Mon, Feb 10",
            time: "3:00 PM",
            duration: "30 min",
            participants: [
              "Ashwin Gopinath",
              "Justin Cheng",
              "Kristina Beaman",
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
            title: "Ashwin / Justin 1:1",
            date: "Thu, Feb 6",
            time: "10:00 AM",
            duration: "30 min",
            participants: ["Ashwin Gopinath", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-a4",
            title: "Demo Script Walkthrough",
            date: "Tue, Feb 4",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Ashwin Gopinath",
              "Andrey Starenky",
              "Justin Cheng",
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
              "Ashwin Gopinath",
              "Andrey Starenky",
              "Justin Cheng",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Andrey Starenky", "Kristina Beaman", "Lakshmi Shankar"],
  },
  andrey: {
    name: "Andrey Starenky",
    email: "andrey@sentra.app",
    domain: "sentra.app",
    role: "CTO",
    company: "Sentra",
    tags: ["Sentra", "Co-founder"],
    relationshipStatus:
      "Sentra\u2019s CTO and your closest technical counterpart. You collaborate on product-engineering tradeoffs and sprint priorities. Andrey has strong architectural opinions \u2014 he respects when you push back with data. You two bonded over a shared obsession with clean APIs and late-night debugging sessions during the early days.",
    suggestions: [
      "What did we talk about last time?",
      "Does Andrey need anything from me?",
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
              "Andrey Starenky",
              "Ashwin Gopinath",
              "Justin Cheng",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-7",
            title: "Design Review — Pill v2",
            date: "Mon, Feb 24",
            time: "1:30 PM",
            duration: "45 min",
            participants: ["Andrey Starenky", "Justin Cheng"],
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
              "Andrey Starenky",
              "Justin Cheng",
              "Kristina Beaman",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-b1",
            title: "Architecture Review \u2014 Data Pipeline",
            date: "Tue, Feb 18",
            time: "3:00 PM",
            duration: "60 min",
            participants: ["Andrey Starenky", "Justin Cheng"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-mtg-b2",
            title: "Andrey / Justin Sync",
            date: "Fri, Feb 14",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Andrey Starenky", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-b3",
            title: "API Spec Finalization",
            date: "Wed, Feb 12",
            time: "4:00 PM",
            duration: "45 min",
            participants: ["Andrey Starenky", "Justin Cheng", "Kevin Liu"],
            privacy: "public",
          },
          {
            id: "cd-mtg-b4",
            title: "Bug Triage \u2014 Pill Component",
            date: "Mon, Feb 10",
            time: "9:30 AM",
            duration: "30 min",
            participants: ["Andrey Starenky", "Justin Cheng"],
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
              "Andrey Starenky",
              "Justin Cheng",
              "Ashwin Gopinath",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Ashwin Gopinath", "Kevin Liu"],
  },
  kristina: {
    name: "Kristina Beaman",
    email: "kristina@sentra.app",
    domain: "sentra.app",
    role: "Executive Assistant",
    company: "Sentra",
    tags: ["Sentra", "Operations"],
    relationshipStatus:
      "Your right hand for operations and scheduling. Kristina keeps things moving when you\u2019re heads-down. She\u2019s proactive about flagging calendar conflicts and anticipates what you\u2019ll need before you ask. You two have a shorthand \u2014 a Slack emoji reaction is often enough to greenlight something.",
    suggestions: [
      "What's Kristina working on?",
      "Recent action items for Kristina?",
    ],
    personalNotes: [
      "- handles scheduling for me and ashwin, absolutley clutch",
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
              "Kristina Beaman",
              "Justin Cheng",
              "Ashwin Gopinath",
            ],
            privacy: "public",
          },
          {
            id: "cd-mtg-10",
            title: "GTM Strategy Sync",
            date: "Tue, Feb 25",
            time: "10:00 AM",
            duration: "60 min",
            participants: ["Kristina Beaman", "Justin Cheng"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-mtg-c1",
            title: "SXSW Press Kit Review",
            date: "Thu, Feb 20",
            time: "1:00 PM",
            duration: "30 min",
            participants: ["Kristina Beaman", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-c2",
            title: "Event Logistics Checklist",
            date: "Tue, Feb 18",
            time: "11:00 AM",
            duration: "45 min",
            participants: [
              "Kristina Beaman",
              "Justin Cheng",
              "Ashwin Gopinath",
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
            participants: ["Kristina Beaman", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-c4",
            title: "Vendor Outreach Debrief",
            date: "Mon, Feb 10",
            time: "4:00 PM",
            duration: "30 min",
            participants: ["Kristina Beaman", "Justin Cheng"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Ashwin Gopinath"],
  },
  sarah: {
    name: "Sarah Chen",
    email: "sarah@campfire.io",
    domain: "campfire.io",
    role: "Head of Product",
    company: "Campfire",
    tags: ["Design Partner"],
    relationshipStatus:
      "Key contact at Campfire, one of your earliest design partners. Sarah was the first external person to see the demo and immediately got it. She\u2019s been generous with product feedback and introduced you to two other ops leads in her network. You occasionally grab coffee when you\u2019re both in the Mission.",
    suggestions: [
      "What did we talk about last time?",
      "Does Sarah need anything from me?",
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
            participants: ["Sarah Chen", "Justin Cheng", "Andrey Starenky"],
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
            participants: ["Sarah Chen", "Justin Cheng"],
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
            participants: ["Sarah Chen", "Justin Cheng", "Andrey Starenky"],
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
            participants: ["Sarah Chen", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-d3",
            title: "Intro Call \u2014 Sarah Chen",
            date: "Mon, Feb 3",
            time: "1:00 PM",
            duration: "30 min",
            participants: ["Sarah Chen", "Justin Cheng"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Andrey Starenky"],
  },
  kevin: {
    name: "Kevin Liu",
    email: "kevin@relay.app",
    domain: "relay.app",
    role: "VP Engineering",
    company: "Relay",
    tags: ["Prospect"],
    relationshipStatus:
      "Technical evaluator at Relay who\u2019s been kicking the tires on Sentra\u2019s API. Kevin is methodical \u2014 he won\u2019t commit until he\u2019s stress-tested every edge case. You two nerd out on systems design. He mentioned wanting to grab ramen at Mensho next time you\u2019re both free.",
    suggestions: [
      "What did we talk about last time?",
      "Does Kevin need anything from me?",
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
            participants: ["Kevin Liu", "Justin Cheng", "Andrey Starenky"],
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
            participants: ["Kevin Liu", "Justin Cheng"],
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
            participants: ["Kevin Liu", "Justin Cheng", "Andrey Starenky"],
            privacy: "public",
          },
          {
            id: "cd-mtg-e3",
            title: "Intro Call \u2014 Kevin Liu",
            date: "Mon, Feb 10",
            time: "2:00 PM",
            duration: "30 min",
            participants: ["Kevin Liu", "Justin Cheng"],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Andrey Starenky"],
  },
  lakshmi: {
    name: "Lakshmi Shankar",
    email: "lakshmi@togetherfund.com",
    domain: "togetherfund.com",
    role: "Lead Investor",
    company: "Together Fund",
    tags: ["Investor", "Together Fund"],
    relationshipStatus:
      "Sentra\u2019s lead investor from Together Fund. Lakshmi led the $5M round and has been an active, high-conviction backer. She\u2019s introduced you to enterprise prospects and gives sharp strategic advice. Outside work, you two bond over skiing \u2014 she\u2019s trying to convince you to do a Tahoe trip before the season ends.",
    suggestions: [
      "What did we talk about last time?",
      "Does Lakshmi need anything from me?",
    ],
    personalNotes: [
      "- lead investor, together fund. led our 5M round",
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
              "Lakshmi Shankar",
              "Justin Cheng",
              "Ashwin Gopinath",
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
              "Lakshmi Shankar",
              "Justin Cheng",
              "Ashwin Gopinath",
            ],
            privacy: "private",
          },
          {
            id: "cd-mtg-f2",
            title: "Enterprise Intro \u2014 Vantage Corp",
            date: "Tue, Feb 11",
            time: "2:00 PM",
            duration: "30 min",
            participants: ["Lakshmi Shankar", "Justin Cheng"],
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
              "Lakshmi Shankar",
              "Justin Cheng",
              "Ashwin Gopinath",
            ],
            privacy: "private",
          },
          {
            id: "cd-mtg-f4",
            title: "Fundraising Strategy Call",
            date: "Mon, Jan 20",
            time: "3:00 PM",
            duration: "60 min",
            participants: ["Lakshmi Shankar", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-mtg-f5",
            title: "Intro \u2014 Lakshmi / Sentra Team",
            date: "Wed, Jan 8",
            time: "1:00 PM",
            duration: "30 min",
            participants: [
              "Lakshmi Shankar",
              "Justin Cheng",
              "Ashwin Gopinath",
              "Andrey Starenky",
            ],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [],
    news: [],
    otherInteractors: ["Ashwin Gopinath"],
  },
};
