import { GearSix } from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  settings: GearSix,
} as const;

export type IIconName = keyof typeof ICON_MAP;
