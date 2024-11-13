import Image from "next/image";
// import benefit from '@/assets/benefits.png';
import cpl from '@/assets/cpl.svg'
import afford from '@/assets/aff-course-fees.svg'
import co from '@/assets/1.svg'
import loan from '@/assets/edu-loan.svg'
import vise from '@/assets/visa-team.svg'
import job from '@/assets/airline-job-assist.svg'

export default function Benefits() {
    return (
        <>
            <div className="p-4 sm:p-8 md:p-16">
              <div className="flex">
                <div className="w-2/5 py-12 pr-2 pl-6">
                <h1 className="text-5xl font-bold w-10/12 mt-10"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="000">Benefits of training with ThePilot</h1>
                </div>
                <div className="w-3/5">
                    <div className="grid grid-cols-2 gap-8 ml-4">
                        <div className="flex rounded-xl p-2 border-2">
                            <div className="w-2s/5 bg-[#E3F5FF] py-3 px-4 rounded-xl w-fit">
                            <Image src={cpl} alt=""/>
                            </div>
                            <div className="p-4">
                                <p className="text-md">CPL in 8 to 10 months</p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2">
                            <div className="w-2/5 bg-[#E3F5FF] py-3 px-4 rounded-xl w-fit">
                            <Image src={afford} alt=""/>
                            </div>
                            <div className="p-4">
                                <p className="text-md">Affordable course
                                fees</p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2">
                            <div className="w-2/5 bg-[#E3F5FF] py-3 px-4 rounded-xl w-fit">
                            <Image src={co} alt=""/>
                            </div>
                            <div className="p-4">
                                <p className="text-md">Glass Cockpit Aircraft </p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2">
                            <div className="w-2/5 bg-[#E3F5FF] py-3 px-4 rounded-xl w-fit">
                            <Image src={loan} alt=""/>
                            </div>
                            <div className="p-4">
                                <p className="text-md">Easy Education loan
                                COMMAND (PIC) </p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2">
                            <div className="w-2/5 bg-[#E3F5FF] py-3 px-4 rounded-xl w-fit">
                            <Image src={vise} alt=""/>
                            </div>
                            <div className="p-4">
                                <p className="text-md">Experienced Visa team</p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2">
                            <div className="w-2/5 bg-[#E3F5FF] py-3 px-4 rounded-xl w-fit">
                            <Image src={job} alt=""/>
                            </div>
                            <div className="p-4">
                                <p className="text-md">Airline Job Assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                
                

            </div>
        </>
    );
}
