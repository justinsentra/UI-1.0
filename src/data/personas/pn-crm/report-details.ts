import type { ReportDetail } from "@/types";

export const reportDetails: Record<string, ReportDetail> = {
  "pn-crm-radar-competitors-1": {
    id: "pn-crm-radar-competitors-1",
    title: "Personal CRM Competitor Activity — Daily Scan",
    dateRange: "Mar 12, 2026",
    sections: [
      {
        heading: "",
        paragraphs: [
          "Clay announced a new 'Relationship Score' feature this morning — an AI-powered metric that rates contact health based on interaction recency and depth. This directly overlaps with PN CRM's core relationship intelligence differentiation. Clay's implementation appears to be enrichment-based (pulling from public data) rather than interaction-based (pulling from your actual conversations), which is a meaningful distinction, but the marketing messaging will blur that line for users.",
          "Separately, Folk raised a $6M seed extension led by Accel. They're doubling down on the 'personal CRM for teams' angle, adding shared pipelines and collaborative note-taking. This doesn't directly compete with PN CRM's individual focus but signals that the personal CRM category is attracting serious investor attention — useful validation for the pre-seed raise.",
        ],
      },
    ],
    evidence: [
      {
        speaker: "Tyler Williams",
        quote:
          "Just saw Clay's announcement about relationship scoring. Their approach looks superficial — it's based on email frequency and LinkedIn signals, not actual conversation depth. Our decay algorithm is way more sophisticated.",
        meetingTitle: "#pn-crm-product — Slack",
        meetingDate: "Mar 12, 2026 · 8:45 AM",
        sourceType: "slack",
      },
      {
        speaker: "Katherine McIntosh",
        quote:
          "Folk just closed their seed extension. $6M from Accel. Good signal for the category — makes our fundraising story stronger if investors are deploying into personal CRM tools.",
        meetingTitle: "#pn-crm-general — Slack",
        meetingDate: "Mar 12, 2026 · 10:22 AM",
        sourceType: "slack",
      },
    ],
    sources: [
      { type: "slack", label: "#pn-crm-product" },
      { type: "slack", label: "#pn-crm-general" },
      { type: "notion", label: "Competitive Landscape Tracker" },
      { type: "google-docs", label: "Clay Feature Comparison Sheet" },
      { type: "email", label: "Product Hunt daily digest" },
    ],
    suggestedActions: [
      {
        icon: "mail",
        label: "Send competitive differentiation update to advisors",
      },
      {
        icon: "calendar",
        label: "Schedule emergency product positioning sync",
      },
      {
        icon: "clock",
        label: "Set alert for Clay relationship score user reviews",
      },
    ],
  },
  "pn-crm-rpt-growth-1": {
    id: "pn-crm-rpt-growth-1",
    title: "User Growth & Retention — Week of Mar 3",
    dateRange: "Mar 3 – Mar 10, 2026",
    sections: [
      {
        heading: "Growth Overview",
        paragraphs: [
          "Total registered users reached 1,247 this week, up 78 from 1,169 last week (6.7% WoW growth). Organic signups accounted for 85% of new users, driven primarily by word-of-mouth referrals and a viral LinkedIn post about personal networking that referenced PN CRM. Paid acquisition remains paused pending the pre-seed raise.",
          "Weekly active users (WAU) hit 474, representing a 38% activation rate. This is flat versus last week (37.8%), which is concerning — new user growth is not translating proportionally to active usage. The onboarding funnel analysis suggests the contact import step is the primary bottleneck, with 40% of new users failing to complete CSV import.",
        ],
      },
      {
        heading: "Retention Deep Dive",
        paragraphs: [
          "Week 1 retention remains strong at 62%, well above the 40% benchmark for personal productivity tools. The retention curve is flattening at week 8 (28%), which indicates a stable core user base. Users who complete the contact import step retain at 71% versus 34% for those who skip it — confirming that import is the critical activation moment.",
          "NPS score held steady at 4.7/5.0 from 183 respondents. Top positive feedback themes: 'reminds me to stay in touch' (34%), 'beautiful and simple UI' (28%), 'makes networking feel less transactional' (22%). Top negative theme: 'importing contacts is painful' (41%).",
        ],
      },
      {
        heading: "Cohort Analysis",
        paragraphs: [
          "January 2026 cohort (beta launch): 67% still active, highest retention of any cohort. These early adopters are power users who average 4.2 sessions per week. February cohort: 52% still active — slight dip likely due to less hands-on onboarding as the team shifted to product work. March cohort (first two weeks): tracking at 58% which is in line with targets.",
        ],
      },
      {
        heading: "Growth Priorities",
        paragraphs: [
          "Three priorities for the coming week: (1) Fix the contact import funnel — Sarah is redesigning the CSV mapping with auto-detection. (2) Launch referral program v1 — each user gets a unique invite link with 'import your contacts together' incentive. (3) Prepare growth metrics section of the pitch deck for investor meetings.",
        ],
      },
    ],
    drillDowns: [
      {
        heading: "Contact Import Funnel Analysis",
        paragraphs: [
          "The import funnel has four steps: file upload → column mapping → deduplication review → confirmation. Drop-off rates: 8% at upload (mostly file format issues), 40% at column mapping (users confused by field mapping UI), 12% at deduplication (users surprised by duplicate detection), 5% at confirmation. The column mapping step is responsible for the vast majority of import abandonment.",
          "Proposed fix: AI-powered auto-detection of column types with manual override. Estimated impact: reduce column mapping drop-off from 40% to 15%, increasing overall import completion from 60% to 78%. Sarah has scoped this at 1 week of engineering work.",
        ],
      },
    ],
    sources: [
      { type: "notion", label: "PN CRM Growth Dashboard" },
      { type: "slack", label: "#pn-crm-metrics" },
      { type: "google-docs", label: "Retention Cohort Analysis — March" },
      { type: "notion", label: "User Feedback Synthesis" },
      { type: "github", label: "Analytics event tracking PRs" },
    ],
    suggestedActions: [
      {
        icon: "mail",
        label: "Share growth metrics with angel investor prospects",
      },
      {
        icon: "calendar",
        label: "Schedule import funnel design review with Sarah",
      },
      {
        icon: "clock",
        label: "Set weekly growth alert threshold at 5% WoW",
      },
    ],
  },
  "pn-crm-rpt-fundraising-1": {
    id: "pn-crm-rpt-fundraising-1",
    title: "Fundraising Pipeline — March 2026",
    dateRange: "Mar 2026",
    sections: [
      {
        heading: "Round Status",
        paragraphs: [
          "Pre-seed target: $500K on SAFE (post-money cap $5M). Current pipeline: 4 warm intros in progress, 8 angel investors identified for outreach, 2 micro-VCs with student/early-stage focus. Mark Richey (1809 Capital) committed to making 3-4 warm introductions this week. No term sheets yet — round officially kicks off once the pitch deck is updated with latest metrics.",
          "Timeline: Target first close by end of April 2026. YC S26 application deadline is April 15 — if accepted, would likely supersede the angel round. Parallel-tracking both paths.",
        ],
      },
      {
        heading: "Investor Engagement",
        paragraphs: [
          "Warm intros in progress: (1) Sarah Winters via Mark Richey — angel investor focused on prosumer SaaS, (2) Dan Chen via Genine Fallon — Altman Institute connection, runs a student founder fund, (3) Emily Cho via David Nguyen — YC partner, exploratory conversation about S26 batch, (4) Mike Tran via 1809 Capital network — solo GP at a $10M micro-VC focused on first-time founders.",
          "Target investor profile: angels and micro-VCs who understand personal productivity tools, have invested in the CRM/networking space, or have a thesis around AI-powered relationship tools. Ideal check size: $25-75K per angel, $100-200K from a micro-VC lead.",
        ],
      },
      {
        heading: "Pitch Deck Status",
        paragraphs: [
          "Current deck is v3, last updated February 18. Needs refresh with: (1) Updated user metrics (1,247 users, 38% WAU, 4.7 NPS), (2) Retention curve visualization showing week-8 flattening, (3) Competitive positioning slide reflecting Clay's new relationship score feature, (4) Use of funds slide with 12-month runway projection. Target completion: March 17.",
        ],
      },
    ],
    sources: [
      { type: "notion", label: "Investor Pipeline Tracker" },
      {
        type: "meeting",
        label: "PN CRM — Investor Readiness & Pre-Seed Strategy",
      },
      { type: "google-docs", label: "Pre-Seed Pitch Deck v3" },
      { type: "email", label: "Investor intro email threads" },
    ],
    suggestedActions: [
      { icon: "mail", label: "Send updated pitch deck to Mark for review" },
      {
        icon: "calendar",
        label: "Schedule intro calls with angel investor targets",
      },
      { icon: "clock", label: "Set reminder for YC S26 application deadline" },
    ],
  },
  "pn-crm-rpt-product-1": {
    id: "pn-crm-rpt-product-1",
    title: "Product & Engineering Sprint 12 — Mar 3–10",
    dateRange: "Sprint 12 — Mar 3–10, 2026",
    sections: [
      {
        heading: "Sprint Summary",
        paragraphs: [
          "Sprint 12 delivered 14 of 16 planned story points (87.5% velocity). Two items carried over: the tiered decay algorithm (complex scoring logic taking longer than estimated) and the LinkedIn profile enrichment experiment (blocked on LinkedIn API rate limits). Key ship: notification preferences UI allowing users to control which relationship alerts they receive.",
          "Bug fixes: resolved 8 reported issues including a critical data sync bug where contact notes were duplicating on mobile. User-reported bugs down 30% from Sprint 11.",
        ],
      },
      {
        heading: "Feature Highlights",
        paragraphs: [
          "Notification preferences (shipped): Users can now configure alert frequency per relationship tier. Power users were receiving too many 'reconnect' nudges — this gives them control without losing the core value. Early feedback positive: 'finally, I can make it less noisy for acquaintances but keep the alerts for people who matter.'",
          "Contact notes redesign (shipped): Inline editing, markdown support, and automatic timestamp on note creation. This was the #3 most requested feature in our user feedback survey.",
        ],
      },
      {
        heading: "Sprint 13 Planning",
        paragraphs: [
          "Priority items for Sprint 13: (1) Contact import auto-detection — Sarah's spec is approved, targeting 1-week build. (2) Tiered decay algorithm — carryover from Sprint 12, Tyler targeting mid-week completion. (3) Referral program v1 — unique invite links with shared import incentive. (4) Pitch deck metrics dashboard — real-time stats page for investor conversations.",
        ],
      },
    ],
    sources: [
      { type: "linear", label: "Sprint 12 board" },
      { type: "github", label: "pn-crm/app — merged PRs" },
      { type: "slack", label: "#pn-crm-engineering" },
      { type: "notion", label: "Sprint 12 retro notes" },
    ],
    suggestedActions: [
      {
        icon: "calendar",
        label: "Schedule Sprint 13 planning session",
      },
      {
        icon: "mail",
        label: "Share sprint highlights with advisors",
      },
      {
        icon: "clock",
        label: "Set alert for import auto-detection ship date",
      },
    ],
  },
};
