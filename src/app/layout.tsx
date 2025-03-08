import type { Metadata } from "next";
import { Geist, Geist_Mono, Emblema_One} from "next/font/google";
import TabNotifier from "@/components/TabNotifier";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const emblemaOne = Emblema_One({
  weight: "400",
  variable: "--font-emblema-one",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homepage",
  description: "Keeping Smile Everyday",
  icons: {
    icon: '/favicon.svg',    // 现代浏览器
    shortcut: '/favicon.svg',// Windows 快捷方式
    apple: '/favicon.svg',      // iOS 设备
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${emblemaOne.variable} antialiased`}
      >
        {children}
        <TabNotifier />
      </body>
    </html>
  );
}
