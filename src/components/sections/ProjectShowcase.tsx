"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const projects = [
  { id: 1, image: "/LoginForm.svg", title: "Memberstack Redesigned Form" },
  { id: 2, image: "/syncu.svg", title: "SyncU Onboarding" },
  { id: 3, image: "/spot.svg", title: "Spot'D Landing Page" },
  { id: 4, image: "/vax.svg", title: "VaxNow" },
  { id: 5, image: "/agri2.jpg", title: "AgriMarket" },
  { id: 6, image: "/spotd3.svg", title: "Spot'D Onboarding" },
];

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const timeout = setTimeout(() => {
      container.scrollTo({
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="sm:py-16 max-sm:-mt-17.5 overflow-hidden bg-muted/20"
      aria-label="Visual work samples"
    >
      <div className="container mx-auto px-4">
        <motion.p
          className="text-muted-foreground italic text-sm flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Visual Selections of my Creations
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden="true"
          >
            <img loading="lazy" src="/palette.svg" alt="" className="size-10" />
          </motion.span>
        </motion.p>
      </div>

      <div className="relative">
        {/* Scrollable gallery — scrollbar hidden via CSS */}
        <div
          ref={containerRef}
          className="flex gap-6 px-4 py-12 overflow-y-hidden overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="list"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative flex-shrink-0 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              style={{ rotate: index % 2 === 0 ? -2 : 2 }}
              role="listitem"
            >
              <div className="w-72 h-48 rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <motion.div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                {project.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Edge fade masks */}
        <div
          className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent pointer-events-none sm:block hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent pointer-events-none hidden sm:block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ProjectShowcase;
