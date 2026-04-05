"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSpotdAccess } from "@/hooks/useSpotdAccess";

interface SpotdPasswordModalProps {
  children: React.ReactNode;
}

// ── SpotdPasswordModal ────────────────────────────────────────────────────────
// Wraps the Spot'D case study content.
// - Shows password modal if no valid session in localStorage
// - Validates against server — password never exposed to client
// - Access expires after 30 minutes automatically
// - "Go Back" redirects to home if user cancels
export function SpotdPasswordModal({ children }: SpotdPasswordModalProps) {
  const router = useRouter();
  const { hasAccess, isChecking, error, validatePassword } = useSpotdAccess();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

  // Trigger shake animation on wrong password
  useEffect(() => {
    if (error) {
      setShake(true);
      const t = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(t);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    await validatePassword(password);
  };

  const handleGoBack = () => router.push("/#work");

  // Still loading from localStorage
  if (hasAccess === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div
          className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"
          aria-label="Loading"
        />
      </div>
    );
  }

  // Access granted — render case study
  if (hasAccess) return <>{children}</>;

  // No access — show password modal (full-page overlay, route is blocked)
  return (
    <div className="fixed inset-0 bg-background/70 backdrop-blur-md flex items-center justify-center px-4 z-[999]">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <motion.div
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary/5 border-b border-border px-8 py-6 text-center">
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Lock className="w-7 h-7 text-primary" aria-hidden="true" />
                </motion.div>
                <h1 className="text-xl font-bold text-foreground">
                  Protected Case Study
                </h1>
                <p className="text-sm text-muted-foreground mt-2">
                  The{" "}
                  <span className="font-medium text-foreground">
                    Spot&apos;D
                  </span>{" "}
                  case study is password protected.
                  <br />
                  Enter the access password to continue.
                </p>
              </div>

              {/* Form */}
              <div className="px-8 py-6 space-y-5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="spotd-password"
                      className="text-sm font-medium"
                    >
                      Access Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="spotd-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10 h-11"
                        autoFocus
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Error message */}
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-destructive flex items-center gap-1.5"
                          role="alert"
                        >
                          <X
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11"
                    disabled={isChecking || !password.trim()}
                  >
                    {isChecking ? (
                      <span className="flex  items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"
                          aria-hidden="true"
                        />
                        Verifying...
                      </span>
                    ) : (
                      <span className="flex cursor-pointer items-center gap-2">
                        <Lock className="h-4 w-4" aria-hidden="true" />
                        Unlock Case Study
                      </span>
                    )}
                  </Button>
                </form>

                {/* Note about session expiry */}
                <p className="text-xs text-center text-muted-foreground">
                  Access expires after 30 minutes of inactivity.
                </p>

                {/* Go back */}
                <div className="border-t border-border pt-4">
                  <Button
                    variant="ghost"
                    className="w-full h-11 bg-white! cursor-pointer text-muted-foreground hover:text-foreground"
                    onClick={handleGoBack}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
                    Go back to home
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
