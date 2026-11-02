import React from "react";
import type { Metadata } from "next";
import MaintenanceClient from "./MaintenanceClient";

export const metadata: Metadata = {
  title: "Under Scheduled Maintenance | Net Bangla Solar",
  description:
    "Net Bangla Solar is currently undergoing scheduled platform upgrades and technical optimizations. We will be back online shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return <MaintenanceClient />;
}

