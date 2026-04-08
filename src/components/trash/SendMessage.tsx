"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
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
import clsx from "clsx";

// ── SendMessage ────────────────────────────────────────────────────────────
// Contact form POSTs to /api/contact → Resend → email address.
// Shows success state inline after submission instead of resetting form.
const SendMessage = () => {
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
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Send a Message</CardTitle>
          <CardDescription>Let&apos;s create magic together</CardDescription>
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
                  Thanks for reaching out. I&apos;ll get back to you ASAP...
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
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
  );
};

export default SendMessage;
