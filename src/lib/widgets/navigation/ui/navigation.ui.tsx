"use client"; // TODO: CHECK IF CAN REMOVE !!!

import { routes } from "@/shared/config";
import { NavLink } from "./navigation.link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4">
        <NavLink
          href={routes.home.path()}
          label={routes.home.label}
          currentPath={pathname}
        />
        <NavLink
          href={routes.resume.path()}
          label={routes.resume.label}
          currentPath={pathname}
        />
        <NavLink
          href={routes.dojo.path()}
          label={routes.dojo.label}
          currentPath={pathname}
        />
      </ul>
    </nav>
  );
};
