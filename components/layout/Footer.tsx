"use client";

import React from "react";
import Link from "next/link";
import {
  SunMedium,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

// Official navigation columns
const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Solar ROI Calculator", href: "/calculator" },
  { label: "Portfolio & Case Studies", href: "/portfolio" },
  { label: "HSE & Sustainability Policy", href: "/hse-policy" },
  { label: "FAQ & Knowledge Hub", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const solutionLinks = [
  { label: "Power Solaroof™ BIPV", href: "/solutions/power-solaroof" },
  { label: "Industrial Megawatt Solar EPC", href: "/solutions/industrial-solar-epc" },
  { label: "Commercial Rooftop Solar", href: "/solutions/commercial-rooftop" },
  { label: "Residential Hybrid Solar", href: "/solutions/residential-solar" },
  { label: "Agricultural Solar Irrigation", href: "/solutions/agricultural-solar" },
];

const applicationLinks = [
  { label: "Industrial Rooftops (MWp)", href: "/portfolio" },
  { label: "Commercial Buildings", href: "/portfolio" },
  { label: "Government & Defense Facilities", href: "/portfolio" },
  { label: "Residential Luxury Villas", href: "/portfolio" },
  { label: "Agricultural & Agri-Pumps", href: "/portfolio" },
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
      className="relative border-t border-slate-200 bg-slate-50 text-slate-600 overflow-hidden pt-14 pb-12 lg:pt-16 lg:pb-14"
    >
      {/* Background Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[350px] rounded-full bg-amber-400/[0.07] blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[250px] rounded-full bg-sky-400/[0.04] blur-[120px] -z-10"
      />

      <Container>
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* 1. BRAND AREA (5 columns on Desktop) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {/* Brand Typography */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
              aria-label="Net Bangla Solar - Back to top"
            >
              {/* Brand Logo Icon */}
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-2xs group-hover:border-amber-400 group-hover:bg-amber-500/20 transition-all">
                <SunMedium className="w-6 h-6 text-amber-600 group-hover:rotate-45 transition-transform duration-500" />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors">
                  Net Bangla Solar
                </span>
                <span className="text-xs font-bold tracking-wider text-amber-700 uppercase">
                  A Division of Net Bangla Limited
                </span>
              </div>
            </Link>

            {/* Official Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
              Delivering high-efficiency turnkey solar EPC engineering, net metering systems, and clean energy infrastructure for residential, commercial, and industrial facilities across Bangladesh.
            </p>

            {/* Corporate Heritage Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-800">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Turnkey Solar EPC &bull; Est. May 28, 2014</span>
              </div>
            </div>
          </div>

          {/* 2. COMPANY NAVIGATION (2 columns on Desktop) */}
          <nav
            aria-label="Company Navigation"
            className="lg:col-span-2 space-y-4 text-left"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-600 hover:text-amber-700 transition-colors duration-200 focus:outline-none focus-visible:text-amber-700 focus-visible:underline font-medium"
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-600 hover:text-amber-700 transition-colors duration-200 focus:outline-none focus-visible:text-amber-700 focus-visible:underline font-medium"
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Applications
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {applicationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-600 hover:text-amber-700 transition-colors duration-200 focus:outline-none focus-visible:text-amber-700 focus-visible:underline font-medium"
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
        <div className="pt-8 pb-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Institutional Memberships &amp; Registrations</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {institutionalCredentials.map((cred) => (
                <div
                  key={cred.organization}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 flex items-center gap-2 text-xs shadow-xs"
                >
                  <span className="text-slate-800 font-medium">
                    {cred.organization}
                  </span>
                  <span className="text-slate-400" aria-hidden="true">&bull;</span>
                  <span className="font-mono text-amber-700 font-semibold text-[11px]">
                    {cred.id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal / Copyright Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-slate-600">
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
