export const MOCK_CONTACTS = [
  { name: "Malcolm Ocean", email: "malcolm@softmax.ai" },
  { name: "Andrew Greener", email: "andrew@campfire.co" },
  { name: "Ashwin Gopinath", email: "ashwin@sentra.app" },
  { name: "Andrey Starenky", email: "andrey@sentra.app" },
  { name: "Kristina Beaman", email: "kristina@sentra.app" },
  { name: "David Kim", email: "david.kim@jpm.com" },
];

export const TIME_SLOTS = [
  { label: "11:00 AM", value: "11:00" },
  { label: "2:30 PM", value: "14:30" },
  { label: "4:30 PM", value: "16:30" },
  { label: "6:00 PM", value: "18:00" },
];

export function ContactSearch({
  query,
  onQueryChange,
  contacts,
  onSelect,
  onClose,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  contacts: { name: string; email: string }[];
  onSelect: (email: string) => void;
  onClose: () => void;
}) {
  return (
    <>
      <div className="fixed inset-0 z-20" onClick={onClose} />
      <div className="absolute left-0 top-full mt-1 z-30 w-[240px] bg-background rounded-lg border border-[var(--border-base)] shadow-lg overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search contacts..."
          className="w-full px-3 py-2 text-xs border-b border-[var(--border-base)] bg-transparent text-[var(--fg-base)] placeholder:text-[var(--fg-disabled)] outline-none"
          autoFocus
        />
        <div className="max-h-[160px] overflow-y-auto">
          {contacts.map((c) => (
            <button
              key={c.email}
              type="button"
              onClick={() => onSelect(c.email)}
              className="w-full px-3 py-2 text-left hover:bg-[var(--bg-subtle)] transition-colors bg-transparent border-none cursor-pointer"
            >
              <div className="text-xs text-[var(--fg-base)]">{c.name}</div>
              <div className="text-2xs text-[var(--fg-muted)]">{c.email}</div>
            </button>
          ))}
          {contacts.length === 0 && (
            <div className="px-3 py-2 text-xs text-[var(--fg-muted)]">
              No contacts found
            </div>
          )}
        </div>
      </div>
    </>
  );
}
