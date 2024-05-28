import "./globals.css";
import type { Metadata } from "next";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import { Open_Sans } from "next/font/google";
import Meta from "@/components/Meta";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aayush Mohan's Portfolio",
  description: "A Web Developer & Machine Learning Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...seoConfig} />
        <Meta />
      </head>
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
