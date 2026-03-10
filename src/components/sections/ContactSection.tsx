"use client";

import ContactCard from "@/src/features/portfolio/components/ContactCardProps";
import RedactedOverlay from "@/src/features/portfolio/components/RedactedOverlay";
import SlideIn from "../animation/SlideIn";
import Typography from "../ui/Typhography";
import { motion } from "framer-motion";

const SOCIALS = [
  {
    title: "LinkedIn",
    label: "Professional Network",
    href: "https://www.linkedin.com/in/m-taufiq-karim-haikal-3050b1284",
  },
  {
    title: "Email",
    label: "Direct Inquiry",
    href: "mailto:haikaltaufiq4@gmail.com",
  },
  {
    title: "GitHub",
    label: "Code Repositories",
    href: "https://github.com/HaikalTaufiq",
  },
  {
    title: "Instagram",
    label: "Digital Playground",
    href: "https://instagram.com/haikal.taufiq",
  },
];

export default function ContactSection() {
  return (
    <section className="relative min-h-screen py-32 bg-transparent text-main-text overflow-hidden selection:bg-[#F25623]">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Typography className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.02] whitespace-nowrap select-none">
          REACH OUT
        </Typography>
        <div className="absolute top-0 left-1/4 w-px h-full bg-main-text/5 hidden md:block" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-main-text/5 hidden md:block" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: DRAMATIC HEADER & FORM */}
          <div className="lg:col-span-5 relative">
            <SlideIn direction="up">
              <div className="relative inline-block group">
                <div className="absolute -left-6 top-0 w-2 h-full bg-[#F25623] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <Typography
                  variant="h1"
                  className="font-poppins font-black text-8xl md:text-[140px] leading-[0.75] lowercase mb-8 tracking-tighter"
                >
                  let's <br />
                  <span className="text-[#F25623]">talk.</span>
                </Typography>

                <RedactedOverlay
                  text="jirlahbr"
                  className="text-[6vw] md:text-[100px] -top-8 -left-4 opacity-10 blur-[2px]"
                />
              </div>

              <div className="space-y-8 mt-2">
                <p className="max-w-sm text-sm font-semibold leading-tight opacity-80">
                  "Have a vision to build or a system to scale? I'm ready to
                  turn complex ideas into functional reality. Let’s connect and
                  build something impactful."
                </p>

                {/* EMAIL FORM FIELD */}
                <form className="mt-12 space-y-10 max-w-md">
                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F25623] mb-2 block">
                      your email address
                    </label>
                    <input
                      type="email"
                      suppressHydrationWarning
                      placeholder="someone@example.com"
                      className="w-full bg-transparent border-b-2 border-main-text/10 py-4 outline-none focus:border-[#F25623] transition-colors duration-300 font-mono text-sm"
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F25623] mb-2 block">
                      message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="what's on your mind?"
                      className="w-full bg-transparent border-b-2 border-main-text/10 py-4 outline-none focus:border-[#F25623] transition-colors duration-300 font-mono text-sm resize-none"
                    />
                  </div>

                  <button className="relative px-8 py-4 bg-main border-2 border-[#F25623] text-main-text font-black uppercase text-[10px] tracking-[0.4em] overflow-hidden group/btn">
                    <span className="relative z-10 group-hover/btn:text-main-text transition-colors duration-300">
                      send message
                    </span>
                    <div className="absolute inset-0 bg-[#F25623] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>

                <div className="flex flex-col gap-4 pt-10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <Typography className="text-[12px] font-semibold uppercase tracking-[0.4em]">
                      System Status: Ready to Build
                    </Typography>
                  </div>
                  <div className="w-24 h-0.5 bg-main-text" />
                </div>
              </div>
            </SlideIn>
          </div>

          {/* RIGHT: CONTACT GRID SYSTEM */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {SOCIALS.map((social, index) => (
                <ContactCard
                  key={social.title}
                  title={social.title}
                  label={social.label}
                  href={social.href}
                  index={index}
                />
              ))}
            </div>

            <SlideIn delay={0.5}>
              <div className="mt-12 group relative p-10 border-2 border-main-text/10 bg-main-text/5 hover:border-[#F25623]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[#F25623]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
                  <div className="space-y-2">
                    <Typography className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#F25623]">
                      current location
                    </Typography>
                    <Typography className="text-2xl font-black lowercase tracking-tighter">
                      Batam, Indonesia.
                    </Typography>
                  </div>

                  <div className="text-right space-y-2">
                    <Typography className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                      Local Time
                    </Typography>
                    <Typography className="text-xl font-mono font-bold">
                      {new Date().getHours().toString().padStart(2, "0")}:
                      {new Date().getMinutes().toString().padStart(2, "0")}{" "}
                      GMT+7
                    </Typography>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-main-text/10 flex justify-between items-center relative z-10">
                  <Typography className="text-[9px] font-semibold uppercase tracking-[0.4em] opacity-30">
                    © 2026 HAIKAL TAUFIQ — ALL RIGHTS RESERVED
                  </Typography>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F25623] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-main-text/20 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-main-text/20 rounded-full" />
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
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
    </section>
  );
}
