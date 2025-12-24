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

export default function EligibilityPage() {
    const [step, setStep] = useState(1);
    const [isScanning, setIsScanning] = useState(false);
    const [progress, setProgress] = useState(0);

    const startScan = () => {
        setIsScanning(true);
        let p = 0;
        const interval = setInterval(() => {
            p += Math.random() * 15;
            if (p >= 100) {
                clearInterval(interval);
                setProgress(100);
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1000);
            } else {
                setProgress(p);
            }
        }, 400);
    };

    return (
        <main className="min-h-screen pb-20 px-6 pt-10 bg-[#020617] bg-mesh">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 space-y-2">
                    <h1 className="text-5xl font-black text-white uppercase tracking-tight">Initialize <span className="text-orange-500">Intelligence Scan</span></h1>
                    <p className="text-muted-foreground font-medium text-lg">Securely ingest your professional footprint for high-fidelity EB-1A mapping.</p>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-6">
                        <Card className="glass-card border-white/10 overflow-hidden">
                            <CardHeader className="p-8 pb-4">
                                <CardTitle className="flex items-center gap-3 text-xl font-black text-white uppercase tracking-tight">
                                    <Upload size={24} className="text-orange-500" />
                                    Evidence Sources
                                </CardTitle>
                                <CardDescription className="font-medium">Connect your professional repositories for automated extraction.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-6 space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/40 transition-all cursor-pointer group">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                                <Globe size={20} className="text-orange-500" />
                                            </div>
                                            <div className="w-5 h-5 rounded-full border-2 border-white/10 group-hover:border-orange-500 transition-colors" />
                                        </div>
                                        <div className="font-black text-white uppercase tracking-tight">LinkedIn Profile</div>
                                        <div className="text-[10px] text-muted-foreground mt-2 uppercase font-bold tracking-widest leading-relaxed">Experience, endorsements, and professional posts</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/40 transition-all cursor-pointer group">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                                <Trophy size={20} className="text-orange-500" />
                                            </div>
                                            <div className="w-5 h-5 rounded-full border-2 border-white/10 group-hover:border-orange-500 transition-colors" />
                                        </div>
                                        <div className="font-black text-white uppercase tracking-tight">Google Scholar</div>
                                        <div className="text-[10px] text-muted-foreground mt-2 uppercase font-bold tracking-widest leading-relaxed">Citations, publications, and H-index metrics</div>
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-8 space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Upload Current CV / Resume</Label>
                                    <div className="border-2 border-dashed border-white/5 rounded-3xl p-16 text-center hover:border-orange-500/50 hover:bg-orange-500/[0.02] transition-all cursor-pointer group">
                                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <Upload className="text-muted-foreground group-hover:text-orange-500 transition-colors" size={32} />
                                        </div>
                                        <div className="font-black text-white text-lg uppercase tracking-tight mb-1">Drop your PDF here</div>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Secure Ingestion Protocol Active // Max 25MB</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-4 space-y-6">
                        <Card className="glass-card bg-orange-500/5 border-orange-500/20 sticky top-10">
                            <CardHeader className="p-8 pb-4">
                                <CardTitle className="text-2xl font-black text-white uppercase tracking-tight">Scan Logic</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-8">
                                <div className="space-y-4">
                                    {[
                                        "USCIS Criteria Mapping",
                                        "Precedent Analysis (15k+ Cases)",
                                        "RFE Risk Factor Detection"
                                    ].map((text, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/70">
                                            <CheckCircle2 size={16} className="text-orange-500" />
                                            {text}
                                        </div>
                                    ))}
                                </div>

                                <div className="p-5 rounded-2xl bg-[#020617]/50 border border-white/5 space-y-3">
                                    <div className="flex items-center justify-between text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck size={14} />
                                            Privacy: Active
                                        </div>
                                    </div>
                                    <div className="text-[9px] text-white/40 leading-relaxed uppercase font-black tracking-widest">
                                        AES-256 Encryption at rest. Zero-persistence scanning protocol.
                                    </div>
                                </div>

                                {!isScanning ? (
                                    <Button onClick={startScan} className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-white font-black text-lg rounded-2xl shadow-2xl shadow-orange-500/30 uppercase tracking-widest border-none">
                                        Run Smart Scan
                                    </Button>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">
                                            <span>Analyzing Profile...</span>
                                            <span>{Math.round(progress)}%</span>
                                        </div>
                                        <Progress value={progress} className="h-3 bg-white/5" />
                                        <div className="flex items-center justify-center gap-3 text-orange-500 font-black text-[11px] uppercase tracking-widest">
                                            <Loader2 className="animate-spin" size={18} />
                                            Executing Petition Logic...
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </main>
    );
}
