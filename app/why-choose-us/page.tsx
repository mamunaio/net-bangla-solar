import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Sun,
  Award,
  TrendingUp,
  Cpu,
  Wind,
  CheckCircle2,
  Clock,
  Wrench,
  BarChart3,
  Calculator,
  ArrowRight,
  Building,
  Leaf,
  Headphones,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Why Choose Us | Net Bangla Solar - Engineering Excellence",
  description:
    "Discover why Bangladesh's leading industries, commercial enterprises, and institutions trust Net Bangla Solar for turnkey solar EPC, Tier-1 hardware, and 25-year performance.",
};

const brochurePillars = [
  {
    number: "01",
    tag: "TAILORED SOLAR DESIGN",
    title: "Tailored Solar Design",
    description:
      "Systems designed around site conditions, energy consumption, roof structure and project objectives.",
    icon: Sun,
  },
  {
    number: "02",
    tag: "QUALITY & DURABILITY",
    title: "Quality & Durability",
    description:
      "Equipment selection, structural design and installation practices focused on reliability and long-term performance.",
    icon: Award,
  },
  {
    number: "03",
    tag: "ENERGY COST OPTIMIZATION",
    title: "Energy Cost Optimization",
    description:
      "Generation modelling and financial analysis to assess potential savings and investment returns.",
    icon: Leaf,
  },
  {
    number: "04",
    tag: "LIFECYCLE SUPPORT",
    title: "Lifecycle Support",
    description:
      "Commissioning, performance monitoring, maintenance and after-sales support under SLA (Service Level Agreement).",
    icon: Headphones,
  },
];

const engineeringPillars = [
  {
    number: "1",
    icon: Sun,
    title: "100% Tier-1 Monocrystalline Bifacial Panels",
    desc: "Exclusively deploying BloombergNEF Tier-1 bifacial panels for high dual-surface generation, minimal degradation, and 25-year linear performance warranty.",
    badge: "TIER-1 HARDWARE",
  },
  {
    number: "2",
    icon: Cpu,
    title: "Global Standard Tier-1 Smart Inverters",
    desc: "State-of-the-art grid-tie inverters with multi-MPPT tracking, maximum 98.8% conversion efficiency, integrated DC arc-fault protection, and cloud monitoring telemetry.",
    badge: "GLOBAL STANDARD",
  },
  {
    number: "3",
    icon: Wind,
    title: "160+ km/h Cyclone Load Mounting Structures",
    desc: "Engineered with structural-grade hot-dip galvanized steel (80+ micron zinc coating) or anodized aluminum (AL6005-T5), rigorously simulated against Bangladesh’s seasonal cyclone gusts.",
    badge: "CYCLONE RESILIENT",
  },
  {
    number: "4",
    icon: ShieldCheck,
    title: "SREDA & Grid Net-Metering Compliance",
    desc: "Full liaison and regulatory execution for bi-directional net-metering approvals under BPDB, BREB, DPDC, DESCO, WZPDCL, and NESCO without client operational friction.",
    badge: "100% SREDA COMPLIANT",
  },
  {
    number: "5",
    icon: BarChart3,
    title: "PVsyst 3D Shading Simulation",
    desc: "We conduct granular 3D drone surveys, solar shadow mapping, and PVsyst meteorological energy modeling to guarantee predictable, bankable kilowatt-hour yields.",
    badge: "PRECISION AUDIT",
  },
  {
    number: "6",
    icon: Clock,
    title: "Minimum Operational Downtime Installation",
    desc: "Pre-fabricated mounting frameworks and modular electrical switchgear allow fast installation without interrupting your facility's daily production schedule.",
    badge: "MINIMUM DOWNTIME",
  },
  {
    number: "7",
    icon: Zap,
    title: "24/7 Cloud IoT Telemetry & String Diagnosis",
    desc: "Real-time mobile & web SCADA monitoring with automated anomaly alerts, string-level voltage checks, and predictive maintenance schedules.",
    badge: "LIVE IOT TELEMETRY",
  },
  {
    number: "8",
    icon: TrendingUp,
    title: "Rapid CAPEX Payback & 25-Year Free Power",
    desc: "High solar yield combined with rising national grid tariffs enables full investment recovery in 3 to 4 years, generating pure free clean power for the remaining 21+ years.",
    badge: "RAPID PAYBACK",
  },
  {
    number: "9",
    icon: Wrench,
    title: "Comprehensive O&M SLA Assurance",
    desc: "Dedicated engineering rapid-response teams with on-site inspection guarantees, thermal drone thermography, and automated panel cleaning protocol support.",
    badge: "LIFECYCLE O&M",
  },
];

