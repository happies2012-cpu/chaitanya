"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Decor */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8"
                >
                    <Zap size={14} className="fill-orange-500" />
                    Begin Your EB-1A Journey Today
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white"
                >
                    Simplifying Your <br /> <span className="text-orange-500">Green Card</span> Path.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    Embark on your EB-1A journey with a trusted team, endorsed by top U.S. immigration attorneys and 75+ successful immigrants.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/eligibility">
                        <Button size="lg" className="h-14 px-8 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-lg font-black shadow-xl shadow-orange-500/30 group">
                            Check Your Eligibility
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button size="lg" variant="outline" className="h-14 px-8 border-white/10 hover:bg-white/5 text-xl font-bold rounded-xl backdrop-blur-sm text-white">
                            Our Success Stories
                        </Button>
                    </Link>
                </motion.div>

                {/* Trust Signals */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white">75+</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Successful Cases</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white">100%</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Client Focus</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white">Top 5%</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Global Talent</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-white">Elite</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Legal Network</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
