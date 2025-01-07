import type { Metadata } from "next";
import { Header, Main, Sidebar } from "@/widgets";
import "@/app/styles/global.css";
import { SidebarNav } from "@/widgets/layout/sidebar/ui/sidebar-nav";

export const metadata: Metadata = {
  title: "VitaliiVerdiiev | Home",
  description:
  "Hi! I am Vitalii Verdiiev. I am a JavaScript Full-stack Developer.",
};


export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="app">
      <Header />
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <Main>{children}</Main>
    </div>
  );
}
