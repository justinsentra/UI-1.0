# Prompt-Kit Components & SVG Icons Integration

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Install shadcn/ui + prompt-kit components, replace existing source icons with full-color SVGs, integrate Source/Steps/TextShimmer across all features, fix chat padding, and lengthen AI responses.

**Architecture:** Install shadcn/ui foundation, then add prompt-kit components (source, steps, text-shimmer) via their registry. Create a centralized SVG icon module with all brand icons. Replace existing source pills, scanning loaders, and loading states throughout deep research, reports, radar, and meetings.

**Tech Stack:** React 19, Tailwind CSS 4, shadcn/ui, prompt-kit, Zustand, Motion

---

## Task 1: Install shadcn/ui Foundation

**Files:**

- Modify: `package.json`
- Create: `components.json` (shadcn config)
- Modify: `src/lib/utils.ts` (ensure cn utility is compatible)
- Modify: `tsconfig.app.json` (ensure path aliases work)

**Step 1: Initialize shadcn/ui**

```bash
cd /Users/justincheng/Desktop/swe/desktop-ui-mock-main
npx shadcn@latest init
```

Choose: TypeScript, Tailwind CSS, default style, base color neutral, CSS variables yes, `src/components/ui` path, `src/lib/utils.ts` utils path, React Server Components NO.

If interactive prompts are an issue, create `components.json` manually:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

**Step 2: Verify existing `cn` utility works**

The existing `src/lib/utils.ts` already exports `cn` using `clsx` and `tailwind-merge`. No changes needed.

**Step 3: Commit**

```bash
git add components.json package.json
git commit -m "chore: initialize shadcn/ui configuration"
```

---

## Task 2: Install prompt-kit Components

**Files:**

- Create: `src/components/prompt-kit/source.tsx`
- Create: `src/components/prompt-kit/steps.tsx`
- Create: `src/components/prompt-kit/text-shimmer.tsx`
- Modify: `package.json` (new deps if needed)

**Step 1: Install prompt-kit source component**

```bash
npx shadcn add "https://prompt-kit.com/c/source.json"
```

**Step 2: Install prompt-kit steps component**

```bash
npx shadcn add "https://prompt-kit.com/c/steps.json"
```

**Step 3: Install prompt-kit text-shimmer component**

```bash
npx shadcn add "https://prompt-kit.com/c/text-shimmer.json"
```

**Step 4: Verify installations**

Check that the files landed in `src/components/prompt-kit/` (or wherever shadcn places them). If they go to a different directory, move them to `src/components/prompt-kit/`.

**Step 5: Commit**

```bash
git add src/components/prompt-kit/ package.json package-lock.json
git commit -m "feat: install prompt-kit source, steps, and text-shimmer components"
```

---

## Task 3: Create Full-Color SVG Icon Components

**Files:**

- Modify: `src/icons/source-icons.tsx` — Replace simplified monochrome icons with full-color SVGs
- Modify: `src/data/mock-deep-research.ts` — Expand SourceType union

**Step 1: Update SourceType to include all new types**

In `src/data/mock-deep-research.ts`, update:

```typescript
export type SourceType =
  | "slack"
  | "linear"
  | "github"
  | "zoom"
  | "google-docs"
  | "google-meet"
  | "google-calendar"
  | "google-drive"
  | "notion"
  | "asana"
  | "discord"
  | "outlook"
  | "email";
```

**Step 2: Rewrite `src/icons/source-icons.tsx`**

Replace ALL existing icon components with full-color SVG versions. Use the exact SVGs provided by the user:

