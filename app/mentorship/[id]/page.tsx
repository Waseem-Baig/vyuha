"use client";

import React, { useEffect, useState } from "react";
import { mentors } from "@/data/mentorsData";

export default function MentorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [mentor, setMentor] = useState<any>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      const mentorId = parseInt(resolvedParams.id);
      const selectedMentor = mentors.find((m) => m.id === mentorId);
      setMentor(selectedMentor);
    });
  }, [params]);

  if (!mentor) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Mentor not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 mt-12 bg-black text-white rounded-lg">
      {/* Mentor Banner */}
      <div className="relative mb-12">
        <img
          src={mentor.photo}
          alt={mentor.name}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
        <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-orange-500 drop-shadow-lg">
          {mentor.name}
        </h1>
      </div>

      {/* Mentor Details */}
      <div className="p-8 rounded-lg shadow-lg">
        {/* Industry and Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            About {mentor.name}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Industry:</strong> {mentor.industry}
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Skills:</strong> {mentor.skills.join(", ")}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Experience
          </h2>
          <p className="text-gray-300 leading-relaxed">{mentor.experience}</p>
        </section>

        {/* Mentorship Style */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Mentorship Style
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {mentor.mentorshipStyle}
          </p>
        </section>

        {/* Availability */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Availability
          </h2>
          <p className="text-gray-300 leading-relaxed">{mentor.availability}</p>
        </section>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
            Request Mentor
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Express Interest
          </button>
        </div>
      </div>
    </main>
  );
}
