"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const tiers = [
    {
        name: "Ascent",
        price: "$1,450",
        description: "Initial profile hardening for future EB-1A eligibility.",
        features: [
            "Eligibility Radar Scan",
            "Kazarian Readiness Map",
            "Evidence Vault (10GB)",
            "Community Advisory access",
            "Quarterly Profile Review"
        ],
        buttonText: "Begin Ascent",
        highlight: false
    },
    {
        name: "Summit Elite",
        price: "$4,800",
        description: "The complete engineering OS for EB-1A success.",
        features: [
            "AI Drafting Architect",
            "Matter of Dhanasar Strategy",
            "Expert Network Referrals",
            "Final Merits Simulation",
            "Unlimited Case Tracking",
            "Priority Support"
        ],
        buttonText: "Join Elite Summit",
        highlight: true
    },
    {
        name: "Enterprise Global",
        price: "Custom",
        description: "For BigTech, universities, and technical law firms.",
        features: [
            "White-labeled Infrastructure",
            "Batch Ingestion protocol",
            "API Access (MCP)",
            "Dedicated Case Manager",
            "USCIS Center trend alerts",
            "Custom Security Guardrails"
        ],
        buttonText: "Inquire Now",
        highlight: false
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-40 px-6 relative bg-[#020617]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-orange-600/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl backdrop-blur-md"
                    >
                        <Star size={14} className="fill-orange-500" />
                        Mobility Investment Strategy
                    </motion.div>
                    <h2 className="text-6xl md:text-[8rem] font-black mb-10 tracking-tighter leading-[0.8] uppercase">The Value of <br /> <span className="text-orange-500">Certainty</span>.</h2>
                    <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-black uppercase tracking-tight opacity-60">Transparent, outcome-driven structures for extraordinary technical talent.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className={`relative h-full flex flex-col glass-card border-white/5 overflow-hidden transition-all duration-700 hover:scale-[1.03] group ${tier.highlight ? 'ring-2 ring-orange-500/50 shadow-[0_32px_64px_-16px_rgba(249,115,22,0.2)] bg-orange-500/[0.03]' : ''}`}>
                                {tier.highlight && (
                                    <div className="absolute top-0 right-0 p-6">
                                        <Badge className="bg-orange-600 text-white font-black px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] rounded-lg shadow-xl shadow-orange-500/20">PREMIUM SELECTION</Badge>
                                    </div>
                                )}
                                <CardHeader className="p-10 pb-6">
                                    <div className="flex items-center gap-3 mb-6 transition-transform group-hover:translate-x-1">
                                        {tier.name.includes('Summit') ? <Crown className="text-orange-500" size={32} /> : tier.name === 'Ascent' ? <Zap className="text-orange-500" size={28} /> : <Shield className="text-orange-500" size={28} />}
                                        <CardTitle className="text-3xl font-black text-white uppercase tracking-tight">{tier.name}</CardTitle>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-6xl font-black tracking-tighter text-white">{tier.price}</span>
                                        {tier.price !== 'Custom' && <span className="text-muted-foreground font-black uppercase text-xs tracking-[0.2em]">one-time initiation</span>}
                                    </div>
                                    <CardDescription className="text-muted-foreground text-sm leading-relaxed font-medium">
                                        {tier.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-10 pt-4 flex-grow">
                                    <div className="h-px bg-white/5 mb-10 group-hover:bg-orange-500/20 transition-colors" />
                                    <ul className="space-y-5">
                                        {tier.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-white/70">
                                                <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                                    <Check className="text-orange-500" size={14} strokeWidth={4} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-10 pt-0">
                                    <Button size="lg" className={`w-full h-16 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all group/btn border-none ${tier.highlight ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-2xl shadow-orange-500/30' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                                        {tier.buttonText}
                                        <motion.span className="ml-3 transition-transform group-hover/btn:translate-x-2">→</motion.span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>
        {children}
    </span>
);
