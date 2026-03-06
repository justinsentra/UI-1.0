import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Clock, Users, ChevronRight, X } from "lucide-react";
import { cn } from "@lib/utils";
import { getAvatarColor, getInitials } from "@lib/utils";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from "@/components/prompt-kit/prompt-input";
import {
  PRE_MEETING_BRIEF,
  type PreMeetingBrief,
} from "@/components/sage/sageData";

/* ── Static data ── */

const SUGGESTIONS = [
  "What happened in today's meetings?",
  "Summarize this week's progress",
  "What are the team's blockers?",
  "Draft a follow-up to Ashwin",
];

interface UpcomingMeeting {
  id: string;
  title: string;
  time: string;
  endTime: string;
  duration: string;
  participants: string[];
  platform: string;
}

const UPCOMING_MEETING: UpcomingMeeting = {
  id: "um-1",
  title: "All Hands",
  time: "1:00 PM",
  endTime: "1:30 PM",
  duration: "30 min",
  participants: ["Ashwin Gopinath", "Andrey Starenky", "Kristina Beaman"],
  platform: "Google Meet",
};

interface ArtifactCard {
  id: string;
  title: string;
  description: string;
  type: "report" | "radar";
  badge?: string;
}

const ARTIFACTS_TO_REVIEW: ArtifactCard[] = [
  {
    id: "art-1",
    title: "Company Overview",
    description:
      "Weekly report covering product, engineering, and GTM progress",
    type: "report",
    badge: "New",
  },
  {
    id: "art-2",
    title: "GTM Status Report",
    description: "Pipeline health, outbound metrics, and partnership updates",
    type: "report",
    badge: "New",
  },
  {
    id: "art-3",
    title: "SoftBank PoC Timeline",
    description:
      "Risk flagged — design system migration conflicts with March launch",
    type: "radar",
    badge: "High",
  },
];

/* ── Helpers ── */

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

/* ── Pre-Meeting Brief Drawer ── */

