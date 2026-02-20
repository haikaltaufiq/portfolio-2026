"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import React, { useState } from "react";

// --- TYPES ---
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "web" | "mobile" | "3D";
};

type InfoData = {
  id: string;
  title: string;
  overlayText: string;
  descriptions: string[];
  skills?: string[];
};

// --- DATA (Directly in file as requested) ---
const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "Personal portfolio with smooth animations and brutalist aesthetic.",
    tags: ["Next.js", "Framer Motion"],
    category: "web",
  },
  {
    id: "2",
    title: "Dashboard App",
    description:
      "Admin dashboard with clean UI and complex data visualization.",
    tags: ["React", "Tailwind"],
    category: "web",
  },
  {
    id: "3",
    title: "Fitness Tracker",
    description:
      "Mobile application for tracking daily workouts and nutrition.",
    tags: ["React Native", "Firebase"],
    category: "mobile",
  },
];

const INFOS_DATA: InfoData[] = [
  {
    id: "info-1",
    title: "web & mobile apps",
    overlayText: "coding sampe mampus",
    descriptions: [
      "I am a passionate Multimedia Engineering Technology student at Politeknik Negeri Batam, experienced in web development.",
      "I combine technical skills in front-end and back-end development with a creative approach.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    id: "info-2",
    title: "creative tech",
    overlayText: "pixel perfect",
    descriptions: [
      "Experienced in building 3D interactive experiences and multimedia solutions.",
      "Always pushing the boundaries of what's possible in the browser.",
    ],
    skills: ["Three.js", "Blender", "Unity", "C#"],
  },
];

// --- SUB-COMPONENTS ---

const RedactedOverlay = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <Typography
    className={`absolute font-redacted text-[#F25623] opacity-30 mix-blend-plus-lighter pointer-events-none tracking-normal whitespace-nowrap ${className}`}
  >
    {text}
  </Typography>
);

const ProjectCard = ({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) => (
  <SlideIn delay={delay}>
    <div className="bg-main-text text-main-bg rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] group">
      <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6 relative">
        <div className="absolute inset-0 flex items-center justify-center text-main-text/5 font-black text-4xl italic group-hover:text-main-text/10 transition-all">
          PREVIEW
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex-1">
          <Typography
            variant="h3"
            className="font-poppins font-bold text-2xl tracking-tight lowercase mb-2"
          >
            {project.title}.
          </Typography>
          <div className="flex gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-[12px] font-medium leading-relaxed opacity-80 line-clamp-2">
            {project.description}
          </p>
        </div>
        <button className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-main-text transition-all shrink-0 ml-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
      </div>
    </div>
  </SlideIn>
);

const ProjectInfoCard = ({
  info,
  delay,
  children,
}: {
  info: InfoData;
  delay: number;
  children?: React.ReactNode;
}) => (
  <SlideIn delay={delay}>
    <div className="relative border-[3px] border-dashed border-main-text rounded-2xl p-8 flex flex-col justify-between group bg-main-bg/50 backdrop-blur-sm">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <Typography
              variant="h2"
              className="font-poppins font-black text-3xl lowercase leading-none"
            >
              {info.title}.
            </Typography>
            <RedactedOverlay
              text={info.overlayText}
              className="text-[28px] -top-2 left-0 opacity-20"
            />
          </div>
          <div className="flex gap-1">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-main-text rounded-full opacity-20"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {info.descriptions.map((desc, idx) => (
            <p
              key={idx}
              className="text-[13px] opacity-70 leading-relaxed font-medium"
            >
              {desc}
            </p>
          ))}
        </div>
        {children}
      </div>
      <button className="flex items-center gap-3 text-main-text group-hover:gap-5 transition-all duration-300 mt-10">
        <span className="text-xs lowercase tracking-[0.2em] font-bold">
          view details
        </span>
        <div className="w-8 h-8 rounded-full border border-main-text flex items-center justify-center text-[12px]">
          →
        </div>
      </button>
    </div>
  </SlideIn>
);

// --- MAIN PAGE ---

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen py-24 bg-transparent text-main-text">
      <div className="mx-auto max-w-7xl px-6">
        {/* BIG HEADER SECTION */}
        <header className="relative mb-24 flex flex-col items-center">
          <SlideIn>
            <div className="relative inline-block text-center">
              <Typography
                variant="h1"
                className="font-poppins font-black text-[12vw] md:text-[8vw] leading-none lowercase relative z-10"
              >
                archive.
              </Typography>
              <RedactedOverlay
                text="selected works"
                className="text-[6vw] -top-10 left-1/2 -translate-x-1/2 opacity-10"
              />
            </div>
          </SlideIn>

          {/* CATEGORY FILTER */}
          <div className="flex gap-8 mt-12 overflow-x-auto pb-4 w-full justify-center no-scrollbar">
            {["all", "web", "mobile", "3D"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all ${filter === cat ? "opacity-100 scale-110" : "opacity-30 hover:opacity-60"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* MAIN GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-16 items-start">
          {/* LEFT COLUMN: INFO LIST */}
          <div className="flex flex-col gap-10 sticky top-32">
            {INFOS_DATA.map((info, index) => (
              <ProjectInfoCard key={info.id} info={info} delay={0.1 * index}>
                {info.skills && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {info.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 border border-main-text/10 rounded text-[9px] font-bold opacity-50"
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
          <div className="hidden md:block w-px self-stretch bg-linear-to-b from-transparent via-main-text/20 to-transparent relative min-h-125">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-main-text rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>

          {/* RIGHT COLUMN: PROJECT LIST */}
          <div className="flex flex-col gap-12">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={0.2 * index}
                />
              ))
            ) : (
              <div className="p-12 border-2 border-dashed border-main-text/10 rounded-3xl text-center">
                <Typography className="opacity-30 italic">
                  No projects found in this category bjir.
                </Typography>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER DECOR */}
        <footer className="mt-32 pt-12 border-t border-main-text/10 flex justify-between items-center">
          <Typography className="text-[10px] font-black uppercase tracking-widest opacity-30">
            Selection Vol. 01
          </Typography>
          <Typography className="text-[10px] font-black uppercase tracking-widest opacity-30">
            Batam • 2026
          </Typography>
        </footer>
      </div>
    </main>
  );
}
