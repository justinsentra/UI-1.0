import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Upload, Settings, MessageSquare } from "lucide-react";
import { useMeetingsStore } from "@/stores/meetings-store";
import { usePersonaStore } from "@/stores/persona-store";
import { getPersonaMeetings } from "@/data/content-resolver";
import type { Meeting } from "@/types";
import { MeetingRow } from "@components/meetings/meeting-row";
import { TagFilterBar } from "@components/meetings/tag-filter-bar";
import { ImportModal } from "@components/meetings/import-modal";
import { ShareModal } from "@components/meetings/share-modal";
import { ChatSidebar } from "@components/meetings/chat-sidebar";
import { RightSidebarProvider } from "@/components/ui/right-sidebar";
import { useRegisterSidebar, SidebarPosition } from "@/contexts/layout-context";
import { formatDateLabel, formatTimeRange } from "@/lib/date-utils";
import PageShell from "@/components/ui/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

function groupMeetingsByDate(meetingList: Meeting[]) {
  const groups: Record<string, Meeting[]> = {};
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

function isToday(dateStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const mDate = new Date(dateStr + "T00:00:00");
  mDate.setHours(0, 0, 0, 0);
  return mDate.getTime() === today.getTime();
}

function getUpcomingMeetings(meetingList: Meeting[]) {
  return meetingList.filter((m) => isToday(m.date));
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
  const persona = usePersonaStore((s) => s.persona);
  const meetings = useMemo(() => getPersonaMeetings(persona), [persona]);
  const activeTags = useMeetingsStore((s) => s.activeTags);
  const meetingVisibility = useMeetingsStore((s) => s.meetingVisibility);
  const setSelectedMeeting = useMeetingsStore((s) => s.setSelectedMeeting);
  const [importOpen, setImportOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [shareMeetingId, setShareMeetingId] = useState<string | null>(null);
  const [chatWidth, setChatWidth] = useState(380);

  useRegisterSidebar({
    position: SidebarPosition.RIGHT,
    open: chatOpen,
    width: chatWidth,
  });

  const filteredGroups = useMemo(() => {
    const filtered = meetings
      .filter((m) => !isToday(m.date))
      .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
      .filter((m) =>
        activeTags.length === 0
          ? true
          : m.tags.some((t) => activeTags.includes(t)),
      );
    return groupMeetingsByDate(filtered);
  }, [search, activeTags, meetings]);

  const upcomingMeetings = useMemo(
    () => getUpcomingMeetings(meetings),
    [meetings],
  );
  const { day, month } = getTodayLabel();

  return (
    <div className="flex overflow-hidden h-full">
    <div className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">
    <PageShell className="relative">
      {/* Top-right toolbar */}
      <div
        className="absolute top-[12px] right-5 z-10 flex items-center gap-1"
      >
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => setImportOpen(true)}
          title="Import"
        >
          <Upload size={15} />
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => navigate("/meeting-settings")}
          title="Settings"
        >
          <Settings size={15} />
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => setChatOpen(true)}
          title="Chat"
        >
          <MessageSquare size={15} />
        </Button>
      </div>

      <h1 className="text-3xl font-normal text-[var(--foreground)] tracking-tight mb-5">
        Coming up
      </h1>

      {/* Search */}
      <div className="mb-5">
        <InputGroup className="h-9 rounded-lg bg-accent border-transparent focus-within:border-border">
          <InputGroupAddon align="inline-start">
            <Search size={16} />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search meetings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </div>

      {/* Tag Filter Bar */}
      <TagFilterBar />

      {/* Upcoming Card */}
      {upcomingMeetings.length > 0 && (
        <Card className="mb-6 py-0">
          <CardContent className="flex gap-5 py-5">
            <div className="text-center shrink-0 w-[60px]">
              <p className="text-3xl font-light text-foreground leading-none">
                {day}
              </p>
              <p className="text-xs font-medium text-muted-foreground mt-0.5">
                {month}
              </p>
            </div>
            <div className="flex-1 space-y-0.5">
              {upcomingMeetings.map((m) => (
                <div
                  key={m.id}
                  className="group/upcoming flex items-center gap-3 px-2 py-2 -mx-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedMeeting(m.id);
                    navigate("/meeting-detail");
                  }}
                >
                  <div className="w-[3px] self-stretch bg-[#5eb5ef] rounded-full shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground leading-snug">
                      {m.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatTimeRange(m.time, m.endTime)}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="xs"
                    rounded="full"
                    className="opacity-0 group-hover/upcoming:opacity-100 transition-all shrink-0"
                  >
                    Join
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Meeting Groups */}
      {filteredGroups.map((group) => (
        <div key={group.date} className="mb-6">
          <p className="text-sm text-[var(--muted-foreground)] mb-3">{group.label}</p>
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
    </PageShell>
    </div>
    <RightSidebarProvider open={chatOpen} onOpenChange={setChatOpen} defaultWidth={380} minWidth={320} maxWidth={520} onWidthChange={setChatWidth}>
      <ChatSidebar isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </RightSidebarProvider>
    </div>
  );
};

export default MeetingNotesPage;
