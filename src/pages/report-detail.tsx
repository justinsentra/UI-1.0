import { useState, useRef } from "react";
import { Link2, MessageSquare } from "lucide-react";
import { cn } from "@lib/utils";
import { gtmStatusReport } from "@/data/mock-reports";
import { useUIStore } from "@/stores/ui-store";
import { usePageLabel } from "../components/app-layout";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { DrillDownSections } from "@/components/report/drill-down-sections";
import { ActionAccordion } from "@/components/report/action-accordion";
import { HighlightedContent } from "@/components/report/inline-comments";

const ReportDetailPage = () => {
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const addToast = useUIStore((s) => s.addToast);
  usePageLabel(gtmStatusReport.title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `https://app.sentra.app/reports/${gtmStatusReport.id}`,
    );
    addToast("success", "Link copied to clipboard");
  };

  return (
    <div className="max-w-[740px] mx-auto px-8 pt-[56px] pb-32 relative min-h-screen">
      {/* Top-right action buttons — shift left when chat sidebar is open */}
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
          {gtmStatusReport.title}
        </h1>
      </div>
      <p className="text-sm text-[var(--fg-muted)] mb-6">
        {gtmStatusReport.dateRange}
      </p>

      <div className="border-t border-[var(--border-base)] mb-8" />

      {/* Report Content */}
      <div className="space-y-8">
        {gtmStatusReport.sections.map((section, sIdx) => (
          <ReportSection
            key={section.heading}
            section={section}
            sectionIndex={sIdx}
          />
        ))}
      </div>

      {/* Drill Downs — rendered as traditional paragraphs */}
      {gtmStatusReport.drillDowns && gtmStatusReport.drillDowns.length > 0 && (
        <DrillDownSections drillDowns={gtmStatusReport.drillDowns} />
      )}

      {/* Suggested Actions */}
      {gtmStatusReport.suggestedActions.length > 0 && (
        <ActionAccordion actions={gtmStatusReport.suggestedActions} />
      )}

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
        <h2 className="text-md font-normal text-[var(--fg-base)] mb-4">
          {section.heading}
        </h2>
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

export default ReportDetailPage;
