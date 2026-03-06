import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import s from "./sage.module.css";
import { getAvatarColor } from "@lib/utils";
import {
  MEETING,
  ENHANCED_NOTES,
  PRIVATE_NOTES,
  PRE_MEETING_BRIEF,
  type SageNoteSection,
  type BriefInsight,
} from "./sageData";
import type { SageState } from "./sage-types";
import {
  IcoSparkle,
  IcoPlay,
  IcoChevronRight,
  IcoChevronLeft,
  IcoStop,
  IcoLock,
  IcoLink,
  IcoMore,
  IcoList,
  IcoMagnify,
} from "./sage-icons";
import {
  SourcePopover,
  TemplatesDropdown,
  ShareDropdown,
} from "./sage-composers";
import { TranscriptPanel, ChatPanel } from "./sage-panels";
import { BottomBar, ActionsBar } from "./sage-bottom-bar";

/* -------------------------------------------------------
   Brief Content
   ------------------------------------------------------- */

function InsightSourcePopup({
  source,
  onClose,
}: {
  source: BriefInsight["source"];
  onClose: () => void;
}) {
  return (
    <div className={s.insightPopup}>
      <button
        type="button"
        className={s.insightPopupClose}
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className={s.insightPopupQuote}>"{source.quote}"</div>
      <div className={s.insightPopupMeta}>
        <span className={s.insightPopupPill}>{source.meetingTitle}</span>
        <span className={s.insightPopupDate}>{source.meetingDate}</span>
      </div>
    </div>
  );
}

