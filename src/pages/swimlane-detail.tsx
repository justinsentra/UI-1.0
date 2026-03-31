import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  AlertTriangle,
  Users,
  ExternalLink,
  Calendar,
  Flag,
  TrendingUp,
  CircleAlert,
  MessageSquare,
  CheckCircle2,
  Waves,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getSourceIcon } from "@/icons/source-icons";
import { MOCK_SWIMLANES, STATUS_CONFIG } from "@/data/mock-swimlanes";
import type {
  SwimlaneEvent,
  SwimlaneWeek,
  Swimlane,
} from "@/data/mock-swimlanes";
import type { SourceType } from "@/data/mock-deep-research";

const CATEGORY_CONFIG: Record<
  SwimlaneEvent["category"],
  { icon: typeof Calendar; label: string; color: string }
> = {
  meeting: { icon: Calendar, label: "Meeting", color: "text-blue-500" },
  decision: { icon: Flag, label: "Decision", color: "text-violet-500" },
  escalation: {
    icon: CircleAlert,
    label: "Escalation",
    color: "text-amber-500",
  },
  milestone: {
    icon: CheckCircle2,
    label: "Milestone",
    color: "text-emerald-500",
  },
  blocker: { icon: AlertTriangle, label: "Blocker", color: "text-rose-500" },
  update: { icon: TrendingUp, label: "Update", color: "text-sky-500" },
};

