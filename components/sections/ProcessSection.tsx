"use client";

import React from "react";
import {
  Activity,
  Building2,
  Cpu,
  DraftingCompass,
  PlugZap,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ProcessStep {
  id: string;
  step: string;
  phase: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const stepsData: ProcessStep[] = [
  {
    id: "assess",
    step: "01",
    phase: "FIELD",
    title: "Site Assessment & Load Analysis",
    description:
      "We assess the site, review energy demand, evaluate available space, and analyze the electrical load before system design begins.",
    icon: ScanSearch,
  },
  {
    id: "engineer",
    step: "02",
    phase: "ENGINEERING",
    title: "Custom System Engineering",
    description:
      "We develop the solar system around the site's energy requirements, available roof or land area, electrical conditions, and project objectives.",
    icon: DraftingCompass,
  },
  {
    id: "mount",
    step: "03",
    phase: "STRUCTURAL",
    title: "Mounting & Structural Rigging",
    description:
      "Solar mounting structures are installed with attention to structural requirements, alignment, durability, and safe physical integration.",
    icon: Building2,
  },
  {
    id: "integrate",
    step: "04",
    phase: "ELECTRICAL",
    title: "Electrical Integration & Commissioning",
    description:
      "The completed system is electrically integrated, tested, commissioned, and prepared for operational use and grid connection where applicable.",
    icon: PlugZap,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="How We Deliver - Solar Engineering & Commissioning Process"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-10 w-[500px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>HOW WE DELIVER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            From Site Assessment to{" "}
            <span className="gradient-text-solar">Solar Commissioning</span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Every solar project is engineered around the site&apos;s physical
            conditions, energy requirements, structural constraints, and grid
            environment.
          </p>
        </div>

        {/* PROCESS TIMELINE CONTAINER */}
        <div className="relative">
          {/* DESKTOP CONNECTING HORIZONTAL LINE */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-[2px] z-0 overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-emerald-400/40" />
          </div>

          {/* MOBILE / TABLET VERTICAL CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-8 bottom-8 left-[31px] w-[2px] bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-emerald-400/40 z-0"
          />

          {/* 4 PRIMARY PROCESS STEPS */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stepsData.map((stepItem) => {
              const IconComponent = stepItem.icon;

              return (
                <div
                  key={stepItem.id}
                  className="group relative rounded-3xl p-6 sm:p-7 bg-[#06120a] border border-white/10 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.15)] flex flex-col justify-between text-left space-y-6 overflow-hidden"
                >
                  {/* Subtle Top Ambient Glow on Card Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"
                  />

                  {/* Header Row: Step Badge, Phase Label & Icon */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-widest text-emerald-300 bg-black/60 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                        {stepItem.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-400/90 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/25">
                        {stepItem.phase}
                      </span>
                    </div>

                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content Area: Title & Description */}
                  <div className="relative z-10 space-y-2.5 flex-1 pt-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-solar-text-secondary leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* POST-COMMISSIONING SUPPORT (UNNUMBERED LIFECYCLE STATEMENT) */}
        <div className="rounded-3xl border border-white/10 bg-[#07150c]/80 p-6 sm:p-8 lg:p-10 backdrop-blur-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ONGOING SUPPORT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Lifecycle Performance &amp; Preventive Maintenance
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-solar-text-secondary max-w-md leading-relaxed text-left md:text-right">
              System monitoring, preventive maintenance, and technical support
              continue beyond commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  Telemetry &amp; Monitoring
                </h4>
                <p className="text-[11px] text-slate-400">
                  Continuous performance tracking
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  Scheduled Maintenance
                </h4>
                <p className="text-[11px] text-slate-400">
                  Physical &amp; electrical inspections
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  Technical Diagnostics
                </h4>
                <p className="text-[11px] text-slate-400">
                  Proactive EPC support
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
