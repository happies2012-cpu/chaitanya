"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const Navbar = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5 backdrop-blur-md"
        >
            <Link href="/" className="flex items-center gap-4 group transition-all duration-300">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/20 group-hover:scale-105 transition-all duration-500">
                    <img
                        src="/logo.svg"
                        alt="Horizon EB1 Logo"
                        className="w-full h-full object-contain p-1"
                    />
                </div>
                <div className="flex flex-col -space-y-1.5 translate-y-0.5">
                    <span className="text-xl font-outfit font-black tracking-tighter text-foreground leading-none">Horizon<span className="text-orange-500">EB1</span></span>
                    <span className="text-[8px] font-inter font-bold text-muted-foreground tracking-[0.15em] uppercase opacity-50">Tech Advisors</span>
                </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10 text-[11px] font-inter font-bold text-muted-foreground uppercase tracking-[0.1em]">
                <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
                <Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link>
                <Link href="/process" className="hover:text-orange-500 transition-colors">Process</Link>
                <Link href="/eligibility" className="hover:text-orange-500 transition-colors">Eligibility Scan</Link>
            </div>

            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="rounded-xl hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>

                <Link href="/login" className="hidden sm:block">
                    <Button variant="ghost" className="text-foreground hover:text-orange-500 font-bold uppercase text-[11px] tracking-wider">Log in</Button>
                </Link>
                <Link href="/contact">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/20 font-black px-6 rounded-lg uppercase text-[11px] tracking-widest h-11">
                        Get Started
                    </Button>
                </Link>
            </div>
        </motion.nav>
    );
};
