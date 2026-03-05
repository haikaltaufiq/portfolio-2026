"use client";

import ProjectCard from "@/src/features/portfolio/components/ProjectCard";
import ProjectInfoCard from "@/src/features/portfolio/components/ProjectInfoCard";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";
import { useProjects } from "@/src/features/portfolio/hooks/useProjects";
import Typography from "../../ui/Typhography";
import SlideIn from "../../animation/SlideIn";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const { projects, infoList } = useProjects();

  return (
    <section className="min-h-screen py-22 bg-transparent text-main-text relative overflow-hidden selection:bg-[#F25623]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-5">
        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-[#F25623] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-main-text rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* 1. Header Section: Dramatic & Bold */}
        <header className="relative mb-24 flex flex-col items-center md:items-start">
          <SlideIn>
            <div className="flex items-center gap-6 mb-4">
              <span className="h-0.5 w-12 bg-[#F25623]" />
              <Typography className="text-[10px] font-semibold uppercase tracking-[0.8em] opacity-40">
                prototype archive 2026
              </Typography>
            </div>
            <div className="relative inline-block">
              <Typography
                variant="h1"
                className="font-poppins font-black text-7xl md:text-[120px] leading-none lowercase tracking-tighter relative z-10"
              >
                projects.
              </Typography>
              <RedactedOverlay
                text="selected "
                className="text-[14vw] md:text-[100px] -top-10 md:top-1 left-0 opacity-10 blur-[1px]"
              />
            </div>
          </SlideIn>
        </header>

        {/* 2. Main Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr] gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: The Brain (Info & Stats) */}
          <div className="flex flex-col gap-12 sticky top-32">
            <div className="flex items-center gap-4 mb-2">
              <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                system capabilities
              </Typography>
              <div className="h-px flex-1 bg-main-text/10" />
            </div>

            {infoList.map((info, index) => {
              const matchedProject = projects.find(
                (project) => project.title === info.title,
              );

              return (
                <div key={info.id} className="relative group">
                  <ProjectInfoCard
                    title={info.title}
                    overlayText={info.overlayText}
                    descriptions={info.descriptions}
                    delay={0.1 * index}
                    link={info.link ?? matchedProject?.slug}
                  >
                    {info.skills && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {info.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "#F25623",
                              color: "#fff",
                              borderColor: "#F25623",
                            }}
                            className="px-3 py-1 border border-main-text/20 rounded-full text-[9px] font-black uppercase tracking-wider opacity-60 hover:opacity-100 transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </ProjectInfoCard>
                </div>
              );
            })}

            {/* Status Artifact */}
            <div className="p-6 border-l-2 border-[#F25623] bg-main-text/5 hidden md:block">
              <Typography className="text-[11px] font-semibold leading-relaxed opacity-40 italic">
                &quot;Every project is a deep dive into problem-solving and
                system efficiency. Custom-built logic forged through technical
                precision.&quot;
              </Typography>
            </div>
          </div>

          {/* CENTER DIVIDER: High-Tech Vertical Bar */}
          <div className="hidden md:flex flex-col items-center self-stretch py-10">
            <div className="w-px h-32 bg-linear-to-b from-transparent to-main-text/20" />
            <div className="relative my-4">
              <div className="w-4 h-4 bg-[#F25623] rounded-full animate-ping absolute inset-0 opacity-20" />
              <div className="w-4 h-4 border-2 border-[#F25623] rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#F25623]" />
              </div>
            </div>
            <div className="w-px flex-1 bg-main-text/20" />
            <Typography className="[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-[1em] opacity-20 my-8 rotate-180">
              scroll to navigate
            </Typography>
            <div className="w-px h-32 bg-linear-to-t from-transparent to-main-text/20" />
          </div>

          {/* RIGHT COLUMN: The Muscle (Actual Projects) */}
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-main-text/10" />
              <Typography className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#F25623]">
                development logs
              </Typography>
            </div>

            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                <div className="absolute -left-8 md:-left-12 top-0 text-[10px] font-black opacity-20 font-mono italic">
                  [{String(index + 1).padStart(2, "0")}]
                </div>

                <ProjectCard
                  title={project.title}
                  description={project.description}
                  slug={project.slug}
                  image={project.image}
                  delay={0.1 * index}
                  index={index}
                />
              </div>
            ))}

            {/* Bottom Call to Action Decor */}
            <a href="/project">
              <div className="mt-10 p-10 border-2 border-dashed border-main-text/10 flex flex-col items-center justify-center gap-4 text-center group hover:border-[#F25623]/30 transition-colors">
                <Typography className="text-xs font-black uppercase tracking-[0.3em] opacity-40">
                  End of Registry
                </Typography>
                <div className="text-2xl font-black lowercase opacity-20 group-hover:opacity-100 group-hover:text-[#F25623] transition-all cursor-help">
                  Want to see more hidden gems?
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* BACKGROUND DECORATION SYSTEM */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* 1. Large Background Title (Consistent with Contact Section) */}
        <Typography className="absolute top-10 -right-20 text-[20vw] font-black opacity-[0.02] whitespace-nowrap select-none leading-none tracking-tighter italic">
          ARCHIVES
        </Typography>

        {/* 2. Vertical Technical Guidelines */}
        <div className="absolute top-0 left-6 w-px h-full bg-main-text/5 hidden md:block" />
        <div className="absolute top-0 right-6 w-px h-full bg-main-text/5 hidden md:block" />

        {/* Blueprint Grid Dots */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* 4. Animated Industrial Marquee (Slower & Subtle) */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.02] rotate-12">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap text-[15vw] font-black uppercase"
          >
            <span>BUILD • DEPLOY • SCALE • OPTIMIZE • </span>
            <span>BUILD • DEPLOY • SCALE • OPTIMIZE • </span>
          </motion.div>
        </div>

        {/* 5. Radial Glows (Existing ones, but adjusted) */}
        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-[#F25623] rounded-full blur-[180px] opacity-[0.07]" />
        <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-main-text rounded-full blur-[150px] opacity-[0.05]" />
      </div>
    </section>
  );
}
