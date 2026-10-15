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
  title: "Industrial Solar EPC (MWp Scale) | Net Bangla Solar Energy Solutions",
  description:
    "Turnkey Megawatt-scale (100 kWp – 5 MWp) industrial rooftop solar EPC for export textile mills, manufacturing plants, and heavy industries in Bangladesh. 3.1 year payback.",
};

const industrialAdvantages = [
  {
    title: "Zero Factory Production Downtime",
    desc: "Structural and mechanical rooftop assembly takes place during standard factory shifts without interrupting machine lines.",
    badge: "CONTINUOUS UPTIME",
    icon: Factory,
  },
  {
    title: "100 kWp to 5+ MWp Turnkey Scale",
    desc: "Engineered specifically to offset massive daytime industrial power loads, heavy motors, and high-tension (HT) grid consumption.",
    badge: "MEGAWATT EPC",
    icon: Zap,
  },
  {
    title: "33kV & 11kV Substation Grid Tie-In",
    desc: "Complete medium/high-voltage electrical synchronization with vacuum circuit breakers (VCB), dry transformers, and harmonic filters.",
    badge: "HT SYNCHRONIZATION",
    icon: Cpu,
  },
  {
    title: "100% SREDA & Net-Metering Liaison",
    desc: "Full turnkey government documentation and testing with BPDB, BREB, DPDC, DESCO, and NESCO for bi-directional meters.",
    badge: "REGULATORY APPROVAL",
    icon: ShieldCheck,
  },
  {
    title: "Tier-1 N-Type TOPCon Bifacial Panels",
    desc: "Ultra-high efficiency modules with 25-year 84.8% linear performance warranties and enhanced low-light morning/evening generation.",
    badge: "TIER-1 OEM",
    icon: Award,
  },
  {
    title: "24/7 IoT SCADA & String-Level Telemetry",
    desc: "Cloud-connected monitoring platform with instant fault detection, temperature monitoring, and performance ratio (PR) benchmarking.",
    badge: "CLOUD SCADA",
    icon: BarChart3,
  },
];

const industrialWorkflow = [
  {
    step: "01",
    title: "Drone Survey & 3D Shading Simulation",
    desc: "Precision aerial mapping to detect rooftop obstacles, optimize pitch tilt, and simulate monthly generation.",
  },
  {
    step: "02",
    title: "Structural Assessment & Purlin Load Analysis",
    desc: "STAAD.Pro load analysis to ensure rooftop tin and trusses withstand modules, walkways, and 160 km/h wind loads.",
  },
  {
    step: "03",
    title: "SREDA & Utility Net-Metering Approval",
    desc: "End-to-end bureaucratic handling and grid interconnection permits with BREB, BPDB, DESCO, or DPDC.",
  },
  {
    step: "04",
    title: "Procurement, Installation & Grid Sync",
    desc: "Tier-1 bifacial panels, European string inverters, vacuum circuit breaker synchronization, and 24/7 telemetry activation.",
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
      description="Net Bangla Solar Energy Solutions engineers bankable, multi-megawatt rooftop and ground-mounted solar photovoltaic systems designed to drastically reduce factory operating electricity costs. We handle the entire project lifecycle in-house: 3D drone surveys & shading simulation, structural purlin engineering, 33kV substation synchronization, SREDA net-metering approvals, and 25-year performance monitoring."
      detailedPoints={[
        "Up to 70% reduction in monthly grid electricity expenditure for industrial consumers.",
        "Zero-penetration standing seam clamps protecting factory tin roofs from water leaks.",
        "Engineered for heavy inductive industrial loads with harmonic mitigation filters.",
        "LEED green factory accreditation compliance for international buyer ESG audits.",
      ]}
      specs={industrialSpecs}
      advantagesTitle="Why Bangladesh Industry Leaders Choose Net Bangla Solar Energy Solutions"
      advantagesSubtitle="Engineered to meet rigorous industrial safety codes, withstand cyclone winds, and guarantee maximum kilowatt-hour yields."
      advantagesList={industrialAdvantages}
      workflowTitle="Turnkey Industrial EPC Project Lifecycle"
      workflowSteps={industrialWorkflow}
      ctaTitle="Reduce Your Factory Electricity Bills by 70% or More with Solar Energy"
      ctaDescription="Connect with our senior EPC engineers today for an on-site structural audit, 3D shadow analysis, and turnkey financial payback modeling."
    />
  );
}
