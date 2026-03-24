import { useState, useRef, useEffect } from "react";
import { Share2 } from "lucide-react";
import { UserAvatar } from "@/components/user-avatar";

interface Attendee {
  name: string;
  domain: string;
  email: string;
  isMe?: boolean;
}

const attendees: Attendee[] = [
  { name: "Andrew", domain: "campfire.ai", email: "andrew@campfire.ai" },
  { name: "Cole", domain: "campfire.ai", email: "cole@campfire.ai" },
  { name: "Josh", domain: "campfire.ai", email: "josh@campfire.ai" },
  {
    name: "Leo",
    domain: "sentra.app",
    email: "leo@sentra.app",
    isMe: true,
  },
  { name: "Pavel", domain: "sentra.app", email: "pavel@sentra.app" },
];

const grouped = attendees.reduce<Record<string, Attendee[]>>((acc, a) => {
  if (!acc[a.domain]) acc[a.domain] = [];
  acc[a.domain].push(a);
  return acc;
}, {});

interface AttendeeDropdownProps {
  onClose: () => void;
}

export function AttendeeDropdown({ onClose }: AttendeeDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredAttendee, setHoveredAttendee] = useState<Attendee | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (attendee: Attendee) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredAttendee(attendee);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredAttendee(null);
    }, 150);
  };

  return (
    <div ref={ref} className="absolute top-full left-0 mt-1 z-50 flex">
      <div className="w-[260px] bg-[var(--bg-raised)] rounded-xl border border-[var(--border)] py-3 shadow-xl">
        {Object.entries(grouped).map(([domain, members]) => (
          <div key={domain}>
            <div className="px-4 py-1.5 text-xs text-[var(--muted-foreground)]">
              {domain}
            </div>
            {members.map((attendee) => (
              <div
                key={attendee.email}
                onMouseEnter={() => handleMouseEnter(attendee)}
                onMouseLeave={handleMouseLeave}
                className="flex items-center gap-3 px-4 py-2 hover:bg-[var(--accent)] transition-colors cursor-pointer"
              >
                <UserAvatar name={attendee.name} size="sm" />
                <span className="text-sm text-[var(--border)]">
                  {attendee.name}
                  {attendee.isMe && (
                    <span className="text-[var(--muted-foreground)] ml-1">(me)</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {hoveredAttendee && (
        <div
          className="w-[240px] bg-[var(--bg-raised)] rounded-xl border border-[var(--border)] p-4 shadow-xl ml-1"
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-3 mb-4">
            <UserAvatar name={hoveredAttendee.name} size="lg" />
            <div>
              <div className="text-sm font-medium text-[var(--border)]">
                {hoveredAttendee.name}
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                {hoveredAttendee.email}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg border border-[var(--border)] bg-transparent text-sm text-[var(--border)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
            >
              <Share2 size={14} />
              Share notes
            </button>
            <button
              type="button"
              className="h-9 w-9 rounded-lg border border-[var(--border)] bg-transparent flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
              title="LinkedIn"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { attendees };
