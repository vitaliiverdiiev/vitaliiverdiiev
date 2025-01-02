import type { Metadata } from "next";
import { Header, Main, Sidebar } from "@/widgets";
import "@/app/styles/global.css";

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
      <Sidebar />
      <Main>
        {children}
      </Main>
    </div>
  );
}
