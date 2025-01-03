import type { Metadata } from "next";
import { geistMono, geistSans } from "./font";
import { Providers } from "@/app/providers";
import "@/app/styles/global.css";

export const metadata: Metadata = {
  title      : "VitaliiVerdiiev",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
