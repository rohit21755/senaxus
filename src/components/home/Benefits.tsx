import Image from "next/image";
import benefit from '@/assets/benefits.png';
import { BsFlagFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiBasicattentiontoken } from "react-icons/si";
export default function Benefits() {
    return (
        <>
            <div className="p-4 sm:p-8 md:p-16">
                <Image src={benefit} alt="" className="w-full" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 my-8 md:my-12">
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="000">
                    <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 border-slate-400">
<BsFlagFill size={25}/>
                    </div>
                        <h2 className="text-lg md:text-xl font-bold my-4">Play-Based Learning</h2>
                        <p className="font-thin">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="000">
                    <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 border-slate-400">
                    <SiBasicattentiontoken size={30}/>
                    </div>
                        <h2 className="text-lg md:text-xl font-bold my-4">Individualized Attention</h2>
                        <p className="font-thin">Our small class sizes enable personalized attention, catering to each child&apos;s unique needs.</p>
                    </div>
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="000">
                    <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 border-slate-400">
                    <BsFillPeopleFill size={30}/>
                    </div>
                        <h2 className="text-lg md:text-xl font-bold my-4">Parent Involvement</h2>
                        <p className="font-thin">We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
                    </div>
                </div>

            </div>
        </>
    );
}
