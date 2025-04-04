"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Megaphone, Lightbulb, Calendar, Laptop } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: "Digital Marketing",
        description: "In Vyuha we have a well-established blend of professionals and students who create impactful digital strategy and content.",
        icon: <Megaphone className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "Business Strategy",
        description: "Building the right strategy for businesses to build an inspiring brand and achieve targets with ease.",
        icon: <Lightbulb className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "Events & Conferences",
        description: "Our network in top institutions enables us to conduct impactful events with hundreds of students and professionals, generating leads.",
        icon: <Calendar className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "Web Services",
        description: "We provide end-to-end web development services for a wide range of business requirements, personalizing solutions with technology.",
        icon: <Laptop className="w-8 h-8 text-orange-400" />,
    },
];

const Services = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [700, 1000], [20, 0]);
    const opacity = useTransform(scrollY, [700, 1000], [0, 1]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const createParticles = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute rounded-full opacity-0';

                const colors = ['bg-white/30', 'bg-orange-500/20', 'bg-orange-400/15'];
                const colorClass = colors[Math.floor(Math.random() * colors.length)];
                particle.classList.add(colorClass);

                const size = Math.random() * 6 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;

                const animDuration = Math.random() * 15 + 5;
                particle.style.animation = `float ${animDuration}s infinite ease-in-out`;

                particle.style.animationDelay = `${Math.random() * 5}s`;
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

    // Animation variants for consistent sequence effects
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

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
                            <span>Our Expertise</span>
                        </div>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold tracking-tight font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Services <span className="text-white/90">We Provide</span>
                    </motion.h2>

                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg font-outfit"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive.
                    </motion.p>
                </motion.div>

                {/* Services grid with staggered animations */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.2)",
                                borderColor: "rgba(249, 115, 22, 0.3)"
                            }}
                        >
                            <div className="flex gap-6">
                                <motion.div
                                    className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 transition-all duration-300 group-hover:bg-orange-500/20 flex-shrink-0"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-outfit">{service.title}</h3>
                                    <p className="text-gray-300 font-outfit leading-relaxed">{service.description}</p>

                                    <motion.div
                                        className="mt-4 inline-flex items-center gap-1 text-orange-400 font-medium group-hover:text-orange-300 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn more
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA section with sequential animation */}
                <motion.div
                    className="mt-20 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 p-10 rounded-2xl backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{
                        boxShadow: "0 0 30px 5px rgba(249, 115, 22, 0.2)",
                        borderColor: "rgba(249, 115, 22, 0.4)"
                    }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white font-outfit">Ready to transform your ideas into reality?</h3>
                            <p className="mt-2 text-gray-300 font-outfit">Partner with Vyuha to bring your vision to life with our expertise and innovation.</p>
                        </motion.div>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px 2px rgba(249, 115, 22, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 group flex-shrink-0"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                                initial={{ x: "100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            />
                        </motion.button>
                    </div>
                </motion.div>

                {/* Bottom CTA button with delayed appearance */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px 2px rgba(249, 115, 22, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium font-outfit transition-all duration-300 shadow-lg shadow-orange-500/20 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Schedule a Consultation
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

export default Services;