"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FileText,
    Sparkles,
    Save,
    History,
    Share2,
    Link as LinkIcon,
    MoreVertical,
    CheckCircle2,
    Clock,
    ChevronLeft,
    MessageSquare,
    Zap,
    ShieldCheck,
    Loader2,
    Send,
    Plus,
    Scale,
    AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function DraftingPage() {
    const [content, setContent] = useState(`Dear USCIS Officer,\n\nI am writing to provide my strongest recommendation for the EB-1A Extraordinary Ability petition of [Client Name]. As a recognized expert in [Field], I have followed [Client Name]'s work for several years and can attest to their original contributions of major significance...`);
    const [isDrafting, setIsDrafting] = useState(false);
    const [complianceScore, setComplianceScore] = useState(72);

    const handleAIDraft = () => {
        setIsDrafting(true);
        setTimeout(() => {
            setIsDrafting(false);
            setComplianceScore(89);
        }, 2500);
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 transition-colors duration-500">
            {/* Editor Header */}
            <div className="border-b border-muted-foreground/10 bg-background/90 backdrop-blur-xl sticky top-0 z-[60]">
                <div className="max-w-full mx-auto px-8 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/dashboard" className="p-3 hover:bg-white/5 rounded-[1.2rem] text-muted-foreground hover:text-orange-500 transition-all border border-white/5 group">
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </Link>
                        <Separator orientation="vertical" className="h-10 bg-white/10" />
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="font-black text-white uppercase tracking-tighter text-2xl">Recommendation Letter <span className="text-orange-500">Engine</span></span>
                                <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-[10px] uppercase font-black px-3 h-7 tracking-[0.2em] animate-pulse">AI ARCHITECT v1.4</Badge>
                            </div>
                            <div className="text-[10px] text-muted-foreground flex items-center gap-6 mt-1.5 uppercase tracking-widest font-black opacity-60">
                                <span className="flex items-center gap-2 text-foreground/40"><Clock size={12} className="text-orange-500" /> Auto-saved 1m ago</span>
                                <span className="flex items-center gap-2 text-white/40"><History size={12} className="text-orange-500" /> Iteration 4</span>
                                <span className="flex items-center gap-2 text-white/40"><ShieldCheck size={12} className="text-orange-500" /> Kazarian Audited</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3 mr-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-white/10 overflow-hidden shadow-2xl">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Editor" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-orange-600 flex items-center justify-center text-[10px] font-black text-white">+1</div>
                        </div>
                        <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-orange-600/5 text-white gap-2 text-[11px] font-black uppercase tracking-widest h-12 px-6 rounded-2xl transition-all">
                            <Share2 size={16} /> Export
                        </Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2 px-10 h-12 font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-3xl shadow-orange-500/30 border-none transition-all hover:scale-105 active:scale-95">
                            <Save size={16} /> Commit Draft
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto flex h-[calc(100vh-96px)]">
                {/* Left Sidebar: Evidence & Structure */}
                <aside className="w-96 border-r border-muted-foreground/10 bg-muted/20 h-full sticky top-24 hidden xl:block p-10 overflow-y-auto">
                    <div className="space-y-12">
                        <section className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center justify-between">
                                Hardened Evidence
                                <Badge className="bg-white/10 text-white border-none font-black text-[9px] px-2 py-0.5">4 FILES</Badge>
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { title: "NeurIPS 2023 Best Paper", type: "Original", hardness: 95 },
                                    { title: "Google Scholar Profile", type: "Scholarly", hardness: 88 },
                                    { title: "Patent US-123-A", type: "Patent", hardness: 42 },
                                    { title: "NYT Tech Interview", type: "Press", hardness: 76 }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 transition-all group cursor-pointer relative overflow-hidden">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black uppercase text-orange-500 tracking-widest">{item.type}</span>
                                            <div className="flex items-center gap-2">
                                                <Badge className={cn("text-[9px] font-black tracking-tight", item.hardness > 80 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400')}>
                                                    {item.hardness}% HARDNESS
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="text-sm font-black text-white tracking-tight uppercase leading-none">{item.title}</div>
                                        <div className="absolute bottom-0 left-0 h-0.5 bg-orange-500/20 w-full">
                                            <div className="h-full bg-orange-500" style={{ width: `${item.hardness}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Draft Architecture</h3>
                            <div className="space-y-2">
                                {["Regulatory Framework", "Extraordinary Claim", "Major Significance", "Final Merits (Kazarian)"].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 text-[12px] font-black uppercase tracking-tight text-white/40 hover:text-white hover:bg-orange-500/10 rounded-2xl transition-all cursor-pointer group">
                                        <span className="text-orange-500 group-hover:scale-110 transition-transform">0{idx + 1}.</span> {text}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </aside>

                {/* Center: Editor Frame */}
                <div className="flex-1 bg-white/[0.01] p-16 overflow-y-auto">
                    <div className="max-w-[900px] mx-auto relative">
                        {/* Precedent Autocomplete Floating Bar (Mock) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-orange-600 rounded-full shadow-2xl shadow-orange-500/40 flex items-center gap-4 z-50 whitespace-nowrap border border-white/20"
                        >
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Precedent Suggestion</span>
                            <div className="h-4 w-px bg-white/20" />
                            <span className="text-[11px] font-black text-white/90">"...original contribution of major significance as defined in Matter of Chawathe."</span>
                            <Badge className="bg-white text-orange-600 font-bold text-[9px]">TAB TO APPLY</Badge>
                        </motion.div>

                        <Card className="shadow-[0_64px_128px_-32px_rgba(0,0,0,0.8)] border-muted-foreground/10 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden ring-1 ring-white/10 transition-colors">
                            <CardContent className="p-24 min-h-[1200px] text-[#1a1a1a]">
                                <textarea
                                    className="w-full h-full font-serif text-[1.4rem] leading-[2] outline-none border-none resize-none bg-transparent placeholder:text-black/10 text-black font-medium"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    spellCheck={false}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right Sidebar: AI Assistant */}
                <aside className="w-[420px] border-l border-muted-foreground/10 h-full sticky top-24 hidden lg:block bg-background overflow-hidden flex flex-col">
                    <Tabs defaultValue="ai" className="h-full flex flex-col">
                        <TabsList className="w-full justify-start rounded-none bg-white/5 border-b border-white/5 p-0 h-16">
                            <TabsTrigger value="ai" className="flex-1 data-[state=active]:bg-white/5 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-full text-[11px] font-black uppercase tracking-widest text-white/40 data-[state=active]:text-white">
                                AI Copilot
                            </TabsTrigger>
                            <TabsTrigger value="comments" className="flex-1 data-[state=active]:bg-white/5 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-full text-[11px] font-black uppercase tracking-widest text-white/40 data-[state=active]:text-white">
                                Legal Review
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="ai" className="flex-1 p-10 space-y-10 overflow-y-auto">
                            {/* Compliance Gauge */}
                            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-[11px] font-black uppercase tracking-widest text-white/40">Kazarian Compliance</div>
                                    <Badge className="bg-emerald-500/10 text-emerald-400 font-black text-[10px]">+12.4% IMPACT</Badge>
                                </div>
                                <div className="flex items-center justify-center py-4">
                                    <div className="relative w-40 h-40">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                                            <motion.circle
                                                cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12"
                                                strokeDasharray={440}
                                                initial={{ strokeDashoffset: 440 }}
                                                animate={{ strokeDashoffset: 440 - (440 * complianceScore) / 100 }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                className="text-orange-500"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-4xl font-black text-white tracking-tighter">{complianceScore}%</span>
                                            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Strength</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-orange-600/10 border border-orange-500/20 space-y-6 relative overflow-hidden group">
                                <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-2xl bg-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                                        <Sparkles size={20} className="text-white fill-white" />
                                    </div>
                                    <span className="font-black text-[11px] text-orange-500 uppercase tracking-widest">Strategic Architect</span>
                                </div>
                                <p className="text-sm text-white/80 leading-[1.6] font-medium relative z-10 italic">
                                    "Your current draft is strong in technical specifics, but weak on 'sustained acclaim'. Should I inject language from the Forbes interview to harden the major significance claim?"
                                </p>
                                <div className="grid grid-cols-1 gap-3 relative z-10">
                                    <Button onClick={handleAIDraft} disabled={isDrafting} className="h-14 bg-orange-600 hover:bg-orange-700 text-white font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-orange-500/30 rounded-2xl border-none">
                                        {isDrafting ? <Loader2 className="animate-spin mr-3" size={18} /> : <Zap size={18} className="mr-3" />}
                                        Inject High-Impact Narrative
                                    </Button>
                                    <Button variant="ghost" className="h-14 text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 rounded-2xl">Tone Check: Adjudicator POV</Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="comments" className="flex-1 p-10 space-y-8">
                            <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-white/40">
                                Review Queue
                                <Badge className="bg-orange-500 text-white font-black">2 ALERTS</Badge>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { user: "Sarah Valente (Senior Counsel)", text: "This section needs explicit linkage to Matter of Dhanasar prong 2. Tighten the geographic scope.", date: "1h ago", icon: <Scale size={14} /> },
                                    { user: "System Guardian", text: "Zero citations found for the claim on 'proprietary LLM performance'. Upload benchmarks to Vault.", date: "3h ago", warning: true, icon: <AlertCircle size={14} /> }
                                ].map((comment, idx) => (
                                    <div key={idx} className={`p-6 rounded-3xl space-y-4 transition-all hover:scale-[1.02] cursor-pointer ${comment.warning ? 'bg-rose-500/10 border border-rose-500/20' : 'bg-white/5 border border-white/5'}`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", comment.warning ? "bg-rose-500/20 text-rose-400" : "bg-orange-500/20 text-orange-400")}>
                                                    {comment.icon}
                                                </div>
                                                <span className="text-[10px] font-black text-white uppercase tracking-tight">{comment.user}</span>
                                            </div>
                                            <span className="text-[9px] text-muted-foreground uppercase font-black opacity-60">{comment.date}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed font-medium">{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-8">
                                <div className="relative group">
                                    <Input className="bg-white/5 border-white/10 rounded-2xl h-16 pl-6 pr-16 text-sm focus:ring-orange-500/40" placeholder="Reply to Sarah..." />
                                    <Button className="absolute right-2 top-2 h-12 w-12 bg-orange-600 hover:bg-orange-700 rounded-xl shadow-xl shadow-orange-500/20">
                                        <Send size={18} />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </aside>
            </div>
        </main>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
