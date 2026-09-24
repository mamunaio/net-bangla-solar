"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  children?: { label: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
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
        className="fixed inset-0 bg-[#050b07]/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Glass Menu Container */}
      <div className="relative z-10 flex flex-col w-full h-full max-h-[100dvh] bg-[#070e09]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="#home"
            onClick={onClose}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="relative h-11 w-[132px] overflow-hidden rounded-lg bg-white border border-white/15">
              <Image
                src="/images/Net Bangla Solar Logo.jpeg"
                alt="Net Bangla Solar Logo"
                width={500}
                height={500}
                priority
                className="absolute inset-x-0 top-1/2 h-auto w-full -translate-y-1/2"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white tracking-wide leading-tight">
                Net Bangla Solar
              </span>
              <span className="text-[9px] text-slate-400 mt-0.5 leading-tight">
                A Division of Net Bangla Limited
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

            if (item.children) {
              return (
                <div key={item.label} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex-1 flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
                        active
                          ? "bg-emerald-500/10 text-white border border-emerald-500/25 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]"
                          : "text-solar-text-secondary hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {active && <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />}
                        {item.label}
                      </span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      aria-label="Toggle services menu"
                      aria-expanded={servicesExpanded}
                      className="p-3.5 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesExpanded && "rotate-180 text-emerald-400"
                        )}
                      />
                    </button>
                  </div>

                  {servicesExpanded && (
                    <div className="ml-4 mt-1 grid border-l border-emerald-500/20 pl-3 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-emerald-500/10 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 flex items-center justify-between"
                        >
                          <span>{child.label}</span>
                          <span aria-hidden="true" className="text-emerald-400/50 text-xs">↗</span>
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
                  "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
                  active
                    ? "bg-emerald-500/10 text-white border border-emerald-500/25 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]"
                    : "text-solar-text-secondary hover:text-white hover:bg-white/5"
                )}
              >
                <span className="flex items-center gap-3">
                  {active && <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />}
                  {item.label}
                </span>
                <ArrowRight className={cn("w-4 h-4", active ? "text-emerald-300" : "text-white/30")} />
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
            <span>Get a Free Solar Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-center text-xs text-solar-text-muted">
            A renewable energy division of Net Bangla Limited.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
