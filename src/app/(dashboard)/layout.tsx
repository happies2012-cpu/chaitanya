"use client";

import React from "react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { MobileNav } from "@/components/dashboard/MobileNav";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!isMounted || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617]">
                <Loader2 className="size-10 text-indigo-500 animate-spin" />
            </div>
        );
    }
    return (
        <div className="flex min-h-screen bg-[#020617]">
            <DashboardSidebar />
            <main className="flex-1 lg:pl-64">
                {children}
            </main>
            <MobileNav />
        </div>
    );
}
