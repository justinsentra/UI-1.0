import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Clock, Users, ChevronRight } from "lucide-react";
import { cn } from "@lib/utils";
import { getAvatarColor, getInitials } from "@lib/utils";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from "@/components/prompt-kit/prompt-input";
import { useReportsStore } from "@/stores/reports-store";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaHome } from "@/data/content-resolver";

/* ── Helpers ── */

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

/* ── Home Page ── */

const HomePage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const setSelectedReport = useReportsStore((s) => s.setSelectedReport);
  const persona = usePersonaStore((s) => s.persona);
  const homeData = getPersonaHome(persona);

  const suggestions = homeData.suggestions;
  const artifactsToReview = homeData.artifacts;
  const upcomingMeeting = homeData.upcomingMeeting;

  const handleSearchSubmit = useCallback(() => {
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    navigate("/deep-research");
  }, [searchValue, navigate]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    navigate("/deep-research");
  };

  const visibleArtifacts = artifactsToReview.slice(0, 3);

  return (
    <div className="bg-[var(--bg-page)] pt-[56px] px-8 min-h-screen flex flex-col">
      <div className="max-w-[740px] w-full mx-auto flex flex-col flex-1 justify-center py-10">
        {/* ── Greeting ── */}
        <section className="flex flex-col items-center pb-6">
          <h1 className="text-[var(--fg-base)] text-3xl font-normal leading-[1.2] tracking-tight m-0 mb-1">
            {getGreeting()}, Justin
          </h1>
          <p className="text-[var(--fg-muted)] text-sm leading-normal m-0">
            What would you like to know?
          </p>
        </section>

        {/* ── Artifacts to Review ── */}
        <section className="flex flex-col mt-2">
          <div className="flex items-center gap-2 pb-3">
            <h2 className="text-[var(--fg-base)] text-sm font-normal leading-none m-0">
              Artifacts to review
            </h2>
            <span className="text-[var(--fg-disabled)] text-xs font-medium leading-none font-mono">
              {visibleArtifacts.length}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {visibleArtifacts.map((artifact) => (
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
                className="group flex flex-col gap-2.5 p-4 bg-[var(--bg-base)] rounded-lg shadow-card border-none cursor-pointer text-left hover:bg-[var(--bg-component-hover)] transition-colors duration-150 ease-out"
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={cn(
                      "text-2xs font-medium leading-none px-2 py-1 rounded-full",
                      artifact.type === "action"
                        ? "bg-[var(--bg-info-subtle)] text-[var(--fg-info)]"
                        : "bg-[var(--tag-neutral-bg)] text-[var(--fg-subtle)]",
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

        {/* ── Upcoming Meeting ── */}
        <section className="flex flex-col mt-5">
          <div className="flex items-center gap-2 pb-3">
            <h2 className="text-[var(--fg-base)] text-sm font-normal leading-none m-0">
              Upcoming meeting
            </h2>
          </div>

          <div className="group flex items-center gap-4 py-4 px-5 bg-[var(--bg-base)] rounded-lg shadow-card">
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <h3 className="text-[var(--fg-base)] text-sm font-normal leading-[1.4] m-0">
                {upcomingMeeting.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-[var(--fg-muted)]">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {upcomingMeeting.time} – {upcomingMeeting.endTime}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {upcomingMeeting.participants.length} participants
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                {upcomingMeeting.participants.map((name) => (
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
              onClick={() => navigate("/pre-meeting-brief")}
              className="shrink-0 h-8 px-3.5 rounded-md text-xs font-medium text-[var(--fg-base)] bg-[var(--bg-base)] cursor-pointer border-none shadow-button-neutral hover:bg-[var(--bg-component-hover)] transition-colors"
            >
              View Brief
            </button>
          </div>
        </section>

        {/* ── Search ── */}
        <section className="flex flex-col items-center mt-5">
          <div className="w-full">
            <PromptInput
              value={searchValue}
              onValueChange={setSearchValue}
              onSubmit={handleSearchSubmit}
              className="rounded-xl flex-row items-center"
            >
              <PromptInputTextarea
                placeholder="Ask Sentra anything..."
                disableAutosize
                className="min-h-0 px-4 text-sm flex-1 resize-none overflow-hidden"
              />
              <PromptInputActions className="p-0 pr-3">
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

          <div className="flex flex-wrap gap-2 justify-center w-full mt-4">
            {suggestions.map((suggestion) => (
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
      </div>
    </div>
  );
};

export default HomePage;
