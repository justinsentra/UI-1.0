import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReportSection } from "@/types";

interface DrillDownAccordionProps {
  drillDowns: ReportSection[];
}

export function DrillDownAccordion({ drillDowns }: DrillDownAccordionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setExpandedId((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xs font-medium text-[var(--muted-foreground)] mb-4">
        Drill Downs
      </h3>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {drillDowns.map((dd, idx) => {
          const isExpanded = expandedId === idx;
          return (
            <div key={dd.heading} className="py-3">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left group flex items-center justify-between gap-4 py-1 bg-transparent border-none cursor-pointer"
              >
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {dd.heading}
                </span>
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="shrink-0 text-[var(--muted-foreground)]"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 space-y-4">
                      {dd.paragraphs.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className={cn(
                            "text-sm text-[var(--muted-foreground)] leading-relaxed",
                          )}
                        >
                          {formatBold(paragraph)}
                        </p>
                      ))}
                    </div>
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

function formatBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[var(--foreground)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
