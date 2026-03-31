import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, AlertTriangle, Users, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSourceIcon } from "@/icons/source-icons";
import type { TimelineWeek } from "@/data/mock-deep-research";
import type { SourceType } from "@/data/mock-deep-research";

export function OracleTimeline({ weeks }: { weeks: TimelineWeek[] }) {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  const toggleEvent = (key: string) => {
    setExpandedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      {weeks.map((week) => {
        const isExpanded = expandedWeek === week.week;
        const isCritical = week.highlight === "critical";

        return (
          <div key={week.week}>
            <button
              type="button"
              onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors cursor-pointer",
                isCritical
                  ? "border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10"
                  : "border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)]/30",
                isExpanded && "rounded-b-none",
              )}
            >
              {isCritical && (
                <AlertTriangle size={14} className="shrink-0 text-rose-500" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {week.label}
                  </span>
                  <span className="text-2xs text-[var(--muted-foreground)]">
                    {week.dateRange}
                  </span>
                </div>
                <p className="m-0 mt-0.5 text-xs text-[var(--muted-foreground)] line-clamp-1">
                  {week.summary}
                </p>
              </div>
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
                      "flex flex-col gap-1 rounded-b-lg border border-t-0 px-4 py-3",
                      isCritical
                        ? "border-rose-500/30 bg-rose-500/5"
                        : "border-[var(--border)] bg-[var(--card)]",
                    )}
                  >
                    <p className="m-0 text-2xs font-medium tracking-wide text-[var(--muted-foreground)] uppercase mb-2">
                      Major Events
                    </p>
                    {week.events.map((event, ei) => {
                      const eventKey = `${week.week}-${ei}`;
                      const isEventExpanded = expandedEvents.has(eventKey);

                      return (
                        <div key={eventKey}>
                          <button
                            type="button"
                            onClick={() => toggleEvent(eventKey)}
                            className={cn(
                              "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-[var(--accent)]/40 cursor-pointer bg-transparent border-none",
                              isEventExpanded && "bg-[var(--accent)]/20",
                            )}
                          >
                            <span className="flex-1 text-sm text-[var(--foreground)]">
                              {event.title}
                            </span>
                            <ChevronDown
                              size={12}
                              className={cn(
                                "shrink-0 text-[var(--muted-foreground)] transition-transform duration-200",
                                isEventExpanded && "rotate-180",
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {isEventExpanded && (
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
                                <div className="px-3 pb-3 pt-1 flex flex-col gap-3">
                                  <p className="m-0 text-sm leading-relaxed text-[var(--muted-foreground)]">
                                    {event.detail}
                                  </p>

                                  <div className="flex items-center gap-1.5">
                                    <Users
                                      size={12}
                                      className="text-[var(--muted-foreground)]"
                                    />
                                    <span className="text-2xs text-[var(--muted-foreground)]">
                                      {event.involved.join(", ")}
                                    </span>
                                  </div>

                                  <div className="flex flex-wrap gap-1.5">
                                    {event.sources.map((source) => {
                                      const Icon = getSourceIcon(
                                        source.type as SourceType,
                                      );
                                      return (
                                        <span
                                          key={source.label}
                                          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--muted)] px-2.5 py-1 text-2xs text-[var(--muted-foreground)]"
                                        >
                                          {Icon && <Icon size={12} />}
                                          {source.label}
                                          <ExternalLink
                                            size={9}
                                            className="opacity-50"
                                          />
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
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
