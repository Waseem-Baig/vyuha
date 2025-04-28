"use client";

import React, { useState } from "react";

export default function ProfileSettingsPage() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    alert("Profile updated successfully!");
  };

  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg shadow-lg hover:shadow-orange-500">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-transform"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
