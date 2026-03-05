/**
 * Next.js config: compression, strict mode, and tree-shaking for react-icons and framer-motion
 * (smaller bundles). allowedDevOrigins for dev server access from other devices on the network.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.112"],
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

export default nextConfig;
