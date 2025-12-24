"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const tiers = [
    {
        name: "Standard",
        price: "$99",
        description: "Perfect for initial profile strengthening.",
        features: ["Eligibility Radar Scan", "12-month Roadmap", "Evidence Vault", "Community Access"],
        buttonText: "Start Free Scan",
        highlight: false
    },
    {
        name: "Elite",
        price: "$299",
        description: "The complete OS for EB-1A success.",
        features: [
            "AI Drafting Copilot",
            "Priority RFE Analysis",
            "Authority Network Access",
            "Lawyer Review Workflow",
            "Unlimited Scans"
        ],
        buttonText: "Join Elite Tier",
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For BigTech, universities, and law firms.",
        features: [
            "White-labeled Dashboards",
            "Batch Profile Scanning",
            "API Access (MCP)",
            "Dedicated Technical Architect",
            "Custom AI Guardrails"
        ],
        buttonText: "Contact Sales",
        highlight: false
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-32 px-6 relative bg-[#020617]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        <Star size={12} className="fill-primary" />
                        Strategic Investment
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Choose Your <span className="text-gradient">Impact</span>.</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">Transparent, performance-driven pricing for global talent mobility.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className={`relative h-full flex flex-col glass-card border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] ${tier.highlight ? 'ring-2 ring-primary shadow-2xl shadow-primary/20 bg-primary/5' : ''}`}>
                                {tier.highlight && (
                                    <div className="absolute top-0 right-0 p-4">
                                        <Badge className="bg-primary text-white font-black px-3 py-1 text-[10px] uppercase tracking-widest rounded-lg">Most Popular</Badge>
                                    </div>
                                )}
                                <CardHeader className="p-8 pb-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        {tier.name === 'Elite' ? <Crown className="text-primary" size={24} /> : tier.name === 'Standard' ? <Zap className="text-amber-400" size={20} /> : <Shield className="text-white" size={20} />}
                                        <CardTitle className="text-2xl font-black">{tier.name}</CardTitle>
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-5xl font-black tracking-tight">{tier.price}</span>
                                        {tier.price !== 'Custom' && <span className="text-muted-foreground font-bold">/mo</span>}
                                    </div>
                                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                        {tier.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 flex-grow">
                                    <div className="h-px bg-white/5 mb-8" />
                                    <ul className="space-y-4">
                                        {tier.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                                                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                    <Check className="text-primary" size={12} strokeWidth={4} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-8 pt-0">
                                    <Button size="lg" className={`w-full h-14 rounded-2xl font-black text-lg transition-all group ${tier.highlight ? 'bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20' : 'bg-white/5 hover:bg-white/10 text-white border-white/10'}`}>
                                        {tier.buttonText}
                                        <motion.span className="ml-2 transition-transform group-hover:translate-x-1">→</motion.span>
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
