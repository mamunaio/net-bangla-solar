import React from "react";
import type { Metadata } from "next";
import {
  Waves,
  ShieldCheck,
  Zap,
  Droplets,
  Anchor,
  Sun,
  Fish,
  Wind,
  Factory,
  Award,
} from "lucide-react";
import { SolutionTemplate } from "@/components/templates/SolutionTemplate";

export const metadata: Metadata = {
  title: "Floating Solar Systems (FPV) | Net Bangla Solar",
  description:
    "High-efficiency Floating Photovoltaic (FPV) solar systems for lakes, reservoirs, industrial retention ponds, and aquaculture fisheries across Bangladesh.",
};

const floatingAdvantages = [
  {
    title: "Textile & RMG Factory Water Reservoirs",
    desc: "Turn mandatory firefighting ponds, ETP retention basins, and industrial water cooling reservoirs into productive power plants without using a single square foot of valuable factory floor space.",
    badge: "TEXTILE & FACTORY PONDS",
    icon: Factory,
  },
  {
    title: "Up to 15% Higher Generation via Water Cooling",
    desc: "Natural evaporative cooling beneath the floating array reduces module operating temperatures, boosting overall kilowatt-hour energy yield by 10% to 15% over ground-mount solar.",
    badge: "+15% HIGHER YIELD",
    icon: Waves,
  },
  {
    title: "Minimum Land Acquisition & Civil Works",
    desc: "Bypasses the severe land constraints and exorbitant real estate prices of Bangladesh by utilizing open water bodies, industrial retention ponds, and lakes.",
    badge: "MINIMUM LAND USE",
    icon: ShieldCheck,
  },
  {
    title: "Significant Reservoir Water Conservation",
    desc: "Solar array surface shading shields water from harsh direct sun, reducing reservoir water evaporation by up to 33% and preventing harmful algal blooms in cooling basins.",
    badge: "WATER SAVINGS",
    icon: Droplets,
  },
  {
    title: "Anti-Skid Walkways & Safe O&M Maintenance",
    desc: "Engineered with interlocking marine pontoons featuring non-slip inspection walkways and safety railings, enabling engineers to safely conduct cleaning and electrical maintenance.",
    badge: "ENGINEERING O&M",
    icon: Award,
  },
  {
    title: "Adaptive Monsoon Anchoring & Mooring",
    desc: "Heavy-duty taut-leg and elastic tension mooring systems engineered to handle seasonal water level fluctuations of up to 4 meters, strong currents, and 160 km/h cyclone gusts.",
    badge: "CYCLONE RATED",
    icon: Wind,
  },
  {
    title: "Co-Location with Aquaculture & Fisheries",
    desc: "Provides ideal shading that stabilizes water temperatures for fish farming while powering aeration pumps, automated feeders, and cold storage units directly.",
    badge: "AQUA-SOLAR SYNERGY",
    icon: Fish,
  },
  {
    title: "Marine-Grade 25-Year HDPE Pontoon Floats",
    desc: "Built with food-grade, UV-stabilized High-Density Polyethylene (HDPE) floats and corrosion-proof stainless steel fasteners engineered for 25+ years in fresh and brackish water.",
    badge: "MARINE GRADE HDPE",
    icon: Anchor,
  },
];

const floatingSpecs = [
  { label: "Target Water", value: "Factory ponds, lakes, and reservoirs" },
  { label: "Capacity Range", value: "50 kWp–10+ MWp" },
  { label: "Efficiency Delta", value: "+10% to +15% water-cooled" },
  { label: "Mooring System", value: "Adaptive Elastic / Taut-Leg" },
  { label: "Wind Rating", value: "Up to 160 km/h" },
  { label: "Advertised Average Payback", value: "3.2–3.7 years" },
];

const floatingWorkflow = [
  {
    step: "01",
    title: "Bathymetric & Water Body Survey",
    desc: "Sonar depth profiling, seasonal water level variation audit, and wind/current hydrodynamic modeling of the water body.",
  },
  {
    step: "02",
    title: "HDPE Float Assembly & Structural Anchoring",
    desc: "Modular onshore pontoon assembly, sub-surface bed anchor placement, and mooring tension calibration to absorb tidal shifts.",
  },
  {
    step: "03",
    title: "PV Module Mounting & Marine Cabling",
    desc: "High-yield bifacial solar module installation with IP68 waterproof underwater DC cabling, floating junction boxes, and inverter stations.",
  },
  {
    step: "04",
    title: "Shoreline Substation & Factory Grid Sync",
    desc: "Seamless underwater-to-shore transmission tie-in to factory LT/HT switchboards, 11kV/33kV substations, and SREDA net-metering synchronization.",
  },
];

export default function FloatingSolarPage() {
  return (
    <SolutionTemplate
      badge="FLOATING PHOTOVOLTAICS • 50 KWP–10+ MWP"
      title="Floating Solar (FPV) Solutions"
      subtitle="High-Efficiency Water-Mounted Photovoltaic Systems for Textile Factory Fire Ponds, Reservoirs, Lakes & Aquaculture"
      heroImageUrl="/images/solar-floating.webp"
      description="In land-scarce Bangladesh, floating solar transforms open water surfaces into clean-energy assets without consuming valuable agricultural or industrial land. Net Bangla Solar develops turnkey floating photovoltaic arrays for textile and RMG factory firefighting reservoirs, industrial retention basins, water treatment plants, lakes, and commercial fisheries."
      detailedPoints={[
        "Natural water cooling can improve energy yield while helping reduce reservoir evaporation and algae growth.",
        "Ideal for textile, RMG, and industrial plants with mandatory fire ponds and ETP retention basins.",
        "Completely eliminates expensive land acquisition, boundary wall construction, and civil earthworks.",
        "Integrated anti-skid pontoon walkways enable safe on-water maintenance, cleaning, and string telemetry checks.",
        "Adaptive elastic mooring systems withstand monsoon water level changes of up to 4 meters and 160 km/h cyclone winds.",
      ]}
      specs={floatingSpecs}
      advantagesTitle="Why Choose Net Bangla Floating Solar Solutions"
      advantagesSubtitle="Engineered for maximum kilowatt-hour yield, industrial water conservation, and resilient monsoon survivability across Bangladesh."
      advantagesList={floatingAdvantages}
      workflowTitle="Turnkey FPV Engineering & Commissioning Process"
      workflowSteps={floatingWorkflow}
      ctaTitle="Power Your Water Reservoir with Clean Floating Solar Energy"
      ctaDescription="Connect with the floating solar engineering team for a bathymetric audit, hydrodynamic simulation, pontoon layout, and turnkey financial feasibility analysis."
    />
  );
}
