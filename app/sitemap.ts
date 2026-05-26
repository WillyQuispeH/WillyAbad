import type { MetadataRoute } from "next";

const site = "https://willyabad.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
