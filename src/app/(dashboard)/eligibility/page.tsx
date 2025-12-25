"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Link as LinkIcon, FileText, CheckCircle2, Loader2, ShieldCheck, Globe, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const criteria = [
    { name: "Awards", description: "National or International recognition", status: "checking" },
    { name: "Membership", description: "Exclusive peer associations", status: "pending" },
    { name: "Press", description: "Major media coverage", status: "checking" },
    { name: "Judging", description: "Peer review of work", status: "checking" },
    { name: "Originality", description: "Major significance in field", status: "pending" },
    { name: "Scholarship", description: "Peer-reviewed publications", status: "checking" },
    { name: "Display", description: "Showcase in artistic fields", status: "pending" },
    { name: "Leading Role", description: "Critical role for organization", status: "pending" },
    { name: "High Salary", description: "Remuneration indicators", status: "pending" },
    { name: "Commercial Success", description: "Revenue or box office proof", status: "pending" },
];

import { Badge } from "@/components/ui/badge";

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}

export default function EligibilityPage() {
    const [step, setStep] = useState(1);
    const [isScanning, setIsScanning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => {
        setLogs(prev => [msg, ...prev].slice(0, 5));
    };

    const startScan = () => {
        setIsScanning(true);
        let p = 0;
        const messages = [
            "Initializing AES-256 secure tunnel...",
            "Injesting LinkedIn structure...",
            "Crawling Google Scholar for citation clusters...",
            "Executing pattern matching on 15k precedent RFEs...",
            "Applying Matter of Dhanasar threshold logic...",
            "Finalizing Kazarian merits determination...",
        ];

        let msgIdx = 0;
        const interval = setInterval(() => {
            p += Math.random() * 8;
            if (p >= 100) {
                clearInterval(interval);
                setProgress(100);
                addLog("Profile Hardened. Transferring to Workspace...");
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1500);
            } else {
                setProgress(p);
                if (p > (msgIdx + 1) * (100 / messages.length)) {
                    addLog(messages[msgIdx]);
                    msgIdx++;
                }
            }
        }, 300);
    };

    return (
        <main className="min-h-screen pb-32 px-6 pt-12 relative bg-transparent overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/[0.03] blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 space-y-6 text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <Badge className="bg-orange-600 text-white font-black text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border-none shadow-xl shadow-orange-500/20">
                            Regulatory Ingestion v2.0
                        </Badge>
                    </div>
                    <h1 className="text-[28px] font-outfit font-black text-foreground uppercase tracking-tight leading-none mb-2">
                        Intelligence <span className="text-orange-500">Scan</span>
                    </h1>
                    <p className="text-muted-foreground font-black uppercase tracking-[0.1em] text-sm opacity-60">
                        Securely Mapping Your Professional Trajectory Against federal EB-1A Standards
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 space-y-10">
                        <Card className="glass-card border-white/5 bg-white/[0.01] shadow-3xl overflow-hidden rounded-[3rem]">
                            <CardHeader className="p-12 pb-6 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                                        <Globe size={24} className="text-white" />
                                    </div>
                                    <h2 className="text-[24px] font-outfit font-black text-foreground uppercase tracking-tight leading-none">
                                        Discovery Sources
                                    </h2>
                                </div>
                                <CardDescription className="font-black text-[10px] uppercase tracking-widest text-white/40 pt-2">
                                    Automated extraction logic for verified professional repositories
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-12 space-y-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { name: "LinkedIn Profile", icon: <Globe size={24} />, desc: "Experience & Network Authority" },
                                        { name: "Google Scholar", icon: <Trophy size={24} />, desc: "Citations & Scientific Impact" },
                                        { name: "Patent Database", icon: <ShieldCheck size={24} />, desc: "Intellectual Property Ownership" },
                                        { name: "Open Source / GitHub", icon: <Upload size={24} />, desc: "Technical Contribution Velocity" }
                                    ].map((source, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/40 transition-all cursor-pointer group relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                            </div>
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                                                    {source.icon}
                                                </div>
                                                <div className="w-6 h-6 rounded-full border border-white/10 group-hover:border-orange-500 group-hover:border-4 transition-all" />
                                            </div>
                                            <div className="font-black text-white uppercase tracking-tight text-lg mb-1">{source.name}</div>
                                            <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest opacity-60 leading-relaxed">{source.desc}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="pt-10 border-t border-white/5">
                                    <div className="flex items-center justify-between mb-6">
                                        <Label className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Manual Document Vault</Label>
                                        <Badge variant="outline" className="text-[9px] font-black uppercase text-white/40 border-white/10">OCR Enabled</Badge>
                                    </div>
                                    <div className="border border-dashed border-white/10 rounded-[2.5rem] p-20 text-center hover:border-orange-500/50 hover:bg-orange-500/[0.02] transition-all cursor-pointer group bg-white/[0.01]">
                                        <div className="w-24 h-24 bg-orange-500/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500 shadow-3xl shadow-orange-500/0 group-hover:shadow-orange-500/20">
                                            <Upload className="text-orange-500 group-hover:text-white transition-colors" size={40} />
                                        </div>
                                        <h3 className="font-black text-white text-2xl uppercase tracking-tighter mb-2 group-hover:text-orange-500">Injest Professional CV</h3>
                                        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-black opacity-60">Drag and drop PDF, DOCX or JSON footprint</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        {/* Control Center */}
                        <Card className="glass-card bg-orange-600/5 border-orange-500/30 rounded-[2.5rem] overflow-hidden sticky top-12 shadow-3xl ring-1 ring-orange-500/20">
                            <CardHeader className="p-10 pb-6">
                                <h1 className="text-[28px] font-outfit font-black text-foreground uppercase tracking-tight leading-none">Scan Engine</h1>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500/60 mt-2">Active Federal Compliance</p>
                            </CardHeader>
                            <CardContent className="p-10 pt-0 space-y-8">
                                <div className="grid grid-cols-2 gap-3 pb-4">
                                    {criteria.map((c, i) => (
                                        <div key={i} className="flex flex-col gap-1.5">
                                            <div className="h-1.5 rounded-full bg-white/5 relative overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: isScanning ? (progress > i * 10 ? '100%' : '0%') : '0%' }}
                                                    className={cn("h-full bg-orange-500", progress > i * 10 + 5 ? 'opacity-100' : 'opacity-0 animate-pulse')}
                                                />
                                            </div>
                                            <span className="text-[8px] font-black uppercase text-white/30 tracking-widest truncate">{c.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 bg-[#020617]/40 p-6 rounded-2xl border border-white/5 min-h-[160px] font-mono text-[10px]">
                                    <div className="flex items-center justify-between text-orange-500/40 font-black uppercase tracking-widest mb-2">
                                        <span>System Log</span>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                                            <div className="w-1 h-1 rounded-full bg-orange-500/40" />
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {logs.map((log, i) => (
                                            <motion.div
                                                key={log}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 0.6 - (i * 0.1), x: 0 }}
                                                className="text-white/80 flex items-center gap-2"
                                            >
                                                <span className="text-orange-500/40">{">"}</span> {log}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {!isScanning ? (
                                    <Button onClick={startScan} className="group relative w-full h-20 bg-orange-600 hover:bg-orange-700 text-white font-black text-xl rounded-2xl shadow-3xl shadow-orange-500/40 uppercase tracking-widest border-none transition-all hover:scale-[1.02] active:scale-95">
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-black">
                                            COMMENCE SCAN
                                        </div>
                                        Initialize Engine
                                    </Button>
                                ) : (
                                    <div className="space-y-6 pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Extracting DNA...</span>
                                            <span className="text-2xl font-black text-orange-500 tracking-tighter">{Math.round(progress)}%</span>
                                        </div>
                                        <div className="h-4 w-full bg-white/5 rounded-full p-1 overflow-hidden shadow-inner">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/40"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center gap-4 text-orange-500 font-black text-[10px] uppercase tracking-widest py-2">
                                            <Loader2 className="animate-spin" size={20} />
                                            Executing Federal Logic
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-3 pt-6 border-t border-white/5 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                                    <ShieldCheck size={20} className="text-emerald-400" />
                                    <div>
                                        <div className="text-[9px] font-black text-white uppercase tracking-widest">Advanced Encryption</div>
                                        <div className="text-[8px] text-white/60 uppercase font-black tracking-widest">SOC-2 Type II Certified Pipeline</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}

