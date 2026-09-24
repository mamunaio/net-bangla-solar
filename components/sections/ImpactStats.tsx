"use client";

import React, { useRef, useEffect } from "react";
import {
  Building2,
  CalendarCheck2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface CredentialItem {
  id: string;
  label: string;
  value: string;
  supporting: string;
  icon: React.ElementType;
}

const credentialsData: CredentialItem[] = [
  {
    id: "established",
    label: "ESTABLISHED",
    value: "May 28, 2014",
    supporting: "Net Bangla Limited",
    icon: CalendarCheck2,
  },
  {
    id: "basis",
    label: "BASIS MEMBER",
    value: "General Member",
    supporting: "ID: A-405",
    icon: Building2,
  },
  {
    id: "bacco",
    label: "BACCO MEMBER",
    value: "Member",
    supporting: "ID: 2018.0082.1000.0062",
    icon: BadgeCheck,
  },
  {
    id: "btrc",
    label: "BTRC REGISTERED",
    value: "Registered Call Center",
    supporting: "CC/BPO",
    icon: ShieldCheck,
  },
];

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(stripCardRef.current, {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.from(stripCardRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stripCardRef.current,
          start: "top 88%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Institutional Credentials and Memberships"
      className="relative py-6 sm:py-8 lg:py-10 overflow-hidden"
    >
      <Container>
        {/* COMPACT HORIZONTAL TRUST & CREDENTIALS STRIP */}
        <div
          ref={stripCardRef}
          className="relative rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-7 bg-[#07130b]/80 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Subtle Ambient Background Light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-500/[0.06] blur-[60px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-600/[0.04] blur-[60px]"
          />

          {/* 4-COLUMN HORIZONTAL GRID */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0">
            {credentialsData.map((item, idx) => {
              const IconComponent = item.icon;
              const isLast = idx === credentialsData.length - 1;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative flex flex-col justify-between p-3.5 sm:p-4 lg:px-6",
                    // Desktop vertical divider
                    !isLast && "lg:border-r lg:border-white/10",
                    // Mobile & Tablet subtle divider
                    idx < 3 && "border-b border-white/[0.06] sm:border-b-0"
                  )}
                >
                  {/* Top: Small uppercase label & Icon */}
                  <div className="flex items-center justify-between gap-2 pb-2">
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                      {item.label}
                    </span>
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Middle: Main credential / value */}
                  <div className="py-0.5">
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                      {item.value}
                    </div>
                  </div>

                  {/* Bottom: Supporting Identifier */}
                  <div className="pt-1">
                    <span className="text-xs text-slate-400 font-mono">
                      {item.supporting}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImpactStats;
