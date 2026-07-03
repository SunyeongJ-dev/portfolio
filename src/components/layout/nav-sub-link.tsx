"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconFile } from "@/components/icons/nav-icons";

type NavSubLinkProps = {
  href: string;
  label: string;
  collapsed?: boolean;
  layout?: "sidebar" | "mobile";
};

export function NavSubLink({
  href,
  label,
  collapsed = false,
  layout = "sidebar",
}: NavSubLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses =
    layout === "mobile"
      ? "block rounded-md px-3 py-2 text-xs transition-colors"
      : `flex items-center gap-2 rounded-md py-1.5 text-xs transition-colors ${
          collapsed
            ? "justify-center px-2 lg:justify-start lg:pl-9 lg:pr-3"
            : "pl-9 pr-3"
        }`;

  const activeClasses =
    layout === "mobile"
      ? "bg-bg-hover text-text-primary"
      : "bg-bg-hover text-text-primary";

  const inactiveClasses =
    layout === "mobile"
      ? "text-text-muted hover:bg-bg-hover hover:text-text-primary"
      : "text-text-muted hover:bg-bg-hover hover:text-text-primary";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      aria-label={collapsed && layout === "sidebar" ? label : undefined}
      title={collapsed && layout === "sidebar" ? label : undefined}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {layout === "sidebar" ? (
        <IconFile
          className={`h-3 w-3 shrink-0 ${
            isActive ? "text-accent-primary" : "text-accent-soft"
          }`}
        />
      ) : null}
      <span
        className={
          collapsed && layout === "sidebar" ? "sr-only lg:not-sr-only" : "truncate"
        }
      >
        {label}
      </span>
    </Link>
  );
}
