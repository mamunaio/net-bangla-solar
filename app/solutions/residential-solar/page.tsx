import React from "react";
import type { Metadata } from "next";
import {
  Home,
  ShieldCheck,
  Zap,
  BatteryCharging,
  Smartphone,
  Sun,
  Award,
  VolumeX,
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Residential Solar & Hybrid Battery Systems | Net Bangla Solar",
  description:
    "Smart on-grid and hybrid rooftop solar systems with Lithium battery backup for luxury villas, duplexes, and premium homes across Bangladesh.",
};

const residentialAdvantages = [
  {
    title: "Zero Noise & Zero Diesel Fumes Backup",
    desc: "Replaces noisy, smelly diesel generators with completely silent, instant Lithium LiFePO4 battery energy storage (ESS).",
    badge: "SILENT BACKUP",
    icon: VolumeX,
  },
  {
    title: "Instant Microsecond UPS Switching",
    desc: "Seamless microsecond power transfer during grid load-shedding ensures smart TVs, PCs, and home servers never restart.",
    badge: "ZERO FLICKER",
    icon: Zap,
  },
  {
    title: "Up to 80% Reduction in Utility Bills",
    desc: "Solar generation covers daytime air conditioning, refrigeration, and pump loads, while surplus units are exported via Net-Metering.",
    badge: "80% BILL CUT",
    icon: Sun,
  },
  {
    title: "Grade-A Lithium LiFePO4 Battery Storage",
    desc: "Safe, non-flammable 6,000+ cycle lithium batteries with a 10-year design lifespan, outlasting lead-acid batteries by 4X.",
    badge: "10-YR BATTERY",
    icon: BatteryCharging,
  },
  {
    title: "Real-Time Mobile App Energy Dashboard",
    desc: "Monitor live solar generation, home consumption, battery state-of-charge, and grid export directly from your iOS/Android smartphone.",
    badge: "SMART APP",
    icon: Smartphone,
  },
  {
    title: "Architectural Villa Aesthetics & EV Ready",
    desc: "Elevated pergolas and all-black modules that enhance property value with built-in Level-2 EV charging port compatibility.",
    badge: "EV CHARGER READY",
    icon: Home,
  },
];

const residentialSpecs = [
  { label: "Capacity Range", value: "5 kWp – 50 kWp" },
  { label: "Battery Type", value: "Lithium LiFePO4" },
  { label: "Transfer Time", value: "< 10 Milliseconds" },
  { label: "Monitoring", value: "iOS / Android Cloud" },
];

export default function ResidentialSolarPage() {
  return (
    <SolutionTemplate
      badge="SMART RESIDENTIAL & HYBRID ESS • 5 KWP – 50 KWP"
      title="Residential Hybrid Solar & Battery Systems"
      subtitle="Uninterruptible Clean Energy & Silent Lithium Storage for Luxury Villas, Duplexes & Premium Homes"
      heroImageUrl="/images/solar-residential.jpg"
      description="Enjoy the comfort of uninterrupted, 24/7 electrical luxury without the noise, pollution, and recurring fuel costs of diesel generators. Net Bangla Solar engineers premium hybrid solar systems with intelligent Lithium LiFePO4 battery storage, tailored for luxury private residences, duplexes, and residential estates across Dhaka, Gulshan, Banani, Uttara, and nationwide."
      detailedPoints={[
        "Powers central air conditioners, refrigerators, water pumps, lighting, and elevators effortlessly.",
        "Automatic net-metering export reduces monthly electricity bills to near-zero levels.",
        "Architecturally designed elevated rooftop pergolas that preserve full rooftop garden living space.",
        "Long-lasting Tier-1 solar modules backed by 20-year manufacturer performance warranties.",
      ]}
      specs={residentialSpecs}
      advantagesTitle="Why Homeowners Choose Net Bangla Residential Solar"
      advantagesSubtitle="Silent operation, zero fuel maintenance, and total energy independence tailored for modern luxury living."
      advantagesList={residentialAdvantages}
      ctaTitle="Upgrade Your Home to Silent 24/7 Solar Power"
      ctaDescription="Contact our residential solar architects for a custom rooftop layout, lithium battery sizing proposal, and net-metering feasibility check."
    />
  );
}
