import { PropsWithChildren } from "react";
import { NextUIProvider } from "./next-ui";

export const Providers = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
