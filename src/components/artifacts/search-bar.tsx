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
    <div className="flex items-center justify-between gap-2 mb-6">
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-disabled-foreground"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            activeTab === "reports" ? "Search reports..." : "Search radars..."
          }
          className="w-full h-9 pl-9 pr-4 rounded-lg border border-transparent focus:border-border bg-secondary-hover text-sm placeholder:text-disabled-foreground text-foreground outline-none transition-colors"
        />
      </div>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={toggleViewMode}
          className="h-9 px-3 rounded-lg text-xs font-medium text-muted-foreground bg-secondary-hover border border-border hover:text-foreground transition-colors cursor-pointer whitespace-nowrap"
        >
          {VIEW_MODE_LABELS[viewMode]}
        </button>
      </div>
    </div>
  );
}
