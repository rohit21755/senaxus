import { FaChartPie } from "react-icons/fa";
import about from '@/assets/about.png'
import Image from 'next/image'
import road from '@/assets/road.png'
import { RiFlashlightFill } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";
import Link from "next/link";
export default function Hero(){

    return <>
    <div className="md:p-16 p-6">
    <div
                style={{
                    backgroundImage: `url(${about.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="relative h-64 sm:h-80 md:h-96 lg:h-[50vh] flex flex-col justify-end text-white rounded-lg p-4 sm:p-8"
            >
                <p data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="500"

    data-aos-anchor-placement="top-center" className="text-xl sm:text-2xl md:text-3xl font-bold text-start mb-4 md:mb-8 ml-4 sm:ml-8">
                    About us
                </p>
            </div>
    <div className='flex justify-between p-8 my-8' data-aos="fade-out"

    // data-aos-delay="50"
    data-aos-duration="500"
  
    data-aos-anchor-placement="top-center">
        <h2 className='font-bold text-3xl'>Mission</h2>
        <Image src={road} alt='' height={50} width={50}/>

       
    </div>
    <div className='p-8'>
    <p className='' 

    // data-aos-delay="50"
   
   
    data-aos-anchor-placement="top-center">
        At FuturePilot.in, we are passionate about shaping the future of aviation by providing world-class flight training to aspiring pilots. Our mission is to offer comprehensive, professional, and safety-focused training programs designed to equip students with the knowledge, skills, and confidence needed to excel in the ever-evolving aviation industry.
        </p>
        <p className='my-6'

    // data-aos-delay="50"

   
    data-aos-anchor-placement="top-center">
        Whether you&apos;re a beginner looking to obtain your Private Pilot License (PPL) or an experienced aviator pursuing advanced certifications, we offer a range of tailored programs that meet your specific needs and career aspirations.
        </p>
        <p className='' 
    
    >We pride ourselves on maintaining the highest safety standards, adhering to both national and international aviation regulations.
        Join us at and embark on your journey toward a rewarding career in aviation. With us, you don&apos;t just learn to fly; you become part of a community that lives and breathes aviation.</p>
    </div>
    <div className="flex justify-center w-full" data-aos="fade-in"
  
    // data-aos-delay="50"
    data-aos-duration="300"
    
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
                    <Link href="/about" className="border-2 py-2 px-4 rounded-md hover:bg-black hover:text-white">
                        Our Vision
                    </Link>
                </div>
    <h1 className='text-2xl md:text-4xl font-bold mx-auto text-center mx-autot md:w-[70%] my-8'>To be a global leader in flight training, producing skilled and responsible aviators who contribute to the future of aviation.</h1>
    </div>
    <div className="flex flex-col md:flex-row md:justify-evenly gap-8 my-12 p-4 sm:p-8">
            {/* Safety First Card */}
            <div className="flex-1 max-w-xs rounded-md border-2 shadow-md py-8 sm:py-12 px-4 mx-auto md:mx-0" 
                data-aos="fade-left"

                data-aos-duration="700"
              >
                
                <div className='p-2 bg-[#CAE7F6] rounded-lg border-2 border-black w-fit'>
                    <FaChartPie size={25}/>
                </div>
                <h2 className="text-lg sm:text-xl font-bold my-4">Safety First</h2>
                <p className="text-sm sm:text-base font-thin">
                    Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.
                </p>
            </div>

            {/* Excellence and Professionalism Card */}
            <div className="flex-1 max-w-xs rounded-md border-2 shadow-md py-8 sm:py-12 px-4 mx-auto md:mx-0" 
                data-aos="fade-left"

                data-aos-duration="300"
              
                data-aos-anchor-placement="top-center">
                
                <div className='p-2 bg-[#CAE7F6] rounded-lg border-2 border-black w-fit'>
                    <RiFlashlightFill size={25}/>
                </div>
                <h2 className="text-lg sm:text-xl font-bold my-4">Excellence and Professionalism</h2>
                <p className="text-sm sm:text-base font-thin">
                    Presented by the National Association for the Education of Young Children (NAEYC) in recognition of our commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.
                </p>
            </div>

            {/* Flexible Program Card */}
            <div className="flex-1 max-w-xs rounded-md border-2 shadow-md py-8 sm:py-12 px-4 mx-auto md:mx-0" 
                data-aos="fade-left"

                data-aos-duration="300"

                data-aos-anchor-placement="top-center">
                
                <div className='p-2 bg-[#CAE7F6] rounded-lg border-2 border-black w-fit'>
                    <MdOutlineBarChart size={25}/>
                </div>
                <h2 className="text-lg sm:text-xl font-bold my-4">Flexible Program</h2>
                <p className="text-sm sm:text-base font-thin">
                    Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM programs that ignite creativity and critical thinking in young learners.
                </p>
            </div>
        </div>

   
    </>
}