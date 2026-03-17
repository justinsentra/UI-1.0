import { useState } from "react";
import { cn } from "@lib/utils";
import { PreferencesTab } from "@components/settings/preferences-tab";
import { ProfileTab } from "@components/settings/profile-tab";
import { TeamTab } from "@components/settings/team-tab";
import PageShell from "@/components/ui/page-shell";

const tabs = ["Preferences", "Profile", "Team"] as const;
type Tab = (typeof tabs)[number];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Preferences");

  return (
    <PageShell>
      {/* Fixed top-right segmented tabs */}
      <div className="fixed top-[12px] right-[20px] z-30 flex items-center gap-1">
        <div className="rounded-[8px] p-[2px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "inline-flex items-center justify-center px-3 py-1 text-2xs font-medium border-none cursor-pointer rounded-md",
                activeTab === tab
                  ? "bg-[var(--bg-selected)] text-[var(--fg-base)]"
                  : "bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg-base)]",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-normal text-[var(--fg-base)] tracking-tight">
          {activeTab}
        </h1>
      </div>

      {activeTab === "Preferences" && <PreferencesTab />}
      {activeTab === "Profile" && <ProfileTab />}
      {activeTab === "Team" && <TeamTab />}
    </PageShell>
  );
};

export default SettingsPage;
