export interface Action {
  id: string;
  name: string;
  description: string;
  active: boolean;
  schedule: string;
  integrations: string[];
  prompt: string;
  triggerType: "scheduled" | "triggered";
  frequency?: {
    type: "DAILY" | "WEEKLY" | "MONTHLY";
    interval: number;
    time: string;
    dayOfWeek?: string;
  };
}

export const MOCK_ACTIONS: Action[] = [
  {
    id: "monday-triage",
    name: "Monday Morning Priority Triage",
    description:
      "Every Monday at 9:30 AM, create a weekly priority triage briefing across all engineering work. Scans Gmail for urgent items, maps the week's calendar, checks open GitHub PRs, and produces a concise prioritized brief.",
    active: true,
    schedule: "Every week on Monday at 9:30 AM",
    integrations: ["gmail", "calendar", "github"],
    prompt:
      "Every Monday at 9:30 AM EDT, create a weekly priority triage briefing for me across all my engineering work.\n\nStep 1: Scan for urgent items in Gmail — search for GitHub review requests, CI/test failure notifications, and any unread important emails from the weekend.\n\nStep 2: Map the week ahead — check Google Calendar for the full week, list all meetings, flag meeting-heavy days vs deep work blocks.\n\nStep 3: Check open GitHub items — identify PRs awaiting review, unresolved feedback, and pending review requests.\n\nStep 4: Create a brief with sections for Urgent Alerts, Pending Reviews, Week at a Glance, and Suggested Priorities.",
    triggerType: "scheduled",
    frequency: {
      type: "WEEKLY",
      interval: 1,
      time: "09:30 AM",
      dayOfWeek: "Monday",
    },
  },
  {
    id: "friday-recap",
    name: "Friday Sprint Recap Briefing",
    description:
      "Every Friday at 6:15 PM, prepare a personal sprint recap document for the weekly Eng Recap meeting. Gathers GitHub activity, PostHog error trends, and Linear updates into a scannable brief with talking points.",
    active: true,
    schedule: "Every week on Friday at 6:15 PM",
    integrations: ["gmail", "github"],
    prompt:
      "Every Friday at 6:15 PM EDT, prepare a personal sprint recap document.\n\nStep 1: Gather the week's engineering activity from Gmail — GitHub notifications, PostHog emails, Linear notifications.\n\nStep 2: Analyze and organize — categorize PRs merged, PRs in review, CI failures, and code review feedback.\n\nStep 3: Create a document with sections for Shipped This Week, In Review, CI/Test Health, Production Health, Linear Updates, and Talking Points.",
    triggerType: "scheduled",
    frequency: {
      type: "WEEKLY",
      interval: 1,
      time: "06:15 PM",
      dayOfWeek: "Friday",
    },
  },
  {
    id: "daily-standup-prep",
    name: "Daily Standup Prep",
    description:
      "Every weekday at 8:45 AM, compile a quick standup summary — what was done yesterday, what's planned today, and any blockers pulled from calendar, GitHub, and Linear.",
    active: true,
    schedule: "Every weekday at 8:45 AM",
    integrations: ["calendar", "github"],
    prompt:
      "Every weekday at 8:45 AM, compile a standup summary.\n\nYesterday: Check GitHub for merged PRs and review activity from yesterday.\n\nToday: Look at today's calendar for meetings, check assigned Linear issues.\n\nBlockers: Flag any failing CI, pending reviews blocking merge, or conflicting meetings.",
    triggerType: "scheduled",
    frequency: {
      type: "DAILY",
      interval: 1,
      time: "08:45 AM",
    },
  },
  {
    id: "new-pr-review",
    name: "PR Review Digest",
    description:
      "When new pull requests are assigned for review, compile a summary with context about the changes, related issues, and suggested review priorities.",
    active: false,
    schedule: "Triggered on new PR assignment",
    integrations: ["github"],
    prompt:
      "When a new pull request is assigned to me for review, compile a summary including: the PR description, files changed with brief context, related Linear issues, and suggested review priority based on size and urgency.",
    triggerType: "triggered",
  },
  {
    id: "meeting-followup",
    name: "Post-Meeting Follow-ups",
    description:
      "After each meeting ends, extract action items and commitments, then create follow-up tasks and send a summary to relevant channels.",
    active: false,
    schedule: "Triggered after meetings",
    integrations: ["calendar", "gmail"],
    prompt:
      "After each meeting ends, review the meeting notes and transcript. Extract action items assigned to each participant, identify commitments and deadlines, and draft a follow-up email summary. Create tasks for my action items.",
    triggerType: "triggered",
  },
];

// Map integration IDs to logo imports
export const INTEGRATION_LOGOS: Record<string, string> = {
  gmail: "/src/assets/logos/gmail.svg",
  calendar: "/src/assets/logos/calendar.svg",
  github: "/src/assets/logos/github.svg",
  slack: "/src/assets/logos/slack.svg",
  linear: "/src/assets/logos/linear.svg",
  notion: "/src/assets/logos/notion.svg",
  "google-drive": "/src/assets/logos/google-drive.svg",
};
