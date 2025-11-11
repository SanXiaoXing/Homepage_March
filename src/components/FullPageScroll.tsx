/*
 * @Author: SanXiaoXing
 * @Date: 2025-03-06 22:58:12
 * @LastEditTime: 2025-03-09 14:47:57
 * @Description: 全屏滚动组件，可根据当前背景进行调节滚动条颜色以及字体颜色
 * CC BY-NC-SA 4.0
 */

'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * 全屏层叠滚动组件
 *
 * 功能:
 * - 使用 GSAP ScrollTrigger 将容器固定（pin），并在滚动时让各面板自下而上层叠上移。
 * - 每个传入的 section 作为一个绝对定位的面板，从底部逐步露出，实现与 dist 相同的翻页效果。
 *
 * 参数:
 * - sections: React 节点数组，依次作为面板内容呈现。
 *
 * 返回:
 * - React 组件：渲染层叠滚动的容器与面板。
 */
const FullPageScroll = ({ sections }: { sections: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);

    // 在当前容器作用域内创建动画，避免选择器污染全局
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.panel');

      // 设置 zIndex：后面的面板更靠下，前面的面板更靠上
      gsap.set(panels, { zIndex: (i, _target, targets) => (targets as HTMLElement[]).length - i });

      // 让除最后一个外的所有面板在滚动时向上移动 100%
      gsap.to(panels.slice(0, -1), {
        yPercent: -100,
        ease: 'none',
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current!,
          start: 'top top',
          end: `+=${Math.max((panels.length - 1) * 100, 100)}%`,
          scrub: true,
          pin: true,
        },
      });
    }, containerRef);

    // 卸载时清理上下文与触发器，避免内存泄漏
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    // 依赖于 sections 数量，保证 end 范围正确
  }, [sections.length]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen absolute inset-0 overflow-hidden"
    >
      {sections.map((section, index) => (
        <div key={index} className="panel absolute inset-0 flex items-center justify-center">
          <div
            className={`w-full h-full flex items-center justify-center px-4 text-center ${
              index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            {section}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullPageScroll;