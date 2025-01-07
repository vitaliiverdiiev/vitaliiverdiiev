'use client';
import { Logo, Nav } from "@/widgets";
// import { LoginButton } from "@/features";
// import { UserSettingsDropdown } from "@/widgets/user-settings-dropdown";
import { cn } from "@/shared/utils/cn";
// import { ButtonGroup } from "@nextui-org/react";
import { ThemeToggle } from "@/widgets/theme-switcher/ui/theme-switcher";
import { LocaleSwitcher } from "@/widgets/locale-switcher/ui/locale-switcher";

export const Header = ({ className = "" }: PropsWithClassName) => {
  return (
    <header className={cn("header", className)}>
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};
