import { NavLink } from "react-router-dom";
import {
  Home,
  Search,
  Calendar,
  Users,
  CheckCircle2,
  FileText,
  Puzzle,
  Settings,
  Sparkles,
  PanelLeftClose,
} from "lucide-react";
import { cn } from "@lib/utils";
import { useUIStore } from "@/stores/ui-store";

const personalNav = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/deep-research", label: "Deep Research", icon: Search },
  { to: "/meeting-notes", label: "Meetings", icon: Calendar },
  { to: "/connections", label: "Connections", icon: Users },
  { to: "/commitments", label: "Commitments", icon: CheckCircle2 },
];

const orgNav = [
  { to: "/artifacts", label: "Artifacts", icon: FileText },
  { to: "/integrations", label: "Integrations", icon: Puzzle },
];

function SidebarLink({
  to,
  label,
  icon: Icon,
}: {
  to: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/home"}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-2.5 h-[34px] px-2.5 rounded-[7px] text-sm transition-colors no-underline",
          isActive
            ? "bg-black/[0.06] font-medium text-[var(--fg-base)]"
            : "text-[var(--fg-base)] hover:bg-[var(--bg-component-hover)]",
        )
      }
    >
      <Icon size={16} className="text-[var(--fg-muted)] shrink-0" />
      {label}
    </NavLink>
  );
}

const AppSidebar = () => {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <aside className="flex flex-col w-[220px] min-w-[220px] h-full bg-[var(--bg-subtle)] select-none">
      {/* Logo + Collapse */}
      <div className="flex items-center justify-between px-4 pt-5 pb-4">
        <div className="flex items-center gap-2.5">
          <img src="/sentra.png" alt="Sentra" className="w-7 h-7 rounded" />
          <span className="text-md font-semibold text-[var(--fg-base)]">
            Sentra
          </span>
        </div>
        <button
          type="button"
          onClick={toggleSidebar}
          className="p-1 text-[var(--fg-disabled)] hover:text-[var(--fg-muted)] transition-colors bg-transparent border-none cursor-pointer rounded-md hover:bg-[var(--bg-component-hover)]"
          title="Collapse sidebar"
        >
          <PanelLeftClose size={16} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2.5 overflow-y-auto">
        <div className="mb-1">
          <span className="px-2.5 text-2xs font-medium text-[var(--fg-muted)]">
            Personal
          </span>
        </div>
        {personalNav.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}

        <div className="mt-5 mb-1">
          <span className="px-2.5 text-2xs font-medium text-[var(--fg-muted)]">
            Organization
          </span>
        </div>
        {orgNav.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-2.5 mb-1 space-y-0.5">
        <button
          type="button"
          onClick={() => window.ipcRenderer.send("open-sage-window")}
          className="flex items-center gap-2.5 h-[34px] px-2.5 rounded-[7px] text-sm transition-colors text-[var(--fg-base)] hover:bg-[var(--bg-component-hover)] w-full border-none bg-transparent cursor-pointer"
        >
          <Sparkles size={16} className="text-[var(--fg-muted)] shrink-0" />
          Sage
        </button>
        <SidebarLink to="/settings" label="Settings" icon={Settings} />
      </div>

      {/* User */}
      <div className="px-3 py-3 border-t border-[var(--border-subtle)]">
        <NavLink
          to="/settings"
          className="flex items-center gap-2.5 px-1 py-1 rounded-[7px] transition-colors hover:bg-[var(--bg-component-hover)] no-underline"
        >
          <div className="w-7 h-7 rounded-full bg-[var(--fg-subtle)] flex items-center justify-center text-2xs font-medium text-white">
            JC
          </div>
          <span className="text-sm font-medium text-[var(--fg-base)]">
            Justin Cheng
          </span>
        </NavLink>
      </div>
    </aside>
  );
};

export default AppSidebar;
