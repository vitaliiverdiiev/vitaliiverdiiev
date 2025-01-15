import { PropsWithChildren } from "react";
import { Header, Navigation } from "@/widgets";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Navigation />
        <span></span>
      </Header>
      {children}
    </>
  );
}
