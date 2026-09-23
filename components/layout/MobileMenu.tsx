"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
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
        className="fixed inset-0 bg-[#050b07]/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Glass Menu Container */}
      <div className="relative z-10 flex flex-col w-full h-full max-h-[100dvh] bg-[#070e09]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-900/30 to-black border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
              <SunMedium className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-white leading-none">
                Net Bangla
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-emerald-400 mt-1">
                Solar Company
              </span>
            </div>
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-solar-text-secondary hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 py-8 flex-1" aria-label="Mobile Navigation Links">
          {items.map((item) => {
            const active = item.isActive;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                  active
                    ? "bg-emerald-500/10 text-white border border-emerald-500/30 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
                    : "text-solar-text-secondary hover:text-white hover:bg-white/5 hover:translate-x-1"
                )}
              >
                <span className="flex items-center gap-3">
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  )}
                  {item.label}
                </span>
                <ArrowRight
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 group-hover:translate-x-1",
                    active ? "text-emerald-400" : "text-white/30 group-hover:text-white/70"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA & Info */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Link
            href="#quote"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300 shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-center text-xs text-solar-text-muted">
            Engineered for reliability & environmental excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
