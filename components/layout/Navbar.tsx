"use client";

// Navbar component for Net Bangla Solar Energy Solutions
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  Sparkles,
  ArrowRight,
  Sun,
  Home,
  Building2,
  Factory,
  Sprout,
  PanelsTopLeft,
  Waves,
  PhoneCall,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Calculator,
} from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useQuoteModal } from "@/components/providers/QuoteModalProvider";
import { cn } from "@/lib/utils";

interface SubItem {
  label: string;
  href: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
  route: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "home", route: "/" },
  { label: "About Us", href: "/about", sectionId: "about", route: "/about" },
  {
    label: "Solutions",
    href: "#",
    sectionId: "solutions",
    route: "#",
    children: [
      {
        label: "Industrial Solar EPC",
        href: "/solutions/industrial-solar-epc",
        description: "MWp scale high-yield turnkey factory installations",
        badge: "100 kWp - 5 MWp",
        icon: Factory,
      },
      {
        label: "Commercial Rooftop",
        href: "/solutions/commercial-rooftop",
        description: "Net-metered power offset for commercial establishments",
        badge: "NET METERED",
        icon: Building2,
      },
      {
        label: "Residential Solar",
        href: "/solutions/residential-solar",
        description: "Hybrid & on-grid smart rooftop systems for premium homes",
        badge: "HYBRID / ON-GRID",
        icon: Home,
      },
      {
        label: "Agricultural Solar",
        href: "/solutions/agricultural-solar",
        description: "High-volume solar irrigation & remote farm power",
        badge: "DIRECT DC PUMP",
        icon: Sprout,
      },
      {
        label: "BIPV Solar Solution",
        href: "/solutions/power-solaroof",
        description: "Integrated building photovoltaic roofing architecture",
        badge: "BIPV GRADE",
        icon: PanelsTopLeft,
      },
      {
        label: "Floating Solar (FPV)",
        href: "/solutions/floating-solar",
        description: "Water-based high-efficiency PV for ponds, lakes & reservoirs",
        badge: "WATER-BASED PV",
        icon: Waves,
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio", sectionId: "projects", route: "/portfolio" },
  { label: "Partners & Clients", href: "/partners-and-clients", sectionId: "partners-clients", route: "/partners-and-clients" },
  { label: "Contact", href: "/contact", sectionId: "contact", route: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Automatically close any open dropdowns and blur active element on route change
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (typeof document !== "undefined") {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sectionIds = [
          "home",
          "about",
          "solutions",
          "projects",
          "why-choose-us",
          "faq",
          "contact",
        ];
        const scrollPosition = window.scrollY + 200;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-3 sm:px-6 lg:px-8 pointer-events-none",
          isScrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4 lg:pt-5"
        )}
      >
        {/* Floating Island Pure White Glass Capsule */}
        <div
          className={cn(
            "pointer-events-auto max-w-7xl mx-auto rounded-2xl lg:rounded-full transition-all duration-300 ease-out border backdrop-blur-2xl relative bg-white/95 border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.03)]",
            isScrolled
              ? "py-2 sm:py-2.5 pl-3.5 sm:pl-6 pr-2 sm:pr-3"
              : "py-2.5 sm:py-3 pl-4 sm:pl-7 pr-2.5 sm:pr-3.5"
          )}
        >
          {/* Subtle Golden Amber Top Shimmer Line */}
          <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent rounded-full pointer-events-none" />

          <div className="flex items-stretch justify-between gap-2 sm:gap-4 flex-nowrap">
            {/* 1. BRAND LOGO AREA */}
            <Link
              href="/"
              aria-label="Net Bangla Solar Energy Solutions — Home"
              className="group flex items-center self-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl shrink-0"
            >
              <BrandLogo priority loading="eager" className="h-10 sm:h-12 lg:h-13.5 w-auto transition-transform duration-200 ease-out group-hover:scale-105" />
            </Link>

            {/* 2. DESKTOP NAVIGATION LINKS */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center self-center gap-0.5 xl:gap-1 shrink-0 flex-nowrap"
            >
              {navItems.map((item) => {
                const isDedicatedRoute = item.route !== "/" && (pathname === item.route || pathname?.startsWith(item.route));
                const isHomeActive = pathname === "/" && (activeSection === item.sectionId || (item.route === "/" && activeSection === "home"));
                const active = isDedicatedRoute || isHomeActive;

                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="group relative shrink-0"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen((prev) => !prev)}
                        aria-haspopup="true"
                        aria-expanded={servicesDropdownOpen}
                        className={cn(
                          "relative flex items-center gap-1 px-3 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold tracking-normal transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap shrink-0 border cursor-pointer",
                          servicesDropdownOpen
                            ? "bg-amber-500/15 text-amber-900 font-bold border-amber-500/30 shadow-2xs"
                            : "border-transparent text-slate-700 hover:text-amber-800 hover:bg-amber-50/70"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-amber-700" : "text-slate-400 group-hover:text-amber-700"
                        )} />
                      </button>

                      {/* Mega Dropdown Menu */}
                      <div
                        className={cn(
                          "absolute left-1/2 top-full z-50 w-[740px] xl:w-[780px] -translate-x-1/2 transition-all duration-200 ease-out",
                          servicesDropdownOpen
                            ? "visible pt-3 opacity-100 pointer-events-auto"
                            : "invisible pt-2 opacity-0 pointer-events-none"
                        )}
                      >
                        <div
                          role="menu"
                          aria-label="Solar Solutions Submenu"
                          className="rounded-3xl border border-slate-200/90 bg-white/98 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15),0_0_25px_rgba(245,158,11,0.08)] backdrop-blur-3xl text-left"
                        >
                          {/* Dropdown Top Bar */}
                          <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 mb-3.5">
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-amber-700 flex items-center gap-2">
                              <Sun className="w-4 h-4 text-amber-500" />
                              <span>TURNKEY SOLAR EPC ARCHITECTURES</span>
                            </span>
                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800">
                              SREDA Certified
                            </span>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-12 gap-4">
                            {/* Left: 5 Architecture Information Links (7 cols) */}
                            <div className="col-span-7 space-y-1.5">
                              {item.children.map((child) => {
                                const ChildIcon = child.icon;
                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => {
                                      setServicesDropdownOpen(false);
                                      if (typeof document !== "undefined") {
                                        (document.activeElement as HTMLElement)?.blur();
                                      }
                                    }}
                                    className="group/item flex items-start gap-3 rounded-2xl p-2.5 transition-all duration-150 hover:bg-amber-50/60 border border-transparent hover:border-amber-200/70 cursor-pointer"
                                  >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-all duration-150 mt-0.5 shadow-2xs">
                                      <ChildIcon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1.5">
                                        <span className="text-sm font-bold text-slate-900 group-hover/item:text-amber-800 transition-colors">
                                          {child.label}
                                        </span>
                                        <span className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100/80 border border-amber-200 text-amber-800 shrink-0">
                                          {child.badge}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-600 mt-0.5 leading-snug group-hover/item:text-slate-700">
                                        {child.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Right: Technical Engineering Spotlight Card (5 cols) */}
                            <div className="col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-amber-50/90 via-amber-100/40 to-white border border-amber-200/80 p-4 text-left">
                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-2.5">
                                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                                  <span>EPC GUARANTEE</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                                  25-Year Guaranteed Performance Yield
                                </h4>
                                <ul className="space-y-2 text-xs font-medium text-slate-700">
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                    <span>Full Net-Metering Approval</span>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                    <span>Tier-1 Monocrystalline Panels</span>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                    <span>24/7 Generation Telemetry</span>
                                  </li>
                                </ul>
                              </div>

                              <Link
                                href="/calculator"
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  if (typeof document !== "undefined") {
                                    (document.activeElement as HTMLElement)?.blur();
                                  }
                                }}
                                className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-xs hover:shadow-sm transition-all cursor-pointer"
                              >
                                <Calculator className="w-4 h-4" />
                                <span>Calculate Rooftop ROI</span>
                              </Link>
                            </div>
                          </div>

                          {/* Dropdown Footer Strip */}
                          <div className="mt-3.5 pt-2.5 border-t border-slate-100 px-3 flex items-center justify-between text-xs">
                            <span className="text-xs text-slate-600">
                              Need custom industrial plant engineering?
                            </span>
                            <Link
                              href="/contact"
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                if (typeof document !== "undefined") {
                                  (document.activeElement as HTMLElement)?.blur();
                                }
                              }}
                              className="inline-flex items-center gap-1 font-bold text-xs text-amber-700 hover:text-amber-800 transition-colors"
                            >
                              <span>Consult Solar Engineers</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
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
                      "relative px-3 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold tracking-normal transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap shrink-0 border",
                      active
                        ? "bg-amber-500/15 text-amber-900 font-bold border-amber-500/30 shadow-2xs"
                        : "border-transparent text-slate-700 hover:text-amber-800 hover:bg-amber-50/70"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* 3. RIGHT ACTION CONTROLS */}
            <div className="flex items-stretch gap-2 shrink-0 flex-nowrap ml-1 sm:ml-2">
              {/* Radiant Solar Gold Primary CTA Button */}
              <button
                type="button"
                onClick={() => openQuoteModal()}
                aria-label="Get a Free Solar Quote"
                className="group relative inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-[0_2px_10px_rgba(245,158,11,0.28)] hover:shadow-[0_4px_16px_rgba(245,158,11,0.40)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0 overflow-hidden whitespace-nowrap cursor-pointer"
              >
                {/* Shimmer Light Sweep on Hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

                <Zap className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                <span className="hidden sm:inline">Get a Free Solar Quote</span>
                <span className="sm:hidden">Free Quote</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden h-full aspect-square rounded-full border border-slate-200/90 hover:border-amber-400 bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-700 shadow-2xs transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 flex items-center justify-center shrink-0"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navItems.map((item) => {
          const isDedicatedRoute = item.route !== "/" && (pathname === item.route || pathname?.startsWith(item.route));
          const isHomeActive = pathname === "/" && (activeSection === item.sectionId || (item.route === "/" && activeSection === "home"));
          return {
            label: item.label,
            href: item.href,
            isActive: isDedicatedRoute || isHomeActive,
            children: item.children?.map((c) => ({ label: c.label, href: c.href })),
          };
        })}
      />
    </>
  );
}

export default Navbar;

