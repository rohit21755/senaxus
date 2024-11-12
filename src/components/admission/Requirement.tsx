// import { FaGraduationCap } from "react-icons/fa6";
import { TbRating18Plus } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
export default function Requirements(){
    return<>
    <div className="my-12 p-16">
        <div className="text-center">
        
        <div className="flex justify-evenly gap-20 my-12">
            <div className="rounded-md border-2 shadow-md py-12 px-4">
            <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 mx-auto"><TbRating18Plus size={30}/></div>
                <h2 className="text-xl font-bold my-4">Minimum age requirement</h2>
                <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.
                </p>
            </div>
            <div className="rounded-md border-2 shadow-md py-12 px-4">
            <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 mx-auto"><RiEnglishInput size={28}/></div>
                <h2 className="text-xl font-bold my-4">English Prfciency</h2>
                <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.
                </p>
            </div>
            <div className="rounded-md border-2 shadow-md py-12 px-4">
            <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 mx-auto">
            <LuGraduationCap size={30}/></div>
                <h2 className="text-xl font-bold my-4">10+2 Physics/ maths</h2>
                <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.
                </p>
            </div>
        </div>
    </div>
    </div>
    </>
}
