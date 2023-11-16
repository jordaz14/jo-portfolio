import type { Metadata } from "next";
import { Oranienbaum } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${oranienbaum.className} overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
