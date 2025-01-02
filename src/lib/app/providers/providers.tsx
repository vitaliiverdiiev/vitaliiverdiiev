import { PropsWithChildren } from "react";
import { NextUIProvider } from "./next-ui";
import { NextIntlProvider } from "./next-intl";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <NextIntlProvider>{children}</NextIntlProvider>
    </NextUIProvider>
  );
};
