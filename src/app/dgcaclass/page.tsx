"use client"
import Image from "next/image";
import dgca from '@/assets/dgca.webp';
import air from '@/assets/air.webp';
import order from '@/assets/order.webp';
import navigation from '@/assets/navigation.webp';
import rtr from '@/assets/rtr.webp';
import tg from '@/assets/tg.webp';
import plane from '@/assets/plain333.svg';
import { IoAirplaneOutline } from "react-icons/io5";
import AOS from "aos";
import { useEffect, useState } from "react";
export default function DGCAClass() {
    useEffect(() => {
        AOS.init();
    }, []);
    const scrollToSection = (sectionId : string) => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
    const contentData: { [key: string]: string } = {
        "10th and 12th Board Verification Certificate": `The Board Verification Certificate is a certificate issued by your education board stating that the marks mentioned in your mark sheet are correct and not doctored in any manner. The verification certificate is crucial from applying for a Computer number to getting your Commercial Pilot's License. This process differs for different boards. For CBSE, it's hassle-free and readily available online. Please refer to your individual education board's website for details on how to apply for a Board Verification Certificate.`,
        "Class II Medicals": `A class 2 medical is the preliminary medical license required by aspiring pilots to get their PPL (Private Pilot's License) issued. This must be obtained before applying for a class 1 medical license. Candidates can select a DGCA empanelled, class 2 medical examiner from the DGCA website and schedule an appointment for tests such as a color-blindness test, BMI test, and general health checkup.`,
        "Class I Medical": `Class 1 medical is the final stage of pilot medicals in India. After clearing the class 2 medical and getting a PMR number, candidates can apply for a class 1 medical. This certificate is mandatory for the issuance of a CPL. Initial DGCA Class 1 medical exams are conducted at Air Force medical centers or specified hospitals.`,
        "Police Verification Certificate": `A Police Verification Certificate (PVC) is a character certificate from police authorities confirming no criminal records against you. It's needed at various stages, including visa applications and CPL issuance. Check your state's website for application details.`,
        "Computer Number": `A computer number is a unique ID required by DGCA for pilots, from exam applications to CPL issuance. To apply, submit relevant documents including a board verification certificate. The issuance process typically takes 1-2 months, so apply well in advance.`,
        "Ground Classes": `Before starting CPL training, a solid understanding of CPL subjects is essential. DGCA mandates candidates pass subject papers and have 200 flying hours before CPL issuance. Core subjects include Air Regulations, Aviation Meteorology, Technical General, Technical Specific, Air Navigation, and Radio Telephony (RTR).`,
        "Visa Medicals": `Certain countries require specific medical tests for visa applications, unrelated to DGCA's medicals. Check the visa-issuing country’s website for test and hospital requirements.`,
        "Visa Applications": `After visa medicals and document submissions, a student visa (if training abroad) is typically issued. Some countries offer online applications, while others may require an office visit.`,
        "SPL": `The Student Pilot's License (SPL) is a preliminary license obtained before PPL and CPL. SPL requirements include being at least 16 years old and having passed the 10th standard. SPL exams cover topics like Air Regulation and Aviation Meteorology.`,
        "FRTOL": `The Flight Radio Telephony Operator's License (FRTOL) enables radio equipment operation on Indian aircraft. The non-restricted FRTOL is required for CPL issuance, obtainable by passing the RTR exam by WPC, India.`,
        "CPL": `The Commercial Pilot License (CPL) includes theoretical and practical training, requiring 200 flight hours and passing core DGCA subjects for CPL issuance.`,
        "License Conversion Checks": `For foreign-trained pilots, license conversion to DGCA CPL includes additional tests and requirements such as cross-country flights and night flying logs.`,
        "License Conversion": `Once all prerequisites and tests are completed, a License Conversion Application can be submitted to DGCA. Upon satisfactory review, the CPL is issued within a month.`,
      };
    const [selectedSection, setSelectedSection] = useState("10th and 12th Board Verification Certificate");
    return (
        <>
            <div className="px-4 py-8 sm:px-8 lg:px-16">
                <div className="relative bg-cover bg-center rounded-lg p-4 sm:p-8 border-2 shadow-lg flex flex-col sm:flex-row items-center sm:h-80 md:h-96 lg:h-[60vh]">
                    <div className="text-center sm:text-left flex flex-col justify-center sm:pl-24 py-8">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl w-full sm:w-4/5 mt-4" data-aos="fade-up" data-aos-duration="2000">DGCA Ground Classes For CPL Exams</h1>
                        <p className="text-center sm:text-start text-lg md:text-2xl tracking-wide my-4" data-aos="fade-up" data-aos-duration="2000">DGCA Certified - Chief Ground Instructor</p>
                        <button data-aos="fade-up" data-aos-duration="2000" className="bg-[#3F3D56] mx-auto md:mx-0 w-1/2 text-white border border-white px-4 md:px-6 py-2 md:py-2.5 rounded hover:bg-black transition duration-300 text-sm md:text-base">
                            Course Syllabus
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-6 sm:mt-0" data-aos="fade-up" data-aos-duration="2000">
                        <Image src={dgca} alt="DGCA Ground Classes" width={600} height={350} />
                    </div>
                </div>

                <div className="text-center my-16">
                    <h1 className="font-bold text-3xl sm:text-4xl my-8">DGCA Exam Subjects</h1>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[{ img: air, title: "Air Meteorology" }, { img: order, title: "Air Regulation" }, { img: navigation, title: "Air Navigation" }, { img: rtr, title: "RTR" }, { img: tg, title: "Technical General" }]
                            .map(({ img, title }, index) => (
                                <div data-aos="fade-up" data-aos-duration="2000" key={index} className="w-full sm:w-1/2 md:w-1/5 p-8 border-2 rounded-lg mx-2 shadow-lg flex flex-col items-center">
                                    <Image src={img} alt={title} className="mx-auto" />
                                    <p className="mt-2 text-center text-lg font-semibold">{title}</p>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="my-16 px-4 sm:px-8 lg:px-16">
                    <h1 className="font-bold text-3xl sm:text-4xl text-center mt-12 mb-8">DGCA Exam Eligibility</h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-4 lg:px-16">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-up" data-aos-duration="2000">
                            <p className="font-bold text-2xl sm:text-3xl mt-8">Flight Training in India</p>
                            <ul className="my-6 space-y-4">
                                {["Navigation", "Meteorology", "Air Regulations", "Technical General", "Technical Specific", "RTR"].map((subject, index) => (
                                    <li key={index} className="flex items-center gap-4 sm:gap-8">
                                        <IoAirplaneOutline size={24} />
                                        <p className="text-lg sm:text-xl">{subject}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <Image src={plane} alt="Plane illustration" />
                        </div>
                    </div>
                </div>
                <h1 id="pilot" className="text-center text-3xl font-bold">Process to become a pilot</h1>
                <div className="flex flex-col md:flex-row gap-8 my-12">
          {/* Buttons Section */}
          <div className="w-full md:w-1/4 hidden md:block">
            <div className="flex flex-col gap-4">
              {Object.keys(contentData).map((title, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedSection(title);
                    scrollToSection(title); // Scroll to the content section
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold border-2 ${
                    selectedSection === title ? "bg-[#3F3D56]  text-white" : "bg-gray-200 text-gray-800"
                  } hover:bg-indigo-500 hover:text-white transition-colors`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display Section */}
          <div className="w-full md:w-3/4 border-2 rounded-lg p-6 shadow-lg bg-white">
            <div className="my-9">
              {Object.values(contentData).map((cont, index) => {
                const title = Object.keys(contentData).find((key) => contentData[key] === cont);
                return (
                  <div key={index} id={title} className="my-10">
                    <p className="text-2xl font-bold">{title}</p>
                    <p>{cont}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
            </div>
        </>
    );
}
