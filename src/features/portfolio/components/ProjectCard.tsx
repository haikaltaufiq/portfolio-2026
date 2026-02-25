"use client";

import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  delay?: number;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  delay = 0.3,
  index,
}: ProjectCardProps) {
  return (
    <SlideIn delay={delay} direction="up">
      <motion.div
        whileHover="hover"
        initial="initial"
        className="group relative bg-main-text text-main-bg p-6 md:p-8 overflow-hidden border-2 border-transparent hover:border-[#F25623] transition-colors duration-300"
      >
        {/* BG DECORATION: Glitch Text (Selaras sama ContactCard) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden pointer-events-none select-none z-0">
          <span className="text-[10rem] font-black italic uppercase tracking-tighter whitespace-nowrap rotate-[-10deg]">
            {title}
          </span>
        </div>

        {/* INDUSTRIAL SCANLINE */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-[#F25623] opacity-0 group-hover:opacity-100 group-hover:animate-scan-fast z-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          {/* PROJECT PREVIEW / IMAGE HOLDER */}
          <div className="relative aspect-video bg-black rounded-sm overflow-hidden mb-8 border border-main-bg/10">
            <div className="absolute inset-0 flex items-center justify-center text-main-text/5 font-black text-6xl italic tracking-tighter group-hover:text-[#F25623]/20 transition-colors">
              PREVIEW_DATA
            </div>

            {/* Corner Accents (Brutalist Style) */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#F25623] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#F25623] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* PROJECT INFO */}
          <div className="flex justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-black opacity-30 group-hover:text-[#F25623] group-hover:opacity-100 transition-colors">
                  PROJECT_REF: 0{index + 1} // TYPE: BUILD
                </span>
                <Typography
                  variant="h2"
                  className="text-4xl md:text-5xl font-black lowercase tracking-tighter leading-[0.9] pb-1"
                >
                  {title}.
                </Typography>
              </div>

              <p className="max-w-md text-[13px] font-mono leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                {description}
              </p>
            </div>

            {/* ACTION BUTTON: Muter pas hover */}
            <button className="relative w-16 h-16 shrink-0 group-hover:rotate-45 transition-all duration-500">
              <div className="absolute inset-0 border-2 border-main-bg rounded-full group-hover:border-[#F25623] group-hover:bg-[#F25623] transition-all" />
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="square"
                className="absolute inset-0 m-auto"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>

          {/* INTERACTIVE PROGRESS BAR */}
          <div className="mt-8 relative h-1 w-full bg-main-bg/10 overflow-hidden">
            <motion.div
              variants={{
                initial: { x: "-100%" },
                hover: { x: "0%" },
              }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0 bg-[#F25623]"
            />
          </div>
        </div>
      </motion.div>
    </SlideIn>
  );
}
