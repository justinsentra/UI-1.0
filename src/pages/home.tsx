import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowRight, ArrowUpRight, Plus, Check, X, Mic, FileUp, AtSign, ChevronRight, ListTodo, Mail, MessageSquare, Video, CheckCircle2, XCircle, HelpCircle, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@lib/utils";
import { getAvatarColor, getInitials } from "@lib/utils";
import { usePersonaStore } from "@/stores/persona-store";
import { useReportsStore } from "@/stores/reports-store";
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
  source?: { label: string; href: string };
}

const INITIAL_TODOS: TodoItem[] = [
  { id: "1", text: "Review Q1 pipeline metrics before standup", checked: false, source: { label: "TMT Group Weekly", href: "/meeting-notes" } },
  { id: "2", text: "Prep talking points for investor update", checked: false, source: { label: "Email from Marcus Chen", href: "/home" } },
  { id: "3", text: "Follow up with Diana on partnership timeline", checked: false, source: { label: "1:1 with Diana", href: "/meeting-notes" } },
];

/* ── Meeting Types ── */
interface MeetingParticipant {
  name: string;
  status: "accepted" | "declined" | "pending";
}

interface HomeMeeting {
  id: string;
  title: string;
  time: string;
  endTime: string;
  participants: MeetingParticipant[];
  summary: string;
  platform: "Google Meet" | "Zoom";
}

const HOME_MEETINGS: HomeMeeting[] = [
  {
    id: "hm-1",
    title: "TMT Group Weekly",
    time: "2:00 PM",
    endTime: "3:00 PM",
    participants: [
      { name: "Diana Calloway", status: "accepted" },
      { name: "Nathan Lim", status: "accepted" },
      { name: "Victor Kane", status: "pending" },
    ],
    summary: "Weekly sync on TMT group portfolio updates, pipeline status, and upcoming deal timelines.",
    platform: "Google Meet",
  },
  {
    id: "hm-2",
    title: "Investment Committee — Q1 Pipeline",
    time: "4:00 PM",
    endTime: "5:00 PM",
    participants: [
      { name: "Tom Brennan", status: "accepted" },
      { name: "Claire Lawson", status: "accepted" },
      { name: "Jake Brennan", status: "declined" },
      { name: "Richard Caldwell", status: "pending" },
      { name: "Sean Mercer", status: "accepted" },
    ],
    summary: "Review Q1 pipeline performance metrics, discuss high-priority deal statuses, and align on investment committee priorities.",
    platform: "Google Meet",
  },
  {
    id: "hm-3",
    title: "1:1 with Diana — Partnership Update",
    time: "5:30 PM",
    endTime: "6:00 PM",
    participants: [
      { name: "Diana Calloway", status: "accepted" },
    ],
    summary: "Catch up on partnership timeline progress and next steps for the Meridian engagement.",
    platform: "Zoom",
  },
];

/* ── Home Page ── */

