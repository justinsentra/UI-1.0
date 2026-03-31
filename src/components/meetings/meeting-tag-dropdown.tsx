import { useState, useRef, useEffect } from "react";
import { Search, Lock, Check, Plus, Users, Folder } from "lucide-react";
import { cn } from "@lib/utils";

interface TagOption {
  name: string;
  icon: "users" | "folder";
  isActive?: boolean;
}

const tagOptions: TagOption[] = [
  { name: "Customer Calls", icon: "users", isActive: true },
  { name: "Standup", icon: "folder" },
  { name: "1:1", icon: "folder" },
];

interface MeetingTagDropdownProps {
  onClose: () => void;
  onNewTag: () => void;
}

export function MeetingTagDropdown({
  onClose,
  onNewTag,
}: MeetingTagDropdownProps) {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const filtered = tagOptions.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()),
  );

  const TagIcon = ({ type }: { type: "users" | "folder" }) => {
    if (type === "users")
      return <Users size={14} className="text-[var(--muted-foreground)]" />;
    return <Folder size={14} className="text-[var(--muted-foreground)]" />;
  };

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 mt-1 z-50 w-[260px] bg-[var(--bg-raised)] rounded-xl border border-[var(--border)] py-2 shadow-xl"
    >
      <div className="px-3 pb-2">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-8 pl-8 pr-3 rounded-lg border border-[var(--border)] bg-transparent text-sm text-[var(--border)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--border)] hover:bg-[var(--accent)] transition-colors bg-transparent border-none cursor-pointer"
      >
        <Lock size={14} className="text-[var(--muted-foreground)]" />
        My notes
      </button>

      <div className="border-t border-[var(--border)] my-1" />

      <div className="max-h-[200px] overflow-y-auto">
        {filtered.map((tag) => (
          <button
            key={tag.name}
            type="button"
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors bg-transparent border-none cursor-pointer",
              tag.isActive
                ? "bg-[var(--accent)] text-[var(--border)]"
                : "text-[var(--border)] hover:bg-[var(--accent)]",
            )}
          >
            <TagIcon type={tag.icon} />
            <span className="flex-1 text-left">{tag.name}</span>
            {tag.isActive && (
              <Check size={14} className="text-[var(--muted-foreground)]" />
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="px-3 py-2 text-sm text-[var(--muted-foreground)]">
            No tags found
          </p>
        )}
      </div>

      <div className="border-t border-[var(--border)] my-1" />

      <button
        type="button"
        onClick={() => {
          onClose();
          onNewTag();
        }}
        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--accent)] transition-colors bg-transparent border-none cursor-pointer"
      >
        <Plus size={14} />
        New Tag
      </button>
    </div>
  );
}
