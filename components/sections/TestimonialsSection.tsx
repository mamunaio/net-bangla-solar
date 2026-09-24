"use client";

import React from "react";
import {
  Building2,
  Factory,
  Home,
  Landmark,
  Sprout,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface SectorItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ElementType;
}

const clientSectors: SectorItem[] = [
  {
    id: "government",
    number: "01",
    title: "Government Projects",
    description:
      "Solar infrastructure for public-sector facilities and government energy requirements.",
    tag: "PUBLIC SECTOR",
    icon: Landmark,
  },
  {
    id: "industrial",
    number: "02",
    title: "Industrial & Textile Mills",
    description:
      "Solar systems designed for industrial facilities, manufacturing environments, and textile operations with substantial electrical demand.",
    tag: "HIGH DEMAND",
    icon: Factory,
  },
  {
    id: "commercial",
    number: "03",
    title: "Commercial Office Parks & Malls",
    description:
      "Solar solutions for offices, institutions, retail environments, and commercial properties.",
    tag: "UTILITY OFFSET",
    icon: Building2,
  },
  {
    id: "agri-tech",
    number: "04",
    title: "Agri-Tech & Rural Enterprises",
    description:
      "Solar-powered energy and irrigation applications for agricultural and rural operating environments.",
    tag: "IRRIGATION & PUMPING",
    icon: Sprout,
  },
  {
    id: "residential",
    number: "05",
    title: "Residential Estates & Institutions",
    description:
      "Rooftop and distributed solar applications for residential properties and institutional facilities.",
    tag: "DISTRIBUTED ROOFTOP",
    icon: Home,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="sectors"
      aria-label="Who We Serve - Client Sectors and Operating Environments"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 w-[850px] h-[500px] rounded-full bg-emerald-500/[0.05] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[650px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>WHO WE SERVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Solar Infrastructure Across{" "}
            <span className="gradient-text-solar">
              Diverse Energy Environments
            </span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            From industrial and commercial facilities to agricultural
            operations, institutions, and residential environments, our systems
            are engineered around the energy requirements of each site.
          </p>
        </div>

        {/* MAIN COMPOSITION: LEFT EDITORIAL STATEMENT / RIGHT SECTOR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Large Editorial Statement Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#07160d]/80 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(16,185,129,0.12)] text-left">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-emerald-500/[0.08] blur-[90px]"
            />

            <div className="relative z-10 space-y-6">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
                ENGINEERED FOR DIFFERENT ENERGY ENVIRONMENTS
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Tailored execution across institutional, commercial, and rural
                scale.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Net Bangla Solar is structured to support varied technical and
                operational demands — from industrial manufacturing environments
                to distributed off-grid installations.
              </p>
            </div>

            {/* Quick Sector Tags Strip */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-solar-text-muted block">
                COVERAGE SPECTRUM
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-emerald-300">
                  PUBLIC SECTOR
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-emerald-300">
                  INDUSTRIAL &amp; TEXTILES
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-emerald-300">
                  COMMERCIAL
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-emerald-300">
                  AGRI-TECH
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono text-emerald-300">
                  RESIDENTIAL
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: 5 Structured Client Sectors */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {clientSectors.map((sector, idx) => {
              const IconComponent = sector.icon;
              const isWide = idx === 0;

              return (
                <div
                  key={sector.id}
                  className={`group relative rounded-3xl p-6 bg-[#06120a] border border-white/10 hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between text-left space-y-4 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.12)] ${
                    isWide ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Top Bar: Number Badge, Tag & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                        {sector.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-400/90 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                        {sector.tag}
                      </span>
                    </div>

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
                      {sector.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-solar-text-secondary leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESTRAINED SUPPORTING LINE */}
        <div className="pt-2 text-center">
          <p className="text-xs font-mono text-solar-text-muted max-w-2xl mx-auto leading-relaxed">
            * Sector coverage reflects the applications and client environments
            documented in the supplied company profile.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
