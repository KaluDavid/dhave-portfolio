// app/articles/page.tsx
// Article listing — shows all 4 posts with tag pills, read time, and date.

import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles-data";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Writing on frontend engineering, React, TypeScript, and building for the web.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Page header ─────────────────────────────────────── */}
      <Header />
      <div className="border-b border-border pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 max-w-4xl">
          <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-600 mb-3">
            Writing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Articles
          </h1>
          <p className="text-base text-muted-foreground font-mono max-w-xl leading-relaxed">
            Thoughts on frontend engineering, React, TypeScript, and the craft
            of building interfaces.
          </p>
        </div>
      </div>

      {/* ── Article list ────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="divide-y divide-border">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block py-10 first:pt-0 last:pb-0"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[11px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-snug group-hover:text-emerald-600 transition-colors duration-150">
                {article.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] font-mono text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {article.description}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 text-[12px] font-mono text-muted-foreground">
                {/* <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(article.publishedAt)}
                </span> */}
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readingMinutes} min read
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
