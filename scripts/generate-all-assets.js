const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to generate a realistic perspective grid of solar cells
function generateSolarGrid(startX, startY, width, height, rows, cols, skewX = 0, skewY = 0) {
  let lines = '';
  // Outer frame
  lines += `<rect x="${startX}" y="${startY}" width="${width}" height="${height}" fill="url(#cellGrad)" stroke="#34d399" stroke-width="2" rx="4" transform="skewX(${skewX}) skewY(${skewY})" opacity="0.95"/>`;
  // Rows
  for (let r = 1; r < rows; r++) {
    const y = startY + (height / rows) * r;
    lines += `<line x1="${startX}" y1="${y}" x2="${startX + width}" y2="${y}" stroke="#6ee7b7" stroke-width="1.2" stroke-opacity="0.7" transform="skewX(${skewX}) skewY(${skewY})"/>`;
  }
  // Cols
  for (let c = 1; c < cols; c++) {
    const x = startX + (width / cols) * c;
    lines += `<line x1="${x}" y1="${startY}" x2="${x}" y2="${startY + height}" stroke="#6ee7b7" stroke-width="1.2" stroke-opacity="0.7" transform="skewX(${skewX}) skewY(${skewY})"/>`;
    // Busbars
    lines += `<line x1="${x - 1.5}" y1="${startY}" x2="${x - 1.5}" y2="${startY + height}" stroke="#fef08a" stroke-width="0.8" stroke-opacity="0.6" transform="skewX(${skewX}) skewY(${skewY})"/>`;
  }
  return lines;
}

// 1. HERO IMAGE (1600x1000)
const heroSvg = `
<svg width="1600" height="1000" viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041208"/>
      <stop offset="40%" stop-color="#092815"/>
      <stop offset="70%" stop-color="#124024"/>
      <stop offset="90%" stop-color="#3d3714"/>
      <stop offset="100%" stop-color="#785a18"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
      <stop offset="20%" stop-color="#f59e0b" stop-opacity="0.7"/>
      <stop offset="45%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#041208" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a2a1a"/>
      <stop offset="50%" stop-color="#103a24"/>
      <stop offset="100%" stop-color="#061f12"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <!-- Sky & Atmospheric backdrop -->
  <rect width="1600" height="1000" fill="url(#skyGrad)"/>
  <circle cx="1360" cy="200" r="550" fill="url(#sunGlow)"/>

  <!-- Distant mountain/tree silhouette -->
  <path d="M0 640 Q 300 580, 650 600 T 1200 560 T 1600 590 L 1600 1000 L 0 1000 Z" fill="#061c0f" opacity="0.9"/>
  <path d="M0 700 Q 400 660, 850 680 T 1600 650 L 1600 1000 L 0 1000 Z" fill="#082414" opacity="0.95"/>

  <!-- Golden hour sun rays -->
  <line x1="1360" y1="200" x2="600" y2="780" stroke="#fef08a" stroke-width="2" stroke-opacity="0.4" stroke-dasharray="12,16"/>
  <line x1="1360" y1="200" x2="300" y2="840" stroke="#f59e0b" stroke-width="1.8" stroke-opacity="0.3" stroke-dasharray="8,18"/>
  <line x1="1360" y1="200" x2="100" y2="920" stroke="#fbbf24" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="14,20"/>

  <!-- Background Solar Array Row -->
  <g transform="translate(100, 560) scale(0.65)">
    ${generateSolarGrid(0, 0, 240, 140, 4, 6, -18, 4)}
    ${generateSolarGrid(280, 0, 240, 140, 4, 6, -18, 4)}
    ${generateSolarGrid(560, 0, 240, 140, 4, 6, -18, 4)}
    ${generateSolarGrid(840, 0, 240, 140, 4, 6, -18, 4)}
    ${generateSolarGrid(1120, 0, 240, 140, 4, 6, -18, 4)}
    ${generateSolarGrid(1400, 0, 240, 140, 4, 6, -18, 4)}
  </g>

  <!-- Midground Solar Array Row -->
  <g transform="translate(40, 680) scale(0.85)">
    ${generateSolarGrid(0, 0, 260, 150, 4, 6, -15, 3)}
    ${generateSolarGrid(310, 0, 260, 150, 4, 6, -15, 3)}
    ${generateSolarGrid(620, 0, 260, 150, 4, 6, -15, 3)}
    ${generateSolarGrid(930, 0, 260, 150, 4, 6, -15, 3)}
    ${generateSolarGrid(1240, 0, 260, 150, 4, 6, -15, 3)}
  </g>

  <!-- Foreground Huge Photovoltaic Arrays -->
  <g transform="translate(20, 810) scale(1.1)">
    ${generateSolarGrid(0, 0, 290, 160, 5, 8, -12, 2)}
    ${generateSolarGrid(350, 0, 290, 160, 5, 8, -12, 2)}
    ${generateSolarGrid(700, 0, 290, 160, 5, 8, -12, 2)}
    ${generateSolarGrid(1050, 0, 290, 160, 5, 8, -12, 2)}
  </g>

  <!-- Ambient Light Reflection Nodes -->
  <circle cx="580" cy="850" r="18" fill="#34d399" opacity="0.3" filter="blur(6px)"/>
  <circle cx="950" cy="740" r="14" fill="#fbbf24" opacity="0.4" filter="blur(5px)"/>
</svg>
`;

