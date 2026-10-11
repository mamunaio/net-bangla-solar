<div align="center">

# ☀️ Net Bangla Solar Limited
### **Clean Energy. Engineered for Reliability. Brighter Bangladesh.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6_(Turbopack)-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Security Hardened](https://img.shields.io/badge/Security-HSTS_%7C_OWASP_Compliant-emerald?style=for-the-badge&logo=securityscorecard&logoColor=white)](./next.config.ts)
[![License](https://img.shields.io/badge/License-Proprietary-amber?style=for-the-badge)](./LICENSE)

<p align="center">
  <b>Premier Turnkey Solar EPC Platform for Industrial, Commercial, Agricultural, and Residential Rooftops in Bangladesh.</b>
  <br />
  <sub>Delivering SREDA-compliant clean energy engineering, 3D drone feasibility audits, and Power Solaroof™ BIPV systems since May 28, 2014.</sub>
</p>

[🌐 Live Official Website](https://netbanglaenergy.com) • [📊 Interactive ROI Calculator](https://netbanglaenergy.com/calculator) • [🏢 Why Choose Us](https://netbanglaenergy.com/why-choose-us) • [📜 HSE Policies](https://netbanglaenergy.com/hse-policy)

---

</div>

## 🌟 Key Platform Highlights

- ⚡ **Turnkey Solar EPC Engineering:** End-to-end design, civil load auditing, procurement, grid synchronization, and 24/7 O&M monitoring.
- 🏗️ **Power Solaroof™ BIPV Technology:** 100% leak-proof, non-penetrating solar structural roofing eliminating separate metal shed replacement costs.
- 📐 **3D Feasibility & Net Metering:** Automated SREDA & BPDB compliant net-metering modeling with payback timeline analysis.
- 🧮 **Interactive Solar ROI Calculator:** High-precision financial estimation engine for Capex recovery, annual electricity savings, and 25-year cash-flow forecasting.
- 🏢 **Institutional Trust & Enlistments:** Registered vendor for **Bangladesh Machine Tools Factory (BMTF)**, **Khulna Shipyard Limited**, and the **Bangladesh e-GP System**.
- 🛡️ **Enterprise-Grade Security:** Hardened HTTP security headers (HSTS, Anti-Clickjacking `X-Frame-Options`, Anti-MIME sniffing, strict CSP & zero CVEs).

---

## 🏗️ Project Architecture & Tech Stack

```
net-bangla-solar/
├── app/                              # Next.js 16 App Router (23 Prerendered Static Routes)
│   ├── layout.tsx                    # Root Layout, JSON-LD Schema & Theme Initializer
│   ├── page.tsx                      # High-Impact Homepage
│   ├── calculator/                   # Dynamic ROI Calculator & Solar Funding Program
│   ├── why-choose-us/                # Corporate Pillars, Certifications & Bankability
│   ├── solutions/                    # Solution Architecture Suites
│   │   ├── industrial-solar-epc/     # Industrial Mega-Watt Rooftop EPC
│   │   ├── commercial-rooftop/       # Commercial & Corporate Net Metering
│   │   ├── residential-solar/        # Hybrid Residential Systems & Battery ESS
│   │   ├── power-solaroof/           # Power Solaroof™ BIPV System
│   │   └── agricultural-solar/       # Solar Irrigation Pumps & Agrivoltaics
│   ├── hse-policy/                   # Quality, HSE & Environmental Policy Statements
│   ├── about/                        # Corporate Heritage, Mission & Management
│   ├── contact/                      # Nationwide Turnkey EPC Consultation Desk
│   ├── faq/                          # Solar Engineering & Regulatory Knowledgebase
│   └── globals.css                   # Custom Solar Design System & Tokens
├── components/
│   ├── layout/                       # Navbar, Mobile Navigation & Footer
│   ├── providers/                    # Theme Provider & Interactive Quote Modal Context
│   ├── sections/                     # Hero, Tech, Clients, ImpactStats & CTA Sections
│   └── ui/                           # Reusable Container, Modal & Button Components
├── public/                           # Optimized Images, Schemas, Icons & Drone Videos
├── next.config.ts                    # Production Security Headers (HSTS, CSP, SAMEORIGIN)
└── tsconfig.json                     # Strict TypeScript Configuration
```

---

## 🔒 Security Hardening & Compliance

This repository is hardened against cyber security vulnerabilities adhering to **OWASP Top 10** standards:

| Security Control | Implementation | Protection Scope |
| :--- | :--- | :--- |
| **HSTS** | `max-age=63072000; includeSubDomains; preload` | Enforces 2-year HTTPS encryption |
| **Anti-Clickjacking** | `X-Frame-Options: SAMEORIGIN` | Blocks unauthorized third-party iframe embedding |
| **MIME Sniffing** | `X-Content-Type-Options: nosniff` | Prevents browser MIME-type confusion attacks |
| **Hardware Privacy** | `Permissions-Policy` | Restricts camera, microphone & geolocation access |
| **Safe Referrers** | `Referrer-Policy: strict-origin-when-cross-origin` | Protects privacy on external link navigation |
| **XSS Defense** | React JSX auto-escaping + `X-XSS-Protection` | Mitigates client-side script injections |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/mamunaio/net-bangla-solar.git
cd net-bangla-solar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore the platform.

### 4. Production Build & Verification
```bash
npm run build
```
Generates 23 optimized, prerendered static routes with zero build or type errors.

---

## 📋 Available NPM Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles an optimized, type-safe production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Executes ESLint analysis |
| `npx tsc --noEmit` | Runs strict TypeScript type-checking without emitting files |

---

## 🏛️ Corporate Certifications & Affiliations

- **BASIS Membership:** Member ID `A-405`
- **BACCO Membership:** Member ID `2018.0082.1000.0062`
- **BTRC Registration:** Call Center / BPO Registered
- **Institutional Enlistment:** BMTF, Khulna Shipyard Ltd, Bangladesh e-GP
- **Regulatory Compliance:** SREDA Net Metering Guidelines & BPDB Standards

---

## 📬 Contact & Corporate Desk

- **Corporate Office:** Tejgaon Commercial Area / Mohakhali DOHS, Dhaka, Bangladesh
- **Direct EPC Hotline:** `+880 1711-000000` / `+880 2-9880000`
- **Official Inquiries:** [solar@netbangla.com](mailto:solar@netbangla.com) • [mamun@netbanglaltd.com](mailto:mamun@netbanglaltd.com)
- **Corporate Website:** [https://netbanglaenergy.com](https://netbanglaenergy.com)

---

<div align="center">
  <sub>© 2014 – 2026 <b>Net Bangla Limited (Solar Division)</b>. All Rights Reserved. Clean Energy for a Greener Tomorrow.</sub>
</div>
