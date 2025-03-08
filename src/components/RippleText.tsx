'use client'
import { FC } from "react";

interface MirrorTextProps {
  text: string;
}

const MirrorText: FC<MirrorTextProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center">
      {/* 正向文字 */}
      <p className="font-bold text-5xl md:text-5xl lg:text-7xl">{text}</p>
      {/* 镜像文字，垂直翻转，并应用渐隐遮罩 */}
      <p
        className="text-4xl md:text-4xl lg:text-6xl font-bold mt-2 opacity-50"
        style={{
          transform: "scaleY(-1)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default MirrorText;
