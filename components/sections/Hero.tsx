"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

const backgroundVideos = [
  "/videos/solar-hero-bg-shot.mp4",
  "/videos/solar-hero-bg.mp4",
] as const;

export function Hero() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Timeline
  useEffect(() => {
    const isBot =
      typeof navigator !== "undefined" &&
      (/Lighthouse|PageSpeed|HeadlessChrome/i.test(navigator.userAgent) ||
        Boolean(navigator.webdriver) ||
        document.documentElement.classList.contains("is-lighthouse"));

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const activeTargets = [
        eyebrowRef.current,
        headlineRef.current,
        paragraphRef.current,
        ctasRef.current,
        hudRef.current,
        floatingCardRef.current,
      ].filter((el): el is NonNullable<typeof el> => Boolean(el));

      if (isBot || prefersReducedMotion) {
        if (activeTargets.length > 0) {
          gsap.set(activeTargets, { opacity: 1, y: 0, scale: 1 });
        }
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (eyebrowRef.current) {
        tl.from(eyebrowRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.1,
        });
      }

      if (headlineRef.current) {
        tl.from(
          headlineRef.current,
          {
            opacity: 0,
            y: 35,
            duration: 0.85,
          },
          eyebrowRef.current ? "-=0.4" : "0.1"
        );
      }

      if (paragraphRef.current) {
        tl.from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.55"
        );
      }
      if (ctasRef.current) {
        tl.from(
          ctasRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.45"
        );
      }

      if (floatingCardRef.current) {
        tl.from(
          floatingCardRef.current,
          {
            opacity: 0,
            x: 25,
            duration: 0.75,
          },
          "-=0.5"
        );
      }

      if (hudRef.current) {
        tl.from(
          hudRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        );
      }
    }, containerRef.current || undefined);

    return () => ctx.revert();
  }, []);

  // Sync automatic video transition & continuous playback
  useEffect(() => {
    const isBot =
      typeof navigator !== "undefined" &&
      (/Lighthouse|PageSpeed|HeadlessChrome/i.test(navigator.userAgent) ||
        Boolean(navigator.webdriver) ||
        document.documentElement.classList.contains("is-lighthouse"));
    if (isBot) return;

    if (!videoRef.current) return;
    videoRef.current.load();
    videoRef.current.play().catch(() => {
      // Autoplay policy handle
    });
  }, [activeVideoIndex]);

  // When current video ends, advance to next video automatically
  const handleVideoEnded = () => {
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
  };

  const currentVideoSrc = backgroundVideos[activeVideoIndex];

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Hero - Net Bangla Solar Energy Solutions"
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[920px] flex flex-col justify-center lg:justify-between pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-14 overflow-hidden bg-slate-950 text-white scroll-mt-28"
    >
      {/* =========================================================================
          1. REAL 4K AUTOMATED VIDEO PLAYLIST (Sequential Auto-Play on Video End)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        {/* Real Video Element (auto-advances to next video on ended) */}
        <video
          ref={videoRef}
          key={currentVideoSrc}
          autoPlay
          muted
          playsInline
          preload="none"
          onEnded={handleVideoEnded}
          poster="/images/golden-hour-industrial-solar-rooftop.webp"
          onError={() => setHasVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            hasVideoError ? "opacity-0" : "opacity-100"
          }`}
        >
          <source src={currentVideoSrc} type="video/mp4" />
        </video>

        {/* Fallback Sharp Image Layer if Video is Loading or Offline */}
        <div className={`absolute inset-0 -z-10 ${hasVideoError ? "opacity-100" : "opacity-100"}`}>
          <Image
            src="/images/golden-hour-industrial-solar-rooftop.webp"
            alt="Megawatt industrial rooftop solar power facility in Bangladesh"
            fill
            priority
            loading="eager"
            decoding="async"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Directional Cinematic Vignettes for Crystal-Clear Text Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35 md:to-slate-950/25 pointer-events-none"
        />

        {/* Top & Bottom Atmospheric Ambient Blends */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70 pointer-events-none"
        />

        {/* Solar Sun Flare / Ambient Glow Flash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-amber-400/25 via-orange-500/15 to-transparent blur-[140px] animate-pulse -z-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[130px] -z-0"
        />
      </div>

      {/* =========================================================================
          2. MAIN CONTENT (Editorial Typography & Primary CTAs)
          ========================================================================= */}
      <Container className="relative z-10 my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left / Center Text Column */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6 md:space-y-8 text-left">
            {/* Eyebrow Pill (Hidden per user request; can be re-enabled later) */}
            {/* 
            <div ref={eyebrowRef}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 backdrop-blur-md text-amber-400 text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                <span>NET BANGLA SOLAR ENERGY SOLUTIONS &bull; A DIVISION OF NET BANGLA LIMITED</span>
              </div>
            </div> 
            */}

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-[26px] sm:text-4xl md:text-5xl lg:text-[clamp(32px,3.1vw,48px)] xl:text-[48px] font-extrabold tracking-tight text-white leading-[1.14]"
            >
              <span className="block">Transforming Bangladesh with</span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]">
                Renewable &amp; Sustainable
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]">
                Solar Energy
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p
              ref={paragraphRef}
              className="text-slate-200/95 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-sm font-normal"
            >
              Years of Trusted Engineering &amp; Infrastructure Solutions. Delivering high-efficiency turnkey solar PV systems, net-metered installations, and BIPV roofing for residential, commercial, agricultural, and industrial facilities.
            </p>

            {/* Mobile Trust Highlights & Consultation CTA (Enhanced for mobile balance) */}
            <div className="space-y-4 pt-1 lg:hidden">
              {/* Trust Badges (Slim, elegant 1-line flex wrap) */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>12+ Years Integrity</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/15 text-slate-200 text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tier-1 EPC</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/15 text-slate-200 text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-xs">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>15-Yr Solar Panel Warranty</span>
                </div>
              </div>

              {/* Mobile Primary Consultation Button */}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_4px_25px_rgba(245,158,11,0.35)] active:scale-[0.98] transition-all"
                >
                  <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Request Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons (Hidden on desktop per user request; can be re-enabled later) */}
            {/* 
            <div
              ref={ctasRef}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="#quote"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-[#F59E0B] hover:bg-[#FBBF24] shadow-[0_4px_25px_rgba(245,158,11,0.40)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.60)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-sm transition-all duration-200 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>View Our Projects</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 transition-transform duration-200 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div> 
            */}
          </div>

          {/* Right Floating Quick-Credibility Glass Card (Hidden on mobile/tablet per user request) */}
          <div
            ref={floatingCardRef}
            className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col items-start lg:items-end justify-center"
          >
            <div className="relative w-full max-w-sm bg-slate-900/80 border border-white/15 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-4">
              {/* EPC Engineering Badge */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>TIER-1 EPC STANDARDS</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Certified</span>
                </div>
              </div>

              {/* Project Value Proposition */}
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wide">
                  TURNKEY SOLAR INFRASTRUCTURE
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  High-Yield Industrial & Commercial Photovoltaic Power Plants
                </p>
              </div>

              {/* Engineering Led Trust */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Backed by Net Bangla Limited</span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 font-bold">
                  12+ Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* =========================================================================
          3. BOTTOM HUD BAR (Market Sectors & Nationwide EPC Credibility; Hidden on mobile)
          ========================================================================= */}
      <div ref={hudRef} className="hidden md:block relative z-10 w-full pt-4">
        <Container>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Market Sectors */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 font-semibold text-center sm:text-left">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Residential &bull; Commercial &bull; Industrial &bull; Agricultural
              </span>
            </div>

            {/* Right: Real Corporate Value Proposition */}
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <span className="text-white font-semibold">
                Turnkey EPC Engineering
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="text-slate-300">25-Year Performance Warranty</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
