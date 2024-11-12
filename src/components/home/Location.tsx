"use client";
import Image from "next/image"
import spain from '@/assets/spain.png'
import us from '@/assets/united-states.png'
import srilanka from '@/assets/srilanka.png'
import aus from '@/assets/australia.png'
import canda from '@/assets/canada.png'
import world from '@/assets/world.png'
import h1 from '@/assets/h1.png'
import planwm from '@/assets/planwm.png'
import { useEffect } from "react"
//@ts-ignore
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
        <h5 className="text-lg w-1/2 mx-auto mt-6" data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="000">With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</h5>
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
    <div  className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
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
    <div
        style={{
            backgroundImage: `url(${h1.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '70vh',
            color: 'white',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px'
        }}
    >
        <div className="w-full md:w-2/5 bg-black bg-opacity-50 rounded-l-none md:rounded-l-[20px] p-6 sm:p-12 md:p-24 h-full flex flex-col justify-center">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">Get ready for your first take off</h1>
            <p data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" className="font-semibold text-base sm:text-lg md:text-xl mt-4 sm:mt-8 md:mt-12 w-full sm:w-10/12 text-justify">
                We prepare the next generation of pilots with world-class training, hands-on experience, and cutting-edge technology. Whether you're dreaming of a career in aviation or upgrading your skills, we’re here to help you soar.
            </p>
            <button data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" className="bg-transparent text-white border border-white 
                               px-4 md:px-6 py-2 md:py-2.5 rounded 
                               hover:bg-white hover:text-black 
                               transition duration-300 
                               text-sm md:text-base
                               mt-6 sm:mt-6 md:mt-4">
                Know More
            </button>
        </div>
    </div>
</div>

   
    </>
}