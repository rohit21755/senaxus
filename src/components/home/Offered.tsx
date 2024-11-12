import Boxes from "../ui/Boxes"
import DashedLine from "../ui/DashedLine"
import Image from "next/image"
import h2 from "@/assets/h2.png"
export default function Offered(){

    return <>
        <div className="flex p-16">
            <div className="w-1/5 ">
            <Boxes data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"/>
            </div>
            <div className="w-3/5 text-center">
            <h2 className="text-6xl font-bold" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">Aviation Course Offered</h2>
            <button className="bg-[#3F3D56] text-white border border-white 
                           px-4 md:px-6 py-2 md:py-2.5 rounded 
                           hover:bg-black 
                           transition duration-300 
                           text-sm md:text-base
                           mt-4 md:mt-6 lg:mt-8">
            Learn More
          </button>
            </div>
            <div className="w-1/5"></div>
        </div>
        <div className="flex md:flex-row flex-col  justify-between p-16">
    <div className="md:pl-24">
        <h1 className="text-4xl font-bold my-4 w-4/5" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">DGCA CPL Ground Classes</h1>
        <DashedLine/>
        <ul className="space-y-4 text-2xl" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
            <li className="flex items-start space-x-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">CPL in 8 to 10 months</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">Glass Cockpit Aircrafts &</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">Experienced Instructors</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">Experienced Visa team with 97% success</span>
            </li>
            <li className="flex items-start space-x-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">Airline Job Assistance</span>
            </li>
        </ul>
        <button className="w-full text-center p-2 border-2 border-black rounded-md mt-4" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">Learn More</button>
    </div>
    <div>
        <Image src={h2} alt="" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"/>
    </div>
</div>

        <div className="flex md:flex-row flex-col gap-10  justify-between p-16">
        <div className="">
                <Image src={h2} alt="" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"/>
            </div>
            <div className="md:pr-24 xl:pr-32">
                <h1 className="text-4xl font-bold my-4 w-4/5" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">DGCA CPL Ground Classes</h1>
                <DashedLine/>
            <ul className="space-y-4 text-2xl" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">CPL in 8 to 10 months</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Glass Cockpit Aircrafts &</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Experienced Instructors</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Experienced Visa team with 97% success</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Airline Job Assistance</span>
            </li>
          </ul>
          <button className="w-full text-centet p-2 border-2 border-black rounded-md mt-4" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">Learn More</button>
            </div>
            
        </div>
        <div className="flex md:flex-row flex-col gap-10  justify-between p-16">
            <div className="md:pl-24">
                <h1 className="text-4xl font-bold my-4 w-4/5" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">DGCA CPL Ground Classes</h1>
                <DashedLine/>
            <ul className="space-y-4 text-2xl" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">CPL in 8 to 10 months</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Glass Cockpit Aircrafts &</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Experienced Instructors</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Experienced Visa team with 97% success</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-700">•</span>
              <span className="text-gray-700">Airline Job Assistance</span>
            </li>
          </ul>
          <button className="w-full text-centet p-2 border-2 border-black rounded-md mt-4">Learn More</button>
            </div>
            <div className="">
                <Image src={h2} alt="" data-aos="fade-up"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"/>
            </div>
        </div>
        
    </>
}