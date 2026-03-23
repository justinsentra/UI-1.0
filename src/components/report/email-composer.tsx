import { useState } from "react";
import { X, Plus } from "lucide-react";
import { MOCK_CONTACTS, ContactSearch } from "./contact-search";

interface EmailComposerProps {
  label: string;
  onCancel: () => void;
  onSend: () => void;
}

export function EmailComposer({ label, onCancel, onSend }: EmailComposerProps) {
  const [recipients, setRecipients] = useState<string[]>([
    MOCK_CONTACTS[0].email,
  ]);
  const [ccVisible, setCcVisible] = useState(false);
  const [cc, setCc] = useState<string[]>([]);
  const [subject, setSubject] = useState(`Re: ${label}`);
  const [body, setBody] = useState(
    `Hi,\n\nFollowing up on this week's review — wanted to connect on this topic and align on next steps.\n\nBest,\nLeo`,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchTarget, setSearchTarget] = useState<"to" | "cc">("to");

  const filteredContacts = MOCK_CONTACTS.filter(
    (c) =>
      !recipients.includes(c.email) &&
      !cc.includes(c.email) &&
      (c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const addRecipient = (email: string) => {
    if (searchTarget === "to") {
      setRecipients((prev) => [...prev, email]);
    } else {
      setCc((prev) => [...prev, email]);
    }
    setSearchQuery("");
    setShowSearch(false);
  };

  const removeRecipient = (email: string) => {
    setRecipients((prev) => prev.filter((e) => e !== email));
  };

  const removeCc = (email: string) => {
    setCc((prev) => prev.filter((e) => e !== email));
  };

  return (
    <div className="pt-4 pb-2 space-y-3">
      {/* To */}
      <div className="flex items-start gap-2">
        <span className="text-2xs text-[var(--fg-muted)] mt-1.5 w-8 shrink-0">
          To
        </span>
        <div className="flex-1 flex flex-wrap items-center gap-1.5">
          {recipients.map((email) => (
            <span
              key={email}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--bg-subtle)] text-2xs text-[var(--fg-base)]"
            >
              {MOCK_CONTACTS.find((c) => c.email === email)?.name ?? email}
              <button
                type="button"
                onClick={() => removeRecipient(email)}
                className="bg-transparent border-none cursor-pointer p-0 text-[var(--fg-muted)] hover:text-[var(--fg-base)]"
              >
                <X size={10} />
              </button>
            </span>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setSearchTarget("to");
                setShowSearch(true);
              }}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-transparent border border-dashed border-[var(--border-base)] text-[var(--fg-muted)] hover:text-[var(--fg-base)] hover:border-[var(--fg-muted)] transition-colors cursor-pointer"
            >
              <Plus size={10} />
            </button>
            {showSearch && searchTarget === "to" && (
              <ContactSearch
                query={searchQuery}
                onQueryChange={setSearchQuery}
                contacts={filteredContacts}
                onSelect={addRecipient}
                onClose={() => setShowSearch(false)}
              />
            )}
          </div>
          {!ccVisible && (
            <button
              type="button"
              onClick={() => setCcVisible(true)}
              className="text-2xs text-[var(--fg-muted)] hover:text-[var(--fg-base)] bg-transparent border-none cursor-pointer ml-auto"
            >
              CC
            </button>
          )}
        </div>
      </div>

      {/* CC */}
      {ccVisible && (
        <div className="flex items-start gap-2">
          <span className="text-2xs text-[var(--fg-muted)] mt-1.5 w-8 shrink-0">
            CC
          </span>
          <div className="flex-1 flex flex-wrap items-center gap-1.5">
            {cc.map((email) => (
              <span
                key={email}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--bg-subtle)] text-2xs text-[var(--fg-base)]"
              >
                {MOCK_CONTACTS.find((c) => c.email === email)?.name ?? email}
                <button
                  type="button"
                  onClick={() => removeCc(email)}
                  className="bg-transparent border-none cursor-pointer p-0 text-[var(--fg-muted)] hover:text-[var(--fg-base)]"
                >
                  <X size={10} />
                </button>
              </span>
            ))}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setSearchTarget("cc");
                  setShowSearch(true);
                }}
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-transparent border border-dashed border-[var(--border-base)] text-[var(--fg-muted)] hover:text-[var(--fg-base)] hover:border-[var(--fg-muted)] transition-colors cursor-pointer"
              >
                <Plus size={10} />
              </button>
              {showSearch && searchTarget === "cc" && (
                <ContactSearch
                  query={searchQuery}
                  onQueryChange={setSearchQuery}
                  contacts={filteredContacts}
                  onSelect={addRecipient}
                  onClose={() => setShowSearch(false)}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Subject */}
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[var(--fg-muted)] w-8 shrink-0">
          Title
        </span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] outline-none focus:border-[var(--fg-muted)]"
          placeholder="Subject"
        />
      </div>

      {/* Body */}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={5}
        className="w-full px-3 py-2 rounded-lg border border-[var(--border-base)] bg-transparent text-sm text-[var(--fg-muted)] leading-relaxed resize-none placeholder:text-[var(--fg-disabled)] outline-none focus:border-[var(--fg-muted)]"
        placeholder="Write your message..."
      />

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
          onClick={onSend}
          className="px-4 py-1.5 rounded-full bg-[var(--fg-base)] text-[var(--bg-base)] text-xs font-medium border-none cursor-pointer hover:opacity-90 transition-opacity"
        >
          Send
        </button>
      </div>
    </div>
  );
}