// 2. ABOUT / ENGINEERING IMAGE (1200x900)
const engineeringSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="engSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061a0e"/>
      <stop offset="50%" stop-color="#0d331c"/>
      <stop offset="100%" stop-color="#3b3310"/>
    </linearGradient>
    <radialGradient id="engSun" cx="80%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
      <stop offset="25%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#061a0e" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d301f"/>
      <stop offset="50%" stop-color="#14472e"/>
      <stop offset="100%" stop-color="#082315"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#engSky)"/>
  <circle cx="960" cy="225" r="450" fill="url(#engSun)"/>

  <!-- Rooftop Structure -->
  <polygon points="0,550 1200,450 1200,900 0,900" fill="#082113"/>
  <line x1="0" y1="550" x2="1200" y2="450" stroke="#34d399" stroke-width="2" stroke-opacity="0.6"/>

  <!-- Multiple Solar Strings on Roof -->
  <g transform="translate(60, 480) scale(0.75)">
    ${generateSolarGrid(0, 0, 240, 130, 4, 6, -14, 2)}
    ${generateSolarGrid(280, 0, 240, 130, 4, 6, -14, 2)}
    ${generateSolarGrid(560, 0, 240, 130, 4, 6, -14, 2)}
    ${generateSolarGrid(840, 0, 240, 130, 4, 6, -14, 2)}
  </g>
  <g transform="translate(40, 600) scale(0.9)">
    ${generateSolarGrid(0, 0, 260, 140, 4, 6, -12, 2)}
    ${generateSolarGrid(310, 0, 260, 140, 4, 6, -12, 2)}
    ${generateSolarGrid(620, 0, 260, 140, 4, 6, -12, 2)}
    ${generateSolarGrid(930, 0, 260, 140, 4, 6, -12, 2)}
  </g>

  <!-- Two Solar Engineers (Silhouettes in hi-vis green/amber) -->
  <g transform="translate(420, 560)">
    <!-- Engineer 1 -->
    <circle cx="40" cy="20" r="14" fill="#fef08a"/> <!-- Safety helmet -->
    <path d="M22 36 L58 36 L66 110 L14 110 Z" fill="#22c55e"/> <!-- Hi-vis vest -->
    <rect x="26" y="55" width="28" height="12" fill="#f59e0b"/> <!-- Reflective band -->
    <rect x="46" y="50" width="30" height="20" rx="3" fill="#6ee7b7" stroke="#34d399" stroke-width="1.5"/> <!-- Tablet -->

    <!-- Engineer 2 -->
    <circle cx="120" cy="30" r="13" fill="#fef08a"/>
    <path d="M104 45 L136 45 L144 115 L96 115 Z" fill="#16a34a"/>
    <rect x="106" y="65" width="28" height="10" fill="#f59e0b"/>
  </g>

  <!-- Engineering Telemetry HUD Graphic Overlay -->
  <g transform="translate(820, 640)" opacity="0.85">
    <rect x="0" y="0" width="280" height="140" rx="12" fill="#041208" stroke="#10b981" stroke-width="1.5" opacity="0.85"/>
    <text x="20" y="32" fill="#6ee7b7" font-family="sans-serif" font-size="14" font-weight="bold">SYSTEM EFFICIENCY: 99.4%</text>
    <line x1="20" y1="46" x2="260" y2="46" stroke="#10b981" stroke-width="1" opacity="0.4"/>
    <text x="20" y="70" fill="#cbd5e1" font-family="sans-serif" font-size="12">PEAK OUTPUT: 485 kW</text>
    <text x="20" y="92" fill="#cbd5e1" font-family="sans-serif" font-size="12">GRID STABILITY: OPTIMAL</text>
    <circle cx="240" cy="115" r="5" fill="#34d399"/>
    <text x="140" y="118" fill="#34d399" font-family="sans-serif" font-size="11">MONITOR ACTIVE</text>
  </g>
