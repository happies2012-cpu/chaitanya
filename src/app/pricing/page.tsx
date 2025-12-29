"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Star, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/layout/Footer';
import { servicePackages, PaymentManager } from '@/lib/payments';
import toast from 'react-hot-toast';

export default function PricingPage() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSelectPackage = async (packageId: string, provider: 'stripe' | 'razorpay' | 'paypal') => {
        setSelectedPackage(packageId);
        setIsProcessing(true);

        try {
            // Initialize payment manager (use environment variables in production)
            const paymentManager = new PaymentManager({
                stripe: { publishableKey: process.env.NEXT_PUBLIC_STRIPE_KEY || 'pk_test_demo' },
                razorpay: { keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY || 'rzp_test_demo' },
                paypal: { clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'paypal_demo' },
            });

            const result = await paymentManager.processPayment(provider, packageId, {
                name: 'Demo User',
                email: 'demo@example.com',
                phone: '+1234567890',
            });

            if (result.success) {
                toast.success('Payment initiated successfully!');
            } else {
                toast.error(result.error || 'Payment failed');
            }
        } catch (error: any) {
            toast.error(error.message || 'An error occurred');
        } finally {
            setIsProcessing(false);
            setSelectedPackage(null);
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <Zap className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-bold uppercase tracking-wider text-orange-600">
                                Transparent Pricing
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-outfit font-black mb-6 uppercase tracking-tight text-foreground">
                            Choose Your <span className="text-gradient-primary">Advisory Path</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
                            Select the package that best fits your EB-1A journey. All packages include our signature technical hardening methodology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative rounded-3xl p-8 border ${pkg.popular
                                        ? 'border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-transparent shadow-2xl shadow-orange-500/20'
                                        : 'border-muted-foreground/10 bg-card/50'
                                    } backdrop-blur-sm`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider">
                                            <Star className="w-3 h-3 fill-white" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-outfit font-black mb-2 uppercase tracking-tight">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        {pkg.description}
                                    </p>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-5xl font-outfit font-black text-foreground">
                                            ${pkg.price.toLocaleString()}
                                        </span>
                                        <span className="text-muted-foreground text-sm uppercase tracking-wider">
                                            {pkg.currency}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-3">
                                    <Button
                                        onClick={() => handleSelectPackage(pkg.id, 'stripe')}
                                        disabled={isProcessing && selectedPackage === pkg.id}
                                        className={`w-full h-12 font-black uppercase tracking-wider ${pkg.popular
                                                ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/20'
                                                : 'bg-foreground text-background hover:bg-foreground/90'
                                            }`}
                                    >
                                        {isProcessing && selectedPackage === pkg.id ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <CreditCard className="w-4 h-4" />
                                                Get Started
                                            </span>
                                        )}
                                    </Button>

                                    <div className="flex gap-2">
                                        <Button
                                            onClick={() => handleSelectPackage(pkg.id, 'razorpay')}
                                            disabled={isProcessing}
                                            variant="outline"
                                            className="flex-1 text-xs"
                                        >
                                            Razorpay
                                        </Button>
                                        <Button
                                            onClick={() => handleSelectPackage(pkg.id, 'paypal')}
                                            disabled={isProcessing}
                                            variant="outline"
                                            className="flex-1 text-xs"
                                        >
                                            PayPal
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Shield className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                            <h4 className="text-lg font-outfit font-black mb-2 uppercase">
                                Secure Payments
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                All transactions are encrypted and PCI-DSS compliant
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Zap className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                            <h4 className="text-lg font-outfit font-black mb-2 uppercase">
                                Instant Access
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Get immediate access to your advisory portal after payment
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Star className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                            <h4 className="text-lg font-outfit font-black mb-2 uppercase">
                                Money-Back Guarantee
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                30-day satisfaction guarantee on all packages
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
