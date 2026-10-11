"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Sun } from "lucide-react";

function PageLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Initial Page Load Splash State (Snappy & Beautiful, dissolves in ~420ms)
  const [initialLoading, setInitialLoading] = useState(true);
  const [initialFading, setInitialFading] = useState(false);

  // 2. Page Navigation / Route Switch Loader State
  const [isNavigating, setIsNavigating] = useState(false);
  const [navFading, setNavFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const prevPathRef = useRef(pathname);
  const navigationStartRef = useRef<number>(0);

  // Initial load timer: quick ~420ms brand impression, smoothly dissolves
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setInitialFading(true);
    }, 420);

    const removeTimer = setTimeout(() => {
      setInitialLoading(false);
    }, 650);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Complete the loader when pathname or searchParams change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;

      if (isNavigating) {
        setProgress(100);

        // Ensure a comfortable, smooth minimum display of ~260ms so it doesn't abruptly flash
        const elapsed = Date.now() - navigationStartRef.current;
        const remainingDelay = Math.max(80, 260 - elapsed);

        const fadeTimer = setTimeout(() => {
          setNavFading(true);
        }, remainingDelay);

        const finishTimer = setTimeout(() => {
          setIsNavigating(false);
          setNavFading(false);
          setProgress(0);
        }, remainingDelay + 180);

        return () => {
          clearTimeout(fadeTimer);
          clearTimeout(finishTimer);
        };
      }
    }
  }, [pathname, searchParams, isNavigating]);

  // Intercept internal route link clicks and browser back/forward buttons
  useEffect(() => {
    const triggerNavigation = (targetPath: string) => {
      const currentPath = window.location.pathname;
      if (targetPath !== currentPath) {
        navigationStartRef.current = Date.now();
        setIsNavigating(true);
        setNavFading(false);
        setProgress(30);

        const t1 = setTimeout(() => setProgress(68), 80);
        const t2 = setTimeout(() => setProgress(88), 200);

        // Safety auto-finish after 1.5s so it never hangs
        const t3 = setTimeout(() => {
          setProgress(100);
          setNavFading(true);
          setTimeout(() => {
            setIsNavigating(false);
            setNavFading(false);
            setProgress(0);
          }, 180);
        }, 1500);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    };

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        !href.startsWith("//") &&
        targetAttr !== "_blank" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.shiftKey &&
        !event.altKey
      ) {
        const targetPath = href.split("?")[0].split("#")[0];
        triggerNavigation(targetPath);
      }
    };

    const handlePopState = () => {
      triggerNavigation(window.location.pathname);
    };

    document.addEventListener("click", handleLinkClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      {/* 1. TOP SOLAR BEAM PROGRESS BAR (Active during route switch) */}
      <div
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-[99999] h-[3.5px] pointer-events-none transition-opacity duration-200 ${
          isNavigating ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 transition-all duration-200 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing Flare Head */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_14px_#F59E0B,0_0_8px_#EA580C] blur-[0.5px]" />
        </div>
      </div>

      {/* 2. PAGE SWITCH FLOATING SOLAR PILL (Clearly visible on route change, smooth & fast) */}
      {isNavigating && !initialLoading && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[99997] pointer-events-none flex items-center justify-center bg-slate-950/15 backdrop-blur-[2px] transition-all duration-200 ${
            navFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/90 text-white border border-amber-500/30 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.5),0_0_18px_rgba(245,158,11,0.25)] backdrop-blur-md">
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun
                className="w-5 h-5 text-amber-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide">
              <span>Loading</span>
              <span className="text-amber-400">Net Bangla Solar Energy Solutions</span>
              <span className="animate-pulse text-amber-400 font-mono tracking-widest">&bull;&bull;&bull;</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. INITIAL SITE LOAD PRELOADER (Ultra-fast, ~420ms, graceful fade-out) */}
      {initialLoading && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Loading Net Bangla Solar Energy Solutions"
          className={`fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-white/98 backdrop-blur-xl transition-all duration-300 ease-out select-none ${
            initialFading
              ? "opacity-0 scale-[0.98] pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        >
          {/* Soft ambient solar radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-amber-500/[0.10] blur-[100px] animate-pulse"
          />

          <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
            {/* Spinning Solar Aura around Brand Emblem */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              {/* Outer Golden Spinning Halo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/50 animate-spin"
                style={{ animationDuration: "10s" }}
              />

              {/* Inner Pulsing Ring */}
              <div
                aria-hidden="true"
                className="absolute inset-2 rounded-full border border-amber-500/30 animate-ping opacity-20"
                style={{ animationDuration: "2s" }}
              />

              {/* Centered Brand Logo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src="/images/net-bangla-solar-logo.png"
                  alt="Net Bangla Solar Energy Solutions Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-1">
              <div className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 font-sans">
                Net Bangla Solar <span className="text-amber-500">Energy Solutions</span>
              </div>
              <div className="text-[11px] font-mono font-semibold text-slate-500 tracking-wider uppercase">
                Clean Energy &bull; Brighter Bangladesh
              </div>
            </div>

            {/* Modern Micro Loader Bar (Fills smoothly in 400ms) */}
            <div className="w-36 h-1 rounded-full bg-slate-100 overflow-hidden relative shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500"
                style={{
                  animation: "solarLoad 0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderInner />
    </Suspense>
  );
}
