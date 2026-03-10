"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import Image from "next/image";
import sketchImg from "@/public/assets/Sketch.png";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/**
 * REDACTED OVERLAY COMPONENT
 * Terjaga konsistensinya dengan tema industrial.
 */
const RedactedOverlay = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <Typography
    className={`absolute font-redacted text-[#F25623] opacity-30 mix-blend-difference pointer-events-none tracking-normal whitespace-nowrap z-0 select-none ${className}`}
  >
    {text}
  </Typography>
);

/**
 * EXPERIENCE CARD COMPONENT
 * Ditambah interaktivitas magnetic dan depth.
 */
const ExperienceCard = ({
  year,
  role,
  company,
  desc,
}: {
  year: string;
  role: string;
  company: string;
  desc: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({
      x: (y - centerY) / 10,
      y: (centerX - x) / 20,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative border-b-2 border-main-text/10 py-10 transition-all duration-500 hover:bg-main-text/3 px-6 overflow-hidden perspective-1000"
    >
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[#F25623] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono font-black text-[#F25623] bg-[#F25623]/10 px-2 py-0.5 rounded-sm">
              [{year}]
            </span>
            <div className="h-px w-8 bg-[#F25623]/30 group-hover:w-16 group-hover:bg-[#F25623] transition-all duration-700" />
            <Typography className="text-[10px] font-mono font-black opacity-30 group-hover:opacity-100 group-hover:text-main-text uppercase tracking-[0.3em] transition-all">
              {company}
            </Typography>
          </div>

          <Typography
            variant="h3"
            className="text-3xl md:text-4xl font-black lowercase leading-none tracking-tighter group-hover:translate-x-4 transition-transform duration-500"
          >
            <span className="group-hover:text-[#F25623] transition-colors whitespace-nowrap">
              {role}.
            </span>
          </Typography>
        </div>

        <div className="max-w-sm md:text-right relative">
          <p className="text-[12px] font-mono leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[#F25623] mr-2">//</span>
            {desc}
          </p>
        </div>
      </div>

      <RedactedOverlay
        text="LOG_RECORD_ENCRYPTED"
        className="text-[60px] -bottom-4 -right-10 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 group-hover:scale-110"
      />
    </motion.div>
  );
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const smoothY = useSpring(backgroundY, { stiffness: 100, damping: 30 });

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
    <main
      ref={containerRef}
      className="min-h-screen bg-transparent text-main-text pt-32 pb-24 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative"
    >
      {/* 1. INTERACTIVE BACKGROUND SYSTEM */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          style={{ y: smoothY }}
          className="absolute inset-0 opacity-[0.07]"
        />

        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-[5%] w-px h-full bg-main-text/5" />
        <div className="absolute top-0 right-[5%] w-px h-full bg-main-text/5" />
        <div className="absolute top-[20%] left-0 w-full h-px bg-main-text/5" />

        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [0.03, 0]),
          }}
          className="absolute top-20 right-10 text-[20vw] font-black italic select-none tracking-tighter"
        >
          BIO_V2
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* 2. HERO SECTION */}
        <section className="relative mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 relative">
              <SlideIn direction="up">
                <div className="relative inline-block group cursor-default">
                  <Typography
                    variant="h1"
                    className="font-black text-[15vw] md:text-[11vw] leading-[0.75] lowercase tracking-tighter relative z-10"
                  >
                    haikal <br />
                    <span className="text-[#F25623] inline-block hover:skew-x-12 transition-transform duration-500">
                      .interface
                    </span>
                  </Typography>
                  <RedactedOverlay
                    text="MULTIMEDIA_ENGINEER"
                    className="text-[12vw] -top-12 -left-4 opacity-10 group-hover:opacity-20 transition-opacity"
                  />
                </div>

                <div className="max-w-2xl mt-16 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#F25623]" />
                  <Typography className="text-xl md:text-3xl font-poppins font-bold leading-[1.1] lowercase pl-6 tracking-tight">
                    "I build high-performance systems where{" "}
                    <span className="text-[#F25623] underline decoration-2 underline-offset-4">
                      technical precision
                    </span>{" "}
                    meets raw digital aesthetics bjir."
                  </Typography>
                </div>
              </SlideIn>
            </div>

            <div className="lg:col-span-4 sticky top-32">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group p-1"
              >
                {/* Animated Border Corner */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-[#F25623] z-20 group-hover:w-16 group-hover:h-16 transition-all duration-500" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-[#F25623] z-20 group-hover:w-16 group-hover:h-16 transition-all duration-500" />

                <div className="bg-main-text text-main-bg p-8 rounded-sm shadow-2xl overflow-hidden relative">
                  <div className="flex justify-between items-center mb-8 border-b border-main-bg/10 pb-4">
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2.5 h-2.5 bg-[#F25623] animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <Typography className="text-[10px] font-mono font-black uppercase tracking-[0.2em] opacity-40">
                      CORE_IDENTITY_INIT
                    </Typography>
                  </div>

                  <div className="aspect-square w-full bg-[#0a0a0a] rounded-sm mb-8 overflow-hidden relative group">
                    <Image
                      src={sketchImg}
                      alt="Haikal Sketch"
                      className="w-full h-full object-cover scale-110 opacity-70 mix-blend-screen transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#F25623]/20 animate-scan" />
                  </div>

                  <div className="space-y-3 font-mono text-[11px] uppercase tracking-tighter">
                    {[
                      "Status: Active_Unit",
                      "Sector: Tech_Dev",
                      "Loc: Batam_ID",
                    ].map((text, i) => (
                      <div
                        key={i}
                        className="flex justify-between border-b border-main-bg/5 pb-1"
                      >
                        <span className="opacity-40">
                          {text.split(":")[0]}:
                        </span>
                        <span className={i === 0 ? "text-[#F25623]" : ""}>
                          {text.split(":")[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. ARSENAL SECTION */}
        <section className="mb-56">
          <div className="flex items-end gap-6 mb-16 overflow-hidden">
            <Typography
              variant="h2"
              className="text-6xl font-black lowercase tracking-tighter leading-none"
            >
              pipeline.
            </Typography>
            <div className="h-0.5 flex-1 bg-main-text/10 mb-2" />
            <Typography className="text-[12px] font-mono font-black opacity-20 mb-1 tracking-[0.5em]">
              01_ARSENAL
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t-4 border-l-4 border-main-text shadow-[10px_10px_0px_0px_rgba(242,86,35,0.1)]">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  backgroundColor: "#F25623",
                  color: "#fff",
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="p-10 border-r-4 border-b-4 border-main-text flex flex-col items-center justify-center gap-4 group cursor-pointer relative"
              >
                <span className="font-mono font-black text-sm uppercase tracking-widest relative z-10">
                  {skill}
                </span>
                <div className="w-6 h-1 bg-current opacity-20 group-hover:w-full transition-all duration-300" />
                <span className="absolute top-2 right-2 text-[8px] font-mono opacity-20 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. TRACK RECORD */}
        <section className="relative">
          <div className="absolute -top-32 -left-10 text-[18vw] font-black opacity-[0.02] select-none pointer-events-none -rotate-3 italic uppercase">
            History
          </div>

          <div className="relative">
            <div className="flex items-center gap-6 mb-20">
              <Typography
                variant="h2"
                className="text-6xl font-black lowercase tracking-tighter leading-none"
              >
                track record.
              </Typography>
              <div className="h-1.5 w-24 bg-[#F25623] mt-2 rounded-full" />
            </div>

            <div className="space-y-0 border-t-2 border-main-text/10">
              <ExperienceCard
                year="2025 - 2026"
                role="Software Developer"
                company="PT Kreatif System Indonesia"
                desc="Architecting scalable internal ecosystems and cross-platform integrations—from streamlining HR workflows and customer loyalty engines to crafting high-performance corporate web experiences bjir."
              />
              <ExperienceCard
                year="2024 - 2025"
                role="Freelance Programmer"
                company="Independent Contractor"
                desc="Specializing in end-to-end digital solutions. I design and build high-performance websites, mobile applications, and integrated IoT systems tailored to professional business needs."
              />
              <ExperienceCard
                year="2022 - 2026"
                role="Vocational Student"
                company="Politeknik Negeri Batam"
                desc="Vocational-trained developer focused on industry-standard Project-Based Learning. Solving real-world problems through collaborative engineering to meet professional benchmarks."
              />
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(800%);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .bg-scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.5) 51%
          );
          background-size: 100% 4px;
        }
      `}</style>
    </main>
  );
}
