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
  "ryotaro-tanaka": {
    name: "Ryotaro Tanaka",
    email: "ryotaro.tanaka@mitsubishicorp.com",
    domain: "http://www.mitsubishicorp.com/northamerica",
    role: "Director of Strategic Investments",
    company: "Mitsubishi Corporation",
    tags: ["MCGI", "Deal Origination", "M-Lab"],
    relationshipStatus:
      "Ryotaro is my closest collaborator on the investment team. We co-lead deal origination and he manages most of our M-Lab consortium relationships. He's methodical and detail-oriented — I trust his judgment on technical diligence more than anyone else at MCGI.",
    suggestions: [
      "What did Ryotaro and I discuss last?",
      "Prep me for my next meeting with Ryotaro",
    ],
    personalNotes: [
      "- my main partner on deal sourcing, we work really well together",
      "- super detail oriented, always has the numbers ready before anyone asks",
      "- manages M-Lab consortium relationships, keep him looped on anything related",
      "- prefers structured agendas, dont show up to a meeting w him unprepared",
      "- mentioned wanting to visit NeuralDB's SF office, need to coordniate",
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
            participants: ["Ryotaro Tanaka", "Sunna Mo", "Reina Ozaki"],
            privacy: "private",
          },
          {
            id: "cd-ryo-2",
            title: "CarbonGrid DD Sync",
            date: "Wed, Mar 18",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Ryotaro Tanaka",
              "Sunna Mo",
              "Dr. Elena Vasquez",
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
            title: "Sentra Demo — Sunna & Ryotaro",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Ryotaro Tanaka",
              "Sunna Mo",
              "Justin Cheng",
              "Ashwin Gopinath",
            ],
            privacy: "private",
          },
          {
            id: "cd-ryo-4",
            title: "M-Lab Consortium Update",
            date: "Thu, Mar 13",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Ryotaro Tanaka", "Sunna Mo", "Kengo Morimoto"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-ryo-5",
            title: "NeuralDB Portfolio Check-in",
            date: "Wed, Mar 5",
            time: "3:00 PM",
            duration: "30 min",
            participants: ["Ryotaro Tanaka", "Sunna Mo", "Alex Kim"],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-ryo-1",
        subject: "Re: CarbonGrid Technical DD — Next Steps",
        date: "Mar 15, 2026",
        snippet:
          "I reviewed the technical architecture docs Elena sent over. A few concerns on the scalability of their DAC modules — can we discuss Monday?",
        from: "Ryotaro Tanaka",
        to: ["Sunna Mo"],
      },
      {
        id: "em-ryo-2",
        subject: "M-Lab Consortium Q1 Report",
        date: "Mar 10, 2026",
        snippet:
          "Attached is the Q1 consortium update. Three new startups applied for the accelerator cohort — flagging two that align with our thesis.",
        from: "Ryotaro Tanaka",
        to: ["Sunna Mo", "Kengo Morimoto"],
      },
      {
        id: "em-ryo-3",
        subject: "Re: Sentra Product Feature Deck",
        date: "Mar 12, 2026",
        snippet:
          "Thanks for forwarding. The org memory angle is interesting — I want to dig into the data governance piece more before our next call with them.",
        from: "Ryotaro Tanaka",
        to: ["Sunna Mo"],
      },
    ],
    news: [
      {
        id: "n-ryo-1",
        headline:
          "Mitsubishi Corporation launches new CVC fund targeting deep tech startups",
        date: "Mar 8, 2026",
      },
      {
        id: "n-ryo-2",
        headline:
          "M-Lab consortium expands to include 15 new corporate partners",
        date: "Feb 25, 2026",
      },
      {
        id: "n-ryo-3",
        headline:
          "Japanese corporate VCs increase deal activity in North America by 40% YoY",
        date: "Feb 18, 2026",
      },
    ],
    otherInteractors: ["Kengo Morimoto", "Reina Ozaki", "Alex Kim"],
  },
  "mc-p3": {
    name: "Kengo Morimoto",
    email: "kengo.morimoto@mitsubishicorp.com",
    domain: "http://www.mitsubishicorp.com/northamerica",
    role: "CEO",
    company: "Mitsubishi Corporation",
    tags: ["MCGI", "Leadership", "CVC"],
    relationshipStatus:
      "Kengo is our CEO and the ultimate decision-maker on all major investments. He's strategic and deliberate — doesn't rush into anything but once he's bought in, he moves fast. I present portfolio updates to him monthly and he trusts my and Ryotaro's sourcing judgment.",
    suggestions: [
      "What did I last brief Kengo on?",
      "What does Kengo need from me this week?",
    ],
    personalNotes: [
      "- CEO of MCGI, very senior and busy — keep updates concise",
      "- cares most about strategic alignment w MC's broader portfolio",
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
              "Kengo Morimoto",
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Takeshi Yamada",
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
            title: "CarbonGrid Investment Thesis Review",
            date: "Tue, Mar 3",
            time: "10:00 AM",
            duration: "45 min",
            participants: [
              "Kengo Morimoto",
              "Sunna Mo",
              "Ryotaro Tanaka",
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
            title: "MCGI Strategy Offsite",
            date: "Mon, Feb 23",
            time: "1:00 PM",
            duration: "120 min",
            participants: [
              "Kengo Morimoto",
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Takeshi Yamada",
              "Reina Ozaki",
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
              "Kengo Morimoto",
              "Sunna Mo",
              "Ryotaro Tanaka",
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
          "Thanks Sunna. NeuralDB numbers look strong. Can you add a slide on CarbonGrid's regulatory risk before Friday?",
        from: "Kengo Morimoto",
        to: ["Sunna Mo"],
      },
      {
        id: "em-kengo-2",
        subject: "Re: Silicon Valley Trip — April",
        date: "Mar 6, 2026",
        snippet:
          "Let's plan to visit NeuralDB and Sentra while we're out there. Please coordinate with Reina on logistics.",
        from: "Kengo Morimoto",
        to: ["Sunna Mo", "Reina Ozaki"],
      },
    ],
    news: [
      {
        id: "n-kengo-1",
        headline:
          "Mitsubishi Corporation CVC arm surpasses $500M in deployed capital",
        date: "Mar 1, 2026",
      },
      {
        id: "n-kengo-2",
        headline:
          "MCGI CEO Kengo Morimoto speaks at CVC Forum Tokyo on corporate-startup collaboration",
        date: "Feb 15, 2026",
      },
    ],
    otherInteractors: ["Ryotaro Tanaka", "Takeshi Yamada"],
  },
  "mc-p4": {
    name: "Reina Ozaki",
    email: "reina.ozaki@mitsubishicorp.com",
    domain: "http://www.mitsubishicorp.com/northamerica",
    role: "Investment Associate",
    company: "Mitsubishi Corporation",
    tags: ["MCGI", "Deal Screening", "Market Research"],
    relationshipStatus:
      "Reina is our newest team member and handles deal screening and market research. She's sharp and eager to learn — I've been mentoring her on the diligence process. She produces great market maps and competitive landscapes that help us move faster on sourcing decisions.",
    suggestions: [
      "What's Reina working on right now?",
      "Any research requests I have pending with Reina?",
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
            participants: ["Reina Ozaki", "Sunna Mo", "Ryotaro Tanaka"],
            privacy: "private",
          },
          {
            id: "cd-reina-2",
            title: "Market Map Review — Climate Tech",
            date: "Thu, Mar 19",
            time: "3:00 PM",
            duration: "30 min",
            participants: ["Reina Ozaki", "Sunna Mo"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-reina-3",
            title: "Reina / Sunna 1:1",
            date: "Wed, Mar 11",
            time: "4:00 PM",
            duration: "30 min",
            participants: ["Reina Ozaki", "Sunna Mo"],
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
              "Reina Ozaki",
              "Sunna Mo",
              "Ryotaro Tanaka",
            ],
            privacy: "private",
          },
          {
            id: "cd-reina-5",
            title: "Competitive Landscape Walkthrough",
            date: "Thu, Mar 5",
            time: "2:00 PM",
            duration: "30 min",
            participants: ["Reina Ozaki", "Sunna Mo"],
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
          "Hi Sunna, attached is the updated climate tech market map with the new DAC players. Added CarbonGrid's positioning vs. competitors per your ask.",
        from: "Reina Ozaki",
        to: ["Sunna Mo"],
      },
      {
        id: "em-reina-2",
        subject: "Re: April SV Trip — Logistics",
        date: "Mar 7, 2026",
        snippet:
          "I've started coordinating with NeuralDB and Sentra for the April visit. Will have a draft itinerary by end of week.",
        from: "Reina Ozaki",
        to: ["Sunna Mo", "Kengo Morimoto"],
      },
      {
        id: "em-reina-3",
        subject: "New Inbound Deals — Week of Mar 2",
        date: "Mar 2, 2026",
        snippet:
          "5 new inbounds this week. Flagged 2 that fit our thesis — one in AI infra and one in carbon markets. Summaries attached.",
        from: "Reina Ozaki",
        to: ["Sunna Mo", "Ryotaro Tanaka"],
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
    otherInteractors: ["Ryotaro Tanaka", "Kengo Morimoto"],
  },
  "mc-p5": {
    name: "Takeshi Yamada",
    email: "takeshi.yamada@mitsubishicorp.com",
    domain: "http://www.mitsubishicorp.com/northamerica",
    role: "VP Finance",
    company: "Mitsubishi Corporation",
    tags: ["MCGI", "Finance", "Fund Allocation"],
    relationshipStatus:
      "Takeshi oversees all fund allocation and financial reporting for MCGI. We work together on capital calls and investment sizing. He's conservative by nature which is a good counterbalance to the team's enthusiasm — makes sure we stay disciplined on check sizes and reserves.",
    suggestions: [
      "What's the latest on fund allocation?",
      "Any financial reviews pending with Takeshi?",
    ],
    personalNotes: [
      "- VP finance, manages fund allocation and reporting",
      "- very by-the-numbers, always wants to see the full finacial model",
      "- conservative on check sizes which is honestly helpful",
      "- need to get him the CarbonGrid pro forma before next IC meeting",
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
              "Takeshi Yamada",
              "Kengo Morimoto",
              "Sunna Mo",
              "Ryotaro Tanaka",
            ],
            privacy: "private",
          },
          {
            id: "cd-takeshi-2",
            title: "Fund Allocation — Q2 Planning",
            date: "Tue, Mar 10",
            time: "2:00 PM",
            duration: "45 min",
            participants: ["Takeshi Yamada", "Sunna Mo"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-takeshi-3",
            title: "NeuralDB Follow-on Sizing Discussion",
            date: "Thu, Mar 5",
            time: "10:00 AM",
            duration: "30 min",
            participants: [
              "Takeshi Yamada",
              "Sunna Mo",
              "Ryotaro Tanaka",
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
            title: "MCGI Strategy Offsite",
            date: "Mon, Feb 23",
            time: "1:00 PM",
            duration: "120 min",
            participants: [
              "Takeshi Yamada",
              "Kengo Morimoto",
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Reina Ozaki",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-takeshi-1",
        subject: "Re: CarbonGrid Pro Forma — Draft",
        date: "Mar 14, 2026",
        snippet:
          "Sunna, the revenue projections look aggressive. Can we schedule 30 min to walk through the assumptions before I sign off?",
        from: "Takeshi Yamada",
        to: ["Sunna Mo"],
      },
      {
        id: "em-takeshi-2",
        subject: "Q2 Fund Allocation — Draft Plan",
        date: "Mar 9, 2026",
        snippet:
          "Attached is the draft Q2 allocation. We have ~$15M in dry powder. I've reserved $5M for follow-ons and $10M for new investments per our discussion.",
        from: "Takeshi Yamada",
        to: ["Sunna Mo", "Kengo Morimoto"],
      },
    ],
    news: [
      {
        id: "n-takeshi-1",
        headline:
          "Japanese CVC funds report record capital deployment in FY2025",
        date: "Mar 3, 2026",
      },
      {
        id: "n-takeshi-2",
        headline:
          "Mitsubishi Corporation reports strong FY2025 financials, increases CVC budget",
        date: "Feb 20, 2026",
      },
      {
        id: "n-takeshi-3",
        headline:
          "Corporate VC reserve strategies evolve as startup valuations stabilize",
        date: "Feb 10, 2026",
      },
    ],
    otherInteractors: ["Kengo Morimoto", "Ryotaro Tanaka"],
  },
  "mc-p9": {
    name: "Alex Kim",
    email: "alex@neuraldb.ai",
    domain: "neuraldb.ai",
    role: "CEO",
    company: "NeuralDB",
    tags: ["Portfolio Company", "AI Infrastructure", "Series A"],
    relationshipStatus:
      "Alex is one of our strongest portfolio founders. MCGI led NeuralDB's Series A and I sit on their board as an observer. He's incredibly focused and execution-oriented — ships fast and asks for forgiveness later. We catch up biweekly and I help him think through enterprise GTM and Japan market entry.",
    suggestions: [
      "How is NeuralDB performing?",
      "What did Alex and I last discuss?",
    ],
    personalNotes: [
      "- CEO of NeuralDB, one of our best portfolio cos",
      "- ships incredibly fast, sometimes too fast — needs to slow down on enterprise sales",
      "- wants to expand into Japan market, been connecting him w MC contacts",
      "- board observer seat, need to prep for next board meeting in april",
      "- mentioned he's thinking about raising a B round in Q3, keep this confidential for now",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-alex-1",
            title: "NeuralDB — Biweekly Check-in",
            date: "Tue, Mar 17",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Alex Kim", "Sunna Mo"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-alex-2",
            title: "NeuralDB Portfolio Check-in",
            date: "Wed, Mar 5",
            time: "3:00 PM",
            duration: "30 min",
            participants: ["Alex Kim", "Sunna Mo", "Ryotaro Tanaka"],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last month",
        items: [
          {
            id: "cd-alex-3",
            title: "NeuralDB — Japan Market Strategy",
            date: "Thu, Feb 20",
            time: "4:00 PM",
            duration: "45 min",
            participants: ["Alex Kim", "Sunna Mo"],
            privacy: "private",
          },
          {
            id: "cd-alex-4",
            title: "NeuralDB Board Meeting",
            date: "Tue, Feb 11",
            time: "10:00 AM",
            duration: "90 min",
            participants: [
              "Alex Kim",
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Kengo Morimoto",
            ],
            privacy: "private",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-alex-1",
        subject: "Re: Japan Market Intro — Mitsubishi Chemical",
        date: "Mar 14, 2026",
        snippet:
          "Thanks Sunna! The intro to the MC Chemical team was super helpful. We have a follow-up call scheduled for next week. Will keep you posted.",
        from: "Alex Kim",
        to: ["Sunna Mo"],
      },
      {
        id: "em-alex-2",
        subject: "NeuralDB March Metrics Update",
        date: "Mar 10, 2026",
        snippet:
          "Quick update: MRR hit $420K this month, up 18% MoM. Enterprise pipeline is strong — 3 new POCs kicked off. Full deck attached.",
        from: "Alex Kim",
        to: ["Sunna Mo", "Ryotaro Tanaka"],
      },
      {
        id: "em-alex-3",
        subject: "Re: Board Prep — April Meeting",
        date: "Mar 7, 2026",
        snippet:
          "Will have the board deck ready by Mar 25. Heads up — I want to discuss Series B timing at the meeting. Confidential for now.",
        from: "Alex Kim",
        to: ["Sunna Mo"],
      },
    ],
    news: [
      {
        id: "n-alex-1",
        headline:
          "NeuralDB launches enterprise-grade vector database with 10x performance gains",
        date: "Mar 12, 2026",
      },
      {
        id: "n-alex-2",
        headline:
          "AI database startup NeuralDB signs first Fortune 500 customer",
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
          "NeuralDB selected for AWS Startups accelerator program",
        date: "Jan 30, 2026",
      },
    ],
    otherInteractors: ["Ryotaro Tanaka", "Kengo Morimoto"],
  },
  "mc-p11": {
    name: "Dr. Elena Vasquez",
    email: "elena@carbongrid.io",
    domain: "carbongrid.io",
    role: "CTO",
    company: "CarbonGrid",
    tags: ["Active DD", "Climate Tech", "Carbon Capture"],
    relationshipStatus:
      "Elena is the CTO and technical brain behind CarbonGrid, a carbon capture startup we're currently running DD on. She's deeply technical and passionate about the science — our conversations are always substantive. I'm impressed by their approach but need to validate the scalability claims before we move forward.",
    suggestions: [
      "Where are we in the CarbonGrid DD process?",
      "What technical questions do I still have for Elena?",
    ],
    personalNotes: [
      "- CTO of CarbonGrid, PhD in chemical engineering from Stanford",
      "- incredibly smart, speaks fast and assumes you know the science — ask clarifying Qs",
      "- their DAC tech is promising but scalability is the big question mark",
      "- need to get Ryotaro's take on the technical architecture docs she sent",
      "- she mentioned they have 18 months runway left, timeline matters for our investment",
    ],
    meetings: [
      {
        week: "This week",
        items: [
          {
            id: "cd-elena-1",
            title: "CarbonGrid DD Sync",
            date: "Wed, Mar 18",
            time: "2:00 PM",
            duration: "60 min",
            participants: [
              "Dr. Elena Vasquez",
              "Sunna Mo",
              "Ryotaro Tanaka",
            ],
            privacy: "private",
          },
        ],
      },
      {
        week: "Last week",
        items: [
          {
            id: "cd-elena-2",
            title: "CarbonGrid — Technical Deep Dive",
            date: "Mon, Mar 10",
            time: "1:00 PM",
            duration: "90 min",
            participants: ["Dr. Elena Vasquez", "Sunna Mo", "Ryotaro Tanaka"],
            privacy: "private",
          },
        ],
      },
      {
        week: "2 weeks ago",
        items: [
          {
            id: "cd-elena-3",
            title: "CarbonGrid — Initial Discovery Call",
            date: "Thu, Mar 6",
            time: "10:00 AM",
            duration: "45 min",
            participants: ["Dr. Elena Vasquez", "Sunna Mo"],
            privacy: "private",
          },
          {
            id: "cd-elena-4",
            title: "CarbonGrid Demo — DAC Technology",
            date: "Tue, Mar 4",
            time: "3:00 PM",
            duration: "60 min",
            participants: [
              "Dr. Elena Vasquez",
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Reina Ozaki",
            ],
            privacy: "public",
          },
        ],
      },
    ],
    emails: [
      {
        id: "em-elena-1",
        subject: "Technical Architecture Docs — CarbonGrid",
        date: "Mar 11, 2026",
        snippet:
          "Hi Sunna, as promised here are the detailed architecture docs for our DAC module design. Happy to walk through any section in more detail.",
        from: "Dr. Elena Vasquez",
        to: ["Sunna Mo", "Ryotaro Tanaka"],
      },
      {
        id: "em-elena-2",
        subject: "Re: CarbonGrid — Scalability Questions",
        date: "Mar 7, 2026",
        snippet:
          "Great questions. Our pilot plant data shows 3.2x efficiency gains at scale vs. Gen 1. I've attached the test results and modeling assumptions.",
        from: "Dr. Elena Vasquez",
        to: ["Sunna Mo"],
      },
      {
        id: "em-elena-3",
        subject: "Re: Intro — MCGI x CarbonGrid",
        date: "Mar 2, 2026",
        snippet:
          "Thanks for reaching out Sunna! Really excited about the potential alignment with MC's sustainability initiatives. Looking forward to our first call.",
        from: "Dr. Elena Vasquez",
        to: ["Sunna Mo"],
      },
    ],
    news: [
      {
        id: "n-elena-1",
        headline:
          "CarbonGrid secures DOE grant for next-gen direct air capture technology",
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
          "CarbonGrid pilot plant achieves 3x efficiency improvement over industry standard",
        date: "Feb 12, 2026",
      },
      {
        id: "n-elena-4",
        headline:
          "Carbon capture startups attract record $4.2B in venture funding in 2025",
        date: "Jan 25, 2026",
      },
    ],
    otherInteractors: ["Ryotaro Tanaka", "Reina Ozaki"],
  },
  "mc-p7": {
    name: "Ashwin Gopinath",
    email: "ashwin@sentra.app",
    domain: "sentra.app",
    role: "CEO",
    company: "Sentra",
    tags: ["Portfolio Company", "AI", "Organizational Intelligence"],
    relationshipStatus:
      "Ashwin is the CEO and co-founder of Sentra, one of our portfolio companies building organizational memory tools. He's a former MIT professor — very rigorous and thoughtful. We invested in their seed round and I've been helping them think through enterprise positioning and potential MC use cases.",
    suggestions: [
      "How is Sentra progressing?",
      "What did Ashwin and I last discuss?",
    ],
    personalNotes: [
      "- CEO of Sentra, former MIT prof, super technical",
      "- building organizational memory / meeting intelligence product",
      "- we invested in their seed, been helping w enterprise GTM",
      "- wants to pilot Sentra internally at MCGI — need to discuss w Kengo",
      "- very responsive, prefers email over slack tho",
    ],
    meetings: [
      {
        week: "Last week",
        items: [
          {
            id: "cd-ashwin-mc-1",
            title: "Sentra Demo — Sunna & Ryotaro",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Ashwin Gopinath",
              "Sunna Mo",
              "Ryotaro Tanaka",
              "Justin Cheng",
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
            participants: ["Ashwin Gopinath", "Sunna Mo"],
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
            participants: ["Ashwin Gopinath", "Sunna Mo", "Justin Cheng"],
            privacy: "private",
          },
          {
            id: "cd-ashwin-mc-4",
            title: "Sentra Board Observer Update",
            date: "Mon, Feb 17",
            time: "10:00 AM",
            duration: "30 min",
            participants: ["Ashwin Gopinath", "Sunna Mo"],
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
          "Hi Sunna, thanks for the great session today. Attaching the product feature deck as discussed. The data governance section is on slides 12-15.",
        from: "Ashwin Gopinath",
        to: ["Sunna Mo", "Ryotaro Tanaka"],
      },
      {
        id: "em-ashwin-mc-2",
        subject: "Sentra February Investor Update",
        date: "Mar 1, 2026",
        snippet:
          "Quick monthly update: 40% MoM growth in active users, launched meeting intelligence v2, and signed 3 new design partners. Full update attached.",
        from: "Ashwin Gopinath",
        to: ["Sunna Mo"],
      },
      {
        id: "em-ashwin-mc-3",
        subject: "Re: MCGI Internal Pilot?",
        date: "Feb 25, 2026",
        snippet:
          "Would love to explore an internal pilot at MCGI. Happy to set up a tailored demo for the broader team whenever you're ready.",
        from: "Ashwin Gopinath",
        to: ["Sunna Mo"],
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
          "Meeting intelligence startup Sentra raises seed round led by MCGI and Together Fund",
        date: "Feb 14, 2026",
      },
      {
        id: "n-ashwin-mc-3",
        headline:
          "Enterprise AI tools market sees surge in demand for organizational intelligence",
        date: "Feb 5, 2026",
      },
    ],
    otherInteractors: ["Justin Cheng", "Ryotaro Tanaka"],
  },
  "mc-p8": {
    name: "Justin Cheng",
    email: "justin@sentra.app",
    domain: "sentra.app",
    role: "Co-founder",
    company: "Sentra",
    tags: ["Portfolio Company", "AI", "Product"],
    relationshipStatus:
      "Justin is Sentra's technical co-founder and the product visionary. He's the one who usually runs demos and handles the product side of our conversations. Very sharp on UX and product thinking — I'm impressed by how fast they iterate. He and Ashwin complement each other really well.",
    suggestions: [
      "What did Justin demo for us last?",
      "Any follow-ups pending with Justin?",
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
            title: "Sentra Demo — Sunna & Ryotaro",
            date: "Tue, Mar 11",
            time: "2:00 PM",
            duration: "45 min",
            participants: [
              "Justin Cheng",
              "Sunna Mo",
              "Ryotaro Tanaka",
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
            id: "cd-justin-mc-2",
            title: "MCGI — Initial Discovery Call",
            date: "Thu, Mar 6",
            time: "11:00 AM",
            duration: "30 min",
            participants: ["Justin Cheng", "Sunna Mo"],
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
            participants: ["Justin Cheng", "Sunna Mo", "Ashwin Gopinath"],
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
          "Hi Sunna — great chatting today! Here's the deck with the data governance deep dive you asked about. Let me know if you want a follow-up walkthrough.",
        from: "Justin Cheng",
        to: ["Sunna Mo", "Ryotaro Tanaka"],
      },
      {
        id: "em-justin-mc-2",
        subject: "Follow-up: a16z Speedrun AI Faire",
        date: "Mar 3, 2026",
        snippet:
          "Great meeting you at the faire Sunna! Would love to set up a proper call to explore how Sentra could help MCGI's workflow. Free next week?",
        from: "Justin Cheng",
        to: ["Sunna Mo"],
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
          "Meeting intelligence startup Sentra raises seed round led by MCGI and Together Fund",
        date: "Feb 14, 2026",
      },
    ],
    otherInteractors: ["Ashwin Gopinath", "Ryotaro Tanaka"],
  },
};
