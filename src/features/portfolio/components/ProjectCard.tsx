"use client";

import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  delay?: number;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  slug,
  image,
  delay = 0.3,
  index,
}: ProjectCardProps) {
  return (
    <SlideIn delay={delay} direction="up">
      <a href={`/project/${slug}`}>
        <motion.div
          whileHover="hover"
          initial="initial"
          className="group relative bg-[#E6D5B8] text-black p-6 md:p-8 overflow-hidden border-2 border-black hover:border-[#F25623] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#F25623]"
        >
          {/* BG DECORATION */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-5 transition-opacity duration-500 overflow-hidden pointer-events-none select-none z-0">
            <span className="text-[12rem] font-black italic uppercase tracking-tighter whitespace-nowrap rotate-[-5deg]">
              {title}
            </span>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            {/* PROJECT PREVIEW: THE FIX */}
            <div className="relative aspect-video bg-black overflow-hidden mb-8 border-2 border-black">
              {image ? (
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} preview`}
                    fill
                    className="object-cover transition-all duration-700 
                               grayscale contrast-[1.2] brightness-[0.8]
                               group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105
                               mix-blend-luminosity"
                  />
                  {/* Color Overlay: Ini yang bikin gambar 'nyambung' sama kartu */}
                  <div className="absolute inset-0 bg-[#E6D5B8] mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-black/20 font-mono text-xl font-bold italic">
                  NO_PREVIEW_AVAILABLE
                </div>
              )}

              {/* Hard Accents */}
              <div className="absolute top-0 left-0 bg-black text-[#E6D5B8] px-2 py-1 text-[10px] font-mono font-bold z-30">
                SCR_SHOT_{index + 1}
              </div>
            </div>

            {/* PROJECT INFO */}
            <div className="flex justify-between items-end gap-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F25623] animate-pulse" />
                    <span className="text-[10px] font-mono font-black tracking-widest uppercase text-black/50">
                      REF: 0{index + 1} // BUILD_V1.0
                    </span>
                  </div>
                  <Typography
                    variant="h2"
                    className="text-4xl md:text-5xl font-black lowercase tracking-tighter leading-[0.8] py-2"
                  >
                    {title}.
                  </Typography>
                </div>

                <p className="max-w-md text-[13px] font-mono leading-tight font-bold opacity-80 uppercase italic">
                  {description}
                </p>
              </div>

              {/* ACTION BUTTON: Brutalist Circle */}
              <div className="relative w-16 h-16 shrink-0 group-hover:rotate-90 transition-all duration-500 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#F25623]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                  className="absolute inset-0 m-auto"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </SlideIn>
  );
}
