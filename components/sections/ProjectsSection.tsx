import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  MapPin,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface ProjectItem {
  id: string;
  number: string;
  client: string;
  capacity: string;
  capacityValue: string;
  location?: string;
  partner?: string;
  featured?: boolean;
}

const projectsData: ProjectItem[] = [
  {
    id: "ofma-kepz",
    number: "01",
    client: "OFMA Ltd.",
    capacity: "1,200 kWp",
    capacityValue: "1200",
    location: "KEPZ, Chattogram",
    featured: true,
  },
  {
    id: "southeast-srel",
    number: "02",
    client: "Southeast Ltd.",
    capacity: "850 kWp",
    capacityValue: "850",
    partner: "SREL",
  },
  {
    id: "sf-fashion",
    number: "03",
    client: "SF Fashion",
    capacity: "128 kWp",
    capacityValue: "128",
    partner: "Dana Power Co. Ltd.",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Selected solar projects from the Net Bangla company profile"
      className="relative overflow-hidden py-20 scroll-mt-24 lg:py-32 lg:scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-[500px] w-[850px] rounded-full bg-emerald-500/[0.06] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-[450px] w-[750px] rounded-full bg-emerald-600/[0.04] blur-[150px]"
      />

      <Container className="relative z-10 space-y-10 md:space-y-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>Selected Projects</span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
              Documented installations.{" "}
              <span className="gradient-text-solar">Delivered at scale.</span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-solar-text-secondary sm:text-lg">
              A selected snapshot of solar installations listed in the 2026 Net
              Bangla Business Profile.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-xs text-solar-text-muted">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>Profile-documented project data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {projectsData.map((project) => {
            const isFeatured = project.featured;

            return (
              <article
                key={project.id}
                className={cn(
                  "group relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#06120a] p-6 transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.25)] sm:p-8 lg:p-10",
                  isFeatured
                    ? "lg:col-span-12 lg:min-h-[470px]"
                    : "lg:col-span-6 lg:min-h-[410px]"
                )}
              >
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_34%),linear-gradient(145deg,#071a10_0%,#030b06_65%,#020503_100%)]" />
                <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(to_right,#34d39918_1px,transparent_1px),linear-gradient(to_bottom,#34d39918_1px,transparent_1px)] bg-[size:34px_34px]" />
                <div
                  aria-hidden="true"
                  className="absolute -right-8 top-1/2 z-0 -translate-y-1/2 font-mono text-[clamp(8rem,23vw,19rem)] font-black leading-none tracking-tighter text-emerald-300/[0.035]"
                >
                  {project.capacityValue}
                </div>

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 font-mono text-xs tracking-widest text-emerald-300 backdrop-blur-md">
                    {project.number} / PROJECT PROFILE
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                    <Factory className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative z-10 max-w-3xl space-y-6 pt-20">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-solar-text-muted">
                      Solar Installation Capacity
                    </span>
                    <div className="mt-2 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-amber-400" />
                      <span className={cn("font-extrabold tracking-tight text-white", isFeatured ? "text-4xl sm:text-6xl" : "text-4xl sm:text-5xl")}>
                        {project.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-300 sm:text-3xl">
                      {project.client}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-solar-text-secondary">
                      {project.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          {project.location}
                        </span>
                      )}
                      {project.partner && (
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          Project reference: {project.partner}
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-emerald-400 transition-all hover:border-emerald-500/35 hover:bg-white/[0.08] hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label={`Discuss a project like ${project.client}`}
                  >
                    <span>Discuss a similar project</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default ProjectsSection;
