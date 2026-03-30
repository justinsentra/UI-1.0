import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowRight, Plus, Mic, FileUp, AtSign, ChevronRight, Bell, Mail, Video, CheckCircle2, XCircle, HelpCircle, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@lib/utils";
import { getAvatarColor, getInitials } from "@lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MorningBriefSurface } from "@/pages/morning-brief";
import { useMorningBrief } from "@/contexts/morning-brief-context";
import { ZoomIcon } from "@/icons/source-icons";
import type { ComponentType } from "react";

import outlookLogo from "@/assets/logos/outlook.png";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import sharePointLogo from "@/assets/logos/sharepoint.png";
import teamsLogo from "@/assets/logos/ms-teams.png";
import serviceNowLogo from "@/assets/logos/service-now.png";
import oracleLogo from "@/assets/logos/oracle-financials.png";
import mondayComLogo from "@/assets/logos/monday-com.webp";

const HOME_ACTION_IDS = {
  weeklyDealPipelineHealthCheck: "weekly-deal-pipeline-health-check",
  postMeetingFollowUp: "post-meeting-follow-up",
  autoExcelUpdate: "auto-excel-update",
};

const ACTIVE_CONNECTION_LOGOS: { id: string; src?: string; Icon?: ComponentType<{ size?: number; className?: string }> }[] = [
  { id: "outlook", src: outlookLogo },
  { id: "teams", src: teamsLogo },
  { id: "zoom", Icon: ZoomIcon },
  { id: "salesforce", src: salesforceLogo },
  { id: "sharepoint", src: sharePointLogo },
  { id: "servicenow", src: serviceNowLogo },
  { id: "oracle", src: oracleLogo },
  { id: "monday-com", src: mondayComLogo },
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

interface AttentionItem {
  id: string;
  actionId: string;
  actionTab: string;
  category: string;
  description: string;
  title: string;
}

interface AttentionControl {
  id: string;
  label: string;
}

const ATTENTION_CONTROLS: AttentionControl[] = [
  { id: "snooze-short", label: "15m" },
  { id: "snooze-tomorrow", label: "Tomorrow" },
  { id: "deprioritize", label: "Lower" },
];

const INITIAL_ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: "follow-up-approval",
    actionId: HOME_ACTION_IDS.postMeetingFollowUp,
    actionTab: "approved",
    category: "Approval",
    title: "Follow-up email draft is pending approval",
    description:
      "A sales follow-up for the TMT Group Weekly sync is ready to review before it sends.",
  },
  {
    id: "pipeline-report",
    actionId: HOME_ACTION_IDS.weeklyDealPipelineHealthCheck,
    actionTab: "approved",
    category: "Report",
    title: "Q1 pipeline report needs attention",
    description:
      "The latest brief flags two stalled accounts and missing next-step owners before tomorrow morning.",
  },
  {
    id: "weekly-summary",
    actionId: HOME_ACTION_IDS.weeklyDealPipelineHealthCheck,
    actionTab: "plan",
    category: "Action",
    title: "Generate the weekly summary",
    description:
      "A recap can be prepared from Salesforce updates, meeting notes, and email highlights for leadership.",
  },
  {
    id: "radar-timeline",
    actionId: HOME_ACTION_IDS.postMeetingFollowUp,
    actionTab: "plan",
    category: "Radar",
    title: "Radar alert: Meridian timeline shifted",
    description:
      "A partnership timeline changed after today’s meeting and should be reviewed before the next check-in.",
  },
  {
    id: "investor-draft",
    actionId: HOME_ACTION_IDS.weeklyDealPipelineHealthCheck,
    actionTab: "approved",
    category: "Approval",
    title: "Investor update draft is ready to review",
    description:
      "A follow-up note has been drafted and is waiting for approval before it goes out to the investor list.",
  },
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
  const { showMorningBrief, dismissMorningBrief } = useMorningBrief();

  const [attentionItems, setAttentionItems] = useState<AttentionItem[]>(INITIAL_ATTENTION_ITEMS);
  const [sidebarTab, setSidebarTab] = useState("attention");
  const [expandedMeeting, setExpandedMeeting] = useState<string | null>(null);

  const handleSearchSubmit = useCallback(() => {
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    navigate("/deep-research");
  }, [searchValue, navigate]);

  const handleAttentionItemClick = useCallback(
    (attentionItem: AttentionItem) => {
      navigate(`/actions/${attentionItem.actionId}`, {
        state: { initialTab: attentionItem.actionTab },
      });
    },
    [navigate],
  );

  const deprioritizeAttentionItem = useCallback((attentionItemId: string) => {
    setAttentionItems((previousAttentionItems) => {
      const selectedAttentionItem = previousAttentionItems.find(
        (attentionItem) => attentionItem.id === attentionItemId,
      );

      if (!selectedAttentionItem) {
        return previousAttentionItems;
      }

      return [
        ...previousAttentionItems.filter(
          (attentionItem) => attentionItem.id !== attentionItemId,
        ),
        selectedAttentionItem,
      ];
    });
  }, []);

  const visibleAttentionItems = attentionItems.slice(0, 3);

  return (
    <div className="relative flex h-full w-full gap-0 bg-background">
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
                className="group mx-auto flex items-center rounded-b-2xl px-4 pb-3 pt-4 w-[calc(100%-32px)] bg-muted/50 dark:bg-[#101010] border border-border -mt-px border-t-transparent hover:bg-muted/40 transition-colors cursor-pointer"
              >
                <p className="text-sm text-muted-foreground shrink-0">
                  Active Connections
                </p>
                <div className="ml-auto flex items-center gap-1.5">
                  {ACTIVE_CONNECTION_LOGOS.map((tool) => (
                    <div
                      key={tool.id}
                      className="flex items-center justify-center size-6 rounded-md bg-white"
                    >
                      {tool.src ? (
                        <img
                          src={tool.src}
                          alt={tool.id}
                          className="block size-4"
                        />
                      ) : tool.Icon ? (
                        <tool.Icon size={16} />
                      ) : null}
                    </div>
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
                  {sidebarTab === "attention"
                    ? "Attention"
                    : sidebarTab === "meetings"
                      ? "Meetings"
                      : "Email"}
                </p>
              </div>
              <Tabs value={sidebarTab} onValueChange={setSidebarTab} className="shrink-0">
                <TabsList className="h-11 p-1 gap-1 self-start">
                  <TabsTrigger value="attention" className="px-3.5 py-2">
                    <Bell size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="meetings" className="px-3.5 py-2">
                    <Video size={18} />
                  </TabsTrigger>
                  <TabsTrigger value="email" className="px-3.5 py-2">
                    <Mail size={18} />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="h-px w-full bg-border" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {sidebarTab === "attention" && (
            <div className="flex flex-col gap-3 pt-1">
              <AnimatePresence initial={false} mode="popLayout">
                {visibleAttentionItems.map((attentionItem) => (
                  <motion.div
                    key={attentionItem.id}
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="group/attention relative overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <button
                      type="button"
                      onClick={() => handleAttentionItemClick(attentionItem)}
                      className="flex w-full cursor-pointer flex-col gap-3 p-4 text-left transition-colors hover:bg-accent/30"
                    >
                      <div className="flex items-center justify-between gap-3 pr-24">
                        <span
                          className={cn(
                            "rounded-full px-2 py-1 text-[10px] font-medium leading-none",
                            attentionItem.category === "Approval"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {attentionItem.category}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-foreground m-0">
                          {attentionItem.title}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground m-0">
                          {attentionItem.description}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-medium text-muted-foreground">
                        <span>Open action</span>
                        <ChevronRight size={12} className="ml-1 shrink-0" />
                      </div>
                    </button>
                    <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 opacity-0 transition-opacity duration-200 group-hover/attention:opacity-100">
                      {ATTENTION_CONTROLS.map((attentionControl) => (
                        <button
                          key={attentionControl.id}
                          type="button"
                          onClick={() => deprioritizeAttentionItem(attentionItem.id)}
                          className="pointer-events-auto cursor-pointer rounded-full border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {attentionControl.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {sidebarTab === "meetings" && (
            <div className="flex flex-col gap-2 pt-1">
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
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5 pr-24">
                        <span className="text-sm font-medium text-foreground truncate">
                          {meeting.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {meeting.time} – {meeting.endTime}
                        </span>
                      </div>

                      {/* Avatars (default) / Join button (hover) */}
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex w-24 items-center justify-end">
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
                          className="absolute inset-y-0 right-0 flex w-full items-center justify-end opacity-0 transition-opacity group-hover/mtg:opacity-100"
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
        </div>
      </div>

      {showMorningBrief ? (
        <MorningBriefSurface isOverlay onClose={dismissMorningBrief} />
      ) : null}
    </div>
  );
};

export default HomePage;
