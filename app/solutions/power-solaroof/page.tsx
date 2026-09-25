import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PanelsTopLeft,
  ShieldCheck,
  Zap,
  Sun,
  Droplets,
  Wind,
  ThermometerSnowflake,
  Layers,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Power Solaroof™ BIPV | Net Bangla Solar - Integrated Solar Roofing",
  description:
    "Power Solaroof™ by Net Bangla Solar is a 100% leak-proof, cyclone-resistant Building-Integrated Photovoltaic (BIPV) roofing system for industrial factories across Bangladesh.",
};

const solaroofSpecs = [
  {
    icon: Droplets,
    title: "100% Leak-Proof Guarantee",
    desc: "Engineered with interlocking aluminum extrusion profiles and built-in secondary drainage channels that completely eliminate roof punctures.",
  },
  {
    icon: Wind,
    title: "180+ km/h Cyclone Wind Rating",
    desc: "Rigid high-tensile AL6005-T5 structural aluminum architecture simulated to endure Bangladesh's highest coastal storm gust pressures.",
  },
  {
    icon: ThermometerSnowflake,
    title: "4–6°C Thermal Factory Insulation",
    desc: "Dual-glass bifacial modules reflect infrared heat, drastically reducing internal ambient factory temperatures and air conditioning power loads.",
  },
  {
    icon: Layers,
    title: "Replaces Corrugated CGI Tin Sheets",
    desc: "Functions directly as the factory roof. Saves 100% of the capital expenditure required for purchasing and replacing conventional tin sheets.",
  },
  {
    icon: Zap,
    title: "High-Yield Bifacial Generation",
    desc: "Generates clean electricity from both front and rear surfaces, capturing rooftop interior ambient light for an extra 10%–20% energy yield.",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Performance & Structural Warranty",
    desc: "Backed by 25-year linear power warranty and 15-year comprehensive structural weather-tightness guarantee.",
  },
];

const structuralLayers = [
  {
    step: "01",
    title: "Tier-1 Frameless Bifacial Glass Modules",
    desc: "High-strength tempered dual-glass solar panels resistant to heavy hail, fire, and industrial chemical fumes.",
  },
  {
    step: "02",
    title: "Custom Anodized Aluminum Seam Rail",
    desc: "Continuous extruded aluminum alloy profiles (AL6005-T5) that clamp modules seamlessly without drilling holes into the roof.",
  },
  {
    step: "03",
    title: "EPDM Continuous Weather Seals",
    desc: "UV-stabilized aerospace-grade EPDM rubber gaskets that maintain absolute watertightness through extreme temperature swings.",
  },
  {
    step: "04",
    title: "Integrated Internal Gutter Drainage",
    desc: "Patented secondary water channels that instantly drain monsoon stormwater into factory rainwater harvesting lines.",
  },
  {
    step: "05",
    title: "Direct Purlin High-Tensile Clamping",
    desc: "Fastened directly to the existing factory steel purlins, creating a lightweight yet indestructible monolithic roof diaphragm.",
  },
];

export default function PowerSolaroofPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* 1. HERO SECTION */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono uppercase">
                  <PanelsTopLeft className="w-4 h-4 text-amber-600" />
                  <span>BIPV GRADE &bull; PATENT-PENDING SOLAR ROOFING</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Power Solaroof™: The 100% Leak-Proof{" "}
                  <span className="gradient-text-solar">Integrated Solar Roof</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Replace traditional CGI corrugated tin sheets entirely with our revolutionary Building-Integrated Photovoltaic (BIPV) system.
                  Engineered specifically for export factories, warehouses, and industrial sheds across Bangladesh.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-left">
                    <div className="text-xl font-extrabold text-amber-700 font-sans">0 Holes</div>
                    <div className="text-[11px] text-slate-600 font-medium">Zero Punctures in Roof</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left">
                    <div className="text-xl font-extrabold text-emerald-700 font-sans">4–6°C Cooler</div>
                    <div className="text-[11px] text-slate-600 font-medium">Indoor Factory Temp</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200 text-left">
                    <div className="text-xl font-extrabold text-sky-700 font-sans">25 Years</div>
                    <div className="text-[11px] text-slate-600 font-medium">Watertight Warranty</div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-4">
                  <Link
                    href="/calculator"
                    className="btn-primary-solar py-3 px-6 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-md"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Calculate Power Solaroof ROI</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-6 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white text-slate-800 hover:text-amber-800 text-sm font-bold shadow-2xs transition-all hover:bg-amber-50/40"
                  >
                    Request Technical Spec Sheet
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
                  <Image
                    src="/images/power-solaroof.jpg"
                    alt="Power Solaroof BIPV Integrated Industrial Solar Roof"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Turnkey BIPV Engineering
                    </span>
                    <div className="text-sm font-bold mt-0.5">
                      Monolithic Leak-Proof Structure for Industrial Facilities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. CORE ADVANTAGES */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                ENGINEERING SPECIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Power Solaroof™ Outperforms Conventional Tin Shed Solar
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Traditional rooftop solar requires mounting heavy racks on old corrugated tin, risking leaks and structural fatigue. Power Solaroof™ eliminates the tin sheet entirely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {solaroofSpecs.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                        {spec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 3. ANATOMY & LAYER BREAKDOWN */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 text-left">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                PATENTED ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Anatomy of a Watertight BIPV Solar Roof
              </h2>
              <p className="text-sm text-slate-600">
                Precision engineering that guarantees zero water ingress over decades of torrential Bangladeshi monsoon rains.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {structuralLayers.map((layer, lIdx) => (
                <div
                  key={lIdx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-5 hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-mono font-extrabold flex items-center justify-center shrink-0 text-lg shadow-sm">
                    {layer.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {layer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. PARTNERS & CLIENTS */}
        <PartnersSection />
        <ClientsSection />

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
                <span>UPGRADE YOUR FACTORY ROOF</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Building a New Shed or Replacing Rusted Old Tin?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Do not spend millions on disposable tin sheets. Install Power Solaroof™ to get an indestructible leak-proof roof that generates millions of Taka in free electricity every year.
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
                  Book On-Site Engineering Audit
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
