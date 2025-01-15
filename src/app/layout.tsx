import { KarlaFont } from "./font";
import '@/app/styles/globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang={"en"} className="light">
      <body className={`${KarlaFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
