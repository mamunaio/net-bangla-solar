"use client";

import React from "react";
import {
  Quote,
  LifeBuoy,
  Cpu,
  MessageSquareCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

// Prototype/Demo testimonial records structured for easy replacement with verified client quotes
const featuredTestimonial: TestimonialItem = {
  id: "featured-commercial",
  quote:
    "Net Bangla's team made the transition to solar straightforward from planning through installation. The process felt organized, transparent, and technically well managed.",
  author: "Prototype Client",
  role: "Commercial Solar Project",
  company: "Demo Organization",
  initials: "PC",
};

const supportingTestimonials: TestimonialItem[] = [
  {
    id: "supporting-industrial",
    quote:
      "The installation process was clearly explained at every stage, and the team stayed focused on system performance and quality.",
    author: "Prototype Client",
    role: "Industrial Solar Project",
    company: "Demo Organization",
    initials: "PC",
  },
  {
    id: "supporting-residential",
    quote:
      "We wanted a solar solution that could grow with our energy needs. The project was approached with practical engineering and long-term planning.",
    author: "Prototype Client",
    role: "Residential Solar Project",
    company: "Demo Organization",
    initials: "PC",
  },
];

const trustPrinciples = [
  {
    icon: LifeBuoy,
    title: "Long-term support",
  },
  {
    icon: Cpu,
    title: "Engineering-led delivery",
  },
  {
    icon: MessageSquareCheck,
    title: "Transparent communication",
  },
];

const partnerPlaceholders = [
  "CLIENT PARTNER",
  "ENERGY PARTNER",
  "PROJECT PARTNER",
  "TECH PARTNER",
];

export function TestimonialsSection() {
  return (
    <section
      aria-label="Client Perspective and Service Trust"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 w-[850px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[650px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-12 md:space-y-16">
        {/* SECTION INTRO */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>Client Perspective</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Built around the people{" "}
            <span className="gradient-text-solar">we power.</span>
          </h2>

          <p className="text-solar-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Reliable solar systems are only part of the job. We build long-term
            relationships through clear communication, careful execution, and
            dependable support.
          </p>
        </div>

        {/* ASYMMETRIC TESTIMONIALS COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Large Featured Testimonial (~60% width) */}
          <div
            className="lg:col-span-7 relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-[#07160d]/80 backdrop-blur-xl border border-emerald-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle decorative radial glow & oversize quote icon */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-emerald-500/[0.08] blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="absolute top-6 right-6 sm:top-8 sm:right-8 text-emerald-400/15"
            >
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            {/* Quote Body */}
            <div className="relative z-10 space-y-6 pt-4 text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-emerald-400/90 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                Featured Perspective &bull; Prototype
              </span>

              <blockquote className="text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-tight text-white/95 leading-snug">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center gap-4 text-left">
              {/* Circular Initials Avatar */}
              <div
                className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-300 font-bold text-sm shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                aria-hidden="true"
              >
                {featuredTestimonial.initials}
              </div>

              <div>
                <div className="text-base font-semibold text-white tracking-tight">
                  {featuredTestimonial.author}
                </div>
                <div className="text-xs text-solar-text-secondary">
                  {featuredTestimonial.role} &bull; {featuredTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Two Smaller Stacked Supporting Testimonials (~40% width) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {supportingTestimonials.map((item) => (
              <div
                key={item.id}
                className="relative rounded-3xl p-6 sm:p-7 bg-[#06120a]/75 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between text-left shadow-lg"
              >
                <div className="space-y-4">
                  <div className="text-emerald-400/20">
                    <Quote className="w-7 h-7" />
                  </div>

                  <blockquote className="text-sm sm:text-base font-normal text-solar-text-secondary leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 font-semibold text-xs"
                    aria-hidden="true"
                  >
                    {item.initials}
                  </div>

                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {item.author}
                    </div>
                    <div className="text-[11px] text-solar-text-muted">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST PRINCIPLES BAR */}
        <div className="pt-6 border-t border-white/10 space-y-4 text-left sm:text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-solar-text-muted font-semibold">
            Trust Built Project by Project
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-4xl mx-auto">
            {trustPrinciples.map((principle) => {
              const IconComp = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="flex items-center justify-start sm:justify-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <IconComp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {principle.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* GENERIC CLIENT / PARTNER PLACEHOLDER STRIP */}
        <div className="pt-8 border-t border-white/[0.06] text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-40 hover:opacity-70 transition-opacity duration-300">
            {partnerPlaceholders.map((placeholder) => (
              <span
                key={placeholder}
                className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-solar-text-muted uppercase px-3 py-1.5 rounded border border-white/10"
              >
                {placeholder}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
