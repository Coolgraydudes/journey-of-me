import AllPage from './assets/AllPages.svg'
import Eduverse from './assets/Eduverse.svg'
import Cisco from './assets/Cisco.svg'
import Hijai from './assets/Hijai.svg'
import Coding from './assets/Coding.svg'
import Slicing from './assets/Slicing.svg'
import Telat from './assets/Telat.svg'
import Eid from './assets/Eid.svg'


export default function Card() {

  const cards = [
    {
      desc: "This website is an online bookstore I built, where people can easily explore and buy quality books at affordable prices.",
      img: AllPage,
      link: "https://all-pages-henna.vercel.app/"
    },
    {
      desc: "This website is Eduverse, a learning platform I created to help people access simple, clear, and high-quality educational content.",
      img: Eduverse,
      link: "https://fawwazrn.github.io/EDUVERSE/"
    },
    {
      desc: "This is my first website slicing project using Tailwind CSS, where I practiced building a clean and modern landing page layout.",
      img: Slicing,
      link: "https://website-slicing-with-tailwind.vercel.app/"
    },
    {
      desc: "This is my first Cisco project, where I started learning basic networking and configuring simple network setups.",
      img: Cisco,
      link: ""
    },
    {
      desc: "Hijai is an Android app I built with App Inventor to help people learn tajwid easily—like a tajwid teacher in your pocket.",
      img: Hijai,
      link: ""
    },
    {
      desc: "This is a website I created for my school to record and track students who arrive late to the mosque, making the monitoring process simpler and more organized.",
      img: Telat,
      link: "https://catatan-telat.vercel.app/"
    },
    {
      desc: "This is a website I created for Eid Mubarak to share greetings, spread joy, and celebrate the special day in a simple and meaningful way.",
      img: Eid,
      link: "https://eidmubarak-tailwind.vercel.app/"
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-start p-6 sm:p-10">

      {/* Title */}
      <h2 className="text-white font-bold font-poppins text-5xl sm:text-6xl md:text-7xl mb-10">
        Latest Project
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">

        {cards.map((card, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${card.img})` }}
            className="relative w-full aspect-[16/10] rounded-2xl bg-cover bg-center overflow-hidden group cursor-pointer font-QuickSand"
          >

            {/* Hover View */}
            <div className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center px-6 text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
              
              <p className="text-sm leading-relaxed mb-4">
                {card.desc}
              </p>

              {card.link && (
                <button 
                  onClick={() => window.open(card.link, "_blank")}
                  className="border-2 border-lig font-QuickSand font-semibold dark:border-prim text-lig dark:text-prim px-6 py-2 rounded-lg transition-all hover:bg-lig hover:text-nig dark:hover:bg-prim dark:hover:text-black duration-300">
                  VISIT
                </button>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
