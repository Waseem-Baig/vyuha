'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Star, ArrowRight, Globe as GlobeIcon } from 'lucide-react';
import { useRef, useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ParticleBackground } from './shared/ParticleBackground';
import { GridOverlay } from './shared/GridOverlay';
import { useScrollEffect } from './shared/useScrollEffect';

// Keep the dynamic import unchanged
const World = dynamic(() => import('./ui/Globe').then(mod => mod.World), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-t-transparent border-orange-500 animate-spin"></div>
        </div>
    )
});

const Vision = () => {
    const { opacity, y } = useScrollEffect();
    const [isMounted, setIsMounted] = useState(false);

    // Globe configuration and data - unchanged
    const globeConfig = {
        globeColor: '#111111',
        emissive: '#000000',
        emissiveIntensity: 0.1,
        shininess: 0.9,
        ambientLight: '#ffffff',
        directionalLeftLight: '#f97316',
        directionalTopLight: '#ffffff',
        pointLight: '#f97316'
    };

    const globeData = [
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.2090,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.3,
            color: '#f97316'
        },
        {
            order: 2,
            startLat: 28.6139,
            startLng: 77.2090,
            endLat: 51.5074,
            endLng: -0.1278,
            arcAlt: 0.4,
            color: '#f97316'
        },
        {
            order: 3,
            startLat: 28.6139,
            startLng: 77.2090,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.5,
            color: '#fb923c'
        },
        {
            order: 4,
            startLat: 28.6139,
            startLng: 77.2090,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: '#fdba74'
        },
        {
            order: 5,
            startLat: 28.6139,
            startLng: 77.2090,
            endLat: -23.5558,
            endLng: -46.6396,
            arcAlt: 0.4,
            color: '#f97316'
        }
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Memoize the main content
    const mainContent = useMemo(() => (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-8 z-10">
            <motion.div
                className="max-w-2xl text-center md:text-left"
                style={{ y, opacity }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className="inline-block mb-4">
                    <div className="bg-white/10 backdrop-blur-sm text-xs font-medium text-orange-200 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <Star size={12} className="text-orange-400" />
                        <span>Our Purpose</span>
                    </div>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                    Our <span className="text-white/90">Vision</span>
                </h2>

                <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed font-outfit">
                    Empowering Students for Self-Awareness, Fearlessness, Joyful Learning,
                    and Purposeful Research. Our vision is to create an educational
                    environment that empowers students to become self-aware, free from
                    fear of questioning, and purpose-driven individuals engaged in
                    research fields by making youth enjoy the learning process.
                </p>

                <p className="mt-4 font-semibold text-lg text-orange-200 font-outfit">
                    - Vyuha Student Community
                </p>

                <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px 2px rgba(249, 115, 22, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Join The Revolution
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                            initial={{ x: "100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </motion.button>

                    <div className="flex space-x-4">
                        <motion.a
                            href="#"
                            className="text-white hover:text-orange-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Instagram size={24} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-orange-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-orange-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="mt-10 md:mt-0 md:ml-12 flex-shrink-0 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.div
                    className="relative h-[350px] w-[350px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="absolute -inset-1 bg-orange-500/20 rounded-full blur-md"
                        animate={{ scale: [0.98, 1.02, 0.98] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Globe component */}
                    <div className="relative z-10 h-full w-full">
                        <World
                            globeConfig={globeConfig}
                            data={globeData}
                            defaultProps={{
                                pointSize: 1,
                                showAtmosphere: true,
                                atmosphereColor: "#ffffff",
                                atmosphereAltitude: 0.1,
                                polygonColor: "#111111",
                                arcLength: 0.9,
                                arcTime: 1000,
                                rings: 3,
                                maxRings: 3
                            }}
                        />
                    </div>

                    {/* Small badge with globe icon */}
                    <motion.div
                        className="absolute -top-4 -right-4 p-2 rounded-full bg-[#0c0c0ccc] backdrop-blur-sm border border-white/10 shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    >
                        <div className="h-[50px] w-[50px] flex items-center justify-center">
                            <GlobeIcon size={30} className="text-orange-400" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    ), [opacity, y]);

    // Orange glow animation
    const glowAnimation = useMemo(() => (
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
    ), []);

    return (
        <section className="relative w-full py-24 flex items-center justify-center text-white overflow-hidden">
            {/* Use shared components for background visuals */}
            <ParticleBackground />
            <GridOverlay />

            {/* Orange glow effect */}
            {glowAnimation}

            {/* Main content - memoized */}
            {mainContent}
        </section>
    );
};

export default Vision;