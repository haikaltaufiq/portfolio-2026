"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES ---
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "web" | "mobile" | "3D";
  year: string;
};

type InfoData = {
  id: string;
  title: string;
  overlayText: string;
  descriptions: string[];
  skills?: string[];
};

// --- DATA ---
const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "Personal portfolio with smooth animations and brutalist aesthetic.",
    tags: ["Next.js", "Framer Motion"],
    category: "web",
    year: "2025",
  },
  {
    id: "2",
    title: "Dashboard App",
    description:
      "Admin dashboard with clean UI and complex data visualization.",
    tags: ["React", "Tailwind"],
    category: "web",
    year: "2024",
  },
  {
    id: "3",
    title: "Fitness Tracker",
    description:
      "Mobile application for tracking daily workouts and nutrition.",
    tags: ["React Native", "Firebase"],
    category: "mobile",
    year: "2024",
  },
];

const INFOS_DATA: InfoData[] = [
  {
    id: "info-1",
    title: "web & mobile apps",
    overlayText: "coding sampe mampus",
    descriptions: [
      "Multimedia Engineering student at Polibatam. Focus on scalable systems and sick UI.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
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
    className={`absolute font-redacted text-[#F25623] opacity-30 mix-blend-difference pointer-events-none tracking-normal whitespace-nowrap z-0 ${className}`}
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
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-[#1a1a1a] border-2 border-main-text p-6 mb-8 transition-shadow hover:shadow-[12px_12px_0px_rgba(242,86,35,1)]"
    >
      <div className="absolute top-4 right-6 font-redacted text-main-text/20 text-xl italic pointer-events-none">
        {project.year}
      </div>

      <div className="aspect-16/10 bg-main-text/5 border border-main-text/10 overflow-hidden mb-8 relative group-hover:border-[#F25623]/30 transition-colors">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
          <Typography className="text-4xl font-black italic lowercase select-none tracking-tighter">
            view_content
          </Typography>
        </div>
        {/* Placeholder decorative lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-main-text" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-main-text" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 bg-[#F25623]" />
          <Typography
            variant="h3"
            className="text-3xl font-black lowercase tracking-tighter leading-none"
          >
            {project.title}
          </Typography>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-widest text-[#F25623]"
            >
              [{tag}]
            </span>
          ))}
        </div>

        <p className="text-sm font-medium opacity-60 leading-snug max-w-[90%]">
          {project.description}
        </p>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 group/btn font-black text-xs uppercase tracking-tighter">
            Explore case study
            <span className="w-8 h-8 rounded-full border border-main-text flex items-center justify-center group-hover/btn:bg-[#F25623] group-hover/btn:border-[#F25623] transition-colors">
              ↗
            </span>
          </button>
        </div>
      </div>
    </motion.div>
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
    <main className="min-h-screen pt-32 pb-24 bg-transparent text-main-text relative selection:bg-[#F25623]">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <div className="absolute top-[10%] left-[-5%] text-[30vw] font-black leading-none rotate-90">
          WORKS
        </div>
        <div className="absolute bottom-[10%] right-[-5%] text-[30vw] font-black leading-none -rotate-90 italic">
          2026
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* HEADER */}
        <header className="mb-32 relative">
          <SlideIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="relative">
                <Typography
                  variant="h1"
                  className="text-[15vw] md:text-[10vw] font-black leading-[0.8] lowercase tracking-tighter"
                >
                  archi-
                  <br />
                  ve.
                </Typography>
                <RedactedOverlay
                  text="personal_records"
                  className="text-[4vw] -top-8 left-0 opacity-20"
                />
              </div>

              <div className="flex flex-col items-end gap-6">
                <div className="text-right max-w-50">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                    filtering by system:{" "}
                    <span className="text-[#F25623]">{filter}</span>
                  </p>
                </div>
                {/* CUSTOM FILTER TABS */}
                <div className="flex border-2 border-main-text p-1 bg-main-text/5 backdrop-blur-md">
                  {["all", "web", "mobile", "3D"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                        filter === cat
                          ? "bg-main-text text-main-bg scale-105"
                          : "hover:text-[#F25623]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT: INFO STICKY */}
          <aside className="lg:col-span-4 h-fit lg:sticky lg:top-40 order-2 lg:order-1">
            <div className="space-y-12">
              <div className="relative p-8 border-4 border-main-text bg-[#F25623] text-white -rotate-2">
                <Typography className="text-xl font-black leading-tight italic lowercase">
                  "archive ini isinya bukan cuma sampah kode, tapi keringet sama
                  air mata pas debug jam 3 pagi bjir."
                </Typography>
              </div>

              <div className="space-y-8 opacity-80">
                {INFOS_DATA.map((info) => (
                  <div key={info.id} className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-0.5 bg-main-text" />
                      <Typography className="text-sm font-black uppercase tracking-widest">
                        {info.title}
                      </Typography>
                    </div>
                    <p className="text-xs font-medium leading-relaxed uppercase mb-6 italic">
                      {info.descriptions[0]}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {info.skills?.map((s) => (
                        <div
                          key={s}
                          className="border border-main-text/20 p-2 text-[9px] font-bold uppercase text-center group-hover:border-[#F25623] transition-colors"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-main-text/10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-main-text flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-[#F25623] rounded-full" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter opacity-40 max-w-37.5">
                    system active and ready for new deployment 2026.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: PROJECTS SCROLL */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      delay={index * 0.1}
                    />
                  ))
                ) : (
                  <div className="py-40 border-4 border-dashed border-main-text/10 text-center">
                    <Typography className="font-redacted text-5xl opacity-10 mb-4">
                      NOT FOUND
                    </Typography>
                    <Typography className="text-sm font-bold opacity-30 italic lowercase">
                      catatan tidak ditemukan dalam database bjir.
                    </Typography>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="mt-40 py-10 border-t-2 border-main-text flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-[#F25623]" />
            <Typography className="text-[10px] font-black uppercase tracking-[0.4em]">
              Volume: Archive_001
            </Typography>
          </div>
          <Typography className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">
            (c) 2026 - batam multimedia engineering
          </Typography>
          <div className="flex gap-8">
            {["TW", "IG", "GH"].map((s) => (
              <span
                key={s}
                className="text-[10px] font-black hover:text-[#F25623] cursor-pointer transition-colors tracking-widest"
              >
                {s}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
