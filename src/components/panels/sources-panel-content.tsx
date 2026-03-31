import { cn } from "@lib/utils";
import type { Source } from "@/types";
import type { SourceType } from "@/data/mock-deep-research";
import { getSourceIcon } from "@/icons/source-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface SourcesPanelContentProps {
  sources: Source[];
}

const TYPE_LABELS: Record<string, string> = {
  slack: "ChatWorks",
  meeting: "Zoom",
  "google-meet": "Zoom",
  "google-calendar": "Outlook Calendar",
  "google-drive": "SharePoint",
  linear: "Trackline",
  email: "Email",
  outlook: "Outlook",
  notion: "Dokra",
  asana: "Asana",
  discord: "Discord",
  zoom: "Zoom",
  github: "GitHub",
  "google-docs": "Word",
  teams: "Microsoft Teams",
  sharepoint: "SharePoint",
};

const SOURCE_DESCRIPTIONS: Record<string, string> = {
  slack: "ChatWorks channel or thread",
  linear: "Trackline issue or project",
  github: "GitHub repository or PR",
  zoom: "Zoom meeting recording",
  "google-docs": "Word document",
  "google-meet": "Zoom meeting transcript",
  "google-calendar": "Outlook Calendar event",
  "google-drive": "SharePoint file",
  notion: "Dokra page or database",
  asana: "Asana task or project",
  discord: "Discord channel",
  outlook: "Outlook email thread",
  email: "Email message",
  meeting: "Meeting transcript",
  teams: "Microsoft Teams chat or channel",
  sharepoint: "SharePoint document or site",
};

const ICON_COMPATIBLE_TYPES: Record<string, SourceType> = {
  slack: "slack",
  meeting: "zoom",
  "google-meet": "zoom",
  "google-calendar": "outlook",
  "google-drive": "sharepoint",
  linear: "linear",
  email: "email",
  outlook: "outlook",
  notion: "notion",
  asana: "asana",
  discord: "discord",
  zoom: "zoom",
  github: "github",
  "google-docs": "outlook",
  teams: "teams",
  sharepoint: "sharepoint",
};

function SourceChip({ source }: { source: Source }) {
  const iconType = ICON_COMPATIBLE_TYPES[source.type] ?? "email";
  const Icon = getSourceIcon(iconType);
  const description = SOURCE_DESCRIPTIONS[source.type] ?? "Source reference";

  return (
    <HoverCard>
      <HoverCardTrigger
        delay={200}
        closeDelay={0}
        render={
          <span
            className={cn(
              "inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium",
              "bg-muted text-muted-foreground hover:bg-secondary-hover transition-colors",
            )}
          >
            <Icon size={13} />
            {source.label}
          </span>
        }
      />
      <HoverCardContent className="w-64 p-0 shadow-xs">
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center gap-1.5">
            <Icon size={16} />
            <span className="text-sm text-muted-foreground">
              {TYPE_LABELS[source.type] ?? source.type}
            </span>
          </div>
          <div className="text-sm font-medium line-clamp-2">{source.label}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function SourcesPanelContent({ sources }: SourcesPanelContentProps) {
  const grouped = sources.reduce<Record<string, Source[]>>(
    (acc, source) => ({
      ...acc,
      [source.type]: [...(acc[source.type] || []), source],
    }),
    {},
  );

  const activeTypes = Object.keys(grouped).filter(
    (type) => grouped[type].length > 0,
  );

  return (
    <div className="p-4 space-y-5">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-[var(--foreground)]">
          Sources
        </span>
        <span className="text-sm text-[var(--muted-foreground)]">
          {sources.length} references
        </span>
      </div>

      {activeTypes.map((type) => {
        const iconType = ICON_COMPATIBLE_TYPES[type] ?? "email";
        const Icon = getSourceIcon(iconType);

        return (
          <div key={type}>
            <div className="flex items-center gap-1.5 mb-2">
              <Icon size={14} />
              <p className="text-xs font-medium text-[var(--muted-foreground)] ">
                {TYPE_LABELS[type] ?? type}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {grouped[type].map((source) => (
                <SourceChip
                  key={`${source.type}-${source.label}`}
                  source={source}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
