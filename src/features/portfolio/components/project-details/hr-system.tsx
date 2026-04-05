"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import { useEffect, useRef } from "react";

type HrSystemDetailProps = {
  project: ProjectDetail;
};

const MODULES = [
  {
    id: "M1",
    title: "Attendance",
    detail: "Real-time location tracking & geofencing",
  },
  {
    id: "M2",
    title: "Leave Management",
    detail: "Request, quota tracking & approval flow",
  },
  { id: "M3", title: "Overtime", detail: "Calculation & management logs" },
  {
    id: "M4",
    title: "Payroll System",
    detail: "Automated salary slips & tax components",
  },
  {
    id: "M5",
    title: "Task Management",
    detail: "Internal task distribution & monitoring",
  },
  {
    id: "M6",
    title: "Employee Database",
    detail: "Centralized secure personnel records",
  },
  {
    id: "M7",
    title: "Smart Reminder",
    detail: "Automated notification for contracts & events",
  },
  {
    id: "M8",
    title: "Role Base Access",
    detail: "Role based access for each role",
  },
];

export default function HrSystemDetail({ project }: HrSystemDetailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVidRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
    }
    if (mobileVidRef.current) {
      mobileVidRef.current.playbackRate = 4.0;
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-32 pb-40 px-4">
      {/* SECTION 1: HERO & STATS */}
      <SlideIn>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          <div className="absolute top-15 -left-1 text-[16vw] font-black opacity-[0.02] select-none tracking-tight leading-55 pointer-events-none -rotate-2">
            HUMAN RESOURCE
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 border border-[#F25623] text-[#F25623] text-[10px] font-black uppercase tracking-widest">
              Internal System [PT KSI]
            </div>
            <Typography
              variant="h2"
              className="text-5xl md:text-6xl font-black lowercase tracking-tighter leading-[0.9]"
            >
              human resource <br />{" "}
              <span className="text-[#F25623]">information system.</span>
            </Typography>
            <p className="text-sm opacity-60 leading-relaxed max-w-sm font-medium">
              An enterprise-grade internal solution developed to streamline
              workforce management at PT Kreatif System Indonesia, ensuring
              operational efficiency and data transparency.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Module Count", value: "07" },
              { label: "Auth Levels", value: "03" },
              { label: "Status", value: "PRIVATE DEPLOYMENT", isText: true },
            ].map((stat, i) => (
              <div
                key={i}
                className="border border-main-text/10 p-8 flex flex-col justify-between group hover:bg-[#F25623] transition-all duration-500"
              >
                <span className="text-[10px] font-black opacity-40 group-hover:text-white uppercase tracking-widest">
                  {stat.label}
                </span>
                <p
                  className={`${stat.isText ? "text-2xl" : "text-6xl"} font-black group-hover:text-white transition-colors`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SlideIn>

      {/* SECTION 3: SYSTEM MODULES GRID */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <Typography
            variant="h3"
            className="text-3xl font-black lowercase tracking-tighter"
          >
            Core Modules.
          </Typography>
          <div className="h-px flex-1 bg-main-text/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-main-text/20">
          {MODULES.map((module) => (
            <div
              key={module.id}
              className="p-8 border-r border-b border-main-text/20 hover:bg-[#F25623]/5 transition-colors group"
            >
              <span className="text-[#F25623] font-mono font-black text-xs mb-4 block group-hover:translate-x-1 transition-transform">
                [{module.id}]
              </span>
              <Typography className="text-xl font-black lowercase mb-2">
                {module.title}
              </Typography>
              <p className="text-[11px] font-bold opacity-50 uppercase tracking-wider leading-relaxed">
                {module.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: ACADEMIC VALIDATION (SINTA 5) */}

      <section className="relative py-10 border-y border-main-text/10 bg-main-text/2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#F25623] text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter">
                SINTA 5 Indexed
              </span>
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                - Applied Multimedia Research Publication
              </span>
            </div>

            <Typography className="text-3xl font-black lowercase tracking-tight leading-none">
              Optimizing HRIS through <br />
              <span className="text-[#F25623]">Consistent UI/UX Design.</span>
            </Typography>

            <div className="space-y-4 text-sm leading-relaxed opacity-80 font-medium">
              <p>
                This project was conducted as a formal study to address
                operational fragmentation at{" "}
                <strong>PT Kreatif System Indonesia</strong>. By integrating
                fragmented fingerprint attendance data into a unified system,
                the research focused on implementing
                <strong> Material Design principles</strong> to reduce cognitive
                load and human error risk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-main-text/5">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#F25623]">
                    Success Rate (TCR)
                  </p>
                  <p className="text-xl font-black italic">93.45%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#F25623]">
                    System Usability (SUS)
                  </p>
                  <p className="text-xl font-black italic">74.42</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#F25623]">
                    Efficiency (TBE)
                  </p>
                  <p className="text-xl font-black italic">
                    0.1258{" "}
                    <span className="text-[8px] font-semibold opacity-50">
                      goals/s
                    </span>
                  </p>
                </div>
              </div>

              <p className="italic text-xs opacity-60 pt-4 border-t border-main-text/5">
                Results validated that consistent interface design and iterative
                prototyping significantly enhance HRIS effectiveness and user
                acceptance, as published in polibatam peer-reviewed journal
                record.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end lg:sticky lg:top-24">
            <motion.a
              href="https://jurnal.polibatam.ac.id/index.php/JAMN/article/view/12101/3310" // Ganti link aslinya di sini
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-6 bg-main-text text-main-bg px-8 py-6 border-2 border-main-text hover:bg-transparent hover:text-main-text transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase opacity-50 group-hover:opacity-100 italic">
                  Reference: SINTA 5 Record
                </span>
                <span className="text-xl font-black uppercase tracking-tighter">
                  View Full Journal
                </span>
              </div>
              <div className="w-12 h-12 border border-main-bg/30 flex items-center justify-center group-hover:border-[#F25623] group-hover:bg-[#F25623] group-hover:text-white transition-all">
                →
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SECTION 4: SHOWCASE (WEB & MOBILE) */}
      <section className="space-y-24">
        {/* WEB SHOWCASE */}
        <div className="space-y-8">
          <div className="flex justify-between items-end border-b border-main-text/10 pb-6">
            <Typography variant="h3" className="text-3xl font-black lowercase">
              preview
            </Typography>
            <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
              demo Application
            </span>
          </div>

          <div className="relative aspect-video w-full bg-[#1a1a1a] border border-main-text/20 overflow-hidden group">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out z-0"
            >
              <source src="/assets/hr/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

            <div className="absolute top-4 left-4 z-20 bg-main-text text-main-bg px-3 py-1 text-[9px] font-black uppercase tracking-widest">
              Main Control Center
            </div>
          </div>
        </div>

        {/* MOBILE SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Typography
                variant="h3"
                className="text-5xl font-black lowercase leading-[0.8] tracking-tighter"
              >
                Mobile <br /> <span className="text-[#F25623]">Mobility.</span>
              </Typography>
              <div className="h-1 w-20 bg-[#F25623]" /> {/* Accent line */}
            </div>

            <p className="text-sm opacity-60 leading-relaxed font-medium italic max-w-md">
              Focused on field employee accessibility, featuring low-latency
              attendance check-ins and real-time push notifications for task
              assignments.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-4 border-[#F25623] pl-6 py-2 bg-main-text/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#F25623]">
                  Tracking
                </p>
                <p className="text-xs font-mono mt-1 opacity-80">
                  GPS & Geofencing
                </p>
              </div>
              <div className="border-l-4 border-main-text/20 pl-6 py-2">
                <p className="text-[10px] font-black uppercase tracking-widest">
                  Payroll
                </p>
                <p className="text-xs font-mono mt-1 opacity-80">
                  E-Slip Access
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center pr-8">
            {/* BACKGROUND DECORATION (Brutalist Grid) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border border-main-text/5 pointer-events-none -rotate-3 z-0" />

            {/* SLOT 1: VIDEO MOBILE (Auth) */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center pr-12 h-150">
              {/* SLOT 1: LANDING PAGE SS (Sekarang di Belakang/Atas) */}
              <div className="relative z-20 group">
                {/* Offset Border Decoration */}
                <div className="absolute inset-0 border-2 border-main-text translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

                <div className="w-56 lg:w-64 aspect-9/19 bg-[#1a1a1a] border-4 border-main-text relative overflow-hidden shadow-2xl">
                  <img
                    src="/assets/hr/mobile-landing.png"
                    alt="Mobile Landing"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
                    <div className="absolute inset-0 bg-scanlines animate-scan" />
                    <div className="absolute inset-0 bg-noise opacity-20" />
                  </div>

                  <div className="absolute bottom-4 left-4 z-30 bg-main-text text-main-bg px-2 py-1 text-[9px] font-black uppercase">
                    Landing Page
                  </div>
                </div>
              </div>

              {/* SLOT 2: VIDEO MOBILE (Sekarang di Depan/Bawah) */}
              <div className="relative z-30 -ml-24 mt-40 group">
                {/* Offset Border Decoration */}
                <div className="absolute inset-0 border-2 border-[#F25623] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

                <div className="w-56 lg:w-64 aspect-9/19 bg-[#1a1a1a] border-4 border-main-text relative overflow-hidden shadow-2xl">
                  <video
                    ref={mobileVidRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  >
                    <source src="/assets/hr/vid-mobile.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
                    <div className="absolute inset-0 bg-scanlines animate-scan" />
                    <div className="absolute inset-0 bg-noise opacity-20" />
                  </div>

                  <div className="absolute bottom-4 left-4 z-30 bg-[#F25623] text-white px-2 py-1 text-[9px] font-black uppercase">
                    Mobile Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-24 border-t border-main-text/10 flex flex-col md:flex-row justify-between gap-8 opacity-40">
        <div className="font-mono text-[9px] uppercase tracking-widest space-y-1">
          <p>Project: HR Information System</p>
          <p>Client: PT Kreatif System Indonesia</p>
        </div>
        <div className="text-[12px] font-semibold uppercase tracking-tighter">
          Documentation - 2026.
        </div>
      </footer>
    </div>
  );
}
