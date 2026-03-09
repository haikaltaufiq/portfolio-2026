"use client";

import { useState } from "react";
import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion, AnimatePresence } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Image from "next/image";

type ComproDetailProps = {
  project: ProjectDetail;
};

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

export default function ComproDetail({ project }: ComproDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    "/assets/compro/hero.png",
    "/assets/compro/landing-page.png",
    "/assets/compro/about.png",
    "/assets/compro/layanan.png",
    "/assets/compro/produk.png",
    "/assets/compro/produk-carousel.png",
    "/assets/compro/solusi.png",
    "/assets/compro/chat-bot.png",
  ];

  const stats = [
    { label: "Performance", before: 71, after: 92 },
    { label: "Accessibility", before: 84, after: 95 },
    { label: "Best Practices", before: 100, after: 100 },
    { label: "SEO", before: 46, after: 91 },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* HEADER SECTION */}
        <section className="relative mb-32">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="relative">
              <SlideIn direction="up">
                <div className="relative z-10">
                  <Typography
                    variant="h1"
                    className="font-poppins font-black text-[12vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
                  >
                    company profile <br />
                    <span className="text-[#F25623]">kreasii.</span>
                  </Typography>
                  <RedactedOverlay
                    text="VERSION: ENTERPRISE_2.0"
                    className="text-[3vw] -top-8 left-[20%] opacity-20 -rotate-3"
                  />
                </div>
              </SlideIn>
            </div>

            <div className="md:w-80 mt-12">
              <SlideIn delay={0.2}>
                <div className="space-y-6">
                  <div className="flex gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-[#F25623]" />
                    ))}
                  </div>
                  <Typography className="text-sm font-bold leading-snug lowercase border-l-4 border-[#F25623] pl-4 opacity-80">
                    "Redesigning PT Kreatif System Indonesia with an edgy,
                    enterprise-standard aesthetic. Built for performance,
                    optimized for scale."
                  </Typography>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-40">
          {stats.map((stat, i) => (
            <SlideIn key={stat.label} delay={i * 0.1}>
              <div className="group relative p-6 border border-main-text/20 bg-main-text/2 hover:border-[#F25623]/50 transition-all duration-500">
                <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest block mb-4">
                  {stat.label}
                </span>
                <div className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-[#00CC66]">
                    {stat.after}
                  </span>
                  <span className="text-[10px] opacity-30 font-mono line-through">
                    {stat.before}
                  </span>
                </div>
                <div className="mt-4 h-0.5 w-full bg-main-text/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.after}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-[#00CC66]"
                  />
                </div>
              </div>
            </SlideIn>
          ))}
        </section>
        {/* CAROUSEL SECTION */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
            <div className="space-y-2">
              <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                visual_inspection_v2
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-black lowercase tracking-tighter"
              >
                interface{" "}
                <span className="italic underline decoration-[#F25623]/30">
                  preview.
                </span>
              </Typography>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              {/* Button View Website - Gaya Industrial bjir */}
              <a
                href="https://company-profile-ksi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-3 border border-[#F25623] bg-[#F25623]/5 hover:bg-[#F25623] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <span className="font-mono text-[10px] font-bold tracking-tighter text-[#F25623] group-hover:text-white transition-colors">
                  [ VIEW_LIVE_SITE ]
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#F25623] group-hover:text-white group-hover:rotate-45 transition-all"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="flex-1 md:flex-none px-6 py-3 border border-main-text/20 hover:bg-main-text hover:text-main-bg transition-all font-mono text-[10px] font-bold tracking-tighter"
                >
                  PREV_NODE
                </button>
                <button
                  onClick={nextSlide}
                  className="flex-1 md:flex-none px-6 py-3 border border-main-text/20 hover:bg-main-text hover:text-main-bg transition-all font-mono text-[10px] font-bold tracking-tighter"
                >
                  NEXT_NODE
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full h-100 md:h-162.5 bg-[#0a0a0a] border border-main-text/10 overflow-hidden group shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
            {/* Browser Header */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-main-bg/80 backdrop-blur-md border-b border-main-text/5">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F25623]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-main-text/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-main-text/10" />
              </div>
              {screenshots.length > 0 && (
                <Typography className="text-[10px] font-mono opacity-50 tracking-widest uppercase truncate max-w-50 md:max-w-none">
                  {screenshots[currentIndex]?.split("/").pop()} // 0
                  {currentIndex + 1}
                </Typography>
              )}
            </div>

            <AnimatePresence mode="wait">
              {screenshots.length > 0 ? (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full pt-12"
                >
                  <div className="w-full h-full overflow-y-auto custom-scrollbar">
                    <Image
                      src={screenshots[currentIndex]}
                      alt="Project Preview"
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full text-[10px] font-mono opacity-20 animate-pulse">
                  SYSTEM_ERROR: ASSETS_NOT_FOUND
                </div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 z-20">
              <div className="px-3 py-1 bg-[#F25623] text-white font-mono text-[9px] font-bold">
                {currentIndex + 1} / {screenshots.length}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL DETAILS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-main-text/10 pt-20">
          <div className="lg:col-span-7 space-y-8">
            <Typography className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
              // execution_protocol
            </Typography>
            <div className="space-y-6">
              {project.content.map((p, i) => (
                <p
                  key={i}
                  className="text-sm font-medium opacity-70 leading-relaxed border-l-2 border-[#F25623]/20 pl-6 hover:border-[#F25623] transition-colors"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-main-text text-main-bg p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F25623]/10 to-transparent h-24 w-full animate-scan" />
              <Typography className="text-2xl font-black lowercase mb-8 relative z-10">
                deployment <br /> <span className="text-[#F25623]">specs.</span>
              </Typography>
              <div className="space-y-4 font-mono text-[10px] font-bold uppercase relative z-10">
                <div className="flex justify-between border-b border-main-bg/10 pb-2">
                  <span className="opacity-40">ref_id</span>
                  <span>KSI_PROD_2026</span>
                </div>
                <div className="flex justify-between border-b border-main-bg/10 pb-2">
                  <span className="opacity-40">engine</span>
                  <span>next.js / turbine</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-40">optim_rank</span>
                  <span className="text-[#00CC66]">grade_a+</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-40 border-t border-main-text/10 py-10 bg-main-text/2">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 italic">
            © 2026 — PT KREATIF SYSTEM INDONESIA // CORE_OVERHAUL
          </Typography>
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#F25623] opacity-20" />
            ))}
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(242, 86, 35, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f25623;
        }
      `}</style>
    </main>
  );
}
