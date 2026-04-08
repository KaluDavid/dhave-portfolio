"use client";

import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import Link from "next/link";

const roles = ["Frontend Engineer", "UI Specialist", "Product Thinker"];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-start justify-start max-[365px]:pt-[5rem] pt-25 sm:pt-36 relative overflow-hidden">
      {/* Floating decorative shapes */}
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

      <div className="container mx-auto relative z-10">
        <div className="mx-auto flex flex-col items-start px-8">
          {/* Role tags — bullet separated, like the reference */}
          <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="text-base text-muted-foreground font-medium tracking-tight">
                  {role}
                </span>
                {i < roles.length - 1 && (
                  <span className="text-foreground text-lg select-none">•</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Display headline — large, lowercase, teal accent on key phrase */}
          <motion.h1
            className="text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground lowercase"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            helping{" "}
            <span className="text-teal-600 dark:text-teal-400">
              product teams
            </span>{" "}
            ship interfaces users love and businesses grow with.
          </motion.h1>

          {/* CTA row — pill button + open to work dot */}
          <motion.div
            className="flex items-center gap-6 pt-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            {/* Pill button — matches the reference style */}
            <Link
              href={"mailto:kaludavidinyang@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors group cursor-pointer"
            >
              <span className="text-sm font-medium text-foreground">
                Send me an email
              </span>
              <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors shrink-0">
                <Send
                  className="h-3.5 w-3.5 text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
            </Link>

            {/* Open to work indicator */}
            <span className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600" />
              </span>
              Open to work
            </span>
          </motion.div>

          {/* Scroll cue */}
        </div>
        <motion.div
          className="animate-bounce flex items-center mt-5 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-hidden="true"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
