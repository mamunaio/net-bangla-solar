"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Award,
  Cpu,
  Layers,
  ShieldCheck,
  Building2,
  Building,
  Radio,
  Factory,
  GraduationCap,
  Sparkles,
  Search,
  ArrowUpRight,
  PhoneCall,
  CheckCircle2,
  Landmark,
  ArrowRight,
  Calculator,
  Handshake,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type MasterTab = "partners" | "clients" | "all";

export interface PartnerEntity {
  id: string;
  name: string;
  nativeName?: string;
  category: "global-epc" | "enterprise-tech" | "associations";
  categoryLabel: string;
  logo?: string;
  description: string;
  tag: string;
  roleOrId: string;
  highlights: string[];
}

export interface ClientEntity {
  id: string;
  name: string;
  bnName: string;
  category: "defense-armed" | "govt-public" | "telecom-energy" | "industry-rmg" | "healthcare-academic";
  categoryLabel: string;
  logo?: string;
  description: string;
  tag: string;
  sectorBadge: string;
  highlights: string[];
}

// 0. MAIN STRATEGIC PARTNERS & JOINT VENTURES (JV) DATA
export const mainStrategicPartners = [
  {
    id: "cmc",
    name: "China National Machinery Imp. & Exp. Corp. (CMC)",
    nativeName: "中国机械进出口 (集团) 有限公司",
    category: "Strategic Partner — Heavy EPC & Infrastructure",
    description:
      "Strategic partnership in major renewable energy and IT infrastructure projects in Bangladesh, for advanced technological development and energy security.",
    logo: "/images/partners/china-national-machinery-cmc.webp",
    tag: "POWER & EPC",
  },
  {
    id: "huachuang",
    name: "Huachuang Guojing (Hebei) New Energy Co. Ltd.",
    nativeName: "华创国晶 (河北) 新能源",
    category: "Authorized Distributor & Equipment Partner",
    description:
      "Leading manufacturer of high-efficiency monocrystalline solar panels and advanced inverters, delivering precision engineering and long-term durability.",
    logo: "/images/partners/huachuang-guojing.webp",
    tag: "AUTHORIZED OEM",
  },
  {
    id: "wincle",
    name: "Wincle Energy Pte. Ltd.",
    nativeName: "赢科数能 (Wenergy)",
    category: "Strategic Partner — Battery Energy Storage Systems (BESS)",
    description:
      "Global Tier-1 energy storage pioneer delivering smart liquid-cooled C&I BESS (Stars Series 215–385 kWh) and 4-in-1 Solar-BESS-Diesel-EV integrated systems certified to UL9540A & IEC standards.",
    logo: "/images/partners/wincle-energy.webp",
    tag: "BESS & STORAGE",
  },
];

