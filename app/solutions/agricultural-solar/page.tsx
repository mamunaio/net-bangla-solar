import React from "react";
import type { Metadata } from "next";
import {
  Sprout,
  ShieldCheck,
  Zap,
  Droplet,
  TrendingUp,
  Sun,
  Award,
  Gauge,
  Wind,
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Agricultural Solar Irrigation & Agro-Power | Net Bangla Solar Energy Solutions",
  description:
    "High-yield solar irrigation pumps (10 HP – 100 HP), agro-processing solar, and cold storage solar solutions for farms and rural enterprises across Bangladesh.",
};

const agriculturalAdvantages = [
  {
    title: "100% Elimination of Diesel Fuel Costs",
    desc: "Replaces expensive, recurring diesel generator operational expenses with free, reliable daytime solar pumping power.",
    badge: "ZERO DIESEL BILL",
    icon: Droplet,
  },
  {
    title: "Smart VFD Soft-Starter Controllers",
    desc: "Advanced Variable Frequency Drives (VFD) ensure smooth motor startup without mechanical stress, prolonging pump lifespan.",
    badge: "VFD CONTROL",
    icon: Gauge,
  },
  {
    title: "High-Discharge Water Output (10 HP – 100 HP)",
    desc: "Engineered for high-volume deep tube-well irrigation across paddy fields, tea gardens, and large agricultural farms.",
    badge: "10 HP – 100 HP",
    icon: Sprout,
  },
  {
    title: "BREB Rural Net-Metering & Grid Sync",
    desc: "During off-irrigation seasons, surplus generated electricity is automatically sold back to the rural grid (BREB) for revenue.",
    badge: "DUAL REVENUE",
    icon: Zap,
  },
  {
    title: "Heavy-Duty Flood & Storm Ground Racks",
    desc: "Elevated, hot-dip galvanized mounting structures designed to withstand seasonal floodwaters and monsoon storms.",
    badge: "STORM PROOF",
    icon: Wind,
  },
  {
    title: "Remote IoT Water Telemetry & Mobile Control",
    desc: "Automated pump scheduling, flow rate monitoring, and remote on/off operation via SMS and cloud mobile app.",
    badge: "REMOTE IOT",
    icon: TrendingUp,
  },
];

const agriculturalSpecs = [
  { label: "Pump Range", value: "10 HP – 100 HP DC/AC" },
  { label: "Operating Mode", value: "Solar Direct + Grid" },
  { label: "Controller", value: "Smart MPPT VFD Drive" },
  { label: "Mounting", value: "Elevated Galvanized" },
];

export default function AgriculturalSolarPage() {
  return (
    <SolutionTemplate
      badge="AGRICULTURAL & AGRI-POWER • 10 HP – 100 HP"
      title="Agricultural Solar Irrigation & Cold Storage"
      subtitle="Heavy-Duty Solar Pumping & Agro-Processing Systems for Farms & Rural Enterprises"
      heroImageUrl="/images/solar-agricultural.jpg"
      description="Agricultural productivity in Bangladesh relies heavily on continuous irrigation. Net Bangla Solar Energy Solutions provides high-capacity solar-powered water pumping systems (10 HP to 100 HP) and solar cold storage systems that replace expensive diesel generators, ensure reliable crop irrigation, and feed surplus power back to the national rural grid (BREB)."
      detailedPoints={[
        "Saves thousands of liters of diesel fuel annually per tube-well installation.",
        "Dual-season benefit: irrigates crops in dry season and exports grid power during monsoon.",
        "Engineered for deep tube-wells, low-lift pumps, fish hatcheries, poultry farms, and cold storage.",
        "Eligible for agricultural renewable energy subsidies, low-interest refinancing, and SREDA incentives.",
      ]}
      specs={agriculturalSpecs}
      advantagesTitle="Why Agricultural Enterprises Choose Net Bangla Solar Energy Solutions"
      advantagesSubtitle="Reliable water flow, zero diesel volatility, and rugged engineering designed for rural Bangladeshi conditions."
      advantagesList={agriculturalAdvantages}
      ctaTitle="Power Your Farm with Unlimited Solar Energy"
      ctaDescription="Contact our agricultural solar engineering team for water discharge sizing, pump motor matching, and turnkey system proposals."
    />
  );
}
