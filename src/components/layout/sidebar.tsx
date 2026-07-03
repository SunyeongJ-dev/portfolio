"use client";

import { useState } from "react";

import {
  IconChevronLeft,
  IconChevronRight,
} from "@/components/icons/nav-icons";
import { NavLink } from "@/components/layout/nav-link";
import { ProjectsNavGroup } from "@/components/layout/projects-nav-group";

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      aria-label="Primary"
      className={`hidden shrink-0 flex-col border-r border-border bg-bg-main transition-[width] duration-200 md:flex ${
        collapsed ? "w-16 lg:w-56" : "w-56"
      }`}
    >
      <div className="flex h-14 shrink-0 items-center border-b border-border px-4">
        {collapsed ? (
          <span
            aria-hidden="true"
            className="mx-auto font-mono text-sm text-accent-primary lg:hidden"
          >
            SJ
          </span>
        ) : null}
        <p
          className={`truncate font-medium text-text-primary ${
            collapsed ? "sr-only lg:not-sr-only" : ""
          }`}
        >
          Sunyeong Jeon
        </p>
      </div>

      <nav id="sidebar-navigation" className="flex flex-1 flex-col gap-1 p-3">
        <NavLink href="/" label="About" icon="about" collapsed={collapsed} />
        <ProjectsNavGroup collapsed={collapsed} />
        <NavLink
          href="/contact"
          label="Contact"
          icon="contact"
          collapsed={collapsed}
        />
      </nav>

      <div className="border-t border-border p-3 lg:hidden">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={!collapsed}
          aria-controls="sidebar-navigation"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex w-full items-center justify-center rounded-md border border-border bg-bg-editor px-3 py-2 text-text-primary transition-colors hover:bg-bg-hover"
        >
          {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
        </button>
      </div>
    </aside>
  );
}

export function SidebarContainer() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar
      collapsed={collapsed}
      onToggle={() => setCollapsed((current) => !current)}
    />
  );
}
