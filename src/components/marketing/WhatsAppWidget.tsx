"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message) return;

        // Format message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);
        // Replace with your actual WhatsApp business number
        const phoneNumber = "15551234567";

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        setMessage("");
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-card border border-border p-4 rounded-2xl shadow-2xl w-80 mb-2 glass-card"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                    <MessageCircle className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Chat with Us</h4>
                                    <p className="text-xs text-muted-foreground">Typically replies instantly</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-muted/50 p-3 rounded-xl text-sm text-muted-foreground">
                                Hi there! 👋 How can we help you with your project today?
                            </div>

                            <div className="relative">
                                <textarea
                                    className="w-full bg-background/50 border border-border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 min-h-[80px] resize-none"
                                    placeholder="Type your message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSend();
                                        }
                                    }}
                                />
                                <Button
                                    size="icon"
                                    className="absolute bottom-2 right-2 h-8 w-8 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                                    onClick={handleSend}
                                >
                                    <Send className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors relative group"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}

                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-background" />
                )}

                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping group-hover:opacity-40" />
            </motion.button>
        </div>
    );
};
