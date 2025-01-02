import { Logo, Nav } from "@/widgets";
import { LoginButton } from "@/features";
import { UserSettingsDropdown } from "@/widgets/user-settings-dropdown";
import { cn } from "@/shared/utils/cn";

export const Header = ({ className = "" }: PropsWithClassName) => {
  return (
    <header className={cn("header", className)}>
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
        <div className="flex items-center justify-center gap-4">
          <UserSettingsDropdown />
          <LoginButton />
        </div>
      </div>
    </header>
  );
};
