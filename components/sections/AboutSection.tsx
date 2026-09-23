"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Gauge, ShieldCheck, Leaf, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

interface ValuePoint {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const valuePoints: ValuePoint[] = [
  {
    id: "performance",
    title: "Engineered for Performance",
    description:
      "Every system is designed around real energy requirements, site conditions, and long-term operating performance.",
    icon: Gauge,
  },
  {
    id: "reliability",
    title: "Built for Reliability",
    description:
      "We combine quality equipment, careful installation, and ongoing support to keep solar systems performing.",
    icon: ShieldCheck,
  },
  {
    id: "impact",
    title: "Designed for Impact",
    description:
      "Every project contributes to lower emissions, smarter energy use, and a cleaner future.",
    icon: Leaf,
  },
];

export function AboutSection() {
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const missionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            imageRef.current,
            introRef.current,
            valuesRef.current,
            missionRef.current,
            badgeRef.current,
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

      // 1. Image reveals with subtle scale settle
      tl.from(imageRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 1.0,
      })
        // 2. Floating glass badge fades in
        .from(
          badgeRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.7"
        )
        // 3. Intro header text reveals
        .from(
          introRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.7"
        )
        // 4. Value points stagger in
        .from(
          valuesRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.65,
            stagger: 0.15,
          },
          "-=0.4"
        )
        // 5. Mission block reveals last
        .from(
          missionRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Net Bangla Solar Company and Sustainability"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-10 w-[700px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-5 w-[500px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10">
        {/* MOBILE INTRO BLOCK: Visible only on mobile (<lg) so stack matches specification */}
        <div className="lg:hidden space-y-4 text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>About Net Bangla</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
            Engineering a cleaner{" "}
            <span className="gradient-text-solar">
              energy future for Bangladesh.
            </span>
          </h2>

          <p className="text-solar-text-secondary text-base leading-relaxed">
            We design and deliver solar energy systems that help homes,
            businesses, and industries reduce energy costs while building a more
            resilient future.
          </p>
        </div>

        {/* 2-COLUMN EDITORIAL ASYMMETRY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Cinematic Engineering Image (~52% width) */}
          <div
            ref={imageWrapperRef}
            className="lg:col-span-6 xl:col-span-6 relative w-full"
          >
            {/* Subtle decorative solar orbit ring behind the image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-emerald-500/15 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_80%)] -z-10 animate-[spin_60s_linear_infinite]"
            >
              <div className="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>

            {/* Ambient Image Glow Background */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/15 via-emerald-500/5 to-amber-500/10 rounded-[2.5rem] blur-2xl -z-10"
            />

            {/* Image Card Container */}
            <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#07130b]">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
                {imageError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c2e1b] via-[#06180d] to-[#020904]">
                    <ShieldCheck className="w-16 h-16 text-emerald-400 mb-3" />
                    <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
                      Solar Engineering
                    </span>
                    <span className="text-slate-400 text-xs mt-1">
                      Built for Long-Term Reliability
                    </span>
                  </div>
                ) : (
                  <Image
                    ref={imageRef}
                    src="/images/solar-engineering.jpg"
                    alt="Solar engineers inspecting a commercial solar installation"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                    className="object-cover object-center transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Atmospheric Controlled Vignette (Retains image clarity and depth) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050b07]/85 via-transparent to-black/15 pointer-events-none"
                />
              </div>

              {/* Floating Glass Badge */}
              <div
                ref={badgeRef}
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20 inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-elevated border border-emerald-500/30 text-white shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Built for the Long Term
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Content & Value Points (~48% width) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 text-left">
            {/* DESKTOP INTRO BLOCK: Visible only on desktop (lg+) */}
            <div ref={introRef} className="hidden lg:block space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>About Net Bangla</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
                Engineering a cleaner{" "}
                <span className="gradient-text-solar block">
                  energy future for Bangladesh.
                </span>
              </h2>

              <p className="text-solar-text-secondary text-base lg:text-lg leading-relaxed max-w-xl">
                We design and deliver solar energy systems that help homes,
                businesses, and industries reduce energy costs while building a
                more resilient future.
              </p>
            </div>

            {/* THREE VALUE POINTS */}
            <div className="space-y-6 pt-2">
              {valuePoints.map((point, idx) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={point.id}
                    ref={(el) => {
                      valuesRef.current[idx] = el;
                    }}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-sm text-solar-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SECONDARY METRIC / MISSION STATEMENT BLOCK */}
            <div
              ref={missionRef}
              className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-emerald-900/15 to-transparent border border-emerald-500/20 shadow-inner"
            >
              <div className="flex items-center gap-2 pb-2 text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>01 &bull; Mission</span>
              </div>
              <p className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                &ldquo;Make dependable clean energy more accessible across
                Bangladesh.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
