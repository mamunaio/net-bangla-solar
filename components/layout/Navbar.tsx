"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About Us", href: "#about", sectionId: "about" },
  {
    label: "Services",
    href: "#solutions",
    sectionId: "solutions",
    children: [
      { label: "Power Solaroof", href: "#solutions" },
      { label: "Residential Solar Solutions", href: "#solutions" },
      { label: "Commercial Solar Solutions", href: "#solutions" },
      { label: "Industrial Solar Solutions", href: "#solutions" },
      { label: "Agricultural Solar Solutions", href: "#solutions" },
    ],
  },
  { label: "Portfolio", href: "#projects", sectionId: "projects" },
  { label: "Why Choose Us & FAQ", href: "#faq", sectionId: "faq" },
  { label: "Contact Us", href: "#contact", sectionId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = [
        "home",
        "about",
        "solutions",
        "projects",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          isScrolled
            ? "h-[72px] bg-[#050b07]/90 backdrop-blur-xl border-b border-emerald-500/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "h-20 bg-transparent border-b border-white/[0.05] backdrop-blur-[2px]"
        )}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            aria-label="Net Bangla Solar — back to home"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl"
          >
            <div className="relative h-11 w-[132px] sm:w-[146px] overflow-hidden rounded-lg bg-white border border-white/15 shadow-[0_8px_24px_-12px_rgba(68,191,202,0.9)] transition-all duration-300 group-hover:border-emerald-400/60">
              <Image
                src="/images/Net Bangla Solar Logo.jpeg"
                alt="Net Bangla Solar Logo"
                width={500}
                height={500}
                priority
                className="absolute inset-x-0 top-1/2 h-auto w-full -translate-y-1/2"
              />
            </div>

            <div className="hidden xl:flex flex-col text-left border-l border-white/10 pl-2.5">
              <span className="text-[12px] font-bold text-white tracking-wide leading-tight group-hover:text-emerald-300 transition-colors">
                Net Bangla Solar
              </span>
              <span className="text-[9px] text-slate-400 leading-tight mt-0.5 whitespace-nowrap">
                A Division of Net Bangla Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md shadow-inner"
          >
            {navItems.map((item) => {
              const active = activeSection === item.sectionId;

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={servicesDropdownOpen}
                      className={cn(
                        "relative flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
                        active
                          ? "text-white font-semibold"
                          : "text-solar-text-secondary hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_8px_#34d399]"
                        />
                      )}
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div
                        role="menu"
                        aria-label="Services Submenu"
                        className="rounded-2xl border border-emerald-500/20 bg-[#07110c]/95 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
                      >
                        <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400/80">
                          Solar Solutions
                        </p>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            role="menuitem"
                            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:bg-emerald-500/10 hover:text-white focus:outline-none focus-visible:bg-emerald-500/10 focus-visible:text-white"
                          >
                            <span>{child.label}</span>
                            <span aria-hidden="true" className="text-emerald-400/60 text-xs">↗</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
                    active
                      ? "text-white font-semibold"
                      : "text-solar-text-secondary hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_8px_#34d399]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Primary CTA (Desktop / Tablet) */}
            <Link
              href="#quote"
              className="group relative hidden sm:inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500/20 via-emerald-600/20 to-lime-500/20 hover:from-emerald-500/30 hover:to-lime-500/30 border border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:rotate-12" />
              <span>Get a Free Solar Quote</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-solar-text-secondary hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navItems.map((item) => ({
          ...item,
          isActive: activeSection === item.sectionId,
        }))}
      />
    </>
  );
}

export default Navbar;
