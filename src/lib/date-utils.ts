export function formatTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatDateLabel(dateStr: string): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(dateStr + "T00:00:00");
  const diffMs = today.getTime() - date.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return `${date.getDate()} ${date.toLocaleDateString("en-US", { month: "long" })}`;
}

export function formatTimeRange(time: string, endTime?: string): string {
  if (!endTime) return time;
  const formatShort = (t: string) => {
    const match = t.match(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i);
    if (!match) return t;
    return match[1] + match[2].toLowerCase();
  };
  return `${formatShort(time)} – ${formatShort(endTime)}`;
}

export function formatInteractionDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  if (year === 2026) {
    return `${month} ${day}`;
  }
  return `${month} ${day}, ${year}`;
}
