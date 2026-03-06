import { ArrowUp, Square } from "lucide-react";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from "../prompt-kit/prompt-input";

interface ChatboxProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const Chatbox = ({ value, onChange, onSubmit, isLoading }: ChatboxProps) => {
  const canSubmit = value.trim().length > 0 && !isLoading;

  return (
    <div className="mx-auto max-w-[680px]">
      <PromptInput
        value={value}
        onValueChange={onChange}
        isLoading={isLoading}
        onSubmit={onSubmit}
        className="rounded-3xl"
      >
        <PromptInputTextarea placeholder="Ask Sentra anything..." />
        <PromptInputActions className="justify-end px-2 pb-2">
          <PromptInputAction tooltip={isLoading ? "Stop" : "Send"}>
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canSubmit}
              className={`items-center border-none rounded-full text-white flex shrink-0 size-7 justify-center p-0 ${canSubmit ? "bg-[var(--fg-base)] cursor-pointer" : "bg-disabled-foreground shadow-none cursor-not-allowed"}`}
            >
              {isLoading ? (
                <Square size={12} fill="currentColor" />
              ) : (
                <ArrowUp size={14} />
              )}
            </button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    </div>
  );
};

export default Chatbox;
