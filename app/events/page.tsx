"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  MapPin,
  Users,
  Clock,
  Upload,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";

type Event = {
  id: number;
  name: string;
  logo: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  mode?: string;
};

export default function EventsPage() {
  const [date, setDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [modeFilter, setModeFilter] = useState("");

  const [events, setEvents] = useState<Event[]>([]);

  // Fetch events from localStorage and merge with hardcoded events
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const featuredEvents = [
      {
        id: 1,
        name: "Tech Innovation Summit 2024",
        logo: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
        date: "2024-04-15",
        time: "10:00 AM",
        location: "Virtual Event",
        description:
          "Join us for a day of cutting-edge technology discussions and networking.",
        category: "Tech",
      },
      {
        id: 2,
        name: "Cultural Fest Extravaganza",
        logo: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
        date: "2024-04-20",
        time: "11:00 AM",
        location: "Mumbai, India",
        description:
          "Experience the vibrant diversity of Indian culture through performances and exhibitions.",
        category: "Cultural",
      },
      {
        id: 3,
        name: "Leadership Workshop Series",
        logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        date: "2024-04-25",
        time: "2:00 PM",
        location: "Bangalore, India",
        description:
          "Develop essential leadership skills through interactive sessions.",
        category: "Leadership",
      },
    ];

    // Merge stored events with hardcoded events
    setEvents([...storedEvents, ...featuredEvents]);
  }, []);

  const pastEvents = [
    {
      image:
        "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
      name: "Hackathon 2023",
      stats: {
        participants: "500+",
        speakers: "12",
        projects: "75",
      },
      testimonial: {
        text: "An amazing experience that helped us grow technically and professionally.",
        author: "Priya S., Team Lead",
      },
    },
    {
      image:
        "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg",
      name: "Social Impact Summit",
      stats: {
        participants: "300+",
        speakers: "8",
        initiatives: "25",
      },
      testimonial: {
        text: "The perfect platform to connect with like-minded changemakers.",
        author: "Rahul K., Organizer",
      },
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter
      ? event.category === categoryFilter
      : true;
    // assuming you have a "mode" property (you'd need to add this to events)
    const matchesMode = modeFilter ? event.mode === modeFilter : true;
    const matchesDate = date
      ? format(new Date(event.date), "yyyy-MM-dd") ===
        format(date, "yyyy-MM-dd")
      : true;
    return matchesSearch && matchesCategory && matchesMode && matchesDate;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Discover Events | Create Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Whether you're looking to attend, volunteer, or host—Vyuha brings
              together events that inspire leadership, innovation, and
              collaboration.
            </p>
            <Button
              size="lg"
              className="gap-2 bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-300"
            >
              <Upload className="w-4 h-4 " />
              Upload Event Details
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tech">Tech</SelectItem>
                <SelectItem value="Cultural">Cultural</SelectItem>
                <SelectItem value="Social">Social</SelectItem>
                <SelectItem value="Leadership">Leadership</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setModeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Mode" />
              </SelectTrigger>
              <SelectContent className="bg-transparent text-white">
                <SelectItem value="online" className="bg-black text-white">
                  Online
                </SelectItem>
                <SelectItem value="offline" className="bg-black text-white">
                  Offline
                </SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild className="bg-transparent">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length === 0 ? (
              <p className="text-muted-foreground text-center col-span-full">
                No events found for selected filters.
              </p>
            ) : (
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="overflow-hidden bg-black text-white hover:shadow-orange-500/50 transition-all duration-300 h-auto">
                    <div className="aspect-video relative">
                      <img
                        src={event.logo}
                        alt={event.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">
                        {event.name}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{format(new Date(event.date), "PPP")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{event.description}</p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-transform duration-300 hover:scale-105">
                        Join Event
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Host Your Event */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Host Your Event</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Are you a student body with a vision? Let Vyuha amplify your reach
            across India.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-300"
          >
            <Link href="/events/create">Post Your Event Now</Link>
          </Button>
        </div>
      </section>

      {/* Past Event Highlights */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Past Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden bg-black text-white hover:shadow-orange-500/50 transition-all duration-300">
                  <div className="aspect-video">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {event.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">
                          {event.stats.participants}
                        </div>
                        <div className="text-sm text-gray-400">
                          Participants
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">
                          {event.stats.speakers}
                        </div>
                        <div className="text-sm text-gray-400">Speakers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">
                          {event.stats.projects || event.stats.initiatives}
                        </div>
                        <div className="text-sm text-gray-400">
                          {event.stats.projects ? "Projects" : "Initiatives"}
                        </div>
                      </div>
                    </div>
                    <blockquote className="border-l-2 pl-4 italic text-gray-400">
                      "{event.testimonial.text}"
                      <footer className="mt-2 text-sm font-medium">
                        — {event.testimonial.author}
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
