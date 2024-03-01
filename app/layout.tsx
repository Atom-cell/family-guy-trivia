import type { Metadata } from "next";
import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const poppins = Shantell_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Family Guy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
