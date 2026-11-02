"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sun,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  RotateCw,
  Sparkles,
  MessageCircle,
  ExternalLink,
  Zap,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function MaintenanceClient() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Solar Gradients & Rays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[130px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[120px] -z-10"
      />

      {/* Subtle Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
      />

      {/* TOP HEADER / BRAND BAR */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo priority loading="eager" className="h-12 sm:h-14 w-auto brightness-110" />
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>24/7 Field Operations Active</span>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <section className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center justify-center text-center">
        {/* Animated Solar Maintenance Badge Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(245,158,11,0.35)] backdrop-blur-xl">
            <div className="relative">
              <Sun className="w-12 h-12 sm:w-14 sm:h-14 text-amber-400 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-200 fill-amber-300" />
              </div>
            </div>
          </div>
          {/* Subtle Ring Ping */}
          <div className="absolute -inset-2 rounded-3xl border border-amber-400/20 animate-ping opacity-25 pointer-events-none" />
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Scheduled System Enhancement &amp; Upgrade</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
          Empowering Clean Energy <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            We’ll Be Right Back
          </span>
        </h1>

        {/* Description Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
          Our digital portal is currently undergoing scheduled infrastructure upgrades and security optimizations. We are enhancing system performance to bring you a faster, smarter solar engineering and ROI experience.
        </p>

        {/* Active Operations Guarantee Callout */}
        <div className="w-full max-w-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/40 border border-emerald-500/20 rounded-2xl p-4 sm:p-5 mb-10 text-left flex items-start gap-3.5 shadow-lg backdrop-blur-md">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-bold text-white mb-0.5">
              Active Solar EPC Installations &amp; Grid Operations Unaffected
            </p>
            <p className="text-slate-400 leading-relaxed">
              All ongoing project executions, industrial installations, net metering filings, and 24/7 solar monitoring systems continue to function without interruption.
            </p>
          </div>
        </div>

        {/* Action Button: Check Status */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.35)] cursor-pointer disabled:opacity-75"
          >
            <RotateCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            <span>{isRefreshing ? "Checking Status..." : "Check System Status"}</span>
          </button>
          <a
            href="https://wa.me/8801550155024?text=Hello%20Net%20Bangla%20Solar%2C%20I%20would%20like%20to%20inquire%20about%20your%20solar%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-all duration-200 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* FAST CONTACT CHANNELS GRID */}
        <div className="w-full text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Need Immediate Assistance? Get in Touch With Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* 1. Phone Hotline Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/40 transition-colors duration-200 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("+8801550155024", "phone")}
                  aria-label="Copy hotline number"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedType === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Direct Hotline</p>
                <div className="mt-1 space-y-0.5">
                  <a
                    href="tel:+8801550155024"
                    className="block text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors font-mono"
                  >
                    +880 1550-155024
                  </a>
                  <a
                    href="tel:+8801970711632"
                    className="block text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors font-mono"
                  >
                    +880 1970-711632
                  </a>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Sun–Thu 9AM–6PM, Sat 9AM–2PM</span>
              </div>
            </div>

            {/* 2. Official Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/40 transition-colors duration-200 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("solar@netbanglaltd.com", "email")}
                  aria-label="Copy email address"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy Email"
                >
                  {copiedType === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Engineering &amp; Sales Desk</p>
                <a
                  href="mailto:solar@netbanglaltd.com"
                  className="block text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors truncate mt-1"
                >
                  solar@netbanglaltd.com
                </a>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Direct response within 24 business hours</span>
              </div>
            </div>

            {/* 3. Corporate Head Office Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/40 transition-colors duration-200 backdrop-blur-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Head Office</p>
                <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                  Level # 02 &amp; 03, House # 07, Road # 11, Block # L, Sector # 03, Aftabnagar, Dhaka-1212
                </p>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 py-6 px-4 sm:px-6 lg:px-8 text-center backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-semibold text-slate-300">Net Bangla Limited</span>
            <span className="text-slate-700">&bull;</span>
            <span>BASIS Member ID: A-405</span>
            <span className="text-slate-700">&bull;</span>
            <span>BACCO Member</span>
            <span className="text-slate-700">&bull;</span>
            <span>BTRC Registered</span>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Net Bangla Solar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

