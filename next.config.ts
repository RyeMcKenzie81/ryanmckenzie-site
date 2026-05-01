import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/landing-page-blueprint',
        destination: '/landing-page-blueprint/index.html',
      },
    ];
  },
};

export default nextConfig;
