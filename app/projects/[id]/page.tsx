"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/data/projectsData";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      const project = projects.find(
        (p) => p.id === parseInt(resolvedParams.id)
      );
      setProject(project);
    });
  }, [params]);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-6 bg-black mt-12 rounded-lg text-white">
      {/* Project Banner */}
      <div className="relative mb-12 border border-gray-400 rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
        <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-orange-500 drop-shadow-lg">
          {project.title}
        </h1>
      </div>

      {/* Project Details */}
      <div className="bg-black p-8 rounded-lg shadow-lg">
        {/* Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Project Description
          </h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </section>

        {/* Goals Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Goals</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.goals.map((goal: string, index: number) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </section>

        {/* Deliverables Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Deliverables
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.deliverables.map((deliverable: string, index: number) => (
              <li key={index}>{deliverable}</li>
            ))}
          </ul>
        </section>

        {/* Evaluation Criteria Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Evaluation Criteria
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.evaluationCriteria.map(
              (criteria: string, index: number) => (
                <li key={index}>{criteria}</li>
              )
            )}
          </ul>
        </section>

        {/* Project Metadata */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black border border-gray-400 p-4 rounded-lg hover:border-none hover:shadow-orange-500 shadow-lg">
            <h3 className="text-lg font-bold text-orange-500 mb-2">
              Difficulty
            </h3>
            <p className="text-gray-300">{project.difficulty}</p>
          </div>
          <div className="bg-black border border-gray-400 p-4 rounded-lg hover:border-none hover:shadow-orange-500 shadow-lg">
            <h3 className="text-lg font-bold text-orange-500 mb-2">
              Team Size
            </h3>
            <p className="text-gray-300">{project.teamSize}</p>
          </div>
          <div className="bg-black border border-gray-400 p-4 rounded-lg hover:border-none hover:shadow-orange-500 shadow-lg">
            <h3 className="text-lg font-bold text-orange-500 mb-2">Deadline</h3>
            <p className="text-gray-300">{project.deadline}</p>
          </div>
          <div className="bg-black border border-gray-400 p-4 rounded-lg hover:border-none hover:shadow-orange-500 shadow-lg">
            <h3 className="text-lg font-bold text-orange-500 mb-2">Skills</h3>
            <p className="text-gray-300">{project.skills.join(", ")}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
