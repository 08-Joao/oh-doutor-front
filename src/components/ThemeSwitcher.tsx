"use client"

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() { 
    const { setTheme } = useTheme();
    const isDark = useTheme().resolvedTheme === "dark";

    return (
        <Button className="cursor-pointer" onClick={() => setTheme(isDark ? "light" : "dark")}>
            {isDark ? <Sun /> : <Moon />}
        </Button>
    )
}