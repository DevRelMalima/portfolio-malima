"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-card-border mb-6">
                            <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
                            <span className="text-sm font-medium text-foreground/80">Available for new opportunities</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            Hi, I&apos;m{" "}
                            <span className="text-gradient block mt-2">Samaila Anthony Malima</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto lg:mx-0 font-medium tracking-wide">
                            Cloud & AI Specialist × GDG Ajah Organizer
                        </p>

                        <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Building scalable infrastructure, organizing tech communities, and implementing intelligent AI solutions to solve complex problems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/25 hover:-translate-y-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                View My Work
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-card border border-card-border text-foreground font-semibold hover:bg-card-border/80 transition-all hover:-translate-y-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                About Me
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-sm lg:max-w-md mx-auto relative mt-12 lg:mt-0"
                    >
                        {/* Animated glowing backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-secondary-500 to-accent-500 rounded-[2rem] blur-2xl opacity-40 animate-pulse" />

                        <div className="relative aspect-[4/5] bg-card rounded-[2rem] border border-card-border shadow-2xl p-2 z-10">
                            {/* Inner subtle glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-[2rem] pointer-events-none" />

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-card-border/30"
                            >
                                {/* The actual photo - the user will upload profile.jpg or profile.png to /public */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/profile.jpg"
                                    alt="Samaila Anthony Malima"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    onError={(e) => {
                                        // Fallback placeholder if photo is not yet uploaded
                                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Samaila+Malima&size=512&background=0f1115&color=38bdf8&bold=true";
                                    }}
                                />
                            </motion.div>

                            {/* Floating decorative widget 1 */}
                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -right-6 top-16 bg-card border border-card-border p-3 rounded-2xl shadow-xl backdrop-blur-md hidden sm:block"
                            >
                                <Terminal className="w-6 h-6 text-primary-400" />
                            </motion.div>

                            {/* Floating decorative widget 2 */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -left-6 bottom-20 bg-card border border-card-border px-4 py-3 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 hidden sm:flex"
                            >
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                                <span className="text-sm font-bold text-foreground tracking-wide">5+ Yrs Exp</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
