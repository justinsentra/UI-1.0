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
  briefBadgeMeetingId: "portfolio-ops-sync",
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
          source: "IC meeting",
          title: "Committee voted Thursday to deprioritize Meridian",
          description:
            "Two higher-conviction mandates were approved for immediate focus and Meridian was explicitly moved out of active pursuit.",
        },
        {
          id: "meridian-misalignment-trail-2",
          source: "Email follow-up",
          title: "Senior team confirmed the shift after the meeting",
          description:
            "Diana and Nathan aligned by email that work should move to the two newly prioritized mandates.",
        },
        {
          id: "meridian-misalignment-trail-3",
          source: "Teams and Outlook",
          title: "Sarah continued execution work anyway",
          description:
            "She requested comp data in Teams on Friday and emailed Meridian's CFO this morning asking for updated financials.",
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
      title: "ServiceNow escalation is blocking diligence requests from going out",
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
      id: "email-market-analysis",
      tag: "Action Needed",
      title: "Portfolio CFO needs a comparative market analysis for tomorrow's board meeting",
      subject: "Need a market comp view before tomorrow's board prep",
      from: "Evan Brooks, CFO",
      receivedAt: "7:05 AM",
      summaryPoints: [
        "They want a current comp set, recent transactions, and valuation framing for the board deck.",
        "The ask reaches across prior board materials, latest market moves, and comparable companies.",
        "This is a strong handoff candidate for Sentra's Deep Research flow.",
      ],
      body: [
        "Hi Tracy — before tomorrow's board prep, can you help us pull together a quick comparative market analysis?",
        "What would be most useful is a current comp set, any notable transaction comps worth referencing, and a short view on how the market is pricing businesses with our profile right now. If you can ground it in the same framing we used last quarter, even better.",
        "Thanks as always.",
      ],
      draftedReply: [
        "Hi Evan — absolutely. I am pulling together a market view now and will frame it against the same benchmark set we used last quarter so your board deck stays consistent.",
        "I will include updated public comps, notable transaction references, and a short read on how current valuation bands are moving for businesses with your profile.",
        "I will send a clean draft as soon as it is ready.",
      ],
      sentraPrompt:
        "Build a comparative market analysis for tomorrow's board meeting using the company's last board deck, current public comparables, recent relevant transactions, and a concise valuation readout with key drivers.",
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
    "Today you have 7 meetings. You're speaking with operating partners about Synthetic DB, reconnecting with internal leadership after last week's travel, and preparing two client-facing conversations that need current context before you join.",
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
      id: "leadership-reconnect",
      title: "Internal leadership catch-up",
      time: "11:00 AM - 11:45 AM",
      attendees: "Tracy, Diana, Victor",
      focus:
        "Use this to close decision gaps from last week, including the Meridian reprioritization and ownership changes across the active mandates.",
      briefReady: true,
    },
    {
      id: "client-terms-review",
      title: "Client engagement terms follow-up",
      time: "1:00 PM - 1:30 PM",
      attendees: "Tracy, Julia Mercer, legal",
      focus:
        "Come in with the revised fee schedule, the latest redline, and a clear recommendation on timeline language.",
      briefReady: false,
    },
    {
      id: "board-prep-call",
      title: "Portfolio company board prep",
      time: "4:00 PM - 4:45 PM",
      attendees: "Tracy, Evan Brooks, finance team",
      focus:
        "The board prep hinges on a current market analysis and a crisp explanation of valuation movement since last quarter.",
      briefReady: false,
    },
  ],
};
