"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4">
        <NavLink href="/" label="Home" currentPath={pathname} />
        <NavLink href="/resume" label="Resume" currentPath={pathname} />
      </ul>
    </nav>
  );
};
