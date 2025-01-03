import React from "react";
import { Switch } from "@nextui-org/react";
import { Icon } from "@/shared/ui";
import { useTheme } from "@/app/providers";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      size="lg"
      color="secondary"
      startContent={<Icon icon="sun" />}
      endContent={<Icon icon="moon" />}
    />
  );
};
