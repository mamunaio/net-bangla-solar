const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Gazipur Industrial Solar Plant (1400x900)
const gazipurSvg = `
<svg width="1400" height="900" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gazSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="35%" stop-color="#091d10"/>
      <stop offset="70%" stop-color="#193b22"/>
      <stop offset="100%" stop-color="#4a3b12"/>
    </linearGradient>
    <radialGradient id="gazSun" cx="82%" cy="22%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8"/>
      <stop offset="30%" stop-color="#f59e0b" stop-opacity="0.4"/>
      <stop offset="70%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gazPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#144228"/>
      <stop offset="50%" stop-color="#0b2818"/>
      <stop offset="100%" stop-color="#04140b"/>
    </linearGradient>
  </defs>
  <rect width="1400" height="900" fill="url(#gazSky)"/>
  <circle cx="1148" cy="198" r="450" fill="url(#gazSun)"/>
  <!-- Distant industrial silhouettes & Gazipur tree line -->
  <path d="M0 580 Q 300 520, 700 550 T 1400 510 L 1400 900 L 0 900 Z" fill="#041208" opacity="0.85"/>
  <rect x="250" y="470" width="160" height="110" fill="#030d06"/>
  <rect x="300" y="420" width="30" height="50" fill="#020904"/>
  <rect x="550" y="490" width="220" height="90" fill="#030d06"/>
  <!-- Extensive 2.5 MW solar panel rows -->
  <polygon points="50,700 450,560 900,560 500,700" fill="url(#gazPanel)" stroke="#10b981" stroke-width="1.8" stroke-opacity="0.5"/>
  <line x1="160" y1="655" x2="560" y2="560" stroke="#34d399" stroke-width="1.5" stroke-opacity="0.5"/>
  <line x1="280" y1="610" x2="680" y2="560" stroke="#34d399" stroke-width="1.5" stroke-opacity="0.5"/>
  <polygon points="400,820 850,600 1350,600 900,820" fill="url(#gazPanel)" stroke="#22c55e" stroke-width="2.2" stroke-opacity="0.6"/>
  <line x1="520" y1="765" x2="970" y2="600" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.65"/>
  <line x1="660" y1="700" x2="1110" y2="600" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.65"/>
  <polygon points="150,900 680,720 1400,720 900,900" fill="url(#gazPanel)" stroke="#34d399" stroke-width="2.5" stroke-opacity="0.7"/>
  <line x1="320" y1="840" x2="850" y2="720" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
  <line x1="500" y1="780" x2="1030" y2="720" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
</svg>
`;

// 2. Dhaka Commercial Rooftop (1200x800)
const dhakaSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dhakaSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030b06"/>
      <stop offset="45%" stop-color="#0a2113"/>
      <stop offset="80%" stop-color="#173b22"/>
      <stop offset="100%" stop-color="#363012"/>
    </linearGradient>
    <radialGradient id="dhakaSun" cx="75%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.7"/>
      <stop offset="40%" stop-color="#10b981" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#030b06" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="dhakaPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#164d2d"/>
      <stop offset="100%" stop-color="#061a0f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#dhakaSky)"/>
  <circle cx="900" cy="200" r="380" fill="url(#dhakaSun)"/>
  <!-- Commercial building rooftop elevated view -->
  <polygon points="120,440 850,380 1100,750 300,800" fill="#071d11" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.3"/>
  <!-- Dhaka skyline silhouetted -->
  <rect x="80" y="320" width="80" height="120" fill="#041208"/>
  <rect x="200" y="270" width="100" height="170" fill="#030f07"/>
  <rect x="420" y="290" width="90" height="150" fill="#041409"/>
  <!-- Rooftop solar module grid array -->
  <polygon points="200,460 480,410 820,410 540,460" fill="url(#dhakaPanel)" stroke="#34d399" stroke-width="1.8" stroke-opacity="0.6"/>
  <line x1="300" y1="440" x2="580" y2="410" stroke="#86efac" stroke-width="1.2" stroke-opacity="0.65"/>
  <line x1="420" y1="425" x2="700" y2="410" stroke="#86efac" stroke-width="1.2" stroke-opacity="0.65"/>
  <polygon points="260,540 560,480 920,480 620,540" fill="url(#dhakaPanel)" stroke="#22c55e" stroke-width="2" stroke-opacity="0.65"/>
  <line x1="380" y1="520" x2="680" y2="480" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.7"/>
  <line x1="500" y1="500" x2="800" y2="480" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.7"/>
  <polygon points="340,640 660,570 1020,570 700,640" fill="url(#dhakaPanel)" stroke="#34d399" stroke-width="2.2" stroke-opacity="0.7"/>
