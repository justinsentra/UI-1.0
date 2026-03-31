import type { ComponentType } from "react";
import outlookLogo from "@/assets/logos/outlook.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import serviceNowLogo from "@/assets/logos/service-now.png";
import oracleFinancialsLogo from "@/assets/logos/oracle-financials.png";
import mondayComLogo from "@/assets/logos/monday-com.webp";
import sharePointLogo from "@/assets/logos/sharepoint.png";
import { ZoomIcon } from "@/icons/source-icons";

export interface MorningBriefConnectedTool {
  id: string;
  integrationId: string;
  label: string;
  logo?: string;
  LogoIcon?: ComponentType<{ className?: string; size?: number }>;
}

export interface MorningBriefTrailItem {
  id: string;
  source: string;
  title: string;
  description: string;
}

export interface MorningBriefAttentionItem {
  id: string;
  category: string;
  title: string;
  description: string;
  detail: string;
  ownerLabel: string;
  actionId?: string;
  actionTab?: string;
  messagePrompt?: string;
  draftPrompt?: string;
  trailItems: MorningBriefTrailItem[];
}

export interface MorningBriefEmailItem {
  id: string;
  tag: string;
  title: string;
  subject: string;
  from: string;
  receivedAt: string;
  summaryPoints: string[];
  body: string[];
  draftedReply: string[];
  sentraPrompt?: string;
}

export interface MorningBriefMeetingItem {
  id: string;
  title: string;
  time: string;
  attendees: string;
  focus: string;
  briefReady: boolean;
}

export interface MorningBriefData {
  badgeLabel: string;
  briefBadgeMeetingId: string;
  connectedTools: MorningBriefConnectedTool[];
  emails: MorningBriefEmailItem[];
  intro: string;
  meetings: MorningBriefMeetingItem[];
  meetingsOverview: string;
  subtitle: string;
  title: string;
  attentionItems: MorningBriefAttentionItem[];
}

