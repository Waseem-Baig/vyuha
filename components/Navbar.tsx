"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/logo.png";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Connect and Challenge", href: "/challenge" },
  { name: "Our Clubs and Courses", href: "/clubs" },
  { name: "Membership", href: "/membership" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showProfileMenu, setShowProfileMenu] = useState(false); // State for profile dropdown
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check login status on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserDetails = sessionStorage.getItem("userDetails");
      setIsLoggedIn(!!storedUserDetails); // Set to true if user details exist
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem("userDetails"); // Clear session storage
    setIsLoggedIn(false); // Update login state
    router.push("/auth/sign-in"); // Navigate to sign-in page
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-[999] flex justify-center px-4 md:px-6"
    >
      <div
        className={`w-full max-w-6xl rounded-2xl backdrop-blur-lg bg-[#0c0c0ccc] border border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between shadow-md transition-all duration-300 ${
          scrolled ? "shadow-orange-500/10 border-orange-500/10" : ""
        }`}
      >
        {/* Logo with Company Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Image
              src={logo}
              alt="Vyuha Logo"
              width={36}
              height={36}
              className="rounded-full relative z-10"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
          >
            VYUHA
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-sm font-medium transition-all duration-200 group ${
                        isActive ? "text-orange-400" : "text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Profile Button */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-sm font-medium text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-[#0c0c0ccc] border border-white/10 rounded-lg shadow-lg overflow-hidden"
                    >
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-white hover:bg-orange-500/20 transition-all"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-white hover:bg-orange-500/20 transition-all"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            <>
              {/* Sign In Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/auth/sign-in"
                  className="text-sm font-medium text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/20 hover:brightness-110 transition-all"
                >
                  Sign In
                </Link>
              </motion.div>

              {/* Sign Up Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/auth/sign-up"
                  className="text-sm font-medium text-orange-500 px-4 py-2 rounded-full border border-orange-500 hover:bg-gradient-to-r from-orange-500 to-orange-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                >
                  Sign Up
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
