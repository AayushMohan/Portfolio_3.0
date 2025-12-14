import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Open_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";

const open_sans = Open_Sans({ subsets: ["latin"] });

const siteUrl = "https://aayushmohan.dev";
const defaultTitle = "Aayush Mohan – Web & ML Engineer";
const defaultDescription =
  "Full-stack engineer crafting immersive web experiences and applied machine learning products across the stack.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Aayush Mohan",
  },
  description: defaultDescription,
  keywords: [
    "Aayush Mohan",
    "Web Developer",
    "Machine Learning Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Aayush Mohan", url: siteUrl }],
  creator: "Aayush Mohan",
  publisher: "Aayush Mohan",
  category: "technology",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-IN": siteUrl,
    },
  },
  icons: {
    icon: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Aayush Mohan Portfolio",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/images/AayushMohan.jpg`,
        width: 1200,
        height: 630,
        alt: "Portrait of Aayush Mohan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aayushmohan",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/images/AayushMohan.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={open_sans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
