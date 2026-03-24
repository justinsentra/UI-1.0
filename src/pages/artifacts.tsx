import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Settings, ListFilter, Search, Layers, Clock, LayoutGrid } from "lucide-react";
import { cn } from "@lib/utils";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaReports } from "@/data/content-resolver";
import { useReportsStore } from "@/stores/reports-store";
import type { ReportCategory, ReportSummary } from "@/types";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

const TAB_LABELS = ["Reports", "Radar"] as const;

function PriorityDot({ priority }: { priority: "High" | "Med" }) {
  return (
    <span
      className={cn(
        "w-1.5 h-1.5 rounded-full inline-block",
        priority === "High" ? "bg-red-500" : "bg-amber-500",
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
              "text-muted-foreground/60 transition-transform",
              isExpanded && "rotate-90",
            )}
          />
          <span className="text-sm text-foreground">{category.name}</span>
        </div>
        <div className="flex items-center gap-3">
          {category.type === "radar" && category.priority && (
            <span
              className={cn(
                "flex items-center gap-1.5 text-xs font-semibold",
                category.priority === "High"
                  ? "text-red-500"
                  : "text-amber-500",
              )}
            >
              <PriorityDot priority={category.priority} />
              {category.priority}
            </span>
          )}
          <span className="text-sm text-muted-foreground/60">
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
            className="flex items-center justify-between py-3 pl-8 pr-2 rounded-lg hover:bg-accent transition-colors no-underline"
          >
            <span className="text-sm text-muted-foreground">
              {report.dateRange}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
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
    <div className="divide-y divide-border">
      {allReports.map(({ report, category }) => (
        <Link
          key={report.id}
          to="/report-detail"
          onClick={() => setSelectedReport(report.id)}
          className="flex items-center justify-between py-3.5 px-4 hover:bg-accent transition-colors no-underline"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground/60">
              {category.type === "radar" ? "Radar" : "Report"}
            </span>
            <span className="text-sm text-foreground">
              {category.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
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
    setViewMode,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
  } = useReportsStore();

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
    <div className="h-full overflow-x-hidden overflow-y-auto">
      <div className="relative min-h-full px-4 py-6 pt-14 sm:p-12 sm:pt-24 md:pt-24">
        <div className="mx-auto max-w-[100rem]">
          {/* Header */}
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-center font-medium text-[40px] leading-[48px] text-foreground tracking-tight">
              Artifacts
            </h1>
            <p className="mt-2 text-base text-muted-foreground/60">
              Browse all your created artifacts.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-sm text-muted-foreground transition hover:border-muted-foreground cursor-pointer"
                >
                  <ListFilter className="size-4 text-muted-foreground/60" />
                  <span>{activeTab === "reports" ? "Reports" : "Radar"}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={6}>
                  <DropdownMenuRadioGroup
                    value={activeTab}
                    onValueChange={(value) =>
                      setActiveTab(value as "reports" | "radar")
                    }
                  >
                    {TAB_LABELS.map((label) => (
                      <DropdownMenuRadioItem
                        key={label}
                        value={label.toLowerCase()}
                      >
                        {label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-2 text-sm text-muted-foreground transition hover:border-muted-foreground cursor-pointer"
                >
                  {viewMode === "by-type" ? (
                    <LayoutGrid className="size-4 text-muted-foreground/60" />
                  ) : (
                    <Clock className="size-4 text-muted-foreground/60" />
                  )}
                  {viewMode === "by-type" ? "By Type" : "By Date"}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={6}>
                  <DropdownMenuRadioGroup
                    value={viewMode}
                    onValueChange={(value) =>
                      setViewMode(value as "by-type" | "by-date")
                    }
                  >
                    <DropdownMenuRadioItem value="by-type">
                      <LayoutGrid className="size-4" />
                      By Type
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="by-date">
                      <Clock className="size-4" />
                      By Date
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                type="button"
                onClick={handleSettingsClick}
                className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-2 text-sm text-muted-foreground transition hover:border-muted-foreground cursor-pointer"
              >
                <Settings className="size-4 text-muted-foreground/60" />
                Settings
              </button>

              <div className="relative ml-auto w-full min-w-40 sm:max-w-80">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                  <Search className="size-4 text-muted-foreground/60" />
                </div>
                <Input
                  placeholder={activeTab === "reports" ? "Search reports..." : "Search radars..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  rounded="full"
                  size="lg"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Content */}
            {filteredCategories.length > 0 ? (
              viewMode === "by-type" ? (
                <div className="mt-6 divide-y divide-border">
                  {filteredCategories.map((cat) => (
                    <CategoryRow key={cat.id} category={cat} />
                  ))}
                </div>
              ) : (
                <div className="mt-6">
                  <ByDateView categories={filteredCategories} />
                </div>
              )
            ) : (
              <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border px-8 py-24 text-center">
                <Layers className="size-10 text-muted-foreground/60" strokeWidth={1} />
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  No {activeTab === "reports" ? "reports" : "radars"} found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsPage;
