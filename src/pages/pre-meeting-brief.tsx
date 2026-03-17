import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@lib/utils";
import { motion } from "motion/react";
import { Users, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { usePageLabel } from "../components/app-layout";
import PageShell from "@/components/ui/page-shell";
import { ChatSidebar } from "@/components/meetings/chat-sidebar";
import { RightSidebarProvider } from "@/components/ui/right-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaHome } from "@/data/content-resolver";
import { getSourceIcon } from "@/icons/source-icons";
import type { BriefInsight } from "@/data/mock-pre-meeting-brief";
import type { SourceType } from "@/data/mock-deep-research";

const tabs = ["Context"] as const;
type Tab = (typeof tabs)[number];

/* ── Source Pill ── */

function BriefSourcePill({
  sourceType,
  label,
  date,
}: {
  sourceType?: string;
  label: string;
  date: string;
}) {
  const Icon = sourceType ? getSourceIcon(sourceType as SourceType) : null;

  return (
    <button
      type="button"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-2xs font-medium bg-muted text-muted-foreground cursor-pointer hover:bg-secondary-hover transition-colors border-none"
    >
      {Icon && <Icon size={13} />}
      <span className="truncate max-w-[200px]">{label}</span>
      <span className="text-[var(--fg-disabled)]">{date}</span>
      <ArrowUpRight size={10} className="text-[var(--fg-disabled)] shrink-0" />
    </button>
  );
}

/* ── Insight Card ── */

function InsightCard({ insight }: { insight: BriefInsight }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-[var(--fg-base)] leading-[1.7] m-0">
        {insight.heading}
      </p>

      <div className="rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] p-3.5">
        <p className="text-sm text-[var(--fg-subtle)] leading-[1.7] m-0 italic">
          &ldquo;{insight.source.quote}&rdquo;
        </p>
        <div className="mt-2.5">
          <BriefSourcePill
            sourceType={insight.source.sourceType}
            label={insight.source.meetingTitle}
            date={insight.source.meetingDate}
          />
        </div>
      </div>

      <p className="text-sm text-[var(--fg-muted)] leading-[1.7] m-0">
        {insight.summary}
      </p>
    </div>
  );
}

/* ── Suggested Questions for Chat ── */

function getBriefSuggestions(meetingTitle: string): string[] {
  return [
    `What should I prepare for "${meetingTitle}"?`,
    "Summarize the key context for this meeting",
    "What are the open questions from last time?",
  ];
}

/* ── Pre-Meeting Brief Page ── */

const PreMeetingBriefPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Context");
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const [chatWidth, setChatWidth] = useState(380);

  useRegisterSidebar({
    position: SidebarPosition.RIGHT,
    open: showChatSidebar,
    width: chatWidth,
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });

  const persona = usePersonaStore((s) => s.persona);
  const homeData = getPersonaHome(persona);
  const brief = homeData.preMeetingBrief;

  const chatSuggestions = getBriefSuggestions(brief.meetingTitle);

  const measureTab = useCallback(() => {
    const idx = tabs.indexOf(activeTab);
    const el = tabRefs.current[idx];
    if (el) {
      const padding = 12;
      setTabIndicator({
        left: el.offsetLeft - padding / 2,
        width: el.offsetWidth + padding,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    measureTab();
    window.addEventListener("resize", measureTab);
    return () => window.removeEventListener("resize", measureTab);
  }, [measureTab]);

  usePageLabel(brief.meetingTitle);

  return (
    <div className="flex overflow-hidden h-full">
    <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
    <PageShell className="relative pb-[40vh]">
      {/* Top-right action buttons — identical to meeting-detail */}
      <div
        className="absolute top-[12px] right-5 z-10 flex items-center gap-1"
      >
        <button
          type="button"
          onClick={() => setShowChatSidebar((p) => !p)}
          className={cn(
            "h-7 w-7 rounded-md flex items-center justify-center transition-colors cursor-pointer border-none",
            showChatSidebar
              ? "bg-[var(--bg-selected)] text-[var(--fg-muted)]"
              : "bg-transparent hover:bg-[var(--bg-component-hover)] text-[var(--fg-disabled)] hover:text-[var(--fg-muted)]",
          )}
          title="Deep Research"
        >
          <MessageSquare size={15} />
        </button>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight">
          {brief.meetingTitle}
        </h1>
      </div>

      {/* Meta Badges */}
      <div className="flex items-center gap-2 mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-base)] text-sm text-[var(--fg-muted)] bg-transparent">
          <Clock size={14} />
          {brief.meetingTime} – {brief.meetingEndTime}
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-base)] text-sm text-[var(--fg-muted)] bg-transparent">
          <Users size={14} />
          {brief.attendees.length} attendees
        </div>
      </div>

      {/* Tabs — identical structure to meeting-detail */}
      <div className="relative flex gap-8 border-b border-[var(--border-base)] mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-3 px-1 text-sm font-medium transition-colors bg-transparent cursor-pointer border-none",
              activeTab === tab
                ? "text-[var(--fg-base)]"
                : "text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
            )}
          >
            {tab}
          </button>
        ))}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-[var(--fg-base)] rounded-full"
          animate={{ left: tabIndicator.left, width: tabIndicator.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>

      {/* Context Tab */}
      {activeTab === "Context" && (
        <div className="animate-fade-in">
          {/* Key Context / Insights */}
          <div>
            <h3 className="text-2xs font-medium text-[var(--fg-muted)] mb-4">
              Key context
            </h3>
            <div className="flex flex-col gap-8">
              {brief.insights.map((insight, i) => (
                <InsightCard key={i} insight={insight} />
              ))}
            </div>
          </div>
        </div>
      )}

    </PageShell>
    </div>
    <RightSidebarProvider open={showChatSidebar} onOpenChange={setShowChatSidebar} defaultWidth={380} minWidth={320} maxWidth={520} onWidthChange={setChatWidth}>
      <ChatSidebar
        isOpen={showChatSidebar}
        onClose={() => setShowChatSidebar(false)}
        suggestedQuestions={chatSuggestions}
      />
    </RightSidebarProvider>
    </div>
  );
};

export default PreMeetingBriefPage;
