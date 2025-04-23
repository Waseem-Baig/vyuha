"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Card5() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-6 flex flex-col overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative rounded-xl"
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-6">
        Visual Storytelling
      </h2>

      <p className="md:text-md text-md font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        Our design elements symbolize the journey from confusion to awakening:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-500/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              />
            </svg>
          </div>
          <p className="mt-2 text-gray-300">Paths Winding Upwards</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-500/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2L2 12h10l10-10H12z"
              />
            </svg>
          </div>
          <p className="mt-2 text-gray-300">Gateways Opening</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-500/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2v20m0-20l-6 6m6-6l6 6"
              />
            </svg>
          </div>
          <p className="mt-2 text-gray-300">Rising Sun</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-500/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l4 4-4 4-4-4 4-4z"
              />
            </svg>
          </div>
          <p className="mt-2 text-gray-300">Butterflies Emerging</p>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [255, 165, 0],
                [255, 167, 0],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
