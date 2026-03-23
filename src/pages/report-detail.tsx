import { useRef, useMemo } from "react";
import { Link2, MessageSquare } from "lucide-react";
import { cn } from "@lib/utils";
import { useReportsStore } from "@/stores/reports-store";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaReportDetail } from "@/data/content-resolver";
import { useUIStore } from "@/stores/ui-store";
import { usePageLabel } from "../components/app-layout";
import PageShell from "@/components/ui/page-shell";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { RightSidebarProvider } from "@/components/ui/right-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import { DrillDownSections } from "@/components/report/drill-down-sections";
import { ActionAccordion } from "@/components/report/action-accordion";
import { HighlightedContent } from "@/components/report/inline-comments";
import { getSourceIcon } from "@/icons/source-icons";
import {
  Source as SourceHover,
  SourceTrigger,
  SourceContent,
} from "@/components/ui/source";
import type {
  EvidenceQuote,
  Source,
  ReportSection as ReportSectionType,
} from "@/types";
import type { SourceType } from "@/data/mock-deep-research";
import type { ReportDetail } from "@/types";
import { useState } from "react";

const SOURCE_TYPE_TO_ICON: Record<string, SourceType> = {
  slack: "slack",
  meeting: "google-meet",
  "google-meet": "google-meet",
  "google-calendar": "google-calendar",
  "google-drive": "google-drive",
  linear: "linear",
  email: "email",
  outlook: "outlook",
  notion: "notion",
  asana: "asana",
  discord: "discord",
  zoom: "zoom",
  github: "github",
  "google-docs": "google-docs",
  teams: "teams",
  sharepoint: "sharepoint",
  affinity: "affinity",
};

const SOURCE_TYPE_TO_HREF: Record<string, string> = {
  slack: "https://chatworks.com",
  meeting: "https://meet.google.com",
  "google-meet": "https://meet.google.com",
  "google-calendar": "https://calendar.google.com",
  "google-drive": "https://drive.google.com",
  linear: "https://trackline.app",
  email: "https://mail.google.com",
  outlook: "https://outlook.live.com",
  notion: "https://dokra.so",
  asana: "https://app.asana.com",
  discord: "https://discord.com",
  zoom: "https://zoom.us",
  github: "https://github.com",
  "google-docs": "https://docs.google.com",
  teams: "https://teams.microsoft.com",
  sharepoint: "https://sharepoint.com",
  affinity: "https://affinity.co",
};

const SOURCE_TYPE_LABEL: Record<string, string> = {
  slack: "ChatWorks",
  meeting: "Meeting",
  "google-meet": "Alphabase Meet",
  "google-calendar": "Alphabase Calendar",
  "google-drive": "Alphabase Drive",
  linear: "Trackline",
  email: "Email",
  outlook: "Outlook",
  notion: "Dokra",
  asana: "Asana",
  discord: "Discord",
  zoom: "Zoom",
  github: "GitHub",
  "google-docs": "Alphabase Docs",
  teams: "Microsoft Teams",
  sharepoint: "SharePoint",
  affinity: "Affinity",
};

/**
 * Distributes report-level sources across sections when sections
 * don't have their own explicit sources.
 * - For radar: all sources go on the first section only
 * - For reports: sources are split evenly across sections
 */
function getSourcesForSection(
  sectionIndex: number,
  section: ReportSectionType,
  allSources: Source[],
  sectionCount: number,
  isRadar: boolean,
): Source[] {
  // Explicit section-level sources take priority
  if (section.sources && section.sources.length > 0) {
    return section.sources;
  }
  if (allSources.length === 0) return [];

  // Radar: all sources on first section only
  if (isRadar) {
    return sectionIndex === 0 ? allSources : [];
  }

  // Reports: distribute evenly across sections
  const perSection = Math.ceil(allSources.length / sectionCount);
  const start = sectionIndex * perSection;
  return allSources.slice(start, start + perSection);
}

