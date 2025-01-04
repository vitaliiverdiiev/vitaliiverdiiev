"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Icon } from "@/shared/ui";
import { socialLinks } from "../model/social-links-array";

export const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-5 mb-[61px]">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <Button as={Link} href={link.url} target="_blank" variant="light" isIconOnly>
            <Icon icon={link.icon} />
          </Button>
        </li>
      ))}
    </ul>
  );
};
