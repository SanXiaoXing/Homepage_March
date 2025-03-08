/**
 * SanXiaoXing's Homepage
 * 
 * @license CC BY-NC-SA 4.0
 * @author SanXiaoXing
 * @link https://github.com/SanXiaoXing/Homepage_March
 * 
 * 本作品采用知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议进行许可。
 * 查看完整协议内容：https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import FullPageScroll from '@/components/FullPageScroll';
import MirrorText from '@/components/RippleText';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import {LinkPreview} from "@/components/ui/link-preview";
import SocialIcons from "@/components/SocialIcons";

const words = ["代码生花映流光，星河无界共徜徉。", "星辉璀璨迎君往，诗行盛放待君藏。", "墨香盈袖启新章，云阁静候知音赏。", "算法生花映苍穹，智芯流转纳万象。", "量子跃迁启新章，星河无界任君航。"];
export default function Home() {
  const sections = [
    
      <div key="1">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h1 className="font-emblema font-bold mb-6 select-none">
          <MirrorText text="SanXiaoXing" />
        </h1>
        <div className="flex flex-col text-2xl font-bold font-simsun items-center justify-center lg:text-3xl md:text-2xl mb-3">
          <FlipWords words={words} duration={3000} className='text-center select-none'/>
        </div>
        <p className="font-emblema text-2xl text-gray-300 select-none">
        Your joy shall bloom like petals kissed by dawn, <br />
        where starlight dances in the whispers of your soul.
        </p>
        </BackgroundLines>
      </div>,

    <div key="2">
      <h2 className="font-emblema font-bold mb-8">
        <MirrorText text="Projects" />
      </h2>
      <p className="text-3xl md:text-3xl lg:text-4xl items-center justify-center ">
      这里有更多精彩{" "}
        <LinkPreview
            url="https://projects.sanxiaoxing.cn"
            className="text-3xl lg:text-4xl md:text-3xl font-emblema font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Projects
        </LinkPreview>
        {" "}等你发现，快来 {" "}<p className='font-emblema inline-block'>click</p>查看全部！
      </p>
      
      <BackgroundBeams />
    </div>,
    <div key="3">
      <h2 className="font-emblema font-bold mb-10">
        <MirrorText text="Contact" />
      </h2>
      <SocialIcons />
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-3  border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            {/* 原有内容保持不变 */}
            <div className="inline-flex items-center gap-1">
              由<em className="font-emblema not-italic">SanXiaoXing</em>创建
              <span className="mx-1">•</span>
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                CC BY-NC-SA 4.0
              </a>
            </div>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://github.com/SanXiaoXing/Homepage_March"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              查看源码
            </a>
            <div className="basis-full text-center"> {/* 单独成行的年份 */}
              <span>© 2023 - {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
      <BackgroundBeams />
    </div>
    
  ];

  return <FullPageScroll sections={sections} />;
}
