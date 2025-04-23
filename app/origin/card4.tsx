"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Card4() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-6 flex flex-col overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative rounded-xl"
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-6">
        Awakening Vision
      </h2>
      <p className="md:text-md text-md font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        We envision a world where every individual has access to the tools,
        guidance, and wisdom needed to live in alignment with their higher
        purpose. VYUHA’s vision is not just personal transformation—it’s a
        collective awakening where every person is empowered to live their
        truth, break free from limiting beliefs, and unlock their fullest
        potential, contributing to a more conscious and harmonious world.
      </p>
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
