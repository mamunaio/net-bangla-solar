"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sun } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            cardRef.current,
            eyebrowRef.current,
            headingRef.current,
            textRef.current,
            buttonsRef.current,
            trustRef.current,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // 1. CTA container fades and moves upward slightly
      tl.from(cardRef.current, {
        opacity: 0,
        y: 35,
        scale: 0.98,
        duration: 0.9,
      })
        // 2. Eyebrow reveals
        .from(
          eyebrowRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.5"
        )
        // 3. Heading reveals
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.75,
          },
          "-=0.4"
        )
        // 4. Supporting text reveals
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.45"
        )
        // 5. Buttons reveal
        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.45"
        )
        // 6. Supporting line reveals
        .from(
          trustRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.4"
        );

      // Subtle ambient background glow pulsation
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.06,
          opacity: 0.9,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Ready to go solar call to action"
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Outer ambient glow behind card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[550px] rounded-full bg-emerald-500/[0.08] blur-[160px] -z-10"
      />

      <Container>
        {/* Main CTA Cinematic Card */}
        <div
          id="quote"
          ref={cardRef}
          className="relative rounded-3xl lg:rounded-[2.5rem] border border-emerald-500/25 bg-gradient-to-b from-[#091e13]/90 via-[#05130b]/95 to-[#020804] px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:py-24 shadow-[0_0_80px_-20px_rgba(16,185,129,0.22)] backdrop-blur-2xl overflow-hidden text-center"
        >
          {/* Abstract Solar Energy Visual Background (Pure CSS / SVG) */}
          <div
            ref={glowRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            {/* Top Atmospheric Emerald Radial Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[400px] rounded-full bg-emerald-500/[0.18] blur-[120px]" />

            {/* Central Solar Gold Amber Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] rounded-full bg-amber-400/[0.07] blur-[100px]" />

            {/* Bottom Horizon Emerald Glow */}
            <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[550px] h-[320px] rounded-full bg-emerald-600/[0.14] blur-[130px]" />

            {/* Elliptical Solar Orbital Geometry */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.22] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cta-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Concentric Elliptical Orbital Rings */}
              <ellipse
                cx="500"
                cy="300"
                rx="420"
                ry="210"
                fill="none"
                stroke="url(#cta-orbit-grad)"
                strokeWidth="1.2"
                strokeDasharray="4 8"
              />
              <ellipse
                cx="500"
                cy="300"
                rx="290"
                ry="145"
                fill="none"
                stroke="#10b981"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
              <ellipse
                cx="500"
                cy="300"
                rx="160"
                ry="80"
                fill="none"
                stroke="#34d399"
                strokeOpacity="0.3"
                strokeWidth="0.8"
                strokeDasharray="3 6"
              />
            </svg>

            {/* Subtle floating solar energy nodes */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] opacity-60 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fcd34d] opacity-50 animate-pulse" />
            <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] opacity-50 animate-pulse" />
          </div>

          {/* Centered Content Composition */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* 1. Eyebrow */}
            <div ref={eyebrowRef} className="mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.18)]">
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span>READY TO GO SOLAR?</span>
              </div>
            </div>

            {/* 2. Main Heading */}
            <h2
              ref={headingRef}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.1] mb-6 max-w-3xl"
              style={{
                fontSize: "clamp(2.1rem, 5.2vw, 4.4rem)",
              }}
            >
              Let&apos;s build a{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-100 to-amber-200 bg-clip-text text-transparent">
                smarter energy future.
              </span>
            </h2>

            {/* 3. Supporting Paragraph */}
            <p
              ref={textRef}
              className="text-slate-300/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10 sm:mb-12"
            >
              Tell us about your energy needs, site, or project. Our team will
              help you explore a solar solution designed around your goals.
            </p>

            {/* 4. Action Buttons */}
            <div
              ref={buttonsRef}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12"
            >
              {/* Primary CTA Button */}
              <Link
                href="#quote"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_30px_rgba(34,197,94,0.35)] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b]"
              >
                <span>Get a Solar Quote</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary CTA Button */}
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-medium text-white/95 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-emerald-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400/90 group-hover:text-emerald-400 transition-colors" />
                <span>Talk to Our Team</span>
              </Link>
            </div>

            {/* 5. Small Supporting Trust Line */}
            <div
              ref={trustRef}
              className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium tracking-wide text-slate-400"
            >
              <span className="text-slate-300">Residential</span>
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 shadow-[0_0_6px_#34d399]"
              />
              <span className="text-slate-300">Commercial</span>
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 shadow-[0_0_6px_#34d399]"
              />
              <span className="text-slate-300">Industrial</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
