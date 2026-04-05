"use client";

import React, { useRef } from "react";
import ProjectCard from "@/src/features/portfolio/components/ProjectCard";
import ProjectInfoCard from "@/src/features/portfolio/components/ProjectInfoCard";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";
import { useProjects } from "@/src/features/portfolio/hooks/useProjects";
import Typography from "../ui/Typhography";
import SlideIn from "../animation/SlideIn";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsSection() {
  const { projects, infoList } = useProjects();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const projectRows = Array.from(
    { length: Math.max(projects.length, infoList.length) },
    (_, index) => ({
      index,
      info: infoList[index],
      project: projects[index],
    }),
  );

  return (
    <section className="min-h-screen py-22 bg-transparent text-main-text relative overflow-hidden selection:bg-[#F25623]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-5">
        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-[#F25623] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-main-text rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6" ref={containerRef}>
        {/* 1. Header Section */}
        <header className="relative mb-10 md:mb-16 flex flex-col items-start">
          <SlideIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-0.5 w-12 bg-[#F25623]" />
              <Typography className="text-[8px] md:text-[10px] font-medium md:font-semibold uppercase tracking-[0.4em] md:tracking-[0.8em] opacity-40">
                2026 archive
              </Typography>
            </div>
            <div className="relative inline-block">
              <Typography
                variant="h1"
                className="font-poppins font-black text-5xl md:text-7xl leading-none lowercase tracking-tighter relative z-10"
              >
                projects.
              </Typography>
              <RedactedOverlay
                text="select"
                className="text-[14vw] md:text-[100px] -top-10 md:-top-9 left-0 opacity-10 blur-[1px]"
              />
            </div>
          </SlideIn>
        </header>

        {/* 2. Main Grid System */}
        <div className="relative space-y-6 lg:space-y-12">
          {/* STICKY LINE SYSTEM */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-main-text/10 z-0">
            <motion.div
              style={{
                top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative">
                <div className="w-4 h-4 bg-[#F25623] rounded-full animate-ping absolute inset-0 opacity-20" />
                <div className="w-4 h-4 border-2 border-[#F25623] rotate-45 flex items-center justify-center bg-main-bg">
                  <div className="w-1.5 h-1.5 bg-[#F25623]" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr] gap-16 lg:gap-24 items-center relative z-10">
            <div className="hidden md:flex items-center gap-4">
              <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                system capabilities
              </Typography>
              <div className="h-px flex-1 bg-main-text/10" />
            </div>
            <div className="hidden md:block w-4 h-4" /> {/* Spacer for Line */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-main-text/10" />
              <Typography className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#F25623]">
                development logs
              </Typography>
            </div>
          </div>

          {projectRows.map(({ index, info, project }) => {
            const matchedProject = info
              ? projects.find((item) => item.title === info.title)
              : undefined;

            return (
              <div
                key={`${info?.id ?? "info-none"}-${project?.id ?? "project-none"}-${index}`}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr] gap-10 lg:gap-24 items-stretch relative z-10"
              >
                <div className="relative h-full">
                  {info ? (
                    <ProjectInfoCard
                      title={info.title}
                      overlayText={info.overlayText}
                      descriptions={info.descriptions}
                      delay={0.1 * index}
                      index={index}
                      link={info.link ?? project?.slug ?? matchedProject?.slug}
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
                  ) : (
                    <div className="h-full border-2 border-main-text/20 bg-main-bg/20" />
                  )}
                </div>

                {/* Center Spacer for Line */}
                <div className="hidden md:block w-4" />

                <div className="relative h-full">
                  {project ? (
                    <>
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        slug={project.slug}
                        image={project.image}
                        video={project.video}
                        delay={0.1 * index}
                        index={index}
                      />
                    </>
                  ) : (
                    <div className="h-full border-2 border-dashed border-main-text/20 bg-main-text/5" />
                  )}
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr] gap-16 lg:gap-24 items-start relative z-10">
            <div className="p-6 border-l-2 border-[#F25623] bg-main-text/5 hidden md:block">
              <Typography className="text-[11px] font-semibold leading-relaxed opacity-40 italic">
                &quot;Every project is a deep dive into problem solving and
                system efficiency. Custom-built logic forged through technical
                precision.&quot;
              </Typography>
            </div>
            <div className="hidden md:block w-4" />
            <a href="/project" className="block w-full">
              <div className="p-10 border-2 border-dashed border-main-text/10 flex flex-col items-center justify-center gap-4 text-center group hover:border-[#F25623]/30 transition-colors">
                <Typography className="text-xs font-black uppercase tracking-[0.3em] opacity-40">
                  End of Registry
                </Typography>
                <div className="text-2xl font-black lowercase opacity-20 group-hover:opacity-100 group-hover:text-[#F25623] transition-all cursor-help">
                  Want to see more archives?
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* BACKGROUND DECORATION SYSTEM */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Typography className="absolute top-35 md:top-10 -right-20 text-[25vw] md:text-[20vw] font-black opacity-[0.02] whitespace-nowrap select-none leading-none tracking-tighter italic">
          ARCHIVES
        </Typography>

        <div className="absolute top-0 left-6 w-px h-full bg-main-text/5 hidden md:block" />
        <div className="absolute top-0 right-6 w-px h-full bg-main-text/5 hidden md:block" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

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

        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-[#F25623] rounded-full blur-[180px] opacity-[0.07]" />
        <div className="absolute bottom-1/4 -right-20 w-100 h-100 bg-main-text rounded-full blur-[150px] opacity-[0.05]" />
      </div>
    </section>
  );
}
