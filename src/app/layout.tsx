/**
 * Root layout: wraps all pages with shared UI (Navbar, Footer), fonts, global styles,
 * SEO metadata, and optional Google Analytics. Used by Next.js App Router for every route.
 */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

/** Viewport config for mobile scaling and width; used by Next.js for meta viewport tag. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/** Geist Sans font; CSS variable --font-geist-sans is applied to body for Tailwind. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/** Geist Mono for code/accents; variable --font-geist-mono. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-ui-18.vercel.app";
const siteTitle = "John Doe's Portfolio";

/** SEO metadata: title template, description, OG/Twitter, robots, icons. Affects all pages. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: portfolioData.about,
  applicationName: siteTitle,
  keywords: [
    "John Doe",
    "John Doe Portfolio",
    "Android Developer",
    "Flutter Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Mobile App Development",
    "AOSP Developer",
    "Chromium Developer",
    "Portfolio",
    "Next.js Portfolio",
    "portfolio-ui-18",
    "Primebook",
    "Primebook India",
    "Senior Software Engineer",
    "SDE-2",
    "Android Engineer",
    "Android",
    "Kotlin",
    "Flutter",
    "Arnob Mahmud",
    "arnobmahmud.com",
  ],
  authors: [
    { name: "Arnob Mahmud", url: "https://www.arnobmahmud.com" },
    { name: portfolioData.name, url: "https://www.arnobmahmud.com" },
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: portfolioData.about,
    siteName: siteTitle,
    images: [
      {
        url: `${siteUrl}/images/profile.webp`,
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} - ${portfolioData.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: portfolioData.about,
    creator: "@johndoe",
    images: [`${siteUrl}/images/profile.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icons/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  category: "portfolio",
};

/** Root layout component: html/body, head (StructuredData), Navbar, main content, Footer, GA. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
        />
      </body>
    </html>
  );
}
