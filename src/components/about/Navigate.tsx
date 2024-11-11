import Image from "next/image"
import hi from '@/assets/h1.png'
import DashedLine from "../ui/DashedLine"
export default function Navigate() {
    return<>
    <div className="py-16 px-32 py-24 text-center">
    <h1 className="text-3xl font-bold">Navigate through our Courses</h1>
        <h5 className="text-lg w-3/5 mx-auto mt-6">Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</h5>
        
    </div>
    <div className="flex justify-center w-full">
        <button className="bg-[#3F3D56] text-white border border-white 
                           px-4 md:px-6 py-2 md:py-2.5 rounded 
                           hover:bg-black 
                           transition duration-300 
                           text-sm md:text-base
                           md:mt-6 ">
            Explore More
          </button>
                </div>

                <div className="py-16 flex justify-center gap-x-8 px-40">
    <div className="w-2/5 py-10 px-12 text-center border-2 shadow-lg rounded-md">
        <Image src={hi} alt="" className="w-full my-4" />
        <DashedLine />
        <h1 className="text-2xl font-bold my-6 text-start">DGCA CPL Ground Classes</h1>
        <p className="text-justify my-8">
            Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.
        </p>
        <button className="w-full text-center py-1 border-2 border-slate-400 rounded-md">
            Learn More
        </button>
    </div>

    <div className="w-2/5 py-10 px-12 text-center border-2 shadow-lg rounded-md">
        <Image src={hi} alt="" className="w-full my-4" />
        <DashedLine />
        <h1 className="text-2xl font-bold my-6 text-start">DGCA CPL Ground Classes</h1>
        <p className="text-justify my-8">
            Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.
        </p>
        <button className="w-full text-center py-1 border-2 border-slate-400 rounded-md">
            Learn More
        </button>
    </div>
</div>
    </>
}