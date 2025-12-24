"use client";

import React, { useState } from "react";
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
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function DraftingPage() {
    const [content, setContent] = useState(`Dear USCIS Officer,\n\nI am writing to provide my strongest recommendation for the EB-1A Extraordinary Ability petition of [Client Name]. As a recognized expert in [Field], I have followed [Client Name]'s work for several years and can attest to their original contributions of major significance...`);
    const [isDrafting, setIsDrafting] = useState(false);

    const handleAIDraft = () => {
        setIsDrafting(true);
        setTimeout(() => setIsDrafting(false), 2500);
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white">
            {/* Editor Header */}
            <div className="border-b border-white/5 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30">
                <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="p-2.5 hover:bg-white/5 rounded-xl text-muted-foreground hover:text-orange-500 transition-all border border-transparent hover:border-white/5">
                            <ChevronLeft size={24} />
                        </Link>
                        <Separator orientation="vertical" className="h-8 bg-white/10" />
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="font-black text-white uppercase tracking-tight text-lg">Recommendation Letter <span className="text-orange-500">Draft</span></span>
                                <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-[9px] uppercase font-black px-2.5 h-6 tracking-widest">AI ARCHITECT v1.4</Badge>
                            </div>
                            <div className="text-[9px] text-muted-foreground flex items-center gap-4 mt-1 uppercase tracking-widest font-black">
                                <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-500" /> Auto-saved 1m ago</span>
                                <span className="flex items-center gap-1.5"><History size={12} className="text-orange-500" /> Iteration 4</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="ghost" className="text-muted-foreground hover:text-white gap-2 text-[10px] font-black uppercase tracking-widest">
                            <History size={16} /> History
                        </Button>
                        <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2 text-[10px] font-black uppercase tracking-widest h-11 px-6">
                            <Share2 size={16} /> Share
                        </Button>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2 px-8 h-11 font-black uppercase tracking-widest text-[10px] shadow-xl shadow-orange-500/20">
                            <Save size={16} /> Save Changes
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto flex">
                {/* Left Sidebar: Evidence & Structure */}
                <aside className="w-80 border-r border-white/5 h-[calc(100vh-80px)] sticky top-20 hidden xl:block p-8 overflow-y-auto">
                    <div className="space-y-10">
                        <section className="space-y-5">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-between">
                                Linked Evidence
                                <Badge className="bg-white/10 text-white border-none font-black text-[9px]">4 ITEMS</Badge>
                            </h3>
                            <div className="space-y-2.5">
                                {[
                                    { title: "NeurIPS 2023 Best Paper", type: "Original" },
                                    { title: "Google Scholar Profile", type: "Scholarly" },
                                    { title: "Patent US-123-A", type: "Patent" },
                                    { title: "NYT Tech Interview", type: "Press" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-all group cursor-pointer">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[9px] font-black uppercase text-orange-500 tracking-widest">{item.type}</span>
                                            <LinkIcon size={12} className="text-muted-foreground group-hover:text-orange-500 transition-transform" />
                                        </div>
                                        <div className="text-xs font-black text-white/80 uppercase tracking-tight">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">EB-1A Structure</h3>
                            <div className="space-y-1">
                                {["Introduction", "Expert Qualifications", "Major Significance", "Conclusion"].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 text-[11px] font-black uppercase tracking-tight text-muted-foreground hover:text-white hover:bg-orange-500/10 rounded-xl transition-all cursor-pointer">
                                        <span className="text-orange-500/40">{idx + 1}.</span> {text}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </aside>

                {/* Center: Editor Frame */}
                <div className="flex-1 bg-white/[0.01] p-12 min-h-[calc(100vh-80px)]">
                    <Card className="max-w-[850px] mx-auto shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-white/5 bg-white">
                        <CardContent className="p-20 min-h-[1100px] text-black">
                            <div className="w-full h-full font-serif text-xl leading-[1.8] outline-none whitespace-pre-wrap">
                                {content}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Sidebar: AI Assistant */}
                <aside className="w-96 border-l border-white/5 h-[calc(100vh-80px)] sticky top-20 hidden lg:block bg-[#020617] overflow-hidden flex flex-col">
                    <Tabs defaultValue="ai" className="h-full flex flex-col">
                        <TabsList className="w-full justify-start rounded-none bg-white/5 border-b border-white/5 p-0">
                            <TabsTrigger value="ai" className="data-[state=active]:bg-white/5 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-14 text-[10px] font-black uppercase tracking-[0.2em] px-8 text-white/40 data-[state=active]:text-white">
                                AI Copilot
                            </TabsTrigger>
                            <TabsTrigger value="comments" className="data-[state=active]:bg-white/5 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none h-14 text-[10px] font-black uppercase tracking-[0.2em] px-8 text-white/40 data-[state=active]:text-white">
                                Legal Feed
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="ai" className="flex-1 p-6 space-y-6 overflow-y-auto">
                            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                                        <Sparkles size={16} className="text-white fill-white" />
                                    </div>
                                    <span className="font-black text-[10px] text-orange-500 uppercase tracking-widest">Horizon AI Architect</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                                    "I see you're drafting a recommendation letter for Prof. Aris. Should I amplify the section on 'Original Contributions' using the NeurIPS 2023 evidence for EB-1A alignment?"
                                </p>
                                <div className="grid grid-cols-1 gap-2">
                                    <Button onClick={handleAIDraft} disabled={isDrafting} size="sm" className="bg-orange-600 hover:bg-orange-700 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-500/20">
                                        {isDrafting ? <Zap className="animate-spin mr-2" size={14} /> : <Sparkles size={14} className="mr-2" />}
                                        Amplify Legal Narrative
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5">Refine Tone for Academic Expert</Button>
                                </div>
                            </div>

                            <section className="space-y-3">
                                <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Strategic Suggestions</h4>
                                <div className="space-y-2">
                                    {[
                                        "Add link to U.S. Patent 12,345",
                                        "Elaborate on commercial success in EU",
                                        "Clarify 'Leading Role' duration"
                                    ].map((text, idx) => (
                                        <div key={idx} className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-[11px] font-black uppercase tracking-tight text-white/70 hover:border-orange-500/50 hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
                                            {text}
                                            <Plus size={14} className="text-muted-foreground group-hover:text-orange-500 transition-transform" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </TabsContent>

                        <TabsContent value="comments" className="flex-1 p-6 space-y-6">
                            <div className="space-y-4">
                                {[
                                    { user: "Sarah (Lawyer)", text: "This paragraph is too flowery. Tone it down for USCIS officers.", date: "1h ago" },
                                    { user: "AI Guardian", text: "No citation found for the claim on '50% market share'.", date: "3h ago", warning: true }
                                ].map((comment, idx) => (
                                    <div key={idx} className={`p-4 rounded-xl space-y-2 ${comment.warning ? 'bg-rose-500/10 border border-rose-500/20' : 'bg-white/5'}`}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-black text-white">{comment.user}</span>
                                            <span className="text-[10px] text-muted-foreground">{comment.date}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-6">
                                <div className="relative">
                                    <Input className="bg-white/5 border-white/5 rounded-xl h-12 pr-12 text-xs" placeholder="Message Sarah..." />
                                    <Button size="icon" className="absolute right-1 top-1 bg-primary hover:bg-primary/90 rounded-lg">
                                        <Send size={16} />
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

// Helper components
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Send, Plus } from "lucide-react";
