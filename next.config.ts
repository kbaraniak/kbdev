import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.gravatar.com'],
  },
  target: 'serverless',
};

export default nextConfig;
