import { cn } from "@/lib/utils";
import type { ReportSection } from "@/types";

interface DrillDownSectionsProps {
  drillDowns: ReportSection[];
}

export function DrillDownSections({ drillDowns }: DrillDownSectionsProps) {
  return (
    <div className="space-y-8 mt-8">
      {drillDowns.map((dd) => (
        <section key={dd.heading}>
          <h2 className="text-md font-normal text-[var(--foreground)] mb-4">
            {dd.heading}
          </h2>
          {dd.paragraphs.map((paragraph, pIdx) => (
            <p
              key={pIdx}
              className={cn(
                "text-sm text-[var(--muted-foreground)] leading-relaxed",
                pIdx < dd.paragraphs.length - 1 && "mb-4",
              )}
            >
              {formatBold(paragraph)}
            </p>
          ))}
        </section>
      ))}
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
