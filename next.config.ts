import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "motion",
      "d3",
      "recharts"
    ],
  },
  // Pin Turbopack root to this project to avoid "inferred workspace root" warnings
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
