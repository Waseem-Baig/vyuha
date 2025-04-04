import React from 'react'
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Achievements from "../components/Achievements";
import Services from "@/components/Services";
import AnimatedTestimonials from "@/components/ui/AnimatedTestimonals";
import testimonialData from "@/data";
import CTA from "@/components/CTA";
import SocialMedia from "@/components/SocialMedia";
const Page = () => {
    return (
        <>
            <Hero/>
            <Vision/>
            <Achievements/>
            <Services/>
            <AnimatedTestimonials testimonials={testimonialData} autoplay={true} />
            <CTA/>
            <SocialMedia/>
        </>
    )
}
export default Page