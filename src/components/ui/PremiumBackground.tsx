"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const PremiumBackground = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617] pointer-events-none">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-[#020617]" />

            {/* Dynamic Grid System */}
            <div className="absolute inset-0 opacity-[0.15]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, oklch(0.7 0.22 45 / 0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, oklch(0.7 0.22 45 / 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)'
                    }}
                />
            </div>

            {/* Animated Light Orbs */}
            <motion.div
                style={{ y: y1 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-orange-600/20 blur-[120px]"
            />

            <motion.div
                style={{ y: y2 }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-amber-500/10 blur-[150px]"
            />

            {/* Scanning Line Effect */}
            <motion.div
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent z-10 opacity-30"
            />

            {/* Noise Texture for Realism */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#020617] opacity-80" />
        </div>
    );
};
