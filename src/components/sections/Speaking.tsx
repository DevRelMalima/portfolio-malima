"use client";

import { motion } from "framer-motion";
import { Mic, MapPin, CalendarDays, ExternalLink } from "lucide-react";

const speakingEngagements = [
    {
        id: 1,
        event: "DevFest Lagos 2025",
        role: "Keynote Speaker",
        topic: "Scaling AI Workloads on Cloud-Native Infrastructure",
        date: "Dec 12, 2025",
        location: "Lagos, Nigeria",
        description: "Delivered the opening keynote on strategies for orchestrating LLM agents using Kubernetes and Serverless infrastructure.",
        link: "#"
    },
    {
        id: 2,
        event: "GDG Ajah - Cloud Onboard",
        role: "Lead Organizer & Instructor",
        topic: "Mastering Google Cloud Foundational Services",
        date: "Aug 20, 2025",
        location: "Ajah, Nigeria",
        description: "Organized a multi-day bootcamp helping 200+ developers get certified and started with modern cloud architecture.",
        link: "#"
    },
    {
        id: 3,
        event: "Decentralized Nigeria Conference",
        role: "Panelist",
        topic: "Securing African Wallets: Navigating Bridge Risks, Scams & Cross-Chain Vulnerabilities in a Multi-Chain World",
        date: "July 5, 2025",
        location: "Civic Center, Lagos, Nigeria",
        description: "A deep dive into the evolving landscape of digital asset security, highlighting the critical need for enhanced user education and robust infrastructure to mitigate risks associated with cross-chain bridges, smart contract exploits, and sophisticated phishing scams targeting African users.",
        link: "#"
    },
    {
        id: 4,
        event: "AI Innovators Meetup",
        role: "Speaker",
        topic: "From Notebooks to Production: Deploying ML Models",
        date: "Feb 28, 2025",
        location: "Lagos, Nigeria",
        description: "A technical deep dive into CI/CD pipelines for Machine Learning models using GitHub Actions and Vertex AI.",
        link: "https://www.coingabbar.com/en/event-details/decentralised-nigeria-conference-2025-lagos-crypto-event"
    }
];

export default function Speaking() {
    return (
        <section id="speaking" className="py-24 bg-card/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                    >
                        Speaking & <span className="text-primary-500">Community</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8 relative"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-foreground/80 leading-relaxed"
                    >
                        As a GDG Ajah Organizer and active community leader, I regularly share knowledge on Cloud Infrastructure, DevOps, and Artificial Intelligence.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent md:-translate-x-1/2 hidden sm:block" />

                    <div className="space-y-12 sm:space-y-0">
                        {speakingEngagements.map((engagement, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={engagement.id} className="relative sm:pb-24 last:pb-0">
                                    <div className={`sm:flex items-center justify-between w-full ${isEven ? 'sm:flex-row-reverse' : ''}`}>

                                        {/* Timeline Node Center */}
                                        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-card z-10 items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-primary-500 animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                                        </div>

                                        {/* Empty Space for alternate side layout */}
                                        <div className="hidden sm:block sm:w-5/12" />

                                        {/* Content Card */}
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="sm:w-5/12 bg-card border border-card-border p-6 rounded-2xl shadow-lg hover:border-primary-500/50 transition-colors group relative ml-12 sm:ml-0"
                                        >
                                            {/* Mobile Node */}
                                            <div className="sm:hidden absolute -left-12 top-6 w-8 h-8 rounded-full bg-background border-[3px] border-card z-10 flex items-center justify-center shadow-md">
                                                <div className="w-3 h-3 rounded-full bg-primary-500" />
                                            </div>

                                            {/* Mobile Vertical Line */}
                                            <div className="sm:hidden absolute -left-8 top-10 bottom-[-3rem] w-px bg-gradient-to-b from-primary-500 to-card-border last:to-transparent" />

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs font-semibold">
                                                    <Mic className="w-3 h-3 mr-1" />
                                                    {engagement.role}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                                                <a href={engagement.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                    {engagement.topic}
                                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            </h3>

                                            <div className="text-primary-300 font-medium mb-4">
                                                {engagement.event}
                                            </div>

                                            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                                                {engagement.description}
                                            </p>

                                            <div className="flex flex-col gap-2 text-sm text-foreground/50 border-t border-card-border/50 pt-4">
                                                <div className="flex items-center">
                                                    <CalendarDays className="w-4 h-4 mr-2 text-foreground/40" />
                                                    {engagement.date}
                                                </div>
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-2 text-foreground/40" />
                                                    {engagement.location}
                                                </div>
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Global Impact stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    <div className="bg-background rounded-2xl p-6 text-center border border-card-border">
                        <div className="text-3xl font-bold text-primary-400 mb-1">50+</div>
                        <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Events Organized</div>
                    </div>
                    <div className="bg-background rounded-2xl p-6 text-center border border-card-border">
                        <div className="text-3xl font-bold text-secondary-400 mb-1">20+</div>
                        <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Talks Given</div>
                    </div>
                    <div className="bg-background rounded-2xl p-6 text-center border border-card-border">
                        <div className="text-3xl font-bold text-accent-400 mb-1">5k+</div>
                        <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Developers Reached</div>
                    </div>
                    <div className="bg-background rounded-2xl p-6 text-center border border-card-border">
                        <div className="text-3xl font-bold text-primary-500 mb-1">100%</div>
                        <div className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">Community Driven</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
