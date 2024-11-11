import Image from "next/image";
import benefit from '@/assets/benefits.png';

export default function Benefits() {
    return (
        <>
            <div className="p-4 sm:p-8 md:p-16">
                <Image src={benefit} alt="" className="w-full" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 my-8 md:my-12">
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-bold my-4">Minimum age requirement</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-bold my-4">English Proficiency</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-bold my-4">10+2 Physics/Maths</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 my-8 md:my-12">
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-bold my-4">Minimum age requirement</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-bold my-4">English Proficiency</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                    <div className="rounded-md border-2 shadow-md py-8 px-4 text-center md:text-left">
                        <h2 className="text-lg md:text-xl font-bold my-4">10+2 Physics/Maths</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
