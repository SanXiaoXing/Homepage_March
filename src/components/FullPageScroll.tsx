/*
 * @Author: SanXiaoXing
 * @Date: 2025-03-06 22:58:12
 * @LastEditTime: 2025-03-09 01:20:08
 * @Description: 全屏滚动组件，可根据当前背景进行调节滚动条颜色以及字体颜色
 * CC BY-NC-SA 4.0
 */

'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const FullPageScroll = ({ sections }: { sections: React.ReactNode[] }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const isDarkBackground = currentSection % 2 === 0; // 判断当前背景色

  // 处理滚轮事件
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);
      
      setCurrentSection(newSection);
      
      // 防抖处理
      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling]);

  // 处理导航按钮点击
  const handleNavClick = (direction: 1 | -1) => {
    setCurrentSection(prev => Math.min(Math.max(prev + direction, 0), sections.length - 1));
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* 导航指示器 - 根据背景切换颜色 */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 space-y-2 hidden md:block">
        <button 
          onClick={() => handleNavClick(-1)}
          disabled={currentSection === 0}
          className="p-2 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronUpIcon className={`w-6 h-6 ${isDarkBackground ? 'text-black' : 'text-white'}`} />
        </button>
        <div className={`h-8 w-px mx-auto ${isDarkBackground ? 'bg-black' : 'bg-white'}`} />
        <button 
          onClick={() => handleNavClick(1)}
          disabled={currentSection === sections.length - 1}
          className="p-2 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronDownIcon className={`w-6 h-6 ${isDarkBackground ? 'text-black' : 'text-white'}`} />
        </button>
      </div>

      {/* 分页内容 */}
      <div 
        className="transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="h-screen w-full flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 黑白交替背景层 */}
            <div className="absolute inset-0 -z-10">
              <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
            </div>
            
            {/* 内容层 - 根据背景切换文字颜色 */}
            <div className={`max-w-4xl px-4 text-center ${
              index % 2 === 0 ? 'text-black' : 'text-white'
            }`}>
              {section}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FullPageScroll;