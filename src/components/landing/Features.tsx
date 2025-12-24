"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, PenTool, BarChart3, Users, ShieldCheck, Cpu, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        title: "Criteria Ingestion",
        description: "Automated extraction of your professional footprint across 10 USCIS regulatory guidelines to establish your baseline Extraordinary Ability quotient.",
        icon: <BrainCircuit className="text-orange-500" size={28} />,
        gradient: "from-orange-600/20 to-transparent"
    },
    {
        title: "Matter of Dhanasar Strategy",
        description: "Deep engineering of your 'Proposed Endeavor' to meet the three-prong test: Substantial Merit, National Importance, and Case-Specific Urgency.",
        icon: <Cpu className="text-orange-500" size={28} />,
        gradient: "from-orange-600/20 to-transparent"
    },
    {
        title: "Evidence Orchestration",
        description: "High-fidelity documentation hardening, including Expert Opinion Letters from Tier-1 IEEE/ACM fellows and Fortune 500 executives.",
        icon: <ShieldCheck className="text-orange-500" size={28} />,
        gradient: "from-orange-600/20 to-transparent"
    },
    {
        title: "Final Merits Determination",
        description: "Pre-filing 'Officer Mode' simulation to ensure your profile withstands the Kazarian two-part adjudicative standard with zero ambiguity.",
        icon: <BarChart3 className="text-orange-500" size={28} />,
        gradient: "from-orange-600/20 to-transparent"
    },
    {
        title: "Expert Network Access",
        description: "Direct connectivity with journal editors, conference chairs, and industry pioneers to generate authentic, high-impact signals of national acclaim.",
        icon: <Users className="text-orange-500" size={28} />,
        gradient: "from-orange-600/20 to-transparent"
    },
    {
        title: "Adjudication Intelligence",
        description: "Transparent real-time tracking of USCIS processing velocities and RFE trends across specific service centers (Texas vs. Nebraska).",
        icon: <Globe className="text-orange-500" size={28} />,
        gradient: "from-orange-600/20 to-transparent"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-32 px-6 relative bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-5xl md:text-[5.5rem] font-black mb-8 uppercase tracking-tighter leading-[0.85]">The <span className="text-orange-500">Engineering</span> <br /> Standard.</h2>
                        <p className="text-muted-foreground text-xl font-black uppercase tracking-tight opacity-60">
                            Immigration is no longer just a legal process; it's a data-driven strategy for global mobility.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-end gap-3 text-right"
                    >
                        <div className="text-orange-500 font-black text-xs uppercase tracking-[0.6em] flex items-center gap-2">
                            <ShieldCheck size={14} /> USCIS 2025 COMPLIANT
                        </div>
                        <div className="h-1 w-48 bg-gradient-to-l from-orange-500 to-transparent rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)]" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <Card className="glass-card hover:border-orange-500/50 transition-all duration-500 border-white/5 overflow-hidden group h-full relative cursor-pointer bg-white/[0.01] hover:bg-white/[0.03] shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                                <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500/10 rounded-bl-3xl transform translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 border-l border-b border-orange-500/20" />

                                <CardHeader className="p-10 pb-6 relative z-10">
                                    <div className="w-18 h-18 rounded-[2rem] bg-orange-500/5 flex items-center justify-center mb-10 group-hover:bg-orange-600/20 transition-all duration-500 border border-orange-500/10 group-hover:rotate-[15deg] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-orange-500 transition-colors leading-none">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-10 pt-0 relative z-10">
                                    <CardDescription className="text-muted-foreground leading-relaxed text-sm font-black uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500/0 group-hover:bg-orange-500/40 transition-all duration-500" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


