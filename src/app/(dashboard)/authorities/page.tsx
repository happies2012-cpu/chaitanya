"use client";

import React from "react";
import {
    Users,
    Search,
    MapPin,
    GraduationCap,
    Award,
    MessageSquare,
    Star,
    ShieldCheck,
    Zap,
    Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experts = [
    {
        name: "Dr. Elena Volkov",
        title: "Senior Editor, Nature AI",
        expertise: ["AI Ethics", "Machine Learning", "System Resilience"],
        location: "Stanford, CA",
        reputation: 98,
        impact: 450,
        matchedReason: "Published in your sub-niche (RAG Systems)."
    },
    {
        name: "Marc Henderson",
        title: "Organizing Chair, CVPR 2025",
        expertise: ["Computer Vision", "Hardware Acceleration"],
        location: "San Francisco, CA",
        reputation: 95,
        impact: 1200,
        matchedReason: "Active committee member for upcoming workshops."
    },
    {
        name: "Sarah Chen",
        title: "Director of IP, BigTech Corp",
        expertise: ["Patent Law", "Infrastructure Scale"],
        location: "Austin, TX",
        reputation: 92,
        impact: 85,
        matchedReason: "Successfully reviewed 15+ similar EB-1A briefs."
    }
];

export default function AuthoritiesPage() {
    return (
        <main className="min-h-screen bg-[#020617] pb-20 px-6 pt-10">
            <div className="max-w-7xl mx-auto space-y-10">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-orange-500/20 text-orange-400 border-none text-[10px] font-black tracking-widest uppercase">Expert Intelligence</Badge>
                            <Badge className="bg-amber-400/10 text-amber-500 border-none text-[10px] font-black tracking-widest uppercase">Reputation First</Badge>
                        </div>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tight">Expert <span className="text-orange-500">Network</span></h1>
                        <p className="text-muted-foreground max-w-xl font-medium">Connect with journals, editors, and peer reviewers to build authentic, high-impact signals for your EB-1A petition.</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                            <Input className="bg-white/5 border-white/5 pl-10 h-12 rounded-xl focus:border-orange-500/50 text-white" placeholder="Search expertise domains..." />
                        </div>
                        <Button size="icon" variant="outline" className="h-12 w-12 border-white/5 bg-white/5 rounded-xl">
                            <Filter size={20} className="text-orange-500" />
                        </Button>
                    </div>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Feed */}
                    <div className="lg:col-span-8 space-y-6">
                        {experts.map((expert, idx) => (
                            <Card key={idx} className="glass-card border-white/10 hover:border-orange-500/30 transition-all group overflow-hidden">
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-shrink-0 flex flex-col items-center gap-4">
                                            <Avatar className="h-24 w-24 border-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
                                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${expert.name}`} />
                                                <AvatarFallback>{expert.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col items-center">
                                                <div className="text-xl font-black text-white">{expert.reputation}%</div>
                                                <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Rep Score</div>
                                            </div>
                                        </div>

                                        <div className="flex-grow space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-2xl font-black text-white group-hover:text-orange-500 transition-colors uppercase tracking-tight">{expert.name}</h3>
                                                    <p className="text-muted-foreground font-medium">{expert.title}</p>
                                                </div>
                                                <Badge variant="outline" className="bg-white/5 border-white/5 text-[10px] font-black uppercase tracking-widest px-3 py-1">
                                                    <MapPin size={10} className="mr-1 inline" /> {expert.location}
                                                </Badge>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {expert.expertise.map((tag, tidx) => (
                                                    <Badge key={tidx} variant="secondary" className="bg-white/5 text-white/70 hover:bg-orange-500/20 hover:text-white transition-colors uppercase text-[9px] font-black tracking-widest">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-3">
                                                <Zap size={18} className="text-orange-500 fill-orange-500" />
                                                <p className="text-xs font-bold text-orange-400 leading-relaxed italic">
                                                    Match Reason: {expert.matchedReason}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="bg-white/[0.02] border-t border-white/5 p-6 flex justify-between items-center">
                                    <div className="flex gap-8">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-white tracking-widest">{expert.impact}k+</span>
                                            <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Citation Impact</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-white tracking-widest">4.9/5</span>
                                            <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Review Avg</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="ghost" className="text-muted-foreground hover:text-white font-black uppercase text-[10px] tracking-widest">View Profile</Button>
                                        <Button className="bg-orange-600 hover:bg-orange-700 text-white font-black uppercase text-[10px] tracking-widest px-6 h-10 rounded-xl shadow-lg shadow-orange-500/20">Request Intro</Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card className="glass-card border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent p-6">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-xl font-black flex items-center gap-2 uppercase tracking-tight">
                                    <Star className="text-orange-500" size={20} />
                                    Reputation Guard
                                </CardTitle>
                                <CardDescription className="text-xs font-medium text-muted-foreground uppercase tracking-wide">The Horizon Eb1 Network strictly enforces ethical matching.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <ShieldCheck size={20} className="text-emerald-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold">Identity Verified</div>
                                            <p className="text-[10px] text-muted-foreground">Every expert uses multi-factor identity verification via LinkedIn + Institutional Email.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Award size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold">Earned, Not Bought</div>
                                            <p className="text-[10px] text-muted-foreground">Introductions are based on objective sub-niche alignment, not paid priority.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-card border-white/10 p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Network Activity</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                {[
                                    "Elite post in 'AI Resilience' trending",
                                    "3 New Editors joined from Nature",
                                    "ICLR 2025 Matchmaking active"
                                ].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-white/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {text}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </main>
    );
}
