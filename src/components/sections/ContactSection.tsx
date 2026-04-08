"use client";

import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import clsx from "clsx";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/KaluDavid",
    icon: FiGithub,
    username: "@KaluDavid",
    color: "hover:bg-gray-100 ",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kalu-david-a2771723a/",
    icon: FiLinkedin,
    username: "/in/kalu-david",
    color: "hover:bg-blue-50 ",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/thedavidkalu",
    icon: FiTwitter,
    username: "@thedavidkalu",
    color: "hover:bg-sky-50 ",
  },
  {
    name: "Email",
    href: "mailto:kaludavidinyang@gmail.com",
    icon: Mail,
    username: "kaludavidinyang@gmail.com",
    color: "hover:bg-green-50",
  },
];
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="sm:py-24 py-[40px] bg-muted/30"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="sm:text-center mb-16">
            <motion.span
              className="text-4xl sm:mb-4 block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              💬
            </motion.span>
            <motion.h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-left max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              create something amazing.
            </motion.p>
          </div>

          {/* Social links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect with me
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl border border-border bg-card ${social.color} transition-all group`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <social.icon
                        className="h-5 w-5 text-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {social.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Insert contact form here */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
