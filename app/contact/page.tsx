"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Building2,
  Factory,
  Home,
  Sprout,
  Calculator,
  ArrowRight,
  Sparkles,
  Headphones,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    facilityType: "industrial",
    location: "",
    monthlyBill: "",
    roofArea: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* HERO */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/10 blur-[120px] -z-10"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wide uppercase">
                <span>NATIONWIDE TURNKEY EPC &bull; RAPID RESPONSE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Get In Touch with Our <span className="gradient-text-solar">Solar Expert</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Request a free on-site feasibility audit, 3D LiDAR shading layout, and customized
                SREDA-compliant net metering proposal for your facility.
              </p>
            </div>
          </Container>
        </section>

        {/* MAIN CONTACT & FORM SECTION */}
        <section className="py-14 sm:py-18">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* LEFT COLUMN: CONTACT CARDS & HQ DETAILS (5 COLS) */}
              <div className="lg:col-span-5 space-y-6 text-left">
                {/* Corporate HQ Card */}
                <div className="p-7 rounded-3xl bg-slate-900 text-white border border-amber-500/30 shadow-xl space-y-6 relative overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-amber-500/15 blur-[70px]"
                  />

                  <div className="space-y-1 relative z-10">
                    <span className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider">
                      CORPORATE HEADQUARTERS
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Net Bangla Limited (Solar Wing)
                    </h3>
                  </div>

                  <div className="space-y-4 pt-2 text-xs sm:text-sm text-slate-200 relative z-10">
                    {/* Office Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Dhaka Head Office</div>
                        <div className="text-slate-300 mt-0.5 leading-relaxed">
                          Tejgaon Commercial Area / Mohakhali DOHS, Dhaka, Bangladesh.
                        </div>
                      </div>
                    </div>

                    {/* Hotline Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Direct EPC Hotline</div>
                        <div className="text-amber-400 font-mono font-bold mt-0.5 text-base">
                          +880 1711-000000 / +880 2-9880000
                        </div>
                        <div className="text-[11px] text-slate-400">Available Sun–Thu, 9 AM – 6 PM</div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Official Engineering Inquiries</div>
                        <div className="text-amber-300 font-medium mt-0.5">
                          solar@netbangla.com &bull; info@netbangla.com
                        </div>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Operational Hours</div>
                        <div className="text-slate-300 mt-0.5">
                          Sunday – Thursday: 9:00 AM – 6:00 PM<br />
                          Emergency O&M Support: 24/7 Live Monitoring
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant Calculator Card */}
                <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200/90 shadow-sm text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>NEED AN INSTANT ESTIMATE?</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Try Our Solar Rooftop ROI Calculator
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Estimate required kWp capacity, monthly savings, Capex recovery timeline, and 25-year cumulative cash flow in seconds.
                  </p>
                  <Link
                    href="/calculator"
                    className="btn-primary-solar inline-flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold text-slate-950 mt-1 shadow-sm"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Launch ROI Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: INTERACTIVE PROPOSAL & AUDIT FORM (7 COLS) */}
              <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xl text-left">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Audit Request Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our senior solar engineer will contact you at <strong>{formData.phone}</strong> within 24 hours to schedule the on-site feasibility inspection.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1 border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        Schedule a Free On-Site Feasibility Audit
                      </h3>
                      <p className="text-xs text-slate-500">
                        Fill out the details below and our engineering team will prepare your custom 3D solar layout.
                      </p>
                    </div>

                    {/* Facility Type Selector */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Facility Category
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: "industrial", label: "Industrial EPC", icon: Factory },
                          { id: "commercial", label: "Commercial", icon: Building2 },
                          { id: "residential", label: "Residential", icon: Home },
                          { id: "agricultural", label: "Agricultural", icon: Sprout },
                        ].map((item) => {
                          const Icon = item.icon;
                          const isSelected = formData.facilityType === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, facilityType: item.id })}
                              className={cn(
                                "p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 shadow-2xs",
                                isSelected
                                  ? "bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-xs scale-102"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-white"
                              )}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-xs">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Engr. Arif Hossain"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 01711-XXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none font-mono"
                        />
                      </div>
                    </div>

                    {/* Company Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Organization Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Textiles Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. info@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Location & Monthly Bill */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Facility Location / District *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gazipur / Savar / Chattogram"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Estimated Monthly Electricity Bill
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ৳ 5,00,000 / month"
                          value={formData.monthlyBill}
                          onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Rooftop Details & Special Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. 25,000 sq.ft tin shed roof, 33kV dedicated transformer, interested in net-metering & zero-downtime installation."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary-solar w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-slate-950 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Free On-Site Feasibility Audit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
