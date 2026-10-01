"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  PanelsTopLeft,
  Home,
  Sprout,
  Building2,
  Cpu,
  ShieldCheck,
  Zap,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  PhoneCall,
  FileText,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { cn } from "@/lib/utils";

interface SolutionCategory {
  id: string;
  title: string;
  categoryTag: string;
  badge: string;
  description: string;
  image: string;
  features: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const solutionCategories: SolutionCategory[] = [
  {
    id: "industrial-commercial-solar",
    title: "Industrial & Commercial Solar EPC",
    categoryTag: "MEGAWATT INDUSTRIAL & COMMERCIAL",
    badge: "100 kWp – 5+ MWp",
    description:
      "We extend our support exclusively in Consulting, Engineering, Contracting and Commissioning Services on a turnkey basis. We focus on delivering customized solar and storage energy solutions tailored for the Commercial and Industrial (C&I) sectors in Bangladesh, with 33kV/11kV substation grid synchronization and SREDA bi-directional net-metering export.",
    image: "/images/solar-industrial.jpg",
    features: [
      "Turnkey Engineering, Procurement & Commissioning (EPC)",
      "Tier-1 N-Type Bifacial Monocrystalline Modules",
      "Average Capex Payback: 3.1 – 3.4 Years",
      "24/7 Cloud SCADA Telemetry & String Alarms",
    ],
    primaryCta: {
      label: "Learn More",
      href: "/solutions/industrial-solar-epc",
    },
    secondaryCta: {
      label: "Estimate Factory ROI",
      href: "/calculator",
    },
  },
  {
    id: "power-solaroof-bipv",
    title: "Power Solaroof™ & Integrated BIPV Roofing",
    categoryTag: "PATENT-PENDING BIPV ROOFING",
    badge: "Integrated In-Roof PV",
    description:
      "A 100% leak-proof, cyclone-resistant Building-Integrated Photovoltaic (BIPV) solar roof developed with global partner ZJHT. Completely replaces corrugated CGI tin sheets with heavy-duty photovoltaic panels and integrated drainage channels.",
    image: "/images/power-solaroof.jpg",
    features: [
      "Zero Roof Penetration Mechanical Fastening",
      "Replaces Corrugated Tin Sheets Entirely",
      "Built-in Gutter & Heavy Rainwater Drainage",
      "Reduces Factory Indoor Temperature by 4–6°C",
    ],
    primaryCta: {
      label: "Learn More",
      href: "/solutions/power-solaroof",
    },
    secondaryCta: {
      label: "Request BIPV Specs",
      href: "/contact",
    },
  },
  {
    id: "residential-hybrid-solar",
    title: "Residential & Hybrid Storage Systems",
    categoryTag: "LUXURY RESIDENTIAL & HYBRID",
    badge: "5 kWp – 50 kWp ESS",
    description:
      "Net Bangla Limited ensures reliable, durable solar solutions with advanced technology and expert installations to bring clean electricity to every doorstep. High-efficiency smart on-grid and hybrid solar installations tailored for luxury villas, duplexes, and residential estates with Lithium LiFePO4 battery energy storage (ESS).",
    image: "/images/solar-residential.jpg",
    features: [
      "Zero Noise & Zero Diesel Fumes Backup",
      "Intelligent Lithium LiFePO4 Battery Storage",
      "Cuts Home Electricity Bills by up to 80%",
      "DESCO / DPDC Net-Metering Synchronized",
    ],
    primaryCta: {
      label: "Learn More",
      href: "/solutions/residential-solar",
    },
    secondaryCta: {
      label: "Calculate Home Savings",
      href: "/calculator",
    },
  },
  {
    id: "agricultural-solar-irrigation",
    title: "Agricultural Solar Irrigation & Cold Storage",
    categoryTag: "AGRI-POWER & IRRIGATION",
    badge: "10 HP – 100 HP Pumps",
    description:
      "Engineered solar power systems for deep tube-well irrigation pumps, cold storage facilities, poultry farms, and agro-processing plants across rural Bangladesh. Drastically reduces operational expenditures by replacing costly diesel generators.",
    image: "/images/solar-agricultural.jpg",
    features: [
      "Eliminates Costly Diesel Fuel Dependency",
      "VFD Soft-Starter Multi-Pump Control",
      "BREB Rural Grid Net-Metering Interconnection",
      "Storm-Resistant Galvanized Ground Racks",
    ],
    primaryCta: {
      label: "Learn More",
      href: "/solutions/agricultural-solar",
    },
    secondaryCta: {
      label: "Request Agri Proposal",
      href: "/contact",
    },
  },
  {
    id: "commercial-rooftop-carpark",
    title: "Commercial Rooftops, Solar Car Parks & EV Charging",
    categoryTag: "COMMERCIAL & EV CANOPY",
    badge: "50 kWp – 500 kWp",
    description:
      "Custom solar photovoltaic canopies and rooftop installations for corporate office towers, hospitals, universities, and commercial parking areas. Provides shade for vehicles while generating high-yield clean power and feeding EV charging ports.",
    image: "/images/solar-commercial.jpg",
    features: [
      "Dual-Purpose Vehicle Shade & Clean Power Generation",
      "Elevated Structural Canopies & RCC Walkways",
      "High-Capacity EV Charging Station Integration",
      "High Power Factor Support & Peak Load Shaving",
    ],
    primaryCta: {
      label: "Learn More",
      href: "/solutions/commercial-rooftop",
    },
    secondaryCta: {
      label: "Book Site Inspection",
      href: "/contact",
    },
  },
  {
    id: "it-telecom-enterprise-services",
    title: "IT, Telecom, Safety & Security Services",
    categoryTag: "IT INFRASTRUCTURE & BPO",
    badge: "BASIS & BACCO Certified",
    description:
      "Net Bangla Ltd. provides services across major information technology segments, BPO contact center infrastructure, electronic safety & security systems, and data analysis services including Data Visualization, Analytics & Business Intelligence (BI), Data Mining, and Data Processing.",
    image: "/images/who-we-serve-engineering.jpg",
    features: [
      "General Member of BASIS (A-405) & BACCO",
      "BTRC Registered Call Center (CC/BPO) Infrastructure",
      "Electronic Safety & Security System Solutions",
      "Data Visualization, Analytics & Business Intelligence (BI)",
    ],
    primaryCta: {
      label: "Contact IT Division",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Company Profile",
      href: "/company-profile.pdf",
    },
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* 1. HERO SECTION (Clean textual header + clean standalone hero image with ZERO overlaid text) */}
        <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>TURNKEY ENERGY &amp; TECHNOLOGY SOLUTIONS &bull; NET BANGLA LIMITED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineered Solar &amp; Technology Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive turnkey solar EPC engineering, patent-pending BIPV roofing, residential hybrids, agricultural irrigation, and mission-critical enterprise IT services across Bangladesh.
              </p>
            </div>

            {/* Clean Standalone Hero Image (STRICT RULE: NO TEXT OVERLAID ON IMAGE) */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] max-w-6xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <Image
                src="/images/solar-hero.jpg"
                alt="Net Bangla Solar Turnkey Engineering Solutions"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Container>
        </section>

        {/* 2. DIRECT SOLUTIONS/SERVICES GRID (Directly below Hero without any filler) */}
        <section className="py-14 sm:py-20 bg-white">
          <Container>
            <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
              {solutionCategories.map((sol, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={sol.id}
                    id={sol.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-7 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300"
                  >
                    {/* Image Column */}
                    <div className={cn("lg:col-span-6 relative", isEven && "lg:order-2")}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-amber-400 text-xs font-mono font-bold">
                          {sol.badge}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={cn("lg:col-span-6 space-y-5 text-left", isEven && "lg:order-1")}>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded border border-amber-200/60 inline-block">
                          {sol.categoryTag}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mt-2.5">
                          {sol.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {sol.description}
                      </p>

                      {/* Technical Specs / Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {sol.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action CTAs */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          href={sol.primaryCta.href}
                          className="btn-primary-solar py-2.5 px-6 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950 shadow-sm"
                        >
                          <span>{sol.primaryCta.label}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href={sol.secondaryCta.href}
                          className="py-2.5 px-5 rounded-xl border border-slate-300 hover:border-amber-400 bg-white hover:bg-amber-50/50 text-slate-800 hover:text-amber-900 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
                        >
                          <span>{sol.secondaryCta.label}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 3. TECHNOLOGY ALLIANCES & EPC PARTNERS */}
        <PartnersSection />

        {/* 4. BOTTOM ACTION CTA */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-950 -z-10"
          />

          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Zap className="w-4 h-4" />
                <span>START YOUR CLEAN ENERGY JOURNEY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Optimize Your Facility&apos;s Energy Infrastructure?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Speak directly with our certified solar engineers to receive an on-site feasibility assessment, single-line diagram, and financial ROI payback analysis.
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
                  Request Engineering Consultation
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
