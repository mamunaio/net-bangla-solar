"use client";

import React, { useState } from "react";
import {
  SunMedium,
  Building2,
  Mail,
  Globe,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Send,
  Layers,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  location?: string;
}

const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural",
  "Government / Institutional",
];

export function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    propertyType: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (data.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number (at least 6 digits).";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email format (e.g. name@domain.com).";
    }

    if (!data.propertyType) {
      newErrors.propertyType = "Property Type selection is required.";
    }

    if (!data.location.trim()) {
      newErrors.location = "Location / Address is required.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const validationErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name as keyof FormErrors],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      propertyType: true,
      location: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(
      `Solar Project Consultation: ${formData.propertyType} - ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Net Bangla Solar Consultation Inquiry Details:\n\n` +
        `• Full Name: ${formData.fullName}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email}\n` +
        `• Property Type: ${formData.propertyType}\n` +
        `• Location / Address: ${formData.location}\n` +
        `• Message / Energy Requirements:\n${
          formData.message.trim() ? formData.message : "None provided"
        }\n\n` +
        `Sent via Net Bangla Solar Official Web Consultation Form`
    );
    window.location.href = `mailto:mamun@netbanglaltd.com?cc=info@netbanglaltd.com&subject=${subject}&body=${body}`;
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      propertyType: "",
      location: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Solar Engineering Consultation and Contact"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] max-w-full h-[550px] rounded-full bg-emerald-500/[0.06] blur-[160px] -z-10"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Official Engineering & Contact Context */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <SunMedium className="w-3.5 h-3.5 text-amber-400" />
                <span>START YOUR SOLAR PROJECT</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
                Get in Touch with Our{" "}
                <span className="gradient-text-solar">Solar Engineers</span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-solar-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Tell us about your property, energy requirements, and project
                needs. Our team can assess the application and guide the next
                steps for your solar system.
              </p>

              {/* Documented Engineering & Corporate Credentials Card */}
              <div className="p-6 rounded-2xl bg-[#041209]/80 border border-emerald-500/20 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-semibold leading-snug">
                      NET BANGLA SOLAR
                    </h3>
                    <p className="text-slate-400 text-xs">
                      A Division of Net Bangla Limited
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400">Engineering Supervision:</span>
                      <p className="text-white font-medium">
                        Engr. Md. Mamunur Rahman (CEO)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400">Operational Profile:</span>
                      <p className="text-white font-medium">
                        Turnkey Solar EPC • Established May 28, 2014
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400">Official Engineering Inquiries:</span>
                      <div className="flex flex-col sm:flex-row sm:gap-3 mt-0.5">
                        <a
                          href="mailto:mamun@netbanglaltd.com"
                          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                        >
                          mamun@netbanglaltd.com
                        </a>
                        <a
                          href="mailto:info@netbanglaltd.com"
                          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                        >
                          info@netbanglaltd.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400">Official Website:</span>
                      <p className="text-slate-200 font-mono">netbanglaenergy.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Context Strip */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-slate-400 pt-2 border-t border-white/10">
              <span className="text-emerald-400 font-semibold">12+ Years Heritage</span>
              <span aria-hidden="true" className="text-slate-600">
                &bull;
              </span>
              <span className="text-slate-300">Net Metering Systems</span>
              <span aria-hidden="true" className="text-slate-600">
                &bull;
              </span>
              <span className="text-emerald-300 font-semibold">Commercial & Industrial EPC</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Official Consultation / Quote Form Area */}
          <div
            id="quote"
            className="lg:col-span-7 rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-[#091e13]/90 via-[#05130b]/95 to-[#020804] p-6 sm:p-8 md:p-10 shadow-[0_0_80px_-20px_rgba(16,185,129,0.2)] backdrop-blur-2xl scroll-mt-24 lg:scroll-mt-28"
          >
            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <SunMedium className="w-4 h-4 text-amber-400" />
                <span>SOLAR CONSULTATION REQUEST</span>
              </div>
              <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Request a Solar Consultation
              </h3>
              <p className="text-solar-text-secondary text-sm sm:text-base leading-relaxed">
                Share your property details and energy requirements with our
                solar engineering team. We&apos;ll use the information to
                understand your application and determine the appropriate next
                steps.
              </p>
            </div>

            {/* Conditional Display: Form or Submission Integration Notice */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Field 1: Full Name */}
                <div>
                  <label
                    htmlFor="consultation-name"
                    className="block text-sm font-medium text-slate-200 mb-2"
                  >
                    Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="consultation-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={
                        errors.fullName ? "name-error" : undefined
                      }
                      placeholder="e.g. Engr. Rafiqul Islam"
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b] transition-colors ${
                        errors.fullName
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-white/15 hover:border-white/25 focus:border-emerald-400"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-xs text-rose-400 flex items-center gap-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Grid for Field 2 & Field 3: Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Field 2: Phone */}
                  <div>
                    <label
                      htmlFor="consultation-phone"
                      className="block text-sm font-medium text-slate-200 mb-2"
                    >
                      Phone <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="consultation-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      placeholder="e.g. +880 1700-000000"
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b] transition-colors ${
                        errors.phone
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-white/15 hover:border-white/25 focus:border-emerald-400"
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 3: Email */}
                  <div>
                    <label
                      htmlFor="consultation-email"
                      className="block text-sm font-medium text-slate-200 mb-2"
                    >
                      Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="consultation-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      placeholder="e.g. contact@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b] transition-colors ${
                        errors.email
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-white/15 hover:border-white/25 focus:border-emerald-400"
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid for Field 4 & Field 5: Property Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Field 4: Property Type */}
                  <div>
                    <label
                      htmlFor="consultation-property"
                      className="block text-sm font-medium text-slate-200 mb-2"
                    >
                      Property Type <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="consultation-property"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.propertyType}
                      aria-describedby={
                        errors.propertyType ? "property-error" : undefined
                      }
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/70 border text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b] transition-colors ${
                        errors.propertyType
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-white/15 hover:border-white/25 focus:border-emerald-400"
                      }`}
                    >
                      <option value="" disabled className="bg-[#05130b] text-slate-400">
                        Select Property Type
                      </option>
                      {PROPERTY_TYPES.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-[#05130b] text-white"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p
                        id="property-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.propertyType}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 5: Location / Address */}
                  <div>
                    <label
                      htmlFor="consultation-location"
                      className="block text-sm font-medium text-slate-200 mb-2"
                    >
                      Location / Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="consultation-location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.location}
                      aria-describedby={
                        errors.location ? "location-error" : undefined
                      }
                      placeholder="e.g. Gazipur / Savar / Dhaka"
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-sm text-white placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b] transition-colors ${
                        errors.location
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-white/15 hover:border-white/25 focus:border-emerald-400"
                      }`}
                    />
                    {errors.location && (
                      <p
                        id="location-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Field 6: Message / Energy Requirements (Optional) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="consultation-message"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Message / Energy Requirements
                    </label>
                    <span className="text-xs text-slate-400 font-normal">
                      Optional
                    </span>
                  </div>
                  <textarea
                    id="consultation-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current energy requirements, facility, load, or solar project."
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/15 hover:border-white/25 focus:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b] text-sm text-white placeholder-slate-500 transition-colors resize-y"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-black bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_30px_rgba(34,197,94,0.35)] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05130b]"
                  >
                    <span>Request a Solar Consultation</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            ) : (
              /* Verified Submission State & Email Direct Routing */
              <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-6 animate-in fade-in duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-bold mb-1">
                      Consultation Inquiry Verified
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Your project inquiry fields have been validated. Live direct
                      database/API submission is currently in configuration. You
                      can immediately transmit these structured specifications
                      directly to our engineering desk via email.
                    </p>
                  </div>
                </div>

                {/* Structured Summary of User's Inputs */}
                <div className="p-4 rounded-xl bg-[#041209] border border-white/10 space-y-2 text-xs font-mono text-slate-300">
                  <div className="text-emerald-400 font-semibold mb-2">
                    Inquiry Payload Summary:
                  </div>
                  <p>
                    <span className="text-slate-500">Name:</span>{" "}
                    <span className="text-white">{formData.fullName}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Phone:</span>{" "}
                    <span className="text-white">{formData.phone}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Email:</span>{" "}
                    <span className="text-white">{formData.email}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Property Type:</span>{" "}
                    <span className="text-white">{formData.propertyType}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Location:</span>{" "}
                    <span className="text-white">{formData.location}</span>
                  </p>
                  {formData.message && (
                    <p>
                      <span className="text-slate-500">Requirements:</span>{" "}
                      <span className="text-white">{formData.message}</span>
                    </p>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Edit Inquiry Details</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
