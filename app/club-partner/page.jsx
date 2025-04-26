"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ClubPartnerForms() {
  return (
    <main className="min-h-screen text-white">
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Form 1: Join Vyuha Central Team */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-black/70 p-8 rounded-lg shadow-xl hover:shadow-orange-500"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
                Join the Vyuha Central Team
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-md font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-md font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-md font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="personal-phone"
                    name="phone"
                    placeholder="Your number"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="skills" className="block text-md font-medium">
                    Skills/Expertise
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    placeholder="Describe your skills or expertise"
                    rows={4}
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-transform"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <img
                src="/anna.png"
                alt="Join Vyuha Central Team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Form 2: Open a New Club */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center order-last lg:order-first"
            >
              <img
                src="/anna.png"
                alt="Open a New Club"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-black/70 p-8 rounded-lg shadow-xl hover:shadow-orange-500"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
                Open a New Club in Your College
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="college-name"
                    className="block text-md font-medium"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college-name"
                    name="college-name"
                    placeholder="Your college name"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="club-name"
                    className="block text-md font-medium"
                  >
                    Proposed Club Name
                  </label>
                  <input
                    type="text"
                    id="club-name"
                    name="club-name"
                    placeholder="Proposed club name"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-md font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="club-phone"
                    name="phone"
                    placeholder="Your number"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="vision" className="block text-md font-medium">
                    Vision for the Club
                  </label>
                  <textarea
                    id="vision"
                    name="vision"
                    placeholder="Describe your vision for the club"
                    rows={4}
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-transform"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Form 3: Collaborate with an Existing Club */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-black/70 p-8 rounded-lg shadow-xl hover:shadow-orange-500"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
                Collaborate with an Existing Club
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="club-name"
                    className="block text-md font-medium"
                  >
                    Club Name
                  </label>
                  <input
                    type="text"
                    id="club-name"
                    name="club-name"
                    placeholder="Your club name"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="college-name"
                    className="block text-md font-medium"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college-name"
                    name="college-name"
                    placeholder="Your college name"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-md font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="club2-phone"
                    name="phone"
                    placeholder="Your number"
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="collaboration-details"
                    className="block text-md font-medium"
                  >
                    Collaboration Details
                  </label>
                  <textarea
                    id="collaboration-details"
                    name="collaboration-details"
                    placeholder="Describe how you want to collaborate with Vyuha"
                    rows={4}
                    className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-transform"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <img
                src="/anna.png"
                alt="Collaborate with an Existing Club"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
