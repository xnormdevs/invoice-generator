import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { NextAuthProvider } from "./providers";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/redux/Provider";
import { MessageProvider } from "@/hooks/useMessage";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: '%s | Invoice Generator',
    default: 'Invoice Generator',
  },
  description: "App to generate free PDF for your business invoices, letters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <MessageProvider>
            <Providers>
              <Navbar />
              <main className={roboto.className}>{children}</main>
            </Providers>
          </MessageProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