function getReportSuggestions(report: ReportDetail): string[] {
  const title = report.title;
  const firstSection = report.sections[0]?.heading;
  const suggestions: string[] = [
    `What are the key takeaways from "${title}"?`,
    `What actions should I take based on this report?`,
  ];
  if (firstSection) {
    suggestions.push(`Tell me more about "${firstSection}"`);
  }
  if (report.suggestedActions.length > 0) {
    suggestions.push(`Which suggested actions are highest priority?`);
  } else {
    suggestions.push(`How does this compare to last week's report?`);
  }
  return suggestions;
}

const ReportDetailPage = () => {
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const [chatWidth, setChatWidth] = useState(380);
  const addToast = useUIStore((s) => s.addToast);
  const selectedReportId = useReportsStore((s) => s.selectedReportId);
  const persona = usePersonaStore((s) => s.persona);

  useRegisterSidebar({
    position: SidebarPosition.RIGHT,
    open: showChatSidebar,
    width: chatWidth,
  });

  const report = getPersonaReportDetail(
    persona,
    selectedReportId ?? "rpt-gtm-1",
  );

  const isRadar = report.id.includes("radar");
  const reportSuggestions = useMemo(
    () => getReportSuggestions(report),
    [report],
  );

  usePageLabel(report.title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `https://app.sentra.app/reports/${report.id}`,
    );
    addToast("success", "Link copied to clipboard");
  };

  return (
    <div
      className="flex overflow-hidden h-full"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
        <PageShell className="relative pb-32">
          {/* Top-right action buttons */}
          <div className="absolute top-[12px] right-0 z-10 flex items-center gap-1">
            <button
              type="button"
              onClick={handleCopyLink}
              className="h-7 w-7 rounded-md bg-transparent hover:bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors cursor-pointer border-none"
              title="Copy link"
            >
              <Link2 size={15} />
            </button>
            <button
              type="button"
              onClick={() => setShowChatSidebar((p) => !p)}
              className={cn(
                "h-7 w-7 rounded-md flex items-center justify-center transition-colors cursor-pointer border-none",
                showChatSidebar
                  ? "bg-[var(--bg-component-hover)] text-[var(--fg-muted)]"
                  : "bg-transparent hover:bg-[var(--bg-component-hover)] text-[var(--fg-disabled)] hover:text-[var(--fg-muted)]",
              )}
              title="Deep Research"
            >
              <MessageSquare size={15} />
            </button>
          </div>

          {/* Title */}
          <div className="mb-2">
            <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight">
              {report.title}
            </h1>
          </div>
          <p className="text-sm text-[var(--fg-muted)] mb-6">
            {report.dateRange}
          </p>

          <div className="border-t border-[var(--border-base)] mb-8" />

          {/* Report Content */}
          <div className="space-y-8">
            {report.sections.map((section, sIdx) => {
              const sectionSources = getSourcesForSection(
                sIdx,
                section,
                report.sources,
                report.sections.length,
                isRadar,
              );
              return (
                <ReportSection
                  key={section.heading || sIdx}
                  section={section}
                  sectionIndex={sIdx}
                  sources={sectionSources}
                />
              );
            })}
          </div>

          {/* Evidence Quotes */}
          {report.evidence && report.evidence.length > 0 && (
            <EvidenceSection evidence={report.evidence} />
          )}

          {/* Drill Downs */}
          {report.drillDowns && report.drillDowns.length > 0 && (
            <DrillDownSections drillDowns={report.drillDowns} />
          )}

          {/* Suggested Actions */}
          {report.suggestedActions.length > 0 && (
            <ActionAccordion actions={report.suggestedActions} />
          )}
        </PageShell>
      </div>

      {/* Chat Sidebar */}
      <RightSidebarProvider open={showChatSidebar} onOpenChange={setShowChatSidebar} defaultWidth={380} minWidth={320} maxWidth={520} onWidthChange={setChatWidth}>
        <ChatSidebar
          isOpen={showChatSidebar}
          onClose={() => setShowChatSidebar(false)}
          suggestedQuestions={reportSuggestions}
        />
      </RightSidebarProvider>
    </div>
  );
};

