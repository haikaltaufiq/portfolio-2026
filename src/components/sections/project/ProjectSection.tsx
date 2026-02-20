"use client";

import ProjectCard from "@/src/features/portfolio/components/ProjectCard";
import ProjectInfoCard from "@/src/features/portfolio/components/ProjectInfoCard";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";
import { useProjects } from "@/src/features/portfolio/hooks/useProjects";
import Typography from "../../ui/Typhography";

export default function ProjectsSection() {
  const { projects, infoList } = useProjects();

  return (
    <section className="min-h-screen py-24 bg-transparent text-main-text">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="relative mb-8 flex flex-col items-center tracking-tight text-center">
          <Typography
            variant="h1"
            className="font-poppins font-black text-6xl md:text-7xl mb-1 lowercase relative z-10"
          >
            projects.
          </Typography>
          <RedactedOverlay
            text="portofolio"
            className="text-[100px] -top-12 opacity-10"
          />
        </div>

        {/* Main Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
          {/* LEFT COLUMN: Dynamic Info Cards */}
          <div className="flex flex-col gap-10">
            {infoList.map((info, index) => (
              <ProjectInfoCard
                key={info.id}
                title={info.title}
                overlayText={info.overlayText}
                descriptions={info.descriptions}
                delay={0.1 * index}
              >
                {info.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {info.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 border border-main-text/10 rounded text-[10px] opacity-60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </ProjectInfoCard>
            ))}
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden md:block w-px self-stretch bg-linear-to-b from-transparent via-main-text/20 to-transparent relative">
            <div className="absolute top-48 left-1/2 -translate-x-1/2 w-3 h-3 bg-main-text rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>

          {/* RIGHT COLUMN: Project List */}
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
