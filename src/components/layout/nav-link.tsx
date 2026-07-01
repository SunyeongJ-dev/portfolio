"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavIcon, type NavIconId } from "@/components/icons/nav-icons";
import { isNavItemActive } from "@/components/layout/shell-nav-items";

type NavLinkProps = {
  href: string;
  label: string;
  icon: NavIconId;
  collapsed?: boolean;
  layout?: "sidebar" | "mobile";
};

export function NavLink({
  href,
  label,
  icon,
  collapsed = false,
  layout = "sidebar",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isNavItemActive(pathname, href);

  const baseClasses =
    layout === "mobile"
      ? "flex flex-1 flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-[10px] leading-tight transition-colors"
      : `flex items-center rounded-md px-3 py-2 text-sm transition-colors ${
          collapsed ? "justify-center lg:justify-start lg:gap-3" : "gap-3"
        }`;

  const activeClasses =
    layout === "mobile"
      ? "text-accent-primary"
      : "bg-bg-hover text-text-primary";

  const inactiveClasses =
    layout === "mobile"
      ? "text-text-muted hover:text-text-primary"
      : "text-text-muted hover:bg-bg-hover hover:text-text-primary";

  const iconClasses =
    layout === "mobile"
      ? isActive
        ? "text-accent-primary"
        : "text-accent-soft"
      : isActive
        ? "text-accent-primary"
        : "text-accent-soft";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {layout === "mobile" ? (
        <>
          <NavIcon icon={icon} className={`h-3.5 w-3.5 ${iconClasses}`} />
          <span>{label}</span>
        </>
      ) : (
        <>
          <span
            aria-hidden="true"
            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-bg-editor lg:h-7 lg:w-7 ${iconClasses}`}
          >
            <NavIcon icon={icon} className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
          </span>
          {!collapsed ? (
            <span>{label}</span>
          ) : (
            <span className="hidden lg:inline">{label}</span>
          )}
        </>
      )}
    </Link>
  );
}
