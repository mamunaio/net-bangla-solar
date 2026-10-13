import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { QuoteModalProvider } from "@/components/providers/QuoteModalProvider";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/ui/PageLoader";
import { InitialPreloader } from "@/components/ui/InitialPreloader";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Net Bangla Solar Energy Solutions | Clean Energy. Brighter Bangladesh.",
  description:
    "Transforming Bangladesh with renewable solar energy. Leading turnkey Solar EPC contractor delivering SREDA-compliant industrial rooftops, floating arrays, and utility solar with maximum ROI.",
  keywords: [
    "Solar EPC Contractor Bangladesh",
    "SREDA Net Metering Solar",
    "Industrial Rooftop Solar Bangladesh",
    "Net Bangla Solar Energy Solutions",
    "Floating Solar Bangladesh",
    "Utility Solar Power Plant",
    "Commercial Solar Panels Dhaka",
    "Renewable Energy EPC",
    "Turnkey Solar Solutions",
    "Clean Energy Bangladesh",
  ],
  authors: [{ name: "Net Bangla Solar Energy Solutions" }],
  openGraph: {
    title: "Net Bangla Solar Energy Solutions | Clean Energy. Brighter Bangladesh.",
    description:
      "Transforming Bangladesh with renewable solar energy. Leading turnkey Solar EPC contractor delivering SREDA-compliant industrial rooftops, floating arrays, and utility solar with maximum ROI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Bangla Solar Energy Solutions | Clean Energy. Brighter Bangladesh.",
    description:
      "Transforming Bangladesh with renewable solar energy. Leading turnkey Solar EPC contractor delivering SREDA-compliant industrial rooftops, floating arrays, and utility solar with maximum ROI.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${jetBrainsMono.variable}`}>
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('netbangla-theme');
                  if (saved === 'dark') {
                    // Reset stale dark mode
                    localStorage.setItem('netbangla-theme', 'light');
                  }
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://netbanglaenergy.com/#organization",
                  "name": "Net Bangla Solar Energy Solutions",
                  "legalName": "Net Bangla Limited",
                  "url": "https://netbanglaenergy.com",
                  "logo": "https://netbanglaenergy.com/images/net-bangla-solar-logo.png",
                  "email": "solar@netbanglaltd.com",
                  "foundingDate": "2014-05-28",
                  "description":
                    "Premier Turnkey Solar EPC company in Bangladesh specializing in Industrial, Commercial, and Residential rooftop solar PV systems with Net Metering.",
                  "memberOf": [
                    {
                      "@type": "Organization",
                      "name": "BASIS (Bangladesh Association of Software and Information Services)",
                      "identifier": "ID: A-405",
                    },
                    {
                      "@type": "Organization",
                      "name": "BACCO (Bangladesh Association of Contact Center & Outsourcing)",
                      "identifier": "ID: 2018.0082.1000.0062",
                    },
                  ],
                },
                {
                  "@type": "Service",
                  "name": "Turnkey Solar EPC Solutions",
                  "provider": {
                    "@id": "https://netbanglaenergy.com/#organization",
                  },
                  "serviceType":
                    "Solar Photovoltaic Engineering, Procurement & Construction",
                  "areaServed": {
                    "@type": "Country",
                    "name": "Bangladesh",
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Solar Architectures",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Power Solaroof™ Integrated Roofing",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Industrial Rooftop Solar EPC",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Commercial Rooftop Solar & Net Metering",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Residential Hybrid & On-Grid Solar",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Agricultural Solar Irrigation Pumps",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-solar-bg-primary text-solar-text-primary antialiased min-h-screen relative selection:bg-amber-500/25 selection:text-amber-950 transition-colors duration-200">
        <InitialPreloader />
        <PageLoader />
        <ThemeProvider>
          <QuoteModalProvider>
            <Navbar />
            {children}
            <QuoteModal />
          </QuoteModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
