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
  "Ashwin Gopinath": "#3A4D54",
  "Justin Cheng": "#3A4D54",
  "Andrey Starenky": "#6B7555",
  "Kristina Beaman": "#8B6B5B",
  "Lakshmi Shankar": "#6B7585",
  "James Richardson": "#5B6B55",
  "Kevin Liu": "#4A6670",
  "Ali Kazemi": "#7B5B8B",
  "Sarah Chen": "#5B7B8B",
  "Shaurya Patel": "#6B6555",
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
