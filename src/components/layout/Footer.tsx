"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline justify-between gap-4">
            <Logo className="sm:block hidden [&_img]:mb-1" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>
                Connect on{" "}
                <Link
                  href="https://www.linkedin.com/in/kalu-david-a2771723a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Linkedin
                </Link>
              </span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="sm:block hidden"
              >
                <Handshake className="h-4 w-4" />
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
