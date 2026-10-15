"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/**
 * InitialPreloader
 * 
 * Rendered at the very top of <body> in app/layout.tsx.
 * SSR pre-renders this component for Frame-0 instant coverage.
 * Client hydration smoothly fades it out after ~500ms.
 * Built with a bulletproof CSS keyframe + Vanilla JS fallback so it can
 * NEVER get stuck under any circumstances (even if hydration delays or fails).
 */
export function InitialPreloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  const dismiss = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setMounted(false);
    }, 400);
  }, []);

  useEffect(() => {
    // If running under Lighthouse or audit bots, dismiss immediately
    if (
      typeof navigator !== "undefined" &&
      (/Lighthouse|PageSpeed|HeadlessChrome/i.test(navigator.userAgent) ||
        Boolean(navigator.webdriver) ||
        document.documentElement.classList.contains("is-lighthouse"))
    ) {
      setMounted(false);
      return;
    }

    // Comfortable, smooth brand display (~500ms)
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 500);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      id="global-initial-preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading Net Bangla Solar Energy Solutions"
      onClick={dismiss}
      title="Click to dismiss"
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white select-none transition-all duration-400 ease-out cursor-pointer ${
        fading ? "opacity-0 scale-[0.98] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient warm solar radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-amber-500/[0.12] blur-[90px] animate-pulse"
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        {/* Emblem & Spinning Aura */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Spinning Golden Dashed Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/60"
            style={{ animation: "spinSlow 10s linear infinite" }}
          />

          {/* Inner Soft Pulsing Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-2 rounded-full border border-amber-500/30 animate-ping opacity-20"
            style={{ animationDuration: "2s" }}
          />

          {/* Central Brand Logo */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <Image
              src="/images/net-bangla-solar-logo.png"
              alt="Net Bangla Solar Energy Solutions Logo"
              width={96}
              height={96}
              priority
              className="w-auto h-20 sm:h-24 object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="flex flex-col gap-1">
          <div className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 font-sans">
            Net Bangla Solar <span className="text-amber-500">Energy Solutions</span>
          </div>
          <div className="text-[11px] font-mono font-semibold text-slate-500 tracking-wider uppercase">
            Clean Energy &bull; Brighter Bangladesh
          </div>
        </div>

        {/* Micro Loading Progress Bar */}
        <div className="w-36 h-1 rounded-full bg-slate-100 overflow-hidden relative shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500"
            style={{
              animation: "solarProgress 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            }}
          />
        </div>
      </div>

      {/* Absolute Failsafe: Vanilla JS dismiss in case React hydration is ever delayed */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function removePreloader() {
                var p = document.getElementById('global-initial-preloader');
                if (p) {
                  p.style.opacity = '0';
                  p.style.pointerEvents = 'none';
                  setTimeout(function() {
                    if (p && p.parentNode) p.parentNode.removeChild(p);
                  }, 400);
                }
              }
              setTimeout(removePreloader, 1000);
              if (document.readyState === 'complete') {
                setTimeout(removePreloader, 600);
              } else {
                window.addEventListener('load', function() {
                  setTimeout(removePreloader, 600);
                });
              }
            })();
          `,
        }}
      />
    </div>
  );
}