function BriefDrawer({
  brief,
  onClose,
}: {
  brief: PreMeetingBrief;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-[var(--overlay-bg)]"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[480px] bg-[var(--bg-raised)] shadow-lg overflow-y-auto animate-[slideInRight_200ms_ease-out]">
        <div className="sticky top-0 z-10 bg-[var(--bg-raised)] border-b border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-medium text-[var(--fg-base)] m-0">
              Pre-Meeting Brief
            </h2>
            <p className="text-xs text-[var(--fg-muted)] m-0 mt-1">
              {brief.meetingTitle} · {brief.meetingTime} –{" "}
              {brief.meetingEndTime}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 rounded-md bg-transparent hover:bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors cursor-pointer border-none"
          >
            <X size={15} />
          </button>
        </div>

        <div className="px-6 py-5">
          {/* Attendees */}
          <div className="mb-6">
            <h3 className="text-xs font-medium text-[var(--fg-muted)] uppercase tracking-wider m-0 mb-3">
              Attendees
            </h3>
            <div className="flex flex-col gap-2.5">
              {brief.attendees.map((attendee) => (
                <div key={attendee.name} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-2xs font-medium shrink-0"
                    style={{ backgroundColor: getAvatarColor(attendee.name) }}
                  >
                    {attendee.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-[var(--fg-base)]">
                      {attendee.name}
                    </span>
                    <span className="text-xs text-[var(--fg-muted)] ml-2">
                      {attendee.role}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--fg-disabled)] shrink-0">
                    Last spoke {attendee.lastSpoke}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-xs font-medium text-[var(--fg-muted)] uppercase tracking-wider m-0 mb-3">
              Key Context
            </h3>
            <div className="flex flex-col gap-4">
              {brief.insights.map((insight, i) => (
                <div key={i} className="rounded-lg bg-[var(--bg-subtle)] p-4">
                  <p className="text-sm text-[var(--fg-base)] leading-relaxed m-0 mb-2">
                    {insight.heading}
                  </p>
                  <div className="rounded-md bg-[var(--bg-base)] p-3 mb-2 border border-[var(--border-subtle)]">
                    <p className="text-xs text-[var(--fg-subtle)] leading-relaxed m-0 italic">
                      "{insight.source.quote}"
                    </p>
                    <p className="text-2xs text-[var(--fg-disabled)] m-0 mt-1.5">
                      {insight.source.meetingTitle} ·{" "}
                      {insight.source.meetingDate}
                    </p>
                  </div>
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed m-0">
                    {insight.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Home Page ── */

const HomePage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [showBrief, setShowBrief] = useState(false);

  const handleSearchSubmit = useCallback(() => {
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    navigate("/deep-research");
  }, [searchValue, navigate]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    navigate("/deep-research");
  };

  return (
    <div className="bg-[var(--bg-page)] pt-[56px] px-8 pb-12 min-h-full">
      <div className="max-w-[740px] mx-auto flex flex-col">
        {/* ── Search Hero ── */}
        <section className="flex flex-col items-center pt-16 pb-12">
          <h1 className="text-[var(--fg-base)] text-2xl font-normal leading-[1.2] tracking-tight m-0 mb-1">
            {getGreeting()}, Justin
          </h1>
          <p className="text-[var(--fg-muted)] text-sm leading-normal m-0 mb-8">
            What would you like to know?
          </p>

          <div className="w-full max-w-[600px]">
            <PromptInput
              value={searchValue}
              onValueChange={setSearchValue}
              onSubmit={handleSearchSubmit}
              className="rounded-2xl"
            >
              <PromptInputTextarea
                placeholder="Ask Sentra anything..."
                className="min-h-[52px] py-4 text-sm"
              />
              <PromptInputActions className="justify-end px-3 pb-3">
                <PromptInputAction tooltip="Search">
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    disabled={!searchValue.trim()}
                    className={cn(
                      "items-center border-none rounded-full text-white flex shrink-0 size-7 justify-center p-0",
                      searchValue.trim()
                        ? "bg-[var(--fg-base)] cursor-pointer"
                        : "bg-[var(--fg-disabled)] shadow-none cursor-not-allowed",
                    )}
                  >
                    <ArrowUp size={14} />
                  </button>
                </PromptInputAction>
              </PromptInputActions>
            </PromptInput>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-[600px] mt-4">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="items-center bg-transparent border border-solid border-[var(--border-base)] rounded-full text-[var(--fg-subtle)] cursor-pointer inline-flex text-xs leading-4 py-2 px-3.5 transition-colors hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-base)]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </section>

        {/* ── Upcoming Meeting ── */}
        <section className="flex flex-col mt-2">
          <div className="flex items-center gap-2 pb-3">
            <h2 className="text-[var(--fg-base)] text-sm font-normal leading-none m-0">
              Upcoming meeting
            </h2>
          </div>

          <div className="group flex items-center gap-4 py-4 px-5 bg-[var(--bg-base)] rounded-lg shadow-card">
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <h3 className="text-[var(--fg-base)] text-sm font-normal leading-[1.4] m-0">
                {UPCOMING_MEETING.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-[var(--fg-muted)]">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {UPCOMING_MEETING.time} – {UPCOMING_MEETING.endTime}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {UPCOMING_MEETING.participants.length} participants
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                {UPCOMING_MEETING.participants.map((name) => (
                  <div
                    key={name}
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-3xs font-medium shadow-border-base"
                    style={{ backgroundColor: getAvatarColor(name) }}
                    title={name}
                  >
                    {getInitials(name)}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowBrief(true)}
              className="shrink-0 h-8 px-3.5 rounded-md text-xs font-medium text-[var(--fg-base)] bg-[var(--bg-base)] cursor-pointer border-none shadow-button-neutral hover:bg-[var(--bg-component-hover)] transition-colors"
            >
              View Brief
            </button>
          </div>
        </section>

        {/* ── Artifacts to Review ── */}
        <section className="flex flex-col mt-10">
          <div className="flex items-center gap-2 pb-3">
            <h2 className="text-[var(--fg-base)] text-sm font-normal leading-none m-0">
              Artifacts to review
            </h2>
            <span className="text-[var(--fg-disabled)] text-xs font-medium leading-none font-mono">
              {ARTIFACTS_TO_REVIEW.length}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {ARTIFACTS_TO_REVIEW.map((artifact) => (
              <button
                key={artifact.id}
                type="button"
                onClick={() => navigate("/report-detail")}
                className="group flex flex-col gap-2.5 p-4 bg-[var(--bg-base)] rounded-lg shadow-card border-none cursor-pointer text-left hover:bg-[var(--bg-component-hover)] transition-colors duration-150 ease-out"
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={cn(
                      "text-2xs font-medium leading-none px-2 py-1 rounded-full",
                      artifact.type === "radar"
                        ? "bg-[var(--tag-neutral-bg)] text-[var(--fg-subtle)]"
                        : "bg-[var(--tag-neutral-bg)] text-[var(--fg-subtle)]",
                    )}
                  >
                    {artifact.type === "radar" ? "Radar" : "Report"}
                  </span>
                  {artifact.badge && (
                    <span
                      className={cn(
                        "text-2xs font-semibold leading-none px-2 py-1 rounded-full",
                        artifact.badge === "High"
                          ? "bg-[var(--tag-neutral-bg)] text-[var(--fg-subtle)]"
                          : "bg-[var(--bg-info-subtle)] text-[var(--fg-info)]",
                      )}
                    >
                      {artifact.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-normal text-[var(--fg-base)] leading-[1.4] m-0">
                    {artifact.title}
                  </h3>
                  <p className="text-xs text-[var(--fg-muted)] leading-normal m-0 line-clamp-2">
                    {artifact.description}
                  </p>
                </div>
                <div className="flex items-center justify-end mt-auto">
                  <ChevronRight
                    size={14}
                    className="text-[var(--fg-disabled)] transition duration-200 group-hover:text-[var(--fg-muted)] group-hover:translate-x-0.5"
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Brief Drawer */}
      {showBrief && (
        <BriefDrawer
          brief={PRE_MEETING_BRIEF}
          onClose={() => setShowBrief(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
