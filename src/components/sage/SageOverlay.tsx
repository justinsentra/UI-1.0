import { useState, useCallback, useEffect, useRef } from "react";
import type { SageState } from "./sage-types";
import { Notification, PreMeetingNotification } from "./sage-notifications";
import { PillCollapsed, PillExpanded } from "./sage-pill";
import { NotesPanel } from "./sage-notes-panel";

const NEEDS_NOTES_PANEL = new Set<SageState>([
  "pre-meeting-brief",
  "empty-editor",
  "generate-prompt",
  "enhancing",
  "enhanced-notes",
  "templates",
  "share",
  "source-popover",
  "private-notes",
  "transcript",
  "chat",
]);

export function SageOverlay() {
  const [state, setState] = useState<SageState>("landing");
  const [elapsed, setElapsed] = useState(0);
  const [briefThreadVisible, setBriefThreadVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const demoTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const meetingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAllTimeouts = useCallback(() => {
    if (demoTimeoutRef.current) {
      clearTimeout(demoTimeoutRef.current);
      demoTimeoutRef.current = null;
    }
    if (meetingTimeoutRef.current) {
      clearTimeout(meetingTimeoutRef.current);
      meetingTimeoutRef.current = null;
    }
  }, []);

  const startRecordingTimer = useCallback(() => {
    setElapsed(0);
    timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
  }, []);

  const stopRecordingTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      stopRecordingTimer();
      clearAllTimeouts();
    };
  }, [stopRecordingTimer, clearAllTimeouts]);

  const handleStateChange = useCallback(
    (newState: SageState) => {
      clearAllTimeouts();
      if (
        newState === "pill-collapsed" ||
        newState === "pill-expanded" ||
        newState === "meeting-active"
      ) {
        if (!timerRef.current) startRecordingTimer();
      } else {
        stopRecordingTimer();
      }
      setState(newState);
    },
    [startRecordingTimer, stopRecordingTimer, clearAllTimeouts],
  );

  // Auto-start the demo when mounted (window just opened)
  useEffect(() => {
    setBriefThreadVisible(false);
    setState("desktop-idle");
    demoTimeoutRef.current = setTimeout(
      () => setState("pre-meeting-notif"),
      1500,
    );
    return () => clearAllTimeouts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewBrief = useCallback(() => {
    clearAllTimeouts();
    setState("pre-meeting-brief");
  }, [clearAllTimeouts]);

  const handleStartMeeting = useCallback(() => {
    clearAllTimeouts();
    startRecordingTimer();
    setBriefThreadVisible(true);
    setState("meeting-active");
    demoTimeoutRef.current = setTimeout(() => {
      setState("pill-collapsed");
      meetingTimeoutRef.current = setTimeout(() => {
        stopRecordingTimer();
        setState("generate-prompt");
      }, 4000);
    }, 3000);
  }, [startRecordingTimer, stopRecordingTimer, clearAllTimeouts]);

  const handleLaunchMeeting = useCallback(() => {
    clearAllTimeouts();
    startRecordingTimer();
    setState("pill-collapsed");
    meetingTimeoutRef.current = setTimeout(() => {
      stopRecordingTimer();
      setState("empty-editor");
    }, 6000);
  }, [startRecordingTimer, stopRecordingTimer, clearAllTimeouts]);

  const isNotesPanel = NEEDS_NOTES_PANEL.has(state);
  const isBriefPanel = state === "pre-meeting-brief";
  const isIdle = state === "landing" || state === "desktop-idle";

  if (isIdle) return null;

  return (
    <>
      {/* Floating notification -- top right, tucked near macOS menu bar */}
      {state === "pre-meeting-notif" && (
        <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
          <PreMeetingNotification
            onViewBrief={handleViewBrief}
            onDismiss={() => handleStateChange("desktop-idle")}
          />
        </div>
      )}

      {/* Meeting start notification -- top right */}
      {state === "notification" && (
        <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
          <Notification onLaunch={handleLaunchMeeting} />
        </div>
      )}

      {/* Recording pill -- top center */}
      {state === "meeting-active" && (
        <div
          style={{
            position: "fixed",
            top: 4,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          <PillCollapsed onClick={() => {}} useNewPill />
        </div>
      )}
      {state === "pill-collapsed" && (
        <div
          style={{
            position: "fixed",
            top: 4,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          <PillCollapsed
            onClick={() => handleStateChange("pill-expanded")}
            useNewPill
          />
        </div>
      )}
      {state === "pill-expanded" && (
        <div
          style={{
            position: "fixed",
            top: 4,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          <PillExpanded
            onCollapse={() => handleStateChange("pill-collapsed")}
            onStop={() => handleStateChange("generate-prompt")}
            elapsed={elapsed}
            useNewPill
          />
        </div>
      )}

      {/* Notes Panel -- right-aligned */}
      {isNotesPanel && (
        <div
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            bottom: 16,
            width: isBriefPanel ? 380 : 660,
            zIndex: 9998,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow:
                "0 4px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.08)",
            }}
          >
            <NotesPanel
              state={state}
              onStateChange={handleStateChange}
              showBriefThread={
                briefThreadVisible && state !== "pre-meeting-brief"
              }
              onStartMeeting={handleStartMeeting}
              useGranolaBottomBar
              useFloatingActions
              useCompactToolbar
            />
          </div>
        </div>
      )}
    </>
  );
}
