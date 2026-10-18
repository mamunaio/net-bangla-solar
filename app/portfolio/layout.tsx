import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Flagship Solar EPC Projects & Case Studies | Net Bangla Solar Energy Solutions",
  description:
    "Explore turnkey solar rooftop installations across Bangladesh, from multi-megawatt industrial textile mills and port logistics to corporate headquarters and residences.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
