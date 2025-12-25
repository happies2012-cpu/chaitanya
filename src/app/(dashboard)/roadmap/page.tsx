"use client";

import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { motion } from "framer-motion";
import {
    Calendar,
    ChevronRight,
    Plus,
    TrendingUp,
    Target,
    Milestone,
    CheckCircle2,
    Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const roadmapItems = [
    {
        month: "Month 1-3", tasks: [
            { title: "Keynote at Tier 1 Conference", status: "in-progress", effort: "High", weight: "Critical" },
            { title: "Secure 2 Major Press Mentions", status: "todo", effort: "Medium", weight: "Essential" }
        ]
    },
    {
        month: "Month 4-6", tasks: [
            { title: "Technical Advisory for AI Startup", status: "todo", effort: "Medium", weight: "Strategic" },
            { title: "National Award Nomination", status: "todo", effort: "High", weight: "Premium" }
        ]
    },
    {
        month: "Month 7-12", tasks: [
            { title: "Submit 2 Peer-Reviewed Papers", status: "locked", effort: "High", weight: "Sustained" },
            { title: "Judging Role for ACM/IEEE", status: "locked", effort: "Low", weight: "Verification" }
        ]
    }
];

const projectionData = [
    { month: 'Start', prob: 32 },
    { month: 'Month 3', prob: 45 },
    { month: 'Month 6', prob: 68 },
    { month: 'Month 9', prob: 84 },
    { month: 'Target', prob: 96 },
];

export default function RoadmapPage() {
    return (
        <main className="min-h-screen pb-32 px-6 pt-12 relative overflow-hidden bg-transparent">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                {/* Executive Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">Case Velocity: High</Badge>
                            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-black uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Optimal Filing Window Open
                            </div>
                        </div>
                        <h1 className="text-[28px] font-outfit font-black text-foreground uppercase tracking-tight leading-none mb-2 pt-4">
                            Success <span className="text-orange-500">Timeline</span>
                        </h1>
                        <p className="max-w-2xl text-muted-foreground font-black uppercase tracking-widest text-xs opacity-60">
                            12-Month Strategic Evidence Engineering & Authority Mapping
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-[0.2em] h-14 px-8 rounded-2xl transition-all">
                            <Calendar size={18} className="mr-2 text-orange-500" /> Calendar Sync
                        </Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-black uppercase tracking-[0.2em] h-14 px-10 rounded-2xl shadow-3xl shadow-orange-500/30 border-none transition-all hover:scale-105">
                            Add Objective <Plus size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Probability Projection Chart (Simulated with div blocks for premium feel) */}
                <Card className="glass-card border-white/5 p-12 overflow-hidden shadow-3xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30" />
                    <div className="flex items-start justify-between mb-12">
                        <div>
                            <h2 className="text-[20px] font-outfit font-black text-foreground uppercase tracking-tight mb-1">Approval Probability Projection</h2>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-60">Calculated based on 15.2k similar tech cases</p>
                        </div>
                        <div className="text-right">
                            <div className="text-5xl font-black text-orange-500 tracking-tighter leading-none">96.4%</div>
                            <div className="text-[9px] text-white/40 uppercase tracking-widest font-black mt-2">Target Strength</div>
                        </div>
                    </div>
                    <div className="flex items-end justify-between h-48 gap-4 px-4">
                        {projectionData.map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                <div className="relative w-full flex flex-col items-center">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${d.prob * 1.5}px` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className={cn(
                                            "w-full max-w-[60px] rounded-t-xl transition-all duration-500 relative group-hover:scale-110 shadow-2xl shadow-orange-500/10",
                                            d.month === 'Target' ? "bg-orange-600" : "bg-white/10 group-hover:bg-white/20"
                                        )}
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            {d.prob}%
                                        </div>
                                    </motion.div>
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{d.month}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        {roadmapItems.map((period, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-[2rem] bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                        <span className="text-orange-500 font-black text-lg">0{idx + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-outfit font-black text-foreground uppercase tracking-tight leading-none mb-2">{period.month}</h3>
                                        <div className="h-px bg-gradient-to-r from-orange-500/20 to-transparent w-full" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {period.tasks.map((task, tidx) => (
                                        <motion.div
                                            key={tidx}
                                            whileHover={{ y: -5 }}
                                            className={cn(
                                                "p-8 rounded-[2.5rem] glass-card border-white/5 transition-all cursor-pointer group relative overflow-hidden",
                                                task.status === 'locked' ? 'opacity-40' : 'hover:border-orange-500/30'
                                            )}
                                        >
                                            {task.status === 'in-progress' && (
                                                <div className="absolute top-0 right-10 h-8 w-1 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                                            )}

                                            <div className="flex justify-between items-start mb-8">
                                                <div className={cn(
                                                    "p-4 rounded-2xl transition-colors",
                                                    task.status === 'in-progress' ? 'bg-orange-500' : 'bg-white/5'
                                                )}>
                                                    {task.status === 'in-progress' ? <TrendingUp size={24} className="text-white" /> : <Target size={24} className="text-white/40" />}
                                                </div>
                                                <Badge variant="outline" className="text-[8px] uppercase tracking-[0.2em] font-black border-white/10 text-white/30 px-3 py-1">PRONG: {task.weight}</Badge>
                                            </div>

                                            <h4 className="font-black text-white text-xl mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight leading-none group-hover:scale-[1.02] origin-left">
                                                {task.title}
                                            </h4>

                                            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
                                                <div className="flex items-center gap-3 text-[10px] text-white/40 font-black uppercase tracking-widest">
                                                    <div className={cn("w-2 h-2 rounded-full", task.effort === 'High' ? 'bg-rose-500' : 'bg-emerald-500')} />
                                                    {task.effort} Effort
                                                </div>
                                                <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
                                                    Details <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-4 space-y-10">
                        {/* Intelligence Feed */}
                        <Card className="glass-card border-white/5 p-10 bg-orange-600/5 shadow-3xl ring-1 ring-orange-500/20">
                            <CardHeader className="p-0 mb-8">
                                <CardTitle className="text-xs font-black flex items-center gap-3 text-orange-500 uppercase tracking-[0.3em]">
                                    <Target size={16} />
                                    Strategic Focus
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-8">
                                <div className="space-y-4">
                                    <div className="text-5xl font-black text-white tracking-tighter">95%</div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                                            <span>Current Strength</span>
                                            <span>45%</span>
                                        </div>
                                        <Progress value={45} className="h-1.5 bg-white/5 indicator-orange shadow-inner" />
                                    </div>
                                    <p className="text-[11px] text-muted-foreground font-black uppercase tracking-tight leading-relaxed opacity-60">
                                        Increase focus on <span className="text-white">Judging Criteria</span> to reach filing readiness by Month 9.
                                    </p>
                                </div>
                                <Button className="w-full h-14 bg-white text-black hover:bg-white/90 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl border-none">Update Objectives</Button>
                            </CardContent>
                        </Card>

                        {/* Authority Feed */}
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 flex items-center justify-between">
                                Authority Map
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                                    <span className="text-orange-500">Live</span>
                                </div>
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { name: "TechCrunch Editor", type: "Media Hub", status: "Negotiating", icon: <MessageSquare size={14} /> },
                                    { name: "NeurIPS 2025 Chair", type: "Academy", status: "Target Found", icon: <Target size={14} /> },
                                    { name: "MIT AI Lab Lead", type: "Direct Expert", status: "Connected", icon: <CheckCircle2 size={14} /> }
                                ].map((conn, cidx) => (
                                    <div key={cidx} className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                                                {conn.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs font-black text-white uppercase tracking-tight leading-none mb-1">{conn.name}</div>
                                                <div className="text-[9px] text-white/40 font-black uppercase tracking-widest">{conn.type}</div>
                                            </div>
                                        </div>
                                        <Badge className={cn(
                                            "text-[8px] border-none font-black uppercase tracking-widest px-2.5",
                                            conn.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'
                                        )}>
                                            {conn.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" className="w-full h-14 text-[10px] text-orange-500 font-black uppercase tracking-[0.3em] hover:bg-orange-500/5 rounded-2xl border border-dashed border-orange-500/20">Expand Intelligence Network</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}

import { MessageSquare, ArrowUpRight } from "lucide-react";

