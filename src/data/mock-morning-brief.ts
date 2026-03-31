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
    "Welcome back, Tracy. You were on-site with a client all last week, missed internal meetings, and now have seven meetings stacked today. Sentra has triaged what needs attention first so you can get current fast.",
  badgeLabel: "Pre-meeting brief ready",
  briefBadgeMeetingId: "david-chen-secondary",
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
      id: "synthetic-db",
      category: "Deal review",
      title: "Synthetic DB needs clean numbers before Thursday's IC meeting",
      description:
        "Your analyst started the consolidation, but the updated figures still need review and a Salesforce push before committee sees stale data.",
      detail:
        "Sentra stitched together the analyst's workbook updates, the stale Salesforce opportunity record, and the Thursday IC agenda. If you do nothing, the committee will review last week's numbers instead of the refreshed view.",
      ownerLabel: "Primary owner: Tracy",
      actionId: "monday-triage",
      actionTab: "plan",
      trailItems: [
        {
          id: "synthetic-db-trail-1",
          source: "SharePoint workbook",
          title: "Analyst refreshed revenue bridge at 7:18 AM",
          description:
            "Three regional tabs were updated, but the debt schedule and customer concentration sheet were left unresolved.",
        },
        {
          id: "synthetic-db-trail-2",
          source: "Salesforce opportunity",
          title: "CRM still reflects last Tuesday's figures",
          description:
            "The IC briefing packet is reading the prior ARR and EBITDA numbers from Salesforce, not the revised workbook.",
        },
        {
          id: "synthetic-db-trail-3",
          source: "IC agenda",
          title: "Synthetic DB is first on Thursday's committee agenda",
          description:
            "Finance leadership requested the latest consolidated numbers before the packet locks tomorrow night.",
        },
      ],
    },
    {
      id: "engagement-terms",
      category: "Client commitment",
      title: "Revised engagement terms still have not gone back to the client",
      description:
        "You promised a redline two weeks ago and never followed through. The client asked again this morning for an update before legal reviews today.",
      detail:
        "Sentra found the original commitment in your notes, the follow-up email that came in this morning, and the untouched draft in Word. The fastest move is to send a cleaned-up response now and attach the revised terms after one pass.",
      ownerLabel: "Primary owner: Tracy",
      draftPrompt:
        "Draft a reply to the client acknowledging the delay, sharing that revised engagement terms are attached for review, and proposing a quick call later today if they want to walk through the changes.",
      trailItems: [
        {
          id: "engagement-terms-trail-1",
          source: "Meeting notes",
          title: "Commitment captured two weeks ago",
          description:
            "You closed the advisory check-in by saying you would send revised terms by end of week.",
        },
        {
          id: "engagement-terms-trail-2",
          source: "Outlook",
          title: "Client follow-up landed at 6:42 AM",
          description:
            "They need the updated terms before their internal legal review starts this afternoon.",
        },
        {
          id: "engagement-terms-trail-3",
          source: "Word draft",
          title: "The latest redline is already prepared",
          description:
            "Only the fee schedule paragraph and the response email still need your sign-off.",
        },
      ],
    },
    {
      id: "meridian-misalignment",
      category: "Misalignment detected",
      title: "Sarah is still advancing Meridian after the IC deprioritized it",
      description:
        "Sarah missed the decision, kept building the Meridian pitch deck, asked for comp data on Friday, and emailed the CFO for updated financials this morning.",
      detail:
        "Sentra connected the missed IC decision, the follow-up email among senior team members, and Sarah's downstream activity. The issue is not just that Meridian is active again — it's that nobody told the working team the mandate had been shelved.",
      ownerLabel: "Primary owner: Sarah",
      messagePrompt:
        "Draft a concise Microsoft Teams message to Sarah explaining that Meridian was deprioritized in last Thursday's IC meeting, asking her to stop work on the pitch deck, and redirecting her toward the two higher-conviction mandates the committee advanced.",
      trailItems: [
        {
          id: "meridian-misalignment-trail-1",
          source: "Zoom",
          title: "IC meeting — Meridian deprioritized (Thu)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-2",
          source: "Gmail",
          title: "Diana confirmed shift to Nathan via email (Thu)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-3",
          source: "Gmail",
          title: "Nathan replied — agreed, reallocating team (Fri AM)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-4",
          source: "Teams",
          title: "Sarah asked colleague for Meridian comp data (Fri PM)",
          description: "",
        },
        {
          id: "meridian-misalignment-trail-5",
          source: "Gmail",
          title:
            "Sarah emailed Meridian CFO for updated financials (Today, 7:12 AM)",
          description: "",
        },
      ],
    },
    {
      id: "board-prep",
      category: "Board prep",
      title: "Comparative market analysis request is sitting in your inbox",
      description:
        "A portfolio company CFO needs a comps-backed market view ahead of tomorrow's board meeting.",
      detail:
        "Sentra already identified the prior deck, the latest market update, and three comparable public companies. This is a good candidate to hand off into Deep Research.",
      ownerLabel: "Primary owner: Tracy",
      draftPrompt:
        "Prepare a comparative market analysis for the portfolio company's board meeting using the latest sector comp set, recent transactions, and key valuation drivers.",
      trailItems: [
        {
          id: "board-prep-trail-1",
          source: "Outlook",
          title: "CFO requested a comp set before tomorrow's board prep",
          description:
            "They asked specifically for valuation benchmarks, growth ranges, and the latest market movement.",
        },
        {
          id: "board-prep-trail-2",
          source: "SharePoint",
          title: "Prior board materials are available",
          description:
            "Last quarter's deck and the most recent market update are both already indexed in Sentra.",
        },
      ],
    },
    {
      id: "servicenow-escalation",
      category: "Operations",
      title:
        "ServiceNow escalation is blocking diligence requests from going out",
      description:
        "Procurement access failed over the weekend, so diligence checklists are not syncing to the client workspace.",
      detail:
        "Sentra flagged the failed workflow because the diligence board in Monday.com is still waiting on the procurement handoff from ServiceNow.",
      ownerLabel: "Primary owner: RevOps",
      actionId: "meeting-followup",
      actionTab: "history",
      trailItems: [
        {
          id: "servicenow-escalation-trail-1",
          source: "ServiceNow",
          title: "Workflow error opened Sunday night",
          description:
            "A read-write permission failure blocked the final approval step tied to procurement access.",
        },
        {
          id: "servicenow-escalation-trail-2",
          source: "Monday.com",
          title: "Diligence checklist is now waiting on the sync",
          description:
            "Owners cannot send the next request batch until procurement access is restored.",
        },
      ],
    },
  ],
  emails: [
    {
      id: "email-engagement-terms",
      tag: "Action Needed",
      title: "Client wants revised engagement terms today",
      subject: "Re: Updated engagement terms for advisory work",
      from: "Julia Mercer, CFO",
      receivedAt: "6:42 AM",
      summaryPoints: [
        "Client needs the revised redline before legal starts review this afternoon.",
        "They are aligned on scope, but want the fee schedule and timing language tightened.",
        "Sentra drafted a reply using the prior call notes and latest Word changes.",
      ],
      body: [
        "Hi Tracy — circling back on the revised engagement terms we discussed two weeks ago.",
        "Legal is starting their review later today, so if you can send the latest draft before then we can keep this moving. The only areas we still expect to review closely are the fee schedule and the timing language around board support.",
        "If helpful, I can also make time for a quick pass this afternoon.",
      ],
      draftedReply: [
        "Hi Julia — thanks for the nudge, and apologies for the delay while I was on-site last week.",
        "I am sending the revised engagement terms over this morning with the fee schedule and board-support timing language cleaned up based on our last discussion. If your team would find it helpful, I can also make time later today to walk through the redline live.",
        "Best, Tracy",
      ],
    },
    {
      id: "email-secondary-offering",
      tag: "Action Needed",
      title: "David Chen wants to accelerate the secondary offering timeline",
      subject: "Re: Secondary offering — updated timeline and financials",
      from: "David Chen, CEO",
      receivedAt: "7:05 AM",
      summaryPoints: [
        "David wants to move faster on the secondary offering after Apex-Cobalt's acquisition news.",
        "Margaret sent updated Q3 actuals and FY26 forecast — they're in your inbox.",
        "This is a strong handoff candidate for Sentra to draft the preliminary memo.",
      ],
      body: [
        "Hi Tracy — given the Apex-Cobalt announcement this morning, I think we need to accelerate our secondary offering timeline. The window is opening faster than we expected.",
        "Margaret sent Kevin the updated Q3 actuals and FY26 forecast yesterday. Can you pull together a preliminary secondary offering memo before our 2pm call? Would be great to have the financials, comps, and a valuation range to discuss.",
        "Thanks — looking forward to the call.",
      ],
      draftedReply: [
        "Hi David — completely agree, the Apex-Cobalt news changes the calculus. I'll have a preliminary memo ready before our 2pm.",
        "I'll pull from Margaret's updated financials, the SharePoint model, and comparable transactions from the last 12 months to frame the valuation range.",
        "See you at 2.",
      ],
      sentraPrompt:
        "Draft a preliminary secondary offering memo for David Chen's company using the latest financials from the CFO email thread, the Q3 earnings data in the SharePoint model, and comparable transactions from the last 12 months.",
    },
    {
      id: "email-ic-recap",
      tag: "FYI",
      title: "Leadership recap confirms Thursday's IC priority shift",
      subject: "IC follow-up: updated focus list",
      from: "Diana Calloway",
      receivedAt: "8:11 AM",
      summaryPoints: [
        "Leadership confirmed Meridian is deprioritized in favor of two higher-conviction mandates.",
        "The recap notes who is driving each newly prioritized workstream this week.",
        "This email is informational, but it explains the Meridian misalignment Sentra surfaced above.",
      ],
      body: [
        "Hi all — following up on Thursday's IC discussion, we are formally shifting focus away from Meridian and toward the two mandates we agreed have stronger conviction and better near-term timing.",
        "Nathan will coordinate the first workstream and Victor will pull together the supporting materials for the second. Please make sure any active effort tied to Meridian is paused unless there is a specific exception we discuss live.",
      ],
      draftedReply: [
        "No reply drafted. Sentra marked this message as FYI because it closes the loop on the committee decision and informs the misalignment alert.",
      ],
    },
  ],
  meetingsOverview:
    "Today you have 7 meetings. You're speaking with David Chen about the secondary offering timeline, your team about Q1 pipeline, and Apex Corp about revised engagement terms.",
  meetings: [
    {
      id: "portfolio-ops-sync",
      title: "Synthetic DB operating review",
      time: "9:30 AM - 10:15 AM",
      attendees: "Tracy, Diana, Nathan, operating team",
      focus:
        "You need the latest deal numbers, committee sensitivities, and the specific questions leadership is likely to raise.",
      briefReady: true,
    },
    {
      id: "team-pipeline-sync",
      title: "Q1 pipeline review",
      time: "11:00 AM - 11:45 AM",
      attendees: "Tracy, Nathan, Victor, Sarah, Kevin",
      focus:
        "Walk through active deals, flag the Meridian reprioritization, and align the team on coverage assignments for the week.",
      briefReady: true,
    },
    {
      id: "client-terms-review",
      title: "Apex Corp — engagement terms follow-up",
      time: "1:00 PM - 1:30 PM",
      attendees: "Tracy, Julia Mercer, legal",
      focus:
        "Come in with the revised fee schedule, the latest redline, and a clear recommendation on timeline language.",
      briefReady: false,
    },
    {
      id: "david-chen-secondary",
      title: "David Chen — secondary offering",
      time: "2:00 PM - 2:45 PM",
      attendees: "Tracy, David Chen, Margaret Liu, Nathan",
      focus:
        "Discuss the secondary offering timeline, address board composition concerns David raised six weeks ago, and present the updated financials from the CFO.",
      briefReady: true,
    },
    {
      id: "oracle-migration-review",
      title: "Oracle migration project review",
      time: "3:00 PM - 3:45 PM",
      attendees: "Tracy, project lead, engineering, vendor team",
      focus:
        "You're the executive sponsor and heard it's behind schedule. Walk in knowing what happened and why.",
      briefReady: false,
    },
    {
      id: "leadership-reconnect",
      title: "Internal leadership catch-up",
      time: "4:00 PM - 4:30 PM",
      attendees: "Tracy, Diana, Victor",
      focus:
        "Close decision gaps from last week, including the Meridian reprioritization and ownership changes across the active mandates.",
      briefReady: false,
    },
    {
      id: "board-prep-call",
      title: "Portfolio company board prep",
      time: "4:45 PM - 5:15 PM",
      attendees: "Tracy, Evan Brooks, finance team",
      focus:
        "The board prep hinges on a current market analysis and a crisp explanation of valuation movement since last quarter.",
      briefReady: false,
    },
  ],
};
