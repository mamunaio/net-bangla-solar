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
  // Section hidden as requested (set to false whenever you want to display it again)
  const isHidden = true;
  if (isHidden) {
    return null;
  }

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
      className="relative py-6 sm:py-8 lg:py-10 overflow-hidden bg-white -mt-4 sm:-mt-6 z-20"
    >
      <Container>
        {/* COMPACT HORIZONTAL TRUST & CREDENTIALS STRIP */}
        <div
          ref={stripCardRef}
          className="relative rounded-3xl p-6 sm:p-7 lg:p-8 bg-white border border-slate-200/90 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden"
        >
          {/* Subtle Ambient Background Shimmer */}
          <div className="absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/[0.06] blur-[60px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-sky-400/[0.04] blur-[60px]"
          />

          {/* 4-COLUMN HORIZONTAL GRID */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {credentialsData.map((item, idx) => {
              const IconComponent = item.icon;
              const isLast = idx === credentialsData.length - 1;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "group relative flex flex-col justify-between p-3 sm:p-4 lg:px-6 rounded-2xl transition-all duration-300 hover:bg-amber-50/40 hover:-translate-y-0.5",
                    // Desktop vertical divider
                    !isLast && "lg:border-r lg:border-slate-100",
                    // Mobile & Tablet subtle divider
                    idx < 3 && "border-b border-slate-100 sm:border-b-0 pb-4 sm:pb-3"
                  )}
                >
                  {/* Top: Small uppercase label & Icon */}
                  <div className="flex items-center justify-between gap-2 pb-2.5">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-amber-700 uppercase group-hover:text-amber-800 transition-colors">
                      {item.label}
                    </span>
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 shadow-2xs group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Middle: Main credential / value */}
                  <div className="py-0.5">
                    <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {item.value}
                    </div>
                  </div>

                  {/* Bottom: Supporting Identifier */}
                  <div className="pt-1.5">
                    <span className="text-xs text-slate-500 font-mono font-medium">
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
