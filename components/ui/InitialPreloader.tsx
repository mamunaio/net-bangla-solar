import React from "react";

/**
 * InitialPreloader
 * 
 * Server-rendered at the very top of <body>.
 * Guarantees Frame-0 instant coverage on first visit or hard refresh,
 * preventing any Flash of Unstyled Content (FOUC) or website flickering
 * before the loader appears.
 */
export function InitialPreloader() {
  return (
    <>
      <div
        id="global-initial-preloader"
        role="status"
        aria-live="polite"
        aria-label="Loading Net Bangla Solar Energy Solutions"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Ambient warm solar radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0) 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
        >
          {/* Emblem & Spinning Aura */}
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Spinning Golden Dashed Ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px dashed rgba(245, 158, 11, 0.6)",
                animation: "spinSlow 10s linear infinite",
              }}
            />

            {/* Inner Soft Pulsing Ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "8px",
                borderRadius: "50%",
                border: "1.5px solid rgba(245, 158, 11, 0.3)",
              }}
            />

            {/* Central Brand Logo */}
            <div
              style={{
                position: "relative",
                width: "88px",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Native img tag ensures instant HTML rendering before React hydrates */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/net-bangla-solar-logo.png"
                alt="Net Bangla Solar Energy Solutions Logo"
                width={88}
                height={88}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Typography */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                fontFamily: "var(--font-sora), system-ui, -apple-system, sans-serif",
              }}
            >
              Net Bangla Solar{" "}
              <span style={{ color: "#f59e0b" }}>Energy Solutions</span>
            </div>
            <div
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono), monospace",
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Clean Energy &bull; Brighter Bangladesh
            </div>
          </div>

          {/* Micro Loading Progress Bar */}
          <div
            style={{
              width: "140px",
              height: "4px",
              borderRadius: "9999px",
              backgroundColor: "#f1f5f9",
              overflow: "hidden",
              position: "relative",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                animation: "solarProgress 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            />
          </div>
        </div>
      </div>

      {/* Embedded CSS & Vanilla Dismiss Script (Zero Hydration Dependency) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes spinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes solarProgress {
              0% { width: 0%; }
              60% { width: 75%; }
              100% { width: 100%; }
            }
          `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var preloader = document.getElementById('global-initial-preloader');
              if (!preloader) return;

              var minDisplayMs = 520; // Enough time for a clean, premium impression
              var startMs = Date.now();

              function dismiss() {
                if (!preloader) return;
                var elapsed = Date.now() - startMs;
                var remaining = Math.max(0, minDisplayMs - elapsed);

                setTimeout(function() {
                  if (!preloader) return;
                  preloader.style.opacity = '0';
                  preloader.style.pointerEvents = 'none';

                  setTimeout(function() {
                    if (preloader && preloader.parentNode) {
                      preloader.parentNode.removeChild(preloader);
                    }
                  }, 450);
                }, remaining);
              }

              if (document.readyState === 'complete') {
                dismiss();
              } else {
                window.addEventListener('load', dismiss);
                // Safety fallback: dismiss within 1.6s even if external resources are slow
                setTimeout(dismiss, 1600);
              }
            })();
          `,
        }}
      />
    </>
  );
}
