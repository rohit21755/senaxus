import Image from "next/image";
import plain from '@/assets/plain.png'
import Requirements from "@/components/admission/Requirement";
import Medical from "@/components/admission/Medical";
export default function Admission() {
    return<>
    <div className="p-16">
    <div
                style={{
                    backgroundImage: `url(${plain.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="relative h-64 sm:h-80 md:h-96 lg:h-[50vh] rounded-lg p-4 sm:p-8 border-2 shadow-lg "
            >
                <div className="flex">
                    <div className="pl-24 py-20">
                        <h1 className="font-bold text-3xl  w-4/5 mt-4">REQUIREMENTS To become a Pilot</h1>
                        <button className="bg-[#3F3D56] text-white border border-white 
                           px-4 md:px-6 py-2 md:py-2.5 rounded 
                           hover:bg-black 
                           transition duration-300 
                           text-sm md:text-base
                           md:mt-6 ">
            Check Syllabus
          </button>
                    </div>
                    <div className="p-2 flex items-center">
                    <p className="text-start font-thin text-3xl tracking-widest">Steps to follow to become a commercial pilot</p>
                </div>
                </div>
                
            </div></div>
            <Requirements/>
            <Medical/>
    </>

}