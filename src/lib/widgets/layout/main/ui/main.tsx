import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return <main className="main overflow-auto">{children}</main>;
};
