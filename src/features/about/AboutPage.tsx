"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import Image from "next/image";
import sketchImg from "@/public/assets/Sketch.png";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/**
 * REDACTED OVERLAY COMPONENT
 * Consistent with established industrial theme.
 */
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

/**
 * EXPERIENCE CARD COMPONENT
 * Refined for scannability and technical aesthetics.
 */ const ExperienceCard = ({
  year,
  role,
  company,
  desc,
}: {
  year: string;
  role: string;
  company: string;
  desc: string;
}) => (
  <div className="group relative border-b-2 border-main-text/10 py-8 transition-all duration-500 hover:bg-main-text/3 px-6 overflow-hidden">
    {/* Animated Orange Line Indicator */}
    <div className="absolute left-0 top-0 w-1 h-full bg-[#F25623] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono font-black text-[#F25623]">
            [{year}]
          </span>
          <div className="h-px w-8 bg-[#F25623]/30 group-hover:w-12 group-hover:bg-[#F25623] transition-all duration-500" />
          <Typography className="text-[10px] font-mono font-bold opacity-40 group-hover:opacity-100 group-hover:text-main-text uppercase tracking-widest transition-all">
            {company}
          </Typography>
        </div>

        <Typography
          variant="h3"
          className="text-2xl md:text-3xl font-black lowercase leading-none tracking-tighter group-hover:translate-x-2 transition-transform duration-300"
        >
          <span className="group-hover:text-[#F25623] transition-colors whitespace-nowrap">
            {role}.
          </span>
        </Typography>
      </div>

      <p className="text-[11px] font-mono leading-relaxed opacity-60 max-w-sm md:text-right italic group-hover:opacity-100 transition-opacity">
        // {desc}
      </p>
    </div>

    <RedactedOverlay
      text="classifiedrecord"
      className="text-[40px] top-8 -left-4 opacity-5 group-hover:opacity-10 transition-opacity"
    />
  </div>
);

/**
 * MAIN ABOUT PAGE
 * Reconstructed to match the learned "Haikal Taufiq" identity and industrial layout.
 */
