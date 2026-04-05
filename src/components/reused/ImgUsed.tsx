"use client";

import { motion } from "framer-motion";

const ImgUsed = ({ src }: { src?: string }) => {
  return (
    <motion.div
      className="md:col-span-2 relative w-[200px]"
      initial={{ opacity: 0, rotate: -5 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full">
        {/* Offset border decoration — visual depth effect */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4 w-full" />
        {src ? (
          <img
            loading="eager"
            src={src}
            alt="David"
            className="aspect-square object-cover rounded-2xl relative z-10 shadow-xl w-full"
          />
        ) : (
          // Fallback: autoplay video when no static image provided
          <video
            src="/dhave.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster="/poster.jpg"
            className="aspect-square object-cover object-top rounded-2xl relative w-full"
          />
        )}
      </div>
    </motion.div>
  );
};

export default ImgUsed;
