import { ChevronDown } from "lucide-react";
import { usePageLabel } from "@/components/app-layout";
import { useReportsStore } from "@/stores/reports-store";
import { DeliverabilitySection } from "@components/artifacts/deliverability-section";
import { InfoTooltip } from "@components/ui/info-tooltip";
import { reportPreferenceCards } from "@/data/mock-reports";
import PageShell from "@/components/ui/page-shell";

const frequencies = ["Weekly", "Biweekly", "Monthly"] as const;

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function generateTimeOptions(): string[] {
  const times: string[] = [];
  for (let hour = 6; hour <= 22; hour++) {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    times.push(`${displayHour}:00 ${period}`);
    if (hour < 22) {
      times.push(`${displayHour}:30 ${period}`);
    }
  }
  return times;
}

const timeOptions = generateTimeOptions();

const selectClassName =
  "bg-[var(--muted)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--foreground)] outline-none cursor-pointer appearance-none w-full pr-8";

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex-1 min-w-0">
      <label className="block text-sm font-medium text-[var(--muted-foreground)] mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={selectClassName}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] pointer-events-none"
        />
      </div>
    </div>
  );
}

const ArtifactsReportsSettingsPage = () => {
  usePageLabel("Reports Settings");

  const {
    reportSchedule,
    setReportSchedule,
    reportDeliverability,
    setReportDeliverability,
    reportPreferences,
    setReportPreferences,
  } = useReportsStore();

  const handleToggleReport = (id: string) => {
    const current = reportPreferences.selectedReports;
    const next = current.includes(id)
      ? current.filter((r) => r !== id)
      : [...current, id];
    setReportPreferences({ selectedReports: next });
  };

  return (
    <PageShell>
      <h1 className="text-3xl font-normal text-[var(--foreground)] tracking-tight mb-5">
        Reports Settings
      </h1>

      {/* Schedule Section */}
      <section>
        <h2 className="text-md font-semibold text-[var(--foreground)] mb-1">
          Schedule
        </h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-5">
          When do you want to receive your reports?
        </p>

        <div className="flex gap-4 mb-3">
          <SelectField
            label="Frequency"
            value={reportSchedule.frequency}
            options={frequencies}
            onChange={(value) => setReportSchedule({ frequency: value })}
          />
          <SelectField
            label="Day of Week"
            value={reportSchedule.dayOfWeek}
            options={daysOfWeek}
            onChange={(value) => setReportSchedule({ dayOfWeek: value })}
          />
          <SelectField
            label="Time"
            value={reportSchedule.time}
            options={timeOptions}
            onChange={(value) => setReportSchedule({ time: value })}
          />
        </div>

        <div className="flex items-center gap-1.5">
          <InfoTooltip text="Report generation begins 2 hours prior to the scheduled time. Note that changing the time to a later time will not trigger a new report generation if a report was already generated within the last 24 hours." />
        </div>
      </section>

      <div className="border-t border-[var(--border)] my-8" />

      {/* Deliverability Section */}
      <section>
        <DeliverabilitySection
          email={reportDeliverability.email}
          slack={reportDeliverability.slack}
          onChange={(field, value) =>
            setReportDeliverability({ [field]: value })
          }
        />
      </section>

      <div className="border-t border-[var(--border)] my-8" />

      {/* Preferences Section */}
      <section>
        <h2 className="text-md font-semibold text-[var(--foreground)] mb-1">
          Preferences
        </h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-2">
          By default, Sentra creates a report highlighting major changes over
          the past week — what progressed, any blockers or issues, followed by
          drill-downs into projects and initiatives.
        </p>
        <p className="text-sm text-[var(--muted-foreground)] mb-5">
          Customize what Sentra should focus on when writing your report, as
          well as the format.
        </p>

        <div className="space-y-3 mb-8">
          {reportPreferenceCards.map((card) => {
            const isChecked = reportPreferences.selectedReports.includes(
              card.id,
            );
            return (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                onClick={() => handleToggleReport(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggleReport(card.id);
                  }
                }}
                className="flex items-center justify-between border border-[var(--border)] rounded-lg px-4 py-3 cursor-pointer hover:border-[var(--border)] transition-colors"
              >
                <div>
                  <div className="text-sm text-[var(--foreground)]">
                    {card.label}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {card.description}
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggleReport(card.id)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 rounded border-[var(--border)] accent-[var(--foreground)] shrink-0 ml-4 cursor-pointer"
                />
              </div>
            );
          })}
        </div>

        {/* Custom Reports */}
        <div className="mb-5">
          <h3 className="text-sm font-medium text-[var(--foreground)] mb-1">
            Custom Reports
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-3">
            Provide specific instructions on how you want your weekly reports
            structured and what to focus on.
          </p>
          <textarea
            value={reportPreferences.customInstructions}
            onChange={(e) =>
              setReportPreferences({ customInstructions: e.target.value })
            }
            placeholder="E.g., Focus on sprint velocity metrics, highlight any blockers that have persisted for more than 2 days, and include a summary of customer feedback themes..."
            rows={6}
            className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-background text-sm placeholder:text-[var(--muted-foreground)] resize-y"
          />
        </div>

        <button
          type="button"
          className="bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--foreground)] transition-colors"
        >
          Save Changes
        </button>
      </section>
    </PageShell>
  );
};

export default ArtifactsReportsSettingsPage;
