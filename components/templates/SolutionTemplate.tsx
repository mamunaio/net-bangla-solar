import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Award,
  Layers,
  Check,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { cn } from "@/lib/utils";

export interface AdvantageItem {
  title: string;
  desc: string;
  badge?: string;
  icon?: React.ElementType;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface WorkflowItem {
  step: string;
  title: string;
  desc: string;
}

export interface SolutionTemplateProps {
  badge?: string;
  title: string;
  subtitle?: string;
  heroImageUrl: string;
  description: string;
  detailedPoints?: string[];
  specs?: SpecItem[];
  advantagesTitle?: string;
  advantagesSubtitle?: string;
  advantagesList: AdvantageItem[];
  workflowTitle?: string;
  workflowSteps?: WorkflowItem[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export function SolutionTemplate({
  badge = "TURNKEY SOLAR SOLUTION",
  title,
  subtitle,
  heroImageUrl,
  description,
  detailedPoints = [],
  specs = [],
  advantagesTitle = "Competitive Engineering Advantages",
  advantagesSubtitle = "How Net Bangla Solar Energy Solutions out-engineers traditional contractors to deliver superior yield, reliability, and bankability.",
  advantagesList,
  workflowTitle = "Turnkey Execution & Commissioning Process",
  workflowSteps,
  ctaTitle = "Ready to Engineer Your Clean Energy Solution?",
  ctaDescription = "Connect with our experienced solar engineers to receive an on-site structural audit, 3D shading simulation, single-line diagram, and turnkey financial proposal.",
}: SolutionTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* 1. CLEAN HERO IMAGE SECTION (STRICT RULE: HIGH QUALITY IMAGE ONLY, ZERO OVERLAID TEXT) */}
        <section className="relative pt-4 pb-8 sm:pt-6 sm:pb-10">
          <Container>
            <div className="relative aspect-[21/9] sm:aspect-[24/9] max-w-6xl mx-auto rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
              <Image
                src={heroImageUrl}
                alt={title}
                fill
                priority
                loading="eager"
                decoding="async"
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Container>
        </section>

        {/* 2. IMMEDIATE CONTENT (Title, Description, Specs & Action CTAs directly below Hero) */}
        <section className="py-8 sm:py-12 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto space-y-8 text-left">
              {/* Category Badge & Main Title */}
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase">
                  <span>{badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {title}
                </h1>

                {subtitle && (
                  <p className="text-base sm:text-lg text-amber-800 font-semibold">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Detailed Description */}
              <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-4">
                <p>{description}</p>
              </div>

              {/* Technical Feature Checkmarks */}
              {detailedPoints.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {detailedPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Technical Specs Grid (If Provided) */}
              {specs.length > 0 && (
                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-lg space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>Technical Architecture &amp; Standard Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                    {specs.map((spec, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-[11px] font-mono text-slate-400 uppercase">{spec.label}</div>
                        <div className="text-sm font-bold text-white mt-1">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* High-Visibility Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2.5 text-sm font-bold text-slate-950 shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Consult Solar Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/calculator"
                  className="py-3.5 px-8 rounded-2xl border border-slate-300 hover:border-amber-400 bg-white hover:bg-amber-50/50 text-slate-800 hover:text-amber-900 text-sm font-bold transition-all shadow-2xs flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-amber-600" />
                  <span>Instant ROI &amp; Cost Calculator</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. COMPETITIVE ADVANTAGES / WHY CHOOSE US SECTION */}
        <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/80">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold tracking-wider uppercase">
                <span>ENGINEERING SUPERIORITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {advantagesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {advantagesSubtitle}
              </p>
            </div>

            {/* Advantages 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
              {advantagesList.map((adv, idx) => {
                const IconComponent = adv.icon || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {adv.badge && (
                          <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                            {adv.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">
                        {adv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                      <span>Net Bangla Standard</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-auto" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 4. WORKFLOW / STEP-BY-STEP PROCESS (If Provided) */}
        {workflowSteps && workflowSteps.length > 0 && (
          <section className="py-14 sm:py-20 bg-white">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase">
                  <span>PROJECT LIFECYCLE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {workflowTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
                {workflowSteps.map((wf, wIdx) => (
                  <div
                    key={wIdx}
                    className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-[0_20px_35px_-10px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 ease-out space-y-3 overflow-hidden cursor-default"
                  >
                    {/* Top Golden Shimmer Line on Hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Subtle Inner Ambient Glow on Hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div className="relative z-10 space-y-3">
                      <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-500/80 group-hover:text-amber-500 group-hover:scale-105 transition-all duration-300 origin-left">
                        {wf.step}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors duration-200 leading-snug">
                        {wf.title}
                      </h3>
                      <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors duration-200">
                        {wf.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 5. TECHNOLOGY PARTNERS */}
        <PartnersSection />

        {/* 6. BOTTOM CONVERSION CTA BANNER */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-950 -z-10"
          />

          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Zap className="w-4 h-4" />
                <span>CLEAN ENERGY FOR YOUR FACILITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {ctaTitle}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {ctaDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary-solar py-3.5 px-8 rounded-2xl flex items-center gap-2 text-sm font-bold text-slate-950 shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Consult Solar Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/calculator"
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all"
                >
                  Use Rooftop ROI Calculator
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

export default SolutionTemplate;
