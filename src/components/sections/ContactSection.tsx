"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
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

// ── ContactSection ────────────────────────────────────────────────────────────
// Contact form POSTs to /api/contact → Resend → email address.
// Shows success state inline after submission instead of resetting form.
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // API returned a validation or server error
        toast.error("Failed to send", {
          description: data.error || "Please try again.",
        });
        setIsSubmitting(false);
        return;
      }

      // Success
      setIsSuccess(true);
      toast.success("Message sent! 🎉", {
        description: "I'll get back to you within 24 hours.",
      });
    } catch {
      toast.error("Network error", {
        description: "Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: "", email: "", message: "" });
  };

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

          <div className="grid lg:grid-cols-2 gap-8">
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
              <div className="grid gap-3">
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

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Send a Message</CardTitle>
                  <CardDescription>
                    Let&apos;s create magic together
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Success state — shown after successful submission */}
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-8 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2
                          className="w-8 h-8 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Thanks for reaching out. I&apos;ll get back to you
                          ASAP...
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReset}
                        className="h-11 px-8 bg-white! hover:bg-accent!"
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      noValidate
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          minLength={2}
                          className="transition-all bg-white! h-10 focus:scale-[1.01]"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all bg-white! h-10 focus:scale-[1.01]"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          required
                          minLength={10}
                          className="transition-all bg-white! h-30 focus:scale-[1.01] resize-none"
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button
                        type="submit"
                        className={clsx(
                          "w-full group cursor-pointer h-11 rounded-md ",
                          isSubmitting
                            ? "bg-gray-300! text-gray-500! cursor-not-allowed"
                            : "bg-black! text-white! cursor-pointer hover:bg-primary/90!",
                        )}
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.email ||
                          !formData.message
                        }
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span
                              className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"
                              aria-hidden="true"
                            />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message
                            <Send
                              className="ml-2 h-4 w-4  transition-transform group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
