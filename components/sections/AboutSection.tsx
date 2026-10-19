"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";

export function AboutSection() {
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const activeTargets = [
        introRef.current,
        imageWrapperRef.current,
        leadershipRef.current,
      ].filter((el): el is NonNullable<typeof el> => Boolean(el));

      if (prefersReducedMotion) {
        if (activeTargets.length > 0) {
          gsap.set(activeTargets, { opacity: 1, y: 0, scale: 1 });
        }
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      if (introRef.current) {
        tl.from(introRef.current, {
          opacity: 0,
          y: 28,
          duration: 0.8,
        });
      }

      if (imageWrapperRef.current) {
        tl.from(
          imageWrapperRef.current,
          {
            opacity: 0,
            scale: 1.03,
            duration: 0.9,
          },
          "-=0.6"
        );
      }

      if (leadershipRef.current) {
        tl.from(
          leadershipRef.current,
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          "-=0.3"
        );
      }
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Net Bangla Solar Energy Solutions"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24 lg:scroll-mt-28 bg-[#F8FAFC]"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-10 w-[700px] h-[500px] rounded-full bg-amber-500/[0.06] blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-5 w-[500px] h-[400px] rounded-full bg-sky-500/[0.04] blur-[140px] -z-10"
      />

      <Container className="relative z-10">
        {/* 2-COLUMN MAIN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Editorial Typography & Company Description */}
          <div ref={introRef} className="lg:col-span-7 space-y-6 text-left">
            {/* Section Eyebrow (Temporarily hidden; easily re-enabled when needed) */}
            {/* 
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-[20px] font-semibold tracking-wider uppercase shadow-sm">
              <span>ABOUT NET BANGLA SOLAR ENERGY SOLUTIONS</span>
            </div> 
            */}

            {/* Main Heading (H2) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Engineering a More Reliable{" "}
              <span className="gradient-text-solar">
                Solar Future for Bangladesh
              </span>
            </h2>

            {/* Source-grounded Main Company Description */}
            <div className="space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed">
              <p>
                Net Bangla Solar Energy Solutions operates as the specialized renewable energy arm
                of Net Bangla Limited. Founded on May 28, 2014, the company has
                built its operational foundation around technology-driven
                infrastructure and turnkey execution across Bangladesh.
              </p>
              <p>
                Our solar team engineers, installs, and services photovoltaic
                systems designed around local grid conditions, weather
                requirements, and energy demands.
              </p>
              <p>
                From site assessment and load calculation through system design,
                installation, grid connection, and ongoing maintenance, we support
                the project through its full lifecycle.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Composition & Leadership Card */}
          <div
            ref={imageWrapperRef}
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient Image Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-sky-500/10 rounded-[2.5rem] blur-2xl -z-10"
            />

            {/* Image Container */}
            <div className="relative w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full bg-slate-100">
                {imageError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50">
                    <ShieldCheck className="w-16 h-16 text-amber-500 mb-3" />
                    <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">
                      Solar Infrastructure
                    </span>
                    <span className="text-slate-500 text-xs mt-1">
                      Turnkey Engineering &amp; Execution
                    </span>
                  </div>
                ) : (
                  <Image
                    src="/images/about-commercial-solar.webp"
                    alt="Solar energy installation in Bangladesh engineered by Net Bangla Solar Energy Solutions"
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center"
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Corporate Foundation Badge (Hidden per user request; can be re-enabled later) */}
                {/* 
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-slate-900 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-700">
                    Est. May 28, 2014 &bull; Turnkey Solar EPC
                  </span>
                </div> 
                */}
              </div>

              {/* Leadership Block (Hidden per user request; can be re-enabled later) */}
              {/* 
              <div
                ref={leadershipRef}
                className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-xl border border-amber-500/30 bg-slate-100">
                    <Image
                      src="/images/engr-mamunur-rahman.webp"
                      alt="Engr. Md. Mamunur Rahman, Managing Director & Chief Executive Engineer"
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="52px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 font-bold block">
                      LEADERSHIP
                    </span>
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-tight mt-0.5">
                      Engr. Md. Mamunur Rahman
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Managing Director &amp; Chief Executive Engineer
                    </p>
                  </div>
                </div>

                <div
                  className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600"
                  aria-hidden="true"
                >
                  <UserCheck className="w-4 h-4" />
                </div>
              </div> 
              */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
