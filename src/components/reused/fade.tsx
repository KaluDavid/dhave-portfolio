"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "./case-study-comp";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface Card {
  cards: {
    num: string;
    title: string;
    body: string;
  }[];
}

function CardGrid({ cards }: Card) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5% 0px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-6"
    >
      {cards.map(({ num, title, body }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="bg-background border border-border rounded-lg p-5 transition-colors hover:border-blue-400/60 group"
        >
          <div className="text-[12px] font-mono tracking-[0.2em] uppercase text-blue-600 mb-2">
            {num}
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-1.5">
            {title}
          </h4>
          <p className="text-[12.5px] sm:text-sm  font-mono text-muted-foreground leading-relaxed m-0">
            {body}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export { FadeSection, CardGrid };
