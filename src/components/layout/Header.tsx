"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import clsx from "clsx";

const Header = () => {
  const socialLinks = [
    {
      name: "Resume",
      href: "https://docs.google.com/document/d/1qmGX83JoCWQINbADDMjE_JDcqh29E4Mu6zgZHNkrBPg/edit?usp=sharing",
      icon: FileText,
      label: "View Resume",
    },
    { name: "GitHub", href: "https://github.com/kaludavid", icon: FiGithub },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kalu-david-a2771723a/",
      icon: FiLinkedin,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo — links to homepage */}
          <Link href="/" aria-label="David Kalu — Home">
            <Logo />
          </Link>

          {/* Right side: resume button + social icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {socialLinks.map((social) =>
              social.label ? (
                // Resume: show as labelled button on desktop
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className={clsx(
                    "hidden sm:flex p-3! bg-white! hover:bg-accent! rounded-md h-9 cursor-pointer",
                  )}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2 flex items-center"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="text-sm">{social.label}</span>
                  </Link>
                </Button>
              ) : (
                // Social icons: icon only
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ),
            )}
            {/* Mobile: resume as icon only */}
            <Link
              href="https://docs.google.com/document/d/1qmGX83JoCWQINbADDMjE_JDcqh29E4Mu6zgZHNkrBPg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="View Resume"
            >
              <FileText className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
