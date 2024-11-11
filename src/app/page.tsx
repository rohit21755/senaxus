import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import Location from "@/components/home/Location";
import Offered from "@/components/home/Offered";
import Requirements from "@/components/home/Requiements";
import Benefits from "@/components/home/Benefits";
import FAQAccordion from "@/components/home/Faq";
import TestimonialSlider from "@/components/home/TestimonialSlider";
export default function Home() {
  return (
   <>
   <HeroSection/>
   <Location/>
   <Offered/>
   <Requirements/>
   <Benefits/>
   <FAQAccordion/>
   <TestimonialSlider/>
   </>
  );
}
