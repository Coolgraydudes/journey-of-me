import { useEffect, useState } from 'react'
import Raining from './assets/Raining_converted.webm'       // untuk dark mode
import LightRaining from './assets/Light-raining.mp4'        //  untuk light mode

export default function Hero() {
  const [showThis, setShowThis] = useState(false)
  const [showIs, setShowIs] = useState(false)
  const [showMy, setShowMy] = useState(false)
  const [showJourney, setShowJourney] = useState(false)
  const [isDark, setIsDark] = useState(false) // untuk deteksi mode

  // Deteksi perubahan tema dari <html>
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    // Set awal
    setIsDark(document.documentElement.classList.contains('dark'))

    return () => observer.disconnect()
  }, [])

  // Animasi teks
  useEffect(() => {
    setTimeout(() => setShowThis(true), 500)
    setTimeout(() => setShowIs(true), 1000)
    setTimeout(() => setShowMy(true), 1500)
    setTimeout(() => setShowJourney(true), 2000)
  }, [])

  return (
    <section
      id="Home"
      className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden transition-all duration-700"
    >
      {/* 🎥 Video Background */}
      <video
        key={isDark ? 'dark' : 'light'} // biar video reload saat mode ganti
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={isDark ? Raining : LightRaining} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 dark:bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 dark:text-prim text-white transition-all duration-200">
        <div className="flex flex-row gap-2 text-center font-BlackPool text-6xl md:text-8xl md:-mb-[35px] md:-ml-[40px] -mb-[25px] -ml-[25px]">
          <h1 className={`${showThis ? 'opacity-100' : 'opacity-0'}`}>This</h1>
          <h1 className={`${showIs ? 'opacity-100' : 'opacity-0'}`}>is</h1>
        </div>
        <div className="flex flex-row gap-2 text-center font-poppins text-6xl md:text-8xl font-extrabold">
          <h1 className={`${showMy ? 'opacity-100' : 'opacity-0'}`}>My</h1>
          <h1 className={`${showJourney ? 'opacity-100' : 'opacity-0'} `}>Journey</h1>
        </div>
      </div>
    </section>
  )
}
