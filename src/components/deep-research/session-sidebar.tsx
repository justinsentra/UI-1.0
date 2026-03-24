import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { SessionHistoryItem } from "@/data/mock-deep-research";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaDeepResearch } from "@/data/content-resolver";

interface SessionSidebarProps {
  activeSessionId: string | null;
  onSelectSession: (id: string) => void;
  onNewSession: () => void;
}

const SessionSidebar = ({
  activeSessionId,
  onSelectSession,
  onNewSession,
}: SessionSidebarProps) => {
  const persona = usePersonaStore((s) => s.persona);
  const { sessionHistory } = getPersonaDeepResearch(persona);

  const grouped = sessionHistory.reduce<Record<string, SessionHistoryItem[]>>(
    (acc, item) => {
      const group = acc[item.date] ?? [];
      return { ...acc, [item.date]: [...group, item] };
    },
    {},
  );

  const dateOrder = [...new Set(sessionHistory.map((s) => s.date))];

  return (
    <aside className="flex flex-col h-full bg-[var(--bg-shell)]">
      <div className="flex items-center justify-between px-4 pt-6 pb-3">
        <span className="text-sm font-medium text-[var(--foreground)]">
          History
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNewSession}
          title="New session"
        >
          <Plus size={15} />
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2.5 pb-4">
        {dateOrder.map((date) => (
          <div key={date} className="mb-3">
            <div className="px-2 mb-1">
              <span className="text-2xs font-medium text-[var(--muted-foreground)]">
                {date}
              </span>
            </div>
            {grouped[date].map((session) => (
              <button
                key={session.id}
                type="button"
                onClick={() => onSelectSession(session.id)}
                className={cn(
                  "flex w-full text-left px-2.5 py-1.5 rounded-[7px] text-xs leading-[1.4] transition-colors border-none cursor-pointer mb-0.5",
                  activeSessionId === session.id
                    ? "bg-black/[0.06] text-[var(--foreground)] font-medium"
                    : "bg-transparent text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]",
                )}
              >
                <span className="truncate">{session.title}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SessionSidebar;
