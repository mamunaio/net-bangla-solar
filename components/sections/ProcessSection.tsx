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
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] rounded-full bg-amber-400/[0.07] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-10 w-[500px] h-[400px] rounded-full bg-sky-400/[0.05] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>HOW WE DELIVER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            From Site Assessment to{" "}
            <span className="gradient-text-solar">Solar Commissioning</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
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
            <div className="w-full h-full bg-gradient-to-r from-amber-500/40 via-amber-500/20 to-amber-400/40" />
          </div>

          {/* MOBILE / TABLET VERTICAL CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-8 bottom-8 left-[31px] w-[2px] bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-amber-400/40 z-0"
          />

          {/* 4 PRIMARY PROCESS STEPS */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stepsData.map((stepItem) => {
              const IconComponent = stepItem.icon;

              return (
                <div
                  key={stepItem.id}
                  className="group relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-amber-500/40 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-sm hover:shadow-[0_14px_35px_-8px_rgba(245,158,11,0.12)] flex flex-col justify-between text-left space-y-6 overflow-hidden"
                >
                  {/* Subtle Top Ambient Glow on Card Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/20 transition-colors duration-300"
                  />

                  {/* Header Row: Step Badge, Phase Label & Icon */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {stepItem.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded border border-amber-200">
                        {stepItem.phase}
                      </span>
                    </div>

                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-amber-600 group-hover:border-amber-400 group-hover:bg-amber-50 group-hover:text-amber-700 transition-all duration-200"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105" />
                    </div>
                  </div>

                  {/* Content Area: Title & Description */}
                  <div className="relative z-10 space-y-2.5 flex-1 pt-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* POST-COMMISSIONING SUPPORT */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-amber-600 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>ONGOING SUPPORT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Lifecycle Performance &amp; Preventive Maintenance
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed text-left md:text-right">
              System monitoring, preventive maintenance, and technical support
              continue beyond commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                  Telemetry &amp; Monitoring
                </h4>
                <p className="text-[11px] text-slate-500">
                  Continuous performance tracking
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                  Scheduled Maintenance
                </h4>
                <p className="text-[11px] text-slate-500">
                  Physical &amp; electrical inspections
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                  Technical Diagnostics
                </h4>
                <p className="text-[11px] text-slate-500">
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
