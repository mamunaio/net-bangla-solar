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
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/4 w-[850px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-10 w-[550px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>WHY NET BANGLA SOLAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Engineering Discipline{" "}
            <span className="gradient-text-solar">Behind Every Solar System</span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            From component selection and system engineering to grid coordination
            and long-term maintenance, our approach is built around technical
            execution and lifecycle support.
          </p>
        </div>

        {/* MAIN COMPOSITION: LEFT VISUAL / RIGHT 6 ADVANTAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Large Engineering Visual & Technology Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#06120a] p-6 sm:p-8 relative overflow-hidden group">
            {/* Ambient image container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square w-full rounded-2xl overflow-hidden border border-white/10 bg-[#040e07]">
              <Image
                src="/images/solar-engineering.jpg"
                alt="Solar engineering architecture and telemetry monitoring schematic"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle controlled gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"
              />

              {/* In-Image Engineering Callout */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-xl bg-black/75 border border-white/10 backdrop-blur-md text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                  TECHNICAL STANDARDS
                </span>
                <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                  Engineered around local weather, structural safety, and grid compliance.
                </p>
              </div>
            </div>

            {/* Supporting Technical Detail Strip */}
            <div className="pt-6 space-y-3 text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-solar-text-muted font-semibold block">
                DOCUMENTED CAPABILITIES &amp; SPECIFICATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {technicalTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] font-mono text-emerald-300"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 6 Numbered Advantages arranged in a structured 2-column grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {advantagesData.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative rounded-3xl p-6 bg-[#06120a] border border-white/10 hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between text-left space-y-4 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.12)]"
                >
                  {/* Top Bar: Number Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      {item.number}
                    </span>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-colors"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Body: Title & Factual Description */}
                  <div className="space-y-1.5 flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-solar-text-secondary leading-relaxed">
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
