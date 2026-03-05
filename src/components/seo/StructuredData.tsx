"use client";

/**
 * JSON-LD structured data for SEO: Person, WebSite, and ProfilePage schemas.
 * Rendered in layout <head>; helps search engines understand the page content.
 */
import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  /** Schema.org Person: name, role, description, image, social links, worksFor, knowsAbout. */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.role,
    description: portfolioData.about,
    url: "https://portfolio-ui-18.vercel.app",
    image: "https://portfolio-ui-18.vercel.app/images/profile.webp",
    sameAs: portfolioData.social
      .filter((s) => s.platform !== "Email")
      .map((s) => s.url),
    worksFor: {
      "@type": "Organization",
      name: "My Company",
    },
    knowsAbout: [
      "Android Development",
      "Flutter Development",
      "Kotlin",
      "Jetpack Compose",
      "Mobile App Development",
      "AOSP",
      "Chromium",
    ],
  };

  /** Schema.org WebSite: site name, url, author (with email for contact). */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.name} Portfolio`,
    description: portfolioData.about,
    url: "https://portfolio-ui-18.vercel.app",
    author: {
      "@type": "Person",
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com",
      email: "contact@arnobmahmud.com",
    },
    inLanguage: "en-US",
  };

  /** Schema.org ProfilePage: mainEntity as Person, dateModified for freshness. */
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-03-05",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      name: portfolioData.name,
      description: portfolioData.about,
    },
  };

  /* Inject each schema as a script type="application/ld+json" in the document head. */
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
