export const keyPoints = [
  {
    title: "Design-partner call goals:",
    description:
      "Agreed calls should start with a short vision reset, then structured, assumption-free questions to elicit actionable workflow feedback (Shaurya, Justin).",
  },
  {
    title: "Current partner misalignment:",
    description:
      "Existing design partners often perceive Sentra as only a meeting notetaker/reporting tool due to earlier unstructured outreach, causing conflicting expectations (Justin).",
  },
  {
    title: "Report engagement issue:",
    description:
      "Feedback shows reports contain value but are easy to ignore; delivery and lack of post-report actions/workflows reduce engagement (Shaurya, Justin).",
  },
  {
    title: "Free pilot rejected:",
    description:
      "Decided offering the product free to design partners is a bad idea due to reduced perceived value and weak obligation to participate (Shaurya, Justin).",
  },
  {
    title: "UX/brand urgency:",
    description:
      "Both agreed current product UI and landing page create negative impressions; Shaurya plans a more minimal, truthful landing page and a stronger product identity (Shaurya, Justin).",
  },
];

export const actionItems = [
  {
    id: "1",
    title: "Review transcripts:",
    description:
      "Shaurya to review design-partner transcripts in the design-partner spreadsheet; note Brex/Ashwin transcripts",
    checked: false,
  },
  {
    id: "2",
    title: "Collect missing recordings:",
    description:
      "Justin to keep pushing Ashwin to record Brex calls and add transcripts to the shared spreadsheet.",
    checked: false,
  },
];

export const transcriptEntries = [
  {
    speaker: "Ashwin Gopinath",
    text: "Alright, let's jump into the Q2 roadmap. I think the key question is whether we prioritize the meeting intelligence features or the reports infrastructure.",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "From the GTM side, meeting intelligence is what our design partners keep asking for. That's the unlock for the SXSW launch. If we can show a compelling demo of Sentra pulling context across meetings and Slack, it'll resonate.",
    isMe: true,
  },
  {
    speaker: "Andrey Starenky",
    text: "Agreed. I can have the transcript pipeline ready in two weeks. The action item extraction will need another sprint after that. We should also consider the audio pipeline latency regression -- that's blocking Pill v2.",
    isMe: false,
  },
  {
    speaker: "Ashwin Gopinath",
    text: "Let's prioritize the pipeline fix. If we ship Pill v2 with latency issues, design partners will notice. Andrey, can you triage the regression this week and give us an ETA by Friday?",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "One more thing -- the SXSW demo script needs to be finalized by Thursday. I'll own the narrative side, but Ashwin, can you review the technical walkthrough section?",
    isMe: true,
  },
  {
    speaker: "Kristina Beaman",
    text: "I'll flag -- the press kit timeline is tight given my current capacity. Justin, if you can take over the timeline coordination, I can focus on the media outreach list and booth logistics for SXSW.",
    isMe: false,
  },
  {
    speaker: "Ashwin Gopinath",
    text: "Good call, Kristina. Let's split responsibilities cleanly. Justin handles timeline and narrative, Kristina handles media and logistics. Andrey, what about the live demo environment -- are we using the staging server or setting up a dedicated instance?",
    isMe: false,
  },
  {
    speaker: "Andrey Starenky",
    text: "I'd recommend a dedicated instance. Staging has too many moving parts -- if someone pushes a broken build during the demo, we're toast. I can spin up an isolated environment by next Monday.",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "That makes sense. Can we also make sure the demo data is realistic? Last time the placeholder names were obviously fake and it undercut the credibility of the product.",
    isMe: true,
  },
  {
    speaker: "Ashwin Gopinath",
    text: "Agreed. Let's use anonymized data from our actual design partner calls. Andrey, can your team handle the data pipeline for that? We'll need meeting transcripts, extracted action items, and the relationship graph populated.",
    isMe: false,
  },
  {
    speaker: "Andrey Starenky",
    text: "Yeah, I'll have one of the engineers set up a seed script. We can pull from the last month of internal meetings and sanitize the names. Should be straightforward.",
    isMe: false,
  },
  {
    speaker: "Kristina Beaman",
    text: "On the logistics side -- we've confirmed the booth location at SXSW. It's in the main hall, Row C. I've also started reaching out to journalists and a few potential design partners who'll be at the conference.",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "Great. How many press meetings do we have lined up so far? And are any of the tier-one publications confirmed?",
    isMe: true,
  },
  {
    speaker: "Kristina Beaman",
    text: "We have three confirmed so far -- TechCrunch, The Information, and a new one from Protocol's successor. Two more are tentative. I'm also working on getting us into a panel slot if one opens up.",
    isMe: false,
  },
  {
    speaker: "Ashwin Gopinath",
    text: "Let's also talk about the post-SXSW follow-up plan. We'll likely generate a bunch of inbound interest. Justin, can you draft a nurture sequence for leads we collect at the booth?",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "Already on it. I'm planning a three-email sequence: day-of follow-up with personalized notes from our conversation, day-three with the product overview deck, and day-seven with a direct ask for a demo call. I'll have the templates ready by end of next week.",
    isMe: true,
  },
  {
    speaker: "Andrey Starenky",
    text: "One more technical note -- we need to decide on the commitment extraction model. The current one has about 85% accuracy on action items, but it struggles with implicit commitments. I'm testing a fine-tuned version that should get us to 92%+.",
    isMe: false,
  },
  {
    speaker: "Ashwin Gopinath",
    text: "Let's go with the fine-tuned version if the latency is acceptable. What's the inference time looking like?",
    isMe: false,
  },
  {
    speaker: "Andrey Starenky",
    text: "About 1.2 seconds per transcript segment, compared to 0.8 for the current model. But the accuracy improvement is worth it, especially for the demo. I can optimize further after the launch.",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "Sounds good. Let's lock in the fine-tuned model for the demo and revisit optimization in April. Anything else before we wrap?",
    isMe: true,
  },
  {
    speaker: "Ashwin Gopinath",
    text: "Just a reminder -- board update deck is due next Friday. Justin, let's sync on the GTM slides on Wednesday. I'll handle the product and technical sections. Let's keep it tight -- ten slides max.",
    isMe: false,
  },
  {
    speaker: "Kristina Beaman",
    text: "I can prepare the media coverage summary and event ROI projections for the appendix. I'll have those ready by Thursday so you have time to review before the Friday deadline.",
    isMe: false,
  },
  {
    speaker: "Justin Cheng",
    text: "Perfect. Alright, I think we're aligned. Let's reconvene Thursday for a quick check-in on all the SXSW deliverables. Good session everyone.",
    isMe: true,
  },
];
