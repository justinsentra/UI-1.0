import { Search } from "lucide-react";
import { useReportsStore } from "@/stores/reports-store";

const VIEW_MODE_LABELS: Record<"by-type" | "by-date", string> = {
  "by-type": "Type",
  "by-date": "Date",
};

export function ArtifactsSearchBar() {
  const { searchQuery, setSearchQuery, activeTab, viewMode, setViewMode } =
    useReportsStore();

  const toggleViewMode = () => {
    setViewMode(viewMode === "by-type" ? "by-date" : "by-type");
  };

  return (
    <div className="flex items-center justify-between gap-2 mb-4">
      <div className="relative max-w-[360px] flex-1">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            activeTab === "reports" ? "Search reports..." : "Search radars..."
          }
          className="w-full pl-9 pr-3 py-2 text-sm bg-[var(--bg-subtle)] rounded-lg border border-transparent focus:border-[var(--border-base)] outline-none placeholder:text-[var(--fg-disabled)] text-[var(--fg-base)] transition-colors"
        />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-[var(--fg-disabled)] whitespace-nowrap">
          Sort by:
        </span>
        <button
          type="button"
          onClick={toggleViewMode}
          className="px-3 py-1.5 rounded-full text-xs font-medium text-[var(--fg-muted)] bg-[var(--bg-subtle)] hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)] transition-colors border-none cursor-pointer whitespace-nowrap"
        >
          {VIEW_MODE_LABELS[viewMode]}
        </button>
      </div>
    </div>
  );
}
