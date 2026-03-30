import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ListFilter,
  Search,
  Layers,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  MOCK_ARTIFACTS,
  ARTIFACT_TYPE_LABELS,
} from "@/data/mock-artifacts";
import type { Artifact, ArtifactType } from "@/data/mock-artifacts";

type FilterValue = "all" | ArtifactType;
type SortValue = "newest" | "oldest" | "action";

function ArtifactRow({
  artifact,
  onClick,
}: {
  artifact: Artifact;
  onClick: () => void;
}) {
  const date = new Date(artifact.createdAt);
  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-4 w-full py-3.5 px-4 rounded-xl hover:bg-accent transition-colors text-left cursor-pointer bg-transparent border-none"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">
          {artifact.title}
        </p>
        <p className="text-xs text-muted-foreground/60 mt-0.5 truncate">
          {artifact.actionName}
        </p>
      </div>

      <span className="hidden sm:inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground shrink-0">
        {ARTIFACT_TYPE_LABELS[artifact.type]}
      </span>

      <span className="text-xs text-muted-foreground/60 shrink-0 tabular-nums">
        {formatted}
      </span>

      <ChevronRight size={14} className="text-muted-foreground/40 shrink-0" />
    </button>
  );
}

function GroupedByAction({
  artifacts,
  onSelect,
}: {
  artifacts: Artifact[];
  onSelect: (id: string) => void;
}) {
  const groups = useMemo(() => {
    const map = new Map<string, { actionName: string; items: Artifact[] }>();
    for (const a of artifacts) {
      const existing = map.get(a.actionId);
      if (existing) {
        existing.items.push(a);
      } else {
        map.set(a.actionId, { actionName: a.actionName, items: [a] });
      }
    }
    return Array.from(map.values());
  }, [artifacts]);

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.actionName}>
          <p className="text-xs font-medium text-muted-foreground/60 px-4 mb-1">
            {group.actionName}
          </p>
          <div className="divide-y divide-border">
            {group.items.map((artifact) => (
              <ArtifactRow
                key={artifact.id}
                artifact={artifact}
                onClick={() => onSelect(artifact.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const FILTER_OPTIONS: { label: string; value: FilterValue }[] = [
  { label: "All Types", value: "all" },
  { label: "Memos", value: "memo" },
  { label: "Pipeline Summaries", value: "pipeline-summary" },
  { label: "Risk Reports", value: "risk-report" },
  { label: "Vendor Delay Reports", value: "vendor-delay-report" },
  { label: "Research", value: "research" },
  { label: "Follow-Ups", value: "follow-up" },
];

const SORT_OPTIONS: { label: string; value: SortValue }[] = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "By Action", value: "action" },
];

const ArtifactsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterValue>("all");
  const [sort, setSort] = useState<SortValue>("newest");

  const filtered = useMemo(() => {
    let result = MOCK_ARTIFACTS;

    if (filter !== "all") {
      result = result.filter((a) => a.type === filter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.actionName.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q),
      );
    }

    if (sort === "newest") {
      result = [...result].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    } else if (sort === "oldest") {
      result = [...result].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    return result;
  }, [filter, searchQuery, sort]);

  const handleSelect = (artifactId: string) => {
    navigate(`/artifact-detail/${artifactId}`);
  };

  const filterLabel =
    FILTER_OPTIONS.find((o) => o.value === filter)?.label ?? "All Types";
  const sortLabel =
    SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Newest First";

  return (
    <div className="h-full overflow-x-hidden overflow-y-auto">
      <div className="relative min-h-full px-4 py-6 pt-14 sm:p-12 sm:pt-24 md:pt-24">
        <div className="max-w-screen-4xl mx-auto w-full">
          {/* Header */}
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-center font-medium text-[40px] leading-[48px] text-foreground tracking-tight">
              Artifacts
            </h1>
            <p className="mt-2 text-base text-muted-foreground/60">
              All outputs produced across your actions.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="mx-auto mt-12 w-full max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex h-7 shrink-0 items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 text-xs text-muted-foreground transition hover:border-muted-foreground cursor-pointer">
                  <ListFilter className="size-3.5 text-muted-foreground/60" />
                  <span>{filterLabel}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={6}>
                  <DropdownMenuRadioGroup
                    value={filter}
                    onValueChange={(v) => setFilter(v as FilterValue)}
                  >
                    {FILTER_OPTIONS.map((opt) => (
                      <DropdownMenuRadioItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex h-7 items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 text-xs text-muted-foreground transition hover:border-muted-foreground cursor-pointer">
                  <Clock className="size-3.5 text-muted-foreground/60" />
                  {sortLabel}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={6}>
                  <DropdownMenuRadioGroup
                    value={sort}
                    onValueChange={(v) => setSort(v as SortValue)}
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <DropdownMenuRadioItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="relative w-full sm:ml-auto sm:max-w-64">
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                  <Search className="size-3.5 text-muted-foreground/60" />
                </div>
                <Input
                  placeholder="Search artifacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  rounded="full"
                  size="default"
                  className="pl-8 text-xs"
                />
              </div>
            </div>

            {/* Content */}
            {filtered.length > 0 ? (
              sort === "action" ? (
                <div className="mt-6">
                  <GroupedByAction artifacts={filtered} onSelect={handleSelect} />
                </div>
              ) : (
                <div className="mt-6 divide-y divide-border">
                  {filtered.map((artifact) => (
                    <ArtifactRow
                      key={artifact.id}
                      artifact={artifact}
                      onClick={() => handleSelect(artifact.id)}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border px-8 py-24 text-center">
                <Layers
                  className="size-10 text-muted-foreground/60"
                  strokeWidth={1}
                />
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  No artifacts found
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
