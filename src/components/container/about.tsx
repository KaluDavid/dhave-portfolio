"use client";
import Header from "../layout/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Briefcase,
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { education, technologies, workExperience } from "@/data/about-data";
import { Button } from "../ui/button";
import ImgUsed from "../reused/ImgUsed";
import Footer from "../layout/Footer";

const AboutContainer = () => {
  const resumeUrl =
    "https://docs.google.com/document/d/1qmGX83JoCWQINbADDMjE_JDcqh29E4Mu6zgZHNkrBPg/edit?usp=sharing";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            {/* Next.js Link — smooth client-side navigation back to home */}
            <Link
              href="/#about"
              className="inline-flex items-center gap-2  hover:underline text-foreground transition-all"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {/* Work Experience */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              aria-labelledby="experience-heading"
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase
                  className="w-6 h-6 text-primary"
                  aria-hidden="true"
                />
                <h1
                  id="experience-heading"
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                >
                  Work Experience
                </h1>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="relative sm:pl-8 border-l-2 border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"
                      aria-hidden="true"
                    />
                    <div className="bg-card border border-border rounded-xl sm:p-6 p-3 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h2 className="text-lg font-semibold text-foreground">
                            {job.role}
                          </h2>
                          <p className="text-primary font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                        <MapPin
                          className="w-4 h-4 text-primary"
                          aria-hidden="true"
                        />
                        {job.location}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {job.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-base sm:text-sm flex items-start gap-2"
                          >
                            <span
                              className="text-primary mt-1"
                              aria-hidden="true"
                            >
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button className="h-11 rounded-md px-8 cursor-pointer hover:bg-primary/90 transition-colors">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 "
                  >
                    View My Resume{" "}
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
              </motion.div>
            </motion.section>

            {/* Education */}
            <motion.section
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              aria-labelledby="education-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap
                  className="w-6 h-6 text-primary"
                  aria-hidden="true"
                />
                <h2
                  id="education-heading"
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                >
                  Education
                </h2>
              </div>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 mb-4"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.title}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.period}
                  </p>
                </div>
              ))}
            </motion.section>

            {/* Technologies */}
            <motion.section
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              aria-labelledby="tech-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  loading="eager"
                  src="/tools.svg"
                  alt=""
                  className="w-6 h-6"
                  aria-hidden="true"
                />
                <h2
                  id="tech-heading"
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                >
                  Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* More About Me */}
            <motion.section
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              aria-labelledby="personal-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  loading="eager"
                  src="/reading.svg"
                  alt=""
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                <h2
                  id="personal-heading"
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                >
                  More About Me
                </h2>
              </div>
              <div className="flex items-center gap-12 flex-col md:flex-row">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex gap-6 items-center">
                    <ImgUsed src="/that_guy_dhave.jpg" />
                    <ImgUsed src="/deee.jpg" />
                  </div>
                  <div className="flex gap-6 items-center">
                    <ImgUsed src="/dee.jpg" />
                    <ImgUsed />
                  </div>
                </div>
                <motion.div
                  className="md:col-span-3 space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Away from the screens, music is one thing I&apos;m deep into
                    (both listening and singing), enough to call myself an
                    audiophile. And Vance Joy&apos;s Riptide is one of those
                    songs I replay endlessly, likewise, Hillsong United.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    More often, when stressed out, I go biking, and let the cool
                    fresh breeze do its thing. And on chill days, you&apos;ll
                    probably catch me watching movies, and my favorite is the
                    movie series{" "}
                    <span className="italic font-semibold">Peaky Blinders</span>
                    . With Tommy, Aunt Polly, and John being my favorite
                    characters. <br />
                    Also a big fan of the MCU sagas. Can&apos;t wait for{" "}
                    <span className="italic font-semibold">
                      Avengers DoomsDay
                    </span>{" "}
                    release.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutContainer;
