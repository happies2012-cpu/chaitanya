"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

const DataParticle = ({ i }: { i: number }) => (
    <motion.div
        initial={{
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
            opacity: 0
        }}
        animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1]
        }}
        transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: i * 0.5
        }}
        className="absolute w-[1px] h-[40px] bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0"
    />
);

export const PremiumBackground = () => {
    const { scrollYProgress } = useScroll();
    const { theme, resolvedTheme } = useTheme();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

    const isDark = resolvedTheme === "dark";

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-background pointer-events-none transition-colors duration-700">
            {/* Mesh Background */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-40' : 'opacity-100'}`}>
                <div className="absolute inset-0 bg-mesh opacity-30 dark:opacity-20" />
            </div>

            {/* Light Mode Specificity */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50" />
            </div>

            {/* Federal Grid System */}
            <div className="absolute inset-0 opacity-[0.08]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, oklch(0.7 0.22 45 / 0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, oklch(0.7 0.22 45 / 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, oklch(0.7 0.22 45 / 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, oklch(0.7 0.22 45 / 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>

            {/* Data Stream Particles */}
            <div className="absolute inset-0 z-0">
                {Array.from({ length: 30 }).map((_, i) => (
                    <DataParticle key={i} i={i} />
                ))}
            </div>

            {/* Strategic Orbs */}
            <motion.div
                style={{ y: y1 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-orange-600/10 blur-[150px]"
            />

            <motion.div
                style={{ y: y2 }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] rounded-full bg-amber-500/5 blur-[180px]"
            />

            {/* Federal Scan Protocol effect */}
            <motion.div
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent z-10"
            />

            <motion.div
                initial={{ top: "-20%" }}
                animate={{ top: "120%" }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 4
                }}
                className="absolute left-0 right-0 h-[1px] bg-orange-500/30 z-10 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Vignette */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-90' : 'opacity-40'}`}
                style={{
                    background: isDark
                        ? 'radial-gradient(circle at 50% 0%, transparent 0%, #020617 80%)'
                        : 'radial-gradient(circle at 50% 0%, transparent 0%, white 90%)'
                }}
            />
        </div>
    );
};
