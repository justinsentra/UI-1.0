import s from "./sage.module.css";
import { TEMPLATES, SOURCE_DATA } from "./sageData";
import { IcoX, IcoCopy, IcoMail, IcoSlack } from "./sage-icons";

export function TemplatesDropdown({ onSelect }: { onSelect: () => void }) {
  const iconMap: Record<string, string> = {
    sparkle: "✦",
    people: "👥",
    search: "🔍",
    briefcase: "💼",
    bolt: "⚡",
    calendar: "📅",
    grid: "▦",
  };
  return (
    <div className={s.templatesDropdown}>
      <div className={s.templatesHeader}>
        <span className={s.templatesTitle}>Templates</span>
        <button type="button" className={s.templatesNew}>
          New template
        </button>
      </div>
      {TEMPLATES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={s.templateItem}
          onClick={onSelect}
        >
          <span className={s.templateIcon}>{iconMap[t.icon] || "•"}</span>
          <span className={s.templateLabel}>{t.label}</span>
          {t.shortcut && (
            <span className={s.templateShortcut}>{t.shortcut}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export function ShareDropdown({ onAction }: { onAction: () => void }) {
  return (
    <div className={s.shareDropdown}>
      <button type="button" className={s.shareItem} onClick={onAction}>
        <span className={s.shareItemIcon}>
          <IcoMail />
        </span>{" "}
        Draft email
      </button>
      <button type="button" className={s.shareItem} onClick={onAction}>
        <span className={s.shareItemIcon}>
          <IcoCopy />
        </span>{" "}
        Copy text
      </button>
      <button type="button" className={s.shareItem} onClick={onAction}>
        <span className={s.shareItemIcon}>
          <IcoSlack />
        </span>{" "}
        Send to Slack
      </button>
    </div>
  );
}

export function SourcePopover({
  sourceId,
  onClose,
}: {
  sourceId: string;
  onClose: () => void;
}) {
  const data = SOURCE_DATA[sourceId];
  if (!data) return null;
  return (
    <div className={s.sourcePopover} onClick={(e) => e.stopPropagation()}>
      <div className={s.sourcePopoverHeader}>
        <div className={s.sourceLabel}>Transcript Source</div>
        <button
          type="button"
          className={s.chromeIconBtn}
          onClick={onClose}
          aria-label="Close source popover"
        >
          <IcoX size={8} />
        </button>
      </div>
      <div className={s.sourceText}>{data.summary}</div>
      {data.quotes.map((q, i) => (
        <div key={i} className={s.sourceQuote}>
          {q}
        </div>
      ))}
      <div className={s.sourceInterpretation}>{data.interpretation}</div>
    </div>
  );
}
