"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Factory, Building2, Home, Settings2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SolutionItem {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  gridClass: string;
  heightClass: string;
  isHero?: boolean;
}

const solutions: SolutionItem[] = [
  {
    id: "industrial",
    index: "01",
    title: "Industrial Solar",
    description:
      "High-capacity solar systems engineered to reduce operating costs and strengthen long-term energy resilience.",
    image: "/images/solar-industrial.jpg",
    alt: "Industrial solar panels installed beside a manufacturing facility",
    icon: Factory,
    gridClass: "lg:col-span-7",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[490px]",
    isHero: true,
  },
  {
    id: "commercial",
    index: "02",
    title: "Commercial Solar",
    description:
      "Smart rooftop and commercial solar systems built around your facility's energy demand.",
    image: "/images/solar-commercial.jpg",
    alt: "Commercial building rooftop equipped with modern solar panels",
    icon: Building2,
    gridClass: "lg:col-span-5",
    heightClass: "min-h-[420px] sm:min-h-[460px] lg:min-h-[490px]",
  },
  {
    id: "residential",
    index: "03",
    title: "Residential Solar",
    description:
      "Reliable rooftop solar designed to help households generate cleaner energy and reduce electricity costs.",
    image: "/images/solar-residential.jpg",
    alt: "Residential home with high efficiency rooftop solar panels",
    icon: Home,
    gridClass: "lg:col-span-6",
    heightClass: "min-h-[380px] sm:min-h-[420px] lg:min-h-[440px]",
  },
  {
    id: "maintenance",
    index: "04",
    title: "Operations & Maintenance",
    description:
      "Performance monitoring, preventive maintenance, and technical support that keep your solar investment working.",
    image: "/images/solar-maintenance.jpg",
    alt: "Solar technician performing diagnostic maintenance on photovoltaic arrays",
    icon: Settings2,
    gridClass: "lg:col-span-6",
    heightClass: "min-h-[380px] sm:min-h-[420px] lg:min-h-[440px]",
  },
];

export function SolutionsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="solutions"
      aria-label="Solar Solutions for Every Scale"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-emerald-500/[0.07] blur-[170px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>Our Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Solar systems engineered{" "}
            <span className="gradient-text-solar">for every scale.</span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            From a single rooftop to large industrial facilities, we design
            solar solutions around the way you use energy.
          </p>
        </div>

        {/* ASYMMETRIC GRID OF SOLUTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {solutions.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/40 bg-[#06120a] transition-all duration-500 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.25)] flex flex-col justify-between p-6 sm:p-8",
                  item.gridClass,
                  item.heightClass
                )}
              >
                {/* Full Bleed Image Background with Resilient CSS Fallback */}
                <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#06180d] via-[#030e06] to-[#020603]">
                  {/* Atmospheric radial glow and geometric solar grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
                  />

                  {failedImages[item.id] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                        {item.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                    />
                  )}

                  {/* Single Clean Vignette Overlay (Guarantees text readability while keeping imagery bright and visible) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#040e08]/90 via-[#040e08]/25 to-transparent pointer-events-none"
                  />
                </div>

                {/* Top Area: Index Number & Icon Badge */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="text-xs font-mono font-medium tracking-widest text-emerald-400/90 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {item.index}
                  </span>

                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl glass-panel border border-white/10 text-emerald-400 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Area: Title, Description, and Explore Link */}
                <div className="relative z-10 space-y-4 pt-16 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-solar-text-secondary leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <Link
                      href="#quote"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-0.5"
                      aria-label={`Explore ${item.title} solution`}
                    >
                      <span>Explore solution</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {item.isHero && (
                      <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold text-solar-text-muted px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                        High Capacity
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
