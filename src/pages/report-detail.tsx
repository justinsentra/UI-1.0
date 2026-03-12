import { useRef } from "react";
import { Link2, MessageSquare } from "lucide-react";
import { cn } from "@lib/utils";
import { useReportsStore } from "@/stores/reports-store";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaReportDetail } from "@/data/content-resolver";
import { useUIStore } from "@/stores/ui-store";
import { usePageLabel } from "../components/app-layout";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { DrillDownSections } from "@/components/report/drill-down-sections";
import { ActionAccordion } from "@/components/report/action-accordion";
import { HighlightedContent } from "@/components/report/inline-comments";
import { getSourceIcon } from "@/icons/source-icons";
import SourcePill from "@/components/deep-research/source-pill";
import {
  Steps,
  StepsTrigger,
  StepsContent,
  StepsBar,
} from "@/components/ui/steps";
import type { EvidenceQuote, Source } from "@/types";
import type { SourceType, SourceRef } from "@/data/mock-deep-research";
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

const ReportDetailPage = () => {
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const addToast = useUIStore((s) => s.addToast);
  const selectedReportId = useReportsStore((s) => s.selectedReportId);
  const persona = usePersonaStore((s) => s.persona);

  const report = getPersonaReportDetail(
    persona,
    selectedReportId ?? "rpt-gtm-1",
  );

  usePageLabel(report.title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `https://app.sentra.app/reports/${report.id}`,
    );
    addToast("success", "Link copied to clipboard");
  };

  return (
    <div className="max-w-[740px] mx-auto px-8 pt-[56px] pb-32 relative min-h-screen">
      {/* Top-right action buttons */}
      <div
        className="fixed top-[12px] z-10 flex items-center gap-1 transition-[right] duration-300 ease-in-out"
        style={{ right: showChatSidebar ? 396 : 20 }}
      >
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
      <p className="text-sm text-[var(--fg-muted)] mb-6">{report.dateRange}</p>

      <div className="border-t border-[var(--border-base)] mb-8" />

      {/* Report Content */}
      <div className="space-y-8">
        {report.sections.map((section, sIdx) => (
          <ReportSection
            key={section.heading || sIdx}
            section={section}
            sectionIndex={sIdx}
          />
        ))}
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

      {/* Inline Sources — pill style matching deep research */}
      {report.sources.length > 0 && <SourcesSection sources={report.sources} />}

      {/* Chat Sidebar */}
      <ChatSidebar
        isOpen={showChatSidebar}
        onClose={() => setShowChatSidebar(false)}
      />
    </div>
  );
};

function ReportSection({
  section,
  sectionIndex,
}: {
  section: { heading: string; paragraphs: string[] };
  sectionIndex: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

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

function sourceToRef(source: Source): SourceRef {
  const mappedType = SOURCE_TYPE_TO_ICON[source.type] ?? "email";
  return { type: mappedType, label: source.label };
}

function SourcesSection({ sources }: { sources: Source[] }) {
  return (
    <div className="mt-10 border-t border-[var(--border-subtle)] pt-4">
      <Steps defaultOpen={false}>
        <StepsTrigger className="text-2xs font-medium text-[var(--fg-muted)]">
          {sources.length} sources
        </StepsTrigger>
        <StepsContent bar={<StepsBar className="bg-transparent" />}>
          <div className="flex flex-wrap gap-1.5 py-1">
            {sources.map((source) => (
              <SourcePill
                key={`${source.type}-${source.label}`}
                source={sourceToRef(source)}
              />
            ))}
          </div>
        </StepsContent>
      </Steps>
    </div>
  );
}

export default ReportDetailPage;
