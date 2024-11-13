import Image from "next/image";
import cpl from '@/assets/cpl.svg';
import afford from '@/assets/aff-course-fees.svg';
import co from '@/assets/1.svg';
import loan from '@/assets/edu-loan.svg';
import vise from '@/assets/visa-team.svg';
import job from '@/assets/airline-job-assist.svg';

export default function Benefits() {
    return (
        <div className="p-4 sm:p-8 md:p-16">
            <div className="flex flex-col md:flex-row">
                {/* Heading Section */}
                <div className="md:w-2/5 py-8 pr-2 md:pl-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 md:mt-10"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-delay="000">
                        Benefits of training with ThePilot
                    </h1>
                </div>

                {/* Benefits Grid Section */}
                <div className="md:w-3/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-0">
                        
                        {/* Each Benefit Card */}
                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3 bg-[#E3F5FF] py-3 px-4 rounded-xl">
                                <Image src={cpl} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">CPL in 8 to 10 months</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3 bg-[#E3F5FF] py-3 px-4 rounded-xl">
                                <Image src={afford} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">Affordable course fees</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3 bg-[#E3F5FF] py-3 px-4 rounded-xl">
                                <Image src={co} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">Glass Cockpit Aircraft</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3 bg-[#E3F5FF] py-3 px-4 rounded-xl">
                                <Image src={loan} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">Easy Education loan</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3 bg-[#E3F5FF] py-3 px-4 rounded-xl">
                                <Image src={vise} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">Experienced Visa team</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3 bg-[#E3F5FF] py-3 px-4 rounded-xl">
                                <Image src={job} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">Airline Job Assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
