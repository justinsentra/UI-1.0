import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Globe, ArrowUp } from "lucide-react";
import { getInitials, getAvatarColor, cn } from "@lib/utils";
import { usePageLabel } from "../components/app-layout";
import { MeetingRow } from "@components/meetings/meeting-row";
import { connectionData } from "@/data/mock-connection-detail";

const ConnectionDetailPage = () => {
  const [searchParams] = useSearchParams();
  const connectionId = searchParams.get("id") ?? "ashwin";
  const person = connectionData[connectionId] ?? connectionData.ashwin;
  const [askInput, setAskInput] = useState("");
  const [notes, setNotes] = useState(person.personalNotes.join("\n"));

  usePageLabel(person.name);

  return (
    <div className="max-w-[740px] mx-auto pt-[56px] px-8 pb-6">
      {/* Title — same position as all other pages */}
      <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight mb-4">
        {person.name}
      </h1>

      {/* Avatar + contact info */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
          style={{ backgroundColor: getAvatarColor(person.name) }}
        >
          {getInitials(person.name)}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[var(--fg-disabled)] shrink-0" />
            <span className="text-sm text-[var(--fg-muted)]">
              {person.email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-[var(--fg-disabled)] shrink-0" />
            <span className="text-sm text-[var(--fg-muted)]">
              {person.domain}
            </span>
          </div>
        </div>
      </div>

      {/* Ask Input — no search icon, arrow button on right */}
      <div className="relative mb-3 flex items-center gap-2">
        <input
          type="text"
          value={askInput}
          onChange={(e) => setAskInput(e.target.value)}
          placeholder={`Ask anything about ${person.name.split(" ")[0]}...`}
          className="flex-1 h-11 px-4 rounded-xl border border-[var(--border-base)] bg-background text-sm placeholder:text-[var(--fg-disabled)]"
        />
        <button
          type="button"
          className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center transition-colors border-none cursor-pointer shrink-0",
            askInput.trim()
              ? "bg-[var(--fg-base)] text-white hover:bg-[var(--fg-base)]"
              : "bg-[var(--bg-subtle)] text-[var(--fg-disabled)] cursor-not-allowed",
          )}
          disabled={!askInput.trim()}
        >
          <ArrowUp size={14} />
        </button>
      </div>

      {/* Suggestion pills — click to fill ask bar */}
      <div className="flex gap-2 mb-8">
        {person.suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setAskInput(s)}
            className="px-4 py-2 rounded-full border border-[var(--border-base)] bg-background text-sm text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Personal Notes */}
      <div className="mb-8">
        <h3 className="text-sm text-[var(--fg-base)] mb-3">Personal Notes</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border border-[var(--border-base)] rounded-xl p-4 min-h-[120px] max-h-[200px] resize-y text-sm text-[var(--fg-muted)] leading-relaxed bg-transparent"
          placeholder="Add personal notes..."
        />
      </div>

      {/* Meetings Section — 1:1 with meetings tab */}
      <div className="border-b border-[var(--border-base)] pb-2 mb-6">
        <span className="text-sm text-[var(--fg-base)] inline-block border-b-2 border-[var(--fg-base)] pb-2 -mb-[2px]">
          Meetings
        </span>
      </div>

      {person.meetings.map((group) => (
        <div key={group.week} className="mb-6">
          <p className="text-2xs font-medium text-[var(--fg-muted)] mb-3">
            {group.week}
          </p>
          <div className="space-y-0.5">
            {group.items.map((m) => (
              <MeetingRow
                key={m.id}
                id={m.id}
                title={m.title}
                participants={m.participants}
                time={m.time}
                privacy={m.privacy}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConnectionDetailPage;
