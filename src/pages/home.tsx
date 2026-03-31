import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowRight,
  Plus,
  Mic,
  FileUp,
  AtSign,
  Bell,
  Mail,
  Video,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@lib/utils";
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

const MORNING_BRIEF_SIDEBAR_MEETINGS = [
  {
    id: "m1",
    title: "Secondary offering with David Chen",
    time: "2:00 PM",
    attendeesShort: "Mark, David & 2 others",
    briefReady: true,
  },
  {
    id: "m2",
    title: "Q1 pipeline review",
    time: "3:00 PM",
    attendeesShort: "Mark, Diana & 4 others",
    briefReady: true,
  },
  {
    id: "m3",
    title: "Apex Corp engagement terms",
    time: "4:00 PM",
    attendeesShort: "Mark, Julia & 1 other",
    briefReady: false,
  },
  {
    id: "m4",
    title: "Portfolio board prep",
    time: "5:00 PM",
    attendeesShort: "Mark, Evan & 3 others",
    briefReady: false,
  },
];

const MORNING_BRIEF_SIDEBAR_EMAILS = [
  {
    from: "Julia Mercer",
    subject: "Re: Updated engagement terms",
    time: "6:42 AM",
    isAction: true,
  },
  {
    from: "Evan Brooks",
    subject: "Market comp view for board prep",
    time: "7:05 AM",
    isAction: true,
  },
  {
    from: "Diana Calloway",
    subject: "IC follow-up: updated focus list",
    time: "8:11 AM",
    isAction: false,
  },
];

const HOME_ACTION_IDS = {
  weeklyDealPipelineHealthCheck: "weekly-deal-pipeline-health-check",
  postMeetingFollowUp: "post-meeting-follow-up",
  autoExcelUpdate: "auto-excel-update",
};

const ACTIVE_CONNECTION_LOGOS: {
  id: string;
  src?: string;
  Icon?: ComponentType<{ size?: number; className?: string }>;
}[] = [
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

const INITIAL_ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: "synthetic-db-review",
    actionId: HOME_ACTION_IDS.weeklyDealPipelineHealthCheck,
    actionTab: "plan",
    category: "Deal review",
    title: "Synthetic DB needs clean numbers before Thursday",
    description:
      "Your analyst started the consolidation, but updated figures still need review and a Salesforce push before the IC meeting.",
  },
  {
    id: "engagement-terms",
    actionId: HOME_ACTION_IDS.postMeetingFollowUp,
    actionTab: "approved",
    category: "Client commitment",
    title: "Revised engagement terms still pending",
    description:
      "You committed to sending a redline two weeks ago. The client followed up this morning before legal reviews today.",
  },
  {
    id: "meridian-misalignment",
    actionId: HOME_ACTION_IDS.postMeetingFollowUp,
    actionTab: "plan",
    category: "Misalignment detected",
    title: "Sarah is still advancing Meridian after IC deprioritized it",
    description:
      "Sarah missed the IC decision, kept building the pitch deck, and emailed the CFO for updated financials this morning.",
  },
  {
    id: "pipeline-report",
    actionId: HOME_ACTION_IDS.weeklyDealPipelineHealthCheck,
    actionTab: "approved",
    category: "Report",
    title: "Friday pipeline health check is ready",
    description:
      "The latest brief flags Meridian stalled at diligence and an Oracle migration vendor delay pushing timelines.",
  },
  {
    id: "follow-up-david",
    actionId: HOME_ACTION_IDS.postMeetingFollowUp,
    actionTab: "approved",
    category: "Approval",
    title: "Follow-up email to David Chen is drafted",
    description:
      "A follow-up covering the secondary offering timeline and governance advisor intro is ready to review and send.",
  },
];

/* ── Home Page ── */

const HomePage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { showMorningBrief, dismissMorningBrief } = useMorningBrief();

  const [attentionItems] = useState<AttentionItem[]>(INITIAL_ATTENTION_ITEMS);
  const [sidebarTab, setSidebarTab] = useState("attention");

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
                {getGreeting()}, Mark
              </h1>
            </div>

            {/* Chat Input */}
            <div className="mb-16">
              <div className="rounded-xl border border-border bg-background shadow-sm overflow-hidden dark:bg-sidebar">
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
                      <DropdownMenuTrigger className="inline-flex items-center justify-center size-8 rounded-full hover:bg-accent text-muted-foreground transition-colors cursor-pointer border-none bg-transparent">
                        <Plus size={14} strokeWidth={2} />
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
                className="group mx-auto flex items-center rounded-b-xl px-4 pb-3 pt-4 w-[calc(100%-32px)] bg-muted/50 dark:bg-[#101010] border border-border -mt-px border-t-transparent hover:bg-muted/40 transition-colors cursor-pointer"
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
              <Tabs
                value={sidebarTab}
                onValueChange={setSidebarTab}
                className="shrink-0"
              >
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
            <div className="flex flex-col gap-2.5 pt-1">
              <AnimatePresence initial={false} mode="popLayout">
                {visibleAttentionItems.map((attentionItem) => (
                  <motion.div
                    key={attentionItem.id}
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleAttentionItemClick(attentionItem)}
                      className="flex w-full cursor-pointer flex-col gap-2 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-accent/30"
                    >
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground w-fit">
                        {attentionItem.category}
                      </span>
                      <p className="text-sm font-medium text-foreground m-0 leading-snug">
                        {attentionItem.title}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground m-0 line-clamp-2">
                        {attentionItem.description}
                      </p>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {sidebarTab === "meetings" && (
            <div className="flex flex-col gap-2 pt-1">
              {MORNING_BRIEF_SIDEBAR_MEETINGS.map((meeting) => (
                <button
                  key={meeting.id}
                  type="button"
                  onClick={() => navigate("/pre-meeting-brief")}
                  className="flex flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-medium text-foreground truncate">
                      {meeting.title}
                    </span>
                    {meeting.briefReady ? (
                      <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
                    ) : null}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {meeting.time} · {meeting.attendeesShort}
                  </span>
                </button>
              ))}
            </div>
          )}

          {sidebarTab === "email" && (
            <div className="flex flex-col gap-2 pt-1">
              {MORNING_BRIEF_SIDEBAR_EMAILS.map((email) => (
                <button
                  key={email.subject}
                  type="button"
                  onClick={() => navigate("/morning-brief")}
                  className="flex flex-col gap-1 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      {email.isAction ? (
                        <span className="size-1.5 shrink-0 rounded-full bg-destructive" />
                      ) : null}
                      <span className="text-sm font-medium text-foreground">
                        {email.from}
                      </span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      {email.time}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-foreground/80 m-0">
                    {email.subject}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Bottom CTA */}
        <div className="border-t border-border px-5 py-4">
          <button
            type="button"
            onClick={() => navigate("/morning-brief")}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-muted/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Morning Briefing
            <ArrowRight size={14} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {showMorningBrief ? (
        <MorningBriefSurface isOverlay onClose={dismissMorningBrief} />
      ) : null}
    </div>
  );
};

export default HomePage;
