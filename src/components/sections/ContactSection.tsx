"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";
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
import { socialLinks } from "@/data/social-links";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // TODO: replace mock with real email service
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! 🎉", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-muted/30"
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
              <motion.div
                className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-lg mr-2" aria-hidden="true">
                    💡
                  </span>
                  Pro tip: I respond faster on Email DMs!
                </p>
              </motion.div>
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
                    I&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.01]"
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
                        className="transition-all focus:scale-[1.01]"
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
                        className="transition-all focus:scale-[1.01] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          aria-label="Sending..."
                        >
                          ⏳
                        </motion.span>
                      ) : (
                        <>
                          Send Message
                          <Send
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Button>
                  </form>
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