export default function AboutPage() {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  const skills = [
    "Flutter",
    "Laravel",
    "Unity",
    "Arduino",
    "Firebase",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Javascript",
    "Figma",
    "SQL",
    "Github",
  ];

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-32 pb-24 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* 1. BACKGROUND DECORATION SYSTEM */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Blueprint Grid Dots */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Vertical Technical Guidelines */}
        <div className="absolute top-0 left-6 w-px h-full bg-main-text/5 hidden md:block" />
        <div className="absolute top-0 right-6 w-px h-full bg-main-text/5 hidden md:block" />

        {/* Large Background Title */}
        <Typography className="absolute top-10 -right-20 text-[18vw] font-black opacity-[0.02] whitespace-nowrap select-none leading-none tracking-tighter italic">
          BIOGRAPHY_EXT
        </Typography>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* 2. HERO SECTION: Industrial Identity */}
        <section className="relative mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="absolute italic -top-15 left-75 text-[15vw] font-black opacity-[0.02] select-none tracking-tight leading-tight pointer-events-none -rotate-2">
                ABOUT ME
              </div>
              <SlideIn direction="up">
                <div className="relative inline-block mb-4">
                  <Typography
                    variant="h1"
                    className="font-black text-[14vw] md:text-[10vw] leading-[0.8] lowercase tracking-tighter"
                  >
                    haikal <br />
                    <span className="text-[#F25623]">.interface</span>
                  </Typography>
                  <RedactedOverlay
                    text="haikal taufiq"
                    className="text-[10vw] -top-10 left-0 opacity-10"
                  />
                </div>
                <div className="max-w-xl mt-12">
                  <Typography className="text-xl md:text-2xl font-poppins font-bold leading-tight lowercase border-l-4 border-[#F25623] pl-6 py-2">
                    "Multimedia Engineering. I build high-performance systems
                    where technical precision meets raw digital aesthetics."
                  </Typography>
                </div>
              </SlideIn>
            </div>

            <div className="lg:col-span-4 w-full">
              {/* SYSTEM STATUS DASHBOARD */}
              <div className="relative group">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#F25623] z-20" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#F25623] z-20" />

                <div className="bg-main-text text-main-bg p-6 rounded-sm relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6 border-b border-main-bg/10 pb-2">
                    <div className="flex gap-1.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-main-bg/20"
                        />
                      ))}
                    </div>
                    <Typography className="text-[9px] font-mono font-black uppercase tracking-widest opacity-40">
                      Identity Card v1.0
                    </Typography>
                  </div>

                  {/* Lottie Container */}
                  <div className="aspect-video w-full bg-[#0d0d0d] rounded-sm mb-6 overflow-hidden flex items-center justify-center relative border border-white/5">
                    {/* Image Container */}
                    <Image
                      src={sketchImg}
                      alt="Sketch decoration"
                      priority
                      // object-contain supaya gambar gak dipaksa stretch atau crop
                      className="w-full h-full object-contain scale-110 opacity-80 mix-blend-color-dodge contrast-100 brightness-90 transition-transform duration-500 group-hover:scale-125"
                    />

                    {/* Scanning Overlay Effect */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F25623]/10 to-transparent h-1/2 w-full animate-pulse pointer-events-none" />

                    {/* Technical Noise Texture (Optional tapi nambah vibe industrial) */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  </div>

                  <div className="space-y-2 font-mono text-[10px] uppercase tracking-wider">
                    <div className="flex justify-between">
                      <span className="opacity-50">Status:</span>
                      <span className="text-[#F25623] animate-pulse">
                        ● Active Unit
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-50">Sector:</span>
                      <span>Tech Dev</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-50">Loc:</span>
                      <span>BTM ID 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ARSENAL: Grid System */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <Typography
              variant="h2"
              className="text-4xl font-black lowercase tracking-tighter"
            >
              pipeline.
            </Typography>
            <div className="h-px flex-1 bg-main-text/10" />
            <Typography className="text-[10px] font-mono opacity-30">
              TECH STACK v2
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t-2 border-l-2 border-main-text">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ backgroundColor: "#F25623", color: "#fff" }}
                className="p-8 border-r-2 border-b-2 border-main-text flex flex-col gap-4 group transition-colors duration-300"
              >
                <span className="font-mono font-black text-xs uppercase tracking-widest">
                  {skill}
                </span>
                <div className="w-4 h-0.5 bg-current opacity-20" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. TRACK RECORD & PHILOSOPHY */}
        <section className=" gap-10 relative">
          <div className="absolute -top-24 -left-10 text-[17vw] font-black opacity-[0.02] select-none pointer-events-none -rotate-2">
            HISTORY
          </div>
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <Typography
                variant="h2"
                className="text-4xl font-black lowercase tracking-tighter"
              >
                track record.
              </Typography>
              <div className="h-0.5 w-12 bg-[#F25623]" />
            </div>

            <div className="space-y-2">
              <ExperienceCard
                year="2025 - 2026"
                role="Software Developer"
                company="PT Kreatif System Indonesia - Intern"
                desc="Architecting scalable internal ecosystems and cross-platform integrations—from streamlining HR workflows and customer loyalty engines to crafting high-performance corporate web experiences."
              />
              <ExperienceCard
                year="2024 - 2025"
                role="Freelance Programmer"
                company="Independent Contractor"
                desc="Freelance Software Engineer specializing in end-to-end digital solutions. I design and build high-performance websites, mobile applications, and integrated IoT systems tailored to business needs"
              />
              <ExperienceCard
                year="2022 - 2026"
                role="Vocational Student"
                company="Batam State polytechnic"
                desc="Vocational-trained developer with a focus on industry-standard Project-Based Learning. solving real-world problems through collaborative engineering—delivering digital solutions that meet professional benchmarks."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
