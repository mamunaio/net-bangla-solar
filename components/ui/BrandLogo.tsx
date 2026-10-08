"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
}

export function BrandLogo({
  className,
  variant = "auto",
  showText = true,
}: BrandLogoProps) {
  const textColor =
    variant === "dark"
      ? "#FFFFFF"
      : variant === "light"
      ? "#0A192F"
      : "currentColor";

  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={showText ? "0 0 540 120" : "0 0 160 120"}
        className="h-full w-auto max-h-full"
        fill="none"
        aria-label="Net Bangla Energy Logo"
      >
        <defs>
          {/* Radiant Sun Glow Gradients */}
          <radialGradient id="nbe-sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="1" />
            <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#EA580C" stopOpacity="1" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="1" />
          </radialGradient>

          <radialGradient id="nbe-sunCorona" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
          </radialGradient>

          {/* Ray Gradient */}
          <linearGradient id="nbe-rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          {/* Panel Frame 3D Edge */}
          <linearGradient id="nbe-panelBevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Solar Cell: 80% Black 20% Blue Gradient */}
          <linearGradient id="nbe-cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111E38" />
            <stop offset="45%" stopColor="#0B132B" />
            <stop offset="80%" stopColor="#070D1E" />
            <stop offset="100%" stopColor="#040814" />
          </linearGradient>

          {/* Cell Reflection Sheen Overlay */}
          <linearGradient id="nbe-cellSheen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.35" />
          </linearGradient>

          {/* Energy Text Gradient */}
          <linearGradient id="nbe-energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          <filter id="nbe-glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. ICON GROUP (Radiant Sun + 16-Cell 3D Solar Panel) */}
        <g transform="translate(10, 6)">
          {/* Ambient Corona */}
          <circle cx="80" cy="46" r="44" fill="url(#nbe-sunCorona)" filter="url(#nbe-glowFilter)" />

          {/* Radiant Sunburst Rays */}
          <g stroke="url(#nbe-rayGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.95">
            <line x1="42" y1="30" x2="30" y2="20" />
            <line x1="56" y1="18" x2="48" y2="6" />
            <line x1="76" y1="12" x2="76" y2="0" />
            <line x1="98" y1="16" x2="106" y2="4" />
            <line x1="116" y1="26" x2="128" y2="16" />
            <line x1="126" y1="42" x2="140" y2="38" />
            <line x1="128" y1="60" x2="142" y2="62" strokeWidth="3" opacity="0.8" />
          </g>

          {/* Sun Core Disc */}
          <circle cx="80" cy="46" r="32" fill="url(#nbe-sunGlow)" />

          {/* 3D Solar Panel Base Frame (Cyan-Blue Rim) */}
          <polygon points="12,68 90,98 92,105 16,75" fill="url(#nbe-panelBevel)" />
          <polygon points="90,98 136,78 138,85 92,105" fill="#0369A1" />
          <polygon
            points="12,68 64,48 136,72 90,98"
            fill="url(#nbe-panelBevel)"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Panel Inset Face (Dark 80% Black - 20% Blue Foundation) */}
          <polygon
            points="15,68 65,49 133,72.5 89,96.5"
            fill="#070D1E"
            stroke="#0284C7"
            strokeWidth="1"
          />

          {/* 16 CELLS (4x4 Matrix in Perspective) */}
          {/* Row 1 (Top) */}
          <polygon points="65.5,50.5 80,55 67,59.5 53.5,54.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="82.5,56 97,60.5 84,65 70,60.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="99.5,61.5 114,66 101,70.5 87,66" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="116.5,67 131,71.5 118,76 104,71.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />

          {/* Row 2 */}
          <polygon points="51.5,55.5 65,60.5 52,65.5 39,60" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="68,61.5 82,66.5 69,71.5 55.5,66.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="85,67 99,72 86,77 72.5,72" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="102,72.5 116,77.5 103,82.5 89.5,77.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />

          {/* Row 3 */}
          <polygon points="37.5,61 50.5,66.5 37.5,72 25,66" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="54,67.5 67.5,72.5 54.5,78 41.5,72.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="71,73 84.5,78 71.5,83.5 58.5,78.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="88,78.5 101.5,83.5 88.5,89 75.5,84" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />

          {/* Row 4 (Bottom) */}
          <polygon points="23.5,67 36,73 23,79 11.5,72.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="40,73.5 53,79 40,85 27.5,79" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="57,79 70,84.5 57,90.5 44.5,85" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />
          <polygon points="74,84.5 87,90 74,96 61.5,90.5" fill="url(#nbe-cellGrad)" stroke="#1E3A5F" strokeWidth="0.8" />

          {/* Micro Busbars Light Sheen */}
          <polygon points="15,68 65,49 133,72.5 89,96.5" fill="url(#nbe-cellSheen)" pointerEvents="none" />
        </g>

        {/* 2. BRAND TYPOGRAPHY */}
        {showText && (
          <>
            {/* Primary Word: NET BANGLA */}
            <text
              x="175"
              y="58"
              fontFamily="'Sora', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
              fontSize="38"
              fontWeight="900"
              fill={textColor}
              letterSpacing="1.8"
            >
              NET BANGLA
            </text>

            {/* Secondary Word: ENERGY (Tracked Modern Sans) */}
            <text
              x="177"
              y="94"
              fontFamily="'Sora', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
              fontSize="24"
              fontWeight="800"
              fill="url(#nbe-energyGrad)"
              letterSpacing="12.8"
            >
              ENERGY
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
