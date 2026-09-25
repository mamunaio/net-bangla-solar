import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
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
        <script
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://netbanglaenergy.com/#organization",
                  "name": "Net Bangla Solar",
                  "legalName": "Net Bangla Limited",
                  "url": "https://netbanglaenergy.com",
                  "logo": "https://netbanglaenergy.com/images/Net%20Bangla%20Solar%20Logo.jpeg",
                  "email": "mamun@netbanglaltd.com",
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
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