</svg>
`;

// 3. INDUSTRIAL SOLAR (1400x1000)
const industrialSvg = `
<svg width="1400" height="1000" viewBox="0 0 1400 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="indSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041208"/>
      <stop offset="45%" stop-color="#092816"/>
      <stop offset="75%" stop-color="#144426"/>
      <stop offset="100%" stop-color="#4d4016"/>
    </linearGradient>
    <radialGradient id="indSun" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="30%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="65%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#041208" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a2e1d"/>
      <stop offset="50%" stop-color="#12482e"/>
      <stop offset="100%" stop-color="#062215"/>
    </linearGradient>
  </defs>

  <rect width="1400" height="1000" fill="url(#indSky)"/>
  <circle cx="1120" cy="200" r="500" fill="url(#indSun)"/>

  <!-- Factory Buildings in Background -->
  <polygon points="80,620 80,450 320,450 320,380 600,380 600,620" fill="#072012" opacity="0.95"/>
  <polygon points="580,620 580,410 760,410 760,620" fill="#05180d" opacity="0.95"/>
  <!-- Factory Smokestacks/Vents -->
  <rect x="660" y="340" width="24" height="70" fill="#0a2a18"/>
  <rect x="710" y="320" width="20" height="90" fill="#0a2a18"/>

  <!-- Rooftop Solar on Factory -->
  <g transform="translate(100, 420) scale(0.7)">
    ${generateSolarGrid(0, 0, 260, 70, 3, 8, 12, 0)}
    ${generateSolarGrid(300, 0, 260, 70, 3, 8, 12, 0)}
  </g>

  <!-- Large Ground Solar Arrays in Foreground -->
  <g transform="translate(60, 600) scale(0.8)">
    ${generateSolarGrid(0, 0, 280, 150, 4, 6, -16, 3)}
    ${generateSolarGrid(330, 0, 280, 150, 4, 6, -16, 3)}
    ${generateSolarGrid(660, 0, 280, 150, 4, 6, -16, 3)}
    ${generateSolarGrid(990, 0, 280, 150, 4, 6, -16, 3)}
  </g>
  <g transform="translate(30, 760) scale(1.05)">
    ${generateSolarGrid(0, 0, 300, 160, 5, 8, -14, 2)}
    ${generateSolarGrid(360, 0, 300, 160, 5, 8, -14, 2)}
    ${generateSolarGrid(720, 0, 300, 160, 5, 8, -14, 2)}
  </g>
</svg>
`;

// 4. COMMERCIAL SOLAR (1200x900)
const commercialSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="comSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041409"/>
      <stop offset="50%" stop-color="#0c301b"/>
      <stop offset="100%" stop-color="#423714"/>
    </linearGradient>
    <radialGradient id="comSun" cx="75%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="30%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#041409" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3522"/>
      <stop offset="50%" stop-color="#144d32"/>
      <stop offset="100%" stop-color="#082517"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#comSky)"/>
  <circle cx="900" cy="225" r="400" fill="url(#comSun)"/>

  <!-- Modern Commercial Office Silhouette -->
  <polygon points="120,600 120,380 450,380 450,600" fill="#082314"/>
  <polygon points="430,600 430,300 780,300 780,600" fill="#0a2a19"/>
  <polygon points="760,600 760,420 1100,420 1100,600" fill="#061c0f"/>

  <!-- Glass office windows -->
  ${(() => {
    let w = '';
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 8; c++) {
        w += `<rect x="${460 + c * 38}" y="${340 + r * 45}" width="22" height="28" fill="#6ee7b7" opacity="0.25"/>`;
      }
    }
    return w;
  })()}

  <!-- Rooftop Solar Arrays -->
  <g transform="translate(140, 390) scale(0.65)">
    ${generateSolarGrid(0, 0, 200, 100, 3, 5, 0, 0)}
    ${generateSolarGrid(230, 0, 200, 100, 3, 5, 0, 0)}
  </g>
  <g transform="translate(450, 310) scale(0.7)">
    ${generateSolarGrid(0, 0, 210, 110, 3, 6, 0, 0)}
    ${generateSolarGrid(240, 0, 210, 110, 3, 6, 0, 0)}
  </g>

  <!-- Foreground Tiered Commercial Rooftop -->
  <polygon points="0,620 1200,560 1200,900 0,900" fill="#082012"/>
  <g transform="translate(80, 620) scale(0.95)">
    ${generateSolarGrid(0, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(300, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(600, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(900, 0, 260, 140, 4, 6, -14, 2)}
  </g>
</svg>
`;

