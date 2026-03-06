import { useState, useCallback } from "react";
import s from "./sage.module.css";
import { PRE_MEETING_BRIEF } from "./sageData";

/* Google Meet icon as inline SVG */
function MeetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#00897B" />
      <path
        d="M15.5 8.5L18 6.5V17.5L15.5 15.5V8.5Z"
        fill="white"
        fillOpacity="0.9"
      />
      <rect x="5" y="7" width="11" height="10" rx="1.5" fill="white" />
      <rect
        x="5"
        y="7"
        width="11"
        height="10"
        rx="1.5"
        fill="#00897B"
        fillOpacity="0.15"
      />
    </svg>
  );
}

export function Notification({ onLaunch }: { onLaunch: () => void }) {
  const [dismissing, setDismissing] = useState(false);

  const handleLaunch = useCallback(() => {
    setDismissing(true);
    setTimeout(onLaunch, 200);
  }, [onLaunch]);

  return (
    <div
      className={`${s.notification} ${dismissing ? s.notificationDismissing : ""}`}
    >
      <div className={s.notifLeft}>
        <div className={s.notifTimePill} />
        <div className={s.notifCopyWrap}>
          <div className={s.notifMeetingName}>
            {PRE_MEETING_BRIEF.meetingTitle}
          </div>
          <div className={s.notifMeetingTime}>
            {PRE_MEETING_BRIEF.meetingTime} - {PRE_MEETING_BRIEF.meetingEndTime}
          </div>
        </div>
      </div>
      <button type="button" className={s.notifJoinBtn} onClick={handleLaunch}>
        <MeetIcon />
        <div className={s.notifJoinText}>
          <span className={s.notifJoinTitle}>Join Meeting</span>
          <span className={s.notifJoinSub}>& open Sentra</span>
        </div>
      </button>
    </div>
  );
}

export function PreMeetingNotification({
  onViewBrief,
  onDismiss,
}: {
  onViewBrief: () => void;
  onDismiss: () => void;
}) {
  const [dismissing, setDismissing] = useState(false);

  const handleDismiss = useCallback(() => {
    setDismissing(true);
    setTimeout(onDismiss, 200);
  }, [onDismiss]);

  const handleView = useCallback(() => {
    setDismissing(true);
    setTimeout(onViewBrief, 200);
  }, [onViewBrief]);

  return (
    <div
      className={`${s.preMeetingNotif} ${dismissing ? s.notificationDismissing : ""}`}
    >
      {/* Top section: meeting info + join button */}
      <div className={s.preMeetingTop}>
        <div className={s.notifLeft}>
          <div className={s.notifTimePill} />
          <div className={s.notifCopyWrap}>
            <div className={s.notifMeetingName}>
              {PRE_MEETING_BRIEF.meetingTitle}
            </div>
            <div className={s.notifMeetingTime}>
              {PRE_MEETING_BRIEF.meetingTime} -{" "}
              {PRE_MEETING_BRIEF.meetingEndTime}
            </div>
          </div>
        </div>
        <button type="button" className={s.notifJoinBtn} onClick={handleView}>
          <MeetIcon />
          <div className={s.notifJoinText}>
            <span className={s.notifJoinTitle}>Join Meeting</span>
            <span className={s.notifJoinSub}>& open Sentra</span>
          </div>
        </button>
      </div>

      {/* Bottom section: View Brief / Dismiss pills */}
      <div className={s.preMeetingActions}>
        <button
          type="button"
          className={s.preMeetingViewBtn}
          onClick={handleView}
        >
          View Brief
        </button>
        <button
          type="button"
          className={s.preMeetingDismissBtn}
          onClick={handleDismiss}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
