"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sun,
  ShieldCheck,
  Zap,
  Calculator,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  FileQuestion,
  CheckCircle2,
  Sparkles,
  Download,
  ExternalLink,
  FileText,
  Landmark,
  BookOpen,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  category: "net-metering" | "technical" | "financial" | "industrial" | "maintenance" | "floating";
  categoryLabel: string;
  question: string;
  answer: string;
}

const allFaqs: FAQItem[] = [
  // A. Net Metering & SREDA
  {
    id: "net-metering-how-it-works",
    category: "net-metering",
    categoryLabel: "Net Metering & SREDA",
    question: "How does Net Metering work in Bangladesh under the utilities agencies-BPDB, DESCO, DPDC, WZPDCL and BREB?",
    answer: "In a grid-connected rooftop solar system supplies electricity to the facility first. When solar generation exceeds the facility’s consumption, eligible surplus electricity can be exported to the utility grid through an approved grid-connected system and bi-directional meter. Imported and exported energy are accounted for under the applicable Bangladesh Net Metering Guidelines. Billing credits and settlement follow the prevailing rules and utility procedures.",
  },
  {
    id: "net-metering-approvals",
    category: "net-metering",
    categoryLabel: "Net Metering & SREDA",
    question: "Does Net Bangla Solar Division assist in government approvals and SREDA documentation?",
    answer: "Net Bangla Solar Division will support the technical requirements and approval process, subject to the agreed project scope. Services may include site assessment, single-line diagram (SLD) preparation, equipment documentation, structural assessment, utility application support, inspection coordination, testing and bi-directional meter commissioning. Final approvals are issued by the relevant authorities and distribution utility.",
  },
  {
    id: "net-metering-eligibility",
    category: "net-metering",
    categoryLabel: "Net Metering & SREDA",
    question: "What is the maximum solar capacity allowed under net metering?",
    answer: "Permitted capacity depends on the applicable 2025 guideline, the consumer’s sanctioned load, transformer capacity, system configuration and the relevant utility’s approval. Net Bangla Solar Division assesses these parameters before finalizing the proposed system capacity. The applicable limit should be verified for each project rather than assumed for individual case.",
  },

  // B. Technical & Hardware
  {
    id: "monocrystalline-vs-bifacial",
    category: "technical",
    categoryLabel: "Technical & Hardware",
    question: "Why does Net Bangla Solar Division recommend N-Type bifacial solar panels?",
    answer: "N-Type bifacial modules can generate electricity from both the front and rear surfaces. Their additional energy yield depends on reflected sunlight, mounting height, surface reflectivity, shading and installation geometry. Module selection considers efficiency, temperature behaviour, degradation characteristics, certifications, manufacturer warranty and lifecycle performance.",
  },
  {
    id: "cyclone-wind-resilience",
    category: "technical",
    categoryLabel: "Technical & Hardware",
    question: "Can solar mounting structures withstand severe cyclones and coastal winds?",
    answer: "Mounting structures are designed according to site conditions, roof construction, applicable wind-load requirements and the selected mounting system. Structural assessment considers wind turbulent forces, fasteners, corrosion protection, roof capacity and connection details. Coastal projects require particular attention to corrosion resistance and site-specific wind loading.",
  },
  {
    id: "grid-tied-vs-hybrid",
    category: "technical",
    categoryLabel: "Technical & Hardware",
    question: "What is the difference between on-grid, off-grid and hybrid solar systems?",
    answer: "On-grid: Connected to the utility grid; normally shuts down during a grid outage unless specifically designed with approved backup functionality.\n\nOff-grid: Operates independently of the utility grid, typically with battery storage or another reliable energy source.\n\nHybrid: Combines solar generation, grid connection and battery storage, with backup capability depending on the inverter and system design.",
  },
  {
    id: "rainy-cloudy-performance",
    category: "technical",
    categoryLabel: "Technical & Hardware",
    question: "How does solar perform during monsoon and cloudy winter days?",
    answer: "Solar panels generate electricity from daylight even when direct sunshine is limited. However, heavy cloud, rain, shading, temperature, orientation and seasonal solar irradiation affect output. Net Bangla Solar Division uses site-specific energy modelling to estimate monthly and annual generation rather than promising a fixed percentage of rated output on cloudy days.",
  },

  // C. Financial & Return on Investment
  {
    id: "payback-period-calculation",
    category: "financial",
    categoryLabel: "Financial & ROI",
    question: "What is the typical CAPEX payback period for an industrial or commercial solar plant?",
    answer: "Payback depends on installed cost, daytime consumption, electricity tariff, annual solar generation, export-credit treatment, financing costs, maintenance and future tariff changes. Some projects may achieve payback within approximately 3–4 years, but this should be confirmed through a project-specific financial model. Net Bangla Solar Division can prepare an estimated payback period and life-long cost analysis for the proposed installation.",
  },
  {
    id: "bank-financing-idcol",
    category: "financial",
    categoryLabel: "Financial & ROI",
    question: "Are bank loans or low-interest green financing options available?",
    answer: "Potential financing routes include IDCOL, PKSF and BIFFL rooftop solar financing, eligible Bangladesh Bank-linked green-finance facilities, commercial bank loans and third-party OPEX/RESCO investment. Availability, interest rates, loan tenure, collateral, equity contribution and eligibility depend on the applicable scheme and lender approval. IDCOL, PKSF and BIFFL supports both CAPEX and RESCO/OPEX rooftop solar models.",
  },
  {
    id: "turnkey-epc-cost",
    category: "financial",
    categoryLabel: "Financial & ROI",
    question: "What is included in turnkey solar EPC pricing?",
    answer: "Depending on the approved scope, turnkey engineering, procurement and construction (EPC) may include: site survey, energy assessment and feasibility study; structural evaluation and mounting design; solar modules, inverters and mounting structures; DC/AC cables, connectors, switchgear and protection; earthing, lightning protection and required safety systems; monitoring equipment and communications; installation, testing and commissioning; SLDs, technical documentation and utility coordination; net-metering application support, where applicable; and handover documentation, warranties and agreed O&M services. The final quotation identifies inclusions, exclusions, taxes, civil works, utility charges and any additional equipment.",
  },

  // D. Industrial & Commercial Installation
  {
    id: "factory-downtime-installation",
    category: "industrial",
    categoryLabel: "Industrial & Commercial",
    question: "Will solar installation disrupt factory production?",
    answer: "Net Bangla Solar Division plans installation to minimize disruption to factory operations. Roof works, cable routing, equipment installation and electrical interconnection are scheduled in coordination with the facility team. Any shutdown required for safe grid interconnection is agreed in advance; zero downtime cannot be guaranteed for every site.",
  },
  {
    id: "tin-shed-integrity-leakage",
    category: "industrial",
    categoryLabel: "Industrial & Commercial",
    question: "Will installing solar panels on a factory metal roof cause water leakage?",
    answer: "The mounting method is selected according to the roof profile, material, condition and structural design. Suitable standing-seam roofs may allow non-penetrating clamps, while corrugated roofs may require engineered fasteners and weather-sealing systems. Existing roof defects, drainage and waterproofing are assessed before installation, and the agreed workmanship warranty should clearly state its coverage and exclusions.",
  },

  // E. Maintenance & Warranty
  {
    id: "cleaning-and-maintenance",
    category: "maintenance",
    categoryLabel: "Maintenance & Warranty",
    question: "How often do solar panels need cleaning in Bangladesh?",
    answer: "Cleaning frequency depends on dust, rainfall, nearby industrial emissions, bird activity, panel tilt and measured soiling losses. Periodic inspection and generation monitoring help determine the appropriate schedule. Net Bangla Solar Division can provide manual, water-based or suitable automated cleaning options under an agreed O&M arrangement.",
  },
  {
    id: "warranty-coverage-breakdown",
    category: "maintenance",
    categoryLabel: "Maintenance & Warranty",
    question: "What warranties are provided with a solar power plant?",
    answer: "Warranty terms depend on the selected equipment and the signed project contract. The following are indicative offerings for confirmation against the actual products and supplier agreements:\n\n• Solar PV modules: Up to 25-year linear performance warranty and 15-year product warranty, where offered by the manufacturer.\n• Solar inverters: 5-year manufacturer warranty, subject to model and extension options.\n• Mounting structures: Project-specific structural warranty, with design life distinguished from warranty duration.\n• Battery storage: 5-year manufacturer warranty based on the selected product and operating conditions.\n• Operations & Maintenance (O&M): Service for the contracted period, potentially up to five years or longer if agreed.\n• Installation workmanship: Rectification under the agreed defects-liability and workmanship warranty.",
  },

  // F. Floating Solar (FPV)
  {
    id: "floating-solar-efficiency-boost",
    category: "floating",
    categoryLabel: "Floating Solar (FPV)",
    question: "Can floating solar achieve energy higher generation than ground-mounted systems?",
    answer: "Floating photovoltaic systems may benefit from lower module temperatures and reduced land requirements. The energy-yield advantage varies with climate, waterbody conditions, system design and the ground-mounted system used for comparison. A site-specific energy assessment should establish the expected generation benefit rather than assume a universal 10–15% increase.",
  },
  {
    id: "floating-solar-textile-factory-ponds",
    category: "floating",
    categoryLabel: "Floating Solar (FPV)",
    question: "Can textile and RMG factories install floating solar on firefighting ponds?",
    answer: "Floating solar may be feasible on suitable industrial reservoirs and retention ponds, subject to structural and waterbody assessments, firefighting requirements, access, environmental considerations and regulatory approvals. Any installation must preserve required emergency water capacity, firefighting access and operational safety. ETP basins require additional review of water chemistry and environmental conditions.",
  },
  {
    id: "floating-solar-storm-anchoring",
    category: "floating",
    categoryLabel: "Floating Solar (FPV)",
    question: "How are floating solar arrays protected against monsoons, water-level changes and cyclones?",
    answer: "Floating solar designs may use UV-resistant floats, corrosion-resistant connectors, engineered anchoring and mooring systems, and flexible arrangements for changing water levels. Design loads must be determined for the specific site, including wind, waves, water-level variation, current, anchoring conditions and applicable local requirements. No universal wind-speed or water-level rating should be advised without project-specific design evidence.",
  },
];

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "net-metering", label: "Net Metering & SREDA" },
  { id: "technical", label: "Technical & Hardware" },
  { id: "financial", label: "Financial & Return on Investment" },
  { id: "industrial", label: "Industrial & Commercial Installation" },
  { id: "maintenance", label: "Maintenance & Warranty" },
  { id: "floating", label: "Floating Solar (FPV)" },
];

