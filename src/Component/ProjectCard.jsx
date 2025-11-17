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
      desc: "All-Page offers quality books at affordable prices.",
      img: AllPage
    },
    {
      desc: "Eduverse is an online learning platform that provides accessible, high-quality educational resources for learners of all levels.",
      img: Eduverse
    },
    {
      desc: "My first Tailwind slicing project, it's pretty good",
      img: Slicing
    },
    {
      desc: "My first Cisco project, where I began exploring networking concepts and hands-on configurations.",
      img: Cisco
    },
    {
      desc: "Hijai is a learning app focused on helping users master tajwid through simple, guided lessons—truly a ‘tajwid teacher in your pocket.’",
      img: Hijai
    },
    {
      desc: "This is a project I made to record the names of people who are late going to the mosque for my school",
      img: Telat
    },
    {
      desc: "A celebratory Eid Mubarak website created to share greetings, spread joy, and bring people together through messages of peace and blessings.",
      img: Eid
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center p-10">

      {/* Title */}
      <h2 className="text-white text-7xl font-bold mb-10 font-poppins w-[87%] text-start">
        Latest Project
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {cards.map((card, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${card.img})` }}
            className="relative w-[320px] h-[200px] rounded-2xl bg-cover bg-center overflow-hidden group cursor-pointer font-QuickSand"
          >

            {/* Hover View Only */}
            <div className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center px-6 text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
              
              <p className="text-sm leading-relaxed mb-4">
                {card.desc}
              </p>

              <button className="px-5 py-2 bg-yellow-400 rounded-lg text-black font-poppins font-semibold shadow-md hover:bg-yellow-300 transition-all">
                VISIT
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
