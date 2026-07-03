"use client";

import { NavLink } from "@/components/layout/nav-link";
import { ProjectsNavGroup } from "@/components/layout/projects-nav-group";

export function MobileNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg-main md:hidden"
    >
      <div className="relative mx-auto flex max-w-3xl">
        <NavLink href="/" label="About" icon="about" layout="mobile" />
        <ProjectsNavGroup layout="mobile" />
        <NavLink href="/contact" label="Contact" icon="contact" layout="mobile" />
      </div>
    </nav>
  );
}
