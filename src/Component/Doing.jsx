import Pen from './assets/pen.svg'
import Phone from './assets/phone.svg'
import Monitor from './assets/monitor.svg'
import Search from './assets/search.svg'




export default function Doing() {
      return (
        <>
            <section className="relative h-[150vh] flex flex-col justify-center items-center overflow-hidden">
                <div className='flex md:flex-row flex-col-reverse justify-center items-center gap-12'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>

                        {/* card 1 */}
                        <div className=" text-white border-2 border-white rounded-lg p-5 w-[300px]">
                            <div className='flex flex-row items-center gap-2 mb-3'>
                                <img src={Pen} alt="" className='rounded-lg'/>
                                <h1 className='text-lg font-QuickSand font-bold'>Custom Web Design</h1>
                            </div>

                            <h1 className='text-lg w-[250px] text-start font-QuickSand'>
                                Design unique, tailored websites
                                to fit your brand and business
                                needs
                            </h1>
                        </div>
                        
                        {/* Card 2 */}
                        <div className=" text-white border-2 border-white rounded-lg p-5 w-[300px]">
                            <div className='flex flex-row items-center gap-2 mb-3'>
                                <img src={Phone} alt="" className='rounded-lg'/>
                                <h1 className='text-lg font-QuickSand font-bold'>Mobile Web Design</h1>
                            </div>

                            <h1 className='text-lg w-[250px] text-start font-QuickSand'>
                                Design custom websites
                                optimized for a seamless mobile
                                experience
                            </h1>
                        </div>
                        
                        {/* Card 3 */}
                        <div className=" text-white border-2 border-white rounded-lg p-5 w-[300px]">
                            <div className='flex flex-row items-center gap-2 mb-3'>
                                <img src={Monitor} alt="" className='rounded-lg'/>
                                <h1 className='text-lg font-QuickSand font-bold'>Website Redesign</h1>
                            </div>

                            <h1 className='text-lg w-[250px] text-start font-QuickSand'>
                                Redesign your site to improve its
                                functionality, aesthetics, and
                                performance
                                                            </h1>
                        </div>

                        {/* Card 4 */}
                        <div className=" text-white border-2 border-white rounded-lg p-5 w-[300px]">
                            <div className='flex flex-row items-center gap-2 mb-3'>
                                <img src={Search} alt="" className='rounded-lg'/>
                                <h1 className='text-lg font-QuickSand font-bold'>UX Research</h1>
                            </div>

                            <h1 className='text-lg w-[250px] text-start font-QuickSand'>
                                Analyze user behavior to
                                enhance website design and
                                usability
                            </h1>
                        </div>

                    </div>


                    <div className='text-white text-start'>
                        <h1 className='text-8xl md:text-9xl font-poppins font-extrabold'>What</h1>
                        <h1 className='text-8xl md:text-9xl font-poppins font-extrabold'>Can I</h1>
                        <h1 className='text-8xl md:text-9xl font-poppins font-extrabold'>Do <span className='text-lg font-normal font-QuickSand -ml-10'>(Aamin)</span></h1>
                    </div>

                </div>
            </section>
        </>
      )
}