/**
 * SanXiaoXing's Homepage
 * 
 * @license CC BY-NC-SA 4.0
 * @author SanXiaoXing
 * @link 
 * 
 * 本作品采用知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议进行许可。
 * 查看完整协议内容：https://creativecommons.org/licenses/by-nc-sa/4.0/
 */
import FullPageScroll from '@/components/FullPageScroll';
import MirrorText from '@/components/RippleText';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  const sections = [
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div key="1">
        <h1 className="font-emblema font-bold mb-6">
          <MirrorText text="SanXiaoXing" />
        </h1>
        
        <p className="font-emblema text-xl text-gray-200">
          Scroll down to explore more
        </p>
      </div>
    </BackgroundLines>,
    <div key="2">
      <h2 className="text-5xl font-bold text-white mb-6">
        Second Section
      </h2>
      <p className="text-lg text-gray-200">
        Beautiful animations with Tailwind
      </p>
      <BackgroundBeams />
    </div>,
    <div key="3">
      <h2 className="text-5xl font-bol mb-6">
        Final Section
      </h2>
      <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-l hover:bg-white/20 transition-all">
        Get Started
      </button>
      <BackgroundBeams />
    </div>
  ];

  return <FullPageScroll sections={sections} />;
}
