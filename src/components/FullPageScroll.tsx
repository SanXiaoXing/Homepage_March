/*
 * @Author: SanXiaoXing
 * @Date: 2025-03-06 22:58:12
 * @LastEditTime: 2025-03-09 14:47:57
 * @Description: 全屏滚动组件，可根据当前背景进行调节滚动条颜色以及字体颜色
 * CC BY-NC-SA 4.0
 */

'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const FullPageScroll = ({ sections }: { sections: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen"
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="min-h-screen w-full flex items-center justify-center relative py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 黑白交替背景层 */}
          <div className="absolute inset-0 -z-10">
            <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
          </div>
          
          {/* 内容层 */}
          <div className={`max-w-4xl px-4 text-center ${
            index % 2 === 0 ? 'text-black' : 'text-white'
          }`}>
            {section}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FullPageScroll;