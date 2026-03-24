import { useState } from "react";
import {
  Bot,
  Power,
  Move,
  Paintbrush,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import { Switch } from "@components/ui/switch";
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
    icon: <Bot size={16} />,
    label: "Join meeting automatically",
    description:
      "Allow the Sentra bot to join scheduled meetings and take notes",
  },
  {
    id: "open-on-login",
    icon: <Power size={16} />,
    label: "Open Sentra when you log in",
    description: "Sentra will open automatically when you start your Mac",
  },
  {
    id: "reposition",
    icon: <Move size={16} />,
    label: "Reposition Sentra when joining meetings",
    description:
      "Sentra will move to the side when you join a meeting, so you can keep taking notes while being in the meeting",
  },
];

type AppearanceMode = "light" | "dark" | "system";

const appearanceLabels: Record<AppearanceMode, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
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
      <section className="mb-10">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-md font-semibold text-foreground mb-0.5">
              Demo Persona
            </h2>
            <p className="text-sm text-muted-foreground max-w-[420px]">
              Switch between different demo personas for different ICPs
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  className="flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-background text-sm font-medium text-foreground hover:border-muted-foreground/50 transition-colors cursor-pointer"
                >
                  {activePersona?.label ?? "Select"}
                  <ChevronDown size={14} className="text-muted-foreground" />
                </button>
              }
            />
            <DropdownMenuContent>
              {getAllPersonas().map((option) => (
                <DropdownMenuItem
                  key={option.id}
                  onClick={() => setPersona(option.id)}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <div className="border-t border-border mb-10" />

      {/* Meeting Bot Section */}
      <section className="mb-10">
        <h2 className="text-md font-semibold text-foreground mb-5">
          Meeting Bot
        </h2>
        <div className="space-y-5">
          {toggleItems.map((item) => (
            <div key={item.id} className="flex items-start justify-between">
              <div className="flex items-center gap-3 flex-1 pr-4">
                <span className="text-muted-foreground shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
              <Switch
                checked={toggles[item.id]}
                onCheckedChange={() => handleToggle(item.id)}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border mb-10" />

      {/* Appearance Section */}
      <section>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-muted-foreground shrink-0">
              <Paintbrush size={16} />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground mb-0.5">
                Appearance
              </p>
              <p className="text-xs text-muted-foreground/60">
                Select your interface color scheme
              </p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type="button"
                  className="flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-background text-sm font-medium text-foreground hover:border-muted-foreground/50 transition-colors cursor-pointer"
                >
                  {appearanceLabels[appearance]}
                  <ChevronDown size={14} className="text-muted-foreground" />
                </button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setAppearance("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAppearance("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAppearance("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </div>
  );
}
