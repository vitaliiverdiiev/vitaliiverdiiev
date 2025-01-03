import {
  CaretDown,
  GearSix,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { g } from "framer-motion/client";

export const ICON_MAP = {
  "carret-down": CaretDown,
  github       : GithubLogo,
  instagram    : InstagramLogo,
  linkedin     : LinkedinLogo,
  settings     : GearSix,
  telegram     : TelegramLogo,
} as const;

export type IIconName = keyof typeof ICON_MAP;
