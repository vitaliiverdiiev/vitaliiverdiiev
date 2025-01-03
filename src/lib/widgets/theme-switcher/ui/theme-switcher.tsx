import React from "react";
import { useTheme } from "@/app/providers";
import { Button } from "@nextui-org/react";
import { Icon } from "@/shared/ui";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onPress={toggleTheme} color="secondary" isIconOnly>
      {theme === "dark" ? <Icon icon="sun" /> : <Icon icon="moon" />}
    </Button>
  );
};