- **Google Meet** — Multi-color (#00832D, #0066DA, #E94235, #2684FC, #00AC47, #FFBA00)
- **Google Calendar** — Multi-color (#EA4335, #188038, #1967D2, #FBBC04, #34A853, #4285F4)
- **Linear** — Single color (#5E6AD2)
- **Slack** — Four colors (#36c5f0, #2eb67d, #ecb22e, #e01e5a)
- **Notion** — Black/white paths
- **Asana** — Single color (#F06A6A)
- **Discord** — Single color (#5865F2)
- **Google Drive** — Multi-color (#0066da, #00ac47, #ea4335, #00832d, #2684fc, #ffba00)
- **Outlook** — Complex gradients (use the full SVG with defs)
- **Zoom** — Gradient fill (#0845BF to #4F90EE)

Each icon component should:

- Accept `size?: number` and `className?: string` props
- Set `width={size}` and `height={size}` (default 14)
- Remove the `opacity="0.6"` that the old icons had — these are full-color now
- Preserve unique gradient/clipPath IDs by prefixing with icon name (e.g., `google_meet__clip0`)

Keep existing `GitHubIcon` and `EmailIcon` as-is (simple monochrome icons).

Update the `SOURCE_ICON_MAP` to include all new icon types.

**Step 3: Commit**

```bash
git add src/icons/source-icons.tsx src/data/mock-deep-research.ts
git commit -m "feat: add full-color SVG icons for all source types"
```

---

## Task 4: Fix Chat Input Padding

**Files:**

- Modify: `src/components/prompt-kit/prompt-input.tsx:158-164` — Increase textarea padding
- Modify: `src/components/prompt-kit/prompt-input.tsx:178` — Adjust action button container padding

**Step 1: Update textarea padding**

In `PromptInputTextarea`, change:

```
px-3 py-2.5
```

to:

```
px-5 py-3.5
```

**Step 2: Update actions container padding**

In `PromptInputActions`, change:

```
px-2 pb-2
```

to:

```
px-3 pb-3
```

**Step 3: Verify visually**

Run `pnpm dev` and check the deep research page. The textarea text should no longer crowd the container border, and the send button should have breathing room.

**Step 4: Commit**

```bash
git add src/components/prompt-kit/prompt-input.tsx
git commit -m "fix: increase chat input padding for better spacing"
```

---

## Task 5: Integrate Source Component into Deep Research

**Files:**

- Modify: `src/components/deep-research/source-pill.tsx` — Replace with prompt-kit Source component using SVG icons
- Modify: `src/components/deep-research/response-paragraph.tsx` — Update source display

**Step 1: Rewrite `source-pill.tsx`**

Replace the current pill with the prompt-kit Source component. Instead of `showFavicon` (which uses URLs), render the custom SVG icon directly:

```tsx
import type { SourceRef } from "@/data/mock-deep-research";
import { getSourceIcon } from "@/icons/source-icons";

interface SourcePillProps {
  source: SourceRef;
}

const SourcePill = ({ source }: SourcePillProps) => {
  const Icon = getSourceIcon(source.type);

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[var(--bg-component-hover)] text-[var(--fg-subtle)] cursor-pointer hover:bg-[var(--bg-component-pressed)] transition-colors">
      <Icon size={14} />
      {source.label}
    </span>
  );
};

export default SourcePill;
```

The key change: icons are now full-color (no opacity overlay), and we add hover state for interactivity.

**Step 2: Commit**

```bash
git add src/components/deep-research/source-pill.tsx
git commit -m "feat: update source pills with full-color SVG icons"
```

---

## Task 6: Replace Scanning Loader with prompt-kit Steps + TextShimmer

**Files:**

- Modify: `src/components/deep-research/scanning-loader.tsx` — Integrate Steps component with shimmer loading animation

**Step 1: Rewrite scanning loader**

Replace the custom scanning loader with the prompt-kit Steps component. Use TextShimmer for the active step's text to create the loading animation effect:

```tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { TextShimmer } from "@/components/prompt-kit/text-shimmer";
import type { ScanStep } from "@/data/mock-deep-research";

interface ScanningLoaderProps {
  steps: ScanStep[];
  onComplete: () => void;
}

const ScanningLoader = ({ steps, onComplete }: ScanningLoaderProps) => {
  const [completedIndex, setCompletedIndex] = useState(-1);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let current = 0;

    const advance = () => {
      if (current >= steps.length) {
        setTimeout(() => onCompleteRef.current(), 400);
        return;
      }
      timeout = setTimeout(() => {
        setCompletedIndex(current);
        current += 1;
        advance();
      }, steps[current].duration);
    };

    advance();
    return () => clearTimeout(timeout);
  }, [steps]);

  return (
    <div className="flex flex-col gap-2.5 py-2">
      {steps.map((step, index) => {
        const isCompleted = index <= completedIndex;
        const isActive = index === completedIndex + 1;

        return (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.3 }}
            className="flex items-center gap-2.5 text-[13px] text-[var(--fg-muted)]"
          >
            <span className="flex items-center justify-center w-4 h-4 shrink-0">
              {isCompleted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Check size={13} className="text-[var(--color-success)]" />
                </motion.span>
              ) : isActive ? (
                <Loader2
                  size={13}
                  className="animate-spin text-[var(--fg-disabled)]"
                />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--fg-disabled)] opacity-40" />
              )}
            </span>
            <span className={isCompleted ? "text-[var(--fg-subtle)]" : ""}>
              {isActive ? (
                <TextShimmer duration={1.5}>{step.label}</TextShimmer>
              ) : (
                step.label
              )}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScanningLoader;
```

**Step 2: Commit**

```bash
git add src/components/deep-research/scanning-loader.tsx
git commit -m "feat: add text shimmer animation to scanning loader steps"
```

---

## Task 7: Update Report Detail Sources Panel with SVG Icons

**Files:**

- Modify: `src/types/index.ts:69` — Expand Source type to include more source types
- Modify: `src/components/panels/sources-panel-content.tsx` — Use SVG icons instead of letter badges
- Modify: `src/data/mock-reports.ts:938-945` — Update source types to use new types

**Step 1: Expand Source type in types/index.ts**

```typescript
export interface Source {
  type:
    | "slack"
    | "linear"
    | "meeting"
    | "email"
    | "google-meet"
    | "google-calendar"
    | "google-drive"
    | "notion"
    | "asana"
    | "discord"
    | "outlook"
    | "zoom"
    | "github"
    | "google-docs";
  label: string;
}
```

**Step 2: Update mock report sources to use specific types**

In `src/data/mock-reports.ts`, change the `sources` array in `gtmStatusReport`:

```typescript
sources: [
  { type: "slack", label: "#sxsw-launch" },
  { type: "slack", label: "#gtm-ops" },
  { type: "google-meet", label: "Weekly Team Standup" },
  { type: "google-meet", label: "GTM Planning Sync" },
  { type: "linear", label: "SXSW-89" },
  { type: "linear", label: "GTM-42" },
],
```

**Step 3: Rewrite sources-panel-content.tsx with SVG icons**

Replace the letter-badge system with actual SVG icons from the source-icons module. Import icons from `@/icons/source-icons` and render them inline. Group by type and show the icon next to each source label.

**Step 4: Commit**

```bash
git add src/types/index.ts src/data/mock-reports.ts src/components/panels/sources-panel-content.tsx
git commit -m "feat: use full-color SVG icons in report sources panel"
```

---

## Task 8: Add Meeting Platform Icons to Upcoming Meetings

**Files:**

- Modify: `src/pages/meeting-notes.tsx:149-158` — Add platform icon next to each upcoming meeting

**Step 1: Import icons and render platform icon**

Add Google Meet and Zoom icons next to each upcoming meeting row based on `m.platform`:

```tsx
import { GoogleMeetIcon, ZoomIcon } from "@/icons/source-icons";

// Inside the upcoming meeting row:
<div key={m.id} className="flex items-center gap-2">
  <div className="w-4 h-4 flex items-center justify-center shrink-0">
    {m.platform === "Google Meet" ? (
      <GoogleMeetIcon size={14} />
    ) : (
      <ZoomIcon size={14} />
    )}
  </div>
  <span className="text-[14px] text-[var(--fg-base)] flex-1">{m.title}</span>
  <span className="text-[13px] text-[var(--fg-muted)]">
    {formatTimeRange(m.time, m.endTime)}
  </span>
</div>;
```

Remove the old `<div className="w-0.5 h-4 bg-[var(--fg-base)] rounded-full" />` indicator.

**Step 2: Commit**

```bash
git add src/pages/meeting-notes.tsx
git commit -m "feat: add platform icons to upcoming meetings"
```

---

## Task 9: Make AI Responses Longer

**Files:**

- Modify: `src/data/mock-deep-research.ts:37-145` — Expand response paragraphs with more content
- Modify: `src/components/artifacts/artifacts-chat-content.tsx:8-13` — Lengthen mock chat responses

**Step 1: Expand deep research mock responses**

Each paragraph should be 2-3x longer. Add more analysis, specific data points, and actionable insights. Add more source references including new source types (google-meet, google-calendar, notion, etc.).

Example expansion for first response paragraph:

```typescript
{
  id: "p0-0",
  content: `**Pipeline Overview (Q1 2026)**\n\nTotal pipeline value is **$4.2M**, up 18% vs last quarter. There are 12 deals currently in negotiation with an average deal size of **$87K**. The weighted pipeline sits at $2.1M based on current stage probabilities.\n\nNew pipeline generation this week was strong with 4 new opportunities sourced — 2 from inbound (website demo requests), 1 from a partner referral via Campfire, and 1 from the LinkedIn campaign that launched last Monday. The partner-sourced deal (Meridian Corp) came in at $120K ARR, making it the largest single opportunity added this quarter.\n\nStage movement: 3 deals advanced from Discovery to Evaluation, and the Atlas Group deal moved to Contract Sent. Average days-in-stage for Evaluation dropped from 18 to 14 days, suggesting the new demo playbook is improving conversion velocity.`,
  sources: [
    { type: "google-meet", label: "GTM Strategy Sync" },
    { type: "slack", label: "#sales-pipeline" },
    { type: "google-calendar", label: "Pipeline Review Meeting" },
    { type: "notion", label: "Q1 Deal Tracker" },
  ],
},
```

Do this for ALL paragraphs in ALL mock responses. Each paragraph should be a minimum of 3-4 sentences with specific data.

**Step 2: Lengthen artifact chat responses**

In `artifacts-chat-content.tsx`, expand each mock response to 3-4 sentences:

```typescript
const MOCK_RESPONSES = [
  "Based on the latest reports, the pipeline value increased by 50% this week, driven primarily by the Campfire deal progressing to budget approval stage. Three new discovery calls were completed with Series B startups matching our ICP. The weighted pipeline now sits at $2.1M, and if the Campfire deal closes as expected by mid-March, we'll exceed our Q1 target by 15%. Notably, the average deal size has increased from $72K to $87K quarter-over-quarter.",
  "The main risk flagged across reports is the Relay API stability issue — their API is still in beta with breaking changes expected in the next 2 weeks. Andrey is evaluating a shim layer as a fallback integration approach, which would add approximately 3 days to the timeline. This could impact the Relay deal ($95K ARR) if not resolved by mid-March. Additionally, the press kit deadline is tight with Kristina at 40% completion and a March 5 hard deadline.",
  "Looking at the engineering overview, sprint velocity has been consistent at 85% completion rate over the last 3 sprints. The main blocker is the authentication service migration which is behind by 3 days — this is gating 3 downstream features including SSO support that 4 enterprise prospects have requested. On the positive side, the N+1 query fix shipped and reduced page load times from 3s to under 200ms, which directly addresses a top customer complaint.",
  "Customer success metrics show strong engagement with 78% of active users accessing the new analytics dashboard within 48 hours of launch. NPS score improved from 42 to 48 this month, driven by the reporting improvements. Two customers flagged minor integration issues that the team is actively addressing — both related to webhook reliability. The mobile app beta went out to 25 testers on Wednesday with initial feedback being overwhelmingly positive.",
];
```

**Step 3: Also add new source types to deep research scan steps**

Update scan step labels to mention more source types:

```typescript
scanSteps: [
  { label: "Parsing 8 meeting transcripts from Google Meet...", duration: 700 },
  { label: "Reading 5 Slack threads and 3 Notion pages...", duration: 600 },
  { label: "Scanning CRM pipeline and Google Calendar events...", duration: 500 },
],
```

**Step 4: Commit**

```bash
git add src/data/mock-deep-research.ts src/components/artifacts/artifacts-chat-content.tsx
git commit -m "feat: expand AI responses with more detailed content and new source types"
```

---

## Task 10: Build & Verify

**Step 1: Run TypeScript check**

```bash
npx tsc --noEmit
```

Fix any type errors.

**Step 2: Run dev server**

```bash
pnpm dev
```

**Step 3: Verify visually**

Check each page:

- [ ] Deep Research — source pills show full-color icons, scanning loader has shimmer text, responses are longer
- [ ] Report Detail — sources panel shows SVG icons grouped by type
- [ ] Meeting Notes — upcoming meetings show Google Meet / Zoom icons
- [ ] Chat input — padding is generous, text doesn't crowd the border

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: fix any remaining type errors and polish"
```

---

## Summary of Changes

| Area               | Before                          | After                                |
| ------------------ | ------------------------------- | ------------------------------------ |
| Source icons       | 6 monochrome icons with opacity | 13 full-color SVG icons              |
| Chat input padding | `px-3 py-2.5` (cramped)         | `px-5 py-3.5` (comfortable)          |
| Scanning loader    | Plain text labels               | TextShimmer animation on active step |
| AI responses       | 2-3 sentences each              | 4-6 sentences with specific data     |
| Report sources     | Letter badges (S, M, L, E)      | Full-color SVG icons                 |
| Meeting icons      | Plain dot indicator             | Google Meet / Zoom logos             |
| Dependencies       | Custom only                     | + shadcn/ui + prompt-kit components  |
