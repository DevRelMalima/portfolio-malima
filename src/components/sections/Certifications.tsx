"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

// Placeholder data for certifications
const certifications = [
    {
        id: 1,
        title: "Google Cloud Certified - Professional Cloud Architect",
        issuer: "Google Cloud",
        date: "2024",
        image: "/api/placeholder/400/300", // Will be replaced by actual certificate images
        link: "#"
    },
    {
        id: 2,
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "2023",
        image: "/api/placeholder/400/300",
        link: "#"
    },
    {
        id: 3,
        title: "Certified Kubernetes Administrator (CKA)",
        issuer: "Cloud Native Computing Foundation",
        date: "2023",
        image: "/api/placeholder/400/300",
        link: "#"
    },
    {
        id: 4,
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        date: "2022",
        image: "/api/placeholder/400/300",
        link: "#"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative background element */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                    >
                        Licenses & <span className="text-primary-500">Certifications</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6 relative"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-lg"
                    >
                        Validated expertise across major cloud providers and enterprise technologies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-card border border-card-border rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary-500/10 flex flex-col"
                        >
                            {/* Image Container with Hover zoom */}
                            <div className="relative aspect-[4/3] bg-card-border/30 overflow-hidden">
                                {/* Fallback pattern while waiting for images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-card to-background opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center text-foreground/20">
                                    <Award className="w-16 h-16" />
                                </div>

                                {/* Uncomment or supply actual src when images are uploaded (e.g., /certs/gcp.png) */}
                                {/* <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                /> */}

                                {/* Hover overlay for link */}
                                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                                        aria-label="View Credential"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1 relative z-10 bg-card">
                                <div className="flex items-center gap-2 text-xs font-semibold text-primary-400 mb-2">
                                    <Award className="w-3.5 h-3.5" />
                                    {cert.issuer}
                                </div>
                                <h3 className="text-base font-bold mb-3 leading-snug group-hover:text-primary-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="mt-auto text-sm text-foreground/50 font-medium pt-4 border-t border-card-border/50">
                                    Issued: {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
