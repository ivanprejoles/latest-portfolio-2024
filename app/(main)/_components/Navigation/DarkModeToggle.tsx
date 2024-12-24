"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      id="darkToggle"
      className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
    >
      <div className="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600 dark:group-hover:border-neutral-400">
        <svg
          className="absolute dark:hidden w-6 h-6 transition duration-700 transform ease"
          id="sun"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg
          className="absolute hidden w-6 h-6 transition duration-700 transform ease dark:block"
          id="moon"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </div>
      <span className="hidden sm:inline-block">
        <span id="dayText" className={`ml-2 ${theme === 'dark' ? 'hidden' : ''}`}>
          Day mode
        </span>
        <span id="nightText" className={`ml-2 ${theme === 'light' ? 'hidden' : ''}`}>
          Night mode
        </span>
      </span>
    </div>
  )
}
