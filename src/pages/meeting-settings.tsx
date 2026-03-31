import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@lib/utils";
import { useUIStore } from "@/stores/ui-store";
import { Switch } from "@components/ui/switch";
import PageShell from "@/components/ui/page-shell";

const leadTimeOptions = [
  "30 min",
  "1 hour",
  "1.5 hours",
  "2 hours",
  "3 hours",
  "4 hours",
  "6 hours",
  "8 hours",
  "12 hours",
  "24 hours",
];

function DeliveryDropdown({
  slack,
  email,
  onSlackChange,
  onEmailChange,
  disabled,
  error,
}: {
  slack: boolean;
  email: boolean;
  onSlackChange: (val: boolean) => void;
  onEmailChange: (val: boolean) => void;
  disabled: boolean;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const label =
    [slack && "ChatWorks", email && "Email"].filter(Boolean).join(", ") ||
    "Select channels...";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className={cn(
          "w-full h-9 px-3 rounded-lg border flex items-center justify-between text-sm transition-colors",
          disabled
            ? "bg-[var(--muted)] text-[var(--border)] border-[var(--border)] cursor-not-allowed"
            : error
              ? "bg-[var(--background)] text-[var(--foreground)] border-red-400"
              : "bg-[var(--background)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--muted-foreground)]",
        )}
      >
        <span
          className={cn(
            !slack && !email && !disabled && "text-[var(--muted-foreground)]",
          )}
        >
          {label}
        </span>
        <ChevronDown
          size={14}
          className={cn(
            "text-[var(--muted-foreground)] transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {open && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-1 left-0 right-0 z-50 bg-[var(--background)] rounded-xl shadow-lg border border-[var(--border)] overflow-hidden"
          >
            <label className="flex items-center gap-2.5 px-3 py-2 hover:bg-[var(--muted)] cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={slack}
                onChange={(e) => onSlackChange(e.target.checked)}
                className="w-4 h-4 rounded border-[var(--border)] accent-[var(--foreground)]"
              />
              <span className="text-sm text-[var(--foreground)]">
                ChatWorks
              </span>
            </label>
            <label className="flex items-center gap-2.5 px-3 py-2 hover:bg-[var(--muted)] cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={email}
                onChange={(e) => onEmailChange(e.target.checked)}
                className="w-4 h-4 rounded border-[var(--border)] accent-[var(--foreground)]"
              />
              <span className="text-sm text-[var(--foreground)]">Email</span>
            </label>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LeadTimeDropdown({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (val: string) => void;
  disabled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className={cn(
          "w-full h-9 px-3 rounded-lg border flex items-center justify-between text-sm transition-colors",
          disabled
            ? "bg-[var(--muted)] text-[var(--border)] border-[var(--border)] cursor-not-allowed"
            : "bg-[var(--background)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--muted-foreground)]",
        )}
      >
        {value}
        <ChevronDown
          size={14}
          className={cn(
            "text-[var(--muted-foreground)] transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {open && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-1 left-0 right-0 z-50 bg-[var(--background)] rounded-xl shadow-lg border border-[var(--border)] max-h-[240px] overflow-y-auto"
          >
            {leadTimeOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={cn(
                  "w-full px-3 py-2 text-left text-sm transition-colors",
                  value === opt
                    ? "text-[var(--foreground)] bg-[var(--muted)]"
                    : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]",
                )}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SettingSectionProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (val: boolean) => void;
  children: React.ReactNode;
}

function SettingSection({
  title,
  description,
  enabled,
  onToggle,
  children,
}: SettingSectionProps) {
  return (
    <section className="mb-10">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-md font-semibold text-[var(--foreground)] mb-0.5">
            {title}
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] max-w-[420px]">
            {description}
          </p>
        </div>
        <Switch checked={enabled} onCheckedChange={onToggle} />
      </div>

      <AnimatePresence>
        {enabled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SettingField({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-[var(--foreground)] mb-0.5">
        {label}
      </p>
      <p className="text-xs text-[var(--muted-foreground)] mb-2">
        {description}
      </p>
      <div className="max-w-[280px]">{children}</div>
    </div>
  );
}

const MeetingSettingsPage = () => {
  const addToast = useUIStore((s) => s.addToast);

  const [briefsEnabled, setBriefsEnabled] = useState(false);
  const [briefsSlack, setBriefsSlack] = useState(false);
  const [briefsEmail, setBriefsEmail] = useState(false);
  const [briefsLeadTime, setBriefsLeadTime] = useState("30 min");
  const [briefsDeliveryError, setBriefsDeliveryError] = useState(false);

  const [notesEnabled, setNotesEnabled] = useState(false);
  const [notesSlack, setNotesSlack] = useState(false);
  const [notesEmail, setNotesEmail] = useState(false);
  const [notesDeliveryError, setNotesDeliveryError] = useState(false);

  const [preferences, setPreferences] = useState("");

  const handleContinue = useCallback(() => {
    let hasError = false;

    if (briefsEnabled && !briefsSlack && !briefsEmail) {
      setBriefsDeliveryError(true);
      hasError = true;
    }

    if (notesEnabled && !notesSlack && !notesEmail) {
      setNotesDeliveryError(true);
      hasError = true;
    }

    if (hasError) {
      addToast("error", "You must select a method of delivery");
      return;
    }

    addToast("success", "Settings saved");
  }, [
    briefsEnabled,
    briefsSlack,
    briefsEmail,
    notesEnabled,
    notesSlack,
    notesEmail,
    addToast,
  ]);

  return (
    <PageShell>
      <h1 className="text-3xl font-normal text-[var(--foreground)] tracking-tight mb-8">
        Meeting Settings
      </h1>

      {/* Briefs */}
      <SettingSection
        title="Briefs"
        description="Receive context-aware briefs before your meetings."
        enabled={briefsEnabled}
        onToggle={(val) => {
          setBriefsEnabled(val);
          if (!val) setBriefsDeliveryError(false);
        }}
      >
        <SettingField
          label="Delivery"
          description="Briefs will be delivered through selected channels."
        >
          <DeliveryDropdown
            slack={briefsSlack}
            email={briefsEmail}
            onSlackChange={(val) => {
              setBriefsSlack(val);
              setBriefsDeliveryError(false);
            }}
            onEmailChange={(val) => {
              setBriefsEmail(val);
              setBriefsDeliveryError(false);
            }}
            disabled={!briefsEnabled}
            error={briefsDeliveryError}
          />
        </SettingField>
        <SettingField
          label="Lead Time"
          description="How far in advance to receive your brief."
        >
          <LeadTimeDropdown
            value={briefsLeadTime}
            onChange={setBriefsLeadTime}
            disabled={!briefsEnabled}
          />
        </SettingField>
      </SettingSection>

      <div className="border-t border-[var(--border)] mb-10" />

      {/* Meeting Notes */}
      <SettingSection
        title="Meeting Notes"
        description="Receive meeting summaries via your preferred channel. You'll still be recorded as an attendee if disabled."
        enabled={notesEnabled}
        onToggle={(val) => {
          setNotesEnabled(val);
          if (!val) setNotesDeliveryError(false);
        }}
      >
        <SettingField
          label="Delivery"
          description="Summaries will be delivered through selected channels."
        >
          <DeliveryDropdown
            slack={notesSlack}
            email={notesEmail}
            onSlackChange={(val) => {
              setNotesSlack(val);
              setNotesDeliveryError(false);
            }}
            onEmailChange={(val) => {
              setNotesEmail(val);
              setNotesDeliveryError(false);
            }}
            disabled={!notesEnabled}
            error={notesDeliveryError}
          />
        </SettingField>
      </SettingSection>

      <div className="border-t border-[var(--border)] mb-10" />

      {/* Notes Preferences */}
      <section>
        <h2 className="text-md font-semibold text-[var(--foreground)] mb-0.5">
          Notes Preferences
        </h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-4 max-w-[420px]">
          Tell Sentra how to analyze and summarize your meetings. Be specific
          about what's most important to you.
        </p>
        <textarea
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="E.g., Focus on action items and decisions. Highlight any commitments made by attendees..."
          rows={4}
          className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm placeholder:text-[var(--muted-foreground)] resize-y mb-3 transition-colors focus:border-[var(--muted-foreground)]"
        />
        <button
          type="button"
          onClick={() => addToast("success", "Preferences saved")}
          className="h-9 px-4 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Save Preferences
        </button>
      </section>

      {/* Continue */}
      <div className="border-t border-[var(--border)] pt-8 mt-10 flex justify-end">
        <button
          type="button"
          onClick={handleContinue}
          className="h-10 px-6 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-base font-medium hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Continue
        </button>
      </div>
    </PageShell>
  );
};

export default MeetingSettingsPage;
