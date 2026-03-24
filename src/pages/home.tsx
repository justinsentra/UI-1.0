import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowRight, Plus, Check, X, Mic, FileUp, AtSign } from "lucide-react";
import { cn } from "@lib/utils";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaHome } from "@/data/content-resolver";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import gmailLogo from "@/assets/logos/gmail.svg";
import calendarLogo from "@/assets/logos/calendar.svg";
import notionLogo from "@/assets/logos/notion.svg";
import googleDriveLogo from "@/assets/logos/google-drive.svg";
import slackLogo from "@/assets/logos/slack.svg";
import githubLogo from "@/assets/logos/github.svg";
import linearLogo from "@/assets/logos/linear.svg";
import outlookLogo from "@/assets/logos/outlook.svg";
import asanaLogo from "@/assets/logos/asana.svg";
import discordLogo from "@/assets/logos/discord.svg";

const TOOL_LOGOS = [
  { id: "gmail", src: gmailLogo },
  { id: "calendar", src: calendarLogo },
  { id: "notion", src: notionLogo },
  { id: "drive", src: googleDriveLogo },
  { id: "slack", src: slackLogo },
  { id: "github", src: githubLogo },
  { id: "linear", src: linearLogo },
  { id: "outlook", src: outlookLogo },
  { id: "asana", src: asanaLogo },
  { id: "discord", src: discordLogo },
];

/* ── Helpers ── */

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

const getFormattedDate = (): string => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

/* ── Todo Item ── */
interface TodoItem {
  id: string;
  text: string;
  checked: boolean;
}

const INITIAL_TODOS: TodoItem[] = [
  { id: "1", text: "Review Q1 pipeline metrics before standup", checked: false },
  { id: "2", text: "Prep talking points for investor update", checked: false },
  { id: "3", text: "Follow up with Diana on partnership timeline", checked: false },
];

/* ── Home Page ── */

const HomePage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const persona = usePersonaStore((s) => s.persona);
  const homeData = getPersonaHome(persona);
  const suggestions = homeData.suggestions;

  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);
  const [newTodo, setNewTodo] = useState("");

  const handleSearchSubmit = useCallback(() => {
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    navigate("/deep-research");
  }, [searchValue, navigate]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    navigate("/deep-research");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
  };

  const addTodo = () => {
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: trimmed, checked: false },
    ]);
    setNewTodo("");
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex h-full w-full gap-0 bg-background">
      {/* ── Left: Main Content (inset card) ── */}
      <div className="relative flex flex-1 flex-col min-w-0 h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex h-full w-full max-w-[45rem] flex-1 flex-col justify-center px-8">
            {/* Greeting */}
            <div className="pt-16 pb-2">
              <p className="text-muted-foreground text-sm tracking-tight">
                {getFormattedDate()}
              </p>
              <h1 className="mt-2 text-3xl font-normal tracking-tight text-foreground pb-2">
                {getGreeting()}, Jaden
              </h1>
            </div>

            {/* Chat Input */}
            <div className="mt-6 mb-16">
              <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
                {/* Textarea */}
                <div className="p-3 pb-0">
                  <textarea
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSearchSubmit();
                      }
                    }}
                    placeholder="Type and press enter to start chatting..."
                    rows={2}
                    className="w-full min-h-[50px] max-h-[320px] px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground bg-transparent border-none outline-none resize-none overflow-auto"
                  />
                </div>

                {/* Bottom toolbar */}
                <div className="flex items-center justify-between px-3 pb-3 pt-1">
                  {/* Left actions */}
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className="inline-flex items-center justify-center size-8 rounded-full hover:bg-accent text-foreground transition-colors cursor-pointer border-none bg-transparent"
                      >
                        <Plus size={14} strokeWidth={2} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="top" align="start" sideOffset={8} className="min-w-36">
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
                  </div>

                  {/* Right actions */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center size-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer border-none bg-transparent"
                    >
                      <Mic size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      disabled={!searchValue.trim()}
                      className={cn(
                        "inline-flex items-center justify-center size-8 rounded-full border-none transition-all",
                        searchValue.trim()
                          ? "bg-foreground text-background cursor-pointer hover:opacity-90"
                          : "bg-muted text-muted-foreground cursor-not-allowed opacity-50",
                      )}
                    >
                      <ArrowUp size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Connect Your Tools bar */}
              <button
                type="button"
                onClick={() => navigate("/integrations")}
                className="group mx-auto flex items-center rounded-b-2xl px-4 pb-3 pt-4 w-[calc(100%-32px)] bg-muted/20 border border-border -mt-px border-t-transparent hover:bg-muted/40 transition-colors cursor-pointer"
              >
                <p className="text-sm text-muted-foreground shrink-0">
                  Connect Your Tools
                </p>
                <div className="ml-auto flex items-center gap-1.5">
                  {TOOL_LOGOS.map((tool) => (
                    <img
                      key={tool.id}
                      src={tool.src}
                      alt={tool.id}
                      className="block size-4 rounded"
                    />
                  ))}
                  <div className="grid transition-[grid-template-columns] duration-200 grid-cols-[0fr] group-hover:grid-cols-[1fr]">
                    <div className="overflow-hidden flex items-center min-w-0">
                      <ArrowRight
                        size={14}
                        className="text-muted-foreground shrink-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ── Right: Quick Access Panel ── */}
      <div className="hidden lg:flex shrink-0 w-[350px] h-full flex-col overflow-hidden border-l border-border">
        {/* Header with weather-like aesthetic */}
        <div className="relative overflow-hidden bg-gradient-to-b from-primary/8 to-transparent">
          <div className="px-5 pt-6 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Quick Access
                </p>
                <p className="mt-1 text-lg font-medium text-foreground">
                  To Do
                </p>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-border" />
        </div>

        {/* Todo list */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {/* New todo input */}
          <div className="flex items-start gap-2.5 rounded-lg p-2 mb-2">
            <button
              type="button"
              className="mt-0.5 shrink-0 size-4 rounded border border-muted-foreground/30 bg-transparent opacity-30"
              disabled
            />
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              placeholder="Add new to do"
              className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/50 p-0"
            />
          </div>

          {/* Todo items */}
          <div className="flex flex-col">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="group flex items-start gap-2.5 rounded-lg p-2 hover:bg-accent/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleTodo(todo.id)}
                  className={cn(
                    "mt-0.5 shrink-0 size-4 rounded border flex items-center justify-center transition-colors cursor-pointer",
                    todo.checked
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-muted-foreground/40 bg-transparent hover:border-muted-foreground/60",
                  )}
                >
                  {todo.checked && <Check size={10} strokeWidth={3} />}
                </button>
                <p
                  className={cn(
                    "flex-1 text-sm leading-relaxed",
                    todo.checked
                      ? "text-muted-foreground line-through"
                      : "text-foreground",
                  )}
                >
                  {todo.text}
                </p>
                <button
                  type="button"
                  onClick={() => removeTodo(todo.id)}
                  className="shrink-0 size-5 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive-foreground transition-all cursor-pointer bg-transparent border-none"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>

          {/* Suggestions section */}
          <div className="mt-6">
            <div className="flex items-center gap-1.5 mb-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Suggestions
              </p>
            </div>
            <div className="h-px w-full bg-border mb-3" />
            <div className="flex flex-col">
              {suggestions.slice(0, 3).map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="group flex items-start gap-2.5 rounded-lg p-3 hover:bg-accent/50 transition-colors w-full text-left cursor-pointer bg-transparent border-none"
                >
                  <Plus
                    size={12}
                    className="mt-1 shrink-0 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-sm text-foreground line-clamp-2">
                    {suggestion}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
