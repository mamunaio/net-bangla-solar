import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Net Bangla Solar Company | Clean Energy. Brighter Bangladesh.",
  description:
    "Leading provider of premium residential, commercial, and industrial solar energy systems in Bangladesh. Engineered for reliability, sustainability, and long-term energy savings.",
  keywords: [
    "Solar Energy Bangladesh",
    "Net Bangla Solar",
    "Renewable Energy",
    "Rooftop Solar",
    "Industrial Solar Bangladesh",
    "Solar Panel Installation",
    "Clean Energy",
  ],
  authors: [{ name: "Net Bangla Solar Company" }],
  openGraph: {
    title: "Net Bangla Solar Company | Clean Energy. Brighter Bangladesh.",
    description:
      "Engineered for reliability, sustainability, and long-term energy savings. Premium solar solutions across Bangladesh.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#050b07",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-solar-bg-primary text-solar-text-primary antialiased min-h-screen relative selection:bg-emerald-500/30 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