function EventCard({
  event,
  isExpanded,
  onToggle,
}: {
  event: SwimlaneEvent;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const categoryConfig = CATEGORY_CONFIG[event.category];
  const primarySource = event.sources[0];
  const PrimarySourceIcon = primarySource
    ? getSourceIcon(primarySource.type as SourceType)
    : null;

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-start gap-3 rounded-lg px-3.5 py-3 text-left transition-colors hover:bg-[var(--accent)]/40 cursor-pointer bg-transparent border-none",
          isExpanded && "bg-[var(--accent)]/20",
        )}
      >
        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--muted)]">
          {PrimarySourceIcon ? (
            <PrimarySourceIcon size={16} />
          ) : (
            <categoryConfig.icon size={14} className={categoryConfig.color} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-sm font-medium text-[var(--foreground)] line-clamp-1">
            {event.title}
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-2xs text-[var(--muted-foreground)]">
              {event.timestamp}
            </span>
            <span className={cn("text-2xs font-medium", categoryConfig.color)}>
              {categoryConfig.label}
            </span>
          </div>
        </div>

        <ChevronDown
          size={12}
          className={cn(
            "mt-1.5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200",
            isExpanded && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.12 },
            }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-4 pt-1 ml-10 flex flex-col gap-3">
              <p className="m-0 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {event.detail}
              </p>

              {event.involved.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Users
                    size={12}
                    className="shrink-0 text-[var(--muted-foreground)]"
                  />
                  <span className="text-2xs text-[var(--muted-foreground)]">
                    {event.involved.join(", ")}
                  </span>
                </div>
              )}

              {event.sources.length > 0 && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <MessageSquare
                    size={12}
                    className="shrink-0 text-[var(--muted-foreground)]"
                  />
                  <span className="text-2xs text-[var(--muted-foreground)]">
                    {event.sources.length} source
                    {event.sources.length !== 1 ? "s" : ""}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {event.sources.map((source) => {
                  const Icon = getSourceIcon(source.type as SourceType);
                  return (
                    <span
                      key={source.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--muted)] px-2.5 py-1 text-2xs text-[var(--muted-foreground)]"
                    >
                      {Icon && <Icon size={12} />}
                      <span className="truncate max-w-[160px]">
                        {source.label}
                      </span>
                      <ExternalLink size={9} className="opacity-50 shrink-0" />
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WeekSection({
  week,
  isExpanded,
  onToggle,
}: {
  week: SwimlaneWeek;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());
  const isCritical = week.highlight === "critical";
  const isWarning = week.highlight === "warning";

  const toggleEvent = (eventId: string) => {
    setExpandedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(eventId)) next.delete(eventId);
      else next.add(eventId);
      return next;
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors cursor-pointer",
          isCritical
            ? "border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10"
            : isWarning
              ? "border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10"
              : "border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)]/30",
          isExpanded && "rounded-b-none",
        )}
      >
        {isCritical && (
          <AlertTriangle size={14} className="shrink-0 text-rose-500" />
        )}
        {isWarning && (
          <AlertTriangle size={14} className="shrink-0 text-amber-500" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-[var(--foreground)]">
              {week.label}
            </span>
            {week.dateRange && (
              <span className="text-2xs text-[var(--muted-foreground)]">
                {week.dateRange}
              </span>
            )}
          </div>
          <p className="m-0 mt-0.5 text-xs text-[var(--muted-foreground)] line-clamp-1">
            {week.summary}
          </p>
        </div>

        <span className="text-2xs text-[var(--muted-foreground)] shrink-0 tabular-nums">
          {week.events.length} event{week.events.length !== 1 ? "s" : ""}
        </span>

        <ChevronDown
          size={14}
          className={cn(
            "shrink-0 text-[var(--muted-foreground)] transition-transform duration-200",
            isExpanded && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.25, ease: "easeInOut" },
              opacity: { duration: 0.15 },
            }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                "flex flex-col gap-1 rounded-b-lg border border-t-0 px-2 py-3",
                isCritical
                  ? "border-rose-500/30 bg-rose-500/5"
                  : isWarning
                    ? "border-amber-500/30 bg-amber-500/5"
                    : "border-[var(--border)] bg-[var(--card)]",
              )}
            >
              {week.events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isExpanded={expandedEvents.has(event.id)}
                  onToggle={() => toggleEvent(event.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SwimlaneStatusBar({
  swimlane,
  onAskQuestion,
}: {
  swimlane: Swimlane;
  onAskQuestion: () => void;
}) {
  const config = STATUS_CONFIG[swimlane.status];
  const totalEvents = swimlane.weeks.reduce(
    (sum, w) => sum + w.events.length,
    0,
  );

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5">
            <h1 className="text-lg font-semibold text-foreground truncate">
              {swimlane.title}
            </h1>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.625rem] font-medium shrink-0 ${config.className}`}
            >
              {config.label}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground/70 line-clamp-2">
            {swimlane.currentStateSummary}
          </p>
        </div>

        <button
          type="button"
          onClick={onAskQuestion}
          className="inline-flex items-center gap-1.5 shrink-0 h-8 px-3 rounded-lg border border-[var(--border)] bg-[var(--secondary)] text-xs font-medium text-[var(--muted-foreground)] hover:text-foreground hover:border-[var(--muted-foreground)] transition-colors cursor-pointer"
        >
          <Search size={13} />
          Ask a question
        </button>
      </div>

      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[var(--border)]">
        <div className="flex items-center gap-1.5">
          <Users size={12} className="text-muted-foreground/50" />
          <span className="text-2xs text-muted-foreground/70">
            {swimlane.owner}
          </span>
        </div>
        <span className="text-2xs text-muted-foreground/40">·</span>
        <span className="text-2xs text-muted-foreground/70 tabular-nums">
          {swimlane.weeks.length} weeks tracked
        </span>
        <span className="text-2xs text-muted-foreground/40">·</span>
        <span className="text-2xs text-muted-foreground/70 tabular-nums">
          {totalEvents} events
        </span>
      </div>
    </div>
  );
}

const SwimlaneDetailPage = () => {
  const { swimlaneId } = useParams<{ swimlaneId: string }>();
  const navigate = useNavigate();
  const swimlane = MOCK_SWIMLANES.find((s) => s.id === swimlaneId);

  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(() => {
    if (!swimlane?.weeks.length) return new Set();
    return new Set([swimlane.weeks[0].weekNumber]);
  });

  const toggleWeek = (weekNumber: number) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(weekNumber)) next.delete(weekNumber);
      else next.add(weekNumber);
      return next;
    });
  };

  const handleAskQuestion = () => {
    navigate("/deep-research", {
      state: { prefill: swimlane?.title },
    });
  };

  if (!swimlane) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <Waves className="size-10" strokeWidth={1} />
        <p className="text-sm font-medium">Swimlane not found</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-x-hidden overflow-y-auto">
      <div className="relative min-h-full px-4 py-6 pt-14 sm:p-12 sm:pt-20 md:pt-20">
        <div className="max-w-screen-4xl mx-auto w-full">
          <div className="mx-auto w-full max-w-3xl flex flex-col gap-6">
            <SwimlaneStatusBar
              swimlane={swimlane}
              onAskQuestion={handleAskQuestion}
            />

            <div className="flex flex-col gap-2">
              {swimlane.weeks.map((week) => (
                <WeekSection
                  key={week.weekNumber}
                  week={week}
                  isExpanded={expandedWeeks.has(week.weekNumber)}
                  onToggle={() => toggleWeek(week.weekNumber)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimlaneDetailPage;
