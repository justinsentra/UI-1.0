import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  SidebarProvider,
  SidebarResizeHandle,
  useSidebar,
} from "@/components/ui/sidebar";

interface RightSidebarProviderProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  onWidthChange?: (width: number) => void;
  children: ReactNode;
}

export function RightSidebarProvider({
  open,
  onOpenChange,
  defaultWidth = 380,
  minWidth = 320,
  maxWidth = 520,
  onWidthChange,
  children,
}: RightSidebarProviderProps) {
  return (
    <SidebarProvider
      open={open}
      onOpenChange={onOpenChange}
      defaultWidth={defaultWidth}
      minWidth={minWidth}
      maxWidth={maxWidth}
      keyboardShortcut={null}
      className="w-auto min-w-0 shrink-0"
    >
      <RightSidebarInner onWidthChange={onWidthChange}>
        {children}
      </RightSidebarInner>
    </SidebarProvider>
  );
}

function RightSidebarInner({
  children,
  onWidthChange,
}: {
  children: ReactNode;
  onWidthChange?: (width: number) => void;
}) {
  const { open, sidebarWidth } = useSidebar();

  return (
    <div
      className="shrink-0 h-full overflow-hidden transition-[width] duration-200 ease-out"
      style={{ width: open ? sidebarWidth : 0 }}
    >
      {/* Inner div stays at full width so content never squishes during animation */}
      <div className="relative h-full" style={{ width: sidebarWidth }}>
        <SidebarResizeHandle side="right" fullHeight onWidthChange={onWidthChange} />
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export function RightSidebarContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      {children}
    </div>
  );
}
