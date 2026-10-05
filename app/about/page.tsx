import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Users,
  Target,
  Compass,
  FileText,
  Leaf,
  CheckCircle2,
  HardHat,
  Cpu,
  Layers,
  Globe2,
  Sun,
  Landmark,
  FileCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us | Net Bangla Limited - Solar Energy & EPC Division",
  description:
    "Corporate overview, mission, vision, international technology partners, affiliations, and sustainability policy of Net Bangla Solar. Delivering high-yield turnkey solar EPC engineering across Bangladesh.",
};

// 3 Main Strategic Partners
const mainStrategicPartners = [
  {
    id: "cmc",
    name: "China National Machinery Imp. & Exp. Corp. (CMC)",
    nativeName: "中国机械进出口 (集团) 有限公司",
    category: "Strategic Partner — Heavy EPC & Infrastructure",
    description:
      "Strategic partnership in major renewable energy and IT infrastructure projects in Bangladesh, advancing technological development and energy security.",
    logo: "/images/partners/china-national-machinery-cmc.png",
    tag: "POWER & EPC",
  },
  {
    id: "huachuang",
    name: "Huachuang Guojing (Hebei) New Energy Co. Ltd.",
    nativeName: "华创国晶 (河北) 新能源",
    category: "Authorized Distributor & Equipment Partner",
    description:
      "Leading manufacturer of high-efficiency monocrystalline solar panels and advanced inverters, delivering precision engineering and long-term durability.",
    logo: "/images/partners/huachuang-guojing.png",
    tag: "AUTHORIZED OEM",
  },
  {
    id: "wincle",
    name: "Wincle Energy Pte. Ltd.",
    nativeName: "赢科数能 (Wenergy)",
    category: "Strategic Partner — Battery Energy Storage Systems (BESS)",
    description:
      "Global Tier-1 energy storage pioneer delivering smart liquid-cooled C&I BESS (Stars Series 215–385 kWh) and 4-in-1 Solar-BESS-Diesel-EV integrated systems certified to UL9540A & IEC standards.",
    logo: "/images/partners/wincle-energy.png",
    tag: "BESS & STORAGE",
  },
];

