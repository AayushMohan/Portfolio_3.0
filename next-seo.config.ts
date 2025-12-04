import { DefaultSeoProps } from "next-seo";

const SITE_URL = "https://aayushmohan.dev";
const SITE_NAME = "Aayush Mohan Portfolio";
const DEFAULT_DESCRIPTION =
  "Web developer passionate about AI/ML, building scalable products with JavaScript, TypeScript, React, Node.js, and modern tooling.";
const OG_IMAGE = `${SITE_URL}/images/AayushMohan.jpg`;

const seoConfig: DefaultSeoProps = {
  titleTemplate: "%s | Aayush Mohan",
  defaultTitle: "Aayush Mohan – Web & ML Engineer",
  description: DEFAULT_DESCRIPTION,
  canonical: SITE_URL,
  additionalMetaTags: [
    { name: "author", content: "Aayush Mohan" },
    { name: "keywords", content: "Aayush Mohan, Web Developer, AI Engineer, React, Node.js, TypeScript, Portfolio" },
    { name: "theme-color", content: "#030213" },
  ],
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "manifest", href: "/manifest.json" },
  ],
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Aayush Mohan – Web & ML Engineer",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Portrait of Aayush Mohan",
        type: "image/jpeg",
      },
    ],
    profile: {
      firstName: "Aayush",
      lastName: "Mohan",
      username: "aayushmohan",
      gender: "Male",
    },
  },
  twitter: {
    handle: "@aayushmohan",
    site: "@aayushmohan",
    cardType: "summary_large_image",
  },
  robotsProps: {
    nosnippet: false,
    noarchive: false,
    maxSnippet: 320,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

export default seoConfig;