function BriefContent() {
  const brief = PRE_MEETING_BRIEF;
  const [activeInsight, setActiveInsight] = useState<number | null>(null);

  return (
    <div className={s.briefContent}>
      <div className={s.briefGreeting}>
        Hey Justin, here are some contexts that might be useful for your
        upcoming meeting <strong>{brief.meetingTitle}</strong>:
      </div>
      <div className={s.briefInsights}>
        {brief.insights.map((insight, i) => (
          <div key={i} className={s.briefInsightBlock}>
            <div className={s.briefInsightHeading}>{insight.heading}</div>
            <div className={s.briefInsightSourceRow}>
              <button
                type="button"
                className={`${s.briefInsightSourceBtn} ${activeInsight === i ? s.briefInsightSourceBtnActive : ""}`}
                onClick={() => setActiveInsight(activeInsight === i ? null : i)}
              >
                <IcoMagnify />
                <span className={s.briefInsightSourceLabel}>Source</span>
              </button>
              {activeInsight === i && (
                <InsightSourcePopup
                  source={insight.source}
                  onClose={() => setActiveInsight(null)}
                />
              )}
            </div>
            <div className={s.briefInsightSummary}>{insight.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Enhanced Notes Content
   ------------------------------------------------------- */

const FALLBACK_SOURCES = ["src-4", "src-5", "src-6", "src-7", "src-8", "src-9"];

function EnhancedNotesContent({
  activeSourceId,
  onSourceClick,
  onSourceClose,
}: {
  activeSourceId: string | null;
  onSourceClick: (sourceId: string) => void;
  onSourceClose: () => void;
}) {
  let fallbackIdx = 0;
  const getFallbackSource = () => {
    const id =
      FALLBACK_SOURCES[fallbackIdx % FALLBACK_SOURCES.length] || "src-1";
    fallbackIdx++;
    return id;
  };

  return (
    <div className={s.enhancedContent}>
      {ENHANCED_NOTES.map((section, si) => (
        <div key={si} className={s.sectionBlock}>
          <div className={s.sectionHeading}>{section.heading}</div>
          <ul className={s.bulletList}>
            {section.items.map((item, ii) => {
              const srcId = item.sourceId || getFallbackSource();
              const isActive = activeSourceId === srcId;
              return (
                <li key={ii}>
                  <div
                    className={`${s.bulletItem} ${isActive ? s.bulletItemActive : ""}`}
                  >
                    <span className={s.bulletItemText}>{item.text}</span>
                    <button
                      type="button"
                      className={s.sourceBtn}
                      onClick={() =>
                        isActive ? onSourceClose() : onSourceClick(srcId)
                      }
                      aria-label="View transcript source"
                    >
                      <IcoMagnify />
                    </button>
                  </div>
                  {isActive && (
                    <SourcePopover sourceId={srcId} onClose={onSourceClose} />
                  )}
                  {item.children && (
                    <ul className={s.subBulletList}>
                      {item.children.map((child, ci) => {
                        const childSrcId = getFallbackSource();
                        const isChildActive = activeSourceId === childSrcId;
                        return (
                          <li key={ci}>
                            <div
                              className={`${s.subBulletItem} ${isChildActive ? s.bulletItemActive : ""}`}
                            >
                              <span className={s.subBulletItemText}>
                                {child}
                              </span>
                              <button
                                type="button"
                                className={s.sourceBtn}
                                onClick={() =>
                                  isChildActive
                                    ? onSourceClose()
                                    : onSourceClick(childSrcId)
                                }
                                aria-label="View transcript source"
                              >
                                <IcoMagnify />
                              </button>
                            </div>
                            {isChildActive && (
                              <SourcePopover
                                sourceId={childSrcId}
                                onClose={onSourceClose}
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   Enhancer Animation
   ------------------------------------------------------- */

function flattenNotes(
  sections: SageNoteSection[],
): { type: "heading" | "item" | "child"; text: string; sectionIdx: number }[] {
  const flat: {
    type: "heading" | "item" | "child";
    text: string;
    sectionIdx: number;
  }[] = [];
  sections.forEach((sec, si) => {
    flat.push({ type: "heading", text: sec.heading, sectionIdx: si });
    sec.items.forEach((item) => {
      flat.push({ type: "item", text: item.text, sectionIdx: si });
      item.children?.forEach((c) => {
        flat.push({ type: "child", text: c, sectionIdx: si });
      });
    });
  });
  return flat;
}

function EnhancerView({
  onComplete,
  onCancel,
}: {
  onComplete: () => void;
  onCancel: () => void;
}) {
  const flatItems = useMemo(() => flattenNotes(ENHANCED_NOTES), []);
  const total = flatItems.length;
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  const startTimeRef = useRef(0);
  const rafRef = useRef(0);
  onCompleteRef.current = onComplete;

  const DURATION = 5500;
  const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 2.2);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = EASE_OUT(raw);
      setProgress(eased);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => onCompleteRef.current(), 400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const revealed = Math.floor(progress * total);

  return (
    <div ref={scrollRef} className={`${s.notesScroll} ${s.enhancerScrollArea}`}>
      <div className={s.noteTitle}>{MEETING.title}</div>
      <div className={s.noteMeta}>
        <span className={s.noteChip}>📅 {MEETING.date}</span>
        <span className={s.noteChip}>👥 Me</span>
        <span className={s.noteChip}>+ Add to folder</span>
      </div>
      <div>
        <div className={s.enhancerContent}>
          {flatItems.map((item, i) => {
            const itemProgress = i / total;
            const isRevealed = progress >= itemProgress;
            const isFrontier = isRevealed && i >= revealed - 2;
            const cls = [
              s.enhancerItemSmooth,
              isRevealed ? s.enhancerItemVisible : s.enhancerItemHidden,
              isFrontier ? s.enhancerItemFrontier : "",
            ].join(" ");

            if (item.type === "heading") {
              return (
                <div key={i} className={`${cls} ${s.enhancerHeading}`}>
                  <div className={s.sectionHeading}>{item.text}</div>
                </div>
              );
            }
            if (item.type === "item") {
              return (
                <div key={i} className={`${cls} ${s.enhancerBullet}`}>
                  <span className={s.enhancerBulletText}>• {item.text}</span>
                </div>
              );
            }
            return (
              <div key={i} className={`${cls} ${s.enhancerSubBullet}`}>
                <span className={s.enhancerSubBulletText}>○ {item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {progress < 1 && (
        <div className={s.enhancerStatusBar}>
          <div className={s.enhancerProgressTrack}>
            <div
              className={s.enhancerProgressFill}
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className={s.enhancerStatusContent}>
            <div className={s.enhancerStatusLeft}>
              <div className={s.enhancerSpinner} />
              <div className={s.enhancerStatusText}>
                <span className={s.enhancerStatusTitle}>
                  Generating enhanced AI notes
                </span>
                <span className={s.enhancerStatusSub}>
                  Analyzing transcript and synthesizing key insights...
                </span>
              </div>
            </div>
            <div className={s.enhancerStatusRight}>
              <span className={s.enhancerPercent}>
                {Math.round(progress * 100)}%
              </span>
              <button
                type="button"
                className={s.enhancerCancel}
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {progress >= 1 && (
        <div className={s.enhancerDoneBar}>
          <span className={s.enhancerDoneIcon}>✓</span>
          <span className={s.enhancerDoneText}>
            Enhanced AI notes generated
          </span>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------
   Notes Panel
   ------------------------------------------------------- */

export function NotesPanel({
  state,
  onStateChange,
  showBriefThread,
  onStartMeeting,
  useGranolaBottomBar,
  useFloatingActions,
  useCompactToolbar,
}: {
  state: SageState;
  onStateChange: (s: SageState) => void;
  showBriefThread?: boolean;
  onStartMeeting?: () => void;
  useGranolaBottomBar?: boolean;
  useFloatingActions?: boolean;
  useCompactToolbar?: boolean;
}) {
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);
  const [showTemplates, setShowTemplates] = useState(state === "templates");
  const [showShare, setShowShare] = useState(state === "share");
  const [copyToast, setCopyToast] = useState(false);
  const [briefFlash, setBriefFlash] = useState(false);
  const [briefExpanded, setBriefExpanded] = useState(false);
  const flashTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notesScrollRef = useRef<HTMLDivElement>(null);
  const meetingTitleRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const [actionsVisible, setActionsVisible] = useState(false);

  const isBrief = state === "pre-meeting-brief";
  const isPrivate = state === "private-notes";
  const isEnhanced =
    state === "enhanced-notes" ||
    state === "templates" ||
    state === "share" ||
    state === "source-popover";
  const showToolbar = isEnhanced || isPrivate;
  const showTranscript = state === "transcript";
  const showChat = state === "chat";
  const isEnhancing = state === "enhancing";
  const showGenerateBtn =
    state === "empty-editor" || state === "generate-prompt";
  const isGeneratePrompt = state === "generate-prompt";
  const hasOpenOverlay =
    showTemplates ||
    showShare ||
    (activeSourceId != null && state === "source-popover");

  const [briefCountdown, setBriefCountdown] = useState(15);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isBrief) {
      setBriefCountdown(15);
      countdownRef.current = setInterval(() => {
        setBriefCountdown((prev) => {
          if (prev <= 1) {
            if (countdownRef.current) clearInterval(countdownRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 800);
      flashTimerRef.current = setTimeout(() => setBriefFlash(true), 12000);
    } else {
      setBriefFlash(false);
      setBriefCountdown(15);
      if (countdownRef.current) clearInterval(countdownRef.current);
    }
    return () => {
      if (flashTimerRef.current) clearTimeout(flashTimerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [isBrief]);

  const meetingReady = briefCountdown <= 5;

  const scrollToActions = useCallback(() => {
    actionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    setBriefExpanded(false);
  }, [state]);

  const onEnhancerComplete = useCallback(
    () => onStateChange("enhanced-notes"),
    [onStateChange],
  );
  const onEnhancerCancel = useCallback(
    () => onStateChange("enhanced-notes"),
    [onStateChange],
  );

  const dismissOverlays = useCallback(() => {
    if (showTemplates) {
      setShowTemplates(false);
      onStateChange("enhanced-notes");
    }
    if (showShare) {
      setShowShare(false);
      onStateChange("enhanced-notes");
    }
    if (activeSourceId) {
      setActiveSourceId(null);
      onStateChange("enhanced-notes");
    }
  }, [showTemplates, showShare, activeSourceId, onStateChange]);

  useEffect(() => {
    setShowTemplates(state === "templates");
    setShowShare(state === "share");
    if (state === "source-popover") setActiveSourceId("src-3");
  }, [state]);

  useEffect(() => {
    if (
      !useFloatingActions ||
      !isEnhanced ||
      !notesScrollRef.current ||
      !actionsRef.current
    ) {
      setActionsVisible(false);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setActionsVisible(Boolean(entries[0]?.isIntersecting)),
      { root: notesScrollRef.current, threshold: 0.25 },
    );
    observer.observe(actionsRef.current);
    return () => observer.disconnect();
  }, [useFloatingActions, isEnhanced, state]);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showTemplates || showShare) {
        e.stopPropagation();
        setShowTemplates(false);
        setShowShare(false);
        onStateChange("enhanced-notes");
      } else if (activeSourceId && state === "source-popover") {
        e.stopPropagation();
        setActiveSourceId(null);
        onStateChange("enhanced-notes");
      } else if (showTranscript || showChat) {
        e.stopPropagation();
        onStateChange("enhanced-notes");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    showTemplates,
    showShare,
    activeSourceId,
    state,
    showTranscript,
    showChat,
    onStateChange,
  ]);

  const handleCopyLink = useCallback(() => {
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2000);
  }, []);

  return (
    <div className={s.notesPanelWrap}>
      <div className={s.notesPanel}>
        {/* Top Chrome / Toolbar */}
        {useCompactToolbar ? (
          <div className={`${s.windowChrome} ${s.windowChromeCompact}`}>
            <div className={s.trafficLights}>
              <div
                className={`${s.trafficDot} ${s.trafficRed}`}
                onClick={() => window.ipcRenderer?.send("close-sage-window")}
                style={{ cursor: "pointer" }}
              />
              <div className={`${s.trafficDot} ${s.trafficYellow}`} />
              <div className={`${s.trafficDot} ${s.trafficGreen}`} />
            </div>
            {showToolbar && (
              <>
                <button
                  type="button"
                  className={`${s.toolbarBtn} ${s.toolbarBtnDisabled}`}
                  aria-label="List view (demo only)"
                  disabled
                >
                  <IcoList />
                </button>
                <button
                  type="button"
                  className={showTemplates ? s.toolbarBtnActive : s.toolbarBtn}
                  aria-label="Templates"
                  aria-expanded={showTemplates}
                  onClick={() => {
                    const next = !showTemplates;
                    setShowTemplates(next);
                    setShowShare(false);
                    onStateChange(next ? "templates" : "enhanced-notes");
                  }}
                >
                  <IcoSparkle size={12} /> <IcoChevronRight />
                </button>
              </>
            )}
            <div className={s.toolbarSpacer} />
            {showToolbar && (
              <>
                <div className={s.segmentedControl}>
                  <div
                    className={`${s.segmentedIndicator} ${isPrivate ? s.segmentedIndicatorRight : ""}`}
                  />
                  <button
                    type="button"
                    className={`${s.segmentedBtn} ${!isPrivate ? s.segmentedBtnActive : ""}`}
                    onClick={() => {
                      if (isPrivate) onStateChange("enhanced-notes");
                    }}
                  >
                    Enhanced
                  </button>
                  <button
                    type="button"
                    className={`${s.segmentedBtn} ${isPrivate ? s.segmentedBtnActive : ""}`}
                    onClick={() => {
                      if (!isPrivate) onStateChange("private-notes");
                    }}
                  >
                    Private
                  </button>
                </div>
                <button
                  type="button"
                  className={
                    showShare ? `${s.shareBtn} ${s.shareBtnOpen}` : s.shareBtn
                  }
                  aria-expanded={showShare}
                  onClick={() => {
                    const next = !showShare;
                    setShowShare(next);
                    setShowTemplates(false);
                    onStateChange(next ? "share" : "enhanced-notes");
                  }}
                >
                  <IcoLock size={10} /> Share
                </button>
                <button
                  type="button"
                  className={s.toolbarBtn}
                  aria-label="Copy link"
                  onClick={handleCopyLink}
                >
                  <IcoLink />
                </button>
              </>
            )}
            <div className={s.chromeRight}>
              <button
                type="button"
                className={`${s.chromeIconBtn} ${s.chromeIconBtnDisabled}`}
                aria-label="Back (demo only)"
                disabled
              >
                <IcoChevronLeft size={10} />
              </button>
              <button
                type="button"
                className={`${s.chromeIconBtn} ${s.chromeIconBtnDisabled}`}
                aria-label="More options (demo only)"
                disabled
              >
                <IcoMore />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={s.windowChrome}>
              <div className={s.trafficLights}>
                <div
                  className={`${s.trafficDot} ${s.trafficRed}`}
                  onClick={() => window.ipcRenderer?.send("close-sage-window")}
                  style={{ cursor: "pointer" }}
                />
                <div className={`${s.trafficDot} ${s.trafficYellow}`} />
                <div className={`${s.trafficDot} ${s.trafficGreen}`} />
              </div>
              <div className={s.toolbarSpacer} />
              <div className={s.chromeRight}>
                <button
                  type="button"
                  className={`${s.chromeIconBtn} ${s.chromeIconBtnDisabled}`}
                  aria-label="Back (demo only)"
                  disabled
                >
                  <IcoChevronLeft size={10} />
                </button>
                <button
                  type="button"
                  className={`${s.chromeIconBtn} ${s.chromeIconBtnDisabled}`}
                  aria-label="More options (demo only)"
                  disabled
                >
                  <IcoMore />
                </button>
              </div>
            </div>

            {showToolbar && (
              <div className={`${s.toolbar} ${s.toolbarAnimated}`}>
                <button
                  type="button"
                  className={`${s.toolbarBtn} ${s.toolbarBtnDisabled}`}
                  aria-label="List view (demo only)"
                  disabled
                >
                  <IcoList />
                </button>
                <button
                  type="button"
                  className={showTemplates ? s.toolbarBtnActive : s.toolbarBtn}
                  aria-label="Templates"
                  aria-expanded={showTemplates}
                  onClick={() => {
                    const next = !showTemplates;
                    setShowTemplates(next);
                    setShowShare(false);
                    onStateChange(next ? "templates" : "enhanced-notes");
                  }}
                >
                  <IcoSparkle size={12} /> <IcoChevronRight />
                </button>
                <div className={s.toolbarSpacer} />
                <div className={s.segmentedControl}>
                  <div
                    className={`${s.segmentedIndicator} ${isPrivate ? s.segmentedIndicatorRight : ""}`}
                  />
                  <button
                    type="button"
                    className={`${s.segmentedBtn} ${!isPrivate ? s.segmentedBtnActive : ""}`}
                    onClick={() => {
                      if (isPrivate) onStateChange("enhanced-notes");
                    }}
                  >
                    Enhanced
                  </button>
                  <button
                    type="button"
                    className={`${s.segmentedBtn} ${isPrivate ? s.segmentedBtnActive : ""}`}
                    onClick={() => {
                      if (!isPrivate) onStateChange("private-notes");
                    }}
                  >
                    Private
                  </button>
                </div>
                <button
                  type="button"
                  className={
                    showShare ? `${s.shareBtn} ${s.shareBtnOpen}` : s.shareBtn
                  }
                  aria-expanded={showShare}
                  onClick={() => {
                    const next = !showShare;
                    setShowShare(next);
                    setShowTemplates(false);
                    onStateChange(next ? "share" : "enhanced-notes");
                  }}
                >
                  <IcoLock size={10} /> Share
                </button>
                <button
                  type="button"
                  className={s.toolbarBtn}
                  aria-label="Copy link"
                  onClick={handleCopyLink}
                >
                  <IcoLink />
                </button>
              </div>
            )}
          </>
        )}

        {/* Content */}
        {isBrief ? (
          <div className={s.notesScroll}>
            <div className={s.briefHeader}>
              <div className={s.briefHeaderTitle}>
                {PRE_MEETING_BRIEF.meetingTitle}
              </div>
              <div className={s.briefHeaderMeta}>
                <span className={s.noteChip}>
                  📅 Today · {PRE_MEETING_BRIEF.meetingTime}
                </span>
                <div className={s.briefHeaderAvatars}>
                  {PRE_MEETING_BRIEF.attendees.map((a) => (
                    <div
                      key={a.name}
                      className={s.notifAvatar}
                      style={{ backgroundColor: getAvatarColor(a.name) }}
                    >
                      {a.initials}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <BriefContent />
          </div>
        ) : isEnhancing ? (
          <EnhancerView
            onComplete={onEnhancerComplete}
            onCancel={onEnhancerCancel}
          />
        ) : (
          <div ref={notesScrollRef} className={s.notesScroll}>
            {showBriefThread && (
              <>
                <div className={s.viewBriefPillWrap}>
                  <button
                    type="button"
                    className={s.viewBriefPill}
                    onClick={() => setBriefExpanded((v) => !v)}
                    aria-expanded={briefExpanded}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{
                        transform: briefExpanded ? "rotate(180deg)" : undefined,
                        transition: "transform 200ms ease",
                      }}
                    >
                      <path
                        d="M2 7L5 4l3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {briefExpanded
                      ? "Hide pre-meeting brief"
                      : "View pre-meeting brief"}
                  </button>
                </div>
                {briefExpanded && (
                  <div className={s.briefThreadWrap}>
                    <BriefContent />
                  </div>
                )}
              </>
            )}

            <div ref={meetingTitleRef}>
              <div className={s.noteTitle}>{MEETING.title}</div>
              <div className={s.noteMeta}>
                <span className={s.noteChip}>📅 {MEETING.date}</span>
                <span className={s.noteChip}>👥 Me</span>
                <span className={s.noteChip}>+ Add to folder</span>
              </div>
            </div>

            {state === "empty-editor" && (
              <div className={s.notePlaceholder}>Write notes...</div>
            )}

            {isGeneratePrompt && (
              <div className={s.generatePromptArea}>
                <div className={s.meetingEndedBadge}>
                  <IcoStop size={10} /> Meeting ended · {MEETING.duration}
                </div>
                <div className={s.notePlaceholder}>
                  Generate notes or write your own...
                </div>
              </div>
            )}

            {isPrivate && (
              <ul className={s.privateNotesList}>
                {PRIVATE_NOTES.map((note, i) => (
                  <li key={i} className={s.privateNoteItem}>
                    {note}
                  </li>
                ))}
              </ul>
            )}

            {isEnhanced && (
              <>
                <EnhancedNotesContent
                  activeSourceId={activeSourceId}
                  onSourceClick={(id) => {
                    setActiveSourceId(id);
                    onStateChange("source-popover");
                  }}
                  onSourceClose={() => {
                    setActiveSourceId(null);
                    onStateChange("enhanced-notes");
                  }}
                />
                <div ref={actionsRef}>
                  <ActionsBar />
                </div>
              </>
            )}
          </div>
        )}

        {useFloatingActions && isEnhanced && !actionsVisible && (
          <>
            <div className={s.bottomFade} aria-hidden="true" />
            <button
              type="button"
              className={s.viewActionsFloat}
              onClick={scrollToActions}
            >
              <IcoSparkle size={12} /> View actions{" "}
              <IcoChevronRight size={10} />
            </button>
          </>
        )}

        {/* Generate Button */}
        {showGenerateBtn && (
          <div className={s.generateBtnWrap}>
            <button
              type="button"
              className={s.generateBtn}
              onClick={() => onStateChange("enhancing")}
            >
              <IcoSparkle size={14} /> Generate notes
            </button>
          </div>
        )}

        {/* Transcript / Chat overlays */}
        {showTranscript && (
          <TranscriptPanel onClose={() => onStateChange("enhanced-notes")} />
        )}
        {showChat && (
          <ChatPanel onClose={() => onStateChange("enhanced-notes")} />
        )}

        {/* Start Meeting button for brief state */}
        {isBrief && onStartMeeting && (
          <div className={s.briefBottomBar}>
            <button
              type="button"
              className={
                meetingReady
                  ? `${s.briefStartBtn} ${briefFlash ? s.briefStartFlash : ""}`
                  : s.briefCountdownBtn
              }
              onClick={onStartMeeting}
              onMouseEnter={() => setBriefFlash(false)}
            >
              {meetingReady ? (
                <>
                  <IcoPlay size={12} /> Start Meeting
                </>
              ) : (
                `Meeting starts in ${briefCountdown} min`
              )}
            </button>
          </div>
        )}

        {/* Bottom Bar -- visible for notes states, hidden during brief */}
        {!isBrief && (
          <BottomBar
            onTranscript={() =>
              onStateChange(showTranscript ? "enhanced-notes" : "transcript")
            }
            onResume={() => onStateChange("pill-expanded")}
            onChat={() => onStateChange(showChat ? "enhanced-notes" : "chat")}
            onFollowUp={() => {}}
            showResume={state === "empty-editor" || state === "generate-prompt"}
            askLabel={isEnhancing ? "Continue chat" : "Ask anything"}
            transcriptActive={showTranscript}
            chatActive={showChat}
            useGranolaLayout={useGranolaBottomBar}
          />
        )}
      </div>

      {/* Click-outside backdrop to dismiss dropdowns */}
      {hasOpenOverlay && (
        <div className={s.dropdownBackdrop} onClick={dismissOverlays} />
      )}

      {/* Toolbar dropdowns -- rendered outside .notesPanel to escape overflow:hidden */}
      {showTemplates && (
        <div className={s.toolbarDropdownOverlay}>
          <TemplatesDropdown
            onSelect={() => {
              setShowTemplates(false);
              onStateChange("enhancing");
            }}
          />
        </div>
      )}
      {showShare && (
        <div className={s.shareDropdownOverlay}>
          <ShareDropdown
            onAction={() => {
              setShowShare(false);
              onStateChange("enhanced-notes");
            }}
          />
        </div>
      )}

      {/* Copy link toast */}
      {copyToast && <div className={s.sageToast}>✓ Link copied</div>}
    </div>
  );
}
