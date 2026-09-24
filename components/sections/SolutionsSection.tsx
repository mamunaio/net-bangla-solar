"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Home,
  LampDesk,
  PanelsTopLeft,
  PlugZap,
  Sprout,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface SolutionItem {
  id: string;
  index: string;
  title: string;
  description: string;
  keyPoints: string[];
  image: string;
  alt: string;
  icon: React.ElementType;
  gridClass: string;
  imageAspect: string;
  tag?: string;
}

const solutions: SolutionItem[] = [
  {
    id: "solaroof",
    index: "01",
    title: "Power Solaroof",
    description:
      "Integrated solar roofing engineered to serve as the roof structure while generating clean electricity.",
    keyPoints: [
      "Structural roof integration",
      "Maximum surface utilization",
      "Weather-resistant design",
      "Thermal insulation",
    ],
    image: "/images/power-solaroof.jpg",
    alt: "Power Solaroof integrated solar roofing system on modern facility",
    icon: PanelsTopLeft,
    gridClass: "lg:col-span-7",
    imageAspect: "aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/9]",
    tag: "Integrated Roofing",
  },
  {
    id: "industrial",
    index: "02",
    title: "Industrial Solar Solutions",
    description:
      "High-yield photovoltaic systems engineered for factories, manufacturing facilities, and heavy continuous power demands.",
    keyPoints: [
      "Large-scale PV deployment",
      "Peak-load considerations",
      "Industrial mounting requirements",
    ],
    image: "/images/solar-industrial.jpg",
    alt: "Solar-Powered Industrial Factory Complex Rooftop Installation",
    icon: Factory,
    gridClass: "lg:col-span-5",
    imageAspect: "aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/9]",
    tag: "High Capacity",
  },
  {
    id: "commercial",
    index: "03",
    title: "Commercial Solar Solutions",
    description:
      "Solar systems designed for offices, institutions, retail facilities, and commercial properties.",
    keyPoints: [
      "Net metering support",
      "Operational cost reduction",
      "Scalable system layouts",
    ],
    image: "/images/solar-commercial.jpg",
    alt: "Solar-Powered Commercial Facility at Sunset Rooftop Installation",
    icon: Building2,
    gridClass: "lg:col-span-4",
    imageAspect: "aspect-[16/10]",
  },
  {
    id: "residential",
    index: "04",
    title: "Residential Solar Solutions",
    description:
      "Custom rooftop solar systems designed for homes, with on-grid, off-grid, and hybrid configurations.",
    keyPoints: [
      "Reduced electricity costs",
      "Backup capability",
      "Low-maintenance systems",
    ],
    image: "/images/solar-residential.jpg",
    alt: "Solar-Powered Modern Garden Home rooftop solar installation",
    icon: Home,
    gridClass: "lg:col-span-4",
    imageAspect: "aspect-[16/10]",
  },
  {
    id: "agricultural",
    index: "05",
    title: "Agricultural Solar Solutions",
    description:
      "Solar-powered energy systems for agricultural operations, including irrigation and rural applications.",
    keyPoints: [
      "Solar irrigation pumping",
      "Off-grid applications",
      "Farm energy systems",
    ],
    image: "/images/solar-agricultural.jpg",
    alt: "Solar-Powered Irrigation System in Green Agricultural Fields",
    icon: Sprout,
    gridClass: "lg:col-span-4",
    imageAspect: "aspect-[16/10]",
  },
];

const technicalCapabilities = [
  {
    icon: PlugZap,
    title: "On-Grid / Net Metered",
    detail: "Grid synchronization & NEM compliant export",
  },
  {
    icon: BatteryCharging,
    title: "Off-Grid & Hybrid",
    detail: "Reliable power independence & seamless switching",
  },
  {
    icon: Cpu,
    title: "Battery Storage",
    detail: "LiFePO4, Hybrid ESS & Commercial Energy Storage",
  },
  {
    icon: Sprout,
    title: "Solar Water Pumping",
    detail: "Direct DC irrigation without fuel dependency",
  },
  {
    icon: LampDesk,
    title: "Solar Street Lighting",
    detail: "Standalone auto-sensor perimeter lighting",
  },
  {
    icon: Wrench,
    title: "Monitoring & Maintenance",
    detail: "Proactive telemetry & full lifecycle support",
  },
];

export function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([headerRef.current, cardsGridRef.current, capabilitiesRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.from(headerRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(cardsGridRef.current, {
        opacity: 0,
        y: 35,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsGridRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(capabilitiesRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      aria-label="Solar Solutions for Every Scale"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-emerald-500/[0.07] blur-[170px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div ref={headerRef} className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>OUR SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Solar Solutions Engineered{" "}
            <span className="gradient-text-solar">for Every Scale</span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            From integrated solar roofing to residential, commercial, industrial,
            and agricultural systems, Net Bangla Solar designs and delivers
            solutions around real energy requirements.
          </p>
        </div>

        {/* PRIMARY SOLUTION CARDS (EXACTLY 5 CARDS) */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {solutions.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-400/40 bg-[#07150c]/90 backdrop-blur-xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.25)] flex flex-col justify-between p-5 sm:p-6 lg:p-7",
                  item.gridClass
                )}
              >
                {/* 1. TOP DEDICATED IMAGE CONTAINER (100% visible, no text overlapping) */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-colors duration-500 bg-[#050e08]">
                  <div className={cn("relative w-full overflow-hidden", item.imageAspect)}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      unoptimized
                      priority={item.id === "solaroof" || item.id === "industrial"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle top image corner badges */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 bg-black/75 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                        {item.index}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                      {item.tag && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-300 px-2.5 py-1 rounded-full bg-black/75 border border-emerald-400/30 backdrop-blur-md shadow-sm">
                          {item.tag}
                        </span>
                      )}
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-xl bg-black/75 border border-white/20 text-emerald-400 backdrop-blur-md shadow-md"
                        aria-hidden="true"
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. BOTTOM DEDICATED CONTENT CONTAINER (Clean, high-contrast, perfectly legible) */}
                <div className="relative z-10 flex-1 flex flex-col justify-between space-y-4 pt-5 text-left">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Documented Key Points */}
                  <div className="pt-1">
                    <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.keyPoints.map((point) => (
                        <li
                          key={point}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs text-slate-300 font-medium hover:border-emerald-500/30 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link Row */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="#quote"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-0.5"
                      aria-label={`Discuss ${item.title} project`}
                    >
                      <span>Discuss your project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TECHNICAL CAPABILITIES (COMPACT SUPPORTING STRIP) */}
        <div
          ref={capabilitiesRef}
          className="rounded-3xl border border-white/10 bg-[#07130b]/75 p-6 sm:p-8 backdrop-blur-xl space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-emerald-400">
                TECHNICAL CAPABILITIES
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">
                Engineering, Grid Integration &amp; Storage Architecture
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Turnkey EPC &bull; End-to-End Support
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalCapabilities.map((capability) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-emerald-500/25 transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <h4 className="text-sm font-semibold text-white">
                      {capability.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug">
                      {capability.detail}
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

export default SolutionsSection;
