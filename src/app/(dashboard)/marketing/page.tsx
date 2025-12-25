"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { motion } from "framer-motion";
import {
    Megaphone,
    Share2,
    TrendingUp,
    BarChart,
    Linkedin,
    Twitter,
    Globe,
    Cpu,
    Send,
    Zap,
    Sparkles,
    RefreshCw,
    Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function MarketingPage() {
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePost = () => {
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 2000);
    };

    return (
        <main className="min-h-screen pb-20 px-6 pt-10 bg-[#020617] bg-mesh">

            <div className="max-w-7xl mx-auto space-y-10">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-orange-500/20 text-orange-400 border-none text-[10px] font-black tracking-widest uppercase">Growth Agent v2.5</Badge>
                            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase animate-pulse">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Live Network Analysis
                            </div>
                        </div>
                        <h1 className="text-[28px] font-outfit font-black text-foreground uppercase tracking-tight leading-none mb-2">
                            Authority <span className="text-orange-500">Amplifier</span>
                        </h1>
                        <p className="text-muted-foreground max-w-xl font-medium">Automate your professional narrative. We use AI to identify, draft, and schedule high-impact signals that USCIS officers value in extraordinary ability petitions.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="border-white/5 bg-white/5 hover:bg-white/10 text-white font-black h-12 px-6 rounded-xl uppercase tracking-widest text-[10px]">
                            History
                        </Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-500/20 h-12 px-8 rounded-xl font-black group uppercase tracking-widest text-[10px]">
                            Deploy Agent <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-8">
                        <Card className="glass-card border-white/10 overflow-hidden">
                            <Tabs defaultValue="linkedin" className="w-full">
                                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                    <TabsList className="bg-white/5 rounded-xl p-1 gap-1">
                                        <TabsTrigger value="linkedin" className="rounded-lg gap-2 text-[10px] font-black uppercase tracking-widest px-6 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                                            <Linkedin size={14} /> LinkedIn
                                        </TabsTrigger>
                                        <TabsTrigger value="twitter" className="rounded-lg gap-2 text-[10px] font-black uppercase tracking-widest px-6 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                                            <Twitter size={14} /> Twitter/X
                                        </TabsTrigger>
                                        <TabsTrigger value="article" className="rounded-lg gap-2 text-[10px] font-black uppercase tracking-widest px-6 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                                            <Globe size={14} /> Blog
                                        </TabsTrigger>
                                    </TabsList>
                                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-orange-500 gap-2 font-black uppercase text-[10px] tracking-widest">
                                        <RefreshCw size={14} /> Refresh Suggestions
                                    </Button>
                                </div>

                                <TabsContent value="linkedin" className="p-8 space-y-6">
                                    <div className="space-y-4">
                                        <h2 className="text-[20px] font-outfit font-black flex items-center gap-2 uppercase tracking-tight text-white mb-4">
                                            <Sparkles className="text-orange-500" size={18} />
                                            AI Thought Leadership Suggestion
                                        </h2>
                                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div className="flex gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                                        <Cpu className="text-orange-500" size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-black text-white uppercase tracking-tight">Narrative: Technical Leadership</div>
                                                        <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Medium Impact Signal</div>
                                                    </div>
                                                </div>
                                                <Badge variant="outline" className="border-orange-500/20 text-orange-400 bg-orange-500/5 uppercase text-[10px] font-black">Optimized for EB-1A</Badge>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed font-medium">
                                                "Just completed a major overhaul of our global infra. Scalability is not just about servers, it's about the people and systems that support them. We grew from 1M to 10M users with zero downtime..."
                                            </p>
                                            <div className="flex gap-2">
                                                <Button onClick={generatePost} className="bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl flex-1 shadow-lg shadow-orange-500/20 uppercase tracking-widest text-[11px]">
                                                    {isGenerating ? <RefreshCw className="animate-spin mr-2" size={16} /> : <Zap size={16} className="mr-2 fill-white" />}
                                                    Refine & Draft Post
                                                </Button>
                                                <Button variant="outline" className="border-white/5 bg-white/5 font-black rounded-xl text-white uppercase tracking-widest text-[11px]">Edit</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2">
                                            <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                <BarChart size={14} className="text-orange-500" /> Target Audience
                                            </div>
                                            <div className="text-sm font-black text-white uppercase tracking-tight">CTOs, Senior Engineers, Policy Makers</div>
                                        </div>
                                        <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] space-y-2">
                                            <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                <Megaphone size={14} className="text-amber-500" /> Goal
                                            </div>
                                            <div className="text-sm font-black text-white uppercase tracking-tight">Establish "Critical Role" authority signal</div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="glass-card border-white/10 p-6">
                                <CardHeader className="p-0 mb-4">
                                    <h2 className="text-[20px] font-outfit font-black flex items-center gap-2 uppercase tracking-tight text-white">
                                        <TrendingUp className="text-orange-500" size={20} />
                                        Impact Analytics
                                    </h2>
                                </CardHeader>
                                <CardContent className="p-0 space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            <span>Narrative Strength</span>
                                            <span className="text-white">85%</span>
                                        </div>
                                        <Progress value={85} className="h-2 bg-white/5" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            <span>Authority Signal Density</span>
                                            <span className="text-white">62%</span>
                                        </div>
                                        <Progress value={62} className="h-2 bg-white/5" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="glass-card border-white/10 p-6">
                                <CardHeader className="p-0 mb-4">
                                    <h2 className="text-[20px] font-outfit font-black flex items-center gap-2 uppercase tracking-tight text-white">
                                        <Share2 className="text-emerald-400" size={20} />
                                        Social Connectivity
                                    </h2>
                                </CardHeader>
                                <CardContent className="p-0 space-y-4">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Linkedin className="text-primary" size={18} />
                                            <span className="text-xs font-bold">@chaitanya_dev</span>
                                        </div>
                                        <Badge className="bg-emerald-500/10 text-emerald-400 border-none px-2 py-0.5 text-[10px] font-black uppercase">Connected</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 opacity-50">
                                        <div className="flex items-center gap-3">
                                            <Twitter className="text-sky-400" size={18} />
                                            <span className="text-xs font-bold">Not Connected</span>
                                        </div>
                                        <Button size="sm" variant="ghost" className="h-6 text-[10px] font-black uppercase text-primary p-0">Connect</Button>
                                    </div>
                                    <Button size="sm" className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border-white/5 h-10 uppercase text-[10px] tracking-widest">
                                        <Plus size={14} className="mr-1" /> Add Platform
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card className="glass-card border-white/10 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
                            <CardHeader className="p-0 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center mb-4 shadow-xl shadow-orange-500/30">
                                    <Zap className="text-white fill-white" size={24} />
                                </div>
                                <h1 className="text-[24px] font-outfit font-black uppercase tracking-tight text-foreground">Advisory <span className="text-orange-500">Auto-Pilot</span></h1>
                                <p className="text-muted-foreground font-medium leading-relaxed opacity-60">Let horizoneb1techadvisors build your extraordinary authority while you focus on your core work.</p>
                            </CardHeader>
                            <CardContent className="p-0 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-bold text-white">Posting Frequency</div>
                                        <Badge className="bg-white/10 text-white border-none">3x / Week</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-bold text-white">Engagement AI</div>
                                        <Badge className="bg-emerald-500/10 text-emerald-400 border-none uppercase text-[10px]">Active</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-bold text-white">Sentiment Focus</div>
                                        <Badge className="bg-white/10 text-white border-none uppercase text-[10px]">Authoritative</Badge>
                                    </div>
                                </div>
                                <Button className="w-full h-14 bg-white text-black hover:bg-white/90 font-black rounded-2xl text-lg shadow-xl shadow-white/10">
                                    Activate Auto-Grow
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="glass-card border-white/10 p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Recent Impact Logs</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                {[
                                    { event: "LinkedIn Reach +45%", date: "2h ago", color: "text-emerald-400" },
                                    { event: "New Authority Match", date: "5h ago", color: "text-primary" },
                                    { event: "Narrative Alignment ++", date: "1d ago", color: "text-amber-400" }
                                ].map((log, lidx) => (
                                    <div key={lidx} className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-3">
                                        <span className={log.color}>{log.event}</span>
                                        <span className="text-white/40">{log.date}</span>
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
