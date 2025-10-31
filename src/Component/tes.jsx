import AllPage from './assets/AllPages.svg'
import Hijai from './assets/Hijai.svg'
import Eduverse from './assets/Eduverse.svg'
import Cisco from './assets/Cisco.svg'
import Coding from './assets/Coding.svg'

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#141010] text-white px-10 py-20 flex flex-col items-center">
      
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-6xl mb-10">
        <h1 className="text-3xl md:text-5xl font-QuickSand font-semibold">Portfolio</h1>
        <h2 className="text-prim text-xl font-QuickSand">Projects</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-6 grid-rows-2 gap-6 max-w-6xl w-full auto-rows-[250px]">

        {/* Hijai - kecil tapi tinggi sama */}
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden flex items-center justify-center bg-[#0F0E0E]">
          <img 
            src={Hijai} 
            alt="Hijai" 
            className="w-[80%] h-full object-contain" 
          />
        </div>

        {/* Cisco - sedang */}
        <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
          <img 
            src={Cisco} 
            alt="Cisco" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Eduverse - paling besar */}
        <div className="col-span-3 row-span-1 rounded-2xl overflow-hidden">
          <img 
            src={Eduverse} 
            alt="Eduverse" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Coding - baris bawah kiri */}
        <div className="col-span-3 row-span-1 rounded-2xl overflow-hidden">
          <img 
            src={Coding} 
            alt="Coding" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* AllPage - baris bawah kanan */}
        <div className="col-span-3 row-span-1 rounded-2xl overflow-hidden">
          <img 
            src={AllPage} 
            alt="AllPage" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  )
}
