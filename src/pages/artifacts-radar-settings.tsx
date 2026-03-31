import { useState } from "react";
import { ChevronRight, Plus } from "lucide-react";
import { cn } from "@lib/utils";
import { usePageLabel } from "@/components/app-layout";
import { useReportsStore } from "@/stores/reports-store";
import { DeliverabilitySection } from "@components/artifacts/deliverability-section";
import { RightPanel } from "@components/panels/right-panel";
import { activeRadars, defaultRadarOptions } from "@/data/mock-reports";
import PageShell from "@/components/ui/page-shell";

export default function ArtifactsRadarSettings() {
  usePageLabel("Radar Settings");

  const {
    isRadarCreateOpen,
    setRadarCreateOpen,
    isRadarDetailOpen,
    setRadarDetailOpen,
    selectedRadarId,
    setSelectedRadarId,
    radarDeliverability,
    setRadarDeliverability,
  } = useReportsStore();

  const [isActiveRadarsExpanded, setIsActiveRadarsExpanded] = useState(true);

  // Create Radar panel state
  const [createName, setCreateName] = useState("");
  const [createPrompt, setCreatePrompt] = useState("");

  // Detail panel state
  const [detailName, setDetailName] = useState("");
  const [detailPrompt, setDetailPrompt] = useState("");

  const selectedRadar = activeRadars.find((r) => r.id === selectedRadarId);

  const handleOpenCreate = () => {
    setRadarDetailOpen(false);
    setSelectedRadarId(null);
    setCreateName("");
    setCreatePrompt("");
    setRadarCreateOpen(true);
  };

  const handleOpenDetail = (radarId: string) => {
    const radar = activeRadars.find((r) => r.id === radarId);
    if (!radar) return;
    setRadarCreateOpen(false);
    setDetailName(radar.name);
    setDetailPrompt(radar.prompt);
    setSelectedRadarId(radarId);
    setRadarDetailOpen(true);
  };

  const handleQuickStart = (option: {
    id: string;
    label: string;
    description: string;
  }) => {
    setCreateName(option.label);
    setCreatePrompt(option.description);
  };

  const handleSaveCreate = () => {
    setRadarCreateOpen(false);
  };

  const handleSaveDetail = () => {
    setRadarDetailOpen(false);
    setSelectedRadarId(null);
  };

  const handleCloseCreate = () => {
    setRadarCreateOpen(false);
  };

  const handleCloseDetail = () => {
    setRadarDetailOpen(false);
    setSelectedRadarId(null);
  };

  return (
    <PageShell>
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-normal text-[var(--foreground)] tracking-tight">
          Radar Settings
        </h1>
        <button
          type="button"
          onClick={handleOpenCreate}
          className="bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border-none cursor-pointer hover:opacity-90 transition-opacity"
        >
          <Plus size={14} />
          Create Radar
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--muted-foreground)] mb-5">
        Radar monitors specific topics daily and alerts you to important
        changes. Create custom radars to track what matters most.
      </p>

      {/* Active Radars Section */}
      <div>
        <button
          type="button"
          onClick={() => setIsActiveRadarsExpanded((prev) => !prev)}
          className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 mb-3"
        >
          <ChevronRight
            size={16}
            className={cn(
              "text-[var(--muted-foreground)] transition-transform",
              isActiveRadarsExpanded && "rotate-90",
            )}
          />
          <h2 className="text-md font-semibold text-[var(--foreground)]">
            Active Radars
          </h2>
        </button>

        {isActiveRadarsExpanded && (
          <div>
            {activeRadars.map((radar) => (
              <button
                key={radar.id}
                type="button"
                onClick={() => handleOpenDetail(radar.id)}
                className="flex items-center justify-between w-full py-3 border-b border-[var(--border)] bg-transparent border-x-0 border-t-0 cursor-pointer text-left hover:bg-[var(--muted)] transition-colors px-2"
              >
                <span className="text-sm text-[var(--foreground)]">
                  {radar.name}
                </span>
                <ChevronRight
                  size={14}
                  className="text-[var(--muted-foreground)]"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--border)] my-8" />

      {/* Deliverability */}
      <DeliverabilitySection
        email={radarDeliverability.email}
        slack={radarDeliverability.slack}
        onChange={(field, value) => setRadarDeliverability({ [field]: value })}
      />

      {/* Create Radar Panel */}
      {isRadarCreateOpen && (
        <RightPanel isOpen={isRadarCreateOpen} onClose={handleCloseCreate}>
          <div className="p-4">
            <h3 className="text-md font-semibold text-[var(--foreground)] mb-4">
              Create Radar
            </h3>

            {/* Radar Name */}
            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Radar Name
            </label>
            <input
              type="text"
              value={createName}
              onChange={(e) => setCreateName(e.target.value)}
              placeholder="Enter radar name..."
              className="w-full px-3 py-2 border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none transition-colors mb-5"
            />

            {/* Quick Start */}
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Quick Start
            </label>
            <div className="space-y-2 mb-5">
              {defaultRadarOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleQuickStart(option)}
                  className={cn(
                    "w-full text-left border rounded-lg p-3 bg-transparent cursor-pointer transition-colors",
                    createName === option.label
                      ? "border-[var(--foreground)] bg-[var(--muted)]"
                      : "border-[var(--border)] hover:border-[var(--border)] hover:bg-[var(--muted)]",
                  )}
                >
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {option.label}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Prompt */}
            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Custom Prompt
            </label>
            <textarea
              value={createPrompt}
              onChange={(e) => setCreatePrompt(e.target.value)}
              rows={6}
              placeholder="Describe what this radar should monitor..."
              className="w-full px-3 py-2 border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none transition-colors resize-none mb-5"
            />

            {/* Save */}
            <button
              type="button"
              onClick={handleSaveCreate}
              className="w-full bg-[var(--foreground)] text-[var(--background)] py-2.5 rounded-lg text-sm font-medium border-none cursor-pointer hover:bg-[var(--color-gray-700)] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </RightPanel>
      )}

      {/* Radar Detail Panel */}
      {isRadarDetailOpen && !isRadarCreateOpen && selectedRadar && (
        <RightPanel isOpen={isRadarDetailOpen} onClose={handleCloseDetail}>
          <div className="p-4">
            <h3 className="text-md font-semibold text-[var(--foreground)] mb-4">
              Edit Radar
            </h3>

            {/* Radar Name */}
            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Radar Name
            </label>
            <input
              type="text"
              value={detailName}
              onChange={(e) => setDetailName(e.target.value)}
              className="w-full px-3 py-2 border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] outline-none transition-colors mb-5"
            />

            {/* Prompt */}
            <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Custom Prompt
            </label>
            <textarea
              value={detailPrompt}
              onChange={(e) => setDetailPrompt(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] outline-none transition-colors resize-none mb-5"
            />

            {/* Save */}
            <button
              type="button"
              onClick={handleSaveDetail}
              className="w-full bg-[var(--foreground)] text-[var(--background)] py-2.5 rounded-lg text-sm font-medium border-none cursor-pointer hover:bg-[var(--color-gray-700)] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </RightPanel>
      )}
    </PageShell>
  );
}