// 1. DEDICATED PARTNERS & ASSOCIATIONS DATA
export const partnersList: PartnerEntity[] = [
  {
    id: "serimag",
    name: "Serimag",
    nativeName: "Cognitive AI & Document Automation",
    category: "enterprise-tech",
    categoryLabel: "Enterprise AI & Cloud Platform",
    logo: "/images/partners/serimag.webp",
    description:
      "European technology alliance for cognitive AI, document intelligence, and automated business data systems powering our enterprise digital infrastructure.",
    tag: "AI & AUTOMATION",
    roleOrId: "EUROPE / GLOBAL",
    highlights: ["Cognitive AI Systems", "Automated Intelligence", "Enterprise Workflow"],
  },
  {
    id: "ameyo",
    name: "Ameyo",
    nativeName: "Enterprise Omnichannel Cloud Platform",
    category: "enterprise-tech",
    categoryLabel: "Enterprise Communications Partner",
    logo: "/images/partners/ameyo.webp",
    description:
      "Global enterprise communication platform provider powering contact center infrastructure, customer experience platforms, and telemetry dispatch.",
    tag: "CLOUD CX",
    roleOrId: "GLOBAL TECH",
    highlights: ["Omnichannel Contact Center", "Cloud CX Infrastructure", "Mission-Critical Telemetry"],
  },
  {
    id: "infobip",
    name: "Infobip",
    nativeName: "Global Cloud Communications",
    category: "enterprise-tech",
    categoryLabel: "Global Cloud Communications",
    logo: "/images/partners/infobip.webp",
    description:
      "Global omnichannel cloud communications and messaging backbone ensuring real-time SCADA alerts, telemetry delivery, and mission-critical notifications.",
    tag: "CLOUD NETWORK",
    roleOrId: "GLOBAL CLOUD",
    highlights: ["Real-time Cloud Messaging", "Enterprise SCADA Gateways", "Global Connectivity"],
  },
  {
    id: "bsrea",
    name: "BSREA",
    nativeName: "Bangladesh Sustainable and Renewable Energy Association",
    category: "associations",
    categoryLabel: "National Solar & Renewable Energy Apex Association",
    logo: "/images/partners/bsrea.svg",
    description:
      "National apex association for sustainable and renewable energy in Bangladesh. Net Bangla Limited is an active General Member.",
    tag: "SOLAR ALLIANCE",
    roleOrId: "GENERAL MEMBER",
    highlights: ["General Member", "National Renewable Body", "Solar Industry Apex"],
  },
  {
    id: "basis",
    name: "BASIS",
    nativeName: "Bangladesh Association of Software & Information Services",
    category: "associations",
    categoryLabel: "National Apex ICT Trade Body",
    logo: "/images/partners/basis.webp",
    description:
      "National apex body for software, ICT, and digital automation in Bangladesh. Net Bangla Limited is an active General Member in good standing.",
    tag: "APEX MEMBER",
    roleOrId: "MEMBER ID: A-405",
    highlights: ["General Member (A-405)", "National Trade Apex", "ICT & Energy Automation"],
  },
  {
    id: "bacco",
    name: "BACCO",
    nativeName: "Bangladesh Association of Contact Center & Outsourcing",
    category: "associations",
    categoryLabel: "National Contact Center Association",
    logo: "/images/partners/bacco.webp",
    description:
      "National apex association for contact center infrastructure, BPO, and mission-critical communications across Bangladesh.",
    tag: "APEX MEMBER",
    roleOrId: "MEMBER ID: 2018",
    highlights: ["Member ID: 2018.0082.1000.0062", "BTRC Registered CC/BPO", "National Apex Body"],
  },
];

