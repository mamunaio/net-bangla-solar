"use client";

import React from "react";
import Link from "next/link";
import {
  SunMedium,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

// Feather-compatible clean stroke SVG brand icons
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

// Navigation Column Links
const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const solutionLinks = [
  { label: "Residential Solar", href: "#solutions" },
  { label: "Commercial Solar", href: "#solutions" },
  { label: "Industrial Solar", href: "#solutions" },
  { label: "Operations & Maintenance", href: "#solutions" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Projects", href: "#projects" },
  { label: "How It Works", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

// Placeholder contact information structured for seamless updates with verified credentials
const contactDetails = {
  email: "hello@netbanglasolar.com",
  phone: "+880 1XXX-XXXXXX",
  location: "Bangladesh",
  note: "Demo contact channel for initial website preview",
};

// Social channels structured for production URL configuration
const socialChannels = [
  {
    name: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
    label: "Net Bangla Solar on LinkedIn (Verified link pending)",
  },
  {
    name: "Facebook",
    href: "#",
    icon: FacebookIcon,
    label: "Net Bangla Solar on Facebook (Verified link pending)",
  },
  {
    name: "Instagram",
    href: "#",
    icon: InstagramIcon,
    label: "Net Bangla Solar on Instagram (Verified link pending)",
  },
  {
    name: "YouTube",
    href: "#",
    icon: YoutubeIcon,
    label: "Net Bangla Solar on YouTube (Verified link pending)",
  },
];

export function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="relative border-t border-emerald-500/15 bg-[#030704] text-slate-300 overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-14"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[350px] rounded-full bg-emerald-500/[0.05] blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[250px] rounded-full bg-amber-500/[0.025] blur-[120px] -z-10"
      />

      <Container>
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 lg:pb-16">
          {/* 1. BRAND AREA (4 columns on Desktop) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Link
              href="#home"
              className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
              aria-label="Net Bangla Solar Company - Back to top"
            >
              {/* Brand Icon Matching Navbar */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:border-emerald-400/50 transition-colors">
                <SunMedium className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Net Bangla
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-emerald-400/90 uppercase -mt-0.5">
                  Solar Company
                </span>
              </div>
            </Link>

            {/* Editorial Brand Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering cleaner energy solutions for a brighter, more
              resilient Bangladesh.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {socialChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label={item.label}
                      className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. EXPLORE (2 columns on Desktop) */}
          <nav
            aria-label="Explore Navigation"
            className="lg:col-span-2 space-y-4 text-left"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
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

          {/* 3. SOLUTIONS (2 columns on Desktop) */}
          <nav
            aria-label="Solutions Navigation"
            className="lg:col-span-2 space-y-4 text-left"
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

          {/* 4. COMPANY (2 columns on Desktop) */}
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

          {/* 5. CONTACT / LET'S TALK (3 columns on Desktop XL) */}
          <div className="lg:col-span-2 xl:col-span-3 space-y-4 text-left">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Let&apos;s Talk
            </h3>

            <div className="space-y-3 text-sm">
              {/* Email */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:text-emerald-400 focus-visible:underline text-xs sm:text-sm font-medium"
                >
                  <Mail className="w-4 h-4 shrink-0 text-emerald-400/80 group-hover:text-emerald-400" />
                  <span className="break-all sm:break-normal xl:break-normal font-sans">
                    {contactDetails.email}
                  </span>
                </a>
              </div>

              {/* Phone */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:text-emerald-400 focus-visible:underline text-xs sm:text-sm font-medium"
                >
                  <Phone className="w-4 h-4 shrink-0 text-emerald-400/80 group-hover:text-emerald-400" />
                  <span>{contactDetails.phone}</span>
                </a>
              </div>

              {/* Location */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                  Location
                </span>
                <div className="inline-flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400/80" />
                  <span>{contactDetails.location}</span>
                </div>
              </div>

              {/* Placeholder Notice */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Verified contact coming soon</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM BAR */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          {/* Copyright */}
          <p>© 2026 Net Bangla Solar Company. All rights reserved.</p>

          {/* Motto / Tagline */}
          <p className="text-slate-400 font-medium">
            Clean Energy. Brighter Bangladesh.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
