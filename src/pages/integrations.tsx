import { useState } from "react";
import type { ComponentType } from "react";
import { cn } from "@lib/utils";
import PageShell from "@/components/ui/page-shell";

import slackLogo from "../assets/logos/slack.svg";
import asanaLogo from "../assets/logos/asana.svg";
import githubLogo from "../assets/logos/github.svg";
import linearLogo from "../assets/logos/linear.svg";
import discordLogo from "../assets/logos/discord.svg";
import gmailLogo from "../assets/logos/gmail.svg";
import calendarLogo from "../assets/logos/calendar.svg";
import outlookLogo from "../assets/logos/outlook.svg";
import notionLogo from "../assets/logos/notion.svg";
import googleDriveLogo from "../assets/logos/google-drive.svg";

import {
  ZoomIcon,
  GoogleMeetIcon,
  TeamsIcon,
  SharePointIcon,
  AffinityIcon,
} from "@/icons/source-icons";

interface Integration {
  id: string;
  name: string;
  description: string;
  logo?: string;
  LogoIcon?: ComponentType<{ size?: number; className?: string }>;
  connected: boolean;
}

const PERSONAL_INTEGRATIONS: Integration[] = [
  {
    id: "gmail",
    name: "Gmail",
    description: "Connect your email for smart inbox management.",
    logo: gmailLogo,
    connected: true,
  },
  {
    id: "calendar",
    name: "Alphabase Calendar",
    description: "Sync your calendar for scheduling and reminders.",
    logo: calendarLogo,
    connected: true,
  },
  {
    id: "outlook",
    name: "Outlook",
    description: "Connect Outlook email and calendar.",
    logo: outlookLogo,
    connected: false,
  },
  {
    id: "notion",
    name: "Dokra",
    description: "Sync pages, databases, and notes from Dokra.",
    logo: notionLogo,
    connected: false,
  },
  {
    id: "google-drive",
    name: "Alphabase Drive",
    description: "Access and search your Drive files and folders.",
    logo: googleDriveLogo,
    connected: true,
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Capture meeting notes and transcripts from Zoom calls.",
    LogoIcon: ZoomIcon,
    connected: true,
  },
  {
    id: "google-meet",
    name: "Alphabase Meet",
    description: "Record and transcribe Alphabase Meet conversations.",
    LogoIcon: GoogleMeetIcon,
    connected: true,
  },
  {
    id: "github-personal",
    name: "GitHub",
    description: "Connect your personal GitHub account.",
    logo: githubLogo,
    connected: false,
  },
];

const WORKSPACE_INTEGRATIONS: Integration[] = [
  {
    id: "slack",
    name: "ChatWorks",
    description: "Get notifications and create tasks from ChatWorks messages.",
    logo: slackLogo,
    connected: true,
  },
  {
    id: "linear",
    name: "Trackline",
    description: "Sync issues, projects, and cycles automatically.",
    logo: linearLogo,
    connected: false,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Link pull requests and commits to your tasks.",
    logo: githubLogo,
    connected: true,
  },
  {
    id: "asana",
    name: "Asana",
    description: "Import and sync your Asana tasks and projects.",
    logo: asanaLogo,
    connected: false,
  },
  {
    id: "discord",
    name: "Discord",
    description: "Receive updates and manage tasks via Discord bot.",
    logo: discordLogo,
    connected: false,
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    description: "Capture meetings and messages from Teams.",
    LogoIcon: TeamsIcon,
    connected: false,
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    description: "Search and sync documents from SharePoint sites.",
    LogoIcon: SharePointIcon,
    connected: false,
  },
  {
    id: "affinity",
    name: "Affinity",
    description: "Sync relationship intelligence and deal pipeline data.",
    LogoIcon: AffinityIcon,
    connected: false,
  },
];

type Tab = "personal" | "workspace";

const TABS: { value: Tab; label: string }[] = [
  { value: "personal", label: "Personal" },
  { value: "workspace", label: "Workspace" },
];

const IntegrationsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("personal");
  const [personalIntegrations, setPersonalIntegrations] = useState(
    PERSONAL_INTEGRATIONS,
  );
  const [workspaceIntegrations, setWorkspaceIntegrations] = useState(
    WORKSPACE_INTEGRATIONS,
  );

  const toggleIntegration = (id: string) => {
    if (activeTab === "personal") {
      setPersonalIntegrations((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, connected: !item.connected } : item,
        ),
      );
    } else {
      setWorkspaceIntegrations((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, connected: !item.connected } : item,
        ),
      );
    }
  };

  const activeIntegrations =
    activeTab === "personal" ? personalIntegrations : workspaceIntegrations;

  const renderIntegrationCard = (integration: Integration) => (
    <div
      key={integration.id}
      className="flex items-center justify-between p-4 rounded-xl border border-border-subtle bg-secondary hover:bg-secondary-hover transition-colors duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="size-10 rounded-lg bg-background border border-border-subtle flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
          {integration.logo ? (
            <img
              src={integration.logo}
              alt={`${integration.name} logo`}
              className="size-6 object-contain"
            />
          ) : integration.LogoIcon ? (
            <integration.LogoIcon size={22} />
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-foreground leading-[18px]">
            {integration.name}
          </span>
          <span className="text-sm text-subtle-foreground leading-[16px]">
            {integration.description}
          </span>
        </div>
      </div>
      <button
        onClick={() => toggleIntegration(integration.id)}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          integration.connected
            ? "bg-background border border-border text-foreground hover:bg-base-hover shadow-sm"
            : "bg-primary text-primary-foreground hover:opacity-90 border border-transparent shadow-sm"
        }`}
      >
        {integration.connected ? "Configure" : "Connect"}
      </button>
    </div>
  );

  return (
    <>
      {/* Fixed top-right controls */}
      <div
        className="fixed top-[12px] z-30 flex items-center gap-1"
        style={{ right: 20 }}
      >
        <div className="rounded-[8px] p-[2px]">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "inline-flex items-center justify-center px-3 py-1 text-2xs font-medium border-none cursor-pointer rounded-md",
                activeTab === tab.value
                  ? "bg-[var(--bg-selected)] text-[var(--fg-base)]"
                  : "bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <PageShell>
        <div className="mb-6">
          <h1 className="text-3xl font-normal tracking-tight text-[var(--fg-base)]">
            {activeTab === "personal" ? "Personal" : "Workspace"}
          </h1>
        </div>

        <div className="flex flex-col gap-2 pb-12">
          {activeIntegrations.map((integration) =>
            renderIntegrationCard(integration),
          )}
        </div>
      </PageShell>
    </>
  );
};

export default IntegrationsPage;
