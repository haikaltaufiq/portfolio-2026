"use client";

import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";

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
  const stats = [
    { label: "Performance", before: 71, after: 92 },
    { label: "Accessibility", before: 84, after: 95 },
    { label: "Best Practices", before: 100, after: 100 },
    { label: "SEO", before: 46, after: 91 },
  ];

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* BACKGROUND ELEMENTS - CONSISTENT WITH CONTACT PAGE */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HEADER - INDUSTRIAL STYLE */}
        <section className="relative mb-32">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="relative">
              <SlideIn direction="up">
                <div className="relative z-10">
                  <Typography
                    variant="h1"
                    className="font-poppins font-black text-[12vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
                  >
                    system <br />
                    <span className="text-[#F25623]">overhaul.</span>
                  </Typography>
                  <RedactedOverlay
                    text="VERSION: ENTERPRISE_2.0"
                    className="text-[3vw] -top-8 left-[20%] opacity-20 -rotate-3"
                  />
                </div>
              </SlideIn>
              <div className="absolute -top-10 -left-10 text-[16vw] font-black opacity-[0.02] select-none tracking-tight pointer-events-none -rotate-2">
                PROJECT
              </div>
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
                    "Redesigning PT Kreatif System Indonesia with an edgy,
                    enterprise-standard aesthetic. Built for performance,
                    optimized for scale."
                  </Typography>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* SECTION 2: LIGHTHOUSE LOGS - SYSTEM GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-40">
          <div className="lg:col-span-4 space-y-4">
            <Typography className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
              optimization_log
            </Typography>
            <div className="h-px w-full bg-main-text/10" />
            <p className="text-xs font-mono opacity-50 italic">
              // metrics showing significant leap from legacy systems
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <SlideIn key={stat.label} delay={i * 0.1}>
                <div className="group relative p-6 border border-main-text/20 bg-main-text/2 hover:border-[#F25623]/50 transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                      {stat.label}
                    </span>
                    <span className="text-[10px] font-black text-[#F25623]">
                      NODE_{i + 1}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#00CC66]">
                      {stat.after}
                    </span>
                    <span className="text-xs opacity-30 font-mono line-through">
                      PREV_{stat.before}
                    </span>
                  </div>
                  {/* Progress bar subtle */}
                  <div className="mt-4 h-px w-full bg-main-text/10 overflow-hidden">
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
          </div>
        </section>

        {/* SECTION 3: AI CHATBOT FEATURE - THE "STATUS LOG" STYLE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-40">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SlideIn>
              <div className="group relative p-8 bg-main-text text-main-bg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F25623]/10 to-transparent h-20 w-full animate-scan z-0" />
                <div className="relative z-10 space-y-6">
                  <Typography
                    variant="h3"
                    className="text-2xl font-black lowercase flex items-center gap-2 text-main-bg"
                  >
                    <span className="w-1.5 h-6 bg-[#F25623]" /> ai-frontline.exe
                  </Typography>
                  <div className="p-4 border border-main-bg/10 bg-main-bg/5 backdrop-blur-sm space-y-3">
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-[#F25623] rounded-full animate-pulse" />
                      <p className="text-[10px] font-mono leading-none">
                        Status: Intelligent Agent Active
                      </p>
                    </div>
                    <p className="text-[11px] font-bold opacity-70 leading-relaxed italic">
                      "Custom-trained chatbot handling 24/7 procedures, service
                      inquiries, and automated lead capture for PT KSI."
                    </p>
                  </div>
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest opacity-40">
                    <span>latency: 0.2ms</span>
                    <span>NLU_ENABLED</span>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Typography className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F25623]">
              core_features
            </Typography>
            <Typography
              variant="h2"
              className="text-5xl font-black lowercase tracking-tighter"
            >
              clean design meets <br />{" "}
              <span className="italic underline decoration-[#F25623]">
                automation.
              </span>
            </Typography>
            <p className="text-base opacity-60 leading-relaxed max-w-lg">
              We integrated a sophisticated AI agent that serves as the
              company&apos;s digital concierge, providing instant information on
              procedures and services while maintaining a minimalist UI.
            </p>
          </div>
        </section>

        {/* SECTION 4: CONTENT WRAP-UP */}
        <section className="border-t border-main-text/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <Typography className="text-xs font-black uppercase tracking-widest opacity-30">
                // technical_summary
              </Typography>
              <div className="space-y-6 text-sm font-medium opacity-70 leading-relaxed">
                {project.content.map((p, i) => (
                  <p
                    key={i}
                    className="border-l-2 border-main-text/5 pl-6 hover:border-[#F25623] transition-colors"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative aspect-video bg-[#0a0a0a] border border-main-text/10 flex items-center justify-center overflow-hidden">
              <RedactedOverlay
                text="ENTERPRISE_UI_RENDER"
                className="text-[6vw] rotate-12 opacity-10"
              />
              <div className="absolute top-4 right-4 text-[8px] font-mono opacity-40">
                REF_ID: KSI_2026
              </div>
              <div className="text-center space-y-2">
                <div className="px-4 py-1 bg-[#F25623] text-white text-[10px] font-black uppercase tracking-widest">
                  Done
                </div>
                <p className="text-[10px] font-mono opacity-40 tracking-widest">
                  DEPLOYED TO PRODUCTION
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - CONSISTENT MARQUEE */}
      <footer className="mt-40">
        <div className="relative border-y border-main-text/20 py-8 overflow-hidden bg-main-text/2">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <Typography
                key={i}
                className="text-[10vw] font-black lowercase opacity-[0.03] leading-none"
              >
                • ultra performance • ai integrated • industry standard •
              </Typography>
            ))}
          </motion.div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
          <Typography className="text-[9px] font-black uppercase tracking-widest opacity-30 italic">
            © 2026 — [DESIGNED TO DISRUPT]
          </Typography>
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#F25623]/20" />
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
      `}</style>
    </main>
  );
}
