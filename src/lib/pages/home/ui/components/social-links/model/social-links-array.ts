import { IIconName } from "@/shared/ui";

export type SocialLink = {
  name: string;
  url: string;
  icon: IIconName;
};

export const socialLinks: SocialLink[] = [
  {
    name: "github",
    url : "https://github.com/vitaliiverdiiev",
    icon: "github",
  },
  {
    name: "linkedin",
    url : "https://linkedin.com/in/vitaliiverdiiev",
    icon: "linkedin",
  },
  {
    name: "instagram",
    url : "https://instagram.com/ukrainiancustomer",
    icon: "instagram",
  },
  {
    name: "telegram",
    url : "https://t.me/ukrainiancustomer",
    icon: "telegram",
  },
];
