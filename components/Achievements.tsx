"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Newspaper, RocketIcon, HeartPulse, GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        title: "Innovation & Entrepreneurship",
        description:
            "Students learn to convert problem-solving solutions into business models by integrating technology.",
        icon: <RocketIcon className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "Health & Outreach Projects",
        description:
            "We organize impactful health and outreach activities recognized by APSACS, KL University, and AIMS Mangalgiri.",
        icon: <HeartPulse className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "Upskilling & Training",
        description:
            "Vyuha believes that equipping students with on-demand skills is essential for success.",
        icon: <GraduationCap className="w-8 h-8 text-orange-400" />,
    },
];

const newspaperArticles = [
    { image: "/news/new2.png", title: "Vyuha's Health Camp Recognized by APSACS" },
    { image: "/news/new2.png", title: "Innovation Fest Gains Media Attention" },
    { image: "/news/new2.png", title: "Students Launch New Startup with Vyuha" },
];

const Achievements = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [900, 1200], [20, 0]);
    const opacity = useTransform(scrollY, [900, 1200], [0, 1]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const createParticles = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute rounded-full opacity-0';

                // Add different colors like in Vision.tsx - white and orange variations
                const colors = ['bg-white/30', 'bg-orange-500/20', 'bg-orange-400/15'];
                const colorClass = colors[Math.floor(Math.random() * colors.length)];
                particle.classList.add(colorClass);

                // Random size between 2px and 8px (slightly bigger like in Hero)
                const size = Math.random() * 6 + 2;
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

        return () => {
            if (containerRef.current) {
                const particles = containerRef.current.querySelectorAll('div[class*="absolute rounded-full"]');
                particles.forEach((particle: Element) => particle.remove());
            }
        };
    }, []);

    return (
        <section className="relative py-24 overflow-hidden">
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

                {/* Multiple orange glows like in Vision.tsx */}
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

                {/* Additional glow element for more depth */}
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-400/10 blur-[100px] z-[1]"
                    animate={{
                        scale: [1, 0.8, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-[2]" />

            <motion.div
                className="max-w-7xl mx-auto px-8 relative z-10"
                style={{ y, opacity }}
            >
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm text-xs font-medium text-orange-200 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                            <Star size={12} className="text-orange-400" />
                            <span>Our Impact</span>
                        </div>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Notable <span className="text-white/90">Achievements</span>
                    </motion.h2>

                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg font-outfit"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Our commitment to excellence has led to remarkable achievements that showcase the power of student-led initiatives.
                    </motion.p>
                </motion.div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.2)",
                                borderColor: "rgba(249, 115, 22, 0.3)"
                            }}
                        >
                            <motion.div
                                className="mb-4 p-3 rounded-full inline-flex bg-orange-500/10 border border-orange-500/20 transition-all duration-300 group-hover:bg-orange-500/20"
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-2 font-outfit">{feature.title}</h3>
                            <p className="text-gray-300 font-outfit">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Media coverage section */}
                <motion.div
                    className="mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div>
                            <motion.div
                                className="inline-block mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="bg-white/10 backdrop-blur-sm text-xs font-medium text-orange-200 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                                    <Newspaper size={12} className="text-orange-400" />
                                    <span>Press Coverage</span>
                                </div>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-4xl font-bold tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Featured in News
                            </motion.h2>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 md:mt-0 flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium font-outfit group"
                        >
                            View all press releases
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {newspaperArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-xl cursor-pointer border border-white/10 hover:border-orange-500/30 transition-colors duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)" }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white font-outfit">{article.title}</h3>
                                        <div className="mt-2 flex items-center">
                                            <span className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">Read more</span>
                                            <ArrowRight size={14} className="ml-1 text-orange-400 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>

                                    {/* Hover overlay effect like in Hero component */}
                                    <motion.div
                                        className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Adding a CTA button at the bottom similar to Vision component */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px 2px rgba(249, 115, 22, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore More Achievements
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                            initial={{ x: "100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Achievements;