"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import {
  projectsList,
  type ProjectCategory,
  type ProjectDetail,
} from "@/src/data/project";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type InfoData = {
  id: string;
  title: string;
  overlayText: string;
  descriptions: string[];
  skills?: string[];
};

const INFOS_DATA: InfoData[] = [
  {
    id: "info-1",
    title: "Software development",
    overlayText: "coding sampe mampus",
    descriptions: [
      "Multimedia Engineering. Focus on scalable systems and sick UI.",
    ],
    skills: ["Website", "Mobile App", "unity 3D Game", "Internet of Things"],
  },
];

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
  project: ProjectDetail;
  delay: number;
}) => (
  <SlideIn delay={delay}>
    <a href={`/project/${project.slug}`} className="block">
      <motion.article
        whileHover={{ y: -10 }}
        className="group relative bg-[#1a1a1a] border-2 border-main-text p-6 mb-8 transition-shadow hover:shadow-[12px_12px_0px_rgba(242,86,35,1)] cursor-pointer"
      >
        <div className="absolute top-4 right-6 font-redacted text-main-text/20 text-xl italic pointer-events-none z-20">
          {project.year}
        </div>

        {/* CONTAINER GAMBAR */}
        <div className="aspect-16/10 bg-black border border-main-text/20 overflow-hidden mb-8 relative group-hover:border-[#F25623]/50 transition-all duration-500">
          {project.image ? (
            <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* VIBE MASK: Biar gambar warna apapun tetep masuk skema warna gelap lu */}
              <div className="absolute inset-0 bg-[#1a1a1a] mix-blend-multiply opacity-40 pointer-events-none" />

              {/* CRT / SCANLINE OVERLAY */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30 z-10" />
            </div>
          ) : (
            /* FALLBACK KALO GA ADA GAMBAR */
            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
              <Typography className="text-4xl font-black italic lowercase select-none tracking-tighter">
                missing_asset.png
              </Typography>
            </div>
          )}

          {/* BRUTALIST GRID OVERLAY (Selalu ada buat ngiket style) */}
          <div className="absolute inset-0 pointer-events-none z-20 opacity-30 group-hover:opacity-10 transition-opacity">
            <div className="absolute top-1/2 left-0 w-full h-px bg-main-text/50" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-main-text/50" />
            {/* Corner Markers */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-main-text" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-main-text" />
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
            {project.summary}
          </p>

          <div className="pt-4 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
              {project.category}
            </span>
            <span className="flex items-center gap-2 font-black text-xs uppercase tracking-tighter">
              Explore case study
              <span className="w-8 h-8 rounded-full border border-main-text flex items-center justify-center group-hover:bg-[#F25623] group-hover:border-[#F25623] transition-colors">
                -&gt;
              </span>
            </span>
          </div>
        </div>
      </motion.article>
    </a>
  </SlideIn>
);

const FILTERS: Array<"all" | ProjectCategory> = ["all", "web", "mobile", "3D"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects =
    filter === "all"
      ? projectsList
      : projectsList.filter((project) => project.category === filter);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-transparent text-main-text relative selection:bg-[#F25623]">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <div className="absolute top-[10%] right-[0.5%] text-[20vw] font-black leading-none -rotate-90">
          WORKS
        </div>
        <div className="absolute bottom-[10%] right-[-2%] text-[20vw] font-black leading-none -rotate-90 italic">
          2026
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
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
                <div className="flex border-2 border-main-text p-1 bg-main-text/5 backdrop-blur-md">
                  {FILTERS.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                        filter === category
                          ? "bg-main-text text-main-bg scale-105"
                          : "hover:text-[#F25623]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <aside className="lg:col-span-4 h-fit lg:sticky lg:top-40 order-2 lg:order-1">
            <div className="space-y-12">
              <div className="relative p-8 border-4 border-main-text bg-[#F25623] text-white -rotate-2">
                <Typography className="text-xl font-black leading-tight italic lowercase">
                  &quot;A documented history of my technical growth. From the
                  first line of code to the latest build, this is where I refine
                  my craft.&quot;
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
                      {info.skills?.map((skill) => (
                        <div
                          key={skill}
                          className="border border-main-text/20 p-2 text-[9px] font-bold uppercase text-center group-hover:border-[#F25623] transition-colors"
                        >
                          {skill}
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

        <footer className="mt-40 py-5 border-t-2 border-main-text flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-[#F25623]" />
            <Typography className="text-[10px] font-bold uppercase tracking-[0.4em]">
              Volume: Archive 001
            </Typography>
          </div>
          <Typography className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
            (c) 2026 batam - haikal taufiq
          </Typography>
        </footer>
      </div>
    </main>
  );
}
