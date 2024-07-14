import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { NextAuthProvider } from "./providers";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Invoice Generator",
  description: "App to generate free invoces",
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
          <Navbar />
          <main className={roboto.className}>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
