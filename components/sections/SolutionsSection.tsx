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
    title: "Integrated Solar Roof Systems",
    description:
      "Integrated Solar Roof Systems combine the functions of traditional roofing with high-efficiency solar power generation, built seamlessly into the roof structure itself.",
    keyPoints: [
      "Seamless roof integration",
      "Optimized space & aesthetics",
      "Long-term energy savings",
    ],
    image: "/images/power-solaroof.jpg",
    alt: "Integrated Solar Roof Systems on modern facility",
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
      "Turnkey solar EPC and storage solutions tailored for Commercial & Industrial (C&I) facilities with high continuous energy demands.",
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
      "On-grid solar photovoltaic systems designed for commercial properties, taking full advantage of net metering to reduce monthly utility bills.",
    keyPoints: [
      "Net metering support",
      "Operating cost savings",
      "Surplus energy export",
    ],
    image: "/images/solar-commercial.jpg",
    alt: "Solar-Powered Commercial Facility at Sunset Rooftop Installation",
    icon: Building2,
    gridClass: "lg:col-span-4",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]",
    tag: "Net Metered",
  },
  {
    id: "residential",
    index: "04",
    title: "Residential Solar Solutions",
    description:
      "Durable on-grid and hybrid solar installations tailored for modern homes, bringing reliable and cost-effective electricity to every doorstep.",
    keyPoints: [
      "Reduced monthly bills",
      "Silent battery backup",
      "Free home assessment",
    ],
    image: "/images/solar-residential.jpg",
    alt: "Solar-Powered Modern Garden Home rooftop solar installation",
    icon: Home,
    gridClass: "lg:col-span-4",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]",
    tag: "Home Energy",
  },
  {
    id: "agricultural",
    index: "05",
    title: "Agricultural Solar Solutions",
    description:
      "Solar-powered irrigation and cold storage systems delivering complete energy independence for farms, agro-processing, and rural operations.",
    keyPoints: [
      "Solar irrigation pumps",
      "Off-grid reliability",
      "Zero diesel fuel cost",
    ],
    image: "/images/solar-agricultural.jpg",
    alt: "Solar-Powered Irrigation System in Green Agricultural Fields",
    icon: Sprout,
    gridClass: "lg:col-span-4",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]",
    tag: "Solar Irrigation",
  },
];

const technicalCapabilities = [
  {
    icon: PlugZap,
    title: "On-Grid Solar PV",
    detail: "Direct grid connection & surplus energy net-metering export",
  },
  {
    icon: BatteryCharging,
    title: "Off-Grid & Hybrid PV",
    detail: "Complete energy independence & smart battery storage flexibility",
  },
  {
    icon: Cpu,
    title: "Integrated Solar Roof",
    detail: "Seamless in-roof BIPV combining structural shelter & solar power",
  },
  {
    icon: Sprout,
    title: "Solar Water Pumping",
    detail: "Direct DC agricultural irrigation without costly fuel dependency",
  },
  {
    icon: LampDesk,
    title: "Solar Street Lighting",
    detail: "Standalone auto-sensor perimeter & municipal lighting systems",
  },
  {
    icon: Wrench,
    title: "Re-Commissioning & O&M",
    detail: "Startup testing, safety compliance & lifetime maintenance for ROI",
  },
];

export function SolutionsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="solutions"
      aria-label="Solar Solutions for Every Scale"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-white"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-amber-500/[0.05] blur-[170px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>// OUR SERVICES &amp; SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Solar Solutions Engineered{" "}
            <span className="gradient-text-solar">for Every Scale</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            From turnkey EPC engineering and integrated solar roofing to commercial,
            industrial, residential, and agricultural deployments, Net Bangla Limited delivers
            reliable, durable solar solutions to bring clean electricity across Bangladesh.
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
                  "group relative rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-500/50 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12),0_0_20px_rgba(245,158,11,0.20)] flex flex-col justify-between p-6 sm:p-8",
                  item.gridClass,
                  item.heightClass
                )}
              >
                {/* Full Bleed Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {failedImages[item.id] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-50">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-amber-500" />
                      </div>
                      <span className="text-amber-700 font-semibold text-sm tracking-wider uppercase">
                        {item.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
                      className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                    />
                  )}

                  {/* Natural Light Gradient Overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
                  />
                </div>

                {/* Top Area: Index Number, Tag & Icon Badge */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-800 bg-white/95 px-3 py-1 rounded-full border border-slate-200/90 backdrop-blur-md shadow-sm">
                    {item.index}
                  </span>

                  <div className="flex items-center gap-2">
                    {item.tag && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-amber-800 px-2.5 py-1 rounded-full bg-white/95 border border-amber-300 backdrop-blur-md shadow-sm">
                        {item.tag}
                      </span>
                    )}
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/95 border border-slate-200/90 text-amber-600 backdrop-blur-md group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Area: Title, Description, Key Points, and Explore Link */}
                <div className="relative z-10 space-y-4 pt-20 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-xl drop-shadow">
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
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 border border-white/40 text-[11px] sm:text-xs text-slate-900 font-semibold backdrop-blur-md hover:border-amber-400 transition-colors shadow-sm"
                          >
                            <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-3 flex items-center justify-between border-t border-white/20">
                    <Link
                      href="#quote"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-300 group-hover:text-amber-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-0.5"
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

        {/* TECHNICAL CAPABILITIES (COMPACT SUPPORTING STRIP) - Hidden as requested */}
        {false && (
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 md:p-10 space-y-6 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-400/[0.08] blur-[120px]"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/90 pb-5">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-amber-700">
                TECHNICAL CAPABILITIES
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Engineering, Grid Integration &amp; Storage Architecture
              </h3>
            </div>
            <span className="text-xs sm:text-sm text-slate-500 font-mono font-medium">
              Turnkey EPC &bull; End-to-End Support
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {technicalCapabilities.map((capability) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_14px_30px_-6px_rgba(245,158,11,0.20),0_4px_12px_rgba(0,0,0,0.03)] cursor-default overflow-hidden"
                >
                  {/* Subtle Inner Ambient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.06] via-amber-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Amber Shimmer Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Dynamic Glowing Icon Badge */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.45)] transition-all duration-300 ease-out shadow-2xs mt-0.5">
                    <IconComponent className="h-5 w-5 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between gap-1.5">
                      <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-amber-800 transition-colors duration-200">
                        {capability.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed mt-1 transition-colors duration-200">
                      {capability.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        )}
      </Container>
    </section>
  );
}

export default SolutionsSection;
