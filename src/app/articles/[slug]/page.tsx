
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { ComponentType } from "react";

import { articles, getArticleBySlug } from "@/data/articles-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReadingProgress } from "@/components/ReadingProgress";

import {
  ZustandVsRedux,
  FrontendCallsApi,
  FigmaToProduction,
  ResendNextjs,
} from "@/components/ArticleContent";

import { ArrowLeft, Clock, Calendar } from "lucide-react";

// ─── Map slug → content component ────────────────────────────────────────────

const CONTENT_MAP: Record<string, ComponentType> = {
  "zustand-vs-redux": ZustandVsRedux,
  "what-happens-when-frontend-calls-api": FrontendCallsApi,
  "figma-to-production": FigmaToProduction,
  "sending-emails-resend-nextjs": ResendNextjs,
};

// ─── Static params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Same pattern as your CaseStudyPage
  const { slug } = await params;

  // Find article using the resolved slug
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Find the React component responsible for rendering
  // the actual article content.
  const Content = CONTENT_MAP[slug];

  if (!Content) {
    notFound();
  }

  return (
    <>
      {/* Scroll progress circle */}
      <ReadingProgress readingMinutes={article.readingMinutes} />

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl ">
          <div className="">

            {/* ── Back link ───────────────────────────────────── */}

            <Link href="/articles" className="inline-block mb-10">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All articles
              </Button>
            </Link>

            {/* ── Article header ──────────────────────────────── */}

            <header className="mb-12">

              {/* Tags */}

              <div className="flex flex-wrap gap-2 mb-5">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                {article.title}
              </h1>

              {/* Subtitle */}

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {article.description}
              </p>

              {/* Meta */}

              <div className="flex flex-wrap items-center gap-5 text-[13px] font-mono text-muted-foreground border-y border-border py-4">

                {/* <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(article.publishedAt)}
                </span> */}

                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readingMinutes} min read
                </span>

              </div>
            </header>

            {/* ── Article body ────────────────────────────────── */}

            <Content />

            {/* ── Footer navigation ───────────────────────────── */}

            <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">

              <Link href="/articles" >
                <Button variant="ghost" size="sm" className="cursor-pointer">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All articles
                </Button>
              </Link>

              <span className="text-[12px] font-mono text-muted-foreground">
                {article.readingMinutes} min read
              </span>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}
