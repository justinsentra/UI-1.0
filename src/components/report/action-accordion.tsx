import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Calendar, Clock, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SuggestedAction } from "@/types";
import { EmailComposer } from "./email-composer";
import { MeetingComposer } from "./meeting-composer";

interface ActionAccordionProps {
  actions: SuggestedAction[];
}

const iconMap = {
  mail: Mail,
  calendar: Calendar,
  clock: Clock,
} as const;

export function ActionAccordion({ actions }: ActionAccordionProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [completedActions, setCompletedActions] = useState<Set<number>>(
    new Set(),
  );

  const toggle = (idx: number) => {
    if (completedActions.has(idx)) return;
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

  const handleComplete = (idx: number) => {
    setCompletedActions((prev) => {
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
    setExpandedIdx(null);
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xs font-medium text-[var(--muted-foreground)] mb-4">
        Suggested Actions
      </h3>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {actions.map((action, idx) => {
          const isExpanded = expandedIdx === idx;
          const isCompleted = completedActions.has(idx);
          const Icon = iconMap[action.icon];
          return (
            <div key={action.label} className="py-3">
              <button
                type="button"
                onClick={() => toggle(idx)}
                disabled={isCompleted}
                className={cn(
                  "w-full text-left group flex items-center gap-3 py-1 bg-transparent border-none",
                  isCompleted ? "cursor-default opacity-50" : "cursor-pointer",
                )}
              >
                <Icon size={14} className="shrink-0 text-[var(--muted-foreground)]" />
                <span
                  className={cn(
                    "flex-1 text-sm font-medium transition-colors",
                    isCompleted
                      ? "text-[var(--muted-foreground)] line-through"
                      : "text-[var(--foreground)] group-hover:text-[var(--primary)]",
                  )}
                >
                  {action.label}
                </span>
                {!isCompleted && (
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="shrink-0 text-[var(--muted-foreground)]"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                )}
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && !isCompleted && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="overflow-hidden"
                  >
                    {action.icon === "mail" ? (
                      <EmailComposer
                        label={action.label}
                        onCancel={() => setExpandedIdx(null)}
                        onSend={() => handleComplete(idx)}
                      />
                    ) : action.icon === "calendar" ? (
                      <MeetingComposer
                        label={action.label}
                        onCancel={() => setExpandedIdx(null)}
                        onSchedule={() => handleComplete(idx)}
                      />
                    ) : (
                      <div className="pt-3 pb-2 text-sm text-[var(--muted-foreground)]">
                        {action.label}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
