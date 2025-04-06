'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { ParticleBackground } from './shared/ParticleBackground';
import { GridOverlay } from './shared/GridOverlay';
import { useScrollEffect } from './shared/useScrollEffect';

export default function Hero() {
    const { opacity, y, scale } = useScrollEffect();

    // Memoize the main content to prevent unnecessary re-renders
    const mainContent = useMemo(() => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="z-10 text-center px-4 max-w-4xl"
            style={{
                opacity,
                transform: `translateY(${y}px) scale(${scale})`
            }}
        >
            <div className="inline-block mt-6 mb-2">
                <div className="bg-white/10 backdrop-blur-sm text-xs font-medium text-orange-200 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Star size={12} className="text-orange-400" />
                    <span>Inspiring Next-Gen Innovators</span>
                </div>
            </div>

            {/* Title */}
            <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                    VYUHA <span className="text-white/90">Innovation</span> Foundation
                </h1>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-outfit">
                Catalyzing the future of innovation, technology & ideas for the next generation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/portfolio">
                    <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 group hover:scale-105 hover:shadow-orange-500/40 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Discover VYUHA
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-x-full group-hover:translate-x-0 transition-transform" />
                    </button>
                </Link>
                <Link href="/contact">
                    <button className="bg-white/5 backdrop-blur-sm border-2 border-orange-500/50 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 hover:scale-105 hover:border-orange-500/80 active:scale-95">
                        Get Involved
                    </button>
                </Link>
            </div>
        </motion.div>
    ), [opacity, y, scale]);

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Reusable Particle Background */}
            <ParticleBackground />

            {/* Reusable Grid Overlay */}
            <GridOverlay />

            {/* Main content - memoized */}
            {mainContent}
        </section>
    );
}