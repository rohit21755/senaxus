import { TbRating18Plus } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import planwm from '@/assets/planwm.png'
export default function Requirements() {
    return (
        <>
            <div className="my-8 p-4 sm:p-8 md:p-16">
                <div className="text-center w-full" style={{
                    backgroundImage: `url(${planwm.src})`,
                    backgroundSize: '40%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold" data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">Requirements to become a pilot</h1>
                    <p className="text-center w-full sm:w-[80%] md:w-[70%] mx-auto mt-4 sm:mt-6 md:mt-8" data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">
                        With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child&apos;s future.
                    </p>
                    <button data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000" className="bg-[#3F3D56] text-white border border-white 
                                      px-4 md:px-6 py-2 md:py-2.5 rounded 
                                      hover:bg-black transition duration-300 
                                      text-sm md:text-base mt-4 sm:mt-6 md:mt-8">
                        Learn More
                    </button>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-8 md:gap-20 my-8 md:my-12">
                    <div className="rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="000">
                            <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2"><TbRating18Plus size={30}/></div>
                        <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1" >Minimum age requirement</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>

                    <div className="rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="000">
                    <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2"><RiEnglishInput size={28}/></div>
                        <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1" >English Proficiency</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>

                    <div className="rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="000">
                    <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2">
                    <LuGraduationCap size={30}/></div>
                        <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1">10+2 Physics/Maths</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
