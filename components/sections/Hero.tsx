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
    src: "/images/hero-solar-01.jpg",
    alt: "Completed rooftop solar power installation engineered by Net Bangla Solar",
    label: "Rooftop Solar EPC",
    title: "Engineered rooftop photovoltaic systems across Bangladesh",
  },
  {
    src: "/images/hero-solar-02.jpg",
    alt: "Rooftop solar panel array on commercial facility in Bangladesh",
    label: "Commercial & Industrial PV",
    title: "Maximizing roof space for clean daytime electricity generation",
  },
  {
    src: "/images/hero-solar-03.jpg",
    alt: "Rooftop solar photovoltaic modules on robust mounting structure",
    label: "Structural & Electrical Integrity",
    title: "Built for high performance, safety, and long-term durability",
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
      className="relative min-h-[760px] lg:min-h-[850px] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden scroll-mt-28 bg-white"
    >
      {/* Background radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[700px] h-[600px] rounded-full bg-amber-500/[0.08] blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-5 w-[600px] h-[600px] rounded-full bg-sky-500/[0.05] blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[160px] -z-10"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: Editorial Typography & Call to Action */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 md:space-y-8 text-left">
            {/* Eyebrow */}
            <div ref={eyebrowRef}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
                <span>NET BANGLA SOLAR &bull; A DIVISION OF NET BANGLA LIMITED</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(44px,5vw,76px)] font-extrabold tracking-tight text-slate-900 leading-[1.1]"
            >
              Empowering Bangladesh with{" "}
              <span className="gradient-text-solar">
                Reliable, Sustainable Solar Energy
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p
              ref={paragraphRef}
              className="text-slate-600 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
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
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-[#F59E0B] hover:bg-[#D97706] shadow-[0_4px_20px_rgba(245,158,11,0.30)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.45)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-800 btn-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>View Our Projects</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Trust / Market Coverage Micro-Line */}
            <div
              ref={trustRef}
              className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 font-semibold"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
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
              className="absolute -inset-4 bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-sky-500/10 rounded-[2.5rem] blur-2xl -z-10"
            />

            {/* Main Cinematic Image Card with Fallback Surface */}
            <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full bg-slate-100">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    aria-hidden={activeSlide !== index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                      activeSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {failedImages[index] ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50">
                        <Sun className="w-16 h-16 text-amber-500/80 mb-3 animate-spin-slow" />
                        <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">
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
                        className={`object-cover object-center transition-transform duration-[6500ms] ease-linear ${
                          activeSlide === index
                            ? "scale-[1.04]"
                            : "scale-100"
                        }`}
                        onError={() =>
                          setFailedImages((current) => ({ ...current, [index]: true }))
                        }
                      />
                    )}
                  </div>
                ))}

                {/* Atmospheric Controlled Vignette Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"
                />

                {/* Top-Left Slide Category Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    {heroSlides[activeSlide].label}
                  </span>
                  <span className="text-slate-400 text-xs" aria-hidden="true">&bull;</span>
                  <span className="text-[10px] font-mono font-semibold text-slate-700">
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
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                        activeSlide === index
                          ? "w-7 bg-amber-400"
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
              className="relative sm:absolute -mt-6 sm:mt-0 sm:-bottom-6 sm:-left-6 lg:-bottom-7 lg:-left-7 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.10)] border border-slate-200/80 w-full max-w-[280px]"
            >
              <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
                <span className="text-[11px] uppercase tracking-wider text-amber-600 font-bold">
                  ENGINEERING-LED SOLAR
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-500" />
              </div>

              <div className="pt-2.5 space-y-1 text-left">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  Designed, installed and supported across Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2.5 mt-1 border-t border-slate-100 text-[11px] text-slate-500 font-medium text-left">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span>Backed by Net Bangla Limited</span>
              </div>
            </div>

            {/* Secondary Floating Energy Badge */}
            <div
              ref={energyBadgeRef}
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.20)] text-amber-500"
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
