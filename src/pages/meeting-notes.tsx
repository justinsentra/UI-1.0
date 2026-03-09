import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Upload, Settings, MessageSquare } from "lucide-react";
import { useMeetingsStore } from "@/stores/meetings-store";
import { meetings } from "@/data/mock-meetings";
import { MeetingRow } from "@components/meetings/meeting-row";
import { TagFilterBar } from "@components/meetings/tag-filter-bar";
import { ImportModal } from "@components/meetings/import-modal";
import { ShareModal } from "@components/meetings/share-modal";
import { ChatSidebar } from "@components/meetings/chat-sidebar";
import { formatDateLabel, formatTimeRange } from "@/lib/date-utils";

function groupMeetingsByDate(meetingList: typeof meetings) {
  const groups: Record<string, typeof meetings> = {};
  for (const m of meetingList) {
    if (!groups[m.date]) groups[m.date] = [];
    groups[m.date].push(m);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, items]) => ({
      label: formatDateLabel(date),
      date,
      meetings: items,
    }));
}

function getUpcomingMeetings(meetingList: typeof meetings) {
  const today = new Date().toISOString().split("T")[0];
  return meetingList.filter((m) => m.date === today);
}

function getTodayLabel() {
  const d = new Date();
  const day = d.getDate();
  const month = d.toLocaleDateString("en-US", { month: "long" });
  return { day, month };
}

const MeetingNotesPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const activeTags = useMeetingsStore((s) => s.activeTags);
  const meetingVisibility = useMeetingsStore((s) => s.meetingVisibility);
  const setSelectedMeeting = useMeetingsStore((s) => s.setSelectedMeeting);
  const [importOpen, setImportOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [shareMeetingId, setShareMeetingId] = useState<string | null>(null);

  const filteredGroups = useMemo(() => {
    const filtered = meetings
      .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
      .filter((m) =>
        activeTags.length === 0
          ? true
          : m.tags.some((t) => activeTags.includes(t)),
      );
    return groupMeetingsByDate(filtered);
  }, [search, activeTags]);

  const upcomingMeetings = useMemo(() => getUpcomingMeetings(meetings), []);
  const { day, month } = getTodayLabel();

  return (
    <div className="max-w-[740px] mx-auto px-8 pt-[56px] relative min-h-screen">
      {/* Top-right toolbar */}
      <div
        className="fixed top-[12px] z-10 flex items-center gap-1 transition-all duration-300"
        style={{ right: chatOpen ? 396 : 20 }}
      >
        <button
          onClick={() => setImportOpen(true)}
          className="h-7 w-7 rounded-md flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)] transition-colors bg-transparent border-none cursor-pointer"
          title="Import"
        >
          <Upload size={15} />
        </button>
        <button
          onClick={() => navigate("/meeting-settings")}
          className="h-7 w-7 rounded-md flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)] transition-colors bg-transparent border-none cursor-pointer"
          title="Settings"
        >
          <Settings size={15} />
        </button>
        <button
          onClick={() => setChatOpen(true)}
          className="h-7 w-7 rounded-md flex items-center justify-center text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] hover:bg-[var(--bg-component-hover)] transition-colors bg-transparent border-none cursor-pointer"
          title="Chat"
        >
          <MessageSquare size={15} />
        </button>
      </div>

      <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight mb-5">
        Coming up
      </h1>

      {/* Search */}
      <div className="mb-5">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--fg-disabled)]"
          />
          <input
            type="text"
            placeholder="Search meetings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-10 pr-4 rounded-lg border border-[var(--border-base)] bg-background text-sm placeholder:text-[var(--fg-disabled)]"
          />
        </div>
      </div>

      {/* Tag Filter Bar */}
      <TagFilterBar />

      {/* Upcoming Card */}
      {upcomingMeetings.length > 0 && (
        <div className="bg-background rounded-xl border border-[var(--border-base)] p-5 mb-6">
          <div className="flex gap-5">
            <div className="text-center shrink-0 w-[60px]">
              <p className="text-3xl font-light text-[var(--fg-base)] leading-none">
                {day}
              </p>
              <p className="text-xs font-medium text-[var(--fg-muted)] mt-0.5">
                {month}
              </p>
            </div>
            <div className="flex-1 space-y-0.5">
              {upcomingMeetings.map((m) => (
                <div
                  key={m.id}
                  className="group/upcoming flex items-center gap-3 px-2 py-2 -mx-2 rounded-lg hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedMeeting(m.id);
                    navigate("/meeting-detail");
                  }}
                >
                  <div className="w-[3px] self-stretch bg-[#5eb5ef] rounded-full shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--fg-base)] leading-snug">
                      {m.title}
                    </p>
                    <p className="text-xs text-[var(--fg-muted)]">
                      {formatTimeRange(m.time, m.endTime)}
                    </p>
                  </div>
                  <span className="opacity-0 group-hover/upcoming:opacity-100 transition-all text-xs font-medium text-[var(--fg-muted)] bg-[var(--bg-base)] border border-[var(--border-base)] px-3 py-1 rounded-full shrink-0 hover:text-[var(--fg-base)] hover:border-[var(--fg-disabled)] hover:shadow-sm cursor-pointer">
                    Join
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Meeting Groups */}
      {filteredGroups.map((group) => (
        <div key={group.date} className="mb-6">
          <p className="text-sm text-[var(--fg-muted)] mb-3">{group.label}</p>
          <div className="space-y-1">
            {group.meetings.map((m) => (
              <MeetingRow
                key={m.id}
                id={m.id}
                title={m.title}
                participants={m.participants}
                time={m.time}
                privacy={meetingVisibility[m.id] ?? m.privacy}
                onShare={() => setShareMeetingId(m.id)}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Modals & Panels */}
      <ImportModal isOpen={importOpen} onClose={() => setImportOpen(false)} />
      <ShareModal
        isOpen={shareMeetingId !== null}
        onClose={() => setShareMeetingId(null)}
        meetingId={shareMeetingId}
      />
      <ChatSidebar isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default MeetingNotesPage;
