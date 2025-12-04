"use client";

import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  NextSeo,
  ProfilePageJsonLd,
  SiteLinksSearchBoxJsonLd,
} from "next-seo";

type Breadcrumb = {
  name: string;
  url: string;
};

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "profile" | "article";
  publishedTime?: string;
  updatedTime?: string;
  breadcrumbs?: Breadcrumb[];
}

const SITE_URL = "https://aayushmohan.dev";
const DEFAULT_IMAGE = `${SITE_URL}/images/AayushMohan.jpg`;
const SAME_AS = [
  "https://github.com/aayushmohan",
  "https://linkedin.com/in/aayushmohan",
  "https://twitter.com/aayushmohan",
];

export default function SEO({
  title = "Aayush Mohan – Full-Stack Developer & Machine Learning Enthusiast",
  description = "Passionate full-stack developer crafting performant, ML-infused digital experiences across web and mobile.",
  keywords = "Aayush Mohan, Web Developer, Machine Learning Engineer, React, Next.js, TypeScript, Portfolio",
  author = "Aayush Mohan",
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  imageAlt = "Portrait of Aayush Mohan",
  type = "website",
  publishedTime,
  updatedTime,
  breadcrumbs,
}: SEOProps) {
  const canonical = url || SITE_URL;
  const breadcrumbList = (
    breadcrumbs?.length
      ? breadcrumbs
      : [
          { name: "Home", url: SITE_URL },
          { name: title, url: canonical },
        ]
  ).map((crumb, index) => ({
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  }));

  const isArticle = type === "article";
  const openGraphBase = {
    type,
    url: canonical,
    title,
    description,
    siteName: "Aayush Mohan Portfolio",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  } as const;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={[
          { name: "keywords", content: keywords },
          { name: "author", content: author },
        ]}
        openGraph={{
          ...openGraphBase,
          article: isArticle
            ? {
                publishedTime,
                modifiedTime: updatedTime || publishedTime,
                authors: [author],
                tags: keywords.split(",").map((tag) => tag.trim()),
              }
            : undefined,
          profile:
            type === "profile"
              ? {
                  firstName: "Aayush",
                  lastName: "Mohan",
                  username: "aayushmohan",
                  gender: "Male",
                }
              : undefined,
        }}
        twitter={{
          handle: "@aayushmohan",
          site: "@aayushmohan",
          cardType: "summary_large_image",
        }}
      />

      <ProfilePageJsonLd
        type="Person"
        description={description}
        jobTitle="Full-Stack Developer"
        name="Aayush Mohan"
        url={SITE_URL}
        sameAs={SAME_AS}
        breadcrumb={
          breadcrumbList[breadcrumbList.length - 1]?.item || canonical
        }
      />

      {isArticle && (
        <ArticleJsonLd
          url={canonical}
          title={title}
          images={[image]}
          datePublished={publishedTime || new Date().toISOString()}
          dateModified={
            updatedTime || publishedTime || new Date().toISOString()
          }
          authorName={author}
          publisherName="Aayush Mohan"
          description={description}
        />
      )}

      {breadcrumbList.length > 0 && (
        <BreadcrumbJsonLd itemListElements={breadcrumbList} />
      )}

      <SiteLinksSearchBoxJsonLd
        url={SITE_URL}
        potentialActions={[
          {
            target: `${SITE_URL}/search?q={search_term_string}`,
            queryInput: "search_term_string",
          },
        ]}
      />
    </>
  );
}
