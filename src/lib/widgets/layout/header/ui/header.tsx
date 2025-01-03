'use client';
import { Logo, Nav } from "@/widgets";
import { LoginButton } from "@/features";
import { UserSettingsDropdown } from "@/widgets/user-settings-dropdown";
import { cn } from "@/shared/utils/cn";
import { ButtonGroup } from "@nextui-org/react";

export const Header = ({ className = "" }: PropsWithClassName) => {
  return (
    <header className={cn("header", className)}>
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
        <ButtonGroup size="md" >
          <UserSettingsDropdown />
          <LoginButton />
        </ButtonGroup>
      </div>
    </header>
  );
};
