import type { Metadata } from "next";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

// ── Site-wide constants
export const siteConfig = {
  name: "David Kalu",
  title: "David Kalu — Frontend Engineer",
  description:
    "Frontend Engineer specialising in React, Next.js, and TypeScript. I help turn product ideas into usable, well-structured interfaces that users enjoy using.",
  url: "https://kaludavid.vercel.app",
  ogImage: "/david.jpg",
  twitter: "@thedavidkalu",
  linkedin: "https://www.linkedin.com/in/kalu-david-a2771723a/",
  github: "https://github.com/KaluDavid",
};

// ── Per-page metadata factory
// Usage: export const metadata = metaObject('About')
// Usage: export const metadata = metaObject('AgriLink Case Study', { ... custom og ... })
export function metaObject(
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description,
): Metadata {
  const pageTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title;

  return {
    title: pageTitle,
    description,
    // Canonical URL helps Google avoid duplicate content penalties
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
    openGraph: openGraph ?? {
      title: pageTitle,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    // Twitter card — shown when shared on X/Twitter
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      images: [siteConfig.ogImage],
    },
    // Robots — let Google index everything
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
    // Verification tokens — add when you set up Google Search Console
    verification: { google: "eaNgZ2CSiry3iYfvLAXIDDHcvSnLjBM6C_s-u5HN1U8" },
  };
}
