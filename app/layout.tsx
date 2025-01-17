import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DefaultSeo } from "next-seo";
import { Open_Sans } from "next/font/google";
import Meta from "@/components/Meta";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aayush Mohan",
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
        <Meta />
      </head>
      <body className={open_sans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
