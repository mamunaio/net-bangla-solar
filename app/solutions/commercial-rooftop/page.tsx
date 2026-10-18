import React from "react";
import type { Metadata } from "next";
import {
  Building2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Calculator,
  Award,
  Building,
  Car,
  Wind,
  Layers,
  Compass,
  Droplets,
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Commercial Rooftop Solar & Net-Metering | Net Bangla Solar Energy Solutions",
  description:
    "High-efficiency commercial rooftop solar systems for corporate office towers, hospitals, universities, and commercial complexes across Dhaka and Bangladesh.",
};

const commercialAdvantages = [
  {
    title: "Elevated RCC Canopy Structures",
    desc: "Engineered hot-dip galvanized elevated canopy structures that preserve 100% of usable rooftop recreational space, cafeterias, and HVAC zones.",
    badge: "ELEVATED CANOPY",
    icon: Building2,
  },
  {
    title: "Customized Solar Carport & Parking Canopies",
    desc: "Turnkey dual-purpose solar carport structures engineered for commercial parking lots, executive bays, and ground vehicular shade.",
    badge: "SOLAR CARPORT",
    icon: Car,
  },
  {
    title: "High-Wind-Load Structural Design",
    desc: "Certified aerodynamic structural mounting engineered to withstand up to 160+ km/h cyclone-grade wind loads across Bangladesh.",
    badge: "WIND RESILIENT",
    icon: Wind,
  },
  {
    title: "Precision Purlin Load & Roof Integrity Assessment",
    desc: "STAAD.Pro structural load analysis ensuring roof truss safety, purlin reinforcement, and dead/live load engineering compliance.",
    badge: "STRUCTURAL AUDIT",
    icon: Layers,
  },
  {
    title: "3D LiDAR-Based Roof Survey & Digital Modeling",
    desc: "High-precision drone LiDAR aerial scanning for millimeter-accurate shading simulation and solar panel tilt optimization.",
    badge: "3D LIDAR SURVEY",
    icon: Cpu,
  },
  {
    title: "Seismic & Structural Safety Considerations",
    desc: "Full engineering compliance with the Bangladesh National Building Code (BNBC) seismic and structural safety regulations.",
    badge: "BNBC COMPLIANT",
    icon: ShieldCheck,
  },
  {
    title: "Corrosion-Resistant Mounting Structures",
    desc: "Marine-grade hot-dip galvanized steel and anodized aluminum mounting brackets offering 25-year anti-corrosion protection.",
    badge: "ANTI-CORROSION",
    icon: ShieldCheck,
  },
  {
    title: "Architectural All-Black Solar Panels",
    desc: "Premium aesthetic finishes designed to complement modern corporate glass and aluminum facade architecture without silver frames.",
    badge: "PREMIUM AESTHETICS",
    icon: Award,
  },
  {
    title: "Waterproofing & Roof Penetration Protection",
    desc: "100% leak-proof zero-penetration standing seam clamps and chemical anchor waterproofing sealants protecting roof envelopes.",
    badge: "LEAK-PROOF ROOF",
    icon: ShieldCheck,
  },
  {
    title: "Optimized Module Orientation & Tilt Angles",
    desc: "South-facing azimuth calibration and optimal tilt angles engineered to maximize annual kilowatt-hour photovoltaic yield.",
    badge: "OPTIMAL YIELD",
    icon: Compass,
  },
  {
    title: "Automated Water-Based Panel Cleaning",
    desc: "Integrated water-based sprinkler and washing mechanisms ensuring dust-free surfaces and consistent peak solar generation.",
    badge: "AUTO CLEANING",
    icon: Droplets,
  },
];

const commercialSpecs = [
  { label: "Capacity Range", value: "50 kWp – 500 kWp" },
  { label: "Rooftop Type", value: "RCC / Concrete / Canopy" },
  { label: "Grid Interface", value: "BPDB / BREB / DPDC / DESCO / WZPDCL / NESCO" },
  { label: "Mounting Grade", value: "Hot-Dip Galvanized" },
];

export default function CommercialRooftopPage() {
  return (
    <SolutionTemplate
      badge="COMMERCIAL SOLAR SYSTEMS • 50 KWP – 500 KWP"
      title="Commercial Rooftop & Corporate Solar"
      subtitle="Clean Power Generation for Corporate Headquarters, Hospitals, Universities & Commercial Complexes"
      heroImageUrl="/images/solar-commercial.webp"
      description="Commercial office buildings, private hospitals, academic institutions, and shopping malls consume substantial electricity during daytime peak hours. Net Bangla Solar Energy Solutions engineers customized commercial rooftop solar systems that offset heavy air-conditioning and elevator loads, reduce operating costs, and enhance corporate sustainability credentials under SREDA net-metering regulations."
      detailedPoints={[
        "Elevated canopy design allows continued use of rooftop gardens, cafeterias, or recreational spaces.",
        "Turnkey coordination with BPDB, BREB, DPDC, DESCO, WZPDCL, and NESCO for net-metering approvals.",
        "Advertised average capital payback: 3.3–3.8 years.",
        "Installation designed to avoid disruption to tenants, data servers, or hospital patient care.",
      ]}
      specs={commercialSpecs}
      advantagesTitle="Engineering Superiority"
      advantagesSubtitle="Key engineering pillars, structural safety standards, and advanced PV technologies delivering maximum yield for commercial properties."
      advantagesList={commercialAdvantages}
      ctaTitle="Lower Your Commercial Building Operating Expenses Today"
      ctaDescription="Connect with commercial solar specialists for a 3D structural shading audit, electrical load simulation, and net-metering payback breakdown."
    />
  );
}
