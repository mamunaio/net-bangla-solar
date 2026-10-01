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
    tag: "CUSTOMIZED SOLUTIONS",
    title: "Tailored Solar Systems",
    description:
      "Whether it’s a residential home or a large commercial project, we design and install customized solar systems tailored to maximize efficiency and minimize costs. Our solutions empower you to harness renewable energy effectively while enjoying sustainable, long-term savings.",
    icon: Sun,
  },
  {
    number: "02",
    tag: "QUALITY & DURABILITY",
    title: "We Build Solar to Last",
    description:
      "We build solar systems to last. By combining cutting-edge technology with rigorous quality standards, we ensure your system delivers peak performance year after year, providing dependable energy for decades to come.",
    icon: Award,
  },
  {
    number: "03",
    tag: "MAXIMUM ROI",
    title: "Significant Cost Reductions",
    description:
      "Our expert designs help you achieve significant reductions in monthly electricity costs. Solar power is a smart investment for homes and businesses alike, and we are committed to helping you realize the maximum financial benefits from your solar system.",
    icon: Leaf,
  },
  {
    number: "04",
    tag: "LIFECYCLE PARTNERSHIP",
    title: "Ongoing Support & Care",
    description:
      "Our commitment doesn’t end with installation. We provide ongoing customer support and maintenance to ensure your solar system consistently operates at peak performance. With Net Bangla Limited, you’re more than a customer—you’re a valued partner in building a brighter, more sustainable future.",
    icon: Headphones,
  },
];

const engineeringPillars = [
  {
    icon: Sun,
    title: "100% Tier-1 Monocrystalline Bifacial Panels",
    desc: "We exclusively deploy BloombergNEF Tier-1 rated bifacial solar modules featuring dual-glass encapsulation, superior low-light responsiveness, and 25-year linear degradation warranties.",
    badge: "TIER-1 HARDWARE",
  },
  {
    icon: Cpu,
    title: "European & Tier-1 Smart Inverters",
    desc: "State-of-the-art grid-tie inverters with multi-MPPT tracking, maximum 98.8% conversion efficiency, integrated DC arc-fault protection, and cloud monitoring telemetry.",
    badge: "SMART GRID TECH",
  },
  {
    icon: Wind,
    title: "160+ km/h Cyclone Load Mounting Structures",
    desc: "Engineered with structural-grade hot-dip galvanized steel (80+ micron zinc coating) or anodized aluminum (AL6005-T5), rigorously simulated against Bangladesh’s seasonal cyclone gusts.",
    badge: "EXTREME WEATHER PROOF",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed SREDA & Grid Net-Metering Compliance",
    desc: "Full liaison and regulatory execution for bi-directional net-metering approvals under BPDB, BREB, DPDC, DESCO, and NESCO without client operational friction.",
    badge: "100% SREDA COMPLIANT",
  },
  {
    icon: BarChart3,
    title: "Bankable PVsyst 3D Shading Simulation",
    desc: "We conduct granular 3D drone surveys, LiDAR shadow mapping, and PVsyst meteorological energy modeling to guarantee predictable, bankable kilowatt-hour yields.",
    badge: "PRECISION AUDIT",
  },
  {
    icon: Clock,
    title: "Zero Operational Downtime Installation",
    desc: "Pre-fabricated mounting frameworks and modular electrical switchgear allow fast installation without interrupting your factory's daily industrial production schedule.",
    badge: "ZERO FACTORY DOWNTIME",
  },
  {
    icon: Zap,
    title: "24/7 Cloud IoT Telemetry & String Diagnostics",
    desc: "Real-time mobile & web SCADA monitoring with automated anomaly alerts, string-level voltage checks, and predictive maintenance schedules.",
    badge: "LIVE IOT TELEMETRY",
  },
  {
    icon: TrendingUp,
    title: "Rapid 3-Year Capex Payback & 25-Yr Free Power",
    desc: "High solar yield combined with rising national grid tariffs enables full investment recovery in 3 to 3.5 years, generating pure free clean power for the remaining 21+ years.",
    badge: "HIGH ROI",
  },
  {
    icon: Wrench,
    title: "Comprehensive 10-Year O&M SLA Guarantee",
    desc: "Dedicated engineering rapid-response teams with on-site inspection guarantees, thermal drone thermography, and automated panel cleaning protocol support.",
    badge: "LIFECYCLE O&M",
  },
  {
    icon: Building,
    title: "Corporate Stability & Heritage (Est. May 2014)",
    desc: "Operating under Net Bangla Limited, we bring over a decade of proven corporate stability, national institutional trust (Army, Navy Dockyard, BMTF), and financial solidity.",
    badge: "ESTABLISHED 2014",
  },
];

const comparisonPoints = [
  {
    feature: "Solar Panel Quality & Sourcing",
    netBangla: "Strict BloombergNEF Tier-1 Bifacial N-Type / TOPCon Modules with 25-Yr Warranty",
    traditional: "Tier-2 or uncertified local gray market panels with rapid power loss",
  },
  {
    feature: "Inverter Technology",
    netBangla: "European / Tier-1 Smart Inverters with 98.8% efficiency & AFCI safety",
    traditional: "Low-cost modified inverters lacking arc protection and low efficiency",
  },
  {
    feature: "Mounting Structure & Wind Rating",
    netBangla: "Hot-Dip Galvanized (80µm) / Anodized AL6005-T5 rated for 160+ km/h wind gusts",
    traditional: "Mild steel (MS) painted pipes prone to rusting and structural collapse in 3-5 years",
  },
  {
    feature: "SREDA & Net-Metering Approvals",
    netBangla: "100% Turnkey regulatory liaison, inspection prep, and bi-directional meter setup",
    traditional: "Client is left alone to navigate complex government bureaucracy and approvals",
  },
  {
    feature: "Engineering Modeling & Feasibility",
    netBangla: "3D Drone LiDAR mapping + PVsyst bankable hourly solar simulation report",
    traditional: "Rough guesswork without calculating azimuth, tilt, or building shadows",
  },
  {
    feature: "Long-Term Warranty & Service SLA",
    netBangla: "10-Year Workmanship Warranty + 25-Year Performance + Rapid Response SLA",
    traditional: "No dedicated service team; difficult to reach after installation handover",
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-mono font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
                <span>// WHY CHOOSE US?</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Empowering Sustainable Development with{" "}
                <span className="gradient-text-solar">Unmatched Solar Value</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Our expertise sets us apart in the solar market, delivering unmatched
                value and results for every client. Our product portfolio comprises solar
                energy systems for private residences, commercial enterprises, and public
                sector projects. We are committed to promoting sustainable development by
                providing reliable, efficient, and environmentally responsible solar
                technologies that align with national and global energy goals.
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

        {/* 4 CORE BROCHURE PILLARS CARDS */}
        <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
          <Container>
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

        {/* 10 DETAILED TECHNICAL ENGINEERING PILLARS */}
        <section className="py-16 sm:py-20 bg-slate-50/50">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                DETAILED CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                10 Pillars of Engineering Superiority
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
                Net Bangla Solar vs. Standard Contractors
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
                      Net Bangla Solar Standard
                    </th>
                    <th className="p-4 sm:p-5 w-1/3 text-slate-300">
                      Conventional Market Contractor
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
