"use client";

import React, { useState } from "react";
import {
  Sun,
  BatteryCharging,
  Activity,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type OperationMode = "daytime" | "night" | "grid-export";

export function HybridSolarDiagram() {
  const [activeMode, setActiveMode] = useState<OperationMode>("daytime");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200/80 relative overflow-hidden text-slate-900">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] rounded-full bg-amber-500/[0.07] blur-[130px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[350px] rounded-full bg-sky-500/[0.05] blur-[120px] -z-10"
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold tracking-wider uppercase">
            <Activity className="w-3.5 h-3.5 text-amber-600" />
            <span>SYSTEM ARCHITECTURE &amp; WORKING PRINCIPLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How a <span className="gradient-text-solar">Hybrid Solar System</span> Works
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Engineered for seamless 24/7 reliability in Bangladesh. Capturing clean sunlight, powering your daily load, charging battery storage, and exporting surplus units to the national grid through SREDA-compliant bi-directional Net Metering.
          </p>

          {/* Interactive Simulation Modes */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: "daytime", label: "☀️ Daytime Solar Generation", desc: "Direct Load + Battery Charging" },
              { id: "grid-export", label: "⚡ Peak Surplus Export", desc: "Net Metering Grid Credit" },
              { id: "night", label: "🌙 Night & Outage Backup", desc: "Battery ESS Power Supply" },
            ].map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id as OperationMode)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border",
                  activeMode === mode.id
                    ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20 scale-102"
                    : "bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
                )}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Interactive Architectural Block Diagram Container */}
        <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_24px_rgba(245,158,11,0.06)] relative overflow-hidden">
          {/* Top Gold Shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

          {/* DIAGRAM SVG CANVAS */}
          <div className="w-full relative">
            <svg
              viewBox="0 0 920 540"
              className="w-full h-auto max-h-[580px] drop-shadow-sm select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Sun Gradient */}
                <radialGradient id="diagSunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EA580C" />
                </radialGradient>

                {/* Cable Flow Gradients */}
                <linearGradient id="dcPowerFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>

                <linearGradient id="acPowerFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>

                <linearGradient id="gridPowerFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>

                <filter id="diagGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. SUN NODE */}
              <g
                transform="translate(80, 20)"
                onMouseEnter={() => setHoveredNode("sun")}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                {/* Sun Rays */}
                <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
                  <line x1="60" y1="18" x2="60" y2="4" />
                  <line x1="88" y1="30" x2="98" y2="20" />
                  <line x1="102" y1="60" x2="116" y2="60" />
                  <line x1="88" y1="90" x2="98" y2="100" />
                  <line x1="60" y1="102" x2="60" y2="116" />
                  <line x1="32" y1="90" x2="22" y2="100" />
                  <line x1="18" y1="60" x2="4" y2="60" />
                  <line x1="32" y1="30" x2="22" y2="20" />
                </g>
                <circle cx="60" cy="60" r="32" fill="url(#diagSunGlow)" filter="url(#diagGlow)" />
                <text x="60" y="65" textAnchor="middle" fill="#78350F" fontSize="11" fontWeight="800" fontFamily="sans-serif">
                  SUN
                </text>

                {/* Sunlight Photons Flowing to Panel */}
                <path
                  d="M60,105 Q70,140 100,165"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  strokeLinecap="round"
                  className={activeMode !== "night" ? "animate-pulse" : "opacity-30"}
                />
                <path
                  d="M75,100 Q95,135 125,160"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  strokeLinecap="round"
                  className={activeMode !== "night" ? "animate-pulse" : "opacity-30"}
                />
                <path
                  d="M90,90 Q120,130 150,155"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  strokeLinecap="round"
                  className={activeMode !== "night" ? "animate-pulse" : "opacity-30"}
                />
              </g>

              {/* 2. SOLAR PANEL NODE */}
              <g
                transform="translate(60, 180)"
                onMouseEnter={() => setHoveredNode("panel")}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                {/* Panel Frame */}
                <polygon points="20,80 180,40 210,120 50,160" fill="#0F172A" stroke="#0284C7" strokeWidth="2.5" />
                {/* Grid Cells (3x4) */}
                <g stroke="#38BDF8" strokeWidth="1" fill="#0B132B" opacity="0.95">
                  <polygon points="24,80 64,70 71,98 31,108" />
                  <polygon points="68,69 108,59 115,87 75,97" />
                  <polygon points="112,58 152,48 159,76 119,86" />
                  <polygon points="156,47 176,42 183,70 163,75" />

                  <polygon points="35,112 75,102 82,130 42,140" />
                  <polygon points="79,101 119,91 126,119 86,129" />
                  <polygon points="123,90 163,80 170,108 130,118" />
                  <polygon points="167,79 187,74 194,102 174,107" />
                </g>

                {/* Pole Stand */}
                <rect x="110" y="145" width="12" height="95" fill="#334155" rx="3" />
                <ellipse cx="116" cy="240" rx="30" ry="8" fill="#1E293B" />

                {/* Node Label */}
                <rect x="34" y="255" width="164" height="30" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                <text x="116" y="274" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="800" fontFamily="sans-serif">
                  PV SOLAR PANEL (DC)
                </text>
              </g>

              {/* DC CABLES (Panel to Inverter) */}
              <g>
                <path
                  d="M172,270 L380,270"
                  stroke={activeMode === "night" ? "#CBD5E1" : "url(#dcPowerFlow)"}
                  strokeWidth="3.5"
                  strokeDasharray={activeMode === "night" ? "none" : "8,4"}
                />
                <circle cx="280" cy="270" r="4" fill="#F59E0B" className={activeMode !== "night" ? "animate-ping" : "hidden"} />
                <text x="280" y="260" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="700" fontFamily="monospace">
                  DC POWER FLOW
                </text>
              </g>

              {/* 3. CENTRAL HYBRID INVERTER NODE */}
              <g
                transform="translate(380, 200)"
                onMouseEnter={() => setHoveredNode("inverter")}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                {/* Inverter Box */}
                <rect x="0" y="0" width="140" height="150" rx="18" fill="#0F172A" stroke="#F59E0B" strokeWidth="2.5" />
                {/* Screen Display */}
                <rect x="15" y="18" width="110" height="42" rx="6" fill="#0284C7" opacity="0.2" stroke="#38BDF8" strokeWidth="1" />
                <text x="70" y="36" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="800" fontFamily="monospace">
                  98.6% EFFICIENCY
                </text>
                <text x="70" y="52" textAnchor="middle" fill="#FEF08A" fontSize="10" fontWeight="700" fontFamily="monospace">
                  {activeMode === "night" ? "BATTERY DISCHARGE" : activeMode === "grid-export" ? "GRID EXPORTING" : "SOLAR PRIORITY"}
                </text>

                {/* Rotating Gears / Status Icon */}
                <circle cx="70" cy="92" r="22" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                <path
                  d="M62,92 L78,92 M70,84 L70,100 M64,86 L76,98 M76,86 L64,98"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-spin origin-[70px_92px]"
                />

                {/* Inverter Ports */}
                <circle cx="0" cy="70" r="5" fill="#F59E0B" />
                <circle cx="70" cy="150" r="5" fill="#10B981" />
                <circle cx="140" cy="45" r="5" fill="#0284C7" />
                <circle cx="140" cy="105" r="5" fill="#0284C7" />

                {/* Node Title */}
                <rect x="-10" y="160" width="160" height="32" rx="8" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="70" y="180" textAnchor="middle" fill="#FEF08A" fontSize="12" fontWeight="800" fontFamily="sans-serif">
                  HYBRID INVERTER
                </text>
              </g>

              {/* 4. BATTERY STORAGE (Under Inverter) */}
              {/* Battery Bi-Directional Cable */}
              <path
                d="M450,350 L450,400"
                stroke={activeMode === "night" ? "#F59E0B" : "#10B981"}
                strokeWidth="3.5"
                strokeDasharray="6,4"
              />

              <g
                transform="translate(380, 400)"
                onMouseEnter={() => setHoveredNode("battery")}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                <rect x="0" y="0" width="140" height="95" rx="14" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                <rect x="15" y="-6" width="18" height="6" rx="2" fill="#94A3B8" />
                <rect x="107" y="-6" width="18" height="6" rx="2" fill="#94A3B8" />

                {/* Terminals (+/-) */}
                <text x="24" y="22" fill="#EF4444" fontSize="14" fontWeight="bold" textAnchor="middle">+</text>
                <text x="116" y="22" fill="#3B82F6" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>

                {/* Battery Energy Bar */}
                <rect x="25" y="32" width="90" height="24" rx="6" fill="#1E293B" stroke="#10B981" strokeWidth="1" />
                <rect x="28" y="35" width="75" height="18" rx="4" fill="#10B981" className="animate-pulse" />
                <text x="70" y="48" textAnchor="middle" fill="#064E3B" fontSize="10" fontWeight="900" fontFamily="monospace">
                  LITHIUM ESS (88%)
                </text>

                <text x="70" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif">
                  BATTERY STORAGE
                </text>
              </g>

              {/* 5. NET METER & UTILITY GRID (Top Right) */}
              {/* Cable to Net Meter */}
              <path
                d="M520,245 L620,245 L620,110 L680,110"
                stroke={activeMode === "night" ? "#94A3B8" : "url(#gridPowerFlow)"}
                strokeWidth="3"
                strokeDasharray="6,4"
              />

              {/* Net Meter Node */}
              <g
                transform="translate(680, 65)"
                onMouseEnter={() => setHoveredNode("netmeter")}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                <rect x="0" y="0" width="85" height="85" rx="12" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                <rect x="10" y="12" width="65" height="30" rx="4" fill="#0F172A" />
                <text x="42" y="32" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700" fontFamily="monospace">
                  {activeMode === "grid-export" ? "◄ -45.2 kWh" : "► +12.0 kWh"}
                </text>
                <text x="42" y="65" textAnchor="middle" fill="#0F172A" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">
                  NET METER
                </text>
              </g>

              {/* Net Meter to Grid Transmission Tower */}
              <path d="M765,110 L810,110" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="4,4" />

              {/* Transmission Grid Tower */}
              <g transform="translate(805, 30)">
                {/* Tower Truss Frame */}
                <path
                  d="M35,10 L10,150 M35,10 L60,150 M18,60 L52,60 M14,100 L56,100 M24,10 L0,35 M46,10 L70,35 M18,60 L70,35 M52,60 L0,35 M14,100 L52,60 M56,100 L18,60"
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <text x="35" y="170" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="800" fontFamily="sans-serif">
                  NATIONAL GRID
                </text>
              </g>

              {/* 6. HOME & FACILITY LOAD (Bottom Right) */}
              {/* Cable to Home */}
              <path
                d="M520,305 L660,305 L660,340 L700,340"
                stroke="url(#acPowerFlow)"
                strokeWidth="3.5"
                strokeDasharray="6,4"
              />

              <g
                transform="translate(700, 270)"
                onMouseEnter={() => setHoveredNode("home")}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                {/* Modern Roof & Building */}
                <polygon points="65,15 10,65 120,65" fill="#D97706" />
                <rect x="20" y="65" width="90" height="75" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
                <rect x="52" y="90" width="26" height="50" fill="#0F172A" />
                <rect x="30" y="78" width="18" height="18" fill="#38BDF8" opacity="0.6" />
                <rect x="82" y="78" width="18" height="18" fill="#38BDF8" opacity="0.6" />

                <text x="65" y="165" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="800" fontFamily="sans-serif">
                  HOME &amp; FACILITY (AC)
                </text>
              </g>
            </svg>
          </div>

          {/* Key Node Explanation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100 text-left">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <Sun className="w-4 h-4 text-amber-600 shrink-0" />
                <span>1. Solar PV Modules</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Captures radiant solar irradiance and generates direct current (DC) electricity with up to 22.8% module efficiency.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
                <Cpu className="w-4 h-4 text-sky-600 shrink-0" />
                <span>2. Hybrid Inverter</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The smart brain routing clean power between appliances, battery storage, and the national grid with micro-second transfer.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                <BatteryCharging className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3. Energy Storage System (ESS / BESS)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stores daytime surplus energy in Tier-1 Lithium (LiFePO4) battery packs for silent, continuous nighttime power.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900">
                <RefreshCw className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>4. Bi-Directional Net Meter</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exports excess solar energy directly into the BPDB/NESCO/DESCO grid to offset monthly billing under SREDA guidelines.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
