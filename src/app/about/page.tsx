"use client";
//@ts-ignore
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Hero from "@/components/about/Hero"
import Wcu from "@/components/about/Wcu"
import Team from "@/components/about/Team"
import Navigate from "@/components/about/Navigate"
export default function About(){
    useEffect(() => {
        AOS.init();
    }, []);
    return<>
    <Hero/>
    <Wcu/>
    <Team/>
    <Navigate/>
    </>
}