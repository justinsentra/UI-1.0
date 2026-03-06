import type { Meeting, TranscriptEntry } from "../types";

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

function repeatTranscript(entries: TranscriptEntry[], times = 10): TranscriptEntry[] {
  return Array.from({ length: times }, () => entries).flat();
}

function expandTranscripts(list: Meeting[]): Meeting[] {
  for (const m of list) {
    if (m.transcript.length > 0) {
      m.transcript = repeatTranscript(m.transcript);
    }
  }
  return list;
}

export const meetings: Meeting[] = expandTranscripts([
  // Today (day 0)
  {
    id: "mtg-1",
    title: "Weekly Team Standup",
    date: daysAgo(0),
    time: "2:00 PM",
    endTime: "2:45 PM",
    duration: "45 min",
    platform: "Google Meet",
    privacy: "public",
    participants: [
      "Ashwin Gopinath",
      "Andrey Starenky",
      "Justin Cheng",
      "Kristina Beaman",
    ],
    tags: ["Standup"],
    summary:
      "Reviewed design-partner call structure and identified improvements to increase engagement. Discussed misalignment with two current partners and agreed on a corrective approach.",
    keyPoints: [
      {
        title: "Design-partner call goals",
        description:
          "Calls should focus on extracting specific workflow pain points rather than demoing features.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "Current partner misalignment",
        description:
          "Existing design partners often perceive Sentra as only a meeting notetaker due to earlier unstructured outreach, causing conflicting expectations.",
        participants: ["Justin Cheng"],
      },
      {
        title: "Report engagement issue",
        description:
          "Feedback shows reports contain value but are easy to ignore; delivery and lack of post-report actions reduce engagement.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "UX/brand urgency",
        description:
          "Both agreed current product UI and landing page create negative impressions; plan for a more minimal, truthful landing page.",
        participants: ["Ashwin Gopinath", "Andrey Starenky"],
      },
    ],
    actionItems: [
      {
        id: "ai-1-1",
        title: "Review transcripts from last 3 design-partner calls",
        description:
          "Tag recurring pain points. Summarize findings in a shared doc by EOW.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-1-2",
        title: "Collect missing recordings",
        description:
          "Push Ashwin to record Brex calls and add transcripts to the shared spreadsheet.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "Alright everyone, let's run through updates. What's the status on the design-partner engagement this week?",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "We've had three calls, but the format is still off. Partners keep expecting a product demo rather than a discovery conversation. We need to restructure the call flow.",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "From the engineering side, the new onboarding flow is ready for testing. We can also show the updated relationship graph if partners want to see progress.",
        isMe: false,
      },
      {
        speaker: "Kristina Beaman",
        text: "I've been hearing from partners that the reports feel too dense. Maybe we should simplify the default view and let them drill down if they want more detail.",
        isMe: false,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Good feedback. Let's make that a priority. Justin, can you document the top three partner complaints and we'll address them in the next sprint?",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Will do. I'll have a summary ready by Friday with specific quotes from each partner call.",
        isMe: true,
      },
    ],
  },
  {
    id: "mtg-2",
    title: "Product Roadmap Review",
    date: daysAgo(0),
    time: "4:30 PM",
    endTime: "5:30 PM",
    duration: "60 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Andrey Starenky", "Justin Cheng"],
    tags: ["Product"],
    summary:
      "Deep dive into the Q2 product roadmap. Prioritized meeting intelligence features over reports infrastructure for the SXSW launch. Discussed commitment extraction model accuracy and the need for a dedicated demo environment.",
    keyPoints: [
      {
        title: "Q2 priority: meeting intelligence",
        description:
          "Meeting intelligence features win over reports infrastructure because design partners consistently ask for them and it's the SXSW demo unlock.",
        participants: ["Andrey Starenky", "Justin Cheng"],
      },
      {
        title: "Transcript pipeline timeline",
        description:
          "Transcript pipeline ready in two weeks, action item extraction needs another sprint after that. Audio pipeline latency regression is blocking Pill v2.",
        participants: ["Andrey Starenky"],
      },
      {
        title: "Commitment extraction accuracy",
        description:
          "Current model at 85% accuracy on action items. Fine-tuned version targeting 92%+ with 1.2s inference time (up from 0.8s).",
        participants: ["Andrey Starenky"],
      },
    ],
    actionItems: [
      {
        id: "ai-2-1",
        title: "Triage audio pipeline latency regression",
        description:
          "Investigate and provide an ETA for the fix by Friday. Blocking Pill v2 launch.",
        assignee: "Andrey Starenky",
        checked: false,
      },
      {
        id: "ai-2-2",
        title: "Finalize SXSW demo script",
        description:
          "Complete narrative side by Thursday. Ashwin to review technical walkthrough section.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-2-3",
        title: "Set up dedicated demo environment",
        description:
          "Spin up an isolated instance separate from staging to avoid broken builds during demos. Target: next Monday.",
        assignee: "Andrey Starenky",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "Let's start with the big question — meeting intelligence or reports infrastructure for Q2?",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "From a technical standpoint, meeting intelligence has more dependencies but it's what partners keep asking for. I can have the transcript pipeline ready in two weeks.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Agreed. That's the unlock for SXSW. If we can show context being pulled across meetings and Slack, it'll resonate with the audience.",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "One blocker — the audio pipeline latency regression is holding up Pill v2. I need to triage that this week. Also, the commitment extraction model is only at 85% accuracy. I'm testing a fine-tuned version that should get us to 92%+.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "What's the inference time on the fine-tuned model?",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "About 1.2 seconds per segment, up from 0.8. Worth it for the demo though. I'll optimize after launch.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-3",
    title: "Ashwin / Justin 1:1",
    date: daysAgo(0),
    time: "11:30 AM",
    endTime: "12:00 PM",
    duration: "30 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Ashwin Gopinath"],
    tags: ["1:1"],
    summary:
      "Discussed fundraising narrative refinement and board update timing. Aligned on the need to sharpen the 'organizational memory' pitch for investor conversations and set a deadline for the board deck.",
    keyPoints: [
      {
        title: "Fundraising narrative",
        description:
          "Need to move away from 'meeting notetaker' framing and lead with 'organizational memory platform' — resonates better with enterprise buyers and investors.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "Board update timeline",
        description:
          "Board deck due next Friday. Keep it to ten slides max. GTM slides need a sync on Wednesday.",
        participants: ["Ashwin Gopinath"],
      },
    ],
    actionItems: [
      {
        id: "ai-3-1",
        title: "Draft updated fundraising one-pager",
        description:
          "Rewrite the narrative around 'organizational memory' positioning. Share with Ashwin by Wednesday.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-3-2",
        title: "Sync on GTM slides for board deck",
        description:
          "Schedule a working session on Wednesday to finalize the GTM section of the board update.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "I want to talk about the fundraising narrative. I think we're still leading with the wrong framing in our investor conversations.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "You mean the meeting notetaker angle? I agree — it undersells what we're building. 'Organizational memory' is a much bigger story.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Exactly. Every enterprise CIO we talk to lights up when we frame it that way. Let's rewrite the one-pager this week. Also, board deck is due next Friday — ten slides max.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Got it. I'll handle the GTM section. Want to sync on Wednesday to make sure we're aligned?",
        isMe: true,
      },
    ],
  },
  // Yesterday (day 1)
  {
    id: "mtg-4",
    title: "Customer Discovery — Relay",
    date: daysAgo(1),
    time: "3:00 PM",
    endTime: "3:45 PM",
    duration: "45 min",
    platform: "Google Meet",
    privacy: "public",
    participants: ["Sarah Chen", "Justin Cheng"],
    tags: ["Customer"],
    summary:
      "Explored Relay's workflow pain points around context loss in async handoffs. Their team of 40 loses critical decisions made in meetings because action items aren't tracked back to the original discussion. They're currently using Notion + Slack but the context bridge is manual.",
    keyPoints: [
      {
        title: "Context loss in handoffs",
        description:
          "Relay's biggest pain is decisions made in meetings getting lost when handed off asynchronously. Team members join follow-up calls without context from prior discussions.",
        participants: ["Sarah Chen"],
      },
      {
        title: "Current tool stack limitations",
        description:
          "They use Notion for docs and Slack for comms but the bridge between meeting decisions and task tracking is entirely manual. Takes ~2 hours/week per team lead.",
        participants: ["Sarah Chen"],
      },
      {
        title: "Willingness to pilot",
        description:
          "Sarah expressed strong interest in a pilot if we can demonstrate the meeting-to-action-item pipeline with source tracing.",
        participants: ["Sarah Chen", "Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-4-1",
        title: "Send Relay a pilot proposal",
        description:
          "Include scope, timeline (2-week pilot), and success metrics focused on context retention in handoffs.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-4-2",
        title: "Prepare custom demo for Relay",
        description:
          "Show the meeting-to-action-item flow with source citations. Use anonymized data similar to their team structure.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "Sarah, thanks for making time. I'd love to understand how your team handles the flow from meeting decisions to actual work getting done.",
        isMe: true,
      },
      {
        speaker: "Sarah Chen",
        text: "Honestly, it's our biggest pain point. We have 40 people and decisions made in meetings just evaporate. Someone will say 'we agreed on X last week' and nobody can find where that happened.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "How are you tracking things today?",
        isMe: true,
      },
      {
        speaker: "Sarah Chen",
        text: "Notion for docs, Slack for comms, but the bridge is completely manual. Our team leads spend about two hours a week just writing up meeting summaries and copying action items into Notion.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That's exactly the problem we're solving. What if you could see every action item automatically traced back to the exact moment in the meeting where it was discussed?",
        isMe: true,
      },
      {
        speaker: "Sarah Chen",
        text: "That would be huge. If you can show me that working reliably, I'd want to pilot it with our product team immediately.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-5",
    title: "GTM Strategy Sync",
    date: daysAgo(1),
    time: "10:00 AM",
    endTime: "11:00 AM",
    duration: "60 min",
    platform: "Google Meet",
    privacy: "public",
    participants: ["Ashwin Gopinath", "Justin Cheng", "Kristina Beaman"],
    tags: ["GTM"],
    summary:
      "Aligned on the outbound strategy for Series A founders. Decided to focus on 'organizational memory' positioning rather than 'meeting notes' to differentiate from Granola and Otter. Kristina to lead a targeted LinkedIn campaign; Justin to build a founder-specific email sequence.",
    keyPoints: [
      {
        title: "Positioning pivot",
        description:
          "Moving from 'AI meeting notes' to 'organizational memory for growing teams' — differentiates from Granola/Otter and resonates with Series A founders scaling from 20 to 100 people.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "Target ICP refinement",
        description:
          "Narrowing to Series A founders with 20-80 employees in B2B SaaS. They feel the pain of context loss most acutely as they add layers of management.",
        participants: ["Justin Cheng", "Kristina Beaman"],
      },
      {
        title: "Channel strategy",
        description:
          "LinkedIn thought leadership (Kristina) + personalized cold email (Justin) + warm intros from existing design partners. No paid ads for now.",
        participants: ["Kristina Beaman", "Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-5-1",
        title: "Build founder-specific email sequence",
        description:
          "3-email drip: intro with pain point, case study from design partner, direct ask for a 20-min call.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-5-2",
        title: "Launch LinkedIn campaign",
        description:
          "5 posts over 2 weeks on 'organizational memory' theme. Include quotes from design partner conversations (anonymized).",
        assignee: "Kristina Beaman",
        checked: false,
      },
      {
        id: "ai-5-3",
        title: "Create one-pager for warm intros",
        description:
          "Single-page PDF that design partners can forward to their founder network. Focus on the 'context loss' problem.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "Let's nail down the GTM positioning today. I don't think 'AI meeting notes' is cutting it anymore.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Agreed. Every Series A founder I talk to already has Granola or Otter. We need to be the 'organizational memory' play — that's a much bigger wedge.",
        isMe: true,
      },
      {
        speaker: "Kristina Beaman",
        text: "I like that angle for content. I can build a LinkedIn series around it. The 'context loss at scale' narrative really resonates — I've seen it firsthand at every startup I've been at.",
        isMe: false,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Perfect. Let's target B2B SaaS founders, 20 to 80 employees. That's the sweet spot where they feel the pain but haven't built internal tooling yet.",
        isMe: false,
      },
    ],
  },
  // 2 days ago
  {
    id: "mtg-6",
    title: "Investor Update Prep",
    date: daysAgo(2),
    time: "4:00 PM",
    endTime: "4:30 PM",
    duration: "30 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Ashwin Gopinath", "Justin Cheng"],
    tags: ["Investor"],
    summary:
      "Drafted the structure for the monthly investor update. Covering product velocity (8 PRs merged this week), new enterprise pipeline (JPM, Assurant), and the SXSW launch plan. Decided to include a 'lessons learned' section on design partner feedback.",
    keyPoints: [
      {
        title: "Update structure",
        description:
          "Four sections: Product Velocity, Enterprise Pipeline, SXSW Plan, Lessons Learned. Keep each section to 2-3 bullet points with supporting metrics.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "Key metrics to highlight",
        description:
          "8 PRs merged, 3 new enterprise conversations (JPM, Assurant, SoftBank extension), platform stability improvements (memory usage down from 8.6GB to 300MB).",
        participants: ["Ashwin Gopinath"],
      },
      {
        title: "Transparency on challenges",
        description:
          "Ashwin wants to include honest feedback from design partners about UX issues. Shows self-awareness and builds investor trust.",
        participants: ["Ashwin Gopinath"],
      },
    ],
    actionItems: [
      {
        id: "ai-6-1",
        title: "Draft investor update",
        description:
          "Write first draft following the four-section structure. Include metrics and design partner quotes. Due by Thursday.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-6-2",
        title: "Pull PR metrics from GitHub",
        description:
          "Get exact numbers on PRs merged, issues closed, and deployment frequency for the past month.",
        assignee: "Andrey Starenky",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "Let's get the investor update structure locked. I want to send it by Friday.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I'm thinking four sections: product velocity, enterprise pipeline, SXSW, and lessons learned. Short and punchy.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "I like including lessons learned. Investors appreciate transparency. Let's mention the design partner feedback about UX — shows we're listening and iterating.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Good call. I'll highlight the memory leak fix too — going from 8.6GB to 300MB is a great engineering story.",
        isMe: true,
      },
    ],
  },
  {
    id: "mtg-7",
    title: "Design Review — Pill v2",
    date: daysAgo(2),
    time: "1:30 PM",
    endTime: "2:15 PM",
    duration: "45 min",
    platform: "Google Meet",
    privacy: "public",
    participants: ["Andrey Starenky", "Justin Cheng"],
    tags: ["Design"],
    summary:
      "Reviewed the Pill v2 design mockups. The new floating pill design reduces screen clutter and surfaces meeting context inline. Identified latency concerns with the real-time transcript preview and agreed to test with a skeleton loader approach.",
    keyPoints: [
      {
        title: "Pill v2 design direction",
        description:
          "Floating pill with expandable context card. Shows meeting title, active speaker, and top-3 key points in real time. Collapsed state is just a small indicator dot.",
        participants: ["Andrey Starenky", "Justin Cheng"],
      },
      {
        title: "Latency concern",
        description:
          "Real-time transcript preview adds ~400ms of perceived delay. Skeleton loader approach preferred over spinner to maintain the 'always available' feeling.",
        participants: ["Andrey Starenky"],
      },
      {
        title: "Accessibility considerations",
        description:
          "Need keyboard shortcuts for expand/collapse and screen reader support for the context card content.",
        participants: ["Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-7-1",
        title: "Implement skeleton loader for Pill v2",
        description:
          "Replace the current spinner with a skeleton loader that matches the context card layout. Feels faster even if actual load time is the same.",
        assignee: "Andrey Starenky",
        checked: false,
      },
      {
        id: "ai-7-2",
        title: "Add keyboard shortcuts spec",
        description:
          "Document keyboard shortcuts for pill interaction: Cmd+Shift+P to toggle, arrow keys to navigate key points.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "Let's walk through the Pill v2 mockups. I think the floating design is a big improvement over the sidebar approach.",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "Agreed. The expandable context card is clean. My concern is the real-time transcript preview — it's adding about 400ms of delay that feels noticeable.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "What if we use a skeleton loader instead of a spinner? Perceived performance is better even if actual timing is the same.",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "That's a good idea. I can prototype that this week. We should also think about keyboard shortcuts — power users will want to toggle this without touching the mouse.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-8",
    title: "SXSW Launch Planning",
    date: daysAgo(2),
    time: "9:30 AM",
    endTime: "10:30 AM",
    duration: "60 min",
    platform: "Google Meet",
    privacy: "public",
    participants: [
      "Ashwin Gopinath",
      "Andrey Starenky",
      "Justin Cheng",
      "Kristina Beaman",
    ],
    tags: ["Launch"],
    summary:
      "Full team alignment on the SXSW launch plan. Confirmed booth location (main hall, Row C), three press meetings (TechCrunch, The Information, Protocol successor), and the post-event nurture sequence. Demo environment will be isolated from staging.",
    keyPoints: [
      {
        title: "Booth and logistics confirmed",
        description:
          "Main hall, Row C. Kristina has three press meetings confirmed (TechCrunch, The Information, Protocol successor) with two more tentative. Working on a panel slot.",
        participants: ["Kristina Beaman"],
      },
      {
        title: "Demo environment strategy",
        description:
          "Dedicated instance separate from staging to avoid broken builds during demos. Andrey to spin up by next Monday with anonymized data from real design partner calls.",
        participants: ["Andrey Starenky"],
      },
      {
        title: "Post-event follow-up plan",
        description:
          "Three-email nurture sequence: day-of personalized follow-up, day-three product deck, day-seven demo ask. Templates ready by end of next week.",
        participants: ["Justin Cheng"],
      },
      {
        title: "Demo data quality",
        description:
          "Must use realistic, anonymized data. Last time placeholder names undercut credibility. Pulling from actual internal meetings and sanitizing.",
        participants: ["Ashwin Gopinath", "Andrey Starenky"],
      },
    ],
    actionItems: [
      {
        id: "ai-8-1",
        title: "Set up isolated demo environment",
        description:
          "Spin up dedicated instance with seed script using anonymized data from last month's internal meetings. Due: Monday.",
        assignee: "Andrey Starenky",
        checked: false,
      },
      {
        id: "ai-8-2",
        title: "Finalize press meeting schedule",
        description:
          "Confirm the two tentative press meetings. Prepare talking points for each publication.",
        assignee: "Kristina Beaman",
        checked: false,
      },
      {
        id: "ai-8-3",
        title: "Draft post-SXSW email templates",
        description:
          "Three-email nurture sequence with personalization hooks. Ready by end of next week.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-8-4",
        title: "Prepare media coverage summary",
        description:
          "Create media coverage tracking doc and event ROI projections for the board deck appendix. Due: Thursday.",
        assignee: "Kristina Beaman",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "Alright, this is the big one. SXSW is in three weeks. Let's make sure everyone is aligned on responsibilities.",
        isMe: false,
      },
      {
        speaker: "Kristina Beaman",
        text: "We've confirmed the booth — main hall, Row C. Three press meetings are locked: TechCrunch, The Information, and a new outlet from Protocol's successor. Two more are tentative.",
        isMe: false,
      },
      {
        speaker: "Andrey Starenky",
        text: "For the demo, I'd recommend a dedicated instance. Staging has too many moving parts — if someone pushes a broken build during the event, we're toast.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Agreed. And let's make the demo data realistic this time. Last event the placeholder names were obviously fake and it undercut the product credibility.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Good point. Use anonymized data from our actual design partner calls. Andrey, can your team set up a seed script?",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I'll also have the post-event nurture sequence ready — day-of follow-up, day-three deck, day-seven demo ask. Three emails, all personalized.",
        isMe: true,
      },
    ],
  },
  // 3 days ago
  {
    id: "mtg-9",
    title: "Engineering Sprint Retro",
    date: daysAgo(3),
    time: "3:00 PM",
    endTime: "3:45 PM",
    duration: "45 min",
    platform: "Zoom",
    privacy: "public",
    participants: ["Andrey Starenky", "Justin Cheng", "Shaurya Patel"],
    tags: ["Standup"],
    summary:
      "Retrospective on sprint velocity and blockers from the past two weeks. Team shipped 12 PRs but 3 were blocked by the production stability issues (CPU bug, memory leak, DB connections). RabbitMQ migration was the biggest win. Agreed to add monitoring dashboards before the next sprint.",
    keyPoints: [
      {
        title: "Sprint velocity recap",
        description:
          "12 PRs shipped in two weeks, but velocity was artificially depressed by 3 PRs blocked on production stability. True velocity is higher once infra is stable.",
        participants: ["Andrey Starenky"],
      },
      {
        title: "RabbitMQ migration success",
        description:
          "Migration complete and merged (PR #480). Background task reliability is dramatically improved. No more silent failures in the job queue.",
        participants: ["Andrey Starenky", "Shaurya Patel"],
      },
      {
        title: "Monitoring gaps identified",
        description:
          "The CPU bug and memory leak went undetected for days because we lacked proper monitoring. Need Datadog dashboards before the next sprint starts.",
        participants: ["Andrey Starenky", "Shaurya Patel"],
      },
    ],
    actionItems: [
      {
        id: "ai-9-1",
        title: "Set up Datadog monitoring dashboards",
        description:
          "Infrastructure-as-Code for API memory, CPU, DB connections, and job queue health. Use the IaC patterns from the RabbitMQ migration.",
        assignee: "Shaurya Patel",
        checked: false,
      },
      {
        id: "ai-9-2",
        title: "Document production incident playbook",
        description:
          "Write a runbook for the three incidents we hit: CPU spike, memory bloat, DB connection exhaustion. Include diagnosis steps and fixes.",
        assignee: "Andrey Starenky",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Andrey Starenky",
        text: "Let's start with the numbers. We shipped 12 PRs in two weeks, but three were blocked by production fires. The real velocity story is better than it looks.",
        isMe: false,
      },
      {
        speaker: "Shaurya Patel",
        text: "The RabbitMQ migration was the highlight for me. No more silent job failures — that was causing so many weird bugs downstream.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "From the product side, the stability work is huge. Design partners were hitting errors and we didn't even know until they told us. The monitoring gap needs to be closed.",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "Agreed. Shaurya, can you set up Datadog dashboards this sprint? Use Infrastructure-as-Code so we can version control the config.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-10",
    title: "Lakshmi / Justin Check-in",
    date: daysAgo(3),
    time: "11:00 AM",
    endTime: "11:30 AM",
    duration: "30 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Lakshmi Shankar"],
    tags: ["Investor"],
    summary:
      "Quick sync on fundraising timeline and investor sentiment. Lakshmi sees strong interest from two funds but advises waiting until post-SXSW to have a stronger narrative. Recommended connecting with three specific angels who have enterprise SaaS experience.",
    keyPoints: [
      {
        title: "Fundraising timing",
        description:
          "Lakshmi advises waiting until post-SXSW to start formal conversations. The launch event and press coverage will strengthen the narrative significantly.",
        participants: ["Lakshmi Shankar"],
      },
      {
        title: "Investor interest",
        description:
          "Two funds (undisclosed) have expressed interest based on the 'organizational memory' thesis. They want to see enterprise traction signals.",
        participants: ["Lakshmi Shankar"],
      },
      {
        title: "Angel introductions",
        description:
          "Lakshmi will intro to three angels with enterprise SaaS experience who could provide strategic value beyond capital.",
        participants: ["Lakshmi Shankar"],
      },
    ],
    actionItems: [
      {
        id: "ai-10-1",
        title: "Prepare post-SXSW fundraising deck",
        description:
          "Include SXSW metrics, press coverage, and enterprise pipeline updates. Target having a draft ready one week after the event.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-10-2",
        title: "Follow up on angel intros",
        description:
          "Lakshmi to send introductions this week. Prepare a brief one-pager tailored to enterprise SaaS angels.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Lakshmi Shankar",
        text: "I've been socializing your story with a few funds. There's genuine interest, but I think you should wait until after SXSW to go formal.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That makes sense. The launch will give us press coverage and hopefully some enterprise traction signals to point to.",
        isMe: true,
      },
      {
        speaker: "Lakshmi Shankar",
        text: "Exactly. I also have three angel investors I want to connect you with — all enterprise SaaS backgrounds. They can be strategic, not just capital.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That's great. I'll prepare a tailored one-pager for those conversations. Thanks, Lakshmi.",
        isMe: true,
      },
    ],
  },
  // 4 days ago
  {
    id: "mtg-11",
    title: "Customer Discovery — Campfire",
    date: daysAgo(4),
    time: "2:00 PM",
    endTime: "2:45 PM",
    duration: "45 min",
    platform: "Google Meet",
    privacy: "public",
    participants: ["James Richardson", "Justin Cheng", "Ashwin Gopinath"],
    tags: ["Customer"],
    summary:
      "Explored Campfire's needs around meeting intelligence and follow-up tracking. Andrew Greener values pre-meeting briefs for external calls but finds them unnecessary for internal syncs. Wants source citations and a consolidated morning digest instead of per-meeting briefs.",
    keyPoints: [
      {
        title: "External vs. internal meeting briefs",
        description:
          "Pre-meeting briefs are highly valuable for external customer calls but 'unnecessary' for internal syncs. Wants a single consolidated morning digest for internal meetings.",
        participants: ["James Richardson"],
      },
      {
        title: "Source citations are essential",
        description:
          "Cannot trust AI-consolidated information 'as gospel' without the ability to verify it. Source tracing is a prerequisite for adoption.",
        participants: ["James Richardson"],
      },
      {
        title: "Follow-up tracking gap",
        description:
          "Campfire's team frequently drops follow-ups from meetings because there's no automated bridge between meeting notes and their project management tool (Linear).",
        participants: ["James Richardson", "Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-11-1",
        title: "Prototype morning digest feature",
        description:
          "Design a consolidated morning briefing that summarizes all upcoming internal meetings in one view. Share mockup with Campfire for feedback.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-11-2",
        title: "Prioritize citations in pre-meeting briefs",
        description:
          "Work with engineering to add source citations to the brief generation pipeline. Critical for Campfire adoption.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "James, we'd love to understand how your team uses meeting context today. What's working and what's not?",
        isMe: true,
      },
      {
        speaker: "James Richardson",
        text: "The pre-meeting briefs are actually great for external calls — customer calls especially. But for our internal syncs, they're overkill. I'd rather have one morning summary of everything on my calendar.",
        isMe: false,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "That's interesting feedback. We've been treating all meetings the same. What about the source citations — is that important to you?",
        isMe: false,
      },
      {
        speaker: "James Richardson",
        text: "Critical. I can't trust AI-generated summaries as gospel. If I can't click through and see where a fact came from, I won't use it in a customer conversation.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-12",
    title: "Brand & Messaging Workshop",
    date: daysAgo(4),
    time: "10:00 AM",
    endTime: "11:00 AM",
    duration: "60 min",
    platform: "Zoom",
    privacy: "public",
    participants: [
      "Ashwin Gopinath",
      "Justin Cheng",
      "Kristina Beaman",
      "Kevin Liu",
    ],
    tags: ["GTM"],
    summary:
      "Workshopped core messaging pillars for the website relaunch. Landed on three pillars: 'Never lose context,' 'Decisions you can trace,' and 'Your organization's memory.' Kevin presented competitor messaging analysis showing a gap in the 'trust/verification' angle.",
    keyPoints: [
      {
        title: "Three messaging pillars",
        description:
          "1) 'Never lose context' — the pain point. 2) 'Decisions you can trace' — the differentiator (source citations). 3) 'Your organization's memory' — the aspirational vision.",
        participants: ["Ashwin Gopinath", "Justin Cheng", "Kristina Beaman"],
      },
      {
        title: "Competitor messaging gap",
        description:
          "Kevin's analysis shows no competitor is leading with 'trust/verification' messaging. Granola focuses on 'effortless notes,' Otter on 'transcription.' The trust angle is ours to own.",
        participants: ["Kevin Liu"],
      },
      {
        title: "Website relaunch timeline",
        description:
          "New landing page needs to be live one week before SXSW. Kevin to deliver final designs by next Friday; Andrey's team to implement.",
        participants: ["Kevin Liu", "Kristina Beaman"],
      },
    ],
    actionItems: [
      {
        id: "ai-12-1",
        title: "Deliver final landing page designs",
        description:
          "Kevin to complete the new homepage, product page, and pricing page designs. Due: next Friday.",
        assignee: "Kevin Liu",
        checked: false,
      },
      {
        id: "ai-12-2",
        title: "Write website copy",
        description:
          "Draft all website copy based on the three messaging pillars. Kristina to review and polish.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-12-3",
        title: "Implement new landing page",
        description:
          "Front-end implementation of the new landing page. Must be live one week before SXSW.",
        assignee: "Andrey Starenky",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Kristina Beaman",
        text: "I've been thinking about our messaging and I think we need to land on three clear pillars that carry through everything — website, pitch deck, email sequences.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I'd propose: 'Never lose context' as the pain point, 'Decisions you can trace' as the differentiator, and 'Your organization's memory' as the aspirational vision.",
        isMe: true,
      },
      {
        speaker: "Kevin Liu",
        text: "I like that. I did a competitor messaging analysis — nobody is leading with the trust angle. Granola is 'effortless notes,' Otter is 'transcription.' The verification story is a wide open lane for us.",
        isMe: false,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "That's our wedge. Trust is what enterprise buyers care about. Let's make sure the landing page communicates this clearly. Kevin, when can you have final designs?",
        isMe: false,
      },
    ],
  },
  // 5 days ago
  {
    id: "mtg-13",
    title: "Andrey / Justin 1:1",
    date: daysAgo(5),
    time: "4:00 PM",
    endTime: "4:30 PM",
    duration: "30 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Andrey Starenky"],
    tags: ["1:1"],
    summary:
      "Synced on technical debt priorities and hiring pipeline for backend. Agreed to prioritize the database connection pooling fix and start interviewing backend candidates next week. Andrey raised concerns about test coverage being too low for the upcoming launch.",
    keyPoints: [
      {
        title: "Technical debt priorities",
        description:
          "Top three: database connection pooling (immediate), API rate limiting (before launch), and test coverage improvement (ongoing). Agreed to tackle pooling this sprint.",
        participants: ["Andrey Starenky"],
      },
      {
        title: "Backend hiring",
        description:
          "Two strong candidates in pipeline from Andrey's network. Plan to start phone screens next week. Looking for senior engineers with distributed systems experience.",
        participants: ["Andrey Starenky", "Justin Cheng"],
      },
      {
        title: "Test coverage concern",
        description:
          "Current coverage at ~40%. Andrey wants to get to 60% before SXSW to reduce risk of production incidents during the launch.",
        participants: ["Andrey Starenky"],
      },
    ],
    actionItems: [
      {
        id: "ai-13-1",
        title: "Fix database connection pooling",
        description:
          "Implement proper connection pooling to reduce concurrent connections by ~60%. Highest priority tech debt item.",
        assignee: "Andrey Starenky",
        checked: false,
      },
      {
        id: "ai-13-2",
        title: "Schedule backend candidate phone screens",
        description:
          "Set up 30-minute phone screens with both candidates. Andrey to share the interview rubric.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-13-3",
        title: "Create test coverage improvement plan",
        description:
          "Identify the highest-risk untested paths and create a prioritized list. Target: 60% coverage before SXSW.",
        assignee: "Andrey Starenky",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "Andrey, what's keeping you up at night on the technical side?",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "Honestly, the database connection pooling. We're hitting limits under load and it's going to bite us at SXSW if we don't fix it. Also, test coverage is at 40% — I want 60% before launch.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Let's make pooling the top priority this sprint. On hiring — where are we with those two backend candidates?",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "Both are strong. Distributed systems background, one from Stripe, one from Cloudflare. I can share the interview rubric and we can start phone screens next week.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-14",
    title: "Demo Prep — SoftBank",
    date: daysAgo(5),
    time: "1:00 PM",
    endTime: "1:45 PM",
    duration: "45 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Ashwin Gopinath", "Justin Cheng", "Kristina Beaman"],
    tags: ["Customer"],
    summary:
      "Final run-through of the SoftBank demo flow and Q&A prep. SoftBank is testing the mobile app for in-person meeting capture at Mobile World Congress. Demo focuses on the meeting-to-action pipeline with emphasis on cross-meeting context retrieval.",
    keyPoints: [
      {
        title: "Demo flow structure",
        description:
          "Three-part demo: 1) Live meeting capture and real-time summary, 2) Cross-meeting context retrieval ('what was decided about X across the last 5 meetings'), 3) Action item tracking with source citations.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "SoftBank's use case",
        description:
          "Their team is using the mobile app at Mobile World Congress to capture in-person meetings. They want to see how the context graph connects conversations across a multi-day conference.",
        participants: ["Ashwin Gopinath"],
      },
      {
        title: "Anticipated Q&A topics",
        description:
          "Security/compliance (SOC2 timeline), data residency, API access for their internal tools, and pricing for 500+ seats.",
        participants: ["Kristina Beaman"],
      },
    ],
    actionItems: [
      {
        id: "ai-14-1",
        title: "Prepare SOC2 timeline slide",
        description:
          "SoftBank will ask about compliance. Have a clear timeline for SOC2 Type II certification ready.",
        assignee: "Ashwin Gopinath",
        checked: false,
      },
      {
        id: "ai-14-2",
        title: "Build conference demo scenario",
        description:
          "Create a realistic multi-day conference scenario with 10+ meetings that demonstrates cross-meeting context retrieval.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "SoftBank is our biggest prospect right now. They're already testing the mobile app at Mobile World Congress. This demo needs to be flawless.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I've structured it in three parts: live capture, cross-meeting context, and action tracking with citations. The cross-meeting part is the wow moment.",
        isMe: true,
      },
      {
        speaker: "Kristina Beaman",
        text: "They'll definitely ask about SOC2 and data residency. We should have a clear compliance timeline ready.",
        isMe: false,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "Good call. I'll prepare that slide. Justin, can you build a realistic conference scenario for the demo? Ten-plus meetings across three days showing the context graph in action.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-15",
    title: "Weekly Design Critique",
    date: daysAgo(5),
    time: "10:00 AM",
    endTime: "10:45 AM",
    duration: "45 min",
    platform: "Zoom",
    privacy: "public",
    participants: ["Andrey Starenky", "Justin Cheng"],
    tags: ["Design"],
    summary:
      "Reviewed onboarding flow mockups and connection graph visuals. The onboarding flow needs simplification — current design has 7 steps, agreed to reduce to 4. Connection graph visualization received positive feedback but needs performance optimization for users with 100+ connections.",
    keyPoints: [
      {
        title: "Onboarding simplification",
        description:
          "Current 7-step onboarding is too long. Consolidating to 4 steps: connect calendar, select integrations, set preferences, first meeting capture. Everything else can be progressive disclosure.",
        participants: ["Andrey Starenky", "Justin Cheng"],
      },
      {
        title: "Connection graph performance",
        description:
          "Visualization looks great with 20-30 nodes but becomes sluggish at 100+. Need to implement virtualization or a level-of-detail approach for power users.",
        participants: ["Andrey Starenky"],
      },
      {
        title: "Empty state design",
        description:
          "First-time users see a blank connection graph which is confusing. Need a guided empty state that shows what the graph will look like after a few meetings.",
        participants: ["Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-15-1",
        title: "Redesign onboarding to 4 steps",
        description:
          "Create new mockups with the simplified flow: calendar → integrations → preferences → first capture. Due: next design critique.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-15-2",
        title: "Profile connection graph at 100+ nodes",
        description:
          "Run performance profiling and identify the bottleneck. Propose either virtualization or LOD approach.",
        assignee: "Andrey Starenky",
        checked: false,
      },
      {
        id: "ai-15-3",
        title: "Design guided empty state for connection graph",
        description:
          "Show a preview/illustration of what the graph looks like after 5-10 meetings to motivate new users.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "Let's start with the onboarding flow. I think seven steps is too many. We're going to lose people before they even capture their first meeting.",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "Agreed. We can cut it to four: calendar connection, integrations, preferences, and first capture. Everything else is progressive disclosure.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Good. Now the connection graph — it looks beautiful with a small dataset, but what happens when someone has 100+ connections?",
        isMe: true,
      },
      {
        speaker: "Andrey Starenky",
        text: "It gets sluggish. I'll run profiling this week. We might need to virtualize the graph or use a level-of-detail approach where distant nodes collapse.",
        isMe: false,
      },
    ],
  },
  // 6 days ago
  {
    id: "mtg-16",
    title: "All Hands",
    date: daysAgo(6),
    time: "3:00 PM",
    endTime: "4:00 PM",
    duration: "60 min",
    platform: "Google Meet",
    privacy: "public",
    participants: [
      "Ashwin Gopinath",
      "Andrey Starenky",
      "Justin Cheng",
      "Kristina Beaman",
      "Shaurya Patel",
      "Kevin Liu",
    ],
    tags: ["Standup"],
    summary:
      "Company-wide update on product milestones, hiring, and SXSW prep. Ashwin announced the Gartner 'Context Graph' validation, mandated team-wide Granola usage for 2-3 weeks to study competitor UX, and shared the JPM/Assurant enterprise leads.",
    keyPoints: [
      {
        title: "Gartner 'Context Graph' validation",
        description:
          "Gartner has started discussing the 'Context Graph' market space. External validation that will help in conversations with enterprise CIOs.",
        participants: ["Ashwin Gopinath"],
      },
      {
        title: "Granola mandate",
        description:
          "All team members must use Granola as primary meeting notetaker for 2-3 weeks. Goal: internalize the UX bar of a best-in-class competitor to inform our product direction.",
        participants: ["Ashwin Gopinath"],
      },
      {
        title: "New enterprise pipeline",
        description:
          "JPM (VP of Global Technology) and Assurant (Fortune 500 insurance) have initiated conversations. Strong interest in the organizational memory solution from large enterprises.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "Engineering wins",
        description:
          "100% CPU bug fixed, memory leak eliminated (8.6GB → 300MB), RabbitMQ migration complete. Platform is significantly more stable.",
        participants: ["Andrey Starenky"],
      },
    ],
    actionItems: [
      {
        id: "ai-16-1",
        title: "Start using Granola immediately",
        description:
          "Everyone to use Granola for all meetings for the next 2-3 weeks. Document what you like and what we should beat.",
        assignee: "All",
        checked: false,
      },
      {
        id: "ai-16-2",
        title: "Schedule JPM follow-up",
        description:
          "Send introduction follow-up to the VP of Global Technology. Include the organizational memory pitch deck.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-16-3",
        title: "Prepare Assurant discovery call",
        description:
          "Research Assurant's current tech stack and prepare discovery questions. Schedule call for next week.",
        assignee: "Kristina Beaman",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "Alright team, big updates this week. First — Gartner has started talking about 'Context Graphs' as a market space. That's external validation of exactly what we're building.",
        isMe: false,
      },
      {
        speaker: "Andrey Starenky",
        text: "On the engineering front, we've had a great two weeks. The CPU bug that was killing our API is fixed, memory is down from 8.6GB to 300MB, and the RabbitMQ migration is complete.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "And on the pipeline side, we have two new enterprise conversations — JPM and Assurant. Both are serious and came through warm intros.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "One more thing — starting today, I want everyone using Granola for all meetings. For the next two to three weeks, I want us to deeply understand what a best-in-class competitor feels like. We need to beat that bar.",
        isMe: false,
      },
    ],
  },
  {
    id: "mtg-17",
    title: "Customer Discovery — Runway",
    date: daysAgo(6),
    time: "11:00 AM",
    endTime: "11:45 AM",
    duration: "45 min",
    platform: "Zoom",
    privacy: "public",
    participants: ["Sarah Chen", "Justin Cheng"],
    tags: ["Customer"],
    summary:
      "Deep dive into Runway's internal communication workflows. Their 60-person team struggles with 'decision archaeology' — finding where and when a decision was made across Slack, meetings, and docs. They're spending ~5 hours/week per manager reconstructing context for cross-functional projects.",
    keyPoints: [
      {
        title: "Decision archaeology problem",
        description:
          "Runway's managers spend ~5 hours/week searching across Slack, meeting recordings, and Google Docs to find when and why decisions were made. The information exists but is scattered.",
        participants: ["Sarah Chen"],
      },
      {
        title: "Cross-functional context gaps",
        description:
          "Engineering and design teams make decisions in separate meetings. When they come together for reviews, nobody has full context of what the other team decided and why.",
        participants: ["Sarah Chen"],
      },
      {
        title: "Integration requirements",
        description:
          "Runway uses Slack, Google Meet, Notion, and Linear. Any solution needs to connect all four to provide a unified context layer.",
        participants: ["Sarah Chen", "Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-17-1",
        title: "Map Runway's tool stack to our integrations",
        description:
          "Verify we support Slack, Google Meet, Notion, and Linear. Identify any gaps in our current integration coverage.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-17-2",
        title: "Create 'decision archaeology' demo scenario",
        description:
          "Build a demo that shows searching across multiple meetings and Slack threads to find when and why a specific decision was made.",
        assignee: "Justin Cheng",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Justin Cheng",
        text: "Sarah, tell me about the biggest communication challenges at Runway right now.",
        isMe: true,
      },
      {
        speaker: "Sarah Chen",
        text: "We call it 'decision archaeology.' Someone will reference a decision from two weeks ago and nobody can find where it was made. Was it in Slack? A meeting? A Notion doc? Our managers spend five hours a week just reconstructing context.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That's a huge time sink. Is it worse for cross-functional projects?",
        isMe: true,
      },
      {
        speaker: "Sarah Chen",
        text: "Much worse. Engineering and design make decisions in separate meetings. When they come together for a review, nobody has the full picture. It leads to rehashing the same discussions.",
        isMe: false,
      },
    ],
  },
  // 7 days ago
  {
    id: "mtg-18",
    title: "Pricing Strategy Discussion",
    date: daysAgo(7),
    time: "2:00 PM",
    endTime: "3:00 PM",
    duration: "60 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Ashwin Gopinath", "Justin Cheng"],
    tags: ["Product"],
    summary:
      "Evaluated pricing tiers and packaging for the launch. Landed on a three-tier model: Free (individual, 5 meetings/month), Team ($15/user/month, unlimited meetings + integrations), and Enterprise (custom pricing, SSO + API access). Free tier is controversial but Ashwin sees it as the PLG wedge.",
    keyPoints: [
      {
        title: "Three-tier pricing model",
        description:
          "Free (individual, 5 meetings/month), Team ($15/user/month, unlimited + integrations), Enterprise (custom, SSO + API). Designed to convert individual users into team buyers.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
      {
        title: "Free tier as PLG wedge",
        description:
          "Ashwin sees the free tier as essential for product-led growth. Individual users try it, see value, and pull their team in. Justin concerned about support costs but agreed to test it.",
        participants: ["Ashwin Gopinath"],
      },
      {
        title: "Enterprise pricing considerations",
        description:
          "Enterprise tier includes SSO, API access, and custom data retention. Pricing is usage-based with a platform fee. Need to validate with JPM and Assurant conversations.",
        participants: ["Ashwin Gopinath", "Justin Cheng"],
      },
    ],
    actionItems: [
      {
        id: "ai-18-1",
        title: "Create pricing page mockup",
        description:
          "Design the pricing comparison table for the website. Include feature matrix across all three tiers.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-18-2",
        title: "Validate enterprise pricing with prospects",
        description:
          "Use the JPM and Assurant conversations to test the enterprise pricing model. Get feedback on the usage-based + platform fee structure.",
        assignee: "Ashwin Gopinath",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ashwin Gopinath",
        text: "Let's lock down pricing today. I think we need three tiers: free for individuals, team for growing companies, and enterprise for the big fish.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "I'm on board with team and enterprise, but I'm nervous about the free tier. Support costs add up and free users don't always convert.",
        isMe: true,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "I hear you, but PLG is our wedge. One person tries it, loves it, and pulls their team in. We cap it at five meetings per month so it's useful enough to hook but limited enough to convert.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "Alright, let's test it. For enterprise, I'm thinking custom pricing with a platform fee plus usage. We can validate that model with JPM and Assurant.",
        isMe: true,
      },
    ],
  },
  {
    id: "mtg-19",
    title: "Partner Intro — a16z Speedrun",
    date: daysAgo(7),
    time: "10:30 AM",
    endTime: "11:00 AM",
    duration: "30 min",
    platform: "Google Meet",
    privacy: "private",
    participants: ["Ashwin Gopinath", "Justin Cheng", "Ali Kazemi"],
    tags: ["Investor"],
    summary:
      "Intro call with a16z Speedrun team on portfolio synergies. Ali Kazemi sees potential for Sentra as infrastructure for their portfolio companies. Offered to connect with three portfolio companies that have expressed need for meeting intelligence tools. Discussed potential for a co-marketing case study.",
    keyPoints: [
      {
        title: "Portfolio synergy opportunity",
        description:
          "a16z Speedrun has multiple portfolio companies struggling with meeting context at scale. Ali sees Sentra as potential infrastructure they could recommend across the portfolio.",
        participants: ["Ali Kazemi"],
      },
      {
        title: "Three warm introductions",
        description:
          "Ali will connect us with three portfolio companies: a Series B fintech (200 people), a Series A dev tools company (40 people), and a growth-stage healthcare startup (150 people).",
        participants: ["Ali Kazemi", "Justin Cheng"],
      },
      {
        title: "Co-marketing potential",
        description:
          "If one of the portfolio companies pilots successfully, a16z is open to a joint case study that could be distributed to their newsletter (100K+ subscribers).",
        participants: ["Ali Kazemi", "Ashwin Gopinath"],
      },
    ],
    actionItems: [
      {
        id: "ai-19-1",
        title: "Follow up with Ali on portfolio intros",
        description:
          "Send a thank-you email and request the three portfolio company introductions. Include our one-pager tailored for each company's stage/industry.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-19-2",
        title: "Research the three portfolio companies",
        description:
          "Look into the fintech, dev tools, and healthcare companies. Prepare customized discovery questions for each intro call.",
        assignee: "Justin Cheng",
        checked: false,
      },
      {
        id: "ai-19-3",
        title: "Draft co-marketing proposal outline",
        description:
          "Prepare a rough outline for a potential case study with a16z. Include metrics we'd track during the pilot.",
        assignee: "Kristina Beaman",
        checked: false,
      },
    ],
    transcript: [
      {
        speaker: "Ali Kazemi",
        text: "We've been tracking the meeting intelligence space closely. A lot of our portfolio companies are struggling with this at scale. What makes Sentra different from Granola or Otter?",
        isMe: false,
      },
      {
        speaker: "Ashwin Gopinath",
        text: "We're building organizational memory, not just meeting notes. The context graph connects decisions across meetings, Slack, and docs — so you can trace any action item back to the original discussion.",
        isMe: false,
      },
      {
        speaker: "Ali Kazemi",
        text: "That's compelling. I have three portfolio companies I'd love to connect you with — a Series B fintech, a Series A dev tools company, and a growth-stage healthcare startup. All have expressed this need.",
        isMe: false,
      },
      {
        speaker: "Justin Cheng",
        text: "That would be incredibly valuable, Ali. We'd love those intros. If any of them pilot successfully, would you be open to a joint case study?",
        isMe: true,
      },
      {
        speaker: "Ali Kazemi",
        text: "Absolutely. If it works, we'd be happy to feature it in our newsletter. That's 100K+ subscribers, mostly founders and operators.",
        isMe: false,
      },
    ],
  },
]);
