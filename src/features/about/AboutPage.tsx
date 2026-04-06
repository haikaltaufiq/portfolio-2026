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
      className="group relative border-b border-main-text/15 py-8 md:py-10 transition-all duration-500 hover:bg-main-text/3 px-4 md:px-6 overflow-hidden perspective-1000"
    >
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[#F25623] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

      {/* Wrapper Utama: Tetap flex-col di mobile tapi gap dipersempit biar gak makan tempat */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative z-10">
        <div className="flex-1 min-w-0">
          {/* Header Row: Dipaksa tetep row walau di mobile (pake flex-row) */}
          <div className="flex flex-row items-center gap-3 mb-2 md:mb-3">
            <span className="shrink-0 text-[10px] md:text-[11px] font-mono font-black text-[#F25623] bg-[#F25623]/10 px-2 py-0.5 rounded-sm">
              {year}
            </span>
            <div className="h-px w-6 md:w-8 bg-[#F25623]/30 group-hover:w-12 md:group-hover:w-16 group-hover:bg-[#F25623] transition-all duration-700" />
            <Typography className="truncate text-[9px] md:text-[10px] font-mono font-black opacity-30 group-hover:opacity-100 group-hover:text-main-text uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all">
              {company}
            </Typography>
          </div>

          <Typography
            variant="h3"
            className="text-2xl md:text-4xl font-black lowercase leading-none tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500"
          >
            {/* whitespace-nowrap dihapus/diatur hanya untuk desktop agar di mobile bisa wrap kalau nama role kepanjangan */}
            <span className="group-hover:text-[#F25623] transition-colors block md:whitespace-nowrap">
              {role}.
            </span>
          </Typography>
        </div>

        {/* Desc Box: Di mobile text-left, desktop text-right */}
        <div className="max-w-full md:max-w-sm text-left md:text-right relative mt-0">
          <p className="text-[11px] md:text-[12px] font-mono leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[#F25623] mr-2">//</span>
            {desc}
          </p>
        </div>
      </div>

      <RedactedOverlay
        text="LOG_RECORD_ENCRYPTED"
        className="hidden md:block text-[60px] -bottom-4 -right-10 opacity-[0.03] group-hover:opacity-1 transition-all duration-700 group-hover:scale-110"
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

  const certificates = [
    {
      title: "2nd Award PBL Expo",
      issuer: "Polibatam",
      category: "Competition",
      year: "2024",
      img: "assets/sertifikat/PBL-Expo-juara-2.png",
    },
    {
      title: "Software Engineering",
      issuer: "RevoU",
      category: "Course",
      year: "2023",
      img: "assets/sertifikat/revoU-software-engineering.jpg",
    },
    {
      title: "Tech Support",
      issuer: "Coursera",
      category: "Course",
      year: "2024",
      img: "assets/sertifikat/coursera-tech-support.jpg",
    },
    {
      title: "h s e",
      issuer: "ILO",
      category: "Course",
      year: "2025",
      img: "assets/sertifikat/K3.jpg",
    },
    {
      title: "National Seminar",
      issuer: "INSYFEST",
      category: "Seminar",
      year: "2024",
      img: "assets/sertifikat/sertif-KR.jpg",
    },
    {
      title: "UI/UX Design",
      issuer: "Mindluster",
      category: "Course",
      year: "2023",
      img: "assets/sertifikat/sertif-ML.jpg",
    },
    {
      title: "PBL Expo Finalist",
      issuer: "Polibatam",
      category: "Competition",
      year: "2025",
      img: "assets/sertifikat/PBL-Expo.jpg",
    },
    {
      title: "PBL Expo Finalist",
      issuer: "Polibatam",
      category: "Competition",
      year: "2024",
      img: "assets/sertifikat/MTKH.png",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-transparent text-main-text pt-12 md:pt-32 pb-24 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative"
    >
      {/* BACKGROUND DECORATION SYSTEM */}
      <div className="fixed inset-0 pointer-events-none -z-10">
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

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* 2. HERO SECTION */}
        <section className="relative mb-26 md:mb-64">
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
                    className="text-[17vw] md:text-[12vw] top-7 md:-top-12 -left-4 opacity-10"
                  />
                </div>
                <div className="max-w-2xl mt-10 md:mt-20 relative">
                  {/* Accent Line */}
                  <div className="absolute left-2 md:-left-6 top-0 bottom-0 w-1 bg-[#F25623]" />

                  <Typography className="text-xl md:text-4xl font-black leading-none lowercase pl-8 tracking-tighter mb-4">
                    crafting{" "}
                    <span className="text-[#F25623]">high fidelity</span> logic
                    <br /> through industrial aesthetics.
                  </Typography>

                  <Typography className="text-sm md:text-base font-mono opacity-50 pl-8 leading-relaxed max-w-lg">
                    [!] evolving through{" "}
                    <span className="text-[#F25623]">multidisciplinary</span>{" "}
                    frameworks. executing a polymorphic approach where adaptive
                    logic meets continuous stack integration and
                    multimedia-driven precision.
                  </Typography>
                </div>
              </SlideIn>
            </div>

            <div className="lg:col-span-4 sticky top-32">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group p-1"
              >
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
                      CORE IDENTITY
                    </Typography>
                  </div>
                  <div className="aspect-square w-full bg-[#0a0a0a] rounded-sm mb-8 overflow-hidden relative">
                    <Image
                      src={sketchImg}
                      alt="Haikal Sketch"
                      className="w-full h-full object-cover scale-110 opacity-70 mix-blend-screen transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />
                  </div>
                  <div className="space-y-3 font-mono text-[11px] uppercase tracking-tighter">
                    {[
                      "Status: Active",
                      "Sector: MULTIMEDIA",
                      "Loc: Batam ID",
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

        {/* 3. ARSENAL SECTION (Pipeline) */}
        <section className="mb-64 relative">
          {/* BACKGROUND TEXT - Diletakkan di luar kontainer grid biar gak kepotong */}
          <div className="absolute top-10 md:-top-32 -left-15 md:-left-20 text-[30vw] md:text-[25vw] font-black opacity-[0.02] select-none pointer-events-none -rotate-2 italic uppercase z-0 tracking-tighter whitespace-nowrap">
            STACK
          </div>

          <div className="relative z-10">
            <div className="flex items-end gap-6 mb-16 px-2">
              <div className="flex flex-col">
                <Typography
                  variant="h2"
                  className="text-6xl md:text-7xl font-black lowercase tracking-tighter leading-none"
                >
                  pipeline.
                </Typography>
              </div>
              <div className="h-px flex-1 bg-main-text/15 mb-2.5" />
              <Typography className="hidden md:block text-[10px] font-mono opacity-30 mb-1.5 tracking-widest">
                TECH STACK
              </Typography>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-main-text/15 bg-main-bg/5 backdrop-blur-sm">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative p-10 md:p-14 border-r border-b border-main-text/15 flex flex-col items-center justify-center overflow-hidden cursor-crosshair"
                >
                  <div className="absolute inset-0 bg-[#F25623]/0 group-hover:bg-[#F25623]/5 transition-colors duration-500" />
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-[#F25623] group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-[#F25623] group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                  <span className="absolute top-5 left-5 text-[10px] font-mono opacity-20 group-hover:opacity-100 group-hover:text-[#F25623] transition-all duration-500">
                    0{i + 1}
                  </span>
                  <span className="font-mono font-black text-[13px] md:text-sm uppercase tracking-[0.2em] relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {skill}
                  </span>
                  <div className="absolute bottom-8 w-4 h-0.5 bg-main-text/15 group-hover:w-12 group-hover:bg-[#F25623] transition-all duration-500" />
                  <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TRACK RECORD */}
        <section className="relative mb-64">
          <div className="absolute top-20 md:-top-40 -right-12 md:-right-20 text-[25vw] font-black opacity-[0.02] select-none pointer-events-none rotate-3 italic uppercase z-0 tracking-tighter whitespace-nowrap">
            HISTORY
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-10 md:mb-20">
              <Typography
                variant="h2"
                className="text-6xl font-black lowercase tracking-tighter leading-none"
              >
                track record.
              </Typography>
              <div className="h-px flex-1 bg-main-text/15 mt-2" />
            </div>
            <div className="space-y-0 border-t border-main-text/15">
              <ExperienceCard
                year="2025 - 2026"
                role="Software Developer"
                company="PT Kreatif System Indonesia"
                desc="Executed an 8 month paid internship, engineering a suite of internal ecosystems: an automated HRIS, a data driven loyalty engine, and an enterprise grade corporate portal."
              />
              <ExperienceCard
                year="2024 - 2025"
                role="Freelance Programmer"
                company="Independent Contractor"
                desc="Operated as a project-based independent engineer, delivering cross-platform solutions: from architecting website ecosystems to integrating hardware to cloud IoT systems."
              />
              <ExperienceCard
                year="2022 - 2026"
                role="Vocational Student"
                company="Politeknik Negeri Batam"
                desc="Applied Multimedia Engineering student specializing in high-impact PBL. Awarded 2nd Place at the 2024 PBL Expo and published a SINTA 5 indexed journal paper."
              />
            </div>
          </div>
        </section>

        {/* 5. CREDENTIALS SECTION */}
        <section className="relative pb-24">
          <div className="absolute -bottom-20 -left-20 text-[20vw] font-black opacity-[0.02] select-none pointer-events-none -rotate-1 italic uppercase z-0 tracking-tighter whitespace-nowrap">
            VERIFIED
          </div>

          <div className="relative z-10">
            <div className="flex items-end gap-6 mb-16 overflow-hidden">
              <Typography
                variant="h2"
                className="text-6xl font-black lowercase tracking-tighter leading-none"
              >
                credentials.
              </Typography>
              <div className="h-px flex-1 bg-main-text/15 mb-2" />
              <Typography className="text-[12px] font-mono font-black opacity-20 mb-1 tracking-[0.5em]">
                02_VERIFIED
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-4/3 bg-main-text/5 border border-main-text/15 overflow-hidden cursor-crosshair rounded-sm"
                >
                  <div className="absolute top-3 right-3 z-30">
                    <span className="text-[10px] font-mono font-black text-white bg-[#F25623] px-2.5 py-1 rounded-sm uppercase tracking-tighter">
                      [{cert.category}]
                    </span>
                  </div>
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-[#F25623] group-hover:animate-ping" />
                      <span className="text-[10px] text-[#F25623] font-mono font-black uppercase">
                        {cert.issuer}
                      </span>
                    </div>
                    <Typography className="text-lg font-black text-white leading-none lowercase tracking-tighter mb-2 group-hover:text-[#F25623] transition-colors">
                      {cert.title}.
                    </Typography>
                    <div className="flex justify-between items-center pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono text-white/40 group-hover:text-white uppercase">
                        REL_DATE: {cert.year}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-full h-1 bg-[#F25623]/10 -translate-y-full group-hover:animate-scan pointer-events-none" />
                </motion.div>
              ))}
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
