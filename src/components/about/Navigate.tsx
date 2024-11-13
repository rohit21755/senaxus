import Image from "next/image";
import hi from '@/assets/h1.png';

export default function Navigate() {
    return (
        <>
            <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-32 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold">Navigate through our Courses</h1>
                <h5 className="text-base sm:text-lg w-full sm:w-4/5 md:w-3/5 mx-auto mt-4 sm:mt-6">
                    Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school.
                </h5>
            </div>

            <div className="flex justify-center w-full mb-8" data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center">
                <button className="bg-[#3F3D56] text-white border border-white 
                                   px-4 sm:px-6 py-2 sm:py-2.5 rounded 
                                   hover:bg-black 
                                   transition duration-300 
                                   text-sm md:text-base mt-4 sm:mt-6">
                    Explore More
                </button>
            </div>

            <div className="py-8 sm:py-16 flex flex-col lg:flex-row justify-center gap-8 px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="w-full lg:w-2/5 py-8 px-6 sm:px-8 text-center border-2 shadow-lg rounded-md" data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <Image src={hi} alt="" className="w-full my-4" />
                    {/* <DashedLine /> */}
                    <h1 className="text-xl sm:text-2xl font-bold my-4 sm:my-6 text-start">DGCA CPL Ground Classes</h1>
                    <p className="text-justify text-sm sm:text-base my-4 sm:my-8">
                        Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.
                    </p>
                    <button className="w-full text-center py-2 border-2 border-slate-400 rounded-md text-sm sm:text-base">
                        Learn More
                    </button>
                </div>

                <div className="w-full lg:w-2/5 py-8 px-6 sm:px-8 text-center border-2 shadow-lg rounded-md" data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <Image src={hi} alt="" className="w-full my-4" />
                    {/* <DashedLine /> */}
                    <h1 className="text-xl sm:text-2xl font-bold my-4 sm:my-6 text-start">DGCA CPL Ground Classes</h1>
                    <p className="text-justify text-sm sm:text-base my-4 sm:my-8">
                        Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.
                    </p>
                    <button className="w-full text-center py-2 border-2 border-slate-400 rounded-md text-sm sm:text-base">
                        Learn More
                    </button>
                </div>
            </div>
        </>
    );
}
