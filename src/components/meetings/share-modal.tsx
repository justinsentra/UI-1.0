import { useState, useEffect } from "react";
import { X, UserPlus, Copy } from "lucide-react";
import { useMeetingsStore } from "@/stores/meetings-store";
import { useUIStore } from "@/stores/ui-store";
import { meetings } from "@/data/mock-meetings";
import { UserAvatar } from "@/components/user-avatar";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  meetingId: string | null;
}

const DEFAULT_PEOPLE = [
  { name: "Tracy Kim", email: "tracy.kim@jpmorgan.com" },
  { name: "Raj Sundaram", email: "raj@sentra.app" },
];

export function ShareModal({ isOpen, onClose, meetingId }: ShareModalProps) {
  const [emailInput, setEmailInput] = useState("");
  const [addedEmails, setAddedEmails] = useState<string[]>([]);
  const meetingVisibility = useMeetingsStore((s) => s.meetingVisibility);
  const setVisibility = useMeetingsStore((s) => s.setVisibility);
  const addToast = useUIStore((s) => s.addToast);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !meetingId) return null;

  const meeting = meetings.find((m) => m.id === meetingId);
  const effectivePrivacy =
    meetingVisibility[meetingId] ?? meeting?.privacy ?? "public";
  const isPrivate = effectivePrivacy === "private";
  const shareLink = `https://www.sentra.app/meeting/${meetingId}`;

  const allPeople = [
    ...DEFAULT_PEOPLE,
    ...addedEmails.map((email) => ({ name: email.split("@")[0], email })),
  ];

  const handleAddPerson = () => {
    const trimmed = emailInput.trim();
    if (
      trimmed &&
      !addedEmails.includes(trimmed) &&
      !DEFAULT_PEOPLE.some((p) => p.email === trimmed)
    ) {
      setAddedEmails([...addedEmails, trimmed]);
      setEmailInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddPerson();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    addToast("success", "Link copied");
  };

  const handleClose = () => {
    setEmailInput("");
    setAddedEmails([]);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-background rounded-2xl shadow-2xl w-full max-w-[480px] flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-0">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-md font-semibold text-[var(--foreground)]">
              Share "{meeting?.title}"
            </h2>
            <button
              type="button"
              onClick={handleClose}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors -mt-0.5 -mr-1"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Add people and manage access to this meeting.
          </p>

          {/* Add people input */}
          <div className="relative mb-5">
            <UserPlus
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
            />
            <input
              type="text"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add people..."
              className="w-full h-10 pl-9 pr-3 rounded-lg border border-[var(--border)] bg-background text-sm placeholder:text-[var(--muted-foreground)] focus:border-[var(--muted-foreground)] focus:outline-none"
            />
          </div>
        </div>

        {/* People with access */}
        <div className="px-6 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-[var(--foreground)]">
              People with access
            </p>
            <span className="text-xs text-[var(--muted-foreground)]">
              {allPeople.length}
            </span>
          </div>
          <div className="space-y-1 mb-2">
            {allPeople.map((person) => (
              <div
                key={person.email}
                className="flex items-center gap-3 py-2.5"
              >
                <UserAvatar name={person.name} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--foreground)] leading-tight">
                    {person.name}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {person.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 pt-0">
          {/* Privacy row */}
          <div className="border-t border-[var(--border)] pt-4 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {isPrivate ? "Private" : "Public"}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  {isPrivate
                    ? "Only you can view"
                    : "Attendees and admins can view"}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setVisibility(meetingId, isPrivate ? "public" : "private")
                }
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors"
              >
                {isPrivate ? "Make public" : "Make private"}
              </button>
            </div>
          </div>

          {/* Share link */}
          <div className="border-t border-[var(--border)] pt-3">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-9 px-3 rounded-lg border border-[var(--border)] bg-[var(--muted)] flex items-center overflow-hidden">
                <span className="text-sm text-[var(--muted-foreground)] truncate">
                  {shareLink}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyLink}
                className="h-9 w-9 shrink-0 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
              >
                <Copy size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
