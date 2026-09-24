"use client";

// components/ReadingProgress.tsx
// Fixed circular progress ring that closes as the user scrolls.
// Sits in the bottom-right corner, fixed to the viewport.

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIZE = 52;          // outer diameter in px
const STROKE = 3.5;       // ring stroke width
const RADIUS = (SIZE - STROKE * 2) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ReadingProgressProps {
  /** Minutes to read — shown in the centre of the ring */
  readingMinutes: number;
}

export function ReadingProgress({ readingMinutes }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0); // 0 → 1
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return;

    const pct = Math.min(scrollTop / docHeight, 1);
    setProgress(pct);
    setVisible(scrollTop > 80); // appear after first scroll
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // strokeDashoffset goes from CIRCUMFERENCE (empty) → 0 (full)
  const offset = CIRCUMFERENCE - progress * CIRCUMFERENCE;

  // Colour shifts from muted → emerald as user reads more
  const ringColour = progress > 0.9 ? "#10b981" : "hsl(var(--foreground))";

  const minutesLeft = Math.max(
    1,
    Math.round(readingMinutes * (1 - progress))
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="reading-progress"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
          aria-label={`${Math.round(progress * 100)}% read — ${minutesLeft} min left`}
          role="progressbar"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="relative flex items-center justify-center rounded-full shadow-md border border-border bg-background/90 backdrop-blur-sm"
            style={{ width: SIZE + 8, height: SIZE + 8 }}
          >
            {/* SVG ring */}
            <svg
              width={SIZE}
              height={SIZE}
              className="absolute"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Track */}
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth={STROKE}
              />
              {/* Progress arc */}
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={ringColour}
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
                style={{ transition: "stroke-dashoffset 0.15s linear, stroke 0.4s ease" }}
              />
            </svg>

            {/* Centre label */}
            <div className="flex flex-col items-center leading-none z-10">
              {progress < 0.99 ? (
                <>
                  <span className="text-[11px] font-bold font-mono text-foreground leading-none">
                    {minutesLeft}
                  </span>
                  <span className="text-[8px] font-mono text-muted-foreground leading-none mt-0.5">
                    min
                  </span>
                </>
              ) : (
                <span className="text-[14px] text-emerald-500">✓</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}