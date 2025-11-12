import { useEffect, useState } from "react"

import logo from "./assets/New.svg"
import logoB from "./assets/NewB.svg"

export default function Nav() {
  const [showNav, setShowNav] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // 🔹 Deteksi perubahan dark mode
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Set awal
    setIsDark(document.documentElement.classList.contains("dark"))

    return () => observer.disconnect()
  }, [])

  // 🔹 Efek navbar muncul saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-8 flex justify-between items-center transition-all duration-500 backdrop-blur bg-black/30 text-white z-50  ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {/* 🔹 Logo berubah tergantung dark mode */}
      <img
        src={isDark ? logo : logoB}
        alt="logo"
        className="w-[150px] transition-all duration-300"
      />

      <div className="hidden md:block">
        <ul className="flex gap-4 text-lg font-QuickSand">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Skill">Skill</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>
      </div>

      <div className="md:hidden block">{/* burger icon nanti di sini */}</div>
    </nav>
  )
}
