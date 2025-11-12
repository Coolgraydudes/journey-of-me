import { useEffect, useState } from "react"

// SVG untuk dark mode
import Twit from "./assets/Tiwt.svg"
import Disc from "./assets/Disc.svg"
import Insta from "./assets/Insta.svg"
import Linked from "./assets/Linked.svg"

// SVG untuk light mode (warna hitam)
import TwitB from "./assets/twitB.svg"
import DiscB from "./assets/dcB.svg"
import InstaB from "./assets/instaB.svg"
import LinkedB from "./assets/inB.svg"

export default function Footer() {
  const [isDark, setIsDark] = useState(false)

  // Deteksi perubahan tema
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

  return (
    <section
      id="Footer"
      className="h-[80vh] relative flex justify-center text-nig dark:text-white"
    >
      <hr className="border-t-2 border-white" />
      <div className="flex flex-row justify-center items-end pb-10 md:gap-[350px] gap-[30px]">
        <div className="md:items-end items-center">
          <h1 className="text-7xl font-poppins font-extrabold">
            Get In Touch
          </h1>

          <div className="flex gap-6 mt-4">
            <img
              src={isDark ? Twit : TwitB}
              alt="Twitter"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
            />
            <img
              src={isDark ? Disc : DiscB}
              alt="Discord"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
            />
            <img
              src={isDark ? Insta : InstaB}
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
            />
            <img
              src={isDark ? Linked : LinkedB}
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="items-end md:block hidden">
          <ul className="flex gap-4 text-lg">
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
      </div>
    </section>
  )
}
