import AllPage from './assets/AllPages.svg'
import Hijai from './assets/Hijai.svg'
import Eduverse from './assets/Eduverse.svg'
import Cisco from './assets/Cisco.svg'
import Coding from './assets/Coding.svg'


export default function Projects() {
           return (
        <>
            <section id='Project' className="h-[190vh]  relative flex justify-center items-center text-white">
                <div className="absolute right-9 top-1">
                     <h1 className="text-lig dark:text-primfont-QuickSand text-end mx-[48px] text-2xl">Why</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-[100vw] mb-[40px] font-poppins font-extrabold'>
                        <h1 className="md:text-7xl text-5xl text-start">    
                            Latest Project
                        </h1>
                    </div>

                    <div className='flex md:flex-row flex-col gap-10'>
                        <img src={Hijai} alt="" className='w-[130px] md:w-[230px] rounded-md' />
                        <img src={Cisco} alt=""  className='w-[150px] md:w-[317px] rounded-md'/>
                        <img src={Eduverse} alt="" className='w-[300px] md:w-[400px] rounded-md'/>
                    </div>

                    <div className='flex md:flex-row flex-col gap-[60px] mt-[20px]'>
                        <img src={Coding} alt="" className='w-[400px] rounded-md'/>
                        <img src={AllPage} alt="" className='w-[570px] rounded-md'/>
                    </div>

                </div>
            </section> 
        </>
    )
}