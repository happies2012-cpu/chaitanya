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
            <div className="p-6">
                <div className="flex items-center gap-3 mb-10 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <span className="text-white font-black text-xl">H</span>
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-sm font-black text-white uppercase tracking-tighter">HORIZON<span className="text-orange-500">EB-1</span></span>
                        <span className="text-[8px] font-black text-muted-foreground tracking-widest uppercase">Tech Advisors</span>
                    </div>
                </div>

                <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group",
                                    isActive
                                        ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className={cn("size-5", isActive ? "text-white" : "group-hover:text-orange-500")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase mb-2">
                        <Brain size={12} strokeWidth={3} /> AI Models Active
                    </div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                        Cloud: Claude 3.5<br />
                        Local: Llama 3 (Backup)
                    </div>
                </div>

                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-bold text-muted-foreground hover:text-rose-400 hover:bg-rose-500/5 transition-all">
                    <LogOut className="size-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
};
