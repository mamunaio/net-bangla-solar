"use client";

import React, { useState } from "react";
import { SearchCheck, PenTool, Wrench, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const stepsData: ProcessStep[] = [
  {
    id: "assess",
    step: "01",
    title: "Assess",
    description:
      "We evaluate your site, energy usage, available space, and project requirements.",
    icon: SearchCheck,
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description:
      "Our engineers develop a solar system optimized for performance, efficiency, and long-term value.",
    icon: PenTool,
  },
  {
    id: "install",
    step: "03",
    title: "Install",
    description:
      "Our installation team deploys the system with careful attention to safety, quality, and detail.",
    icon: Wrench,
  },
  {
    id: "monitor",
    step: "04",
    title: "Monitor",
    description:
      "We monitor system performance and provide ongoing technical support to keep your investment working.",
    icon: Activity,
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      aria-label="How It Works - Solar Installation Process"
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
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            From sunlight to{" "}
            <span className="gradient-text-solar">lasting energy.</span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            A clear, engineering-led process designed to make switching to solar
            simple, predictable, and reliable.
          </p>
        </div>

        {/* PROCESS STEPS CONTAINER */}
        <div className="relative">
          {/* DESKTOP CONNECTING HORIZONTAL LINE */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] z-0 overflow-hidden"
          >
            {/* Base line */}
            <div className="w-full h-full bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-amber-500/30" />
          </div>

          {/* MOBILE / TABLET VERTICAL CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-8 bottom-8 left-[31px] w-[2px] bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-amber-500/30 z-0"
          />

          {/* STEPS GRID / VERTICAL TIMELINE */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stepsData.map((stepItem, idx) => {
              const IconComponent = stepItem.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={stepItem.id}
                  onMouseEnter={() => setActiveStep(idx)}
                  onFocus={() => setActiveStep(idx)}
                  tabIndex={0}
                  role="region"
                  aria-label={`Step ${stepItem.step}: ${stepItem.title}`}
                  className={cn(
                    "group relative rounded-3xl p-6 sm:p-7 transition-all duration-500 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 flex lg:flex-col items-start gap-5 lg:gap-6",
                    isActive
                      ? "bg-[#07150c]/85 border border-emerald-500/40 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.2)]"
                      : "bg-[#050e08]/60 border border-white/10 hover:border-emerald-500/25 hover:bg-[#06120a]/80"
                  )}
                >
                  {/* Step Badge & Icon Area */}
                  <div className="flex-shrink-0 flex items-center justify-center relative">
                    {/* Icon circular container */}
                    <div
                      className={cn(
                        "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border",
                        isActive
                          ? "bg-gradient-to-br from-emerald-500/25 to-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                          : "bg-white/[0.04] border-white/10 text-solar-text-secondary group-hover:text-emerald-400 group-hover:border-emerald-500/30"
                      )}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Step Number Tag */}
                    <span
                      className={cn(
                        "absolute -top-2 -right-2 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full border transition-colors duration-300",
                        isActive
                          ? "bg-emerald-500 text-black border-emerald-400 shadow-[0_0_8px_#34d399]"
                          : "bg-black/60 text-solar-text-muted border-white/10"
                      )}
                    >
                      {stepItem.step}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-2 flex-1">
                    <h3
                      className={cn(
                        "text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300",
                        isActive
                          ? "text-white"
                          : "text-white/90 group-hover:text-white"
                      )}
                    >
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

        {/* SUPPORTING BRAND STATEMENT */}
        <div className="pt-8 text-center border-t border-white/[0.06]">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-solar-text-muted font-medium">
            Designed carefully &bull; Installed professionally &bull; Built to
            perform.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
