"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/work-data";
import { cn } from "@/lib/utils";

// ── WorkSection ───────────────────────────────────────────────────────────────
const WorkSection = () => {
  return (
    <section id="work" className="py-24" aria-labelledby="work-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-left mb-16 flex flex-col items-start justify-start">
            <div className="flex sm:flex-row flex-col sm:items-center leading-[2px] sm:gap-2">
              <motion.span
                className="text-4xl block"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  loading="lazy"
                  src="case.svg"
                  className="size-12"
                  alt=""
                  aria-hidden="true"
                />
              </motion.span>
              <motion.h2
                id="work-heading"
                className="text-[28px] sm:text-4xl font-bold text-foreground mb-8 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Handpicked Projects
              </motion.h2>
            </div>
            <motion.p
              className="text-muted-foreground text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A few selected projects where I&apos;ve made a meaningful impact.
              The projects shows the engineering decisions I made, the
              challenges I faced, and how I navigated through them.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={project.featured ? "md:col-span-2" : ""}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Next.js Link — prefetches case study page on hover */}
                <Link href={`/case-study/${project.slug}`} prefetch>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 p-0 gap-0 hover:border-primary/50 h-full">
                    <div
                      className={`relative overflow-hidden ${project.featured ? "sm:h-[80vh] h-[40vh]" : "h-[40vh]"}`}
                    >
                      <img
                        loading="lazy"
                        src={project.image}
                        alt={project.title}
                        className={cn(
                          "w-full h-full object-cover sm:object-center transition-transform duration-700 group-hover:scale-110",
                          project.title === "Spot'D Web App"
                            ? "object-center"
                            : "object-left",
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-background/80 via-30% via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-primary-foreground">
                            Featured Project
                          </Badge>
                        </div>
                      )}
                      <motion.div
                        className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                        aria-hidden="true"
                      >
                        <ExternalLink className="w-4 h-4 text-foreground" />
                      </motion.div>
                    </div>
                    <CardHeader className="pt-6 pb-2 px-6 border-t">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                            {project.title}
                            <ArrowRight
                              className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                              aria-hidden="true"
                            />
                          </CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">
                            {project.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-muted-foreground mb-4  leading-5 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
