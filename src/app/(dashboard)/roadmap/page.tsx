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

export default function RoadmapPage() {
    return (
        <main className="min-h-screen pb-20 px-6 pt-10">
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black text-white uppercase tracking-tight">Evidence Builder <span className="text-orange-500">Workspace</span></h1>
                        <p className="text-muted-foreground font-medium">Your 12-month strategic roadmap to extraordinary ability status.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="border-white/5 bg-white/5 text-xs font-black uppercase tracking-widest text-white h-11 px-6">Export Calendar</Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-widest h-11 px-8 shadow-xl shadow-orange-500/20">Add Task <Plus size={16} className="ml-2" /></Button>
                    </div>
                </div>

                <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-8">
                        {roadmapItems.map((period, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Badge className="bg-white/10 text-white font-black text-[10px] uppercase tracking-widest h-8 px-5 border-none rounded-lg">{period.month}</Badge>
                                    <div className="h-px bg-white/5 flex-1" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {period.tasks.map((task, tidx) => (
                                        <Card key={tidx} className={`glass-card border-white/10 hover:border-orange-500/30 transition-all cursor-pointer group ${task.status === 'locked' ? 'opacity-50 grayscale' : ''}`}>
                                            <CardContent className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`p-2 rounded-lg bg-orange-500/10 ${task.status === 'in-progress' ? 'text-orange-500' : 'text-muted-foreground'}`}>
                                                        {task.status === 'in-progress' ? <TrendingUp size={20} /> : <Target size={20} />}
                                                    </div>
                                                    <Badge variant="outline" className="text-[9px] uppercase tracking-widest font-black border-white/10 text-white/40">{task.effort} Effort</Badge>
                                                </div>
                                                <h4 className="font-black text-white text-lg mb-2 group-hover:text-orange-500 transition-colors uppercase tracking-tight leading-tight">{task.title}</h4>
                                                <div className="flex items-center justify-between mt-6">
                                                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                                                        <Milestone size={14} className="text-orange-500" />
                                                        {task.weight} Impact
                                                    </div>
                                                    {task.status === 'in-progress' ? (
                                                        <div className="flex items-center gap-2 text-[10px] font-black text-orange-500 uppercase animate-pulse tracking-widest">
                                                            <Clock size={12} /> Live Tracking
                                                        </div>
                                                    ) : (
                                                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                            {task.status === 'locked' ? 'Locked' : 'Available'}
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6">
                        <Card className="glass-card border-white/10 bg-gradient-to-br from-orange-500/10 to-transparent">
                            <CardHeader>
                                <CardTitle className="text-lg font-black flex items-center gap-2 text-white uppercase tracking-tight">
                                    <Target className="text-orange-500" size={18} />
                                    Goal Target
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-4xl font-black text-white">95%</span>
                                    <span className="text-[10px] text-orange-400 font-black uppercase tracking-widest">PROBABILITY</span>
                                </div>
                                <Progress value={45} className="h-2 bg-white/5" />
                                <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">You are currently at 45% of your target profile strength.</p>
                            </CardContent>
                        </Card>

                        <Card className="glass-card border-white/10">
                            <CardHeader>
                                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Authority Connections</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { name: "TechCrunch Editor", type: "Media", status: "Requested" },
                                    { name: "ICLR 2025 Chair", type: "Journal", status: "Available" }
                                ].map((conn, cidx) => (
                                    <div key={cidx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-xs font-bold text-white/80">{conn.name}</div>
                                        <Badge className="text-[8px] bg-orange-500/20 text-orange-400 border-none font-black uppercase tracking-widest">{conn.status}</Badge>
                                    </div>
                                ))}
                                <Button variant="ghost" className="w-full text-[10px] text-orange-500 font-black uppercase tracking-widest hover:bg-orange-500/10">Open Authority Network</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </main>
    );
}