// 2. DEDICATED PRESTIGIOUS CLIENTS DATA
export const clientsList: ClientEntity[] = [
  // DEFENSE & ARMED FORCES
  {
    id: "army",
    name: "Bangladesh Army",
    bnName: "বাংলাদেশ সেনাবাহিনী",
    category: "defense-armed",
    categoryLabel: "National Defense & Armed Forces",
    logo: "/images/clients/bangladesh-army.webp",
    description:
      "National defense forces facility infrastructure, cantonment installations, and specialized electrical engineering project execution.",
    tag: "DEFENSE",
    sectorBadge: "ARMED FORCES",
    highlights: ["National Defense Projects", "High-Security Engineering", "Cantonment Facilities"],
  },
  {
    id: "navy-dockyard",
    name: "Dockyard & Engineering Works Ltd. (DEW)",
    bnName: "ডকইয়ার্ড অ্যান্ড ইঞ্জিনিয়ারিং ওয়ার্কস (বাংলাদেশ নৌবাহিনী)",
    category: "defense-armed",
    categoryLabel: "Bangladesh Navy Marine Enterprise",
    logo: "/images/clients/dockyard-engineering-works.webp",
    description:
      "Bangladesh Navy marine engineering, shipyard facilities, and industrial power infrastructure deployment at Narayanganj.",
    tag: "NAVY ENLISTED",
    sectorBadge: "DEFENSE SECTOR",
    highlights: ["Navy Dockyard Enlisted", "Heavy Marine Infrastructure", "Turnkey Electrical Delivery"],
  },
  {
    id: "mes",
    name: "Military Engineer Services (MES)",
    bnName: "মিলিটারী ইঞ্জিনিয়ার সার্ভিসেস",
    category: "defense-armed",
    categoryLabel: "Armed Forces Engineering Organization",
    logo: "/images/clients/military-engineer-services.webp",
    description:
      "Apex electrical and civil engineering organization for Bangladesh Armed Forces cantonment installations and base operations.",
    tag: "ARMED FORCES",
    sectorBadge: "DEFENSE ENGINEERING",
    highlights: ["Armed Forces MES Enlisted", "Rigorous Engineering Standards", "Base Infrastructure"],
  },
  {
    id: "bmtf",
    name: "Bangladesh Machine Tools Factory Ltd. (BMTF)",
    bnName: "বাংলাদেশ মেশিন টুলস ফ্যাক্টরী লিঃ (সেনাবাহিনী পরিচালিত)",
    category: "defense-armed",
    categoryLabel: "Army-Operated Precision Manufacturing",
    logo: "/images/clients/bmtf.webp",
    description:
      "State-owned high-precision manufacturing, vehicle assembly, and industrial machinery enterprise operated by Bangladesh Army.",
    tag: "DEFENSE ENLISTED",
    sectorBadge: "GAZIPUR INDUSTRIAL",
    highlights: ["Army Operated Enterprise", "High-Precision Manufacturing", "Turnkey Project Execution"],
  },
  {
    id: "khulna-shipyard",
    name: "Khulna Shipyard Ltd. (KSY)",
    bnName: "খুলনা শিপইয়ার্ড লিমিটেড (বাংলাদেশ নৌবাহিনী)",
    category: "defense-armed",
    categoryLabel: "Bangladesh Navy Commercial & Warship Builder",
    logo: "/images/clients/dockyard-engineering-works.webp",
    description:
      "Premier marine vessel construction, patrol craft building, and shipyard power engineering facility under Bangladesh Navy.",
    tag: "NAVY ENLISTED",
    sectorBadge: "KHULNA REGION",
    highlights: ["Navy Warship Construction", "Heavy Coastal Power Setup", "Enlisted Vendor"],
  },

  // GOVERNMENT & PUBLIC SECTOR
  {
    id: "egp-system",
    name: "Bangladesh e-Government Procurement (e-GP)",
    bnName: "বাংলাদেশ ই-গভর্নমেন্ট প্রকিউরমেন্ট (e-GP)",
    category: "govt-public",
    categoryLabel: "National Centralized Public Procurement",
    logo: "/images/clients/bcct.webp",
    description:
      "National electronic government procurement system enlistment for public-sector turnkey solar, electrical, and technology contracts.",
    tag: "E-GP ENLISTED",
    sectorBadge: "GOVT ENLISTMENT",
    highlights: ["Centralized Public Tender", "National Compliance", "Government Certified"],
  },
  {
    id: "ministry-jute",
    name: "Ministry of Textiles and Jute",
    bnName: "বস্ত্র ও পাট মন্ত্রণালয়",
    category: "govt-public",
    categoryLabel: "Government Ministry",
    logo: "/images/clients/ministry-textiles-jute.webp",
    description:
      "Government ministry institutional facilities, administrative complexes, and public sector industrial energy efficiency initiatives.",
    tag: "MINISTRY",
    sectorBadge: "GOVT BANGLADESH",
    highlights: ["Public Sector Facilities", "Ministry Installations", "National Energy Policy"],
  },
  {
    id: "bcct",
    name: "Bangladesh Climate Change Trust (BCCT)",
    bnName: "বাংলাদেশ জলবায়ু পরিবর্তন ট্রাস্ট",
    category: "govt-public",
    categoryLabel: "National Climate Fund & Trust",
    logo: "/images/clients/bcct.webp",
    description:
      "Autonomous government trust under the Ministry of Environment, Forest and Climate Change for renewable energy transition and climate resilience.",
    tag: "CLIMATE TRUST",
    sectorBadge: "ENVIRONMENT TRUST",
    highlights: ["Climate Resilience Fund", "Renewable Energy Transition", "Green Carbon Offset"],
  },

  // TELECOM & UTILITY GRID
  {
    id: "robi",
    name: "Robi Axiata Limited",
    bnName: "রবি আজিয়াটা লিমিটেড",
    category: "telecom-energy",
    categoryLabel: "Multinational Telecom Operator",
    logo: "/images/clients/robi.webp",
    description:
      "Second largest mobile network operator in Bangladesh. Solar and power engineering support for mission-critical telecom towers and transmission hubs.",
    tag: "TELECOM",
    sectorBadge: "MULTINATIONAL",
    highlights: ["Telecom Tower Energy", "Off-Grid Solar BTS", "Continuous Uptime"],
  },
  {
    id: "btcl",
    name: "BTCL",
    bnName: "বাংলাদেশ টেলিকমিউনিকেশন্স কোম্পানি লিমিটেড",
    category: "telecom-energy",
    categoryLabel: "National Telecom Carrier",
    logo: "/images/clients/btcl.webp",
    description:
      "State-owned telecommunications carrier providing backbone transmission, copper/fiber exchanges, and government network connectivity.",
    tag: "TELECOM",
    sectorBadge: "NATIONAL CARRIER",
    highlights: ["National Telecom Backbone", "Transmission Exchange Power", "Public Utility"],
  },
  {
    id: "bsccl",
    name: "Bangladesh Submarine Cables PLC (BSCCL)",
    bnName: "বাংলাদেশ সাবমেরিন ক্যাবলস পিএলসি",
    category: "telecom-energy",
    categoryLabel: "International Submarine Cable Operator",
    logo: "/images/clients/bsccl.webp",
    description:
      "Core national gateway operator managing SMW-4 and SMW-5 submarine cable landing stations with 99.999% uninterrupted power requirements.",
    tag: "CONNECTIVITY",
    sectorBadge: "LANDING STATIONS",
    highlights: ["Submarine Cable Gateways", "Zero Downtime Power", "Mission-Critical Tier-3"],
  },
  {
    id: "cegis",
    name: "CEGIS",
    bnName: "সেন্টার ফর এনভায়রনমেন্টাল অ্যান্ড জিওগ্রাফিক ইনফরমেশন সার্ভিসেস",
    category: "telecom-energy",
    categoryLabel: "Government Environmental & GIS Center",
    logo: "/images/clients/cegis.webp",
    description:
      "Public research and GIS center under the Ministry of Water Resources conducting spatial analysis, climate simulation, and environmental audits.",
    tag: "RESEARCH",
    sectorBadge: "WATER RESOURCES",
    highlights: ["Environmental GIS Modeling", "Public Sector Facility", "Solar Resource Mapping"],
  },
  {
    id: "nesco",
    name: "NESCO",
    bnName: "নর্দার্ন ইলেকট্রিসিটি সাপ্লাই কোম্পানি পিএলসি",
    category: "telecom-energy",
    categoryLabel: "Regional Utility Power Grid",
    logo: "/images/clients/nesco.webp",
    description:
      "Northern Bangladesh power distribution utility managing 33kV/11kV substations, grid interconnections, and regional net-metering synchronization.",
    tag: "UTILITY GRID",
    sectorBadge: "NORTHERN REGION",
    highlights: ["Grid Net-Metering", "Substation Interconnection", "Utility Distribution"],
  },

  // INDUSTRIAL & RMG CONGLOMERATES
  {
    id: "bgmea",
    name: "BGMEA",
    bnName: "বাংলাদেশ পোশাক প্রস্তুতকারক ও রপ্তানিকারক সমিতি",
    category: "industry-rmg",
    categoryLabel: "National Garment & RMG Apex Body",
    logo: "/images/clients/bgmea.webp",
    description:
      "National apex association of 4,000+ ready-made garment export manufacturers leading green factory transformations and rooftop solar adoption.",
    tag: "RMG APEX",
    sectorBadge: "NATIONAL APEX",
    highlights: ["Green Factory Clean Energy", "Megawatt Rooftop Push", "Global Export ESG"],
  },
  {
    id: "mim-group",
    name: "MIM Group",
    bnName: "মিম গ্রুপ (ইন্ডাস্ট্রিয়াল কনগ্লোমারেট)",
    category: "industry-rmg",
    categoryLabel: "Diversified Industrial Conglomerate",
    logo: "/images/clients/mim-group.webp",
    description:
      "Leading diversified industrial conglomerate with major textile, manufacturing, and heavy production plants requiring continuous factory power.",
    tag: "CONGLOMERATE",
    sectorBadge: "INDUSTRIAL SECTOR",
    highlights: ["Industrial Roof EPC", "Peak Shaving Solar", "3-Year Payback"],
  },
  {
    id: "intal-technology",
    name: "Intal Technology",
    bnName: "ইনটাল টেকনোলজি",
    category: "industry-rmg",
    categoryLabel: "Technology & Industrial Enterprise",
    description:
      "Turnkey 127.4 kWp DC / 100 kW AC Rooftop On-Grid Solar PV system installation, grid-tie synchronization, and commissioning at Nayarhat, Ashulia, Savar.",
    tag: "SOLAR EPC",
    sectorBadge: "ASHULIA / SAVAR",
    highlights: ["127.4 kWp DC / 100 kW AC System", "On-Grid Net-Metering", "Turnkey Testing & Commissioning"],
  },

  // HEALTHCARE & ACADEMIC INSTITUTIONS
  {
    id: "ispahani-hospital",
    name: "Ispahani Islamia Eye Institute & Hospital",
    bnName: "ইস্পাহানী ইসলামিয়া চক্ষু ইনস্টিটিউট ও হাসপাতাল",
    category: "healthcare-academic",
    categoryLabel: "Specialized Tertiary Healthcare Hospital",
    logo: "/images/clients/ispahani-islamia-eye-hospital.webp",
    description:
      "Pioneer specialized non-profit eye healthcare hospital and academic institution with high-demand continuous surgical and diagnostic power setups.",
    tag: "HEALTHCARE",
    sectorBadge: "DHAKA / REGIONAL",
    highlights: ["Critical Healthcare Power", "Solar Rooftop Offset", "Uninterrupted Supply"],
  },
  {
    id: "christian-hospital",
    name: "Christian Memorial Hospital",
    bnName: "খ্রিস্টান মেমোরিয়াল হাসপাতাল, ব্রাহ্মণবাড়িয়া",
    category: "healthcare-academic",
    categoryLabel: "Regional Multi-Specialty Hospital",
    logo: "/images/clients/christian-memorial-hospital.webp",
    description:
      "Well-known regional healthcare facility delivering diagnostic, medical, and intensive surgical care with smart solar hybrid backup.",
    tag: "HEALTHCARE",
    sectorBadge: "BRAHMANBARIA",
    highlights: ["Hospital Hybrid Solar", "Diesel Cost Reductions", "Emergency Power"],
  },
  {
    id: "textile-institute",
    name: "Shahid Kamaruzzaman Textile Institute",
    bnName: "শহীদ কামারুজ্জামান টেক্সটাইল ইনস্টিটিউট, মান্দা",
    category: "healthcare-academic",
    categoryLabel: "Government Engineering Academic Campus",
    logo: "/images/clients/shahid-kamaruzzaman-textile-institute.webp",
    description:
      "Government-funded engineering academic campus featuring academic buildings, student dormitories, and educational technical workshops.",
    tag: "ACADEMIC",
    sectorBadge: "PUBLIC CAMPUS",
    highlights: ["Public Academic Campus", "Educational Solar Plant", "Green Campus Initiative"],
  },
];

