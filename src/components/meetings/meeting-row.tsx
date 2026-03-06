import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Lock,
  MoreVertical,
  Link as LinkIcon,
  Share2,
  ChevronDown,
} from "lucide-react";
import {
  cn,
  getInitials,
  getAvatarColor,
  formatParticipants,
} from "@lib/utils";
import { useMeetingsStore } from "@/stores/meetings-store";
import { useUIStore } from "@/stores/ui-store";

interface MeetingRowProps {
  id: string;
  title: string;
  participants: string[];
  time: string;
  privacy: "public" | "private";
  onShare?: () => void;
}

export function MeetingRow({
  id,
  title,
  participants,
  time,
  privacy,
  onShare,
}: MeetingRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [privacyDropdownOpen, setPrivacyDropdownOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);
  const setVisibility = useMeetingsStore((s) => s.setVisibility);
  const setSelectedMeeting = useMeetingsStore((s) => s.setSelectedMeeting);
  const meetingVisibility = useMeetingsStore((s) => s.meetingVisibility);
  const addToast = useUIStore((s) => s.addToast);

  const effectivePrivacy = meetingVisibility[id] ?? privacy;
  const isPrivate = effectivePrivacy === "private";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rowRef.current && !rowRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
        setPrivacyDropdownOpen(false);
      }
    }
    if (moreOpen || privacyDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen, privacyDropdownOpen]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://app.sentra.app/meetings/${id}`);
    addToast("success", "Link copied");
    setMoreOpen(false);
  };

  const handleShare = () => {
    onShare?.();
    setMoreOpen(false);
  };

  const PrivacyIcon = isPrivate ? Lock : Users;

  const formatTime = (t: string) => {
    const match = t.match(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i);
    if (!match) return <span>{t}</span>;
    return (
      <span>
        {match[1]}
        <span className="text-2xs ml-0.5">{match[2]}</span>
      </span>
    );
  };

  return (
    <div
      ref={rowRef}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!moreOpen) {
          setIsHovered(false);
          setPrivacyDropdownOpen(false);
        }
      }}
    >
      <Link
        to={`/meeting-detail`}
        onClick={() => setSelectedMeeting(id)}
        className="flex items-center gap-4 px-2 py-3 rounded-lg hover:bg-[var(--bg-component-hover)] transition-colors no-underline"
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0"
          style={{ backgroundColor: getAvatarColor(title) }}
        >
          {getInitials(title)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[var(--fg-base)]">{title}</p>
          <p className="text-xs text-[var(--fg-muted)] truncate">
            {formatParticipants(participants)}
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-[var(--fg-muted)] shrink-0">
          {isHovered || moreOpen ? (
            <div className="flex items-center gap-1">
              {/* Privacy pill with dropdown */}
              <div ref={privacyRef} className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPrivacyDropdownOpen((prev) => !prev);
                  }}
                  className={cn(
                    "h-7 px-2 rounded-full flex items-center gap-1 text-xs font-medium transition-colors border",
                    "text-[var(--fg-muted)] border-[var(--border-base)] bg-[var(--bg-subtle)] hover:bg-[var(--bg-component-hover)]",
                  )}
                >
                  <PrivacyIcon size={12} />
                  {isPrivate ? "Private" : "Public"}
                  <ChevronDown size={10} />
                </button>
                {privacyDropdownOpen && (
                  <div className="absolute top-full mt-1 right-0 z-50 min-w-[140px] bg-background rounded-xl shadow-lg border border-[var(--border-base)] overflow-hidden">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setVisibility(id, "public");
                        setPrivacyDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors",
                        !isPrivate
                          ? "text-[var(--fg-base)] bg-[var(--bg-subtle)]"
                          : "text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)]",
                      )}
                    >
                      <Users size={14} />
                      Public
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setVisibility(id, "private");
                        setPrivacyDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors",
                        isPrivate
                          ? "text-[var(--fg-base)] bg-[var(--bg-subtle)]"
                          : "text-[var(--fg-muted)] hover:bg-[var(--bg-subtle)]",
                      )}
                    >
                      <Lock size={14} />
                      Private
                    </button>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMoreOpen((prev) => !prev);
                  }}
                  className="w-7 h-7 rounded-md flex items-center justify-center text-[var(--fg-disabled)] hover:bg-[var(--bg-component-hover)] hover:text-[var(--fg-muted)] transition-colors"
                >
                  <MoreVertical size={14} />
                </button>
                {moreOpen && (
                  <div className="absolute right-0 top-full z-50 mt-1 min-w-[150px] bg-background rounded-xl shadow-lg border border-[var(--border-base)] overflow-hidden">
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors"
                    >
                      <LinkIcon size={15} className="text-[var(--fg-muted)]" />
                      Copy link
                    </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors"
                    >
                      <Share2 size={15} className="text-[var(--fg-muted)]" />
                      Share
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <PrivacyIcon size={14} />
              <span className="text-sm">{formatTime(time)}</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
