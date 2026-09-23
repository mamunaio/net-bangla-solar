"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  SunMedium,
  Leaf,
  Search,
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
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Solutions", href: "#solutions", sectionId: "solutions" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "How It Works", href: "#process", sectionId: "process" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = [
        "home",
        "about",
        "solutions",
        "projects",
        "process",
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
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            {/* Visual Brand Mark */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-950/40 to-black border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]">
              <SunMedium className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
              {/* Leaf Accent */}
              <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-[#050b07] border border-emerald-500/40 shadow-sm">
                <Leaf className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400/20" />
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col text-left">
              <span className="text-base md:text-lg font-bold tracking-tight text-white leading-none group-hover:text-emerald-300 transition-colors">
                Net Bangla
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-400/90 leading-tight mt-1">
                Solar Company
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
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
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
            {/* Search Button */}
            <button
              type="button"
              aria-label="Search site"
              className="p-2.5 rounded-full text-solar-text-secondary hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Primary CTA (Desktop / Tablet) */}
            <Link
              href="#quote"
              className="group relative hidden sm:inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500/20 via-emerald-600/20 to-lime-500/20 hover:from-emerald-500/30 hover:to-lime-500/30 border border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:rotate-12" />
              <span>Get a Quote</span>
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
