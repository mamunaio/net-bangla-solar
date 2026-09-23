"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const impactCardRef = useRef<HTMLDivElement>(null);
  const energyBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Isolate GSAP context for clean garbage collection and React StrictMode safety
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Reduced motion: instantly render without transition
        gsap.set(
          [
            eyebrowRef.current,
            headlineRef.current,
            paragraphRef.current,
            ctasRef.current,
            trustRef.current,
            imageRef.current,
            impactCardRef.current,
            energyBadgeRef.current,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.1,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 35,
            duration: 0.85,
          },
          "-=0.4"
        )
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.55"
        )
        .from(
          ctasRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.45"
        )
        .from(
          trustRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
          },
          "-=0.35"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.04,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.9"
        )
        .from(
          impactCardRef.current,
          {
            opacity: 0,
            y: 28,
            duration: 0.75,
          },
          "-=0.6"
        )
        .from(
          energyBadgeRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Hero - Net Bangla Solar Company"
      className="relative min-h-[760px] lg:min-h-[850px] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden scroll-mt-28"
    >
      {/* Background radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[700px] h-[600px] rounded-full bg-emerald-500/[0.12] blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-5 w-[600px] h-[600px] rounded-full bg-amber-500/[0.06] blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-emerald-600/[0.05] blur-[160px] -z-10"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: Editorial Typography & Call to Action */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 md:space-y-8 text-left">
            {/* Eyebrow */}
            <div ref={eyebrowRef}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span>Powering a Cleaner Future</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(46px,5.2vw,80px)] font-bold tracking-tight text-white leading-[1.08]"
            >
              Powering a{" "}
              <span className="gradient-text-solar block sm:inline">
                Brighter Tomorrow.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              ref={paragraphRef}
              className="text-solar-text-secondary text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Smart solar solutions engineered for a cleaner, more resilient
              Bangladesh.
            </p>

            {/* CTA Buttons - Standardized rounded-xl */}
            <div
              ref={ctasRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <Link
                href="#quote"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Get a Solar Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-white/90 hover:text-white glass-panel hover:bg-white/[0.08] border-white/10 hover:border-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Explore Our Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-solar-text-muted transition-transform duration-300 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Trust / Market Coverage Micro-Line */}
            <div
              ref={trustRef}
              className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-solar-text-muted font-medium"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Residential • Commercial • Industrial</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Cinematic Image Composition & Floating Glass Card */}
          <div
            ref={imageWrapperRef}
            className="lg:col-span-5 xl:col-span-6 relative w-full mt-6 lg:mt-0"
          >
            {/* Ambient Image Glow Background */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 via-emerald-500/10 to-amber-500/15 rounded-[2.5rem] blur-2xl -z-10"
            />

            {/* Main Cinematic Image Card with Fallback Surface */}
            <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-gradient-to-br from-[#0c2c1a] via-[#06180e] to-black">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
                {imageError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0d331d] via-[#071a0f] to-[#030a05]">
                    <Sun className="w-16 h-16 text-amber-400/80 mb-3 animate-spin-slow" />
                    <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
                      Solar Infrastructure
                    </span>
                    <span className="text-slate-400 text-xs mt-1">
                      Powering a Cleaner Tomorrow
                    </span>
                  </div>
                ) : (
                  <Image
                    ref={imageRef}
                    src="/images/solar-hero.jpg"
                    alt="Industrial solar panels generating clean energy at sunset"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                    className="object-cover object-center transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Atmospheric Controlled Vignette Overlay (Leaves image vibrant and clear) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050b07]/80 via-transparent to-black/15 pointer-events-none"
                />
              </div>
            </div>

            {/* Floating Glassmorphism Impact Card */}
            <div
              ref={impactCardRef}
              className="relative sm:absolute -mt-6 sm:mt-0 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 z-20 glass-panel-elevated p-4 sm:p-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8)] border border-emerald-500/30 w-full max-w-[260px]"
            >
              <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-solar-text-muted font-medium">
                  Clean Energy Impact
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="pt-3 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-baseline gap-1">
                  <span>25+</span>
                  <span className="text-emerald-400 text-lg">MW</span>
                </div>
                <p className="text-xs text-solar-text-secondary leading-snug">
                  Solar capacity delivered
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 mt-1 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Growing every year</span>
              </div>
            </div>

            {/* Secondary Floating Energy Badge */}
            <div
              ref={energyBadgeRef}
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-panel border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.25)] text-amber-400"
              aria-hidden="true"
            >
              <Sun className="w-6 h-6 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
