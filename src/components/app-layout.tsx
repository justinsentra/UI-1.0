import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  PanelLeftOpen,
  PanelLeftClose,
  CheckCircle2,
  AlertCircle,
  Info,
  ChevronLeft,
  Calendar,
  Users,
  FileText,
  Home,
} from "lucide-react";
import AppSidebar from "./app-sidebar";
import { useReportsStore } from "@/stores/reports-store";
import { useUIStore } from "@/stores/ui-store";

const ToastContainer = () => {
  const toasts = useUIStore((s) => s.toasts);

  if (toasts.length === 0) return null;

  const iconMap = {
    success: <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />,
    error: <AlertCircle size={14} className="text-red-500 shrink-0" />,
    info: <Info size={14} className="text-blue-500 shrink-0" />,
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-xl shadow-lg border border-[var(--border-base)] text-sm text-[var(--fg-base)] animate-[slideUp_0.2s_ease-out]"
        >
          {iconMap[toast.type]}
          {toast.message}
        </div>
      ))}
    </div>
  );
};

interface BreadcrumbContextValue {
  pageLabel: string | null;
  setPageLabel: (label: string | null) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue>({
  pageLabel: null,
  setPageLabel: () => {},
});

export const usePageLabel = (label: string) => {
  const { setPageLabel } = useContext(BreadcrumbContext);
  useEffect(() => {
    setPageLabel(label);
    return () => setPageLabel(null);
  }, [label, setPageLabel]);
};

const BACK_NAV: Record<string, { path: string; icon: LucideIcon }> = {
  "/meeting-detail": { path: "/meeting-notes", icon: Calendar },
  "/meeting-settings": { path: "/meeting-notes", icon: Calendar },
  "/connection-detail": { path: "/connections", icon: Users },
  "/report-detail": { path: "/artifacts", icon: FileText },
  "/artifacts/reports-settings": { path: "/artifacts", icon: FileText },
  "/artifacts/radar-settings": { path: "/artifacts", icon: FileText },
  "/pre-meeting-brief": { path: "/home", icon: Home },
};

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backNav = BACK_NAV[location.pathname];

  return (
    <>
      {backNav && (
        <button
          type="button"
          onClick={() => navigate(backNav.path)}
          className="absolute left-3 top-[12px] z-10 inline-flex items-center gap-1 h-7 pl-1.5 pr-2.5 rounded-full border border-[var(--border-base)] bg-[var(--bg-component)] hover:bg-[var(--bg-component-hover)] text-[var(--fg-muted)] transition-colors duration-150 ease-out cursor-pointer"
          title="Go back"
        >
          <ChevronLeft size={15} strokeWidth={2} />
          <backNav.icon size={15} />
        </button>
      )}
    </>
  );
};

const AppLayout = () => {
  const [pageLabel, setPageLabel] = useState<string | null>(null);
  const stableSetPageLabel = useCallback(
    (label: string | null) => setPageLabel(label),
    [],
  );
  const isSidebarCollapsed = useUIStore((s) => s.isSidebarCollapsed);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const resetPanels = useReportsStore((s) => s.resetPanels);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    resetPanels();
  }, [location.pathname, resetPanels]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const backNav = BACK_NAV[location.pathname];
      if (!backNav) return;
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") {
        (document.activeElement as HTMLElement).blur();
        return;
      }
      navigate(backNav.path);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [location.pathname, navigate]);

  return (
    <BreadcrumbContext.Provider
      value={{ pageLabel, setPageLabel: stableSetPageLabel }}
    >
      <div className="flex h-screen bg-shell overflow-hidden relative">
        <div className="drag absolute top-0 left-0 right-0 h-5 z-50" />
        <div
          className="pt-5 transition-all duration-300 ease-in-out overflow-hidden shrink-0 bg-[var(--bg-subtle)]"
          style={{ width: isSidebarCollapsed ? 0 : 220 }}
        >
          <AppSidebar />
        </div>
        {/* Sidebar toggle — always visible, hugs the sidebar's right edge */}
        <button
          type="button"
          onClick={toggleSidebar}
          className="absolute top-[30px] z-[51] p-1 text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-all duration-300 ease-in-out bg-transparent border-none cursor-pointer rounded-md hover:bg-[var(--bg-component-hover)]"
          style={{ left: isSidebarCollapsed ? 8 : 224 }}
          title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isSidebarCollapsed ? (
            <PanelLeftOpen size={16} />
          ) : (
            <PanelLeftClose size={16} />
          )}
        </button>
        <div className="flex-1 flex min-w-0 overflow-hidden">
          <main className="flex-1 bg-background min-h-0 min-w-0 overflow-hidden relative">
            <TopBar />
            <div className="h-full overflow-x-hidden overflow-y-auto pt-5">
              <Outlet />
            </div>
          </main>
        </div>
        <ToastContainer />
      </div>
    </BreadcrumbContext.Provider>
  );
};

export default AppLayout;
