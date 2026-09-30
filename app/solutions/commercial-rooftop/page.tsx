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
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Commercial Rooftop Solar & Net-Metering | Net Bangla Solar",
  description:
    "High-efficiency commercial rooftop solar systems for corporate office towers, hospitals, universities, and commercial complexes across Dhaka and Bangladesh.",
};

const commercialAdvantages = [
  {
    title: "Elevated RCC Canopy Structures",
    desc: "Engineered hot-dip galvanized elevated structures that preserve 100% of usable rooftop recreational space, helipads, and HVAC zones.",
    badge: "ELEVATED CANOPY",
    icon: Building2,
  },
  {
    title: "Peak Daytime Tariff Shaving",
    desc: "Generates maximum clean power precisely during commercial peak hours (9:00 AM – 5:00 PM), drastically reducing heavy commercial grid tariffs.",
    badge: "PEAK OFFSET",
    icon: Zap,
  },
  {
    title: "DESCO & DPDC Net-Metering Synchronization",
    desc: "Turnkey government licensing and bidirectional smart meter integration across Dhaka, Chattogram, and metropolitan zones.",
    badge: "NET METERING",
    icon: ShieldCheck,
  },
  {
    title: "Architectural All-Black Aesthetic Panels",
    desc: "Premium aesthetic finishes designed to complement modern corporate glass and aluminum facade architecture without visible silver frames.",
    badge: "PREMIUM AESTHETICS",
    icon: Award,
  },
  {
    title: "Power Factor Correction & Surge Protection",
    desc: "Integrated Class I+II surge protection and reactive power control to safeguard sensitive IT servers, elevators, and medical equipment.",
    badge: "POWER QUALITY",
    icon: Cpu,
  },
  {
    title: "24/7 Cloud Monitoring & Tenant Billing",
    desc: "Individual sub-metering telemetry allowing multi-tenant commercial complexes to track and bill clean energy usage per floor.",
    badge: "SMART TELEMETRY",
    icon: TrendingUp,
  },
];

const commercialSpecs = [
  { label: "Capacity Range", value: "50 kWp – 500 kWp" },
  { label: "Rooftop Type", value: "RCC / Concrete / Canopy" },
  { label: "Grid Interface", value: "DESCO / DPDC / NESCO" },
  { label: "Mounting Grade", value: "Hot-Dip Galvanized" },
];

export default function CommercialRooftopPage() {
  return (
    <SolutionTemplate
      badge="COMMERCIAL SOLAR SYSTEMS • 50 KWP – 500 KWP"
      title="Commercial Rooftop & Corporate Solar"
      subtitle="Clean Power Generation for Corporate Headquarters, Hospitals, Universities & Commercial Complexes"
      heroImageUrl="/images/solar-commercial.jpg"
      description="Commercial office buildings, private hospitals, academic institutions, and shopping malls consume substantial electricity during daytime peak hours. Net Bangla Solar engineers customized commercial rooftop solar systems that offset heavy air conditioning and elevator loads, reduce operating costs, and enhance corporate sustainability credentials under SREDA net-metering regulations."
      detailedPoints={[
        "Elevated canopy design allows continued use of rooftop garden, cafeteria, or recreational space.",
        "Turnkey bureaucratic liaison with DESCO, DPDC, and BPDB for fast net-metering export approval.",
        "Rapid return on investment with average capex payback achieved in 3.3 to 3.8 years.",
        "Zero disruption to tenants, data servers, or hospital patient care during installation.",
      ]}
      specs={commercialSpecs}
      advantagesTitle="Why Commercial Property Owners Choose Net Bangla Solar"
      advantagesSubtitle="Precision structural engineering, aesthetic elegance, and seamless grid synchronization tailored for metropolitan properties."
      advantagesList={commercialAdvantages}
      ctaTitle="Lower Your Commercial Building Operating Expenses Today"
      ctaDescription="Connect with our commercial solar specialists for a 3D structural shading audit, electrical load simulation, and net-metering payback breakdown."
    />
  );
}
