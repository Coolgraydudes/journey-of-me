
import Tangga from './assets/Tangga.svg'


export default function Contact() {
  return (
    <div className="w-full py-20 px-6 flex justify-center">

      {/* WRAPPER BESAR */}
      <div className="relative dark:bg-nig bg-white shadow-2xl rounded-3xl overflow-visible flex flex-col md:flex-row max-w-5xl w-full font-QuickSand">

        {/* KOTAK INFO — KELUAR DARI DIV */}
        <div className="absolute -top-8 -left-8 dark:bg-sig bg-white shadow-xl p-6 rounded-2xl w-64 z-20">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Info</h3>

          <div className="flex items-start gap-3 mb-4">
            <div className="text-blue-600">📍</div>
            <div>
              <p className="font-medium dark:text-white">Location!</p>
              <p className="text-gray-500 dark:text-white text-sm">123 Main Street</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="text-blue-600">📞</div>
            <div>
              <p className="font-medium dark:text-white">Phone</p>
              <p className="text-gray-500 text-sm dark:text-white">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-blue-600">⏰</div>
            <div>
              <p className="font-medium dark:text-white">Hours</p>
              <p className="text-gray-500 text-sm dark:text-white">Mon–Fri, 09:00–18:00</p>
            </div>
          </div>
        </div>

        {/* GAMBAR — TIDAK DIBERI ROUNDED */}
        <div className="md:w-1/2 w-full h-80 md:h-auto">
          <img
            src={Tangga}
            alt="contact"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>

        {/* FORM — INPUT TIDAK DIBERI ROUNDED */}
        <div className="md:w-1/2 w-full p-10">
          <h2 className=" dark:text-prim text-2xl font-bold mb-6">Contact Form</h2>

          <form className="flex flex-col gap-6">

            <div className="flex flex-col">
              <label className=" dark:text-prim text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className="border dark:bg-sig dark:border-sig border-gray-400 dark:text-white  px-4 py-2 outline-none focus:ring-2 dark:focus:ring-blue-400 focus:ring-lig rounded-lg" 
              />
            </div>

            <div className="flex flex-col">
              <label className=" dark:text-prim text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className="border dark:bg-sig dark:border-sig dark:text-white border-gray-400 px-4 py-2 outline-none focus:ring-2 dark:focus:ring-blue-400 focus:ring-lig rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="dark:text-prim text-sm font-semibold mb-1">Message</label>
              <textarea
                className="border dark:bg-sig dark:border-sig dark:text-white border-gray-400  px-4 py-2 h-28 outline-none focus:ring-2 dark:focus:ring-blue-400 focus:ring-lig rounded-lg resize-none rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white py-3 font-semibold hover:bg-blue-800 transition rounded-lg"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
