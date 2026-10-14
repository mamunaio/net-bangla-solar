"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Download,
  ExternalLink,
  FileText,
  ShieldCheck,
  Zap,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Calculator,
  FileCheck,
  Building2,
  Calendar,
  HardDrive,
  Landmark,
  Scale,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { HybridSolarDiagram } from "@/components/sections/HybridSolarDiagram";
import { cn } from "@/lib/utils";

interface ResourceDoc {
  id: string;
  category: "policy" | "guideline" | "strategy" | "portal";
  categoryLabel: string;
  titleBn: string;
  titleEn: string;
  description: string;
  authority: string;
  date: string;
  fileSize?: string;
  pdfUrl?: string;
  externalUrl: string;
  isPortal?: boolean;
  featured?: boolean;
  tags: string[];
}

const resources: ResourceDoc[] = [
  {
    id: "national-rooftop-portal",
    category: "portal",
    categoryLabel: "National Solar Portal",
    titleBn: "জাতীয় রুফটপ সোলার কর্মসূচি (অফিসিয়াল পোর্টাল)",
    titleEn: "National Rooftop Solar Program — Official Government Hub",
    description:
      "Comprehensive national hub from the Ministry of Power, Energy & Mineral Resources containing all gazettes, directives, circulars, and solar PV incentives across Bangladesh.",
    authority: "Power Division, Government of Bangladesh",
    date: "Active 2026",
    externalUrl: "https://powerdivision.gov.bd/pages/static-pages/694032be35ce18e1c0561a07",
    isPortal: true,
    featured: true,
    tags: ["GOV PORTAL", "ROOFTOP SOLAR", "POWER DIVISION"],
  },
  {
    id: "special-incentives-gazette",
    category: "policy",
    categoryLabel: "Government Gazette",
    titleBn: "রুফটপ সৌরবিদ্যুৎ স্থাপনে বিশেষ প্রণোদনা সংক্রান্ত প্রজ্ঞাপন",
    titleEn: "Official Gazette on Special Incentives for Rooftop Solar Systems",
    description:
      "Statutory government notification detailing official regulatory facilitation, duty exemptions, and financial incentives for industrial, commercial, and residential rooftop solar adoption.",
    authority: "Ministry of Power, Energy & Mineral Resources",
    date: "Official Gazette",
    fileSize: "93 KB",
    pdfUrl: "/documents/rooftop-solar-incentives-gazette.pdf",
    externalUrl: "https://powerdivision.gov.bd/pages/files/6aaa609b5e7e1c3a8aba06b3",
    featured: true,
    tags: ["OFFICIAL GAZETTE", "TAX & DUTY INCENTIVES", "SREDA COMPLIANT"],
  },
  {
    id: "renewable-energy-strategy",
    category: "strategy",
    categoryLabel: "National Strategic Roadmap",
    titleBn: "জাতীয় নবায়নযোগ্য জ্বালানি উন্নয়ন কৌশলপত্র (২০২৬-২০৩০)",
    titleEn: "National Renewable Energy Strategic Roadmap (2026–2030)",
    description:
      "The comprehensive 5-year strategic blueprint establishing national clean energy generation targets, grid modernization norms, and private EPC project financing frameworks.",
    authority: "Power Division, Government of Bangladesh",
    date: "2026–2030 Roadmap",
    fileSize: "1.37 MB",
    pdfUrl: "/documents/renewable-energy-strategy-2026-2030.pdf",
    externalUrl: "https://powerdivision.gov.bd/pages/files/6a6af7ab33abb83ff10be25f",
    featured: true,
    tags: ["2026-2030 ROADMAP", "NATIONAL STRATEGY", "GRID MODERNIZATION"],
  },
  {
    id: "net-metering-guidelines-2025",
    category: "guideline",
    categoryLabel: "SREDA Technical Directive",
    titleBn: "নেট মিটারিং নির্দেশিকা - ২০২৫",
    titleEn: "Bangladesh Net Metering Guidelines 2025 (Official Directive)",
    description:
      "Detailed technical regulations governing rooftop solar interconnection, maximum 70% transformer capacity limits, bi-directional smart meter rollback, and billing cycle credits.",
    authority: "SREDA & Ministry of Power",
    date: "Current Directive",
    fileSize: "2.98 MB",
    pdfUrl: "/documents/net-metering-guidelines-2025.pdf",
    externalUrl: "https://powerdivision.gov.bd/pages/static-pages/694032be35ce18e1c0561a07",
    featured: true,
    tags: ["NET METERING 2025", "SREDA APPROVED", "BI-DIRECTIONAL METERING"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Resources" },
  { id: "policy", label: "Policies & Gazettes" },
  { id: "guideline", label: "Net Metering Directives" },
  { id: "strategy", label: "Strategic Roadmaps" },
  { id: "architecture", label: "System Working Principle" },
];

const netMeteringHighlights = [
  {
    title: "Maximum Allowable Capacity",
    value: "Up to 70%",
    sub: "Of transformer / sanctioned load capacity",
    icon: Zap,
  },
  {
    title: "Interconnection Voltages",
    value: "LT 400V / HT 11kV–33kV",
    sub: "Synchronized to local distribution grid",
    icon: Building2,
  },
  {
    title: "Settlement Mechanism",
    value: "100% Unit Credit",
    sub: "Bi-directional net unit rollover per billing cycle",
    icon: Scale,
  },
  {
    title: "Turnkey Liaison & SREDA",
    value: "100% Handled",
    sub: "End-to-end SLD vetting, testing & utility sync",
    icon: ShieldCheck,
  },
];

export function KnowledgeClient() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.titleBn.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.authority.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[130px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>OFFICIAL REGULATORY &amp; ENGINEERING RESOURCE HUB</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Solar Knowledge Hub &amp;{" "}
                <span className="gradient-text-solar">Regulatory Center</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Official Bangladesh Power Division policy documents, SREDA Net Metering 2025
                guidelines, government gazettes, and interactive system architectures.
              </p>

              {/* SEARCH & FILTER CONTROLS */}
              <div className="pt-4 max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search guidelines, gazettes, policies (e.g., 'Net Metering', 'প্রজ্ঞাপন', '2026')..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* CATEGORY TABS */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  {categoryTabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border",
                          isActive
                            ? "bg-amber-500 text-slate-950 border-amber-500 shadow-sm font-bold scale-102"
                            : "bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                        )}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            2. OFFICIAL REGULATORY POLICIES & PDF DOWNLOADS
            ========================================================================= */}
        {activeTab !== "architecture" && (
          <section className="py-14 sm:py-18">
            <Container>
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="space-y-1 text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                      <Landmark className="w-4 h-4 text-amber-600" />
                      <span>GOVERNMENT REPOSITORY &bull; DIRECT PDF DOWNLOADS</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Official Regulatory Documents &amp; Guidelines
                    </h2>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-mono">
                    Showing {filteredResources.length} Verified Document{filteredResources.length !== 1 ? "s" : ""}
                  </div>
                </div>

                {filteredResources.length === 0 ? (
                  <div className="py-16 text-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 space-y-3">
                    <FileText className="w-10 h-10 text-slate-400 mx-auto" />
                    <p className="text-sm font-bold text-slate-700">No matching documents found.</p>
                    <p className="text-xs text-slate-500">Try searching with a different keyword or switch to &apos;All Resources&apos;.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {filteredResources.map((item) => (
                      <div
                        key={item.id}
                        className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(245,158,11,0.18)] hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-left"
                      >
                        {/* Top Ambient Highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="space-y-4">
                          {/* Tags & Authority */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-900 border border-amber-500/25">
                              {item.categoryLabel}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{item.date}</span>
                            </div>
                          </div>

                          {/* Titles */}
                          <div className="space-y-1.5">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                              {item.titleBn}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-slate-600 font-sans">
                              {item.titleEn}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Authority Badge */}
                          <div className="flex items-center gap-2 pt-2 text-xs text-slate-500 font-medium">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Issued by: <strong className="text-slate-800">{item.authority}</strong></span>
                          </div>

                          {/* Tag Pills */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                          {item.pdfUrl ? (
                            <a
                              href={item.pdfUrl}
                              download
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                            >
                              <Download className="w-4 h-4" />
                              <span>Download PDF</span>
                              {item.fileSize && (
                                <span className="text-[11px] font-mono opacity-80">({item.fileSize})</span>
                              )}
                            </a>
                          ) : (
                            <a
                              href={item.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Visit Official Portal</span>
                            </a>
                          )}

                          <a
                            href={item.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-amber-800 hover:underline transition-colors"
                          >
                            <span>Gov.bd Source</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================================
            3. SYSTEM ARCHITECTURE & WORKING PRINCIPLES (RELOCATED HYBRID DIAGRAM)
            ========================================================================= */}
        <section id="system-architecture" className="scroll-mt-28">
          <HybridSolarDiagram />
        </section>

        {/* =========================================================================
            4. SREDA NET METERING TECHNICAL BENCHMARK TABLE
            ========================================================================= */}
        <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] -z-0"
          />

          <Container className="relative z-10">
            <div className="max-w-5xl mx-auto space-y-10 text-left">
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-amber-400" />
                  <span>SREDA REGULATORY CHEAT SHEET</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Key Net Metering Guidelines at a Glance
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                  Summary of official regulatory standards enforced by the Sustainable and Renewable Energy
                  Development Authority (SREDA) for commercial, industrial, and institutional rooftop solar plants.
                </p>
              </div>

              {/* 4 HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {netMeteringHighlights.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.title}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs text-slate-400 uppercase font-mono font-semibold tracking-wider">
                        {stat.title}
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">
                        {stat.sub}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* COMPREHENSIVE BENCHMARK TABLE */}
              <div className="rounded-3xl border border-white/15 bg-slate-950/60 overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-white/10 text-slate-200 uppercase font-mono text-[11px] tracking-wider border-b border-white/15">
                      <tr>
                        <th className="py-4 px-6">Regulatory Parameter</th>
                        <th className="py-4 px-6">Official SREDA Standard</th>
                        <th className="py-4 px-6">Utility Distribution Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-300">
                      <tr>
                        <td className="py-4 px-6 font-semibold text-white">Maximum System Sizing</td>
                        <td className="py-4 px-6 text-amber-400 font-bold">Up to 70% of Sanctioned Load / Transformer Rating</td>
                        <td className="py-4 px-6">Applies to BPDB, DPDC, DESCO, BREB, NESCO</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-white">Allowed Interconnection Level</td>
                        <td className="py-4 px-6 text-amber-400 font-bold">LT 400V (Three-Phase) or HT 11kV / 33kV</td>
                        <td className="py-4 px-6">Based on client substation voltage class</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-white">Inverter Certification</td>
                        <td className="py-4 px-6 text-amber-400 font-bold">IEC 62116 / IEEE 1547 (Anti-Islanding Protection)</td>
                        <td className="py-4 px-6">Automatic disconnect during utility grid failure</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-white">Bi-Directional Settlement</td>
                        <td className="py-4 px-6 text-amber-400 font-bold">Net kWh unit adjustment per monthly billing cycle</td>
                        <td className="py-4 px-6">Rolled forward annually per distribution code</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-white">Net Bangla Turnkey Scope</td>
                        <td className="py-4 px-6 text-emerald-400 font-bold">100% Turnkey EPC &bull; SREDA &amp; Utility Approvals</td>
                        <td className="py-4 px-6">Complete SLD, structural vetting &amp; commissioning</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            5. BOTTOM CTA SECTION
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 text-center border-t border-slate-200">
          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>START YOUR FACILITY AUDIT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Need Guidance on SREDA Approvals or System Sizing?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with our senior solar engineers for a structural audit, 3D shading simulation,
                and turnkey SREDA-compliant Net Metering feasibility report.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Instant Solar ROI Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Request Engineering Consultation</span>
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

export default KnowledgeClient;
