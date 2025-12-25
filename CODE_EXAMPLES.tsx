// ============================================
// COMPLETE CODE SNIPPET - READY TO USE
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Smartphone, Palette } from 'lucide-react';

// ============================================
// EXAMPLE 1: Hero Section with Animations
// ============================================

export function HeroExample() {
    return (
        <section className="section-padding bg-gradient-mesh relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

            <div className="container-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">New Feature</span>
                    </div>

                    {/* Title */}
                    <h1 className="mb-6 text-gradient-primary">
                        Build Amazing Experiences
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-muted-foreground mb-8">
                        Create stunning, responsive applications with our modern design system.
                    </p>

                    {/* CTA Button */}
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 group">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// EXAMPLE 2: Feature Cards with Stagger Animation
// ============================================

const features = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Build modern web applications with cutting-edge technologies.',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description: 'Create native experiences for iOS and Android platforms.',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Design beautiful interfaces that users love to interact with.',
    },
];

export function FeatureCardsExample() {
    return (
        <section className="section-padding">
            <div className="container-center">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl hover:premium-shadow transition-all group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="mb-3 text-2xl">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// EXAMPLE 3: Centered Layout with Form
// ============================================

export function CenteredFormExample() {
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="glass-card p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>

                    <form className="space-y-4">
                        {/* Email Input with Focus Glow */}
                        <motion.div
                            animate={{
                                boxShadow: focused
                                    ? '0 0 0 3px rgba(99, 102, 241, 0.2)'
                                    : '0 0 0 0px rgba(99, 102, 241, 0)'
                            }}
                            transition={{ duration: 0.3 }}
                            className="rounded-lg"
                        >
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all"
                            />
                        </motion.div>

                        {/* Submit Button with Hover */}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                type="submit"
                                className="w-full h-12 bg-gradient-primary hover:opacity-90"
                            >
                                Continue
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

// ============================================
// EXAMPLE 4: Responsive Grid Layout
// ============================================

export function ResponsiveGridExample() {
    const items = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Item ${i + 1}`,
    }));

    return (
        <section className="section-padding bg-muted/50">
            <div className="container-center">
                {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl"
                        >
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// EXAMPLE 5: Button with Icon Variations
// ============================================

export function ButtonExamples() {
    return (
        <div className="flex flex-wrap gap-4">
            {/* Primary Gradient Button */}
            <Button className="bg-gradient-primary hover:opacity-90">
                Primary Action
            </Button>

            {/* Outline Button */}
            <Button variant="outline" className="border-primary text-primary">
                Secondary Action
            </Button>

            {/* Icon Button */}
            <Button size="icon" className="rounded-full">
                <Zap className="w-5 h-5" />
            </Button>

            {/* Button with Icon */}
            <Button className="bg-gradient-primary hover:opacity-90 group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
    );
}

// ============================================
// UTILITY CLASSES REFERENCE
// ============================================

/*
LAYOUT:
- .container-center     → Centered container with max-width
- .flex-center          → Flex with items and justify center
- .section-padding      → Responsive section padding
- .section-padding-sm   → Smaller section padding

EFFECTS:
- .glass                → Glassmorphism effect
- .glass-card           → Glass card with shadow
- .premium-shadow       → Premium box shadow
- .premium-shadow-lg    → Larger premium shadow

GRADIENTS:
- .bg-gradient-primary  → Primary gradient background
- .bg-gradient-mesh     → Mesh gradient background
- .text-gradient-primary → Primary gradient text

ANIMATIONS:
- .animate-fadeIn       → Fade in animation
- .animate-slideInLeft  → Slide from left
- .animate-slideInRight → Slide from right
- .animate-float        → Floating animation
- .animate-shimmer      → Shimmer effect

COLORS (Tailwind):
- bg-primary            → Indigo background
- bg-secondary          → Purple background
- bg-accent             → Pink background
- text-primary          → Indigo text
- text-muted-foreground → Muted text color
*/

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

export const animationVariants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeInOut' }
        }
    },

    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 }
        }
    },

    slideInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    },

    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    },

    staggerItem: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    }
};

// Usage:
// <motion.div variants={animationVariants.fadeUp} initial="hidden" animate="visible">
//   Content
// </motion.div>

// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

/*
sm:  640px  → Large phones
md:  768px  → Tablets
lg:  1024px → Laptops
xl:  1280px → Desktops
2xl: 1536px → Large screens

Example:
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
*/

// ============================================
// COLOR PALETTE HEX CODES
// ============================================

export const colors = {
    primary: '#6366F1',      // Indigo
    secondary: '#8B5CF6',    // Purple
    accent: '#EC4899',       // Pink
    success: '#10B981',      // Emerald
    destructive: '#EF4444',  // Red
    background: {
        light: '#F8FAFC',      // Almost white
        dark: '#0F172A',       // Deep slate
    },
    foreground: {
        light: '#1E293B',      // Dark slate
        dark: '#F8FAFC',       // Almost white
    },
    muted: {
        light: '#F1F5F9',      // Light slate
        dark: '#1E293B',       // Dark slate
    },
    border: {
        light: '#E2E8F0',      // Slate 200
        dark: '#334155',       // Slate 700
    }
};

// ============================================
// TYPOGRAPHY SCALE
// ============================================

export const typography = {
    h1: { size: '48px', weight: 700, lineHeight: 1.2 },
    h2: { size: '36px', weight: 600, lineHeight: 1.2 },
    h3: { size: '28px', weight: 600, lineHeight: 1.3 },
    h4: { size: '24px', weight: 500, lineHeight: 1.4 },
    h5: { size: '20px', weight: 500, lineHeight: 1.4 },
    body: { size: '16px', weight: 400, lineHeight: 1.6 },
    small: { size: '14px', weight: 400, lineHeight: 1.5 },
    caption: { size: '12px', weight: 400, lineHeight: 1.4 },
};
