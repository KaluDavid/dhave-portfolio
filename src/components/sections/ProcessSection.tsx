"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "I start by digging deep and understanding the problem space, user needs, and business goals through research, one-on-one interviews, etc. And eventually I join a project/ product team mid-way, I make sure to get up to speed with the existing codebase and design system, by reading product documentation, and team call sessions.",
    color: "sm:bg-blue-500/10 text-blue-600",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "As a developer, I don't just jump straight into coding, I try to work hand-in-hand with designers to iterate on the UX and UI, questioning design decisions that could affect development, and ensuring the final design is not only beautiful but also feasible to build while I translate it into pixel-perfect visuals in production.",
    color: "sm:bg-purple-500/10 text-purple-600",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Next, I write code having other engineers at heart. This means writing clean, modular, and well-documented code that others can easily understand, build upon, and easily reuse. By breaking work into manageable pieces before integrating them, it therefore ensures faster development, fewer bugs, and easier maintenance in the long run.",
    color: "sm:bg-green-500/10 text-green-600",
  },
  {
    icon: Rocket,
    title: "Deployment & Delivery",
    description:
      "In the final process, I ensure every feature is production-ready by optimizing performance, ensure strong meta-data code implemented for Google's SEO ranking, testing across different devices, and deployment, afterwhich I carry out closed-in maintenance frequently.",
    color: "sm:bg-orange-500/10 text-orange-600",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="sm:py-24 py-[40px] bg-muted/30"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-left flex flex-col items-start justify-start mb-16">
            <div className="flex sm:flex-row flex-col sm:items-center gap-0.5 sm:gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block sm:mb-4"
              >
                <img
                  loading="lazy"
                  src="/process.svg"
                  alt=""
                  className="size-10"
                  aria-hidden="true"
                />
              </motion.div>
              <motion.h2
                id="process-heading"
                className="text-[28px] sm:text-4xl font-bold text-foreground mb-4 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Engineering Process...
              </motion.h2>
            </div>
            <motion.p
              className="text-muted-foreground text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I believed every great product built wasn&apos;t rushed, rather
              carefully thought through before building. <br />
              Here&apos;s therefore how I approach{" "}
              <span className="text-foreground font-medium">
                building products
              </span>{" "}
              that users actually want to use.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={clsx(
                  "relative flex gap-1 sm:gap-6 items-start sm:flex-row flex-col pb-8",
                  index !== 3 && "border-b",
                )}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Desktop: icon box with step number badge */}
                <div className="relative sm:block hidden z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-sm`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-hidden="true"
                  >
                    <step.icon className="w-7 h-7" />
                  </motion.div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold sm:font-semibold flex text-foreground mb-2">
                    {/* Mobile: inline icon */}
                    <step.icon
                      className={clsx("w-7 h-7 sm:hidden mr-3", step.color)}
                      aria-hidden="true"
                    />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="sm:mt-16 mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
              <span className="text-sm text-muted-foreground">and repeat</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              >
                <img
                  loading="lazy"
                  src="/circle.svg"
                  alt=""
                  className="size-[20px]"
                />
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
