"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Home,
  MapPin,
  Sprout,
  SunMedium,
  Waves,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type ApplicationCategory = "all" | "industrial" | "commercial" | "residential" | "agricultural" | "floating" | "utility";

interface ApplicationItem {
  id: string;
  category: "industrial" | "commercial" | "residential" | "agricultural" | "floating" | "utility";
  label: string;
  title: string;
  location: string;
  typicalScope: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ElementType;
}

const applicationsData: ApplicationItem[] = [
  {
    id: "industrial-rooftops",
    category: "industrial",
    label: "INDUSTRIAL",
    title: "Industrial Rooftops",
    location: "Gazipur • Savar • Narayanganj",
    typicalScope: "100 kWp – 2+ MWp",
    description:
      "Large rooftop solar applications designed for industrial and manufacturing environments, including net-metering-oriented energy use.",
    image: "/images/golden-hour-industrial-solar-rooftop.webp",
    alt: "Golden-Hour Industrial Rooftop Solar Installation in Bangladesh",
    icon: Factory,
  },
  {
    id: "commercial-buildings",
    category: "commercial",
    label: "COMMERCIAL",
    title: "Commercial Buildings",
    location: "Dhaka • Chattogram • Sylhet",
    typicalScope: "20 kWp – 1 MWp",
    description:
      "Commercial rooftop systems designed to offset utility consumption across offices, institutions, and commercial properties.",
    image: "/images/solar-commercial-campus.webp",
    alt: "Modern Commercial Corporate Headquarters Rooftop Solar Array in Bangladesh",
    icon: Building2,
  },
  {
    id: "residential-solar",
    category: "residential",
    label: "RESIDENTIAL",
    title: "Residential Solar",
    location: "Urban & Suburban",
    typicalScope: "5–20 kWp",
    description:
      "Rooftop solar applications designed for homes and residential properties with practical energy requirements.",
    image: "/images/solar-residential-villa.webp",
    alt: "Modern Luxury Residential Duplex Villa Rooftop Solar Pergola & Garden",
    icon: Home,
  },
  {
    id: "agricultural-solar",
    category: "agricultural",
    label: "AGRICULTURAL",
    title: "Agricultural Solar",
    location: "Rural Agricultural Areas",
    typicalScope: "Custom Pump & PV",
    description:
      "Solar-powered agricultural applications designed around irrigation, pumping, and rural energy requirements.",
    image: "/images/solar-agricultural-pump.webp",
    alt: "Solar-Powered Irrigation Pump System in Green Farmland in Bangladesh",
    icon: Sprout,
  },
  {
    id: "floating-solar",
    category: "floating",
    label: "FLOATING FPV",
    title: "Floating Photovoltaics (FPV)",
    location: "Lakes • Reservoirs • Fisheries",
    typicalScope: "50 kWp – 10+ MWp",
    description:
      "High-efficiency water-based solar arrays utilizing natural water cooling for higher yields on industrial retention ponds, reservoirs, and aquaculture.",
    image: "/images/solar-floating.webp",
    alt: "Aerial view of high-efficiency Floating Solar Farm on water reservoir",
    icon: Waves,
  },
  {
    id: "utility-ground-mount",
    category: "utility",
    label: "UTILITY & GROUND-MOUNT",
    title: "Utility-Scale Solar Parks",
    location: "BEZA Economic Zones • Riverbank Char Lands • Solar Parks",
    typicalScope: "5 MWp – 100+ MWp",
    description:
      "High-capacity ground-mounted photovoltaic power plants and utility microgrids engineered with central inverters and high-voltage transmission substation grid tie-ins.",
    image: "/images/solar-utility-ground.webp",
    alt: "Aerial view of Utility-Scale Ground-Mounted Solar Park in Bangladesh",
    icon: SunMedium,
  },
];

