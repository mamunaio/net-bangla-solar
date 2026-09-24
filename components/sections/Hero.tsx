"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

const heroSlides = [
  {
    src: "/images/profile-rooftop-solar-01.jpg",
    alt: "Completed rooftop solar power installation in Bangladesh by Net Bangla Limited",
    label: "Rooftop Solar",
    title: "Turning unused roofs into productive energy assets",
  },
  {
    src: "/images/profile-rooftop-solar-02.jpg",
    alt: "Large on-grid rooftop solar array installed by Net Bangla Limited",
    label: "On-Grid Systems",
    title: "Engineered for reliable daytime power generation",
  },
  {
    src: "/images/profile-rooftop-solar-03.jpg",
    alt: "Solar photovoltaic modules on engineered mounting structure",
    label: "Structural Engineering",
    title: "Built for performance, safety, and long-term value",
  },
] as const;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
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
            imageWrapperRef.current,
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
          imageWrapperRef.current,
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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Hero - Net Bangla Solar"
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
                <span>NET BANGLA SOLAR &bull; A DIVISION OF NET BANGLA LIMITED</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(44px,5vw,76px)] font-bold tracking-tight text-white leading-[1.1]"
            >
              Empowering Bangladesh with{" "}
              <span className="gradient-text-solar">
                Reliable, Sustainable Solar Energy
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p
              ref={paragraphRef}
              className="text-solar-text-secondary text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Tailored Solar PV Systems Designed for Homes, Farms, Factories, and
              Commercial Structures. Over 12 Years of Engineering and
              Infrastructure Integrity.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctasRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <Link
                href="#quote"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-white/90 hover:text-white glass-panel hover:bg-white/[0.08] border-white/10 hover:border-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>View Our Projects</span>
                <ArrowUpRight className="w-4 h-4 text-solar-text-muted transition-transform duration-300 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Trust / Market Coverage Micro-Line */}
            <div
              ref={trustRef}
              className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-solar-text-muted font-medium"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                Residential &bull; Commercial &bull; Industrial &bull; Agricultural
              </span>
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
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full bg-[#071a0f]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    aria-hidden={activeSlide !== index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                      activeSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {failedImages[index] ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0d331d] via-[#071a0f] to-[#030a05]">
                        <Sun className="w-16 h-16 text-amber-400/80 mb-3 animate-spin-slow" />
                        <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
                          Solar Infrastructure
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                        className={`object-cover transition-transform duration-[6500ms] ease-linear ${
                          index === 0
                            ? "object-top scale-[1.28]"
                            : activeSlide === index
                              ? "object-center scale-[1.04]"
                              : "object-center scale-100"
                        }`}
                        onError={() =>
                          setFailedImages((current) => ({ ...current, [index]: true }))
                        }
                      />
                    )}
                  </div>
                ))}

                {/* Atmospheric Controlled Vignette Overlay (Leaves image vibrant and clear) */}
                {/* Atmospheric Controlled Vignette Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"
                />

                {/* Top-Left Slide Category Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    {heroSlides[activeSlide].label}
                  </span>
                  <span className="text-white/40 text-xs" aria-hidden="true">&bull;</span>
                  <span className="text-[10px] font-mono text-slate-300">
                    0{activeSlide + 1} / 0{heroSlides.length}
                  </span>
                </div>

                {/* Bottom-Right Slide Indicators */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-10 flex items-center gap-1.5 bg-black/60 px-3 py-2 rounded-xl border border-white/15 backdrop-blur-md" role="group" aria-label="Select hero project image">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show image ${index + 1}: ${slide.label}`}
                      aria-current={activeSlide === index ? "true" : undefined}
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
                        activeSlide === index
                          ? "w-7 bg-emerald-300"
                          : "w-3 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Non-Numerical Credibility Card */}
            <div
              ref={impactCardRef}
              className="relative sm:absolute -mt-6 sm:mt-0 sm:-bottom-6 sm:-left-6 lg:-bottom-7 lg:-left-7 z-20 glass-panel-elevated p-4 sm:p-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8)] border border-emerald-500/30 w-full max-w-[280px]"
            >
              <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                  ENGINEERING-LED SOLAR
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="pt-2.5 space-y-1">
                <p className="text-xs sm:text-sm font-medium text-white leading-snug">
                  Designed, installed and supported across Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2.5 mt-1 border-t border-white/5 text-[11px] text-slate-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Backed by Net Bangla Limited</span>
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
