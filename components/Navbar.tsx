'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/public/logo.png';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'Connect and Challenge', href: '/challenge' },
    { name: 'Our Clubs and Courses', href: '/clubs' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-0 right-0 z-[999] flex justify-center px-4 md:px-6"
        >
            <div className={`w-full max-w-6xl rounded-2xl backdrop-blur-lg bg-[#0c0c0ccc] border border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between shadow-md transition-all duration-300 ${
                scrolled ? 'shadow-orange-500/10 border-orange-500/10' : ''
            }`}>

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
                                        isActive ? 'text-orange-400' : 'text-white'
                                    }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/contact"
                            className="flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                        >
                            <Phone size={14} />
                            <span>Contact</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-[70px] inset-x-4 md:hidden rounded-xl backdrop-blur-lg bg-[#0c0c0ccc] shadow-lg border border-white/10 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col space-y-4 px-6 py-4">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-base font-medium transition duration-200 block ${
                                                isActive ? 'text-orange-400' : 'text-white hover:text-orange-300'
                                            }`}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <span className="ml-2">•</span>
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile Contact Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-2"
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-base font-medium transition-all duration-300"
                                >
                                    <Phone size={16} />
                                    <span>Contact Us</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}