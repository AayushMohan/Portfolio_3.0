"use client";

import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";

const SeoProvider = () => {
  return <DefaultSeo {...seoConfig} />;
};

export default SeoProvider;
