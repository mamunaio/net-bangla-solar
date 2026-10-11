"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Factory,
  Building2,
  Home,
  Sprout,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  MapPin,
  Sparkles,
  PhoneCall,
  Calculator,
  Layers,
  Award,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalProvider";
import { cn } from "@/lib/utils";

const facilityTypes = [
  {
    id: "industrial",
    label: "Industrial EPC",
    sub: "100 kWp – 5 MWp",
    desc: "Factory / RMG / Mill",
    icon: Factory,
  },
  {
    id: "commercial",
    label: "Commercial",
    sub: "50 kWp – 500 kWp",
    desc: "Office / Hospital / Mall",
    icon: Building2,
  },
  {
    id: "residential",
    label: "Residential",
    sub: "5 kWp – 50 kWp",
    desc: "Luxury Villa / Duplex",
    icon: Home,
  },
  {
    id: "agricultural",
    label: "Agricultural",
    sub: "10 HP – 100 HP",
    desc: "Irrigation Pump / Farm",
    icon: Sprout,
  },
];

const billPresets: Record<string, string[]> = {
  industrial: ["৳ 2 – 5 Lakh/mo", "৳ 5 – 15 Lakh/mo", "৳ 15 – 35 Lakh/mo", "৳ 35 Lakh+/mo"],
  commercial: ["৳ 50k – 1.5 Lakh/mo", "৳ 1.5 – 4 Lakh/mo", "৳ 4 – 10 Lakh/mo", "৳ 10 Lakh+/mo"],
  residential: ["৳ 10k – 25k/mo", "৳ 25k – 50k/mo", "৳ 50k – 1 Lakh/mo", "৳ 1 Lakh+/mo"],
  agricultural: ["৳ 20k – 50k/mo", "৳ 50k – 1.5 Lakh/mo", "৳ 1.5 – 3 Lakh/mo", "৳ 3 Lakh+/mo"],
};

const roofTypes = [
  { id: "tin", label: "Tin / Metal Shed", sub: "Clip-Lock / Non-Penetrating" },
  { id: "concrete", label: "Concrete RCC", sub: "Elevated / Ballasted" },
  { id: "solaroof", label: "Power Solaroof", sub: "100% Leak-Proof BIPV" },
];

const locationPresets = [
  "Gazipur",
  "Chattogram",
  "Dhaka (Tejgaon / Mirpur / EPZ)",
  "Savar / Ashulia",
  "Narayanganj",
  "Bogura / Rajshahi",
  "Sylhet / Habiganj",
  "Other Location",
];

const primaryGoals = [
  { id: "savings", label: "Maximum Bill Savings (Net Metering)", icon: Zap },
  { id: "backup", label: "24/7 Silent Hybrid Power (Battery ESS)", icon: ShieldCheck },
  { id: "solaroof", label: "Replace Leaking Tin (Power Solaroof)", icon: Layers },
  { id: "payback", label: "Fastest 3-Year Capex Payback", icon: Sparkles },
];

