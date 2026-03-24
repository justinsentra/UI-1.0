import { useState } from "react";
import { cn } from "@lib/utils";
import { PreferencesTab } from "@components/settings/preferences-tab";
import { ProfileTab } from "@components/settings/profile-tab";
import { TeamTab } from "@components/settings/team-tab";
import { BillingTab } from "@components/settings/billing-tab";
import {
  User,
  CreditCard,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import type { ReactElement } from "react";

interface SettingsTab {
  id: string;
  label: string;
  icon: ReactElement;
  description: string;
}

const tabs: SettingsTab[] = [
  { id: "preferences", label: "Preferences", icon: <SlidersHorizontal size={15} />, description: "Configure your app settings and preferences." },
  { id: "profile", label: "Profile", icon: <User size={15} />, description: "Manage your profile information and account details." },
  { id: "billing", label: "Billing", icon: <CreditCard size={15} />, description: "Adjust your billing settings and view your history." },
  { id: "team", label: "Team", icon: <Users size={15} />, description: "View your team members and manage workspace access." },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("preferences");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="max-w-screen-2xl mx-auto pt-14 px-8 pb-16 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-foreground tracking-tight">
          Settings
        </h1>
      </div>

      <div className="grid gap-8 grid-cols-[192px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-[4.75rem] self-start">
          <div className="relative flex flex-col gap-0.5 pl-4 mt-4">
            <div className="block h-full w-0.5 bg-border absolute left-0 top-1/2 -translate-y-1/2 rounded-full" />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative py-1.5 inline-flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer",
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.id && (
                  <span className="absolute -left-4 h-full w-0.5 rounded-full bg-foreground" />
                )}
                <span className="shrink-0">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0">
          <div className="mb-6">
            <p className="text-sm flex items-center gap-2 text-foreground">
              <span className="shrink-0">{current.icon}</span>
              <span>{current.label}</span>
            </p>
            <p className="text-sm mt-1 text-muted-foreground">
              {current.description}
            </p>
          </div>

          {activeTab === "preferences" && <PreferencesTab />}
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "billing" && <BillingTab />}
          {activeTab === "team" && <TeamTab />}
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
