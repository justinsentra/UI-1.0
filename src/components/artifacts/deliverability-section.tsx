interface DeliverabilityProps {
  email: boolean;
  slack: boolean;
  onChange: (field: "email" | "slack", value: boolean) => void;
}

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors border-none cursor-pointer ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } ${checked ? "bg-[var(--foreground)]" : "bg-[var(--border)]"}`}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-background shadow-sm transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export function DeliverabilitySection({
  email,
  slack,
  onChange,
}: DeliverabilityProps) {
  return (
    <div>
      <h2 className="text-md font-semibold text-[var(--foreground)] mb-1">
        Deliverability
      </h2>
      <p className="text-sm text-[var(--muted-foreground)] mb-5">
        Choose how you want to receive your reports
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-[var(--foreground)]">
              Email
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">
              Receive reports in your inbox
            </div>
          </div>
          <Toggle
            checked={email}
            disabled={email && !slack}
            onChange={(v) => onChange("email", v)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-[var(--foreground)]">
              ChatWorks
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">
              Receive a notification via ChatWorks DM
            </div>
          </div>
          <Toggle
            checked={slack}
            disabled={slack && !email}
            onChange={(v) => onChange("slack", v)}
          />
        </div>
      </div>
    </div>
  );
}
