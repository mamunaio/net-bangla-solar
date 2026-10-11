import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  HardHat,
  Leaf,
  CheckCircle2,
  FileText,
  Clock,
  Building2,
  Scale,
  Sparkles,
  Recycle,
  Factory,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Health, Safety & Environmental (HSE) Policy | Net Bangla Solar Energy Solutions",
  description:
    "Official Health, Safety, and Environmental (HSE) Policy of Net Bangla Limited. Quality policy statement, zero-accident workplace standards, and Material Flow Cost Accounting (MFCA).",
};

export default function HSEPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* 1. HERO SECTION */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          {/* Ambient Lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[350px] rounded-full bg-emerald-500/10 blur-[100px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              {/* Compliance Pill */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold tracking-wider uppercase">
                <span>CORPORATE GOVERNANCE &amp; COMPLIANCE &bull; HSE POLICY</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Commitment to Quality, Health, Safety &amp; Environment
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Official Health, Safety, and Environmental (HSE) Policy guidelines governing all engineering, procurement, construction, and commissioning operations of Net Bangla Limited across Bangladesh.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. POLICY METADATA / SCOPE STRIP */}
        <section className="py-6 bg-slate-50/90 border-b border-slate-200/80">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Policy Status</div>
                <div className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                  <span>Active &amp; Enforced</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Applicable Scope</div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">Turnkey Solar EPC Sites</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Jurisdiction</div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">Bangladesh National Grid</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Review Cycle</div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">Annual Continuous Audit</div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. CORE POLICY CONTENT */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12 text-left">
              
              {/* SECTION 1: QUALITY POLICY STATEMENT */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"
                />

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-2xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">Section 01</div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Quality Policy Statement
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    At <strong>Net Bangla Limited</strong>, we are committed to delivering effective, efficient, and reliable services that fully meet customer requirements while adhering to the highest standards of safety and performance.
                  </p>
                  <p>
                    Our primary objective is to ensure that all customers receive superior quality service through the use of advanced materials, modern engineering techniques, and up-to-date equipment. We continuously review and enhance our internal systems to maximize operational efficiency and maintain our reputation for excellence.
                  </p>
                  <p>
                    All employees are made aware of the quality system, trained in its application, and are required to comply with its procedures at all times. We foster a culture of accountability and encourage every employee to raise concerns, suggest improvements, and contribute to the ongoing development of our quality system.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900">Advanced Materials</div>
                    <div className="text-xs text-slate-500 mt-1">Tier-1 verified modules and certified balance-of-system equipment.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900">Operational Rigor</div>
                    <div className="text-xs text-slate-500 mt-1">Structured quality assurance across every installation lifecycle.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900">Culture of Ownership</div>
                    <div className="text-xs text-slate-500 mt-1">Employee-driven continuous feedback and process optimization.</div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: HEALTH AND SAFETY POLICY */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500"
                />

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-2xs">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">Section 02</div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Health and Safety Policy
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    At Net Bangla Limited, the health and safety of our employees receive the same level of priority and attention as our core business functions, which include quality, efficiency, environmental sustainability, and financial performance. We also recognize our responsibility to ensure the health and safety of all others who may be affected by our activities.
                  </p>
                  <p>
                    Our goal is to maintain a workplace environment across all construction and engineering projects that is <strong>free from accidents, hazardous occurrences, and work-related illnesses</strong>. To achieve this, we are committed to continual improvement and uphold the highest safety standards in all areas of operation.
                  </p>
                </div>

                {/* Specific Responsibilities List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-slate-900">
                    We fulfill our health and safety responsibilities by:
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Hazard Identification &amp; Risk Assessment:</strong> Proactively identifying hazards on construction sites, assessing associated risks, and implementing effective preventive and protective measures.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Safe Machinery &amp; Environments:</strong> Providing and maintaining certified, safe machinery, electrical tools, personal protective equipment (PPE), and secure working conditions.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Safe Work Procedures:</strong> Establishing, documenting, and rigorously enforcing standardized safe work protocols for high-voltage, rooftop, and crane operations.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Competency-Based Recruitment:</strong> Recruiting engineering and site personnel with the necessary technical skills, verified competence, and responsibility relevant to their roles.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Continuous Technical Training:</strong> Ensuring ongoing technical competence and safety readiness through regular on-site safety drills, certifications, and refresher programs.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Safety Communication &amp; Awareness:</strong> Promoting active health and safety awareness through transparent, multilingual communication of site protocols, hazard signs, and emergency plans.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  We expect all employees, contractors, and design professionals to actively support and cooperate in achieving a safe and healthy workplace. This policy is regularly reviewed to ensure continued effectiveness and to reflect evolving risks, practices, and legal requirements.
                </div>
              </div>

              {/* SECTION 3: ENVIRONMENTAL POLICY */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500"
                />

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 shadow-2xs">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">Section 03</div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Environmental Policy &amp; Sustainability
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Net Bangla Limited is committed to conducting its operations in an environmentally responsible and sustainable manner. We recognize our duty to minimize the environmental impact of our activities and to promote sustainable practices across all aspects of our engineering, procurement, and construction work.
                  </p>
                </div>

                {/* Specific Environmental Commitments */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-slate-900">
                    In pursuit of this environmental commitment, we:
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Environmental Impact Assessment:</strong> Systematically consider environmental impacts during the planning, feasibility, and design stages of all rooftop and ground-mounted solar sites.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Best Practices in Resource Use:</strong> Integrate environmental best practices in material selection, energy conservation, packaging reduction, and comprehensive recycling efforts.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Supply Chain Sustainability:</strong> Collaborate closely with contractors, international equipment suppliers, and local logistics partners to promote environmental awareness and responsible project management.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Material Flow Cost Accounting (MFCA):</strong> Implement Material Flow Cost Accounting (MFCA) to identify and eliminate material losses during processes, significantly improving both environmental performance and operational efficiency.
                      </div>
                    </div>
                  </div>
                </div>

                {/* MFCA Deep-Dive Highlight */}
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Recycle className="w-4 h-4" />
                    <span>Material Flow Cost Accounting (MFCA) Standard</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    By tracking the physical flow of materials and energy alongside financial costs, Net Bangla Solar Energy Solutions reduces wasted aluminum, copper, cabling, and packaging, translating environmental stewardship into tangible cost savings for turnkey clients.
                  </p>
                </div>
              </div>

              {/* CORPORATE SLOGAN & SEAL */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white text-center space-y-3 shadow-md border border-emerald-500/20">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  National Renewable Mission
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Energize Bangladesh with Sustainable Renewable Energy
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Net Bangla Limited &bull; Quality, Health, Safety &amp; Environment Division &bull; Aftabnagar &amp; Banani, Dhaka, Bangladesh.
                </p>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
