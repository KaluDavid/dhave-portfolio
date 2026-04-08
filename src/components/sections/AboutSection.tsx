"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

const AboutSection = () => {
  const funFacts = [
    { label: "Biking", emoji: "/biking.svg" },
    { label: "Audiophile", emoji: "/headphone.svg" },
    { label: "Photography", emoji: "/camera.svg" },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              {/* Avatar */}
              <motion.div
                className="md:col-span-2 relative"
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4"
                    aria-hidden="true"
                  />
                  <img
                    loading="eager"
                    src="/david.jpg"
                    alt="David Kalu"
                    className="w-full aspect-square object-cover rounded-2xl relative z-10 shadow-xl"
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-card border border-border rounded-full px-4 py-2 shadow-lg z-20 flex items-center gap-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <MapPin
                      className="w-4 h-4 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium">Available</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bio text */}
              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 id="about-heading" className="sr-only">
                  About David
                </h2>
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
                  ,
                </motion.p>
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    I am an experienced{" "}
                    <span className="text-foreground font-medium">
                      Frontend Engineer
                    </span>{" "}
                    driven by building responsive, user-friendly web
                    applications that balance both user needs and business
                    goals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Over time, I&apos;ve worked with startups and small teams,
                    collaborating closely with developers, designers, and
                    product managers to turn ideas into functional products.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    My technical toolkit includes React.js, Next.js, TypeScript,
                    and Tailwind CSS for creating clean, interactive interfaces.
                  </p>

                  {/* Hobby tags */}
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Hobbies:
                    </p>
                    <div className="flex gap-3">
                      {funFacts.map((fact, index) => (
                        <motion.div
                          key={fact.label}
                          className="flex items-center gap-2 bg-muted justify-center rounded-full px-4 py-2"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            loading="eager"
                            src={fact.emoji}
                            alt=""
                            className="size-4"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-muted-foreground">
                            {fact.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Links — Next.js Link for internal, <a> for external */}
                  <motion.div
                    className="pt-4 flex flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium group"
                    >
                      <span>Read more about me</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    </Link>
                    <Link
                      href="https://docs.google.com/document/d/1hjaENYT9B8xNVJSjuMwVrgP-nmjZXSNbzksQsWWtWjE/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium"
                    >
                      <span>View my resume</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
