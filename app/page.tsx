"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Achievements from "../components/Achievements";
import Services from "@/components/Services";
import AnimatedTestimonials from "@/components/ui/AnimatedTestimonals";
import testimonialData from "@/data";
import CTA from "@/components/CTA";
import SocialMedia from "@/components/SocialMedia";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <>
      <Hero />
      <section className="text-center py-12 bg-black text-white ">
        <h1 className="text-4xl font-bold mb-4">
          WE CONQUER THE KNOWN AND FORGE THE UNKNOWN
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          VYUHA guides you to break free from conditioning, cultivate
          self-awareness, and achieve lasting transformation.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all"
          onClick={() => (window.location.href = "/quiz")}
        >
          Begin Your Journey
        </button>
      </section>
      <Vision />
      <Achievements />
      <Services />
      <AnimatedTestimonials testimonials={testimonialData} autoplay={true} />
      <CTA />
      <SocialMedia />
    </>
  );
};

export default Page;
