"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <motion.div
      className={`flex flex-col leading-2.5 gap-0.5 text-left ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <img
        loading="lazy"
        src="/loggo2.png"
        alt="David Kalu logo"
        className="sm:size-12 size-8 object-contain"
      />
      <div className="flex gap-0.5 text-left *:tracking-tighter pb-1 *:text-base *:font-semibold *:leading-px">
        <span>David</span>
        <span>Kalu</span>
      </div>
    </motion.div>
  );
};

export default Logo;
