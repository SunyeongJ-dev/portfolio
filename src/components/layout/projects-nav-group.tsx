"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  IconChevronDown,
  IconChevronRight,
  IconFolder,
} from "@/components/icons/nav-icons";
import { NavSubLink } from "@/components/layout/nav-sub-link";
import { projects } from "@/data/projects";

type ProjectsNavGroupProps = {
  collapsed?: boolean;
  layout?: "sidebar" | "mobile";
};

export function ProjectsNavGroup({
  collapsed = false,
  layout = "sidebar",
}: ProjectsNavGroupProps) {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  const isInProjectsSection = pathname.startsWith("/projects");
  const [open, setOpen] = useState(isInProjectsSection);

  useEffect(() => {
    if (isInProjectsSection) {
      setOpen(true);
    }
  }, [isInProjectsSection]);

  if (layout === "mobile") {
    return (
      <div className="relative flex flex-1">
        <Link
          href="/projects"
          aria-current={isProjectsPage ? "page" : undefined}
          className={`flex flex-1 flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-[10px] leading-tight transition-colors ${
            isProjectsPage
              ? "text-accent-primary"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          <IconFolder
            className={`h-3.5 w-3.5 ${
              isProjectsPage ? "text-accent-primary" : "text-accent-soft"
            }`}
          />
          <span>Projects</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Collapse projects folder" : "Expand projects folder"}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-1 text-text-muted"
        >
          {open ? (
            <IconChevronDown className="h-3 w-3" />
          ) : (
            <IconChevronRight className="h-3 w-3" />
          )}
        </button>

        {open ? (
          <div className="absolute inset-x-0 bottom-full border-t border-border bg-bg-main p-2">
            {projects.map((project) => (
              <NavSubLink
                key={project.slug}
                href={`/projects/${project.slug}`}
                label={project.title}
                layout="mobile"
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  const showLabels = !collapsed;
  const folderActiveClasses = isProjectsPage
    ? "bg-bg-hover text-text-primary"
    : "text-text-muted hover:bg-bg-hover hover:text-text-primary";

  return (
    <div>
      <div
        className={`flex items-center rounded-md text-sm transition-colors ${folderActiveClasses}`}
      >
        <Link
          href="/projects"
          aria-current={isProjectsPage ? "page" : undefined}
          className={`flex min-w-0 flex-1 items-center gap-3 px-3 py-2 ${
            collapsed ? "justify-center lg:justify-start" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-bg-editor lg:h-7 lg:w-7 ${
              isProjectsPage ? "text-accent-primary" : "text-accent-soft"
            }`}
          >
            <IconFolder className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
          </span>
          {showLabels ? (
            <span className="truncate">Projects</span>
          ) : (
            <span className="hidden truncate lg:inline">Projects</span>
          )}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Collapse projects folder" : "Expand projects folder"}
          className={`rounded-md p-1 text-text-muted transition-colors hover:bg-bg-deep hover:text-text-primary ${
            collapsed ? "mr-1 lg:mr-2" : "mr-2"
          }`}
        >
          {open ? (
            <IconChevronDown className="h-3.5 w-3.5" />
          ) : (
            <IconChevronRight className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {open ? (
        <div className="mt-1 space-y-0.5">
          {projects.map((project) => (
            <NavSubLink
              key={project.slug}
              href={`/projects/${project.slug}`}
              label={project.title}
              collapsed={collapsed}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
