"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation"; // For navigation after submission
import { motion } from "framer-motion";

interface FormData {
  name: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  logo: File | null;
}

export default function CreateEventPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
    logo: null,
  });

  const router = useRouter(); // For navigation

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save the event data to local storage
    const existingEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const newEvent = { ...formData, id: Date.now() }; // Add a unique ID
    localStorage.setItem(
      "events",
      JSON.stringify([...existingEvents, newEvent])
    );

    // Navigate to the events page
    router.push("/events");
  };

  return (
    <main className="min-h-screen text-white">
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black p-8 rounded-lg shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
          >
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
              Post an Event
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Name */}
              <div>
                <label htmlFor="name" className="block text-md font-medium">
                  Event Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter event name"
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="date" className="block text-md font-medium">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Event Time */}
              <div>
                <label htmlFor="time" className="block text-md font-medium">
                  Event Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Event Location */}
              <div>
                <label htmlFor="location" className="block text-md font-medium">
                  Event Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter event location"
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Event Category */}
              <div>
                <label htmlFor="category" className="block text-md font-medium">
                  Event Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Competition">Competition</option>
                  <option value="Networking">Networking</option>
                </select>
              </div>

              {/* Event Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-md font-medium"
                >
                  Event Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter event description"
                  rows={4}
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                ></textarea>
              </div>

              {/* Event Logo */}
              <div>
                <label htmlFor="logo" className="block text-md font-medium">
                  Event Logo
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  onChange={handleFileChange}
                  className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-transform"
              >
                Post Event
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
