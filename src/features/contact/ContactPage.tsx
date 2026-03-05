"use client";

import SlideIn from "@/src/components/animation/SlideIn";
import Typography from "@/src/components/ui/Typhography";
import React from "react";
import { motion } from "framer-motion";

// --- SUB-COMPONENTS ---

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

const SocialCard = ({
  title,
  handle,
  href,
  index,
}: {
  title: string;
  handle: string;
  href: string;
  index: number;
}) => {
  return (
    <SlideIn delay={index * 0.1}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 10, backgroundColor: "#F25623", color: "#fff" }}
        className="group relative block border border-main-text/30 p-6 md:p-8 transition-all duration-300"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity overflow-hidden pointer-events-none">
          <span className="text-6xl font-black italic uppercase tracking-tighter whitespace-nowrap">
            {title} {title} {title}
          </span>
        </div>

        <div className="relative z-10 flex justify-between items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black opacity-30 group-hover:opacity-100">
                0{index + 1}/
              </span>
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl font-black lowercase tracking-tighter leading-none"
              >
                {title}.
              </Typography>
            </div>
            <div className="space-y-0">
              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] opacity-40 group-hover:text-white">
                established connection via
              </p>
              <p className="text-base md:text-lg font-bold font-mono tracking-tighter group-hover:italic">
                {handle}
              </p>
            </div>
          </div>

          <div className="w-12 h-12 border border-main-text/30 rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:border-white transition-all duration-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </motion.a>
    </SlideIn>
  );
};

// --- MAIN PAGE ---

export default function ContactPage() {
  const socialLinks = [
    {
      title: "LinkedIn",
      handle: "m taufiq karim haikal",
      href: "https://www.linkedin.com/in/m-taufiq-karim-haikal-3050b1284",
    },
    {
      title: "GitHub",
      handle: "HaikalTaufiq",
      href: "https://github.com/HaikalTaufiq",
    },
    {
      title: "Email",
      handle: "haikaltaufiq4@gmail.com",
      href: "mailto:haikaltaufiq4@gmail.com",
    },
    {
      title: "Instagram",
      handle: "@haikal.taufiq",
      href: "https://instagram.com/haikal.taufiq",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-main-text pt-24 pb-10 overflow-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* BACKGROUND ELEMENTS - FIXED & FILLING */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* DECORATIVE FLOATING TEXT */}
      <div className="fixed top-20 right-[-5%] rotate-90 origin-right opacity-[0.02] pointer-events-none select-none">
        <Typography className="text-[15vh] font-black tracking-tighter uppercase">
          Contact System v1.0
        </Typography>
      </div>
      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none hidden md:block">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-[12vw] font-black lowercase leading-none"
        >
          <span>
            available for new opportunities • let's build the future •{" "}
          </span>
          <span>
            available for new opportunities • let's build the future •{" "}
          </span>
        </motion.div>
      </div>
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* SECTION 1: HEADER - COMPACTED */}
        <section className="relative mb-16">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="relative">
              <SlideIn direction="up">
                <div className="relative z-10">
                  <Typography
                    variant="h1"
                    className="font-poppins font-black text-[15vw] md:text-[10vw] leading-[0.8] lowercase tracking-tighter"
                  >
                    get in
                    <br />
                    <span className="text-[#F25623]">touch.</span>
                  </Typography>
                  <RedactedOverlay
                    text="STATUS: URGENT"
                    className="text-[4vw] -top-6 left-[30%] opacity-20 rotate-6"
                  />
                </div>
              </SlideIn>
              <div className="absolute -top-10 -left-10 text-[16vw] font-black opacity-[0.02] select-none tracking-tight pointer-events-none -rotate-2">
                CONTACT
              </div>
            </div>

            <div className="md:w-75 mt-4">
              <SlideIn delay={0.2}>
                <div className="space-y-4">
                  <div className="flex gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-[#F25623]" />
                    ))}
                  </div>
                  <Typography className="text-sm font-bold leading-snug lowercase border-l-4 border-[#F25623] pl-4  opacity-80">
                    "Got a bold idea or just want to discuss tech over coffee?
                    Feel free to reach out, I’m always open to new connections."
                  </Typography>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SYSTEM GRID - REBALANCED */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: STATUS & SYSTEM INFO */}
          <div className="lg:col-span-5 space-y-6">
            <SlideIn>
              <div className="group relative p-8 bg-main-text text-main-bg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F25623]/10 to-transparent h-20 w-full animate-scan z-0" />

                <div className="relative z-10">
                  <Typography
                    variant="h3"
                    className="text-2xl font-black lowercase mb-6 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-6 bg-[#F25623]" /> status log
                  </Typography>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#F25623] rounded-full animate-ping absolute" />
                        <div className="w-3 h-3 bg-[#F25623] rounded-full relative" />
                      </div>
                      <div>
                        <Typography className="font-black uppercase tracking-widest text-[11px] leading-none">
                          Online / Available
                        </Typography>
                        <p className="text-[9px] font-bold opacity-50 uppercase">
                          Ready for deployment 2026
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border border-main-bg/10 bg-main-bg/5 backdrop-blur-sm">
                      <p className="text-[10px] font-mono leading-relaxed lowercase">
                        <span className="text-[#F25623]">Location:</span> Batam,
                        ID
                        <br />
                        <span className="text-[#F25623]">Latency:</span> Low
                        latency ideas
                        <br />
                        <span className="text-[#F25623]">Mood:</span> Coffee &
                        Code
                      </p>
                    </div>

                    <p className="text-[10px] font-bold leading-relaxed opacity-40 uppercase italic max-w-62.5">
                      "Quick to respond, unless I'm deep into a coding session
                      or solving a system bug."
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* DECORATIVE CROSSES/DASHES TO FILL SPACE */}
            <div className="flex justify-between px-2 opacity-20 font-mono text-xs select-none">
              <span>+</span>
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE SOCIALS - TIGHTER GAP */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-4 mb-2">
              <Typography className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">
                social nodes
              </Typography>
              <div className="h-px flex-1 bg-main-text/10" />
            </div>

            {socialLinks.map((social, index) => (
              <SocialCard
                key={social.title}
                title={social.title}
                handle={social.handle}
                href={social.href}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 3: FOOTER - ADJUSTED MARGIN */}
      <footer className="mt-24">
        <div className="relative border-y border-main-text/20 py-6 overflow-hidden bg-main-text/2">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...Array(8)].map((_, i) => (
              <Typography
                key={i}
                className="text-[10px] font-black uppercase tracking-[0.5em] opacity-10"
              >
                • batam • indonesia •
              </Typography>
            ))}
          </motion.div>
        </div>
        {/* Side Marquee for that "Industrial" feel */}

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="px-2 py-0.5 border border-main-text/30 font-black text-[9px] uppercase">
              v1.0.4
            </div>
            <Typography className="text-[9px] font-black uppercase tracking-widest opacity-30">
              all systems operational
            </Typography>
          </div>
          <Typography className="text-[9px] font-black uppercase tracking-widest italic opacity-50">
            © 2026 — [DESIGNED TO DISRUPT]
          </Typography>
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
