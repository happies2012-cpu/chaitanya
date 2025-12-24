"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, PenTool, BarChart3, Users, ShieldCheck, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        title: "Profile Assessment",
        description: "Initial evaluation of your extraordinary ability signals across 10 USCIS criteria to determine your baseline eligibility.",
        icon: <BrainCircuit className="text-orange-500" size={24} />,
        gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
        title: "Technical Strategy",
        description: "Defining your critical roadmap, identifying evidence gaps, and formulating the core narrative of your petition.",
        icon: <Cpu className="text-amber-500" size={24} />,
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        title: "Evidence Engineering",
        description: "Building the strongest possible case with verified documentation, elite reference letters, and expert briefs.",
        icon: <PenTool className="text-red-500" size={24} />,
        gradient: "from-red-500/20 to-orange-500/20"
    },
    {
        title: "Real-time Tracking",
        description: "Monitor your case health, document collection progress, and attorney actions through a transparent dashboard.",
        icon: <BarChart3 className="text-orange-500" size={24} />,
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Expert Network",
        description: "Connect with verified conference organizers, editors, and industry leaders to strengthen your authority profile.",
        icon: <Users className="text-amber-500" size={24} />,
        gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
        title: "Legal Success Vault",
        description: "Enterprise-grade security for your sensitive documents, shared securely with top U.S. immigration attorneys.",
        icon: <ShieldCheck className="text-emerald-500" size={24} />,
        gradient: "from-emerald-500/20 to-teal-500/20"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Stages of <span className="text-orange-500">EB-1A Success</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        A systematic engineering approach to securing your U.S. extraordinary ability petition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass-card hover:bg-white/5 transition-colors border-white/5 overflow-hidden group h-full">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <CardHeader className="relative z-10 pb-2">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
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
