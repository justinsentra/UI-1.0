import { getAvatarColor, getInitials, cn } from "@/lib/utils"

type UserAvatarSize = "sm" | "default" | "md" | "lg" | "xl"

const sizeClasses: Record<UserAvatarSize, string> = {
  sm: "size-7 text-[10px]",
  default: "size-8 text-[11px]",
  md: "size-9 text-xs",
  lg: "size-10 text-xs",
  xl: "size-12 text-sm",
}

export function UserAvatar({
  name,
  size = "default",
  className,
}: {
  name: string
  size?: UserAvatarSize
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center text-white font-medium shrink-0",
        sizeClasses[size],
        className,
      )}
      style={{ backgroundColor: getAvatarColor(name) }}
    >
      {getInitials(name)}
    </div>
  )
}
