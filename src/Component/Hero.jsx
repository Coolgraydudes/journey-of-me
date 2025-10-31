import { useEffect, useState } from 'react'
import Raining from './assets/Raining_converted.webm'

export default function Hero() {

    const [showThis, setShowThis] = useState(false) 
    const [showIs, setShowIs] = useState(false) 
    const [showMy, setShowMy] = useState(false) 
    const [showJourney, setShowJourney] = useState(false) 

    useEffect(() => {
        setTimeout(() => setShowThis(true),500)
        setTimeout(() => setShowIs(true),1000)
        setTimeout(() => setShowMy(true),1500)
        setTimeout(() => setShowJourney(true),2000)
    })

    return (
        <>
            <section id='Home' className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={Raining} type="video/mp4" />  
            </video>

            {/* Overlay (opsional buat efek gelap/transparan) */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Konten di atas video */}
            <div className="relative z-10 text-prim">
                <div className='flex flex-row gap-2 text-center font-BlackPool text-8xl -mb-[40px] -ml-[40px] '>
                    <h1 className={`${showThis ? "opacity-100" : "opacity-0"}`}>This</h1>
                    <h1 className={`${showIs ? "opacity-100" : "opacity-0"}`}>is</h1>
                </div>
                <div className='flex flex-row gap-2 text-center font-Poppins text-8xl font-extrabold'>
                    <h1 className={`${showMy ? "opacity-100" : "opacity-0"}`}>My</h1>
                    <h1 className={`${showJourney ? "opacity-100" : "opacity-0"}`}>Journey</h1>
                </div>
            </div>
            </section>
        </>
    )


}


