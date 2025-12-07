"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-md text-muted-foreground"
                aria-label="Toggle theme"
            >
                <div className="h-4 w-4" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-secondary/50 active:scale-95"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
            ) : (
                <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
            )}
        </button>
    )
}
