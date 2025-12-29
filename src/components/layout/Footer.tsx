"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 border-t border-muted/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xl shadow-orange-500/20">
                <img src="/logo.svg" alt="Logo" className="w-full h-full object-cover p-1" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-foreground font-outfit font-black tracking-tighter uppercase text-2xl leading-none">
                  Horizon<span className="text-orange-600">EB1</span>
                </span>
                <span className="text-[7px] text-muted-foreground font-bold uppercase tracking-[0.4em]">
                  Tech Advisors
                </span>
              </div>
            </Link>
            <p className="text-sm font-inter font-medium leading-relaxed text-muted-foreground">
              Elite strategic advisory for tech professionals seeking US immigration. We bridge the gap between extraordinary technical innovation and national interest standards.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:hello@horizoneb1.com" className="hover:text-orange-500 transition-colors">
                  hello@horizoneb1.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+15551234567" className="hover:text-orange-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
              Services
            </h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
              <Link href="/eligibility" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Eligibility Scan
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Case Strategy
              </Link>
              <Link href="/roadmap" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Filing Roadmap
              </Link>
              <Link href="/drafting" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Evidence Drafting
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
              Company
            </h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
              <Link href="/about" className="text-muted-foreground hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Contact
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Dashboard
              </Link>
              <Link href="/login" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Login
              </Link>
            </div>
          </div>

          {/* Security & Legal */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground flex items-center gap-3">
              <Shield size={12} className="text-orange-500" /> Security & Legal
            </h4>
            <div className="p-6 rounded-2xl bg-muted/60 border border-muted-foreground/10 text-[10px] font-bold uppercase tracking-widest leading-loose text-muted-foreground">
              All case data is encrypted using US Federal post-quantum standards. Advisory is technical in nature; we are not a law firm.
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
              <Link href="/privacy" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Terms
              </Link>
              <Link href="/security" className="text-muted-foreground hover:text-orange-500 transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest font-black uppercase text-muted-foreground">
            © 2025 Horizon EB1 Tech Advisors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
