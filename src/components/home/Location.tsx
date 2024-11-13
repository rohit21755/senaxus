"use client";
import Image from "next/image"
import spain from '@/assets/spain.png'
import us from '@/assets/united-states.png'
import srilanka from '@/assets/srilanka.png'
import aus from '@/assets/australia.png'
import canda from '@/assets/canada.png'
import world from '@/assets/world.png'
import hg from '@/assets/hhfhfhfh.webp'
import planwm from '@/assets/planwm.png'
import { useEffect } from "react"
import AOS from "aos";
import 'aos/dist/aos.css'
export default function Location(){
    useEffect(() => {
        AOS.init();
    }, []);
    return<>
    <div className="px-12 py-24 text-center" style={{
                    backgroundImage: `url(${planwm.src})`,
                    backgroundSize: '36%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
        <h1 className="text-3xl font-bold"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="000">Flight School Locations</h1>
        <h5 className="text-lg md:w-1/2 mx-auto mt-6" data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="000">With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child&apos;s future.</h5>
        <button data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="000" className="bg-[#3F3D56] text-white border border-white 
                           px-4 md:px-6 py-2 md:py-2.5 rounded 
                           hover:bg-black 
                           transition duration-300 
                           text-sm md:text-base
                           mt-4 md:mt-6 lg:mt-8">
            Learn More
          </button>
    </div>
    <div  className="md:p-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-12">
    <div>
        <Image src={spain} alt="" height={100} width={100} className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000" />
        <p className="text-center text-2xl">Spain</p>
    </div>
    <div>
        <Image src={us} alt="" height={100} width={100}  className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000"/>
        <p className="text-center text-2xl">United States</p>
    </div>
    <div>
        <Image src={srilanka} alt="" height={100} width={100} className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000"/>
        <p className="text-center text-2xl">Sri Lanka</p>
    </div>
    <div>
        <Image src={aus} alt="" height={100} width={100} className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000"/>
        <p className="text-center text-2xl">New Zealand</p>
    </div>
    <div>
        <Image src={canda} alt="" height={100} width={100} className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000"/>
        <p className="text-center text-2xl">Canada</p>
    </div>
</div>

    <div className="content-center">
        <Image src={world} alt="" width={1200} height={1200} className="mx-auto" data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-delay="000"/>
    </div>

    <div className="px-6 sm:px-12 md:px-24 py-6">
    <div className="my-8 px-4 md:px-12">
    <div className="rounded-xl border-2 border-gray-700 flex flex-col md:flex-row gap-6 md:gap-10">
        
     
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center md:text-left w-full">
                <p className="text-2xl md:text-3xl font-bold my-4 md:pl-8 md:w-4/5">
                    DGCA Ground Classes For CPL Exams
                </p>
                <p className="text-lg md:text-xl md:pl-8">
                    DGCA Certified - Chief Ground Instructor
                </p>
                <div className="w-full h-fit md:pl-8">
                <button 
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="000" 
                    className="bg-[#3F3D56] text-white border border-white 
                               px-4 md:px-6 py-2 md:py-2.5 rounded 
                               hover:bg-black 
                               transition duration-300 
                               text-sm md:text-base
                               mt-4 md:mt-6 lg:mt-8 mx-auto md:mx-0">
                    Learn More
                </button>
                </div>
                
            </div>
        </div>
        
   
        <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full ">
                <Image src={hg} alt="" className="rounded-b-xl w-full md:rounded-r-xl md:rounded-bl-none" />
            </div>
        </div>

    </div>
</div>

</div>

   
    </>
}