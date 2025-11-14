import { useState, useEffect, useRef } from "react"

import AllPage from './assets/AllPages.svg'
import Eduverse from './assets/Eduverse.svg'
import Cisco from './assets/Cisco.svg'
import Hijai from './assets/Hijai.svg'
import Coding from './assets/Coding.svg'
import Slicing from './assets/Slicing.svg'
import Telat from './assets/Telat.svg'

const images = [
  Slicing,
  Telat,
  Coding,
  Hijai,
  Cisco,
  Eduverse,
  AllPage
]

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const startX = useRef(0)
  const endX = useRef(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Auto slide setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(timer)
  }, [current])

  // Handle swipe (untuk mobile)
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = startX.current - endX.current
    if (distance > 50) nextSlide() // geser kiri → next
    if (distance < -50) prevSlide() // geser kanan → prev
  }

  return (
    <section id="Project" className="h-[150vh] max-sm:h-[70vh] flex flex-row max-sm:flex-col items-center overflow-hidden">
      <div></div>


      <div className="dark:text-white text-nig font-poppins flex flex-col max-sm:flex-row text-7xl font-bold text-center max-sm:mx-auto ml-auto mr-6">
        <h1>P</h1>
        <h1>r</h1>
        <h1>o</h1>
        <h1>j</h1>
        <h1>e</h1>
        <h1>c</h1>
        <h1>t</h1>
      </div>


      <div
        className="relative w-full max-w-3xl mr-auto overflow-hidden rounded-2xl shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full flex-shrink-0 object-cover h-[250px] sm:h-[400px] md:h-[500px]"
              alt={`slide-${i}`}
            />
          ))}
        </div>

        {/* Tombol kiri */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-3 py-2 rounded-full shadow-md hidden sm:block"
        >
          ‹
        </button>

        {/* Tombol kanan */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-3 py-2 rounded-full shadow-md hidden sm:block"
        >
          ›
        </button>

        {/* Indicator */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === i ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>

  )
}
