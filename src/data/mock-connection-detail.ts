export const connectionData: Record<
  string,
  {
    name: string;
    email: string;
    domain: string;
    role: string;
    company: string;
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
  }
> = {
  ashwin: {
    name: "Ashwin Gopinath",
    email: "ashwin@sentra.app",
    domain: "sentra.app",
    role: "CEO",
    company: "Sentra",
    suggestions: [
      "What did we talk about last time?",
      "Does Ashwin need anything from me?",
    ],
    personalNotes: [
      "Prefers async updates over meetings when possible",
      "Deeply technical — wants to see data before making decisions",
      "Currently focused on Phase 1 launch (Granola Killer + Leadership Value)",
      "Former MIT professor — values rigorous thinking",
      "Interested in expanding to enterprise design partners",
      "Likes to walk through product demos live, not async",
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
    ],
  },
  andrey: {
    name: "Andrey Starenky",
    email: "andrey@sentra.app",
    domain: "sentra.app",
    role: "CTO",
    company: "Sentra",
    suggestions: [
      "What did we talk about last time?",
      "Does Andrey need anything from me?",
    ],
    personalNotes: [
      "Leads product + engineering — very hands-on with code",
      "Prefers concise technical discussions",
      "Currently evaluating Relay API shim layer as fallback",
      "Strong opinions on architecture — present options with trade-offs",
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
        ],
      },
    ],
  },
  kristina: {
    name: "Kristina Beaman",
    email: "kristina@sentra.app",
    domain: "sentra.app",
    role: "Executive Assistant",
    company: "Sentra",
    suggestions: [
      "What's Kristina working on?",
      "Recent action items for Kristina?",
    ],
    personalNotes: [
      "Manages scheduling for Ashwin and Justin",
      "Currently handling press kit — may need freelance writer support",
      "Very organized — prefers structured communication",
      "Good at anticipating blockers before they surface",
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
    ],
  },
  sarah: {
    name: "Sarah Chen",
    email: "sarah@campfire.io",
    domain: "campfire.io",
    role: "Head of Product",
    company: "Campfire",
    suggestions: [
      "What did we talk about last time?",
      "Does Sarah need anything from me?",
    ],
    personalNotes: [
      "Key contact at Campfire — potential design partner",
      "Interested in meeting intelligence features",
      "Based in SF, prefers afternoon meetings",
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
            title: "Customer Discovery — Campfire",
            date: "Fri, Feb 21",
            time: "11:00 AM",
            duration: "60 min",
            participants: ["Sarah Chen", "Justin Cheng"],
            privacy: "private",
          },
        ],
      },
    ],
  },
  kevin: {
    name: "Kevin Liu",
    email: "kevin@relay.app",
    domain: "relay.app",
    role: "VP Engineering",
    company: "Relay",
    suggestions: [
      "What did we talk about last time?",
      "Does Kevin need anything from me?",
    ],
    personalNotes: [
      "Technical lead at Relay — evaluating Sentra for internal use",
      "Interested in API deep dives and integration capabilities",
      "Responsive over email, prefers written updates",
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
    ],
  },
  lakshmi: {
    name: "Lakshmi Shankar",
    email: "lakshmi@togetherfund.com",
    domain: "togetherfund.com",
    role: "Lead Investor",
    company: "Together Fund",
    suggestions: [
      "What did we talk about last time?",
      "Does Lakshmi need anything from me?",
    ],
    personalNotes: [
      "Lead investor from Together Fund",
      "Wants monthly updates on key metrics and milestones",
      "Connected us to two potential enterprise design partners",
      "Appreciates brevity — keep updates under 5 bullet points",
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
    ],
  },
};
