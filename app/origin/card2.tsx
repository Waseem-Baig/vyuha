"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Card2() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-6 flex flex-col overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative rounded-xl"
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-6">
        The Seed of Change
      </h2>
      <p className="md:text-md text-md font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        VYUHA began as a vision to help individuals break free from societal
        conditioning, rediscover their truth, and embark on a journey of
        awakening. The founder’s own transformative journey sparked a desire to
        help others find their unique path to self-realization, moving beyond
        the "rat race" and towards a life of genuine fulfillment.
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
