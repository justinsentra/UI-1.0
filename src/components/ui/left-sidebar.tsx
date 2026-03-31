import type { ReactNode } from "react";
import {
  SidebarProvider,
  SidebarResizeHandle,
  useSidebar,
} from "@/components/ui/sidebar";

interface LeftSecondarySidebarProps {
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  onWidthChange?: (width: number) => void;
  cssVar?: string;
  children: ReactNode;
}

export function LeftSecondarySidebar({
  defaultWidth = 220,
  minWidth = 180,
  maxWidth = 360,
  onWidthChange,
  cssVar,
  children,
}: LeftSecondarySidebarProps) {
  return (
    <SidebarProvider
      defaultOpen
      defaultWidth={defaultWidth}
      minWidth={minWidth}
      maxWidth={maxWidth}
      keyboardShortcut={null}
      className="w-auto min-w-0 shrink-0"
    >
      <LeftSidebarInner onWidthChange={onWidthChange} cssVar={cssVar}>
        {children}
      </LeftSidebarInner>
    </SidebarProvider>
  );
}

function LeftSidebarInner({
  children,
  onWidthChange,
  cssVar,
}: {
  children: ReactNode;
  onWidthChange?: (width: number) => void;
  cssVar?: string;
}) {
  const { sidebarWidth } = useSidebar();

  return (
    <div
      className="relative shrink-0 h-full overflow-hidden border-r"
      style={{ width: sidebarWidth }}
    >
      <SidebarResizeHandle
        side="left"
        fullHeight
        onWidthChange={onWidthChange}
        cssVar={cssVar}
      />
      <div className="h-full overflow-hidden">{children}</div>
    </div>
  );
}
