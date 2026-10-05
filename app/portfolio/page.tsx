"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  MapPin,
  TrendingUp,
  Sun,
  ShieldCheck,
  Building2,
  Factory,
  Home,
  Sprout,
  Calculator,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { cn } from "@/lib/utils";

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "industrial" | "commercial" | "residential" | "agricultural" | "defense";
  categoryLabel: string;
  capacity: string;
  location: string;
  annualYield: string;
  annualSavings: string;
  image: string;
  panels: string;
  inverters: string;
  description: string;
  highlights: string[];
}

const portfolioProjects: ProjectItem[] = [
  {
    id: "gazipur-textile-mwp",
    title: "1.2 MWp Industrial Rooftop Solar Power Plant",
    client: "Export Oriented Textile Mill",
    category: "industrial",
    categoryLabel: "Industrial EPC",
    capacity: "1,200 kWp (1.2 MWp)",
    location: "Kashimpur, Gazipur",
    annualYield: "1,740 MWh / Year",
    annualSavings: "৳ 1.85 Crore / Year",
    image: "/images/project-gazipur.jpg",
    panels: "Tier-1 580W N-Type Bifacial Monocrystalline",
    inverters: "100 kW European On-Grid Smart Inverters",
    description: "Turnkey rooftop installation on tin shed structure with zero-penetration standing seam clamps, integrated with 33kV factory substation and net-metering export.",
    highlights: ["SREDA Approved Net-Metering", "Zero Production Downtime Installation", "3.1 Year Estimated Payback", "24/7 SCADA Live Telemetry"],
  },
  {
    id: "chattogram-port-facility",
    title: "750 kWp Commercial Logistics & Cold Chain Solar System",
    client: "Maritime Logistics & Cold Storage Facility",
    category: "commercial",
    categoryLabel: "Commercial Solar",
    capacity: "750 kWp",
    location: "Patenga, Chattogram",
    annualYield: "1,085 MWh / Year",
    annualSavings: "৳ 1.15 Crore / Year",
    image: "/images/project-chattogram.jpg",
    panels: "Tier-1 550W High-Efficiency Monocrystalline",
    inverters: "European On-Grid Inverters with IP66 Marine Coating",
    description: "Designed to withstand coastal saline air and high wind loads up to 180 km/h, significantly slashing electricity bills for heavy refrigeration compressors.",
    highlights: ["Anti-Corrosion C5 Marine Grade Mounting", "BPDB Net-Metering Connected", "3.4 Year Payback", "Active Power Factor Correction"],
  },
  {
    id: "dhaka-corporate-hq",
    title: "350 kWp Corporate Tower Net-Metered Rooftop",
    client: "Financial & Corporate Headquarters",
    category: "commercial",
    categoryLabel: "Commercial Solar",
    capacity: "350 kWp",
    location: "Tejgaon Commercial Area, Dhaka",
    annualYield: "510 MWh / Year",
    annualSavings: "৳ 56 Lakh / Year",
    image: "/images/project-dhaka.jpg",
    panels: "Tier-1 All-Black Monocrystalline Modules",
    inverters: "Smart Grid Inverters with Zero Export Control",
    description: "Architecturally integrated solar system engineered on concrete RCC roof with elevated steel walkway, powering central HVAC and server rooms.",
    highlights: ["DESCO Bi-directional Net Meter", "Ballasted Concrete Structure", "Custom Architectural Canopy", "Real-Time Cloud Dashboard"],
  },
  {
    id: "defense-bmtf-engineering",
    title: "500 kWp Engineering Complex High-Voltage Solar Plant",
    client: "National Defense Engineering Complex",
    category: "defense",
    categoryLabel: "Government & Defense",
    capacity: "500 kWp",
    location: "Gazipur / Dhaka Division",
    annualYield: "725 MWh / Year",
    annualSavings: "৳ 78 Lakh / Year",
    image: "/images/golden-hour-industrial-solar-rooftop.jpg",
    panels: "Tier-1 High-Yield Monocrystalline Modules",
    inverters: "Industrial Grade Inverters with Rapid Shutdown",
    description: "High-security turnkey solar deployment engineered to rigorous military and national engineering safety protocols with reinforced cable routing.",
    highlights: ["Military Grade Electrical Enclosures", "Lightning & Surge Protection (Class I+II)", "High Reliability Grid Tie", "Full Lifecycle O&M Contract"],
  },
  {
    id: "savar-apparel-campus",
    title: "850 kWp Green Factory LEED Certified Solar Roof",
    client: "LEED Platinum Garments Factory",
    category: "industrial",
    categoryLabel: "Industrial EPC",
    capacity: "850 kWp",
    location: "EPZ Area, Savar",
    annualYield: "1,230 MWh / Year",
    annualSavings: "৳ 1.32 Crore / Year",
    image: "/images/sunset-solar-industrial-campus.jpg",
    panels: "Tier-1 575W Bifacial Solar Glass-Glass",
    inverters: "Distributed Multi-MPPT Smart Inverters",
    description: "Installed to achieve renewable energy compliance for international buyer audits (H&M, Inditex, Walmart), cutting factory carbon footprint by 880 tons CO2 annually.",
    highlights: ["LEED Renewable Energy Credits", "Certified Fire-Safe Architecture", "BREB High-Tension Net Metering", "Dust Repellent Coated Glass"],
  },
  {
    id: "gulshan-luxury-residence",
    title: "30 kWp Hybrid Smart Luxury Villa Solar System",
    client: "Private Residential Estate",
    category: "residential",
    categoryLabel: "Residential Solar",
    capacity: "30 kWp + 30 kWh Battery Storage",
    location: "Gulshan-2, Dhaka",
    annualYield: "43.5 MWh / Year",
    annualSavings: "৳ 5.2 Lakh / Year",
    image: "/images/project-residential.jpg",
    panels: "Tier-1 550W Aesthetic All-Black Panels",
    inverters: "Smart Hybrid Inverter with Lithium LiFePO4 ESS",
    description: "Seamless on-grid solar system with instant microsecond battery backup, powering central air conditioning, elevator, lighting, and EV charger without generator noise.",
    highlights: ["Zero-Delay UPS Backup", "Lithium Battery Energy Storage", "DPDC Net-Metering Connected", "Silent Eco Operation"],
  },
  {
    id: "bogra-agricultural-pump",
    title: "150 kWp Solar Irrigation & Agro-Processing Plant",
    client: "Agricultural Seed Processing & Deep Tubewell Facility",
    category: "agricultural",
    categoryLabel: "Agricultural Solar",
    capacity: "150 kWp",
    location: "Sherpur, Bogura",
    annualYield: "220 MWh / Year",
    annualSavings: "৳ 24 Lakh / Year",
    image: "/images/solar-agricultural.jpg",
    panels: "Tier-1 Monocrystalline Solar Array",
    inverters: "Solar Pump VFD & Dual On-Grid Synchronizer",
    description: "Dual-mode solar installation powering high-capacity deep irrigation pumps during the day and feeding surplus energy back to the rural grid (BREB).",
    highlights: ["VFD Soft-Start Pump Controller", "Replaces 12,000 Liters of Diesel/Yr", "Automated Water Output Telemetry", "Heavy Duty Ground Mount"],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "industrial", label: "Industrial MWp" },
  { id: "commercial", label: "Commercial Buildings" },
  { id: "defense", label: "Government & Defense" },
  { id: "residential", label: "Residential Villas" },
  { id: "agricultural", label: "Agricultural & Agri-Pumps" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <span>ENGINEERED TO PERFECTION &bull; PROVEN ENERGY YIELDS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Our Flagship <span className="gradient-text-solar">Solar EPC Projects</span> & Case Studies
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Explore our turnkey solar rooftop installations across Bangladesh.
                From multi-megawatt industrial textile mills and port logistics to corporate headquarters and luxury residences.
              </p>

              {/* Top Quick Stats */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-sans">15+ MWp</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">Total Capacity Engineered</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-sans">100%</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">SREDA Approval Rate</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">3.2 Yrs</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">Avg. Capex Payback</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-sans">25 Yrs</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">Linear Power Warranty</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PORTFOLIO GRID & CATEGORY FILTER */}
        <section className="py-14 sm:py-18">
          <Container>
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-2xs",
                    activeCategory === cat.id
                      ? "bg-amber-500 text-slate-950 shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Glowing Top Shimmer Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                  {/* Top Image Box */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Capacity Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-amber-400 text-xs font-bold font-sans">
                      {project.capacity}
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3.5 right-3.5 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                      {project.categoryLabel}
                    </div>

                    {/* Location at bottom of image */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {project.client}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Specs Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Annual Yield:</span>
                        <span className="font-bold text-slate-900">{project.annualYield}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Estimated Savings:</span>
                        <span className="font-extrabold text-emerald-700">{project.annualSavings}</span>
                      </div>
                    </div>

                    {/* Engineering Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href="/calculator"
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Estimate ROI for Similar Facility</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CLIENTS REEL */}
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
                <span>JOIN OUR HIGH-YIELD SOLAR NETWORK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Want to Turn Your Rooftop into a High-Yield Power Plant?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our engineering office to receive a custom 3D solar layout,
                financial cash flow analysis, and turnkey EPC quotation.
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
                  Schedule Feasibility Audit
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
