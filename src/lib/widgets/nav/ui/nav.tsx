"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";
import { useTranslations } from "next-intl";

export const Nav = () => {
  const pathname = usePathname();
  const t = useTranslations("Links");

  return (
    <nav>
      <ul className="flex items-center gap-4">
        <NavLink href="/" label={t("home")} currentPath={pathname} />
        <NavLink href="/resume" label={t("resume")} currentPath={pathname} />
      </ul>
    </nav>
  );
};
