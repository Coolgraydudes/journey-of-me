import fr from './assets/fr.jpg'



export default function Contact() {
  return (
    <div className="w-full py-20 px-6 flex justify-center">

      {/* WRAPPER BESAR */}
      <div className="relative bg-white shadow-2xl rounded-3xl overflow-visible flex flex-col md:flex-row max-w-5xl w-full">

        {/* KOTAK INFO — KELUAR DARI DIV */}
        <div className="absolute -top-8 -left-8 bg-white shadow-xl p-6 rounded-2xl w-64 z-20">
          <h3 className="text-lg font-semibold mb-4">Info</h3>

          <div className="flex items-start gap-3 mb-4">
            <div className="text-blue-600">📍</div>
            <div>
              <p className="font-medium">Location!</p>
              <p className="text-gray-500 text-sm">123 Main Street</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="text-blue-600">📞</div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-500 text-sm">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-blue-600">⏰</div>
            <div>
              <p className="font-medium">Hours</p>
              <p className="text-gray-500 text-sm">Mon–Fri, 09:00–18:00</p>
            </div>
          </div>
        </div>

        {/* GAMBAR — TIDAK DIBERI ROUNDED */}
        <div className="md:w-1/2 w-full h-80 md:h-auto">
          <img
            src={fr}
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FORM — INPUT TIDAK DIBERI ROUNDED */}
        <div className="md:w-1/2 w-full p-10">
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>

          <form className="flex flex-col gap-6">

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Message</label>
              <textarea
                className="border border-gray-300 px-4 py-2 h-28 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white py-3 font-semibold hover:bg-blue-800 transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
