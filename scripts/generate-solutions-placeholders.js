const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Industrial Solar SVG
const industrialSvg = `
<svg width="1400" height="1000" viewBox="0 0 1400 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="indSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="40%" stop-color="#081e10"/>
      <stop offset="70%" stop-color="#163820"/>
      <stop offset="100%" stop-color="#423512"/>
    </linearGradient>
    <radialGradient id="indSun" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.75"/>
      <stop offset="35%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="indPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#154228"/>
      <stop offset="50%" stop-color="#0d2919"/>
      <stop offset="100%" stop-color="#05140b"/>
    </linearGradient>
  </defs>
  <rect width="1400" height="1000" fill="url(#indSky)"/>
  <circle cx="1120" cy="200" r="500" fill="url(#indSun)"/>
  <!-- Industrial facility silhouette in background -->
  <polygon points="100,650 100,550 300,550 300,500 500,500 500,650" fill="#041208" opacity="0.9"/>
  <polygon points="480,650 480,480 620,480 620,650" fill="#030d06" opacity="0.95"/>
  <rect x="540" y="420" width="20" height="60" fill="#020904"/>
  <!-- Industrial solar panel rows -->
  <polygon points="50,750 450,580 900,580 500,750" fill="url(#indPanel)" stroke="#10b981" stroke-width="2" stroke-opacity="0.5"/>
  <line x1="160" y1="700" x2="560" y2="580" stroke="#34d399" stroke-width="1.5" stroke-opacity="0.5"/>
  <line x1="280" y1="650" x2="680" y2="580" stroke="#34d399" stroke-width="1.5" stroke-opacity="0.5"/>
  <polygon points="400,850 850,620 1350,620 900,850" fill="url(#indPanel)" stroke="#22c55e" stroke-width="2.5" stroke-opacity="0.6"/>
  <line x1="520" y1="790" x2="970" y2="620" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.65"/>
  <line x1="660" y1="720" x2="1110" y2="620" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.65"/>
  <polygon points="200,1020 700,740 1400,740 900,1020" fill="url(#indPanel)" stroke="#34d399" stroke-width="3" stroke-opacity="0.7"/>
  <line x1="380" y1="920" x2="880" y2="740" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
  <line x1="560" y1="830" x2="1060" y2="740" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
</svg>
`;

// 2. Commercial Solar SVG
const commercialSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="comSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030a05"/>
      <stop offset="50%" stop-color="#092413"/>
      <stop offset="100%" stop-color="#2d3a14"/>
    </linearGradient>
    <radialGradient id="comSun" cx="70%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.65"/>
      <stop offset="40%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#030a05" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="comPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#164e2e"/>
      <stop offset="100%" stop-color="#06180e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#comSky)"/>
  <circle cx="840" cy="270" r="400" fill="url(#comSun)"/>
  <!-- Commercial building facade and rooftop -->
  <polygon points="200,480 900,480 850,900 150,900" fill="#061a0e" stroke="#10b981" stroke-width="1" stroke-opacity="0.3"/>
  <!-- Windows pattern -->
  <rect x="250" y="550" width="80" height="60" fill="#10b981" opacity="0.2"/>
  <rect x="370" y="550" width="80" height="60" fill="#10b981" opacity="0.25"/>
  <rect x="490" y="550" width="80" height="60" fill="#10b981" opacity="0.15"/>
  <rect x="610" y="550" width="80" height="60" fill="#10b981" opacity="0.3"/>
  <!-- Rooftop solar panels array -->
  <polygon points="220,460 480,360 880,360 620,460" fill="url(#comPanel)" stroke="#34d399" stroke-width="2" stroke-opacity="0.6"/>
  <line x1="330" y1="420" x2="590" y2="360" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.7"/>
  <line x1="450" y1="380" x2="710" y2="360" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.7"/>
  <polygon points="180,520 440,430 840,430 580,520" fill="url(#comPanel)" stroke="#22c55e" stroke-width="2" stroke-opacity="0.6"/>
</svg>
`;

// 3. Residential Solar SVG
const residentialSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="resSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020904"/>
      <stop offset="45%" stop-color="#081c0e"/>
      <stop offset="85%" stop-color="#1b3d22"/>
      <stop offset="100%" stop-color="#4a3812"/>
    </linearGradient>
    <radialGradient id="resSun" cx="80%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.7"/>
      <stop offset="35%" stop-color="#22c55e" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#020904" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="resPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#185734"/>
      <stop offset="100%" stop-color="#081d11"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#resSky)"/>
  <circle cx="960" cy="225" r="420" fill="url(#resSun)"/>
  <!-- Trees and residential surroundings -->
  <circle cx="150" cy="620" r="140" fill="#041408" opacity="0.8"/>
  <circle cx="280" cy="650" r="110" fill="#061c0d" opacity="0.85"/>
  <circle cx="1050" cy="600" r="160" fill="#041408" opacity="0.8"/>
  <!-- Residential villa home structure -->
  <polygon points="320,620 620,400 920,620" fill="#092213"/>
  <rect x="360" y="620" width="520" height="280" fill="#06180d" stroke="#10b981" stroke-width="1" stroke-opacity="0.25"/>
  <rect x="560" y="700" width="90" height="150" fill="#10b981" opacity="0.3"/> <!-- Door -->
  <!-- Modern pitched rooftop solar panels -->
  <polygon points="400,590 610,430 750,490 540,650" fill="url(#resPanel)" stroke="#34d399" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="470" y1="535" x2="610" y2="430" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.75"/>
  <line x1="640" y1="570" x2="680" y2="540" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.75"/>
</svg>
`;

// 4. Operations & Maintenance SVG
const maintenanceSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="maintSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="40%" stop-color="#071b0e"/>
      <stop offset="75%" stop-color="#14361c"/>
      <stop offset="100%" stop-color="#383010"/>
    </linearGradient>
    <radialGradient id="maintSun" cx="75%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.6"/>
      <stop offset="35%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="maintPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#164d2d"/>
      <stop offset="100%" stop-color="#06170d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#maintSky)"/>
  <circle cx="900" cy="180" r="450" fill="url(#maintSun)"/>
  <!-- Foreground inspected solar panel -->
  <polygon points="150,900 500,520 1150,520 800,900" fill="url(#maintPanel)" stroke="#22c55e" stroke-width="2.5" stroke-opacity="0.6"/>
  <line x1="330" y1="710" x2="680" y2="520" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
  <line x1="510" y1="620" x2="860" y2="520" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
  <!-- Diagnostic equipment overlay & tool motifs -->
  <circle cx="700" cy="460" r="30" fill="#041409"/>
  <circle cx="700" cy="460" r="28" stroke="#f59e0b" stroke-width="4" fill="none"/>
  <rect x="675" y="490" width="50" height="120" rx="6" fill="#10b981" opacity="0.8"/>
  <circle cx="700" cy="540" r="16" fill="#05140b"/>
  <!-- Diagnostic sensor waves -->
  <path d="M740 450 Q 770 460 740 470" stroke="#34d399" stroke-width="2" fill="none" opacity="0.8"/>
  <path d="M755 440 Q 795 460 755 480" stroke="#34d399" stroke-width="2" fill="none" opacity="0.6"/>
</svg>
`;

async function generateAll() {
  await sharp(Buffer.from(industrialSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'solar-industrial.jpg'));
  await sharp(Buffer.from(commercialSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'solar-commercial.jpg'));
  await sharp(Buffer.from(residentialSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'solar-residential.jpg'));
  await sharp(Buffer.from(maintenanceSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'solar-maintenance.jpg'));
  console.log('All 4 solution placeholder images generated successfully in public/images/');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
