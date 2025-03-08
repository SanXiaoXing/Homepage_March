/*
 * @Author: SanXiaoXing
 * @Date: 2025-03-06 22:47:35
 * @LastEditTime: 2025-03-09 00:54:13
 * @Description: 
 * CC BY-NC-SA 4.0
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      'images.unsplash.com',
      'assets.aceternity.com', // 添加报错提示的域名
      'img.shields.io' // 补充当前代码中使用的徽章图片域名
    ],
  },
};

export default nextConfig;
