import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sun,
  Zap,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Compass,
  FileCheck,
  Calendar,
  Globe2,
  PhoneCall,
  Calculator,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ImpactStats } from "@/components/sections/ImpactStats";

export const metadata: Metadata = {
  title: "About Us | Net Bangla Solar - Turnkey Solar EPC in Bangladesh",
  description:
    "Learn about Net Bangla Solar, the premier renewable energy division of Net Bangla Limited. Turnkey solar EPC engineering, SREDA compliance, and high-efficiency photovoltaic solutions across Bangladesh.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* 1. HERO SECTION */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          {/* Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              {/* Breadcrumb & Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>ESTABLISHED MAY 28, 2014 &bull; A DECADE OF TRUST</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Pioneering Bankable{" "}
                <span className="gradient-text-solar">Solar Engineering</span>{" "}
                Across Bangladesh
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Net Bangla Solar is the dedicated clean energy and EPC division of Net Bangla Limited.
                We engineer, procure, construct, and maintain heavy-duty, high-yield photovoltaic systems
                customized for Bangladesh’s tropical climate and industrial grid specifications.
              </p>

              {/* Quick Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Rooftop ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3 px-6 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white text-slate-800 hover:text-amber-800 text-sm font-bold shadow-2xs transition-all hover:bg-amber-50/40"
                >
                  Schedule Site Inspection
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. CORPORATE HERITAGE & STORY SECTION */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image Collage / Visual Card */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3]">
                  <Image
                    src="/images/about-solar-facility.jpg"
                    alt="Net Bangla Solar Engineering Facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Turnkey Engineering Standard
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mt-1">
                      Certified SREDA & Net-Metering Compliant EPC
                    </h3>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xl text-left max-w-[220px]">
                  <div className="text-3xl font-extrabold text-amber-600">10+ Years</div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Corporate Engineering & Technology Legacy
                  </div>
                </div>
              </div>

              {/* Right Column: Company Story */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>OUR JOURNEY</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Built on a Solid Foundation of Corporate Engineering
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Founded on <strong>May 28, 2014</strong>, Net Bangla Limited began its journey delivering mission-critical
                    technology infrastructure, call centers, and engineering systems for the Government of Bangladesh,
                    defense organizations, telecommunication giants, and top-tier conglomerates.
                  </p>
                  <p>
                    Recognizing Bangladesh’s critical transition toward clean energy self-sufficiency and rising industrial power tariffs,
                    <strong> Net Bangla Solar</strong> was established to provide bankable, industrial-grade rooftop and ground-mounted
                    solar photovoltaic solutions.
                  </p>
                  <p>
                    We handle every stage internally: from 3D LiDAR shading audits and load analysis, through SREDA
                    liaison and grid synchronization, to 24/7 SCADA cloud monitoring.
                  </p>
                </div>

                {/* Highlight Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Tier-1 Bifacial Solar Panels</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>European & Tier-1 Smart Inverters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>160 km/h Cyclone Structure</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Guaranteed 25-Year Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. MISSION, VISION & CORE VALUES */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                STRATEGIC FOCUS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Mission, Vision & Values
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Guiding principles that ensure every kilowatt we install delivers maximum financial return and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Mission Card */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To accelerate Bangladesh’s clean energy transition by delivering high-yield, bankable solar power plants that significantly lower operating electricity costs for industries, businesses, and homes.
                </p>
              </div>

              {/* Vision Card */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be Bangladesh’s most trusted, technologically advanced turnkey solar EPC partner—renowned for uncompromising engineering standards, safety compliance, and superior long-term energy yields.
                </p>
              </div>

              {/* Values Card */}
              <div className="group p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  Core Values
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Integrity, transparency, bankable Tier-1 equipment, customer-centric engineering, and zero compromise on safety or electrical code compliance.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. LEADERSHIP & EXECUTIVE PROFILE */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-amber-500/30">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/15 blur-[100px]"
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Leader Photo */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
                    <Image
                      src="/images/engr-mamunur-rahman.jpg"
                      alt="Engr. Mamunur Rahman - MD & Chairman of Net Bangla Limited"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Leader Bio */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                    <Users className="w-4 h-4" />
                    <span>EXECUTIVE LEADERSHIP</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    Engr. Mamunur Rahman
                  </h3>
                  <div className="text-amber-400 font-semibold text-base sm:text-lg">
                    Managing Director & Chairman, Net Bangla Limited
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Under Engr. Mamunur Rahman&apos;s visionary leadership, Net Bangla Limited has grown
                    from a specialized technology provider into a trusted multi-disciplinary engineering
                    powerhouse serving prestigious national institutions including the Bangladesh Army,
                    Navy Dockyard, MES, BMTF, and leading industrial conglomerates.
                  </p>

                  <blockquote className="p-4 rounded-2xl bg-white/5 border-l-4 border-amber-400 text-sm text-slate-200 italic leading-relaxed">
                    &quot;Our commitment with Net Bangla Solar is clear: we build solar energy assets that
                    stand the test of time, withstand extreme Bangladeshi weather conditions, and deliver
                    uncompromising financial returns for our clients over 25+ years.&quot;
                  </blockquote>

                  {/* Institutional Credentials Badges */}
                  <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono">
                    <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-slate-200">
                      BASIS Member ID: A-405
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-slate-200">
                      BACCO Member: 2018.0082
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-slate-200">
                      BTRC Registered CC/BPO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. IMPACT & METRICS */}
        <ImpactStats />

        {/* 6. TECHNOLOGY PARTNERS */}
        <PartnersSection />

        {/* 7. VALUED CLIENTS */}
        <ClientsSection />

        {/* 8. BOTTOM CTA SECTION */}
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
                Ready to Cut Your Factory Electricity Bills by Up to 70%?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our certified solar engineers today for an on-site feasibility study,
                3D shading analysis, and comprehensive financial payback report.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-lg"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Use Rooftop ROI Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all"
                >
                  Contact Our Engineering Team
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