// 5. RESIDENTIAL SOLAR (1200x900)
const residentialSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="resSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041409"/>
      <stop offset="55%" stop-color="#0d331d"/>
      <stop offset="100%" stop-color="#473c15"/>
    </linearGradient>
    <radialGradient id="resSun" cx="70%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#041409" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3522"/>
      <stop offset="50%" stop-color="#144d32"/>
      <stop offset="100%" stop-color="#082517"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#resSky)"/>
  <circle cx="840" cy="225" r="420" fill="url(#resSun)"/>

  <!-- Modern House Architecture -->
  <polygon points="150,600 350,420 550,600" fill="#0a2a19"/> <!-- Gabled Roof -->
  <polygon points="350,420 850,450 650,600 150,600" fill="#082314"/> <!-- Angled Roof Surface -->
  <rect x="180" y="600" width="460" height="220" fill="#05160d"/>

  <!-- House Windows with Warm Ambient Interior Glow -->
  <rect x="220" y="640" width="70" height="80" rx="4" fill="#fef08a" opacity="0.35"/>
  <rect x="330" y="640" width="70" height="80" rx="4" fill="#fef08a" opacity="0.35"/>
  <rect x="460" y="630" width="140" height="150" rx="4" fill="#6ee7b7" opacity="0.25"/>

  <!-- Precision Rooftop Solar Array mounted on Angle -->
  <g transform="translate(300, 440) scale(0.85)">
    ${generateSolarGrid(0, 0, 220, 120, 4, 6, 18, 0)}
    ${generateSolarGrid(250, 0, 220, 120, 4, 6, 18, 0)}
  </g>

  <!-- Foreground Residential Garden & Patios -->
  <path d="M0 760 Q 300 740, 700 750 T 1200 740 L 1200 900 L 0 900 Z" fill="#061c0f"/>
  <circle cx="950" cy="730" r="90" fill="#0a2c17"/> <!-- Garden Tree -->
  <circle cx="880" cy="750" r="70" fill="#0d351d"/>
</svg>
`;

// 6. OPERATIONS & MAINTENANCE (1200x900)
const maintenanceSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mntSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041208"/>
      <stop offset="50%" stop-color="#0a2c18"/>
      <stop offset="100%" stop-color="#3d3714"/>
    </linearGradient>
    <radialGradient id="mntSun" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
      <stop offset="25%" stop-color="#f59e0b" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#041208" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3522"/>
      <stop offset="50%" stop-color="#144d32"/>
      <stop offset="100%" stop-color="#082517"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#mntSky)"/>
  <circle cx="960" cy="180" r="450" fill="url(#mntSun)"/>

  <!-- Solar Field in Perspective -->
  <g transform="translate(60, 480) scale(0.9)">
    ${generateSolarGrid(0, 0, 280, 140, 4, 6, -16, 3)}
    ${generateSolarGrid(320, 0, 280, 140, 4, 6, -16, 3)}
    ${generateSolarGrid(640, 0, 280, 140, 4, 6, -16, 3)}
    ${generateSolarGrid(960, 0, 280, 140, 4, 6, -16, 3)}
  </g>

  <!-- High-Tech Maintenance Diagnostic Inverter Unit in Foreground -->
  <g transform="translate(180, 520)">
    <rect x="0" y="0" width="180" height="300" rx="8" fill="#082214" stroke="#10b981" stroke-width="2"/>
    <rect x="20" y="25" width="140" height="80" rx="4" fill="#041208" stroke="#34d399" stroke-width="1.2"/>
    <!-- LED Indicators -->
    <circle cx="40" cy="140" r="6" fill="#34d399"/>
    <circle cx="70" cy="140" r="6" fill="#34d399"/>
    <circle cx="100" cy="140" r="6" fill="#fbbf24"/>
    <circle cx="130" cy="140" r="6" fill="#34d399"/>
    <!-- Circuit lines -->
    <path d="M40 160 L40 240 L140 240" fill="none" stroke="#6ee7b7" stroke-width="1.5" stroke-dasharray="4,4"/>
  </g>

  <!-- Diagnostic Holographic HUD Display -->
  <g transform="translate(420, 560)">
    <rect x="0" y="0" width="460" height="220" rx="14" fill="#041208" stroke="#34d399" stroke-width="1.5" opacity="0.9"/>
    <text x="25" y="40" fill="#34d399" font-family="sans-serif" font-size="16" font-weight="bold">PREVENTIVE MONITORING: ACTIVE</text>
    <line x1="25" y1="55" x2="435" y2="55" stroke="#10b981" stroke-width="1" opacity="0.4"/>
    <text x="25" y="90" fill="#cbd5e1" font-family="sans-serif" font-size="13">STRING VOLTAGE: 742 V (NOMINAL)</text>
    <text x="25" y="120" fill="#cbd5e1" font-family="sans-serif" font-size="13">INVERTER THERMAL STATUS: 34°C (COOL)</text>
    <text x="25" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="13">TELEMETRY UPTIME: 99.98%</text>
    <rect x="25" y="175" width="380" height="12" rx="6" fill="#0a2a19"/>
    <rect x="25" y="175" width="360" height="12" rx="6" fill="#10b981"/>
  </g>
</svg>
`;

