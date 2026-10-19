"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HomeCTA() {
  return (
    <section className="py-14 sm:py-20 bg-slate-950 relative overflow-hidden text-white border-t border-slate-800/80">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-slate-950/60 to-slate-950 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.08] blur-[140px] -z-10"
      />

      <Container>
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#0B132B]/95 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_30px_rgba(16,185,129,0.08)] relative overflow-hidden">
          {/* Subtle top shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          <div className="space-y-6 text-left max-w-4xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase">
              <span>INDUSTRIAL &amp; COMMERCIAL SOLAR EPC</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Power Your Business. Reduce Energy Costs. Build a Sustainable Future.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Turnkey solar energy solutions for factories, industrial facilities, and commercial buildings across Bangladesh custom-engineered to reduce grid electricity consumption and improve long-term energy cost efficiency.
            </p>

            {/* Callout section */}
            <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Ready to Reduce Your Factory Electricity Bills by Up to 70%?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Discover your factory&apos;s solar savings potential with a site-specific energy assessment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-extrabold transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/35 hover:-translate-y-0.5"
              >
                <span>Request a Free Solar Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/solutions/industrial-solar-epc"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Our Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Delivery & Financing Models (Feasibility Studies • Turnkey EPC • CAPEX • OPEX • PPA • Long-Term O&M) */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-300 font-mono font-medium">
              <span className="text-amber-400">Feasibility Studies</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-white">Turnkey EPC</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-emerald-400">CAPEX</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-sky-400">OPEX</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-indigo-400">PPA</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300">Long-Term O&amp;M</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
