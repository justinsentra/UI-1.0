import { motion } from "motion/react";
import { cn } from "@lib/utils";

interface SegmentedToggleProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function SegmentedToggle({
  options,
  value,
  onChange,
}: SegmentedToggleProps) {
  return (
    <div className="flex items-center bg-[var(--muted)] rounded-lg p-0.5 gap-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "relative px-3 py-1 text-sm font-medium rounded-md transition-colors bg-transparent border-none cursor-pointer z-10",
            value === option.value
              ? "text-[var(--foreground)]"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
          )}
        >
          {value === option.value && (
            <motion.div
              layoutId="segment-indicator"
              className="absolute inset-0 bg-background rounded-md shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
