import { useState } from "react";
import { Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { cn } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { workspaceMembers, type WorkspaceMember } from "@/data/mock-settings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

const roleBadgeStyles: Record<WorkspaceMember["role"], string> = {
  Admin: "bg-primary text-primary-foreground",
  Member: "bg-accent text-foreground",
  Viewer: "bg-muted text-muted-foreground",
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
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60"
        />
        <input
          type="text"
          placeholder="Search members"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-transparent focus:border-border bg-accent text-sm placeholder:text-muted-foreground/60 text-foreground outline-none transition-colors"
        />
      </div>

      {/* Member list */}
      <div className="divide-y divide-border">
        {filteredMembers.map((member) => (
          <div key={member.id} className="flex items-center py-3.5 gap-3">
            <UserAvatar name={member.name} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {member.name}
              </p>
              <p className="text-xs text-muted-foreground/60 truncate">
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
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    type="button"
                    className="cursor-pointer rounded-md p-1.5 transition-colors hover:bg-accent"
                  >
                    <MoreHorizontal
                      size={16}
                      className="text-muted-foreground"
                    />
                  </button>
                }
              />
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => {}}>
                  <Pencil size={16} />
                  Edit user
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" onClick={() => {}}>
                  <Trash2 size={16} />
                  Delete user
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
}
