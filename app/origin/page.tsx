"use client";

import { motion } from "framer-motion";

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
          className="max-w-4xl mx-auto p-6 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] hover:transform duration-300 hover:-translate-y-2 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            Personal Journey
          </h2>
          <p className="text-gray-300 leading-relaxed">
            VYUHA emerged from a deep questioning of the status quo. Like many,
            its founder(s) grappled with the questions: "Why do we feel lost
            despite achieving societal milestones?" "Why does education not
            teach us how to learn?" and "Why are we disconnected from our true
            selves?" This quest for answers sparked a journey of self-discovery,
            leading to the realization that many are trapped in a "matrix" of
            conditioning and limiting beliefs.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            This personal transformation, marked by moments of profound
            awakening, fueled a vision to create a platform that empowers others
            to break free and live with purpose.
          </p>
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
          className="max-w-4xl mx-auto p-6 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            The Seed of Change
          </h2>
          <p className="text-gray-300 leading-relaxed">
            VYUHA began as a vision to help individuals break free from societal
            conditioning, rediscover their truth, and embark on a journey of
            awakening. The founder’s own transformative journey sparked a desire
            to help others find their unique path to self-realization, moving
            beyond the "rat race" and towards a life of genuine fulfillment.
          </p>
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
          className="max-w-4xl mx-auto p-6 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            Inspiration
          </h2>
          <h3 className="text-2xl font-semibold text-orange-300 mb-4">
            Philosophical Roots
          </h3>
          <p className="text-gray-300 leading-relaxed">
            VYUHA draws inspiration from a rich tapestry of wisdom traditions,
            including ancient yogic practices, the teachings of Sanatan Dharma,
            and modern neuroscience. The insights into the power of breathwork,
            meditation, and self-inquiry, combined with a scientific
            understanding of the human mind and body, form the foundation of our
            approach.
          </p>
          <h3 className="text-2xl font-semibold text-orange-300 mt-8 mb-4">
            Vision for the Future
          </h3>
          <p className="text-gray-300 leading-relaxed">
            VYUHA was inspired by the realization that every individual has the
            potential for greatness, but many are lost in the noise of modern
            life. We aim to guide seekers to their higher selves by helping them
            unearth their truth, reach self-mastery, and break through societal
            constraints, empowering them to live a life of purpose and impact.
          </p>
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
          className="max-w-4xl mx-auto p-6 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            Awakening Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a world where every individual has access to the tools,
            guidance, and wisdom needed to live in alignment with their higher
            purpose. VYUHA’s vision is not just personal transformation—it’s a
            collective awakening where every person is empowered to live their
            truth, break free from limiting beliefs, and unlock their fullest
            potential, contributing to a more conscious and harmonious world.
          </p>
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
          className="max-w-4xl mx-auto p-6 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px] rounded-xl"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            Visual Storytelling
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Our design elements symbolize the journey from confusion to
            awakening:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-500/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-orange-400"
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
                  className="w-8 h-8 text-orange-400"
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
                  className="w-8 h-8 text-orange-400"
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
                  className="w-8 h-8 text-orange-400"
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
        </motion.div>
      </section>
    </main>
  );
}
