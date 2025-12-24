"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Professional Background Imagery - Using the generated luxury banner */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-20"
                    alt="Modern skyscraper architecture"
                />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-orange-600/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12 shadow-2xl backdrop-blur-md"
                >
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    Trusted by 75+ Global Tech Leaders in the US
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-[10rem] font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase"
                >
                    Defining <br /> <span className="text-orange-500">Extraordinary</span> <br /> Success.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed font-black uppercase tracking-tight opacity-80"
                >
                    Strategic Technical Advisory for the EB-1A Green Card. <br className="hidden md:block" />
                    Engineered for high-impact individuals who shape the future of American innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link href="/eligibility">
                        <Button size="lg" className="h-18 px-12 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xl font-black shadow-3xl shadow-orange-500/40 group uppercase tracking-widest border-none transition-all hover:scale-105 active:scale-95">
                            Run Eligibility Scan
                            <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button size="lg" variant="outline" className="h-18 px-12 border-white/10 hover:bg-white/5 text-xl font-black rounded-2xl backdrop-blur-md text-white uppercase tracking-widest transition-all">
                            View Expert Network
                            <Globe className="ml-4 text-orange-500" size={24} />
                        </Button>
                    </Link>
                </motion.div>

                {/* Trust Signals with Luxury Profiles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-32 pt-16 border-t border-white/5"
                >
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                        <div className="flex flex-col items-center group">
                            <span className="text-5xl font-black text-white group-hover:text-orange-500 transition-colors">75+</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black mt-2">Successful Petitions</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="flex -space-x-3 mb-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-white/10 overflow-hidden shadow-xl">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Success story" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-orange-600 flex items-center justify-center text-[10px] font-black text-white shadow-xl">
                                    +64
                                </div>
                            </div>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">Trusted Community</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <span className="text-5xl font-black text-white group-hover:text-orange-500 transition-colors">100%</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black mt-2">Success Velocity</span>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="flex items-center gap-3">
                                <Shield className="text-orange-500" size={32} />
                                <span className="text-3xl font-black text-white uppercase tracking-tighter">Gold Standard</span>
                            </div>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black mt-2">Legal Accuracy</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
