"use client";

import React from "react";
import Link from "next/link";
import {
  Sun,
  Award,
  Leaf,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface AdvantagePillar {
  number: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: "amber" | "emerald" | "sky" | "orange";
}

const brochurePillars: AdvantagePillar[] = [
  {
    number: "01",
    tag: "CUSTOMIZED SOLUTIONS",
    title: "Tailored Solar Systems",
    description:
      "Whether it’s a residential home or a large commercial project, we design and install customized solar systems tailored to maximize efficiency and minimize costs. Our solutions empower you to harness renewable energy effectively while enjoying sustainable, long-term savings.",
    icon: Sun,
    accentColor: "amber",
  },
  {
    number: "02",
    tag: "QUALITY & DURABILITY",
    title: "We Build Solar to Last",
    description:
      "We build solar systems to last. By combining cutting-edge technology with rigorous quality standards, we ensure your system delivers peak performance year after year, providing dependable energy for decades to come.",
    icon: Award,
    accentColor: "emerald",
  },
  {
    number: "03",
    tag: "MAXIMUM ROI",
    title: "Significant Cost Reductions",
    description:
      "Our expert designs help you achieve significant reductions in monthly electricity costs. Solar power is a smart investment for homes and businesses alike, and we are committed to helping you realize the maximum financial benefits from your solar system.",
    icon: Leaf,
    accentColor: "emerald",
  },
  {
    number: "04",
    tag: "LIFECYCLE PARTNERSHIP",
    title: "Ongoing Support & Care",
    description:
      "Our commitment doesn’t end with installation. We provide ongoing customer support and maintenance to ensure your solar system consistently operates at peak performance. With Net Bangla Limited, you’re more than a customer—you’re a valued partner in building a brighter, more sustainable future.",
    icon: Headphones,
    accentColor: "amber",
  },
];

const technicalTags = [
  "RESIDENTIAL ROOFTOPS",
  "COMMERCIAL & INDUSTRIAL",
  "PUBLIC SECTOR EPC",
  "MONO-PERC & TOPCon",
  "NET-METERING",
  "25-YEAR PERFORMANCE",
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Net Bangla Solar"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/3 w-[750px] h-[450px] rounded-full bg-amber-400/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[600px] h-[400px] rounded-full bg-emerald-400/[0.05] blur-[150px] -z-10"
      />

      <Container className="relative z-10 space-y-12 lg:space-y-16">
        {/* SECTION HEADER WITH OFFICIAL BROCHURE INTRO */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Official Brochure Eyebrow */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase">
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Engineering Discipline &amp;{" "}
            <span className="gradient-text-solar">Unmatched Value</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg md:text-[17px] leading-relaxed max-w-3xl mx-auto">
            Our expertise sets us apart in the solar market, delivering unmatched
            value and results for every client. Our product portfolio comprises solar
            energy systems for private residences, commercial enterprises, and public
            sector projects. We are committed to promoting sustainable development by
            providing reliable, efficient, and environmentally responsible solar
            technologies that align with national and global energy goals.
          </p>
        </div>

        {/* 4 CORE BROCHURE PILLARS (4-COLUMN LUXURY GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {brochurePillars.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.number}
                className="group relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                {/* Subtle Inner Ambient Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-emerald-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Top Golden Shimmer Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Top Row: Icon Container & Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-600 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.40)] transition-all duration-300 ease-out"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-7 w-7 transition-transform duration-300" />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-amber-800 bg-amber-50 group-hover:bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200 group-hover:border-amber-300 transition-colors duration-200 shadow-2xs">
                    {item.number}
                  </span>
                </div>

                {/* Content Block */}
                <div className="relative z-10 space-y-3 flex-1 flex flex-col justify-start">
                  <div>
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-amber-700 block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-900 transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors duration-200">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Micro-Indicator */}
                <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-amber-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Engineering Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM TECHNICAL TAGS STRIP & DEEP DIVE CTA (Full Portfolio Coverage) - Hidden as requested */}
        {false && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Full Portfolio Coverage</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {technicalTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-700 font-semibold"
                >
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/why-choose-us"
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-[0_4px_16px_rgba(245,158,11,0.30)] hover:shadow-[0_6px_22px_rgba(245,158,11,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore Technical Specifications</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        )}
      </Container>
    </section>
  );
}

export default WhyChooseUs;
