import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "promise-assets-backend.test",
      "spider.promiseassets.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://spider.promiseassets.com/api/:path*',
      },
    ]
  },
};

export default nextConfig;
