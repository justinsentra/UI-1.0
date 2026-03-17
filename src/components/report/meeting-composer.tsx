import { useState } from "react";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_CONTACTS, TIME_SLOTS, ContactSearch } from "./contact-search";

interface MeetingComposerProps {
  label: string;
  onCancel: () => void;
  onSchedule: () => void;
}

export function MeetingComposer({
  label,
  onCancel,
  onSchedule,
}: MeetingComposerProps) {
  const [participants, setParticipants] = useState<string[]>([
    MOCK_CONTACTS[2].email,
    MOCK_CONTACTS[3].email,
  ]);
  const [title, setTitle] = useState(label);
  const [description, setDescription] = useState(
    "Discuss strategy alignment and next steps based on this week's review.",
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filteredContacts = MOCK_CONTACTS.filter(
    (c) =>
      !participants.includes(c.email) &&
      (c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const addParticipant = (email: string) => {
    setParticipants((prev) => [...prev, email]);
    setSearchQuery("");
    setShowSearch(false);
  };

  const removeParticipant = (email: string) => {
    setParticipants((prev) => prev.filter((e) => e !== email));
  };

  return (
    <div className="pt-4 pb-2 space-y-3">
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[var(--fg-muted)] w-8 shrink-0">
          Title
        </span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] outline-none focus:border-[var(--fg-muted)]"
          placeholder="Meeting title"
        />
      </div>

      {/* Participants */}
      <div className="flex items-start gap-2">
        <span className="text-2xs text-[var(--fg-muted)] mt-1.5 w-8 shrink-0">
          With
        </span>
        <div className="flex-1 flex flex-wrap items-center gap-1.5">
          {participants.map((email) => (
            <span
              key={email}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--bg-subtle)] text-2xs text-[var(--fg-base)]"
            >
              {MOCK_CONTACTS.find((c) => c.email === email)?.name ?? email}
              <button
                type="button"
                onClick={() => removeParticipant(email)}
                className="bg-transparent border-none cursor-pointer p-0 text-[var(--fg-muted)] hover:text-[var(--fg-base)]"
              >
                <X size={10} />
              </button>
            </span>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSearch(true)}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-transparent border border-dashed border-[var(--border-base)] text-[var(--fg-muted)] hover:text-[var(--fg-base)] hover:border-[var(--fg-muted)] transition-colors cursor-pointer"
            >
              <Plus size={10} />
            </button>
            {showSearch && (
              <ContactSearch
                query={searchQuery}
                onQueryChange={setSearchQuery}
                contacts={filteredContacts}
                onSelect={addParticipant}
                onClose={() => setShowSearch(false)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full px-3 py-2 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-muted)] leading-relaxed resize-none placeholder:text-[var(--fg-disabled)] outline-none focus:border-[var(--fg-muted)]"
        placeholder="Add a description..."
      />

      {/* Time Slot Cards */}
      <div>
        <span className="text-2xs text-[var(--fg-muted)] mb-2 block">
          Suggested times
        </span>
        <div className="flex gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot.value}
              type="button"
              onClick={() => setSelectedTime(slot.value)}
              className={cn(
                "flex-1 py-2 rounded-lg border text-xs font-medium transition-all cursor-pointer bg-transparent",
                selectedTime === slot.value
                  ? "border-[var(--fg-base)] text-[var(--fg-base)] bg-[var(--bg-subtle)]"
                  : "border-[var(--border-base)] text-[var(--fg-muted)] hover:border-[var(--fg-muted)] hover:text-[var(--fg-base)]",
              )}
            >
              {slot.label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={onCancel}
          className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg-base)] bg-transparent border-none cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSchedule}
          disabled={!selectedTime}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-medium border-none transition-opacity",
            selectedTime
              ? "bg-[var(--fg-base)] text-[var(--bg-base)] cursor-pointer hover:opacity-90"
              : "bg-[var(--bg-subtle)] text-[var(--fg-disabled)] cursor-not-allowed",
          )}
        >
          Schedule
        </button>
      </div>
    </div>
  );
}
