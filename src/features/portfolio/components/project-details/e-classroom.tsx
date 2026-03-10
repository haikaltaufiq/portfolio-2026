"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Image from "next/image";

type EClassroomDetailProps = {
  project: ProjectDetail;
};

const subTextStyle =
  "text-[10px] font-mono font-black uppercase tracking-[0.3em]";

const RedactedLayer = ({ text }: { text: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative flex items-center group/redacted cursor-help"
  >
    <Typography
      className={`${subTextStyle} transition-colors duration-300 group-hover/redacted:text-[#F25623]`}
    >
      {text}
    </Typography>
    <motion.div
      initial={{ opacity: 0.4 }}
      whileHover={{ opacity: 0.8, x: [0, -2, 2, 0] }}
      transition={{ duration: 0.2, repeat: Infinity }}
      className="absolute inset-0 flex items-center text-[24px] font-redacted text-[#F25623] mix-blend-plus-lighter pointer-events-none tracking-normal whitespace-nowrap"
    >
      {text}
    </motion.div>
  </motion.div>
);

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
      {/* Brutalist Grid Pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* SECTION 1: HEADER - INDUSTRIAL STYLE */}
        <section className="relative mb-32 border-b-2 border-main-text/10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <SlideIn direction="up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-0.5 bg-[#F25623]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F25623]">
                    Freelance Project // Education Tech
                  </span>
                </div>
                <Typography
                  variant="h1"
                  className="font-black text-[11vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
                >
                  e-classroom <br />
                  <span className="text-main-text opacity-20 italic">
                    management.
                  </span>
                </Typography>
              </SlideIn>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 border-l-4 border-[#F25623] bg-main-text/2 space-y-4">
                <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  // delivery_metrics
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-black">Mobile</p>
                    <p className="text-[9px] opacity-50 uppercase">
                      Primary Platform
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">JWT</p>
                    <p className="text-[9px] opacity-50 uppercase">
                      Secured Auth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURE GRID */}
        <section className="mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-main-text/20">
            {CLASS_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="p-8 border-r border-b border-main-text/20 hover:bg-[#F25623] hover:text-white transition-all duration-300 group"
              >
                <span className="text-[10px] font-mono font-black text-[#F25623] group-hover:text-white mb-4 block">
                  SYSTEM_CORE_{feature.id}
                </span>
                <Typography className="text-xl font-black lowercase mb-2">
                  {feature.title}
                </Typography>
                <p className="text-[10px] font-bold opacity-50 uppercase tracking-wider group-hover:opacity-100 leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: MOBILE UI SHOWCASE - STAGGERED TRIPLE STACK */}
        <section className="space-y-24 mb-60">
          <div className="flex justify-between items-end border-b border-main-text/10 pb-6">
            <Typography variant="h3" className="text-3xl font-black lowercase">
              interface_preview
            </Typography>
            <div className="flex items-center gap-6">
              <RedactedLayer text="Confidential_System_01" />
              <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
                Mobile Deployment v1.0
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <Typography
                variant="h3"
                className="text-6xl font-black lowercase leading-[0.8] tracking-tighter"
              >
                clean, fast, <br />{" "}
                <span className="text-[#F25623]">asynchronous.</span>
              </Typography>
              <div className="h-1 w-20 bg-[#F25623]" />
              <p className="text-sm opacity-60 leading-relaxed font-medium italic max-w-sm">
                Focused on accessibility. No fluff, just core academic modules
                delivered through a brutalist-minimalist interface. Optimized
                for low-latency interactions.
              </p>
            </div>

            <div className="lg:col-span-7 relative h-175 flex items-center justify-center lg:justify-end pr-0 lg:pr-12">
              {/* SLOT 1: Back (ClassApp01) */}
              <div className="relative z-10 group -mr-20 -mt-20 scale-90 opacity-60 hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 border-2 border-main-text translate-x-4 translate-y-4 -z-10" />
                <div className="w-52 lg:w-60 aspect-9/19 bg-black border-4 border-main-text relative overflow-hidden">
                  <Image
                    src="/assets/classroom/ClassApp01.png"
                    alt="UI 1"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                </div>
              </div>

              {/* SLOT 2: Middle (ClassApp02) */}
              <div className="relative z-20 group">
                <div className="absolute inset-0 border-2 border-main-text translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="w-56 lg:w-64 aspect-9/19 bg-black border-4 border-main-text relative overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/classroom/ClassApp02.png"
                    alt="UI 2"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-30 bg-main-text text-main-bg px-2 py-0.5 text-[8px] font-black">
                    DASHBOARD
                  </div>
                </div>
              </div>

              {/* SLOT 3: Front (ClassApp03) */}
              <div className="relative z-30 -ml-28 mt-48 group">
                <div className="absolute inset-0 border-2 border-[#F25623] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="w-56 lg:w-64 aspect-9/19 bg-black border-4 border-main-text relative overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/classroom/ClassApp03.png"
                    alt="UI 3"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 z-30 bg-[#F25623] text-white px-2 py-0.5 text-[8px] font-black">
                    MATERIAL_HUB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ASYMMETRICAL FOOTER SHOWCASE (Hero + Screens 04 & 05) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-40">
          <div className="lg:col-span-8">
            <div className="relative aspect-video border-2 border-main-text overflow-hidden group">
              <Image
                src="/assets/classroom/class.webp"
                alt="Hero"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-main-bg/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <RedactedLayer text="Environment_Scan_2026" />
                <Typography className="text-3xl font-black italic lowercase tracking-tighter mt-4">
                  Classroom_Landscape
                </Typography>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex gap-6 justify-end lg:pt-20">
            <div className="relative group">
              <div className="w-36 lg:w-44 aspect-9/19 border-2 border-main-text overflow-hidden bg-[#1a1a1a]">
                <Image
                  src="/assets/classroom/ClassApp04.png"
                  alt="UI 4"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-[8px] font-mono opacity-30 mt-4 uppercase tracking-widest text-right italic">
                log_asset_04
              </p>
            </div>
            <div className="relative group -mt-10">
              <div className="w-36 lg:w-44 aspect-9/19 border-2 border-[#F25623] overflow-hidden bg-[#1a1a1a] shadow-[10px_10px_0px_#F25623]/10">
                <Image
                  src="/assets/classroom/ClassApp05.png"
                  alt="UI 5"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-[8px] font-mono text-[#F25623] mt-4 uppercase tracking-widest text-right font-black">
                log_asset_05
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNICAL SPECS */}
        <section className="border-t border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // implementation_logs
              </Typography>
              <div className="space-y-4">
                {project.content.map((p, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 border-b border-main-text/5 pb-4 hover:border-[#F25623] transition-colors"
                  >
                    <span className="text-[10px] font-black opacity-20">
                      0{i + 1}
                    </span>
                    <p className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-main-text text-main-bg p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Typography className="text-[15vw] font-black">RBAC</Typography>
              </div>
              <div className="space-y-6 relative z-10">
                <Typography className="text-3xl font-black uppercase tracking-tighter leading-none italic">
                  Security & <br /> Data Integrity.
                </Typography>
                <p className="text-[11px] font-bold opacity-70 uppercase leading-relaxed max-w-xs">
                  Setiap request diproteksi JWT dan Role-Based Access Control.
                  Murid gak bisa intip kunci jawaban, dan guru punya kontrol
                  penuh.
                </p>
              </div>
              <div className="mt-12 flex justify-between items-end relative z-10 border-t border-main-bg/20 pt-6">
                <div className="text-[9px] font-mono opacity-50 uppercase">
                  Node_Env: Production <br />
                  Encryption: AES-256
                </div>
                <div className="px-4 py-2 bg-[#F25623] text-white text-[10px] font-black uppercase italic shadow-[4px_4px_0px_white]">
                  Verified_Freelance_Unit
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-40 border-t border-main-text/10 py-10 flex justify-between items-center opacity-30 px-6">
        <Typography className="text-[9px] font-black uppercase tracking-[0.4em]">
          E-Classroom Deployment Unit // 2026
        </Typography>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-main-text rotate-45" />
          ))}
        </div>
      </footer>
    </main>
  );
}
