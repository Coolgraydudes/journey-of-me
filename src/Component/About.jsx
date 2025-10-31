import imgDummy from "./assets/Dummy-f.png"



export default function About() {
    return (
        <>
            <section className="h-[100vh] relative flex justify-center items-center text-white">
                <div className="absolute right-9 top-10">
                     <h1 className="text-prim font-QuickSand text-end mx-[48px] text-2xl">About Me</h1>
                </div>
                <div className="flex flex-row justify-center items-center gap-[200px]">
                    
                    <div className="" >
                        <h1 className="text-9xl font-poppins font-extrabold">Izzam</h1>
                        <h1 className="text-9xl font-Poppins font-extrabold">Nuddin</h1>
                        <h1 className="font-QuickSand text-2xl">Ui/UX Designer, Web Developer (Aamin) </h1>
                    </div>
                    <div className="text-white">
                        <p className="w-[350px] text-2xl mb-5">My expertise lies in crafting
                            responsive designs that not only
                            look great but also provide a
                            seamless experience across all
                            devices
                        </p>
                        <p className="w-[350px] text-[20px]">I specialize in developing
                            websites that are not only visually
                            appealing but also <span className="text-prim font-semibold">optimized for
                            performance and accessibility </span>
                        </p>
                    </div>
                </div>
            </section> 
        </>
    )
}   