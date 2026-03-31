import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full min-w-0 border border-input bg-input/20 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-foreground/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      size: {
        default: "h-7 px-2 py-0.5",
        sm: "h-6 px-2 py-0.5 text-xs",
        lg: "h-9 px-3 py-1.5",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-lg",
      },
    },
    defaultVariants: {
      size: "default",
      rounded: "default",
    },
  },
);

function Input({
  className,
  type,
  size = "default",
  rounded = "default",
  ...props
}: Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, rounded }), className)}
      {...props}
    />
  );
}

export { Input };
