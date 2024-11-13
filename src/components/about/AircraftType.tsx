import { SiBoeing } from "react-icons/si";
import { SiAirbus } from "react-icons/si";

export default function AircraftType() {
    return (
        <>
            <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="rounded-lg bg-[#CAE7F6] p-6 sm:p-8 md:p-10">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6">
                        Aircraft Type Rating
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-8">
                        <div className="bg-white py-4 px-6 md:py-5 md:px-8 rounded-lg flex items-center gap-4 md:gap-6 w-full md:w-auto">
                            <SiBoeing size={24} className="text-gray-800 md:size-[30px]" />
                            <p className="font-bold text-sm md:text-base lg:text-lg">Boeing 737 Type Rating</p>
                        </div>
                        <div className="bg-white py-4 px-6 md:py-5 md:px-8 rounded-lg flex items-center gap-4 md:gap-6 w-full md:w-auto">
                            <SiAirbus size={24} className="text-gray-800 md:size-[33px]" />
                            <p className="font-bold text-sm md:text-base lg:text-lg">Airbus A320 Type Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