/**
 * Distributes sources across paragraphs for inline citations.
 * Returns an array (one per paragraph) of { source, globalIndex } tuples.
 */
function distributeSourcesToParagraphs(
  sources: Source[],
  paragraphCount: number,
): { source: Source; globalIndex: number }[][] {
  const result: { source: Source; globalIndex: number }[][] = Array.from(
    { length: paragraphCount },
    () => [],
  );
  if (paragraphCount === 0 || sources.length === 0) return result;

  for (let i = 0; i < sources.length; i++) {
    const pIdx = Math.min(
      Math.floor((i / sources.length) * paragraphCount),
      paragraphCount - 1,
    );
    result[pIdx].push({ source: sources[i], globalIndex: i + 1 });
  }
  return result;
}

function ReportSection({
  section,
  sectionIndex,
  sources,
}: {
  section: ReportSectionType;
  sectionIndex: number;
  sources: Source[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphSources = useMemo(
    () => distributeSourcesToParagraphs(sources, section.paragraphs.length),
    [sources, section.paragraphs.length],
  );

  return (
    <HighlightedContent sectionIndex={sectionIndex} containerRef={containerRef}>
      <section>
        {section.heading && (
          <h2 className="text-md font-normal text-[var(--fg-base)] mb-4">
            {section.heading}
          </h2>
        )}
        {section.paragraphs.map((paragraph, pIdx) => (
          <p
            key={pIdx}
            className={cn(
              "text-sm text-[var(--fg-muted)] leading-relaxed",
              pIdx < section.paragraphs.length - 1 && "mb-4",
            )}
          >
            {paragraph}
            {paragraphSources[pIdx]?.map(({ source, globalIndex }) => (
              <InlineCitation
                key={`${source.type}-${source.label}`}
                source={source}
                index={globalIndex}
              />
            ))}
          </p>
        ))}
      </section>
    </HighlightedContent>
  );
}

function EvidenceSection({ evidence }: { evidence: EvidenceQuote[] }) {
  return (
    <div className="mt-10">
      <h2 className="text-md font-normal text-[var(--fg-base)] mb-6">
        Evidence
      </h2>
      <div className="space-y-6">
        {evidence.map((item, idx) => {
          const iconType = SOURCE_TYPE_TO_ICON[item.sourceType] ?? "email";
          const Icon = getSourceIcon(iconType);
          return (
            <div key={`${item.speaker}-${item.meetingDate}-${idx}`}>
              <p className="text-xs font-medium text-[var(--fg-base)] mb-2">
                From {item.meetingTitle}
              </p>
              <div className="border-l-2 border-[var(--border-base)] pl-4">
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed italic">
                  <span className="font-semibold not-italic text-[var(--fg-base)]">
                    {item.speaker}
                  </span>
                  : {item.quote}
                  <span className="inline-flex items-center ml-1.5 align-middle">
                    <Icon size={12} className="opacity-40" />
                  </span>
                </p>
                <p className="text-2xs text-[var(--fg-disabled)] mt-1.5">
                  {item.meetingDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InlineCitation({
  source,
  index,
}: {
  source: Source;
  index: number;
}) {
  const href = SOURCE_TYPE_TO_HREF[source.type] ?? "#";
  const platformLabel = SOURCE_TYPE_LABEL[source.type] ?? source.type;

  return (
    <SourceHover href={href}>
      <SourceTrigger
        label={index}
        className="ml-0.5 align-baseline h-[14px] min-w-[14px] max-w-none px-1 text-[9px] leading-none"
      />
      <SourceContent title={source.label} description={platformLabel} />
    </SourceHover>
  );
}

export default ReportDetailPage;
