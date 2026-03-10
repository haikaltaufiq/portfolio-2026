"use client";

import React, { useState } from "react";
import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion, AnimatePresence } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Image from "next/image";

type CustomerDetailProps = {
  project: ProjectDetail;
};

// Data gambar dari screenshot lo, sesuaikan path-nya bjir
const PROJECT_GALLERY = [
  {
    id: 1,
    src: "/assets/loyalty/login.png",
    label: "loyalty_dashboard",
  },
  {
    id: 2,
    src: "/assets/loyalty/dashboard.png",
    label: "customer_matrix",
  },
  {
    id: 3,
    src: "/assets/loyalty/customer-data.png",
    label: "room_mgmt_sys",
  },
  {
    id: 4,
    src: "/assets/loyalty/product-page.png",
    label: "product_data",
  },
  {
    id: 5,
    src: "/assets/loyalty/order-page.png",
    label: "order_data",
  },
  {
    id: 5,
    src: "/assets/loyalty/user-data.png",
    label: "user_data",
  },
  {
    id: 5,
    src: "/assets/loyalty/log-activity.png",
    label: "log_data",
  },
];

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

const LOYALTY_TIERS = [
  {
    rank: "Diamond",
    requirement: "> 5000 pts",
    reward: "Exclusive Revenue Sharing",
  },
  {
    rank: "Platinum",
    requirement: "2500 - 5000 pts",
    reward: "Priority Service & 15% Rebate",
  },
  {
    rank: "Gold",
    requirement: "1000 - 2500 pts",
    reward: "Free Delivery & 10% Rebate",
  },
  {
    rank: "Silver",
    requirement: "0 - 1000 pts",
    reward: "Point Accumulation Enabled",
  },
];

