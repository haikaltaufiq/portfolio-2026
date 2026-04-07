"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../ui/Typhography";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";

/**
 * EXPERIENCE CARD COMPONENT
 * Optimized for Mobile Stacking & Desktop Inline
 */
const ExperienceCard = ({
  year,
  role,
  company,
  desc,
  index,
}: {
  year: string;
  role: string;
  company: string;
  desc: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative border-b-2 border-main-text/10 py-8 md:py-10 px-4 md:px-6 transition-all duration-500 hover:bg-main-text/3 overflow-hidden cursor-default"
    >
      {/* Indicator Accent Line */}
      <div className="absolute left-0 top-0 w-1 md:w-1.5 h-full bg-[#F25623] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative z-10">
        <div className="flex-1">
          {/* Metadata Section: Stacks on mobile, Row on desktop */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <span className="text-[9px] md:text-[11px] font-mono font-black text-[#F25623] bg-[#F25623]/10 px-2 py-0.5 rounded-sm">
              {year}
            </span>
            <div className="hidden md:block h-px w-8 bg-[#F25623]/30 group-hover:w-16 group-hover:bg-[#F25623] transition-all duration-700" />
            <Typography className="text-[9px] md:text-[10px] font-mono font-black opacity-30 group-hover:opacity-100 group-hover:text-main-text uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all">
              {company}
            </Typography>
          </div>

          {/* Role Title: Responsive Sizing */}
          <Typography
            variant="h3"
            className="text-2xl md:text-5xl font-black lowercase leading-[0.9] tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500"
          >
            <span className="group-hover:text-[#F25623] transition-colors block md:inline">
              {role}.
            </span>
          </Typography>
        </div>

        {/* Description: Better padding and border on mobile */}
        <div className="max-w-sm md:text-right relative mt-2 md:mt-0 pl-4 md:pl-0 border-l border-[#F25623]/20 md:border-none">
          <p className="text-[11px] md:text-[13px] font-mono leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <span className="hidden md:inline text-[#F25623] mr-2">//</span>
            {desc}
          </p>
        </div>
      </div>

      {/* Watermark: Scaled down for mobile */}
      <RedactedOverlay
        text="LOG_RECORD_ENCRYPTED"
        className="text-[40px] md:text-[60px] -bottom-2 md:-bottom-4 -right-5 md:-right-10 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 group-hover:scale-110"
      />
    </motion.div>
  );
};

export default function TrackRecord() {
  const experiences = [
    {
      year: "2025 - 2026",
      role: "Software Developer",
      company: "PT Kreatif System Indonesia",
      desc: "Executed an 8 month paid internship, engineering a suite of internal ecosystems: an automated HRIS, a data driven loyalty engine, and an enterprise grade corporate portal.",
    },
    {
      year: "2024 - 2025",
      role: "Freelance Programmer",
      company: "Independent Programmer",
      desc: "Operated as a project-based independent engineer, delivering cross-platform solutions: from architecting website ecosystems to integrating hardware to cloud IoT systems.",
    },
    {
      year: "2022 - 2026",
      role: "Vocational Student",
      company: "Politeknik Negeri Batam",
      desc: "Applied Multimedia Engineering student specializing in high-impact PBL. Awarded 2nd Place at the 2024 PBL Expo and published a SINTA 5 indexed journal paper.",
    },
  ];

  return (
    <section className="relative py-1 md:py-10 bg-transparent overflow-hidden">
      <div className="absolute top-2 md:top-10 left-5 text-[35vw] md:text-[18vw] font-black opacity-[0.02] md:opacity-[0.02] select-none pointer-events-none tracking-tighter -rotate-3 italic uppercase leading-none block">
        History
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="relative">
          {/* Header Section: Scaled for Mobile */}
          <div className="flex items-end gap-4 md:gap-6 mb-12 md:mb-20 overflow-hidden">
            <Typography
              variant="h2"
              className="text-4xl md:text-6xl font-black lowercase tracking-tighter leading-none"
            >
              track record.
            </Typography>
            <div className="h-0.5 flex-1 bg-main-text/10 mb-1 md:mb-2" />
            <Typography className="text-[10px] md:text-[12px] font-mono font-black opacity-20 mb-0.5 tracking-[0.3em] md:tracking-[0.5em] whitespace-nowrap">
              <span className="hidden md:inline">BACKGROUND </span>
              HISTORY
            </Typography>
          </div>

          {/* List Section */}
          <div className="border-t-2 border-main-text/10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
