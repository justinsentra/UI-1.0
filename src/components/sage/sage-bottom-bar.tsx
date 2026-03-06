import { useState, useCallback, type ReactNode } from "react";
import s from "./sage.module.css";
import { QUICK_ACTIONS, type SageQuickAction } from "./sageData";
import {
  IcoWaveform,
  IcoChevronRight,
  IcoMail,
  IcoClock,
  IcoCheck,
  IcoCopy,
} from "./sage-icons";

export function BottomBar({
  onTranscript,
  onResume,
  onChat,
  onFollowUp,
  showResume,
  askLabel,
  hidden,
  transcriptActive,
  chatActive,
  useGranolaLayout,
}: {
  onTranscript: () => void;
  onResume?: () => void;
  onChat: () => void;
  onFollowUp: () => void;
  showResume?: boolean;
  askLabel?: string;
  hidden?: boolean;
  transcriptActive?: boolean;
  chatActive?: boolean;
  useGranolaLayout?: boolean;
}) {
  const [toast, setToast] = useState(false);

  const handleFollowUp = useCallback(() => {
    setToast(true);
    onFollowUp();
    setTimeout(() => setToast(false), 2500);
  }, [onFollowUp]);

  if (hidden) return null;

  const resumeAction = onResume || onTranscript;

  if (useGranolaLayout) {
    return (
      <>
        <div className={s.bottomBar}>
          <div className={s.bottomBarLeft}>
            <div
              className={`${s.bottomBarPill} ${transcriptActive ? s.bottomBarPillActive : ""}`}
            >
              <button
                type="button"
                className={s.bottomBarPillWave}
                onClick={onTranscript}
                aria-label={
                  transcriptActive ? "Close transcript" : "Open transcript"
                }
              >
                <IcoWaveform />
                <IcoChevronRight />
              </button>
              {showResume && (
                <button
                  type="button"
                  className={s.bottomBarPillResume}
                  onClick={resumeAction}
                >
                  Resume
                </button>
              )}
            </div>
          </div>
          <div className={s.bottomBarCenter}>
            <div
              className={`${s.askInputShell} ${chatActive ? s.askInputShellActive : ""}`}
              role="button"
              tabIndex={0}
              onClick={onChat}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onChat();
                }
              }}
              aria-label={chatActive ? "Close chat" : "Open chat"}
            >
              <span className={s.askInputText}>
                {askLabel || "Ask anything"}
              </span>
              <button
                type="button"
                className={s.askInlineAction}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFollowUp();
                }}
                aria-label="Write follow up email"
              >
                <span className={s.followUpIcon}>✎</span>
                Write follow up email
              </button>
            </div>
          </div>
        </div>
        {toast && <div className={s.sageToast}>✓ Follow-up email drafted</div>}
      </>
    );
  }

  return (
    <>
      <div className={s.bottomBar}>
        <div className={s.bottomBarLeft}>
          <button
            type="button"
            className={`${s.waveformBtn} ${transcriptActive ? s.waveformBtnActive : ""}`}
            onClick={onTranscript}
            aria-label={
              transcriptActive ? "Close transcript" : "Open transcript"
            }
          >
            <IcoWaveform />
            <IcoChevronRight />
          </button>
          {showResume && (
            <button type="button" className={s.resumeBtn}>
              Resume
            </button>
          )}
        </div>
        <div className={s.bottomBarCenter}>
          <button
            type="button"
            className={`${s.askInputBtn} ${chatActive ? s.askInputBtnActive : ""}`}
            onClick={onChat}
            aria-label={chatActive ? "Close chat" : "Open chat"}
          >
            {askLabel || "Ask anything"}
          </button>
        </div>
        <div className={s.bottomBarRight}>
          <button
            type="button"
            className={s.followUpBtn}
            onClick={handleFollowUp}
            aria-label="Write follow up email"
          >
            <span className={s.followUpIcon}>✎</span>
            Write follow up email
          </button>
        </div>
      </div>
      {toast && <div className={s.sageToast}>✓ Follow-up email drafted</div>}
    </>
  );
}

const ACTION_ICONS: Record<
  SageQuickAction["type"],
  (props: { size?: number }) => ReactNode
> = {
  email: IcoMail,
  schedule: IcoClock,
  task: IcoCheck,
};

export function ActionsBar() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = useCallback((action: SageQuickAction) => {
    navigator.clipboard.writeText(action.draft).then(() => {
      setCopiedId(action.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  return (
    <div className={s.actionsBar}>
      <div className={s.actionsDivider}>
        <div className={s.actionsDividerLine} />
        <span className={s.actionsDividerLabel}>Take action</span>
        <div className={s.actionsDividerLine} />
      </div>

      <div className={s.actionsList}>
        {QUICK_ACTIONS.map((action) => {
          const Icon = ACTION_ICONS[action.type];
          const isExpanded = expandedId === action.id;
          const isCopied = copiedId === action.id;

          return (
            <div
              key={action.id}
              className={`${s.actionCard} ${isExpanded ? s.actionCardExpanded : ""}`}
            >
              <button
                type="button"
                className={s.actionTrigger}
                onClick={() => setExpandedId(isExpanded ? null : action.id)}
                aria-expanded={isExpanded}
              >
                <span className={s.actionIcon}>
                  <Icon size={14} />
                </span>
                <span className={s.actionText}>
                  <span className={s.actionLabel}>{action.label}</span>
                  <span className={s.actionDesc}>{action.description}</span>
                </span>
                <span
                  className={`${s.actionChevron} ${isExpanded ? s.actionChevronOpen : ""}`}
                >
                  <IcoChevronRight size={10} />
                </span>
              </button>

              {isExpanded && (
                <div className={s.actionDraft}>
                  <pre className={s.actionDraftText}>{action.draft}</pre>
                  <button
                    type="button"
                    className={s.actionCopyBtn}
                    onClick={() => handleCopy(action)}
                  >
                    {isCopied ? (
                      <>
                        <IcoCheck size={12} /> Copied
                      </>
                    ) : (
                      <>
                        <IcoCopy size={12} /> Copy
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
