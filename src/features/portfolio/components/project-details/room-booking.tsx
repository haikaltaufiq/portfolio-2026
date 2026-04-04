"use client";

import { useState } from "react";
import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion, AnimatePresence } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Image from "next/image";

type RoomBookingDetailProps = {
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

export default function RoomBookingDetail({ project }: RoomBookingDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Asset sinkron sesuai image_874166.png
  const screenshots = [
    "/assets/room-booking/dashboard.png",
    "/assets/room-booking/apply-room.png",
    "/assets/room-booking/apply-status.png",
    "/assets/room-booking/data-user.png",
    "/assets/room-booking/manage-room.png",
    "/assets/room-booking/reports.png",
    "/assets/room-booking/room-list.png",
  ];

  const stats = [
    { label: "Query_Lat", before: "120ms", after: "18ms", value: 95 },
    { label: "Sync_Reliability", before: "88%", after: "100%", value: 100 },
    { label: "Conflict_Res", before: "Manual", after: "Auto", value: 92 },
    { label: "LCP_Speed", before: "2.4s", after: "0.8s", value: 98 },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* Background Elements - Conserved dari theme kreasii */}
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
                    className="font-poppins font-black text-[10vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
                  >
                    room <span className="text-[#F25623]">booking.</span> <br />
                    centralized.
                  </Typography>
                  <RedactedOverlay
                    text="STATUS: DEPLOYED_STABLE_V2"
                    className="text-[3vw] -top-8 left-[15%] opacity-20 rotate-2"
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
                    "Eliminating administrative friction with a hardened
                    scheduling engine. Built for concurrency, optimized for
                    zero-conflict booking."
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
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#00CC66]">
                    {stat.after}
                  </span>
                  <span className="text-[10px] opacity-30 font-mono line-through">
                    {stat.before}
                  </span>
                </div>
                <div className="mt-4 h-0.5 w-full bg-main-text/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
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
                resource_visual_check
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-black lowercase tracking-tighter"
              >
                system{" "}
                <span className="italic underline decoration-[#F25623]/30">
                  interface.
                </span>
              </Typography>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="px-6 py-3 border border-main-text/20 hover:bg-main-text hover:text-main-bg transition-all font-mono text-[10px] font-bold tracking-tighter"
              >
                PREV
              </button>
              <button
                onClick={nextSlide}
                className="px-6 py-3 border border-main-text/20 hover:bg-main-text hover:text-main-bg transition-all font-mono text-[10px] font-bold tracking-tighter"
              >
                NEXT
              </button>
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
              <Typography className="text-[10px] font-mono opacity-50 tracking-widest uppercase truncate max-w-50">
                {screenshots[currentIndex]?.split("/").pop()}
              </Typography>
            </div>

            <AnimatePresence mode="wait">
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
                    alt="Room Booking Preview"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>
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
                system <br /> <span className="text-[#F25623]">specs.</span>
              </Typography>
              <div className="space-y-4 font-mono text-[10px] font-bold uppercase relative z-10">
                <div className="flex justify-between border-b border-main-bg/10 pb-2">
                  <span className="opacity-40">stack</span>
                  <span>next.js / supabase</span>
                </div>
                <div className="flex justify-between border-b border-main-bg/10 pb-2">
                  <span className="opacity-40">concurrency</span>
                  <span>pessimistic_lock</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-40">infra</span>
                  <span className="text-[#00CC66]">vercel_edge</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-40 border-t border-main-text/10 py-10 bg-main-text/2">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 italic">
            © 2026 — RESOURCE_CORE // SYSTEM_OVERHAUL
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
