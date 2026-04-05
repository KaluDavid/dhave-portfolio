"use client";

import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Hero ─────────────────────────────────────────────────────────────────────
// Full-viewport opening section. Animated avatar, headline, CTA buttons.
// Scroll helpers use getElementById — safe in client component.
const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center max-[365px]:pt-[5rem] pt-25 sm:pt-36 relative overflow-hidden">
      {/* Floating decorative shapes — purely visual, no semantic meaning */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-primary/5 rotate-45"
          animate={{ y: [0, 30, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 border border-muted-foreground/10 rounded-lg"
          animate={{ x: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-8 h-8 bg-primary/10 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Avatar with availability badge */}
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative">
              <img
                src="/david.jpg"
                alt="David Kalu — Frontend Engineer"
                className="w-28 h-28 rounded-full object-cover border-4 border-background shadow-xl"
                // Priority load — this is above the fold
                loading="eager"
              />
              {/* Pulsing ring — draws attention to availability */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{ scale: [1, 1.15, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
            </div>
            <motion.div
              className="absolute -top-2 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              style={{ rotate: 12 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="flex items-center gap-1">
                <span
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  aria-hidden="true"
                />
                Available
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>Hi! there</span>
            <img
              src="/wave.svg"
              alt=""
              className="size-9 inline-block"
              aria-hidden="true"
            />
            , <span>I&apos;m</span>
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            David Kalu
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <BriefcaseBusiness
              className="h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-base sm:text-xl text-muted-foreground">
              Frontend Engineer
            </p>
          </motion.div>

          <motion.p
            className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I help turn product ideas into usable, well-structured interfaces
            that users enjoy using, and teams can confidently work with during{" "}
            <span className="text-foreground font-medium">
              development lifecycle
            </span>
            .
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              onClick={() => scrollTo("work")}
              className="min-w-40 group rounded-md px-8 cursor-pointer hover:bg-primary/90 h-11"
            >
              View Work
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="min-w-40 rounded-md px-8 cursor-pointer hover:bg-accent h-11"
            >
              <Send className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            aria-hidden="true"
          >
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
