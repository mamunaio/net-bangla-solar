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
        {/* Compact Footer Consultation CTA Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <SunMedium className="w-3.5 h-3.5 text-amber-600" />
              <span>Turnkey Solar Consultation</span>
            </div>
            <h3 className="text-slate-900 text-lg sm:text-xl font-bold tracking-tight">
              Ready to assess your facility for solar energy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Consult directly with our solar engineers for site assessment and load feasibility.
            </p>
          </div>

          <Link
            href="#quote"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-md hover:shadow-lg shadow-amber-500/20 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0"
            aria-label="Get a Free Solar Quote"
          >
            <span>Get a Free Solar Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* 1. BRAND & CONTACT AREA (5 columns on Desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left">
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
              Turnkey Solar EPC established on May 28, 2014. Engineering reliable solar infrastructure for residential, commercial, industrial, and agricultural facilities across Bangladesh.
            </p>

            {/* Documented Contact Details */}
            <div className="space-y-3.5 pt-4 border-t border-slate-200">
              {/* Engineering Supervision */}
              <div className="flex items-start gap-3 text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">
                    Engineering Supervision:
                  </span>
                  <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                    Engr. Md. Mamunur Rahman (CEO)
                  </p>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3 text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">
                    Official Inquiries:
                  </span>
                  <a
                    href="mailto:info@netbanglaltd.com"
                    className="inline-flex items-center gap-1.5 text-slate-900 hover:text-amber-700 font-bold text-sm sm:text-base mt-0.5 transition-colors group"
                  >
                    <span>info@netbanglaltd.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-start gap-3 text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">
                    Official Website:
                  </span>
                  <a
                    href="https://netbanglaenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-900 hover:text-amber-700 font-bold text-sm sm:text-base mt-0.5 transition-colors group"
                  >
                    <span>netbanglaenergy.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
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
