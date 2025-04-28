"use client";

import React from "react";

interface MentorCardProps {
  mentor: {
    id: number;
    name: string;
    photo: string;
    skills: string[];
    industry: string;
    experience: string;
    mentorshipStyle: string;
    availability: string;
  };
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Mentor Photo */}
      <img
        src={mentor.photo}
        alt={mentor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-orange-500">
          {mentor.name}
        </h2>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Industry:</strong> {mentor.industry}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Skills:</strong> {mentor.skills.join(", ")}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Experience:</strong> {mentor.experience}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Mentorship Style:</strong> {mentor.mentorshipStyle}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Availability:</strong> {mentor.availability}
        </p>
        <a
          href={`/mentorship/${mentor.id}`}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg inline-block mt-4"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
