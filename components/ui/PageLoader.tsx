"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Sun } from "lucide-react";

function NavigationLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Page Navigation / Route Switch Loader State
  const [isNavigating, setIsNavigating] = useState(false);
  const [navFading, setNavFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const prevPathRef = useRef(pathname);
  const navigationStartRef = useRef<number>(0);

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

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, downloads, new tabs, and hash anchor jumps
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        target.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // Extract target path without hash
      const targetPath = href.split("#")[0].split("?")[0];
      if (targetPath && targetPath !== window.location.pathname) {
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
      {isNavigating && (
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
    </>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <NavigationLoaderInner />
    </Suspense>
  );
}
