"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Zap,
  Building2,
  Factory,
  Home,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type ProjectCategory = "All" | "Industrial" | "Commercial" | "Residential";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  location: string;
  type: "Industrial" | "Commercial" | "Residential";
  capacity: string;
  status: "Operational" | "Delivered";
  image: string;
  alt: string;
  featured?: boolean;
}

// Prototype project records and illustrative imagery for architectural demonstration until verified company project photography is supplied.
const projectsData: ProjectItem[] = [
  {
    id: "gazipur",
    number: "01",
    title: "Gazipur Industrial Solar Plant",
    location: "Gazipur, Bangladesh",
    type: "Industrial",
    capacity: "2.5 MW",
    status: "Operational",
    image: "/images/project-gazipur.jpg",
    alt: "Large industrial solar plant installation beside manufacturing facilities in Gazipur",
    featured: true,
  },
  {
    id: "dhaka",
    number: "02",
    title: "Dhaka Commercial Rooftop",
    location: "Dhaka, Bangladesh",
    type: "Commercial",
    capacity: "850 kW",
    status: "Operational",
    image: "/images/project-dhaka.jpg",
    alt: "Commercial building rooftop equipped with high-efficiency solar modules in Dhaka",
  },
  {
    id: "chattogram",
    number: "03",
    title: "Chattogram Manufacturing Facility",
    location: "Chattogram, Bangladesh",
    type: "Industrial",
    capacity: "1.2 MW",
    status: "Operational",
    image: "/images/project-chattogram.jpg",
    alt: "Industrial manufacturing plant with solar installation in Chattogram",
  },
  {
    id: "residential-program",
    number: "04",
    title: "Residential Solar Program",
    location: "Bangladesh",
    type: "Residential",
    capacity: "500+ Systems",
    status: "Delivered",
    image: "/images/project-residential.jpg",
    alt: "Modern residential properties powered by rooftop solar across Bangladesh",
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Industrial",
  "Commercial",
  "Residential",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.type === activeCategory);
  }, [activeCategory]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Industrial":
        return <Factory className="w-4 h-4 text-emerald-400" />;
      case "Commercial":
        return <Building2 className="w-4 h-4 text-emerald-400" />;
      case "Residential":
        return <Home className="w-4 h-4 text-emerald-400" />;
      default:
        return <Zap className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label="Selected Solar Projects and Case Studies"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 w-[850px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[750px] h-[450px] rounded-full bg-emerald-600/[0.04] blur-[150px] -z-10"
      />

      <Container className="relative z-10 space-y-10 md:space-y-14">
        {/* SECTION INTRO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>Selected Projects</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Built for real-world{" "}
              <span className="gradient-text-solar">energy demands.</span>
            </h2>

            <p className="text-solar-text-secondary text-base sm:text-lg leading-relaxed">
              Explore a selection of solar installations engineered for homes,
              businesses, and industrial environments.
            </p>
          </div>

          {/* MINIMAL CATEGORY FILTER BAR */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 md:mx-0 md:px-0"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    isActive
                      ? "bg-emerald-500/20 text-white border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "bg-white/[0.03] text-solar-text-secondary hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ASYMMETRIC PORTFOLIO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured && activeCategory === "All";
            const isWideBottom =
              project.id === "residential-program" && activeCategory === "All";

            // Grid column assignments based on editorial composition
            let colSpan = "lg:col-span-6";
            let minHeight = "min-h-[360px] sm:min-h-[420px]";

            if (isFeatured) {
              colSpan = "lg:col-span-12";
              minHeight = "min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]";
            } else if (isWideBottom) {
              colSpan = "lg:col-span-12";
              minHeight = "min-h-[360px] sm:min-h-[420px]";
            } else if (filteredProjects.length === 1) {
              colSpan = "lg:col-span-12";
              minHeight = "min-h-[440px]";
            }

            return (
              <div
                key={project.id}
                className={cn(
                  "group relative rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/40 bg-[#06120a] transition-all duration-500 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.25)] flex flex-col justify-between p-6 sm:p-8 lg:p-10",
                  colSpan,
                  minHeight
                )}
              >
                {/* Full Bleed Image Background with Resilient CSS Fallback */}
                <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#06180d] via-[#030e06] to-[#020603]">
                  {/* Atmospheric radial glow and geometric solar grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
                  />

                  {failedImages[project.id] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                        {getTypeIcon(project.type)}
                      </div>
                      <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                        {project.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes={
                        isFeatured || isWideBottom
                          ? "(max-width: 1200px) 100vw, 1400px"
                          : "(max-width: 768px) 100vw, 650px"
                      }
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                      }
                    />
                  )}

                  {/* Single Clean Vignette Overlay (Guarantees text readability while keeping imagery bright and visible) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#040e08]/90 via-[#040e08]/25 to-transparent pointer-events-none"
                  />
                </div>

                {/* Top Bar: Index & Status / Featured Badge */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  {isFeatured ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-elevated border border-emerald-500/30 text-emerald-300 text-[11px] font-mono tracking-wider font-semibold uppercase shadow-md">
                      <span>01 / FEATURED PROJECT</span>
                    </div>
                  ) : (
                    <span className="text-xs font-mono font-medium tracking-widest text-emerald-400/90 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      {project.number}
                    </span>
                  )}

                  {/* Status Indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[11px] font-medium text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Bottom Content: Title & Technical Specs */}
                <div className="relative z-10 space-y-5 pt-16 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="space-y-2 max-w-2xl text-left">
                    <div className="flex items-center gap-2 text-xs text-solar-text-muted">
                      <MapPin className="w-3.5 h-3.5 text-solar-text-secondary" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Technical Metadata Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 sm:gap-8">
                      {/* Capacity (Strong visual emphasis) */}
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider font-medium text-solar-text-muted">
                          Capacity
                        </span>
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <Zap className="w-4 h-4 text-amber-400" />
                          <span className="text-xl sm:text-2xl font-extrabold text-white">
                            {project.capacity}
                          </span>
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider font-medium text-solar-text-muted">
                          Installation
                        </span>
                        <div className="flex items-center gap-1.5 pt-0.5 text-sm font-semibold text-solar-text-secondary">
                          {getTypeIcon(project.type)}
                          <span>{project.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Explore Link */}
                    <Link
                      href="#quote"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/[0.08] border-white/10 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      aria-label={`View details for ${project.title}`}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Illustrative Demo Notice */}
        <div className="pt-4 flex items-center justify-center text-center text-xs font-mono text-solar-text-muted">
          <span>* Selected project case studies and imagery represent design prototypes for demonstration purposes.</span>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
