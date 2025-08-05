import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Vercelでは動的機能（API Routes）が利用可能

  // パフォーマンス最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // SEO向けの設定
  poweredByHeader: false,
  
  experimental: {
    optimizePackageImports: ['@icons-pack/react-simple-icons']
  },
};

export default nextConfig;
