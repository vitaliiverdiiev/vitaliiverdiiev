import Link from "next/link";
import { normalizePath } from "@/shared/utils";

type Props = {
  label: string;
  href: string;
  currentPath: string;
};

export const NavLink: React.FC<Props> = ({ href, label, currentPath }) => {
  const currentStyles =
    normalizePath(href) === normalizePath(currentPath)
      ? "font-bold text-brand-dark"
      : "";

  return (
    <li>
      <Link href={href} className={currentStyles}>
        {label}
      </Link>
    </li>
  );
};
