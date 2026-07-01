import type { NavIconId } from "@/components/icons/nav-icons";

export type ShellNavItem = {
  href: string;
  label: string;
  icon: NavIconId;
};

export const shellNavItems: ShellNavItem[] = [
  { href: "/", label: "About", icon: "about" },
  { href: "/projects", label: "Projects", icon: "projects" },
  { href: "/contact", label: "Contact", icon: "contact" },
];

export function isNavItemActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
