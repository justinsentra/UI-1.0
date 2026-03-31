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
  Waves,
} from "lucide-react";
import AppSidebar from "./app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LayoutProvider } from "@/contexts/layout-context";
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
          className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-xl shadow-lg border border-(--border) text-sm text-(--foreground)slideUp_0.2s_ease-out]"
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
  "/artifact-detail": { path: "/artifacts", icon: FileText },
  "/artifacts/reports-settings": { path: "/artifacts", icon: FileText },
  "/artifacts/radar-settings": { path: "/artifacts", icon: FileText },
  "/pre-meeting-brief": { path: "/morning-brief", icon: Home },
  "/swimlanes/": { path: "/swimlanes", icon: Waves },
};

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backNav =
    BACK_NAV[location.pathname] ??
    Object.entries(BACK_NAV).find(([prefix]) =>
      location.pathname.startsWith(prefix),
    )?.[1];

  if (!backNav) return null;

  return (
    <div className="absolute top-3 left-3 z-10">
      <button
        type="button"
        onClick={() => navigate(backNav.path)}
        className="inline-flex items-center gap-1 h-7 pl-1.5 pr-2.5 rounded-full border border-(--border) bg-(--secondary) hover:bg-secondary-hover text-[var(--muted-foreground)] hover:text-muted-foreground transition-colors duration-150 ease-out cursor-pointer"
        title="Go back"
      >
        <ChevronLeft size={15} strokeWidth={2} />
        <backNav.icon size={15} />
      </button>
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
      // If a dialog/modal is open, let the dialog handle it
      if (document.querySelector("[data-slot='dialog-overlay']")) return;
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") {
        (document.activeElement as HTMLElement).blur();
        return;
      }
      // Navigate back to the previous page in browser history
      navigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <BreadcrumbContext.Provider
      value={{ pageLabel, setPageLabel: stableSetPageLabel }}
    >
      <LayoutProvider>
        <SidebarProvider>
          <div className="flex h-screen w-full overflow-hidden relative bg-sidebar">
            <div className="drag absolute top-0 left-0 right-0 h-5 z-50" />
            <div className="fixed top-0 left-0 right-0 h-3 bg-sidebar z-30" />
            <AppSidebar />
            <SidebarInset className="overflow-hidden bg-sidebar p-3 pl-0">
              <div className="relative flex-1 min-h-0 overflow-x-hidden overflow-y-auto bg-background rounded-xl border border-border">
                <TopBar />
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
