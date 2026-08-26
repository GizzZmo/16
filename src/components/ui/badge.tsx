import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg",
        outline: "bg-transparent text-muted shadow-[var(--shadow-border)]",
        surface: "bg-surface text-fg",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
