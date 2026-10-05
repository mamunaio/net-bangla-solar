"use client";

import React from "react";
import {
  Sun,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Network,
  GitBranch,
  BatteryCharging,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Building,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ProductTechItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  labels: string[];
  icon: React.ElementType;
}

const productTechnologies: ProductTechItem[] = [
  {
    id: "single-glass",
    number: "01",
    tag: "P-TYPE MONOCRYSTALLINE",
    title: "Single Glass Panel",
    subtitle: "Classic High-Reliability PERC Architecture",
    description:
      "The modules utilize high-efficiency P-type monocrystalline PERC cell technology, combined with premium encapsulation materials and a classic single-glass structure, to withstand harsh environmental conditions, providing you with a high reliability quality guarantee.",
    keyPoints: [
      "Meets rigorous IEC standard test requirements",
      "Superior resistance to salt fog, dust, snail trails, and PID",
      "High power density reducing electrical resistance losses",
      "Precision damage-free cell cutting technology",
    ],
    labels: ["MONO PERC", "IEC TESTED", "ANTI-PID", "SALT FOG PROOF"],
    icon: Sun,
  },
  {
    id: "double-glass",
    number: "02",
    tag: "N-TYPE TOPCon BIFACIAL",
    title: "Double Glass Panel",
    subtitle: "Ultra-High Efficiency & Lowest Cost per kWh",
    description:
      "The modules utilize cutting-edge N-type monocrystalline TOPCon cell technology, offering high power generation and low cost per kilowatt-hour. The high-efficiency cells combined with advanced encapsulation technology achieve industry-leading module output power.",
    keyPoints: [
      "Highly wear-resistant and corrosion-resistant dual glass",
      "Nearly zero water permeability with superior anti-PID durability",
      "Effectively mitigates shading impact on energy yield",
      "Lowers hotspot operating temperatures for prolonged longevity",
    ],
    labels: ["N-TYPE TOPCon", "DUAL GLASS", "ZERO PERMEABILITY", "LOW HOTSPOT"],
    icon: Sparkles,
  },
  {
    id: "flexible-panel",
    number: "03",
    tag: "THIN-FILM & BIPV",
    title: "Flexible Panel",
    subtitle: "Ultra-Lightweight & Curved Surface Integration",
    description:
      "Flexible solar cells are a type of thin-film solar cell, featuring ultra-lightweight, ultra-thin design, quick installation, high safety, and strong durability. Flexible photovoltaic modules seamlessly integrate with roof surfaces, offering an elegant appearance suitable for various BIPV buildings.",
    keyPoints: [
      "Ultra-lightweight & ultra-thin construction",
      "Adhesive installation with simple and rapid construction",
      "Adaptable to curved and complex architectural surfaces",
      "Seamless aesthetic integration with modern building roofs",
    ],
    labels: ["ULTRA-LIGHTWEIGHT", "THIN-FILM", "ADHESIVE MOUNT", "BIPV COMPATIBLE"],
    icon: Building,
  },
];

const systemArchitectures = [
  {
    id: "on-grid",
    number: "01",
    title: "On-Grid Solar PV Systems",
    description:
      "Directly connected to the utility power grid. Generates solar power for your facility, exporting excess electricity to earn credits under national net metering policies.",
    icon: Network,
    badge: "NET METERING",
  },
  {
    id: "off-grid",
    number: "02",
    title: "Off-Grid Solar PV Systems",
    description:
      "Operates independently of the utility grid with battery storage and inverters to deliver complete energy independence for remote farms, homes, and facilities.",
    icon: Sun,
    badge: "OFF-GRID",
  },
  {
    id: "hybrid",
    number: "03",
    title: "Hybrid Solar PV Systems",
    description:
      "Combines solar generation with battery storage and grid connectivity, storing excess energy for power outages and peak demand times for maximum flexibility.",
    icon: GitBranch,
    badge: "HYBRID ESS",
  },
  {
    id: "commissioning",
    number: "04",
    title: "Solar Re-Commissioning & O&M",
    description:
      "Crucial startup testing, safety code verification, and ongoing maintenance essential to ensuring optimal functioning and the highest return on investment (ROI).",
    icon: Activity,
    badge: "COMMISSIONING",
  },
];

export function TechnologySection() {
  return (
    <section
      id="technology"
      aria-label="Product Technology and Energy Architecture"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full bg-amber-400/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[550px] h-[350px] rounded-full bg-emerald-400/[0.05] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
            <span>// PRODUCT TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Advanced Photovoltaic Hardware &amp;{" "}
            <span className="gradient-text-solar">Module Engineering</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We deploy verified Tier-1 solar technologies engineered for high power
            density, superior environmental resistance, and maximum lifetime
            kilowatt-hour yield across Bangladesh.
          </p>
        </div>

        {/* 3 CORE PRODUCT TECHNOLOGY CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {productTechnologies.map((product) => {
            const IconComponent = product.icon;

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.22),0_4px_16px_rgba(0,0,0,0.04)] flex flex-col justify-between text-left space-y-6 overflow-hidden cursor-default"
              >
                {/* Subtle Inner Ambient Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-emerald-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Top Golden Shimmer Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Top Row: Tag, Number Badge & Dynamic Glowing Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="flex h-13 w-13 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-600 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.45)] transition-all duration-300 ease-out shadow-2xs"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-6 w-6 transition-transform duration-300" />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-amber-800 bg-amber-50 group-hover:bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200 group-hover:border-amber-300 transition-colors duration-200 shadow-2xs">
                    {product.number} / PRODUCT
                  </span>
                </div>

                {/* Content: Title & Product Overview */}
                <div className="relative z-10 space-y-3.5 flex-1">
                  <div>
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-amber-700 block mb-1">
                      {product.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-900 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors duration-200">
                    {product.description}
                  </p>

                  {/* Key Technical Highlights */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      KEY SPECIFICATIONS
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {product.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Metadata Labels */}
                <div className="relative z-10 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {product.labels.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 group-hover:bg-amber-50/80 border border-slate-200 group-hover:border-amber-200 text-[10.5px] font-mono font-semibold tracking-wide text-slate-700 group-hover:text-amber-900 transition-all duration-200"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* SYSTEM INTEGRATION & ENERGY ARCHITECTURE (SECONDARY ROW) - Hidden as requested */}
        {false && (
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6 text-left relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-amber-400/[0.06] blur-[100px]"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-amber-700">
                SYSTEM INTEGRATION
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Turnkey Energy Architectures &amp; Grid Integration
              </h3>
            </div>
            <span className="text-xs sm:text-sm text-slate-500 font-mono font-medium">
              SREDA Compliant &bull; 100% Turnkey Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {systemArchitectures.map((arch) => {
              const IconComponent = arch.icon;
              return (
                <div
                  key={arch.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white p-5 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_14px_30px_-6px_rgba(245,158,11,0.18),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out cursor-default overflow-hidden space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100/90 text-amber-800 border border-amber-300/60">
                      {arch.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {arch.title}
                    </h4>
                    <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed mt-1">
                      {arch.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        )}
      </Container>
    </section>
  );
}

export default TechnologySection;
