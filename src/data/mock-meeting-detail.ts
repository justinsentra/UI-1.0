export const keyPoints = [
  {
    title: "Design-partner call goals:",
    description:
      "Agreed calls should start with a short vision reset, then structured, assumption-free questions to elicit actionable workflow feedback (Arjun, Leo).",
  },
  {
    title: "Current partner misalignment:",
    description:
      "Existing design partners often perceive Sentra as only a meeting notetaker/reporting tool due to earlier unstructured outreach, causing conflicting expectations (Leo).",
  },
  {
    title: "Report engagement issue:",
    description:
      "Feedback shows reports contain value but are easy to ignore; delivery and lack of post-report actions/workflows reduce engagement (Arjun, Leo).",
  },
  {
    title: "Free pilot rejected:",
    description:
      "Decided offering the product free to design partners is a bad idea due to reduced perceived value and weak obligation to participate (Arjun, Leo).",
  },
  {
    title: "UX/brand urgency:",
    description:
      "Both agreed current product UI and landing page create negative impressions; Arjun plans a more minimal, truthful landing page and a stronger product identity (Arjun, Leo).",
  },
];

export const actionItems = [
  {
    id: "1",
    title: "Review transcripts:",
    description:
      "Arjun to review design-partner transcripts in the design-partner spreadsheet; note partner/Raj transcripts",
    checked: false,
  },
  {
    id: "2",
    title: "Collect missing recordings:",
    description:
      "Leo to keep pushing Raj to record CardVault calls and add transcripts to the shared spreadsheet.",
    checked: false,
  },
];

