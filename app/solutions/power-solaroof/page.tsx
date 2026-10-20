import React from "react";
import type { Metadata } from "next";
import {
  PanelsTopLeft,
  ShieldCheck,
  Zap,
  Droplets,
  Wind,
  ThermometerSnowflake,
  Layers,
  Award,
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Solar Roof Integration with BIPV | Net Bangla Solar",
  description:
    "Solar Roof Integration with BIPV by Net Bangla Solar is a 100% leak-proof, cyclone-resistant Building-Integrated Photovoltaic (BIPV) roofing system for industrial factories across Bangladesh.",
};

const solaroofAdvantages = [
  {
    title: "100% Leak-Proof Integrated Drainage",
    desc: "Engineered with overlapping EPDM water channels, continuous aluminum profiles, and internal gutters to handle heavy monsoon downpours.",
    badge: "ZERO WATER LEAKAGE",
    icon: Droplets,
  },
  {
    title: "160 km/h Cyclone Resilience",
    desc: "Aerodynamically integrated into the building purlin framework, eliminating wind uplift risks associated with elevated mounting structures.",
    badge: "CYCLONE RATED",
    icon: Wind,
  },
  {
    title: "4°C to 6°C Factory Temperature Reduction",
    desc: "Dual-layer thermal isolation absorbs incoming solar heat, noticeably cooling work floors and lowering factory HVAC power bills.",
    badge: "THERMAL COOLING",
    icon: ThermometerSnowflake,
  },
  {
    title: "Replaces Corrugated Tin Sheets Entirely",
    desc: "Saves massive initial roofing material costs on new factory construction by replacing CGI sheets with power-generating glass-glass panels.",
    badge: "CAPEX SAVINGS",
    icon: Layers,
  },
  {
    title: "Heavy-Duty Precision Structural Design",
    desc: "Built to stringent international building codes with high-tensile anodized aluminum sub-structures, seismic resilience, and corrosion-resistant fasteners.",
    badge: "PRECISION EPC",
    icon: Award,
  },
  {
    title: "25-Year Dual Power & Structural Warranty",
    desc: "Backed by 25-year structural waterproofing integrity warranties and Tier-1 84.8% linear electrical generation guarantees.",
    badge: "25-YR BANKABILITY",
    icon: ShieldCheck,
  },
];

const solaroofWorkflow = [
  {
    step: "01",
    title: "Architectural & Purlin Layout Audit",
    desc: "3D CAD modeling of factory roof pitch, rafter spacing, and purlin load ratings to engineer custom BIPV fastening profiles.",
  },
  {
    step: "02",
    title: "Precision Aluminum Channel Installation",
    desc: "Heavy-duty anodized aluminum sub-structure fitted with seamless EPDM gaskets and internal runoff gutters.",
  },
  {
    step: "03",
    title: "Frameless Glass-Glass BIPV Assembly",
    desc: "High-yield bifacial frameless modules slotted into continuous profiles with zero through-bolt penetrations.",
  },
  {
    step: "04",
    title: "Hydrostatic Pressure Testing & Grid Sync",
    desc: "Rigorous water pressure leak testing followed by electrical string synchronization and SREDA net-metering liaison.",
  },
];

const solaroofSpecs = [
  { label: "Roof Type", value: "Integrated In-Roof BIPV" },
  { label: "Waterproofing", value: "EPDM-based system" },
  { label: "Wind Rating", value: "Up to 160 km/h" },
  { label: "Thermal Delta", value: "4°C–6°C cooling" },
];

export default function PowerSolaroofPage() {
  return (
    <SolutionTemplate
      badge="PATENT-PENDING BIPV ROOFING • 100% LEAK-PROOF"
      title="Solar Roof Integration with BIPV"
      subtitle="The Complete Replacement for Industrial Corrugated Tin Roofing with Clean Power Generation"
      heroImageUrl="/images/power-solaroof.webp"
      description="Net Bangla Solar shall build the future of industrial roofing in Bangladesh. Unlike conventional solar panels mounted on top of existing tin roofs, Solar Roof Integration with BIPV is built into the building structure itself, replacing corrugated tin sheets entirely. It is designed to provide a leak-resistant, cyclone-resistant, and aesthetically integrated clean-energy solution for industrial facilities."
      detailedPoints={[
        "Completely eliminates the recurring maintenance, rust, and leakages of corrugated metal roofs.",
        "Zero-penetration mechanical clamping ensures zero structural damage or water seepage.",
        "Dual-function asset: serves as heavy-duty industrial roofing while generating continuous megawatt power.",
        "Eligible for international green factory sustainability ratings and carbon credit accreditation.",
      ]}
      specs={solaroofSpecs}
      advantagesTitle="Why Solar Roof Integration with BIPV Outperforms Conventional Solar Mounting"
      advantagesSubtitle="Integrated architectural solar that combines lifetime weatherproofing, thermal insulation, and peak clean energy generation."
      advantagesList={solaroofAdvantages}
      workflowTitle="Solar Roof Integration with BIPV Engineering & Installation Lifecycle"
      workflowSteps={solaroofWorkflow}
      ctaTitle="Construct Your Next Factory with Solar Roof Integration with BIPV"
      ctaDescription="Contact specialized BIPV structural engineers to review architectural roof drawings, purlin specifications, and cost comparison models."
    />
  );
}