interface GovPolicyDoc {
  id: string;
  badge: string;
  titleBn: string;
  titleEn: string;
  description: string;
  authority: string;
  fileSize?: string;
  pdfUrl?: string;
  externalUrl: string;
  isPortal?: boolean;
}

const governmentPolicies: GovPolicyDoc[] = [
  {
    id: "national-rooftop-portal",
    badge: "Official Gov Portal",
    titleBn: "জাতীয় রুফটপ সোলার কর্মসূচি (অফিসিয়াল পোর্টাল)",
    titleEn: "National Rooftop Solar Program — Official Government Hub",
    description:
      "Comprehensive national portal from the Ministry of Power, Energy & Mineral Resources containing all gazettes, directives, circulars, and rooftop solar incentives in Bangladesh.",
    authority: "Power Division, Government of Bangladesh",
    externalUrl: "https://powerdivision.gov.bd/pages/static-pages/694032be35ce18e1c0561a07",
    isPortal: true,
  },
  {
    id: "special-incentives-gazette",
    badge: "Official Gazette",
    titleBn: "রুফটপ সৌরবিদ্যুৎ স্থাপনে বিশেষ প্রণোদনা সংক্রান্ত প্রজ্ঞাপন",
    titleEn: "Official Gazette on Special Incentives for Rooftop Solar Systems",
    description:
      "Statutory government notification detailing official regulatory facilitation, tax and import duty exemptions, and financial incentives for industrial and commercial rooftop solar adoption.",
    authority: "Ministry of Power, Energy & Mineral Resources",
    fileSize: "93 KB",
    pdfUrl: "/documents/rooftop-solar-incentives-gazette.pdf",
    externalUrl: "https://powerdivision.gov.bd/pages/files/6aaa609b5e7e1c3a8aba06b3",
  },
  {
    id: "renewable-energy-strategy",
    badge: "National Strategy",
    titleBn: "জাতীয় নবায়নযোগ্য জ্বালানি উন্নয়ন কৌশলপত্র (২০২৬-২০৩০)",
    titleEn: "National Renewable Energy Strategic Roadmap (2026–2030)",
    description:
      "The comprehensive 5-year strategic blueprint establishing national clean energy targets, grid modernization norms, and private EPC project financing frameworks.",
    authority: "Power Division, Government of Bangladesh",
    fileSize: "1.37 MB",
    pdfUrl: "/documents/renewable-energy-strategy-2026-2030.pdf",
    externalUrl: "https://powerdivision.gov.bd/pages/files/6a6af7ab33abb83ff10be25f",
  },
  {
    id: "net-metering-guidelines-2025",
    badge: "SREDA Directive",
    titleBn: "নেট মিটারিং নির্দেশিকা - ২০২৫",
    titleEn: "Bangladesh Net Metering Guidelines 2025 (Official Directive)",
    description:
      "Detailed technical regulations governing rooftop solar interconnection, 70% transformer capacity limits, bi-directional smart meter rollback, and monthly credit settlement.",
    authority: "SREDA & Ministry of Power",
    fileSize: "2.98 MB",
    pdfUrl: "/documents/net-metering-guidelines-2025.pdf",
    externalUrl: "https://powerdivision.gov.bd/pages/static-pages/694032be35ce18e1c0561a07",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "net-metering-how-it-works": true,
    "payback-period-calculation": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* HERO */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <span>SOLAR KNOWLEDGE HUB &bull; SREDA COMPLIANCE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Frequently Asked <span className="gradient-text-solar">Questions</span> & Guidance
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Everything you need to know about rooftop solar engineering, net metering policies,
                Capex payback economics, and 25-year performance warranties in Bangladesh.
              </p>

              {/* Real-Time Live Search Bar */}
              <div className="pt-4 max-w-2xl mx-auto relative">
                <div className="relative flex items-center">
                  <Search className="w-5 h-5 text-slate-400 absolute left-5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search any solar topic, net metering, warranty, payback..."
                    className="w-full pl-13 pr-6 py-4 rounded-2xl bg-white border-2 border-slate-200 focus:border-amber-500 shadow-md text-sm sm:text-base outline-none transition-all placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-lg"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="py-14 sm:py-18">
          <Container>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={cn(
                    "px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-2xs",
                    activeCategory === cat.id
                      ? "bg-amber-500 text-slate-950 shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Questions Counter */}
            <div className="text-center text-xs font-bold text-slate-500 mb-6">
              Showing {filteredFaqs.length} answered questions
              {searchQuery && ` for "${searchQuery}"`}
            </div>

            {/* Accordion List */}
            <div className="max-w-4xl mx-auto space-y-4 text-left">
              {filteredFaqs.length === 0 ? (
                <div className="p-12 text-center bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
                  <FileQuestion className="w-12 h-12 text-slate-400 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-800">No matching questions found</h3>
                  <p className="text-xs text-slate-500">
                    Try different keywords or talk directly with our experienced solar engineers.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold mt-2"
                  >
                    <span>Ask Our Engineering Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                filteredFaqs.map((faq) => {
                  const isOpen = !!openItems[faq.id];
                  return (
                    <div
                      key={faq.id}
                      className={cn(
                        "group rounded-3xl border transition-all duration-300 overflow-hidden",
                        isOpen
                          ? "bg-white border-amber-400 shadow-lg ring-1 ring-amber-400/30"
                          : "bg-slate-50/70 border-slate-200 hover:border-amber-300 hover:bg-white"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(faq.id)}
                        className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <div className="space-y-1 pr-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 font-mono">
                            {faq.categoryLabel}
                          </span>
                          <h3
                            className={cn(
                              "text-base sm:text-lg font-bold transition-colors",
                              isOpen ? "text-amber-950" : "text-slate-900 group-hover:text-amber-900"
                            )}
                          >
                            {faq.question}
                          </h3>
                        </div>

                        <div
                          className={cn(
                            "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300",
                            isOpen
                              ? "bg-amber-500 text-slate-950 rotate-180 shadow-md"
                              : "bg-slate-200/80 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-700"
                          )}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </button>

                      {/* Smooth Collapsible Answer */}
                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-in-out",
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                            <p className="whitespace-pre-line">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Container>
        </section>

        {/* OFFICIAL GOVERNMENT POLICIES & PDF DOWNLOADS SECTION */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80">
          <Container>
            <div className="max-w-4xl mx-auto space-y-10">
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold tracking-wide uppercase">
                  <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SREDA & POWER DIVISION DIRECTIVES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Official Government Policies & <span className="gradient-text-solar">PDF Downloads</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  সকল নেট বাংলা সোলার ইনস্টলেশন বিদ্যুৎ বিভাগ এবং স্রেডার (SREDA) অফিসিয়াল নীতিমালার সাথে ১০০% সামঞ্জস্যপূর্ণ।
                  আপনার ইন্ডাস্ট্রি বা বাণিজ্যিক ভবনের জন্য প্রয়োজনীয় সরকারি প্রজ্ঞাপন ও নির্দেশিকা ডাউনলোড করুন সরাসরি এখান থেকে।
                </p>
              </div>

              {/* Policy Download Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                {governmentPolicies.map((policy) => (
                  <div
                    key={policy.id}
                    className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      {/* Badge & Authority Header */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-500/20">
                          {policy.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                          <Landmark className="w-3 h-3 text-slate-400" />
                          <span className="truncate max-w-[150px]">{policy.authority}</span>
                        </div>
                      </div>

                      {/* Titles */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">
                          {policy.titleBn}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 mt-1">
                          {policy.titleEn}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {policy.description}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      {policy.pdfUrl ? (
                        <>
                          <a
                            href={policy.pdfUrl}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all cursor-pointer"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download PDF {policy.fileSize ? `(${policy.fileSize})` : ""}</span>
                          </a>

                          <a
                            href={policy.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          >
                            <span>Gov Source</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </>
                      ) : (
                        <a
                          href={policy.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
                        >
                          <span>Visit National Solar Portal</span>
                          <ExternalLink className="w-4 h-4 text-amber-400" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* SREDA Assurance & Knowledge Hub Link Banner */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      100% SREDA & Utility Grid Compliance Guarantee
                    </h4>
                    <p className="text-xs text-slate-300 max-w-xl">
                      We handle complete single-line diagram (SLD) engineering, load sanction approvals, and bi-directional net metering synchronization with BPDB, BREB, DPDC, DESCO, WZPDCL, and NESCO.
                    </p>
                  </div>
                </div>

                <Link
                  href="/knowledge"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Knowledge Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* STILL HAVE QUESTIONS HELP CARD */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <Container>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                  <span>DIRECT ENGINEERING CONSULTATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Have a Question Not Listed Here?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
                  Speak directly with our senior solar engineers. We provide free advice on technical sizing, transformer compatibility, and financing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/calculator"
                  className="btn-primary-solar py-3 px-6 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-950 shadow-sm"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate ROI</span>
                </Link>
                <Link
                  href="/contact"
                  className="py-3 px-6 rounded-xl border border-slate-300 hover:border-amber-400 bg-white hover:bg-amber-50/40 text-slate-800 text-xs font-bold text-center transition-all"
                >
                  Contact Our Engineers
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