const HomePage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const setSelectedReport = useReportsStore((s) => s.setSelectedReport);
  const persona = usePersonaStore((s) => s.persona);
  const homeData = getPersonaHome(persona);
  const suggestions = homeData.suggestions;
  const artifactsToReview = homeData.artifacts;

  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);
  const [newTodo, setNewTodo] = useState("");
  const [sidebarTab, setSidebarTab] = useState<string>("todo");
  const [expandedMeeting, setExpandedMeeting] = useState<string | null>(null);

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

            {/* ── Briefs to Review ── */}
            <section className="flex flex-col mb-8 mt-6">
              <div className="flex items-center gap-2 pb-3">
                <h2 className="text-foreground text-sm font-medium leading-none m-0">
                  Briefs to review
                </h2>
                <span className="text-muted-foreground text-xs font-medium leading-none font-mono">
                  {artifactsToReview.slice(0, 3).length}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {artifactsToReview.slice(0, 3).map((artifact) => (
                  <button
                    key={artifact.id}
                    type="button"
                    onClick={() => {
                      if (artifact.deepResearchPrompt) {
                        navigate("/deep-research", {
                          state: { prefill: artifact.deepResearchPrompt },
                        });
                      } else {
                        setSelectedReport(artifact.reportId ?? "");
                        navigate("/report-detail");
                      }
                    }}
                    className="group flex flex-col gap-2.5 p-4 bg-card rounded-xl border border-border cursor-pointer text-left hover:bg-accent/50 transition-colors duration-150 ease-out"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={cn(
                          "text-[10px] font-medium leading-none px-2 py-1 rounded-full",
                          artifact.type === "action"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {artifact.type === "radar"
                          ? "Radar"
                          : artifact.type === "action"
                            ? "Action"
                            : "Report"}
                      </span>
                      {artifact.badge && (
                        <span
                          className={cn(
                            "text-[10px] font-semibold leading-none px-2 py-1 rounded-full",
                            artifact.badge === "High"
                              ? "bg-muted text-muted-foreground"
                              : "bg-primary/10 text-primary",
                          )}
                        >
                          {artifact.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-normal text-foreground leading-[1.4] m-0">
                        {artifact.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-normal m-0 line-clamp-2">
                        {artifact.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-end mt-auto">
                      <ChevronRight
                        size={14}
                        className="text-muted-foreground/40 transition duration-200 group-hover:text-muted-foreground group-hover:translate-x-0.5"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Chat Input */}
            <div className="mb-16">
              <div className="rounded-3xl border border-border bg-background shadow-sm overflow-hidden dark:bg-sidebar">
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
                        className="inline-flex items-center justify-center size-8 rounded-full hover:bg-accent text-muted-foreground transition-colors cursor-pointer border-none bg-transparent"
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
                className="group mx-auto flex items-center rounded-b-2xl px-4 pb-3 pt-4 w-[calc(100%-32px)] bg-[#101010] border border-border -mt-px border-t-transparent hover:bg-muted/40 transition-colors cursor-pointer"
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
      <div className="relative hidden lg:flex shrink-0 w-[350px] h-full flex-col overflow-hidden border-l border-border">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-blue-500/6 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-blue-500/3 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-6 bg-linear-to-r from-blue-500/5 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-6 bg-linear-to-l from-blue-500/5 to-transparent" />
        </div>
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="px-5 pt-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 pt-0.5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Quick Access
                </p>
                <p className="mt-1 text-lg font-medium text-foreground">
                  {sidebarTab === "todo" ? "To Do" : sidebarTab === "meetings" ? "Meetings" : sidebarTab === "email" ? "Email" : "Slack"}
                </p>
              </div>
              <Tabs value={sidebarTab} onValueChange={(val) => setSidebarTab(val as string)} className="shrink-0">
                <TabsList className="h-11 p-1 gap-1 self-start">
                  <TabsTrigger value="todo" className="px-3.5 py-2">
                    <ListTodo size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="meetings" className="px-3.5 py-2">
                    <Video size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="email" className="px-3.5 py-2">
                    <Mail size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="slack" className="px-3.5 py-2">
                    <MessageSquare size={18} />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="h-px w-full bg-border" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {sidebarTab === "todo" && (
            <>
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
                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-sm leading-relaxed m-0",
                          todo.checked
                            ? "text-muted-foreground line-through"
                            : "text-foreground",
                        )}
                      >
                        {todo.text}
                      </p>
                      {todo.source && (
                        <button
                          type="button"
                          onClick={() => navigate(todo.source!.href)}
                          className="inline-flex items-center gap-1 mt-0.5 text-[11px] underline decoration-1 underline-offset-2 text-muted-foreground/60 hover:text-muted-foreground border-none bg-transparent cursor-pointer p-0 transition-colors"
                        >
                          {todo.source.label}
                          <ArrowUpRight size={10} className="shrink-0" strokeWidth={2} />
                        </button>
                      )}
                    </div>
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
            </>
          )}

          {sidebarTab === "meetings" && (
            <div className="flex flex-col pt-1">
              {HOME_MEETINGS.map((meeting) => {
                const isExpanded = expandedMeeting === meeting.id;
                const maxVisibleAvatars = 2;
                const visibleParticipants = meeting.participants.slice(0, maxVisibleAvatars);
                const overflowCount = meeting.participants.length - maxVisibleAvatars;

                return (
                  <div
                    key={meeting.id}
                    className={cn(
                      "flex flex-col rounded-lg transition-colors",
                      isExpanded && "bg-accent/70",
                    )}
                  >
                    {/* Meeting row — ghost button style */}
                    <button
                      type="button"
                      onClick={() => setExpandedMeeting(isExpanded ? null : meeting.id)}
                      className={cn(
                        "group/mtg relative flex items-center gap-3 w-full px-3 py-2.5 bg-transparent border-none cursor-pointer text-left transition-colors",
                        isExpanded ? "rounded-t-lg" : "rounded-lg hover:bg-accent/50",
                      )}
                    >
                      {/* Video icon */}
                      <div className="shrink-0 flex items-center justify-center">
                        <Video size={18} className="text-primary/70" />
                      </div>

                      {/* Title + time stacked */}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5 pr-16 transition-all group-hover/mtg:pr-0">
                        <span className="text-sm font-medium text-foreground truncate">
                          {meeting.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {meeting.time} – {meeting.endTime}
                        </span>
                      </div>

                      {/* Avatars (default) / Join button (hover) */}
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center justify-end">
                        {/* Avatars — hide on hover */}
                        <div className="flex items-center gap-0 transition-opacity group-hover/mtg:opacity-0">
                          {visibleParticipants.map((p, i) => (
                            <div
                              key={p.name}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-medium border-2 border-background"
                              style={{
                                backgroundColor: getAvatarColor(p.name),
                                marginLeft: i > 0 ? "-6px" : "0",
                              }}
                              title={p.name}
                            >
                              {getInitials(p.name)}
                            </div>
                          ))}
                          {overflowCount > 0 && (
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-medium bg-muted text-muted-foreground border-2 border-background"
                              style={{ marginLeft: "-6px" }}
                            >
                              +{overflowCount}
                            </div>
                          )}
                        </div>

                        {/* Join button — show on hover */}
                        <div
                          className="absolute inset-y-0 right-0 flex items-center justify-end opacity-0 transition-opacity group-hover/mtg:opacity-100"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            rounded="full"
                            className="pointer-events-auto"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <Video size={14} />
                            Join
                          </Button>
                        </div>
                      </div>
                    </button>

                    {/* Accordion content */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200 ease-in-out",
                        isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="px-3 pb-3 pt-2.5 flex flex-col gap-3">
                        {/* Summary */}
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Summary</span>
                          <p className="text-xs text-foreground/80 leading-relaxed m-0">
                            {meeting.summary}
                          </p>
                        </div>

                        {/* Meeting Prep */}
                        <button
                          type="button"
                          onClick={() => navigate("/pre-meeting-brief")}
                          className="flex items-center gap-2 w-full px-3 py-2 rounded-md bg-transparent border-none cursor-pointer text-left hover:bg-accent/50 transition-colors"
                        >
                          <FileText size={14} className="text-primary/70 shrink-0" />
                          <span className="text-xs font-medium text-foreground">Meeting Prep (Brief)</span>
                          <ChevronRight size={12} className="text-muted-foreground ml-auto" />
                        </button>

                        {/* Participants */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                            Participants ({meeting.participants.length})
                          </span>
                          <div className="flex flex-col gap-1 max-h-[120px] overflow-y-auto">
                            {meeting.participants.map((p) => (
                              <div key={p.name} className="flex items-center gap-2 py-1 px-1">
                                <div
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-medium shrink-0"
                                  style={{ backgroundColor: getAvatarColor(p.name) }}
                                >
                                  {getInitials(p.name)}
                                </div>
                                <span className="text-xs text-foreground flex-1 truncate">{p.name}</span>
                                <Tooltip>
                                  <TooltipTrigger className="shrink-0 bg-transparent border-none p-0 flex items-center">
                                    {p.status === "accepted" && (
                                      <CheckCircle2 size={13} className="text-foreground/50" />
                                    )}
                                    {p.status === "declined" && (
                                      <XCircle size={13} className="text-red-400" />
                                    )}
                                    {p.status === "pending" && (
                                      <HelpCircle size={13} className="text-muted-foreground/40" />
                                    )}
                                  </TooltipTrigger>
                                  <TooltipContent side="left" className="text-xs">
                                    {p.status === "accepted" && "Accepted"}
                                    {p.status === "declined" && "Declined"}
                                    {p.status === "pending" && "Awaiting RSVP"}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {sidebarTab === "email" && (
            <div className="flex flex-col gap-2 pt-1">
              {[
                { from: "Diana Reeves", subject: "Partnership timeline update", time: "10:32 AM", preview: "Hi Jaden, wanted to follow up on the revised timeline we discussed last week..." },
                { from: "Marcus Chen", subject: "Re: Q1 Pipeline Review", time: "9:15 AM", preview: "The updated metrics look solid. I've flagged two accounts that need attention before..." },
                { from: "Sarah Kim", subject: "Investor deck — final comments", time: "Yesterday", preview: "Looks great overall. A few minor suggestions on slides 8-12 regarding the market..." },
              ].map((email) => (
                <div
                  key={email.subject}
                  className="flex flex-col gap-1 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{email.from}</span>
                    <span className="text-[11px] text-muted-foreground">{email.time}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground/80 m-0">{email.subject}</p>
                  <p className="text-xs text-muted-foreground m-0 line-clamp-2">{email.preview}</p>
                </div>
              ))}
            </div>
          )}

          {sidebarTab === "slack" && (
            <div className="flex flex-col gap-2 pt-1">
              {[
                { channel: "#deal-room", sender: "Alex Torres", time: "11:02 AM", message: "Just got off the call with Acme — they're ready to move forward with the pilot. Sending over the SOW today." },
                { channel: "#team-updates", sender: "Priya Patel", time: "10:45 AM", message: "FYI the new CRM dashboard is live in staging. Would love feedback before we push to prod." },
                { channel: "#general", sender: "Jordan Lee", time: "9:30 AM", message: "Reminder: all-hands at 2pm today. Agenda includes Q2 planning and the new product roadmap." },
              ].map((msg) => (
                <div
                  key={msg.channel + msg.time}
                  className="flex flex-col gap-1 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary/80">{msg.channel}</span>
                    <span className="text-[11px] text-muted-foreground">{msg.time}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-xs font-medium text-foreground shrink-0">{msg.sender}:</span>
                    <p className="text-xs text-muted-foreground m-0 line-clamp-2">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
