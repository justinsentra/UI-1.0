import { useState } from "react";
import { Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { cn, getAvatarColor } from "@lib/utils";
import { workspaceMembers, type WorkspaceMember } from "@/data/mock-settings";
import { DropdownMenu } from "@components/ui/dropdown-menu";

const roleBadgeStyles: Record<WorkspaceMember["role"], string> = {
  Admin: "bg-[var(--fg-base)] text-[var(--bg-base)]",
  Member: "bg-[var(--bg-component-hover)] text-[var(--fg-base)]",
  Viewer: "bg-[var(--bg-subtle)] text-[var(--fg-muted)]",
};

export function TeamTab() {
  const [search, setSearch] = useState("");

  const filteredMembers = workspaceMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
        />
        <input
          type="text"
          placeholder="Search members"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-transparent focus:border-[var(--border-base)] bg-[var(--bg-component-hover)] text-sm placeholder:text-[var(--fg-disabled)] text-[var(--fg-base)] outline-none transition-colors"
        />
      </div>

      {/* Member list */}
      <div className="divide-y divide-[var(--border-base)]">
        {filteredMembers.map((member) => (
          <div key={member.id} className="flex items-center py-3.5 gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-2xs font-medium text-white shrink-0"
              style={{ backgroundColor: getAvatarColor(member.name) }}
            >
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--fg-base)] truncate">
                {member.name}
              </p>
              <p className="text-xs text-[var(--fg-disabled)] truncate">
                {member.email}
              </p>
            </div>
            <span
              className={cn(
                "px-2.5 py-1 rounded-full text-2xs font-medium shrink-0",
                roleBadgeStyles[member.role],
              )}
            >
              {member.role}
            </span>
            <DropdownMenu
              trigger={
                <button
                  type="button"
                  className="p-1.5 rounded-md hover:bg-[var(--bg-component-hover)] transition-colors cursor-pointer"
                >
                  <MoreHorizontal
                    size={16}
                    className="text-[var(--fg-muted)]"
                  />
                </button>
              }
              items={[
                {
                  icon: <Pencil size={16} />,
                  label: "Edit user",
                  onClick: () => {},
                },
                {
                  icon: <Trash2 size={16} />,
                  label: "Delete user",
                  onClick: () => {},
                  destructive: true,
                },
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
