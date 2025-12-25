"use client";

import React, { useState } from "react";
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
    ExternalLink,
    Crown,
    Star
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
    { id: 1, name: "Awards/Prizes", status: "satisfied", score: 100, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 2, name: "Elite Membership", status: "marginal", score: 35, color: "text-amber-500", bg: "bg-amber-500/10" },
    { id: 3, name: "Published Material", status: "satisfied", score: 100, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 4, name: "Judging Work", status: "unsatisfied", score: 15, color: "text-rose-500", bg: "bg-rose-500/10" },
    { id: 5, name: "Original Contribution", status: "satisfied", score: 95, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 6, name: "Scholarly Articles", status: "satisfied", score: 85, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export default function DashboardPage() {
    const [viewMode, setViewMode] = useState<'candidate' | 'officer'>('candidate');

    return (
        <main className="min-h-screen pb-20 px-6 pt-10 bg-background transition-colors duration-500 relative font-inter">
            <div className="max-w-7xl mx-auto space-y-10 relative z-10">
                {/* Intelligence Ticker */}
                <div className="w-full h-10 bg-muted/60 border border-muted-foreground/10 rounded-full overflow-hidden flex items-center mb-12 transition-colors">
                    <div className="bg-orange-600 h-full px-4 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white shrink-0">
                        Live Trends
                    </div>
                    <div className="flex-1 overflow-hidden relative">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex items-center gap-12 whitespace-nowrap pl-8"
                        >
                            {[
                                "Texas Service Center approval velocity increased +14% for EB-1A",
                                "New AAO Precedent regarding 'Original Contribution' tier hardening",
                                "Nebraska Center issuing RFEs for 'Executive Membership' criteria",
                                "Matter of Dhanasar threshold being strictly applied to AI startups",
                                "Expert Opinion Letter (EOL) patterns being flagged for AI-generation",
                            ].map((trend, idx) => (
                                <span key={idx} className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" /> {trend}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 uppercase tracking-[0.2em] text-[10px] font-black px-3 py-1">ELITE TALENT ANALYSIS</Badge>
                            <Badge variant="outline" className="bg-muted text-foreground/50 border-muted-foreground/20 uppercase tracking-[0.2em] text-[10px] font-black px-3 py-1 items-center gap-2 flex transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> USCIS LIVE FEED
                            </Badge>
                        </div>
                        <h1 className="text-[28px] font-outfit font-black text-foreground uppercase tracking-tight leading-none mb-2">
                            Intelligence <span className="text-gradient-orange">Center</span>
                        </h1>
                        <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em] opacity-60">Strategic EB-1A Adjudication Dashboard</p>
                    </div>

                    <div className="flex flex-col items-end gap-6">
                        {/* Mode Switcher */}
                        <div className="p-1.5 bg-muted/60 border border-muted-foreground/10 rounded-2xl flex gap-1 backdrop-blur-xl transition-colors">
                            <button
                                onClick={() => setViewMode('candidate')}
                                className={cn(
                                    "px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                                    viewMode === 'candidate' ? "bg-orange-600 text-white shadow-lg shadow-orange-500/40" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Candidate View
                            </button>
                            <button
                                onClick={() => setViewMode('officer')}
                                className={cn(
                                    "px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                                    viewMode === 'officer' ? "bg-rose-600 text-white shadow-lg shadow-rose-500/40" : "text-muted-foreground hover:text-rose-500"
                                )}
                            >
                                Officer POV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Top Stats & Radar Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <Card className={cn(
                        "lg:col-span-8 glass-card border-muted-foreground/10 overflow-hidden transition-all duration-700 shadow-2xl",
                        viewMode === 'officer' ? "border-rose-500/30 ring-1 ring-rose-500/20 shadow-rose-500/10" : "shadow-orange-500/5"
                    )}>
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                            <CardContent className="p-12 border-r border-muted-foreground/10 flex flex-col justify-between relative overflow-hidden">
                                {viewMode === 'officer' && (
                                    <div className="absolute top-0 right-0 p-6">
                                        <Badge className="bg-rose-500 text-white font-black text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-xl shadow-rose-500/20">Kazarian Audit Mode</Badge>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 flex items-center gap-3">
                                        <Zap size={18} className={viewMode === 'officer' ? "text-rose-500" : "text-orange-500"} />
                                        {viewMode === 'candidate' ? 'Probability of Approval' : 'Evidence Vulnerability Score'}
                                    </h3>
                                    <div className="flex items-end gap-3 mb-6">
                                        <span className={cn(
                                            "text-8xl font-black font-outfit tracking-[-0.05em] leading-none",
                                            viewMode === 'candidate' ? "text-orange-500" : "text-rose-500"
                                        )}>
                                            {viewMode === 'candidate' ? '84.2' : '15.8'}<span className="text-3xl font-black">%</span>
                                        </span>
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-medium tracking-tight">
                                        {viewMode === 'candidate'
                                            ? "Your profile solidifies 4 out of 10 USCIS regulatory standards. Current evidence hardening is at 'Substantial' tier."
                                            : "Critical exposure detected in membership tier validity. Section 3.B requires immediate evidentiary hardening."
                                        }
                                    </p>
                                </div>
                                <div className="mt-12 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
                                        <span>{viewMode === 'candidate' ? 'Case Readiness' : 'Rebuttal Strength'}</span>
                                        <span className="text-foreground">{viewMode === 'candidate' ? '72% Optimized' : 'Marginal Exposure'}</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "72%" }}
                                            className={cn("h-full transition-all", viewMode === 'officer' ? "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]" : "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]")}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <div className="p-12 flex items-center justify-center bg-orange-500/[0.02]">
                                <ResponsiveContainer width="100%" height={320}>
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={scanData}>
                                        <PolarGrid stroke="currentColor" strokeWidth={1} className="text-muted-foreground/10" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 10, fontWeight: '700', letterSpacing: '0.05em' }} className="text-muted-foreground" />
                                        <Radar
                                            name="Candidate"
                                            dataKey="A"
                                            stroke={viewMode === 'officer' ? "#f43f5e" : "#f97316"}
                                            fill={viewMode === 'officer' ? "#f43f5e" : "#f97316"}
                                            fillOpacity={0.2}
                                            strokeWidth={3}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </Card>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-4 h-full flex flex-col justify-between">
                            <Card className="glass-card border-muted-foreground/10 shadow-2xl">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-[10px] font-black flex items-center gap-3 uppercase tracking-[0.3em] text-orange-500">
                                        <AlertTriangle size={14} />
                                        Strategic Directive
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 space-y-6">
                                    <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-4 group cursor-pointer hover:bg-orange-500/10 transition-colors">
                                        <div className="font-bold text-sm text-foreground uppercase tracking-tight leading-none">Harden Judging Signal</div>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
                                            Target 2+ invitations from Tier-1 IEEE Journals to neutralize potential 'judging' objections.
                                        </p>
                                        <Button size="sm" className="w-full h-11 bg-foreground text-background hover:bg-foreground/90 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all">Execute Search</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="glass-card border-muted-foreground/10 bg-gradient-to-br from-muted/20 to-transparent shadow-2xl">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-[10px] font-black flex items-center gap-3 uppercase tracking-[0.3em] text-muted-foreground">
                                        <Clock size={16} className="text-amber-500" />
                                        Adjudication Velocity
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 space-y-6">
                                    <div>
                                        <div className="text-6xl font-black font-outfit text-foreground tracking-[-0.04em] leading-none mb-2">128 Days</div>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-60">Avg. 1-140 Processing time</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {[1, 1, 0, 0, 0].map((active, i) => (
                                            <div key={i} className={cn("h-1.5 flex-1 rounded-full", active ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]" : "bg-muted")} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Criteria Compliance Matrix */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[24px] font-outfit font-black flex items-center gap-4 uppercase tracking-tight text-foreground">
                            <Scale size={28} className="text-orange-500" />
                            Criteria Compliance Matrix
                        </h2>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest opacity-40 px-3 py-1">USCIS 2025 PROTOCOL v3</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {criteria.map((item) => (
                            <div
                                key={item.id}
                                className={cn(
                                    "p-10 rounded-[2.5rem] glass-card border-muted-foreground/10 group hover:border-orange-500/40 transition-all duration-500 cursor-pointer relative overflow-hidden",
                                    viewMode === 'officer' && item.status === 'marginal' && "border-rose-500/30 bg-rose-500/[0.04] ring-1 ring-rose-500/20"
                                )}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={20} className="text-orange-500" />
                                </div>
                                <div className="flex items-center gap-5 mb-10">
                                    <div className={cn("p-5 rounded-3xl transition-transform group-hover:rotate-[15deg] duration-500", item.bg)}>
                                        {item.status === 'satisfied' ? <CheckCircle2 className={cn("size-6", item.color)} /> : <AlertTriangle className={cn("size-6", item.color)} />}
                                    </div>
                                    <div>
                                        <div className="text-lg font-black font-outfit text-foreground uppercase tracking-tight leading-none mb-1.5">{item.name}</div>
                                        <div className={cn("text-[9px] font-black uppercase tracking-[0.2em]", item.color)}>{item.status}</div>
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                                        <span>Hardness Quotient</span>
                                        <span className="text-foreground">{item.score}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.score}%` }}
                                            transition={{ duration: 1.2, delay: 0.3 }}
                                            className={cn("h-full", item.status === 'satisfied' ? "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]" : "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]")}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vault Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                    <div className="lg:col-span-12 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[24px] font-outfit font-black flex items-center gap-4 uppercase tracking-tight text-foreground">
                                <Database size={28} className="text-orange-500" />
                                Tactical Inventory
                            </h2>
                            <Button variant="ghost" className="text-orange-600 dark:text-orange-400 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-orange-500/10">Browse Vault</Button>
                        </div>
                        <Card className="glass-card border-muted-foreground/10 overflow-hidden shadow-2xl">
                            <div className="p-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { name: "Forbes_Tech_Council.pdf", type: "Media Signal", size: "2.4 MB" },
                                        { name: "NeurIPS_Citation_Map.xlsx", type: "Scholarly", size: "1.1 MB" },
                                        { name: "Director_Level_Support.pdf", type: "Critical Role", size: "4.8 MB" },
                                        { name: "Judging_Panel_Invites.zip", type: "Judging", size: "12.2 MB" },
                                    ].map((doc, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -5 }}
                                            className="p-6 rounded-3xl bg-muted/30 border border-muted-foreground/10 hover:border-orange-500/40 transition-all group cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-orange-500/5 group-hover:bg-orange-500/15 flex items-center justify-center transition-colors">
                                                    <FileText size={24} className="text-orange-500" />
                                                </div>
                                                <div className="flex-1 overflow-hidden">
                                                    <div className="text-sm font-bold text-foreground truncate uppercase">{doc.name}</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{doc.type}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between pt-4 border-t border-muted-foreground/10">
                                                <span className="text-[9px] font-black text-muted-foreground uppercase">{doc.size}</span>
                                                <Download size={14} className="text-muted-foreground group-hover:text-orange-500 transition-colors" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
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
