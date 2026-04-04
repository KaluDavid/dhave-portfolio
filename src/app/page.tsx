import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Hero from "@/components/sections/Hero";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import WorkSection from "@/components/sections/WorkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import { metaObject } from "@/config/site.config";

// ── Page-level SEO ────────────────────────────────────────────────────────────
// Inherits root layout metadata, adds home-specific OG description
export const metadata = metaObject(
  undefined, // no custom title — use root default
  undefined, // no custom OG — use root default
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <BottomNavigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <ProjectShowcase />
        <WorkSection />
        <ProcessSection />
        <TestimonialSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
