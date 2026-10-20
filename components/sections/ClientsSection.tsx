"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Radio,
  Factory,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type ClientCategory =
  | "all"
  | "defense-public"
  | "telecom-energy"
  | "industrial-corporate"
  | "healthcare-academic";

export interface ClientItem {
  id: string;
  name: string;
  bnName: string;
  category: ClientCategory;
  categoryLabel: string;
  logo: string;
  description: string;
  tag: string;
}

export const clientsData: ClientItem[] = [
  {
    id: "army",
    name: "Bangladesh Army",
    bnName: "বাংলাদেশ সেনাবাহিনী",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/bangladesh-army.webp",
    description: "National defense & cantonment engineering facilities",
    tag: "DEFENSE",
  },
  {
    id: "navy-dockyard",
    name: "Dockyard & Engineering Works Ltd. (DEW)",
    bnName: "ডকইয়ার্ড অ্যান্ড ইঞ্জিনিয়ারিং ওয়ার্কস (বাংলাদেশ নৌবাহিনী)",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/dockyard-engineering-works.webp",
    description: "Bangladesh Navy marine & industrial engineering facility",
    tag: "NAVY",
  },
  {
    id: "mes",
    name: "Military Engineer Services (MES)",
    bnName: "মিলিটারী ইঞ্জিনিয়ার সার্ভিসেস",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/military-engineer-services.webp",
    description: "Armed forces electrical & infrastructure installations",
    tag: "ARMED FORCES",
  },
  {
    id: "bmtf",
    name: "Bangladesh Machine Tools Factory Ltd. (BMTF)",
    bnName: "বাংলাদেশ মেশিন টুলস ফ্যাক্টরী লিঃ",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/bmtf.webp",
    description: "State-owned high-precision manufacturing enterprise",
    tag: "DEFENSE ENLISTED",
  },
  {
    id: "khulna-shipyard",
    name: "Khulna Shipyard Ltd. (KSY)",
    bnName: "খুলনা শিপইয়ার্ড লিমিটেড (বাংলাদেশ নৌবাহিনী)",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/dockyard-engineering-works.webp",
    description: "Bangladesh Navy marine & commercial ship construction facility",
    tag: "NAVY ENLISTED",
  },
  {
    id: "egp-system",
    name: "Bangladesh e-Government Procurement (e-GP)",
    bnName: "বাংলাদেশ ই-গভর্নমেন্ট প্রকিউরমেন্ট (e-GP)",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/bcct.webp",
    description: "National centralized electronic government procurement enlistment",
    tag: "E-GP ENLISTED",
  },
  {
    id: "ministry-jute",
    name: "Ministry of Textiles and Jute",
    bnName: "বস্ত্র ও পাট মন্ত্রণালয়",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/ministry-textiles-jute.webp",
    description: "Government ministry public-sector facility projects",
    tag: "MINISTRY",
  },
  {
    id: "bcct",
    name: "Bangladesh Climate Change Trust (BCCT)",
    bnName: "বাংলাদেশ জলবায়ু পরিবর্তন ট্রাস্ট",
    category: "defense-public",
    categoryLabel: "Defense & Public",
    logo: "/images/clients/bcct.webp",
    description: "National climate resilience & clean energy initiatives",
    tag: "CLIMATE TRUST",
  },
  {
    id: "robi",
    name: "Robi Axiata Limited",
    bnName: "রবি আজিয়াটা লিমিটেড",
    category: "telecom-energy",
    categoryLabel: "Telecom & Energy",
    logo: "/images/clients/robi.webp",
    description: "Multinational telecom network & tower infrastructure",
    tag: "TELECOM",
  },
  {
    id: "btcl",
    name: "BTCL",
    bnName: "বাংলাদেশ টেলিকমিউনিকেশন্স কোম্পানি লিমিটেড",
    category: "telecom-energy",
    categoryLabel: "Telecom & Energy",
    logo: "/images/clients/btcl.webp",
    description: "National telecommunications transmission backbone",
    tag: "TELECOM",
  },
  {
    id: "bsccl",
    name: "Bangladesh Submarine Cables PLC (BSCCL)",
    bnName: "বাংলাদেশ সাবমেরিন ক্যাবলস পিএলসি",
    category: "telecom-energy",
    categoryLabel: "Telecom & Energy",
    logo: "/images/clients/bsccl.webp",
    description: "International submarine cable gateway connectivity hubs",
    tag: "CONNECTIVITY",
  },
  {
    id: "cegis",
    name: "CEGIS",
    bnName: "সেন্টার ফর এনভায়রনমেন্টাল অ্যান্ড জিওগ্রাফিক ইনফরমেশন সার্ভিসেস",
    category: "telecom-energy",
    categoryLabel: "Telecom & Energy",
    logo: "/images/clients/cegis.webp",
    description: "Center for Environmental & Geographic Information Services",
    tag: "RESEARCH",
  },
  {
    id: "nesco",
    name: "NESCO",
    bnName: "নর্দার্ন ইলেকট্রিসিটি সাপ্লাই কোম্পানি পিএলসি",
    category: "telecom-energy",
    categoryLabel: "Telecom & Energy",
    logo: "/images/clients/nesco.webp",
    description: "Northern regional electricity distribution grid",
    tag: "UTILITY GRID",
  },
  {
    id: "bgmea",
    name: "BGMEA",
    bnName: "বাংলাদেশ পোশাক প্রস্তুতকারক ও রপ্তানিকারক সমিতি",
    category: "industrial-corporate",
    categoryLabel: "Industry & Corporate",
    logo: "/images/clients/bgmea.webp",
    description: "Apex garment export & industrial green energy initiatives",
    tag: "RMG APEX",
  },
  {
    id: "mim-group",
    name: "MIM Group",
    bnName: "মিম গ্রুপ",
    category: "industrial-corporate",
    categoryLabel: "Industry & Corporate",
    logo: "/images/clients/mim-group.webp",
    description: "Diversified industrial & manufacturing conglomerate",
    tag: "CONGLOMERATE",
  },
  {
    id: "intal-technology",
    name: "Intal Technology",
    bnName: "ইনটাল টেকনোলজি",
    category: "industrial-corporate",
    categoryLabel: "Industry & Corporate",
    logo: "/images/clients/mim-group.webp",
    description: "127.4 kWp Rooftop On-Grid Solar PV installation at Ashulia, Savar",
    tag: "SOLAR EPC",
  },
  {
    id: "ispahani-hospital",
    name: "Ispahani Islamia Eye Institute & Hospital",
    bnName: "ইস্পাহানী ইসলামিয়া চক্ষু ইনস্টিটিউট ও হাসপাতাল",
    category: "healthcare-academic",
    categoryLabel: "Healthcare & Academic",
    logo: "/images/clients/ispahani-islamia-eye-hospital.webp",
    description: "Specialized non-profit healthcare & tertiary hospital",
    tag: "HEALTHCARE",
  },
  {
    id: "christian-hospital",
    name: "Christian Memorial Hospital",
    bnName: "খ্রিস্টান মেমোরিয়াল হাসপাতাল, ব্রাহ্মণবাড়িয়া",
    category: "healthcare-academic",
    categoryLabel: "Healthcare & Academic",
    logo: "/images/clients/christian-memorial-hospital.webp",
    description: "Regional multi-specialty healthcare facility",
    tag: "HEALTHCARE",
  },
  {
    id: "textile-institute",
    name: "Shahid Kamaruzzaman Textile Institute",
    bnName: "শহীদ কামারুজ্জামান টেক্সটাইল ইনস্টিটিউট, মান্দা",
    category: "healthcare-academic",
    categoryLabel: "Healthcare & Academic",
    logo: "/images/clients/shahid-kamaruzzaman-textile-institute.webp",
    description: "Government engineering academic institution campus",
    tag: "ACADEMIC",
  },
];

