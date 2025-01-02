'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { LocaleSwitcher } from "./locale-switcher/ui/locale-switcher";

export const UserSettingsDropdown = () => {

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem key={1}>
          <LocaleSwitcher />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
