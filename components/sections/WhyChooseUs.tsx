"use client";

import React from "react";
import Image from "next/image";
import {
  Activity,
  Award,
  Cpu,
  Layers,
  Network,
  ShieldCheck,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface AdvantageItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const advantagesData: AdvantageItem[] = [
  {
    number: "01",
    title: "12+ Years of Operational Heritage",
    description:
      "Built on Net Bangla Limited's established institutional foundation since 2014, with renewable energy operations developed around long-term technical execution.",
    icon: Award,
  },
  {
    number: "02",
    title: "Qualified Engineering Leadership",
    description:
      "Technical delivery is guided by experienced engineering leadership under CEO Engr. Md. Mamunur Rahman.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "End-to-End EPC Delivery",
    description:
      "We support projects across site assessment, shading analysis, structural engineering, procurement, installation, grid coordination, testing, commissioning, and ongoing maintenance.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Tier-1 Component Selection",
    description:
      "We specify high-efficiency mono-PERC and TOPCon modules alongside proven international inverter technology.",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Grid & Net-Metering Support",
    description:
      "Technical planning and coordination for Bangladesh net-metering requirements and grid-connected solar applications.",
    icon: Network,
  },
  {
    number: "06",
    title: "Quality & Long-Term Support",
    description:
      "Documented quality-control practices, testing, preventive maintenance, monitoring, and ongoing technical support extend beyond installation.",
    icon: Activity,
  },
];

const technicalTags = [
  "MONO-PERC",
  "TOPCon",
  "NET METERING",
  "GRID INTEGRATION",
  "STRUCTURAL ENGINEERING",
  "O&M",
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Net Bangla Solar - Engineering Advantage"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/4 w-[850px] h-[500px] rounded-full bg-amber-400/[0.07] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-10 w-[550px] h-[400px] rounded-full bg-sky-400/[0.05] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>WHY NET BANGLA SOLAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Engineering Discipline{" "}
            <span className="gradient-text-solar">Behind Every Solar System</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            From component selection and system engineering to grid coordination
            and long-term maintenance, our approach is built around technical
            execution and lifecycle support.
          </p>
        </div>

        {/* MAIN COMPOSITION: LEFT VISUAL / RIGHT 6 ADVANTAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Large Engineering Visual & Technology Card */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 relative overflow-hidden group shadow-sm hover:border-amber-400/80 transition-all duration-300">
            {/* Ambient image container */}
            <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              <Image
                src="/images/sunset-solar-engineering-inspection.jpg"
                alt="Solar engineers inspecting rooftop photovoltaic installation at sunset in Bangladesh"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Subtle controlled gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/30 pointer-events-none"
              />

              {/* Top Status Badges */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200/90 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    FIELD INSPECTION &amp; QA
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-slate-200/90 backdrop-blur-md text-[10px] font-mono text-slate-800 font-bold shadow-sm">
                  <span>TIER-1 EPC</span>
                </div>
              </div>

              {/* In-Image Engineering Callout */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-white/95 border border-slate-200/90 backdrop-blur-md text-left shadow-lg">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 mb-1.5">
                  <span className="text-[10.5px] font-mono uppercase tracking-widest text-amber-700 font-bold">
                    TECHNICAL STANDARDS
                  </span>
                  <span className="text-[10.5px] font-mono text-slate-600 font-semibold">
                    100% Turnkey Execution
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-medium mt-0.5 leading-snug">
                  Engineered around local weather conditions, structural safety, and national grid compliance.
                </p>
              </div>
            </div>

            {/* Supporting Technical Detail Strip */}
            <div className="pt-5 space-y-2.5 text-left border-t border-slate-100 mt-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                DOCUMENTED CAPABILITIES &amp; SPECIFICATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {technicalTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 hover:border-amber-300 text-[11px] font-mono text-amber-800 hover:text-amber-900 font-semibold transition-all duration-200 shadow-2xs"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 6 Numbered Advantages */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {advantagesData.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-4 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.20),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default"
                >
                  {/* Subtle Inner Ambient Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-amber-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Top Golden Shimmer Line on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Top Ambient Orb */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/25 transition-colors duration-300"
                  />

                  {/* Top Bar: Number Badge & Dynamic Glowing Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider text-amber-800 bg-amber-50 group-hover:bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200 group-hover:border-amber-300 transition-colors duration-200 shadow-2xs">
                      {item.number}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-slate-50 text-amber-600 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.45)] transition-all duration-300 ease-out shadow-2xs"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-5 w-5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Body: Title & Factual Description */}
                  <div className="relative z-10 space-y-2 flex-1 pt-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors duration-200">
                      {item.description}
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

export default WhyChooseUs;
