"use client"

import { useTheme } from "next-themes";
import { CloudyMoon, Sun2 } from "@solar-icons/react";

export default function ThemeSwitcher() { 
    const { setTheme } = useTheme();
    const isDark = useTheme().resolvedTheme === "dark";

    return (
        <button 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 hover:from-primary/30 hover:to-secondary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 group cursor-pointer p-0 flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative w-6 h-6 flex items-center justify-center">
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                    isDark 
                        ? 'opacity-100 rotate-0 scale-100' 
                        : 'opacity-0 -rotate-90 scale-75'
                }`}>
                    <Sun2 
                        weight="BoldDuotone" 
                        size={20} 
                        className="text-primary transition-colors duration-300" 
                    />
                </div>
                
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                    !isDark 
                        ? 'opacity-100 rotate-0 scale-100' 
                        : 'opacity-0 rotate-90 scale-75'
                }`}>
                    <CloudyMoon 
                        weight="BoldDuotone" 
                        size={20} 
                        className="text-primary transition-colors duration-300" 
                    />
                </div>
            </div>

            <div className={`absolute inset-0 rounded-xl transition-all duration-700 ease-out ${
                isDark 
                    ? 'bg-gradient-to-br from-yellow-400/10 to-orange-400/10' 
                    : 'bg-gradient-to-br from-blue-400/10 to-purple-400/10'
            }`}></div>
        </button>
    )
}