export const transcriptEntries = [
  {
    speaker: "Raj Sundaram",
    text: "Alright, let's jump into the Q2 roadmap. I think the key question is whether we prioritize the meeting intelligence features or the reports infrastructure.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "From the GTM side, meeting intelligence is what our design partners keep asking for. That's the unlock for the TechConnect launch. If we can show a compelling demo of Sentra pulling context across meetings and ChatWorks, it'll resonate.",
    isMe: true,
  },
  {
    speaker: "Pavel Volkov",
    text: "Agreed. I can have the transcript pipeline ready in two weeks. The action item extraction will need another sprint after that. We should also consider the audio pipeline latency regression -- that's blocking Widget v2.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Let's prioritize the pipeline fix. If we ship Widget v2 with latency issues, design partners will notice. Pavel, can you triage the regression this week and give us an ETA by Friday?",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "One more thing -- the TechConnect demo script needs to be finalized by Thursday. I'll own the narrative side, but Raj, can you review the technical walkthrough section?",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "I'll flag -- the press kit timeline is tight given my current capacity. Leo, if you can take over the timeline coordination, I can focus on the media outreach list and booth logistics for TechConnect.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Good call, Ingrid. Let's split responsibilities cleanly. Leo handles timeline and narrative, Ingrid handles media and logistics. Pavel, what about the live demo environment -- are we using the staging server or setting up a dedicated instance?",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "I'd recommend a dedicated instance. Staging has too many moving parts -- if someone pushes a broken build during the demo, we're toast. I can spin up an isolated environment by next Monday.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "That makes sense. Can we also make sure the demo data is realistic? Last time the placeholder names were obviously fake and it undercut the credibility of the product.",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "Agreed. Let's use anonymized data from our actual design partner calls. Pavel, can your team handle the data pipeline for that? We'll need meeting transcripts, extracted action items, and the relationship graph populated.",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "Yeah, I'll have one of the engineers set up a seed script. We can pull from the last month of internal meetings and sanitize the names. Should be straightforward.",
    isMe: false,
  },
  {
    speaker: "Ingrid Solberg",
    text: "On the logistics side -- we've confirmed the booth location at TechConnect. It's in the main hall, Row C. I've also started reaching out to journalists and a few potential design partners who'll be at the conference.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Great. How many press meetings do we have lined up so far? And are any of the tier-one publications confirmed?",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "We have three confirmed so far -- TechPulse, The Briefing, and a new one from TechWire's successor. Two more are tentative. I'm also working on getting us into a panel slot if one opens up.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Let's also talk about the post-TechConnect follow-up plan. We'll likely generate a bunch of inbound interest. Leo, can you draft a nurture sequence for leads we collect at the booth?",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Already on it. I'm planning a three-email sequence: day-of follow-up with personalized notes from our conversation, day-three with the product overview deck, and day-seven with a direct ask for a demo call. I'll have the templates ready by end of next week.",
    isMe: true,
  },
  {
    speaker: "Pavel Volkov",
    text: "One more technical note -- we need to decide on the commitment extraction model. The current one has about 85% accuracy on action items, but it struggles with implicit commitments. I'm testing a fine-tuned version that should get us to 92%+.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Let's go with the fine-tuned version if the latency is acceptable. What's the inference time looking like?",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "About 1.2 seconds per transcript segment, compared to 0.8 for the current model. But the accuracy improvement is worth it, especially for the demo. I can optimize further after the launch.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Sounds good. Let's lock in the fine-tuned model for the demo and revisit optimization in April. Anything else before we wrap?",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "Just a reminder -- board update deck is due next Friday. Leo, let's sync on the GTM slides on Wednesday. I'll handle the product and technical sections. Let's keep it tight -- ten slides max.",
    isMe: false,
  },
  {
    speaker: "Ingrid Solberg",
    text: "I can prepare the media coverage summary and event ROI projections for the appendix. I'll have those ready by Thursday so you have time to review before the Friday deadline.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Perfect. Alright, I think we're aligned. Let's reconvene Thursday for a quick check-in on all the TechConnect deliverables. Good session everyone.",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "Actually, before we break -- one more thing I want to cover. The demo data seeding. Pavel, when you sanitize the names, can we also make sure we have a realistic org chart populated? The relationship graph is one of our strongest differentiators and it needs to look rich.",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "Yeah, I was thinking about that. I'll create a fictional company -- maybe a Series B fintech with about 80 employees -- and seed in cross-functional meetings, ChatWorks threads, and a few email chains. That way the graph has enough nodes to look impressive without being overwhelming.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Love that. Can we make sure the demo company has a few obvious organizational silos? That way we can show how Sentra surfaces misalignment between teams. That's the story that resonates most with ops leaders.",
    isMe: true,
  },
  {
    speaker: "Pavel Volkov",
    text: "Totally. I'll set up a product team and a sales team that are clearly talking past each other on roadmap priorities. Classic scenario.",
    isMe: false,
  },
  {
    speaker: "Ingrid Solberg",
    text: "That's actually a great angle for the press conversations too. The silo-breaking narrative is more concrete than just saying organizational intelligence. I can build the press talking points around that.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Good. Let's make that our primary narrative thread. Ingrid, can you draft a one-pager with the core messaging by Tuesday? I want to make sure everyone at the booth is telling the same story.",
    isMe: false,
  },
  {
    speaker: "Ingrid Solberg",
    text: "On it. I'll also put together a quick FAQ sheet for the booth team -- common objections, competitor comparisons, pricing questions. The usual stuff people ask at these events.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Speaking of competitors -- do we know if Buzzbot or Echobird are going to have a presence at TechConnect? We should be ready to differentiate clearly.",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "Buzzbot won't be there from what I've heard. Echobird might have a small presence but they're focused on the accessibility angle, not org intelligence. Our real concern is Meetlytics and potentially Voiceflow if they decide to show up in the startup track.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Got it. The key differentiator is that we're not just a meeting tool. We connect meetings, ChatWorks, docs -- the full communication surface. Nobody else is doing the cross-platform relationship graph.",
    isMe: true,
  },
  {
    speaker: "Pavel Volkov",
    text: "One thing that could help with differentiation -- I've been working on the multi-source correlation feature. If I can get it stable by TechConnect, we could show a ChatWorks thread and a meeting discussing the same topic, and Sentra automatically linking them. That would be a wow moment.",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "I'd say 70% confident on the timeline. The matching algorithm works, but the UI for displaying the connections needs polish. I'd rather show it working cleanly on two sources than have it half-baked across four.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Agree with that approach. A polished demo of two sources beats a buggy demo of four every time. Let's scope it to meetings plus ChatWorks for TechConnect and tease the broader vision verbally.",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "On the booth design -- I got the mockups back from the designer. It's clean, mostly white with the teal accent. We have a 42-inch monitor for the live demo and a smaller screen for the looping product video. Total booth cost is coming in around $8,200, which is under budget.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Did we also set up the lead capture system? I don't want to be collecting business cards and manually entering them into HubSpot again.",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "Yes, I set up a QR code that drops people into a short Typeform. Name, email, company, role, and one question about their biggest communication pain point. It auto-syncs to HubSpot with a TechConnect source tag.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Nice. Let's also talk about who we want to actively seek out at the event. I've been looking at the attendee list and there are a few people I think we should try to get face time with.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Who are you thinking?",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "Helen Greyson from Summit Ventures is attending -- she's been looking at the productivity space. Also, there's a VP of Ops from Payvine named Marcus Williams who I think would be a perfect design partner. And I heard the Dokra team is sending a few product people.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "The Payvine connection is interesting. Enterprise ops teams are exactly our ICP. I can reach out to Marcus on LinkedIn before the event to set up a coffee meeting. Ingrid, can you see if we can get an intro to Helen through our existing investor network?",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "I'll check with our angels. I think David might know someone at Summit Ventures who can make that intro. I'll send the email today.",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "While we're talking about the demo environment -- what's our fallback if the wifi at the venue is bad? Last conference I went to, the internet was completely unusable during peak hours.",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "I can set up an offline mode that runs against a local cache. The live data won't update, but the demo flow will still work. It'll take about two days of engineering time. I can also bring a mobile hotspot as a backup for connectivity.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Definitely do the offline mode. And yes to the hotspot. Let's not leave anything to chance. We only get one shot at first impressions with these press contacts.",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "On that note -- I want to do a full dry run of the booth setup and demo flow the day before. Can everyone be available on March 7th for that? We fly in the morning of the 7th, set up in the afternoon, and do a complete rehearsal.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Works for me. I'll have the demo script fully memorized by then. Two versions -- a 90-second elevator pitch and a five-minute deep dive.",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "Let's talk budget quickly. Ingrid, can you give us the full breakdown of what we're spending on TechConnect?",
    isMe: false,
  },
  {
    speaker: "Ingrid Solberg",
    text: "Sure. Booth space was $4,500. Booth design and fabrication is $8,200. Swag is $1,400. Travel and hotels for four people is about $6,800. Press dinner we're hosting on night one is budgeted at $2,000. Miscellaneous -- Uber, printing, last-minute stuff -- I've set aside $1,500. Total is around $24,400.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "That's within the $25K we allocated. Let's try to keep the miscellaneous spending tight. If we need to go over, I'd rather put extra dollars toward a second press dinner or a targeted happy hour with the people we want to meet.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Actually, the happy hour idea is good. We could host a small invite-only event -- maybe 15 to 20 people -- ops leaders and a few investors. More intimate than the booth. Ingrid, is that feasible to pull together in two weeks?",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "It's tight but doable. I know a bar near the convention center that does private events. I can get a quote today and put together an invite list by tomorrow. We'd probably need another $1,500 to $2,000 for the venue and drinks.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "Let's do it. I'll approve the extra spend. The ROI on a targeted event like that is way higher than handing out more stickers. Leo, can you draft the invite copy?",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Will do. I'll frame it as an exclusive preview of what we're building, not a sales pitch. Something like 'The Future of Organizational Intelligence -- an intimate conversation hosted by Sentra.' Keep it classy.",
    isMe: true,
  },
  {
    speaker: "Mark Davis",
    text: "Pavel, can you also prepare a shorter, more visual demo for the happy hour? Something laptop-friendly, maybe three minutes. Less formal, more show-and-tell.",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "One last thing on product positioning. I've been refining how we talk about Sentra and I want to pressure-test it with this group. The line I keep coming back to is: Sentra is the organizational memory layer. Every conversation, decision, and commitment across your company -- captured, connected, and made actionable.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "I like 'organizational memory layer.' It's more tangible than 'organizational intelligence.' My only concern is that 'memory' might make people think we're just a recording tool. We need to emphasize the 'connected and actionable' part.",
    isMe: true,
  },
  {
    speaker: "Ingrid Solberg",
    text: "What if we lead with the pain point instead? Something like: 'Your team makes hundreds of decisions a week. Sentra makes sure none of them fall through the cracks.' Then we explain the memory layer as the how.",
    isMe: false,
  },
  {
    speaker: "Raj Sundaram",
    text: "That's strong. Let's use Ingrid's framing as the opening hook and the memory layer as the product explanation. Pavel, one more thing -- let's include the ChatWorks integration in the demo. It's too important to the cross-platform story. If it's a resource issue, pull someone off the reporting dashboard. TechConnect is the priority.",
    isMe: false,
  },
  {
    speaker: "Pavel Volkov",
    text: "Understood. I'll restructure the sprint tomorrow to make that work.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Alright. So to recap -- Pavel is on the dedicated demo environment, seed data with the fictional fintech company, offline fallback mode, and scoping ChatWorks integration into the demo. Ingrid is handling booth logistics, press outreach, messaging one-pager, happy hour venue, and the target attendee intros. I've got the demo script, nurture sequence, invite copy for the happy hour, and the GTM slides for the board deck. Raj reviews the technical walkthrough and handles board deck product sections.",
    isMe: true,
  },
  {
    speaker: "Raj Sundaram",
    text: "That's a clean breakdown. Thursday check-in at 10 AM. Ingrid, send a shared doc after this with all the action items and deadlines. Let's make this launch count.",
    isMe: false,
  },
  {
    speaker: "Mark Davis",
    text: "Thanks everyone. Let's crush it.",
    isMe: true,
  },
];
