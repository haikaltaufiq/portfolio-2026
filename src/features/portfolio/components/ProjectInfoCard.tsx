"use client";

import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import RedactedOverlay from "./RedactedOverlay";
import { ReactNode } from "react";

interface ProjectInfoCardProps {
  title: string;
  overlayText: string;
  descriptions: string[];
  delay?: number;
  index?: number;
  link?: string;
  children?: ReactNode;
}

export default function ProjectInfoCard({
  title,
  overlayText,
  descriptions,
  delay = 0.2,
  index = 0,
  link,
  children, // JANGAN LUPA DESTRUCTURE DI SINI
}: ProjectInfoCardProps) {
  const href = link ? `/project/${link}` : "/project";

  return (
    <SlideIn delay={delay} direction="up">
      <a href={href}>
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative border-2 border-main-text p-8 h-full flex flex-col justify-between group bg-main-bg overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#F25623]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-main-text/10 group-hover:bg-[#F25623] transition-colors" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div className="relative">
                <span className="text-[10px] font-mono font-black opacity-30 block mb-1">
                  INFO_LOG.0{index + 1}
                </span>
                <Typography
                  variant="h2"
                  className="font-black text-4xl lowercase leading-[0.9] tracking-tighter"
                >
                  {title}.
                </Typography>

                <div className="mt-2">
                  <RedactedOverlay
                    text={overlayText}
                    className="text-[24px] opacity-10 group-hover:opacity-40 transition-opacity font-black italic uppercase"
                  />
                </div>
              </div>

              <div className="flex gap-1">
                {["SEC", "LVL3"].map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 bg-main-text text-main-bg text-[8px] font-mono font-black tracking-widest"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-l-2 border-main-text/10 pl-4 mb-6">
              {descriptions.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-[13px] opacity-70 leading-relaxed font-mono group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-[#F25623] mr-2">{"//"}</span>
                  {desc}
                </p>
              ))}
            </div>

            {children && <div className="mt-4">{children}</div>}
          </div>

          <div className="mt-10 pt-6 border-t border-main-text/10">
            <button className="flex items-center justify-between w-full group/btn">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold group-hover:text-[#F25623] transition-colors">
                access full report
              </span>
              <div className="w-10 h-10 border-2 border-main-text rounded-none flex items-center justify-center group-hover/btn:bg-[#F25623] group-hover/btn:border-[#F25623] group-hover/btn:text-main-bg transition-all">
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
              </div>
            </button>
          </div>

          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F25623]/5 to-transparent h-20 w-full -translate-y-full group-hover:animate-scan-slow pointer-events-none" />
        </motion.div>
      </a>
    </SlideIn>
  );
}
