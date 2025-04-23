"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Card1() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-6 flex flex-col overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative rounded-xl"
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-6">
        Personal Journey
      </h2>
      <p className="md:text-md text-md font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        VYUHA emerged from a deep questioning of the status quo. Like many, its
        founder(s) grappled with the questions: "Why do we feel lost despite
        achieving societal milestones?" "Why does education not teach us how to
        learn?" and "Why are we disconnected from our true selves?" This quest
        for answers sparked a journey of self-discovery, leading to the
        realization that many are trapped in a "matrix" of conditioning and
        limiting beliefs.
      </p>
      <p className="md:text-md text-md font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        This personal transformation, marked by moments of profound awakening,
        fueled a vision to create a platform that empowers others to break free
        and live with purpose.
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
