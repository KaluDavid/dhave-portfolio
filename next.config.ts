import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external sources used in project showcase + testimonials
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Compress responses
  compress: true,
};

export default nextConfig;
