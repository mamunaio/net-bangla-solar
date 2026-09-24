"use client";

import React from "react";
import Link from "next/link";
import {
  SunMedium,
  Mail,
  Globe,
  ShieldCheck,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

// Official navigation columns
const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const solutionLinks = [
  { label: "Power Solaroof", href: "#solutions" },
  { label: "Residential Solar Solutions", href: "#solutions" },
  { label: "Commercial Solar Solutions", href: "#solutions" },
  { label: "Industrial Solar Solutions", href: "#solutions" },
  { label: "Agricultural Solar Solutions", href: "#solutions" },
];

const applicationLinks = [
  { label: "Industrial Rooftops", href: "#projects" },
  { label: "Commercial Buildings", href: "#projects" },
  { label: "Residential Solar", href: "#projects" },
  { label: "Agricultural Solar", href: "#projects" },
];

// Documented institutional memberships & registrations
const institutionalCredentials = [
  {
    organization: "BASIS General Member",
    id: "ID: A-405",
  },
  {
    organization: "BACCO Member",
    id: "ID: 2018.0082.1000.0062",
  },
  {
    organization: "BTRC Registered Call Center",
    id: "CC/BPO",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="relative border-t border-emerald-500/15 bg-[#020603] text-slate-300 overflow-hidden pt-14 pb-12 lg:pt-16 lg:pb-14"
    >
      {/* Background Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[350px] rounded-full bg-emerald-500/[0.04] blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[250px] rounded-full bg-amber-500/[0.02] blur-[120px] -z-10"
      />

      <Container>
        {/* Compact Footer Consultation CTA Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#04140a]/90 via-[#072212]/90 to-[#031007]/90 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_0_40px_-15px_rgba(16,185,129,0.15)]">
          <div className="space-y-1 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <SunMedium className="w-3.5 h-3.5 text-amber-400" />
              <span>Turnkey Solar Consultation</span>
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
              Ready to assess your facility for solar energy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Consult directly with our solar engineers for site assessment and load feasibility.
            </p>
          </div>

          <Link
            href="#quote"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shrink-0"
            aria-label="Get a Free Solar Quote"
          >
            <span>Get a Free Solar Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* 1. BRAND & CONTACT AREA (5 columns on Desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
              aria-label="Net Bangla Solar - Back to top"
            >
              {/* Brand Logo Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:border-emerald-400/50 transition-colors">
                <SunMedium className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Net Bangla Solar
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-emerald-400/90 uppercase -mt-0.5">
                  A Division of Net Bangla Limited
                </span>
              </div>
            </Link>

            {/* Official Positioning & Description */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-emerald-400/90 tracking-wide uppercase">
                Turnkey Solar EPC &bull; Established May 28, 2014
              </p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Engineering reliable solar infrastructure for residential,
                commercial, industrial, agricultural, and institutional
                applications across Bangladesh.
              </p>
            </div>

            {/* Documented Contact Details */}
            <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>
                  <strong className="text-white font-medium">CEO:</strong> Engr. Md. Mamunur Rahman
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a
                    href="mailto:mamun@netbanglaltd.com"
                    className="text-slate-300 hover:text-emerald-400 transition-colors break-all focus:outline-none focus-visible:underline"
                  >
                    mamun@netbanglaltd.com
                  </a>
                  <span className="text-slate-600 hidden sm:inline" aria-hidden="true">&bull;</span>
                  <a
                    href="mailto:info@netbanglaltd.com"
                    className="text-slate-300 hover:text-emerald-400 transition-colors break-all focus:outline-none focus-visible:underline"
                  >
                    info@netbanglaltd.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono text-slate-400">netbanglaenergy.com</span>
              </div>
            </div>
          </div>

          {/* 2. COMPANY NAVIGATION (2 columns on Desktop) */}
          <nav
            aria-label="Company Navigation"
            className="lg:col-span-2 space-y-4 text-left"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus-visible:text-emerald-400 focus-visible:underline"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. SOLUTIONS NAVIGATION (3 columns on Desktop) */}
          <nav
            aria-label="Solutions Navigation"
            className="lg:col-span-3 space-y-4 text-left"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus-visible:text-emerald-400 focus-visible:underline"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 4. APPLICATIONS NAVIGATION (2 columns on Desktop) */}
          <nav
            aria-label="Applications Navigation"
            className="lg:col-span-2 space-y-4 text-left"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Applications
            </h3>
            <ul className="space-y-2.5 text-sm">
              {applicationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus-visible:text-emerald-400 focus-visible:underline"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Institutional Memberships & Registrations Strip */}
        <div className="pt-8 pb-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Institutional Memberships &amp; Registrations</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {institutionalCredentials.map((cred) => (
                <div
                  key={cred.organization}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs"
                >
                  <span className="text-slate-200 font-medium">
                    {cred.organization}
                  </span>
                  <span className="text-slate-600" aria-hidden="true">&bull;</span>
                  <span className="font-mono text-emerald-400 text-[11px]">
                    {cred.id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal / Copyright Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-slate-400">
            &copy; {currentYear} Net Bangla Solar. A Division of Net Bangla Limited. All rights reserved.
          </p>

          {/* Corporate Profile Note */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>Turnkey Solar EPC</span>
            <span aria-hidden="true">&bull;</span>
            <span>Established May 28, 2014</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
