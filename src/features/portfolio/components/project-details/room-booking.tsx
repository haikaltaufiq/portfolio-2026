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

export default function RoomBookingDetail({ project }: RoomBookingDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    "/assets/room-booking/dashboard.png",
    "/assets/room-booking/apply-room.png",
    "/assets/room-booking/apply-status.png",
    "/assets/room-booking/data-user.png",
    "/assets/room-booking/manage-room.png",
    "/assets/room-booking/reports.png",
    "/assets/room-booking/room-list.png",
  ];

  const features = [
    {
      id: "01",
      title: "Transparency",
      desc: "Real-time visibility of room availability and schedules.",
    },
    {
      id: "02",
      title: "Conflict-Free",
      desc: "Hardened logic to prevent double-booking or scheduling overlaps.",
    },
    {
      id: "03",
      title: "Monitoring",
      desc: "Centralized dashboard for tracking room usage and user activity.",
    },
    {
      id: "04",
      title: "Digitalization",
      desc: "Structured administrative workflow replacing manual processes.",
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );

  return (
    <main className="min-h-screen text-[#e0e0e0] pt-24 pb-10 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* BACKGROUND ARCHITECTURE */}
      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(242,86,35,0.03),transparent)]" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* HERO SECTION */}
        <section className="relative mb-32 border-b border-white/5 pb-20">
          <SlideIn direction="up">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px] bg-[#F25623]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                  Freelance_Project
                </span>
              </div>
              <Typography
                variant="h1"
                className="font-black text-[12vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
              >
                centralized <br />
                <span className="text-[#F25623]">booking</span> system.
              </Typography>
              <p className="max-w-xl text-sm opacity-50 font-medium leading-relaxed mt-8">
                A professional-grade solution built with **Laravel** to digitize
                room management. Focusing on transparency, real-time monitoring,
                and structured scheduling to eliminate administrative friction.
              </p>
            </div>
          </SlideIn>
        </section>

        {/* FEATURE GRID  */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 mb-40">
          {features.map((item, i) => (
            <SlideIn key={item.id} delay={i * 0.1}>
              <div className="relative p-10 h-full border-r border-b border-white/10 hover:bg-[#F25623]/5 transition-all duration-500 group overflow-hidden">
                {/* CORNER DECORATION - Only visible on hover */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#F25623] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* INDEX INDICATOR */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] font-mono text-[#F25623] px-2 py-0.5 border border-[#F25623]/30 bg-[#F25623]/5">
                    {item.id}
                  </span>
                  <div className="h-px w-8 bg-white/10 group-hover:w-12 group-hover:bg-[#F25623]/50 transition-all duration-500" />
                </div>

                {/* CONTENT */}
                <div className="space-y-4">
                  <Typography className="text-2xl font-black uppercase leading-none tracking-tighter group-hover:text-[#F25623] transition-colors duration-300">
                    {item.title}
                  </Typography>

                  <p className="text-[9px] opacity-40 leading-relaxed uppercase font-semibold tracking-widest group-hover:opacity-80 transition-opacity">
                    {item.desc}
                  </p>
                </div>

                {/* BOTTOM DECOR */}
                <div className="absolute bottom-4 right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Typography className="text-4xl font-black italic select-none">
                    {item.id}
                  </Typography>
                </div>
              </div>
            </SlideIn>
          ))}
        </section>

        {/* INTERFACE SHOWCASE */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                interface_audit
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-black lowercase tracking-tighter"
              >
                System <span className="italic">Modules.</span>
              </Typography>
            </div>

            <div className="flex gap-4 border-b border-white/10 pb-2 w-full md:w-auto">
              <button
                onClick={prevSlide}
                className="text-[10px] font-black hover:text-[#F25623] transition-colors"
              >
                / PREV
              </button>
              <button
                onClick={nextSlide}
                className="text-[10px] font-black hover:text-[#F25623] transition-colors"
              >
                / NEXT
              </button>
              <div className="flex-1 md:hidden" />
              <span className="text-[10px] font-mono opacity-30">
                {currentIndex + 1} OF {screenshots.length}
              </span>
            </div>
          </div>

          <div className="relative group">
            {/* FRAME DECORATION */}
            <div className="absolute -inset-2 border border-white/5 -z-10 group-hover:border-[#F25623]/20 transition-colors duration-500" />

            <div className="relative aspect-video bg-[#0a0a0a] border border-white/10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="w-full h-full"
                >
                  <div className="w-full h-full overflow-y-auto custom-scrollbar pt-10 px-2">
                    <Image
                      src={screenshots[currentIndex]}
                      alt="System Module Preview"
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* WINDOW CONTROLS */}
              <div className="absolute top-0 left-0 w-full h-10 bg-[#0d0d0d] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-white/10 rounded-full" />
                  <div className="w-2 h-2 bg-white/10 rounded-full" />
                  <div className="w-2 h-2 bg-white/10 rounded-full" />
                </div>
                <span className="text-[9px] font-mono opacity-30 tracking-[0.2em] uppercase">
                  {screenshots[currentIndex]?.split("/").pop()}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK LOGIC */}
        <section className="mb-20 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-40">
          <div className="font-mono text-[10px] tracking-widest uppercase mb-4 md:mb-0">
            Stack: Laravel // MySQL
          </div>
        </section>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f25623;
        }
      `}</style>
    </main>
  );
}
