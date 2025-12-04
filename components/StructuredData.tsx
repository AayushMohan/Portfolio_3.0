const siteUrl = "https://aayushmohan.dev";
const ogImage = `${siteUrl}/images/AayushMohan.jpg`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aayush Mohan",
  jobTitle: "Full-Stack Developer",
  description:
    "Web developer passionate about AI/ML, building production-ready experiences with React, Next.js, Node.js, and modern tooling.",
  url: siteUrl,
  image: ogImage,
  sameAs: [
    "https://github.com/aayushmohan",
    "https://www.linkedin.com/in/aayushmohan",
    "https://twitter.com/aayushmohan",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Independent Consultant",
  },
  homeLocation: {
    "@type": "Place",
    name: "Delhi, India",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Machine Learning",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aayush Mohan Portfolio",
  url: siteUrl,
  description:
    "Explore case studies, blogs, and contact info for Aayush Mohan – web engineer and machine learning enthusiast.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const StructuredData = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  </>
);

export default StructuredData;
