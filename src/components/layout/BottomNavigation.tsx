"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, FolderOpen, GitBranch, Star, User, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isPastHero, setIsPastHero] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const mainNavItems = [
    { id: "work", label: "Casestudy", icon: FolderOpen, href: "#work" },
    { id: "process", label: "Process", icon: GitBranch, href: "#process" },
    { id: "testimonials", label: "Reviews", icon: Star, href: "#testimonials" },
    { id: "about", label: "About", icon: User, href: "#about" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Smooth scroll to a section by its anchor href
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;

    setIsVisible(true);
    setIsPastHero(currentScrollY > heroHeight);

    // Determine which section is currently centred in viewport
    const sections = [
      "contact",
      "about",
      "testimonials",
      "process",
      "work",
      "home",
    ];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section);
          break;
        }
      }
    }

    if (currentScrollY < 100) setActiveSection("home");

    // Auto-hide nav after 10s of no scrolling
    if (scrollTimeout) clearTimeout(scrollTimeout);
    const timeout = setTimeout(() => setIsVisible(false), 10000);
    setScrollTimeout(timeout);
  }, [scrollTimeout]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const initialTimeout = setTimeout(() => setIsVisible(false), 5000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      clearTimeout(initialTimeout);
    };
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 justify-center items-center right-0 left-0 flex z-50"
          aria-label="Section navigation"
        >
          <div className="flex items-center gap-1 bg-[#000000cc] backdrop-blur-md border border-border rounded-2xl p-2 shadow-xl">
            {/* Home button — only visible past hero */}
            <AnimatePresence>
              {isPastHero && (
                <motion.button
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={scrollToTop}
                  className={cn(
                    "flex flex-col items-center justify-center sm:gap-1 gap-0.5 sm:px-3 sm:py-2 py-1 px-1.5 rounded-xl transition-colors sm:min-w-[60px] cursor-pointer",
                    activeSection === "home"
                      ? "text-primary bg-muted"
                      : "text-muted-foreground hover:text-white",
                  )}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5" />
                  <span className="text-[10px] font-medium">Home</span>
                </motion.button>
              )}
            </AnimatePresence>

            {isPastHero && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-px h-8 bg-border mx-1"
              />
            )}

            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "flex flex-col items-center justify-center sm:gap-1 gap-px sm:px-3 sm:py-2 py-1 px-1.5 rounded-lg sm:rounded-xl transition-colors sm:min-w-15 cursor-pointer",
                  activeSection === item.id
                    ? "text-white bg-[#474747]"
                    : "text-[#a3aab5] hover:text-white",
                )}
                aria-label={`Go to ${item.label}`}
              >
                <item.icon className="sm:size-5 size-4" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}

            {isPastHero && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-px h-8 bg-border mx-1"
              />
            )}

            {/* Contact button — only visible past hero */}
            <AnimatePresence>
              {isPastHero && (
                <motion.button
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={scrollToContact}
                  className="flex items-center justify-center cursor-pointer p-3 rounded-xl bg-teal-600 text-white hover:opacity-80 transition-opacity"
                  aria-label="Go to contact section"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default BottomNavigation;
