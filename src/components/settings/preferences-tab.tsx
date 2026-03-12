import { useState } from "react";
import {
  Bot,
  Power,
  Move,
  Paintbrush,
  ChevronDown,
  Monitor,
  Sun,
  Moon,
  Users,
} from "lucide-react";
import { cn } from "@lib/utils";
import { DropdownMenu } from "@components/ui/dropdown-menu";
import { useTheme } from "@/components/ThemeProvider";
import { usePersonaStore, getAllPersonas } from "@/stores/persona-store";
import type { ReactElement } from "react";

interface PreferenceToggleItem {
  id: string;
  icon: ReactElement;
  label: string;
  description: string;
}

const toggleItems: PreferenceToggleItem[] = [
  {
    id: "auto-join",
    icon: <Bot size={18} />,
    label: "Join meeting automatically",
    description:
      "Allow the Sentra bot to join scheduled meetings and take notes",
  },
  {
    id: "open-on-login",
    icon: <Power size={18} />,
    label: "Open Sentra when you log in",
    description: "Sentra will open automatically when you start your Mac",
  },
  {
    id: "reposition",
    icon: <Move size={18} />,
    label: "Reposition Sentra when joining meetings",
    description:
      "Sentra will move to the side when you join a meeting, so you can keep taking notes while being in the meeting",
  },
];

type AppearanceMode = "light" | "dark" | "system";

const appearanceLabels: Record<
  AppearanceMode,
  { label: string; icon: ReactElement }
> = {
  light: { label: "Light", icon: <Sun size={16} /> },
  dark: { label: "Dark", icon: <Moon size={16} /> },
  system: { label: "System", icon: <Monitor size={16} /> },
};

export function PreferencesTab() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "auto-join": true,
    "open-on-login": false,
    reposition: true,
  });
  const { theme: appearance, setTheme: setAppearance } = useTheme();
  const persona = usePersonaStore((s) => s.persona);
  const setPersona = usePersonaStore((s) => s.setPersona);
  const activePersona = getAllPersonas().find((p) => p.id === persona);

  const handleToggle = (id: string) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {/* Demo Persona Section */}
      <h2 className="text-md font-semibold text-[var(--fg-base)] mb-4">
        Demo Persona
      </h2>
      <div className="flex items-center gap-4 py-4 border-b border-[var(--border-base)] mb-8">
        <div className="w-9 h-9 rounded-lg bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-muted)] shrink-0">
          <Users size={18} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-[var(--fg-base)]">
            ICP Variation
          </p>
          <p className="text-sm text-[var(--fg-muted)] mt-0.5">
            Switch between different demo personas for different ICPs
          </p>
        </div>
        <DropdownMenu
          trigger={
            <button
              type="button"
              className="flex items-center gap-2 h-9 px-3 rounded-lg border border-[var(--border-base)] bg-background text-sm font-medium text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
            >
              {activePersona?.label ?? "Select"}
              <ChevronDown size={14} className="text-[var(--fg-muted)]" />
            </button>
          }
          items={getAllPersonas().map((option) => ({
            label: option.label,
            onClick: () => setPersona(option.id),
          }))}
        />
      </div>

      {/* Meeting Bot Section */}
      <h2 className="text-md font-semibold text-[var(--fg-base)] mb-4">
        Meeting Bot
      </h2>
      <div className="divide-y divide-[var(--border-base)]">
        {toggleItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4">
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-muted)] shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 pr-4">
              <p className="text-sm font-semibold text-[var(--fg-base)]">
                {item.label}
              </p>
              <p className="text-sm text-[var(--fg-muted)] mt-0.5">
                {item.description}
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={toggles[item.id]}
              onClick={() => handleToggle(item.id)}
              className={cn(
                "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200",
                toggles[item.id]
                  ? "bg-[var(--fg-base)]"
                  : "bg-[var(--border-base)]",
              )}
            >
              <span
                className={cn(
                  "pointer-events-none inline-block size-5 rounded-full bg-background shadow-sm transform transition-transform duration-200 mt-0.5",
                  toggles[item.id] ? "translate-x-[22px]" : "translate-x-[2px]",
                )}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Appearance Section */}
      <h2 className="text-md font-semibold text-[var(--fg-base)] mt-8 mb-4">
        Appearance
      </h2>
      <div className="flex items-center gap-4 py-4 border-t border-[var(--border-base)]">
        <div className="w-9 h-9 rounded-lg bg-[var(--bg-component-hover)] flex items-center justify-center text-[var(--fg-muted)] shrink-0">
          <Paintbrush size={18} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-[var(--fg-base)]">
            Appearance
          </p>
          <p className="text-sm text-[var(--fg-muted)] mt-0.5">
            Select your interface color scheme
          </p>
        </div>
        <DropdownMenu
          trigger={
            <button
              type="button"
              className="flex items-center gap-2 h-9 px-3 rounded-lg border border-[var(--border-base)] bg-background text-sm font-medium text-[var(--fg-base)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
            >
              <span className="w-4 h-4 text-[var(--fg-muted)]">
                {appearanceLabels[appearance].icon}
              </span>
              {appearanceLabels[appearance].label}
              <ChevronDown size={14} className="text-[var(--fg-muted)]" />
            </button>
          }
          items={[
            {
              icon: <Sun size={16} />,
              label: "Light",
              onClick: () => setAppearance("light"),
            },
            {
              icon: <Moon size={16} />,
              label: "Dark",
              onClick: () => setAppearance("dark"),
            },
            {
              icon: <Monitor size={16} />,
              label: "System",
              onClick: () => setAppearance("system"),
            },
          ]}
        />
      </div>
    </div>
  );
}
