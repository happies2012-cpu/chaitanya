"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Heart, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/layout/Footer';

const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Team Members', value: '50+' },
];

const values = [
    {
        icon: Heart,
        title: 'Passion',
        description: 'We love what we do and it shows in every project we deliver.',
    },
    {
        icon: Target,
        title: 'Excellence',
        description: 'We strive for perfection in every detail and interaction.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'We work closely with our clients to achieve their goals.',
    },
    {
        icon: Globe,
        title: 'Innovation',
        description: 'We stay ahead of trends to deliver cutting-edge solutions.',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            {/* Hero Section */}
            <section className="section-padding bg-gradient-mesh relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

                <div className="container-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="mb-6 text-gradient-primary">About Us</h1>
                        <p className="text-xl text-muted-foreground">
                            We're a team of passionate professionals dedicated to creating
                            exceptional digital experiences that drive real results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding-sm bg-card">
                <div className="container-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding">
                <div className="container-center">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                We believe in the power of technology to transform businesses
                                and improve lives. Our mission is to deliver innovative
                                solutions that exceed expectations and create lasting value.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Through collaboration, creativity, and commitment to
                                excellence, we help our clients achieve their goals and stay
                                ahead in an ever-changing digital landscape.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
                                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                                    <TrendingUp className="w-32 h-32 text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-muted/50">
                <div className="container-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="mb-4">Our Values</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            These core principles guide everything we do and shape how we
                            work with our clients and each other.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-xl text-center hover:premium-shadow transition-all"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="mb-2 text-xl">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 rounded-2xl text-center"
                    >
                        <h2 className="mb-4">Ready to Work Together?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's create something amazing together. Get in touch to discuss
                            your project.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                                Get Started
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
