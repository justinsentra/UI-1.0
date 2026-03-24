import type { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@lib/utils";

interface RightPanelProps {
  isOpen: boolean;
  onClose: () => void;
  tabs?: { label: string; value: string }[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  children: ReactNode;
}

export function RightPanel({
  isOpen,
  onClose,
  tabs,
  activeTab,
  onTabChange,
  children,
}: RightPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 340 }}
          animate={{ x: 0 }}
          exit={{ x: 340 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed right-0 top-0 bottom-0 z-40 w-[340px] bg-background border-l border-[var(--border)] shadow-lg flex flex-col"
        >
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            {tabs && tabs.length > 0 ? (
              <div className="flex items-center gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => onTabChange?.(tab.value)}
                    className={cn(
                      "relative pb-2 text-sm font-medium transition-colors bg-transparent border-none cursor-pointer",
                      activeTab === tab.value
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--muted-foreground)]",
                    )}
                  >
                    {tab.label}
                    {activeTab === tab.value && (
                      <motion.div
                        layoutId="panel-tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--foreground)] rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div />
            )}
            <button
              type="button"
              onClick={onClose}
              className="h-7 w-7 rounded-md flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors bg-transparent border-none cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
          <div className="border-b border-[var(--border)]" />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
