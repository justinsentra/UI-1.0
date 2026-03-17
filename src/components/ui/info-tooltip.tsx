import { useState } from "react";
import { Info } from "lucide-react";

interface InfoTooltipProps {
  text: string;
}

export function InfoTooltip({ text }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <Info
        size={14}
        className="text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors cursor-help"
      />
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] px-3 py-2 bg-[var(--fg-base)] text-[var(--bg-base)] text-xs leading-relaxed rounded-lg shadow-lg z-50 pointer-events-none">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[var(--fg-base)]" />
        </div>
      )}
    </span>
  );
}