const categoryTabs = [
  { id: "all" as ClientCategory, label: "All Clients", icon: Sparkles },
  {
    id: "defense-public" as ClientCategory,
    label: "Defense & Public",
    icon: ShieldCheck,
  },
  {
    id: "telecom-energy" as ClientCategory,
    label: "Telecom & Energy",
    icon: Radio,
  },
  {
    id: "industrial-corporate" as ClientCategory,
    label: "Industry & Corporate",
    icon: Factory,
  },
  {
    id: "healthcare-academic" as ClientCategory,
    label: "Healthcare & Academic",
    icon: GraduationCap,
  },
];

export function ClientsSection() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("all");

  const filteredClients =
    activeCategory === "all"
      ? clientsData
      : clientsData.filter((client) => client.category === activeCategory);

  // Section hidden as requested (set to false whenever you want to display it again)
  const isHidden = true;
  if (isHidden) {
    return null;
  }

  return (
    <section
      id="clients"
      aria-label="Happy Clients with Services - Leading National & Corporate Partners"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 w-[850px] h-[500px] rounded-full bg-amber-400/[0.07] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[650px] h-[400px] rounded-full bg-sky-400/[0.05] blur-[140px] -z-10"
      />

      <Container className="relative z-10 space-y-10 sm:space-y-12 lg:space-y-14">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-slate-200/80 pb-8 sm:pb-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
              <span>HAPPY CLIENTS WITH SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-[1.15]">
              Trusted by Leading{" "}
              <span className="gradient-text-solar">
                National & Industrial
              </span>{" "}
              Organizations
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Net Bangla Solar proudly delivers mission-critical solar and
              electrical infrastructure for Bangladesh’s defense forces,
              government ministries, telecom operators, and industrial leaders.
            </p>
          </div>

          {/* Quick Metrics Counter */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 pt-2 md:pt-0">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left min-w-[130px]">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                16<span className="text-amber-500">+</span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Premier Clients
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left min-w-[130px]">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                100<span className="text-amber-500">%</span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Delivery Track Record
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
                ? clientsData.length
                : clientsData.filter((c) => c.category === tab.id).length;

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

        {/* CLIENTS LOGO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredClients.map((client) => {
            return (
              <div
                key={client.id}
                className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.20),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default"
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

                {/* Top Tag & Sector Badge */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-800 bg-amber-100/80 group-hover:bg-amber-500 group-hover:text-slate-950 px-2.5 py-0.5 rounded border border-amber-200 group-hover:border-amber-500 transition-all duration-200">
                    {client.tag}
                  </span>

                  <span className="text-[11px] font-medium text-slate-500 group-hover:text-amber-800 transition-colors">
                    {client.categoryLabel}
                  </span>
                </div>

                {/* Logo Showcase Stage */}
                <div className="relative z-10 flex items-center justify-center h-28 sm:h-32 px-4 py-2 bg-slate-50/70 group-hover:bg-white rounded-2xl border border-slate-100 group-hover:border-amber-200/70 transition-all duration-300">
                  <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                    <Image
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      width={180}
                      height={90}
                      loading="lazy"
                      decoding="async"
                      className="max-h-20 w-auto max-w-[170px] object-contain drop-shadow-2xs filter transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Client Name & Description */}
                <div className="relative z-10 space-y-1.5 pt-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                      {client.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 mt-0.5" />
                  </div>
                  {client.bnName && (
                    <div className="text-xs text-amber-800 font-medium">
                      {client.bnName}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed pt-1">
                    {client.description}
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

export default ClientsSection;
