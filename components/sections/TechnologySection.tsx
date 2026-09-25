"use client";

import React from "react";
import {
  Activity,
  BatteryCharging,
  GitBranch,
  LampDesk,
  Network,
  Sprout,
  Sun,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface TechArchitectureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  labels: string[];
  icon: React.ElementType;
  gridClass: string;
}

const primaryTechnologies: TechArchitectureItem[] = [
  {
    id: "on-grid",
    number: "01",
    title: "On-Grid / Net Metered",
    description:
      "Grid-connected photovoltaic systems designed to work with the electrical grid and support Bangladesh net-metering applications.",
    labels: ["GRID CONNECTED", "NET METERING"],
    icon: Network,
    gridClass: "lg:col-span-4",
  },
  {
    id: "hybrid",
    number: "02",
    title: "Hybrid Solar",
    description:
      "Solar systems combining photovoltaic generation with energy storage and other available power sources where required.",
    labels: ["HYBRID", "ENERGY MANAGEMENT"],
    icon: GitBranch,
    gridClass: "lg:col-span-4",
  },
  {
    id: "off-grid",
    number: "03",
    title: "Off-Grid Solar",
    description:
      "Standalone solar systems designed for locations where reliable grid access is unavailable or unsuitable.",
    labels: ["STANDALONE", "REMOTE APPLICATIONS"],
    icon: Sun,
    gridClass: "lg:col-span-4",
  },
  {
    id: "storage",
    number: "04",
    title: "Battery Energy Storage",
    description:
      "Storage architectures supporting hybrid and commercial energy applications using documented LiFePO4 and hybrid energy storage technologies.",
    labels: ["LiFePO4", "HESS", "COMMERCIAL STORAGE"],
    icon: BatteryCharging,
    gridClass: "lg:col-span-6",
  },
  {
    id: "monitoring",
    number: "05",
    title: "Monitoring & Telemetry",
    description:
      "Data-driven monitoring and real-time telemetry support ongoing system visibility, preventive maintenance, and technical service.",
    labels: ["REAL-TIME TELEMETRY", "MONITORING", "O&M"],
    icon: Activity,
    gridClass: "lg:col-span-6",
  },
];

const supportingApplications = [
  {
    title: "Solar Water Pumping",
    description:
      "Direct DC and hybrid agricultural irrigation pumping systems engineered for solar-powered rural operation without costly fuel dependency.",
    icon: Sprout,
    tag: "IRRIGATION & AGRI",
  },
  {
    title: "Solar Street Lighting",
    description:
      "Standalone auto-sensor perimeter and municipal lighting systems built for reliable off-grid illumination.",
    icon: LampDesk,
    tag: "STANDALONE LIGHTING",
  },
];

export function TechnologySection() {
  return (
    <section
      id="technology"
      aria-label="System Technology and Energy Architecture"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full bg-amber-400/[0.08] blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[350px] rounded-full bg-sky-400/[0.06] blur-[130px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>SYSTEM TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Solar Systems Built Around the{" "}
            <span className="gradient-text-solar">Way Energy Is Used</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            From grid-connected PV to hybrid and storage-backed systems, Net
            Bangla Solar engineers energy architectures around site conditions,
            electrical requirements, and operating needs.
          </p>
        </div>

        {/* 5-NODE ENERGY ARCHITECTURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {primaryTechnologies.map((tech) => {
            const IconComponent = tech.icon;

            return (
              <div
                key={tech.id}
                className={`group relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 hover:border-amber-500/40 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-sm hover:shadow-[0_14px_35px_-8px_rgba(245,158,11,0.12)] flex flex-col justify-between text-left space-y-6 overflow-hidden ${tech.gridClass}`}
              >
                {/* Subtle Top Ambient Glow on Card Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/20 transition-colors duration-300"
                />

                {/* Top Row: Number Badge & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-700 bg-amber-50/90 px-3 py-1 rounded-full border border-amber-200">
                    {tech.number} / ARCHITECTURE
                  </span>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-amber-600 group-hover:border-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-700 transition-all duration-200"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105" />
                  </div>
                </div>

                {/* Content Area: Title, Description & Technical Labels */}
                <div className="relative z-10 space-y-4 flex-1 pt-1">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Technical Metadata Labels */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 sm:gap-2">
                    {tech.labels.map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-semibold tracking-wider text-slate-700"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUPPORTING APPLICATIONS (COMPACT SECONDARY ROW) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-amber-600">
                ADDITIONAL SYSTEM APPLICATIONS
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
                Dedicated Standalone &amp; Agricultural Deployments
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Engineered for Specialized Requirements
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {supportingApplications.map((app) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={app.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 hover:border-amber-500/40 hover:bg-amber-50/30 transition-all duration-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-600">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                        {app.title}
                      </h4>
                      <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 border border-amber-200 text-amber-800">
                        {app.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {app.description}
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

export default TechnologySection;

