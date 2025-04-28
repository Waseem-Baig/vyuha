"use client";

import React, { useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import SearchBar from "@/components/SearchBar";

const resources = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    description: "A comprehensive guide to mastering closures in JavaScript.",
    type: "Article",
    link: "#",
  },
  {
    id: 2,
    title: "React State Management",
    description: "Learn how to manage state effectively in React applications.",
    type: "Video",
    link: "#",
  },
];

export default function ResourceLibraryPage() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter resources based on the search query
  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen text-white pt-16 px-4">
      {/* Header */}
      <header className="bg-black shadow-md rounded-lg mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Resource Library</h1>
          <SearchBar
            placeholder="Search resources..."
            onSearch={(query) => setSearchQuery(query)} // Update search query
          />
        </div>
      </header>

      {/* Resource Listings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </main>
  );
}
