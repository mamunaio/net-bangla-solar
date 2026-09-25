"use client";

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PanelsTopLeft,
  Factory,
  Building2,
  Home,
  Sprout,
  ShieldCheck,
  Zap,
  Calculator,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { cn } from "@/lib/utils";

const solarSolutions = [
  {
    id: "power-solaroof",
    title: "Power Solaroof™ BIPV Integrated Roofing",
    badge: "BIPV GRADE",
    capacity: "Custom MWp Scale",
    desc: "A 100% leak-proof, cyclone-rated integrated solar roof that replaces traditional CGI tin sheets. Features continuous aluminum profiles, internal drainage channels, and 25-year structural warranties.",
    features: [
      "Zero Roof Penetration Mounting",
      "Replaces Corrugated Tin Sheets Entirely",
      "Built-in Gutter & Rainwater Drainage",
      "Reduces Factory Indoor Temperature by 4–6°C",
    ],
    image: "/images/power-solaroof.jpg",
    link: "/calculator",
  },
  {
    id: "industrial-solar-epc",
    title: "Industrial Megawatt (MWp) Turnkey Solar EPC",
    badge: "100 kWp – 5 MWp",
    capacity: "Factory & Mills",
    desc: "Engineered specifically for export textile mills, steel rerolling, pharmaceuticals, and manufacturing plants. Includes 33kV substation synchronization and automated SREDA net metering export.",
    features: [
      "Zero Production Downtime Installation",
      "Tier-1 N-Type Bifacial Modules",
      "Average Capex Payback: 3.1 Years",
      "24/7 Cloud SCADA Telemetry & String Alarms",
    ],
    image: "/images/solar-industrial.jpg",
    link: "/calculator",
  },
  {
    id: "commercial-rooftop",
    title: "Commercial Building & Corporate Solar Systems",
    badge: "NET METERED",
    capacity: "50 kWp – 500 kWp",
    desc: "Designed for commercial towers, corporate headquarters, hospitals, universities, and shopping complexes to offset daytime peak HVAC and lighting loads.",
    features: [
      "Elevated RCC Canopy Walkways",
      "DESCO / DPDC Net-Metering Synchronization",
      "Architectural Aesthetic All-Black Panels",
      "High Power Factor Correction Support",
    ],
    image: "/images/solar-commercial.jpg",
    link: "/calculator",
  },
  {
    id: "residential-solar",
    title: "Residential Hybrid & Smart Rooftop Solar",
    badge: "HYBRID / ON-GRID",
    capacity: "5 kWp – 50 kWp",
    desc: "High-yield smart solar systems for luxury villas, residential duplexes, and apartment buildings featuring intelligent lithium battery energy storage (ESS) for zero-delay backup.",
    features: [
      "Zero Noise & Zero Diesel Fumes",
      "Lithium LiFePO4 Smart Battery Storage",
      "Cuts Home Electricity Bills up to 80%",
      "Integrated EV Charger Readiness",
    ],
    image: "/images/solar-residential.jpg",
    link: "/calculator",
  },
  {
    id: "agricultural-solar",
    title: "Agricultural Solar Irrigation & Cold Storage",
    badge: "DIRECT DC PUMP",
    capacity: "10 HP – 100 HP",
    desc: "Off-grid and grid-interactive solar power solutions for agricultural irrigation pumps, cold storage facilities, poultry farms, and fish hatcheries across rural Bangladesh.",
    features: [
      "Eliminates Expensive Diesel Pump Costs",
      "VFD Soft-Starter Multi-Pump Control",
      "BREB Rural Net-Metering Interconnection",
      "Heavy Duty Storm-Resistant Ground Racks",
    ],
    image: "/images/solar-agricultural.jpg",
    link: "/calculator",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* HERO */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>TURNKEY EPC SOLUTIONS &bull; SREDA CERTIFIED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Engineered Solar Solutions for <span className="gradient-text-solar">Every Sector</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                From patent-pending BIPV Power Solaroof™ systems and industrial textile megawatt arrays
                to commercial towers and luxury residential hybrids.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Estimate Your Facility ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3 px-6 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white text-slate-800 hover:text-amber-800 text-sm font-bold shadow-2xs transition-all hover:bg-amber-50/40"
                >
                  Request Technical Proposal
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* SOLUTIONS STACK */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="space-y-16">
              {solarSolutions.map((sol, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={sol.id}
                    id={sol.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300"
                  >
                    {/* Image Column */}
                    <div className={cn("lg:col-span-6 relative", isEven && "lg:order-2")}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-amber-400 text-xs font-mono font-bold">
                          {sol.badge}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={cn("lg:col-span-6 space-y-5 text-left", isEven && "lg:order-1")}>
                      <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                        {sol.capacity}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                        {sol.title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {sol.desc}
                      </p>

                      <div className="space-y-2.5 pt-2">
                        {sol.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap gap-3">
                        <Link
                          href="/calculator"
                          className="btn-primary-solar py-2.5 px-5 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-950 shadow-sm"
                        >
                          <Calculator className="w-4 h-4" />
                          <span>Calculate System Capex & ROI</span>
                        </Link>
                        <Link
                          href="/contact"
                          className="py-2.5 px-5 rounded-xl border border-slate-300 hover:border-amber-400 bg-white hover:bg-amber-50/40 text-slate-800 text-xs font-bold transition-all"
                        >
                          Book Feasibility Audit
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* PARTNERS */}
        <PartnersSection />

        {/* CLIENTS */}
        <ClientsSection />

        {/* BOTTOM CTA */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-950 -z-10"
          />

          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Zap className="w-4 h-4" />
                <span>CLEAN POWER FOR YOUR FACILITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Unlock Clean, Uninterruptible Solar Energy Today
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our certified engineers to conduct a detailed 3D LiDAR shading analysis and single-line electrical engineering layout for your site.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-lg"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Instant Solar ROI Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all"
                >
                  Speak with an Engineer
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
