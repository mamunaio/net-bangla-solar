"use client";

import React, { useState, useMemo } from "react";
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
  ChevronLeft,
  ChevronRight,
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
  category: "industrial" | "commercial" | "residential" | "agricultural" | "defense" | "floating";
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
  features?: string;
}

const portfolioProjects: ProjectItem[] = [
  {
    id: "intal-technology-ashulia",
    title: "127.4 kWp Rooftop On-Grid Solar PV Power System",
    client: "Intal Technology",
    category: "commercial",
    categoryLabel: "Commercial EPC",
    capacity: "127.4 kWp DC / 100 kW AC",
    location: "Nayarhat, Ashulia, Savar, Dhaka",
    annualYield: "185 MWh/year",
    annualSavings: "৳19.5 lakh/year",
    image: "/images/solar-commercial.webp",
    panels: "Tier-1 High-Efficiency On-Grid PV Modules",
    inverters: "100 kW Smart Grid-Tie Inverter with Web Telemetry",
    description: "Turnkey EPC supply, installation, testing and commissioning of 127.4 kWp DC / 100 kW AC rooftop on-grid solar photovoltaic system with grid-tie inverter, hot-dip galvanized mounting structure, lightning arrestor, surge protection junction boxes, and full accessories.",
    features: "Hot-dip galvanized mounting structure, grid-tie inverter, lightning arrestor, surge protection, and net metering.",
    highlights: [
      "Hot-dip galvanized mounting structure",
      "Grid-tie inverter & net metering",
      "Lightning arrestor & surge protection",
      "Turnkey Testing, Commissioning & Handover",
    ],
  },
  {
    id: "gazipur-textile-mwp",
    title: "1.2 MWp Industrial Rooftop Solar Power Plant",
    client: "Export-oriented textile mill",
    category: "industrial",
    categoryLabel: "Industrial EPC",
    capacity: "1,200 kWp (1.2 MWp)",
    location: "Kashimpur, Gazipur",
    annualYield: "1,740 MWh/year",
    annualSavings: "৳1.85 crore/year",
    image: "/images/about-solar-facility.webp",
    panels: "Tier-1 580W N-Type Bifacial Monocrystalline",
    inverters: "100 kW European On-Grid Smart Inverters",
    description: "Turnkey rooftop installation on tin shed structure with zero-penetration standing seam clamps, integrated with 33kV factory substation and net-metering export.",
    features: "Standing seam clamps, 33kV factory substation, and net-metering export.",
    highlights: ["Standing seam clamps", "33kV factory substation", "Net-metering export", "24/7 SCADA Live Telemetry"],
  },
  {
    id: "chattogram-port-facility",
    title: "750 kWp Commercial Logistics & Cold Chain Solar System",
    client: "Maritime Logistics & Cold Storage Facility",
    category: "commercial",
    categoryLabel: "Commercial Solar",
    capacity: "750 kWp",
    location: "Patenga, Chattogram",
    annualYield: "1,085 MWh/year",
    annualSavings: "৳1.15 crore/year",
    image: "/images/solar-powered-campus-at-sunset.webp",
    panels: "Tier-1 550W High-Efficiency Monocrystalline",
    inverters: "European On-Grid Inverters with IP66 Marine Coating",
    description: "Designed to withstand coastal saline air and high wind loads up to 180 km/h, significantly slashing electricity bills for heavy refrigeration compressors.",
    features: "Coastal corrosion protection, wind-resistant mounting, and BPDB net metering.",
    highlights: ["Coastal corrosion protection", "Wind-resistant mounting", "BPDB net metering", "Anti-Corrosion C5 Marine Grade Mounting"],
  },
  {
    id: "dhaka-corporate-hq",
    title: "350 kWp Corporate Tower Net-Metered Rooftop",
    client: "Financial & Corporate Headquarters",
    category: "commercial",
    categoryLabel: "Commercial Solar",
    capacity: "350 kWp",
    location: "Tejgaon Commercial Area, Dhaka",
    annualYield: "510 MWh/year",
    annualSavings: "৳56 lakh/year",
    image: "/images/power-solaroof.webp",
    panels: "Tier-1 All-Black Monocrystalline Modules",
    inverters: "Smart Grid Inverters with Zero Export Control",
    description: "Architecturally integrated solar system engineered on concrete RCC roof with elevated steel walkway, powering central HVAC and server rooms.",
    features: "RCC roof, elevated steel walkway, central HVAC and server-room loads, and DESCO bi-directional meter.",
    highlights: ["RCC roof, elevated steel walkway", "Central HVAC & server-room loads", "DESCO bi-directional meter", "Custom Architectural Canopy"],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "industrial", label: "Industrial EPC" },
  { id: "commercial", label: "Commercial Solar" },
];

const PROJECTS_PER_PAGE = 4;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const validCurrentPage = Math.min(currentPage, Math.max(1, totalPages));

  const paginatedProjects = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [filteredProjects, validCurrentPage]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const gridElement = document.getElementById("projects-grid-section");
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                Explore turnkey solar rooftop installations across Bangladesh, from multi-megawatt industrial textile mills and port logistics to corporate headquarters and residences.
              </p>

              {/* Top Quick Stats */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-sans">05+ MWp</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">Total Capacity Engineered</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-sans">100%</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">SREDA Approval Rate</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">3.2 Years</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">Average CAPEX Payback</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-sans">25 Years</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">Linear Power Warranty</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* PORTFOLIO GRID & CATEGORY FILTER */}
        <section id="projects-grid-section" className="py-14 sm:py-18 scroll-mt-28">
          <Container>
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
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
 
            {/* Project Count Indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-6 px-1">
              <span>Showing {filteredProjects.length} Flagship Projects</span>
              {totalPages > 1 && <span>Page {validCurrentPage} of {totalPages}</span>}
            </div>

            {/* Projects Grid (2x2 Balanced Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {paginatedProjects.map((project) => (
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
                      loading="lazy"
                      decoding="async"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                      {project.features && (
                        <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-600 leading-relaxed">
                          <span className="font-semibold text-slate-700">Features: </span>
                          <span>{project.features}</span>
                        </div>
                      )}
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

                    {/* Delivery & Financing Models (Feasibility Studies • Turnkey EPC • CAPEX • OPEX • PPA) */}
                    <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[10px] font-mono font-semibold">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/90 text-slate-700">
                        Turnkey EPC
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800">
                        CAPEX / OPEX / PPA
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800">
                        Feasibility Studies
                      </span>
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm font-semibold text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-slate-900">
                    {(validCurrentPage - 1) * PROJECTS_PER_PAGE + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-bold text-slate-900">
                    {Math.min(validCurrentPage * PROJECTS_PER_PAGE, filteredProjects.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-slate-900">
                    {filteredProjects.length}
                  </span>{" "}
                  Projects
                </div>

                <div className="flex items-center gap-2">
                  {/* Prev Button */}
                  <button
                    type="button"
                    disabled={validCurrentPage === 1}
                    onClick={() => handlePageChange(validCurrentPage - 1)}
                    aria-label="Previous Page"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={cn(
                        "w-10 h-10 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs",
                        validCurrentPage === pageNum
                          ? "bg-amber-500 text-slate-950 font-extrabold shadow-sm scale-105"
                          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      {pageNum}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    type="button"
                    disabled={validCurrentPage === totalPages}
                    onClick={() => handlePageChange(validCurrentPage + 1)}
                    aria-label="Next Page"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
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
                Contact the Technical office for a custom 3D solar layout, financial cash-flow analysis, and turnkey EPC quotation.
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
