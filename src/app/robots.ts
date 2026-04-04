import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

// ── robots.txt ────────────────────────────────────────────────────────────────
// Next.js auto-serves this at /robots.txt
// Allows all crawlers + points to sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
