import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "@lib/utils";
import { useMeetingsStore } from "@/stores/meetings-store";

interface TagDropdownProps {
  allTags: string[];
  tagCounts: Record<string, number>;
  onClose: () => void;
}

export function TagDropdown({ allTags, tagCounts, onClose }: TagDropdownProps) {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const activeTags = useMeetingsStore((s) => s.activeTags);
  const addTagFilter = useMeetingsStore((s) => s.addTagFilter);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const filteredTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectTag = (tag: string) => {
    addTagFilter(tag);
    onClose();
  };

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 mt-1 z-50 w-[220px] bg-background rounded-xl shadow-lg border border-[var(--border-base)] py-2"
    >
      <div className="px-3 pb-2">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-8 pl-8 pr-3 rounded-lg border border-[var(--border-base)] bg-[var(--bg-subtle)] text-sm placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-base)] focus:outline-none"
          />
        </div>
      </div>
      <div className="max-h-[200px] overflow-y-auto">
        {filteredTags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => handleSelectTag(tag)}
              disabled={isActive}
              className={cn(
                "w-full flex items-center justify-between px-3 py-1.5 text-sm transition-colors",
                isActive
                  ? "text-[var(--fg-disabled)] cursor-default"
                  : "text-[var(--fg-base)] hover:bg-[var(--bg-subtle)]",
              )}
            >
              <span>{tag}</span>
              <span className="text-xs text-[var(--fg-disabled)]">
                {tagCounts[tag] ?? 0}
              </span>
            </button>
          );
        })}
        {filteredTags.length === 0 && (
          <p className="px-3 py-2 text-sm text-[var(--fg-disabled)]">
            No tags found
          </p>
        )}
      </div>
    </div>
  );
}
