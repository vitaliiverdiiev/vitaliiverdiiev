import { PropsWithChildren } from "react";
import { NextUIProvider } from "./next-ui";
import { NextIntlProvider } from "./next-intl";
import { ThemeProvider } from "./theme";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <NextUIProvider>
        <NextIntlProvider>{children}</NextIntlProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
};
