"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import Image from "next/image";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  video?: string;
  delay?: number;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  slug,
  image,
  video,
  delay = 0.3,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const isNearButton =
      e.clientX > rect.right - 150 && e.clientY > rect.bottom - 150;

    if (isNearButton) {
      mouseX.set(e.clientX - (rect.right - 48));
      mouseY.set(e.clientY - (rect.bottom - 48));
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <SlideIn delay={delay} direction="up">
      <a href={`/project/${slug}`}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          whileHover="hover"
          initial="initial"
          className="group relative bg-[#E6D5B8] text-black p-6 md:p-8 overflow-hidden border-2 border-black hover:border-[#F25623] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#F25623] h-full flex flex-col"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-[url('/noise.gif')] pointer-events-none z-40" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-5 transition-opacity duration-500 overflow-hidden pointer-events-none select-none z-0">
            <span className="text-[12rem] font-black italic uppercase tracking-tighter whitespace-nowrap rotate-[-5deg]">
              {title}
            </span>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="relative aspect-video bg-black overflow-hidden mb-8 border-2 border-black">
              {video ? (
                <div className="relative w-full h-full overflow-hidden">
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 
                               grayscale contrast-[1.2] brightness-[0.8]
                               group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-110
                               mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[#E6D5B8] mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>
              ) : image ? (
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} preview`}
                    fill
                    className="object-cover transition-all duration-700 
                               grayscale contrast-[1.2] brightness-[0.8]
                               group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-110
                               mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[#E6D5B8] mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-black/20 font-mono text-xl font-bold italic">
                  NO_PREVIEW_AVAILABLE
                </div>
              )}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity z-20">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_45%,#F25623_50%,transparent_55%)] bg-size-[100%_10px] animate-scan-slow" />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20" />

              <div className="absolute top-0 left-0 bg-black text-[#E6D5B8] px-2 py-1 text-[10px] font-mono font-bold z-30">
                {video ? "REC_LIVE" : `SCR_SHOT_${index + 1}`}
              </div>
            </div>

            <div className="flex justify-between items-end gap-6 mb-4">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F25623] animate-pulse" />
                    <span className="text-[10px] font-mono font-black tracking-widest uppercase text-black/50">
                      REF: 0{index + 1} {"// BUILD_V1.0"}
                    </span>
                  </div>
                  <Typography
                    variant="h2"
                    className="text-4xl md:text-5xl font-black lowercase tracking-tighter leading-[0.8] py-2 transition-transform group-hover:translate-x-2"
                  >
                    {title}.
                  </Typography>
                </div>

                <p className="max-w-md text-[13px] font-mono leading-tight font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                  {description}
                </p>
              </div>

              <motion.div
                style={{ x: dx, y: dy }}
                className="relative w-16 h-16 shrink-0 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#F25623] transition-colors duration-300 flex items-center justify-center"
              >
                <motion.div
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: 90 },
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-auto pt-4 border-t border-black/10 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <motion.div
                animate={{ x: [0, -100] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="inline-block text-[10px] font-mono font-black uppercase tracking-tighter"
              >
                view details • build success • system stable • 2026 update •
                view details • build success •
              </motion.div>
            </div>
          </div>
        </motion.div>
      </a>
    </SlideIn>
  );
}
