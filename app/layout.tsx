import type { Metadata } from "next";
import { Oranienbaum } from "next/font/google";
import "./globals.css";

const oranienbaum = Oranienbaum({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Ordaz",
  description: "My portfolio",
  icons: {
    icon: "/mountain.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oranienbaum.className} overflow-hidden`}>{children}</body>
    </html>
  );
}
