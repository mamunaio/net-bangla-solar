const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svg = `
<svg width="1400" height="1050" viewBox="0 0 1400 1050" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyAtmosphere" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="40%" stop-color="#081a0e"/>
      <stop offset="75%" stop-color="#16331e"/>
      <stop offset="100%" stop-color="#3d3512"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="75%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fde047" stop-opacity="0.8"/>
      <stop offset="25%" stop-color="#f59e0b" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panelRow1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#154228"/>
      <stop offset="50%" stop-color="#0c2617"/>
      <stop offset="100%" stop-color="#06160d"/>
    </linearGradient>
    <linearGradient id="panelRow2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1c5735"/>
      <stop offset="50%" stop-color="#103621"/>
      <stop offset="100%" stop-color="#071b10"/>
    </linearGradient>
    <linearGradient id="safetyVest" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#84cc16"/>
      <stop offset="100%" stop-color="#22c55e"/>
    </linearGradient>
  </defs>

  <!-- Sky & Atmospheric backdrop -->
  <rect width="1400" height="1050" fill="url(#skyAtmosphere)"/>
  <circle cx="1050" cy="210" r="500" fill="url(#sunGlow)"/>

  <!-- Distant green landscape -->
  <path d="M0 620 Q 300 540, 700 570 T 1400 530 L 1400 1050 L 0 1050 Z" fill="#041208" opacity="0.85"/>

  <!-- Background Solar Panels -->
  <polygon points="100,700 450,580 850,580 450,700" fill="url(#panelRow1)" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="200" y1="665" x2="550" y2="580" stroke="#34d399" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="300" y1="630" x2="650" y2="580" stroke="#34d399" stroke-width="1.5" stroke-opacity="0.4"/>

  <!-- Midground Solar Panels -->
  <polygon points="450,830 850,620 1350,620 900,830" fill="url(#panelRow2)" stroke="#22c55e" stroke-width="2" stroke-opacity="0.5"/>
  <line x1="580" y1="765" x2="980" y2="620" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="720" y1="700" x2="1120" y2="620" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="860" y1="635" x2="1260" y2="620" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.6"/>

  <!-- Foreground Solar Inspection Structure -->
  <polygon points="200,1050 650,780 1380,780 850,1050" fill="url(#panelRow2)" stroke="#34d399" stroke-width="2.5" stroke-opacity="0.7"/>
  <line x1="350" y1="960" x2="800" y2="780" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
  <line x1="520" y1="880" x2="970" y2="780" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
  <line x1="690" y1="800" x2="1140" y2="780" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>

  <!-- Engineer Silhouette 1 (Inspecting panel with tablet/clipboard) -->
  <circle cx="560" cy="710" r="28" fill="#061a0d"/> <!-- Hardhat -->
  <path d="M530 705 Q 560 690 590 705" stroke="#f59e0b" stroke-width="6" fill="none"/> <!-- Helmet brim -->
  <path d="M535 740 L 585 740 L 600 840 L 520 840 Z" fill="url(#safetyVest)"/> <!-- Hi-vis vest -->
  <rect x="580" y="770" width="30" height="42" rx="4" fill="#34d399" opacity="0.9"/> <!-- Digital tablet -->

  <!-- Engineer Silhouette 2 (Safety helmet and gear) -->
  <circle cx="680" cy="670" r="24" fill="#061a0d"/>
  <path d="M655 665 Q 680 652 705 665" stroke="#ffffff" stroke-width="5" fill="none"/>
  <path d="M660 695 L 700 695 L 715 790 L 645 790 Z" fill="url(#safetyVest)"/>

  <!-- Solar rays crossing the installation -->
  <line x1="1050" y1="210" x2="560" y2="710" stroke="#fde047" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="10,14"/>
  <line x1="1050" y1="210" x2="680" y2="670" stroke="#fbbf24" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="8,12"/>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(path.join(outputDir, 'solar-engineering.jpg'))
  .then(() => {
    console.log('solar-engineering.jpg created successfully in public/images/');
  })
  .catch((err) => {
    console.error('Error creating solar-engineering.jpg:', err);
    process.exit(1);
  });
