import Twit from './assets/Tiwt.svg'
import Disc from './assets/Disc.svg'
import Insta from './assets/Insta.svg'
import Linked from './assets/Linked.svg'

export default function Footer() {
  return (
        <>
            <section id='Footer' className="h-[80vh] relative flex justify-center text-white  ">
                <hr className="border-t-2 border-white" />
                <div className="flex flex-row justify-center items-end pb-10 md:gap-[350px] gap-[30px]">
                
                    <div className='md:items-end items-center'>
                        <h1 className='text-7xl font-poppins font-extrabold'>Get In Touch</h1>
                        <div className='flex gap-6'>
                            <img src={Twit} alt="" />
                            <img src={Disc} alt="" />
                            <img src={Insta} alt="" />
                            <img src={Linked} alt="" />
                        </div>
                    </div>

                    <div className='items-end md:block hidden'>
                        <ul className="flex gap-4 text-lg ">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul> 
                    </div>

                </div>
            </section> 
        </>
    )
}