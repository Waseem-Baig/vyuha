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

  // Show the popup automatically after a delay (e.g., 5 seconds)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleJoin = () => {
    setHasJoined(true); // Mark the user as joined
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <Hero />
      <section className="text-center py-12 bg-black text-white">
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

      {/* Show the "Join Community" button only if the user hasn't joined */}
      {!hasJoined && (
        <div className="fixed bottom-4 right-4 z-20">
          <button
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all"
            onClick={() => setShowPopup(true)} // Open the popup on button click
          >
            Join the Community
          </button>
        </div>
      )}

      {/* Lead Capture Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Join the VYUHA Community
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Receive exclusive resources for your journey of self-discovery.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleJoin(); // Handle the join action
              }}
              className="space-y-4 text-black"
            >
              <input
                type="text"
                placeholder="Your Name (Optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all"
              >
                Join Now
              </button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">
              By joining, you'll receive a free eBook: "The 5 Pillars of
              Self-Awareness" and a guided meditation audio: "Finding Your
              Center."
            </p>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPopup(false)} // Close the popup on click
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
