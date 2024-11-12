import Image from "next/image"
import dgca from '@/assets/dgca.webp'
import air from '@/assets/air.webp';
import order from '@/assets/order.webp'
import navigation from '@/assets/navigation.webp'
import rtr from '@/assets/rtr.webp'
import tg from '@/assets/tg.webp'
import plane from '@/assets/plain333.svg'
import { IoAirplaneOutline } from "react-icons/io5";
export default function DGCAClass() {
    return<>
    <div className="p-16">
    <div
                // style={{
                //     backgroundImage: `url(${plain.src})`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
                className="relative  sm:h-80 md:h-96 lg:h-[60vh] rounded-lg p-4 sm:p-8 border-2 shadow-lg "
            >
                <div className="flex">
                    <div className="pl-24 py-20">
                        
                        <h1 className="font-bold text-3xl  w-4/5 mt-4">DGCA Ground Classes For CPL Exams</h1>
                        <p className="text-start  text-2xl tracking-widest">DGCA Certified - Chief Ground Instructor</p>
                        <button className="bg-[#3F3D56] text-white border border-white 
                           px-4 md:px-6 py-2 md:py-2.5 rounded 
                           hover:bg-black 
                           transition duration-300 
                           text-sm md:text-base
                           md:mt-6 ">
            Course Syllabus
          </button>
          
                    </div>
                    <div className=" flex items-center">
                    <Image src={dgca} alt="" width={600} height={350}/>
                </div>
                </div>
                
            </div>
            <div className="text-center my-20">
                <h1 className="font-bold text-4xl my-8">DGCA Exam Subjects</h1>
                <div className="flex justify-evenly">
  <div className="flex-1 p-8 border-2 rounded-lg mx-2 shadow-lg">
    <Image src={air} alt="" className="mx-auto"/>
    <p className="mt-1 text-center">Air Meteorology</p>
  </div>
  <div className="flex-1 p-8 border-2 rounded-lg mx-2 shadow-lg">
    <Image src={order} alt="" className="mx-auto"/>
    <p className="mt-1 text-center">Air Regulation</p>
  </div>
  <div className="flex-1 p-8 border-2 rounded-lg mx-2 shadow-lg">
    <Image src={navigation} alt="" className="mx-auto"/>
    <p className="mt-1 text-center">Air Navigation</p>
  </div>
  <div className="flex-1 p-8 border-2 rounded-lg mx-2 shadow-lg">
    <Image src={rtr} alt="" className="mx-auto"/>
    <p className="mt-1 text-center">RTR</p>
  </div>
  <div className="flex-1 p-8 border-2 rounded-lg mx-2 shadow-lg">
    <Image src={tg} alt="" className="mx-auto"/>
    <p className="mt-1 text-center">Technical General</p>
  </div>
</div>

            </div>

            <div className="my-20 px-8">
                <h1 className="font-bold text-4xl my-8 text-center mt-12 mb-8">DGCA Exam Eligibility</h1>
                <div className="flex px-16">
                   
                    <div className="flex-1">
                        <p className="font-bold text-3xl mt-8">Flight Training in India</p>
                        <ul className="my-6 space-y-4">
                            <li className="flex gap-12">
                            <IoAirplaneOutline size={24}/>
                            <p className="text-xl">Navigation</p>
                            </li>
                            <li className="flex gap-12">
                            <IoAirplaneOutline size={24}/>
                            <p className="text-xl">Meterology</p>
                            </li>
                            <li className="flex gap-12">
                            <IoAirplaneOutline size={24}/>
                            <p className="text-xl">Air Regulations</p>
                            </li>
                            <li className="flex gap-12">
                            <IoAirplaneOutline size={24}/>
                            <p className="text-xl">Technical General</p>
                            </li>
                            <li className="flex gap-12">
                            <IoAirplaneOutline size={24}/>
                            <p className="text-xl">Technical Specific</p>
                            </li>
                            <li className="flex gap-12">
                            <IoAirplaneOutline size={24}/>
                            <p className="text-xl">RTR</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <Image src={plane} alt=""/>
                    </div>
                </div>
            </div>
    </div>
    </>
}