// 7. PROJECT - GAZIPUR (1200x900)
const gazipurSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gazSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#031006"/>
      <stop offset="45%" stop-color="#092816"/>
      <stop offset="80%" stop-color="#194829"/>
      <stop offset="100%" stop-color="#4d4215"/>
    </linearGradient>
    <radialGradient id="gazSun" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="30%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#031006" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a2e1d"/>
      <stop offset="50%" stop-color="#12482e"/>
      <stop offset="100%" stop-color="#062215"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#gazSky)"/>
  <circle cx="960" cy="180" r="450" fill="url(#gazSun)"/>

  <!-- Gazipur Industrial Complex Silhouette -->
  <polygon points="100,560 100,420 380,420 380,360 680,360 680,560" fill="#072012" opacity="0.95"/>
  <polygon points="660,560 660,400 950,400 950,560" fill="#05180d" opacity="0.95"/>

  <!-- Expansive 2.5 MW Ground & Rooftop Solar Arrays -->
  <g transform="translate(60, 560) scale(0.9)">
    ${generateSolarGrid(0, 0, 280, 140, 4, 6, -16, 3)}
    ${generateSolarGrid(320, 0, 280, 140, 4, 6, -16, 3)}
    ${generateSolarGrid(640, 0, 280, 140, 4, 6, -16, 3)}
    ${generateSolarGrid(960, 0, 280, 140, 4, 6, -16, 3)}
  </g>
  <g transform="translate(30, 710) scale(1.05)">
    ${generateSolarGrid(0, 0, 300, 150, 5, 8, -14, 2)}
    ${generateSolarGrid(350, 0, 300, 150, 5, 8, -14, 2)}
    ${generateSolarGrid(700, 0, 300, 150, 5, 8, -14, 2)}
  </g>
</svg>
`;

// 8. PROJECT - DHAKA (1200x900)
const dhakaSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dhkSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041208"/>
      <stop offset="50%" stop-color="#0c2e1b"/>
      <stop offset="100%" stop-color="#3d3714"/>
    </linearGradient>
    <radialGradient id="dhkSun" cx="75%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
      <stop offset="30%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#041208" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3522"/>
      <stop offset="50%" stop-color="#144d32"/>
      <stop offset="100%" stop-color="#082517"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#dhkSky)"/>
  <circle cx="900" cy="225" r="420" fill="url(#dhkSun)"/>

  <!-- Dhaka Urban Commercial Skyline -->
  <polygon points="80,580 80,360 260,360 260,580" fill="#082214"/>
  <polygon points="240,580 240,280 480,280 480,580" fill="#0a2a19"/>
  <polygon points="460,580 460,340 700,340 700,580" fill="#082214"/>
  <polygon points="680,580 680,260 920,260 920,580" fill="#0b2e1b"/>

  <!-- High-Efficiency 850 kW Rooftop Array in Foreground -->
  <polygon points="0,580 1200,520 1200,900 0,900" fill="#061c0f"/>
  <g transform="translate(60, 580) scale(0.95)">
    ${generateSolarGrid(0, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(290, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(580, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(870, 0, 260, 140, 4, 6, -14, 2)}
  </g>
</svg>
`;

