"use client";

import { shellNavItems } from "@/components/layout/shell-nav-items";
import { NavLink } from "@/components/layout/nav-link";

export function MobileNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg-main md:hidden"
    >
      <div className="mx-auto flex max-w-3xl">
        {shellNavItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            layout="mobile"
          />
        ))}
      </div>
    </nav>
  );
}
