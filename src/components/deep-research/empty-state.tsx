import { SUGGESTIONS } from "@/data/mock-deep-research";

interface EmptyStateProps {
  onSuggestionClick: (text: string) => void;
}

const EmptyState = ({ onSuggestionClick }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center h-full px-6">
    <h1 className="text-3xl font-normal text-foreground tracking-tight m-0 mb-6">
      What can I help with?
    </h1>
    <div className="flex flex-wrap gap-2 justify-center max-w-[520px]">
      {SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          onClick={() => onSuggestionClick(suggestion)}
          className="items-center bg-transparent border border-solid border-[var(--border-base)] rounded-full text-[var(--fg-subtle)] cursor-pointer inline-flex text-sm leading-4 py-2 px-4 transition-colors hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)]"
        >
          {suggestion}
        </button>
      ))}
    </div>
  </div>
);

export default EmptyState;
