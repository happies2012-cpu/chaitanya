"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email',
        value: 'hello@example.com',
        link: 'mailto:hello@example.com',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
    },
    {
        icon: MapPin,
        title: 'Office',
        value: '123 Business St, Suite 100, City, State 12345',
        link: '#',
    },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-mesh relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

                <div className="container-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="mb-6 text-gradient-primary">Get In Touch</h1>
                        <p className="text-xl text-muted-foreground">
                            Have a project in mind? We'd love to hear from you. Send us a
                            message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding-sm">
                <div className="container-center">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-xl text-center hover:premium-shadow transition-all group"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <info.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="mb-2">{info.title}</h4>
                                <p className="text-sm text-muted-foreground">{info.value}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section-padding">
                <div className="container-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6">Let's Start a Conversation</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Whether you have a question about features, pricing, need a
                                demo, or anything else, our team is ready to answer all your
                                questions.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="mb-2">Business Hours</h4>
                                    <p className="text-muted-foreground">
                                        Monday - Friday: 9:00 AM - 6:00 PM
                                        <br />
                                        Saturday: 10:00 AM - 4:00 PM
                                        <br />
                                        Sunday: Closed
                                    </p>
                                </div>

                                <div>
                                    <h4 className="mb-2">Response Time</h4>
                                    <p className="text-muted-foreground">
                                        We typically respond within 24 hours during business days.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="name">Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            required
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us more about your project..."
                                            rows={6}
                                            required
                                            className="mt-2 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-primary hover:opacity-90 h-12 group"
                                        disabled={isSubmitting || isSubmitted}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <CheckCircle className="w-5 h-5 mr-2" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="section-padding-sm bg-muted/50">
                <div className="container-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="aspect-video rounded-2xl bg-gradient-mesh flex items-center justify-center"
                    >
                        <div className="text-center">
                            <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                            <p className="text-muted-foreground">Map integration placeholder</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
