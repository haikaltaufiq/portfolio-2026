"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

type GarbagePaymentDetailProps = {
  project: ProjectDetail;
};

const BASIC_FEATURES = [
  {
    code: "01",
    name: "Citizen Registry",
    desc: "Basic CRUD for resident data per block and house number.",
  },
  {
    code: "02",
    name: "Payment Record",
    desc: "Manual entry for monthly waste collection fees.",
  },
  {
    code: "03",
    name: "Neighborhood Info",
    desc: "Simple bulletin board for RT/neighborhood announcements.",
  },
  {
    code: "04",
    name: "Admin Search",
    desc: "Basic filtering to see who hasn't paid their dues.",
  },
];

export default function GarbagePaymentDetail({
  project,
}: GarbagePaymentDetailProps) {
  return (
    <main className="min-h-screen pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* RAW PAPER TEXTURE BACKGROUND */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-5xl px-6 relative">
        {/* HEADER: THE ORIGIN STORY */}
        <section className="relative mb-24 border-b-2 border-current pb-12">
          <SlideIn direction="up">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black border border-current px-2 py-1 uppercase">
                  Legacy_System
                </span>
              </div>
              <Typography
                variant="h1"
                className="text-[12vw] md:text-[7vw] leading-[0.8] font-black tracking-tighter lowercase"
              >
                waste <span className="text-[#F25623]">manager.</span>
              </Typography>
              <div className="max-w-md">
                <p className="text-xs font-bold leading-relaxed uppercase opacity-60">
                  "My very first code execution. No fancy architecture, just a
                  straightforward Laravel CRUD built to solve real local
                  neighborhood waste billing issues."
                </p>
              </div>
            </div>
          </SlideIn>
        </section>

        {/* FEATURE LIST: THE ESSENTIALS */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-current/10 border border-current/10">
            {BASIC_FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-background p-10 hover:bg-[#F25623]/5 transition-colors group"
              >
                <span className="text-[10px] font-black text-[#F25623] mb-4 block tracking-widest">
                  FEATURE_MOD_{feature.code}
                </span>
                <Typography className="text-2xl font-black uppercase mb-3 tracking-tighter">
                  {feature.name}
                </Typography>
                <p className="text-[11px] leading-relaxed font-bold opacity-40 uppercase tracking-tight">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* UI PREVIEW: THE RAW TABLE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-7 bg-background border-2 border-current shadow-[8px_8px_0px_0px_rgba(var(--foreground-rgb),1)] overflow-hidden">
            <div className="bg-current text-background p-3 flex justify-between items-center">
              <span className="text-[9px] font-black uppercase tracking-widest">
                Database_Output_Preview
              </span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-background/20" />
                <div className="w-1.5 h-1.5 bg-background/20" />
              </div>
            </div>
            <div className="p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-current text-[10px] font-black uppercase opacity-40">
                    <th className="pb-2">Resident</th>
                    <th className="pb-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[10px] font-bold">
                  {[
                    { name: "Block B-12", status: "PAID" },
                    { name: "Block C-01", status: "UNPAID" },
                    { name: "Block A-09", status: "PAID" },
                    { name: "Block E-05", status: "PAID" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-current/5">
                      <td className="py-3 uppercase">{row.name}</td>
                      <td
                        className={`py-3 text-right ${
                          row.status === "UNPAID"
                            ? "text-[#F25623]"
                            : "opacity-30"
                        }`}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Typography
                variant="h2"
                className="text-4xl font-black uppercase tracking-tighter leading-none"
              >
                the first <br /> <span className="italic">deployment.</span>
              </Typography>
              <div className="h-1 w-16 bg-current" />
            </div>
            <p className="text-xs font-bold leading-relaxed opacity-60 uppercase">
              This was where I learned the basics of MVC. Managing models for
              residents, controllers for processing payments, and blade
              templates for the UI. Nothing fancy, but it worked for the admin.
            </p>
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-black opacity-30">
                <div className="w-2 h-2 bg-[#F25623]" />
                <span>LARAVEL_BEGINNER_LEVEL</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black opacity-30">
                <div className="w-2 h-2 bg-[#F25623]" />
                <span>MYSQL_FLAT_RELATION</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-20 border-t border-current/10 py-12 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[9px] font-black tracking-[0.5em] uppercase text-center">
          First Project — 2024 Archive // Simple CRUD System
        </span>
      </footer>
    </main>
  );
}
