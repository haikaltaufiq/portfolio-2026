"use client";

import FadeIn from "../../animation/FadeIn";
import ScrollSvg from "../../animation/ScrollSvg";
import SlideIn from "../../animation/SlideIn";
import Typography from "../../ui/Typhography";
import lineAnim from "../../../lotties/men-white.json";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AboutSection() {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  const RedactedOverlay = ({
    text,
    className = "",
  }: {
    text: string;
    className?: string;
  }) => (
    <Typography
      className={`absolute font-redacted text-[#F25623] opacity-30 mix-blend-difference pointer-events-none tracking-normal whitespace-nowrap ${className}`}
    >
      {text}
    </Typography>
  );

  const MarqueeText = ({ text }: { text: string }) => (
    <div className="overflow-hidden whitespace-nowrap border-y-2 border-main-text py-4 mt-20 rotate-1 bg-main-text text-main-bg">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="gap-8 items-center inline-block"
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-4xl font-black lowercase italic tracking-tighter whitespace-nowrap"
          >
            {text} — <span className="font-redacted">redacted information</span>{" "}
            —
          </span>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-transparent py-20 mt-10 selection:bg-[#F25623]">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none hidden md:block">
          <Typography className="text-[15vw] font-black leading-none">
            BIOGRAPHY
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
          {/* KIRI: Profile Card (Industrial Style) */}
          <div className="md:col-span-7">
            <SlideIn delay={0.2}>
              <div className="relative group">
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#F25623] z-20" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#F25623] z-20" />

                <div className="bg-main-text rounded-sm p-5 text-black relative overflow-hidden">
                  {/* System Header Card */}
                  <div className="flex justify-between items-center mb-4 border-b border-black/10 pb-2">
                    <div className="flex gap-1.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-black/20"
                        />
                      ))}
                    </div>
                    <Typography className="text-[9px] font-black uppercase tracking-widest opacity-40">
                      Identity_Card_v1.0
                    </Typography>
                  </div>

                  {/* Image Container */}
                  <div className="aspect-8/3 w-full bg-[#0d0d0d] rounded-sm mb-6 overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={lineAnim}
                      loop={true}
                      autoplay
                      className="w-full h-full scale-150 group-hover:scale-160 transition-transform duration-700"
                    />
                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F25623]/10 to-transparent h-1/2 w-full animate-pulse pointer-events-none" />
                  </div>

                  <div className="relative mb-6">
                    <Typography
                      variant="h2"
                      className="font-poppins font-black text-5xl tracking-tighter lowercase leading-none"
                    >
                      haikal taufiq.
                    </Typography>
                    <div className="h-1 w-24 bg-[#F25623] mt-2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <p className="text-[13px] text-black/80 leading-relaxed font-bold lowercase">
                      Multimedia Engineering Technology student at Politeknik
                      Negeri Batam, experienced in web development, mobile apps,
                      and 3D game creation.
                    </p>
                    <div className="border-l border-black/10 pl-4 space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                        <span>Sector:</span>
                        <span className="text-[#F25623]">Tech/Dev</span>
                      </div>
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                        <span>Status:</span>
                        <span>Active</span>
                      </div>
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                        <span>Location:</span>
                        <span>BTM_ID</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* KANAN: Content Sections */}
          <div className="md:col-span-5 flex flex-col gap-12 pt-4">
            {/* About Me Section */}
            <SlideIn delay={0.4}>
              <div className="relative group">
                <div className="relative inline-block">
                  <Typography
                    variant="h2"
                    className="font-poppins font-black text-4xl lowercase relative z-10"
                  >
                    about me.
                  </Typography>
                  <RedactedOverlay
                    text="tanya aja"
                    className="text-[50px] -top-3 left-0 opacity-10 group-hover:opacity-30 transition-opacity"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-main-text opacity-70 text-[14px] leading-relaxed font-medium">
                    I combine technical skills in front-end and back-end
                    development with a creative approach to multimedia
                    solutions.
                  </p>
                  <div className="w-12 h-0.5 bg-[#F25623]" />
                </div>
              </div>
            </SlideIn>

            {/* Work/Interest Section */}
            <SlideIn delay={0.6}>
              <div className="relative border-2 border-main-text/10 bg-main-text/5 p-8 group hover:border-[#F25623]/30 transition-colors">
                {/* Decorative Bit */}
                <div className="absolute top-0 right-0 p-2 text-[8px] font-mono opacity-20 uppercase tracking-tighter">
                  File_Ref: HT_009
                </div>

                <div className="relative inline-block mb-8">
                  <Typography
                    variant="h2"
                    className="font-poppins font-black text-3xl lowercase leading-none"
                  >
                    interested in
                  </Typography>
                  <RedactedOverlay
                    text="coding mampus"
                    className="text-[30px] top-0 left-0"
                  />
                </div>

                <div className="space-y-6 relative">
                  <div className="relative">
                    <p className="text-main-text opacity-80 text-[13px] leading-relaxed font-mono">
                      {">"} fullstack architecture
                      <br />
                      {">"} interactive 3d experiences
                      <br />
                      {">"} mobile system integration
                    </p>
                    <RedactedOverlay
                      text="error itu seni bjir"
                      className="text-[20px] -top-2 left-0 opacity-10 group-hover:opacity-40"
                    />
                  </div>

                  <p className="text-main-text/50 text-[11px] uppercase tracking-widest font-black leading-tight italic">
                    "Driven by continuous learning and the chaos of innovation."
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-10 flex items-center gap-3 text-main-text group"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#F25623] transition-colors">
                    access_full_bio
                  </span>
                  <div className="w-8 h-8 rounded-full border border-main-text/30 flex items-center justify-center text-[10px] group-hover:bg-[#F25623] group-hover:border-[#F25623] transition-all">
                    →
                  </div>
                </motion.button>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
      {/* MARQUEE SECTION */}
      <section className="-mx-6">
        <MarqueeText text="i build digital chaos" />
      </section>
    </section>
  );
}