export const MORNING_BRIEF_DATA: MorningBriefData = {
  title: "Morning Brief",
  subtitle: "Monday, March 30",
  intro:
    "Welcome back, Mark. You were at a conference all last week, missed internal meetings, and now have seven meetings stacked today. Sentra has triaged what needs attention first so you can get current fast.",
  badgeLabel: "Pre-meeting brief ready",
  briefBadgeMeetingId: "david-chen-contract",
  connectedTools: [
    {
      id: "tool-m365",
      integrationId: "outlook",
      label: "M365",
      logo: outlookLogo,
    },
    {
      id: "tool-zoom",
      integrationId: "zoom",
      label: "Zoom",
      LogoIcon: ZoomIcon,
    },
    {
      id: "tool-teams",
      integrationId: "teams",
      label: "Teams",
      logo: teamsLogo,
    },
    {
      id: "tool-salesforce",
      integrationId: "salesforce",
      label: "Salesforce",
      logo: salesforceLogo,
    },
    {
      id: "tool-servicenow",
      integrationId: "servicenow",
      label: "ServiceNow",
      logo: serviceNowLogo,
    },
    {
      id: "tool-oracle",
      integrationId: "oracle-financials",
      label: "Oracle",
      logo: oracleFinancialsLogo,
    },
    {
      id: "tool-monday",
      integrationId: "monday-com",
      label: "Monday.com",
      logo: mondayComLogo,
    },
    {
      id: "tool-sharepoint",
      integrationId: "sharepoint",
      label: "SharePoint",
      logo: sharePointLogo,
    },
  ],
  attentionItems: [
    {
      id: "onboarding-rollout",
      category: "Operations",
      title:
        "Onboarding system rollout numbers need review before Thursday's steering committee",
      description:
        "Your lead started gathering the data but the project tracker still shows outdated figures. The steering committee meets Thursday — Mark needs to review and update before then.",
      detail:
        "Sentra stitched together the draft rollout numbers Lisa shared, the outdated SharePoint tracker, and the Thursday steering committee agenda. If nothing changes, the committee will review stale figures instead of the current rollout status.",
      ownerLabel: "Primary owner: Mark",
      actionId: "monday-triage",
      actionTab: "plan",
      trailItems: [
        {
          id: "onboarding-rollout-trail-1",
          source: "Teams",
          title:
            "Lisa shared draft rollout numbers in #onboarding-project (Fri)",
          description: "",
        },
        {
          id: "onboarding-rollout-trail-2",
          source: "SharePoint",
          title: "Onboarding_System_Rollout_Tracker_v3.xlsx last edited Mar 14",
          description: "",
        },
        {
          id: "onboarding-rollout-trail-3",
          source: "Outlook",
          title:
            "Steering Committee agenda sent — rollout numbers listed as open item",
          description: "",
        },
      ],
    },
    {
      id: "apex-contract",
      category: "Client commitment",
      title: "Revised contract response to Apex Systems is two weeks overdue",
      description:
        "Mark committed to sending updated contract terms to Apex Systems two weeks ago. The vendor is waiting and the project milestone depends on it.",
      detail:
        "Sentra found the original commitment in Mark's email, the follow-up flagged in the vendor contracts channel, and the reminder from Apex this morning. The fastest move is to finalize and send the revised terms now.",
      ownerLabel: "Primary owner: Mark",
      draftPrompt: "Send revised contract",
      trailItems: [
        {
          id: "apex-contract-trail-1",
          source: "Outlook",
          title: "Mark committed to revised terms in email to Apex (Mar 14)",
          description: "",
        },
        {
          id: "apex-contract-trail-2",
          source: "Teams",
          title: "Apex follow-up flagged in #vendor-contracts (Mar 21)",
          description: "",
        },
        {
          id: "apex-contract-trail-3",
          source: "Outlook",
          title: "Apex PM sent reminder email this morning",
          description: "",
        },
      ],
    },
    {
      id: "meridian-misalignment",
      category: "Misalignment detected",
      title:
        "Sarah is continuing Chicago office buildout planning after leadership paused it",
      description:
        "Sarah missed the decision, kept planning the Chicago buildout, asked for contractor bids on Friday, and emailed a real estate broker this morning.",
      detail:
        "Sentra connected the missed leadership decision, the follow-up emails among senior leaders, and Sarah's downstream activity. The issue is not just that Chicago is active again — it's that nobody told the working team the buildout had been paused.",
      ownerLabel: "Primary owner: Sarah",
      messagePrompt:
        "Draft a concise Microsoft Teams message to Sarah explaining that the Chicago office buildout was paused in last Thursday's leadership meeting in favor of the Austin expansion, asking her to stop work on contractor outreach, and redirecting her toward the Austin planning workstream.",
      trailItems: [
        {
          id: "meridian-misalignment-trail-1",
          source: "Zoom",
          title: "Leadership meeting — Chicago buildout paused (Thu)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-2",
          source: "Outlook",
          title: "VP Ops confirmed pause to CFO via email (Thu)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-3",
          source: "Outlook",
          title: "CFO replied — agreed, reallocating budget to Austin (Fri AM)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-4",
          source: "Teams",
          title: "Sarah asked colleague for Chicago contractor bids (Fri PM)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-5",
          source: "Outlook",
          title:
            "Sarah emailed real estate broker for walkthrough (Today, 7:12 AM)",
          description: "",
        },
      ],
    },
  ],
  emails: [
    {
      id: "email-vendor-requirements",
      tag: "Action Needed",
      title:
        "Vendor asking for updated requirements ahead of project milestone",
      subject: "Re: Updated requirements for Phase 2 milestone",
      from: "Kevin Park, Apex Systems",
      receivedAt: "6:42 AM",
      summaryPoints: [
        "Apex needs the updated requirements doc before they can begin Phase 2 work.",
        "They're aligned on scope but need Mark's sign-off on the revised deliverables.",
        "Sentra drafted a reply using the prior call notes and latest project changes.",
      ],
      body: [
        "Hi Mark — circling back on the Phase 2 requirements we discussed two weeks ago.",
        "Our team is ready to begin work but we need the finalized requirements document before we can proceed. The only areas still outstanding are the integration specifications and the timeline for the testing phase.",
        "If helpful, I can also make time for a quick call this afternoon to align.",
      ],
      draftedReply: [
        "Hi Kevin — thanks for the nudge, and apologies for the delay while I was at the conference last week.",
        "I'm sending the updated requirements doc over this morning with the integration specs and testing timeline finalized based on our last discussion. If your team would find it helpful, I can also make time later today to walk through the changes.",
        "Best, Mark",
      ],
    },
    {
      id: "email-vendor-comparison",
      tag: "Action Needed",
      title: "Department head needs vendor comparison before budget review",
      subject: "Need a vendor comparison before Friday's budget review",
      from: "Rachel Torres, VP Operations",
      receivedAt: "7:05 AM",
      summaryPoints: [
        "Rachel wants a side-by-side comparison of two vendors for the infrastructure upgrade.",
        "The ask spans pricing from email threads, the SharePoint budget model, and reviews from other teams.",
        "This is a strong handoff candidate for Sentra's Deep Research flow.",
      ],
      body: [
        "Hi Mark — before Friday's budget review, can you pull together a vendor comparison for the infrastructure upgrade?",
        "What would be most useful is a side-by-side on pricing, implementation timeline, and feedback from other teams who've used either vendor. If you can ground it in the budget model we built last quarter, even better.",
        "Thanks as always.",
      ],
      draftedReply: [
        "Hi Rachel — absolutely. I'm pulling together a comparison now and will frame it against the same budget model we used last quarter so the review stays consistent.",
        "I'll include updated pricing, implementation timelines, and satisfaction data from teams that have used each vendor.",
        "I'll send a clean draft as soon as it's ready.",
      ],
      sentraPrompt:
        "Draft a vendor comparison for David Chen's company using the latest pricing from the email thread, the budget model in SharePoint, and reviews from other teams who've used both vendors in the last 12 months.",
    },
    {
      id: "email-leadership-recap",
      tag: "FYI",
      title: "Leadership recap confirms Thursday's Chicago pause decision",
      subject: "Leadership follow-up: updated priorities",
      from: "Diana Calloway",
      receivedAt: "8:11 AM",
      summaryPoints: [
        "Leadership confirmed Chicago buildout is paused in favor of Austin expansion.",
        "The recap notes who is driving Austin planning this week.",
        "This email is informational, but it explains the misalignment Sentra surfaced above.",
      ],
      body: [
        "Hi all — following up on Thursday's leadership discussion, we are formally pausing the Chicago office buildout and redirecting budget toward the Austin expansion.",
        "Nathan will coordinate the Austin planning workstream and Victor will pull together the supporting materials. Please make sure any active effort tied to Chicago is paused unless there is a specific exception we discuss live.",
      ],
      draftedReply: [
        "No reply drafted. Sentra marked this message as FYI because it closes the loop on the leadership decision and informs the misalignment alert.",
      ],
    },
  ],
  meetingsOverview:
    "Today you have 7 meetings. You're speaking with David Chen about the contract renewal timeline, your team about Q1 priorities, and Apex Systems about updated project requirements.",
  meetings: [
    {
      id: "onboarding-steering",
      title: "Onboarding rollout steering prep",
      time: "9:30 AM - 10:15 AM",
      attendees: "Mark, Lisa Park, Nathan, operations team",
      focus:
        "Review the latest rollout numbers, identify gaps in the project tracker, and align on what to present at Thursday's steering committee.",
      briefReady: true,
    },
    {
      id: "team-priorities-sync",
      title: "Q1 priorities review",
      time: "11:00 AM - 11:45 AM",
      attendees: "Mark, Nathan, Victor, Sarah, Kevin",
      focus:
        "Walk through active workstreams, flag the Chicago buildout pause, and align the team on priority assignments for the week.",
      briefReady: true,
    },
    {
      id: "vendor-sync",
      title: "Apex Systems — vendor sync",
      time: "1:00 PM - 1:30 PM",
      attendees: "Mark, Kevin Park, procurement",
      focus:
        "Come in with the revised contract terms, the latest requirements doc, and a clear recommendation on the Phase 2 timeline.",
      briefReady: false,
    },
    {
      id: "david-chen-contract",
      title: "David Chen — contract renewal",
      time: "2:00 PM - 2:45 PM",
      attendees: "Mark, David Chen, Lisa Park, Nathan",
      focus:
        "Discuss the contract renewal timeline, address pricing concerns David raised six weeks ago, and present the updated budget figures.",
      briefReady: true,
    },
    {
      id: "oracle-migration-review",
      title: "Oracle migration review",
      time: "3:00 PM - 3:45 PM",
      attendees: "Mark, project lead, engineering, vendor team",
      focus:
        "You're the executive sponsor and heard it's behind schedule. Walk in knowing what happened and why.",
      briefReady: false,
    },
    {
      id: "leadership-reconnect",
      title: "Internal leadership catch-up",
      time: "4:00 PM - 4:30 PM",
      attendees: "Mark, Diana, Victor",
      focus:
        "Close decision gaps from last week, including the Chicago buildout pause and ownership changes across active workstreams.",
      briefReady: false,
    },
    {
      id: "budget-review-prep",
      title: "Budget review preparation",
      time: "4:45 PM - 5:15 PM",
      attendees: "Mark, Rachel Torres, finance team",
      focus:
        "Finalize the vendor comparison and budget model updates ahead of Friday's budget review with leadership.",
      briefReady: false,
    },
  ],
};
