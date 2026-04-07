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
      <div className="absolute top-68 -left-2 md:left-5 text-[24vw] md:text-[16vw] font-black opacity-[0.02] leading-20 md:leading-47 select-none tracking-[-5] md:tracking-[-10] pointer-events-none -rotate-2 uppercase">
        KREASII
      </div>
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
                    text="ENTERPRISE"
                    className="text-[8vw] -top-16 left-[5%] opacity-20 -rotate-3"
                  />
                </div>
              </SlideIn>
            </div>

            <div className="md:w-96 mt-12 relative">
              <SlideIn delay={0.2}>
                <div className="space-y-8 relative">
                  {/* Abstract Progress Indicator - More Classy */}
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-[#F25623]" />
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full bg-main-text/20"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative group">
                    {/* Subtle Side Accent */}
                    <div className="absolute -left-6 top-0 bottom-0 w-px bg-linear-to-b from-[#F25623] via-[#F25623]/20 to-transparent opacity-50" />

                    <div className="space-y-4">
                      <Typography className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40">
                        // executive_summary
                      </Typography>

                      <Typography className="text-sm md:text-[15px] font-medium leading-relaxed tracking-tight opacity-90">
                        Architecting a new digital frontier for{" "}
                        <span className="text-[#F25623]">
                          PT Kreatif System Indonesia
                        </span>
                        . Blending industrial aesthetics with enterprise-grade
                        performance to redefine corporate presence in the modern
                        web era.
                      </Typography>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* CENTRAL NARRATIVE CARD */}
        <section className="mb-20 flex justify-center">
          <SlideIn direction="up" delay={0.3}>
            <div className="relative group w-full">
              <div className="relative bg-main-bg border border-main-text/10 p-8 md:p-14 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-full md:w-1/3 space-y-4">
                    <Typography className="text-[10px] font-mono font-bold text-[#F25623] tracking-[0.5em] uppercase">
                      // phase_01: rebirth
                    </Typography>
                    <Typography
                      variant="h2"
                      className="text-4xl font-black lowercase leading-[0.9] tracking-tighter"
                    >
                      The <br /> Overhaul.
                    </Typography>
                    <div className="h-1 w-12 bg-[#F25623]" />
                  </div>

                  <div className="w-full md:w-2/3 space-y-6">
                    <Typography className="text-sm md:text-base font-medium opacity-80 leading-relaxed italic">
                      "This wasn't just a UI update; it was a complete
                      structural reconstruction."
                    </Typography>

                    <Typography className="text-sm opacity-60 leading-relaxed">
                      I spearheaded the{" "}
                      <span className="text-main-text font-bold">
                        redesign and rebuild
                      </span>{" "}
                      of the PT Kreatif System Indonesia web ecosystem from the
                      ground up. By shifting to a modern stack, I eliminated
                      legacy debt and established an edgy, enterprise-grade
                      aesthetic.
                    </Typography>

                    <div className="p-5 bg-main-text/5 border-l-2 border-[#F25623] space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F25623]" />
                        <Typography className="text-[10px] font-mono font-black uppercase">
                          Intelligence_Layer_Active
                        </Typography>
                      </div>
                      <Typography className="text-xs opacity-70">
                        Integrated{" "}
                        <span className="text-[#F25623] font-bold">
                          Groq AI
                        </span>{" "}
                        as a high-speed LPU-powered chatbot. It handles general
                        inquiries regarding company services and corporate
                        identity with sub-second response times, bridging the
                        gap between automation and human-like interaction.
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Bottom stats/tags */}
                <div className="mt-12 pt-8 border-t border-main-text/5 flex flex-wrap gap-6 items-center justify-between">
                  <div className="flex gap-4">
                    <span className="text-[9px] font-mono opacity-30 tracking-widest">
                      [ NEXT.JS ]
                    </span>
                    <span className="text-[9px] font-mono opacity-30 tracking-widest">
                      [ GROQ ]
                    </span>
                    <span className="text-[9px] font-mono opacity-30 tracking-widest">
                      [ FRAMER_MOTION ]
                    </span>
                  </div>
                  <Typography className="text-[10px] font-mono font-bold text-[#00CC66]">
                    STATUS: ACTIVE
                  </Typography>
                </div>
              </div>
            </div>
          </SlideIn>
        </section>

        {/* METRICS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
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
            <div>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-black lowercase tracking-tighter"
              >
                <span className="italic underline decoration-[#F25623]/30">
                  preview.
                </span>
              </Typography>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
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
                  PREVIOUS
                </button>
                <button
                  onClick={nextSlide}
                  className="flex-1 md:flex-none px-6 py-3 border border-main-text/20 hover:bg-main-text hover:text-main-bg transition-all font-mono text-[10px] font-bold tracking-tighter"
                >
                  NEXT
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
