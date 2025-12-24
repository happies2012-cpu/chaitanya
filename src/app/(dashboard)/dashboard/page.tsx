"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    ArrowUpRight,
    Search,
    Award,
    Newspaper,
    BookOpen,
    Scale,
    Zap,
    Clock,
    FileText,
    Database,
    Brain,
    LayoutDashboard,
    Download,
    ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
} from "recharts";

const scanData = [
    { subject: 'Scholarly Articles', A: 85, fullMark: 100 },
    { subject: 'Media Coverage', A: 65, fullMark: 100 },
    { subject: 'Critical Role', A: 90, fullMark: 100 },
    { subject: 'Judging', A: 45, fullMark: 100 },
    { subject: 'Original Contribution', A: 95, fullMark: 100 },
    { subject: 'Elite Membership', A: 30, fullMark: 100 },
];

const criteria = [
    { id: 1, name: "Awards/Prizes", status: "satisfied", score: 100, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { id: 2, name: "Elite Membership", status: "marginal", score: 35, color: "text-amber-400", bg: "bg-amber-500/10" },
    { id: 3, name: "Published Material", status: "satisfied", score: 100, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { id: 4, name: "Judging Work", status: "unsatisfied", score: 15, color: "text-rose-400", bg: "bg-rose-500/10" },
    { id: 5, name: "Original Contribution", status: "satisfied", score: 95, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { id: 6, name: "Scholarly Articles", status: "satisfied", score: 85, color: "text-emerald-400", bg: "bg-emerald-500/10" },
];

export default function DashboardPage() {
    return (
        <main className="min-h-screen pb-20 px-6 pt-10 bg-[#020617] bg-mesh">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20 uppercase tracking-widest text-[10px] font-black">ELITE TALENT ANALYSIS</Badge>
                            <Badge variant="outline" className="bg-white/5 text-white border-white/10 uppercase tracking-widest text-[10px] font-black">PETITION CYCLE 2024</Badge>
                        </div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tight">Executive <span className="text-orange-500">Summary</span></h1>
                        <p className="text-muted-foreground text-sm mt-1 font-medium tracking-wide">Horizon Eb1 Tech Advisory Portal</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="border-white/5 bg-white/5 hover:bg-white/10 text-xs font-black uppercase tracking-widest">Generate Memo</Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/20 text-xs font-black uppercase tracking-widest">Attorney Access</Button>
                    </div>
                </div>

                {/* Top Stats & Radar Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <Card className="lg:col-span-8 glass-card border-white/5 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                            <CardContent className="p-8 border-r border-white/5 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                                        <Zap size={20} className="text-orange-500" />
                                        Approval Probability
                                    </h3>
                                    <div className="flex items-end gap-2 mb-4">
                                        <span className="text-7xl font-black text-orange-500 tracking-tighter">84.2%</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                                        Your profile exceeds the minimum threshold for <span className="text-orange-400">4 out of 10</span> USCIS criteria. Evidence hardness is currently <span className="text-white">Medium-High</span>.
                                    </p>
                                </div>
                                <div className="mt-8 space-y-4">
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest opacity-60">
                                        <span>Case Readiness</span>
                                        <span className="text-white">72% Optimized</span>
                                    </div>
                                    <Progress value={72} className="h-2 bg-white/5 indicator-orange" />
                                </div>
                            </CardContent>
                            <div className="p-4 flex items-center justify-center bg-orange-500/[0.02]">
                                <ResponsiveContainer width="100%" height={300}>
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={scanData}>
                                        <PolarGrid stroke="#ffffff10" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                                        <Radar
                                            name="Candidate"
                                            dataKey="A"
                                            stroke="#f97316"
                                            fill="#f97316"
                                            fillOpacity={0.3}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </Card>

                    <div className="lg:col-span-4 space-y-6">
                        <Card className="glass-card border-white/5">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-black flex items-center gap-2 uppercase tracking-widest opacity-60">
                                    <AlertTriangle size={16} className="text-orange-500" />
                                    Next Best Action
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 space-y-3">
                                    <div className="font-black text-sm text-white uppercase tracking-tight">Secure "Judging" Signal</div>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                                        You need at least 2 more peer review invites from reputable journals to solidify this criteria.
                                    </p>
                                    <Button size="sm" className="w-full bg-white text-black hover:bg-white/90 text-[10px] font-black uppercase tracking-widest">Find Opportunities</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-card border-white/5">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-black flex items-center gap-2 uppercase tracking-widest opacity-60">
                                    <Clock size={16} className="text-amber-500" />
                                    Estimated Timeline
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-black text-white tracking-tighter">4 - 6 Months</div>
                                <p className="text-xs text-muted-foreground mt-1 font-bold uppercase tracking-wider">To reach 90%+ probability</p>
                                <div className="mt-4 flex gap-2">
                                    <div className="flex-1 h-1.5 rounded-full bg-orange-500" />
                                    <div className="flex-1 h-1.5 rounded-full bg-orange-500" />
                                    <div className="flex-1 h-1.5 rounded-full bg-white/10" />
                                    <div className="flex-1 h-1.5 rounded-full bg-white/10" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Criteria & Inventory Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                        <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-tight">
                            <Scale size={20} className="text-orange-500" />
                            USCIS Criteria Matrix
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {criteria.map((item) => (
                                <div key={item.id} className="p-5 rounded-2xl glass-card border-white/5 group hover:border-orange-500/20 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={cn("p-2 rounded-lg", item.bg)}>
                                                {item.status === 'satisfied' ? <CheckCircle2 className={cn("size-4", item.color)} /> : <AlertTriangle className={cn("size-4", item.color)} />}
                                            </div>
                                            <span className="text-sm font-black text-white uppercase tracking-tight">{item.name}</span>
                                        </div>
                                        <span className={cn("text-[10px] font-black uppercase tracking-widest", item.color)}>{item.status}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                                            <span>Strength</span>
                                            <span>{item.score}%</span>
                                        </div>
                                        <Progress value={item.score} className="h-1 bg-white/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-tight">
                                <Database size={20} className="text-orange-500" />
                                Evidence Vault
                            </h3>
                            <Button variant="ghost" size="sm" className="text-orange-500 font-black text-[10px] uppercase tracking-widest">View All</Button>
                        </div>
                        <Card className="glass-card border-white/5 h-full">
                            <Tabs defaultValue="all" className="w-full">
                                <TabsList className="w-full bg-white/5 p-1 border-b border-white/5 rounded-none">
                                    <TabsTrigger value="all" className="flex-1 text-[10px] uppercase font-black">All Docs</TabsTrigger>
                                    <TabsTrigger value="recent" className="flex-1 text-[10px] uppercase font-black">Recent</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all" className="p-4 space-y-3">
                                    {[
                                        { name: "Forbes_Interview_2024.pdf", type: "Media", date: "Dec 12, 2024" },
                                        { name: "IEEE_Journal_Proof.pdf", type: "Scholarly", date: "Nov 05, 2024" },
                                        { name: "Expert_Letter_Google.pdf", type: "Critical", date: "Oct 22, 2024" },
                                        { name: "Judging_Evidence_SIGGRAPH.png", type: "Judging", date: "Aug 15, 2024" },
                                    ].map((doc, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/10 transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-orange-500/10">
                                                    <FileText size={16} className="text-orange-500" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-black text-white tracking-tight">{doc.name}</div>
                                                    <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{doc.type} • {doc.date}</div>
                                                </div>
                                            </div>
                                            <Download size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </TabsContent>
                            </Tabs>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
