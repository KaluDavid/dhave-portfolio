import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import caseStudyData from "@/data/case-study";
import SpotdCaseStudy from "@/components/casestudies/SpotdCaseStudy";
import VaxNowCaseStudy from "@/components/casestudies/VaxNowCaseStudy";
import AgriLinkCaseStudy from "@/components/casestudies/AgriLinkCaseStudy";
import { metaObject } from "@/config/site.config";
import { notFound } from "next/navigation";

// ── Static params — tells Next.js which slugs to pre-render at build time ─────
// This gives us static HTML for each case study = faster loads + better SEO
export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }));
}

// ── Per-page SEO — dynamic title + description based on the case study ────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyData[slug];
  if (!study) return {};
  return metaObject(
    `${study.title} Case Study`,
    undefined,
    `A deep-dive into ${study.title} — role: ${study.role}, tech: ${study.tech.join(", ")}.`,
  );
}

// ── Case Study page ───────────────────────────────────────────────────────────
// Server Component — no 'use client' needed. Sub-components handle interactivity.
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyData[slug];

  // 404 if slug doesn't exist in data
  if (!study) notFound();

  // Render the correct case study body based on slug
  const renderCaseStudy = () => {
    switch (slug) {
      case "spotd":
        return <SpotdCaseStudy />;
      case "agrilink-marketplace":
        return <AgriLinkCaseStudy />;
      case "vaxnow-web-app":
        return <VaxNowCaseStudy />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back navigation */}
            <Link href="/#work" className="inline-block mb-8">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Button>
            </Link>

            {/* Case study header */}
            <header className="mb-12">
              <div className="flex w-full items-start justify-between">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {study.title}
                </h1>
                {study.live_link && (
                  <Link
                    href={study.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full items-center gap-1 text-base hover:bg-secondary font-medium border text-primary px-4 py-2 tracking-wide sm:flex hidden"
                  >
                    <img
                      src="/browser.svg"
                      alt=""
                      className="object-contain size-5"
                      aria-hidden="true"
                    />
                    VIEW PRODUCT
                  </Link>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span>{study.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>{study.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{study.year}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm mb-6">
                {study.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* External links row */}
              <div className="flex sm:flex-row flex-col sm:items-center mt-6">
                {study.live_link && (
                  <Link
                    href={study.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full flex items-center w-fit gap-1 text-base font-medium underline text-primary sm:px-4 py-2 tracking-wide"
                  >
                    <img
                      src="/browser.svg"
                      alt=""
                      className="object-contain size-5"
                      aria-hidden="true"
                    />
                    VIEW PRODUCT
                  </Link>
                )}
                {study.github && (
                  <Link
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full flex items-center w-fit gap-1 text-base font-medium underline text-primary sm:px-4 py-2 tracking-wide"
                  >
                    <img
                      src="/github.svg"
                      alt=""
                      className="object-contain size-6"
                      aria-hidden="true"
                    />
                    VIEW SOURCE CODE
                  </Link>
                )}
                {study.figma_design && (
                  <Link
                    href={study.figma_design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full flex items-center w-fit gap-1 text-base font-medium underline text-primary sm:px-4 py-2 tracking-wide"
                  >
                    <img
                      src="/figma.svg"
                      alt=""
                      className="object-contain size-6"
                      aria-hidden="true"
                    />
                    VIEW FIGMA DESIGN
                  </Link>
                )}
              </div>
            </header>

            {/* Case study body */}
            {renderCaseStudy()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
