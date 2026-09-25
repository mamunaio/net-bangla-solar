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
  XCircle,
  Clock,
  Wrench,
  BarChart3,
  Calculator,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Check,
  Building,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ClientsSection } from "@/components/sections/ClientsSection";

export const metadata: Metadata = {
  title: "Why Choose Us | Net Bangla Solar - Engineering Excellence",
  description:
    "Discover why Bangladesh's leading industries, commercial enterprises, and institutions trust Net Bangla Solar for turnkey solar EPC, Tier-1 hardware, and 25-year performance.",
};

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
        {/* HERO */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <Award className="w-4 h-4 text-amber-600" />
                <span>ENGINEERING EXCELLENCE &bull; BANKABLE TURNKEY SOLAR</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Why Industry Leaders & Institutions Choose{" "}
                <span className="gradient-text-solar">Net Bangla Solar</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Solar energy is a 25-year financial asset. We combine bankable Tier-1 equipment,
                rigorous cyclone-tested structural engineering, and guaranteed net-metering approvals
                to maximize your long-term energy yield and financial returns.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Check Your Facility ROI</span>
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

        {/* 10 CORE ENGINEERING PILLARS */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                CORE ADVANTAGES
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
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Net Bangla Solar vs Traditional Installers
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Compare our turnkey engineering standards against conventional local solar contractors.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-slate-900 text-white p-5 sm:p-6 text-left font-bold text-sm sm:text-base">
                <div className="col-span-12 sm:col-span-4 text-slate-300">Engineering Parameter</div>
                <div className="col-span-12 sm:col-span-4 text-amber-400 mt-2 sm:mt-0 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Net Bangla Solar EPC</span>
                </div>
                <div className="col-span-12 sm:col-span-4 text-slate-400 mt-2 sm:mt-0">Traditional Local Installers</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-100 text-left">
                {comparisonPoints.map((point, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 p-5 sm:p-6 items-center gap-4 sm:gap-2 hover:bg-amber-50/20 transition-colors"
                  >
                    <div className="col-span-12 sm:col-span-4 font-bold text-slate-900 text-sm">
                      {point.feature}
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-800 text-xs sm:text-sm flex items-start gap-2 bg-emerald-50/60 p-3 sm:p-2.5 rounded-xl border border-emerald-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-emerald-950">{point.netBangla}</span>
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-500 text-xs sm:text-sm flex items-start gap-2 bg-slate-50 p-3 sm:p-2.5 rounded-xl border border-slate-200">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{point.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsSection />

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
                <span>ELEVATE YOUR ENERGY INDEPENDENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Experience the Net Bangla Solar Difference
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our engineering headquarters today to arrange an on-site structural and shadow analysis of your factory or commercial facility.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-lg"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate System Size & Savings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all"
                >
                  Book Free Engineering Audit
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
