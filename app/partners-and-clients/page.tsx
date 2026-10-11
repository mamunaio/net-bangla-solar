import React from "react";
import type { Metadata } from "next";
import { PartnersClientsClient } from "./PartnersClientsClient";

export const metadata: Metadata = {
  title: "Partners & Clients | Net Bangla Limited - Alliances & Credibility Network",
  description:
    "Explore Net Bangla Limited's global technology partners, EPC alliances, apex industry associations, and prestigious defense, government, telecom, and industrial clients across Bangladesh.",
  keywords: [
    "Net Bangla Solar Energy Solutions Partners",
    "Net Bangla Clients",
    "Solar EPC Bangladesh",
    "Wincle Energy",
    "China National Machinery CMC",
    "Huachuang Guojing",
    "Bangladesh Army Solar",
    "Navy Dockyard",
    "MES",
    "BMTF",
    "BASIS Member A-405",
    "BACCO Member",
  ],
};

export default function PartnersClientsPage() {
  return <PartnersClientsClient />;
}
