import { Locale } from "@/shared/config/i18n/routing";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  params: {
    locale: Locale;
  };
};