export function PartnersClientsClient() {
  const [masterTab, setMasterTab] = useState<MasterTab>("all");
  const [partnerFilter, setPartnerFilter] = useState<string>("all");
  const [clientFilter, setClientFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtered Partners
  const filteredPartners = useMemo(() => {
    return partnersList.filter((p) => {
      const matchesCat = partnerFilter === "all" || p.category === partnerFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        (p.nativeName && p.nativeName.toLowerCase().includes(q)) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [partnerFilter, searchQuery]);

  // Filtered Clients
  const filteredClients = useMemo(() => {
    return clientsList.filter((c) => {
      const matchesCat = clientFilter === "all" || c.category === clientFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesSearch =
        c.name.toLowerCase().includes(q) ||
        c.bnName.toLowerCase().includes(q) ||
        c.categoryLabel.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [clientFilter, searchQuery]);

  const showPartnersSection = masterTab === "all" || masterTab === "partners";
  const showClientsSection = masterTab === "all" || masterTab === "clients";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* 1. HERO SECTION */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/3 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-400/10 blur-[140px] -z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[350px] rounded-full bg-sky-400/[0.05] blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Our Global Partners &amp;{" "}
                <span className="gradient-text-solar">Prestigious Clients</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Clearly segregated into our <strong>International Technology Alliances</strong> (Tier-1 OEM hardware &amp; apex trade bodies) and our <strong>Valued Clients</strong> (defense forces, public sector ministries, telecom giants, and industries).
              </p>

              {/* Key Trust Metrics */}
              <div className="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-4xl mx-auto text-left">
                {/* Metric 1 */}
                <div className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden cursor-default">
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 group-hover:text-amber-800 transition-colors">
                      10<span className="text-amber-500">+</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      <Cpu className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-2.5">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">Global OEM Partners</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">Tier-1 Hardware Alliances</div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden cursor-default">
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 group-hover:text-amber-800 transition-colors">
                      18<span className="text-amber-500">+</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-2.5">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">Premier Clients</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">Defense &amp; Government</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden cursor-default">
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 group-hover:text-amber-800 transition-colors">
                      100<span className="text-amber-500">%</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-2.5">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">Turnkey Basis Delivery</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">100% SREDA Compliant</div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden cursor-default">
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 group-hover:text-amber-800 transition-colors">
                      Tier<span className="text-amber-500">-1</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-2.5 min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug truncate">Tier-1 Hardware</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">25-Year Performance Standard</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. DEDICATED MAIN STRATEGIC PARTNERS & JV SECTION */}
        <section id="strategic-jv-partners" className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our 3 Main Strategic Partners &amp; Joint Ventures (JV)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Key international partnerships powering our high-efficiency solar engineering, supply chain, and turnkey project execution in Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
              {mainStrategicPartners.map((partner) => (
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

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold text-amber-800 bg-amber-100/80 group-hover:bg-amber-500 group-hover:text-slate-950 px-2.5 py-0.5 rounded border border-amber-200 group-hover:border-amber-500 transition-all duration-200">
                        {partner.tag}
                      </span>
                    </div>

                    <div className="h-24 flex items-center justify-center bg-slate-50/70 group-hover:bg-white rounded-2xl p-3 border border-slate-100 group-hover:border-amber-200/70 transition-all duration-300">
                      <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={180}
                          height={60}
                          loading="lazy"
                          decoding="async"
                          className="max-h-16 w-auto object-contain filter drop-shadow-2xs transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                          {partner.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 mt-0.5" />
                      </div>
                      {partner.nativeName && (
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {partner.nativeName}
                        </p>
                      )}
                      <p className="text-xs font-semibold text-amber-700 mt-1">
                        {partner.category}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. MASTER DIRECTORY SEGMENTATION SWITCHER (Static, Non-Sticky) */}
        <section className="py-6 bg-slate-50 border-b border-slate-200/80">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Primary Dual View Toggle */}
              <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setMasterTab("all")}
                  className={cn(
                    "flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-3.5 sm:px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
                    masterTab === "all"
                      ? "bg-amber-500 text-slate-950 shadow-md scale-[1.01]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>View Both Distinctly</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/15 text-slate-950 ml-1">
                    {partnersList.length + clientsList.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setMasterTab("partners")}
                  className={cn(
                    "flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-3.5 sm:px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
                    masterTab === "partners"
                      ? "bg-amber-500 text-slate-950 shadow-md scale-[1.01]"
                      : "text-slate-600 hover:text-amber-900 hover:bg-amber-50/70"
                  )}
                >
                  <Handshake className="w-4 h-4" />
                  <span>Technology Partners</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/10 text-slate-900 ml-1">
                    {partnersList.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setMasterTab("clients")}
                  className={cn(
                    "flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-3.5 sm:px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
                    masterTab === "clients"
                      ? "bg-slate-900 text-white shadow-md scale-[1.01]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Prestigious Clients</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 text-white ml-1">
                    {clientsList.length}
                  </span>
                </button>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search partner or client by name, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-amber-500 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-2xs transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* 3. DEDICATED SECTION 1: TECHNOLOGY PARTNERS & ASSOCIATIONS */}
        {showPartnersSection && (
          <section id="technology-partners" className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80">
            <Container className="space-y-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-amber-200/60 pb-6">
                <div className="space-y-2.5 max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Enterprise Technology Partners &amp; Industry Alliances
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Our digital operations, customer communications, and institutional credentials are supported by leading enterprise technology platforms and national apex trade bodies.
                  </p>
                </div>

                {/* Partner Subcategory Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "all", label: "All Alliances", icon: Sparkles },
                    { id: "enterprise-tech", label: "Cloud & AI Tech", icon: Globe },
                    { id: "associations", label: "Apex Associations", icon: Award },
                  ].map((pTab) => (
                    <button
                      key={pTab.id}
                      onClick={() => setPartnerFilter(pTab.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                        partnerFilter === pTab.id
                          ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-900"
                      )}
                    >
                      <pTab.icon className="w-3 h-3" />
                      <span>{pTab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Partners Grid */}
              {filteredPartners.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-sm">
                  No partners match your search criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
                  {filteredPartners.map((partner) => (
                    <div
                      key={partner.id}
                      className="group relative rounded-3xl p-6 sm:p-7 bg-amber-50/20 border border-amber-200/80 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.20),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default"
                    >
                      {/* Top Golden Shimmer Line */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-900 bg-amber-200/80 group-hover:bg-amber-500 group-hover:text-slate-950 px-2.5 py-0.5 rounded border border-amber-300 transition-all duration-200">
                          {partner.tag}
                        </span>

                        <span className="text-[11px] font-mono text-amber-800/80 font-bold">
                          {partner.roleOrId}
                        </span>
                      </div>

                      {/* Logo Stage */}
                      <div className="relative z-10 flex items-center justify-center h-28 sm:h-32 px-4 py-2 bg-white rounded-2xl border border-amber-100 group-hover:border-amber-300 transition-all duration-300 shadow-2xs">
                        <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                          {partner.logo ? (
                            <Image
                              src={partner.logo}
                              alt={`${partner.name} Logo`}
                              width={190}
                              height={90}
                              loading="lazy"
                              decoding="async"
                              className="max-h-20 w-auto max-w-[180px] object-contain drop-shadow-2xs filter transition-all duration-300"
                            />
                          ) : (
                            <div className="flex items-center gap-2.5 text-slate-800 group-hover:text-amber-800 font-extrabold text-base tracking-wider transition-colors">
                              <Cpu className="w-5 h-5 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
                              <span>{partner.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="relative z-10 space-y-2 pt-1 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                              {partner.name}
                            </h3>
                            <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 mt-0.5" />
                          </div>

                          {partner.nativeName && (
                            <div className="text-xs text-amber-800 font-medium line-clamp-1 mt-0.5">
                              {partner.nativeName}
                            </div>
                          )}

                          <div className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-700 mt-1">
                            {partner.categoryLabel}
                          </div>

                          <p className="text-xs sm:text-[13px] text-slate-600 group-hover:text-slate-700 leading-relaxed pt-2">
                            {partner.description}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="pt-3 border-t border-amber-100 flex flex-wrap gap-1.5">
                          {partner.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-amber-200 text-amber-900"
                            >
                              <CheckCircle2 className="w-3 h-3 text-amber-600" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Container>
          </section>
        )}

        {/* 4. DEDICATED SECTION 2: PRESTIGIOUS CLIENTS & REFERENCES */}
        {showClientsSection && (
          <section id="prestigious-clients" className="py-14 sm:py-18 bg-[#F8FAFC]">
            <Container className="space-y-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-slate-200/90 pb-6">
                <div className="space-y-2.5 max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Trusted by Defense, Ministries &amp; Industrial Leaders
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Reflecting the extensive corporate engineering pedigree of Net Bangla Group — delivering turnkey renewable energy systems, mission-critical electrical installations, and nationwide infrastructure for premier defense, public, and industrial leaders across Bangladesh.
                  </p>
                </div>

                {/* Client Subcategory Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "all", label: "All Clients", icon: Sparkles },
                    { id: "defense-armed", label: "Defense & Army", icon: ShieldCheck },
                    { id: "govt-public", label: "Govt & Climate", icon: Landmark },
                    { id: "telecom-energy", label: "Telecom & Grid", icon: Radio },
                    { id: "industry-rmg", label: "Industrial & RMG", icon: Factory },
                    { id: "healthcare-academic", label: "Health & Academic", icon: GraduationCap },
                  ].map((cTab) => (
                    <button
                      key={cTab.id}
                      onClick={() => setClientFilter(cTab.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                        clientFilter === cTab.id
                          ? "bg-slate-900 text-white font-bold shadow-xs"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      <cTab.icon className="w-3 h-3 text-amber-500" />
                      <span>{cTab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clients Grid */}
              {filteredClients.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-sm">
                  No clients match your search criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
                  {filteredClients.map((client) => (
                    <div
                      key={client.id}
                      className="group relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-slate-800 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(15,23,42,0.18),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default"
                    >
                      {/* Top Dark Shimmer Line */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-800 bg-slate-100 group-hover:bg-slate-900 group-hover:text-amber-400 px-2.5 py-0.5 rounded border border-slate-200 group-hover:border-slate-900 transition-all duration-200">
                          {client.tag}
                        </span>

                        <span className="text-[11px] font-mono text-slate-500 font-bold">
                          {client.sectorBadge}
                        </span>
                      </div>

                      {/* Logo Stage */}
                      <div className="relative z-10 flex items-center justify-center h-28 sm:h-32 px-4 py-2 bg-slate-50/70 group-hover:bg-white rounded-2xl border border-slate-100 group-hover:border-slate-300 transition-all duration-300 shadow-2xs">
                        <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                          {client.logo ? (
                            <Image
                              src={client.logo}
                              alt={`${client.name} Logo`}
                              width={190}
                              height={90}
                              loading="lazy"
                              decoding="async"
                              className="max-h-20 w-auto max-w-[180px] object-contain drop-shadow-2xs filter transition-all duration-300"
                            />
                          ) : (
                            <div className="flex items-center gap-2.5 text-slate-800 font-extrabold text-base tracking-wider">
                              <Building2 className="w-5 h-5 text-slate-700" />
                              <span>{client.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="relative z-10 space-y-2 pt-1 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-snug">
                              {client.name}
                            </h3>
                            <ArrowUpRight className="w-4 h-4 text-slate-700 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 mt-0.5" />
                          </div>

                          {client.bnName && (
                            <div className="text-xs text-amber-800 font-medium line-clamp-1 mt-0.5">
                              {client.bnName}
                            </div>
                          )}

                          <div className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-700 mt-1">
                            {client.categoryLabel}
                          </div>

                          <p className="text-xs sm:text-[13px] text-slate-600 group-hover:text-slate-700 leading-relaxed pt-2">
                            {client.description}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {client.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Container>
          </section>
        )}

        {/* 5. STRATEGIC GOVERNANCE & VALUE STATEMENT */}
        <section className="py-14 sm:py-18 bg-white border-t border-slate-200/80">
          <Container>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Why Our Ecosystem Protects Your Capital
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Net Bangla Limited combines international technology alliances with deep local regulatory execution to eliminate all engineering, financial, and compliance risks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3">
                {/* Card 1 */}
                <div className="group relative p-7 sm:p-8 rounded-3xl bg-white hover:bg-gradient-to-b hover:from-amber-50/40 hover:to-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default">
                  {/* Top Golden Shimmer Line */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Subtle Inner Ambient Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-amber-400/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Ambient Orb */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/25 transition-colors duration-300"
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-600 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.45)] transition-all duration-300 ease-out shadow-2xs">
                        <Globe className="h-6 w-6 transition-transform duration-300" />
                      </div>
                      <span className="text-[10.5px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        DIRECT OEM
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                          Direct OEM Procurement
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 group-hover:text-slate-700 leading-relaxed">
                        Zero gray-market risk. All photovoltaic modules and inverters are sourced directly from verified Tier-1 manufacturers with 25-year performance warranties.
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                    <span>100% Verified Tier-1</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative p-7 sm:p-8 rounded-3xl bg-white hover:bg-gradient-to-b hover:from-amber-50/40 hover:to-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default">
                  {/* Top Golden Shimmer Line */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Subtle Inner Ambient Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-amber-400/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Ambient Orb */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/25 transition-colors duration-300"
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-600 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.45)] transition-all duration-300 ease-out shadow-2xs">
                        <Landmark className="h-6 w-6 transition-transform duration-300" />
                      </div>
                      <span className="text-[10.5px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        NATIONAL COMPLIANCE
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                          SREDA &amp; Defense Enlistment
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 group-hover:text-slate-700 leading-relaxed">
                        Full compliance with BPDB, BREB, DPDC, DESCO, WZPDCL, and NESCO net-metering regulations, backed by institutional defense trust (Army, Navy Dockyard, MES, BMTF).
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                    <span>SREDA Net-Metered</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative p-7 sm:p-8 rounded-3xl bg-white hover:bg-gradient-to-b hover:from-amber-50/40 hover:to-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left space-y-5 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.22),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-default">
                  {/* Top Golden Shimmer Line */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Subtle Inner Ambient Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-amber-400/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Ambient Orb */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/25 transition-colors duration-300"
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-600 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.45)] transition-all duration-300 ease-out shadow-2xs">
                        <Award className="h-6 w-6 transition-transform duration-300" />
                      </div>
                      <span className="text-[10.5px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        APEX GOVERNANCE
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                          Corporate &amp; SLA Governance
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 group-hover:text-slate-700 leading-relaxed">
                        Corporate stability since May 2014 backed by proven engineering delivery, ensuring stringent SLA commitments and long-term lifecycle support.
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                    <span>Est. May 28, 2014</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. BOTTOM ACTION CTA */}
        <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-950 -z-10"
          />

          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Sparkles className="w-4 h-4" />
                <span>JOIN OUR TRUSTED CLEAN ENERGY ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Partner with Bangladesh&apos;s Leading Solar EPC?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with the Technical team for an on-site structural audit, 3D shading simulation, single-line diagram, and turnkey financial proposal.
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
                  className="py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold transition-all flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>Instant Solar ROI Calculator</span>
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

export default PartnersClientsClient;
