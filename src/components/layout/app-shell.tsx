"use client";

import type { ReactNode } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SidebarContainer } from "@/components/layout/sidebar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-dvh bg-bg-deep">
      <SidebarContainer />
      <div className="flex min-w-0 flex-1 flex-col pb-14 md:pb-0">{children}</div>
      <MobileNav />
    </div>
  );
}
