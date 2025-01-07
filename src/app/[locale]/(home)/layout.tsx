import type { Metadata } from "next";
import { Footer, Header } from "@/widgets";
import "@/app/styles/global.css";

export const metadata: Metadata = {
  title: "VitaliiVerdiiev | Home",
  description:
    "Hi! I am Vitalii Verdiiev. I am a JavaScript Full-stack Developer.",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="home-page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
