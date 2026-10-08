"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, ChevronDown, Zap, PhoneCall, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalProvider";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  children?: { label: string; href: string; badge?: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const { openQuoteModal } = useQuoteModal();
  const [servicesExpanded, setServicesExpanded] = useState(true);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col lg:hidden animate-in fade-in duration-200"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Glass Menu Container */}
      <div className="relative z-10 flex flex-col w-full h-full max-h-[100dvh] bg-white/98 dark:bg-slate-900/98 backdrop-blur-3xl border-b border-slate-200/80 dark:border-white/10 px-5 sm:px-6 py-5 overflow-y-auto shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
          <Link
            href="#home"
            onClick={onClose}
            aria-label="Net Bangla Energy — Home"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl min-w-0"
          >
            <div className="h-8.5 py-0.5 px-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs shrink-0 flex items-center">
              <BrandLogo variant="light" className="h-6.5 w-auto" />
            </div>
            <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[8.5px] font-mono font-bold">
              <span>EPC LIVE</span>
            </div>
          </Link>

          {/* Action Area: Close Button */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-9 h-9 rounded-full border border-slate-200/80 dark:border-white/10 hover:border-amber-400 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-amber-600 transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 flex items-center justify-center shrink-0 shadow-2xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1.5 py-6 flex-1" aria-label="Mobile Navigation Links">
          {items.map((item) => {
            const active = item.isActive;

            if (item.children) {
              return (
                <div key={item.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    aria-label="Toggle services menu"
                    aria-expanded={servicesExpanded}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer",
                      servicesExpanded
                        ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
                        : "text-slate-800 dark:text-slate-100 hover:text-amber-600 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        servicesExpanded && "rotate-180 text-amber-600"
                      )}
                    />
                  </button>

                  {servicesExpanded && (
                    <div className="ml-4 mt-1.5 grid border-l-2 border-amber-400/40 pl-3 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:bg-amber-50/50 dark:hover:bg-slate-800 flex items-center justify-between transition-colors"
                        >
                          <span>{child.label}</span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                            {child.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                  active
                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
                    : "text-slate-800 dark:text-slate-100 hover:text-amber-600 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                )}
              >
                <span>{item.label}</span>
                <ArrowRight className={cn("w-4 h-4", active ? "text-amber-600" : "text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all")} />
              </Link>
            );
          })}
        </nav>

        {/* Bottom Hotline & Primary CTA */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <Link
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/10 hover:text-amber-600 transition-all border border-slate-200/80 dark:border-slate-700"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
            <span>Hotline: +880 1711-000000</span>
          </Link>

          <Link
            href="/calculator"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 transition-all border border-amber-500 shadow-2xs"
          >
            <Zap className="w-4 h-4 text-slate-950" />
            <span>Calculate Rooftop ROI</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              onClose();
              openQuoteModal();
            }}
            className="group relative flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.99] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 overflow-hidden cursor-pointer"
          >
            <Zap className="w-4 h-4 text-white" />
            <span>Get a Free Solar Quote</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <p className="text-center text-[11px] text-slate-500">
            A renewable energy division of Net Bangla Limited.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;

