import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

const PageShell = ({ children, className }: PageShellProps) => (
  <div
    className={cn("max-w-3xl mx-auto pt-14 px-8 pb-16 min-h-screen", className)}
  >
    {children}
  </div>
);

export default PageShell;
