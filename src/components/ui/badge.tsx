import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-bg-hover px-2 py-0.5 text-xs text-text-primary">
      {children}
    </span>
  );
}
