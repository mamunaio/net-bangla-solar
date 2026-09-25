import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Industrial Solar EPC (MWp Scale) | Net Bangla Solar",
  description:
    "Turnkey Megawatt-scale (100 kWp – 5 MWp) industrial rooftop solar EPC for export textile mills, manufacturing plants, and heavy industries in Bangladesh. 3.1 year payback.",
};

const industrialFeatures = [
  {
    title: "100 kWp to 5+ MWp Turnkey Scale",
    desc: "Engineered specifically to offset massive daytime industrial power loads, heavy motors, and high-tension (HT) grid consumption.",
  },
  {
    title: "Zero Factory Production Downtime",
    desc: "Structural and mechanical rooftop assembly takes place during standard factory shifts without interrupting machine lines.",
  },
  {
    title: "33kV & 11kV Substation Grid Tie-In",
    desc: "Complete medium/high-voltage electrical synchronization with vacuum circuit breakers (VCB), dry transformers, and harmonic filters.",
  },
  {
    title: "100% SREDA & Net-Metering Liaison",
    desc: "Full turnkey government documentation and testing with BPDB, BREB, DPDC, DESCO, and NESCO for bi-directional meters.",
  },
  {
    title: "BloombergNEF Tier-1 N-Type TOPCon Panels",
    desc: "Ultra-high efficiency modules with 25-year 84.8% performance warranties and enhanced low-light morning/evening generation.",
  },
  {
    title: "24/7 IoT SCADA & String-Level Telemetry",
    desc: "Cloud-connected monitoring platform with instant fault detection, temperature monitoring, and performance ratio (PR) benchmarking.",
  },
];

const industrialWorkflow = [
  {
    step: "01",
    title: "Drone LiDAR & 3D Shading Simulation",
    desc: "Precision topographic drone mapping and PVsyst meteorological simulation to accurately project 25-year kilowatt-hour energy yields.",
  },
  {
    step: "02",
    title: "Structural Roof Vetting & Electrical SLD Design",
    desc: "Finite element analysis of factory steel trusses/concrete slabs and single-line diagram (SLD) engineering complying with BNBC standards.",
  },
  {
    step: "03",
    title: "Utility Approvals & SREDA Net-Metering Liaison",
    desc: "We manage the complete administrative pipeline with local distribution utilities (BPDB/BREB/DESCO) for bi-directional meter sanctioning.",
  },
  {
    step: "04",
    title: "High-Speed Mechanical & Electrical EPC",
    desc: "Pre-assembled hot-dip galvanized mounting, Tier-1 panel placement, DC cabling in metallic conduits, and European smart inverters.",
  },
  {
    step: "05",
    title: "Grid Synchronization, Testing & Commissioning",
    desc: "Comprehensive dielectric insulation testing, thermal imaging inspections, bi-directional meter activation, and 24/7 cloud SCADA handover.",
  },
];

export default function IndustrialSolarEPCPage() {
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono uppercase">
                  <Factory className="w-4 h-4 text-amber-600" />
                  <span>100 KWP – 5 MWP TURNKEY INDUSTRIAL EPC</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Megawatt-Scale Industrial{" "}
                  <span className="gradient-text-solar">Solar Power Plants</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Protect your factory from soaring national grid tariffs. Net Bangla Solar engineers heavy-duty,
                  bankable solar power plants that cut operational electricity costs by up to 70% with average Capex payback in 3.1 years.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-left">
                    <div className="text-xl font-extrabold text-amber-700 font-sans">~3.1 Years</div>
                    <div className="text-[11px] text-slate-600 font-medium">Capex Payback Timeline</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left">
                    <div className="text-xl font-extrabold text-emerald-700 font-sans">100% SREDA</div>
                    <div className="text-[11px] text-slate-600 font-medium">Net-Metering Approval</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200 text-left">
                    <div className="text-xl font-extrabold text-sky-700 font-sans">Zero Downtime</div>
                    <div className="text-[11px] text-slate-600 font-medium">Factory Production Safe</div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-4">
                  <Link
                    href="/calculator"
                    className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Calculate Factory Solar Savings</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-6 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white text-slate-800 hover:text-amber-800 text-sm font-bold shadow-2xs transition-all hover:bg-amber-50/40"
                  >
                    Request On-Site Industrial Audit
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
                  <Image
                    src="/images/solar-industrial.jpg"
                    alt="Industrial Megawatt Rooftop Solar EPC Plant"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Industrial Scale
                    </span>
                    <div className="text-sm font-bold mt-0.5">
                      High-Tension Net Metered Substation Integration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. CORE FEATURES */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                INDUSTRIAL CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Engineered for Heavy Manufacturing & Export Plants
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Textile spinning mills, composite RMG, pharmaceuticals, and steel plants rely on our bankable electrical engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {industrialFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. STEP-BY-STEP EPC WORKFLOW */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 text-left">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                EXECUTION PIPELINE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our 5-Stage Turnkey EPC Methodology
              </h2>
              <p className="text-sm text-slate-600">
                From initial 3D LiDAR drone modeling to final utility bi-directional meter synchronization.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {industrialWorkflow.map((flow, fIdx) => (
                <div
                  key={fIdx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-5 hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-mono font-extrabold flex items-center justify-center shrink-0 text-lg shadow-sm">
                    {flow.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {flow.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. CLIENTS & PARTNERS */}
        <ClientsSection />
        <PartnersSection />

        {/* 5. CTA */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-950 -z-10"
          />

          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Zap className="w-4 h-4" />
                <span>MEGAVATT-SCALE INDUSTRIAL SAVINGS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Turn Your Factory Rooftop into a Multi-Crore Asset
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our senior industrial EPC engineers for a free single-line diagram (SLD) evaluation,
                3D drone shadow analysis, and bankable financial payback model.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-lg"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Use Industrial ROI Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all"
                >
                  Schedule Factory Feasibility Visit
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
