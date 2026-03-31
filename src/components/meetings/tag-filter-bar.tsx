import { useState } from "react";
import { X, Plus } from "lucide-react";
import { useMeetingsStore } from "@/stores/meetings-store";
import { TagDropdown } from "./tag-dropdown";

const ALL_TAGS = [
  "Standup",
  "Product",
  "1:1",
  "Customer",
  "GTM",
  "Investor",
  "Design",
  "Launch",
];

const TAG_COUNTS: Record<string, number> = {
  Standup: 4,
  Product: 2,
  "1:1": 3,
  Customer: 2,
  GTM: 1,
  Investor: 1,
  Design: 2,
  Launch: 1,
};

export function TagFilterBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const activeTags = useMeetingsStore((s) => s.activeTags);
  const removeTagFilter = useMeetingsStore((s) => s.removeTagFilter);

  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      {activeTags.map((tag) => (
        <span
          key={tag}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-sm text-foreground font-medium"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTagFilter(tag)}
            className="w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-border transition-opacity"
          >
            <X size={12} />
          </button>
        </span>
      ))}
      <div className="relative">
        {activeTags.length === 0 ? (
          <button
            type="button"
            onClick={() => setShowDropdown((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-dashed border-border text-sm text-muted-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
          >
            <Plus size={14} />
            Filter by tag
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowDropdown((prev) => !prev)}
            className="w-7 h-7 rounded-full border border-dashed border-border flex items-center justify-center text-muted-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
          >
            <Plus size={14} />
          </button>
        )}
        {showDropdown && (
          <TagDropdown
            allTags={ALL_TAGS}
            tagCounts={TAG_COUNTS}
            onClose={() => setShowDropdown(false)}
          />
        )}
      </div>
    </div>
  );
}
