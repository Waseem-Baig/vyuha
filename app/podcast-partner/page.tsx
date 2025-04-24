"use client";

import React from "react";
import { motion } from "framer-motion"; // Import motion directly

export default function PodcastPartnerForm() {
  return (
    <main className="min-h-screen text-white">
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/70 p-8 rounded-lg shadow-xl order-2 md:order-1 hover:shadow-orange-500 beam-shadow"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
              Become a Partner for Vyuha Podcasts
            </h1>
            <form className="space-y-6">
              {/* Name Field */}
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

              {/* Number Field */}
              <div>
                <label htmlFor="number" className="block text-md font-medium">
                  Number*
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Your last name"
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Type of Partner */}
              <div>
                <label
                  htmlFor="partner-type"
                  className="block text-sm font-medium"
                >
                  Type of Partner
                </label>
                <select
                  id="partner-type"
                  name="partner-type"
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="collaboration">Collaboration Partners</option>
                  <option value="event">Event Partners</option>
                  <option value="technology">Technology Partners</option>
                  <option value="social-impact">Social Impact Partners</option>
                  <option value="merchandise">Merchandise Partners</option>
                  <option value="distribution">Distribution Partners</option>
                  <option value="sponsorship">Sponsorship Partners</option>
                  <option value="content">Content Partners</option>
                </select>
              </div>

              {/* Comments/Suggestions */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium">
                  Comments/Suggestions*
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  placeholder="Please mention your requirements, perceptions, or suggestions."
                  rows={4}
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
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

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center order-1 md:order-2"
          >
            <div className="relative w-full h-96 lg:h-full">
              <img
                src="/anna.png"
                alt="Podcast Partner"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
