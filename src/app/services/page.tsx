"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Smartphone,
    Palette,
    Rocket,
    BarChart,
    Shield,
    Cloud,
    Zap,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/layout/Footer';

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description:
            'Custom web applications built with modern technologies for optimal performance and user experience.',
        features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Database Design'],
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description:
            'Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.',
        features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications'],
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description:
            'Beautiful, intuitive interfaces designed with user needs and business goals in mind.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description:
            'Scalable cloud infrastructure and deployment strategies for modern applications.',
        features: ['AWS & Azure', 'DevOps', 'CI/CD Pipelines', 'Monitoring'],
    },
    {
        icon: BarChart,
        title: 'Digital Marketing',
        description:
            'Data-driven marketing strategies to grow your online presence and reach your audience.',
        features: ['SEO Optimization', 'Content Strategy', 'Analytics', 'Social Media'],
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description:
            'Comprehensive security audits and compliance solutions to protect your business.',
        features: ['Security Audits', 'GDPR Compliance', 'Penetration Testing', 'Data Protection'],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            {/* Hero Section */}
            <section className="section-padding bg-gradient-mesh relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

                <div className="container-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-semibold">Our Services</span>
                        </div>
                        <h1 className="mb-6 text-gradient-primary">
                            Solutions That Drive Success
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            From concept to deployment, we offer comprehensive services to
                            bring your vision to life and help your business thrive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 rounded-2xl hover:premium-shadow transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="mb-3 text-2xl">{service.title}</h3>
                                <p className="text-muted-foreground mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-muted-foreground"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-muted/50">
                <div className="container-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="mb-4">Our Process</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A proven methodology that ensures quality, efficiency, and
                            exceptional results.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Understanding your needs' },
                            { step: '02', title: 'Design', desc: 'Creating the blueprint' },
                            { step: '03', title: 'Development', desc: 'Building the solution' },
                            { step: '04', title: 'Delivery', desc: 'Launch and support' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-6xl font-bold text-gradient-primary mb-4">
                                    {item.step}
                                </div>
                                <h4 className="mb-2">{item.title}</h4>
                                <p className="text-muted-foreground">{item.desc}</p>
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
                        className="glass-card p-12 rounded-2xl text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                        <div className="relative z-10">
                            <Rocket className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
                            <h2 className="mb-4">Let's Build Something Great</h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Ready to start your project? Contact us today for a free
                                consultation.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                                    Start Your Project
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