const comparisonPoints = [
  {
    feature: "Solar panel quality sourcing",
    netBangla: "Strict BloombergNEF Tier-1 Monocrystalline Bifacial N-Type Modules with 25-Yr Performance Warranty",
    traditional: "Uncertified or gray-market Tier-2/3 panels with high degradation rates",
  },
  {
    feature: "Inverter technology, efficiency, and electrical safety",
    netBangla: "Global Standard Tier-1 Smart Inverters with 98.8%+ efficiency, multi-MPPT & integrated AFCI safety",
    traditional: "Basic low-efficiency inverters lacking arc-fault protection and smart telemetry",
  },
  {
    feature: "Mounting structure design, load assessment, and wind resistance",
    netBangla: "Engineered Hot-Dip Galvanized (80µm) / AL6005-T5 Aluminum rated for 160+ km/h cyclone loads",
    traditional: "Mild steel painted pipes susceptible to severe rust and wind failure",
  },
  {
    feature: "SREDA compliance, net-metering, and regulatory approvals",
    netBangla: "Full turnkey technical liaison with BPDB, BREB, DPDC, DESCO, WZPDCL, NESCO & SREDA",
    traditional: "Client left to handle complicated utility approvals and regulatory hurdles alone",
  },
  {
    feature: "Engineering design, energy modelling, and project feasibility",
    netBangla: "Granular 3D drone survey, solar shadow modeling, and bankable PVsyst simulation reports",
    traditional: "Rough visual guesswork without considering shadow angles, tilt, or meteorological data",
  },
  {
    feature: "CAPEX, OPEX, PPA, and bankable financing solutions",
    netBangla: "Bankable financial modeling for IDCOL, PKSF, BIFFL, Green Refinance, CAPEX, OPEX & PPA",
    traditional: "Rigid cash-only models with no institutional green loan or RESCO options",
  },
  {
    feature: "Solar generation optimization and lifecycle cost analysis",
    netBangla: "Optimized azimuth, tilt angle, string balancing, and 25-year LCOE financial analysis",
    traditional: "Generic placement without optimization for maximum generation or temperature losses",
  },
  {
    feature: "Electrical protection, earthing, and power quality management",
    netBangla: "Class I+II surge protection, low-impedance copper earthing, and harmonic suppression",
    traditional: "Sub-standard grounding and inadequate lightning protection risking facility equipment",
  },
  {
    feature: "Battery energy storage and system integration",
    netBangla: "Safe Lithium LiFePO4 (BESS) integration with seamless microsecond UPS backup",
    traditional: "Short-lived lead-acid batteries with high maintenance and hazardous fumes",
  },
  {
    feature: "Smart monitoring, performance analytics, and fault detection",
    netBangla: "24/7 Cloud IoT SCADA monitoring, string diagnostics, and automated email/SMS fault alerts",
    traditional: "Basic local meters with no cloud access; equipment failures go unnoticed",
  },
  {
    feature: "Automated panel cleaning and water management",
    netBangla: "Integrated rooftop piping, high-pressure wash systems, and optional robotic cleaning options",
    traditional: "No cleaning infrastructure provided; manual dry wiping causes surface abrasion",
  },
  {
    feature: "Long-term warranties, maintenance, and service-level agreements",
    netBangla: "Comprehensive O&M SLA assurance, 25-year panel warranty, and dedicated rapid-response teams",
    traditional: "No after-sales support or SLA once initial payment is received",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* HERO SECTION WITH BROCHURE COPY */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-mono font-bold tracking-wide uppercase">
                <span>WHY CHOOSE US</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Empowering Sustainable Development with{" "}
                <span className="gradient-text-solar">Unmatched Solar Value</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Net Bangla Solar Solutions, a division of Net Bangla Limited, provides solar engineering, procurement, construction and related services for residential, commercial, industrial and agricultural applications. Our approach combines site-specific design, appropriate equipment selection, regulatory coordination and operational support to help clients improve energy efficiency and manage electricity costs.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Solar ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3 px-6 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white text-slate-800 hover:text-amber-800 text-sm font-bold shadow-2xs transition-all hover:bg-amber-50/40"
                >
                  Request Feasibility Consultation
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 4 CORE ADVANTAGES */}
        <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Four Core Advantages
              </h2>
              <p className="text-sm text-slate-600">
                Foundational engineering principles guiding every solar EPC project across Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {brochurePillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    className="group relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.20)] overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {item.number}
                      </span>
                    </div>

                    <div className="space-y-2.5 flex-1">
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-amber-700 block">
                        {item.tag}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-amber-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Standard EPC Guarantee</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* PILLARS OF SERVICE SUPERIORITY */}
        <section className="py-16 sm:py-20 bg-slate-50/50">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                ENGINEERING PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                <span className="text-rose-600">Pillars of Service Superiority</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Every detail of our photovoltaic systems is engineered to withstand Bangladesh’s demanding climate and deliver peak kilowatt-hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {engineeringPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Glowing Top Shimmer Line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-800">
                      <span>Standard on all installations</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-auto" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                COMPREHENSIVE COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Net Bangla Solar Division vs. Standard Contractors
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Understand the engineering differences that protect your capital and ensure 25+ years of uninterrupted energy production.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    <th className="p-4 sm:p-5 w-1/3">Engineering &amp; Service Parameter</th>
                    <th className="p-4 sm:p-5 w-1/3 bg-amber-500 text-slate-950 font-bold">
                      Net Bangla Solar Division Standard
                    </th>
                    <th className="p-4 sm:p-5 w-1/3 text-slate-300">
                      Standard Contractors
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {comparisonPoints.map((point, index) => (
                    <tr key={index} className="hover:bg-amber-50/20 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{point.feature}</span>
                      </td>
                      <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-slate-900 border-x border-slate-200/60">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point.netBangla}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500">
                        <div className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold shrink-0">&times;</span>
                          <span>{point.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* PARTNERS & TESTIMONIALS */}
        <PartnersSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
