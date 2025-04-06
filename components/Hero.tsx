'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import GridOverlay directly
import { GridOverlay } from './shared/GridOverlay';

// Stable background with subtle animation
const StableBackground = () => (
    <div className="absolute inset-0 z-[1] overflow-hidden">
        <style jsx>{`
            .glow-1, .glow-2 {
                position: absolute;
                border-radius: 50%;
                filter: blur(100px);
                opacity: 0.4;
            }
            .glow-1 {
                top: 33%;
                left: 50%;
                width: 600px;
                height: 600px;
                background: rgba(249, 115, 22, 0.15);
                transform: translateX(-50%);
                animation: subtlePulse 10s infinite ease-in-out;
            }
            .glow-2 {
                bottom: 25%;
                right: 25%;
                width: 300px;
                height: 300px;
                background: rgba(249, 115, 22, 0.1);
                animation: subtlePulse 8s 1s infinite ease-in-out;
            }
            @keyframes subtlePulse {
                0%, 100% { opacity: 0.4; }
                50% { opacity: 0.45; }
            }
        `}</style>
        <div className="glow-1"></div>
        <div className="glow-2"></div>
    </div>
);

// Optimized scroll effect hook
const useOptimizedScrollEffect = () => {
    const [scrollValues, setScrollValues] = useState({ opacity: 1, y: 0, scale: 1 });

    useEffect(() => {
        let rafId: number;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    // Calculate new values only if we've scrolled a significant amount
                    if (Math.abs(currentScrollY - lastScrollY) > 5) {
                        const newOpacity = Math.max(0, 1 - currentScrollY / 500);
                        const newY = currentScrollY * 0.2;
                        const newScale = Math.max(0.8, 1 - currentScrollY / 2000);

                        setScrollValues({
                            opacity: newOpacity,
                            y: newY,
                            scale: newScale
                        });

                        lastScrollY = currentScrollY;
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return scrollValues;
};

export default function Hero() {
    const { opacity, y, scale } = useOptimizedScrollEffect();
    const [hasAnimated, setHasAnimated] = useState(false);

    // Memoize button interaction handlers
    const handleDiscoverHover = useCallback((e: React.MouseEvent) => {
        const target = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
        if (target) target.style.transform = 'translateX(4px)';
    }, []);

    const handleDiscoverLeave = useCallback((e: React.MouseEvent) => {
        const target = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
        if (target) target.style.transform = 'translateX(0)';
    }, []);

    // Mark animation as complete after initial render
    useEffect(() => {
        const timer = setTimeout(() => setHasAnimated(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Stable background that doesn't change on load */}
            <StableBackground />

            {/* Grid overlay */}
            <GridOverlay />

            {/* Main content with initial animation */}
            <motion.div
                className="z-10 text-center px-4 max-w-4xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                style={{
                    opacity: hasAnimated ? opacity : 1,
                    transform: hasAnimated ? `translateY(${y}px) scale(${scale})` : 'translateY(0) scale(1)',
                    willChange: 'transform, opacity'
                }}
            >
                <motion.div
                    className="inline-block mt-6 mb-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bg-white/10 backdrop-blur-sm text-xs font-medium text-orange-200 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <Star size={12} className="text-orange-400" />
                        <span>Inspiring Next-Gen Innovators</span>
                    </div>
                </motion.div>

                {/* Title with animation */}
                <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mt-4 tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        VYUHA <span className="text-white/90">Innovation</span> Foundation
                    </motion.h1>
                </motion.div>

                {/* Subtitle with animation */}
                <motion.p
                    className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-outfit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                >
                    Catalyzing the future of innovation, technology & ideas for the next generation.
                </motion.p>

                {/* CTA Buttons with animation */}
                <motion.div
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                >
                    <Link href="/portfolio">
                        <motion.button
                            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0"
                            onMouseEnter={handleDiscoverHover}
                            onMouseLeave={handleDiscoverLeave}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Discover VYUHA
                                <ArrowRight size={16} className="arrow-icon transition-transform duration-300" />
                            </span>
                        </motion.button>
                    </Link>
                    <Link href="/contact">
                        <motion.button
                            className="bg-white/5 backdrop-blur-sm border-2 border-orange-500/50 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 hover:border-orange-500/80 hover:-translate-y-1 active:translate-y-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Involved
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}