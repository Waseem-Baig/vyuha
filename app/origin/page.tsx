"use client";

import { motion } from "framer-motion";
import { Card1 } from "./card1";
import { Card2 } from "./card2";
import { Card3 } from "./card3";
import { Card4 } from "./card4";
import { Card5 } from "./card5";

export default function OriginPage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[60vh]">
        <div className="absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-400">
            The Origin of VYUHA
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A journey from confusion to awakening, from the matrix to
            self-mastery.
          </p>
        </motion.div>
      </section>

      {/* Personal Journey Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] hover:transform duration-300 hover:-translate-y-2 rounded-xl"
        >
          <Card1 />
        </motion.div>
      </section>

      {/* Seed of Change Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
          className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <Card2 />
        </motion.div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
          className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <Card3 />
        </motion.div>
      </section>

      {/* Awakening Vision Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
          className="max-w-4xl mx-autox bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <Card4 />
        </motion.div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
          className="max-w-4xl mx-auto bg-black/50 border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <Card5 />
        </motion.div>
      </section>
    </main>
  );
}
