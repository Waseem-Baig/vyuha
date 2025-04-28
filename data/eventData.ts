import {
  BriefcaseIcon,
  Calendar as CalendarIcon,
  UsersIcon,
} from "lucide-react"; // Import icon for event type
import type { LucideIcon } from "lucide-react"; // Import the icon type separately
import React from "react"; // Import React for JSX syntax

export type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  organizerBio: string;
  organizerPhoto: string;
  platformLink?: string; // For online events
  fees?: string;
  materials?: string;
  isRecorded?: boolean;
  image: string; // Event image
  category: string; // Event category
  mode?: string; // Add mode property (e.g., "online" or "offline")
  targetAudience?: string; // Add targetAudience property (e.g., "Students", "Professionals")
  logo?: string; // Add logo property (if different from image)
  icon?: LucideIcon; // Add icon property for event type icons
};

export const events: Event[] = [
  {
    id: 1,
    name: "Tech Innovation Summit 2024",
    description:
      "Join us for a day of cutting-edge technology discussions and networking. Learn from industry leaders and connect with like-minded professionals.",
    date: "2024-04-15",
    time: "10:00 AM",
    location: "Virtual Event",
    organizer: "John Doe",
    organizerBio:
      "John is a seasoned tech entrepreneur with over 15 years of experience in the industry.",
    organizerPhoto:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    platformLink: "https://zoom.us/j/123456789",
    fees: "Free",
    materials: "Laptop, Stable Internet Connection",
    isRecorded: true,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    category: "Tech",
    mode: "online",
    targetAudience: "Students",
    logo: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    icon: CalendarIcon, // Use CalendarIcon as a React component
  },
  {
    id: 2,
    name: "Cultural Fest 2024",
    description:
      "Experience the vibrant culture and traditions from around the world. A day filled with music, dance, and art.",
    date: "2024-05-20",
    time: "2:00 PM",
    location: "Central Park, New York",
    organizer: "Jane Smith",
    organizerBio:
      "Jane is an event coordinator with a passion for bringing cultures together through art and music.",
    organizerPhoto:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    platformLink: undefined,
    fees: "$20",
    materials: "Event Pass, Comfortable Clothing",
    isRecorded: false,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    category: "Cultural",
    mode: "offline",
    targetAudience: "Everyone",
    logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    icon: UsersIcon,
  },
  {
    id: 3,
    name: "Leadership Workshop 2024",
    description:
      "A hands-on workshop designed to help you develop leadership skills and strategies for success.",
    date: "2024-06-10",
    time: "9:00 AM",
    location: "Virtual Event",
    organizer: "Michael Johnson",
    organizerBio:
      "Michael is a leadership coach with over a decade of experience helping professionals achieve their goals.",
    organizerPhoto:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    platformLink: "https://meet.google.com/xyz-1234",
    fees: "$50",
    materials: "Notebook, Pen, Stable Internet Connection",
    isRecorded: true,
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    category: "Leadership",
    mode: "online",
    targetAudience: "Professionals",
    logo: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    icon: BriefcaseIcon,
  },
];
