import { X } from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  close: X,
} as const;

export type IIconName = keyof typeof ICON_MAP;