</svg>
`;

// 3. Chattogram Manufacturing Facility (1200x800)
const chattogramSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ctgSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="40%" stop-color="#081e10"/>
      <stop offset="75%" stop-color="#15361e"/>
      <stop offset="100%" stop-color="#403212"/>
    </linearGradient>
    <radialGradient id="ctgSun" cx="80%" cy="20%" r="48%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.75"/>
      <stop offset="35%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ctgPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#144629"/>
      <stop offset="100%" stop-color="#06180e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#ctgSky)"/>
  <circle cx="960" cy="160" r="380" fill="url(#ctgSun)"/>
  <!-- Chattogram rolling hills & manufacturing sheds -->
  <path d="M0 480 Q 250 420, 600 450 T 1200 400 L 1200 800 L 0 800 Z" fill="#041308" opacity="0.8"/>
  <polygon points="150,560 380,480 620,480 400,560" fill="#061d10" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.3"/>
  <polygon points="450,560 680,480 920,480 700,560" fill="#061d10" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.3"/>
  <!-- 1.2 MW Solar installation on rooftop and ground -->
  <polygon points="180,680 500,560 950,560 620,680" fill="url(#ctgPanel)" stroke="#22c55e" stroke-width="2" stroke-opacity="0.6"/>
  <line x1="300" y1="635" x2="620" y2="560" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.65"/>
  <line x1="420" y1="595" x2="740" y2="560" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.65"/>
  <polygon points="250,800 620,670 1150,670 780,800" fill="url(#ctgPanel)" stroke="#34d399" stroke-width="2.5" stroke-opacity="0.7"/>
  <line x1="400" y1="750" x2="770" y2="670" stroke="#86efac" stroke-width="1.8" stroke-opacity="0.7"/>
  <line x1="560" y1="710" x2="930" y2="670" stroke="#86efac" stroke-width="1.8" stroke-opacity="0.7"/>
</svg>
`;

// 4. Residential Solar Program (1200x800)
const residentialProgramSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="resProgSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="45%" stop-color="#081d0f"/>
      <stop offset="85%" stop-color="#183d20"/>
      <stop offset="100%" stop-color="#483812"/>
    </linearGradient>
    <radialGradient id="resProgSun" cx="80%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.7"/>
      <stop offset="35%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="resProgPanel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#165230"/>
      <stop offset="100%" stop-color="#071b10"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#resProgSky)"/>
  <circle cx="960" cy="200" r="380" fill="url(#resProgSun)"/>
  <!-- Multiple community homes with rooftop solar -->
  <polygon points="120,620 280,500 440,620" fill="#082012"/>
  <rect x="150" y="620" width="260" height="180" fill="#05170d" stroke="#10b981" stroke-width="1" stroke-opacity="0.2"/>
  <polygon points="160,600 280,510 400,600" fill="url(#resProgPanel)" stroke="#34d399" stroke-width="1.8" stroke-opacity="0.65"/>
  <polygon points="500,580 700,440 900,580" fill="#082012"/>
  <rect x="540" y="580" width="320" height="220" fill="#05170d" stroke="#10b981" stroke-width="1" stroke-opacity="0.2"/>
  <polygon points="550,560 700,455 850,560" fill="url(#resProgPanel)" stroke="#22c55e" stroke-width="2.2" stroke-opacity="0.7"/>
  <line x1="620" y1="520" x2="700" y2="455" stroke="#86efac" stroke-width="1.5" stroke-opacity="0.75"/>
  <!-- Surrounding greenery -->
  <circle cx="80" cy="650" r="80" fill="#041207" opacity="0.85"/>
  <circle cx="480" cy="670" r="70" fill="#041207" opacity="0.85"/>
  <circle cx="980" cy="620" r="110" fill="#041207" opacity="0.85"/>
</svg>
`;

async function generateAll() {
  await sharp(Buffer.from(gazipurSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'project-gazipur.jpg'));
  await sharp(Buffer.from(dhakaSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'project-dhaka.jpg'));
  await sharp(Buffer.from(chattogramSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'project-chattogram.jpg'));
  await sharp(Buffer.from(residentialProgramSvg)).jpeg({ quality: 92 }).toFile(path.join(outputDir, 'project-residential.jpg'));
  console.log('All 4 project placeholder images generated successfully in public/images/');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
