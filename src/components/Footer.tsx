import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-card border-t border-card-border relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                            Ready to <span className="text-gradient">build together?</span>
                        </h2>
                        <p className="text-foreground/70 mb-8 max-w-md text-lg">
                            Whether you need cloud infrastructure expertise, AI integration, or technical leadership for your next big project, let's talk.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:contact@example.com"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/25"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Say Hello
                            </a>
                            <a
                                href="#resume"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card-border text-foreground font-medium hover:bg-card-border/80 transition-colors"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-end">
                        <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-background border border-card-border flex items-center justify-center text-foreground hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-primary-500/20"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-background border border-card-border flex items-center justify-center text-foreground hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-primary-500/20"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-background border border-card-border flex items-center justify-center text-foreground hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-primary-500/20"
                                aria-label="Twitter / X"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-foreground/50 text-sm">
                        © {currentYear} Samaila Anthony Malima. All rights reserved.
                    </p>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-foreground/50 hover:text-primary-400 transition-colors"
                    >
                        Back to top <ArrowUp className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