// 9. PROJECT - CHATTOGRAM (1200x900)
const chattogramSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ctgSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#031208"/>
      <stop offset="50%" stop-color="#092817"/>
      <stop offset="85%" stop-color="#19482b"/>
      <stop offset="100%" stop-color="#473f15"/>
    </linearGradient>
    <radialGradient id="ctgSun" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#031208" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a2e1d"/>
      <stop offset="50%" stop-color="#12482e"/>
      <stop offset="100%" stop-color="#062215"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#ctgSky)"/>
  <circle cx="960" cy="180" r="450" fill="url(#ctgSun)"/>

  <!-- Coastal Port & Industrial Complex in Background -->
  <polygon points="120,540 120,400 420,400 420,540" fill="#072013"/>
  <polygon points="400,540 400,340 760,340 760,540" fill="#092817"/>
  <polygon points="740,540 740,420 1060,420 1060,540" fill="#05180d"/>

  <!-- Expansive 1.2 MW Plant -->
  <g transform="translate(60, 550) scale(0.9)">
    ${generateSolarGrid(0, 0, 270, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(310, 0, 270, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(620, 0, 270, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(930, 0, 270, 140, 4, 6, -14, 2)}
  </g>
  <g transform="translate(30, 710) scale(1.05)">
    ${generateSolarGrid(0, 0, 290, 150, 5, 8, -12, 2)}
    ${generateSolarGrid(340, 0, 290, 150, 5, 8, -12, 2)}
    ${generateSolarGrid(680, 0, 290, 150, 5, 8, -12, 2)}
  </g>
</svg>
`;

// 10. PROJECT - RESIDENTIAL (1200x900)
const residentialProjSvg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="respSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041409"/>
      <stop offset="50%" stop-color="#0c321c"/>
      <stop offset="100%" stop-color="#423714"/>
    </linearGradient>
    <radialGradient id="respSun" cx="70%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
      <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#041409" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3522"/>
      <stop offset="50%" stop-color="#144d32"/>
      <stop offset="100%" stop-color="#082517"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#respSky)"/>
  <circle cx="840" cy="225" r="420" fill="url(#respSun)"/>

  <!-- Residential Community Cluster with Solar Rooftops -->
  <!-- House 1 -->
  <polygon points="100,580 250,440 400,580" fill="#082214"/>
  <polygon points="250,440 600,460 450,580 100,580" fill="#0b2e1b"/>
  <g transform="translate(220, 460) scale(0.65)">
    ${generateSolarGrid(0, 0, 180, 110, 3, 5, 14, 0)}
    ${generateSolarGrid(200, 0, 180, 110, 3, 5, 14, 0)}
  </g>

  <!-- House 2 -->
  <polygon points="550,580 720,430 890,580" fill="#082214"/>
  <polygon points="720,430 1100,450 930,580 550,580" fill="#0a2a19"/>
  <g transform="translate(680, 450) scale(0.65)">
    ${generateSolarGrid(0, 0, 180, 110, 3, 5, 14, 0)}
    ${generateSolarGrid(200, 0, 180, 110, 3, 5, 14, 0)}
  </g>

  <!-- Foreground Residential Rooftop Array -->
  <polygon points="0,620 1200,560 1200,900 0,900" fill="#061c0f"/>
  <g transform="translate(80, 620) scale(0.95)">
    ${generateSolarGrid(0, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(300, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(600, 0, 260, 140, 4, 6, -14, 2)}
    ${generateSolarGrid(900, 0, 260, 140, 4, 6, -14, 2)}
  </g>
</svg>
`;

const items = [
  { name: 'solar-hero.jpg', svg: heroSvg },
  { name: 'solar-engineering.jpg', svg: engineeringSvg },
  { name: 'solar-industrial.jpg', svg: industrialSvg },
  { name: 'solar-commercial.jpg', svg: commercialSvg },
  { name: 'solar-residential.jpg', svg: residentialSvg },
  { name: 'solar-maintenance.jpg', svg: maintenanceSvg },
  { name: 'project-gazipur.jpg', svg: gazipurSvg },
  { name: 'project-dhaka.jpg', svg: dhakaSvg },
  { name: 'project-chattogram.jpg', svg: chattogramSvg },
  { name: 'project-residential.jpg', svg: residentialProjSvg },
];

async function generateAll() {
  console.log('Generating rich cinematic solar assets with sharp...');
  for (const item of items) {
    const dest = path.join(outputDir, item.name);
    await sharp(Buffer.from(item.svg))
      .jpeg({ quality: 92 })
      .toFile(dest);
    console.log(`✓ Generated ${item.name} (${fs.statSync(dest).size} bytes)`);
  }
  console.log('All 10 assets generated successfully!');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
