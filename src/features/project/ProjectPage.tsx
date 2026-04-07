"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import {
  projectsList,
  type ProjectCategory,
  type ProjectDetail,
} from "@/src/data/project";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
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
      "Multimedia Engineering. Focus on scalable systems and User Experience.",
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

const BackgroundParallax = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 flex justify-around px-4"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-[200vh] bg-main-text opacity-20" />
        ))}
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-10 text-[12vw] font-redacted leading-none opacity-10 -rotate-12"
      >
        TOP_SECRET_RECORDS_2026
      </motion.div>
    </div>
  );
};

// --- ICON COMPONENT (Sesuai Referensi image_0.png) ---
const ArrowDiagonalIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 15L15 5M15 5H7.5M15 5V12.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

const ProjectCard = ({
  project,
  delay,
}: {
  project: ProjectDetail;
  delay: number;
}) => (
  <SlideIn delay={delay}>
    <a href={`/project/${project.slug}`} className="block h-full group">
      <motion.article
        whileHover={{ y: -8 }}
        className="relative h-full flex flex-col bg-[#1a1a1a] border-2 border-main-text p-5 transition-all hover:shadow-[8px_8px_0px_rgba(242,86,35,1)] cursor-pointer overflow-hidden"
      >
        <div className="absolute top-3 right-4 font-redacted text-main-text/30 text-lg italic pointer-events-none z-20">
          {project.year}
        </div>

        <div className="aspect-video bg-black border border-main-text/10 overflow-hidden mb-6 relative group-hover:border-[#F25623]/50 transition-all duration-500">
          {project.image ? (
            <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 mix-blend-luminosity group-hover:mix-blend-normal"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-[#1a1a1a] mix-blend-multiply opacity-40 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-30 z-10" />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black italic text-xl">
              no_preview.sys
            </div>
          )}
        </div>

        <div className="flex flex-col grow space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-[#F25623]" />
            <Typography
              variant="h3"
              className="text-xl font-black lowercase tracking-tighter leading-none group-hover:text-[#F25623] transition-colors"
            >
              {project.title}
            </Typography>
          </div>

          <p className="text-[11px] font-medium opacity-50 leading-relaxed line-clamp-2">
            {project.summary}
          </p>

          <div className="mt-auto pt-6 flex justify-between items-end">
            <div className="flex flex-wrap gap-1 max-w-[70%]">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] font-bold uppercase tracking-tighter px-1.5 py-0.5 border border-main-text/20 text-[#F25623]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BOXED DIAGONAL ARROW BUTTON (Sesuai image_0.png) */}
            <div className="relative flex items-center justify-center w-10 h-10 border-2 border-main-text group-hover:bg-[#F25623] group-hover:border-[#F25623] transition-all duration-300">
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 2, y: -2 }} // Animasi nanjak diagonal
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowDiagonalIcon className="text-main-text group-hover:text-white transition-colors" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </a>
  </SlideIn>
);

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const FILTERS: Array<"all" | ProjectCategory> = [
    "all",
    "web",
    "mobile",
    "3D",
  ];

  const filteredProjects =
    filter === "all"
      ? projectsList
      : projectsList.filter((project) => project.category === filter);

  return (
    <main className="min-h-screen pt-22 md:pt-32 pb-24 bg-transparent text-main-text relative selection:bg-[#F25623] overflow-x-hidden">
      <BackgroundParallax />

      {/* FIXED BG TEXT */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-5 select-none block">
        <div className="text-[25vh] md:text-[30vh] font-black leading-none rotate-90 translate-x-[38%]  md:translate-x-[30%] tracking-tighter">
          WORKS
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <header className="mb-8 md:mb-24 relative">
          <SlideIn>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="relative">
                <Typography
                  variant="h1"
                  className="text-[18vw] md:text-[10vw] font-black leading-[0.75] lowercase tracking-tighter"
                >
                  archi-
                  <br />
                  ve.
                </Typography>
                <RedactedOverlay
                  text="personal project"
                  className="text-[8vw] md:text-[4vw] -top-3 md:-top-9 left-0 opacity-10"
                />
              </div>

              <div className="flex flex-col items-start lg:items-end gap-4">
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                  filter by type:
                </span>
                <div className="flex flex-wrap border-2 border-main-text bg-main-text/5 backdrop-blur-sm p-1">
                  {FILTERS.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                        filter === category
                          ? "bg-[#F25623] text-white"
                          : "hover:bg-main-text/20"
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 h-fit lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="space-y-10">
              <div className="relative p-6 border-2 border-main-text bg-[#F25623] text-white -rotate-1">
                <Typography className="text-lg font-black leading-tight italic lowercase">
                  &quot;a documented history of my technical growth.&quot;
                </Typography>
              </div>

              <div className="space-y-8">
                {INFOS_DATA.map((info) => (
                  <div
                    key={info.id}
                    className="border-l-2 border-[#F25623] pl-4"
                  >
                    <Typography className="text-[10px] font-black uppercase tracking-widest mb-2">
                      {info.title}
                    </Typography>
                    <p className="text-[10px] font-medium leading-relaxed opacity-50">
                      {info.descriptions[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-9 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      delay={index * 0.05}
                    />
                  ))
                ) : (
                  <div className="col-span-full py-40 border-2 border-dashed border-main-text/20 flex flex-col items-center">
                    <Typography className="font-redacted text-6xl opacity-10 mb-4">
                      NULL_RESULT
                    </Typography>
                    <Typography className="text-[10px] font-bold opacity-30 uppercase tracking-[0.5em]">
                      database error: records not found
                    </Typography>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>

        <footer className="mt-22 py-10 border-t-2 border-main-text flex flex-col sm:flex-row justify-between items-center gap-6">
          <Typography className="text-[9px] font-black uppercase tracking-[0.5em] opacity-30">
            &copy; 2026 - Haikal Taufiq
          </Typography>
        </footer>
      </div>
    </main>
  );
}
