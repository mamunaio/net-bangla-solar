const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svg = `
<svg width="1600" height="1000" viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020804"/>
      <stop offset="35%" stop-color="#07190d"/>
      <stop offset="70%" stop-color="#14301a"/>
      <stop offset="100%" stop-color="#3d3210"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="82%" cy="22%" r="55%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.7"/>
      <stop offset="30%" stop-color="#f59e0b" stop-opacity="0.4"/>
      <stop offset="60%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#020804" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panelGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#123824"/>
      <stop offset="50%" stop-color="#0b2416"/>
      <stop offset="100%" stop-color="#05140b"/>
    </linearGradient>
    <linearGradient id="panelGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#184a30"/>
      <stop offset="50%" stop-color="#0e301d"/>
      <stop offset="100%" stop-color="#06180e"/>
    </linearGradient>
    <linearGradient id="panelGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e5c3c"/>
      <stop offset="50%" stop-color="#123d26"/>
      <stop offset="100%" stop-color="#071e11"/>
    </linearGradient>
  </defs>

  <!-- Sky & Atmospheric backdrop -->
  <rect width="1600" height="1000" fill="url(#skyGrad)"/>
  <circle cx="1312" cy="220" r="550" fill="url(#sunGlow)"/>

  <!-- Distant hillside silhouette -->
  <path d="M0 640 Q 350 560, 750 590 T 1300 530 T 1600 560 L 1600 1000 L 0 1000 Z" fill="#041008" opacity="0.85"/>

  <!-- Background Solar Array -->
  <polygon points="120,720 480,590 820,590 460,720" fill="url(#panelGrad1)" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.4"/>
  <line x1="210" y1="685" x2="570" y2="590" stroke="#34d399" stroke-width="1" stroke-opacity="0.45"/>
  <line x1="300" y1="650" x2="660" y2="590" stroke="#34d399" stroke-width="1" stroke-opacity="0.45"/>

  <!-- Midground Solar Array -->
  <polygon points="460,810 880,630 1280,630 860,810" fill="url(#panelGrad2)" stroke="#22c55e" stroke-width="2" stroke-opacity="0.55"/>
  <line x1="580" y1="755" x2="1000" y2="630" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="700" y1="700" x2="1120" y2="630" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.6"/>

  <!-- Foreground Solar Array -->
  <polygon points="260,980 780,730 1480,730 960,980" fill="url(#panelGrad3)" stroke="#34d399" stroke-width="2.5" stroke-opacity="0.7"/>
  <line x1="420" y1="905" x2="940" y2="730" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
  <line x1="580" y1="830" x2="1100" y2="730" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>
  <line x1="740" y1="765" x2="1260" y2="730" stroke="#86efac" stroke-width="2" stroke-opacity="0.75"/>

  <!-- Golden hour sun rays -->
  <line x1="1312" y1="220" x2="740" y2="765" stroke="#fde047" stroke-width="1.5" stroke-opacity="0.35" stroke-dasharray="8,12"/>
  <line x1="1312" y1="220" x2="460" y2="810" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="6,14"/>
  <line x1="1312" y1="220" x2="180" y2="920" stroke="#fbbf24" stroke-width="1" stroke-opacity="0.2" stroke-dasharray="10,18"/>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(path.join(outputDir, 'solar-hero.jpg'))
  .then(() => {
    console.log('solar-hero.jpg created successfully in public/images/');
  })
  .catch((err) => {
    console.error('Error creating solar-hero.jpg:', err);
    process.exit(1);
  });
