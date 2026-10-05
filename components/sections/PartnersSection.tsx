"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Award,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type PartnerCategory =
  | "all"
  | "global-epc"
  | "associations"
  | "enterprise-tech";

export interface PartnerItem {
  id: string;
  name: string;
  nativeName?: string;
  category: PartnerCategory;
  categoryLabel: string;
  logo: string;
  description: string;
  tag: string;
  region: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: "zjht",
    name: "ZJHT",
    nativeName: "Zhejiang High-Tech Energy",
    category: "global-epc",
    categoryLabel: "Global EPC & Energy",
    logo: "/images/partners/zjht.png",
    description: "Renewable energy equipment manufacturing & engineering systems",
    tag: "SOLAR TECH",
    region: "GLOBAL / CHINA",
  },
  {
    id: "cmc",
    name: "China National Machinery Imp. & Exp. Corp.",
    nativeName: "中国机械进出口 (集团) 有限公司",
    category: "global-epc",
    categoryLabel: "Global EPC & Energy",
    logo: "/images/partners/china-national-machinery-cmc.png",
    description: "State-owned global heavy machinery, power & energy EPC conglomerate",
    tag: "POWER & EPC",
    region: "GLOBAL CONGLOMERATE",
  },
  {
    id: "huachuang",
    name: "Huachuang Guojing",
    nativeName: "华创国晶",
    category: "global-epc",
    categoryLabel: "Global EPC & Energy",
    logo: "/images/partners/huachuang-guojing.png",
    description: "Advanced crystalline solar technology & precision engineering",
    tag: "CRYSTALLINE TECH",
    region: "GLOBAL / ASIA",
  },
  {
    id: "basis",
    name: "BASIS",
    nativeName: "Bangladesh Association of Software & Information Services",
    category: "associations",
    categoryLabel: "National Associations",
    logo: "/images/partners/basis.png",
    description: "National apex body for software, ICT & digital energy systems",
    tag: "APEX MEMBER",
    region: "MEMBER ID: A-405",
  },
  {
    id: "bacco",
    name: "BACCO",
    nativeName: "Bangladesh Association of Contact Center & Outsourcing",
    category: "associations",
    categoryLabel: "National Associations",
    logo: "/images/partners/bacco.png",
    description: "National association for contact center & technology infrastructure",
    tag: "APEX MEMBER",
    region: "MEMBER ID: 2018",
  },
  {
    id: "goodfirms",
    name: "GoodFirms Verified",
    nativeName: "Top BPO & Technology Services Accreditation",
    category: "associations",
    categoryLabel: "National Associations",
    logo: "/images/partners/goodfirms.png",
    description: "Global research and accreditation platform for enterprise services",
    tag: "ACCREDITATION",
    region: "GLOBAL VERIFIED",
  },
  {
    id: "serimag",
    name: "Serimag",
    nativeName: "Cognitive AI & Document Automation",
    category: "enterprise-tech",
    categoryLabel: "Enterprise Tech",
    logo: "/images/partners/serimag.png",
    description: "Cognitive AI and automated business document intelligence systems",
    tag: "AI & AUTOMATION",
    region: "EUROPE / GLOBAL",
  },
  {
    id: "ameyo",
    name: "Ameyo",
    nativeName: "Enterprise Omnichannel Platform",
    category: "enterprise-tech",
    categoryLabel: "Enterprise Tech",
    logo: "/images/partners/ameyo.png",
    description: "Enterprise communication platforms and customer experience infrastructure",
    tag: "CLOUD CX",
    region: "GLOBAL TECH",
  },
  {
    id: "infobip",
    name: "Infobip",
    nativeName: "Global Cloud Communications",
    category: "enterprise-tech",
    categoryLabel: "Enterprise Tech",
    logo: "/images/partners/infobip.png",
    description: "Global omnichannel cloud communications & mission-critical messaging",
    tag: "CLOUD NETWORK",
    region: "GLOBAL CLOUD",
  },
];

const categoryTabs = [
  { id: "all" as PartnerCategory, label: "All Alliances", icon: Layers },
  {
    id: "global-epc" as PartnerCategory,
    label: "Global EPC & Equipment",
    icon: Cpu,
  },
  {
    id: "associations" as PartnerCategory,
    label: "Industry Associations",
    icon: Award,
  },
  {
    id: "enterprise-tech" as PartnerCategory,
    label: "Enterprise Tech Platforms",
    icon: Globe,
  },
];

export function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>("all");

  const filteredPartners =
    activeCategory === "all"
      ? partnersData
      : partnersData.filter((p) => p.category === activeCategory);

  // Section hidden as requested (set to false whenever you want to display it again)
  const isHidden = true;
  if (isHidden) {
    return null;
  }

  return (
    <section
      id="partners"
      aria-label="Technology Partners and Associations"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-white"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 w-[850px] h-[500px] rounded-full bg-amber-400/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-1/4 w-[650px] h-[400px] rounded-full bg-sky-400/[0.05] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-10 sm:space-y-12 lg:space-y-14">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-slate-200/80 pb-8 sm:pb-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
              <span>TECHNOLOGY PARTNERS AND ASSOCIATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-[1.15]">
              Global Technology Partners &{" "}
              <span className="gradient-text-solar">
                Industry Associations
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Backed by world-leading power machinery manufacturers, national apex
              associations, and enterprise cloud infrastructure for dependable
              turnkey project delivery.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 pt-2 md:pt-0">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left min-w-[130px]">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                Tier<span className="text-amber-500">-1</span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Equipment Standard
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left min-w-[130px]">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                100<span className="text-amber-500">%</span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Verified Global OEM
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            const count =
              tab.id === "all"
                ? partnersData.length
                : partnersData.filter((p) => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                type="button"
                className={cn(
                  "inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ease-out cursor-pointer shadow-2xs",
                  isActive
                    ? "bg-amber-500 text-slate-950 border border-amber-500 shadow-sm shadow-amber-500/25 scale-[1.02]"
                    : "bg-white text-slate-700 border border-slate-200/90 hover:border-amber-400 hover:text-amber-800 hover:bg-amber-50/50"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isActive ? "text-slate-950" : "text-amber-600"
                  )}
                />
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "text-[11px] font-mono font-bold px-2 py-0.5 rounded-full",
                    isActive
                      ? "bg-slate-950 text-amber-400"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3x3 PARTNERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPartners.map((partner) => {
            return (
              <div
                key={partner.id}
                className="group relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.20),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default"
              >
                {/* Top Golden Shimmer Line on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Subtle Inner Ambient Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-amber-400/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Top Tag & Region */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-800 bg-amber-100/80 group-hover:bg-amber-500 group-hover:text-slate-950 px-2.5 py-0.5 rounded border border-amber-200 group-hover:border-amber-500 transition-all duration-200">
                    {partner.tag}
                  </span>

                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-amber-800 transition-colors">
                    {partner.region}
                  </span>
                </div>

                {/* Logo Showcase Stage */}
                <div className="relative z-10 flex items-center justify-center h-28 sm:h-32 px-4 py-2 bg-slate-50/70 group-hover:bg-white rounded-2xl border border-slate-100 group-hover:border-amber-200/70 transition-all duration-300">
                  <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      width={200}
                      height={90}
                      className="max-h-20 w-auto max-w-[190px] object-contain drop-shadow-2xs filter transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Partner Name & Role */}
                <div className="relative z-10 space-y-1.5 pt-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {partner.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 mt-0.5" />
                  </div>
                  {partner.nativeName && (
                    <div className="text-xs text-slate-500 font-medium line-clamp-1">
                      {partner.nativeName}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed pt-1">
                    {partner.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default PartnersSection;
