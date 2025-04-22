"use client";

import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Users,
  CalendarDays,
  Presentation,
  Search,
  Plus,
  Filter,
} from "lucide-react";

// Define the types for each resource
interface Student {
  name: string;
  skills: string[];
  availability: string;
  location: string;
}

interface Hall {
  name: string;
  capacity: string;
  facilities: string[];
  location: string;
}

interface Event {
  title: string;
  date: string;
  type: string;
  attendees: string;
}

interface Project {
  title: string;
  status: string;
  team: string;
  domain: string;
}

// Union type for all resource items
type ResourceItem = Student | Hall | Event | Project;

// Define the structure for each resource category
interface ResourceCategory {
  type: "students" | "halls" | "events" | "projects";
  items: ResourceItem[];
}

// Add type guards to narrow down the type of ResourceItem
function isStudent(item: ResourceItem): item is Student {
  return (item as Student).skills !== undefined;
}

function isHall(item: ResourceItem): item is Hall {
  return (item as Hall).capacity !== undefined;
}

function isEvent(item: ResourceItem): item is Event {
  return (item as Event).date !== undefined;
}

function isProject(item: ResourceItem): item is Project {
  return (item as Project).status !== undefined;
}

export default function OrganizationPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const resources: ResourceCategory[] = [
    {
      type: "students",
      items: [
        {
          name: "John Doe",
          skills: ["Web Development", "UI/UX Design"],
          availability: "Part-time",
          location: "Vijayawada",
        },
        {
          name: "Sarah Chen",
          skills: ["Data Science", "Machine Learning"],
          availability: "Full-time",
          location: "Hyderabad",
        },
      ],
    },
    {
      type: "halls",
      items: [
        {
          name: "Innovation Hub",
          capacity: "200 people",
          facilities: ["Projector", "Sound System", "Wi-Fi"],
          location: "Main Campus",
        },
        {
          name: "Conference Center",
          capacity: "150 people",
          facilities: ["Video Conferencing", "Catering"],
          location: "Tech Park",
        },
      ],
    },
    {
      type: "events",
      items: [
        {
          title: "Tech Innovation Summit",
          date: "2024-03-15",
          type: "Conference",
          attendees: "300+",
        },
        {
          title: "AI Workshop Series",
          date: "2024-03-20",
          type: "Workshop",
          attendees: "50",
        },
      ],
    },
    {
      type: "projects",
      items: [
        {
          title: "Smart City Initiative",
          status: "In Progress",
          team: "5 members",
          domain: "IoT",
        },
        {
          title: "Healthcare Analytics",
          status: "Seeking Collaborators",
          team: "3 members",
          domain: "Data Science",
        },
      ],
    },
  ];

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="min-h-screen py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Organization Resources</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access and manage resources, view available talent, facilities, and
            upcoming events.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative md:flex-1 w-[90%]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 py-5 blackdrop-blur-sm border-2 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-xl"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Button className="gap-2 bg-white/5 backdrop-blur-sm border-2 border-orange-500/50 text-white px-8 py-5 rounded-xl font-medium font-outfit transition-all duration-300 hover:border-orange-500/80 hover:-translate-y-1 active:translate-y-0">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-5 rounded-xl font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0">
              <Plus className="w-4 h-4" />
              Add Resource
            </Button>
          </div>
        </div>

        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="bg-black/50 border border-white/10 w-full p-6 h-auto">
            <div className="flex flex-col sm:flex-row sm:justify-start gap-4 w-full">
              <TabsTrigger
                value="students"
                className="gap-2 w-full sm:w-[25%] p-2 text-center bg-orange-950/50"
              >
                <Users className="w-4 h-4" />
                Students
              </TabsTrigger>
              <TabsTrigger
                value="halls"
                className="gap-2 w-full sm:w-[25%] p-2 text-center bg-orange-950/50"
              >
                <Building2 className="w-4 h-4" />
                Halls
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="gap-2 w-full sm:w-[25%] p-2 text-center bg-orange-950/50"
              >
                <CalendarDays className="w-4 h-4" />
                Events
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="gap-2 w-full sm:w-[25%] p-2 text-center bg-orange-950/50"
              >
                <Presentation className="w-4 h-4" />
                Projects
              </TabsTrigger>
            </div>
          </TabsList>

          {resources.map((resource, idx) => (
            <TabsContent key={idx} value={resource.type}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resource.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_4px_rgba(255,115,0,0.4)] transition-all duration-300 hover:transform hover:translate-y-[-5px]">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {"title" in item ? item.title : item.name}
                      </h3>
                      {/* Render specific fields based on the resource type */}
                      {isStudent(item) && (
                        <>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm">
                            <span className="font-semibold">Availability:</span>{" "}
                            {item.availability}
                          </p>
                          <p className="text-gray-400 text-sm">
                            <span className="font-semibold">Location:</span>{" "}
                            {item.location}
                          </p>
                        </>
                      )}
                      {isHall(item) && (
                        <>
                          <p className="text-orange-400 mb-4">
                            {item.capacity}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.facilities.map((facility, i) => (
                              <span
                                key={i}
                                className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full"
                              >
                                {facility}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm">
                            <span className="font-semibold">Location:</span>{" "}
                            {item.location}
                          </p>
                        </>
                      )}
                      {isEvent(item) && (
                        <>
                          <div className="flex items-center gap-2 text-orange-400 mb-4">
                            <CalendarDays className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                          <p className="text-gray-400 text-sm mb-2">
                            <span className="font-semibold">Type:</span>{" "}
                            {item.type}
                          </p>
                          <p className="text-gray-400 text-sm">
                            <span className="font-semibold">
                              Expected Attendees:
                            </span>{" "}
                            {item.attendees}
                          </p>
                        </>
                      )}
                      {isProject(item) && (
                        <>
                          <span className="inline-block bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full text-sm mb-4">
                            {item.status}
                          </span>
                          <p className="text-gray-400 text-sm mb-2">
                            <span className="font-semibold">Team Size:</span>{" "}
                            {item.team}
                          </p>
                          <p className="text-gray-400 text-sm">
                            <span className="font-semibold">Domain:</span>{" "}
                            {item.domain}
                          </p>
                        </>
                      )}
                      <Button className="w-full mt-4" variant="outline">
                        {resource.type === "students"
                          ? "View Profile"
                          : resource.type === "halls"
                          ? "Book Venue"
                          : resource.type === "events"
                          ? "View Details"
                          : "View Project"}
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
