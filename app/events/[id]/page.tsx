"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Calendar as CalendarIcon,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { events, Event } from "@/data/eventData";

export default function EventDetailsPage() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState<Event | null>(null);
  const [timeLeft, setTimeLeft] = useState("");

  // Fetch event details
  useEffect(() => {
    const eventId = parseInt(id as string, 10);
    const selectedEvent = events.find((event) => event.id === eventId);
    setEvent(selectedEvent || null);

    // Countdown Timer
    if (selectedEvent) {
      const calculateTimeLeft = () => {
        const eventDate = new Date(
          `${selectedEvent.date} ${selectedEvent.time}`
        );
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        } else {
          setTimeLeft("Event has started or ended.");
        }
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
      return () => clearInterval(timer);
    }
  }, [id]);

  if (!event) {
    return <p className="text-center text-gray-500">Event not found.</p>;
  }

  return (
    <main className="min-h-screen py-20 px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Event Image */}
        <div className="relative w-full h-64 md:h-96 mb-8">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Event Title */}
        <motion.h1
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {event.name}
        </motion.h1>

        {/* Countdown Timer */}
        <div className="text-lg font-medium text-orange-500 mb-8 text-center">
          {timeLeft && <p>Time Left: {timeLeft}</p>}
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {event.description}
            </p>

            {/* Date, Time, Location */}
            <div className="flex flex-col gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-orange-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>{event.location}</span>
              </div>
            </div>

            {/* Fees and Materials */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Fees</h3>
              <p className="text-gray-300">{event.fees || "Free"}</p>
              <h3 className="text-lg font-bold mt-4 mb-2">Materials</h3>
              <p className="text-gray-300">
                {event.materials || "No materials required"}
              </p>
            </div>

            {/* Registration Button */}
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-300 w-full"
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Organizer Info */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={event.organizerPhoto}
                alt={event.organizer}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{event.organizer}</h3>
                <p className="text-gray-400">{event.organizerBio}</p>
              </div>
            </div>

            {/* Webinar Link */}
            {event.platformLink && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Webinar Link</h3>
                <a
                  href={event.platformLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Join Webinar
                </a>
              </div>
            )}

            {/* Recording Availability */}
            {event.isRecorded && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Recording</h3>
                <p className="text-gray-400">
                  This event will be recorded. The recording will be available
                  after the event.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold mb-4">Share This Event</h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-orange-500 border-blue-500"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-orange-500 border-blue-400"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-orange-500 border-blue-600"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
