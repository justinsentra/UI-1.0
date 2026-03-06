import { create } from "zustand";

interface MeetingsStore {
  searchQuery: string;
  selectedMeetingId: string | null;
  activeTab: "overview" | "transcript" | "video";
  meetingVisibility: Record<string, "public" | "private">;
  activeTags: string[];
  setSearchQuery: (query: string) => void;
  setSelectedMeeting: (id: string | null) => void;
  setActiveTab: (tab: "overview" | "transcript" | "video") => void;
  toggleVisibility: (id: string) => void;
  setVisibility: (id: string, visibility: "public" | "private") => void;
  addTagFilter: (tag: string) => void;
  removeTagFilter: (tag: string) => void;
}

export const useMeetingsStore = create<MeetingsStore>((set) => ({
  searchQuery: "",
  selectedMeetingId: null,
  activeTab: "overview",
  meetingVisibility: {},
  activeTags: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedMeeting: (id) => set({ selectedMeetingId: id }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleVisibility: (id) =>
    set((s) => {
      const current = s.meetingVisibility[id] ?? "public";
      return {
        meetingVisibility: {
          ...s.meetingVisibility,
          [id]: current === "public" ? "private" : "public",
        },
      };
    }),
  setVisibility: (id, visibility) =>
    set((s) => ({
      meetingVisibility: {
        ...s.meetingVisibility,
        [id]: visibility,
      },
    })),
  addTagFilter: (tag) =>
    set((s) =>
      s.activeTags.includes(tag) ? s : { activeTags: [...s.activeTags, tag] },
    ),
  removeTagFilter: (tag) =>
    set((s) => ({ activeTags: s.activeTags.filter((t) => t !== tag) })),
}));
