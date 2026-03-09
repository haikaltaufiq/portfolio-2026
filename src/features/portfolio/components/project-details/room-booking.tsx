"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

type RoomBookingDetailProps = {
  project: ProjectDetail;
};

const SYSTEM_CAPABILITIES = [
  {
    label: "Conflict_Check",
    status: "Real-time",
    detail: "Automated double-booking prevention logic",
  },
  {
    label: "Resource_Mgmt",
    status: "Active",
    detail: "Equipment & capacity tracking per room",
  },
  {
    label: "User_Roles",
    status: "Admin/User",
    detail: "Hierarchical booking approval workflow",
  },
  {
    label: "Analytics",
    status: "Enabled",
    detail: "Usage frequency & peak hour reporting",
  },
];

export default function RoomBookingDetail({ project }: RoomBookingDetailProps) {
  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.02] bg-[url('/blueprint-grid.svg')] bg-center bg-fixed" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HEADER - OPERATIONAL DASHBOARD STYLE */}
        <section className="relative mb-32">
          <SlideIn direction="up">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono border-l-4 border-[#F25623] pl-2 opacity-50 uppercase tracking-[0.2em]">
                  Resource_Management_System_v2
                </span>
                <div className="h-px flex-1 bg-main-text/10" />
              </div>
              <Typography
                variant="h1"
                className="font-poppins font-black text-[10vw] md:text-[8vw] leading-[0.85] lowercase tracking-tighter"
              >
                room <span className="text-[#F25623]">booking</span> <br />
                central.
              </Typography>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t-2 border-main-text pt-8">
            <p className="text-xs font-bold leading-relaxed opacity-60 max-w-xs lowercase italic">
              "Eliminating administrative friction through a centralized
              scheduling engine. Optimized for high-traffic office
              environments."
            </p>
            <div className="md:col-span-2 flex justify-end gap-12">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase opacity-30">
                  Stack
                </p>
                <p className="text-sm font-bold">Next.js + Supabase</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase opacity-30">
                  Deploy
                </p>
                <p className="text-sm font-bold">Vercel Edge</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: STATUS MONITORING (GRID STYLE) */}
        <section className="mb-40 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SYSTEM_CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="group p-6 border border-main-text/10 bg-main-text/2 hover:bg-[#F25623] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[9px] font-mono group-hover:text-white/60 uppercase">
                    [{cap.label}]
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#F25623] group-hover:bg-white group-hover:text-[#F25623] text-white text-[8px] font-black uppercase">
                    {cap.status}
                  </span>
                </div>
                <p className="text-[11px] font-bold opacity-50 group-hover:text-white group-hover:opacity-100 uppercase tracking-wider">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: INTERFACE PREVIEW - CALENDAR LOGIC */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-6 -right-6 text-[12vw] font-black opacity-[0.03] select-none pointer-events-none">
              RESERVE
            </div>

            <div className="relative aspect-video bg-[#0d0d0d] border border-main-text/20 overflow-hidden shadow-2xl group">
              {/* Mock UI: Scheduling Grid */}
              <div className="absolute inset-0 p-8 flex flex-col gap-4">
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 border border-white/10 bg-white/5"
                    />
                  ))}
                </div>
                <div className="flex-1 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-1/4 bottom-0 w-px bg-[#F25623]/40" />
                  <div className="absolute top-1/2 left-1/4 right-10 h-10 bg-[#F25623] opacity-80 flex items-center px-4 text-[10px] font-black text-white">
                    OCCUPIED: Sprint Planning
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-scanlines opacity-[0.05] pointer-events-none" />
            </div>
            <div className="mt-4 flex justify-between text-[9px] font-mono opacity-40">
              <span>UI_MODE: DARK_DASHBOARD</span>
              <span>REF_ID: ROOM_BOOK_001</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <Typography
              variant="h2"
              className="text-5xl font-black lowercase tracking-tighter leading-none"
            >
              Frictionless <br />{" "}
              <span className="text-[#F25623]">Scheduling.</span>
            </Typography>
            <p className="text-sm font-medium opacity-70 leading-relaxed">
              Kita fokus di **Conflict Prevention**. Gak boleh ada dua orang
              booking ruangan yang sama di detik yang sama. Sistem pake
              *pessimistic locking* di level database buat mastiin integritas
              data jadwal bjir.
            </p>
            <div className="pt-6 space-y-4">
              <div className="h-px w-full bg-main-text/10" />
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="opacity-40 uppercase">Sync Speed</span>
                <span className="text-[#F25623] font-black">FAST_ASYNC</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="opacity-40 uppercase">Integration</span>
                <span className="text-[#F25623] font-black">
                  GOOGLE_CAL_READY
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DATABASE & REASONING */}
        <section className="border-t border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // implementation_logic
              </Typography>
              <div className="space-y-6 text-sm font-medium opacity-70 leading-relaxed">
                {project.content.map((p, i) => (
                  <p
                    key={i}
                    className="border-l-2 border-main-text/10 pl-6 hover:border-[#F25623] transition-colors"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-main-text text-main-bg p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-6 bg-main-bg/20" />
                  ))}
                </div>
                <Typography className="text-2xl font-black uppercase tracking-tighter leading-none">
                  Schema <br /> Optimization.
                </Typography>
                <p className="text-[10px] font-bold opacity-60 uppercase leading-loose">
                  Relasi antara User, Room, dan Booking di-optimize lewat
                  indexing yang tepat. Query kenceng, user seneng, admin tenang
                  bjir.
                </p>
              </div>

              <div className="space-y-2">
                <div className="h-px w-full bg-main-bg/20" />
                <p className="text-[9px] font-mono opacity-40">
                  © 2026 // ROOM_ENGINE_CORE
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-40 border-t border-main-text/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center opacity-20">
          <span className="text-[9px] font-black uppercase tracking-[0.5em]">
            SYSTEM_END
          </span>
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 border border-main-text rotate-45"
              />
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
