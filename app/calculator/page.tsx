"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calculator,
  Zap,
  TrendingUp,
  DollarSign,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Factory,
  Home,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  Sparkles,
  Award,
  Clock,
  Leaf,
  Layers,
  HelpCircle,
  FileText,
  Send,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

type SystemSegment = "industrial" | "commercial" | "residential";

interface SegmentConfig {
  id: SystemSegment;
  name: string;
  bnName: string;
  icon: React.ElementType;
  defaultBill: number;
  tariffPerKWh: number;
  sqftPerKWp: number;
  capexPerKWp: number;
  daytimeShare: number;
  description: string;
}

const segmentConfigs: Record<SystemSegment, SegmentConfig> = {
  industrial: {
    id: "industrial",
    name: "Industrial & Factory",
    bnName: "শিল্প কারখানা ও টেক্সটাইল মিল",
    icon: Factory,
    defaultBill: 500000, // 5 Lakh BDT
    tariffPerKWh: 12.8,
    sqftPerKWp: 85,
    capexPerKWp: 64000,
    daytimeShare: 0.75,
    description: "HT / LT-3 industrial tariff, maximum daytime load offset & diesel generator reduction.",
  },
  commercial: {
    id: "commercial",
    name: "Commercial Complex & Office",
    bnName: "বাণিজ্যিক ভবন ও কর্পোরেট অফিস",
    icon: Building2,
    defaultBill: 180000, // 1.8 Lakh BDT
    tariffPerKWh: 13.5,
    sqftPerKWp: 90,
    capexPerKWp: 72000,
    daytimeShare: 0.65,
    description: "Commercial tariff peak offset, net metering with national grid & green building compliance.",
  },
  residential: {
    id: "residential",
    name: "Residential Estate & Rooftop",
    bnName: "বাসাবাড়ির ছাদ ও রেসিডেন্সিয়াল ভবন",
    icon: Home,
    defaultBill: 35000, // 35k BDT
    tariffPerKWh: 10.5,
    sqftPerKWp: 95,
    capexPerKWp: 82000,
    daytimeShare: 0.45,
    description: "LT-A domestic slab reduction, optional hybrid battery backup for 24/7 uninterrupted power.",
  },
};

const billPresets: Record<SystemSegment, number[]> = {
  industrial: [100000, 300000, 500000, 1000000, 2500000, 5000000],
  commercial: [50000, 100000, 200000, 500000, 1000000],
  residential: [10000, 25000, 50000, 100000],
};

function formatBDT(amount: number): string {
  if (amount >= 10000000) {
    const crore = amount / 10000000;
    return `৳ ${crore.toFixed(2)} Crore`;
  }
  if (amount >= 100000) {
    const lakh = amount / 100000;
    return `৳ ${lakh.toFixed(2)} Lakh`;
  }
  return `৳ ${Math.round(amount).toLocaleString("en-BD")}`;
}

