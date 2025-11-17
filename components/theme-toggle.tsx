"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            className="border-none shadow-none bg-transparent dark:text-gray-200 text-gray-600 hover:bg-transparent animate-300 dark:hover:text-amber-500 hover:text-sky-500"
            size="icon"
        
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun className="h-5 w-5 rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 scale-0 transition-all dark:scale-100" />
        </Button>
    )
}
