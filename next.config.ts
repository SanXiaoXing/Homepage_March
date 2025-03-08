import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'assets.aceternity.com', // 添加报错提示的域名
      'img.shields.io' // 补充当前代码中使用的徽章图片域名
    ],
  },
};

export default nextConfig;