// Affiliations & Partners (6 Key Entities)
const affiliationsList = [
  {
    id: "basis",
    name: "BASIS",
    fullName: "Bangladesh Association of Software & Information Services",
    identifier: "General Member (A-405)",
    role: "National Apex ICT Trade Body",
    logo: "/images/partners/basis.png",
    tag: "APEX MEMBER",
  },
  {
    id: "bacco",
    name: "BACCO",
    fullName: "Bangladesh Association of Contact Center & Outsourcing",
    identifier: "Member ID: 2018.0082.1000.0062",
    role: "National Contact Center & BPO Association",
    logo: "/images/partners/bacco.png",
    tag: "APEX MEMBER",
  },
  {
    id: "itkall",
    name: "ITKALL",
    fullName: "ITKALL Technology & Telecom Infrastructure",
    identifier: "IT & Telecom Technology Partner",
    role: "Enterprise Systems & Telecom Solutions",
    tag: "IT & TELECOM",
  },
  {
    id: "wincle",
    name: "Wincle Energy",
    fullName: "Wincle Energy Pte. Ltd. (赢科数能)",
    identifier: "Strategic Energy Storage Partner",
    role: "Tier-1 Liquid-Cooled C&I BESS & Microgrid Storage",
    logo: "/images/partners/wincle-energy.png",
    tag: "BESS & STORAGE",
  },
  {
    id: "cmc",
    name: "CMC",
    fullName: "China National Machinery Import & Export Corporation",
    identifier: "Strategic Infrastructure Partner (China)",
    role: "Renewable Energy & Power Engineering EPC",
    logo: "/images/partners/china-national-machinery-cmc.png",
    tag: "GLOBAL EPC",
  },
  {
    id: "huachuang",
    name: "Huachuang Guojing",
    fullName: "Huachuang Guojing (Hebei) New Energy Co. Ltd.",
    identifier: "Authorized Distributor & Dealer (China)",
    role: "Tier-1 Photovoltaic Modules & Inverters",
    logo: "/images/partners/huachuang-guojing.png",
    tag: "SOLAR OEM",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        {/* 1. HERO SECTION (Precise, Informational, No CTAs) */}
        <section className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[350px] rounded-full bg-amber-500/10 blur-[100px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <span>ESTABLISHED MAY 28, 2014 &bull; NET BANGLA LIMITED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About Net Bangla Limited
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Net Bangla Limited operates a dedicated Solar Energy &amp; EPC division based in Dhaka.
                We provide turnkey consulting, engineering, procurement, construction, and commissioning
                of high-yield photovoltaic systems across commercial, industrial, agricultural, and residential sectors in Bangladesh.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. COMPANY OVERVIEW & PARTICULARS */}
        <section className="py-14 sm:py-18">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Company Particulars Card (from Page 3 of PDF) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.18),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 space-y-5 text-left overflow-hidden">
                  {/* Top Golden Shimmer Line */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 relative z-10">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                      Company Particulars
                    </h2>
                  </div>

                  <dl className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2.5 border-b border-slate-200/60">
                      <dt className="text-slate-500 font-medium">Company Name</dt>
                      <dd className="font-bold text-slate-900 text-left sm:text-right">Net Bangla Limited</dd>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2.5 border-b border-slate-200/60">
                      <dt className="text-slate-500 font-medium">Corporate Set-up</dt>
                      <dd className="font-semibold text-slate-800 text-left sm:text-right">Private Limited Company (RJSC)</dd>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2.5 border-b border-slate-200/60">
                      <dt className="text-slate-500 font-medium">Date of Incorporation</dt>
                      <dd className="font-semibold text-slate-800 text-left sm:text-right">28th Day of May 2014</dd>
                    </div>

                    <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-200/60">
                      <dt className="text-slate-500 font-medium">Office Address</dt>
                      <dd className="font-semibold text-slate-800 leading-snug">
                        Level # 02 &amp; 03, House # 07, Road # 11, Block # L, Sector # 03, Aftabnagar, Dhaka-1212
                      </dd>
                    </div>

                    <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-200/60">
                      <dt className="text-slate-500 font-medium">Registered Office</dt>
                      <dd className="font-semibold text-slate-800 leading-snug">
                        Plot # 31, Road # 17, Level # 08, Park Plaza, Banani C/A, Dhaka-1213
                      </dd>
                    </div>

                    <div className="flex flex-col gap-1 pb-2.5 border-b border-slate-200/60">
                      <dt className="text-slate-500 font-medium">Bankers</dt>
                      <dd className="font-semibold text-slate-800 leading-snug">
                        Trust Bank PLC &bull; BRAC Bank PLC &bull; Global Islami Bank PLC
                      </dd>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <dt className="text-slate-500 font-medium">Managing Director / CEO</dt>
                      <dd className="font-bold text-amber-700 text-left sm:text-right">Engr. Md. Mamunur Rahman</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Right Column: Company Description & Operational Focus */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>COMPANY PROFILE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Engineering Bankable Solar Power Systems for Bangladesh
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Net Bangla Limited was founded with a clear vision to contribute to a carbon-free environment and deliver clean, reliable electricity across Bangladesh. Through our dedicated solar energy division, we offer turnkey solutions designed to meet specific energy needs and local site conditions.
                  </p>
                  <p>
                    As a competitive Solar EPC company in Bangladesh, we deliver Consulting, Engineering, Contracting, and Commissioning services on a turnkey basis. We specialize in Commercial &amp; Industrial (C&amp;I) rooftop solar, integrated in-roof solar panels (BIPV), ground-mounted open access systems, solar car parks, and hybrid micro-grid storage solutions.
                  </p>
                </div>

                {/* Core Competencies Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Turnkey EPC &amp; SREDA Compliance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Integrated BIPV Solar Roofing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tier-1 Modules &amp; Certified Inverters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Lifecycle O&amp;M &amp; Re-Commissioning</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. MISSION & VISION (Modern Bento Grid Layout) */}
        <section className="relative py-14 sm:py-20 bg-slate-50/80 border-y border-slate-200/80 overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-amber-400/[0.06] blur-[120px] -z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-emerald-400/[0.06] blur-[120px] -z-10"
          />

          <Container>
            {/* Section Header with Styled Badge */}
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>PURPOSE &amp; GOALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Core Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Guiding principles that define our commitment to sustainability, uncompromised quality, and national clean energy excellence.
              </p>
            </div>

            {/* Asymmetrical 3-Column Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch max-w-6xl mx-auto text-left">
              {/* BENTO CELL 1: MISSION CARD (Solar / Amber Tinted Glassmorphism) */}
              <div className="lg:col-span-4 md:col-span-1 relative overflow-hidden rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-amber-500/[0.08] via-amber-500/[0.03] to-white/95 backdrop-blur-md border border-amber-500/25 shadow-lg shadow-amber-500/5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group">
                {/* Ambient Internal Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-amber-400/20 blur-2xl"
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Bar: Glowing Icon + Kicker Tag */}
                  <div className="flex items-center justify-between">
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-700 shadow-[0_0_24px_rgba(245,158,11,0.22)] group-hover:scale-105 transition-transform">
                      <Target className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-amber-800 uppercase bg-amber-100/90 border border-amber-200/80 px-2.5 py-1 rounded-full">
                      CORE MISSION
                    </span>
                  </div>

                  {/* Heading & Text */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-amber-900 transition-colors">
                      Our Mission
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Our core philosophy is rooted in sustainability and uncompromising quality. We are committed to delivering the highest quality solar products and solutions to our customers across Bangladesh, ensuring long-term performance, environmental responsibility, and customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* Bottom Micro-Pillars */}
                <div className="pt-6 mt-4 border-t border-amber-200/60 flex flex-wrap gap-2 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Uncompromising Quality</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Environmental Value</span>
                  </span>
                </div>
              </div>

              {/* BENTO CELL 2: VISION CARD (Emerald / Green Tinted Glassmorphism) */}
              <div className="lg:col-span-4 md:col-span-1 relative overflow-hidden rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-emerald-500/[0.08] via-emerald-500/[0.03] to-white/95 backdrop-blur-md border border-emerald-500/25 shadow-lg shadow-emerald-500/5 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between group">
                {/* Ambient Internal Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-400/20 blur-2xl"
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Bar: Glowing Icon + Kicker Tag */}
                  <div className="flex items-center justify-between">
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 shadow-[0_0_24px_rgba(16,185,129,0.22)] group-hover:scale-105 transition-transform">
                      <Compass className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                      STRATEGIC VISION
                    </span>
                  </div>

                  {/* Heading & Text */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-900 transition-colors">
                      Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      We aim to provide a one-stop solution for clean energy through high-quality solar products and engineered solutions tailored to the needs of Bangladesh. Our vision is to lead the renewable energy industry by setting benchmarks in reliability, innovation, and customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* Bottom Micro-Pillars */}
                <div className="pt-6 mt-4 border-t border-emerald-200/60 flex flex-wrap gap-2 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>One-Stop Solutions</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Industry Benchmark</span>
                  </span>
                </div>
              </div>

              {/* BENTO CELL 3: LARGE IMAGERY & BRAND STATEMENT CARD */}
              <div className="lg:col-span-4 md:col-span-2 relative min-h-[320px] sm:min-h-[360px] lg:min-h-[auto] rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg group flex flex-col justify-between p-7 sm:p-8">
                {/* Background Image */}
                <Image
                  src="/images/solar-powered-campus-at-sunset.jpg"
                  alt="Modern Solar Energy Facility in Bangladesh"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30" />

                {/* Top Glass Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-semibold uppercase tracking-wider">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GREEN BANGLADESH</span>
                  </div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="relative z-10 space-y-2 pt-12">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    Limitless Renewable Energy
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    Energize Bangladesh with Sustainable Solar
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Setting highest engineering standards in utility and commercial photovoltaic power systems.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. THREE MAIN STRATEGIC PARTNERS (New Dedicated Section) */}
        <section className="py-14 sm:py-18">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase">
                <span>STRATEGIC GLOBAL ALLIANCES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our 3 Main Strategic Partners
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

        {/* 5. AFFILIATIONS & PARTNERS (Includes BASIS, BACCO, ITKALL, Wincle Energy, CMC, Huachuang Guojing) */}
        <section className="py-14 sm:py-18 bg-slate-50 border-y border-slate-200/80">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold tracking-wider uppercase">
                <Globe2 className="w-3.5 h-3.5 text-slate-700" />
                <span>AFFILIATIONS &amp; PARTNERS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Affiliations &amp; Industry Alliances
              </h2>
            </div>

            {/* Experience Statement Box (Hidden per user feedback; mismatched solar niche) */}
            {/* 
            <div className="max-w-3xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-center shadow-xs">
              <p className="text-sm sm:text-base font-bold text-amber-950">
                &ldquo;All our experiences are IT-related and Bangladesh-focused.&rdquo;
              </p>
            </div> 
            */}

            {/* 6 Entities Grid: BASIS, BACCO, ITKALL, Wincle Energy, CMC, Huachuang Guojing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto text-left">
              {affiliationsList.map((item) => (
                <div
                  key={item.id}
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
                        {item.tag}
                      </span>
                    </div>

                    {/* Logo Showcase Stage with Zoom Hover */}
                    <div className="h-20 sm:h-24 flex items-center justify-center bg-slate-50/70 group-hover:bg-white rounded-2xl p-3 border border-slate-100 group-hover:border-amber-200/70 transition-all duration-300">
                      <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={160}
                            height={60}
                            className="max-h-14 w-auto object-contain filter drop-shadow-2xs transition-all duration-300"
                          />
                        ) : (
                          <div className="flex items-center gap-2.5 text-slate-800 group-hover:text-amber-800 font-extrabold text-lg tracking-wider transition-colors">
                            <Cpu className="w-5 h-5 text-amber-600 group-hover:rotate-12 transition-transform duration-300" />
                            <span>{item.name}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.fullName}
                      </p>
                    </div>

                    <div className="text-xs font-semibold text-amber-900 bg-amber-50/80 group-hover:bg-amber-100/90 group-hover:border-amber-300/80 p-2.5 rounded-xl border border-amber-200/60 transition-all duration-200">
                      {item.identifier}
                    </div>

                    <p className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. ENVIRONMENTAL & SAFETY POLICY (Short Summary) */}
        <section className="py-14 sm:py-18">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold tracking-wider uppercase">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>STANDARDS &amp; COMPLIANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Health, Safety &amp; Environmental Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A concise summary of our operational quality, occupational health and safety protocols, and environmental sustainability standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
              {/* Health & Safety Policy Card */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.18),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden space-y-4">
                {/* Top Golden Shimmer Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-2xs">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                      Health &amp; Safety Policy
                    </h3>
                    <p className="text-xs text-slate-500">Zero-Accident Workplace Standard</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 relative z-10">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Identifying site hazards and enforcing preventive risk management protocols.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Providing and maintaining certified machinery, tools, and safe working conditions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Recruiting competent engineers and conducting continuous safety refresher training.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Maintaining accident-free and occupational illness-free project sites.</span>
                  </li>
                </ul>
              </div>

              {/* Environmental Policy & MFCA Card */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-emerald-400 transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.18),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden space-y-4">
                {/* Top Green Shimmer Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-2xs">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      Environmental Policy &amp; MFCA
                    </h3>
                    <p className="text-xs text-slate-500">Resource Optimization &amp; Sustainability</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 relative z-10">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Integrating environmental impact assessment into project planning and engineering design.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Implementing energy-efficient practices, sustainable materials, and waste recycling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Collaborating with suppliers to ensure environmentally responsible execution.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Executing <strong>Material Flow Cost Accounting (MFCA)</strong> to eliminate material losses and enhance operational efficiency.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. PDF EMBED SECTION (Official Company Profile <iframe>) */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase">
                <span>DOCUMENTATION &amp; PROFILE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Official Company Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Review the official Net Bangla Limited 2026 Company Profile detailing our engineering background, turnkey solar solutions, partner network, and technical capabilities.
              </p>
            </div>

            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white">
              {/* Document Top Bar */}
              <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 font-medium">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="font-bold">Net Bangla Limited &mdash; Official Business Profile (Solar) 2026</span>
                </div>
                <span className="text-slate-400 text-xs font-mono hidden sm:inline">20 Pages &bull; PDF</span>
              </div>

              {/* Responsive <iframe> Container */}
              <div className="w-full bg-slate-100 relative">
                <iframe
                  src="/company-profile.pdf"
                  className="w-full min-h-[600px] sm:min-h-[750px] lg:min-h-[850px] rounded-b-2xl border-0 shadow-lg"
                  title="Official Company Profile PDF - Net Bangla Limited"
                />
              </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
