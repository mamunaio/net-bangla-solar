import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sprout,
  ShieldCheck,
  Zap,
  Droplet,
  TrendingUp,
  Sun,
  Award,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Gauge,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Agricultural Solar Irrigation & Agro-Power | Net Bangla Solar",
  description:
    "High-yield solar irrigation pumps (10 HP – 100 HP), agro-processing solar, and cold storage solar solutions for farms and rural enterprises across Bangladesh.",
};

const agriculturalFeatures = [
  {
    icon: Droplet,
    title: "10 HP to 100 HP Deep & Shallow Tubewells",
    desc: "Direct solar PV drive capable of pumping thousands of liters of water per minute throughout peak agricultural crop seasons.",
  },
  {
    icon: Gauge,
    title: "VFD Soft-Starter Multi-Pump Control",
    desc: "Intelligent Variable Frequency Drive (VFD) technology that adjusts motor speed automatically with sunlight irradiance, preventing motor strain.",
  },
  {
    icon: Zap,
    title: "Dual-Mode Rural Net-Metering",
    desc: "When irrigation pumps are idle during non-farming months, the solar plant automatically exports electricity to the BREB rural grid for financial revenue.",
  },
  {
    icon: TrendingUp,
    title: "100% Elimination of Diesel Fuel Expenses",
    desc: "Replaces noisy, expensive diesel generator sets, insulating your farming operations against ongoing fuel price hikes.",
  },
  {
    icon: ShieldCheck,
    title: "Heavy-Duty Storm & Flood Resistant Ground Mounts",
    desc: "Hot-dip galvanized mounting structures with elevated foundation piers designed to stay high above flood water levels.",
  },
  {
    icon: Sun,
    title: "Automated Dry-Run & Water Level Telemetry",
    desc: "Smart sensors that automatically shut down pumps during low water table levels to protect pump impellers from burning out.",
  },
];

export default function AgriculturalSolarPage() {
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
                  <Sprout className="w-4 h-4 text-amber-600" />
                  <span>10 HP – 100 HP DIRECT DC PUMP & AGRO-STORAGE</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Solar Irrigation & Agro-Power for{" "}
                  <span className="gradient-text-solar">Rural Farming Enterprises</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Eliminate expensive diesel costs and erratic rural grid power. Net Bangla Solar provides high-volume
                  solar irrigation pump systems and cold storage solar plants across Bangladesh.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-left">
                    <div className="text-xl font-extrabold text-amber-700 font-sans">0 Diesel</div>
                    <div className="text-[11px] text-slate-600 font-medium">100% Free Solar Drive</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left">
                    <div className="text-xl font-extrabold text-emerald-700 font-sans">BREB Grid</div>
                    <div className="text-[11px] text-slate-600 font-medium">Dual Net-Metering</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200 text-left">
                    <div className="text-xl font-extrabold text-sky-700 font-sans">VFD Control</div>
                    <div className="text-[11px] text-slate-600 font-medium">Soft-Start Protection</div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-4">
                  <Link
                    href="/calculator"
                    className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Calculate Agri Solar ROI</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-6 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white text-slate-800 hover:text-amber-800 text-sm font-bold shadow-2xs transition-all hover:bg-amber-50/40"
                  >
                    Request Pump Sizing Proposal
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
                  <Image
                    src="/images/solar-agricultural.jpg"
                    alt="Agricultural Solar Irrigation Pump Installation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Agro-Industrial Energy
                    </span>
                    <div className="text-sm font-bold mt-0.5">
                      High-Capacity Deep Irrigation with BREB Grid Tie
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
                AGRO-ENGINEERING ADVANTAGES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                High-Volume Water Yields with Zero Operating Fuel Costs
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Engineered for maximum reliability across Bangladesh’s diverse agricultural agro-climatic zones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {agriculturalFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 3. CLIENTS & PARTNERS */}
        <ClientsSection />
        <PartnersSection />

        {/* 4. CTA */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-950 -z-10"
          />

          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Zap className="w-4 h-4" />
                <span>POWERS YOUR AGRICULTURAL SUCCESS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Switch Your Agricultural Pumps to Solar Power
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our agro-solar engineers for a comprehensive site assessment,
                pump head calculations, and BREB net metering feasibility.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-lg"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Use Solar ROI Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all"
                >
                  Schedule Agricultural Site Survey
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
