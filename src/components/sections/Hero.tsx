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
                            Hi, I'm{" "}
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
                        className="flex-1 w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative aspect-square md:aspect-video lg:aspect-square bg-card rounded-2xl border border-card-border overflow-hidden shadow-2xl">
                            <div className="absolute inset-x-0 top-0 h-10 bg-card-border/50 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="p-6 pt-16 h-full flex flex-col font-mono text-sm sm:text-base text-foreground/80 overflow-hidden">
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal className="w-4 h-4 text-primary-400" />
                                    <span className="text-secondary-400 font-bold">samuelmalima09@gmail.com</span>
                                    <span>~ $ whoami</span>
                                </div>
                                <div className="mb-4 text-primary-300">samaila_anthony_malima</div>

                                <div className="flex items-center gap-2 mb-2 break-all">
                                    <Terminal className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                    <span className="text-secondary-400 font-bold">samuelmalima09@gmail.com</span>
                                    <span>~ $ curl http://localhost/skills</span>
                                </div>
                                <div className="text-green-400 mb-4 whitespace-pre-wrap">
                                    {`{\n  "role": "Cloud & AI Specialist",\n  "community": "GDG Ajah Organizer",\n  "experience": "5+ years",\n  "focus": [\n    "DevOps",\n    "AI Integration",\n    "Cloud Infrastructure"\n  ]\n}`}
                                </div>

                                <div className="flex items-center gap-2 animate-pulse mt-auto">
                                    <Terminal className="w-4 h-4 text-primary-400" />
                                    <div className="w-2.5 h-4 bg-foreground/60" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
