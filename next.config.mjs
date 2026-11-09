import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const emptyPolyfill = path.resolve(__dirname, "src/lib/empty-polyfill.js");
      config.resolve.alias["../build/polyfills/polyfill-module"] = emptyPolyfill;
      config.resolve.alias["next/dist/build/polyfills/polyfill-module"] = emptyPolyfill;
    }
    return config;
  },
};

export default nextConfig;
