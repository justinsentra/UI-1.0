import { NavLink } from "react-router-dom";
import {
  Home,
  Search,
  Calendar,
  Users,
  Zap,
  FileText,
  Puzzle,
  Settings,
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SidebarLeftIcon } from "@hugeicons/core-free-icons";
import { cn } from "@lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface SidebarLinkProps {
  to: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const personalNav = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/actions", label: "Actions", icon: Zap },
  { to: "/deep-research", label: "Deep Research", icon: Search },
  { to: "/meeting-notes", label: "Meetings", icon: Calendar },
  { to: "/connections", label: "Connections", icon: Users },
];

const orgNav = [
  { to: "/artifacts", label: "Artifacts", icon: FileText },
  { to: "/integrations", label: "Integrations", icon: Puzzle },
];

const SidebarLink = ({ to, label, icon: Icon }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      end={to === "/home"}
      className={({ isActive }) =>
        cn(
          "group flex items-center gap-2.5 h-[38px] px-2.5 rounded-[7px] text-[13px] no-underline overflow-hidden transition-[padding,background-color,color] duration-200 ease-linear group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2",
          isActive
            ? "bg-sidebar-accent text-foreground"
            : "text-foreground hover:bg-sidebar-accent hover:text-foreground",
        )
      }
    >
      <Icon
        size={18}
        className="shrink-0 text-current opacity-70 transition-opacity group-hover:opacity-100"
      />
      <span className="whitespace-nowrap group-data-[collapsible=icon]:hidden">
        {label}
      </span>
    </NavLink>
  );
};

const SidebarLogoHeader = () => {
  return (
    <SidebarHeader className="px-4 pt-5 pb-6 transition-[padding] duration-200 ease-linear group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:pt-5 group-data-[collapsible=icon]:pb-4">
      <div className="flex items-center overflow-hidden">
        <div className="group/logo relative shrink-0 flex items-center justify-center group-data-[collapsible=icon]:w-full">
          <img
            src="/sentra.png"
            alt="Sentra"
            className="w-7 h-7 rounded p-0.5 transition-opacity duration-150 group-data-[collapsible=icon]:group-hover/logo:opacity-0"
          />
          <HugeiconsIcon
            icon={SidebarLeftIcon}
            className="pointer-events-none absolute inset-0 m-auto size-6 text-foreground/70 transition-opacity duration-150 opacity-0 group-data-[collapsible=icon]:group-hover/logo:opacity-100"
            strokeWidth={2}
          />
          <SidebarTrigger
            title="Toggle Sidebar"
            className="absolute inset-0 cursor-pointer bg-transparent text-transparent hover:bg-transparent hover:text-transparent [&_svg]:hidden"
          />
        </div>
        <SidebarTrigger className="ml-auto shrink-0 size-8 text-foreground/70 hover:text-foreground cursor-pointer [&_svg]:size-4 transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:pointer-events-none" />
      </div>
    </SidebarHeader>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarLogoHeader />

      <SidebarContent className="px-2.5 gap-0 overflow-x-hidden transition-[padding] duration-200 ease-linear group-data-[collapsible=icon]:px-2">
        <div className="mb-1 max-h-6 overflow-hidden transition-all duration-200 ease-linear group-data-[collapsible=icon]:max-h-0 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:mb-0">
          <span className="px-2.5 text-xs font-normal text-foreground/70 whitespace-nowrap">
            Personal
          </span>
        </div>
        {personalNav.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}

        <div className="mt-5 mb-1 max-h-6 overflow-hidden transition-all duration-200 ease-linear group-data-[collapsible=icon]:max-h-0 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:mb-0 group-data-[collapsible=icon]:mt-0">
          <span className="px-2.5 text-xs font-normal text-foreground/70 whitespace-nowrap">
            Organization
          </span>
        </div>
        {orgNav.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
      </SidebarContent>

      <SidebarFooter className="px-2.5 mb-1 space-y-0.5 transition-[padding] duration-200 ease-linear group-data-[collapsible=icon]:px-2">
        <SidebarLink to="/settings" label="Settings" icon={Settings} />
        <div className="px-1 py-3 border-t border-sidebar-border transition-[padding] duration-200 ease-linear group-data-[collapsible=icon]:px-[2px]">
          <NavLink
            to="/settings"
            className="flex items-center gap-2.5 px-2.5 py-1 no-underline overflow-hidden transition-[padding,background-color] duration-200 ease-linear group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
          >
            <UserAvatar name="Leo Hartwell" size="sm" />
            <span className="text-xs text-foreground whitespace-nowrap group-data-[collapsible=icon]:hidden">
              Leo Hartwell
            </span>
          </NavLink>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