export function QuoteModal() {
  const { isOpen, closeQuoteModal, preselectedFacility } = useQuoteModal();

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [facilityType, setFacilityType] = useState(preselectedFacility || "industrial");
  const [monthlyBill, setMonthlyBill] = useState("৳ 5 – 15 Lakh/mo");
  const [roofType, setRoofType] = useState("tin");
  const [location, setLocation] = useState("Gazipur");
  const [goal, setGoal] = useState("savings");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  // Sync preselected facility
  useEffect(() => {
    if (preselectedFacility) {
      setFacilityType(preselectedFacility);
      setMonthlyBill(billPresets[preselectedFacility]?.[1] || billPresets[preselectedFacility]?.[0] || "");
    }
  }, [preselectedFacility]);

  // Reset step on reopen
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFacilitySelect = (id: string) => {
    setFacilityType(id);
    setMonthlyBill(billPresets[id]?.[1] || billPresets[id]?.[0] || "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  // Rough estimation logic for preview pill
  const getEstimatedCapacity = () => {
    if (facilityType === "industrial") return "150 – 500 kWp";
    if (facilityType === "commercial") return "50 – 200 kWp";
    if (facilityType === "residential") return "10 – 30 kWp";
    return "25 – 100 kWp";
  };

  const getEstimatedSavings = () => {
    if (facilityType === "industrial") return "৳ 25 – 85 Lakh / year";
    if (facilityType === "commercial") return "৳ 8 – 35 Lakh / year";
    if (facilityType === "residential") return "৳ 1.8 – 5.5 Lakh / year";
    return "৳ 4 – 15 Lakh / year";
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Solar Quote Request Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Backdrop with Frosted Blur */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        onClick={closeQuoteModal}
        aria-hidden="true"
      />

      {/* Modal Card Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl sm:rounded-[2rem] border border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_0_30px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col max-h-[92vh] font-sans">
        {/* Top Radiant Amber Shimmer Line */}
        <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 z-30" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between gap-4 shrink-0 bg-slate-50/50">
          <div className="space-y-1 text-left">
            <div className="inline-flex items-center px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-bold font-mono">
              <span>TURNKEY SOLAR EPC &bull; SREDA APPROVED</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              {submitted
                ? "Engineering Request Dispatched"
                : step === 1
                ? "Step 1 of 3: Facility & Electricity Profile"
                : step === 2
                ? "Step 2 of 3: Location & System Goal"
                : "Step 3 of 3: Contact & Instant Feasibility"}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeQuoteModal}
            aria-label="Close quote modal"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shadow-2xs shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3-Step Animated Progress Bar */}
        {!submitted && (
          <div className="w-full bg-slate-100 h-1.5 shrink-0 relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 ease-out"
              style={{
                width: step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%",
              }}
            />
          </div>
        )}

        {/* Modal Body Scroll Area */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-grow text-left space-y-6">
          {submitted ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="py-8 sm:py-10 text-center space-y-5">
              <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Feasibility Audit Confirmed!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your solar inquiry has been received successfully. Our engineering team will review your requirements and get in touch with you within 24 hours with your preliminary solar layout.
                </p>
              </div>

              {/* Estimate Summary Box */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-left max-w-md mx-auto space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Facility Type:</span>
                  <span className="font-bold text-slate-900 uppercase">{facilityType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Estimated Sizing:</span>
                  <span className="font-extrabold text-amber-700">{getEstimatedCapacity()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Est. Annual Net Savings:</span>
                  <span className="font-extrabold text-emerald-700">{getEstimatedSavings()}</span>
                </div>
              </div>

              {/* WhatsApp Direct Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={`https://wa.me/8801711000000?text=Hi%20Net%20Bangla%20Solar,%20I%20just%20submitted%20a%20quote%20request%20for%20my%20${facilityType}%20facility%20in%20${location}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <Link
                  href="/calculator"
                  onClick={closeQuoteModal}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Open Full ROI Calculator</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: FACILITY TYPE & BILL PROFILE */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* 1. Facility Selector */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Select Facility Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {facilityTypes.map((item) => {
                        const Icon = item.icon;
                        const isSelected = facilityType === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleFacilitySelect(item.id)}
                            className={cn(
                              "p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 shadow-2xs hover:-translate-y-0.5",
                              isSelected
                                ? "bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md scale-102"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-white"
                            )}
                          >
                            <Icon className="w-5 h-5" />
                            <div className="text-xs font-bold">{item.label}</div>
                            <div className="text-[10px] opacity-80">{item.sub}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Monthly Electricity Bill Presets */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Approximate Monthly Electricity Bill
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {billPresets[facilityType]?.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setMonthlyBill(b)}
                          className={cn(
                            "py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center",
                            monthlyBill === b
                              ? "bg-amber-50 border-amber-500 text-amber-900 font-bold ring-1 ring-amber-400/40 shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-300 hover:bg-white"
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Roof Construction Type */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Rooftop Construction Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {roofTypes.map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setRoofType(r.id)}
                          className={cn(
                            "p-3 rounded-xl border text-left transition-all cursor-pointer",
                            roofType === r.id
                              ? "bg-amber-50 border-amber-500 text-amber-950 ring-1 ring-amber-400/40 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-white"
                          )}
                        >
                          <div className="text-xs font-bold">{r.label}</div>
                          <div className="text-[10px] text-slate-500">{r.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 1 Next Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary-solar w-full py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950 cursor-pointer shadow-md"
                    >
                      <span>Continue to Step 2: Location & Goals</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: LOCATION & PRIMARY GOAL */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* 1. Location Selector */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Facility Location / District</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {locationPresets.map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setLocation(loc)}
                          className={cn(
                            "py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center",
                            location === loc
                              ? "bg-amber-50 border-amber-500 text-amber-900 font-bold ring-1 ring-amber-400/40 shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-300 hover:bg-white"
                          )}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Primary Objective */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      What is your Primary Solar Goal?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {primaryGoals.map((g) => {
                        const Icon = g.icon;
                        const isSelected = goal === g.id;
                        return (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => setGoal(g.id)}
                            className={cn(
                              "p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3",
                              isSelected
                                ? "bg-amber-50 border-amber-500 text-amber-950 ring-1 ring-amber-400/40 font-bold"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-white"
                            )}
                          >
                            <div className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                              isSelected ? "bg-amber-500 text-slate-950" : "bg-slate-200 text-slate-600"
                            )}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold">{g.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Estimated Live Recommendation Preview */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono font-bold text-amber-800 uppercase">
                        PRELIMINARY RECOMMENDATION
                      </span>
                      <div className="text-xs font-bold text-slate-900">
                        System: <span className="text-amber-700 font-extrabold">{getEstimatedCapacity()}</span> &bull; Savings: <span className="text-emerald-700 font-extrabold">{getEstimatedSavings()}</span>
                      </div>
                    </div>
                    <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  </div>

                  {/* Step 2 Controls */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 px-4 rounded-2xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 btn-primary-solar py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950 cursor-pointer shadow-md"
                    >
                      <span>Continue to Final Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & PROPOSAL DISPATCH */}
              {step === 3 && (
                <div className="space-y-4">
                  {/* Selected Summary Pill */}
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                    <div>
                      <strong>{facilityType.toUpperCase()}</strong> ({location}) &bull; {monthlyBill}
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-amber-700 font-bold hover:underline"
                    >
                      Edit
                    </button>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Arif Hossain"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 01711-XXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Company & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Factory Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Textiles Ltd."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (For 3D PDF Proposal)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. arif@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Additional Notes / Rooftop Sq.Ft (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Approx 20,000 sq.ft roof area, looking for net metering"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-slate-300 text-xs focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  {/* Final Submit Controls */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-3.5 px-4 rounded-2xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 btn-primary-solar py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Free 3D Feasibility Audit</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Modal Footer Note */}
        {!submitted && (
          <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500 shrink-0">
            🔒 100% Privacy Guaranteed &bull; SREDA Certified Engineers &bull; Zero Spam
          </div>
        )}
      </div>
    </div>
  );
}
