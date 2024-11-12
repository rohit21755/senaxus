import { SiBoeing } from "react-icons/si";
import { SiAirbus } from "react-icons/si";
export default function AircraftType() {
    return <>
        <div className="py-16 px-32 ">
            <div className="rounded-lg bg-[#CAE7F6] p-10">
                <h1 className="font-bold text-4xl text-center mb-4">Aircraft Type rating</h1>
                <div className="flex justify-evenly">
                    <div className="bg-white py-5 px-8 rounded-lg flex gap-12">
                    <SiBoeing size={30}/>
                    <p className="font-bold">Boeing 737 Type Rating</p>
                    </div>
                    <div className="bg-white py-5 px-8 rounded-lg flex gap-12">
                    <SiAirbus  size={33}/>
                    <p className="font-bold">Airbus A320 Type Rating</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}