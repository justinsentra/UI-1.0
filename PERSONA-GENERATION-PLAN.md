# Plan: Dynamic Persona Content Generation for Desktop UI Mock

## Context

The Sentra desktop UI mock is used in demo calls with clients from different industries (financial services, energy, healthcare, etc.). Currently, content is hardcoded for two personas: **Engineering Manager** and **JPM Banker**. Only the home page and deep-research page are persona-aware — meetings, connections, reports, radar, and commitments show JPM content regardless of which persona is selected.

**Goal:** Build a system where Justin can input a brief description of a prospect (name, company, role, LinkedIn URLs) and have Claude generate all mock content tailored to that person's industry, role, and workflow — then register it as a new persona in the app's settings dropdown.

---

## Design Decisions (from Justin's input)

1. **LinkedIn data:** Both auto-scrape (via web search) and manual paste. Try auto-scrape first, fall back to manual.
2. **Trigger:** Claude Code skill (`/generate-persona`). Justin provides info conversationally; the skill handles everything.
3. **Existing content:** Preserve existing EM/JPM files as-is. New persona system sits alongside — pages check for persona-keyed data first, fall back to existing flat exports for EM/JPM.

---

## Current Content Architecture (What Needs to Change)

### Files that hold content (all in `src/data/`):

| File                     | Content                                                                                            | Persona-Aware?                  |
| ------------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------- |
| `mock-deep-research.ts`  | Suggestions, session history, scan steps, response paragraphs, document flows (PRD/model), sources | Partial (suggestions, sessions) |
| `mock-meetings.ts`       | 6 meetings with participants, transcripts, key points, action items                                | No (JPM only)                   |
| `mock-connections.ts`    | 28 people + 15 companies                                                                           | No (mixed Sentra/JPM)           |
| `mock-reports.ts`        | 6 report categories, 5 radar categories, radar configs, preferences                                | No (JPM only)                   |
| `mock-report-details.ts` | Full report detail content (sections, drill-downs, sources, actions)                               | No (JPM only)                   |

### Files that hold page-level content (inline):

| File                                           | Inline Content                                                       | Persona-Aware?      |
| ---------------------------------------------- | -------------------------------------------------------------------- | ------------------- |
| `src/pages/home.tsx`                           | `SUGGESTIONS_BY_PERSONA`, `ARTIFACTS_BY_PERSONA`, `UPCOMING_MEETING` | Partial             |
| `src/components/sage/sageData.ts`              | Meeting notes, transcript, quick actions, pre-meeting brief          | No                  |
| `src/components/deep-research/empty-state.tsx` | Renders suggestions from store                                       | Yes (reads persona) |

### Store:

- `src/stores/persona-store.ts` — Holds `Persona` type (`"engineering-manager" | "jpm"`), `PERSONA_OPTIONS` array, Zustand store

---

## Architecture Decision

**Approach: Claude Code skill generates static TypeScript data files at dev time**

Rather than calling Claude at runtime (which would add latency and API dependency to a demo app), we'll:

1. Create a **Claude Code skill** (`/generate-persona`) that takes prospect info conversationally
2. The skill uses Claude to generate persona-appropriate content (it IS Claude — no separate API call needed)
3. Generated content is written as new persona-keyed data files in `src/data/personas/<persona-id>/`
4. The persona is registered in a persona registry file
5. The app reflects the new content immediately on next dev server refresh (Vite HMR)

**Why this approach:**

- No runtime API dependency — demo works offline
- Content is reviewable/editable before the call
- Preserves existing EM/JPM content untouched
- Fast — no loading states needed during demos
- No separate API key needed — Claude Code IS the generation engine

---

## Implementation Plan

### Phase 1: Add persona-aware content layer (preserving existing files)

**Strategy:** Keep existing `mock-*.ts` files untouched as the default/fallback for EM and JPM. Add a new content resolution layer that checks for persona-specific data first.

#### 1.1 Create persona registry

**New file:** `src/data/persona-registry.ts`

```typescript
export interface PersonaConfig {
  id: string;
  label: string;
  description: string;
  industry: string;
  featureHighlights: string[]; // suggested features to demo for this persona
}

// Built-in personas (content lives in existing mock-*.ts files)
const BUILTIN_PERSONAS: PersonaConfig[] = [
  { id: "engineering-manager", label: "Engineering Manager", ... },
  { id: "jpm", label: "JPM", ... },
];

// Generated personas (content lives in src/data/personas/<id>/)
// This array gets appended to by the /generate-persona skill
export const GENERATED_PERSONAS: PersonaConfig[] = [];

export const ALL_PERSONAS = [...BUILTIN_PERSONAS, ...GENERATED_PERSONAS];
```

#### 1.2 Create content resolver utility

**New file:** `src/data/content-resolver.ts`

A utility that resolves content for any persona:

- For built-in personas ("engineering-manager", "jpm"): returns existing mock data (unchanged)
- For generated personas: dynamically imports from `src/data/personas/<persona-id>/`

