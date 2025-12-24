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
import { cn } from "@/lib/utils";

const sidebarItems = [
    { name: "Executive Summary", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Eligibility Scan", icon: Zap, href: "/eligibility" },
    { name: "Evidence Vault", icon: Database, href: "/evidence" },
    { name: "Legal Strategy", icon: Brain, href: "/strategy" },
    { name: "Expert Network", icon: Users, href: "/authorities" },
    { name: "Drafting Copilot", icon: FileText, href: "/drafting" },
    { name: "Settings", icon: Settings, href: "/settings" },
];

export const DashboardSidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/5 bg-[#020617] hidden lg:flex flex-col fixed inset-y-0 z-50">
            <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-12 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/30 group-hover:rotate-12 transition-transform duration-500">
                        <span className="text-white font-black text-2xl">H</span>
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-sm font-black text-white uppercase tracking-tighter transition-colors group-hover:text-orange-500">HORIZON<span className="text-orange-500 group-hover:text-white">EB-1</span></span>
                        <span className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase opacity-60">Tech Advisory</span>
                    </div>
                </div>

                <nav className="space-y-2">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 group relative overflow-hidden",
                                    isActive
                                        ? "bg-orange-600 text-white shadow-2xl shadow-orange-500/30"
                                        : "text-muted-foreground hover:text-white hover:bg-orange-600/5"
                                )}
                            >
                                <item.icon className={cn("size-4 transition-colors", isActive ? "text-white" : "group-hover:text-orange-500")} />
                                {item.name}
                                {isActive && (
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-8 space-y-8">
                {/* My Lead Advisor Section */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4 shadow-2xl group cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-orange-500/20 group-hover:scale-105 transition-transform">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Advisor" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-white uppercase tracking-tight">Elena Vance</span>
                            <span className="text-[8px] font-black text-orange-500/80 uppercase tracking-widest leading-none">Senior Advisor</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">
                        <span>Last Active: Now</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-[#020617] border border-white/5">
                        <div className="flex items-center gap-2 text-[9px] font-black text-white/50 uppercase tracking-widest mb-3">
                            <Lock size={12} className="text-orange-500" /> USCIS Data Sync
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-black text-orange-500 uppercase tracking-widest">
                            <span>Status: Active</span>
                            <span>v9.4</span>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 px-5 py-4 w-full rounded-2xl text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-rose-400 hover:bg-rose-500/5 transition-all">
                        <LogOut className="size-4" />
                        End Session
                    </button>
                </div>
            </div>
        </aside>
    );
};
