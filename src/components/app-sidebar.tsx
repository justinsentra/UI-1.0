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
} from "lucide-react";
import { cn } from "@lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

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
            ? "bg-[var(--bg-component-hover)] font-medium text-(--fg-base)"
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
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="px-4 pt-5 pb-4">
        <div className="flex items-center gap-2.5">
          <img src="/sentra.png" alt="Sentra" className="w-5 h-5 rounded p-0.5" />
          <span className="text-md font-semibold text-[var(--fg-base)]">
            Sentra
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2.5 gap-0">
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
      </SidebarContent>

      <SidebarFooter className="px-2.5 mb-1 space-y-0.5">
        <SidebarLink to="/settings" label="Settings" icon={Settings} />
        <div className="px-1 py-3 border-t border-[var(--border-subtle)]">
          <NavLink
            to="/settings"
            className="flex items-center gap-2.5 px-1 py-1 rounded-[7px] transition-colors hover:bg-[var(--bg-component-hover)] no-underline"
          >
            <div className="w-7 h-7 rounded-full bg-[var(--fg-subtle)] flex items-center justify-center text-2xs font-medium text-white">
              LH
            </div>
            <span className="text-sm font-medium text-[var(--fg-base)]">
              Leo Hartwell
            </span>
          </NavLink>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
