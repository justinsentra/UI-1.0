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
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutProvider,
  SidebarPosition,
  useLayout,
} from "@/contexts/layout-context";
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
    <div className="fixed bottom-5 right-5 z-100 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-xl shadow-lg border border-(--border-base) text-sm text-(--fg-base)slideUp_0.2s_ease-out]"
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
  const { getOpenSidebar } = useLayout();
  const backNav = BACK_NAV[location.pathname];

  const leftSecondary = getOpenSidebar(SidebarPosition.LEFT_SECONDARY);
  const hasLeftSecondary = !!leftSecondary;

  return (
    <div
      className="absolute top-3 z-10 flex items-center gap-2"
      style={{
        left: hasLeftSecondary
          ? "calc(var(--left-secondary-width, 220px) + 12px)"
          : 12,
      }}
    >
      <SidebarTrigger className="shrink-0 text-disabled-foreground hover:text-muted-foreground" />
      {backNav && (
        <button
          type="button"
          onClick={() => navigate(backNav.path)}
          className="inline-flex items-center gap-1 h-7 pl-1.5 pr-2.5 rounded-full border border-(--border-base) bg-(--bg-component) hover:bg-secondary-hover text-muted-foreground transition-colors duration-150 ease-out cursor-pointer"
          title="Go back"
        >
          <ChevronLeft size={15} strokeWidth={2} />
          <backNav.icon size={15} />
        </button>
      )}
    </div>
  );
};

const AppLayout = () => {
  const [pageLabel, setPageLabel] = useState<string | null>(null);
  const stableSetPageLabel = useCallback(
    (label: string | null) => setPageLabel(label),
    [],
  );
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
      <LayoutProvider>
        <SidebarProvider>
          <div className="flex h-screen w-full overflow-hidden relative">
            <div className="drag absolute top-0 left-0 right-0 h-5 z-50" />
            <AppSidebar />
            <SidebarInset className="relative overflow-hidden">
              <TopBar />
              <div className="h-full overflow-x-hidden overflow-y-auto">
                <Outlet />
              </div>
            </SidebarInset>
          </div>
          <ToastContainer />
        </SidebarProvider>
      </LayoutProvider>
    </BreadcrumbContext.Provider>
  );
};

export default AppLayout;
