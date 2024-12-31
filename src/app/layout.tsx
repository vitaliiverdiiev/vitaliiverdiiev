import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Header, Main, Sidebar } from "@/widgets/layout";
import { geistMono, geistSans } from "./font";
import "@/app/styles/global.css";

export const metadata: Metadata = {
  title: "VitaliiVerdiiev",
  description: "With love for coding.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div id="app">
            <Header />
            <Sidebar />
            <Main>{children}</Main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
