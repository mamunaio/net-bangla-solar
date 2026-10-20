"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  Factory,
  Home,
  Landmark,
  Sprout,
  ArrowUpRight,
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
  // Section hidden as requested (set to false whenever you want to display it again)
  const isHidden = true;
  if (isHidden) {
    return null;
  }

  return (
    <section
      id="sectors"
      aria-label="Who We Serve - Client Sectors and Operating Environments"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 w-[850px] h-[500px] rounded-full bg-amber-400/[0.07] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[650px] h-[400px] rounded-full bg-sky-400/[0.05] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
            <span>WHO WE SERVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Solar Infrastructure Across{" "}
            <span className="gradient-text-solar">
              Diverse Energy Environments
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            From industrial and commercial facilities to agricultural
            operations, institutions, and residential environments, our systems
            are engineered around the energy requirements of each site.
          </p>
        </div>

        {/* MAIN COMPOSITION: LEFT EDITORIAL STATEMENT / RIGHT SECTOR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Large Editorial Statement Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 relative overflow-hidden shadow-sm text-left hover:border-amber-400/80 transition-all duration-300 group">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-amber-500/[0.08] blur-[90px]"
            />

            <div className="relative z-10 space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-amber-700 uppercase">
                ENGINEERED FOR DIFFERENT ENERGY ENVIRONMENTS
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                Tailored execution across institutional, commercial, and rural
                scale.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Net Bangla Solar is structured to support varied technical and
                operational demands — from industrial manufacturing environments
                to distributed off-grid installations.
              </p>
            </div>

            {/* Realistic Solar Engineering Image with Compact Engineering Approach Overlay */}
            <div className="relative z-10 my-6 w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group">
              <Image
                src="/images/who-we-serve-engineering.webp"
                alt="Industrial and institutional rooftop solar infrastructure engineered by Net Bangla Solar"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none"
              />

              {/* Compact Engineering Approach Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-10 p-3.5 rounded-xl bg-white/95 border border-slate-200/90 backdrop-blur-md text-left shadow-md">
                <span className="text-[10.5px] font-mono uppercase tracking-widest text-amber-700 font-bold block">
                  ENGINEERING APPROACH
                </span>
                <p className="text-xs text-slate-700 mt-0.5 leading-snug font-medium">
                  Site conditions &rarr; Energy requirements &rarr; System architecture &rarr; Lifecycle support
                </p>
              </div>
            </div>

            {/* Quick Sector Tags Strip / Coverage Spectrum */}
            <div className="relative z-10 pt-5 border-t border-slate-100 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block font-semibold">
                COVERAGE SPECTRUM
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "PUBLIC SECTOR",
                  "INDUSTRIAL & TEXTILES",
                  "COMMERCIAL",
                  "AGRI-TECH",
                  "RESIDENTIAL",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 hover:border-amber-300 text-[10.5px] font-mono text-amber-800 hover:text-amber-900 font-semibold transition-all duration-200 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
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
                  className={`group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-4 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.20),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default ${
                    isWide ? "sm:col-span-2" : ""
                  }`}
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

                  {/* Top Bar: Number Badge, Tag & Dynamic Glowing Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-amber-800 bg-amber-50 group-hover:bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200 group-hover:border-amber-300 transition-colors duration-200 shadow-2xs">
                        {sector.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-800 bg-amber-100/80 group-hover:bg-amber-500 group-hover:text-slate-950 px-2.5 py-0.5 rounded border border-amber-200 group-hover:border-amber-500 transition-all duration-200">
                        {sector.tag}
                      </span>
                    </div>

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
                        {sector.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors duration-200">
                      {sector.description}
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

export default TestimonialsSection;
