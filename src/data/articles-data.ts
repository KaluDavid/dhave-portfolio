export interface Article {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string; // ISO date string
  readingMinutes: number;
}

export const articles: Article[] = [
  {
    slug: "zustand-vs-redux",
    title: "Zustand vs Redux: Choosing the Right State Management Approach in React",
    description:
      "A deep comparison of Zustand and Redux Toolkit — what they solve, how they differ in mental model, and when to reach for each one.",
    tags: ["React", "TypeScript", "State Management"],
    publishedAt: "2025-01-15",
    readingMinutes: 14,
  },
  {
    slug: "what-happens-when-frontend-calls-api",
    title: "What Actually Happens When Your Frontend Calls an API?",
    description:
      "Slowing down the fetch() call to understand every layer — HTTP, promises, status codes, response parsing, and how React fits in.",
    tags: ["Web Engineering", "JavaScript", "APIs", "HTTP", "React"],
    publishedAt: "2025-02-03",
    readingMinutes: 11,
  },
  {
    slug: "figma-to-production",
    title: "From Figma to Production: How I Turn Figma Designs Into Production-Ready Interfaces",
    description:
      "The real process between a Figma file and a shipped product — component architecture, responsive thinking, API integration, and the states Figma never shows.",
    tags: ["Frontend Engineering", "React", "Figma", "UI"],
    publishedAt: "2025-03-10",
    readingMinutes: 13,
  },
  {
    slug: "sending-emails-resend-nextjs",
    title: "Sending Emails with Resend and Next.js: A Simple, Practical Integration",
    description:
      "How to wire up a contact form in Next.js using Resend — covering the server-side boundary, validation, error handling, and deployment.",
    tags: ["Next.js", "Resend", "Email", "API Routes"],
    publishedAt: "2025-04-22",
    readingMinutes: 10,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}