```typescript
export function getPersonaMeetings(personaId: string): Meeting[] {
  // Check generated persona data first
  const generated = generatedPersonaData[personaId];
  if (generated?.meetings) return generated.meetings;
  // Fall back to existing mock data for built-in personas
  return meetings; // from mock-meetings.ts
}
// Similar for connections, reports, deep-research, sage, etc.
```

#### 1.3 Create persona data directory structure

**New directory:** `src/data/personas/`

Each generated persona gets its own directory:

```
src/data/personas/
├── index.ts              # Re-exports all generated persona data
└── <persona-id>/
    ├── meetings.ts       # Meeting[]
    ├── connections.ts     # { people, companies }
    ├── reports.ts         # { categories, radars, radarConfigs, ... }
    ├── report-details.ts  # Record<string, ReportDetail>
    ├── deep-research.ts   # { suggestions, sessions, responses, documentFlows }
    ├── home.ts            # { suggestions, artifacts, upcomingMeeting, preMeetingBrief }
    └── sage.ts            # { meeting, notes, transcript, quickActions }
```

#### 1.4 Update persona store

**File:** `src/stores/persona-store.ts`

- Change `Persona` type from union literal to `string`
- Import `ALL_PERSONAS` from registry instead of hardcoded `PERSONA_OPTIONS`
- Keep same API surface — `usePersonaStore` still returns `{ persona, setPersona }`

#### 1.5 Update page components to use content resolver

Every page that currently imports mock data directly needs to:

1. Import `usePersonaStore` + the relevant content resolver function
2. Call `getPersonaMeetings(persona)` instead of importing `meetings` directly

**Files to update:**

- `src/pages/home.tsx` — Use resolver for suggestions, artifacts, upcoming meeting, brief
- `src/pages/deep-research.tsx` — Use resolver for all response/document content
- `src/pages/meetings.tsx` (or meeting-notes) — Use `getPersonaMeetings(persona)`
- `src/pages/connections.tsx` — Use `getPersonaConnections(persona)`
- `src/pages/artifacts.tsx` — Use `getPersonaReports(persona)`
- `src/pages/report-detail.tsx` — Use `getPersonaReportDetails(persona)`
- `src/pages/commitments.tsx` — Use resolver
- `src/pages/meeting-detail.tsx` — Use resolver
- `src/components/sage/` — Use resolver for sage data
- `src/components/settings/preferences-tab.tsx` — Import `ALL_PERSONAS` from registry

### Phase 2: Create the content generation system

#### 2.1 Create the persona generation prompt template

**File:** `src/data/generation/persona-prompt-template.ts`

This contains the master prompt that Claude uses to generate all mock content. The prompt:

1. Takes inputs: person name, company name, company description, role/title, industry, LinkedIn profile summaries
2. Instructs Claude to generate a complete, internally-consistent mock dataset
3. Specifies the exact TypeScript interfaces/shapes for each data type
4. Includes rules for internal consistency:
   - Meeting participants should appear in connections
   - Action items should reference real meetings
   - Reports should reflect the industry/role context
   - Deep research suggestions should match what this persona would ask
   - Artifact types should match industry (e.g., financial models for finance, project plans for tech)
   - Source types should match integrations the persona would use

#### 2.2 Create the Claude Code skill

**File:** `.claude/skills/generate-persona.md` (project-level skill)

The skill does NOT need a separate script — Claude Code IS the generation engine. The skill:

1. **Collects input** — Asks Justin for:
   - Person name, title, company name
   - Brief company description (1-2 sentences)
   - LinkedIn URLs of the person and key colleagues
   - (Optional) Any specific features to highlight

2. **LinkedIn enrichment** — For each LinkedIn URL:
   - First attempts `WebFetch` on the LinkedIn URL
   - If that fails (auth wall), falls back to `WebSearch` for "{name} {company} LinkedIn"
   - Extracts: role history, skills, industry, company size
   - If both fail, asks Justin to paste the profile text

3. **Generates content** — Using the prompt template + collected data, Claude generates all persona data files. This is done by Claude itself (no API call — the skill instructs Claude to write the files directly).

4. **Writes files** — Creates `src/data/personas/<persona-id>/` with all data files

5. **Updates registry** — Appends the new persona to `src/data/persona-registry.ts`

6. **Runs verification** — Launches a verification subagent (Phase 3)

7. **Reports results** — Shows:
   - What was generated
   - Feature highlights / suggested demo flow
   - Any issues found by verification

### Phase 3: Build the verification agent

#### 3.1 Persona verification agent

After content is generated, launch a verification agent that:

1. **Consistency check:** Validates that:
   - All meeting participants exist in connections
   - Action items reference valid meetings
   - Report content aligns with the persona's industry
   - Deep research suggestions are appropriate for the role
   - Source types match realistic integrations for the industry
   - Dates are internally consistent

2. **Persona role-play check:** The agent assumes the persona and evaluates:
   - "Would I actually ask these questions in deep research?"
   - "Do these meetings reflect my typical week?"
   - "Are these reports relevant to my role?"
   - "Do the action items and commitments feel realistic?"
   - "Are the artifact types (PRDs, models, decks) appropriate for my work?"

