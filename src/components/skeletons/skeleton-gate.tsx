"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SkeletonGateProps {
  skeleton: React.ReactNode;
  children: React.ReactNode;
  minMs?: number;
}

export function SkeletonGate({
  skeleton,
  children,
  minMs = 1000,
}: SkeletonGateProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const minWait = new Promise<void>((res) => setTimeout(res, minMs));
    const fontsReady: Promise<void> = document.fonts?.ready
      ? document.fonts.ready.then(() => undefined)
      : Promise.resolve();

    Promise.all([minWait, fontsReady]).then(() => setReady(true));
  }, [minMs]);

  return (
    <>
      <AnimatePresence>{!ready && <div className="fixed h-screen w-screen">{skeleton}</div>}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
