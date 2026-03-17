import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Settings, MessageSquare } from "lucide-react";
import { cn } from "@lib/utils";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaReports } from "@/data/content-resolver";
import { useReportsStore } from "@/stores/reports-store";
import { ArtifactsSearchBar } from "@components/artifacts/search-bar";
import { ArtifactsResearchSidebar } from "@components/artifacts/artifacts-research-sidebar";
import { RightSidebarProvider } from "@/components/ui/right-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import type { ReportCategory, ReportSummary } from "@/types";
import PageShell from "@/components/ui/page-shell";

const TAB_LABELS = ["Reports", "Radar"] as const;

function PriorityDot({ priority }: { priority: "High" | "Med" }) {
  return (
    <span
      className={cn(
        "w-1.5 h-1.5 rounded-full inline-block",
        priority === "High"
          ? "bg-[var(--color-gray-600)]"
          : "bg-[var(--color-gray-400)]",
      )}
    />
  );
}

function CategoryRow({ category }: { category: ReportCategory }) {
  const { expandedCategories, toggleCategory, setSelectedReport } =
    useReportsStore();
  const isExpanded = expandedCategories.has(category.id);
  const visibleReports = isExpanded
    ? category.reports
    : category.reports.slice(0, 1);

  return (
    <div>
      <button
        type="button"
        onClick={() => toggleCategory(category.id)}
        className="flex items-center justify-between w-full py-4 group bg-transparent border-none cursor-pointer text-left"
      >
        <div className="flex items-center gap-2">
          <ChevronRight
            size={16}
            className={cn(
              "text-[var(--fg-disabled)] transition-transform",
              isExpanded && "rotate-90",
            )}
          />
          <span className="text-sm text-[var(--fg-base)]">{category.name}</span>
        </div>
        <div className="flex items-center gap-3">
          {category.type === "radar" && category.priority && (
            <span
              className={cn(
                "flex items-center gap-1.5 text-xs font-semibold",
                category.priority === "High"
                  ? "text-[var(--color-gray-600)]"
                  : "text-[var(--color-gray-400)]",
              )}
            >
              <PriorityDot priority={category.priority} />
              {category.priority}
            </span>
          )}
          <span className="text-sm text-[var(--fg-muted)]">
            {category.reportCount}{" "}
            {category.type === "radar" ? "items" : "reports"}
          </span>
        </div>
      </button>

      <div className="pb-2">
        {visibleReports.map((report) => (
          <Link
            key={report.id}
            to="/report-detail"
            onClick={() => setSelectedReport(report.id)}
            className="flex items-center justify-between py-3 pl-8 pr-2 rounded-lg hover:bg-[var(--bg-component-hover)] transition-colors no-underline"
          >
            <span className="text-sm text-[var(--fg-base)]">
              {report.dateRange}
            </span>
            <div className="flex items-center gap-2 text-sm text-[var(--fg-muted)]">
              {report.isLatest && <span>Latest</span>}
              <ChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface FlatReportRow {
  report: ReportSummary;
  category: ReportCategory;
}

function ByDateView({ categories }: { categories: ReportCategory[] }) {
  const setSelectedReport = useReportsStore((s) => s.setSelectedReport);
  const allReports = useMemo(() => {
    const flat: FlatReportRow[] = categories.flatMap((cat) =>
      cat.reports.map((report) => ({ report, category: cat })),
    );
    return flat.sort(
      (a, b) =>
        new Date(b.report.date).getTime() - new Date(a.report.date).getTime(),
    );
  }, [categories]);

  return (
    <div className="divide-y divide-[var(--border-base)]">
      {allReports.map(({ report, category }) => (
        <Link
          key={report.id}
          to="/report-detail"
          onClick={() => setSelectedReport(report.id)}
          className="flex items-center justify-between py-3.5 px-4 hover:bg-[var(--bg-component-hover)] transition-colors no-underline"
        >
          <div className="flex items-center gap-3">
            {category.type === "radar" && category.priority ? (
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-2xs font-semibold",
                  category.priority === "High"
                    ? "bg-red-50 text-[var(--color-gray-600)]"
                    : "bg-amber-50 text-[var(--color-gray-400)]",
                )}
              >
                <PriorityDot priority={category.priority} />
                Radar
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-2xs font-semibold bg-[var(--bg-subtle)] text-[var(--fg-muted)]">
                Report
              </span>
            )}
            <span className="text-sm text-[var(--fg-base)]">
              {category.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--fg-muted)]">
            <span>{report.dateRange}</span>
            <ChevronRight size={14} />
          </div>
        </Link>
      ))}
    </div>
  );
}

const ArtifactsPage = () => {
  const navigate = useNavigate();
  const persona = usePersonaStore((s) => s.persona);
  const { reportCategories } = getPersonaReports(persona);
  const {
    viewMode,
    activeTab,
    setActiveTab,
    searchQuery,
    isArtifactsChatOpen,
    setArtifactsChatOpen,
  } = useReportsStore();
  const [chatWidth, setChatWidth] = useState(380);

  useRegisterSidebar({
    position: SidebarPosition.RIGHT,
    open: isArtifactsChatOpen,
    width: chatWidth,
  });

  const filteredCategories = useMemo(() => {
    const byType = reportCategories.filter((cat) =>
      activeTab === "reports" ? cat.type === "report" : cat.type === "radar",
    );

    if (!searchQuery.trim()) return byType;

    const query = searchQuery.toLowerCase();
    return byType.filter(
      (cat) =>
        cat.name.toLowerCase().includes(query) ||
        cat.reports.some((r) => r.dateRange.toLowerCase().includes(query)),
    );
  }, [activeTab, searchQuery, reportCategories]);

  const handleSettingsClick = () => {
    if (activeTab === "reports") {
      navigate("/artifacts/reports-settings");
    } else {
      navigate("/artifacts/radar-settings");
    }
  };

  return (
    <div className="flex overflow-hidden h-full">
    <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
    <div className="relative">
      <div
        className="absolute top-[12px] right-5 z-10 flex items-center gap-1"
      >
        <div className="rounded-[8px] p-[2px]">
          {TAB_LABELS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveTab(label.toLowerCase() as "reports" | "radar")}
              className={cn(
                "inline-flex items-center justify-center px-3 font-medium border-none cursor-pointer rounded-md",
                activeTab === label.toLowerCase()
                  ? "bg-[var(--bg-selected)] text-[var(--fg-base)]"
                  : "bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
              )}
              style={{
                height: "var(--toolbar-btn-size)",
                fontSize: "var(--toolbar-font-size)",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleSettingsClick}
          className="h-7 w-7 flex items-center justify-center rounded-md bg-transparent text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)] transition-colors duration-150 ease-out cursor-pointer border-none"
        >
          <Settings size={15} />
        </button>
        <button
          type="button"
          onClick={() => setArtifactsChatOpen(!isArtifactsChatOpen)}
          className={cn(
            "h-7 w-7 flex items-center justify-center rounded-md transition-colors duration-150 ease-out cursor-pointer border-none",
            isArtifactsChatOpen
              ? "bg-[var(--bg-selected)] text-[var(--fg-muted)]"
              : "bg-transparent text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)]",
          )}
        >
          <MessageSquare size={15} />
        </button>
      </div>

      <PageShell>
        <div className="mb-6">
          <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight">
            Artifacts
          </h1>
        </div>

        <ArtifactsSearchBar />

        {viewMode === "by-type" ? (
          <div className="divide-y divide-[var(--border-base)]">
            {filteredCategories.map((cat) => (
              <CategoryRow key={cat.id} category={cat} />
            ))}
          </div>
        ) : (
          <ByDateView categories={filteredCategories} />
        )}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-[var(--fg-disabled)]">
              No {activeTab === "reports" ? "reports" : "radars"} found
            </p>
          </div>
        )}

    </PageShell>
    </div>
    </div>
    <RightSidebarProvider open={isArtifactsChatOpen} onOpenChange={setArtifactsChatOpen} defaultWidth={380} minWidth={320} maxWidth={520} onWidthChange={setChatWidth}>
      <ArtifactsResearchSidebar
        isOpen={isArtifactsChatOpen}
        onClose={() => setArtifactsChatOpen(false)}
      />
    </RightSidebarProvider>
    </div>
  );
};

export default ArtifactsPage;