export default function CustomerDetail({ project }: CustomerDetailProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextSlide = () =>
    setActiveIdx((prev) => (prev + 1) % PROJECT_GALLERY.length);
  const prevSlide = () =>
    setActiveIdx(
      (prev) => (prev - 1 + PROJECT_GALLERY.length) % PROJECT_GALLERY.length,
    );

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-x-hidden selection:bg-[#F25623] relative">
      {/* GLOBAL SYSTEM ARTIFACTS */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* SECTION 1: SYSTEM IDENTIFICATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 pt-16">
          <div className="lg:col-span-7 space-y-8">
            <SlideIn>
              <div className="relative inline-block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#F25623]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F25623]">
                    system_archive_v2.0
                  </span>
                </div>
                <Typography
                  variant="h1"
                  className="text-7xl md:text-[8vw] font-black lowercase tracking-tighter leading-[0.85]"
                >
                  interface <br />
                  <span className="text-[#F25623] italic">showcase.</span>
                </Typography>
              </div>
            </SlideIn>
            <p className="text-lg opacity-60 leading-relaxed max-w-xl font-medium border-l-4 border-[#F25623] pl-6 py-2">
              Visualizing the architecture of high-performance ecosystems. From
              automated IoT feeders to enterprise-grade resource management
              systems bjir.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-main-text/10 border border-main-text/10 self-end">
            {[
              { l: "Projects", v: "04_UNITS" },
              { l: "Format", v: "SS_RAW" },
              { l: "Render", v: "Next_v16" },
              { l: "Loc", v: "BTM_KSI" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-main-bg p-6 flex flex-col justify-between group hover:bg-[#F25623] transition-all duration-500"
              >
                <span className="text-[9px] font-black uppercase opacity-40 group-hover:text-white/60 tracking-widest">
                  {item.l}
                </span>
                <span className="text-xl font-black group-hover:text-white">
                  {item.v}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: BRUTALIST CAROUSEL SHOWCASE */}
        <section className="mb-40 relative">
          <div className="absolute -top-20 left-0 flex items-center gap-4 opacity-20">
            <span className="text-xs font-mono">VIEWPORT_01</span>
            <div className="h-px w-40 bg-main-text" />
          </div>

          <div className="relative h-125 md:h-175 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, scale: 0.9, rotateY: 20 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative w-full h-full bg-[#0a0a0a] border-2 border-main-text shadow-[20px_20px_0px_rgba(242,86,35,1)] overflow-hidden group"
              >
                {/* Image & CRT Effect */}
                <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none z-10" />
                <Image
                  src={PROJECT_GALLERY[activeIdx].src}
                  alt={PROJECT_GALLERY[activeIdx].label}
                  fill
                  className="object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Meta Labels */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-[#F25623] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                    {PROJECT_GALLERY[activeIdx].label}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 z-20 text-right">
                  <p className="text-[10px] font-mono opacity-50 uppercase tracking-tighter">
                    frame_capture: 0{activeIdx + 1} <br />
                    ksi_internal_vault
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute -bottom-10 right-0 flex border-2 border-main-text bg-main-bg z-30">
              <button
                onClick={prevSlide}
                className="p-4 hover:bg-[#F25623] hover:text-white transition-colors border-r-2 border-main-text uppercase font-black text-xs"
              >
                Prev
              </button>
              <button
                onClick={nextSlide}
                className="p-4 hover:bg-[#F25623] hover:text-white transition-colors uppercase font-black text-xs"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: TIERING LOGIC (Tetap dipertahankan dengan gaya lebih tajem) */}
        <section className="mb-40 space-y-12">
          <div className="flex justify-between items-end border-b-2 border-main-text pb-6">
            <Typography
              variant="h3"
              className="text-4xl font-black lowercase tracking-tighter"
            >
              logic_distribution.
            </Typography>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-4 bg-[#F25623]" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOYALTY_TIERS.map((tier, i) => (
              <SlideIn key={tier.rank} delay={i * 0.1}>
                <div className="group p-8 border-2 border-main-text hover:bg-main-text hover:text-main-bg transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute -right-4 -bottom-4 text-7xl font-black opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all uppercase italic">
                    {tier.rank}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#F25623] font-mono text-xs">
                      0{i + 1}
                    </span>
                    <Typography className="text-2xl font-black uppercase tracking-tighter">
                      {tier.rank}
                    </Typography>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <div>
                      <p className="text-[9px] font-black uppercase opacity-40 group-hover:opacity-60">
                        Threshold
                      </p>
                      <p className="font-mono font-bold">{tier.requirement}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase opacity-40 group-hover:opacity-60">
                        Protocol_Reward
                      </p>
                      <p className="font-bold italic text-[#F25623] group-hover:text-white transition-colors">
                        {tier.reward}
                      </p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* SECTION 4: FINAL RECAP */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t-4 border-main-text pt-20">
          <div className="space-y-8">
            <Typography className="text-xs font-black uppercase tracking-[0.5em] text-[#F25623]">
              // engineering_recap
            </Typography>
            <div className="columns-1 md:columns-2 gap-8 text-sm font-medium opacity-70 leading-relaxed italic">
              {project.content.map((p, i) => (
                <p
                  key={i}
                  className="mb-6 first-letter:text-4xl first-letter:font-black first-letter:text-[#F25623]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-end">
            <div className="relative p-10 bg-[#F25623]/5 border-2 border-main-text group">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#F25623]" />
              <p className="text-xs font-bold leading-loose">
                "Developing these modules required a deep understanding of{" "}
                <span className="underline decoration-[#F25623]">
                  asynchronous state management
                </span>{" "}
                and real-time database syncing to ensure a seamless experience
                across all nodes."
              </p>
            </div>
            <Typography className="text-[12vw] font-black leading-none select-none tracking-tighter opacity-5 italic">
              ARCHIVE
            </Typography>
          </div>
        </section>
      </div>

      {/* FOOTER MARQUEE */}
      <footer className="mt-40 border-y-4 border-main-text py-12 bg-[#F25623] overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-[10vw] font-black lowercase text-white leading-none select-none"
        >
          <span>
            analyze • build • deploy • iterate • scale • optimize • analyze •
            build • deploy • iterate • scale • optimize bjir •{" "}
          </span>
          <span>
            analyze • build • deploy • iterate • scale • optimize • analyze •
            build • deploy • iterate • scale • optimize bjir •{" "}
          </span>
        </motion.div>
      </footer>

      <style jsx global>{`
        .bg-scanlines {
          background:
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
            linear-gradient(
              90deg,
              rgba(255, 0, 0, 0.06),
              rgba(0, 255, 0, 0.02),
              rgba(0, 0, 255, 0.06)
            );
          background-size:
            100% 3px,
            3px 100%;
        }
      `}</style>
    </main>
  );
}
