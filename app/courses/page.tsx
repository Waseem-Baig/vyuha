"use client";

import React, { useState } from "react";
import { courses } from "@/data/coursesData"; // Import the course data
import CourseCard from "@/components/CourseCard";
import Filters from "@/components/CourseFilters";

// Define the type for the filters object
interface Filters {
  level?: string;
  duration?: string;
  price?: string;
  format?: string;
  search?: string;
}

export default function CourseCatalogPage() {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleFilterChange = (filters: Filters) => {
    const filtered = courses.filter((course) => {
      const matchesLevel =
        !filters.level ||
        course.level?.toLowerCase() === filters.level.toLowerCase();
      const matchesDuration =
        !filters.duration ||
        course.duration?.toLowerCase() === filters.duration.toLowerCase();
      const matchesPrice =
        !filters.price ||
        course.price?.toLowerCase() === filters.price.toLowerCase();
      const matchesFormat =
        !filters.format ||
        course.format?.toLowerCase() === filters.format.toLowerCase();
      const matchesSearch =
        !filters.search ||
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.description.toLowerCase().includes(filters.search.toLowerCase());

      return (
        matchesLevel &&
        matchesDuration &&
        matchesPrice &&
        matchesFormat &&
        matchesSearch
      );
    });

    setFilteredCourses(filtered);
  };

  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-6 lg:px-8">
      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <Filters onFilterChange={handleFilterChange} />
      </div>

      {/* Course Listings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}
