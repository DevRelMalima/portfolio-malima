"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Speaking", href: "#speaking" },
        { name: "Certifications", href: "#certifications" },
        { name: "Blog", href: "#blog" },
        { name: "Resume", href: "#resume" },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-card-border shadow-sm shadow-black/20"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a
                            href="#"
                            onClick={(e) => handleScrollTo(e, 'body')}
                            className="font-bold text-2xl tracking-tighter text-foreground"
                        >
                            Samaila<span className="text-primary-500">.</span>
                        </a>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-primary-400 transition-colors"
                                onClick={(e) => handleScrollTo(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2.5 text-sm font-medium rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20"
                            onClick={(e) => handleScrollTo(e, '#contact')}
                        >
                            Let&apos;s Connect
                        </a>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground hover:text-primary-400 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-card-border absolute w-full left-0 top-16 shadow-xl">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary-400 hover:bg-card-border/50 rounded-lg transition-colors"
                                onClick={(e) => handleScrollTo(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block px-3 py-3 mt-4 text-center text-base font-medium bg-primary-600 text-white rounded-lg transition-colors shadow-md"
                            onClick={(e) => handleScrollTo(e, '#contact')}
                        >
                            Let&apos;s Connect
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
