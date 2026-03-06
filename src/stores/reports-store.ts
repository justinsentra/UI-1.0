import { create } from "zustand";
import type { ChatMessage, ReportComment } from "@/types";

interface ReportsStore {
  viewMode: "by-type" | "by-date";
  expandedCategories: Set<string>;
  isSidebarOpen: boolean;
  sidebarTab: "sources" | "ask-sentra";
  comments: ReportComment[];
  chatMessages: ChatMessage[];
  setViewMode: (mode: "by-type" | "by-date") => void;
  toggleCategory: (category: string) => void;
  setSidebarOpen: (open: boolean) => void;
  setSidebarTab: (tab: "sources" | "ask-sentra") => void;
  addComment: (comment: ReportComment) => void;
  removeComment: (id: string) => void;
  addChatMessage: (message: ChatMessage) => void;

  // Artifacts tab state
  activeTab: "reports" | "radar";
  setActiveTab: (tab: "reports" | "radar") => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Artifacts chat panel
  isArtifactsChatOpen: boolean;
  setArtifactsChatOpen: (open: boolean) => void;
  artifactsChatMessages: ChatMessage[];
  addArtifactsChatMessage: (message: ChatMessage) => void;

  // Reports settings
  reportSchedule: { frequency: string; dayOfWeek: string; time: string };
  setReportSchedule: (
    schedule: Partial<{ frequency: string; dayOfWeek: string; time: string }>,
  ) => void;
  reportDeliverability: { email: boolean; slack: boolean };
  setReportDeliverability: (
    d: Partial<{ email: boolean; slack: boolean }>,
  ) => void;
  reportPreferences: { selectedReports: string[]; customInstructions: string };
  setReportPreferences: (
    p: Partial<{ selectedReports: string[]; customInstructions: string }>,
  ) => void;

  // Radar settings
  isRadarCreateOpen: boolean;
  setRadarCreateOpen: (open: boolean) => void;
  isRadarDetailOpen: boolean;
  setRadarDetailOpen: (open: boolean) => void;
  selectedRadarId: string | null;
  setSelectedRadarId: (id: string | null) => void;
  radarDeliverability: { email: boolean; slack: boolean };
  setRadarDeliverability: (
    d: Partial<{ email: boolean; slack: boolean }>,
  ) => void;

  resetPanels: () => void;
}

export const useReportsStore = create<ReportsStore>((set) => ({
  viewMode: "by-type",
  expandedCategories: new Set<string>(),
  isSidebarOpen: false,
  sidebarTab: "sources",
  comments: [],
  chatMessages: [],
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleCategory: (category) =>
    set((s) => {
      const next = new Set(s.expandedCategories);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return { expandedCategories: next };
    }),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  setSidebarTab: (tab) => set({ sidebarTab: tab }),
  addComment: (comment) => set((s) => ({ comments: [...s.comments, comment] })),
  removeComment: (id) =>
    set((s) => ({ comments: s.comments.filter((c) => c.id !== id) })),
  addChatMessage: (message) =>
    set((s) => ({ chatMessages: [...s.chatMessages, message] })),

  // Artifacts tab state
  activeTab: "reports",
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Search
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Artifacts chat panel
  isArtifactsChatOpen: false,
  setArtifactsChatOpen: (open) => set({ isArtifactsChatOpen: open }),
  artifactsChatMessages: [],
  addArtifactsChatMessage: (message) =>
    set((s) => ({
      artifactsChatMessages: [...s.artifactsChatMessages, message],
    })),

  // Reports settings
  reportSchedule: { frequency: "Weekly", dayOfWeek: "Friday", time: "6:00 PM" },
  setReportSchedule: (schedule) =>
    set((s) => ({ reportSchedule: { ...s.reportSchedule, ...schedule } })),
  reportDeliverability: { email: true, slack: false },
  setReportDeliverability: (d) =>
    set((s) => ({ reportDeliverability: { ...s.reportDeliverability, ...d } })),
  reportPreferences: { selectedReports: ["pref-1"], customInstructions: "" },
  setReportPreferences: (p) =>
    set((s) => ({ reportPreferences: { ...s.reportPreferences, ...p } })),

  // Radar settings
  isRadarCreateOpen: false,
  setRadarCreateOpen: (open) => set({ isRadarCreateOpen: open }),
  isRadarDetailOpen: false,
  setRadarDetailOpen: (open) => set({ isRadarDetailOpen: open }),
  selectedRadarId: null,
  setSelectedRadarId: (id) => set({ selectedRadarId: id }),
  radarDeliverability: { email: true, slack: false },
  setRadarDeliverability: (d) =>
    set((s) => ({ radarDeliverability: { ...s.radarDeliverability, ...d } })),

  resetPanels: () =>
    set({
      isSidebarOpen: false,
      sidebarTab: "sources",
      isArtifactsChatOpen: false,
      isRadarCreateOpen: false,
      isRadarDetailOpen: false,
      selectedRadarId: null,
    }),
}));
