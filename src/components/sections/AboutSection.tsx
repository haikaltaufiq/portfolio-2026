"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SlideIn from "../animation/SlideIn";
import Typography from "../ui/Typhography";
import lineAnim from "../../lotties/men-white.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// --- Sub-Components (Tetep Sama) ---
const RedactedOverlay = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.3 }}
    whileHover={{ opacity: 0.6, scale: 1.1, x: [0, -2, 2, 0] }}
    className="absolute pointer-events-none"
  >
    <Typography
      className={`font-redacted text-[#F25623] mix-blend-difference tracking-normal whitespace-nowrap ${className}`}
    >
      {text}
    </Typography>
  </motion.div>
);

const MarqueeText = ({
  text,
  speed = 20,
}: {
  text: string;
  speed?: number;
}) => {
  const marqueeContent = (
    <div className="flex flex-none gap-4 items-center py-2">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="text-2xl md:text-4xl font-black uppercase tracking-tighter whitespace-nowrap"
        >
          {text} <span className="text-[#F25623]">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative w-full overflow-hidden border-y-2 border-main-text bg-main-text text-main-bg -rotate-1 select-none group my-20">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {marqueeContent}
        {marqueeContent}
      </motion.div>
    </div>
  );
};

// --- Main Component ---
export default function AboutSection() {
  const lottieRef = useRef<any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (lottieRef.current) lottieRef.current.setSpeed(0.5);
  }, []);

  return (
    <section className="relative min-h-screen bg-transparent pt-20 pb-10 mt-10 selection:bg-[#F25623] overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Floating Background Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.03 }}
          // 'block' bikin dia muncul di mobile, 'md:right-10' buat posisi desktop
          className="absolute top-10 -right-4 md:-right-45 select-none pointer-events-none z-0"
        >
          <Typography className="text-[30vw] md:text-[12vw] font-black leading-[0.7] md:leading-[0.75] tracking-tighter flex flex-col items-end italic opacity-50 md:opacity-100">
            <span>BIO</span>
            <span>GRAPHY</span>
          </Typography>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
          {/* RIGHT COLUMN (About Text) - Sekarang ditaruh di atas secara kode, tapi diatur ordernya */}
          <div className="md:col-span-5 flex flex-col gap-12 pt-4 order-first md:order-last">
            <SlideIn delay={0.2}>
              <div className="relative group cursor-default">
                <div className="relative inline-block">
                  <Typography
                    variant="h2"
                    className="font-poppins font-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl lowercase tracking-tighter relative z-10 transition-transform group-hover:translate-x-2"
                  >
                    about me.
                  </Typography>
                  <RedactedOverlay
                    text="tanya aja"
                    className="text-8xl top-1 left-0"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-main-text opacity-70 text-[14px] leading-relaxed font-medium">
                    I combine technical skills in front-end and back-end
                    development with a creative approach to multimedia
                    solutions.
                  </p>
                  <motion.div
                    whileInView={{ scaleX: [0, 1] }}
                    className="w-12 h-0.5 bg-[#F25623] origin-left"
                  />
                </div>
              </div>
            </SlideIn>

            <SlideIn delay={0.4}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(242, 86, 35, 0.08)" }}
                className="relative border-2 border-main-text/10 bg-main-text/5 p-8 group hover:border-[#F25623]/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-2 text-[8px] font-mono opacity-20 uppercase tracking-tighter group-hover:opacity-100 transition-opacity">
                  File Ref: HT 009 // {new Date().getFullYear()}
                </div>
                <div className="relative inline-block mb-8">
                  <Typography
                    variant="h2"
                    className="font-poppins font-black text-3xl lowercase leading-none z-10 relative"
                  >
                    interested in
                  </Typography>
                </div>
                <div className="space-y-6 relative">
                  <div className="relative">
                    <p className="text-main-text opacity-80 text-[13px] leading-relaxed font-mono group-hover:text-white transition-colors">
                      {">"} fullstack architecture <br />
                      {">"} interactive ui experiences <br />
                      {">"} mobile system integration
                    </p>
                    <RedactedOverlay
                      text="error itu seni"
                      className="text-[20px] -top-2 left-0 opacity-10 group-hover:opacity-20"
                    />
                  </div>
                  <p className="text-main-text/50 text-[11px] uppercase tracking-widest font-semibold leading-tight group-hover:text-[#F25623] transition-colors">
                    "Driven by continuous learning and the chaos of innovation."
                  </p>
                </div>
                <motion.a
                  href="/about"
                  whileHover={{ x: 10 }}
                  className="mt-5 flex items-center gap-3 text-main-text group/btn w-fit"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] group-hover/btn:text-[#F25623] transition-colors">
                    access full bio
                  </span>
                  <div className="w-8 h-8 rounded-full border border-main-text/30 flex items-center justify-center text-[10px] group-hover/btn:bg-[#F25623] group-hover/btn:border-[#F25623] transition-all">
                    →
                  </div>
                </motion.a>
              </motion.div>
            </SlideIn>
          </div>

          {/* LEFT COLUMN (Identity Card) */}
          <div className="md:col-span-7 order-last md:order-first">
            <SlideIn delay={0.6}>
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative group cursor-crosshair"
              >
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#F25623] z-20 transition-all group-hover:-top-4 group-hover:-left-4" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#F25623] z-20 transition-all group-hover:-bottom-4 group-hover:-right-4" />

                <div className="bg-main-text rounded-sm p-5 text-black relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-size-[100%_2px,3px_100%] pointer-events-none" />
                  <div className="flex justify-between items-center mb-4 border-b border-black/10 pb-2">
                    <div className="flex gap-1.5">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: i * 0.2,
                          }}
                          className="w-2 h-2 rounded-full bg-[#F25623]"
                        />
                      ))}
                    </div>
                    <Typography className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                      Identity Card
                    </Typography>
                  </div>

                  <div className="aspect-video w-full bg-[#0d0d0d] rounded-sm mb-6 overflow-hidden flex items-center justify-center relative group-hover:shadow-[0_0_30px_rgba(242,86,35,0.2)] transition-shadow">
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={lineAnim}
                      loop={true}
                      autoplay
                      className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="relative mb-6">
                    <motion.div whileHover={{ x: 5 }}>
                      <Typography
                        variant="h2"
                        className="font-poppins font-black text-4xl md:text-5xl tracking-tighter lowercase leading-none"
                      >
                        haikal taufiq.
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 96 }}
                      className="h-1 bg-[#F25623] mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
                    <p className="text-[13px] text-black/80 leading-relaxed font-semibold lowercase">
                      Versatile Software Engineer specializing in Multimedia
                      Technology. I combine technical rigour with a deep
                      understanding of digital ecosystems.
                    </p>
                    <div className="border-l border-black/10 pl-4 space-y-2">
                      {[
                        {
                          label: "Sector",
                          value: "Tech/Dev",
                          color: "text-[#F25623]",
                        },
                        {
                          label: "Status",
                          value: "Active",
                        },
                        { label: "Location", value: "BTM ID" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                        >
                          <span>{item.label}:</span>
                          <span className={item.color || ""}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </div>
      <MarqueeText text="SYSTEM ONLINE ~ STABLE BUILD 2026 ~ MULTIMEDIA ENGINEERING" />
    </section>
  );
}
