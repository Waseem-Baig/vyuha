"use client";

import React, { useState } from "react";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/projectCard";
import Filters from "@/components/ProjectFilters";

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (filters: { [key: string]: string }) => {
    const filtered = projects.filter((project) => {
      const matchesDifficulty =
        !filters.difficulty ||
        project.difficulty.toLowerCase() === filters.difficulty.toLowerCase();
      const matchesTeamSize =
        !filters.teamSize ||
        project.teamSize.toLowerCase() === filters.teamSize.toLowerCase();

      return matchesDifficulty && matchesTeamSize;
    });

    setFilteredProjects(filtered);
  };

  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-6 lg:px-8">
      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <Filters onFilterChange={handleFilterChange} />
      </div>

      {/* Project Listings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
