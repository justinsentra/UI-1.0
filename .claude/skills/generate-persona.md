---
name: generate-persona
description: Generate a complete persona dataset for the Sentra desktop UI demo. Takes prospect info and creates all mock content files tailored to their industry and role.
---

# Generate Persona

You are generating a complete set of demo content for the Sentra desktop UI mock app, tailored to a specific prospect.

## Step 1: Collect Prospect Info

Ask the user for the following (accept whatever they provide — infer the rest):

- **Person name** and **title/role**
- **Company name** and brief description
- **Industry** (or infer from company)
- **LinkedIn URLs** (person + optional colleagues)
- Any **specific features to highlight** in the demo

If the user provides info conversationally (e.g., "generate a persona for Sarah Chen, VP of Operations at Meridian Health"), extract what you can and ask only for what's missing.

## Step 2: LinkedIn Enrichment

For each LinkedIn URL provided:

1. Try `WebFetch` on the URL to get profile data
2. If that fails (auth wall), try `WebSearch` for "{name} {company} LinkedIn"
3. If both fail, ask the user to paste the profile text

Extract: role history, skills, industry context, company size, team structure.

If no LinkedIn URL is provided, use `WebSearch` to find basic info about the person and company.

## Step 3: Generate Persona ID

Create a kebab-case persona ID from the company name or role, e.g.:

- "meridian-health" for Meridian Health
- "stripe-pm" for a Stripe product manager

Check that:

1. `src/data/personas/{personaId}/` doesn't already exist
2. The ID doesn't match any existing persona in `BUILTIN_PERSONAS` in `src/data/persona-registry.ts`

## Step 4: Read the Prompt Template

Read the generation prompt template:

```
src/data/generation/persona-prompt-template.ts
```

This contains the complete specification for all files you need to generate, including:

- All TypeScript interfaces
- Content rules and quality requirements
- Cross-file consistency rules

## Step 5: Generate Content Files

Create the directory `src/data/personas/{personaId}/` and generate all 9 files described in the prompt template:

1. `home.ts` — Export `homeData: PersonaHomeData`
2. `meetings.ts` — Export `meetings: Meeting[]`
3. `connections.ts` — Export `connections: PersonaConnectionsData`
4. `reports.ts` — Export `reportsData: PersonaReportsData`
5. `report-details.ts` — Export `reportDetails: Record<string, ReportDetail>`
6. `deep-research.ts` — Export `deepResearchData: PersonaDeepResearchData`
7. `sage.ts` — Export `sageData: PersonaSageData`
8. `commitments.ts` — Export `commitments: CommitmentItem[]`
9. `index.ts` — Composes all data and calls `registerPersonaData`

**CRITICAL:** Follow ALL cross-file consistency rules from the prompt template. Every meeting participant must appear in connections. Every commitment must reference a real meeting. Every artifact must link to a real report.

**CRITICAL:** Each file's export name must match exactly what `index.ts` imports. Use the names listed above.

Generate files one at a time, building on previously generated data to maintain consistency. Recommended order: meetings → connections → reports → report-details → deep-research → sage → commitments → home → index.

The `index.ts` file should also call `registerPersonaConfig` to register the persona in the dropdown:

```typescript
import { registerPersonaData } from "@/data/personas";
import { registerPersonaConfig } from "@/data/persona-registry";
import type { PersonaData } from "@/data/personas";
import { homeData } from "./home";
import { meetings } from "./meetings";
import { connections } from "./connections";
import { reportsData } from "./reports";
import { reportDetails } from "./report-details";
import { deepResearchData } from "./deep-research";
import { sageData } from "./sage";
import { commitments } from "./commitments";

const data: PersonaData = {
  home: homeData,
  meetings,
  connections,
  reports: reportsData,
  reportDetails,
  deepResearch: deepResearchData,
  sage: sageData,
  commitments,
};

registerPersonaData("{personaId}", data);

registerPersonaConfig({
  id: "{personaId}",
  label: "{personLabel}",
  description: "{description}",
  industry: "{industry}",
  featureHighlights: [...],
});
```

## Step 6: Wire Up the Import

Add a side-effect import to `src/data/persona-registry.ts` so the persona registers on app load.

Add this line near the top (before `BUILTIN_PERSONAS`):

```typescript
import "./personas/{personaId}";
```

If other generated persona imports already exist, append after them.

## Step 7: Build Verification

Run `npx tsc --noEmit` to verify no TypeScript errors.

If there are errors, fix them before proceeding.

## Step 8: Launch Verification Agent

Launch a verification agent (subagent) to check:

1. **Cross-reference consistency:**
   - All meeting participants exist in connections
   - All commitment meetingIds match meetings
   - Artifact reportIds match report categories
   - Sage meeting matches a meeting entry

2. **Content quality:**
   - No placeholder/lorem ipsum text
   - Industry terminology is correct
   - Metrics and data feel realistic
   - Document flow content is 500+ words

3. **Functional check:**
   - All IDs are unique
   - All required fields are present
   - TypeScript types are satisfied

If the verification agent cannot run, manually check: (1) `npx tsc --noEmit` passes, (2) all meeting participant names appear in connections.people, (3) all commitment meetingIds exist in meetings.

## Step 9: Report Results

Present to the user:

1. **What was generated:** List all files with brief descriptions
2. **Persona summary:** Name, role, industry, key characteristics
3. **Suggested demo flow:** Which features to highlight and in what order
4. **Any issues:** From the verification agent
5. **Next step:** "Switch to the '{personLabel}' persona in Settings to see the content. Run `npm run dev` if the dev server isn't running."