const filterTabs: { key: ApplicationCategory; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All", icon: Zap },
  { key: "industrial", label: "Industrial", icon: Factory },
  { key: "commercial", label: "Commercial", icon: Building2 },
  { key: "residential", label: "Residential", icon: Home },
  { key: "agricultural", label: "Agricultural", icon: Sprout },
  { key: "floating", label: "Floating (FPV)", icon: Waves },
  { key: "utility", label: "Utility & Ground", icon: SunMedium },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ApplicationCategory>("all");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredApplications = useMemo(() => {
    if (activeCategory === "all") return applicationsData;
    return applicationsData.filter((app) => app.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      aria-label="Project Applications - Solar Systems Designed For Real Energy Demands"
      className="relative overflow-hidden py-20 scroll-mt-24 lg:py-32 lg:scroll-mt-28 bg-white"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-[500px] w-[850px] rounded-full bg-amber-400/[0.07] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-[450px] w-[750px] rounded-full bg-sky-400/[0.05] blur-[150px]"
      />

      <Container className="relative z-10 space-y-10 md:space-y-14">
        {/* SECTION INTRO */}
        <div className="space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-4 text-left">
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Solar Systems Designed{" "}
              <span className="gradient-text-solar">For Real Energy Demands</span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From industrial rooftops and commercial facilities to floating solar
              and utility-scale solar parks, our systems are engineered around
              site-specific energy requirements.
            </p>
          </div>

          {/* APPLICATION CATEGORY FILTER TABS */}
          <div className="flex items-center overflow-x-auto pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div
              role="tablist"
              aria-label="Filter solar project applications"
              className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-xs"
            >
              {filterTabs.map((tab) => {
                const isActive = activeCategory === tab.key;
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Filter by ${tab.label}`}
                    onClick={() => setActiveCategory(tab.key)}
                    className={cn(
                      "inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer",
                      isActive
                        ? "bg-amber-500 text-white shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white"
                    )}
                  >
                    <IconComponent
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors",
                        isActive ? "text-white" : "text-amber-500"
                      )}
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2x2 APPLICATION GRID (FULL-BLEED CINEMATIC CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {filteredApplications.map((app) => {
            const IconComponent = app.icon;

            return (
              <article
                key={app.id}
                className="group relative isolate flex min-h-[460px] sm:min-h-[490px] flex-col justify-end overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 transition-all duration-300 ease-out hover:border-amber-500/50 hover:-translate-y-0.5 shadow-md hover:shadow-xl sm:p-8 lg:p-9"
              >
                {/* Full Bleed Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {failedImages[app.id] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-amber-400" />
                      </div>
                      <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">
                        {app.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={app.image}
                      alt={app.alt}
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [app.id]: true }))
                      }
                    />
                  )}

                  {/* Natural Light Gradient Overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent pointer-events-none"
                  />
                </div>

                {/* Top Area: Category Label, Representative Tag & Icon (Hidden per user request) */}
                {/* 
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1 font-mono text-xs font-bold tracking-widest text-amber-700 backdrop-blur-md shadow-sm">
                      {app.label}
                    </span>
                    <span className="hidden sm:inline-block rounded-full border border-white/20 bg-slate-900/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-200 backdrop-blur-md">
                      REPRESENTATIVE APPLICATION
                    </span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-slate-900/70 text-amber-400 backdrop-blur-md group-hover:border-amber-400 group-hover:bg-amber-500/20 transition-all duration-200 shadow-sm">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div> 
                */}

                {/* Bottom Area: Typical Scale, Title, Location & Inquire Link */}
                <div className="relative z-10 space-y-4 pt-16 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 text-left">
                  {/* Typical System Scale Metadata */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-amber-300">
                      TYPICAL SYSTEM SCALE
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-amber-400 shrink-0" />
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                        {app.typicalScope}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/15 pt-4 space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-amber-300 sm:text-3xl drop-shadow-md">
                      {app.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-xl drop-shadow">
                      {app.description}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
                      <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                      <span className="font-mono text-xs sm:text-sm font-semibold">{app.location}</span>
                    </div>

                    {/* Delivery & Financing Models (Feasibility Studies • Turnkey EPC • CAPEX • OPEX • PPA) */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono font-semibold text-slate-200">
                      <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 backdrop-blur-md text-amber-300">
                        Feasibility Studies
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 backdrop-blur-md text-white">
                        Turnkey EPC
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 backdrop-blur-md text-emerald-300">
                        CAPEX
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 backdrop-blur-md text-sky-300">
                        OPEX
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 backdrop-blur-md text-indigo-300">
                        PPA
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-white/15">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all hover:bg-amber-500 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 backdrop-blur-md"
                      aria-label={`Inquire about ${app.title} solar solutions`}
                    >
                      <span>Inquire for this application</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
