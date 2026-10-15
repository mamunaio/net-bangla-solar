"use client";

import React from "react";
import Link from "next/link";
import {
  SunMedium,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Official navigation columns
const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Knowledge Hub & Downloads", href: "/knowledge" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact" },
];

const solutionLinks = [
  { label: "Industrial Megawatt Solar EPC", href: "/solutions/industrial-solar-epc" },
  { label: "Commercial Rooftop Solar", href: "/solutions/commercial-rooftop" },
  { label: "Residential Hybrid Solar", href: "/solutions/residential-solar" },
  { label: "Agricultural Solar Irrigation", href: "/solutions/agricultural-solar" },
  { label: "BIPV Solar Solution", href: "/solutions/power-solaroof" },
  { label: "Floating Solar Systems (FPV)", href: "/solutions/floating-solar" },
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
        {/* Main Footer Multi-Column Grid (3 Columns: Brand 6, Company 3, Solutions 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* 1. BRAND AREA (6 columns on Desktop) */}
          <div className="md:col-span-6 lg:col-span-6 space-y-5 text-left">
            {/* Brand Typography & Logo */}
            <Link
              href="/"
              className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
              aria-label="Net Bangla Solar Energy Solutions - Back to top"
            >
              <BrandLogo priority={false} loading="lazy" decoding="async" className="h-16 sm:h-20 w-auto transition-transform duration-200 group-hover:scale-105" />
            </Link>

            {/* Official Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
              Delivering high-efficiency turnkey solar EPC engineering, net metering systems, and clean energy infrastructure for residential, commercial, and industrial facilities across Bangladesh.
            </p>

            {/* Corporate Heritage Badge (Hidden per user request; can be re-enabled later) */}
            {/* 
            <div className="pt-1">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-800">
                <span>Turnkey Solar EPC &bull; Est. May 28, 2014</span>
              </div>
            </div> 
            */}
          </div>

          {/* 2. COMPANY NAVIGATION (3 columns on Desktop; Centered on Mobile) */}
          <nav
            aria-label="Company Navigation"
            className="md:col-span-3 lg:col-span-3 space-y-4 text-center md:text-left"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-3 text-sm sm:text-base flex flex-col items-center md:items-start">
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

          {/* 3. SOLUTIONS NAVIGATION (3 columns on Desktop; Centered on Mobile) */}
          <nav
            aria-label="Solutions Navigation"
            className="md:col-span-3 lg:col-span-3 space-y-4 text-center md:text-left"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm sm:text-base flex flex-col items-center md:items-start">
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

          {/* 4. APPLICATIONS NAVIGATION (Hidden per user request; can be re-enabled later) */}
          {/* 
          <nav
            aria-label="Applications Navigation"
            className="lg:col-span-2 space-y-4 text-center md:text-left"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Applications
            </h3>
            <ul className="space-y-3 text-sm sm:text-base flex flex-col items-center md:items-start">
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
          */}
        </div>

        {/* Institutional Memberships & Registrations Strip (Hidden per user request; can be re-enabled later) */}
        {/* 
        <div className="pt-8 pb-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-5 md:gap-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 text-center w-full md:w-auto">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Institutional Memberships &amp; Registrations</span>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center sm:justify-center md:justify-end gap-2.5 sm:gap-3">
              {institutionalCredentials.map((cred) => (
                <div
                  key={cred.organization}
                  className="w-full max-w-sm sm:w-auto px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-lg bg-white border border-slate-200/90 flex items-center justify-between sm:justify-start gap-2.5 text-xs shadow-xs hover:border-amber-400/40 transition-colors"
                >
                  <span className="text-slate-800 font-medium">
                    {cred.organization}
                  </span>
                  <span className="hidden sm:inline text-slate-400" aria-hidden="true">&bull;</span>
                  <span className="font-mono text-amber-700 font-semibold text-[11px] bg-amber-500/10 px-2 py-0.5 rounded-md sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none">
                    {cred.id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> 
        */}

        {/* Legal / Copyright Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 text-center">
          {/* Copyright */}
          <p className="text-slate-600">
            &copy; {currentYear} Net Bangla Solar Energy Solutions. A Division of Net Bangla Limited. All rights reserved.
          </p>

          {/* Corporate Profile Note (Hidden per user request; can be re-enabled later) */}
          {/* 
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>Turnkey Solar EPC</span>
            <span aria-hidden="true">&bull;</span>
            <span>Established May 28, 2014</span>
          </div> 
          */}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
