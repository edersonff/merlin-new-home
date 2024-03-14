import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL + "",
      lastModified: "2024-03-14T12:00:00.000Z",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_BASE_URL + "/sobre",
      lastModified: "2024-03-14T12:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: process.env.NEXT_PUBLIC_BASE_URL + "/blog",
      lastModified: "2024-03-14T12:00:00.000Z",
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
