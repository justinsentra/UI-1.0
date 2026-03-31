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
import { cn, formatParticipants } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
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

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(`https://app.sentra.app/meetings/${id}`);
    addToast("success", "Link copied");
    setMoreOpen(false);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
        className="flex items-center gap-4 px-2 py-3 rounded-lg hover:bg-accent transition-colors no-underline"
      >
        <UserAvatar name={title} size="md" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground truncate">
            {formatParticipants(participants)}
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
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
                    "text-muted-foreground border-border bg-muted hover:bg-accent",
                  )}
                >
                  <PrivacyIcon size={12} />
                  {isPrivate ? "Private" : "Public"}
                  <ChevronDown size={10} />
                </button>
                {privacyDropdownOpen && (
                  <div className="absolute top-full mt-1 right-0 z-50 min-w-[140px] bg-background rounded-xl shadow-lg border border-border overflow-hidden">
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
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:bg-muted",
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
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:bg-muted",
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
                  className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground/50 hover:bg-accent hover:text-muted-foreground transition-colors"
                >
                  <MoreVertical size={14} />
                </button>
                {moreOpen && (
                  <div className="absolute right-0 top-full z-50 mt-1 min-w-[150px] bg-background rounded-xl shadow-lg border border-border overflow-hidden">
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      <LinkIcon size={15} className="text-muted-foreground" />
                      Copy link
                    </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      <Share2 size={15} className="text-muted-foreground" />
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
