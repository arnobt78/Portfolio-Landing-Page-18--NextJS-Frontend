/**
 * Dynamic sitemap.xml: lists the homepage with lastModified, changeFrequency, and priority.
 * Served at /sitemap.xml. Add more entries if you add static or dynamic routes.
 */
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-ui-18.vercel.app";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
