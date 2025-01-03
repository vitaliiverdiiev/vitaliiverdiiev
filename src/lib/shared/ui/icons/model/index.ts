import {
  CaretDown,
  GearSix,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
  SunDim,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  "carret-down": CaretDown,
  github       : GithubLogo,
  instagram    : InstagramLogo,
  linkedin     : LinkedinLogo,
  moon         : Moon,
  settings     : GearSix,
  sun          : SunDim,
  telegram     : TelegramLogo,
} as const;

export type IIconName = keyof typeof ICON_MAP;
