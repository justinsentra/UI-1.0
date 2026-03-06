import { useState } from "react";
import { Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { cn } from "@lib/utils";
import { workspaceMembers, type WorkspaceMember } from "@/data/mock-settings";
import { DropdownMenu } from "@components/ui/dropdown-menu";

const roleBadgeStyles: Record<WorkspaceMember["role"], string> = {
  Admin: "bg-[var(--fg-base)] text-white",
  Member: "bg-[var(--border-base)] text-[var(--fg-base)]",
  Viewer: "bg-[var(--bg-component-hover)] text-[var(--fg-muted)]",
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
      {/* Header with search */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-md font-semibold text-[var(--fg-base)]">
          Team members
        </h2>
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
          />
          <input
            type="text"
            placeholder="Search members"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 pl-9 pr-4 w-[200px] rounded-lg border border-[var(--border-base)] bg-background text-sm placeholder:text-[var(--fg-disabled)] focus:border-[var(--fg-base)] focus:outline-none"
          />
        </div>
      </div>

      {/* Member list */}
      <div className="divide-y divide-[var(--border-base)] border-t border-[var(--border-base)]">
        {filteredMembers.map((member) => (
          <div key={member.id} className="flex items-center py-3.5 gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-2xs font-medium text-white shrink-0"
              style={{ backgroundColor: member.avatarColor }}
            >
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--fg-base)] truncate">
                {member.name}
              </p>
              <p className="text-sm text-[var(--fg-muted)] truncate">
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
