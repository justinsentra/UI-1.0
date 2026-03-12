import { useState, useRef, useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Mail,
  Globe,
  ArrowUp,
  Bell,
  ChevronDown,
  Users,
  Newspaper,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { getInitials, getAvatarColor, cn } from "@lib/utils";
import { usePageLabel } from "../components/app-layout";
import { MeetingRow } from "@components/meetings/meeting-row";
import { connectionData } from "@/data/mock-connection-detail";

type BottomTab = "meetings" | "emails";

const ConnectionDetailPage = () => {
  const [searchParams] = useSearchParams();
  const connectionId = searchParams.get("id") ?? "sunna-mo";
  const person = connectionData[connectionId] ?? connectionData["sunna-mo"];
  const [askInput, setAskInput] = useState("");
  const [notes, setNotes] = useState(person.personalNotes.join("\n"));
  const [bottomTab, setBottomTab] = useState<BottomTab>("meetings");
  const [newsOpen, setNewsOpen] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  // Animated tab underline
  const meetingsTabRef = useRef<HTMLButtonElement>(null);
  const emailsTabRef = useRef<HTMLButtonElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const activeRef = bottomTab === "meetings" ? meetingsTabRef : emailsTabRef;
    const el = activeRef.current;
    if (el) {
      setUnderlineStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [bottomTab]);

  usePageLabel(person.name);

  const companyShort = person.company.split(" ")[0];

  return (
    <div className="max-w-[740px] mx-auto pt-[56px] px-8 pb-6">
      {/* Title */}
      <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight mb-6">
        {person.name}
      </h1>

      {/* Avatar + contact info */}
      <div className="flex items-start gap-4 mb-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
          style={{ backgroundColor: getAvatarColor(person.name) }}
        >
          {getInitials(person.name)}
        </div>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
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
        {/* Reminder button */}
        <button
          type="button"
          onClick={() => setReminderSet((prev) => !prev)}
          className={cn(
            "shrink-0 flex items-center gap-1.5 h-8 px-3 rounded-md text-xs font-medium transition-colors border-none cursor-pointer",
            reminderSet
              ? "bg-[var(--bg-info-subtle)] text-[var(--fg-info)]"
              : "bg-[var(--bg-base)] text-[var(--fg-muted)] shadow-button-neutral hover:bg-[var(--bg-component-hover)]",
          )}
        >
          <Bell size={13} />
          {reminderSet ? "Reminder Set" : "Set Reminder"}
        </button>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-1.5 mb-3">
        {person.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-medium bg-[var(--bg-info-subtle)] text-[var(--fg-info)]"
          >
            {tag}
          </span>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs font-medium text-[var(--fg-disabled)] border border-dashed border-[var(--border-base)] bg-transparent cursor-pointer hover:text-[var(--fg-muted)] hover:border-[var(--fg-disabled)] transition-colors"
        >
          <Plus size={10} />
          Add
        </button>
      </div>

      {/* Other interactors */}
      {person.otherInteractors.length > 0 && (
        <div className="mt-5 mb-3 flex items-center gap-2">
          <Users size={13} className="text-[var(--fg-disabled)] shrink-0" />
          <span className="text-xs text-[var(--fg-muted)]">
            Also interacted with:{" "}
            <span className="text-[var(--fg-base)] font-medium">
              {person.otherInteractors.join(", ")}
            </span>
          </span>
        </div>
      )}

      {/* Ask Input — arrow inside the box */}
      <div className="relative mt-6 mb-3">
        <input
          type="text"
          value={askInput}
          onChange={(e) => setAskInput(e.target.value)}
          placeholder={`Ask anything about ${person.name.split(" ")[0]}...`}
          className="w-full h-11 pl-4 pr-12 rounded-xl border border-[var(--border-base)] bg-background text-sm placeholder:text-[var(--fg-disabled)]"
        />
        <button
          type="button"
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full flex items-center justify-center transition-colors border-none cursor-pointer shrink-0",
            askInput.trim()
              ? "bg-[var(--fg-base)] text-white hover:bg-[var(--fg-base)]"
              : "bg-[var(--bg-subtle)] text-[var(--fg-disabled)] cursor-not-allowed",
          )}
          disabled={!askInput.trim()}
        >
          <ArrowUp size={14} />
        </button>
      </div>

      {/* Suggestion pills */}
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

      {/* Relationship Status */}
      <div className="mb-8">
        <h3 className="text-sm text-[var(--fg-base)] mb-3">
          Relationship Status
        </h3>
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
          {person.relationshipStatus}
        </p>
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

      {/* News Accordion */}
      {person.news.length > 0 && (
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setNewsOpen((prev) => !prev)}
            className="flex items-center gap-2 w-full text-left bg-transparent border-none cursor-pointer p-0 group"
          >
            <Newspaper
              size={14}
              className="text-[var(--fg-disabled)] shrink-0"
            />
            <h3 className="text-sm text-[var(--fg-base)] flex-1">
              Recent News on {companyShort}
            </h3>
            <ChevronDown
              size={14}
              className={cn(
                "text-[var(--fg-disabled)] transition-transform duration-200",
                newsOpen && "rotate-180",
              )}
            />
          </button>
          {newsOpen && (
            <div className="mt-3 pl-6 space-y-2.5">
              {person.news.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="flex items-start gap-2 w-full text-left bg-transparent border-none cursor-pointer p-0 group"
                >
                  <span className="text-[var(--fg-disabled)] text-xs mt-0.5 shrink-0">
                    •
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--fg-base)] leading-snug underline decoration-[var(--border-base)] underline-offset-2 group-hover:decoration-[var(--fg-info)] group-hover:text-[var(--fg-info)] transition-colors">
                      {item.headline}
                      <ArrowUpRight
                        size={12}
                        className="inline-block ml-1 -mt-0.5 text-[var(--fg-disabled)] group-hover:text-[var(--fg-info)] transition-colors"
                      />
                    </p>
                    <p className="text-2xs text-[var(--fg-disabled)] mt-0.5">
                      {item.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom Tabs — Meetings / Emails with animated underline */}
      <div className="relative mb-8">
        <div className="flex gap-8">
          <button
            ref={meetingsTabRef}
            type="button"
            onClick={() => setBottomTab("meetings")}
            className={cn(
              "text-sm pb-3 bg-transparent border-none cursor-pointer px-0 transition-colors",
              bottomTab === "meetings"
                ? "text-[var(--fg-base)]"
                : "text-[var(--fg-disabled)] hover:text-[var(--fg-muted)]",
            )}
          >
            Meetings
          </button>
          <button
            ref={emailsTabRef}
            type="button"
            onClick={() => setBottomTab("emails")}
            className={cn(
              "text-sm pb-3 bg-transparent border-none cursor-pointer px-0 transition-colors",
              bottomTab === "emails"
                ? "text-[var(--fg-base)]"
                : "text-[var(--fg-disabled)] hover:text-[var(--fg-muted)]",
            )}
          >
            Emails
          </button>
        </div>
        {/* Static border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--border-base)]" />
        {/* Animated underline */}
        <div
          className="absolute bottom-0 h-[2px] bg-[var(--fg-base)] transition-all duration-300 ease-out rounded-full"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>

      {/* Meetings Tab */}
      {bottomTab === "meetings" &&
        person.meetings.map((group) => (
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

      {/* Emails Tab */}
      {bottomTab === "emails" && (
        <div className="space-y-1">
          {person.emails.length === 0 ? (
            <p className="text-sm text-[var(--fg-disabled)] py-4 text-center">
              No email threads found
            </p>
          ) : (
            person.emails.map((email) => (
              <div
                key={email.id}
                className="flex flex-col gap-1 px-4 py-3.5 rounded-lg hover:bg-[var(--bg-component-hover)] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--fg-base)]">
                    {email.subject}
                  </span>
                  <span className="text-2xs text-[var(--fg-disabled)] shrink-0 ml-3">
                    {email.date}
                  </span>
                </div>
                <p className="text-xs text-[var(--fg-muted)] line-clamp-1">
                  {email.from} → {email.to.join(", ")}
                </p>
                <p className="text-xs text-[var(--fg-disabled)] line-clamp-2 leading-relaxed">
                  {email.snippet}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ConnectionDetailPage;
