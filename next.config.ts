import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash:true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "164.52.215.173",
        port: "6011",
      },
    ],
  },
};
export default nextConfig;
