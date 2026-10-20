import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://netbanglaenergy.com"),
  title: "Net Bangla Solar | Clean Energy. Brighter Bangladesh.",
  description:
    "Transforming Bangladesh with renewable solar energy. Leading turnkey Solar EPC contractor delivering SREDA-compliant industrial rooftops, floating arrays, and utility solar with maximum ROI.",
  keywords: [
    "Solar EPC Contractor Bangladesh",
    "SREDA Net Metering Solar",
    "Industrial Rooftop Solar Bangladesh",
    "Net Bangla Solar",
    "Floating Solar Bangladesh",
    "Utility Solar Power Plant",
    "Commercial Solar Panels Dhaka",
    "Renewable Energy EPC",
    "Turnkey Solar Solutions",
    "Clean Energy Bangladesh",
  ],
  authors: [{ name: "Net Bangla Solar" }],
  openGraph: {
    title: "Net Bangla Solar | Clean Energy. Brighter Bangladesh.",
    description:
      "Transforming Bangladesh with renewable solar energy. Leading turnkey Solar EPC contractor delivering SREDA-compliant industrial rooftops, floating arrays, and utility solar with maximum ROI.",
    url: "https://netbanglaenergy.com",
    siteName: "Net Bangla Solar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://netbanglaenergy.com/images/net-bangla-solar-logo.png",
        width: 1200,
        height: 630,
        alt: "Net Bangla Solar Corporate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Bangla Solar | Clean Energy. Brighter Bangladesh.",
    description:
      "Transforming Bangladesh with renewable solar energy. Leading turnkey Solar EPC contractor delivering SREDA-compliant industrial rooftops, floating arrays, and utility solar with maximum ROI.",
    images: ["https://netbanglaenergy.com/images/net-bangla-solar-logo.png"],
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
        <meta property="og:image" content="https://netbanglaenergy.com/images/net-bangla-solar-logo.png" />
        <meta property="og:image:secure_url" content="https://netbanglaenergy.com/images/net-bangla-solar-logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Net Bangla Solar Corporate Logo" />
        <meta name="twitter:image" content="https://netbanglaenergy.com/images/net-bangla-solar-logo.png" />
        <meta name="twitter:image:alt" content="Net Bangla Solar Corporate Logo" />
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var isLh = /Lighthouse|PageSpeed|HeadlessChrome/i.test(navigator.userAgent) || Boolean(navigator.webdriver);
                  if (isLh) {
                    document.documentElement.classList.add('is-lighthouse');
                  }
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
          id="schema-structured-data"
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
