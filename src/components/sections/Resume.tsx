"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

export default function Resume() {
    return (
        <section id="resume" className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-card border border-card-border rounded-3xl overflow-hidden shadow-2xl relative">

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left side: Content / CTA */}
                        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-card-border bg-gradient-to-br from-card to-background/50">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-semibold tracking-wide mb-6">
                                    <FileText className="w-4 h-4" />
                                    Curriculum Vitae
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                                    View my full <br /> <span className="text-gradient">Professional Setup</span>
                                </h2>

                                <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-md">
                                    Get a comprehensive overview of my experience in cloud infrastructure, AI integrations, technical support engineering, and community leadership over the past 5+ years.
                                </p>

                                <div className="space-y-4 mb-10 max-w-sm">
                                    {[
                                        "Detailed work history & accomplishments",
                                        "Complete DevOps & Cloud tech stack",
                                        "Certifications & Education",
                                        "Speaking & Volunteering experience"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/25 hover:-translate-y-1 w-full sm:w-auto text-center"
                                    >
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Resume
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/devrelmalima/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-background border border-card-border text-foreground font-semibold hover:bg-card hover:border-primary-500/50 transition-all hover:-translate-y-1 w-full sm:w-auto text-center"
                                    >
                                        View LinkedIn
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right side: Resume Preview Graphic */}
                        <div className="relative bg-background p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative w-full max-w-[340px] aspect-[1/1.4] bg-white rounded-lg shadow-2xl p-6 flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500"
                            >
                                {/* Simulated resume document structure */}
                                <div className="border-b-2 border-slate-200 pb-4 mb-4">
                                    <div className="h-6 w-3/4 bg-slate-800 rounded mb-2" />
                                    <div className="h-3 w-1/2 bg-slate-400 rounded" />
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div>
                                        <div className="h-4 w-1/3 bg-slate-300 rounded mb-2" />
                                        <div className="h-2 w-full bg-slate-200 rounded mb-1.5" />
                                        <div className="h-2 w-full bg-slate-200 rounded mb-1.5" />
                                        <div className="h-2 w-5/6 bg-slate-200 rounded" />
                                    </div>

                                    <div>
                                        <div className="h-4 w-1/3 bg-slate-300 rounded mb-2" />
                                        <div className="h-2 w-full bg-slate-200 rounded mb-1.5" />
                                        <div className="h-2 w-full bg-slate-200 rounded mb-1.5" />
                                        <div className="h-2 w-4/6 bg-slate-200 rounded" />
                                    </div>

                                    <div className="pt-2 border-t border-slate-100 mt-auto">
                                        <div className="flex gap-2 mb-2">
                                            <div className="h-3 w-12 bg-blue-100 rounded-full" />
                                            <div className="h-3 w-16 bg-blue-100 rounded-full" />
                                            <div className="h-3 w-14 bg-blue-100 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Overlay gradient to fade out bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent rounded-b-lg pointer-events-none" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded shadow-lg whitespace-nowrap">
                                    PREVIEW FILE
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
