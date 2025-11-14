import { useEffect, useState } from "react"

// Icon default (dark mode)
import Pen from './assets/pen.svg'
import Phone from './assets/phone.svg'
import Monitor from './assets/monitor.svg'
import Search from './assets/search.svg'

// Icon versi light mode (warna hitam)
import PenB from './assets/penB.svg'
import PhoneB from './assets/phoneB.svg'
import MonitorB from './assets/monitorB.svg'
import SearchB from './assets/searchB.svg'

export default function Doing() {
  const [isDark, setIsDark] = useState(false)

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
    <section className="relative h-[150vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="text-nig dark:text-white border-2 border-nig dark:border-white rounded-lg p-5 w-[300px]">
            <div className="flex flex-row items-center gap-2 mb-3">
              <img src={isDark ? Pen : PenB} alt="pen" className="rounded-lg" />
              <h1 className="text-lg font-QuickSand font-bold">Custom Web Design</h1>
            </div>
            <h1 className="text-lg w-[250px] text-start font-QuickSand">
              Design unique, tailored websites to fit your brand and business needs
            </h1>
          </div>

          {/* Card 2 */}
          <div className="text-nig dark:text-white border-2 border-nig dark:border-white rounded-lg p-5 w-[300px]">
            <div className="flex flex-row items-center gap-2 mb-3">
              <img src={isDark ? Phone : PhoneB} alt="phone" className="rounded-lg" />
              <h1 className="text-lg font-QuickSand font-bold">Mobile Web Design</h1>
            </div>
            <h1 className="text-lg w-[250px] text-start font-QuickSand">
              Design custom websites optimized for a seamless mobile experience
            </h1>
          </div>

          {/* Card 3 */}
          <div className="text-nig dark:text-white border-2 border-nig dark:border-white rounded-lg p-5 w-[300px]">
            <div className="flex flex-row items-center gap-2 mb-3">
              <img src={isDark ? Monitor : MonitorB} alt="monitor" className="rounded-lg" />
              <h1 className="text-lg font-QuickSand font-bold">Website Redesign</h1>
            </div>
            <h1 className="text-lg w-[250px] text-start font-QuickSand">
              Redesign your site to improve its functionality, aesthetics, and performance
            </h1>
          </div>

          {/* Card 4 */}
          <div className="text-nig dark:text-white border-2 border-nig dark:border-white rounded-lg p-5 w-[300px]">
            <div className="flex flex-row items-center gap-2 mb-3">
              <img src={isDark ? Search : SearchB} alt="search" className="rounded-lg" />
              <h1 className="text-lg font-QuickSand font-bold">UX Research</h1>
            </div>
            <h1 className="text-lg w-[250px] text-start font-QuickSand">
              Analyze user behavior to enhance website design and usability
            </h1>
          </div>
        </div>

        {/* Judul */}
        <div className="text-nig dark:text-white text-start">
          <h1 className="text-8xl md:text-9xl font-poppins font-extrabold">What</h1>
          <h1 className="text-8xl md:text-9xl font-poppins font-extrabold">Can I</h1>
          <h1 className="text-8xl md:text-9xl font-poppins font-extrabold">Do</h1>
        </div>
      </div>
    </section>
  )
}
