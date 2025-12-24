"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, PenTool, BarChart3, Users, ShieldCheck, Cpu } from "lucide-react";
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
        <section id="features" className="py-32 px-6 relative bg-[#020617]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-[1.1]">The <span className="text-orange-500">Engineering</span> Standard.</h2>
                        <p className="text-muted-foreground text-xl font-black uppercase tracking-tight opacity-60">
                            Immigration is no longer just a legal process; it's a data-driven strategy for global mobility.
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                        <div className="text-orange-500 font-black text-xs uppercase tracking-[0.4em]">USCIS 2025 COMPLIANT</div>
                        <div className="h-0.5 w-32 bg-orange-500" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <Card className="glass-card hover:border-orange-500/30 transition-all duration-500 border-white/5 overflow-hidden group h-full relative cursor-default">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                                <CardHeader className="p-8 pb-4 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange-600/10 transition-all duration-500 border border-white/5 group-hover:border-orange-500/30">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 relative z-10">
                                    <CardDescription className="text-muted-foreground leading-relaxed text-sm font-medium">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
