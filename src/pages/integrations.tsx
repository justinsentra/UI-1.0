import { useState, useMemo } from "react";
import type { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

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

export interface Integration {
  id: string;
  name: string;
  description: string;
  logo?: string;
  LogoIcon?: ComponentType<{ size?: number; className?: string }>;
  connected: boolean;
  comingSoon?: boolean;
  category: string;
  overview: string;
}

export const ALL_INTEGRATIONS: Integration[] = [
  {
    id: "gmail",
    name: "Gmail",
    description: "Connect your email for smart inbox management.",
    logo: gmailLogo,
    connected: true,
    category: "Communication",
    overview:
      "Connect your Gmail account to let Sentra read, organize, and surface important emails. Get smart summaries, follow-up reminders, and quick drafting assistance — all without leaving your workflow.",
  },
  {
    id: "calendar",
    name: "Google Calendar",
    description: "Sync your calendar for scheduling and reminders.",
    logo: calendarLogo,
    connected: true,
    category: "Productivity",
    overview:
      "Sync your Google Calendar to keep Sentra aware of your schedule. Get meeting prep briefs, smart scheduling suggestions, and never miss a follow-up.",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Access and search your Drive files and folders.",
    logo: googleDriveLogo,
    connected: true,
    category: "Productivity",
    overview:
      "Connect Google Drive to search, reference, and surface relevant files across your workspace. Sentra can pull context from documents to help you work faster.",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Capture meeting notes and transcripts from Zoom calls.",
    LogoIcon: ZoomIcon,
    connected: true,
    category: "Communication",
    overview:
      "Connect Zoom to automatically capture meeting notes and transcripts. Sentra summarizes key takeaways, action items, and decisions so you can stay focused during calls.",
  },
  {
    id: "google-meet",
    name: "Google Meet",
    description: "Record and transcribe Google Meet conversations.",
    LogoIcon: GoogleMeetIcon,
    connected: true,
    category: "Communication",
    overview:
      "Connect Google Meet to record and transcribe your conversations. Get automatic meeting summaries, speaker attribution, and searchable transcripts.",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Get notifications and create tasks from Slack messages.",
    logo: slackLogo,
    connected: true,
    category: "Communication",
    overview:
      "Connect the Slack bot to communicate with Sentra directly in Slack. Ask questions, get assistance, and access Sentra without leaving your workspace.\n\n#### AI at Your Fingertips\n\nChat with Sentra through direct messages or add the bot to channels. Get instant responses, leverage your connected data, and complete tasks right from Slack.",
  },
  {
    id: "github-workspace",
    name: "GitHub",
    description: "Link pull requests and commits to your tasks.",
    logo: githubLogo,
    connected: true,
    category: "Developer Tools",
    overview:
      "Link your GitHub workspace to connect pull requests, commits, and issues to your tasks. Sentra surfaces relevant code changes and keeps your project context up to date.",
  },
  {
    id: "outlook",
    name: "Outlook",
    description: "Connect Outlook email and calendar.",
    logo: outlookLogo,
    connected: false,
    category: "Communication",
    overview:
      "Connect your Outlook account to sync emails and calendar events with Sentra. Get smart inbox management, meeting prep, and scheduling assistance.",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Sync pages, databases, and notes from Notion.",
    logo: notionLogo,
    connected: false,
    category: "Productivity",
    overview:
      "Sync your Notion workspace to let Sentra access pages, databases, and notes. Search across your knowledge base and pull context into any conversation.",
  },
  {
    id: "github-personal",
    name: "GitHub",
    description: "Connect your personal GitHub account.",
    logo: githubLogo,
    connected: false,
    category: "Developer Tools",
    overview:
      "Connect your personal GitHub account to track your repositories, pull requests, and contributions. Sentra keeps your development context in sync.",
  },
  {
    id: "linear",
    name: "Linear",
    description: "Sync issues, projects, and cycles automatically.",
    logo: linearLogo,
    connected: false,
    category: "Project Management",
    overview:
      "Connect Linear to sync issues, projects, and cycles with Sentra. Get status updates, create tasks from conversations, and keep your project management in sync.",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Import and sync your Asana tasks and projects.",
    logo: asanaLogo,
    connected: false,
    comingSoon: true,
    category: "Project Management",
    overview:
      "Import and sync your Asana tasks, projects, and timelines. Sentra surfaces relevant tasks and helps you manage deadlines across tools.",
  },
  {
    id: "discord",
    name: "Discord",
    description: "Receive updates and manage tasks via Discord bot.",
    logo: discordLogo,
    connected: false,
    comingSoon: true,
    category: "Communication",
    overview:
      "Add the Sentra bot to your Discord server to receive updates, manage tasks, and interact with your AI assistant directly in channels or DMs.",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    description: "Capture meetings and messages from Teams.",
    LogoIcon: TeamsIcon,
    connected: false,
    comingSoon: true,
    category: "Communication",
    overview:
      "Connect Microsoft Teams to capture meeting transcripts, surface important messages, and interact with Sentra from within your Teams workspace.",
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    description: "Search and sync documents from SharePoint sites.",
    LogoIcon: SharePointIcon,
    connected: false,
    comingSoon: true,
    category: "Productivity",
    overview:
      "Connect SharePoint to search and sync documents across your organization's sites. Sentra indexes your files for fast, contextual retrieval.",
  },
  {
    id: "affinity",
    name: "Affinity",
    description: "Sync relationship intelligence and deal pipeline data.",
    LogoIcon: AffinityIcon,
    connected: false,
    comingSoon: true,
    category: "CRM",
    overview:
      "Sync your Affinity CRM to bring relationship intelligence and deal pipeline data into Sentra. Surface contact history, deal status, and relationship context.",
  },
];

const IntegrationsPage = () => {
  const navigate = useNavigate();
  const [integrations, setIntegrations] = useState(ALL_INTEGRATIONS);
  const [search, setSearch] = useState("");

  const toggleIntegration = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setIntegrations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, connected: !item.connected } : item,
      ),
    );
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return integrations;
    const q = search.toLowerCase();
    return integrations.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q),
    );
  }, [integrations, search]);

  const connected = filtered.filter((i) => i.connected);
  const disconnected = filtered.filter((i) => !i.connected);

  const categorized = useMemo(() => {
    const groups: Record<string, Integration[]> = {};
    for (const item of disconnected) {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [disconnected]);

  const renderCard = (integration: Integration) => (
    <div
      key={integration.id}
      onClick={integration.comingSoon ? undefined : () => navigate(`/integrations/${integration.id}`)}
      className={`flex items-center gap-4 rounded-xl p-3 transition-colors group ${
        integration.comingSoon
          ? "opacity-50 cursor-default"
          : "cursor-pointer hover:bg-accent"
      }`}
    >
      <div className="size-10 shrink-0 rounded-lg border border-border bg-card flex items-center justify-center overflow-hidden">
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

      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <span className="text-sm font-medium text-foreground leading-tight truncate">
          {integration.name}
        </span>
        <span className="text-xs text-muted-foreground leading-snug line-clamp-1">
          {integration.description}
        </span>
      </div>

      {integration.comingSoon ? (
        <span className="shrink-0 text-xs text-muted-foreground font-medium px-3 py-1.5">
          Coming Soon
        </span>
      ) : (
        <Button
          variant={integration.connected ? "ghost" : "default"}
          size="lg"
          className="shrink-0 rounded-full"
          onClick={(e) => toggleIntegration(e, integration.id)}
        >
          {integration.connected ? "Manage" : "Connect"}
        </Button>
      )}
    </div>
  );

  return (
    <div className="px-8 pt-14 pb-16 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-normal tracking-tight text-foreground">
          Integrations
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Connect the tools you want to use with Sentra.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-10 max-w-md mx-auto">
        <InputGroup className="rounded-full h-9">
          <InputGroupAddon>
            <Search className="size-3.5" />
          </InputGroupAddon>
          <InputGroupInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search integrations..."
          />
        </InputGroup>
      </div>

      {/* Connected */}
      {connected.length > 0 && (
        <section className="mb-10 rounded-xl bg-secondary p-4">
          <div className="mb-3">
            <span className="text-sm font-medium text-foreground">
              Connected
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
            {connected.map(renderCard)}
          </div>
        </section>
      )}

      {/* Categorized disconnected */}
      {categorized.map(([category, items]) => (
        <section key={category} className="mb-10">
          <div className="mb-3">
            <span className="text-sm font-medium text-foreground">
              {category}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
            {items.map(renderCard)}
          </div>
        </section>
      ))}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-sm text-muted-foreground">
            No integrations found for "{search}"
          </p>
        </div>
      )}
    </div>
  );
};

export default IntegrationsPage;
