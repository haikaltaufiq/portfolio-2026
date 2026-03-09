"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

type EClassroomDetailProps = {
  project: ProjectDetail;
};

const CLASS_FEATURES = [
  {
    id: "01",
    title: "Material Hub",
    detail: "Centralized document & video distribution system",
  },
  {
    id: "02",
    title: "Assignment Flow",
    detail: "Submission tracking with deadline enforcement",
  },
  {
    id: "03",
    title: "Digital Presence",
    detail: "Real-time attendance with geolocation validation",
  },
  {
    id: "04",
    title: "Grade Ledger",
    detail: "Transparent academic record tracking",
  },
];

export default function EClassroomDetail({ project }: EClassroomDetailProps) {
  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HEADER - ARCHIVE STYLE */}
        <section className="relative mb-32 border-b-2 border-main-text/10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <SlideIn direction="up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-0.5 bg-[#F25623]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F25623]">
                    Academic Management System
                  </span>
                </div>
                <Typography
                  variant="h1"
                  className="font-poppins font-black text-[11vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
                >
                  e-classroom <br />
                  <span className="text-main-text opacity-20">platform.</span>
                </Typography>
              </SlideIn>
            </div>
            <div className="lg:col-span-4">
              <div className="p-6 border border-main-text/10 bg-main-text/2 space-y-4">
                <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  // project_objective
                </p>
                <Typography className="text-xs font-bold leading-relaxed opacity-80">
                  Streamlining classroom interactions through a mobile-first
                  approach. Built to bridge the gap between material
                  distribution and student engagement.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SYSTEM ARCHITECTURE (GRID) */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-main-text/20">
            {CLASS_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="p-8 border-r border-b border-main-text/20 hover:bg-[#F25623] hover:text-white transition-all duration-300 group"
              >
                <span className="text-[40px] font-black opacity-10 group-hover:opacity-30 mb-4 block">
                  {feature.id}
                </span>
                <Typography className="text-xl font-black lowercase mb-2">
                  {feature.title}
                </Typography>
                <p className="text-[10px] font-bold opacity-50 uppercase tracking-wider group-hover:opacity-100">
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: MOBILE UI SHOWCASE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-6 relative flex justify-center">
            {/* STACKED MOBILE UI EFFECT */}
            <div className="relative w-64 aspect-9/19 bg-[#1a1a1a] border-4 border-main-text z-20 overflow-hidden shadow-[20px_20px_0px_#F25623]">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[8vw] font-black rotate-90 select-none">
                CLASS_UI
              </div>
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="h-2 w-full bg-[#F25623]" />
                <div className="h-2 w-4/5 bg-white/20" />
              </div>
            </div>
            <div className="absolute top-10 left-1/2 w-64 aspect-9/19 border-2 border-main-text/20 -z-10 translate-x-4 -rotate-6" />
          </div>

          <div className="lg:col-span-6 space-y-8">
            <Typography
              variant="h2"
              className="text-5xl font-black lowercase tracking-tighter leading-none"
            >
              clean, fast, <br />{" "}
              <span className="text-[#F25623]">asynchronous.</span>
            </Typography>
            <div className="space-y-6 text-sm font-medium opacity-70 leading-relaxed">
              <p>
                Aplikasi ini fokus ke kecepatan akses materi. Gak ada fitur
                sampah, cuma modul inti yang dibutuh guru dan murid. Kita pake
                indexing yang optimal buat handle ribuan file materi tanpa bikin
                server megap-megap bjir.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#F25623]">0%</span>
                  <span className="text-[9px] font-mono uppercase opacity-50">
                    Data Loss
                  </span>
                </div>
                <div className="w-px h-10 bg-main-text/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#F25623]">
                    24/7
                  </span>
                  <span className="text-[9px] font-mono uppercase opacity-50">
                    Sync Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DEVELOPMENT LOGS */}
        <section className="border-t border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // implementation_notes
              </Typography>
              <div className="space-y-6 text-sm font-medium opacity-70 leading-relaxed">
                {project.content.map((p, i) => (
                  <p key={i} className="border-l-2 border-[#F25623] pl-6 py-1">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-main-text text-main-bg p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-4 relative z-10">
                <Typography className="text-xl font-black uppercase tracking-tighter leading-none">
                  Security & <br /> Data Integrity.
                </Typography>
                <p className="text-[10px] font-bold opacity-60 uppercase leading-relaxed">
                  Setiap request diproteksi JWT dan Role-Based Access Control.
                  Murid gak bisa intip kunci jawaban, dan guru punya kontrol
                  penuh atas log aktivitas.
                </p>
              </div>
              <div className="mt-12 flex justify-between items-end relative z-10">
                <div className="text-[9px] font-mono opacity-40 uppercase">
                  Protocol: HTTPS/TLS 1.3 <br />
                  Auth: Firebase/JWT
                </div>
                <div className="px-3 py-1 border border-main-bg/30 text-[9px] font-black uppercase">
                  verified_system
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - SYSTEM TERMINATED STYLE */}
      <footer className="mt-40 border-t border-main-text/10 py-10 flex justify-between items-center opacity-30">
        <Typography className="text-[9px] font-black uppercase tracking-[0.4em]">
          E-Classroom Deployment Unit // 2026
        </Typography>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-main-text" />
          ))}
        </div>
      </footer>
    </main>
  );
}
