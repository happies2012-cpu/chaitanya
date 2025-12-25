"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

import { useScroll, useTransform } from "framer-motion";

export const Hero = () => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 800], [0, 300]);
    const textY = useTransform(scrollY, [0, 800], [0, 100]);

    return (
        <section className="relative pt-64 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center bg-transparent">
            {/* Professional Background Imagery - Using the generated luxury banner */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-20 dark:opacity-30 brightness-[1.1] dark:brightness-[0.7]"
                    alt="Modern skyscraper architecture"
                />
            </motion.div>

            <motion.div
                style={{ y: textY }}
                className="max-w-7xl mx-auto text-center relative z-10 px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-orange-600/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_30px_rgba(249,115,22,0.1)] backdrop-blur-xl"
                >
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    75+ Technical Advisory Successes in the US
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    className="text-5xl md:text-7xl font-outfit font-black tracking-[-0.04em] mb-10 leading-[0.9] text-foreground uppercase pt-4"
                >
                    Elite <br /> <span className="text-gradient-orange">Talent</span> <br /> Advisory.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                    className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed font-inter font-medium tracking-tight opacity-80"
                >
                    Engineering Extraordinary EB-1A Petitions for Global Pioneers. <br className="hidden md:block" />
                    Where Data Science meets Immigration Intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link href="/eligibility">
                        <Button size="lg" className="h-16 px-12 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-black shadow-lg shadow-orange-500/20 group uppercase tracking-widest border-none transition-all hover:scale-105 active:scale-95">
                            Start Profile Scan
                            <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} size={20} />
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button size="lg" variant="outline" className="h-16 px-12 border-muted-foreground/20 hover:bg-orange-500/5 text-sm font-black rounded-xl backdrop-blur-md text-foreground uppercase tracking-widest transition-all hover:border-orange-500/50 group/btn">
                            Success Network
                        </Button>
                    </Link>
                </motion.div>

                {/* Trust Signals with High-Fidelity Profiles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="mt-40 pt-20 border-t border-muted-foreground/10"
                >
                    <div className="flex flex-wrap justify-center items-start gap-16 md:gap-32">
                        {[
                            { label: "Petitions Approved", val: "75+" },
                            { label: "Community", val: "Elite", hasProfiles: true },
                            { label: "Success Velocity", val: "100%" },
                            { label: "Legal Accuracy", val: "Gold", hasShield: true },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center group cursor-default"
                            >
                                {item.hasProfiles ? (
                                    <div className="flex -space-x-4 mb-4">
                                        {[1, 2, 3, 4].map((p) => (
                                            <motion.div
                                                key={p}
                                                whileHover={{ scale: 1.2, zIndex: 10, y: -5 }}
                                                className="w-12 h-12 rounded-2xl border-2 border-background bg-muted overflow-hidden shadow-2xl relative"
                                            >
                                                <img src={`https://i.pravatar.cc/150?img=${p + 20}`} alt="Success" className="w-full h-full object-cover" />
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : item.hasShield ? (
                                    <Shield className="text-orange-500 mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" size={40} />
                                ) : (
                                    <span className="text-6xl font-black text-foreground group-hover:text-orange-500 transition-colors tracking-tighter mb-2">{item.val}</span>
                                )}
                                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-black">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

