/**
 * Dynamic robots.txt: allows all crawlers on /, disallows /api/ and /_next/ (internal paths).
 * Served at /robots.txt. Update baseUrl when deploying to a different domain.
 */
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://portfolio-ui-18.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
