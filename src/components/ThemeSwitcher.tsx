"use client"


import { useTheme } from "next-themes";
import { CloudyMoon, Sun2 } from "@solar-icons/react";

export default function ThemeSwitcher() { 
    const { setTheme } = useTheme();
    const isDark = useTheme().resolvedTheme === "dark";

    return (
        <button 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 hover:from-primary/30 hover:to-secondary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 group cursor-pointer p-0 flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-1 rounded-lg transition-all duration-300 group-hover:bg-primary/10">
                {isDark ? 
                    <Sun2 weight="BoldDuotone" size={20} className="text-primary transition-colors duration-300" /> : 
                    <CloudyMoon weight="BoldDuotone" size={20} className="text-primary transition-colors duration-300" />
                }
            </div>
        </button>
    )
}