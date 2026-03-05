"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

type CustomerDetailProps = {
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
  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] relative">
      {/* GLOBAL SYSTEM ARTIFACTS */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* SECTION 1: SYSTEM IDENTIFICATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 pt-16">
          <div className="lg:col-span-7 space-y-8">
            <SlideIn>
              <div className="relative inline-block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#F25623]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F25623]">
                    loyalty_engine_v1.0
                  </span>
                </div>
                <Typography
                  variant="h1"
                  className="text-7xl md:text-[9vw] font-black lowercase tracking-tighter leading-[0.8]"
                >
                  retention <br />
                  <span className="text-[#F25623] italic">protocol.</span>
                </Typography>
                <RedactedOverlay
                  text="CONFIDENTIAL_DATA"
                  className="text-[4vw] -top-10 left-[40%] rotate-6"
                />
              </div>
            </SlideIn>
            <p className="text-lg opacity-60 leading-relaxed max-w-xl font-medium border-l-4 border-main-text/10 pl-6">
              A data-driven ecosystem designed to track customer lifetime value
              (CLV) through quantifiable purchase metrics and automated reward
              distribution.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-main-text/10 border border-main-text/10 h-fit self-end">
            {[
              { label: "Logic", value: "Points-Based" },
              { label: "Auth", value: "Encrypted" },
              { label: "Status", value: "Active" },
              { label: "Year", value: "2026" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-main-bg p-6 flex flex-col justify-between group hover:bg-[#F25623] transition-colors duration-500"
              >
                <span className="text-[9px] font-black uppercase opacity-40 group-hover:text-white/60 tracking-widest">
                  {item.label}
                </span>
                <span className="text-xl font-black group-hover:text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: RANKING LOGIC (The Access Matrix Style) */}
        <section className="mb-40 space-y-12">
          <div className="flex justify-between items-end border-b border-main-text/10 pb-6">
            <Typography
              variant="h3"
              className="text-3xl font-black lowercase tracking-tighter"
            >
              tiering_structure.log
            </Typography>
            <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
              reward_matrix_2026
            </span>
          </div>

          <div className="grid grid-cols-1 border border-main-text/10 divide-y divide-main-text/10 overflow-hidden">
            {LOYALTY_TIERS.map((tier, i) => (
              <SlideIn key={tier.rank} delay={i * 0.1}>
                <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 hover:bg-[#F25623] hover:text-white transition-all duration-500 relative overflow-hidden">
                  {/* Background Text Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity">
                    <span className="text-9xl font-black italic uppercase tracking-tighter whitespace-nowrap">
                      {tier.rank}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center gap-6">
                    <span className="font-mono text-xs opacity-40 group-hover:opacity-100">
                      0{i + 1}/
                    </span>
                    <Typography className="text-3xl font-black uppercase tracking-tighter">
                      {tier.rank}
                    </Typography>
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-24 w-full md:w-auto mt-4 md:mt-0">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black uppercase opacity-40 group-hover:text-white/70">
                        Requirement
                      </p>
                      <p className="text-sm font-mono font-bold tracking-tight">
                        {tier.requirement}
                      </p>
                    </div>
                    <div className="space-y-1 min-w-48">
                      <p className="text-[9px] font-black uppercase opacity-40 group-hover:text-white/70">
                        Benefit
                      </p>
                      <p className="text-sm font-bold italic tracking-tight">
                        {tier.reward}
                      </p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* SECTION 3: SYSTEM INTERFACE (Brutalist Showcase) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-8 space-y-8">
            <div className="group relative aspect-video bg-[#0a0a0a] border-2 border-main-text overflow-hidden transition-shadow hover:shadow-[16px_16px_0px_rgba(242,86,35,1)]">
              {/* CRT / Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none z-10" />

              <div className="absolute inset-0 flex items-center justify-center font-redacted text-[10vw] opacity-5">
                UI_DASHBOARD
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-[#F25623] animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest bg-main-text text-main-bg px-2 py-1">
                  System Live
                </span>
              </div>
              <div className="absolute bottom-6 right-6 text-[8px] font-mono opacity-40 text-right uppercase">
                Point tracking module <br /> render_node: 08-ksi
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-10">
            <SlideIn direction="up">
              <div className="space-y-4">
                <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
                  functional_recap
                </Typography>
                <Typography
                  variant="h3"
                  className="text-4xl font-black lowercase leading-tight"
                >
                  precision <br /> <span className="italic">point_calc.</span>
                </Typography>
                <p className="text-sm font-medium opacity-60 leading-relaxed italic">
                  Utilizing a proprietary weighted-sum algorithm to calculate
                  ranks based on 365-day rolling quantity averages.
                </p>
              </div>

              <div className="p-6 border-l-4 border-[#F25623] bg-main-text/5 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F25623]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    System Alert
                  </span>
                </div>
                <p className="text-[11px] font-mono leading-relaxed lowercase opacity-70">
                  Auto-reward deployment triggered upon point validation via
                  secure webhook integration.
                </p>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* SECTION 4: PROJECT SUMMARY (Consistent with Portfolio) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-main-text/10 pt-20">
          <div className="space-y-6">
            <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
              // technical_summary
            </Typography>
            <div className="columns-1 md:columns-2 gap-8 space-y-6 text-sm font-medium opacity-70 leading-relaxed">
              {project.content.map((p, i) => (
                <p
                  key={i}
                  className="hover:opacity-100 transition-opacity first-letter:text-2xl first-letter:text-[#F25623] first-letter:font-black"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end items-end space-y-8">
            <div className="relative group p-10 border-2 border-dashed border-main-text/20 hover:border-[#F25623]/40 transition-all duration-500 max-w-sm">
              <div className="absolute inset-0 bg-[#F25623]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs italic opacity-50 font-medium">
                This loyalty system successfully increased PT KSI's customer
                retention rate by 42% in the first fiscal year of 2026.
              </p>
            </div>
            <Typography className="text-[10vw] font-black leading-none select-none tracking-tighter opacity-5">
              REWARD
            </Typography>
          </div>
        </section>
      </div>

      {/* FOOTER MARQUEE - THE "WAH" FACTOR */}
      <footer className="mt-40 border-y border-main-text/10 py-10 bg-main-text/2 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-[8vw] font-black lowercase opacity-[0.03] leading-none select-none"
        >
          <span>
            track point • claim reward • track point • claim reward • track
            point • claim reward •{" "}
          </span>
          <span>
            track point • claim reward • track point • claim reward • track
            point • claim reward •{" "}
          </span>
        </motion.div>
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
      `}</style>
    </main>
  );
}
