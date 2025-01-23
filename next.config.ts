import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['legal-post.com'], // WordPress 이미지 도메인 추가
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
};

export default nextConfig;
