"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5"
        >
            <Link href="/" className="flex items-center gap-4 group transition-all duration-300">
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl shadow-orange-500/30 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-white font-black text-2xl tracking-tighter">H</span>
                </div>
                <div className="flex flex-col -space-y-1.5 translate-y-0.5">
                    <span className="text-2xl font-black tracking-tighter text-white leading-none">HORIZON<span className="text-orange-500">EB-1</span></span>
                    <span className="text-[9px] font-black text-white/40 tracking-[0.3em] uppercase">Tech Advisory Group</span>
                </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-muted-foreground/80 uppercase tracking-wide">
                <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
                <Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link>
                <Link href="/process" className="hover:text-orange-500 transition-colors">Stage Process</Link>
                <Link href="/eligibility" className="hover:text-orange-500 transition-colors">Eligibility Scan</Link>
            </div>

            <div className="flex items-center gap-3">
                <Link href="/login">
                    <Button variant="ghost" className="text-white hover:text-orange-500 font-bold uppercase text-[11px] tracking-wider">Log in</Button>
                </Link>
                <Link href="/eligibility">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/20 font-black px-6 rounded-lg uppercase text-[11px] tracking-widest h-11">
                        Start Your Scan
                    </Button>
                </Link>
            </div>
        </motion.nav>
    );
};