export default function SolarCalculatorPage() {
  const [segment, setSegment] = useState<SystemSegment>("industrial");
  const config = segmentConfigs[segment];

  // User Interactive Inputs
  const [monthlyBill, setMonthlyBill] = useState<number>(config.defaultBill);
  const [roofArea, setRoofArea] = useState<number>(15000);
  const [roofType, setRoofType] = useState<"concrete" | "tin" | "shed">("tin");
  const [hasNetMetering, setHasNetMetering] = useState<boolean>(true);

  // Lead Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    location: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Switch segment handler
  const handleSegmentChange = (newSegment: SystemSegment) => {
    setSegment(newSegment);
    const newConfig = segmentConfigs[newSegment];
    setMonthlyBill(newConfig.defaultBill);
    if (newSegment === "industrial") setRoofArea(20000);
    else if (newSegment === "commercial") setRoofArea(6000);
    else setRoofArea(2500);
  };

  // Calculations Engine
  const calculations = useMemo(() => {
    // 1. Monthly energy consumed (kWh)
    const monthlyKWh = monthlyBill / config.tariffPerKWh;

    // 2. Solar peak sun hours in BD: ~4.25 hrs/day = ~127.5 kWh / kWp / month
    const kWhPerKWpPerMonth = 128;

    // 3. System size needed to offset ~60-80% depending on segment
    const targetOffsetFactor = hasNetMetering ? 0.75 : config.daytimeShare;
    const requiredKWpByBill = (monthlyKWh * targetOffsetFactor) / kWhPerKWpPerMonth;

    // 4. Max capacity permitted by roof area
    const maxKWpByRoof = roofArea / config.sqftPerKWp;

    // Recommended system capacity (bounded by roof & bill)
    const recommendedKWp = Math.max(
      3,
      Math.min(Math.round(requiredKWpByBill), Math.round(maxKWpByRoof))
    );

    // Actual roof area utilized
    const utilizedRoofArea = Math.round(recommendedKWp * config.sqftPerKWp);

    // Estimated monthly generation (kWh)
    const monthlyGenerationKWh = Math.round(recommendedKWp * kWhPerKWpPerMonth);
    const annualGenerationKWh = monthlyGenerationKWh * 12;

    // Financial Savings
    const estimatedMonthlySavings = Math.min(
      monthlyBill,
      Math.round(monthlyGenerationKWh * config.tariffPerKWh)
    );
    const estimatedAnnualSavings = estimatedMonthlySavings * 12;

    // Turnkey EPC Project Capex Range
    const baseCapex = recommendedKWp * config.capexPerKWp;
    const minCapex = Math.round(baseCapex * 0.95);
    const maxCapex = Math.round(baseCapex * 1.08);
    const avgCapex = (minCapex + maxCapex) / 2;

    // Payback Period
    const paybackYears = avgCapex / estimatedAnnualSavings;
    const paybackYearsInt = Math.floor(paybackYears);
    const paybackMonths = Math.round((paybackYears - paybackYearsInt) * 12);

    // 25-Year Cumulative Savings (Accounting for 0.55% panel degradation and 3% tariff increase)
    let cumulativeSavings = 0;
    let currentAnnualSavings = estimatedAnnualSavings;
    for (let yr = 1; yr <= 25; yr++) {
      cumulativeSavings += currentAnnualSavings;
      currentAnnualSavings = currentAnnualSavings * (1 - 0.0055) * 1.03;
    }
    const net25YearProfit = cumulativeSavings - avgCapex;

    // Environmental Offset
    // 0.82 kg CO2 per kWh, 21.7 kg CO2 absorbed per mature tree per year
    const annualCO2Tons = Math.round((annualGenerationKWh * 0.82) / 1000);
    const treesEquivalent = Math.round((annualGenerationKWh * 0.82) / 21.7);

    // 25-Year Milestones for Cashflow Chart
    const cashflowMilestones = [
      { year: 1, netCash: Math.round(estimatedAnnualSavings - avgCapex) },
      { year: 3, netCash: Math.round(estimatedAnnualSavings * 3 - avgCapex) },
      { year: 5, netCash: Math.round(estimatedAnnualSavings * 5.2 - avgCapex) },
      { year: 10, netCash: Math.round(estimatedAnnualSavings * 11.5 - avgCapex) },
      { year: 15, netCash: Math.round(estimatedAnnualSavings * 18.8 - avgCapex) },
      { year: 25, netCash: Math.round(net25YearProfit) },
    ];

    return {
      recommendedKWp,
      utilizedRoofArea,
      monthlyGenerationKWh,
      annualGenerationKWh,
      estimatedMonthlySavings,
      estimatedAnnualSavings,
      minCapex,
      maxCapex,
      avgCapex,
      paybackYears,
      paybackYearsInt,
      paybackMonths,
      cumulativeSavings,
      net25YearProfit,
      annualCO2Tons,
      treesEquivalent,
      cashflowMilestones,
    };
  }, [monthlyBill, roofArea, segment, hasNetMetering, config]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Range Slider boundaries & percentage calculation
  const billMin = segment === "residential" ? 5000 : 50000;
  const billMax =
    segment === "industrial"
      ? 5000000
      : segment === "commercial"
      ? 1500000
      : 200000;
  const billStep = segment === "residential" ? 2500 : 25000;
  const billPercent = Math.min(
    100,
    Math.max(0, ((monthlyBill - billMin) / (billMax - billMin)) * 100)
  );

  const roofMin = segment === "residential" ? 800 : 2000;
  const roofMax = segment === "industrial" ? 100000 : 25000;
  const roofStep = 500;
  const roofPercent = Math.min(
    100,
    Math.max(0, ((roofArea - roofMin) / (roofMax - roofMin)) * 100)
  );

  return (
    <div className="min-h-screen w-full bg-white solar-ambient-bg flex flex-col justify-between overflow-x-hidden">
      <main className="flex-1 pt-24 sm:pt-28 pb-16 lg:pb-20">
        {/* TOP HEADER BREADCRUMB STRIP */}
        <div className="border-b border-slate-200/80 bg-slate-50/70 py-3.5">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-amber-600" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="hidden sm:inline-flex items-center gap-1 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                SREDA & Net-Metering Compliant
              </span>
              <a
                href="tel:+8801708485640"
                className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>+880 1708-485640</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-8 sm:pt-10 lg:pt-12 space-y-10 lg:space-y-14">
        {/* HERO TITLE BLOCK */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase">
            <span>SOLAR ROI & SAVINGS CALCULATOR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Calculate Your{" "}
            <span className="gradient-text-solar">Rooftop Solar ROI</span> &
            25-Year Wealth Yield
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Estimate your recommended solar capacity (kWp), monthly electricity
            savings, payback timeline, and 25-year cumulative return engineered
            for Bangladesh utility tariffs.
          </p>
        </div>

        {/* 1. SECTOR SELECTOR TABS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {(
            Object.keys(segmentConfigs) as SystemSegment[]
          ).map((segKey) => {
            const seg = segmentConfigs[segKey];
            const Icon = seg.icon;
            const isSelected = segment === segKey;

            return (
              <button
                key={seg.id}
                type="button"
                onClick={() => handleSegmentChange(segKey)}
                className={cn(
                  "p-5 sm:p-6 rounded-3xl text-left border transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between space-y-3 relative overflow-hidden group shadow-sm",
                  isSelected
                    ? "bg-amber-50/70 border-amber-500 shadow-md ring-2 ring-amber-400/30"
                    : "bg-white border-slate-200/90 hover:border-amber-400 hover:bg-slate-50/60 hover:-translate-y-0.5"
                )}
              >
                {/* Top indicator bar */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-1 transition-opacity",
                    isSelected ? "bg-amber-500 opacity-100" : "opacity-0"
                  )}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xs",
                      isSelected
                        ? "bg-amber-500 text-slate-950 shadow-amber-500/30"
                        : "bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-700"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                      SELECTED
                    </span>
                  )}
                </div>

                <div>
                  <h3
                    className={cn(
                      "text-base sm:text-lg font-bold tracking-tight transition-colors",
                      isSelected ? "text-amber-900" : "text-slate-900"
                    )}
                  >
                    {seg.name}
                  </h3>
                  <div className="text-xs text-amber-800 font-medium">
                    {seg.bnName}
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. MAIN CALCULATOR GRID (INPUTS + LIVE RESULTS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: INTERACTIVE INPUTS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-600" />
                <span>Facility Parameters</span>
              </h2>
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                TARIFF: ~৳{config.tariffPerKWh}/kWh
              </span>
            </div>

            {/* INPUT 1: Monthly Electricity Bill */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="bill-range"
                  className="text-sm font-bold text-slate-800 flex items-center gap-1.5 font-sans"
                >
                  <span>Average Monthly Electricity Bill (BDT)</span>
                </label>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-extrabold font-sans text-amber-600 tracking-tight">
                    {formatBDT(monthlyBill)}
                  </div>
                </div>
              </div>

              {/* Slider with dynamic filled gradient */}
              <div className="py-2">
                <input
                  id="bill-range"
                  type="range"
                  min={billMin}
                  max={billMax}
                  step={billStep}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${billPercent}%, #E2E8F0 ${billPercent}%, #E2E8F0 100%)`,
                  }}
                  className="solar-range-slider"
                />
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {billPresets[segment].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setMonthlyBill(val)}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-semibold font-sans rounded-xl border transition-all cursor-pointer shadow-2xs",
                      monthlyBill === val
                        ? "bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-xs scale-105"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-800 hover:bg-amber-50/50"
                    )}
                  >
                    {formatBDT(val)}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT 2: Available Rooftop Area */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="roof-range"
                  className="text-sm font-bold text-slate-800 font-sans"
                >
                  Available Shadow-Free Rooftop Area (Sq.Ft)
                </label>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-extrabold font-sans text-slate-900 tracking-tight">
                    {roofArea.toLocaleString("en-BD")}{" "}
                    <span className="text-xs text-slate-500 font-medium">sq.ft</span>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <input
                  id="roof-range"
                  type="range"
                  min={roofMin}
                  max={roofMax}
                  step={roofStep}
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${roofPercent}%, #E2E8F0 ${roofPercent}%, #E2E8F0 100%)`,
                  }}
                  className="solar-range-slider"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 font-sans">
                <span>Minimum: {segment === "residential" ? "800 sq.ft" : "2,000 sq.ft"}</span>
                <span>Area needed for recommended system: ~{calculations.utilizedRoofArea.toLocaleString("en-BD")} sq.ft</span>
              </div>
            </div>

            {/* INPUT 3: Roof Surface Type */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <label className="text-sm font-bold text-slate-800">
                Rooftop Construction Type
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "tin", label: "Tin / Metal Shed", sub: "Clip-lock / Rivet" },
                  { id: "concrete", label: "RCC Concrete", sub: "Ballasted / Anchor" },
                  { id: "shed", label: "Slanted / Canopy", sub: "Elevated Structure" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRoofType(item.id as any)}
                    className={cn(
                      "p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer shadow-2xs hover:-translate-y-0.5 hover:shadow-md",
                      roofType === item.id
                        ? "bg-amber-50 border-amber-500 ring-1 ring-amber-400/30 font-bold shadow-xs"
                        : "bg-slate-50 border-slate-200 hover:border-amber-400 hover:bg-amber-50/40"
                    )}
                  >
                    <div className="text-xs font-bold text-slate-900">{item.label}</div>
                    <div className="text-[10px] text-slate-500">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT 4: Net-Metering Grid Interconnection */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Enable Grid Net-Metering (Bi-Directional Meter)
                </div>
                <div className="text-xs text-slate-500">
                  Export daytime excess solar power to national grid (BPDB, DESCO, DPDC, NESCO).
                </div>
              </div>
              <button
                type="button"
                onClick={() => setHasNetMetering(!hasNetMetering)}
                className={cn(
                  "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                  hasNetMetering ? "bg-amber-500" : "bg-slate-300"
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out",
                    hasNetMetering ? "translate-x-5" : "translate-x-0"
                  )}
                />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: REAL-TIME FINANCIAL RETURN CARD (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-950 text-white shadow-2xl relative overflow-hidden border border-amber-500/40 text-left">
              {/* Background ambient solar glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-500/20 blur-[80px]"
              />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-sans">
                    ESTIMATED SYSTEM SIZE
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight mt-1 flex items-baseline gap-2">
                    <span>{calculations.recommendedKWp}</span>
                    <span className="text-lg text-amber-400 font-semibold">kWp</span>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm">
                  <Sun className="w-6 h-6 animate-spin-slow" />
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="relative z-10 py-6 space-y-4 border-b border-white/10 font-sans">
                {/* Monthly Savings */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">
                    Monthly Electricity Savings:
                  </span>
                  <span className="text-base sm:text-lg font-bold font-sans text-emerald-400">
                    {formatBDT(calculations.estimatedMonthlySavings)} / mo
                  </span>
                </div>

                {/* Annual Savings */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">
                    Annual Net Savings:
                  </span>
                  <span className="text-base sm:text-lg font-bold font-sans text-amber-400">
                    {formatBDT(calculations.estimatedAnnualSavings)} / yr
                  </span>
                </div>

                {/* Turnkey Project Cost */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">
                    Estimated EPC Capex:
                  </span>
                  <span className="text-sm sm:text-base font-bold font-sans text-slate-200">
                    {formatBDT(calculations.minCapex)} – {formatBDT(calculations.maxCapex)}
                  </span>
                </div>

                {/* Payback Period */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-amber-300">
                    Estimated Payback Period:
                  </span>
                  <span className="text-base sm:text-lg font-extrabold font-sans text-amber-300 bg-amber-500/20 px-3 py-1 rounded-xl border border-amber-500/40">
                    {calculations.paybackYearsInt} yrs {calculations.paybackMonths} mos
                  </span>
                </div>
              </div>

              {/* 25-Year Cumulative Wealth Highlight */}
              <div className="relative z-10 pt-6 space-y-2 font-sans">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  <span>25-Year Cumulative Net Profit</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-sans text-emerald-400 tracking-tight">
                  {formatBDT(calculations.net25YearProfit)}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  After paying off the initial Capex in ~{calculations.paybackYearsInt} years, your facility receives free clean power for the remaining 21+ years.
                </p>
              </div>

              {/* CTA Button Scroll to Form */}
              <div className="relative z-10 pt-6">
                <a
                  href="#quote-form"
                  className="btn-primary-solar w-full py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Official EPC Feasibility Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Environmental Metric Pill Box */}
            <div className="group rounded-3xl p-6 bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex items-center gap-4 shadow-sm font-sans">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  Green Climate Impact
                </div>
                <div className="text-sm font-bold text-slate-900 font-sans">
                  Offsets <span className="text-emerald-700 font-extrabold">{calculations.annualCO2Tons} Tons CO₂/year</span> (~{calculations.treesEquivalent.toLocaleString("en-BD")} Trees planted)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 25-YEAR CASH FLOW & BREAK-EVEN PROJECTION */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200/90 shadow-sm text-left space-y-8 font-sans">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold font-sans">
                <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                <span>25-YEAR FINANCIAL TRAJECTORY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Cumulative Net Cashflow & Break-Even Milestones
              </h3>
            </div>
            <div className="text-xs text-slate-500">
              Assumes 0.55% linear panel degradation and conservative 3% annual grid tariff inflation.
            </div>
          </div>

          {/* Milestone Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {calculations.cashflowMilestones.map((m) => {
              const isProfit = m.netCash >= 0;
              return (
                <div
                  key={m.year}
                  className={cn(
                    "group relative p-4 sm:p-5 rounded-2xl border flex flex-col justify-between space-y-3 transition-all duration-300 font-sans cursor-default overflow-hidden",
                    "hover:-translate-y-2 hover:shadow-xl",
                    isProfit
                      ? "bg-emerald-50/40 border-emerald-200/90 hover:bg-emerald-50 hover:border-emerald-500 hover:shadow-emerald-500/15"
                      : m.year === 3
                      ? "bg-amber-50/40 border-amber-300 hover:bg-amber-50/80 hover:border-amber-500 hover:shadow-amber-500/15"
                      : "bg-slate-50/80 border-slate-200 hover:bg-amber-50/30 hover:border-amber-400 hover:shadow-amber-500/10"
                  )}
                >
                  {/* Top Glowing Shimmer Line */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      isProfit
                        ? "bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                        : "bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                    )}
                  />

                  {/* Ambient subtle backdrop on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      isProfit
                        ? "bg-gradient-to-b from-emerald-500/10 to-transparent"
                        : "bg-gradient-to-b from-amber-500/10 to-transparent"
                    )}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
                      YEAR {m.year}
                    </span>
                    {m.year === 3 && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded shadow-xs group-hover:bg-amber-300 group-hover:text-amber-950 transition-colors">
                        BREAK-EVEN
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <div
                      className={cn(
                        "text-base sm:text-lg font-extrabold font-sans tracking-tight transition-transform duration-300 origin-left group-hover:scale-105",
                        isProfit
                          ? "text-emerald-700 group-hover:text-emerald-800"
                          : "text-slate-600 group-hover:text-slate-900"
                      )}
                    >
                      {formatBDT(m.netCash)}
                    </div>
                    <div className="text-[11px] text-slate-500 group-hover:text-slate-600 transition-colors mt-0.5">
                      {isProfit ? "Cumulative Net Gain" : "Capex Recovery Phase"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. PROPOSAL & AUDIT REQUEST FORM */}
        <div
          id="quote-form"
          className="rounded-3xl p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl relative overflow-hidden border border-amber-500/40 text-left scroll-mt-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/15 blur-[100px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Form Intro */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL EPC PROPOSAL REQUEST</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                Lock In Your{" "}
                <span className="text-amber-400">{calculations.recommendedKWp} kWp</span>{" "}
                Turnkey Solar System
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Receive an official, bankable engineering proposal including
                detailed single-line electrical diagrams (SLD), 3D shading
                analysis, and guaranteed SREDA net-metering support.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tier-1 Monocrystalline Bifacial Panels (25-Year Warranty)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>European / Tier-1 On-Grid Smart Inverters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Full Net Metering Application & BPDB/DESCO Sanction</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Proposal Request Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our senior solar EPC engineer will contact you at <span className="font-bold text-slate-900">{formData.phone}</span> within 2 business hours with your customized {calculations.recommendedKWp} kWp feasibility study.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/8801708485640?text=Hello%20Net%20Bangla%20Solar,%20I%20calculated%20a%20${calculations.recommendedKWp}%20kWp%20solar%20system%20for%20my%20facility%20with%20monthly%20bill%20${monthlyBill}%20BDT.%20Please%20send%20the%20official%20proposal.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>Connect on WhatsApp Instantly</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Rafiqul Islam"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 01711-XXXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Factory Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Textiles Ltd"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        District / Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gazipur / Chattogram / Dhaka"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                    <span>
                      System Request: <strong>{calculations.recommendedKWp} kWp</strong> ({formatBDT(monthlyBill)}/mo)
                    </span>
                    <span className="font-mono font-bold text-amber-700">FREE AUDIT</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-solar w-full py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Get Free On-Site Feasibility Audit</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* SOLAR FUNDING PROGRAM (OFFICIAL BROCHURE COMPONENT) */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-left relative overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-400/[0.07] blur-[140px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-emerald-400/[0.05] blur-[120px]"
          />

          {/* Header & Intro Paragraph */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase shadow-sm">
              <span>SOLAR FUNDING PROGRAM</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Zero Upfront Capital &bull;{" "}
              <span className="gradient-text-solar">Manageable Monthly Solar Energy</span>
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Going solar has never been easier. With our groundbreaking Solar Funding Program,
              clients can now install high-quality solar panels without any upfront investment.
              This unique service is designed to eliminate the financial hurdles traditionally
              associated with solar energy adoption. Whether you&apos;re a homeowner looking to cut
              electricity bills or a business aiming to reduce operational costs, Net Bangla Ltd.
              offers a pathway to clean energy that doesn&apos;t require large capital expenditures (CAPEX).
            </p>
          </div>

          {/* Subheader 1: Why Choose Solar Funding (5 Cards) */}
          <div className="space-y-5">
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-bold font-mono tracking-wider uppercase shadow-sm">
                Why Choose Solar Funding
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Zero Upfront Costs</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Start using solar power immediately without paying installation fees.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Lower Electricity Bills</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enjoy reduced utility costs from day one of installation.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Sustainable Energy</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Power your home or business with clean, environmentally responsible renewable energy.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Long-Term Value</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our solar systems are designed for durability and backed by 25-year performance guarantees.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-3 lg:col-span-2">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Energy Independence</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reduce reliance on the utility grid and protect your bottom line from future electricity tariff hikes.
                </p>
              </div>
            </div>
          </div>

          {/* Subheader 2: How It Works (5-Step Sequential Workflow) */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-900 text-emerald-400 text-xs font-bold font-mono tracking-wider uppercase shadow-sm">
                How It Works
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Step 1 */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-left">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                  Step 01
                </span>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  Our experts evaluate your energy needs and site suitability.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-left">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                  Step 02
                </span>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  Receive a tailored solar solution with a clear financial breakdown.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-left">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                  Step 03
                </span>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  Once approved, we handle the entire installation process—from design to execution.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-left">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                  Step 04
                </span>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  Begin paying for your system through manageable monthly payments, often lower than your current energy bills.
                </p>
              </div>

              {/* Step 5 */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 space-y-2 text-left">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded-md">
                  Step 05
                </span>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  Experience reliable solar power and long-term savings, all with dedicated support from our team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. METHODOLOGY & FAQ SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
          <div className="group relative overflow-hidden p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
              Solar Resource Model
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Based on NASA & SREDA meteorological data for Bangladesh, yielding 4.2–4.5 peak sun hours per day (~1,450–1,550 kWh/kWp/year).
            </p>
          </div>

          <div className="group relative overflow-hidden p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
              Net Metering Policy
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Calculations comply with Bangladesh Net Metering Guidelines 2025 under BPDB, BREB, DPDC, DESCO, and NESCO.
            </p>
          </div>

          <div className="group relative overflow-hidden p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
              25-Year Performance
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assumes 0.55% linear annual panel degradation with 84.8% power output retention at Year 25 and 10–15 year inverter lifecycle.
            </p>
          </div>
        </div>
      </Container>
      </main>
      <Footer />
    </div>
  );
}
