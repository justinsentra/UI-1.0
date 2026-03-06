import { useState } from "react";
import { cn } from "@lib/utils";
import { PreferencesTab } from "@components/settings/preferences-tab";
import { ProfileTab } from "@components/settings/profile-tab";
import { TeamTab } from "@components/settings/team-tab";

const tabs = ["Preferences", "Profile", "Team"] as const;
type Tab = (typeof tabs)[number];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Preferences");

  return (
    <div className="max-w-[740px] mx-auto pt-[56px] px-8">
      <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight mb-5">
        Settings
      </h1>

      {/* Underline Tabs */}
      <div className="flex gap-6 border-b border-[var(--border-base)] mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2 -mb-px bg-transparent cursor-pointer",
              activeTab === tab
                ? "border-[var(--fg-base)] text-[var(--fg-base)]"
                : "border-transparent text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Preferences" && <PreferencesTab />}
      {activeTab === "Profile" && <ProfileTab />}
      {activeTab === "Team" && <TeamTab />}
    </div>
  );
};

export default SettingsPage;
