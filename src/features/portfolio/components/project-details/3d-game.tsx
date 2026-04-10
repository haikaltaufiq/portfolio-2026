"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectDetail } from "@/src/data/project";
import Typography from "@/src/components/ui/Typhography";
import { motion, AnimatePresence } from "framer-motion";
import SlideIn from "@/src/components/animation/SlideIn";
import Image from "next/image";

type FishingGameDetailProps = {
  project: ProjectDetail;
};

// --- SUB-COMPONENTS GOKS ---
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

const GAME_SPECS = [
  { label: "Engine", value: "Unity 3D", sub: "URP Pipeline" },
  { label: "Hardware", value: "Arduino Uno", sub: "UnoJoy Firmware" },
  { label: "Connection", value: "Serial", sub: "Baud: 115200" },
  { label: "Physics", value: "Raycast", sub: "Water Displacement" },
];

export default function FishingGameDetail({ project }: FishingGameDetailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
    }
  }, []);

  const galleryImages = [
    { src: "/assets/fishing-game/home-screen.png", label: "UI SYSTEM CORE" },
    { src: "/assets/fishing-game/fish-card.png", label: "FISH CARD UI" },
    { src: "/assets/fishing-game/device.png", label: "HARDWARE" },
    { src: "/assets/fishing-game/fishing-idle.png", label: "FISHING IDLE" },
  ];

  return (
    <main className="min-h-screen bg-transparent text-main-text md:pt-24 pb-10 overflow-x-hidden selection:bg-[#F25623] selection:text-white relative">
      {/* Background Elements - Biar seirama sama Compro */}
      <div className="fixed inset-0 -z-20 bg-main-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-7xl px-6 relative space-y-32">
        {/* SECTION 1: HERO & STATS (Style HRIS) */}
        <section className="relative pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Background Text Dekorasi sperti HRIS */}
          <div className="absolute top-58 -left-2 md:-left-12 text-[24vw] md:text-[16vw] font-black opacity-[0.02] leading-20 md:leading-47 select-none tracking-[-5] md:tracking-[-10] pointer-events-none -rotate-2 uppercase">
            Fishing GAME
          </div>

          <div className="lg:col-span-5 md:mb-15 space-y-6 relative">
            <SlideIn>
              <div className="inline-block px-3 py-1 mb-6 border border-[#F25623] text-[#F25623] text-[10px] font-black uppercase tracking-widest bg-[#F25623]/5">
                Project Based Learning // IoT
              </div>
              <Typography
                variant="h1"
                className="font-poppins font-black text-[10vw] md:text-[8vw] leading-[0.8] lowercase tracking-tighter"
              >
                fishing <br />
                <span className="text-[#F25623]">simulator.</span>
              </Typography>
              <RedactedOverlay
                text="VERSION"
                className="text-[10vw] -top-5 rotate-2"
              />

              <p className="text-sm opacity-60 leading-relaxed max-w-sm font-medium mt-6">
                A Project-Based Learning initiative integrating Arduino hardware
                with Unity 3D. Engineered a high-fidelity fishing simulator that
                bridges physical inputs with real-time digital environments.
              </p>
            </SlideIn>
          </div>

          <div className="hidden md:grid lg:col-span-7 ml-25 grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Hardware Sync", value: "Real-time", code: "01" },
              { label: "Performance", value: "Optimized", code: "02" },
              { label: "Input Logic", value: "Arduino", code: "03" },
              { label: "Render Engine", value: "Unity URP", code: "04" },
            ].map((stat, i) => (
              <SlideIn key={i} delay={i * 0.1}>
                <div className="relative border border-white/10 p-10 flex flex-col justify-between group overflow-hidden transition-all duration-700 ease-in-out hover:border-[#F25623]/50 h-44">
                  {/* Background Decorative Typography */}
                  <span className="absolute -bottom-4 -right-4 text-8xl font-black text-white/3 italic pointer-events-none group-hover:text-[#F25623]/10 transition-colors duration-500">
                    {stat.code}
                  </span>

                  {/* Top Section */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-0.5 w-0 group-hover:w-8 bg-[#F25623] transition-all duration-500 ease-out"></span>
                      <span className="text-[11px] font-bold opacity-50 group-hover:opacity-100 group-hover:text-[#F25623] uppercase tracking-[0.2em] transition-all">
                        {stat.label}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="relative z-10">
                    <p className="text-4xl font-black tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {stat.value}
                      <span className="text-[#F25623] opacity-0 group-hover:opacity-100 transition-opacity">
                        .
                      </span>
                    </p>
                  </div>

                  {/* Animated Corner Border */}
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#F25623] group-hover:w-full transition-all duration-700" />
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#F25623] group-hover:w-full transition-all duration-700" />
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* SECTION 2: VIDEO DEMO (Style Compro) */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-main-text/10 pb-6">
            <Typography variant="h3" className="text-3xl font-black lowercase">
              preview
            </Typography>
            <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
              Visual Sync
            </span>
          </div>

          <div className="relative aspect-video w-full bg-[#0a0a0a] border border-main-text/20 overflow-hidden group shadow-2xl">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out z-0 scale-105 group-hover:scale-100"
            >
              <source src="/assets/fishing-game/demo.mp4" type="video/mp4" />
            </video>

            {/* Overlay Elements ala Compro/HRIS */}
            <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none z-10" />
            <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 border border-white/10">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest">
                  LIVE_BOOT_SEQUENCE
                </span>
              </div>
              <span className="text-[8px] font-mono text-white/40 italic">
                3.0x_playback_speed
              </span>
            </div>

            <div className="absolute bottom-8 left-8 z-20 space-y-2">
              <div className="bg-main-text text-main-bg px-4 py-1 text-[10px] font-black uppercase tracking-tighter inline-block">
                system_objective
              </div>
              <p className="text-white text-xl font-black tracking-tighter drop-shadow-lg lowercase">
                Integrasi Serial Port Arduino Uno &lt;&gt; Unity Logic.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SYSTEM SPECS (Style Grid) */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <Typography
              variant="h3"
              className="text-3xl font-black lowercase tracking-tighter"
            >
              System Modules.
            </Typography>
            <div className="h-px flex-1 bg-main-text/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-main-text/20 bg-main-text/2">
            {GAME_SPECS.map((spec, i) => (
              <div
                key={i}
                className="p-10 border-r border-b border-main-text/20 hover:bg-[#F25623]/5 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F25623] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="text-[#F25623] font-mono font-black text-xs mb-4 block">
                  [0{i + 1}]
                </span>
                <Typography className="text-2xl font-black lowercase mb-2">
                  {spec.label}
                </Typography>
                <p className="text-[11px] font-bold opacity-50 uppercase tracking-widest leading-relaxed">
                  {spec.value} <br />
                  <span className="text-[#F25623]/60 italic">{spec.sub}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: ASSETS GALLERY (Gak kepotong & Estetik) */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-main-text/10 pb-6">
            <Typography variant="h3" className="text-3xl font-black lowercase">
              internal_assets
            </Typography>
            <span className="text-[10px] hidden md:block font-mono opacity-40 uppercase tracking-[0.3em]">
              Resource_Bank_04
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, i) => (
              <SlideIn key={i} delay={i * 0.1}>
                <div className="group relative aspect-video border border-main-text/10 bg-[#0a0a0a] overflow-hidden p-6 flex items-center justify-center">
                  {/* Blur background buat ngisi area kosong biar gak kepotong */}
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover opacity-10 blur-xl group-hover:opacity-20 transition-opacity"
                  />

                  <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 drop-shadow-2xl"
                    />
                  </div>

                  <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#F25623] text-white px-3 py-1 font-mono text-[9px] font-black uppercase tracking-widest">
                      {img.label}
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-40 border-t border-main-text/10 py-12 bg-main-text/2 opacity-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[9px] uppercase tracking-widest space-y-1">
            <p>Project: 3D Fishing Simulator</p>
            <p>Platform: Unity 3D </p>
          </div>
          <Typography className="text-[10px] font-black uppercase tracking-[0.5em] italic">
            Build // Prototype // 2026.
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
        .bg-scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.4) 51%
          );
          background-size: 100% 4px;
        }
      `}</style>
    </main>
  );
}
