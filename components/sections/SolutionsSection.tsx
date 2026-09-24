"use client";

import React, { useState } from "react";
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
  heightClass: string;
  tag?: string;
}

const solutions: SolutionItem[] = [
  {
    id: "solaroof",
    index: "01",
    title: "Power Solaroof",
    description:
      "Integrated solar roofing engineered to serve as the structural roof while generating clean, continuous electricity.",
    keyPoints: [
      "Structural roof integration",
      "Maximum surface utilization",
      "Weather-resistant engineering",
    ],
    image: "/images/power-solaroof.jpg",
    alt: "Power Solaroof integrated solar roofing system on modern facility",
    icon: PanelsTopLeft,
    gridClass: "lg:col-span-7",
    heightClass: "min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]",
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
      "Peak-load reduction",
      "Industrial-grade mounting",
    ],
    image: "/images/solar-industrial.jpg",
    alt: "Solar-Powered Industrial Factory Complex Rooftop Installation",
    icon: Factory,
    gridClass: "lg:col-span-5",
    heightClass: "min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]",
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
      "Operating cost savings",
      "Scalable system layout",
    ],
    image: "/images/solar-commercial.jpg",
    alt: "Solar-Powered Commercial Facility at Sunset Rooftop Installation",
    icon: Building2,
    gridClass: "lg:col-span-4",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]",
  },
  {
    id: "residential",
    index: "04",
    title: "Residential Solar Solutions",
    description:
      "Custom rooftop solar systems designed for modern homes, with on-grid, off-grid, and hybrid configurations.",
    keyPoints: [
      "Reduced monthly bills",
      "Backup power capability",
      "Low maintenance",
    ],
    image: "/images/solar-residential.jpg",
    alt: "Solar-Powered Modern Garden Home rooftop solar installation",
    icon: Home,
    gridClass: "lg:col-span-4",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]",
  },
  {
    id: "agricultural",
    index: "05",
    title: "Agricultural Solar Solutions",
    description:
      "Solar-powered energy systems for agricultural operations, rural irrigation pumps, and agribusiness facilities.",
    keyPoints: [
      "Solar irrigation pumps",
      "Off-grid reliability",
      "Fuel-free operations",
    ],
    image: "/images/solar-agricultural.jpg",
    alt: "Solar-Powered Irrigation System in Green Agricultural Fields",
    icon: Sprout,
    gridClass: "lg:col-span-4",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]",
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
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="solutions"
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
        <div className="max-w-3xl space-y-4 text-left">
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

        {/* PRIMARY SOLUTION CARDS (FULL-BLEED CINEMATIC CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {solutions.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/40 bg-[#06120a] transition-all duration-500 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.25)] flex flex-col justify-between p-6 sm:p-8",
                  item.gridClass,
                  item.heightClass
                )}
              >
                {/* Full Bleed Image Background with Resilient CSS Fallback */}
                <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#06180d] via-[#030e06] to-[#020603]">
                  {/* Atmospheric radial glow and geometric solar grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
                  />

                  {failedImages[item.id] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                        {item.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                    />
                  )}

                  {/* Single Clean Vignette Overlay (Leaves image bright and clear while guaranteeing text contrast) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#040e08]/95 via-[#040e08]/30 to-transparent pointer-events-none"
                  />
                </div>

                {/* Top Area: Index Number, Tag & Icon Badge */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="text-xs font-mono font-medium tracking-widest text-emerald-400/90 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {item.index}
                  </span>

                  <div className="flex items-center gap-2">
                    {item.tag && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-300 px-2.5 py-1 rounded-full bg-black/60 border border-emerald-500/30 backdrop-blur-md">
                        {item.tag}
                      </span>
                    )}
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl glass-panel border border-white/10 text-emerald-400 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Area: Title, Description, Key Points, and Explore Link */}
                <div className="relative z-10 space-y-4 pt-20 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-solar-text-secondary leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Key Points / Features */}
                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <div className="pt-1">
                      <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.keyPoints.map((point) => (
                          <li
                            key={point}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-[11px] sm:text-xs text-slate-200 font-medium backdrop-blur-md hover:border-emerald-500/30 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-3 flex items-center justify-between border-t border-white/10">
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
        <div className="rounded-3xl border border-white/10 bg-[#07130b]/75 p-6 sm:p-8 backdrop-blur-xl space-y-6">
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
