"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, UserCheck, Award, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

interface CoreValue {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const coreValues: CoreValue[] = [
  {
    number: "01",
    title: "Engineering Precision",
    description: "Technical accuracy from system design through execution.",
    icon: Award,
  },
  {
    number: "02",
    title: "Accountability",
    description: "Clear responsibility across delivery and ongoing support.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Institutional Trust",
    description:
      "Built on corporate stability, standards, and dependable execution.",
    icon: ShieldCheck,
  },
];

export function AboutSection() {
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const leadershipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([introRef.current, imageWrapperRef.current, valuesRef.current, leadershipRef.current], {
          opacity: 1,
          y: 0,
        });
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

      tl.from(introRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
      })
        .from(
          imageWrapperRef.current,
          {
            opacity: 0,
            scale: 1.03,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          valuesRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .from(
          leadershipRef.current,
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
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
      aria-label="About Net Bangla Solar"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-10 w-[700px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-5 w-[500px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-10 lg:space-y-12">
        {/* 2-COLUMN MAIN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Editorial Typography & Company Description */}
          <div ref={introRef} className="lg:col-span-7 space-y-6 text-left">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>ABOUT NET BANGLA SOLAR</span>
            </div>

            {/* Main Heading (H2) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Engineering a More Reliable{" "}
              <span className="gradient-text-solar">
                Solar Future for Bangladesh
              </span>
            </h2>

            {/* Source-grounded Main Company Description */}
            <div className="space-y-4 text-solar-text-secondary text-base lg:text-lg leading-relaxed">
              <p>
                Net Bangla Solar operates as the specialized renewable energy arm
                of Net Bangla Limited. Founded on May 28, 2014, the company has
                built its operational foundation around technology-driven
                infrastructure and turnkey execution across Bangladesh.
              </p>
              <p>
                Our solar team engineers, installs, and services photovoltaic
                systems designed around local grid conditions, weather
                requirements, and energy demands.
              </p>
              <p className="text-sm lg:text-base text-slate-300">
                From site assessment and load calculation through system design,
                installation, grid connection, and ongoing maintenance, we support
                the project through its full lifecycle.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Composition & Leadership Card */}
          <div
            ref={imageWrapperRef}
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient Image Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/15 via-emerald-500/5 to-amber-500/10 rounded-[2.5rem] blur-2xl -z-10"
            />

            {/* Image Container */}
            <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#07130b]">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
                {imageError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c2e1b] via-[#06180d] to-[#020904]">
                    <ShieldCheck className="w-16 h-16 text-emerald-400 mb-3" />
                    <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
                      Solar Infrastructure
                    </span>
                    <span className="text-slate-400 text-xs mt-1">
                      Turnkey Engineering &amp; Execution
                    </span>
                  </div>
                ) : (
                  <Image
                    src="/images/about-solar-facility.jpg"
                    alt="Solar energy installation in Bangladesh engineered by Net Bangla Solar"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center"
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Subtle vignette */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050b07]/90 via-transparent to-black/20 pointer-events-none"
                />

                {/* Corporate Foundation Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-elevated border border-emerald-500/30 text-white shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Est. May 28, 2014 &bull; Turnkey Solar EPC
                  </span>
                </div>
              </div>

              {/* Leadership Block */}
              <div
                ref={leadershipRef}
                className="p-4 sm:p-5 bg-[#06110b]/95 border-t border-white/10 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-xl border border-emerald-400/25 bg-slate-800">
                    <Image
                      src="/images/engr-mamunur-rahman.jpg"
                      alt="Engr. Md. Mamunur Rahman, CEO"
                      fill
                      sizes="52px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                      LEADERSHIP
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                      Engr. Md. Mamunur Rahman
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      CEO, Net Bangla Limited
                    </p>
                  </div>
                </div>

                <div
                  className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  aria-hidden="true"
                >
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CORE VALUES GRID (01, 02, 03) */}
        <div className="pt-4 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.number}
                  ref={(el) => {
                    valuesRef.current[idx] = el;
                  }}
                  className="relative rounded-2xl p-6 bg-[#07130b]/60 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 text-left flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                      {val.number}
                    </span>
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 text-emerald-400 group-hover:border-emerald-500/30 transition-colors"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-solar-text-secondary leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
