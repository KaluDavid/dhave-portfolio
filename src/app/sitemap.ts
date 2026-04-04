import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import caseStudyData from "@/data/case-study";

// ── Sitemap ───────────────────────────────────────────────────────────────────
// Next.js auto-serves this at /sitemap.xml
// Submit this URL in Google Search Console to speed up indexing.
export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes = Object.keys(caseStudyData).map((slug) => ({
    url: `${siteConfig.url}/case-study/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...caseStudyRoutes,
  ];
}
