"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { LocaleSwitcher } from "./locale-switcher/ui/locale-switcher";
import { Icon } from "@/shared/ui";

export const UserSettingsDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          isIconOnly
          aria-label="User settings dropdown"
        >
          <Icon icon="carret-down" size={16} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User settings dropdown">
        <DropdownItem key={1}>
          <div className="grid grid-cols-[auto_1fr] items-center gap-8">
            <span>Lang:</span>
            <LocaleSwitcher />
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
