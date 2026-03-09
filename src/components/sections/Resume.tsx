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
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative w-full max-w-[400px] aspect-[1/1.4] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col group"
                            >
                                <object
                                    data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitV"
                                    type="application/pdf"
                                    className="w-full h-full"
                                >
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-card p-6 text-center border-t border-card-border">
                                        <p className="text-foreground/70 mb-4">Preview not available in this browser.</p>
                                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 transition-colors">
                                            Open Resume
                                        </a>
                                    </div>
                                </object>

                                {/* Overlay gradient to fade out bottom and prevent scroll trapping */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
