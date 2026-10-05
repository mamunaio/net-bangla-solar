"use client";

import React, { useState, useRef, useEffect } from "react";
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
  ChevronDown,
  Check,
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
  // Section hidden as requested (set to false whenever you want to display it again)
  const isHidden = true;
  if (isHidden) {
    return null;
  }

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

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

  const handleSelectPropertyType = (type: string) => {
    const updated = { ...formData, propertyType: type };
    setFormData(updated);
    setTouched((prev) => ({ ...prev, propertyType: true }));
    const validationErrors = validate(updated);
    setErrors((prev) => ({
      ...prev,
      propertyType: validationErrors.propertyType,
    }));
    setIsDropdownOpen(false);
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
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] max-w-full h-[550px] rounded-full bg-amber-400/[0.08] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[500px] h-[350px] rounded-full bg-sky-400/[0.05] blur-[140px] -z-10"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Official Engineering & Contact Context */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-widest uppercase mb-6">
                <span>START YOUR SOLAR PROJECT</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
                Get in Touch with Our{" "}
                <span className="gradient-text-solar">Solar Engineers</span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Tell us about your property, energy requirements, and project
                needs. Our team can assess the application and guide the next
                steps for your solar system.
              </p>

              {/* Documented Engineering & Corporate Credentials Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] space-y-6">
                <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0 shadow-2xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
                      NET BANGLA SOLAR
                    </h3>
                    <p className="text-slate-500 text-sm font-medium mt-0.5">
                      A Division of Net Bangla Limited
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                      <Building2 className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs sm:text-[13px] font-semibold uppercase tracking-wider block">
                        Engineering Supervision:
                      </span>
                      <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                        Engr. Md. Mamunur Rahman (CEO)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                      <Layers className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs sm:text-[13px] font-semibold uppercase tracking-wider block">
                        Operational Profile:
                      </span>
                      <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5">
                        Turnkey Solar EPC &bull; Established May 28, 2014
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs sm:text-[13px] font-semibold uppercase tracking-wider block">
                        Official Inquiries:
                      </span>
                      <a
                        href="mailto:info@netbanglaltd.com"
                        className="inline-flex items-center gap-1.5 text-slate-900 hover:text-amber-700 font-bold text-sm sm:text-base mt-0.5 transition-colors group"
                      >
                        <span>info@netbanglaltd.com</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                      <Globe className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs sm:text-[13px] font-semibold uppercase tracking-wider block">
                        Official Website:
                      </span>
                      <a
                        href="https://netbanglaenergy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-900 hover:text-amber-700 font-mono font-bold text-sm sm:text-base mt-0.5 transition-colors"
                      >
                        <span>netbanglaenergy.com</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Official Consultation / Quote Form Area */}
          <div
            id="quote"
            className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm scroll-mt-24 lg:scroll-mt-28 text-left"
          >
            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                <SunMedium className="w-4 h-4 text-amber-600" />
                <span>SOLAR CONSULTATION REQUEST</span>
              </div>
              <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Request a Solar Consultation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name <span className="text-amber-600">*</span>
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
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 transition-colors ${
                        errors.fullName
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-slate-200 hover:border-slate-300 focus:border-amber-500"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-xs text-rose-600 flex items-center gap-1.5"
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
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Phone <span className="text-amber-600">*</span>
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
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 transition-colors ${
                        errors.phone
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-slate-200 hover:border-slate-300 focus:border-amber-500"
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="mt-1.5 text-xs text-rose-600 flex items-center gap-1.5"
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
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email <span className="text-amber-600">*</span>
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
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 transition-colors ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-slate-200 hover:border-slate-300 focus:border-amber-500"
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-rose-600 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid for Field 4 & Field 5: Property Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Field 4: Property Type (Custom Luxury Dropdown) */}
                  <div className="relative" ref={dropdownRef}>
                    <label
                      id="consultation-property-label"
                      className="block text-sm font-semibold text-slate-700 mb-2 cursor-pointer select-none"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                      Property Type <span className="text-amber-600">*</span>
                    </label>

                    {/* Trigger Button */}
                    <button
                      type="button"
                      id="consultation-property"
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      aria-labelledby="consultation-property-label consultation-property"
                      onClick={() => {
                        setIsDropdownOpen((prev) => !prev);
                        if (!touched.propertyType) {
                          setTouched((prev) => ({ ...prev, propertyType: true }));
                        }
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-left flex items-center justify-between transition-all duration-200 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 ${
                        errors.propertyType
                          ? "border-rose-500 focus:border-rose-500"
                          : isDropdownOpen
                          ? "border-amber-500 bg-white ring-2 ring-amber-400/30 shadow-xs"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span
                        className={
                          formData.propertyType
                            ? "text-slate-900 font-medium"
                            : "text-slate-400"
                        }
                      >
                        {formData.propertyType || "Select Property Type"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isDropdownOpen ? "rotate-180 text-amber-600" : ""
                        }`}
                      />
                    </button>

                    {/* Floating Luxury Dropdown Menu */}
                    {isDropdownOpen && (
                      <div
                        role="listbox"
                        aria-labelledby="consultation-property-label"
                        className="absolute left-0 right-0 z-50 mt-2 p-1.5 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-200 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.14)] animate-in fade-in zoom-in-95 duration-150 space-y-1"
                      >
                        {PROPERTY_TYPES.map((type) => {
                          const isSelected = formData.propertyType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleSelectPropertyType(type)}
                              className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-all text-left ${
                                isSelected
                                  ? "bg-amber-500/10 text-amber-900 border border-amber-500/25 shadow-2xs"
                                  : "text-slate-700 hover:bg-amber-50/80 hover:text-amber-800"
                              }`}
                            >
                              <span>{type}</span>
                              {isSelected && (
                                <Check className="w-4 h-4 text-amber-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {errors.propertyType && (
                      <p
                        id="property-error"
                        className="mt-1.5 text-xs text-rose-600 flex items-center gap-1.5"
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
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Location / Address <span className="text-amber-600">*</span>
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
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 transition-colors ${
                        errors.location
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-slate-200 hover:border-slate-300 focus:border-amber-500"
                      }`}
                    />
                    {errors.location && (
                      <p
                        id="location-error"
                        className="mt-1.5 text-xs text-rose-600 flex items-center gap-1.5"
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
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Message / Energy Requirements
                    </label>
                    <span className="text-xs text-slate-500 font-normal">
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
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 text-sm text-slate-900 placeholder-slate-400 transition-colors resize-y"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-md hover:shadow-lg shadow-amber-500/20 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <span>Request a Solar Consultation</span>
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            ) : (
              /* Verified Submission State & Email Direct Routing */
              <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-6 animate-in fade-in duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 text-xl font-bold mb-1">
                      Consultation Inquiry Verified
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Your project inquiry fields have been validated. You can immediately transmit these structured specifications directly to our engineering desk via email.
                    </p>
                  </div>
                </div>

                {/* Structured Summary of User's Inputs */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs font-mono text-slate-700 shadow-sm">
                  <div className="text-amber-700 font-bold mb-2">
                    Inquiry Payload Summary:
                  </div>
                  <p>
                    <span className="text-slate-500">Name:</span>{" "}
                    <span className="text-slate-900 font-semibold">{formData.fullName}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Phone:</span>{" "}
                    <span className="text-slate-900 font-semibold">{formData.phone}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Email:</span>{" "}
                    <span className="text-slate-900 font-semibold">{formData.email}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Property Type:</span>{" "}
                    <span className="text-slate-900 font-semibold">{formData.propertyType}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Location:</span>{" "}
                    <span className="text-slate-900 font-semibold">{formData.location}</span>
                  </p>
                  {formData.message && (
                    <p>
                      <span className="text-slate-500">Requirements:</span>{" "}
                      <span className="text-slate-900 font-semibold">{formData.message}</span>
                    </p>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-md hover:shadow-lg shadow-amber-500/20 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shadow-sm"
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
