"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/widgets/nav/ui/nav-link";

export const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <NavLink 
        href={"/resume/info"} 
        currentPath={pathname} 
        label="Info" 
      />
      <NavLink
        href={"/resume/summary"}
        currentPath={pathname}
        label="Summary"
      />
      <NavLink
        href={"/resume/tech-stack"}
        currentPath={pathname}
        label="Tech stack"
      />
    </nav>
  );
};
