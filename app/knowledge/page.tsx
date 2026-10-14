import type { Metadata } from "next";
import { KnowledgeClient } from "./KnowledgeClient";

export const metadata: Metadata = {
  title: "Solar Knowledge Hub & SREDA Regulatory Policy Center | Net Bangla Solar",
  description:
    "Official Bangladesh Ministry of Power & SREDA regulatory documents, Net Metering Guidelines 2025, policy gazettes, and interactive solar PV working principle architectures.",
  keywords: [
    "Bangladesh Net Metering Guidelines 2025",
    "SREDA Solar Policy PDF",
    "National Rooftop Solar Program",
    "Rooftop Solar Gazette Bangladesh",
    "Power Division Solar Guidelines",
    "Solar EPC Technical Documentation",
    "Hybrid Solar System Working Principle",
    "Net Bangla Solar Knowledge Hub",
  ],
  openGraph: {
    title: "Solar Knowledge Hub & SREDA Regulatory Policy Center | Net Bangla Solar",
    description:
      "Download official Bangladesh Power Division gazettes, SREDA Net Metering 2025 guidelines, and explore interactive solar system architectures.",
    type: "website",
  },
};

export default function KnowledgePage() {
  return <KnowledgeClient />;
}
