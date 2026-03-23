import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLORS: Record<string, string> = {
  "Raj Sundaram": "#3A4D54",
  "Leo Hartwell": "#3A4D54",
  "Pavel Volkov": "#6B7555",
  "Ingrid Solberg": "#8B6B5B",
  "Meera Kapoor": "#6B7585",
  "James Richardson": "#5B6B55",
  "Derek Huang": "#4A6670",
  "Ali Kazemi": "#7B5B8B",
  "Fiona Webb": "#5B7B8B",
  "Arjun Reddy": "#6B6555",
};

export function formatParticipants(names: string[]): string {
  const firstNames = names.map((n) => n.split(" ")[0]);
  if (firstNames.length <= 2) {
    return firstNames.join(" & ");
  }
  const [first, second, ...rest] = firstNames;
  return `${first}, ${second} & ${rest.length} other${rest.length > 1 ? "s" : ""}`;
}

export function getAvatarColor(name: string): string {
  if (AVATAR_COLORS[name]) return AVATAR_COLORS[name];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 25%, 40%)`;
}
