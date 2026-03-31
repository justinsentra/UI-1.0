import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaDeepResearch } from "@/data/content-resolver";
import type { SuggestionRoute } from "@/data/mock-deep-research";

interface EmptyStateProps {
  onSuggestionClick: (text: string, route: SuggestionRoute) => void;
}

const EmptyState = ({ onSuggestionClick }: EmptyStateProps) => {
  const persona = usePersonaStore((s) => s.persona);
  const { suggestions } = getPersonaDeepResearch(persona);

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <h1 className="text-3xl font-normal text-foreground tracking-tight m-0 mb-6">
        What can I help with?
      </h1>
      <div className="flex flex-wrap gap-2 justify-center max-w-[520px]">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.label}
            type="button"
            onClick={() =>
              onSuggestionClick(suggestion.label, suggestion.route)
            }
            className="items-center bg-transparent border border-solid border-border rounded-lg text-muted-foreground cursor-pointer inline-flex text-sm leading-4 py-2 px-4 transition-colors hover:bg-accent hover:text-foreground"
          >
            {suggestion.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
