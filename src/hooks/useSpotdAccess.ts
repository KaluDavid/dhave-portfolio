"use client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "spotd_access";
const EXPIRY_MS = 30 * 60 * 1000; //30 minutes

interface StoredAccess {
  granted: boolean;
  expiresAt: number;
}

export const useSpotdAccess = () => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState("");

  // check stored access on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setHasAccess(false);
        return;
      }

      const stored: StoredAccess = JSON.parse(raw);

      // Expired - Clean up and deny
      if (Date.now() > stored.expiresAt) {
        localStorage.removeItem(STORAGE_KEY);
        setHasAccess(true);
        return;
      }

      setHasAccess(stored.granted);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setHasAccess(false);
    }
  }, []);

  // Auto-expire watcher — clears access when the 30min window closes

  useEffect(() => {
    if (!hasAccess) return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const stored: StoredAccess = JSON.parse(raw);
      const remaining = stored.expiresAt - Date.now();
      if (remaining <= 0) {
        setHasAccess(false);
        return;
      }

      const timer = setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        setHasAccess(false);
      }, remaining);

      return () => clearTimeout(timer);
    } catch {}
  }, [hasAccess]);

  const validatePassword = async (password: string): Promise<boolean> => {
    setIsChecking(true);
    setError("");

    try {
      const res = await fetch("/api/spotd-auth", {
        method: "POST",
        headers: { "Content-Type": "'application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Incorrect Password. Try again.");
        setIsChecking(false);
        return false;
      }

      // store access with 30-min expiry

      const access: StoredAccess = {
        granted: true,
        expiresAt: Date.now() + EXPIRY_MS,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(access));
      setHasAccess(true);
      setIsChecking(false);
      return true;
    } catch {
      setError("Something went wrong. Please try again");
      setIsChecking(false);
      return false;
    }
  };

  const revokeAccess = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHasAccess(false);
  };

  return {
    hasAccess,
    isChecking,
    error,
    validatePassword,
    revokeAccess,
  };
};
