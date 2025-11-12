import { useState, useEffect } from "react"

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false)

  // Cek tema tersimpan
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Nyalain / matiin dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800
           shadow-lg transition-all duration-500 hover:scale-110 flex items-center justify-center"
      aria-label="Toggle dark mode"
    >
      {/* ☀️ Icon Matahari */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 text-yellow-500 transition-transform duration-500 ${
          darkMode ? "rotate-180 opacity-0 absolute" : "opacity-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>

      {/* 🌙 Icon Bulan */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 text-gray-100 transition-transform duration-500 ${
          darkMode ? "rotate-0 opacity-100" : "-rotate-180 opacity-0 absolute"
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </button>
  )
}
