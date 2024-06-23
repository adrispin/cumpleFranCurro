import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import group from "@/images/grupo.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muchísimas felicidades!!",
  description: "Hoy es vuesto cumple! Feliz cumple a ambos!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content={group.src} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

