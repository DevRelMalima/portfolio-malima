"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";

// Placeholder data for recent blog posts
const blogPosts = [
    {
        id: 1,
        title: "Orchestrating AI Agents on Kubenetes: A Practical Guide",
        excerpt: "Learn how to deploy, scale, and manage a swarm of LLM-powered autonomous agents using Kubernetes custom resource definitions.",
        date: "Oct 24, 2025",
        readTime: "8 min read",
        category: "Cloud & AI",
        slug: "#"
    },
    {
        id: 2,
        title: "Zero-Downtime Database Migrations in Production",
        excerpt: "A deep dive into strategies for migrating massive PostgreSQL databases without dropping a single user request.",
        date: "Sep 12, 2025",
        readTime: "12 min read",
        category: "Infrastructure",
        slug: "#"
    },
    {
        id: 3,
        title: "Building Community: Lessons from GDG Ajah",
        excerpt: "Insights and learnings from organizing one of the most vibrant developer communities in the region, and how to foster inclusive tech spaces.",
        date: "Jul 05, 2025",
        readTime: "6 min read",
        category: "Community",
        slug: "#"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                        >
                            Latest from the <span className="text-accent-500">Blog</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-6 relative left-0"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.2 }}
                            className="text-foreground/70 text-lg"
                        >
                            Thoughts, tutorials, and insights on cloud infrastructure, AI, and developer communities.
                        </motion.p>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 }}
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-card-border text-sm font-medium hover:bg-card-border/50 hover:text-accent-400 transition-all shadow-sm whitespace-nowrap"
                    >
                        Visit Full Blog
                        <BookOpen className="w-4 h-4" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-background rounded-2xl border border-card-border p-6 sm:p-8 hover:border-accent-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent-500/5 hover:-translate-y-1 relative"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500/0 via-accent-500/50 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center gap-3 text-xs font-medium mb-6">
                                <span className="px-3 py-1 bg-accent-500/10 text-accent-400 rounded-full">
                                    {post.category}
                                </span>
                                <div className="flex items-center text-foreground/50">
                                    <Calendar className="w-3.5 h-3.5 mr-1" />
                                    {post.date}
                                </div>
                                <div className="flex items-center text-foreground/50 ml-auto">
                                    <Clock className="w-3.5 h-3.5 mr-1" />
                                    {post.readTime}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-accent-400 transition-colors">
                                <a href={post.slug} className="before:absolute before:inset-0">
                                    {post.title}
                                </a>
                            </h3>

                            <p className="text-foreground/70 text-sm leading-relaxed mb-8 flex-1">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-center text-sm font-medium text-accent-500 group-hover:text-accent-400 transition-colors">
                                Read article
                                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
