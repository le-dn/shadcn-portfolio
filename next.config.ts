import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://random.imagecdn.app/**')],
  },
};

export default nextConfig;
