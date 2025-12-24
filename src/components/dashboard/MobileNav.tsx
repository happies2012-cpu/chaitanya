"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Zap, Cpu, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileLinks = [
    { name: "Dash", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Scan", icon: Zap, href: "/eligibility" },
    { name: "Vault", icon: Cpu, href: "/evidence" },
    { name: "Legal", icon: Search, href: "/strategy" },
    { name: "Elite", icon: User, href: "/authorities" },
];

export const MobileNav = () => {
    const pathname = usePathname();

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
            <nav className="glass border border-white/10 rounded-2xl flex items-center justify-between p-2 shadow-2xl shadow-black">
                {mobileLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex flex-col items-center justify-center flex-1 py-1 gap-1 rounded-xl transition-all",
                                isActive ? "text-orange-500 bg-orange-500/10" : "text-muted-foreground"
                            )}
                        >
                            <link.icon className={cn("size-6", isActive && "stroke-[3px]")} />
                            <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
