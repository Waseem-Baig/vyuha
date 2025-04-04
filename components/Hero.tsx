'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Star, ArrowRight } from 'lucide-react';
export default function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);

        // Create particle effect
        const createParticles = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute rounded-full bg-white opacity-0';

                // Random size between 2px and 6px
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;

                // Random animation duration
                const animDuration = Math.random() * 15 + 5;
                particle.style.animation = `float ${animDuration}s infinite ease-in-out`;

                // Random delay
                particle.style.animationDelay = `${Math.random() * 5}s`;

                // Random opacity
                particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;

                container.appendChild(particle);
            }
        };

        createParticles();

        // Cleanup function
        return () => {
            if (containerRef.current) {
                const particles = containerRef.current.querySelectorAll('div[class*="absolute rounded-full"]');
                particles.forEach(particle => particle.remove());
            }
        };
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 z-0" />

            {/* Animated particles background */}
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-hidden z-[1]"
            >
                <style jsx global>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
                        25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
                        50% { transform: translateY(-40px) translateX(-15px) rotate(-5deg); }
                        75% { transform: translateY(-20px) translateX(5px) rotate(3deg); }
                    }
                `}</style>

                {/* Large orange glow */}
                <motion.div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px] z-[1]"
                    animate={{
                        scale: [0.8, 1, 0.8],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-[2]" />

            {/* Main content */}
            <motion.div
                style={{ opacity, y, scale }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="z-10 text-center px-4 max-w-4xl"
            >
                <motion.div
                    className="inline-block mt-6 mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-white/10 backdrop-blur-sm text-xs font-medium text-orange-200 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <Star size={12} className="text-orange-400" />
                        <span>Inspiring Next-Gen Innovators</span>
                    </div>
                </motion.div>

                {/* Title with animated reveal */}
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mt-4 tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        VYUHA <span className="text-white/90">Innovation</span> Foundation
                    </motion.h1>
                </div>

                {/* Subtitle with animated reveal */}
                <motion.p
                    className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-outfit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Catalyzing the future of innovation, technology & ideas for the next generation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <Link href="/portfolio">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px 2px rgba(249, 115, 22, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Discover VYUHA
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                                initial={{ x: "100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            />
                        </motion.button>
                    </Link>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, borderColor: "rgba(249, 115, 22, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/5 backdrop-blur-sm border-2 border-orange-500/50 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300"
                        >
                            Get Involved
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
            </motion.div>
        </section>
    );
}