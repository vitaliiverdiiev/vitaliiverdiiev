"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type Props = LinkProps & {
  label: string;
  activeClassName?: string;
  nonActiveClassName?: string;
  className?: string;
};

export const NavigationLink: React.FC<Props> = ({
  label,
  href,
  activeClassName = "text-green-500",
  nonActiveClassName,
  className,
  ...rest
}) => {
  const pathname = usePathname();

  const isActive =
    pathname.endsWith(href as string) ||
    ((href as string).includes(pathname) && pathname !== "/");

  const newClassName = `${
    isActive ? activeClassName : nonActiveClassName
  } ${className}`;

  return (
    <Link href={href} className={newClassName} {...rest}>
      {label}
    </Link>
  );
};
