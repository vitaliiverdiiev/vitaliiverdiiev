'use client';

import { PropsWithChildren } from "react";
import { NextUIProvider as UIProvider } from "@nextui-org/react";

export const NextUIProvider = ({ children }: PropsWithChildren) => {
  return <UIProvider>{children}</UIProvider>;
};
