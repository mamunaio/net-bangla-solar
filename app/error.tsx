"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCw, Home, AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unhandled error details for diagnostics
    console.error("ErrorBoundary caught:", error);

    // If it's a chunk load error or connection drop from a new deployment, auto-reload once safely
    const msg = error?.message || "";
    if (
      msg.includes("Loading chunk") ||
      msg.includes("ChunkLoadError") ||
      msg.includes("Failed to fetch") ||
      msg.includes("Connection closed")
    ) {
      try {
        const attempted = sessionStorage.getItem("deployment_reload_attempt");
        if (!attempted) {
          sessionStorage.setItem("deployment_reload_attempt", "1");
          window.location.reload();
        }
      } catch {
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-white">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
        Page Loading Interrupted
      </h1>
      <p className="text-sm text-slate-600 max-w-md mb-8">
        A temporary network or deployment transition interrupted loading. Please refresh to load the latest version.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <RotateCw className="w-4 h-4" />
          <span>Reload Page</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
