import { Providers } from "@/app/providers";
import "@/app/styles/global.css";
import { LayoutProps } from "../../_app/[locale]/types";
import { routing } from "@/shared/config/i18n/routing";
import { KarlaFont } from "./(home)/font";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark">
      <body
        className={`${KarlaFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