3. **Functional check:** Verifies cross-page linking:
   - Home page meeting links → meetings page entries
   - Home page artifacts → report detail pages / deep research flows
   - Connection references → connection detail pages
   - Commitment items → source meetings

4. **Feature recommendation:** Based on persona analysis, outputs:
   - Which features to highlight in the demo
   - Suggested demo flow order
   - Talking points specific to the prospect's pain points

### Phase 4: Output artifacts adaptation

#### 4.1 Adapt document flow content

The deep-research page has "document flows" — PRD (for EM) and 3-statement model (for JPM). Each persona needs:

- **Scan steps** — persona-appropriate source scanning labels
- **Document content** — the full markdown document preview
- **Build steps** — persona-appropriate building labels
- **Choice pills** — where to push output (Docs, Sheets, Slides, etc.)
- **Sources** — industry-appropriate source references

For each new persona, the generation script creates:

- 2-3 document flow types appropriate to the role (e.g., for healthcare: "Patient Outcome Report", "Compliance Audit", "Budget Variance Analysis")
- Full document content with realistic data
- Appropriate scan/build step labels

#### 4.2 Adapt report detail content

`mock-report-details.ts` contains full report content (sections, drill-downs, sources, suggested actions). For each persona, generate:

- At minimum: 2 report detail entries (one per top report category)
- Appropriate section headings and content
- Industry-specific drill-downs
- Relevant source references and suggested actions

### Phase 5: Settings integration

#### 5.1 Update settings dropdown

The settings dropdown already reads from `PERSONA_OPTIONS`. After Phase 1, new personas automatically appear. No UI changes needed beyond ensuring the dropdown handles >2 options gracefully (scrollable if many personas).

#### 5.2 Add persona management UI (optional)

If desired, add a small section in settings showing:

- Currently available personas
- "Generate new persona" button (opens a form or copies the CLI command)
- Feature highlights for each persona
- Delete persona option

---

## Files to Create

| File                                             | Purpose                                              |
| ------------------------------------------------ | ---------------------------------------------------- |
| `src/data/persona-registry.ts`                   | Central persona definitions + generated persona list |
| `src/data/content-resolver.ts`                   | Resolves content by persona (built-in vs generated)  |
| `src/data/personas/index.ts`                     | Re-exports all generated persona data                |
| `src/data/generation/persona-prompt-template.ts` | Master prompt template for content generation        |
| `.claude/skills/generate-persona.md`             | Claude Code skill for `/generate-persona`            |

## Files to Modify (minimal changes — existing content untouched)

| File                                          | Change                                                  |
| --------------------------------------------- | ------------------------------------------------------- |
| `src/stores/persona-store.ts`                 | Change `Persona` type to `string`, import from registry |
| `src/pages/home.tsx`                          | Use content resolver instead of inline persona data     |
| `src/pages/deep-research.tsx`                 | Use content resolver for all response content           |
| `src/pages/meetings.tsx` or meeting-notes     | Use `getPersonaMeetings(persona)`                       |
| `src/pages/artifacts.tsx`                     | Use `getPersonaReports(persona)`                        |
| `src/pages/report-detail.tsx`                 | Use `getPersonaReportDetails(persona)`                  |
| `src/pages/connections.tsx`                   | Use `getPersonaConnections(persona)`                    |
| `src/pages/commitments.tsx`                   | Use content resolver                                    |
| `src/pages/meeting-detail.tsx`                | Use content resolver                                    |
| `src/components/sage/` components             | Use content resolver                                    |
| `src/components/settings/preferences-tab.tsx` | Import `ALL_PERSONAS` from registry                     |

**Note:** Existing `mock-*.ts` files are NOT modified. They remain the source of truth for EM and JPM personas.

---

## What Justin Needs to Do Manually

1. **LinkedIn data** — If auto-scrape fails, paste LinkedIn profile text when prompted by the skill
2. **Review generated content** — Skim the generated files for accuracy before demoing
3. **Run the app** — `npm run dev` to see the changes reflected (Vite HMR should auto-reload)

## What's NOT Needed

- **No Anthropic API key** — Claude Code itself generates the content (no separate API call)
- **No MCP connections** — Content generation is file-based, not API-based
- **No Claude co-work** — The skill handles everything within Claude Code
- **No Electron changes** — Only content layer is affected

---

## Verification Plan

1. **Build verification:** Run `npm run build` after each phase to ensure no TypeScript errors
2. **Visual verification:** Run `npm run dev` and manually check each page with each persona
3. **Cross-link verification:** Click meetings on home → verify they exist on meetings page; click reports → verify detail pages load
4. **Persona switching:** Verify settings dropdown works and content changes across ALL pages
5. **Generated content verification:** After running the generation script, run the verification agent to check consistency and persona-appropriateness

---

## Execution Order

1. **Phase 1** (foundation) — Add persona-aware content layer. This is the largest change.
2. **Phase 2** (generation) — Build the content generation skill.
3. **Phase 3** (verification) — Build the verification agent.
4. **Phase 4** (artifacts) — Adapt output artifact content.
5. **Phase 5** (settings) — Settings integration and UX polish.

Phases 2-4 can be partially parallelized after Phase 1 is complete.
