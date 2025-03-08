/*
 * @Author: SanXiaoXing
 * @Date: 2025-03-08 21:57:06
 * @LastEditTime: 2025-03-08 23:46:36
 * @Description: 标签栏离开与回来提示组件
 * CC BY-NC-SA 4.0
 */

'use client'

import { useEffect, useRef, useState } from 'react'

interface TabNotifierProps {
    leaveTitle?: string       // 离开时的标题（默认："等等！别走 🥺"）
    returnTitle?: string      // 返回时的临时标题（默认："欢迎回来！🎉"）
    stayDuration?: number     // 返回提示持续时间（ms，默认：2000）
    leaveIcon?: string        // 离开时的图标路径（默认："⚠️"）
    originalIcon?: string     // 原始图标路径（默认："/favicon.ico"）
}

export default function TabNotifier({
    leaveTitle = "爱我～别走～ 🥺",
    returnTitle = "欢迎回来！🎉",
    stayDuration = 2000,
    leaveIcon = "/favicon-fight_white.svg",
    originalIcon = "/favicon.svg"
    }: TabNotifierProps) {
    const originalTitle = useRef<string>("")
    const [isVisible, setIsVisible] = useState(true)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    // 修改标签页内容
    const modifyTab = (title: string, icon: string) => {
        document.title = title
        const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
        if (link) link.href = icon
    }

    // 处理可见性变化
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
        originalTitle.current = document.title
        modifyTab(leaveTitle, leaveIcon)
        setIsVisible(false)
        } else {
        modifyTab(returnTitle, originalIcon)
        setIsVisible(true)
        
        timeoutRef.current = setTimeout(() => {
            modifyTab(originalTitle.current, originalIcon)
        }, stayDuration)
        }
    }

    useEffect(() => {
        // 初始化保存原始标题
        originalTitle.current = document.title || "Homepage"
        
        // 设置事件监听
        document.addEventListener('visibilitychange', handleVisibilityChange)
        
        // 清理函数
        return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <div className="fixed bottom-4 right-4">
        <div className={`w-3 h-3 rounded-full`} 
            title={isVisible ? "当前标签页活跃" : "标签页被隐藏"}
        />
        </div>
    )
}