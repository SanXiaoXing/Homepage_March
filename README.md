# SanXiaoXing's Homepage
[English](README_EN.md) | [中文](README.md)

## 🎉 欢迎来到我的主页（[点击链接查看](https://sanxiaoxing.cn)）
这是一个基于 Next.js 构建的个人主页项目，采用现代化的设计理念和技术栈，打造出独特的视觉体验。

## ✨ 特性

- 🚀 基于 Next.js 15 构建，享受最新的框架特性
- 💅 使用 Tailwind CSS 进行样式设计，实现优雅的响应式布局
- 🎨 自定义 UI 组件，包含多种动画效果：
  - 镜像文字效果
  - 背景光束动画
  - 全屏滚动体验
  - 文字翻转动画
  - 链接预览卡片
- 📱 完全响应式设计，支持各种设备尺寸
- 🔄 动态标签页标题
- 🎯 自定义字体支持

## 🚀 快速开始

1. 克隆项目

```bash
git clone https://github.com/SanXiaoXing/Homepage_March.git
cd Homepage_March
```
2. 安装依赖

```bash
npm install
```

3. 启动测试环境

```bash
npm run dev
```

## 🏗️ 项目结构

```
homepage/
├─ public/                                   # 静态资源
│  ├─ fonts/                                 # 字体
│  │  └─ EmblemaOne-Regular.ttf
│  ├─ favicon-fight_white.svg
│  └─ favicon.svg                            # 网站图标
├─ src/
│  ├─ app/                                   # 页面
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/                            # 组件
│  │  ├─ ui/                                 # UI组件
│  │  │  ├─ background-beams.tsx
│  │  │  └─ link-preview.tsx
│  │  ├─ FullPageScroll.tsx
│  │  └─ TabNotifier.tsx
│  └─ lib/                                   # 工具类
│     └─ utils.ts
├─ .gitignore
├─ CHANGELOG.md                              # 更新日志
├─ components.json
├─ eslint.config.mjs
├─ LICENSE                                   # 许可协议
├─ next-env.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md                                 # 项目描述
├─ tailwind.config.ts
└─ tsconfig.json
```


## 🎨 主要功能

- 全屏滚动 : 实现流畅的全屏页面切换效果
- 动态文字 : 支持文字镜像效果和翻转动画
- 背景效果 : 包含光束和线条动画
- 社交链接 : 集成多个社交平台的图标和链接
- 响应式设计 : 完美适配移动端和桌面端

## 🔧 技术栈
- 框架 : Next.js 15
- 样式 : Tailwind CSS
- 动画 : Framer Motion
- 类型 : TypeScript
- 代码规范 : ESLint
- 包管理 : npm

## 📦 依赖版本

- Next.js: 15.2.1
- Tailwind CSS: 4.3.12
- TypeScript: 5.2.2
- Framer Motion: 12.4.10


## 📜 许可协议

本项目采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议授权，您可自由：

- **共享** — 在任何媒介以任何形式复制、发行本作品
- **演绎** — 修改、转换或以本作品为基础进行创作

但必须遵守以下条件：

- **署名** — 必须给出适当署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。
- **非商业性使用** — 不得将本作品用于商业目的。
- **相同方式共享** — 如果您再混合、转换或者基于本作品进行创作，您必须基于与原先相同的许可协议分发您贡献的作品。

![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)


## 📝 许可

快速增加协议内容

```
curl -o LICENSE https://mirrors.creativecommons.org/licenses/by-nc-sa/4.0/legalcode.txt
```

在其内容中可增加复制内容如下：

```
Copyright (c) 2025 SanXiaoXing

Copyright (c) [年份] [作者/机构名]
```


