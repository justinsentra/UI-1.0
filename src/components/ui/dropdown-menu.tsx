import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type ReactElement,
} from "react";
import { cn } from "@lib/utils";

interface DropdownMenuItem {
  icon?: ReactElement;
  label: string;
  onClick: () => void;
  destructive?: boolean;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  align?: "left" | "right";
  className?: string;
}

export function DropdownMenu({
  trigger,
  items,
  align = "right",
  className,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className={cn("relative inline-flex", className)}>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute top-full mt-1 z-50 min-w-[180px] bg-background rounded-xl shadow-lg border border-[var(--border-base)] overflow-hidden",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                item.onClick();
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors",
                item.destructive
                  ? "text-red-600 hover:bg-red-50"
                  : "text-[var(--fg-base)] hover:bg-[var(--bg-subtle)]",
              )}
            >
              {item.icon && (
                <span className="w-4 h-4 shrink-0">{item.icon}</span>
              )}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
