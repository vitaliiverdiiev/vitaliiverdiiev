import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="sidebar overflow-auto">
      <Link href="/general-information">General information</Link>
      <Link href="/experience">Tech stack</Link>
      <Link href="/experience">Expeience</Link>
      <Link href="/education">Education</Link>
    </aside>
  );
};
