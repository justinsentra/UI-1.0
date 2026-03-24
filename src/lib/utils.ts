import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const avatarColors = [
  "#8B7E74", "#7A8B8B", "#8B7B8B", "#7B7E8B",
  "#8B8574", "#748B7E", "#7E7A8B", "#8B7478",
  "#74848B", "#847B74", "#7B8B74", "#8B8480",
  "#74808B", "#807484", "#7E8B7A", "#84807B",
]

export function getAvatarColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarColors[Math.abs(hash) % avatarColors.length]
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return (parts[0]?.[0] ?? "").toUpperCase()
}

export function formatParticipants(participants: string[]): string {
  if (participants.length === 0) return ""
  if (participants.length === 1) return participants[0]
  if (participants.length === 2) return `${participants[0]} and ${participants[1]}`
  return `${participants[0]}, ${participants[1]} +${participants.length - 2} more`
}
