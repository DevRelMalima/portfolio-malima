"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Server, Database, Container } from "lucide-react";

// Placeholder data for projects
const projects = [
    {
        id: 1,
        title: "Cloud Infrastructure Automation Stack",
        description: "A complete Terraform and Ansible automation suite for deploying high-availability microservices across AWS and GCP with zero downtime.",
        image: "/api/placeholder/600/400", // We will use placeholder imagery or CSS gradients if no image
        techStack: [
            { name: "Terraform", icon: <Server className="w-4 h-4" /> },
            { name: "Docker", icon: <Container className="w-4 h-4" /> },
            { name: "AWS", icon: <CloudIcon className="w-4 h-4" /> },
        ],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "AI Support Ticket Classifier",
        description: "An intelligent routing system that uses LLMs to automatically categorize, prioritize, and assign incoming technical support tickets.",
        image: "/api/placeholder/600/400",
        techStack: [
            { name: "Python", icon: <Code2 className="w-4 h-4" /> },
            { name: "OpenAI API", icon: <Server className="w-4 h-4" /> },
            { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        ],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "GDG Global Event Platform",
        description: "A scalable event management platform built for local GDG chapters to handle RSVPs, schedules, and real-time announcements.",
        image: "/api/placeholder/600/400",
        techStack: [
            { name: "Next.js", icon: <Code2 className="w-4 h-4" /> },
            { name: "Firebase", icon: <Database className="w-4 h-4" /> },
            { name: "Tailwind", icon: <Code2 className="w-4 h-4" /> },
        ],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "Serverless Analytics Pipeline",
        description: "A data pipeline using serverless functions and object storage to process and visualize telemetry data in near real-time.",
        image: "/api/placeholder/600/400",
        techStack: [
            { name: "Lambda", icon: <Server className="w-4 h-4" /> },
            { name: "S3", icon: <CloudIcon className="w-4 h-4" /> },
            { name: "Node.js", icon: <Code2 className="w-4 h-4" /> },
        ],
        liveUrl: "#",
        githubUrl: "#",
    }
];

// Helper icon
function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-card/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                        >
                            Featured <span className="text-secondary-500">Projects</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mb-6 relative left-0"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.2 }}
                            className="text-foreground/70 text-lg"
                        >
                            A selection of my recent work in cloud architecture, AI integration, and full-stack development.
                        </motion.p>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 }}
                        href="https://github.com/DevRelMalima"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary-400 transition-colors group whitespace-nowrap"
                    >
                        View all on GitHub
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-background rounded-2xl border border-card-border overflow-hidden hover:border-secondary-500/50 transition-all duration-300 shadow-lg hover:shadow-secondary-500/10 flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden bg-card-border/30">
                                {/* Fallback pattern for project image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-card to-background opacity-80" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center text-foreground/20">
                                    <Code2 className="w-24 h-24" />
                                </div>

                                {/* Uncomment when real images are available */}
                                {/* <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}

                                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors shadow-xl"
                                            aria-label="View Source code"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-secondary-500 hover:text-white transition-colors shadow-xl"
                                            aria-label="View Live Project"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/70 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-card-border/50">
                                    {project.techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md bg-card border border-card-border text-foreground/80"
                                        >
                                            <span className="text-primary-400">{tech.icon}</span>
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
