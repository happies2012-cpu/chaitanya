"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginInput } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const setAuth = useAuthStore((state) => state.setAuth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginInput) => {
        setIsLoading(true);
        // Simulate auth
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (data.email === 'admin@horizoneb1.com' && data.password === 'admin123') {
            setAuth({ id: '1', email: data.email, role: 'advisor', name: 'Elite Advisor' }, 'dummy-token');
            toast.success('Access Granted. Welcome, Advisor.');
            router.push('/dashboard');
        } else if (data.email === 'client@horizoneb1.com' && data.password === 'client123') {
            setAuth({ id: '2', email: data.email, role: 'client', name: 'Extraordinary Talent' }, 'dummy-token');
            toast.success('Secure Session Established.');
            router.push('/dashboard');
        } else {
            toast.error('Invalid Credentials. Contact Support.');
        }
        setIsLoading(false);
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[#020617] bg-mesh relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-500 shadow-2xl shadow-orange-500/20 mb-4">
                        <span className="text-white font-black text-3xl">H</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight uppercase">HORIZON<span className="text-orange-500">EB-1</span></h1>
                    <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px]">Tech Advisors | Secure Auth</p>
                </div>

                <Card className="glass-card border-white/10 shadow-3xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Secure Access</CardTitle>
                        <CardDescription>Enter your institutional credentials to continue</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="admin@horizoneb1.com"
                                        className="pl-10 bg-white/5 border-white/10 text-white"
                                        {...register('email')}
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-rose-400 font-bold">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300 font-bold">Forgot?</Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-10 bg-white/5 border-white/10 text-white"
                                        {...register('password')}
                                    />
                                </div>
                                {errors.password && <p className="text-xs text-rose-400 font-bold">{errors.password.message}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <Button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black h-12 shadow-xl shadow-orange-500/20 group"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <>
                                        Authorize Security Keys
                                        <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                            <p className="text-xs text-center text-muted-foreground font-medium">
                                Accessing the node as <span className="text-orange-500 font-bold">Root Advisor</span> or <span className="text-orange-400 font-bold">Extraordinary Talent</span>? Use SSO for faster entry.
                            </p>
                        </CardFooter>
                    </form>
                </Card>
            </motion.div>
        </main>
    );
}
