import { useCallback, type KeyboardEvent } from "react";
import s from "./sage.module.css";
import { TRANSCRIPT } from "./sageData";
import { IcoSparkle, IcoStop, IcoChevronRight } from "./sage-icons";

export function PillCollapsed({
  onClick,
  useNewPill,
}: {
  onClick: () => void;
  useNewPill?: boolean;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );
  if (!useNewPill) {
    return (
      <div className={s.pillWrap}>
        <div
          className={s.pillCollapsed}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Expand recording pill"
        >
          <div className={s.pillLogo}>
            <IcoSparkle size={14} />
          </div>
          <div className={s.pillDot} />
        </div>
      </div>
    );
  }

  return (
    <div className={s.pillWrap}>
      <div
        className={`${s.pillCollapsed} ${s.pillCollapsedNew}`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Expand recording pill"
      >
        <div className={s.pillDragHandle} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={s.pillWaveform} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={s.pillLogo}>
          <IcoSparkle size={14} />
        </div>
        <span className={s.pillCollapsedLabel}>Recording</span>
      </div>
    </div>
  );
}

export function PillExpanded({
  onCollapse,
  onStop,
  elapsed,
  useNewPill,
}: {
  onCollapse: () => void;
  onStop: () => void;
  elapsed: number;
  useNewPill?: boolean;
}) {
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const timeDisplay = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  if (!useNewPill) {
    return (
      <div className={s.pillWrap}>
        <div className={s.pillExpanded}>
          <div className={s.pillExpandedHeader}>
            <div className={s.pillLogo}>
              <IcoSparkle size={14} />
            </div>
            <span className={s.pillRecLabel}>Recording</span>
            <div className={s.pillDot} />
            <span className={s.pillTimer}>{timeDisplay}</span>
          </div>
          <div className={s.pillTranscript}>
            {TRANSCRIPT.slice(0, 4).map((line, i) => (
              <p key={i} className={s.pillTranscriptLine}>
                <strong>{line.speaker}:</strong> {line.text}
              </p>
            ))}
          </div>
          <div className={s.pillControls}>
            <button
              type="button"
              className={s.pillStopBtn}
              onClick={onStop}
              aria-label="Stop recording"
            >
              <IcoStop size={10} /> Stop
            </button>
            <button
              type="button"
              className={s.pillCollapseBtn}
              onClick={onCollapse}
              aria-label="Collapse pill"
            >
              <IcoChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.pillWrap}>
      <div
        className={`${s.pillExpanded} ${useNewPill ? s.pillExpandedNew : ""}`}
      >
        <div className={s.pillExpandedHeader}>
          <div
            className={`${s.pillWaveform} ${s.pillWaveformMini}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={s.pillLogo}>
            <IcoSparkle size={14} />
          </div>
          <span className={s.pillRecLabel}>Recording</span>
          <span className={s.pillTimer}>{timeDisplay}</span>
        </div>
        <div className={`${s.pillTranscript} ${s.pillTranscriptLive}`}>
          {TRANSCRIPT.slice(0, 6).map((line, i) => (
            <div
              key={i}
              className={`${s.pillLiveLine} ${line.isUser ? s.pillLiveLineUser : s.pillLiveLineOther}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className={s.pillLiveSpeaker}>
                {line.isUser ? "You" : line.speaker}
              </div>
              <div className={s.pillLiveText}>{line.text}</div>
            </div>
          ))}
        </div>
        <div className={s.pillControls}>
          <button
            type="button"
            className={s.pillStopBtn}
            onClick={onStop}
            aria-label="Stop recording"
          >
            <IcoStop size={10} /> Stop
          </button>
          <button
            type="button"
            className={s.pillCollapseBtn}
            onClick={onCollapse}
            aria-label="Collapse pill"
          >
            <IcoChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
