"use client";

import React, { useState } from "react";
import { mentors } from "@/data/mentorsData";
import MentorCard from "@/components/MentorCard";
import MentorFilters from "@/components/MentorFilters";

export default function MentorshipPage() {
  const [filteredMentors, setFilteredMentors] = useState(mentors);

  const handleFilterChange = (filters: { [key: string]: string }) => {
    const filtered = mentors.filter((mentor) => {
      const matchesSkills =
        !filters.skills || mentor.skills.includes(filters.skills);
      const matchesIndustry =
        !filters.industry || mentor.industry === filters.industry;
      const matchesAvailability =
        !filters.availability || mentor.availability === filters.availability;

      return matchesSkills && matchesIndustry && matchesAvailability;
    });

    setFilteredMentors(filtered);
  };

  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-6 lg:px-8">
      {/* Mentorship Introduction */}
      <section className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          Welcome to the Mentorship Program
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Our mentorship program connects learners with experienced mentors to
          help them achieve their goals. Whether you're looking to improve your
          skills, gain industry insights, or receive career guidance, our
          mentors are here to help.
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <MentorFilters onFilterChange={handleFilterChange} />
      </div>

      {/* Mentor Listings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </main>
  );
}
