"use client";

import { NavLink } from "@/components/layout/nav-link";

export function MobileNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg-main md:hidden"
    >
      <div className="mx-auto flex max-w-3xl">
        <NavLink href="/" label="About" icon="about" layout="mobile" />
        <NavLink
          href="/projects"
          label="Projects"
          icon="projects"
          layout="mobile"
          exact
        />
        <NavLink href="/contact" label="Contact" icon="contact" layout="mobile" />
      </div>
    </nav>
  );
}
