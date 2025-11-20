
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
            <div className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg></div>
            <div>
              <p className="font-medium dark:text-white">Location!</p>
              <p className="text-gray-500 dark:text-white text-sm">123 Main Street</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" /></svg></div>
            <div>
              <p className="font-medium dark:text-white">Phone</p>
              <p className="text-gray-500 text-sm dark:text-white">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg></div>
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
                className="border dark:bg-sig dark:border-sig dark:text-white border-gray-400  px-4 py-2 h-28 outline-none focus:ring-2 dark:focus:ring-blue-400 focus:ring-lig rounded-lg resize-none"
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
