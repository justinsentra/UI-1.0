import { ArrowUp, Plus, Square, FileUp, AtSign } from "lucide-react";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from "../prompt-kit/prompt-input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

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
        className="rounded-xl"
      >
        <PromptInputTextarea placeholder="Ask Sentra anything..." />
        <PromptInputActions className="justify-between px-3 pb-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="items-center border-none rounded-full flex shrink-0 size-7 justify-center p-0 bg-transparent text-muted-foreground cursor-pointer transition-colors hover:text-foreground hover:bg-accent">
              <Plus size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              sideOffset={8}
              className="min-w-36"
            >
              <DropdownMenuItem>
                <FileUp />
                Upload file
              </DropdownMenuItem>
              <DropdownMenuItem>
                <AtSign />
                Mention
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <PromptInputAction tooltip={isLoading ? "Stop" : "Send"}>
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canSubmit}
              className={`items-center border-none rounded-full flex shrink-0 size-7 justify-center p-0 ${canSubmit ? "bg-primary text-primary-foreground cursor-pointer" : "bg-muted-foreground/40 text-background shadow-none cursor-not-allowed"}`}
            >
              {isLoading ? (
                <Square size={12} fill="currentColor" />
              ) : (
                <ArrowUp size={14} strokeWidth={2.5} />
              )}
            </button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    </div>
  );
};

export default Chatbox;
