import { NavigationLink } from "./navigation-link";

export const NavigationMenu = async () => {
  return (
    <ul className="space-y-4 font-semibold">
      <li>
        <NavigationLink href="/resume" label="Resume" />
      </li>
      <li>
        <NavigationLink href="/resume/tech-stack" label="Tech stack" />
      </li>
      <li>
        <NavigationLink href="/resume/experience" label="Experience" />
      </li>
      <li>
        <NavigationLink href="/resume/education" label="Education" />
      </li>
      <li>
        <NavigationLink href="/resume/portfolio" label="Portfolio" />
      </li>
      <li>
        <NavigationLink href="/resume/contacts" label="Contacts" />
      </li>
    </ul>
  );
};
