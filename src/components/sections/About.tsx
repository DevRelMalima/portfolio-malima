"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Cpu, Users } from "lucide-react";

const skills = [
    {
        icon: <Cloud className="w-6 h-6 text-primary-400" />,
        title: "Cloud Infrastructure",
        description: "Designing and maintaining scalable, high-availability cloud architectures using modern cloud providers."
    },
    {
        icon: <Cpu className="w-6 h-6 text-secondary-400" />,
        title: "AI Integration",
        description: "Implementing and orchestrating artificial intelligence models to solve real-world business challenges."
    },
    {
        icon: <Server className="w-6 h-6 text-accent-500" />,
        title: "Technical Support",
        description: "Over 5 years of experience diagnosing complex technical issues and providing robust engineering support."
    },
    {
        icon: <Users className="w-6 h-6 text-green-400" />,
        title: "Community Leadership",
        description: "Fostering tech communities and organizing impactful events as the GDG Ajah Organizer."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                    >
                        About <span className="text-primary-500">Me</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-foreground/80 leading-relaxed"
                    >
                        I am a passionate Cloud & AI Specialist with over 5 years of hands-on experience as a Technical Support Engineer across diverse technical domains.
                        My expertise lies in bridging the gap between complex infrastructure and scalable business solutions.
                        As a GDG Ajah Organizer, I am deeply committed to tech leadership and community building.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-card-border p-8 rounded-2xl hover:border-primary-500/50 transition-all duration-300 group shadow-lg hover:shadow-primary-500/10 hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Subtle hover background highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-background border border-card-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{skill.title}</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
