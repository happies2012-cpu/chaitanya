"use client";

import React, { useState } from "react";
import {
    FileText,
    Database,
    Shield,
    Users,
    Settings,
    Zap,
    LogOut,
    LayoutDashboard,
    Cpu,
    Brain,
    MessageSquare,
    Newspaper,
    Lock
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
    { name: "Command Center", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Intelligence Scan", icon: Zap, href: "/eligibility" },
    { name: "Success Roadmap", icon: Brain, href: "/roadmap" },
    { name: "Evidence Vault", icon: Database, href: "/vault" },
    { name: "Authority Network", icon: Users, href: "/authorities" },
    { name: "Drafting Engine", icon: FileText, href: "/drafting" },
    { name: "System Settings", icon: Settings, href: "/settings" },
];

export const DashboardSidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-72 border-r border-white/5 bg-[#020617] hidden lg:flex flex-col fixed inset-y-0 z-50">
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-10 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-3xl shadow-orange-500/30 group-hover:rotate-12 transition-transform duration-500">
                        <span className="text-white font-black text-2xl">H</span>
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-lg font-black text-white uppercase tracking-tighter transition-colors group-hover:text-orange-500">HORIZON<span className="text-orange-500 group-hover:text-white">EB-1</span></span>
                        <div className="flex items-center gap-1.5 opacity-60">
                            <span className="text-[9px] font-black text-muted-foreground tracking-[0.2em] uppercase">Tech Advisory</span>
                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                            <Lock size={8} className="text-orange-500" />
                        </div>
                    </div>
                </div>

                <nav className="space-y-1.5">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 group relative overflow-hidden",
                                    isActive
                                        ? "bg-orange-600 text-white shadow-2xl shadow-orange-500/20"
                                        : "text-muted-foreground hover:text-white hover:bg-orange-500/5"
                                )}
                            >
                                <item.icon className={cn("size-4.5 transition-colors", isActive ? "text-white" : "group-hover:text-orange-500")} />
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute left-0 top-3 bottom-3 w-1 bg-white rounded-full shadow-[0_0_10px_white]"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-8 space-y-6">
                {/* Advisor Profile */}
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-5 shadow-3xl group cursor-pointer hover:bg-white/[0.04] transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[1.2rem] overflow-hidden border-2 border-orange-500/20 group-hover:scale-110 transition-transform duration-500 ring-4 ring-orange-500/5 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Advisor" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-black text-white uppercase tracking-tight mb-0.5">Elena Vance</span>
                            <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest opacity-80 leading-none">Senior Advisor</span>
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full h-10 bg-orange-500/10 hover:bg-orange-500 text-orange-500 hover:text-white text-[9px] font-black uppercase tracking-widest rounded-xl border border-orange-500/20 transition-all">
                        Consult Now
                    </Button>
                </div>

                {/* Case Strength Gauge */}
                <div className="space-y-4">
                    <div className="px-2">
                        <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">
                            <span>Case Strength</span>
                            <span className="text-orange-500">92%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '92%' }}
                                className="h-full bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                            />
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#020617] border border-white/5 group hover:border-orange-500/30 transition-all">
                        <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest mb-3">
                            <Shield size={12} className="text-orange-500" /> USCIS Data Stream
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-black text-orange-500 uppercase tracking-tighter">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
                                <span>Encrypted</span>
                            </div>
                            <span className="text-white/40">TLS 1.3</span>
                        </div>
                    </div>

                    <button className="flex items-center gap-4 px-6 py-5 w-full rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-rose-500 hover:bg-rose-500/5 transition-all group">
                        <LogOut className="size-4.5 group-hover:-translate-x-1 transition-transform" />
                        Disconnect
                    </button>
                </div>
            </div>
        </aside>
    );
};
