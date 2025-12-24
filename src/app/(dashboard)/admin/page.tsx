"use client";

import React from "react";
import {
    Users,
    Briefcase,
    Activity,
    ShieldAlert,
    TrendingUp,
    Clock,
    Search,
    Settings,
    MoreVertical,
    ArrowUpRight,
    UserCheck2,
    AlertCircle,
    FileSearch,
    Zap,
    CheckCircle2,
    XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const clients = [
    { name: "John Doe", type: "EB-1A", probability: "89%", status: "Drafting Brief", analyst: "AI System + Sarah", impact: "High" },
    { name: "Amit Kumar", type: "EB-1A", probability: "72%", status: "Evidence Gathering", analyst: "AI System", impact: "Medium" },
    { name: "Sarah Chen", type: "EB-2 NIW", probability: "94%", status: "Ready to File", analyst: "AI System + Mike", impact: "High" },
    { name: "Elena Volkov", type: "EB-1A", probability: "45%", status: "Case Low Strength", analyst: "Analyst Required", impact: "Critical" },
    { name: "Hiroshi Tanaka", type: "O-1A", probability: "81%", status: "Evidence Verified", analyst: "AI System", impact: "High" }
];

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-[#020617] pb-20 px-6 pt-10">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Badge className="bg-primary/20 text-primary border-none text-[10px] font-black tracking-widest uppercase">Admin Operations</Badge>
                            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                System Normative
                            </div>
                        </div>
                        <h1 className="text-4xl font-black text-white">Case <span className="text-gradient">Control Center</span></h1>
                        <p className="text-muted-foreground font-medium">Global oversight of talent recognition engineering pipelines.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 font-bold h-12 rounded-xl">Generate Audit</Button>
                        <Button className="bg-primary hover:bg-primary/95 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/20">System Settings</Button>
                    </div>
                </header>

                {/* Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Active Pipelines", val: "1,284", change: "+12.5%", icon: Activity, color: "text-primary" },
                        { label: "Approval Delta", val: "99.2%", change: "+0.4%", icon: TrendingUp, color: "text-emerald-400" },
                        { label: "Total Talent Valuation", val: "$4.8B", change: "+$240M", icon: Briefcase, color: "text-amber-400" },
                        { label: "Priority RFEs", val: "14", change: "-2", icon: ShieldAlert, color: "text-rose-400" }
                    ].map((stat, idx) => (
                        <Card key={idx} className="glass-card border-white/5 p-6 hover:scale-[1.02] transition-transform cursor-pointer">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                                    <stat.icon size={20} />
                                </div>
                                <Badge variant="outline" className={`${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'} text-[10px] font-black uppercase`}>
                                    {stat.change}
                                </Badge>
                            </div>
                            <div className="text-3xl font-black text-white tracking-tighter mb-1">{stat.val}</div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                        </Card>
                    ))}
                </section>

                {/* Main Workspace */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                    {/* Client Pipeline Feed */}
                    <div className="lg:col-span-8">
                        <Card className="glass-card border-white/10 overflow-hidden">
                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                <h3 className="text-xl font-black text-white">High Impact Pipeline</h3>
                                <div className="relative w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
                                    <Input className="bg-white/5 border-white/5 pl-10 h-10 rounded-lg text-xs" placeholder="Search talents..." />
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-white/[0.02] text-[10px] font-black uppercase text-muted-foreground tracking-widest border-b border-white/5">
                                            <th className="px-6 py-4">Candidate</th>
                                            <th className="px-6 py-4">Probability</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Analyst</th>
                                            <th className="px-6 py-4">Impact</th>
                                            <th className="px-6 py-4 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {clients.map((client, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`} />
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-bold text-white">{client.name}</div>
                                                            <div className="text-[10px] text-muted-foreground uppercase font-black">{client.type}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`font-black tracking-tighter text-lg ${parseInt(client.probability) > 80 ? 'text-emerald-400' : parseInt(client.probability) > 60 ? 'text-amber-400' : 'text-rose-400'}`}>
                                                            {client.probability}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge variant="outline" className="text-[10px] font-black uppercase bg-white/5 border-white/5 text-muted-foreground">
                                                        {client.status}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-xs font-medium text-white/70">{client.analyst}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge className={`${client.impact === 'Critical' ? 'bg-rose-500/20 text-rose-400' : client.impact === 'High' ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'} border-none text-[9px] font-black uppercase px-2`}>
                                                        {client.impact}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <Button variant="ghost" size="icon" className="group-hover:text-primary transition-colors">
                                                        <ArrowUpRight size={18} />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 bg-white/[0.02] border-t border-white/5 text-center">
                                <Button variant="ghost" className="text-xs font-bold text-muted-foreground hover:text-white uppercase tracking-widest">
                                    View Complete Roster (124)
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Alerts & Events */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card className="glass-card border-white/10 p-6 bg-gradient-to-br from-rose-500/10 to-transparent">
                            <CardHeader className="p-0 mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                                        <ShieldAlert size={20} />
                                    </div>
                                    <Badge className="bg-rose-500 text-white font-black px-2 py-0.5 animate-pulse">Critical Priority</Badge>
                                </div>
                                <CardTitle className="text-xl font-black">AI Risk Alert</CardTitle>
                                <CardDescription className="text-xs font-medium text-muted-foreground">Potential RFE detected in Section 4.A for client <b>Elena Volkov</b>.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                                    <div className="text-[10px] font-black uppercase text-rose-400 tracking-widest">Detected Conflict</div>
                                    <p className="text-xs text-white/70 leading-relaxed font-medium">Claim of "International Award" conflicts with institutional press release dates.</p>
                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" className="bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-black uppercase flex-1">Issue Hold</Button>
                                        <Button size="sm" variant="outline" className="border-white/10 bg-white/5 text-[10px] font-black uppercase flex-1">Verify Evidence</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-card border-white/10 p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground flex items-center justify-between">
                                    System Event Log
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                {[
                                    { ev: "AI drafting completed: John Doe", time: "2m ago", type: "system" },
                                    { ev: "New EB-1A Ingestion: Dr. S. Patel", time: "15m ago", type: "user" },
                                    { ev: "Evidence verified: Hiroshi T.", time: "1h ago", type: "check" },
                                    { ev: "Lawyer Review: Sarah C.", time: "3h ago", type: "user" }
                                ].map((log, idx) => (
                                    <div key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0">
                                        <div className={`mt-1 h-1.5 w-1.5 rounded-full ${log.type === 'system' ? 'bg-primary' : log.type === 'check' ? 'bg-emerald-400' : 'bg-white/40'}`} />
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-white/90">{log.ev}</div>
                                            <div className="text-[10px] text-muted-foreground uppercase font-black">{log.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
