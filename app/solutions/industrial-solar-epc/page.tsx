import React from "react";
import type { Metadata } from "next";
import {
  Factory,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  Building,
  Award,
  Wind,
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Industrial Solar EPC (MWp Scale) | Net Bangla Solar",
  description:
    "Turnkey Megawatt-scale (100 kWp – 5 MWp) industrial rooftop solar EPC for export textile mills, manufacturing plants, and heavy industries in Bangladesh. 3.1 year payback.",
};

const industrialAdvantages = [
  {
    title: "Minimum Factory Production Downtime",
    desc: "Structural and mechanical rooftop assembly takes place during standard factory shifts without interrupting machine lines.",
    badge: "CONTINUOUS UPTIME",
    icon: Factory,
  },
  {
    title: "100 kWp to 5+ MWp Turnkey Scale",
    desc: "Engineered to offset massive daytime industrial power loads, heavy motors, and high-tension grid consumption.",
    badge: "MEGAWATT EPC",
    icon: Zap,
  },
  {
    title: "33kV & 11kV Substation Grid Tie-In",
    desc: "Complete medium/high-voltage electrical synchronization with vacuum circuit breakers, dry transformers, and harmonic filters.",
    badge: "HT SYNCHRONIZATION",
    icon: Cpu,
  },
  {
    title: "100% SREDA & Net-Metering Liaison",
    desc: "Government documentation and testing with BPDB, BREB, DPDC, DESCO, WZPDCL and NESCO for bi-directional meters.",
    badge: "REGULATORY APPROVAL",
    icon: ShieldCheck,
  },
  {
    title: "Tier-1 N-Type TOPCon Bifacial Panels",
    desc: "High-efficiency modules with 25-year, 84.8% linear performance warranties.",
    badge: "TIER-1 OEM",
    icon: Award,
  },
  {
    title: "24/7 IoT SCADA & String-Level Telemetry",
    desc: "Cloud-connected monitoring, fault detection, temperature monitoring, and performance-ratio benchmarking.",
    badge: "CLOUD SCADA",
    icon: BarChart3,
  },
];

const industrialWorkflow = [
  {
    step: "01",
    title: "Drone Survey & 3D Shading Simulation",
    desc: "Aerial mapping to detect rooftop obstacles, optimize panel tilt, and simulate monthly generation.",
  },
  {
    step: "02",
    title: "Structural Assessment & Purlin Load Analysis",
    desc: "STAAD.Pro load analysis for roof and truss capacity, including walkways and specified wind loads.",
  },
  {
    step: "03",
    title: "SREDA & Utility Net-Metering Approval",
    desc: "Grid-interconnection permits and documentation.",
  },
  {
    step: "04",
    title: "Procurement, Installation & Grid Sync",
    desc: "Solar panels, inverters, electrical synchronization, and monitoring activation.",
  },
];

const industrialSpecs = [
  { label: "Capacity Range", value: "100 kWp – 5+ MWp" },
  { label: "Avg. Payback", value: "3.1 – 3.4 Years" },
  { label: "Grid Tie-In", value: "11kV / 33kV HT" },
  { label: "Power Warranty", value: "25-Year Linear" },
];

export default function IndustrialSolarEPCPage() {
  return (
    <SolutionTemplate
      badge="MEGAWATT INDUSTRIAL EPC • 100 KWP – 5 MWP"
      title="Industrial Megawatt (MWp) Solar EPC"
      subtitle="Heavy-Duty Turnkey Photovoltaic Engineering for Export Industries, Textile Mills & Manufacturing Plants"
      heroImageUrl="/images/solar-industrial.webp"
      description="Net Bangla Solar Energy Division crafts engineers bankable, multi-megawatt rooftop and ground-mounted solar photovoltaic systems designed to drastically reduce factory operating electricity costs. We monitor the entire project tenure in-house: 3D drone surveys & shading simulation, structural purlin engineering, 33kV substation synchronization, SREDA net-metering approvals, and 25-year performance monitoring."
      detailedPoints={[
        "Up to 70% reduction in monthly grid electricity expenditure for industrial consumers.",
        "Zero-penetration standing seam clamps protecting factory tin roofs from water leaks.",
        "Designed for heavy inductive industrial loads with harmonic mitigation filters.",
        "LEED green factory accreditation compliance for international buyer ESG audits.",
      ]}
      specs={industrialSpecs}
      advantagesTitle="Why Bangladesh Industry Leaders Choose Net Bangla Solar"
      advantagesSubtitle="Engineered to meet rigorous industrial safety codes, withstand cyclone winds, and guarantee maximum kilowatt-hour yields."
      advantagesList={industrialAdvantages}
      workflowTitle="Turnkey Industrial EPC Project Lifecycle"
      workflowSteps={industrialWorkflow}
      ctaTitle="Reduce Your Factory Electricity Bills by 70% or More with Solar Energy"
      ctaDescription="Connect with our senior EPC engineers for an on-site structural audit, 3D shadow analysis, and turnkey financial payback modeling."
    />
  );
}
