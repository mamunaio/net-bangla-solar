"use client";

import React, { useRef, useEffect } from "react";
import { Zap, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface StatItem {
  id: string;
  index: string;
  targetNumber: number;
  suffix: string;
  displayDefault: string;
  hasComma?: boolean;
  label: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const statsData: StatItem[] = [
  {
    id: "capacity",
    index: "01",
    targetNumber: 25,
    suffix: "+ MW",
    displayDefault: "25+ MW",
    label: "Solar Capacity Delivered",
    icon: Zap,
    highlight: true,
  },
  {
    id: "installations",
    index: "02",
    targetNumber: 1500,
    suffix: "+",
    displayDefault: "1,500+",
    hasComma: true,
    label: "Solar Installations",
    icon: Building2,
  },
  {
    id: "savings",
    index: "03",
    targetNumber: 30,
    suffix: "%+",
    displayDefault: "30%+",
    label: "Average Energy Savings",
    icon: TrendingUp,
  },
  {
    id: "reliability",
    index: "04",
    targetNumber: 99,
    suffix: "%",
    displayDefault: "99%",
    label: "System Reliability",
    icon: ShieldCheck,
  },
];

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerCardRef = useRef<HTMLDivElement>(null);
  const statsColsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numberTextRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Immediate static layout for users requesting reduced motion
        gsap.set([headerRef.current, containerCardRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      // 1. Entrance animation for intro text
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // 2. Entrance animation for shared stats container
      gsap.from(containerCardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerCardRef.current,
          start: "top 82%",
        },
      });

      // 3. Staggered count-up animation for stats numbers
      statsData.forEach((stat, i) => {
        const numEl = numberTextRefs.current[i];
        if (!numEl) return;

        const counter = { val: 0 };

        gsap.to(counter, {
          val: stat.targetNumber,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerCardRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            const current = Math.floor(counter.val);
            const formatted = stat.hasComma
              ? current.toLocaleString()
              : current.toString();
            numEl.textContent = `${formatted}${stat.suffix}`;
          },
          onComplete: () => {
            // Ensure exact target string matches specification
            numEl.textContent = stat.displayDefault;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Solar Impact and Statistics"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] rounded-full bg-emerald-500/[0.08] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[350px] rounded-full bg-amber-500/[0.03] blur-[130px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div
          ref={headerRef}
          className="max-w-3xl space-y-4 text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>Our Impact</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Solar power with{" "}
            <span className="gradient-text-solar">measurable impact.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            From residential rooftops to large-scale industrial installations, we
            engineer solar systems designed for long-term performance.
          </p>
        </div>

        {/* SHARED GLASSMORPHIC CONTAINER */}
        <div
          ref={containerCardRef}
          className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#07130b]/75 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Decorative Energy Element: Floating Orbit & Glow Behind Stats */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 md:w-80 md:h-80 rounded-full border border-emerald-500/15 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_75%)] animate-[spin_45s_linear_infinite]"
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </div>

          {/* Ambient inner glow highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-emerald-500/[0.06] blur-[90px]"
          />

          {/* STATISTICS GRID */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
            {statsData.map((stat, idx) => {
              const IconComponent = stat.icon;
              const isLast = idx === statsData.length - 1;

              return (
                <div
                  key={stat.id}
                  ref={(el) => {
                    statsColsRef.current[idx] = el;
                  }}
                  className={cn(
                    "relative flex flex-col justify-between p-4 sm:p-6 lg:px-8",
                    // Desktop vertical divider between columns
                    !isLast && "lg:border-r lg:border-white/10",
                    // Mobile/Tablet subtle divider (between top and bottom row)
                    idx < 2 && "border-b border-white/[0.06] lg:border-b-0 pb-6 lg:pb-6",
                    stat.highlight && "lg:bg-emerald-500/[0.02] rounded-2xl"
                  )}
                >
                  {/* Item Top: Index & Icon */}
                  <div className="flex items-center justify-between gap-2 pb-4">
                    <span className="text-xs font-mono font-medium text-solar-text-muted tracking-widest">
                      {stat.index}
                    </span>
                    <div
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-xl border",
                        stat.highlight
                          ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                          : "bg-white/[0.04] border-white/10 text-solar-text-secondary"
                      )}
                      aria-hidden="true"
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Item Middle: Large Number */}
                  <div className="py-2">
                    <div
                      className={cn(
                        "text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-extrabold tracking-tight leading-none text-white",
                        stat.highlight && "text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      )}
                    >
                      <span
                        ref={(el) => {
                          numberTextRefs.current[idx] = el;
                        }}
                      >
                        {stat.displayDefault}
                      </span>
                    </div>
                  </div>

                  {/* Item Bottom: Descriptive Label */}
                  <div className="pt-3">
                    <p className="text-xs sm:text-sm text-solar-text-secondary font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prototype Indicator */}
          <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-2 text-[11px] font-mono text-solar-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
              Prototype metrics for illustrative demonstration
            </span>
            <span>Audited operational statistics will update upon company verification</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImpactStats;
