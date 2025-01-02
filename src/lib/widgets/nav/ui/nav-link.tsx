import Link from "next/link";

type Props = {
  label: string;
  href: string;
  currentPath: string;
};

export const NavLink: React.FC<Props> = ({ href, label, currentPath }) => {
  const currentStyles = currentPath === href ? "font-bold" : "";

  return (
    <li>
      <Link href={href} className={currentStyles}>
        {label}
      </Link>
    </li>
  );
};
