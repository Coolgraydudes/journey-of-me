import { useEffect, useState } from "react"
import logo from './assets/New.svg'


export default function Nav() {
  const [showNav, setShowNav] = useState(false)

    // 4. efek untuk mendengarkan event scroll
  useEffect(() => {
    const handleScroll = () => {
      // 5. jika user scroll lebih dari 50px dari atas, munculkan navbar
      if (window.scrollY > 50) {
        setShowNav(true)
      } else {
        // 6. kalau kembali ke atas (<=50px), sembunyikan navbar
        setShowNav(false)
      }
    }

    window.addEventListener("scroll", handleScroll) // 7. pasang listener
    return () => window.removeEventListener("scroll", handleScroll) // 8. bersihin listener saat komponen unmount
  }, []) // [] => jalankan sekali saat mount
    
      return (
        
        <>
            <nav
                className={`fixed top-0 left-0 w-full p-8 flex justify-between items-center transition-all duration-500 backdrop-blur bg-black/30 text-white z-50 ${
                showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
            >
            <img src={logo} alt="" className='w-[150px]'/>
            <div className="hidden md:block">
              <ul className="flex gap-4 text-lg font-QuickSand">
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#Skill">Skill</a></li>
                  <li><a href="#Project">Project</a></li>
                  <li><a href="#Footer">Contact</a></li>
              </ul>
            </div>

            <div className="md:hidden block">

            </div>

            </nav>
        </>
      )
}